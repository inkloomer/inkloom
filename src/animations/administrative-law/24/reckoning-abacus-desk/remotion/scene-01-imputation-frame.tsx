import React from "react";
import { AbsoluteFill } from "remotion";
import { T, AbacusShell, BeadRow, PanelBody, DeskChip, RodRule, Enter } from "./theme";

const RODS: { label: string; tone: "amber" | "seal"; use: string; test: string }[] = [
  {
    label: "过错归责",
    tone: "amber",
    use: "适用：事实行为",
    test: "判断：以理性第三人的合理注意义务为标准——未尽合理注意造成损害即赔",
  },
  {
    label: "结果归责",
    tone: "amber",
    use: "适用：错捕、错判",
    test: "判断：不看事中看事后，没罪关了就要赔（不问逮捕/判决时是否违法）",
  },
  {
    label: "违法归责",
    tone: "amber",
    use: "适用：除事实行为、错捕错判外的其他赔偿行为",
    test: "判断：是否违反法律规定（只看事中）",
  },
];

export const ImputationAbacusFrameScene: React.FC = () => (
  <AbacusShell sceneNo="二十四·壹" sceneTitle="归责原则 · 三档算盘架" sceneTag="IMPUTATION-FRAME">
    <AbsoluteFill
      data-layout="imputation-abacus-frame"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,chip,thin-underline"
      data-visual-grammar="three-imputation-rods-stack-fault-result-illegality-beads,vermilion-exception-beads-break-the-detention-rows,elements-strip-presses-the-frame-base"
      data-focal-channels="contrast,spatial,enclosure"
      data-focal-rule="三档算珠自上而下对照，朱色特例珠横断，底座压构成要件"
    >
      {/* Static audit inventory:
        data-final-knowledge="imputation-fault"
        data-final-knowledge="imputation-result"
        data-final-knowledge="imputation-illegality"
        data-final-knowledge="detention-imputation-exceptions"
      */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {RODS.map((r, i) => (
          <Enter
            key={r.label}
            data-final-knowledge={["imputation-fault", "imputation-result", "imputation-illegality"][i]}
            delay={8 * i}
          >
            <BeadRow label={r.label} tone={r.tone} delay={8 * i}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <PanelBody size={19}>{r.use}</PanelBody>
                <span
                  style={{
                    borderBottom: "2px solid rgba(156,74,51,0.6)",
                    fontSize: 18,
                    color: T.K,
                  }}
                >
                  {r.test}
                </span>
              </div>
            </BeadRow>
          </Enter>
        ))}
      </div>
      <RodRule delay={26} style={{ marginTop: 16, marginBottom: 14 }} />
      <Enter data-final-knowledge="detention-imputation-exceptions" delay={30} style={{ display: "flex", gap: 22 }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "rgba(178,58,36,0.16)",
            border: "2px dashed #b23a24",
            borderRadius: 10,
            padding: "10px 18px",
          }}
        >
          <DeskChip tone="seal">特例一</DeskChip>
          <span style={{ fontSize: 18, color: "#f4e9cf" }}>
            <b>违法</b>刑事拘留 → 适用<b>违法归责</b>：只判断拘留作出时是否违反刑诉法，不问有罪无罪
          </span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "rgba(178,58,36,0.16)",
            border: "2px dashed #b23a24",
            borderRadius: 10,
            padding: "10px 18px",
          }}
        >
          <DeskChip tone="seal">特例二</DeskChip>
          <span style={{ fontSize: 18, color: "#f4e9cf" }}>
            <b>合法拘留 + 超期羁押 + 无罪</b> → 适用<b>结果归责</b>：整个拘留期间都赔（不限于超期部分）
          </span>
        </div>
      </Enter>
      <Enter delay={44} style={{ marginTop: 16 }}>
        <PaperPanelLite />
      </Enter>
    </AbsoluteFill>
  </AbacusShell>
);

const PaperPanelLite: React.FC = () => (
  <div
    style={{
      background: "rgba(241,229,200,0.95)",
      border: "2px solid #5b3a24",
      borderRadius: 10,
      padding: "10px 18px",
      display: "flex",
      alignItems: "center",
      gap: 18,
    }}
  >
    <DeskChip tone="brass">构成要件</DeskChip>
    <PanelBody size={18}>
      <b>主体</b>：国家机关及工作人员（含授权、委托组织个人）｜<b>行为</b>：与执行职务有关（权力/非权力、法律/事实、作为/不作为）｜<b>损害</b>：人身或财产｜<b>因果</b>：逻辑联系 + 直接相关性
    </PanelBody>
  </div>
);
