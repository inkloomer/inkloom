import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

// Courtroom Docket Bench Design Palette
const J = {
  courtNavy: "#0a101f",
  docketDark: "#111a2e",
  benchWalnut: "#1a162b",
  cardBg: "rgba(17, 26, 46, 0.85)",
  cardBorder: "rgba(212, 175, 55, 0.28)",
  gold: "#d4af37",
  goldGlow: "rgba(212, 175, 55, 0.4)",
  brass: "#c59b27",
  parchment: "#f8fafc",
  subText: "#94a3b8",
  plaintiffBlue: "#3b82f6",
  plaintiffBg: "rgba(59, 130, 246, 0.12)",
  plaintiffBorder: "rgba(59, 130, 246, 0.5)",
  defendantRed: "#ef4444",
  defendantBg: "rgba(239, 68, 68, 0.12)",
  defendantBorder: "rgba(239, 68, 68, 0.5)",
  thirdAmber: "#f59e0b",
  thirdBg: "rgba(245, 158, 11, 0.12)",
  thirdBorder: "rgba(245, 158, 11, 0.5)",
  verdictGreen: "#10b981",
  verdictBg: "rgba(16, 185, 129, 0.12)",
  verdictBorder: "rgba(16, 185, 129, 0.5)",
  purpleAccent: "#a855f7",
};

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (f: number, d = 0, y = 24) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  transform: `translateY(${interpolate(f, [d, d + 22], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px)`,
});

const CourtHeader = ({
  code,
  title,
  subLabel,
}: {
  code: string;
  title: string;
  subLabel: string;
}) => (
  <header
    style={{
      position: "absolute",
      left: 56,
      right: 56,
      top: 32,
      height: 106,
      display: "flex",
      alignItems: "center",
      gap: 22,
      borderBottom: `2px solid rgba(212, 175, 55, 0.4)`,
      background: "linear-gradient(90deg, rgba(212,175,55,0.08) 0%, transparent 60%)",
      padding: "0 20px",
      borderRadius: "8px 8px 0 0",
    }}
  >
    {/* Gavel / Docket Badge */}
    <div
      style={{
        height: 64,
        padding: "0 22px",
        background: "linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        borderRadius: 6,
        boxShadow: "0 4px 16px rgba(212, 175, 55, 0.35)",
      }}
    >
      <span style={{ fontSize: 24 }}>⚖️</span>
      <span
        style={{
          fontSize: 20,
          fontWeight: 900,
          color: "#0a101f",
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-mono, monospace)",
        }}
      >
        卷宗 {code}
      </span>
    </div>

    {/* Main Headline */}
    <div>
      <h1
        className="font-animation-title"
        style={{
          fontSize: 42,
          lineHeight: 1.1,
          margin: 0,
          color: J.parchment,
          fontWeight: 900,
          letterSpacing: 1,
        }}
      >
        {title}
      </h1>
      <div
        style={{
          fontSize: 16,
          color: J.gold,
          marginTop: 4,
          fontWeight: 700,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-label, sans-serif)",
        }}
      >
        {subLabel}
      </div>
    </div>

    {/* Courtroom Watermark */}
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "rgba(212, 175, 55, 0.1)",
        border: "1px solid rgba(212, 175, 55, 0.3)",
        padding: "8px 18px",
        borderRadius: 20,
      }}
    >
      <span style={{ fontSize: 16, color: J.gold, fontWeight: 900, letterSpacing: 2 }}>
        🏛️ 行政审判中枢 · COURT DOCKET BENCH
      </span>
    </div>
  </header>
);

const CourtShell = ({
  code,
  title,
  subLabel,
  children,
}: {
  code: string;
  title: string;
  subLabel: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      background: `radial-gradient(ellipse at 50% 0%, #162444 0%, #0a101f 70%, #060913 100%)`,
      color: J.parchment,
      overflow: "hidden",
    }}
  >
    {/* Architectural Blueprint Grid Lines */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }}
    />

    <CourtHeader code={code} title={title} subLabel={subLabel} />

    <main
      style={{
        position: "absolute",
        left: 56,
        right: 56,
        top: 156,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);

// ==========================================
// SCENE 01: 直接起诉九宫格被告登记席
// ==========================================
export const DefendantGeneralBoardScene = () => {
  /* Static audit inventory: data-final-knowledge="def-slot-01" data-final-knowledge="def-slot-02" data-final-knowledge="def-slot-03" data-final-knowledge="def-slot-04" data-final-knowledge="def-slot-05" data-final-knowledge="def-slot-06" data-final-knowledge="def-slot-07" data-final-knowledge="def-slot-08" data-final-knowledge="def-slot-09" data-final-knowledge="defendant-mnemonic" */
  const f = useCurrentFrame();

  const slots = [
    { label: "1. 作出行为的行政机关", def: "该行政机关", color: J.plaintiffBlue, badge: "本位机关" },
    { label: "2. 法律/法规/规章授权组织", def: "该授权组织（村居委/高校/协会）", color: J.thirdAmber, badge: "授权主体" },
    { label: "3. 行政机关委托的组织", def: "委托的行政机关作被告", color: J.defendantRed, badge: "委托归责" },
    { label: "4. 派出机关（行署/区公所/街道）", def: "派出机关独立作被告", color: J.plaintiffBlue, badge: "派出主体" },
    { label: "5. 被撤销的行政机关", def: "继受机关 / 所属政府 / 垂直上一级", color: J.defendantRed, badge: "职权继受" },
    { label: "6. 临时组建的机构", def: "组建机关为被告", color: J.plaintiffBlue, badge: "组建责任" },
    { label: "7. 共同行为（共同署名）", def: "共同被告（不同意追加转第三人）", color: J.defendantRed, badge: "共同诉讼" },
    { label: "8. 假共同行为（混编署名）", def: "行政主体是被告，非行政主体是第三人", color: J.thirdAmber, badge: "主体剥离" },
    { label: "9. 经批准的行政行为", def: "诉讼看名义（对外署名者为被告）", color: J.gold, badge: "名义原则" },
  ];

  return (
    <CourtShell code="01" title="直接起诉：九大被告确定席位矩阵" subLabel="DIRECT SUIT DEFENDANT REGISTRATION MATRIX">
      <div
        data-layout="nine-slot-defendant-registry"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="nine-behavior-slots-map-to-their-defendants,joint-acts-split-into-defendant-and-third-party"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="direct-suit-defendant-identification"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 178px)",
            gap: 16,
          }}
        >
          {slots.map((s, i) => (
            <div
              key={s.label}
              data-final-knowledge={`def-slot-${String(i + 1).padStart(2, "0")}`}
              style={{
                background: J.cardBg,
                border: `2px solid ${s.color}66`,
                borderLeft: `6px solid ${s.color}`,
                borderRadius: 8,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: `0 6px 20px rgba(0,0,0,0.4), inset 0 0 16px ${s.color}0d`,
                ...enter(f, 4 + i * 5),
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 21, fontWeight: 900, color: J.parchment }}>
                  {s.label}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 850,
                    padding: "3px 10px",
                    borderRadius: 4,
                    background: `${s.color}22`,
                    color: s.color,
                    border: `1px solid ${s.color}55`,
                  }}
                >
                  {s.badge}
                </span>
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: s.color,
                  background: "rgba(0,0,0,0.35)",
                  padding: "10px 14px",
                  borderRadius: 6,
                  border: `1px dashed ${s.color}44`,
                }}
              >
                ➔ 被告：{s.def}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gavel Ribbon */}
        <div
          data-final-knowledge="defendant-mnemonic"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 6,
            height: 58,
            background: "linear-gradient(90deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.3) 50%, rgba(212,175,55,0.15) 100%)",
            border: `2px solid ${J.gold}`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            ...enter(f, 54),
          }}
        >
          <span style={{ fontSize: 24 }}>📜</span>
          <span style={{ fontSize: 22, fontWeight: 950, color: J.gold, letterSpacing: 1.5 }}>
            【被告总口诀】谁行为谁被告 · 授权组织自己当 · 委托告委托方 · 批准看对外名义
          </span>
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 02: 特别主体被告确定案卷台
// ==========================================
export const DefendantSpecialRoutesScene = () => {
  /* Static audit inventory: data-final-knowledge="special-route-1" data-final-knowledge="special-route-2" data-final-knowledge="special-route-3" data-final-knowledge="special-route-4" data-final-knowledge="special-summary" */
  const f = useCurrentFrame();

  return (
    <CourtShell code="02" title="特别主体：内设、开发区、征收、大队支队" subLabel="SPECIAL ADMINISTRATIVE SUBJECT DEFENDANT ROUTES">
      <div
        data-layout="four-special-defendant-routes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="four-special-subjects-route-to-their-defendants-by-name-or-authority,development-zones-follow-approval-and-authorization"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="special-subject-defendant-routes"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, height: 530 }}>
          {/* Card 1: 内设机构 / 派出机构 */}
          <div
            data-final-knowledge="special-route-1"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.plaintiffBlue}77`,
              borderTop: `6px solid ${J.plaintiffBlue}`,
              borderRadius: 8,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              ...enter(f, 6),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.plaintiffBlue }}>
                ① 内设机构与派出机构（如派出所）
              </span>
              <span style={{ fontSize: 16, background: `${J.plaintiffBlue}22`, color: J.plaintiffBlue, padding: "4px 12px", borderRadius: 4, fontWeight: 800 }}>
                授权/名义区分
              </span>
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.6, color: J.parchment }}>
              • 以所属机关名义 ➔ 被告为 <b style={{ color: J.plaintiffBlue }}>所属机关</b>
              <br />
              • 以自己名义 ➔ 被告为 <b style={{ color: J.gold }}>派出机构/内设机构自身</b>
              <br />
              • <span style={{ color: J.defendantRed, fontWeight: 900 }}>【致命陷阱】种类越权</span>（如派出所作出拘留）➔ 仍以 <b style={{ color: J.defendantRed }}>所属机关（县公安局）</b> 为被告！
            </div>
          </div>

          {/* Card 2: 开发区管理机构 */}
          <div
            data-final-knowledge="special-route-2"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.thirdAmber}77`,
              borderTop: `6px solid ${J.thirdAmber}`,
              borderRadius: 8,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              ...enter(f, 14),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.thirdAmber }}>
                ② 开发区管理机构
              </span>
              <span style={{ fontSize: 16, background: `${J.thirdAmber}22`, color: J.thirdAmber, padding: "4px 12px", borderRadius: 4, fontWeight: 800 }}>
                三级审批体系
              </span>
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.6, color: J.parchment }}>
              • <b style={{ color: J.verdictGreen }}>国务院/省级政府批准</b> ➔ 管委会及其职能部门 <b style={{ color: J.verdictGreen }}>均具独立被告资格</b>
              <br />
              • <b style={{ color: J.thirdAmber }}>非国/省批但有授权</b> ➔ 仅 <b style={{ color: J.thirdAmber }}>管委会为被告</b>（内设职能部门不能作被告）
              <br />
              • <b style={{ color: J.defendantRed }}>非国/省批且无授权</b> ➔ <b style={{ color: J.defendantRed }}>设立该机构的地方政府</b> 为被告
            </div>
          </div>

          {/* Card 3: 房屋征收补偿 */}
          <div
            data-final-knowledge="special-route-3"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.defendantRed}77`,
              borderTop: `6px solid ${J.defendantRed}`,
              borderRadius: 8,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              ...enter(f, 22),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.defendantRed }}>
                ③ 房屋征收补偿案件
              </span>
              <span style={{ fontSize: 16, background: `${J.defendantRed}22`, color: J.defendantRed, padding: "4px 12px", borderRadius: 4, fontWeight: 800 }}>
                征收部门责任
              </span>
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.6, color: J.parchment }}>
              • 市县政府确定的房屋征收部门（如区住建局）实施征收补偿 ➔ <b style={{ color: J.defendantRed }}>房屋征收部门为被告</b>
              <br />
              • 征收实施单位（如拆迁公司）受委托从事补偿行为 ➔ 仍以 <b style={{ color: J.defendantRed }}>委托的征收部门为被告</b>
            </div>
          </div>

          {/* Card 4: 大队与支队 */}
          <div
            data-final-knowledge="special-route-4"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.gold}77`,
              borderTop: `6px solid ${J.gold}`,
              borderRadius: 8,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              ...enter(f, 30),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.gold }}>
                ④ 交警大队与支队
              </span>
              <span style={{ fontSize: 16, background: `${J.gold}22`, color: J.gold, padding: "4px 12px", borderRadius: 4, fontWeight: 800 }}>
                法定授权主体
              </span>
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.6, color: J.parchment }}>
              • 县交警大队 ≈ 县交管局；市交警支队 ≈ 市交管局
              <br />
              • 法律法规直接授权：大队、支队均 <b style={{ color: J.gold }}>具有独立诉讼被告资格</b>
            </div>
          </div>
        </div>

        {/* Summary Footer */}
        <div
          data-final-knowledge="special-summary"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 6,
            height: 52,
            background: "rgba(212,175,55,0.12)",
            border: `2px dashed ${J.gold}`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 900,
            color: J.gold,
            ...enter(f, 44),
          }}
        >
          ⚡ 考点核心：种类越权告所属机关 · 开发区看国省批与授权 · 拆迁公司不当被告
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 03: 县级以上地方政府及部门被告规则
// ==========================================
export const DefendantGovRulesScene = () => {
  /* Static audit inventory: data-final-knowledge="gov-rule-guidance" data-final-knowledge="gov-rule-document" data-final-knowledge="gov-rule-force" */
  const f = useCurrentFrame();

  return (
    <CourtShell code="03" title="县级以上地方政府：谁行为、看文书、看力度" subLabel="COUNTY GOVERNMENT DEFENDANT CRITERIA">
      <div
        data-layout="government-defendant-three-rule-panels"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="guidance-keeps-the-department-as-defendant,orders-name-the-government,demands-follow-the-document"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="county-government-defendant-rules"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, height: 570 }}>
          {/* Panel 1: 谁行为，谁被告 */}
          <div
            data-final-knowledge="gov-rule-guidance"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.plaintiffBlue}77`,
              borderTop: `6px solid ${J.plaintiffBlue}`,
              borderRadius: 8,
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              ...enter(f, 6),
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 950, color: J.plaintiffBlue }}>
              规则一：谁行为，谁被告
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.55, color: J.parchment }}>
              • <b style={{ color: J.plaintiffBlue }}>政府柔性指导</b>（听取汇报/开协调会/下发意见）➔ 被告为 <b style={{ color: J.plaintiffBlue }}>具体履职的职能部门</b>
              <div
                style={{
                  marginTop: 12,
                  background: `${J.plaintiffBlue}1a`,
                  border: `1px solid ${J.plaintiffBlue}55`,
                  padding: "10px 14px",
                  borderRadius: 6,
                  fontSize: 19,
                  color: J.parchment,
                }}
              >
                例：市政府召开协调会指导市文旅局签订行政协议 ➔ 协议纠纷被告为<b>市文旅局</b>
              </div>
              <br />
              • <b style={{ color: J.thirdAmber }}>信息公开指定机构</b> 以自己名义答复 ➔ 被告为 <b style={{ color: J.thirdAmber }}>该指定机构</b>（突破一般法理特例！）
            </div>
          </div>

          {/* Panel 2: 有文书看文书，没文书告部门 */}
          <div
            data-final-knowledge="gov-rule-document"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.defendantRed}77`,
              borderTop: `6px solid ${J.defendantRed}`,
              borderRadius: 8,
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              ...enter(f, 14),
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 950, color: J.defendantRed }}>
              规则二：文书与实施分离
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.55, color: J.parchment }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: J.gold, marginBottom: 6 }}>
                【口诀】有文书看文书；没文书告部门
              </div>
              • 县政府责成职能部门实施违建强拆：
              <br />
              ① <b style={{ color: J.verdictGreen }}>有强拆决定书</b> ➔ 以作出决定的机关为被告
              <br />
              ② <b style={{ color: J.defendantRed }}>无决定书直接拆</b> ➔ 以具体实施强拆的部门为被告
              <br /><br />
              • 集体土地房屋拆除 / 国有土地征收强拆均适用此规则！
            </div>
          </div>

          {/* Panel 3: 指令 vs 责成 */}
          <div
            data-final-knowledge="gov-rule-force"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.thirdAmber}77`,
              borderTop: `6px solid ${J.thirdAmber}`,
              borderRadius: 8,
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              ...enter(f, 22),
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 950, color: J.thirdAmber }}>
              规则三：指令 vs 责成力度
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.55, color: J.parchment }}>
              • <b style={{ color: J.defendantRed }}>指令 / 责令</b>（命令照方案办，下级如提线木偶）➔ 意志作出者为被告 ➔ <b style={{ color: J.defendantRed }}>县政府为被告</b>
              <br /><br />
              • <b style={{ color: J.plaintiffBlue }}>责成</b>（指定交办，下级有独立意思裁量空间）➔ 按“有文书看文书，没文书告部门”分情况判断
              <br /><br />
              <span style={{ fontSize: 20, color: J.gold, fontWeight: 900 }}>
                力度等级：指令 (刚性) &gt; 责成 (交办) &gt; 指导 (柔性)
              </span>
            </div>
          </div>
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 04: 经过复议后再起诉三大金律
// ==========================================
export const DefendantAfterReviewScene = () => {
  /* Static audit inventory: data-final-knowledge="review-change" data-final-knowledge="review-uphold" data-final-knowledge="review-inaction" data-final-knowledge="change-detection" data-final-knowledge="mixed-outcome-rule" */
  const f = useCurrentFrame();

  return (
    <CourtShell code="04" title="经过复议：改变单独告、维持共同告、不作为择一告" subLabel="DEFENDANT AFTER ADMINISTRATIVE RECONSIDERATION">
      <div
        data-layout="three-review-outcome-beams"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-review-outcomes-beam-to-their-defendant-slots,mixed-outcomes-join-as-co-defendants"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="defendant-after-review-decides-by-outcome"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Track 1: 复议改变 */}
          <div
            data-final-knowledge="review-change"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.verdictGreen}77`,
              borderLeft: `8px solid ${J.verdictGreen}`,
              borderRadius: 8,
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ...enter(f, 6),
            }}
          >
            <div>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.verdictGreen }}>
                ① 复议改变（单独告）
              </span>
              <div style={{ fontSize: 21, color: J.parchment, marginTop: 4 }}>
                复议机关改变了原行为处理结果 ➔ <b style={{ color: J.verdictGreen }}>仅以复议机关为被告</b>（原机关转列为第三人）
              </div>
            </div>
            <div style={{ background: `${J.verdictGreen}22`, color: J.verdictGreen, padding: "8px 18px", borderRadius: 6, fontWeight: 900, fontSize: 20 }}>
              被告：复议机关
            </div>
          </div>

          {/* Track 2: 复议维持 */}
          <div
            data-final-knowledge="review-uphold"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.defendantRed}77`,
              borderLeft: `8px solid ${J.defendantRed}`,
              borderRadius: 8,
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ...enter(f, 14),
            }}
          >
            <div>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.defendantRed }}>
                ② 复议维持（共同告）
              </span>
              <div style={{ fontSize: 21, color: J.parchment, marginTop: 4 }}>
                实质审理过且行为结果未改变 ➔ <b style={{ color: J.defendantRed }}>原行为机关与复议机关为共同被告</b>（告漏了通知追加，原告拒绝仍列共同被告）
              </div>
            </div>
            <div style={{ background: `${J.defendantRed}22`, color: J.defendantRed, padding: "8px 18px", borderRadius: 6, fontWeight: 900, fontSize: 20 }}>
              共同被告：原机关 + 复议机关
            </div>
          </div>

          {/* Track 3: 复议不作为 */}
          <div
            data-final-knowledge="review-inaction"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.thirdAmber}77`,
              borderLeft: `8px solid ${J.thirdAmber}`,
              borderRadius: 8,
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ...enter(f, 22),
            }}
          >
            <div>
              <span style={{ fontSize: 26, fontWeight: 950, color: J.thirdAmber }}>
                ③ 复议不作为（择一告）
              </span>
              <div style={{ fontSize: 21, color: J.parchment, marginTop: 4 }}>
                未进行实质审理（超期未答复/违法驳回申请）➔ 对不作为不服告复议机关；对原行为不服告原机关
              </div>
            </div>
            <div style={{ background: `${J.thirdAmber}22`, color: J.thirdAmber, padding: "8px 18px", borderRadius: 6, fontWeight: 900, fontSize: 20 }}>
              二选一：复议机关 OR 原机关
            </div>
          </div>

          {/* Bottom Dual Explanations */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 6 }}>
            <div
              data-final-knowledge="change-detection"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: `1px solid ${J.gold}55`,
                borderRadius: 8,
                padding: "14px 20px",
                fontSize: 20,
                lineHeight: 1.5,
                ...enter(f, 32),
              }}
            >
              <b style={{ color: J.gold }}>改变的实质认定：</b>确认无效属改变；确认违法一般属改变（程序瑕疵确认违法除外）；仅改变法律事实依据但结果未变 ➔ <b style={{ color: J.defendantRed }}>仍属维持！</b>
            </div>

            <div
              data-final-knowledge="mixed-outcome-rule"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: `1px solid ${J.defendantRed}55`,
                borderRadius: 8,
                padding: "14px 20px",
                fontSize: 20,
                lineHeight: 1.5,
                ...enter(f, 40),
              }}
            >
              <b style={{ color: J.defendantRed }}>多重因素规则：</b>复议决定既有维持内容，又有改变或不予受理内容的 ➔ <b style={{ color: J.defendantRed }}>一律以作出原行政行为的机关和复议机关为共同被告！</b>
            </div>
          </div>
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 05: 原告资格概念五大审判柱石
// ==========================================
export const PlaintiffConceptLanternScene = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-definition" data-final-knowledge="lantern-1" data-final-knowledge="lantern-2" data-final-knowledge="lantern-3" data-final-knowledge="lantern-4" data-final-knowledge="lantern-5" data-final-knowledge="lantern-six-relationship" */
  const f = useCurrentFrame();

  const lanterns = [
    { title: "主体要件", desc: "公民、法人或其他组织（行政机关作为行政主体时不享有原告资格）", color: J.plaintiffBlue },
    { title: "主观要件", desc: "“认为”受侵犯即可提起诉讼，属主观认识，不以实体胜诉为前提", color: J.thirdAmber },
    { title: "侵犯要件", desc: "实体权利受到必然影响（权利义务发生增减变化）", color: J.defendantRed },
    { title: "自身要件", desc: "“其”合法权益受损（自身利益；普通公民无提起公益诉讼原告资格）", color: J.gold },
    { title: "合法要件", desc: "受法律保护的“合法权益”，行政诉讼不保护非法利益", color: J.verdictGreen },
  ];

  return (
    <CourtShell code="05" title="原告资格：法庭审理五大准入基石" subLabel="PLAINTIFF STANDING FIVE JURISDICTIONAL PILLARS">
      <div
        data-layout="five-concept-lanterns"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-requirement-lanterns-light-the-plaintiff-concept,each-lantern-tests-one-element"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="plaintiff-concept-five-elements"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 8 }}
      >
        {/* Core Definition Banner */}
        <div
          data-final-knowledge="plaintiff-definition"
          style={{
            background: "linear-gradient(90deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.25) 50%, rgba(212,175,55,0.15) 100%)",
            border: `2px solid ${J.gold}`,
            borderRadius: 8,
            padding: "14px 24px",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 950,
            color: J.parchment,
            ...enter(f, 4),
          }}
        >
          原告定义：<span style={{ color: J.gold }}>认为行政行为侵犯其合法权益</span>，并与该行为具有<span style={{ color: J.verdictGreen }}>法律上利害关系</span>的公民、法人或其他组织
        </div>

        {/* Five Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginTop: 18, height: 350 }}>
          {lanterns.map((l, i) => (
            <div
              key={l.title}
              data-final-knowledge={`lantern-${i + 1}`}
              style={{
                background: J.cardBg,
                border: `2px solid ${l.color}66`,
                borderTop: `6px solid ${l.color}`,
                borderRadius: 8,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
                boxShadow: `0 6px 18px rgba(0,0,0,0.35)`,
                ...enter(f, 10 + i * 6),
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: `${l.color}22`,
                  border: `2px solid ${l.color}`,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 24,
                  fontWeight: 950,
                  color: l.color,
                }}
              >
                0{i + 1}
              </div>
              <div style={{ fontSize: 23, fontWeight: 950, color: l.color }}>
                {l.title}
              </div>
              <div style={{ fontSize: 18, lineHeight: 1.45, color: J.parchment, marginTop: 4 }}>
                {l.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Distinction Banner */}
        <div
          data-final-knowledge="lantern-six-relationship"
          style={{
            marginTop: 14,
            background: "rgba(0,0,0,0.35)",
            border: `2px dashed ${J.thirdAmber}`,
            borderRadius: 8,
            padding: "12px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 21,
            fontWeight: 900,
            ...enter(f, 46),
          }}
        >
          <span style={{ color: J.parchment }}>
            ⚖️ 利害关系双分法：<b style={{ color: J.plaintiffBlue }}>行政相对人（必然有原告资格）</b> vs <b style={{ color: J.thirdAmber }}>行政相关人（视具体法律利害关系而定）</b>
          </span>
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 06: 行政相关人五种关系与五种结论
// ==========================================
export const RelatedPartyFiveTiesScene = () => {
  /* Static audit inventory: data-final-knowledge="tie-1" data-final-knowledge="tie-2" data-final-knowledge="tie-3" data-final-knowledge="tie-4" data-final-knowledge="tie-5" data-final-knowledge="tie-mnemonic" */
  const f = useCurrentFrame();

  const ties = [
    { title: "1. 侵权关系", status: "有原告资格", ok: true, desc: "侵权受害人：行政机关不予处理，或处罚加害人轻微 ➔ 受害人有权起诉要求追究/加重责任", color: J.verdictGreen },
    { title: "2. 亲属关系", status: "无原告资格", ok: false, desc: "仅凭亲属关系（父子/夫妻/兄弟）仅具有事实利害关系，不具有法律上利害关系 ➔ 无资格", color: J.defendantRed },
    { title: "3. 物权关系", status: "有原告资格", ok: true, desc: "所有权与所有权/相邻权/用益物权冲突（如建楼遮挡相邻采光、土地确权重叠） ➔ 有权起诉", color: J.verdictGreen },
    { title: "4. 公平竞争关系", status: "有原告资格", ok: true, desc: "行政机关滥用行政权力排除或限制竞争，使经营者陷入不利竞争地位 ➔ 有权起诉", color: J.verdictGreen },
    { title: "5. 合同关系", status: "口诀判定", ok: true, desc: "【口诀】相关人自身“有民诉，没行政；没民诉，有行政”（买卖合同被吊销执照不能起诉）", color: J.thirdAmber },
  ];

  return (
    <CourtShell code="06" title="相关人利害关系：五种民行关系五种裁决" subLabel="RELATED PARTY STANDING: FIVE RELATIONSHIP CATEGORIES">
      <div
        data-layout="five-tie-relationship-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="five-relationship-lanes-decide-the-related-partys-standing,kinship-alone-carries-no-standing"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="related-party-standing-by-relationship-type"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ties.map((t, i) => (
            <div
              key={t.title}
              data-final-knowledge={`tie-${i + 1}`}
              style={{
                background: J.cardBg,
                border: `2px solid ${t.color}66`,
                borderLeft: `8px solid ${t.color}`,
                borderRadius: 8,
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ...enter(f, 4 + i * 7),
              }}
            >
              <div style={{ width: 220, fontSize: 23, fontWeight: 950, color: t.color, display: "flex", alignItems: "center", gap: 10 }}>
                <span>{t.ok ? "🟢" : "🔴"}</span>
                <span>{t.title}</span>
              </div>
              <div style={{ flex: 1, fontSize: 20, color: J.parchment, padding: "0 16px" }}>
                {t.desc}
              </div>
              <div
                style={{
                  background: `${t.color}22`,
                  color: t.color,
                  border: `1px solid ${t.color}66`,
                  padding: "6px 14px",
                  borderRadius: 6,
                  fontSize: 18,
                  fontWeight: 900,
                }}
              >
                {t.status}
              </div>
            </div>
          ))}
        </div>

        {/* Contract Rule Footer */}
        <div
          data-final-knowledge="tie-mnemonic"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 6,
            height: 52,
            background: "linear-gradient(90deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.3) 50%, rgba(212,175,55,0.15) 100%)",
            border: `2px solid ${J.gold}`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 950,
            color: J.gold,
            ...enter(f, 44),
          }}
        >
          📜 合同关系做题必杀口诀：相关人自身“有民诉，没行政；没民诉，有行政”
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 07: 特殊组织的原告资格八大席位
// ==========================================
export const OrganizationPlaintiffsScene = () => {
  /* Static audit inventory: data-final-knowledge="org-01" data-final-knowledge="org-02" data-final-knowledge="org-03" data-final-knowledge="org-04" data-final-knowledge="org-05" data-final-knowledge="org-06" data-final-knowledge="org-07" data-final-knowledge="org-08" data-final-knowledge="org-exam-tip" */
  const f = useCurrentFrame();

  const orgs = [
    { name: "1. 合伙企业", who: "核准登记的字号为原告", color: J.plaintiffBlue },
    { name: "2. 个人合伙（未领照）", who: "全体合伙人为共同原告（可推选代表人）", color: J.thirdAmber },
    { name: "3. 个体工商户", who: "有字号以字号为原告；无字号以经营者为原告", color: J.plaintiffBlue },
    { name: "4. 非营利法人", who: "出资人、设立人可以自己的名义起诉", color: J.thirdAmber },
    { name: "5. 业主委员会", who: "业委会以自己名义起诉；不起诉则过半数业主起诉", color: J.verdictGreen },
    { name: "6. 股份制企业", who: "股东会/董事会/法定代表人均以企业名义起诉", color: J.defendantRed },
    { name: "7. 联营/合资/合作投资人", who: "投资人均可以自己的名义起诉（保护合资利益）", color: J.gold },
    { name: "8. 非国有企业撤销兼并", who: "企业或者其法定代表人可以自己的名义起诉", color: J.defendantRed },
  ];

  return (
    <CourtShell code="07" title="组织原告：谁能以自己的名义起诉" subLabel="ORGANIZATIONAL PLAINTIFF STANDING REGISTRY">
      <div
        data-layout="organization-plaintiff-registry"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="seven-organization-types-slot-into-their-own-name-or-entity-name,long-entity-names-signal-the-three-exam-points"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="organization-plaintiff-name-rules"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {orgs.map((o, i) => (
            <div
              key={o.name}
              data-final-knowledge={`org-${String(i + 1).padStart(2, "0")}`}
              style={{
                background: J.cardBg,
                border: `2px solid ${o.color}66`,
                borderLeft: `6px solid ${o.color}`,
                borderRadius: 8,
                padding: "14px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                ...enter(f, 4 + i * 5),
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 950, color: J.parchment }}>
                {o.name}
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: o.color }}>
                ➔ {o.who}
              </div>
            </div>
          ))}
        </div>

        {/* Exam Tip Banner */}
        <div
          data-final-knowledge="org-exam-tip"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 6,
            height: 52,
            background: "rgba(212,175,55,0.12)",
            border: `2px dashed ${J.gold}`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 21,
            fontWeight: 900,
            color: J.gold,
            ...enter(f, 48),
          }}
        >
          💡 试卷密码：题干中企业名称表述特别长（股份制、合资、非国有）➔ 考点必在原告起诉名义！
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 08: 第三人特征与两种类型
// ==========================================
export const ThirdPartySeatScene = () => {
  /* Static audit inventory: data-final-knowledge="third-party-core" data-final-knowledge="third-party-plaintiff-type" data-final-knowledge="third-party-defendant-type" data-final-knowledge="third-party-procedure" */
  const f = useCurrentFrame();

  return (
    <CourtShell code="08" title="第三人：独三特征与两大席位类型" subLabel="THIRD PARTY STANDING AND JOINDER RULES">
      <div
        data-layout="third-party-seat-board"
        data-visual-anchor="role-pair"
        data-visual-grammar="third-party-sits-between-the-parties-with-independent-claims,plaintiff-type-and-defendant-type-seats-are-marked"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="third-party-characteristics-and-two-types"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 8 }}
      >
        {/* Top Feature Banner */}
        <div
          data-final-knowledge="third-party-core"
          style={{
            background: J.cardBg,
            border: `2px solid ${J.thirdAmber}`,
            borderRadius: 8,
            padding: "14px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 950, color: J.thirdAmber }}>
            🏛️ 核心特征：行政诉讼第三人均为【有独立请求权第三人】
          </div>
          <div style={{ fontSize: 20, color: J.parchment }}>
            享有一审当事人完整权利：可上诉、申请调取证据、申请执行生效裁判
          </div>
        </div>

        {/* Dual Type Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 16, height: 380 }}>
          {/* Plaintiff-type Third Party */}
          <div
            data-final-knowledge="third-party-plaintiff-type"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.plaintiffBlue}77`,
              borderTop: `6px solid ${J.plaintiffBlue}`,
              borderRadius: 8,
              padding: "20px 22px",
              ...enter(f, 12),
            }}
          >
            <div style={{ fontSize: 25, fontWeight: 950, color: J.plaintiffBlue, marginBottom: 12 }}>
              原告型第三人（民）
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.6, color: J.parchment }}>
              • 与被诉行政行为有法律上利害关系：自己起诉是原告；他人先起诉时有资格作第三人
              <br /><br />
              • <b style={{ color: J.thirdAmber }}>利益相反</b>（如争议地块判给甲，乙起诉）➔ <b style={{ color: J.thirdAmber }}>直接追加甲为第三人</b>
              <br />
              • <b style={{ color: J.verdictGreen }}>利益一致</b>（如夫妇被罚款5000元，夫起诉）➔ <b style={{ color: J.verdictGreen }}>先考虑共同原告</b>，妻不同意再列第三人
            </div>
          </div>

          {/* Defendant-type Third Party */}
          <div
            data-final-knowledge="third-party-defendant-type"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.defendantRed}77`,
              borderTop: `6px solid ${J.defendantRed}`,
              borderRadius: 8,
              padding: "20px 22px",
              ...enter(f, 20),
            }}
          >
            <div style={{ fontSize: 25, fontWeight: 950, color: J.defendantRed, marginBottom: 12 }}>
              被告型第三人（官 · 仅4种情形！）
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.6, color: J.parchment }}>
              ① <b style={{ color: J.gold }}>假共同行为</b>：共同署名的非行政组织（如消协）
              <br />
              ② <b style={{ color: J.gold }}>相互矛盾行政行为</b> 中非被告的行政机关
              <br />
              ③ <b style={{ color: J.gold }}>共同行为告漏了</b>：法院通知追加原告拒绝 ➔ 通知该机关为第三人
              <br />
              ④ <b style={{ color: J.gold }}>复议改变后再起诉</b>：被告为复议机关，原机关为第三人
            </div>
          </div>
        </div>

        {/* Bottom Procedure Notice */}
        <div
          data-final-knowledge="third-party-procedure"
          style={{
            marginTop: 14,
            background: "rgba(0,0,0,0.3)",
            border: `1px dashed ${J.gold}`,
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 20,
            fontWeight: 800,
            color: J.gold,
            ...enter(f, 32),
          }}
        >
          ⚠️ 程序铁律：一审应通知第三人而未通知 ➔ 二审法院必须【撤销原判，发回重审】！
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 09: 级别管辖双层法庭沙盘
// ==========================================
export const JurisdictionFloorsScene = () => {
  /* Static audit inventory: data-final-knowledge="jurisdiction-basic-floor" data-final-knowledge="jurisdiction-intermediate-floor" data-final-knowledge="jurisdiction-co-defendant-rule" */
  const f = useCurrentFrame();

  return (
    <CourtShell code="09" title="级别管辖：基层原则与中院四类案件" subLabel="COURT HIERARCHY LEVEL JURISDICTION">
      <div
        data-layout="jurisdiction-lighthouse-floors"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="basic-floor-and-intermediate-floor-hold-distinct-cases,co-defendant-levels-follow-the-original-actor"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="level-jurisdiction-two-floors"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 20, height: 490 }}>
          {/* Basic Court */}
          <div
            data-final-knowledge="jurisdiction-basic-floor"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.plaintiffBlue}77`,
              borderTop: `6px solid ${J.plaintiffBlue}`,
              borderRadius: 8,
              padding: "24px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              ...enter(f, 6),
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 950, color: J.plaintiffBlue }}>
              基层人民法院（第一审原则）
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.6, color: J.parchment }}>
              • 第一审行政案件原则上由基层人民法院管辖
              <br /><br />
              • 除法律规定由中院、高院、最高法管辖的第一审案件外，其余案件全部归基层法院！
            </div>
            <div style={{ marginTop: "auto", background: `${J.plaintiffBlue}1a`, padding: "12px 16px", borderRadius: 6, fontSize: 20, color: J.gold }}>
              🏛️ 兜底管辖楼层：凡未明确列举归中院者，一律基层管辖
            </div>
          </div>

          {/* Intermediate Court */}
          <div
            data-final-knowledge="jurisdiction-intermediate-floor"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.gold}77`,
              borderTop: `6px solid ${J.gold}`,
              borderRadius: 8,
              padding: "24px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              ...enter(f, 14),
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 950, color: J.gold }}>
              中级人民法院（法定四类案件）
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.55, color: J.parchment }}>
              ① <b style={{ color: J.gold }}>级别高</b>：被告为县级以上地方政府、国务院部门（注意：不含县级政府工作部门！）
              <br />
              ② <b style={{ color: J.gold }}>性质特</b>：海关处理的案件；证券交易所为被告或第三人的案件
              <br />
              ③ <b style={{ color: J.gold }}>人数多</b>：本辖区内社会影响重大的共同诉讼案件
              <br />
              ④ <b style={{ color: J.gold }}>有涉外</b>：涉外或者涉及香港特别行政区、澳门特别行政区、台湾地区的案件
            </div>
          </div>
        </div>

        {/* Co-defendant Rule Banner */}
        <div
          data-final-knowledge="jurisdiction-co-defendant-rule"
          style={{
            marginTop: 14,
            background: "linear-gradient(90deg, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0.25) 50%, rgba(239,68,68,0.15) 100%)",
            border: `2px solid ${J.defendantRed}`,
            borderRadius: 8,
            padding: "14px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 950,
            ...enter(f, 26),
          }}
        >
          <span style={{ color: J.defendantRed }}>
            ⚡ 复议维持共同被告“就低原则”：以作出原行政行为的机关确定级别管辖（原机关为县公安局 ➔ 基层法院管辖！）
          </span>
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 10: 地域管辖四步走法则
// ==========================================
export const TerritorialStepsScene = () => {
  /* Static audit inventory: data-final-knowledge="step-1" data-final-knowledge="step-2" data-final-knowledge="step-3" data-final-knowledge="step-4" data-final-knowledge="territorial-order-tip" */
  const f = useCurrentFrame();

  const steps = [
    { num: "01", title: "不动产案件", who: "不动产所在地法院专属管辖", desc: "土地、房屋等不动产征收、登记纠纷，排他专属", color: J.defendantRed },
    { num: "02", title: "经过复议案件", who: "原机关所在地 或 复议机关所在地", desc: "维持或改变均可由最初机关或复议机关所在地管辖", color: J.thirdAmber },
    { num: "03", title: "限制人身自由", who: "原告所在地 或 被告所在地", desc: "原告地含户籍地、经常居住地、被限制人身自由地", color: J.plaintiffBlue },
    { num: "04", title: "一般地域管辖", who: "原告就被告（最初机关所在地）", desc: "由最初作出行政行为的行政机关所在地法院管辖", color: J.verdictGreen },
  ];

  return (
    <CourtShell code="10" title="地域管辖：四步走判定法庭" subLabel="TERRITORIAL VENUE FOUR-STEP DETERMINATION LADDER">
      <div
        data-layout="territorial-four-step-ladder"
        data-visual-anchor="flow-path"
        data-visual-grammar="four-territorial-steps-are-climbed-in-order,immovable-property-leads-then-review-and-detention"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="territorial-jurisdiction-step-order"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, height: 490 }}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              data-final-knowledge={`step-${i + 1}`}
              style={{
                background: J.cardBg,
                border: `2px solid ${s.color}66`,
                borderTop: `6px solid ${s.color}`,
                borderRadius: 8,
                padding: "22px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
                ...enter(f, 6 + i * 8),
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 28, fontWeight: 950, color: s.color }}>第 {i + 1} 步</span>
                <span style={{ fontSize: 16, background: `${s.color}22`, color: s.color, padding: "2px 8px", borderRadius: 4, fontWeight: 800 }}>STEP {s.num}</span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 950, color: J.parchment }}>
                {s.title}
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: s.color, background: "rgba(0,0,0,0.3)", padding: "10px 12px", borderRadius: 6 }}>
                ➔ {s.who}
              </div>
              <div style={{ fontSize: 18, lineHeight: 1.5, color: J.subText, marginTop: "auto" }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Decision Order Tip */}
        <div
          data-final-knowledge="territorial-order-tip"
          style={{
            marginTop: 14,
            background: "linear-gradient(90deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.3) 50%, rgba(212,175,55,0.15) 100%)",
            border: `2px solid ${J.gold}`,
            borderRadius: 8,
            padding: "12px 24px",
            textAlign: "center",
            fontSize: 22,
            fontWeight: 950,
            color: J.gold,
            ...enter(f, 44),
          }}
        >
          ⚖️ 做题黄金顺序：先定被告 ➔ 先级别后地域 ➔ 地域：不动产 ➔ 复议 / 人身自由 ➔ 原告就被告
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// SCENE 11: 诉讼代表人与代理人席位
// ==========================================
export const RepresentativeDeskScene = () => {
  /* Static audit inventory: data-final-knowledge="representative-rule" data-final-knowledge="agent-rule" */
  const f = useCurrentFrame();

  return (
    <CourtShell code="11" title="诉讼席位：诉讼代表人与诉讼代理人" subLabel="LITIGATION REPRESENTATIVES AND LEGAL AGENTS">
      <div
        data-layout="representative-vs-agent-desk"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="representative-and-agent-split-the-desk,quota-rules-define-both-roles"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="representative-and-agent-quotas"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, height: 570 }}>
          {/* Representative Column */}
          <div
            data-final-knowledge="representative-rule"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.plaintiffBlue}77`,
              borderTop: `8px solid ${J.plaintiffBlue}`,
              borderRadius: 8,
              padding: "28px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              ...enter(f, 6),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 30, fontWeight: 950, color: J.plaintiffBlue }}>
                👥 诉讼代表人（本身是原告）
              </span>
              <span style={{ fontSize: 18, background: `${J.plaintiffBlue}22`, color: J.plaintiffBlue, padding: "4px 12px", borderRadius: 4, fontWeight: 800 }}>
                2 ~ 5 人
              </span>
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.65, color: J.parchment }}>
              ① <b style={{ color: J.plaintiffBlue }}>适用门槛</b>：同案原告人数须为 <b style={{ color: J.plaintiffBlue }}>10人以上</b>
              <br />
              ② <b style={{ color: J.plaintiffBlue }}>推选人数</b>：由原告推选 <b style={{ color: J.plaintiffBlue }}>2 ~ 5 名代表人</b>
              <br />
              ③ <b style={{ color: J.gold }}>指定产生</b>：限期内未选定的，由人民法院依职权指定
              <br />
              ④ <b style={{ color: J.verdictGreen }}>裁判效力</b>：代表人的诉讼行为及裁判效力 <b style={{ color: J.verdictGreen }}>及于全体当事人</b>
            </div>
          </div>

          {/* Agent Column */}
          <div
            data-final-knowledge="agent-rule"
            style={{
              background: J.cardBg,
              border: `2px solid ${J.thirdAmber}77`,
              borderTop: `8px solid ${J.thirdAmber}`,
              borderRadius: 8,
              padding: "28px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              ...enter(f, 14),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 30, fontWeight: 950, color: J.thirdAmber }}>
                ⚖️ 诉讼代理人（受托代为诉讼）
              </span>
              <span style={{ fontSize: 18, background: `${J.thirdAmber}22`, color: J.thirdAmber, padding: "4px 12px", borderRadius: 4, fontWeight: 800 }}>
                1 ~ 2 人
              </span>
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.65, color: J.parchment }}>
              ① <b style={{ color: J.thirdAmber }}>委托人数</b>：当事人、法定代理人可委托 <b style={{ color: J.thirdAmber }}>1 ~ 2 人</b>
              <br />
              ② <b style={{ color: J.thirdAmber }}>委托手续</b>：应向法院提交授权委托书，记明委托事项与具体权限
              <br />
              ③ <b style={{ color: J.defendantRed }}>【特例】口头委托</b>：被限制人身自由无法书面委托的，可 <b style={{ color: J.defendantRed }}>口头委托近亲属</b>，近亲属可先行起诉
              <br />
              ④ <b style={{ color: J.gold }}>变更解除</b>：解除或变更委托的，应当书面报告法院
            </div>
          </div>
        </div>
      </div>
    </CourtShell>
  );
};

// ==========================================
// MAIN COMPOSITION
// ==========================================
export const LitigantHierarchyBeacon = () => (
  <AbsoluteFill>
    <TimelineSequence name="01" start={SCENES["defendant-general-board"].start} duration={SCENES["defendant-general-board"].duration}>
      <DefendantGeneralBoardScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["defendant-special-routes"].start} duration={SCENES["defendant-special-routes"].duration}>
      <DefendantSpecialRoutesScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["defendant-gov-rules"].start} duration={SCENES["defendant-gov-rules"].duration}>
      <DefendantGovRulesScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["defendant-after-review"].start} duration={SCENES["defendant-after-review"].duration}>
      <DefendantAfterReviewScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["plaintiff-concept-lantern"].start} duration={SCENES["plaintiff-concept-lantern"].duration}>
      <PlaintiffConceptLanternScene />
    </TimelineSequence>
    <TimelineSequence name="06" start={SCENES["related-party-five-ties"].start} duration={SCENES["related-party-five-ties"].duration}>
      <RelatedPartyFiveTiesScene />
    </TimelineSequence>
    <TimelineSequence name="07" start={SCENES["organization-plaintiffs"].start} duration={SCENES["organization-plaintiffs"].duration}>
      <OrganizationPlaintiffsScene />
    </TimelineSequence>
    <TimelineSequence name="08" start={SCENES["third-party-seat"].start} duration={SCENES["third-party-seat"].duration}>
      <ThirdPartySeatScene />
    </TimelineSequence>
    <TimelineSequence name="09" start={SCENES["jurisdiction-floors"].start} duration={SCENES["jurisdiction-floors"].duration}>
      <JurisdictionFloorsScene />
    </TimelineSequence>
    <TimelineSequence name="10" start={SCENES["territorial-steps"].start} duration={SCENES["territorial-steps"].duration}>
      <TerritorialStepsScene />
    </TimelineSequence>
    <TimelineSequence name="11" start={SCENES["representative-desk"].start} duration={SCENES["representative-desk"].duration}>
      <RepresentativeDeskScene />
    </TimelineSequence>
  </AbsoluteFill>
);

export default LitigantHierarchyBeacon;
