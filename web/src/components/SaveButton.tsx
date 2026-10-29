"use client";

import type { CSSProperties } from "react";
import { Icon } from "./Icon";
import { useSavedWords } from "./SaveProvider";

type SaveButtonProps = {
  word: string;
  guest?: boolean;
  className?: string;
  iconName?: string;
  iconClassName?: string;
  label?: string;
  ariaLabel?: string;
  style?: CSSProperties;
};

export function SaveButton({
  word,
  guest = false,
  className = "save-btn",
  iconName = "bookmark",
  iconClassName = "icon",
  label,
  ariaLabel,
  style,
}: SaveButtonProps) {
  const { isSaved, toggle } = useSavedWords();
  const saved = isSaved(word);

  return (
    <button
      type="button"
      className={`${className}${saved ? " is-saved" : ""}`}
      aria-label={ariaLabel}
      aria-pressed={saved}
      style={style}
      onClick={() => toggle(word, guest)}
    >
      {iconName ? <Icon name={iconName} className={iconClassName} /> : null}
      {label ? (
        <span className="save-label">{saved ? "Saved" : label}</span>
      ) : null}
    </button>
  );
}
