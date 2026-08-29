import React from "react";
import { useCurrentFrame } from "remotion";
import { LoomShell, ThreadLabel, enter } from "./theme";

export const ConflictShuttleLaneScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="conflict-three-rules" data-final-knowledge="conflict-unresolvable-referral" */
  const f = useCurrentFrame();
  const rules = [
    { name: "上位法优于下位法", color: "#d9b24a" },
    { name: "新法优于旧法", color: "#b98d3e" },
    { name: "特别法优于一般法", color: "#7fa3c0" },
  ];
  return (
    <LoomShell code="02" title="冲突解决梭" subtitle="多个依据地位文件打架时的三条解法">
      <div
        data-layout="conflict-shuttle-lane"
        data-visual-anchor="flow-path"
        data-visual-grammar="one-conflict-shuttle-carries-three-resolution-rules,unresolvable-threads-exit-to-the-referral-gate"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="依据地位冲突的解决顺序"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 18 }}
      >
        <div style={{ fontSize: 21, fontWeight: 900, color: "#9aa3c0", letterSpacing: 2 }}>
          优先按照下列冲突规则解决（梭子依次穿过三根线）：
        </div>
        {rules.map((r, i) => (
          <div
            key={r.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              background: "rgba(243,238,221,.06)",
              border: `2.5px solid ${r.color}`,
              borderRadius: 10,
              padding: "18px 26px",
              ...enter(f, 8 + i * 12, -30, 0),
            }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: r.color,
                color: "#1d2340",
                display: "grid",
                placeItems: "center",
                fontSize: 24,
                fontWeight: 950,
                fontFamily: "var(--inkloom-animation-mono, monospace)",
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <span style={{ fontSize: 27, fontWeight: 950, color: "#f3eedd", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {r.name}
            </span>
          </div>
        ))}
        <div
          data-final-knowledge="conflict-unresolvable-referral"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(217,178,74,.08)",
            border: `2.5px dashed ${"#d9b24a"}`,
            borderRadius: 10,
            padding: "13px 22px",
            fontSize: 21,
            fontWeight: 800,
            color: "#f3eedd",
            ...enter(f, 50),
          }}
        >
          上述规则无法解决时 ➔ 应当依法送请<b style={{ color: "#d9b24a" }}>有权机关</b>处理
        </div>
      </div>
    </LoomShell>
  );
};
