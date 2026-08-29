import React from "react";
import { useCurrentFrame } from "remotion";
import { DockPanel, SailCard, enter } from "./theme";

export const ValidityTideGaugeScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="validity-pending-approval" data-final-knowledge="validity-void-reasons" data-final-knowledge="validity-revocable" data-final-knowledge="validity-consequences" */
  const f = useCurrentFrame();
  const gauges = [
    {
      name: "未生效",
      edge: "#7fa3c0",
      body: "法律法规规定应当经其他机关批准等程序后生效的，未经批准则无法生效",
      foot: "应批准而一审法庭辩论终结前未获批 ➔ 确认协议未生效；约定被告负有批准义务而未履行 ➔ 对当事人损失承担赔偿责任",
    },
    {
      name: "无效",
      edge: "#b5432f",
      body: "行政因素：重大且明显违法（类似具体行政行为无效理由）；合同因素：依民事法律规范确认无效——违背公序良俗、恶意串通损害他人合法权益等",
      foot: "可补正：无效原因在一审法庭辩论终结前消除的，法院可确认协议有效",
    },
    {
      name: "可撤销",
      edge: "#c9973f",
      body: "存在胁迫、欺诈、重大误解、显失公平等情形",
      foot: "",
    },
  ];
  return (
    <div
      data-layout="validity-tide-gauge"
      data-visual-anchor="boundary"
      data-visual-grammar="validity-tide-gauge-fills-through-pending-void-and-revocable,defect-remedies-print-at-the-gauge-base"
      data-text-treatments="label-block,stamp,thin-underline"
      data-focal-rule="行政协议效力三档与后果"
      data-focal-channels="contrast,enclosure,locator"
      style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", gap: 18, flex: 1 }}>
        {gauges.map((g, i) => (
          <DockPanel key={g.name} edge={g.edge} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, ...enter(f, 4 + i * 10, 0, 16) }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  padding: "4px 14px",
                  background: g.edge,
                  color: "#f3eedd",
                  fontSize: 23,
                  fontWeight: 950,
                  borderRadius: 5,
                  fontFamily: "var(--inkloom-animation-title, sans-serif)",
                }}
              >
                {g.name}
              </span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55, color: "#e9e2cc" }}>{g.body}</div>
            {g.foot && (
              <div style={{ fontSize: 18.5, fontWeight: 800, color: "#c8cede", borderTop: `2px solid ${g.edge}55`, paddingTop: 8, lineHeight: 1.5 }}>
                {g.foot}
              </div>
            )}
          </DockPanel>
        ))}
      </div>
      <SailCard
        data-final-knowledge="validity-consequences"
        style={{
          padding: "13px 22px",
          fontSize: 20,
          fontWeight: 700,
          lineHeight: 1.55,
          display: "flex",
          alignItems: "center",
          gap: 16,
          ...enter(f, 48),
        }}
      >
        <b style={{ color: "#8a6d2f", whiteSpace: "nowrap" }}>退潮后果</b>
        <span>
          无效、被撤销或确定不发生效力后，因协议取得的财产应当<b>返还</b>；不能返还的<b>折价补偿</b>。因<b>行政机关原因</b>导致无效/被撤销 ➔ 可判责令采取补救措施；造成损失的<b>应当判决赔偿</b>
        </span>
      </SailCard>
    </div>
  );
};
