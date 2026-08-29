import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const SummaryProcedureQuoinScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PressShell code="05" title="简易程序楔子锁" subtitle="法定 · 约定 · 独任 45 日 · 可转普通">
      <div
        data-layout="summary-quoin-lock"
        data-visual-anchor="boundary"
        data-visual-grammar="statutory-and-agreed-summary-lanes-lock-behind-one-quoin,forty-five-day-limit-never-extends"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="简易程序适用与审限"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", gap: 14 }}>
            <ProofCard
            data-final-knowledge="summary-statutory-scope"
            style={{ flex: 1, padding: "16px 20px", ...enter(f, 4) }}
          >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <TypeSort label="法" tone="red" size={40} />
                <span style={{ fontSize: 23, fontWeight: 950 }}>法定简易（一审·事实清楚·权利义务明确·争议不大）</span>
              </div>
              <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55 }}>
                ① 依法当场作出的行政行为
                <br />
                ② 标的额 <b>2000 元以下</b>
                <br />
                ③ <b>政府信息公开案件</b>
              </div>
            </ProofCard>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, ...enter(f, 14) }}>
              <span style={{ fontSize: 34, fontWeight: 950, color: "#b5432f" }}>＋</span>
            </div>
            <ProofCard
              data-final-knowledge="summary-agreed-scope"
              style={{ flex: 1, padding: "16px 20px", ...enter(f, 18) }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <TypeSort label="约" tone="lead" size={40} />
                <span style={{ fontSize: 23, fontWeight: 950 }}>约定简易（当事人各方同意）</span>
              </div>
              <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55 }}>
                一审案件当事人各方同意适用简易程序的，可以适用
              </div>
            </ProofCard>
          </div>
          <ProofCard style={{ padding: "14px 20px", ...enter(f, 26) }}>
            <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.6 }}>
              <b style={{ color: "#8a2f22" }}>两条红线：</b>二审案件、发回重审案件、再审案件均不得适用；行政诉讼只要求<b>一审案件</b>，对法院级别无要求（民诉须基层法院/派出法庭）
            </div>
          </ProofCard>
          <ProofCard style={{ padding: "14px 20px", flex: 1, ...enter(f, 34) }}>
            <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.62 }}>
              • <b>独任审理</b>，审限立案之日起 <b>45 日内</b>审结（<b style={{ color: "#8a2f22" }}>无延长规定</b>；民诉为 3 个月且原则当庭宣判，行政诉讼无此要求）
              <br />
              • 可用<b>口头、电话、短信、传真、电子邮件</b>等简便方式传唤当事人、通知证人，送达裁判文书以外的诉讼文书
              <br />
              • 举证期限由法院确定，也可协商一致经法院准许，但<b>不得超过 15 日</b>；双方同意可立即开庭
            </div>
          </ProofCard>
        </div>
        <div style={{ flex: "0 0 430px", display: "flex", flexDirection: "column", gap: 14 }}>
          <ProofCard
            data-final-knowledge="summary-to-ordinary"
            style={{ padding: "16px 20px", ...enter(f, 8, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="转" tone="cream" size={44} />
              <span style={{ fontSize: 23, fontWeight: 950 }}>程序转化：楔子拔出回普通版</span>
            </div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6 }}>
              ① 审理中发现不宜适用简易 ➔ <b>裁定转普通程序</b>
              <br />
              ② 转普通应在<b>审理期限届满前</b>作出裁定，并将合议庭组成人员等书面通知双方
              <br />
              ③ 转普通后审理期限自<b>法院立案之日</b>起计算
            </div>
          </ProofCard>
          <div
            data-final-knowledge="summary-trial-rules"
            style={{
              background: "#1d1f24",
              border: `3px solid #b5432f`,
              borderRadius: 12,
              flex: 1,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              ...enter(f, 20, 26, 0),
            }}
          >
            <div>
              <div style={{ fontSize: 96, fontWeight: 950, color: "#efe8d6", fontFamily: "var(--inkloom-animation-mono, monospace)", lineHeight: 1 }}>45</div>
              <div style={{ fontSize: 25, fontWeight: 950, color: "#efe8d6", marginTop: 8 }}>日内审结 · 无延长</div>
              <div style={{ fontSize: 19, color: "#8d97a5", marginTop: 10 }}>审判员一人独任审理</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RedInkStamp label="二审·发回重审·再审一律不得简易" delay={70} rotation={-2} />
          </div>
        </div>
      </div>
    </PressShell>
  );
};
