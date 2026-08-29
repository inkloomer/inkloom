import React from "react";
import { useCurrentFrame } from "remotion";
import { SignalCard, enter } from "./theme";

export const ThreeStepBeamPathScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="step-procuratorial-recommendation" data-final-knowledge="step-two-month-performance" data-final-knowledge="step-fifteen-day-urgent" data-final-knowledge="step-file-suit" */
  const f = useCurrentFrame();
  const steps = [
    {
      no: "1",
      title: "检察建议（必经程序）",
      body: "检察院应当先向行政机关提出检察建议，督促其依法履行职责——不经过这一步不能直接起诉",
      lit: true,
    },
    {
      no: "2",
      title: "行政机关 2 个月内履职并书面回复",
      body: "行政机关应当在收到检察建议书之日起 2 个月内依法履行职责，并书面回复检察院",
      lit: true,
    },
    {
      no: "2+",
      title: "紧急情形：15 日内书面回复",
      body: "国家利益或社会公共利益损害继续扩大等紧急情形的，行政机关应当在 15 日内书面回复",
      lit: false,
    },
    {
      no: "3",
      title: "不依法履行职责 ➔ 检察院向法院提起诉讼",
      body: "行政诉讼以「检察建议」为起诉前提（民诉是以「公告」为起诉前提）",
      lit: true,
    },
  ];
  return (
    <div
      data-layout="three-step-beam-path"
      data-visual-anchor="flow-path"
      data-visual-grammar="three-procedure-steps-light-up-along-one-beam-path,urgent-cases-shorten-the-reply-window-to-fifteen-days"
      data-text-treatments="label-block,stamp,thin-underline"
      data-focal-rule="行政公益诉讼三步提起程序"
      data-focal-channels="connector,locator,contrast"
      style={{ position: "absolute", inset: 12, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}
    >
      {steps.map((s, i) => (
        <React.Fragment key={s.no}>
          {i > 0 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ color: "#e8cf94", fontSize: 30, fontWeight: 950, lineHeight: 1 }}>↓</span>
            </div>
          )}
          <div style={{ display: "flex", gap: 16, alignItems: "stretch", ...enter(f, 6 + i * 12, -26, 0) }}>
            <div
              style={{
                width: 76,
                borderRadius: "50%",
                border: `4px solid ${s.lit ? "#c9a24b" : "#5f6f66"}`,
                display: "grid",
                placeItems: "center",
                fontSize: 30,
                fontWeight: 950,
                fontFamily: "var(--inkloom-animation-mono, monospace)",
                flexShrink: 0,
                color: s.lit ? "#26211a" : "#f5efdf",
                background: s.lit ? "#f2e6c4" : "rgba(242,230,196,.08)",
              }}
            >
              {s.no}
            </div>
            <SignalCard lit={s.lit} style={{ flex: 1, padding: "20px 26px" }}>
              <div style={{ fontSize: 26, fontWeight: 950, marginBottom: 7, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{s.title}</div>
              <div style={{ fontSize: 22.5, fontWeight: 700, lineHeight: 1.55, color: s.lit ? "#4a4030" : "#f5efdf" }}>{s.body}</div>
            </SignalCard>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
