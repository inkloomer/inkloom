import React from "react";
import { useCurrentFrame } from "remotion";
import { DispatchCard, RelayShell, StationTag, WaxSeal, enter } from "./theme";

export const VerdictTypeTerminalScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="uphold-joint-verdicts" data-final-knowledge="change-revoke-or-restore" */
  const f = useCurrentFrame();
  const upholdRules = [
    "撤销原行政行为和复议决定 ➔ 可判决原机关重新作出行政行为",
    "判决原机关履行法定职责或给付义务 ➔ 应当同时判决撤销复议决定",
    "原行为合法、复议决定违法 ➔ 判决撤销复议决定或确认复议决定违法，同时驳回原告对原行为的诉求",
    "原行为不符合受理条件、复议机关作出维持决定 ➔ 裁定一并驳回对原行为和复议决定的起诉",
  ];
  return (
    <RelayShell code="04" title="判决类型终点站" subtitle="复议维持：一并裁判 · 复议改变：撤销或恢复">
      <div
        data-layout="verdict-type-terminal"
        data-visual-anchor="flow-target"
        data-visual-grammar="uphold-mode-posts-four-joint-verdict-rules,change-mode-terminates-at-revoke-or-restore"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="复议维持与复议改变的判决类型"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 8, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.3, display: "flex", flexDirection: "column", gap: 12 }}>
          <StationTag>复议维持 ➔ 一并作出裁判</StationTag>
          {upholdRules.map((r, i) => (
            <DispatchCard
              key={i}
              data-final-knowledge={i === 0 ? "uphold-joint-verdicts" : undefined}
              style={{
                padding: "12px 18px",
                display: "flex",
                gap: 14,
                alignItems: "center",
                ...enter(f, 6 + i * 10, -20, 0),
              }}
            >
              <span
                style={{
                  minWidth: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "#a03a30",
                  color: "#f5efdf",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 17,
                  fontWeight: 950,
                  fontFamily: "var(--inkloom-animation-mono, monospace)",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45 }}>{r}</span>
            </DispatchCard>
          ))}
        </div>
        <div style={{ flex: "0 0 430px", display: "flex", flexDirection: "column", gap: 14 }}>
          <StationTag>复议改变 ➔ 终点裁决</StationTag>
          <DispatchCard
            data-final-knowledge="change-revoke-or-restore"
            style={{
              flex: 1,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 14,
              ...enter(f, 40, 26, 0),
            }}
          >
            <div style={{ fontSize: 21.5, fontWeight: 800, lineHeight: 1.55 }}>
              复议决定<b>改变原行政行为错误</b>的，判决撤销复议决定时，可以一并：
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, background: "rgba(160,58,48,.10)", border: "2px solid rgba(160,58,48,.5)", borderRadius: 8, padding: "12px 10px", textAlign: "center" }}>
                <div style={{ fontSize: 21, fontWeight: 950, color: "#a03a30" }}>责令重作</div>
                <div style={{ fontSize: 17.5, fontWeight: 700, color: "#6a5c44", marginTop: 4 }}>重新作出复议决定</div>
              </div>
              <div style={{ flex: 1, background: "rgba(217,150,47,.10)", border: "2px solid rgba(217,150,47,.55)", borderRadius: 8, padding: "12px 10px", textAlign: "center" }}>
                <div style={{ fontSize: 21, fontWeight: 950, color: "#8a6d2f" }}>恢复原行为</div>
                <div style={{ fontSize: 17.5, fontWeight: 700, color: "#6a5c44", marginTop: 4 }}>判决恢复原行为法律效力</div>
              </div>
            </div>
            <div style={{ fontSize: 18.5, fontWeight: 700, color: "#6a5c44", lineHeight: 1.5 }}>
              例：原罚 500 复议改 800，800 违法 500 合法 ➔ 与其责令重作再回到 500，不如一步到位<b>恢复原行为</b>效力
            </div>
          </DispatchCard>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WaxSeal label="终点：撤销或恢复" delay={58} rotation={-2} />
          </div>
        </div>
      </div>
    </RelayShell>
  );
};
