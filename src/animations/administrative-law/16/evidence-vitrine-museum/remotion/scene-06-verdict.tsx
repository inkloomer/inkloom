import React from "react";
import { useCurrentFrame } from "remotion";
import { BrassPlaque, ExhibitCard, GalleryShell, Vitrine, enter } from "./theme";

export const CrossExamAndVerdictHallScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="cross-exam-rules" data-final-knowledge="officer-appearance-four" data-final-knowledge="guarantee-letter-rule" data-final-knowledge="verdict-no-effect" data-final-knowledge="verdict-one-sided" data-final-knowledge="verdict-weak-solo" */
  const f = useCurrentFrame();
  const tiers = [
    {
      name: "无效力",
      edge: "#8a4a38",
      head: "非法手段取得 ➔ 不得作为认定案件事实的根据",
      rows: ["① 严重违反法定程序收集", "② 违反法律强制性规定的手段获取且侵害他人合法权益", "③ 利诱、欺诈、胁迫、暴力等手段获取"],
    },
    {
      name: "片面效力",
      edge: "#8a6d2f",
      head: "不能证明被诉行政行为合法（但可证明违法）",
      rows: ["① 被告及代理人在行为作出后或诉讼中自行收集的证据", "② 原告/第三人在诉讼中提供的、被告在行政程序中未作为依据的证据", "③ 被告在行政程序中非法剥夺陈述申辩听证权利所采用的证据"],
    },
    {
      name: "弱效力",
      edge: "#5f7040",
      head: "不能单独作为定案依据（可与其他证据共同证明）",
      rows: ["未成年人不相应证言 · 密切关系证人有利证言/不利关系不利证言 · 应出庭无正当理由不出庭的证言", "难以识别是否修改的视听资料 · 无法核对原件原物的复制件复制品 · 经改动对方不认可的证据材料"],
    },
  ];
  return (
    <GalleryShell code="06" title="质证与认证裁决厅" subtitle="质证规则 · 认证三档效力阶梯">
      <div
        data-layout="three-tier-verdict-hall"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="three-effect-tiers-descend-like-museum-steps,cross-exam-rules-frame-the-entrance"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="质证规则与认证三档效力"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: "0 0 640px", display: "flex", flexDirection: "column", gap: 12 }}>
          <BrassPlaque style={{ alignSelf: "flex-start" }}>质证规则</BrassPlaque>
          <div
            data-final-knowledge="cross-exam-rules"
            style={{ display: "flex", ...enter(f, 4, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "13px 16px" }}>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "9px 12px" }}>
                未经质证的证据<b style={{ color: "#8a4a38" }}>不能作为定案根据</b>；但庭前证据交换中<b>无争议并记录在卷</b>的除外
              </ExhibitCard>
            </Vitrine>
          </div>
          <div
            data-final-knowledge="cross-exam-rules"
            style={{ display: "flex", ...enter(f, 14, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "13px 16px" }}>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "9px 12px" }}>
                涉国家秘密/商业秘密/个人隐私的证据：<b>不得公开质证</b>（不是不质证，是不公开质证）
              </ExhibitCard>
            </Vitrine>
          </div>
          <div
            data-final-knowledge="officer-appearance-four"
            style={{ display: "flex", ...enter(f, 24, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "13px 16px" }}>
              <div style={{ fontSize: 19.5, fontWeight: 900, marginBottom: 6, color: "#8a6d2f" }}>
                原告/第三人可要求执法人员<b>出庭说明</b>（非作证）的四种异议：
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {["现场笔录合法性/真实性", "扣押财产品种数量", "检验物品取样保管", "执法人员身份合法性"].map((x) => (
                  <ExhibitCard key={x} style={{ fontSize: 17.5, fontWeight: 800, padding: "7px 10px" }}>
                    {x}
                  </ExhibitCard>
                ))}
              </div>
            </Vitrine>
          </div>
          <div
            data-final-knowledge="guarantee-letter-rule"
            style={{ display: "flex", ...enter(f, 34, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "13px 16px" }}>
              <ExhibitCard style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.5, padding: "9px 12px" }}>
                <b>保证书</b>：法院可要求当事人本人/执法人员到庭接受询问，询问前可要求签署保证书（签名捺印）；
                负举证责任者拒绝到庭/拒绝询问/拒绝签署，待证事实又无其他证据佐证 ➔ 对其主张<b style={{ color: "#8a4a38" }}>不予认定</b>
              </ExhibitCard>
            </Vitrine>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <BrassPlaque style={{ alignSelf: "flex-start" }}>认证 · 三档效力阶梯</BrassPlaque>
          {tiers.map((t, i) => (
            <div
              key={t.name}
              data-final-knowledge={i === 0 ? "verdict-no-effect" : i === 1 ? "verdict-one-sided" : "verdict-weak-solo"}
              style={{
                display: "flex",
                flex: 1,
                marginLeft: i * 26,
                ...enter(f, 10 + i * 12, 26, 0),
              }}
            >
              <Vitrine glow={i === 0} style={{ flex: 1, padding: "12px 16px", borderTop: `6px solid ${t.edge}`, display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      padding: "3px 12px",
                      background: t.edge,
                      color: "#f7f3e6",
                      fontSize: 19,
                      fontWeight: 950,
                      borderRadius: 3,
                      fontFamily: "var(--inkloom-animation-title, sans-serif)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t.name}
                  </span>
                  <span style={{ fontSize: 17.5, fontWeight: 800, color: "#6d6353" }}>{t.head}</span>
                </div>
                <div style={{ fontSize: 17.5, fontWeight: 700, lineHeight: 1.5, color: "#26211a" }}>{t.rows.join("；")}</div>
              </Vitrine>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span
              style={{
                padding: "6px 14px",
                background: "rgba(138,74,56,0.1)",
                border: `2px dashed ${"#8a4a38"}`,
                fontSize: 17.5,
                fontWeight: 800,
                color: "#8a4a38",
                borderRadius: 6,
                ...enter(f, 52),
              }}
            >
              例外：复议机关作共同被告时，复议程序中依法收集补充的证据可作认定依据
            </span>
          </div>
        </div>
      </div>
    </GalleryShell>
  );
};
