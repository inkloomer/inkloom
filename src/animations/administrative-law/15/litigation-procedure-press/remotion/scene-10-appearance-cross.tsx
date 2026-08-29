import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const CourtAppearanceAndCrossTypeScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PressShell code="10" title="负责人出庭与交叉案件 · 合版" subtitle="出庭底线 · 行民交叉 · 行刑交叉">
      <div
        data-layout="appearance-cross-typesetting"
        data-visual-anchor="document-fork"
        data-visual-grammar="leader-court-appearance-sets-the-staff-bottom-line,civil-and-criminal-crossings-typeset-distinct-branches"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="负责人出庭与交叉案件处理"
        data-focal-channels="contrast,connector,locator"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 24 }}
      >
        <div style={{ flex: "0 0 560px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, ...enter(f, 4) }}>
            <TypeSort label="庭" tone="red" size={42} />
            <span style={{ fontSize: 23, fontWeight: 950 }}>行政机关负责人出庭制</span>
          </div>
          <ProofCard
            data-final-knowledge="leader-court-appearance-rule"
            style={{ padding: "14px 20px", flex: 1, ...enter(f, 10) }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6 }}>
              • 负责人<b>原则上应当出庭</b>；不能出庭的，应委托<b>相应工作人员</b>出庭
              <br />
              • 负责人含正职、副职及参与分管被诉行为实施工作的副职级别负责人等其他参与分管负责人
              <br />
              • 首长出庭的，还可另行委托 1~2 名诉讼代理人
              <br />
              • <b style={{ color: "#8a2f22" }}>底线：不得仅委托律师出庭</b>
              <br />
              • 提交材料：负责人出庭 ➔ 职务证明材料；委托工作人员 ➔ 加盖印章的授权委托书并载明姓名、职务、代理权限
              <br />
              • 后果：负责人与工作人员均不出庭仅律师出庭，或法院书面建议出庭仍不出庭 ➔ <b>记录在案并载明裁判文书</b>，向监察机关、上一级行政机关提司法建议
            </div>
          </ProofCard>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, ...enter(f, 16) }}>
            <TypeSort label="民" tone="lead" size={42} />
            <span style={{ fontSize: 23, fontWeight: 950 }}>行民交叉</span>
          </div>
          <ProofCard
            data-final-knowledge="civil-cross-rules"
            style={{ padding: "14px 20px", ...enter(f, 22) }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.58 }}>
              • <b>分别立案</b>（行政裁决案件附带民事的一并审理不另行立案）；可合并审理：行为与纠纷相关联（许可、登记、征收、征用、裁决）＋一审开庭前提出（有正当理由可法庭调查中）＋行政案件未超起诉期＋两案均可独立立案且同属同一法院管辖
              <br />
              • <b>法院不可主动合并</b>；不予准许一并审理可申请复议一次
              <br />
              • <b>分别裁判、可分别上诉</b>：未上诉裁判在上诉期满后生效；全部案卷移送二审由行政庭审理；二审发现未上诉生效裁判确有错误按再审审理
              <br />
              • 原告撤诉但对一并审理的民事争议不撤诉的 ➔ 法院<b>应当继续审理</b>民事部分
            </div>
          </ProofCard>
          <div style={{ display: "flex", alignItems: "center", gap: 12, ...enter(f, 32) }}>
            <TypeSort label="刑" tone="red" size={42} />
            <span style={{ fontSize: 23, fontWeight: 950 }}>行刑交叉</span>
          </div>
          <ProofCard
            data-final-knowledge="criminal-cross-rules"
            style={{ padding: "14px 20px", ...enter(f, 38) }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.58 }}>
              • <b>移送并中止</b>：犯罪行为与被诉行政违法行为<b>具有相关性</b> ➔ 中止行政诉讼，待刑事审结确认后再恢复
              <br />
              • <b>移送不中止</b>：两项<b>独立行为</b> ➔ 继续审理行政诉讼，无需等待刑事结果
            </div>
          </ProofCard>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <RedInkStamp label="分别立案 · 可以合并审理 · 应当分别裁判" delay={58} rotation={-2} />
          </div>
        </div>
      </div>
    </PressShell>
  );
};
