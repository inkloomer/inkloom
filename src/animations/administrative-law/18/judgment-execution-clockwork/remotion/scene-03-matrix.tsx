import React from "react";
import { useCurrentFrame } from "remotion";
import { DialCard, TribunalShell, VerdictStamp, enter } from "./theme";

export const ReviewVerdictMatrixBoardScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="review-change-verdict" data-final-knowledge="review-matrix-five" data-final-knowledge="review-restore-original" */
  const f = useCurrentFrame();
  const rows = [
    ["原行为不符合受理条件", "裁定驳回", "裁定驳回", "#8a4a38"],
    ["原行为合法", "驳回原告诉求", "驳回原告诉求", "#5f7040"],
    ["作为违法", "能撤销就撤销，不能撤销则确认", "维持违法的：撤销", "#b5432f"],
    ["不作为违法", "能作为就作为，不能作为则确认", "维持违法的：撤销", "#b5432f"],
    ["原行为合法而复议维持违法", "驳回原告诉求", "确认违法或撤销", "#8a6d2f"],
  ];
  return (
    <TribunalShell code="03" title="复议后再起诉判决矩阵" subtitle="诉 2 个 · 审 2 个 · 判 2 个">
      <div
        data-layout="review-verdict-matrix-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="five-scenario-rows-align-original-and-review-verdicts,restore-original-beats-rehearing-when-only-review-is-unlawful"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="复议改变/维持后的判决形式"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1.2fr 1.2fr",
            gap: 12,
            padding: "0 14px",
            ...enter(f, 2),
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 950, color: "#a8a290", fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>情形</span>
          <span style={{ fontSize: 20, fontWeight: 950, color: "#c2a061", fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>原行为判决</span>
          <span style={{ fontSize: 20, fontWeight: 950, color: "#c2a061", fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>复议维持判决</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r[0]}
            data-final-knowledge={i === 0 ? "review-matrix-five" : undefined}
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1.2fr 1.2fr",
              gap: 12,
              alignItems: "center",
              background: "rgba(239,233,212,.07)",
              border: `2px solid ${r[3]}55`,
              borderRadius: 10,
              padding: "13px 18px",
              ...enter(f, 8 + i * 9, -20, 0),
            }}
          >
            <span style={{ fontSize: 21, fontWeight: 900, color: "#f3eedd" }}>{r[0]}</span>
            <span style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.4, color: "#e9e2cc" }}>{r[1]}</span>
            <span style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.4, color: r[3] === "#8a4a38" ? "#c26a5c" : "#e9e2cc" }}>{r[2]}</span>
          </div>
        ))}
        <div
          data-final-knowledge="review-change-verdict"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            background: "rgba(239,233,212,.07)",
            border: `2.5px dashed ${"#c2a061"}`,
            borderRadius: 10,
            padding: "13px 22px",
            fontSize: 20.5,
            fontWeight: 800,
            color: "#f3eedd",
            lineHeight: 1.5,
            ...enter(f, 56),
          }}
        >
          <span style={{ flex: 1 }}>
            <b style={{ color: "#c2a061" }}>复议改变违法，撤销复议决定时</b>：可一并责令复议机关<b>重作复议决定</b>，或直接判决<b>恢复原行为</b>法律效力
            <br />
            <span style={{ fontSize: 19, color: "#a8a290" }}>
              例：原罚款 500 元，复议改为 800 元；法院认为 800 违法、500 合法 ➔ 与其责令重作再罚回 500，不如一步到位<b>恢复原行为</b>效力
            </span>
          </span>
          <VerdictStamp label="一步到位" delay={68} rotation={-2} />
        </div>
      </div>
    </TribunalShell>
  );
};
