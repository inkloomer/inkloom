import React from "react";
import { useCurrentFrame } from "remotion";
import { DispatchCard, RelayShell, StationTag, WaxSeal, enter } from "./theme";

export const DefendantRelayStationScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="defendant-change" data-final-knowledge="defendant-uphold-join" data-final-knowledge="defendant-inaction-choice" */
  const f = useCurrentFrame();
  const stations = [
    {
      mode: "复议改变",
      who: "复议机关是被告",
      note: "复议改变只包括改变结果",
      seal: "单独告复议",
      tone: "#a03a30",
    },
    {
      mode: "复议维持",
      who: "原行政机关和复议机关是共同被告",
      note: "告漏了，通知追加；原告不加，追加为共同被告",
      seal: "共同告",
      tone: "#d9962f",
    },
    {
      mode: "复议不作为",
      who: "原告对谁不服，谁就是被告",
      note: "告原机关审原行为；告复议机关审复议不作为",
      seal: "择一告",
      tone: "#5f7040",
    },
  ];
  return (
    <RelayShell code="01" title="被告驿站" subtitle="改变单独告 · 维持共同告 · 不作为择一告">
      <div
        data-layout="defendant-relay-station"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-review-modes-stop-at-three-defendant-stations,wax-seals-mark-each-suing-mode"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="三种复议模式的被告确定"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 16 }}
      >
        {stations.map((s, i) => (
          <div key={s.mode} style={{ display: "flex", gap: 16, flex: 1, ...enter(f, 6 + i * 12, -26, 0) }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 60 }}>
              <StationTag style={{ fontSize: 15 }}>{String(i + 1).padStart(2, "0")}</StationTag>
              {i < 2 && <div style={{ width: 2, flex: 1, backgroundImage: `repeating-linear-gradient(180deg, ${"#d9962f"} 0 6px, transparent 6px 12px)` }} />}
            </div>
            <DispatchCard
              data-final-knowledge={s.mode === "复议改变" ? "defendant-change" : s.mode === "复议维持" ? "defendant-uphold-join" : "defendant-inaction-choice"}
              style={{ flex: 1, padding: "13px 20px", display: "flex", alignItems: "center", gap: 18 }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 24, fontWeight: 950, marginBottom: 4, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{s.mode}</div>
                <div style={{ fontSize: 20.5, fontWeight: 800 }}>{s.who}</div>
                <div style={{ fontSize: 18.5, fontWeight: 700, color: "#6a5c44", marginTop: 4 }}>{s.note}</div>
              </div>
              <WaxSeal label={s.seal} tone={s.tone} delay={26 + i * 12} rotation={i % 2 ? 3 : -3} />
            </DispatchCard>
          </div>
        ))}
      </div>
    </RelayShell>
  );
};
