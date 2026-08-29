import React from "react";
import { useCurrentFrame } from "remotion";
import { SignalCard, enter } from "./theme";

export const MnemonicLightSignalScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="mnemonic-beam-code" data-final-knowledge="civil-announcement-differs" */
  const f = useCurrentFrame();
  const codes = [
    { code: "检察建议", text: "必经程序", tone: "#a03a30" },
    { code: "2 个月", text: "行政机关履行期", tone: "#c9a24b" },
    { code: "15 日", text: "紧急情形回复期", tone: "#c9a24b" },
    { code: "不履职", text: "才向法院起诉", tone: "#a03a30" },
  ];
  return (
    <div
      data-layout="mnemonic-light-signal"
      data-visual-anchor="boundary"
      data-visual-grammar="one-light-signal-encodes-the-whole-procedure,civil-announcement-differs-from-administrative-recommendation"
      data-text-treatments="stamp,label-block,chip"
      data-focal-rule="记忆口诀与行民起诉前提对比"
      data-focal-channels="contrast,annotation,enclosure"
      style={{ position: "absolute", inset: 14, display: "flex", flexDirection: "column", gap: 24 }}
    >
      <SignalCard
        lit
        style={{ padding: "34px 30px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", ...enter(f, 4) }}
      >
        <div style={{ fontSize: 22, fontWeight: 950, color: "#8a6d2f", letterSpacing: 3, marginBottom: 16, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
          💡 灯语口诀
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          {codes.map((c, i) => (
            <React.Fragment key={c.code}>
              {i > 0 && <span style={{ fontSize: 24, color: "#8a6d2f", fontWeight: 950 }}>·</span>}
              <div>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 950,
                    color: c.tone,
                    fontFamily: "var(--inkloom-animation-mono, monospace)",
                    lineHeight: 1.1,
                  }}
                >
                  {c.code}
                </div>
                <div style={{ fontSize: 21, fontWeight: 800, marginTop: 8, color: "#4a4030" }}>{c.text}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </SignalCard>
      <div style={{ display: "flex", gap: 24, flex: 1 }}>
        <div style={{ flex: 1, display: "flex", ...enter(f, 26, -20, 0) }}>
          <SignalCard style={{ flex: 1, padding: "24px 26px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 10 }}>
            <div style={{ fontSize: 25, fontWeight: 950, color: "#e8cf94", marginBottom: 8 }}>行政诉讼</div>
            <div style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.55 }}>
              以<b style={{ color: "#c96a5c" }}>检察建议</b>为起诉前提
            </div>
          </SignalCard>
        </div>
        <div style={{ flex: 1, display: "flex", ...enter(f, 34, 20, 0) }}>
          <SignalCard style={{ flex: 1, padding: "24px 26px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 10 }}>
            <div style={{ fontSize: 25, fontWeight: 950, color: "#e8cf94", marginBottom: 8 }}>民事诉讼</div>
            <div style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.55 }}>
              以<b style={{ color: "#c96a5c" }}>公告</b>为起诉前提
            </div>
          </SignalCard>
        </div>
      </div>
    </div>
  );
};
