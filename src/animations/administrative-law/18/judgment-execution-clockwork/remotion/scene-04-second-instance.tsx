import React from "react";
import { useCurrentFrame } from "remotion";
import { DialCard, TribunalShell, VerdictStamp, enter } from "./theme";

export const SecondInstanceVerdictDialScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="appeal-affirm-remand" data-final-knowledge="appeal-compensation-exception" */
  const f = useCurrentFrame();
  const outcomes = [
    { cond: "原判正确（事实清楚，适用法律/法规正确）", verdict: "维持原判", edge: "#5f7040" },
    { cond: "原判错误（认定事实错误或适用法律/法规错误）", verdict: "撤销原判，直接改判", edge: "#b5432f" },
    { cond: "一审遗漏必须参加诉讼的当事人或诉讼请求，违反法定程序", verdict: "撤销原判，发回重审", edge: "#b5432f" },
    { cond: "原判认定事实不清、证据不足", verdict: "查清事实后改判，或直接发回重审", edge: "#8a6d2f" },
    { cond: "一审作出实体判决后，二审认为不应当受理", verdict: "驳回起诉", edge: "#8a6d2f" },
    { cond: "一审不予受理/驳回起诉裁定确有错误（裁定错误）", verdict: "撤销裁定，指令受理或继续审理", edge: "#5f7040" },
  ];
  return (
    <TribunalShell code="04" title="二审判决表盘" subtitle="维持 · 改判 · 发回 · 驳回 · 指令受理">
      <div
        data-layout="second-instance-verdict-dial"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="six-second-instance-outcomes-ring-one-verdict-dial,compensation-omission-is-the-civil-procedure-exception"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="二审判决形式与遗漏赔偿例外"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.25, display: "flex", flexDirection: "column", gap: 11 }}>
          {outcomes.map((o, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "rgba(239,233,212,.07)",
                border: `2px solid ${o.edge}66`,
                borderLeft: `8px solid ${o.edge}`,
                borderRadius: 10,
                padding: "11px 18px",
                ...enter(f, 6 + i * 8, -20, 0),
              }}
            >
              <span
                style={{
                  minWidth: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: `2.5px solid ${o.edge}`,
                  color: o.edge,
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
              <span style={{ fontSize: 20.5, fontWeight: 800, color: "#f3eedd", flex: 1, lineHeight: 1.4 }}>{o.cond}</span>
              <span style={{ fontSize: 20, fontWeight: 950, color: o.edge, whiteSpace: "nowrap", fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>➔ {o.verdict}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: "0 0 460px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            data-final-knowledge="appeal-compensation-exception"
            style={{
              background: "#1a2036",
              border: `3px solid ${"#c2a061"}`,
              borderRadius: 12,
              padding: "18px 22px",
              flex: 1,
              ...enter(f, 48, 26, 0),
            }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, color: "#c2a061", marginBottom: 10 }}>
              ⭐ 与民诉唯一不同：一审遗漏行政赔偿请求
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.7, color: "#f3eedd" }}>
              • 二审认为依法<b>不应赔偿</b> ➔ 判决驳回行政赔偿请求
              <br />
              • 二审认为依法<b>应当赔偿</b> ➔ 确认行为违法的同时可就赔偿<b>调解</b>；调解不成，就<b>赔偿部分发回重审</b>
            </div>
          </div>
          <DialCard style={{ padding: "14px 20px", ...enter(f, 58, 26, 0) }}>
            <div style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.6, color: "#4a4030" }}>
              • 遗漏<b>普通诉讼请求</b> ➔ 与民诉相同：撤销原判、发回重审
              <br />
              • 二审中当事人<b>新提赔偿请求</b> ➔ 先调解，调解不成告知另行起诉
            </div>
          </DialCard>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <VerdictStamp label="赔偿遗漏可调解" delay={70} rotation={-2} />
          </div>
        </div>
      </div>
    </TribunalShell>
  );
};
