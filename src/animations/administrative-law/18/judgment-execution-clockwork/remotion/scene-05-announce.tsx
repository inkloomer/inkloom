import React from "react";
import { useCurrentFrame } from "remotion";
import { DialCard, TribunalShell, VerdictStamp, enter } from "./theme";

export const AnnouncementPublicityPanelScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="announce-public-rules" data-final-knowledge="document-publicity-rules" */
  const f = useCurrentFrame();
  return (
    <TribunalShell code="05" title="宣判与文书公开面板" subtitle="一律公开宣判 · 判决书裁定书可查阅">
      <div
        data-layout="announcement-publicity-panel"
        data-visual-anchor="boundary"
        data-visual-grammar="announcement-and-publicity-mount-on-two-engraved-panels,time-rules-printed-as-dial-marks"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="宣判制度与文书公开"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <BrassPlaqueHeader label="宣判制度" />
          <DialCard style={{ padding: "16px 22px", flex: 1, ...enter(f, 4, -24, 0) }}>
            <div
              data-final-knowledge="announce-public-rules"
            >
              <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 10, color: "#8a3a34" }}>
                公开审理和不公开审理的案件，一律<b>公开宣告判决</b>
              </div>
              <div style={{ display: "flex", gap: 14 }}>
                <div style={{ flex: 1, background: "rgba(138,109,63,.12)", border: "2px solid rgba(140,109,63,.5)", borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: 34, fontWeight: 950, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>10 日内</div>
                  <div style={{ fontSize: 19, fontWeight: 800, marginTop: 4 }}>当庭宣判 ➔ 发判决书</div>
                </div>
                <div style={{ flex: 1, background: "rgba(138,109,63,.12)", border: "2px solid rgba(140,109,63,.5)", borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: 34, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>立即</div>
                  <div style={{ fontSize: 19, fontWeight: 800, marginTop: 4 }}>定期宣判 ➔ 发判决书</div>
                </div>
              </div>
              <div style={{ marginTop: 12, fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>
                一审宣判时必须告知当事人：<b>上诉权利、上诉期限、上诉的法院</b>
              </div>
            </div>
          </DialCard>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <BrassPlaqueHeader label="文书公开" />
          <DialCard
            data-final-knowledge="document-publicity-rules"
            style={{ padding: "16px 22px", flex: 1, ...enter(f, 16, 24, 0) }}
          >
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.65 }}>
              • <b>应当公开</b>：发生法律效力的<b>行政判决书、行政裁定书</b>
              <br />
              • <b>不得公开</b>：行政调解书、决定书、起诉状、答辩状等其他法律文书
              <br />
              • 涉及国家秘密、商业秘密和个人隐私的<b>不得公开</b>
              <br />
              • 可查阅生效判决书、裁定书的主体是<b>"公众"</b>——不限于原、被告
            </div>
            <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
              <VerdictStamp label="调解书决定书不上网" delay={40} rotation={-2} />
            </div>
          </DialCard>
        </div>
      </div>
    </TribunalShell>
  );
};

const BrassPlaqueHeader: React.FC<{ label: string }> = ({ label }) => (
  <span
    style={{
      display: "inline-block",
      padding: "5px 16px",
      background: "linear-gradient(180deg, #c2a061 0%, #8c6d3f 100%)",
      color: "#f3eedd",
      fontSize: 20,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label, sans-serif)",
      letterSpacing: 2,
      borderRadius: 3,
      alignSelf: "flex-start",
    }}
  >
    {label}
  </span>
);
