import React from "react";
import { useCurrentFrame } from "remotion";
import { BrassPlaque, ExhibitCard, GalleryShell, Vitrine, enter } from "./theme";

export const DeadlineAndSupplementVitrineScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="deadline-defendant-15" data-final-knowledge="deadline-plaintiff-rules" data-final-knowledge="supplement-first-instance" */
  const f = useCurrentFrame();
  return (
    <GalleryShell code="04" title="举证期限与一审补充" subtitle="被告 15 日 · 原告开庭前 · 补充有门槛">
      <div
        data-layout="deadline-twin-vitrine-gate"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="defendant-and-plaintiff-deadlines-run-on-two-clock-vitrines,first-instance-supplement-lock-behind-eligibility"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="举证期限与一审证据补充"
        data-focal-channels="locator,contrast,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <BrassPlaque style={{ alignSelf: "flex-start" }}>期限表</BrassPlaque>
          <div
            data-final-knowledge="deadline-defendant-15"
            style={{ display: "flex", ...enter(f, 4, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "14px 18px", display: "flex", gap: 18, alignItems: "center" }}>
              <div style={{ textAlign: "center", flex: "0 0 120px" }}>
                <div style={{ fontSize: 62, fontWeight: 950, color: "#8a6d2f", fontFamily: "var(--inkloom-animation-mono, monospace)", lineHeight: 1 }}>15</div>
                <div style={{ fontSize: 19, fontWeight: 900 }}>日内提交</div>
              </div>
              <ExhibitCard style={{ flex: 1, fontSize: 20, fontWeight: 700, lineHeight: 1.55, padding: "10px 14px" }}>
                被告自<b>收到起诉状副本之日</b>起 15 日内提交全部证据和规范性文件
                <br />
                因不可抗力/客观正当事由需延期：15 日内书面提出，经准许在事由消除后 <b>15 日内</b>举证
              </ExhibitCard>
            </Vitrine>
          </div>
          <div
            data-final-knowledge="deadline-plaintiff-rules"
            style={{ display: "flex", ...enter(f, 18, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "14px 18px", display: "flex", gap: 18, alignItems: "center" }}>
              <div style={{ textAlign: "center", flex: "0 0 120px" }}>
                <div style={{ fontSize: 34, fontWeight: 950, color: "#8a6d2f", fontFamily: "var(--inkloom-animation-title, sans-serif)", lineHeight: 1.2 }}>开庭前</div>
                <div style={{ fontSize: 18, fontWeight: 900 }}>或指定交换日</div>
              </div>
              <ExhibitCard style={{ flex: 1, fontSize: 20, fontWeight: 700, lineHeight: 1.55, padding: "10px 14px" }}>
                原告在此期限提交；正当事由申请延期经准许可在<b>法庭调查中</b>提供
                <br />
                逾期提供 ➔ 责令说明理由；拒不说明或理由不成立 ➔ <b style={{ color: "#8a4a38" }}>视为放弃举证权利</b>
              </ExhibitCard>
            </Vitrine>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              style={{
                fontSize: 19,
                fontWeight: 800,
                color: "#6d6353",
                border: "2px dashed rgba(109,99,83,.6)",
                borderRadius: 8,
                padding: "8px 16px",
                ...enter(f, 40),
              }}
            >
              ⏱ 所有申请（调取/延期/保全/证人出庭/重新鉴定勘验）都在举证期限内提出
            </span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <BrassPlaque style={{ alignSelf: "flex-start" }}>一审补充规则</BrassPlaque>
          <div
            data-final-knowledge="supplement-first-instance"
            style={{ display: "flex", flex: 1, ...enter(f, 26, 24, 0) }}
          >
            <Vitrine glow style={{ flex: 1, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
              <ExhibitCard style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55, padding: "10px 14px" }}>
                <b>被告</b>：一审<b>原则上不允许</b>补充；但原告或第三人提出了<b>行政程序中未提出</b>的理由或证据的，经法院准许可补充
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55, padding: "10px 14px" }}>
                <b>原告</b>：一审<b>原则上可以</b>补充；但提出在行政程序中应被告合法要求应提出而未提出的证据，<b style={{ color: "#8a4a38" }}>一般不予采纳</b>
              </ExhibitCard>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <span
                  style={{
                    padding: "7px 16px",
                    background: "#3a3f45",
                    color: "#f7f3e6",
                    fontSize: 19,
                    fontWeight: 900,
                    borderRadius: 4,
                    fontFamily: "var(--inkloom-animation-label, sans-serif)",
                  }}
                >
                  记忆：被告关门 · 原告开门（各有一个例外）
                </span>
              </div>
            </Vitrine>
          </div>
        </div>
      </div>
    </GalleryShell>
  );
};
