import React from "react";
import { useCurrentFrame } from "remotion";
import { SignalCard, enter } from "./theme";

export const ProposerAndCivilCompareScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="proposer-procuratorate" data-final-knowledge="civil-compare-support" */
  const f = useCurrentFrame();
  return (
    <div
      data-layout="proposer-compare-twin-towers"
      data-visual-anchor="comparison-axis"
      data-visual-grammar="administrative-and-civil-proposer-rules-stand-on-twin-towers,support-suit-differs-from-first-choice"
      data-text-treatments="label-block,chip,soft-highlight"
      data-focal-rule="公益诉讼提出主体对比"
      data-focal-channels="contrast,spatial,enclosure"
      style={{ position: "absolute", inset: 14, display: "flex", flexDirection: "column", gap: 22 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, ...enter(f, 4) }}>
        <div style={{ width: 46, height: 46, borderRadius: "50%", background: `repeating-conic-gradient(#a03a30 0 30deg, #f5efdf 30deg 60deg)`, display: "grid", placeItems: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#122b28" }} />
        </div>
        <span style={{ fontSize: 34, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
          提出主体：<span style={{ color: "#e8cf94" }}>检察院</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 24, flex: 1 }}>
        <div style={{ flex: 1, display: "flex", ...enter(f, 10, -24, 0) }}>
          <SignalCard lit style={{ flex: 1, padding: "26px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
            <div style={{ fontSize: 30, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>行政诉讼（本案）</div>
            <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.6 }}>
              提出主体就是<b>检察院</b>——由检察院直接向法院提起行政公益诉讼
            </div>
          </SignalCard>
        </div>
        <div style={{ flex: 1.15, display: "flex", ...enter(f, 20, 24, 0) }}>
          <SignalCard style={{ flex: 1, padding: "26px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
            <div style={{ fontSize: 30, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)", color: "#e8cf94" }}>对照：民事诉讼</div>
            <div style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.65 }}>
              • 法律规定的<b>机关和有关组织</b>提起公益诉讼是<b>首选</b>
              <br />
              • 组织起诉时，检察院只能<b style={{ color: "#c96a5c" }}>摇旗呐喊</b>（<b>支持起诉</b>）
              <br />
              • 只有这些组织<b>不提起诉讼</b>，检察院才可向法院提起诉讼
            </div>
          </SignalCard>
        </div>
      </div>
    </div>
  );
};
