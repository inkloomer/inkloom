import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, IndexTag, ThinUnderline, T, enter } from "./theme";

type Chip = { v: string; t: string };

export const NumberScaleSuitReviewScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="number-suit-deadline-row" data-final-knowledge="number-suit-pretrial-row" data-final-knowledge="number-suit-trial-row" data-final-knowledge="number-suit-appeal-row" data-final-knowledge="number-review-application-row" data-final-knowledge="number-review-pretrial-row" data-final-knowledge="number-review-hearing-row" data-final-knowledge="number-review-examination-row" data-final-knowledge="number-suit-review-summary-contrast" */
  const f = useCurrentFrame();
  const rows: { key: string; stage: string; tone: string; chips: Chip[] }[] = [
    {
      key: "number-suit-deadline-row",
      stage: "起诉期",
      tone: T.cinnabar,
      chips: [
        { v: "6 个月", t: "全知道" },
        { v: "1 年", t: "知一半" },
        { v: "5 年", t: "全不知最长" },
        { v: "20 年", t: "不动产" },
        { v: "15 日", t: "复议后起诉" },
      ],
    },
    {
      key: "number-suit-pretrial-row",
      stage: "立案庭前",
      tone: T.brassDeep,
      chips: [
        { v: "7 日", t: "立案审查" },
        { v: "5 日", t: "副本送被告" },
        { v: "15 日", t: "被告答辩" },
        { v: "3 日", t: "开庭传票" },
      ],
    },
    {
      key: "number-suit-trial-row",
      stage: "审理",
      tone: T.indigo,
      chips: [
        { v: "6 个月", t: "普通审结" },
        { v: "45 日", t: "简易审结" },
        { v: "2000 元", t: "简易标的额" },
      ],
    },
    {
      key: "number-suit-appeal-row",
      stage: "上诉执行",
      tone: T.mugwort,
      chips: [
        { v: "15 日", t: "判决上诉" },
        { v: "10 日", t: "裁定上诉" },
        { v: "15 日", t: "被告举证" },
        { v: "2 年", t: "申请执行" },
      ],
    },
  ];
  const reviewRows: { key: string; stage: string; tone: string; chips: Chip[] }[] = [
    {
      key: "number-review-application-row",
      stage: "申请期",
      tone: T.cinnabar,
      chips: [
        { v: "60 日", t: "全知道" },
        { v: "1 年", t: "知一半" },
        { v: "5 年", t: "全不知最长" },
        { v: "20 年", t: "不动产" },
      ],
    },
    {
      key: "number-review-pretrial-row",
      stage: "受理审前",
      tone: T.brassDeep,
      chips: [
        { v: "5 日", t: "受理审查" },
        { v: "7 日", t: "送被申请人" },
        { v: "10 日", t: "书面答复" },
        { v: "3/5 日", t: "简易送答" },
      ],
    },
    {
      key: "number-review-hearing-row",
      stage: "审理",
      tone: T.indigo,
      chips: [
        { v: "60+30 日", t: "普通可延长" },
        { v: "30 日", t: "简易审结" },
        { v: "5 日", t: "听证告知" },
      ],
    },
    {
      key: "number-review-examination-row",
      stage: "举证审查",
      tone: T.mugwort,
      chips: [
        { v: "10 日", t: "普通举证" },
        { v: "5 日", t: "简易举证" },
        { v: "30 日", t: "有权处理" },
        { v: "7 日", t: "无权转送" },
        { v: "60 日", t: "转送处理" },
      ],
    },
  ];

  const Column: React.FC<{ title: string; tone: string; rows: typeof rows; delay: number; from: number }> = ({
    title,
    tone,
    rows: list,
    delay,
    from,
  }) => (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, ...enter(f, delay, from, 0) }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "9px 14px",
          background: "rgba(27,18,11,0.7)",
          border: `2px solid ${tone}`,
          borderRadius: 5,
        }}
      >
        <IndexTag label={title} tone={tone} style={{ fontSize: 25 }} />
        <span style={{ fontSize: 20, fontWeight: 900, color: "#a8907a", letterSpacing: 1 }}>
          {title === "行政诉讼" ? "月与日并用" : "以 60 日为轴"}
        </span>
      </div>
      {list.map((row, i) => (
        <div
          key={row.key}
          data-final-knowledge={row.key}
          style={{ display: "flex", gap: 12, ...enter(f, delay + 10 + i * 9, 0, 16) }}
        >
          <div
            style={{
              width: 118,
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              background: "rgba(74,50,34,0.6)",
              border: `2px solid ${row.tone}`,
              borderRadius: 4,
              fontSize: 23,
              fontWeight: 950,
              color: "#efe3cd",
              letterSpacing: 1,
            }}
          >
            {row.stage}
          </div>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, alignContent: "center" }}>
            {row.chips.map((c, j) => (
              <div
                key={c.t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 10px",
                  background: T.paper,
                  borderRadius: 3,
                  boxShadow: "0 3px 9px rgba(0,0,0,.36)",
                  ...enter(f, delay + 18 + i * 9 + j * 5, 0, 12),
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 950,
                    color: row.tone,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--inkloom-animation-mono, monospace)",
                  }}
                >
                  {c.v}
                </span>
                <span style={{ fontSize: 22, fontWeight: 800, color: T.ink, lineHeight: 1.25 }}>{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <CabinetShell code="09" title="必记数字 · 诉讼与复议" subtitle="左栏诉讼四阶段 · 右栏复议四阶段">
      <div
        data-layout="suit-review-four-stage-number-grid"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="litigation-and-review-numbers-face-each-other-across-four-stages,each-stage-row-holds-its-own-deadline-chips,suit-deadlines-run-in-months-while-review-runs-in-sixty-days,the-two-columns-share-the-same-five-and-twenty-year-outer-limit"
        data-text-treatments="label-block,chip,soft-highlight"
        data-focal-rule="起诉期以月计、复议申请期以 60 日计，最长保护期同为 5 年与 20 年"
        data-focal-channels="contrast,spatial,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 12 }}
      >
        <div style={{ flex: 1, display: "flex", gap: 22 }}>
          <Column title="行政诉讼" tone={T.cinnabar} rows={rows} delay={6} from={-26} />
          <Column title="行政复议" tone={T.indigo} rows={reviewRows} delay={16} from={26} />
        </div>
        <div
          data-final-knowledge="number-suit-review-summary-contrast"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "10px 20px",
            background: "rgba(27,18,11,0.74)",
            border: `2px solid ${T.brass}`,
            borderRadius: 5,
            ...enter(f, 130, 0, 12),
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 850, color: "#efe3cd" }}>
            两栏共用最长保护期：
            <ThinUnderline tone={T.cinnabar}>5 年</ThinUnderline>
            （不动产
            <ThinUnderline tone={T.cinnabar}>20 年</ThinUnderline>
            ）；起诉看月、复议看日
          </span>
        </div>
      </div>
    </CabinetShell>
  );
};
