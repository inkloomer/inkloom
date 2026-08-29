import React from "react";
import { useCurrentFrame } from "remotion";
import { DockPanel, SailCard, enter } from "./theme";

export const ConceptKindHarborScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="agreement-concept" data-final-knowledge="agreement-five-kinds" data-final-knowledge="internal-agreement-excluded" */
  const f = useCurrentFrame();
  const kinds = [
    ["特许经营类", "政府特许经营协议"],
    ["补偿安置类", "房屋、土地等征收征用补偿协议"],
    ["资源出让类", "矿业权等国有自然资源使用权出让协议"],
    ["住房保障类", "政府投资的保障性住房租赁、买卖等协议"],
    ["合作投资类", "部分政府与社会资本合作协议及其他无名行政协议"],
  ];
  return (
    <div
      data-layout="concept-kind-harbor-map"
      data-visual-anchor="flow-target"
      data-visual-grammar="five-agreement-kinds-moar-at-the-harbor-map,internal-agreements-are-turned-away-at-the-harbor-gate"
      data-text-treatments="label-block,chip,thin-underline"
      data-focal-rule="行政协议概念、种类与内部协议排除"
      data-focal-channels="spatial,enclosure,contrast"
      style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 18 }}
    >
      <SailCard
        data-final-knowledge="agreement-concept"
        style={{
          padding: "22px 28px",
          fontSize: 23,
          fontWeight: 800,
          lineHeight: 1.65,
          ...enter(f, 4, 0, -14),
        }}
      >
        <b style={{ color: "#8a6d2f", marginRight: 12, fontSize: 25 }}>概念（行政合同）</b>
        行政机关为实现<b>公共利益</b>或行政管理目标，在法定职责范围内，与公民、法人或其他组织<b>协商订立</b>的具有行政法上<b>权利义务内容</b>的协议
      </SailCard>

      <DockPanel style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, justifyContent: "center", ...enter(f, 14, 0, 14) }}>
        <div style={{ fontSize: 22, fontWeight: 950, color: "#e4bd6b", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
          五大种类 · 五个泊位
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {kinds.map((k, i) => (
            <div
              key={k[0]}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(243,236,217,.06)",
                borderRadius: 6,
                padding: "10px 16px",
                fontSize: 20.5,
                fontWeight: 700,
                color: "#f3eedd",
                ...enter(f, 22 + i * 7, -16, 0),
              }}
            >
              <span
                style={{
                  minWidth: 30,
                  height: 30,
                  borderRadius: 4,
                  background: "#c9973f",
                  color: "#1d2340",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 16,
                  fontWeight: 950,
                  fontFamily: "var(--inkloom-animation-mono, monospace)",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <b style={{ whiteSpace: "nowrap", marginRight: 8, color: "#e4bd6b" }}>{k[0]}</b>
              <span style={{ color: "#d8dce4" }}>{k[1]}</span>
            </div>
          ))}
        </div>
      </DockPanel>

      <DockPanel
        data-final-knowledge="internal-agreement-excluded"
        tone="rgba(138,74,56,.18)"
        edge="#c96a5c"
        style={{ padding: "14px 24px", display: "flex", alignItems: "center", gap: 20, ...enter(f, 62) }}
      >
        <span
          style={{
            padding: "5px 14px",
            border: `2.5px solid ${"#c96a5c"}`,
            color: "#c96a5c",
            fontSize: 19,
            fontWeight: 950,
            borderRadius: 4,
            whiteSpace: "nowrap",
            fontFamily: "var(--inkloom-animation-label, sans-serif)",
            flexShrink: 0,
          }}
        >
          ✕ 不得入港
        </span>
        <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: "#f3eedd" }}>
          <b>内部协议</b>不属于行政协议：行政机关之间的公务协助协议、行政机关与工作人员的劳动人事协议。行政协议必须有一方是与行政机关<b>无隶属关系</b>的普通公民、法人或其他组织
        </span>
      </DockPanel>
    </div>
  );
};
