import React from "react";
import { useCurrentFrame } from "remotion";
import { ProofCard, PressShell, RedInkStamp, TypeSort, enter } from "./theme";

/* Static audit inventory: data-final-knowledge="suit-known-six-months" data-final-knowledge="suit-partial-one-year" data-final-knowledge="suit-unknown-five-years" data-final-knowledge="suit-inaction-rules" data-final-knowledge="suit-after-review-fifteen" */

export const SuitDeadlineMatrixScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="suit-known-six-months" data-final-knowledge="suit-inaction-rules" data-final-knowledge="suit-after-review-fifteen" */
  const f = useCurrentFrame();
  const tracks = [
    {
      sort: "作",
      title: "直接起诉（作为）",
      edge: "#b5432f",
      rows: [
        "全知道：知道或应当知道行为作出之日起 6 个月内",
        "知一半：知道内容起 1 年内；若日后补充告知诉权，仍不得超过知诉权之日起 6 个月",
        "全不知：知道内容起 6 个月内，且不超过行为作出之日起 5 年（不动产 20 年）",
      ],
    },
    {
      sort: "怠",
      title: "直接起诉（不作为）",
      edge: "#8d97a5",
      rows: [
        "积极不作为（明确拒绝）：拒绝之日起 6 个月内",
        "消极不作为（不理不睬）有履行期：履行期届满后起诉，期限 6 个月",
        "消极不作为无履行期：申请满 2 个月后可起诉；紧急情况：当时即可起诉",
      ],
    },
    {
      sort: "复",
      title: "复议后起诉",
      edge: "#5f7040",
      rows: [
        "复议作为（含维持/改变，以复议决定送达时间确定）：收到复议决定之日起 15 日内",
        "复议积极不作为（不受理/驳回申请）：收到复议决定之日起 15 日内",
        "复议消极不作为（不理不睬）：复议期限届满之日起 15 日内",
      ],
    },
  ];
  return (
    <PressShell code="01" title="起诉期限矩阵" subtitle="作为 · 不作为 · 复议后，三条轨道各自排字">
      <div
        data-layout="three-track-deadline-typesetting"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-suit-routes-compose-their-own-deadline-lines,known-partial-and-unknown-cases-set-different-metal-sorts"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="起诉期限三轨对比"
        data-focal-channels="contrast,spatial,connector"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 18 }}
      >
        {tracks.map((t, i) => (
          <div
            key={t.title}
            data-final-knowledge={
              i === 0 ? "suit-known-six-months" : i === 1 ? "suit-inaction-rules" : "suit-after-review-fifteen"
            }
            style={{
              flex: 1,
              display: "flex",
              gap: 18,
              ...enter(f, 6 + i * 12, -30, 0),
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 150 }}>
              <TypeSort label={t.sort} tone={i === 0 ? "red" : "lead"} size={56} />
              <span
                style={{
                  fontSize: 23,
                  fontWeight: 950,
                  color: t.edge,
                  textAlign: "center",
                  fontFamily: "var(--inkloom-animation-title, sans-serif)",
                }}
              >
                {t.title}
              </span>
            </div>
            <ProofCard style={{ flex: 1, padding: "14px 20px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              {t.rows.map((row, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    fontSize: 21,
                    lineHeight: 1.4,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      minWidth: 30,
                      height: 30,
                      borderRadius: 4,
                      background: "#1d1f24",
                      color: "#efe8d6",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 15,
                      fontWeight: 950,
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                    }}
                  >
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span>{row}</span>
                </div>
              ))}
            </ProofCard>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <span data-final-knowledge="suit-partial-one-year" style={{ fontSize: 20, fontWeight: 900, color: "#efe8d6" }}>
            知一半另计 1 年
          </span>
          <span data-final-knowledge="suit-unknown-five-years" style={{ fontSize: 20, fontWeight: 900, color: "#efe8d6" }}>
            全不知最长保护 5 年（不动产 20 年）
          </span>
          <RedInkStamp label="起诉期 ≠ 民法诉讼时效：逾期裁定不予立案" delay={60} rotation={-2} />
        </div>
      </div>
    </PressShell>
  );
};
