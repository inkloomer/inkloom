import React from "react";
import { useCurrentFrame } from "remotion";
import { DispatchCard, RelayShell, StationTag, WaxSeal, enter } from "./theme";

export const TrialObjectBurdenLedgerScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="trial-object-three" data-final-knowledge="burden-follows-defendant" */
  const f = useCurrentFrame();
  const modes = [
    { mode: "复议维持", object: "原行政行为的合法性 ＋ 复议决定的合法性", burden: "原机关＋复议机关对原行为合法性共同举证（举证行为可由其一实施）；复议机关对复议决定合法性举证" },
    { mode: "复议改变", object: "复议决定的合法性", burden: "复议机关对复议决定的合法性承担举证责任" },
    { mode: "复议不作为", object: "看诉求：告原机关审原行为；告复议机关审复议不作为", burden: "看具体诉求：告谁，谁承担" },
  ];
  return (
    <RelayShell code="03" title="一审对象与举证责任账簿" subtitle="审什么 · 谁举证，跟着被告走">
      <div
        data-layout="trial-object-burden-ledger"
        data-visual-anchor="document-fork"
        data-visual-grammar="three-mode-rows-pair-trial-object-with-burden-owner,who-is-sued-who-proves"
        data-text-treatments="label-block,chip,thin-underline"
        data-focal-rule="一审对象与举证责任对照"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <StationTag style={{ flex: "0 0 130px", textAlign: "center" }}>模式</StationTag>
          <StationTag style={{ flex: 1, textAlign: "center" }}>一审对象（审什么）</StationTag>
          <StationTag style={{ flex: 1.2, textAlign: "center" }}>举证责任（谁举证）</StationTag>
        </div>
        {modes.map((m, i) => (
          <div
            key={m.mode}
            data-final-knowledge={i === 0 ? "trial-object-three" : i === 1 ? "burden-follows-defendant" : "trial-object-three"}
            style={{
              display: "flex",
              gap: 12,
              flex: 1,
              ...enter(f, 6 + i * 12, -20, 0),
            }}
          >
            <DispatchCard style={{ flex: "0 0 130px", display: "grid", placeItems: "center", padding: "10px 8px" }}>
              <span style={{ fontSize: 22, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{m.mode}</span>
            </DispatchCard>
            <DispatchCard style={{ flex: 1, padding: "12px 16px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45 }}>{m.object}</span>
            </DispatchCard>
            <DispatchCard style={{ flex: 1.2, padding: "12px 16px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.45, color: "#5a4630" }}>{m.burden}</span>
            </DispatchCard>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "center", ...enter(f, 48) }}>
          <WaxSeal label="口诀：告谁审谁 · 告谁谁举证" delay={52} rotation={-2} />
        </div>
      </div>
    </RelayShell>
  );
};
