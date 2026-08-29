import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const SecondInstanceKeylineScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="appeal-document-relay" */
  const f = useCurrentFrame();
  const relay = [
    "原审法院 5 日内将上诉状副本发送其他当事人",
    "对方当事人收到副本之日起 15 日内提出答辩状",
    "原审法院收到上诉状、答辩状后 5 日内连同全部案卷、证据报送二审法院（预收诉讼费一并报送）",
  ];
  return (
    <PressShell code="06" title="二审校线" subtitle="上诉主体与期限 · 文书上传递 · 全面审查">
      <div
        data-layout="second-instance-keyline-galley"
        data-visual-anchor="flow-path"
        data-visual-grammar="appeal-subjects-and-deadlines-set-the-keyline,comprehensive-review-differs-from-first-instance"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="二审程序三要点"
        data-focal-channels="locator,contrast,connector"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: 14 }}>
          <ProofCard
            data-final-knowledge="appeal-subject-deadlines"
            style={{ padding: "16px 20px", ...enter(f, 4, -24, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <TypeSort label="上" tone="red" size={42} />
              <span style={{ fontSize: 23, fontWeight: 950 }}>上诉主体与期限</span>
            </div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6 }}>
              • 主体：原告、被告、一审受不利判决的<b>第三人</b>及其法定代理人、经授权的委托代理人
              <br />
              • 期限：判决书 <b>15 日内</b>；裁定书 <b>10 日内</b>
            </div>
          </ProofCard>
          <div style={{ fontSize: 21, fontWeight: 950, color: "#8d97a5", letterSpacing: 2, marginTop: 2 }}>
            文书传递 · 三步走线
          </div>
          {relay.map((r, i) => (
            <div
              key={i}
              data-final-knowledge={i === 2 ? "appeal-document-relay" : undefined}
              style={{ display: "flex", alignItems: "center", gap: 14, ...enter(f, 12 + i * 10, -20, 0) }}
            >
              <TypeSort label={String(i + 1)} tone="lead" size={36} />
              <ProofCard style={{ flex: 1, padding: "10px 16px", fontSize: 20, fontWeight: 700 }}>{r}</ProofCard>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <ProofCard
            style={{ padding: "16px 22px", ...enter(f, 40, 26, 0) }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 8 }}>审理方式与人员</div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6 }}>
              • <b>原则上开庭</b>；没有新事实、理由、证据的可以不开庭审理
              <br />
              • 一个审判程序中参与过本案审判的审判人员，不得再参与该案其他程序审判
              <br />
              • 发回重审后再上诉的，<b>原二审合议庭成员不受限</b>
            </div>
          </ProofCard>
          <ProofCard
            data-final-knowledge="appeal-trial-object"
            style={{ padding: "16px 22px", flex: 1, ...enter(f, 52, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
              <span style={{ fontSize: 56, fontWeight: 950, color: "#8a2f22", fontFamily: "var(--inkloom-animation-mono, monospace)" }}>3</span>
              <div>
                <div style={{ fontSize: 23, fontWeight: 950 }}>个月审结（需延长：高院批；高院审理的由最高院批）</div>
              </div>
            </div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6, borderTop: "2px solid rgba(29,31,36,.35)", paddingTop: 10 }}>
              • 审理对象：对<b>一审裁判</b>和<b>被诉行政行为合法性</b>全面审查
              <br />
              • 对比：民诉二审对象为上诉范围；刑诉二审为对一审判决全面审查
            </div>
          </ProofCard>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <RedInkStamp label="判决 15 日 · 裁定 10 日" delay={70} rotation={-2} />
          </div>
        </div>
      </div>
    </PressShell>
  );
};
