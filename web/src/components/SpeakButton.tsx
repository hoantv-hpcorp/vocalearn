"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { useToast } from "./ToastProvider";

type SpeakButtonProps = {
  text: string;
  label: string;
  className?: string;
  iconClassName?: string;
};

export function SpeakButton({
  text,
  label,
  className = "audio-btn",
  iconClassName = "icon",
}: SpeakButtonProps) {
  const [speaking, setSpeaking] = useState(false);
  const { toast } = useToast();

  function speak() {
    if (!("speechSynthesis" in window)) {
      toast("Audio isn’t available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
    window.setTimeout(() => setSpeaking(false), 700);
  }

  return (
    <button
      type="button"
      className={`${className}${speaking ? " is-speaking" : ""}`}
      onClick={speak}
      aria-label={label}
    >
      <Icon name="volume" className={iconClassName} />
    </button>
  );
}
