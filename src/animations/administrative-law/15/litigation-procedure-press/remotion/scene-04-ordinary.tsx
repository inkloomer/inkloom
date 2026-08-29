import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const TrialOrdinaryComposeLockupScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="ordinary-document-relay" */
  const f = useCurrentFrame();
  const relay = [
    ["法院", "起诉状副本 5 日内发被告"],
    ["被告", "收到 15 日内提交答辩状（不提交不影响审理）"],
    ["法院", "5 日内将答辩状副本发原告"],
    ["法院", "开庭 3 日前用传票传唤当事人（证人/鉴定人/勘验人/翻译人员用通知书）"],
  ];
  return (
    <PressShell code="04" title="普通程序排版锁版" subtitle="合议庭 · 交换诉状 · 审理对象 · 6 个月审限">
      <div
        data-layout="ordinary-trial-compose-galley"
        data-visual-anchor="flow-path"
        data-visual-grammar="document-relay-steps-lock-into-one-galley,panel-composition-and-six-month-limit-frame-the-trial"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="一审普通程序全流程"
        data-focal-channels="connector,locator,contrast"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: "0 0 560px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, ...enter(f, 4) }}>
            <TypeSort label="合" tone="red" size={46} />
            <div
              data-final-knowledge="ordinary-panel-composition"
              style={{
                flex: 1,
                background: "#1d1f24",
                border: `2px solid #b5432f`,
                borderRadius: 8,
                padding: "10px 16px",
                fontSize: 21,
                fontWeight: 800,
                color: "#efe8d6",
              }}
            >
              合议庭成员应是 <b>3 人以上</b> 的单数
            </div>
          </div>
          <div style={{ fontSize: 21, fontWeight: 950, color: "#8d97a5", marginTop: 4, letterSpacing: 2 }}>
            交换诉状 · 四步上版
          </div>
          {relay.map((r, i) => (
            <div
              key={i}
              data-final-knowledge={i === 1 ? "ordinary-document-relay" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                ...enter(f, 10 + i * 10, -24, 0),
              }}
            >
              <TypeSort label={String(i + 1)} tone="lead" size={38} />
              <ProofCard style={{ flex: 1, padding: "10px 16px", fontSize: 20.5, fontWeight: 700 }}>
                <b style={{ marginRight: 10, color: "#8a2f22" }}>{r[0]}</b>
                {r[1]}
              </ProofCard>
              {i < 3 && <span style={{ color: "#b5432f", fontSize: 30, fontWeight: 950 }}>→</span>}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <ProofCard
            data-final-knowledge="ordinary-object-open-trial"
            style={{ padding: "16px 22px", ...enter(f, 52, 26, 0) }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 8 }}>审理对象与方式</div>
            <div style={{ fontSize: 21, lineHeight: 1.55, fontWeight: 700 }}>
              • 对象：被诉行政行为的<b>合法性</b>；复议维持的，一并审原行为合法性与复议决定合法性
              <br />
              • 一审必须<b style={{ color: "#8a2f22" }}>开庭审理</b>，采取<b>言词审理</b>
              <br />
              • 公开审理为原则：国家秘密、个人隐私绝对不公开；商业秘密经申请可以不公开
            </div>
          </ProofCard>
          <ProofCard
            data-final-knowledge="ordinary-six-month-limit"
            style={{ padding: "16px 22px", flex: 1, ...enter(f, 64, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 64, fontWeight: 950, color: "#8a2f22", fontFamily: "var(--inkloom-animation-mono, monospace)" }}>6</span>
              <div>
                <div style={{ fontSize: 24, fontWeight: 950 }}>个月审结（需延长：高院批；高院审理的由最高院批）</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#5c5347", marginTop: 6, lineHeight: 1.45 }}>
                  自立案日起算至裁判宣告/调解书送达；公告、鉴定、调解、<b>中止诉讼</b>期间及管辖异议/管辖争议处理期间不计入
                </div>
              </div>
            </div>
          </ProofCard>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <RedInkStamp label="庭前落版 · 一审锁版" delay={80} rotation={-2} />
          </div>
        </div>
      </div>
    </PressShell>
  );
};
