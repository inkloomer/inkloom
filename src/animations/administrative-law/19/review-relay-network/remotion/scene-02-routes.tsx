import React from "react";
import { useCurrentFrame } from "remotion";
import { DispatchCard, RelayShell, StationTag, WaxSeal, enter } from "./theme";

export const JurisdictionDeadlineRoutesScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="jurisdiction-level-rules" data-final-knowledge="jurisdiction-territorial-both" data-final-knowledge="suit-deadline-15days" */
  const f = useCurrentFrame();
  const levelRows = [
    ["复议维持", "以作出原行政行为的机关确定级别管辖"],
    ["复议改变", "以复议机关确定"],
    ["复议不作为", "看诉求：告原机关以原机关定；告复议机关以复议机关定"],
  ];
  return (
    <RelayShell code="02" title="管辖与起诉期双线" subtitle="级别看被告 · 地域两机关均可 · 起诉期一律 15 日">
      <div
        data-layout="jurisdiction-deadline-twin-routes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="jurisdiction-and-deadline-run-as-two-parallel-relay-routes,both-organs-host-the-territorial-stop"
        data-text-treatments="label-block,chip,stamp"
        data-focal-rule="经过复议案件的管辖与起诉期"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 8, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 14 }}>
          <StationTag>级别管辖 · 看被告</StationTag>
          {levelRows.map((r, i) => (
            <div
              key={r[0]}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "rgba(241,232,210,.07)",
                borderLeft: `6px solid ${"#d9962f"}`,
                borderRadius: 8,
                padding: "11px 16px",
                ...enter(f, 6 + i * 10, -20, 0),
              }}
            >
              <span style={{ fontSize: 21, fontWeight: 950, color: "#d9962f", whiteSpace: "nowrap", minWidth: 110 }}>{r[0]}</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#f5efdf", lineHeight: 1.4 }}>{r[1]}</span>
            </div>
          ))}
          <div
            data-final-knowledge="jurisdiction-territorial-both"
            style={{
              background: "rgba(160,58,48,.12)",
              border: `2.5px dashed ${"#c96a5c"}`,
              borderRadius: 8,
              padding: "11px 16px",
              fontSize: 20.5,
              fontWeight: 800,
              color: "#f5efdf",
              ...enter(f, 40),
            }}
          >
            地域管辖：经过复议的案件，<b>原行政机关所在地</b>或<b>复议机关所在地</b>法院均可管辖
          </div>
        </div>
        <div style={{ flex: "0 0 400px", display: "flex", flexDirection: "column", gap: 14 }}>
          <StationTag>起诉期 · 双 15 日</StationTag>
          <DispatchCard
            data-final-knowledge="suit-deadline-15days"
            style={{ padding: "16px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, ...enter(f, 20, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 44, fontWeight: 950, color: "#a03a30", fontFamily: "var(--inkloom-animation-mono, monospace)", lineHeight: 1 }}>15</span>
              <div style={{ fontSize: 20, fontWeight: 800 }}>复议作为：收到复议决定之日起 15 日内（有例外从例外）</div>
            </div>
            <div style={{ borderTop: "2px dashed rgba(90,74,52,.5)", paddingTop: 12, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 44, fontWeight: 950, color: "#a03a30", fontFamily: "var(--inkloom-animation-mono, monospace)", lineHeight: 1 }}>15</span>
              <div style={{ fontSize: 20, fontWeight: 800 }}>复议不作为：复议期限届满之日起 15 日内（有例外从例外）</div>
            </div>
          </DispatchCard>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WaxSeal label="两线均 15 日" delay={52} rotation={-2} />
          </div>
        </div>
      </div>
    </RelayShell>
  );
};
