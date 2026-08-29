import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, BrassBeam, CinnabarSeal, IndexTag, ThinUnderline, T, enter } from "./theme";

type NumCard = { value: string; unit: string; fact: string; note?: string; tone: string };

export const NumberScalePenaltyScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="number-penalty-limitation-group" data-final-knowledge="number-penalty-summary-group" data-final-knowledge="number-penalty-coercion-group" data-final-knowledge="number-penalty-duration-beam" */
  const f = useCurrentFrame();
  const groups: { key: string; tag: string; tone: string; items: NumCard[] }[] = [
    {
      key: "number-penalty-limitation-group",
      tag: "壹 · 处罚时效与期限",
      tone: T.cinnabar,
      items: [
        { value: "2", unit: "年", fact: "处罚时效：行为发生之日起", note: "治安罚为 6 个月", tone: T.cinnabar },
        { value: "5", unit: "年", fact: "涉生命健康安全、金融安全且有危害后果", tone: T.cinnabar },
        { value: "7", unit: "日", fact: "证据登记保存期", tone: T.brassDeep },
        { value: "90", unit: "日", fact: "处罚决定期限：立案之日起", note: "治安罚为 30+30+30 日", tone: T.brassDeep },
        { value: "7", unit: "日", fact: "处罚决定书送达期", note: "无法当面送达；治安罚为 2 日", tone: T.brassDeep },
      ],
    },
    {
      key: "number-penalty-summary-group",
      tag: "贰 · 简易程序与听证",
      tone: T.indigo,
      items: [
        { value: "200", unit: "元", fact: "处罚简易程序：对公民罚款上限", note: "单位 3000 元以下及警告", tone: T.indigo },
        { value: "4000", unit: "元", fact: "治安罚听证起点", note: "吊销许可证件、责令停业整顿", tone: T.indigo },
        { value: "1000", unit: "元", fact: "派出所可作出的罚款上限", note: "并可作出警告", tone: T.indigo },
      ],
    },
    {
      key: "number-penalty-coercion-group",
      tag: "叁 · 询问、执行与强制",
      tone: T.mugwort,
      items: [
        { value: "8", unit: "小时", fact: "公安询问期上限", note: "身份不明 12 小时；可能拘留 24 小时", tone: T.mugwort },
        { value: "3", unit: "%", fact: "不缴纳罚款的滞纳金", note: "按日加处", tone: T.mugwort },
        { value: "30", unit: "日", fact: "查封、扣押、冻结期", note: "可再延长 30 日", tone: T.mugwort },
      ],
    },
  ];
  return (
    <CabinetShell code="08" title="必记数字 · 处罚与强制" subtitle="时效 · 简易 · 听证 · 询问 · 强制，一格一数">
      <div
        data-layout="three-group-penalty-number-scale"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="penalty-numbers-file-into-three-dosage-groups,each-number-carries-its-unit-fact-and-qualifier,the-duration-beam-orders-seven-thirty-and-ninety-days,administrative-detention-hearing-threshold-sits-apart-from-fines"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="处罚时效 2 年、决定期限 90 日、简易程序公民 200 元"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div style={{ flex: 1, display: "flex", gap: 20 }}>
          {groups.map((g, i) => (
            <div
              key={g.key}
              data-final-knowledge={g.key}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: "12px 14px",
                background: "rgba(74,50,34,0.4)",
                border: "2px solid #7a5639",
                borderRadius: 5,
                ...enter(f, 6 + i * 12, 0, 26),
              }}
            >
              <IndexTag label={g.tag} tone={g.tone} style={{ fontSize: 23, alignSelf: "flex-start" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {g.items.map((it, j) => (
                  <div
                    key={it.fact}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 13px",
                      background: T.paper,
                      borderRadius: 3,
                      boxShadow: "0 3px 10px rgba(0,0,0,.36)",
                      ...enter(f, 22 + i * 12 + j * 9, 0, 14),
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5, flexShrink: 0, minWidth: 96 }}>
                      <span
                        style={{
                          fontSize: 44,
                          fontWeight: 950,
                          color: it.tone,
                          lineHeight: 1,
                          fontFamily: "var(--inkloom-animation-mono, monospace)",
                        }}
                      >
                        {it.value}
                      </span>
                      <span style={{ fontSize: 22, fontWeight: 900, color: T.ink }}>{it.unit}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 800, color: T.ink }}>{it.fact}</span>
                      {it.note ? (
                        <span style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 700, color: T.inkSoft }}>
                          {it.note}
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="number-penalty-duration-beam"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "14px 20px",
            background: "rgba(27,18,11,0.72)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 110, 0, 16),
          }}
        >
          <CinnabarSeal label="期限量尺" delay={118} rotation={-2} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            <BrassBeam width={1180} ticks={12} />
            <div style={{ display: "flex", justifyContent: "space-between", paddingRight: 40 }}>
              {[
                { v: "7 日", t: "证据保存" },
                { v: "30 日", t: "查封扣押冻结" },
                { v: "60 日", t: "延长后上限" },
                { v: "90 日", t: "处罚决定" },
              ].map((s, i) => (
                <span
                  key={s.v}
                  style={{ fontSize: 22, fontWeight: 850, color: "#efe3cd", ...enter(f, 126 + i * 8, 0, 10) }}
                >
                  <ThinUnderline tone={T.brass}>{s.v}</ThinUnderline>
                  <span style={{ color: "#a8907a", fontWeight: 750 }}> · {s.t}</span>
                </span>
              ))}
            </div>
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#a8907a", maxWidth: 300, lineHeight: 1.45 }}>
            单位不同，先辨日与月；延长须经批准
          </span>
        </div>
      </div>
    </CabinetShell>
  );
};
