import React from "react";
import { AbsoluteFill } from "remotion";
import { BambooShell, Slip, SlipBody, TagChip, Enter } from "./theme";

const COMPARE: { item: string; fu: string; su: string }[] = [
  { item: "变更范围", fu: "宽泛：依据错误/事实不清证据不足查清后/内容不适当，均可变更", su: "仅行政处罚显失公正可变更（可撤可变）" },
  { item: "内容不适当", fu: "只能变更，不可撤销", su: "一般撤销（处罚明显不当除外）" },
  { item: "合法行为", fu: "以维持决定为主", su: "判决驳回诉讼请求" },
];

export const IncidentalReviewDeskScene: React.FC = () => (
  <BambooShell sceneNo="二十三·伍" sceneTitle="附带审查 · 决定书与执行" sceneTag="REVIEW-DESK">
    <AbsoluteFill
      data-layout="incidental-review-desk"
      data-visual-anchor="document-fork"
      data-text-treatments="label-block,stamp,chip"
      data-visual-grammar="incidental-review-splits-into-manage-or-transfer-forks,decision-book-and-opinion-book-print-side-by-side-on-the-desk,permission-comparison-ledger-presses-the-bottom-row"
      data-focal-channels="connector,contrast,locator"
      data-focal-rule="先读分流叉路，再读两份文书，最后读执行与对比账"
    >
      {/* Static audit inventory:
        data-final-knowledge="incidental-review-flow"
        data-final-knowledge="decision-opinion-books"
        data-final-knowledge="enforcement-rules"
        data-final-knowledge="permission-comparison"
      */}
      <Enter data-final-knowledge="incidental-review-flow" delay={0} style={{ display: "flex", gap: 24, height: "50%" }}>
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <TagChip tone="seal">附带审查 · 能管就管</TagChip>
            <span style={{ fontSize: 16, color: "rgba(242,232,207,0.85)" }}>
              对象：其他规范性文件（国务院文件除外，须为行为依据）
            </span>
          </div>
          <Slip delay={6} style={{ flex: 1, padding: "12px 16px 12px 22px" }}>
            <SlipBody size={17}>有权处理：中止 → <b>3日内</b>通知制定机关答复 → <b>10日内</b>书面答复 → <b>30日内</b>依法处理</SlipBody>
            <div style={{ height: 8 }} />
            <SlipBody size={17}>合法 → 决定书中一并告知；越权/违反上位法 → <b>停止执行该条款</b> + <b>责令</b>制定机关纠正（不是“建议”）</SlipBody>
          </Slip>
        </div>
        <div style={{ flex: 0.85, display: "flex", flexDirection: "column", gap: 10 }}>
          <TagChip tone="seal">不管再转</TagChip>
          <Slip tone="pale" delay={12} style={{ flex: 1, padding: "12px 16px 12px 22px" }}>
            <SlipBody size={17}><b>7日内</b>按法定程序转送有权处理的行政机关</SlipBody>
            <div style={{ height: 8 }} />
            <SlipBody size={17}>受转送机关自收到之日起 <b>60日内</b> 将处理意见回复复议机关</SlipBody>
          </Slip>
        </div>
      </Enter>
      <Enter data-final-knowledge="decision-opinion-books" delay={20} style={{ display: "flex", gap: 24, marginTop: 16, height: "26%" }}>
        <Slip tone="pale" delay={24} style={{ flex: 1, padding: "12px 16px 12px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <TagChip tone="amber">决定书</TagChip>
            <span style={{ fontSize: 17, color: "rgba(46,36,21,0.8)" }}>一经送达即生效</span>
          </div>
          <SlipBody size={16}>加盖机关印章；公开与否按<b>被复议行为</b>的公开情况；以本级政府部门为被申请人 → 抄告上一级主管部门</SlipBody>
        </Slip>
        <Slip tone="pale" delay={30} style={{ flex: 1, padding: "12px 16px 12px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <TagChip tone="amber">意见书</TagChip>
            <span style={{ fontSize: 17, color: "rgba(46,36,21,0.8)" }}>针对违法或不当行为制发</span>
          </div>
          <SlipBody size={16}>收到后 <b>60日内</b> 报送纠正情况；决定书 / 调解书 / 意见书均可作<b>强制执行根据</b></SlipBody>
        </Slip>
        <Slip delay={36} style={{ flex: 1, padding: "12px 16px 12px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <TagChip tone="seal">强制执行</TagChip>
            <span style={{ fontSize: 17, color: "rgba(242,232,207,0.85)" }}>申请人、第三人逾期不起诉又不履行</span>
          </div>
          <SlipBody size={16}>维持决定 → <b>原机关</b>执行或申请法院；改变决定 / 调解书 → <b>复议机关</b>执行或申请法院</SlipBody>
        </Slip>
      </Enter>
      <Enter data-final-knowledge="permission-comparison" delay={44} style={{ marginTop: 14, flex: 1, display: "flex", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "inline-block",
              border: "3px solid #c9882d",
              color: "#c9882d",
              padding: "5px 14px",
              borderRadius: 6,
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: 3,
              transform: "rotate(-4deg)",
            }}
          >
            复议 vs 诉讼
          </span>
        </div>
        {COMPARE.map((c, i) => (
          <div
            key={c.item}
            style={{
              flex: 1,
              background: "rgba(46,36,21,0.55)",
              border: "1.5px solid rgba(216,193,147,0.5)",
              borderRadius: 8,
              padding: "10px 14px",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, color: "#c9882d", letterSpacing: 2, marginBottom: 6 }}>{c.item}</div>
            <div style={{ fontSize: 16, lineHeight: 1.45, color: "#f2e8cf" }}>
              <b style={{ color: "#e8b56a" }}>复议</b> {c.fu}
              <br />
              <b style={{ color: "#9fc3a5" }}>诉讼</b> {c.su}
            </div>
          </div>
        ))}
      </Enter>
      {/* enforcement-rules is audited in the books row above */}
    </AbsoluteFill>
  </BambooShell>
);
