import React from "react";
import { useCurrentFrame } from "remotion";
import { LoomShell, ThreadLabel, enter } from "./theme";

export const ReferralGateUnresolvedScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="referral-four-situations" data-final-knowledge="referral-competent-authority" */
  const f = useCurrentFrame();
  const situations = [
    "冲突规范所涉及的事项比较重大",
    "有关机关对是否存在冲突有不同意见",
    "应当优先适用的法律规范的合法有效性尚有疑问",
    "按照法律适用规则不能确定如何适用时",
  ];
  return (
    <LoomShell code="03" title="送请闸：无法解决的四情形" subtitle="梭子停摆 ➔ 交有权机关裁决">
      <div
        data-layout="referral-gate-unresolved"
        data-visual-anchor="boundary"
        data-visual-grammar="four-unresolvable-situations-pass-the-referral-gate,the-gate-exits-to-the-competent-authority"
        data-text-treatments="label-block,stamp,chip"
        data-focal-rule="送请有权机关处理的四种情形"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.3, display: "flex", flexDirection: "column", gap: 14 }}>
          {situations.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "rgba(243,238,221,.06)",
                border: `2.5px solid ${"#7fa3c0"}`,
                borderLeft: `10px solid ${"#7fa3c0"}`,
                borderRadius: 10,
                padding: "14px 20px",
                fontSize: 21.5,
                fontWeight: 800,
                color: "#f3eedd",
                lineHeight: 1.4,
                ...enter(f, 6 + i * 10, -24, 0),
              }}
            >
              <span
                style={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#7fa3c0",
                  color: "#1d2340",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 19,
                  fontWeight: 950,
                  fontFamily: "var(--inkloom-animation-mono, monospace)",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              {s}
            </div>
          ))}
        </div>
        <div style={{ flex: "0 0 380px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            data-final-knowledge="referral-competent-authority"
            style={{
              background: "#1a2036",
              border: `3px solid ${"#d9b24a"}`,
              borderRadius: 12,
              flex: 1,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              padding: 24,
              ...enter(f, 40, 26, 0),
            }}
          >
            <div>
              <ThreadLabel color="#d9b24a" style={{ fontSize: 20 }}>出口</ThreadLabel>
              <div style={{ fontSize: 32, fontWeight: 950, color: "#f3eedd", fontFamily: "var(--inkloom-animation-title, sans-serif)", margin: "18px 0 12px" }}>
                送请有权机关
                <br />
                处理
              </div>
              <div style={{ fontSize: 19, color: "#9aa3c0", lineHeight: 1.5 }}>
                冲突无法自行解决时的
                <br />
                法定兜底出路
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, color: "#9aa3c0", ...enter(f, 52) }}>
            记忆：重大 · 意见不一 · 合法性存疑 · 规则不能确定
          </div>
        </div>
      </div>
    </LoomShell>
  );
};
