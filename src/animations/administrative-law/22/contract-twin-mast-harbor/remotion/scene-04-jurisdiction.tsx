import React from "react";
import { useCurrentFrame } from "remotion";
import { DockPanel, SailCard, enter } from "./theme";

export const JurisdictionTideChartScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="jurisdiction-level-exclusive" data-final-knowledge="jurisdiction-agreement-five-stops" data-final-knowledge="limitation-dual-track" */
  const f = useCurrentFrame();
  const stops = ["被告所在地", "原告所在地", "协议履行地", "协议订立地", "标的物所在地"];
  return (
    <div
      data-layout="jurisdiction-tide-chart"
      data-visual-anchor="timeline-gate"
      data-visual-grammar="jurisdiction-chart-plots-exclusive-then-agreement-stops,limitation-periods-split-by-dual-nature"
      data-text-treatments="label-block,chip,soft-highlight"
      data-focal-rule="管辖两步与起诉期双轨"
      data-focal-channels="locator,contrast,connector"
      style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
    >
      <div style={{ flex: 1.25, display: "flex", flexDirection: "column", gap: 14 }}>
        <DockPanel style={{ padding: "16px 22px", ...enter(f, 4, -24, 0) }}>
          <div style={{ fontSize: 23, fontWeight: 950, color: "#e4bd6b", marginBottom: 10, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
            地域管辖 · 两步走
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <SailCard style={{ flex: 1, padding: "13px 16px", fontSize: 20, fontWeight: 800, lineHeight: 1.5 }}>
              <b style={{ color: "#8a6d2f" }}>第一步 专属管辖</b>
              <br />
              不动产案件由<b>不动产所在地</b>法院专属管辖
              <br />
              <span style={{ fontSize: 18, color: "#5c5347" }}>（不可协商）</span>
            </SailCard>
            <SailCard style={{ flex: 1.3, padding: "13px 16px", fontSize: 20, fontWeight: 800, lineHeight: 1.5 }}>
              <b style={{ color: "#8a6d2f" }}>第二步 协议管辖</b>
              <br />
              "有约定，从约定"：书面约定与争议有<b>实际联系地点</b>的法院，从其约定
              <br />
              <span style={{ fontSize: 18, color: "#5c5347" }}>级别管辖同具体行政行为案件（不可协商）</span>
            </SailCard>
          </div>
        </DockPanel>
        <div style={{ display: "flex", gap: 12, ...enter(f, 22, 0, 12) }}>
          {stops.map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                background: "rgba(243,236,217,.07)",
                border: `2px solid ${"#c9973f"}66`,
                borderRadius: 8,
                padding: "10px 8px",
                textAlign: "center",
                fontSize: 19.5,
                fontWeight: 900,
                color: "#f3eedd",
              }}
            >
              ⚓ {s}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: 19, fontWeight: 800, color: "#8aa0ad", ...enter(f, 40) }}>
          ↑ 五个协议管辖停靠点（与争议有实际联系地点）
        </div>
      </div>
      <div style={{ flex: "0 0 470px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        <DockPanel
          data-final-knowledge="limitation-dual-track"
          style={{ padding: "18px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 14, justifyContent: "center", ...enter(f, 14, 24, 0) }}
        >
          <div style={{ fontSize: 23, fontWeight: 950, color: "#e4bd6b", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>起诉期 · 双轨制</div>
          <SailCard style={{ padding: "14px 18px", fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
            <b style={{ color: "#3f8f8b" }}>［行政性］</b>单方变更、解除协议等行为 ➔ 适用<b>行政诉讼起诉期限</b>的规定
          </SailCard>
          <SailCard style={{ padding: "14px 18px", fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
            <b style={{ color: "#c97a5c" }}>［合同性］</b>不依法履行、未按约定履行协议 ➔ 参照民事法律规范关于<b>诉讼时效</b>的规定
          </SailCard>
        </DockPanel>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              padding: "8px 18px",
              background: "rgba(63,143,139,.12)",
              border: `2.5px solid ${"#3f8f8b"}`,
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 950,
              color: "#f3eedd",
              fontFamily: "var(--inkloom-animation-label, sans-serif)",
              ...enter(f, 44),
            }}
          >
            ⚓ 单方行为走行诉期 · 未履约走民诉时效
          </span>
        </div>
      </div>
    </div>
  );
};
