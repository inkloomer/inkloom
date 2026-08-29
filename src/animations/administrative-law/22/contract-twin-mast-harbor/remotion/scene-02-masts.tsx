import React from "react";
import { useCurrentFrame } from "remotion";
import { DockPanel, SailCard, enter } from "./theme";

export const DualNatureMastsScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="administrative-nature" data-final-knowledge="contract-nature" data-final-knowledge="subject-org-people" data-final-knowledge="no-counterclaim-rule" */
  const f = useCurrentFrame();
  const masts = [
    {
      name: "行政性桅",
      tag: "政府管理因素",
      edge: "#3f8f8b",
      body: "最明显体现：行政协议往往赋予行政机关「行政优益权」——允许其出于公共利益需要，单方变更或解除合同",
      extras: ["审查走行政规则：单方变更解除、合法性审查"],
    },
    {
      name: "合同性桅",
      tag: "平等协商因素",
      edge: "#c97a5c",
      body: "合同建立在双方自主、自愿、意思表示一致的基础上，由合同双方意志决定相互间权利义务关系",
      extras: ["审查参照民事规则：不履约、合约性审查"],
    },
  ];
  return (
    <div
      data-layout="dual-nature-twin-masts"
      data-visual-anchor="comparison-axis"
      data-visual-grammar="administrative-and-contract-natures-rise-as-twin-masts,no-counterclaim-keeps-the-citizen-suit-one-way"
      data-text-treatments="label-block,soft-highlight,chip"
      data-focal-rule="行政协议双性与双轨主体"
      data-focal-channels="contrast,enclosure,spatial"
      style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", gap: 22, flex: 1 }}>
        {masts.map((m, i) => (
          <div key={m.name} style={{ flex: "1 1 0", minWidth: 0, display: "flex", gap: 16, ...enter(f, 4 + i * 12, i === 0 ? -26 : 26, 0) }}>
            {/* 桅杆 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
              <div style={{ width: 8, flex: 1, background: `linear-gradient(180deg, ${m.edge} 0%, #1d2340 100%)`, borderRadius: 3 }} />
              <div style={{ width: 34, height: 8, background: "#c9973f", borderRadius: 2, marginTop: 4 }} />
            </div>
            <DockPanel edge={m.edge} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 26, fontWeight: 950, color: "#f3eedd", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{m.name}</span>
                <span
                  style={{
                    padding: "3px 10px",
                    border: `2px solid ${m.edge}`,
                    color: "#f3eedd",
                    fontSize: 16,
                    fontWeight: 900,
                    borderRadius: 4,
                    fontFamily: "var(--inkloom-animation-label, sans-serif)",
                  }}
                >
                  {m.tag}
                </span>
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: "#e9e2cc" }}>{m.body}</div>
              {m.extras.map((x, j) => (
                <div key={j} style={{ fontSize: 18.5, fontWeight: 800, color: m.edge }}>▸ {x}</div>
              ))}
            </DockPanel>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <SailCard
          data-final-knowledge="subject-org-people"
          style={{ flex: 1.25, padding: "15px 20px", fontSize: 20, fontWeight: 700, lineHeight: 1.6, ...enter(f, 40) }}
        >
          <b style={{ color: "#8a6d2f" }}>主体 · 双轨</b>：
          <b>官</b>（行政主体）＝ 签订协议的行政机关作被告；受委托组织订立协议的，<b>委托的行政机关</b>是被告。
          <b>民</b>（相对人和相关人）：除相对人外，<b>公平竞争关系人</b>（招标/拍卖/挂牌竞争者）、征收征用补偿协议的<b>用益物权人、公房承租人</b>也可作原告
        </SailCard>
        <SailCard
          data-final-knowledge="no-counterclaim-rule"
          style={{ flex: 1, padding: "15px 20px", fontSize: 20, fontWeight: 800, lineHeight: 1.6, background: "linear-gradient(170deg, #e8cfc4 0%, #d9bcae 100%)", ...enter(f, 50) }}
        >
          ⚓ 同样遵照<b style={{ color: "#8a3a34" }}>"民告官"原则</b>：不出现"官告民"，<b>没有反诉制度</b>；相对人不履行义务的，行政机关可申请<b>法院强制执行</b>
        </SailCard>
      </div>
    </div>
  );
};
