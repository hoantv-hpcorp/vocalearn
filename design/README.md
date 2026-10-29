# WordStack page prototypes

Lightweight, mobile-first WordStack page prototypes for a workplace English vocabulary learning service. The pages use HTML and CSS only—no build step, external images, or font downloads.

## Run locally

Open `index.html` in a browser, or start a local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Pages

- `index.html` — Home
- `pages/method.html` — How It Works / Our Method
- `pages/word-detail.html` — reusable word detail template (one word record at a time)
- `pages/about.html` — About
- `pages/start-here.html` — placement test prototype
- `pages/word-packs.html` — Word Packs Hub
- `pages/word-pack.html` — Word Pack Detail prototype
- `pages/daily-session.html` — Daily Session / Review prototype
- `pages/progress.html` — sample Progress dashboard
- `pages/faq.html` — FAQ
- `pages/contact.html` — Contact
- `pages/privacy.html` and `pages/terms.html` — legal draft templates
- `pages/free-resources.html` — free workplace phrase guides
- `pages/pricing.html` — current availability and pricing status
- `pages/practice.html` — practice activity overview
- `pages/my-words.html` — illustrative saved-word bank
- `pages/search.html` — search interface preview
- `pages/404.html` — not-found page design
- `pages/speaking-listening.html` — planned P2 speaking and listening drills
- `pages/extension-pages.css` — shared styles for the additional page prototypes

## Edit the pages

- Update page content and links in `index.html` and the relevant file in `pages/`.
- Change shared colors, spacing, and responsive styles in `styles.css`. Some standalone pages include scoped page-specific styles.
- The primary “Start free” links lead to the placement test prototype. Replace the prototype flow with a real placement check or signup when available.
- The learner story cards are explicitly marked as placeholders. Replace them with genuine, permissioned testimonials before publishing, or remove the section until real feedback is available.
- The learning controls and progress shown in these static prototypes do not save data or connect to a backend. The contact address is a placeholder.
- Search, downloadable resources, practice activities, and speaking/listening audio are previews; only enable them after their real functionality is built.
- The privacy and terms pages are drafts with required placeholders. Complete them and get jurisdiction-specific review before publishing.
- Replace the working brand name if needed and verify contact details and legal copy before launch.

The FAQ and sample reveal controls use native `<details>` and `<summary>` elements, so they work without JavaScript and support keyboard interaction.
