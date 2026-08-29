import React from "react";
import { AbsoluteFill } from "remotion";
import { T, AbacusShell, BeadRow, PanelBody, DeskChip, Enter } from "./theme";

const BEADS: { label: string; body: React.ReactNode }[] = [
  {
    label: "人身自由",
    body: <>按日支付赔偿金 = <b>作出赔偿决定时</b>的国家上年度职工<b>日</b>平均工资（不是解除羁押时）</>,
  },
  {
    label: "身体伤害",
    body: <>医疗费 + 护理费（算至恢复自理能力止）；误工赔偿金 ≤ 上年年均工资 <b>5倍</b></>,
  },
  {
    label: "造成死亡",
    body: <>丧葬费 + 死亡赔偿金 = 上年年均工资 <b>20倍</b>；扶养的无劳动能力人的生活费 = 住所地省级<b>最低生活保障</b>标准</>,
  },
  {
    label: "完全伤残 1-4级",
    body: <>医疗、护理、辅助具、康复费 + 残疾赔偿金 <b>10-20倍</b> + 扶养生活费（发）</>,
  },
  {
    label: "部分伤残 5-10级",
    body: <>必要支出同上 + 残疾赔偿金：5-6级 <b>5-10倍</b>、7-10级 <b>5倍以下</b>；扶养生活费<b>不发</b></>,
  },
];

export const IndemnityBeadsLedgerScene: React.FC = () => (
  <AbacusShell sceneNo="二十四·肆" sceneTitle="赔偿标准 · 算珠总账" sceneTag="INDEMNITY-LEDGER">
    <AbsoluteFill
      data-layout="indemnity-beads-ledger"
      data-visual-anchor="typographic-sequence"
      data-text-treatments="label-block,external-negation,chip"
      data-visual-grammar="five-personal-injury-bead-rows-read-in-multiple-order,spiritual-and-property-columns-close-the-ledger,direct-loss-versus-expected-profit-negation-pair-ends-the-row"
      data-focal-channels="locator,contrast,enclosure"
      data-focal-rule="五档算珠按倍数顺序读，右栏收精神与财产，否定珠压轴"
    >
      {/* Static audit inventory:
        data-final-knowledge="personal-injury-beads"
        data-final-knowledge="spiritual-damages"
        data-final-knowledge="property-direct-loss"
      */}
      <div style={{ display: "flex", gap: 20, height: "88%" }}>
        <Enter data-final-knowledge="personal-injury-beads" delay={0} style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 9 }}>
          {BEADS.map((b, i) => (
            <BeadRow key={b.label} label={b.label} delay={6 * i} style={{ flex: 1 }}>
              <PanelBody size={16}>{b.body}</PanelBody>
            </BeadRow>
          ))}
        </Enter>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <Enter data-final-knowledge="spiritual-damages" delay={10} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
              <DeskChip tone="seal">精神损害</DeskChip>
              <span style={{ fontSize: 15, color: "rgba(244,233,207,0.8)" }}>资格：仅公民（法人无）；“关或打”造成精神损害</span>
            </div>
            <div style={{ background: "rgba(241,229,200,0.94)", border: "2px solid #5b3a24", borderRadius: 8, padding: "8px 14px" }}>
              <PanelBody size={15}>
                <b>一般后果</b>：消除影响、恢复名誉、赔礼道歉（在影响范围内相当）<br />
                <b>严重后果</b>：再加<b>精神损害抚慰金</b>——一般严重 ≤ 总额50%；特别严重（羁押10年/死亡/重伤残1-4级生活不能自理等）≥ 50%；数额 ≥ 1000元、以千为单位
              </PanelBody>
            </div>
          </Enter>
          <Enter data-final-knowledge="property-direct-loss" delay={20} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
              <DeskChip tone="seal">财产损失</DeskChip>
              <span style={{ fontSize: 15, color: "rgba(244,233,207,0.8)" }}>能返则返、能复原则复原，实在不行才赔钱</span>
            </div>
            <div style={{ background: "rgba(241,229,200,0.94)", border: "2px solid #5b3a24", borderRadius: 8, padding: "8px 14px", flex: 1 }}>
              <PanelBody size={15}>
                不能复原/灭失 → 按<b>行为发生时市场价格</b>算直接损失；已拍卖 → <b>拍多少赔多少</b>；变卖价明显低于价值 → 补赔偿金<br />
                <b>只赔直接损失</b>：停产停业期间必要经常性费用（留守工资、税费社保、水电保管仓储、租金折旧）、利息、停运损失、补偿奖励补贴
              </PanelBody>
            </div>
            <Enter delay={32} style={{ marginTop: 10, display: "flex", gap: 14 }}>
              <span
                style={{
                  flex: 1,
                  display: "inline-block",
                  textAlign: "center",
                  border: "3px solid #7d9a6f",
                  color: "#7d9a6f",
                  borderRadius: 8,
                  padding: "5px 10px",
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                直接损失：利息 / 停运损失 ✓
              </span>
              <span
                style={{
                  flex: 1,
                  display: "inline-block",
                  textAlign: "center",
                  border: "3px solid #b23a24",
                  color: "#b23a24",
                  borderRadius: 8,
                  padding: "5px 10px",
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textDecoration: "line-through",
                }}
              >
                预期利润 / 律师费：间接不赔
              </span>
            </Enter>
          </Enter>
        </div>
      </div>
    </AbsoluteFill>
  </AbacusShell>
);
