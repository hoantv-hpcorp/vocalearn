"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type FaqListProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function FaqList({ children, className = "faq-list", style }: FaqListProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll("details"));
    const handlers = items.map((item) => {
      const onToggle = () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      };
      item.addEventListener("toggle", onToggle);
      return { item, onToggle };
    });
    return () => {
      handlers.forEach(({ item, onToggle }) =>
        item.removeEventListener("toggle", onToggle),
      );
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
