import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const MediationRuleLockScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PressShell code="09" title="调解程序 · 锁版" subtitle="原则不调解 · 三类例外 · 签收生效 · 调判不兼得">
      <div
        data-layout="mediation-lock-panel"
        data-visual-anchor="boundary"
        data-visual-grammar="mediation-stays-locked-until-compensation-or-discretion-unlocks-it,signed-mediation-records-take-effect-and-exclude-judgment"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="行政诉讼调解制度"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: "0 0 420px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            data-final-knowledge="mediation-principle-exception"
            style={{
              background: "#1d1f24",
              border: `3px solid #8d97a5`,
              borderRadius: 12,
              padding: "26px 24px",
              textAlign: "center",
              ...enter(f, 4),
            }}
          >
            <TypeSort label="锁" tone="lead" size={64} style={{ margin: "0 auto 14px" }} />
            <div style={{ fontSize: 30, fontWeight: 950, color: "#efe8d6", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              原则：行政诉讼
              <br />
              不适用调解
            </div>
            <div style={{ fontSize: 19, color: "#8d97a5", marginTop: 10, lineHeight: 1.5 }}>
              行政机关处分须有法律依据
            </div>
          </div>
          <ProofCard style={{ padding: "16px 20px", flex: 1, ...enter(f, 14) }}>
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 8, color: "#8a2f22" }}>例外钥匙（三把）</div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6 }}>
              • <b>行政赔偿</b>、<b>补偿</b>案件
              <br />
              • <b>自由裁量行为</b>（行政处罚往往是裁量行为可调；行政许可往往是羁束行为不可调）
              <br />
              • 法律关系明确、事实清楚 + 征得双方同意后，可以迳行调解
            </div>
          </ProofCard>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <ProofCard
            data-final-knowledge="mediation-effective-rules"
            style={{ padding: "15px 20px", ...enter(f, 24, 24, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TypeSort label="效" tone="red" size={38} />
              <span style={{ fontSize: 22, fontWeight: 950 }}>调解书生效与形式</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              • 由审判人员、书记员署名，加盖法院印章，送达双方当事人
              <br />
              • 经双方当事人<b>签收</b>后即具法律效力；生效日期按<b>最后收到调解书的当事人签收日</b>确定
              <br />
              • <b style={{ color: "#8a2f22" }}>禁止强制调解</b>：不愿调解或未达成协议的，应当及时判决
            </div>
          </ProofCard>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <ProofCard style={{ padding: "14px 18px", ...enter(f, 34, 18, 0) }}>
              <div style={{ fontSize: 21, fontWeight: 950, marginBottom: 6 }}>调判不兼得</div>
              <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>
                自行和解或调解达成协议后，请求按协议内容制作<b>判决书</b>的，法院不予准许
              </div>
            </ProofCard>
            <ProofCard style={{ padding: "14px 18px", ...enter(f, 40, 18, 0) }}>
              <div style={{ fontSize: 21, fontWeight: 950, marginBottom: 6 }}>第三人参加</div>
              <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>
                经法院准许第三人可以参加调解；法院认为有必要的，可以通过第三人参加调解
              </div>
            </ProofCard>
          </div>
          <ProofCard
            data-final-knowledge="mediation-openness"
            style={{ padding: "15px 20px", flex: 1, ...enter(f, 48, 24, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TypeSort label="密" tone="lead" size={38} />
              <span style={{ fontSize: 22, fontWeight: 950 }}>公开制度</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              • <b>过程</b>不公开，但当事人同意公开的除外
              <br />
              • <b>内容</b>不公开，但为保护国家利益、社会公共利益、他人合法权益，法院认为确有必要公开的除外
            </div>
          </ProofCard>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <RedInkStamp label="调解过程与内容默认不公开" delay={62} rotation={-2} />
          </div>
        </div>
      </div>
    </PressShell>
  );
};
