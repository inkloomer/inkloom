import React from "react";
import { useCurrentFrame } from "remotion";
import { BrassPlaque, ExhibitCard, GalleryShell, Vitrine, enter } from "./theme";

export const EvidenceCollectionDeskScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="collection-ex-officio" data-final-knowledge="collection-on-application" data-final-knowledge="order-submit-rules" */
  const f = useCurrentFrame();
  const desks = [
    {
      name: "依职权调取",
      edge: "#8a6d2f",
      who: "法院主动",
      rows: ["① 相关事实认定涉及国家利益、公共利益或他人合法权益", "② 依职权追加当事人、中止诉讼、终结诉讼、回避等程序性事项"],
      note: "口诀：利益＋程序",
    },
    {
      name: "依申请调取",
      edge: "#3a5a74",
      who: "原告或第三人（被告不可）",
      rows: ["须不能自行收集且提供确切线索，举证期限内申请", "① 国家有关部门保存须法院调取 ② 国家秘密/商业秘密/个人隐私 ③ 确因客观原因不能自行收集的其他证据"],
      note: "口诀：秘密＋确切线索；不予调取可书面司法复议一次",
    },
    {
      name: "责令提交证据",
      edge: "#5f7040",
      who: "法院责令当事人/行政机关",
      rows: ["主动责令：对无争议但涉国家/公共利益或他人合法权益的事实，可责令提供补充", "申请责令：原告或第三人确有证据证明被告持有的证据对其有利，开庭审理前书面申请；理由成立应责令提交，费用由申请人预付"],
      note: "依申请调取的证据由当事人质证；依职权调取不质证，法庭说明并听取意见",
    },
  ];
  return (
    <GalleryShell code="05" title="取证与责令提交工作台" subtitle="依职权 · 依申请 · 责令提交三案台">
      <div
        data-layout="three-desk-collection-bench"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-collection-desks-process-distinct-gatekeeping-rules,ex-officio-evidence-skips-cross-examination"
        data-text-treatments="label-block,thin-underline,chip"
        data-focal-rule="取证与责令提交规则"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        {desks.map((d, i) => (
          <div
            key={d.name}
            data-final-knowledge={i === 0 ? "collection-ex-officio" : i === 1 ? "collection-on-application" : "order-submit-rules"}
            style={{ display: "flex", gap: 16, flex: 1, ...enter(f, 6 + i * 14, -26, 0) }}
          >
            <div style={{ flex: "0 0 210px", display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
              <BrassPlaque style={{ fontSize: 19 }}>{d.name}</BrassPlaque>
              <span style={{ fontSize: 19, fontWeight: 800, color: "#6d6353" }}>{d.who}</span>
            </div>
            <Vitrine style={{ flex: 1, padding: "12px 18px", display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
              {d.rows.map((row, j) => (
                <ExhibitCard key={j} style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45, padding: "9px 14px" }}>
                  {row}
                </ExhibitCard>
              ))}
              <span
                style={{
                  fontSize: 18.5,
                  fontWeight: 900,
                  color: "#8a6d2f",
                  fontFamily: "var(--inkloom-animation-label, sans-serif)",
                }}
              >
                ✦ {d.note}
              </span>
            </Vitrine>
          </div>
        ))}
      </div>
    </GalleryShell>
  );
};
