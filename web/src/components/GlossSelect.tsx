"use client";

import { useState } from "react";

const glosses = {
  zh: { code: "中文", text: "利用；借助（已有资源）" },
  ja: { code: "日本語", text: "活用する（すでにある資源を生かす）" },
  ko: { code: "한국어", text: "활용하다 (이미 있는 자원을 이용하다)" },
  ms: {
    code: "Bahasa Melayu",
    text: "memanfaatkan (menggunakan sumber sedia ada)",
  },
  th: { code: "ไทย", text: "ใช้ประโยชน์จาก (สิ่งที่มีอยู่แล้ว)" },
};

type GlossKey = keyof typeof glosses;

export function GlossSelect() {
  const [selected, setSelected] = useState<GlossKey>("zh");
  const gloss = glosses[selected];

  return (
    <div className="gloss">
      <div>
        <span className="gloss-label">
          In your language · <span id="gloss-code">{gloss.code}</span>
        </span>
        <p className="gloss-text" id="gloss-text" lang={selected}>
          {gloss.text}
        </p>
      </div>
      <label className="sr-only" htmlFor="gloss-select">
        Choose your language
      </label>
      <select
        id="gloss-select"
        value={selected}
        onChange={(event) => setSelected(event.target.value as GlossKey)}
      >
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="ms">Bahasa Melayu</option>
        <option value="th">ไทย</option>
      </select>
    </div>
  );
}
