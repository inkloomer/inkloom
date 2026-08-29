import React from "react";
import { useCurrentFrame } from "remotion";
import { EnamelPlate, enter } from "./theme";

export const MeasuresComparisonLedgerScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="measures-scope-trio" data-final-knowledge="measures-document-approval" data-final-knowledge="measures-unit-rules" */
  const f = useCurrentFrame();
  const columns = [
    {
      head: "拘传",
      edge: "#d9a13b",
      rows: [
        ["对象", "必须到庭的当事人（两类）"],
        ["条件", "两次传票传唤＋无正当理由拒不到庭"],
        ["文书", "拘传票"],
        ["批准", "院长批准"],
      ],
    },
    {
      head: "罚款、拘留",
      edge: "#b5432f",
      rows: [
        ["对象", "诉讼参与人及其他人；单位主要负责人"],
        ["文书", "决定书"],
        ["批准", "院长批准"],
        ["适用", "罚款、拘留可单独或合并适用"],
      ],
    },
    {
      head: "对单位的措施",
      edge: "#5f7040",
      rows: [
        ["对象", "有义务协助调查、执行的单位"],
        ["措施", "对其罚款；仍不履行的可拘留其主要负责人"],
        ["文书", "决定书"],
        ["批准", "院长批准"],
      ],
    },
  ];
  return (
    <div
      data-layout="three-sign-comparison-ledger"
      data-visual-anchor="comparison-axis"
      data-visual-grammar="three-measure-signs-compare-object-procedure-and-document,reconsideration-once-never-stays-execution"
      data-text-treatments="label-block,chip,thin-underline"
      data-focal-rule="三种强制措施对比"
      data-focal-channels="contrast,enclosure,locator"
      style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 16, flex: 1 }}>
        {columns.map((col, i) => (
          <div
            key={col.head}
            style={{
              background: "#1a3329",
              border: `2.5px solid ${col.edge}`,
              borderRadius: 10,
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 8px 22px rgba(0,0,0,.45)",
              ...enter(f, 6 + i * 10, 0, 16),
            }}
          >
            <EnamelPlate mark={false} style={{ padding: "6px 0", textAlign: "center" }}>
              <span style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{col.head}</span>
            </EnamelPlate>
            {col.rows.map((row, j) => (
              <div
                key={j}
                style={{
                  background: "rgba(244,239,221,0.07)",
                  borderRadius: 7,
                  padding: "8px 12px",
                  fontSize: 19,
                  fontWeight: 700,
                  lineHeight: 1.45,
                  color: "#e9e2cc",
                }}
              >
                <span style={{ color: col.edge, fontWeight: 950, marginRight: 8 }}>{row[0]}</span>
                {row[1]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          background: "#1a3329",
          border: `2.5px dashed ${"#d9a13b"}`,
          borderRadius: 10,
          padding: "11px 20px",
          fontSize: 20.5,
          fontWeight: 800,
          color: "#f4efdd",
          ...enter(f, 44),
        }}
      >
        <span>
          三种措施的对象、文书与批准规则各归其位：拘传用<b>拘传票</b>，罚款、拘留与单位措施用<b>决定书</b>，均须经<b>院长批准</b>
        </span>
      </div>
    </div>
  );
};
