(function () {
  "use strict";

  var $ = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };
  var $$ = function (selector, scope) {
    return Array.prototype.slice.call(
      (scope || document).querySelectorAll(selector)
    );
  };

  /* Toast ----------------------------------------------------------------- */

  var toastEl = null;
  var toastTimer = null;

  function toast(message) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      toastEl.innerHTML =
        '<svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg><span></span>';
      document.body.appendChild(toastEl);
    }
    $("span", toastEl).textContent = message;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("is-visible");
    }, 3200);
  }

  /* Header ---------------------------------------------------------------- */

  $$(".nav-toggle").forEach(function (toggle) {
    var panel = document.getElementById(
      toggle.getAttribute("aria-controls") || "mobile-panel"
    );
    if (!panel) return;
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      var use = $("use", toggle);
      if (use) use.setAttribute("href", open ? "#i-close" : "#i-menu");
    });
  });

  var header = $(".site-header, .app-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Speech ---------------------------------------------------------------- */

  var speechOk = "speechSynthesis" in window;

  function speak(text) {
    if (!speechOk) {
      toast("Audio isn’t available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  document.addEventListener("click", function (event) {
    var speakBtn = event.target.closest("[data-speak]");
    if (!speakBtn) return;
    speak(speakBtn.getAttribute("data-speak"));
    speakBtn.classList.add("is-speaking");
    setTimeout(function () {
      speakBtn.classList.remove("is-speaking");
    }, 700);
  });

  /* Save to My Words ------------------------------------------------------ */

  function syncSave(word, saved) {
    $$('[data-save="' + word + '"]').forEach(function (button) {
      button.classList.toggle("is-saved", saved);
      button.setAttribute("aria-pressed", String(saved));
      var label = $(".save-label", button);
      if (label) label.textContent = saved ? "Saved" : "Save to My Words";
    });
  }

  document.addEventListener("click", function (event) {
    var saveBtn = event.target.closest("[data-save]");
    if (!saveBtn) return;
    var word = saveBtn.getAttribute("data-save");
    var saved = !saveBtn.classList.contains("is-saved");
    syncSave(word, saved);
    if (saved) {
      toast(
        saveBtn.getAttribute("data-save-guest") === "true"
          ? "Saved for this visit. Sign up to keep it after this week."
          : "Saved to My Words. It will come back in tomorrow’s review."
      );
    } else {
      toast("Removed from My Words.");
    }
  });

  /* Homepage sample card -------------------------------------------------- */

  var sampleReveal = document.getElementById("sample-reveal");
  if (sampleReveal) {
    sampleReveal.addEventListener("click", function () {
      var answer = document.getElementById("sample-answer");
      if (!answer) return;
      answer.hidden = false;
      sampleReveal.hidden = true;
    });
  }

  /* FAQ accordion --------------------------------------------------------- */

  $$(".faq-list details").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      $$(".faq-list details").forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* Session --------------------------------------------------------------- */

  var sessionApp = document.getElementById("session-app");
  if (sessionApp) {
    var cardData = [
      {
        word: "leverage",
        phonetic: "/ˈlev.ər.ɪdʒ/",
        pos: "verb",
        definition:
          "To use something you already have to get a better result.",
        example: "We can leverage the data from last quarter.",
        collocations: ["leverage data", "leverage experience", "leverage a network"]
      },
      {
        word: "bandwidth",
        phonetic: "/ˈbænd.wɪdθ/",
        pos: "noun",
        definition: "The time and energy someone has available for work.",
        example: "I don’t have the bandwidth for a new project this month.",
        collocations: ["spare bandwidth", "limited bandwidth", "free up bandwidth"]
      },
      {
        word: "circle back",
        phonetic: "/ˌsɜː.kəl ˈbæk/",
        pos: "phrase",
        definition:
          "To return to a topic later, usually after getting more information.",
        example: "Let’s circle back on pricing after the client call.",
        collocations: ["circle back on", "circle back later", "circle back to"]
      },
      {
        word: "stakeholder",
        phonetic: "/ˈsteɪk.həʊl.dər/",
        pos: "noun",
        definition:
          "Anyone affected by or interested in a project or decision.",
        example:
          "We need sign-off from every stakeholder before the launch.",
        collocations: ["key stakeholder", "stakeholder feedback", "stakeholder buy-in"]
      },
      {
        word: "deliverable",
        phonetic: "/dɪˈlɪv.ər.ə.bəl/",
        pos: "noun",
        definition:
          "A concrete result you promise to produce for a project.",
        example:
          "The first deliverable is a one-page summary for the board.",
        collocations: ["project deliverable", "final deliverable", "deliver on time"]
      },
      {
        word: "buy-in",
        phonetic: "/ˈbaɪ.ɪn/",
        pos: "noun",
        definition:
          "Agreement and support from the people who will be affected.",
        example:
          "The plan works, but we still need buy-in from finance.",
        collocations: ["get buy-in", "secure buy-in", "team buy-in"]
      },
      {
        word: "scope",
        phonetic: "/skəʊp/",
        pos: "noun",
        definition:
          "The work included in a project, or the limits of what it covers.",
        example: "That request is outside the scope of this sprint.",
        collocations: ["in scope", "out of scope", "scope a project"]
      },
      {
        word: "cadence",
        phonetic: "/ˈkeɪ.dəns/",
        pos: "noun",
        definition:
          "The rhythm or frequency at which something happens.",
        example: "Let’s agree on a weekly cadence for updates.",
        collocations: ["meeting cadence", "weekly cadence", "set the cadence"]
      },
      {
        word: "pushback",
        phonetic: "/ˈpʊʃ.bæk/",
        pos: "noun",
        definition:
          "Disagreement or resistance to a plan or idea.",
        example: "We got some pushback on the new timeline.",
        collocations: ["receive pushback", "expect pushback", "handle pushback"]
      }
    ];

    var index = 0;
    var revealed = false;
    var el = {
      counter: $("#session-counter"),
      progress: $("#session-progress"),
      word: $("#session-word"),
      phonetic: $("#session-phonetic"),
      pos: $("#session-pos"),
      definition: $("#session-definition"),
      example: $("#session-example"),
      collocations: $("#session-collocations"),
      reveal: $("#session-reveal"),
      answer: $("#session-answer"),
      grades: $("#session-grades"),
      prompt: $("#session-prompt"),
      hint: $("#session-hint"),
      card: $("#session-card"),
      stage: $("#session-stage"),
      summary: $("#session-summary"),
      toast: $("#session-live"),
      meter: $("#session-meter")
    };

    function renderCard() {
      var card = cardData[index];
      revealed = false;
      el.word.textContent = card.word;
      el.phonetic.textContent = card.phonetic;
      el.pos.textContent = card.pos;
      el.definition.textContent = card.definition;
      el.example.textContent = card.example;
      el.collocations.innerHTML = card.collocations
        .map(function (item) {
          return '<span class="tag tag--outline">' + item + "</span>";
        })
        .join("");
      el.answer.hidden = true;
      el.grades.hidden = true;
      el.reveal.hidden = false;
      el.prompt.hidden = false;
      el.counter.textContent = index + 1 + " / " + cardData.length;
      el.progress.style.width =
        ((index + 1) / cardData.length) * 100 + "%";
      if (el.meter) el.meter.setAttribute("aria-valuenow", String(index + 1));
      var audio = $("[data-speak]", el.card);
      if (audio) audio.setAttribute("data-speak", card.word);
      if (el.toast) el.toast.textContent = "Card " + (index + 1) + " of " + cardData.length;
    }

    function reveal() {
      if (revealed) return;
      revealed = true;
      el.answer.hidden = false;
      el.reveal.hidden = true;
      el.grades.hidden = false;
      el.prompt.hidden = true;
      el.hint.innerHTML =
        "<kbd>1</kbd> Again · <kbd>2</kbd> Hard · <kbd>3</kbd> Good · <kbd>4</kbd> Easy";
      if (el.toast) el.toast.textContent = "Answer shown. Choose how well you knew it.";
    }

    function grade() {
      if (!revealed) return;
      index += 1;
      if (index >= cardData.length) {
        finish();
        return;
      }
      renderCard();
      el.hint.innerHTML = "<kbd>Space</kbd> to reveal · <kbd>1</kbd>–<kbd>4</kbd> to grade";
      var heading = el.word;
      if (heading) heading.focus({ preventScroll: true });
    }

    function finish() {
      el.stage.hidden = true;
      el.hint.hidden = true;
      el.summary.hidden = false;
      el.counter.textContent = cardData.length + " / " + cardData.length;
      el.progress.style.width = "100%";
      if (el.meter) el.meter.setAttribute("aria-valuenow", String(cardData.length));
      var title = $("#summary-title");
      if (title) title.focus({ preventScroll: true });
      if (el.toast) el.toast.textContent = "Session complete. 9 cards reviewed.";
    }

    if (el.reveal) {
      el.reveal.addEventListener("click", reveal);
      $$("[data-grade]", el.card).forEach(function (button) {
        button.addEventListener("click", grade);
      });
      document.addEventListener("keydown", function (event) {
        if (el.summary && !el.summary.hidden) return;
        if (event.key === " " && !revealed) {
          if (event.target.closest("button, a, input, select, textarea")) return;
          event.preventDefault();
          reveal();
        } else if (revealed && ["1", "2", "3", "4"].indexOf(event.key) !== -1) {
          event.preventDefault();
          grade();
        }
      });
      renderCard();
    }
  }

  /* Placement test -------------------------------------------------------- */

  var placementApp = document.getElementById("placement-app");
  if (placementApp) {
    var questions = [
      {
        q: "Which is the most natural way to open a team meeting?",
        options: [
          "Let’s begin.",
          "We are starting now, right?",
          "Kindly commence the meeting.",
          "Meeting starts."
        ],
        answer: 0
      },
      {
        q: "Choose the most polite way to disagree with a colleague.",
        options: [
          "That’s wrong.",
          "I see your point, but I’d look at it differently.",
          "No, I don’t agree with you at all.",
          "You’re not understanding the problem."
        ],
        answer: 1
      },
      {
        q: "Which closing is safest in a first email to a client?",
        options: [
          "Bye for now,",
          "Best regards,",
          "Later,",
          "Thanks a lot!!"
        ],
        answer: 1
      },
      {
        q: "Which word means “the time and energy you have available”?",
        options: ["Scope", "Cadence", "Bandwidth", "Deliverable"],
        answer: 2
      },
      {
        q: "Complete the sentence: “Could you ___ me in on the latest update?”",
        options: ["loop", "circle", "bring", "feed"],
        answer: 0
      },
      {
        q: "Which sentence sounds most professional in a status update?",
        options: [
          "We’re on track to deliver by Thursday.",
          "Everything is kind of okay for now.",
          "We will try to maybe finish it soon.",
          "It is almost done, I think."
        ],
        answer: 0
      },
      {
        q: "“Let’s circle back on this” means:",
        options: [
          "Let’s decide right now.",
          "Let’s cancel the topic.",
          "Let’s return to it later.",
          "Let’s ask someone else."
        ],
        answer: 2
      },
      {
        q: "You need time to think in a meeting. What is the best response?",
        options: [
          "I don’t know.",
          "That’s a good question. Let me check and come back to you.",
          "Ask me again next week.",
          "Someone else can answer that."
        ],
        answer: 1
      },
      {
        q: "Which phrase is most useful for politely pushing back?",
        options: [
          "That won’t work.",
          "I’m not sure that’s possible.",
          "I have a concern about the timeline — could we talk it through?",
          "You’re asking too much."
        ],
        answer: 2
      },
      {
        q: "Which sounds more natural at the end of a meeting?",
        options: [
          "Let’s make alignment of the next steps.",
          "Let’s align on next steps.",
          "We should do the alignment of steps next.",
          "Next steps must be aligned by us."
        ],
        answer: 1
      }
    ];

    var current = 0;
    var selected = null;
    var score = 0;
    var firstRender = true;
    var p = {
      count: $("#placement-count"),
      percent: $("#placement-percent"),
      bar: $("#placement-progress"),
      question: $("#placement-question"),
      options: $("#placement-options"),
      next: $("#placement-next"),
      view: $("#placement-question-view"),
      result: $("#placement-result"),
      level: $("#result-level"),
      heading: $("#result-heading"),
      copy: $("#result-copy"),
      packTitle: $("#result-pack-title"),
      packMeta: $("#result-pack-meta"),
      packLink: $("#result-pack-link"),
      live: $("#placement-live")
    };

    function renderQuestion() {
      var item = questions[current];
      selected = null;
      p.count.textContent =
        "Question " + (current + 1) + " of " + questions.length;
      var pct = Math.round(((current + 1) / questions.length) * 100);
      p.percent.textContent = pct + "%";
      p.bar.style.width = pct + "%";
      p.question.textContent = item.q;
      p.options.innerHTML = "";
      item.options.forEach(function (option, i) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "option";
        button.setAttribute("aria-pressed", "false");
        button.innerHTML =
          '<span class="option-letter" aria-hidden="true">' +
          String.fromCharCode(65 + i) +
          "</span><span>" +
          option +
          "</span>";
        button.addEventListener("click", function () {
          selected = i;
          $$(".option", p.options).forEach(function (other) {
            other.classList.remove("is-selected");
            other.setAttribute("aria-pressed", "false");
          });
          button.classList.add("is-selected");
          button.setAttribute("aria-pressed", "true");
          p.next.disabled = false;
        });
        p.options.appendChild(button);
      });
      p.next.disabled = true;
      p.next.innerHTML =
        current === questions.length - 1
          ? 'See my starting point <svg class="icon icon--nudge" aria-hidden="true"><use href="#i-arrow-right"></use></svg>'
          : 'Next question <svg class="icon icon--nudge" aria-hidden="true"><use href="#i-arrow-right"></use></svg>';
      if (!firstRender) p.question.focus({ preventScroll: true });
      firstRender = false;
      if (p.live) p.live.textContent = "Question " + (current + 1);
    }

    function showResult() {
      p.view.hidden = true;
      p.result.hidden = false;
      var band;
      if (score >= 8) {
        band = {
          level: "Upper intermediate",
          heading: "You’re ready for real work English.",
          copy:
            "You already handle everyday professional English well. Your plan focuses on nuance: sounding natural under pressure and choosing the right tone.",
          pack: "Meetings & Pushback",
          meta: "55 words · Intermediate to advanced · 5 min a day"
        };
      } else if (score >= 5) {
        band = {
          level: "Intermediate",
          heading: "You have a solid base to build on.",
          copy:
            "You can follow most workplace conversations. Your plan starts with the phrases you need most often — then adds review so they stay available.",
          pack: "Office English Starter",
          meta: "40 words · Beginner to intermediate · 5 min a day"
        };
      } else {
        band = {
          level: "Foundation",
          heading: "A clear place to start.",
          copy:
            "You know more than you think. Your plan begins with high-frequency workplace phrases and builds confidence one short session at a time.",
          pack: "Office English Starter",
          meta: "40 words · Beginner · 5 min a day"
        };
      }
      p.level.textContent = band.level;
      p.heading.textContent = band.heading;
      p.copy.textContent = band.copy;
      p.packTitle.textContent = band.pack;
      p.packMeta.textContent = band.meta;
      p.packLink.textContent = band.pack;
      if (p.live) p.live.textContent = "Your starting point is " + band.level;
      p.result.querySelector("h2").focus({ preventScroll: true });
    }

    p.next.addEventListener("click", function () {
      if (selected === null) return;
      if (selected === questions[current].answer) score += 1;
      if (current === questions.length - 1) {
        showResult();
      } else {
        current += 1;
        renderQuestion();
      }
    });

    renderQuestion();
  }

  /* Pack filtering -------------------------------------------------------- */

  var packGrid = document.getElementById("pack-grid");
  if (packGrid) {
    var filter = "all";
    var search = $("#pack-search");
    var count = $("#pack-count");
    var empty = $("#pack-empty");

    function updatePacks() {
      var query = search ? search.value.trim().toLowerCase() : "";
      var shown = 0;
      $$(".pack-card", packGrid).forEach(function (card) {
        var categories = (card.getAttribute("data-categories") || "").split(" ");
        var text = card.textContent.toLowerCase();
        var matchesFilter =
          filter === "all" || categories.indexOf(filter) !== -1;
        var matchesSearch = !query || text.indexOf(query) !== -1;
        var visible = matchesFilter && matchesSearch;
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      if (count) {
        count.textContent =
          shown + (shown === 1 ? " pack" : " packs");
      }
      if (empty) empty.hidden = shown !== 0;
    }

    $$(".filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        filter = chip.getAttribute("data-filter");
        $$(".filter-chip").forEach(function (other) {
          other.setAttribute("aria-pressed", "false");
        });
        chip.setAttribute("aria-pressed", "true");
        updatePacks();
      });
    });

    if (search) search.addEventListener("input", updatePacks);
    updatePacks();
  }

  /* Activity heatmap ------------------------------------------------------ */

  var grid = document.getElementById("activity-grid");
  if (grid) {
    var total = 182;
    var today = new Date();
    var levels = [0, 1, 2, 1, 3, 4, 2, 1, 0, 2, 3, 1, 4, 3, 2, 0, 1, 3, 2, 4];
    var cells = [];
    var active = 0;
    var gap = 0;
    var longestGap = 0;
    for (var i = 0; i < total; i += 1) {
      var day = new Date(today);
      day.setDate(today.getDate() - (total - 1 - i));
      var weekday = day.getDay();
      var level = levels[(i * 3 + Math.floor(i / 7)) % levels.length];
      if ((weekday === 0 || weekday === 6) && level > 1) level -= 1;
      if (i >= total - 12) level = Math.max(level, 2);
      if (i === total - 1) level = 3;
      if (level > 0) {
        active += 1;
        gap = 0;
      } else {
        gap += 1;
        if (gap > longestGap) longestGap = gap;
      }
      var label =
        day.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) +
        " · " +
        (level === 0 ? "no review" : level * 5 + " words");
      cells.push(
        '<span class="heat-cell heat-' +
          level +
          '" title="' +
          label +
          '"></span>'
      );
    }
    grid.innerHTML = cells.join("");
    var activeDays = document.getElementById("heat-active-days");
    if (activeDays) activeDays.textContent = active + " active days";
    var longestGapEl = document.getElementById("heat-longest-gap");
    if (longestGapEl) {
      longestGapEl.textContent =
        "Longest gap: " + longestGap + (longestGap === 1 ? " day" : " days");
    }
    var heatSummary = document.getElementById("heat-summary");
    if (heatSummary) {
      heatSummary.textContent =
        "Review activity over the last 26 weeks. " +
        active +
        " of 182 days include a review. Darker squares mean more words reviewed.";
    }
    window.requestAnimationFrame(function () {
      var wrap = grid.parentNode;
      if (wrap && wrap.scrollWidth > wrap.clientWidth) {
        wrap.scrollLeft = wrap.scrollWidth;
      }
    });
  }

  /* Word page: first-language gloss -------------------------------------- */

  var glossSelect = document.getElementById("gloss-select");
  if (glossSelect) {
    var glosses = {
      zh: { code: "中文", text: "利用；借助（已有资源）" },
      ja: { code: "日本語", text: "活用する（すでにある資源を生かす）" },
      ko: { code: "한국어", text: "활용하다 (이미 있는 자원을 이용하다)" },
      ms: { code: "Bahasa Melayu", text: "memanfaatkan (menggunakan sumber sedia ada)" },
      th: { code: "ไทย", text: "ใช้ประโยชน์จาก (สิ่งที่มีอยู่แล้ว)" }
    };
    var glossCode = document.getElementById("gloss-code");
    var glossText = document.getElementById("gloss-text");
    function updateGloss() {
      var selected = glosses[glossSelect.value] || glosses.zh;
      glossCode.textContent = selected.code;
      glossText.textContent = selected.text;
      glossText.setAttribute("lang", glossSelect.value);
    }
    glossSelect.addEventListener("change", updateGloss);
    updateGloss();
  }

  /* Footer year ----------------------------------------------------------- */

  $$("[data-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
