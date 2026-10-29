"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { SaveButton } from "./SaveButton";
import { SpeakButton } from "./SpeakButton";

export function SampleCard() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="tcard sample-card" data-tab="Sample card">
      <div className="sample-card-top">
        <span className="tag tag--forest">Meetings &amp; pushback</span>
        <SpeakButton text="bandwidth" label="Play pronunciation of bandwidth" />
      </div>
      <h3 className="sample-word">bandwidth</h3>
      <p className="sample-pron">/ˈbænd.wɪdθ/ · noun</p>
      <p className="sample-prompt">Say what it means in your own words. Then reveal.</p>
      <div className="sample-answer" id="sample-answer" hidden={!revealed}>
        <span className="stack-label">Plain English</span>
        <p>The time and energy someone has available for work.</p>
        <p className="sample-example">
          “I don’t have the bandwidth for a new project this month.”
        </p>
      </div>
      <button
        className="btn btn--primary btn--block"
        type="button"
        id="sample-reveal"
        hidden={revealed}
        onClick={() => setRevealed(true)}
      >
        Show the meaning
        <Icon name="chevron-down" />
      </button>
      <div className="sample-card-foot">
        <SaveButton word="bandwidth" guest label="Save to My Words" />
        <span className="mono-note">1 of 9 today</span>
      </div>
    </div>
  );
}
