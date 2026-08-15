import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Sunlit Archive Reading Room — 阳光档案阅览室
const C = {
  paper: "#F4EDDB",
  paperLight: "#FCF8EC",
  paperDeep: "#EAE0C8",
  ink: "#2E2821",
  inkSoft: "#6E6457",
  line: "#D8CBB0",
  teal: "#1F6F6B",
  tealInk: "#0F4C49",
  red: "#B5483F",
  redInk: "#7E2E2A",
  gold: "#B67E24",
  goldInk: "#7A5314",
  green: "#4E7C55",
  greenInk: "#2F5A38",
  indigo: "#5B5EA6",
  indigoInk: "#3C3E7A",
  blue: "#3B6E9F",
  white: "#FFFEF8",
};

const enter = (frame: number, delay = 0, dx = 0, dy = 26) => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `${interpolate(frame, [delay, delay + 24], [dx, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px ${interpolate(frame, [delay, delay + 24], [dy, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px`,
});

const PaperShell = ({
  code,
  title,
  subtitle,
  accent = C.teal,
  children,
}: {
  code: string;
  title: string;
  subtitle: string;
  accent?: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      background: C.paper,
      color: C.ink,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 10% 8%, rgba(255,251,238,0.98), transparent 30%)," +
        "radial-gradient(circle at 92% 96%, rgba(216,203,176,0.35), transparent 34%)," +
        "linear-gradient(rgba(46,40,33,0.035) 1px, transparent 1px)," +
        "linear-gradient(90deg, rgba(46,40,33,0.035) 1px, transparent 1px)",
      backgroundSize: "auto,auto,48px 48px,48px 48px",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 32,
        height: 104,
        display: "flex",
        alignItems: "center",
        gap: 22,
        borderBottom: `4px solid ${accent}`,
      }}
    >
      <div
        style={{
          width: 168,
          height: 72,
          border: `4px solid ${accent}`,
          backgroundColor: C.paperLight,
          display: "grid",
          placeItems: "center",
          fontSize: 22,
          fontWeight: 950,
          color: accent,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-mono)",
        }}
      >
        卷宗 {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900 }}
      >
        {title}
      </h1>
      <div
        style={{
          marginLeft: "auto",
          fontSize: 19,
          fontWeight: 900,
          letterSpacing: 2,
          color: C.inkSoft,
          fontFamily: "var(--inkloom-animation-label)",
          textAlign: "right",
        }}
      >
        {subtitle}
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 158,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);

const Tag = ({
  label,
  color = C.teal,
  outline = false,
  style,
}: {
  label: string;
  color?: string;
  outline?: boolean;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px 12px",
      backgroundColor: outline ? "transparent" : `${color}1A`,
      border: `2px solid ${color}`,
      borderRadius: 8,
      color,
      fontSize: 19,
      fontWeight: 900,
      fontFamily: "var(--inkloom-animation-label)",
      letterSpacing: 1,
      ...style,
    }}
  >
    {label}
  </span>
);

const SealStamp = ({
  label,
  pass = true,
  delay = 0,
  rotation = -5,
  style,
}: {
  label: string;
  pass?: boolean;
  delay?: number;
  rotation?: number;
  style?: React.CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const effectiveFrame = Math.max(0, frame - delay);
  const scale = spring({
    frame: effectiveFrame,
    fps,
    config: { damping: 10, stiffness: 220, mass: 0.6 },
  });
  const opacity = interpolate(effectiveFrame, [0, 5], [0, 1], { extrapolateRight: "clamp" });
  const color = pass ? C.green : C.red;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 20px",
        border: `4px double ${color}`,
        borderRadius: 10,
        color,
        fontSize: 26,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title)",
        letterSpacing: 2,
        backgroundColor: "rgba(255,254,248,0.72)",
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: `0 4px 18px ${color}30`,
        ...style,
      }}
    >
      {label}
    </div>
  );
};

// ---------------------------------------------------------------
// SCENE 1 政府信息内涵判定
// ---------------------------------------------------------------
export const InfoDefinitionScopeScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PaperShell code="01" title="政府信息内涵判定" subtitle="制作 · 获取 · 记录保存" accent={C.teal}>
      <div
        data-layout="paper-intake-and-definition-desk"
        data-visual-anchor="flow-target"
        data-visual-grammar="made-and-acquired-dossiers-enter-the-identification-desk,two-statutory-elements-must-coexist-to-qualify,recorded-and-preserved-material-receives-the-government-info-seal"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-channels="contrast,connector,enclosure"
        data-focal-rule="政府信息定义与双来源判定"
        style={{ position: "absolute", inset: 14, display: "flex", gap: 30 }}
      >
        <div
          data-stateful-source="info-specimen-token"
          data-final-knowledge="made-vs-acquired"
          style={{ flex: "0 0 480px", display: "flex", flexDirection: "column", gap: 22 }}
        >
          <div
            style={{
              backgroundColor: C.paperLight,
              border: `3px solid ${C.teal}`,
              borderLeft: `14px solid ${C.teal}`,
              borderRadius: 16,
              padding: 22,
              ...enter(f, 6, -30, 0),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <Tag label="来源通道 01" color={C.teal} />
              <span
                className="font-animation-title"
                style={{ fontSize: 27, fontWeight: 900, color: C.teal }}
              >
                行政机关【制作】
              </span>
            </div>
            <div style={{ fontSize: 22, color: C.inkSoft, lineHeight: 1.5 }}>
              履行职责自制，如许可监督检查笔录、处罚决定书、督查报告
            </div>
          </div>

          <div
            style={{
              backgroundColor: C.paperLight,
              border: `3px solid ${C.gold}`,
              borderLeft: `14px solid ${C.gold}`,
              borderRadius: 16,
              padding: 22,
              ...enter(f, 14, -30, 0),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <Tag label="来源通道 02" color={C.gold} />
              <span
                className="font-animation-title"
                style={{ fontSize: 27, fontWeight: 900, color: C.goldInk }}
              >
                行政机关【获取】
              </span>
            </div>
            <div style={{ fontSize: 22, color: C.inkSoft, lineHeight: 1.5 }}>
              履职外部取得，如企业登记申报材料、公民提交申请书、检测报告
            </div>
          </div>

          <div
            style={{
              backgroundColor: `${C.teal}0D`,
              border: `2px dashed ${C.teal}`,
              borderRadius: 12,
              padding: "12px 16px",
              fontSize: 21,
              color: C.tealInk,
              fontFamily: "var(--inkloom-animation-label)",
              fontWeight: 800,
              ...enter(f, 24),
            }}
          >
            两道来源汇入同一鉴定台，先看职能再看载体
          </div>
        </div>

        <div
          data-final-knowledge="info-concept-definition"
          style={{
            flex: 1,
            backgroundColor: "rgba(255,254,248,0.82)",
            border: `2px solid ${C.line}`,
            borderTop: `10px solid ${C.teal}`,
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 20, 0, 14),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: C.teal,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 26,
                  fontWeight: 950,
                  color: C.paperLight,
                  fontFamily: "var(--inkloom-animation-mono)",
                }}
              >
                鉴
              </div>
              <div>
                <div className="font-animation-title" style={{ fontSize: 27, fontWeight: 900 }}>
                  法定要件鉴真台
                </div>
                <div style={{ fontSize: 21, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)" }}>
                  双重要件同时具备，才能盖下“法定政府信息”印
                </div>
              </div>
            </div>
            <Tag label="全要素检验" color={C.indigo} outline />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <div
              style={{
                backgroundColor: `${C.teal}0A`,
                border: `2px solid ${C.teal}66`,
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: C.green }} />
                <span
                  className="font-animation-label"
                  style={{ fontSize: 23, fontWeight: 900, color: C.tealInk }}
                >
                  要件一：行政职能关联
                </span>
              </div>
              <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.55 }}>
                在履行行政管理职能过程中产生或持有；排除纯个人私信与民商事活动
              </div>
            </div>
            <div
              data-final-knowledge="recorded-preserved-standard"
              style={{
                backgroundColor: `${C.gold}0C`,
                border: `2px solid ${C.gold}66`,
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: C.green }} />
                <span
                  className="font-animation-label"
                  style={{ fontSize: 23, fontWeight: 900, color: C.goldInk }}
                >
                  要件二：介质记录保存
                </span>
              </div>
              <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.55 }}>
                以一定形式记录、保存：纸质卷宗、电子数据、影像磁介质
              </div>
            </div>
          </div>

          <div
            data-stateful-terminal="info-specimen-token"
            style={{
              backgroundColor: `${C.green}0F`,
              border: `3px solid ${C.green}`,
              borderRadius: 14,
              padding: "18px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div className="font-animation-title" style={{ fontSize: 26, fontWeight: 900, color: C.greenInk }}>
                法律结论：依法纳入《政府信息公开条例》调整范围
              </div>
              <div style={{ fontSize: 21, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)", marginTop: 5 }}>
                检查记录、申报材料，皆属政府信息，不能以“内部文件”搪塞
              </div>
            </div>
            <SealStamp label="法定政府信息" pass delay={110} rotation={-4} />
          </div>
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 2 公开主体权属登记簿
// ---------------------------------------------------------------
export const DisclosureSubjectMatrixScene: React.FC = () => {
  const f = useCurrentFrame();
  const cards = [
    {
      tag: "基本原则",
      color: C.teal,
      title: "谁制作谁公开 · 谁保存谁公开",
      body: "自行制作的信息由制作机关公开；从公民、法人处获取的信息由保存机关公开，职责对应不推诿。",
      note: "职责对应，杜绝踢皮球",
      knowledge: "who-makes-discloses",
    },
    {
      tag: "派生获取",
      color: C.gold,
      title: "派生信息溯源至源头机关",
      body: "A机关从B机关获取的信息，由制作或最初获取该信息的B机关负责公开，非源头机关只负责指引。",
      note: "溯源规则：源头机关负公开主责",
      knowledge: "derived-info-origin",
    },
    {
      tag: "授权机构",
      color: C.indigo,
      title: "授权机构以自己名义履职",
      body: "取得授权的派出机构、内设机构，以自己名义履行行政管理职能时，由其自行负责公开。",
      note: "以自己名义作出的，可直接当被告",
      knowledge: "authorized-branch-duty",
    },
    {
      tag: "共同信息",
      color: C.green,
      title: "牵头机关公开 · 15日不回复视为同意",
      body: "数机关共同制作的信息由牵头机关公开；征求意见时被征求机关应在15个工作日内回复，逾期不回复视为同意。",
      note: "机关间推定同意机制",
      knowledge: "joint-lead-organ-rule",
    },
  ] as const;
  return (
    <PaperShell code="02" title="公开主体权属登记簿" subtitle="制作 · 保存 · 派生 · 共同信息" accent={C.gold}>
      <div
        data-layout="four-branch-subject-register"
        data-visual-anchor="document-fork"
        data-visual-grammar="produced-or-preserved-dossiers-stay-with-their-own-agency,derived-information-traces-back-to-the-original-source,jointly-produced-information-lands-on-the-lead-agency-with-fifteen-day-replies"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-channels="connector,locator,contrast"
        data-focal-rule="公开主体四大法定归属规则"
        style={{
          position: "absolute",
          inset: 12,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 22,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.title}
            data-final-knowledge={card.knowledge}
            data-stateful-source={index === 0 ? "origin-authority-token" : undefined}
            data-stateful-terminal={index === cards.length - 1 ? "origin-authority-token" : undefined}
            style={{
              backgroundColor: C.paperLight,
              border: `3px solid ${card.color}`,
              borderTop: `12px solid ${card.color}`,
              borderRadius: 16,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ...enter(f, 8 + index * 12, 0, 16),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Tag label={card.tag} color={card.color} />
              <span className="font-animation-title" style={{ fontSize: 25, fontWeight: 900, color: C.ink, textAlign: "right" }}>
                {card.title}
              </span>
            </div>
            <div style={{ fontSize: 22, color: C.inkSoft, lineHeight: 1.55 }}>{card.body}</div>
            <div
              style={{
                backgroundColor: `${card.color}12`,
                borderLeft: `4px solid ${card.color}`,
                borderRadius: 8,
                padding: "8px 14px",
                fontSize: 20,
                color: C.ink,
                fontFamily: "var(--inkloom-animation-label)",
                fontWeight: 800,
              }}
            >
              {card.note}
            </div>
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 2,
            ...enter(f, 64),
          }}
        >
          <SealStamp label="牵头机关主责" pass delay={120} rotation={-3} />
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 3 不予公开三级梯队
// ---------------------------------------------------------------
export const NondisclosureTierMatrixScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PaperShell code="03" title="不予公开三级梯队" subtitle="一律不 · 原则不（可例外） · 可以不" accent={C.red}>
      <div
        data-layout="three-tier-reading-room-gateway"
        data-visual-anchor="boundary"
        data-visual-grammar="absolute-prohibition-seals-the-confidential-vault,commercial-secrets-and-privacy-open-only-after-consultation,discretionary-internal-records-remain-behind-frosted-glass"
        data-text-treatments="external-negation,stamp,label-block"
        data-focal-channels="enclosure,contrast,motion"
        data-focal-rule="不予公开三级分类与征求意见权衡"
        style={{ position: "absolute", inset: 10, display: "grid", gridTemplateColumns: "1.05fr 1.35fr 1.05fr", gap: 22 }}
      >
        <div
          data-stateful-source="confidential-packet"
          data-final-knowledge="absolute-nondisclosure-tier"
          style={{
            backgroundColor: C.paperLight,
            border: `4px solid ${C.red}`,
            borderRadius: 16,
            padding: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 6, -24, 0),
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <Tag label="第一梯队" color={C.red} />
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 950, color: C.redInk }}>
                一律不公开
              </span>
            </div>
            <div style={{ fontSize: 21, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)", marginBottom: 10 }}>
              绝对刚性禁阅清单
            </div>
            <ul style={{ margin: 0, paddingLeft: 22, fontSize: 22, color: C.ink, lineHeight: 1.62 }}>
              <li>涉及国家秘密的信息</li>
              <li>法律、行政法规禁止公开</li>
              <li>危及国家安全、公共安全、经济安全、社会稳定（三安全一稳定）</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: `${C.red}14`,
              border: `2px dashed ${C.red}`,
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 21,
              color: C.redInk,
              fontWeight: 900,
              fontFamily: "var(--inkloom-animation-label)",
            }}
          >
            绝无例外，无自由裁量余地
          </div>
        </div>

        <div
          data-final-knowledge="relative-exception-tier"
          style={{
            backgroundColor: C.paperLight,
            border: `4px solid ${C.gold}`,
            borderRadius: 16,
            padding: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 14),
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <Tag label="第二梯队" color={C.gold} />
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 950, color: C.goldInk }}>
                原则不公开（有例外）
              </span>
            </div>
            <div style={{ fontSize: 22, color: C.ink, lineHeight: 1.5, marginBottom: 12 }}>
              对象：涉及<span style={{ color: C.goldInk, fontWeight: 900 }}>商业秘密</span>、
              <span style={{ color: C.goldInk, fontWeight: 900 }}>个人隐私</span>的信息
            </div>
            <div style={{ backgroundColor: `${C.gold}10`, border: `2px solid ${C.gold}55`, borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 21, fontWeight: 900, color: C.goldInk, marginBottom: 8, fontFamily: "var(--inkloom-animation-label)" }}>
                书面征求意见程序（15个工作日内）
              </div>
              <div style={{ fontSize: 20, color: C.inkSoft, lineHeight: 1.62 }}>
                ① 权利人同意 → <b style={{ color: C.greenInk }}>公开</b><br />
                ② 不同意且有合理理由 → <b style={{ color: C.redInk }}>不公开</b><br />
                ③ 不同意但涉重大公共利益 → <b style={{ color: C.greenInk }}>必须公开</b><br />
                ④ 逾期未提意见 → <b style={{ color: C.goldInk }}>行政机关权衡判断</b>（非视为同意或拒绝）
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
            <SealStamp label="非一刀切推定" pass delay={125} rotation={-4} />
          </div>
        </div>

        <div
          data-stateful-terminal="confidential-packet"
          data-final-knowledge="discretionary-exemption-tier"
          style={{
            backgroundColor: C.paperLight,
            border: `4px solid ${C.teal}`,
            borderRadius: 16,
            padding: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 22, 24, 0),
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <Tag label="第三梯队" color={C.teal} />
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 950, color: C.tealInk }}>
                可以不公开
              </span>
            </div>
            <div style={{ fontSize: 21, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)", marginBottom: 10 }}>
              行政裁量豁免范围
            </div>
            <ul
              data-final-knowledge="dispute-determination-rule"
              style={{ margin: 0, paddingLeft: 22, fontSize: 22, color: C.ink, lineHeight: 1.62 }}
            >
              <li>内部事务信息：人事、后勤、内部工作流程</li>
              <li>过程性信息：讨论记录、过程稿、磋商信函、请示报告</li>
              <li>行政执法案卷信息（法律法规规章规定应公开的除外）</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: `${C.teal}12`,
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 21,
              color: C.tealInk,
              fontWeight: 900,
              fontFamily: "var(--inkloom-animation-label)",
            }}
          >
            争议处置：报主管部门或保密行政部门确定
          </div>
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 4 主动公开范围与刚性时限
// ---------------------------------------------------------------
export const ActiveDisclosureScopeClockScene: React.FC = () => {
  const f = useCurrentFrame();
  const clockSweep = interpolate(f, [20, 100], [0, 360], { extrapolateRight: "clamp" });
  const items = [
    { no: "01", color: C.teal, title: "公众重大知情事项", body: "涉及公众利益调整、需要公众广泛知晓或公众参与决策" },
    { no: "02", color: C.gold, title: "有社会影响的处罚决定", body: "并非所有处罚都主动公开，仅限行政机关认为具有社会影响者" },
    { no: "03", color: C.green, title: "民生安全监督检查", body: "环保、公共卫生、安全生产、食品药品、产品质量监督检查情况" },
    { no: "04", color: C.indigo, title: "公务员招考录用", body: "招考职位、名额、报考条件及录用结果" },
  ] as const;
  return (
    <PaperShell code="04" title="主动公开范围与刚性时限" subtitle="20个工作日 · 绝无延长" accent={C.teal}>
      <div
        data-layout="twenty-day-active-disclosure-seal-clock"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="four-public-interest-categories-enter-the-active-lane,twenty-working-day-clock-counts-from-formation-or-change,the-active-disclosure-clock-never-accepts-an-extension"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-channels="locator,contrast,spatial"
        data-focal-rule="主动公开法定范围与20工作日不可延长原则"
        style={{ position: "absolute", inset: 12, display: "flex", gap: 34 }}
      >
        <div
          data-stateful-source="active-release-payload"
          style={{ flex: "1.25", display: "flex", flexDirection: "column", gap: 16 }}
        >
          {items.map((item, index) => (
            <div
              key={item.no}
              data-final-knowledge={
                index === 0 ? "public-interest-scope" : index === 1 ? "penalty-with-impact" : undefined
              }
              style={{
                backgroundColor: C.paperLight,
                border: `2px solid ${item.color}77`,
                borderLeft: `10px solid ${item.color}`,
                borderRadius: 14,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                ...enter(f, 8 + index * 10, -20, 0),
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  color: C.white,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 20,
                  fontWeight: 950,
                  flex: "0 0 auto",
                  fontFamily: "var(--inkloom-animation-mono)",
                }}
              >
                {item.no}
              </div>
              <div>
                <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 900 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 20, color: C.inkSoft, lineHeight: 1.4 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-stateful-terminal="active-release-payload"
          data-final-knowledge="twenty-day-deadline"
          style={{
            flex: 1,
            backgroundColor: C.paperLight,
            border: `4px solid ${C.teal}`,
            borderRadius: 22,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            ...enter(f, 18, 0, 10),
          }}
        >
          <Tag label="法定刚性时限" color={C.teal} />
          <div
            style={{
              width: 190,
              height: 190,
              borderRadius: "50%",
              border: `6px solid ${C.teal}`,
              position: "relative",
              display: "grid",
              placeItems: "center",
              backgroundColor: `${C.teal}08`,
              boxShadow: `0 0 0 8px ${C.teal}12`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "40%",
                height: 5,
                backgroundColor: C.gold,
                transformOrigin: "0% 50%",
                transform: `rotate(${clockSweep - 90}deg)`,
                borderRadius: 2,
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, fontWeight: 950, color: C.ink, fontFamily: "var(--inkloom-animation-mono)" }}>20</div>
              <div style={{ fontSize: 20, color: C.tealInk, fontWeight: 900, fontFamily: "var(--inkloom-animation-label)" }}>
                个工作日内
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: 22, color: C.inkSoft, lineHeight: 1.5 }}>
            起算点：信息<span style={{ color: C.tealInk, fontWeight: 900 }}>形成</span>或者
            <span style={{ color: C.tealInk, fontWeight: 900 }}>变更</span>之日起
          </div>
          <div
            data-final-knowledge="no-extension-rule"
            style={{
              backgroundColor: `${C.red}14`,
              border: `3px dashed ${C.red}`,
              borderRadius: 12,
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 30, color: C.red }}>✕</span>
            <span style={{ fontSize: 23, fontWeight: 950, color: C.redInk, fontFamily: "var(--inkloom-animation-label)" }}>
              主动公开无延长制度，绝不可再加20日
            </span>
          </div>
          <SealStamp label="刚性不可延期" pass={false} delay={115} rotation={5} />
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 5 主动公开渠道与场所网络
// ---------------------------------------------------------------
export const ActiveChannelsVenuesScene: React.FC = () => {
  const f = useCurrentFrame();
  const channels = [
    { no: "01", name: "政府公报", desc: "法定权威发布载体" },
    { no: "02", name: "政府网站", desc: "政务公开第一主平台" },
    { no: "03", name: "互联网政务媒体", desc: "政务微博 / 微信 / 客户端" },
    { no: "04", name: "新闻发布会", desc: "重大政策与突发应答" },
    { no: "05", name: "报刊 · 广播 · 电视", desc: "传统广覆盖传播阵地" },
  ] as const;
  return (
    <PaperShell code="05" title="主动公开渠道与场所网络" subtitle="5大线上途径 · 3大法定场所" accent={C.teal}>
      <div
        data-layout="channel-and-venue-distribution-board"
        data-visual-anchor="flow-target"
        data-visual-grammar="disclosure-stream-fans-out-through-five-media-channels,physical-access-anchors-into-three-statutory-venues,optional-access-points-expand-the-reading-room-network"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-channels="connector,spatial,contrast"
        data-focal-rule="主动公开五大渠道与三大法定场所"
        style={{ position: "absolute", inset: 12, display: "grid", gridTemplateColumns: "1.05fr 1.15fr", gap: 30 }}
      >
        <div
          data-stateful-source="public-gazette-packet"
          data-final-knowledge="five-media-channels"
          style={{
            backgroundColor: C.paperLight,
            border: `3px solid ${C.teal}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 13,
            ...enter(f, 6, -24, 0),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <Tag label="线上发布矩阵" color={C.teal} />
            <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: C.tealInk }}>
              五大公开途径
            </span>
          </div>
          {channels.map((item, index) => (
            <div
              key={item.no}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: `${C.teal}08`,
                borderBottom: `2px solid ${C.teal}33`,
                borderRadius: 10,
                padding: "9px 16px",
                ...enter(f, 12 + index * 8, 0, 10),
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 950, color: C.teal, fontFamily: "var(--inkloom-animation-mono)" }}>
                {item.no}
              </span>
              <span className="font-animation-title" style={{ fontSize: 23, fontWeight: 900 }}>
                {item.name}
              </span>
              <span style={{ fontSize: 20, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)", marginLeft: "auto" }}>
                {item.desc}
              </span>
            </div>
          ))}
          <div
            style={{
              backgroundColor: `${C.teal}0E`,
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 20,
              color: C.tealInk,
              fontWeight: 800,
              fontFamily: "var(--inkloom-animation-label)",
            }}
          >
            全媒体融合发布，便于公民快捷查阅
          </div>
        </div>

        <div
          data-stateful-terminal="public-gazette-packet"
          data-final-knowledge="three-statutory-venues"
          style={{
            backgroundColor: C.paperLight,
            border: `3px solid ${C.gold}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 14, 24, 0),
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <Tag label="线下查阅阵地" color={C.gold} />
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: C.goldInk }}>
                法定场所 vs 选择场所
              </span>
            </div>
            <div style={{ fontSize: 21, fontWeight: 900, color: C.greenInk, fontFamily: "var(--inkloom-animation-label)", marginBottom: 10 }}>
              法定必须设置（配备设施设备）：
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 18 }}>
              {["国家档案馆", "公共图书馆", "政务服务场所"].map((name) => (
                <div
                  key={name}
                  style={{
                    backgroundColor: `${C.green}14`,
                    border: `2px solid ${C.green}`,
                    borderRadius: 12,
                    padding: "12px 8px",
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: 900,
                    color: C.greenInk,
                    fontFamily: "var(--inkloom-animation-title)",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
            <div data-final-knowledge="optional-access-points">
              <div style={{ fontSize: 21, fontWeight: 900, color: C.goldInk, fontFamily: "var(--inkloom-animation-label)", marginBottom: 10 }}>
                根据需要自主设立的选择场所：
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {["公共查阅室", "资料索取点", "信息公告栏", "电子信息屏"].map((name) => (
                  <div
                    key={name}
                    style={{
                      backgroundColor: `${C.gold}0C`,
                      border: `2px dashed ${C.gold}88`,
                      borderRadius: 10,
                      padding: "9px 12px",
                      textAlign: "center",
                      fontSize: 21,
                      color: C.goldInk,
                      fontFamily: "var(--inkloom-animation-body)",
                      fontWeight: 800,
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
            <span style={{ fontSize: 20, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)" }}>
              三大法定场所必须提供查阅
            </span>
            <SealStamp label="法定线下阵地" pass delay={110} rotation={-4} />
          </div>
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 6 申请准入与收到日计算
// ---------------------------------------------------------------
export const ApplicationIntakeRulesScene: React.FC = () => {
  const f = useCurrentFrame();
  const receipts = [
    { method: "当面提交", rule: "提交之日", note: "窗口现场交付", color: C.teal },
    { method: "挂号信 / 特快专递", rule: "签收之日", note: "以行政机关签收凭证为据", color: C.green },
    { method: "平常信函（免签收）", rule: "确认之日", note: "收到当日与申请人确认", color: C.gold },
    { method: "互联网 / 传真", rule: "双方确认之日", note: "系统交互或电话核实确认", color: C.indigo },
  ] as const;
  return (
    <PaperShell code="06" title="申请准入与收到日计算" subtitle="一松一紧准入 · 四种收到日" accent={C.gold}>
      <div
        data-layout="intake-balance-and-receipt-detector"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="relaxed-purpose-requirement-balances-the-mandatory-id-rule,four-intake-methods-trigger-distinct-receipt-milestones,written-form-leads-with-an-oral-exception"
        data-text-treatments="external-negation,label-block,stamp"
        data-focal-channels="contrast,locator,enclosure"
        data-focal-rule="依申请公开一松一紧准入要件与四种收到日判定"
        style={{ position: "absolute", inset: 12, display: "grid", gridTemplateColumns: "1.05fr 1.3fr", gap: 30 }}
      >
        <div
          data-stateful-source="citizen-application-file"
          data-final-knowledge="relaxed-purpose-rule"
          style={{
            backgroundColor: C.paperLight,
            border: `3px solid ${C.teal}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            ...enter(f, 6, -24, 0),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Tag label="准入门槛" color={C.teal} />
            <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: C.tealInk }}>
              一松一紧
            </span>
          </div>
          <div
            style={{
              backgroundColor: `${C.green}12`,
              border: `2px solid ${C.green}`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: C.greenInk, marginBottom: 8 }}>
              一松 · 取消特殊需要与用途限制
            </div>
            <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.5 }}>
              不再要求与生产、生活、科研等“特殊需要”相关，无需说明申请用途
            </div>
          </div>
          <div
            data-final-knowledge="mandatory-identity-rule"
            style={{
              backgroundColor: `${C.red}10`,
              border: `2px solid ${C.red}`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: C.redInk, marginBottom: 8 }}>
              一紧 · 必须提交身份证明
            </div>
            <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.5 }}>
              无论申请何种信息，申请时必须提交申请人身份证明
            </div>
          </div>
          <div
            data-final-knowledge="written-priority-form"
            style={{
              backgroundColor: `${C.indigo}0E`,
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 20,
              color: C.indigoInk,
              fontWeight: 800,
              fontFamily: "var(--inkloom-animation-label)",
            }}
          >
            形式原则：书面为主（含信件、数据电文）；确有困难可口头提出
          </div>
        </div>

        <div
          data-stateful-terminal="citizen-application-file"
          data-final-knowledge="four-receipt-date-rules"
          style={{
            backgroundColor: C.paperLight,
            border: `3px solid ${C.gold}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 14, 24, 0),
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <Tag label="起算节点" color={C.gold} />
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: C.goldInk }}>
                收到申请之日判定
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {receipts.map((item, index) => (
                <div
                  key={item.method}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    backgroundColor: `${item.color}0A`,
                    borderLeft: `6px solid ${item.color}`,
                    borderRadius: 12,
                    padding: "10px 16px",
                    ...enter(f, 18 + index * 8, 0, 8),
                  }}
                >
                  <div>
                    <span className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: C.ink }}>
                      {item.method}
                    </span>
                    <div style={{ fontSize: 19, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)" }}>
                      {item.note}
                    </div>
                  </div>
                  <Tag label={`收到日 = ${item.rule}`} color={item.color} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
            <span style={{ fontSize: 20, color: C.inkSoft, fontFamily: "var(--inkloom-animation-label)" }}>
              收到之日起，启动法定20日倒计时
            </span>
            <SealStamp label="起算基准确立" pass delay={120} rotation={-3} />
          </div>
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 7 答复期限与延长机制
// ---------------------------------------------------------------
export const ResponseDeadlineClockScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PaperShell code="07" title="答复期限与延长机制" subtitle="基础20日 + 批准延长20日 · 扣除征求意见" accent={C.indigo}>
      <div
        data-layout="twenty-plus-twenty-response-calendar"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="base-twenty-day-track-opens-on-receipt,extension-gate-permits-twenty-more-days-only-with-approval,consultation-days-step-out-of-the-clock"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-channels="locator,connector,contrast"
        data-focal-rule="答复期限20+20机制与征求意见时间扣除"
        style={{ position: "absolute", inset: 10, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <div
          data-stateful-source="response-timeline-token"
          data-final-knowledge="base-twenty-day-limit"
          style={{
            flex: 1,
            backgroundColor: C.paperLight,
            border: `3px solid ${C.indigo}`,
            borderRadius: 20,
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...enter(f, 6, 0, 12),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <Tag label="法定答复日历" color={C.indigo} />
            <span className="font-animation-title" style={{ fontSize: 29, fontWeight: 950, color: C.indigoInk }}>
              20 ＋ 20 工作日两段式答复结构
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 18 }}>
            <div style={{ backgroundColor: `${C.indigo}0C`, border: `2px solid ${C.indigo}77`, borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: 20, color: C.indigoInk, fontWeight: 900, fontFamily: "var(--inkloom-animation-label)", marginBottom: 8 }}>
                STAGE 01 · 基础答复期
              </div>
              <div className="font-animation-title" style={{ fontSize: 32, fontWeight: 950, marginBottom: 8 }}>
                20 个工作日内
              </div>
              <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.5 }}>
                自收到申请之日起算；能当场答复的应当场答复
              </div>
            </div>
            <div
              data-final-knowledge="extension-approval-condition"
              style={{ backgroundColor: `${C.gold}10`, border: `2px solid ${C.gold}77`, borderRadius: 14, padding: 18 }}
            >
              <div style={{ fontSize: 20, color: C.goldInk, fontWeight: 900, fontFamily: "var(--inkloom-animation-label)", marginBottom: 8 }}>
                STAGE 02 · 延长审批闸门
              </div>
              <div className="font-animation-title" style={{ fontSize: 32, fontWeight: 950, color: C.goldInk, marginBottom: 8 }}>
                最长 ＋20 个工作日
              </div>
              <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.5 }}>
                双重要件：经政府信息公开工作机构负责人同意，并告知申请人
              </div>
            </div>
            <div
              data-final-knowledge="consultation-time-exclusion"
              style={{ backgroundColor: `${C.green}10`, border: `2px solid ${C.green}77`, borderRadius: 14, padding: 18 }}
            >
              <div style={{ fontSize: 20, color: C.greenInk, fontWeight: 900, fontFamily: "var(--inkloom-animation-label)", marginBottom: 8 }}>
                STAGE 03 · 扣除时钟
              </div>
              <div className="font-animation-title" style={{ fontSize: 32, fontWeight: 950, color: C.greenInk, marginBottom: 8 }}>
                征求意见不计入
              </div>
              <div style={{ fontSize: 21, color: C.inkSoft, lineHeight: 1.5 }}>
                征求第三方和其他机关意见所需时间，不计算在期限内
              </div>
            </div>
          </div>
        </div>

        <div
          data-stateful-terminal="response-timeline-token"
          style={{
            backgroundColor: "rgba(255,254,248,0.85)",
            border: `2px solid ${C.line}`,
            borderRadius: 16,
            padding: "14px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ...enter(f, 32),
          }}
        >
          <div style={{ display: "flex", gap: 34, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Tag label="主动公开" color={C.teal} outline />
              <span style={{ fontSize: 23, color: C.inkSoft }}>
                形成起 20 日（<b style={{ color: C.redInk }}>无延长制度</b>）
              </span>
            </div>
            <span className="font-animation-mono" style={{ fontSize: 26, fontWeight: 950, color: C.indigo }}>
              VS
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Tag label="依申请公开" color={C.gold} outline />
              <span style={{ fontSize: 23, color: C.ink }}>
                收到起 20 日 ＋ 批准延长最多 <b style={{ color: C.goldInk }}>20 日</b>
              </span>
            </div>
          </div>
          <SealStamp label="法定时限锁定" pass delay={120} rotation={-2} />
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 8 答复分类与分割处理
// ---------------------------------------------------------------
export const ResponseClassificationMatrixScene: React.FC = () => {
  const f = useCurrentFrame();
  const routes = [
    {
      no: "01",
      tag: "予以公开",
      color: C.green,
      title: "依申请提供",
      body: "按申请形式提供；危及载体安全或成本过高时，可提供电子版或安排查阅抄录。",
      note: "免费原则 · 超频超量收处理费",
      knowledge: "no-fee-with-cost-exception",
    },
    {
      no: "02",
      tag: "区分处理",
      color: C.teal,
      title: "涉密分割提供",
      body: "能作区分处理的，必须提供可公开部分，并对不予公开部分说明理由。",
      note: "严禁因部分涉密而全盘拒绝",
      knowledge: "severability-disclosure",
    },
    {
      no: "03",
      tag: "不予公开",
      color: C.red,
      title: "书面说明理由",
      body: "符合不予公开三级梯队的，告知申请人不予公开并明确说明理由。",
      note: "当事人具有诉权",
    },
    {
      no: "04",
      tag: "信息不存在",
      color: C.gold,
      title: "检索后告知",
      body: "经全面检索没有所申请信息的，明确告知该政府信息不存在。",
      note: "需承担合理检索举证责任",
      knowledge: "non-existent-search-duty",
    },
    {
      no: "05",
      tag: "非本机关",
      color: C.indigo,
      title: "说明并指引",
      body: "告知申请人理由；能确定负责机关的，告知该机关名称与联系方式。",
      note: "协助指引义务",
      knowledge: "not-this-agency-guidance-duty",
    },
    {
      no: "06",
      tag: "内容不明确",
      color: C.gold,
      title: "7日内一次性补正",
      body: "收到申请起7个工作日内一次性告知补正；无正当理由逾期不补正，视为放弃申请。",
      note: "补正通知书属过程性行为，不可诉",
      knowledge: "seven-day-supplement-notice",
    },
  ] as const;
  return (
    <PaperShell code="08" title="答复分类与分割处理" subtitle="6种法定答复结果 · 涉密分割 · 补正机制" accent={C.teal}>
      <div
        data-layout="six-route-response-docket-board"
        data-visual-anchor="flow-target"
        data-visual-grammar="mixed-confidential-records-undergo-severability-split,unclear-requests-receive-a-seven-day-supplement-notice,no-fee-rule-applies-unless-abuse-threshold-breached"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-channels="connector,contrast,enclosure"
        data-focal-rule="六类法定答复方式与涉密分割提供规则"
        style={{
          position: "absolute",
          inset: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 18,
        }}
      >
        {routes.map((route, index) => (
          <div
            key={route.no}
            data-final-knowledge={route.knowledge}
            data-stateful-source={index === 0 ? "severable-record-token" : undefined}
            data-stateful-terminal={index === routes.length - 1 ? "severable-record-token" : undefined}
            style={{
              backgroundColor: C.paperLight,
              border: `3px solid ${route.color}`,
              borderTop: `10px solid ${route.color}`,
              borderRadius: 14,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ...enter(f, 8 + index * 8, 0, 14),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Tag label={`${route.no} ${route.tag}`} color={route.color} />
              <span className="font-animation-title" style={{ fontSize: 22, fontWeight: 950, color: C.ink }}>
                {route.title}
              </span>
            </div>
            <div style={{ fontSize: 20, color: C.ink, lineHeight: 1.5 }}>{route.body}</div>
            <div
              style={{
                backgroundColor: `${route.color}10`,
                borderLeft: `4px solid ${route.color}`,
                borderRadius: 8,
                padding: "6px 10px",
                fontSize: 18,
                color: C.inkSoft,
                fontFamily: "var(--inkloom-animation-label)",
                fontWeight: 800,
              }}
            >
              {route.note}
            </div>
          </div>
        ))}
        <div style={{ position: "absolute", right: 26, top: 14, zIndex: 2, ...enter(f, 58) }}>
          <SealStamp label="分类精准答复" pass delay={124} rotation={-4} />
        </div>
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 9 特殊申请处置六大路径
// ---------------------------------------------------------------
export const SpecialApplicationRouterScene: React.FC = () => {
  const f = useCurrentFrame();
  const paths = [
    { no: "01", color: C.red, title: "滥用申请权（超频超量）", body: "可要求说明理由；理由不合理 → 告知不予处理；理由合理但超期 → 确定延迟期限并告知", knowledge: "abuse-request-handling" },
    { no: "02", color: C.indigo, title: "动机不单纯（信访/投诉/举报）", body: "告知不作为信息公开申请处理，并告知通过相应法定渠道提出", knowledge: "petition-motive-redirect" },
    { no: "03", color: C.gold, title: "申请加工、分析现有数据", body: "要求行政机关对现有信息进行加工、分析的，可以不予提供", knowledge: "data-processing-rejection" },
    { no: "04", color: C.teal, title: "申请已公开发行出版物", body: "政府公报、报刊、书籍等公开出版物，告知获取途径即可", knowledge: "published-item-guidance" },
    { no: "05", color: C.green, title: "信息有误要求更正", body: "有权机关审核属实应当更正并告知；非职能范围的可转送有权机关或告知申请人向有权机关提出", knowledge: "error-correction-duty" },
    { no: "06", color: C.teal, title: "多位申请人申请相同信息", body: "多个申请人就相同可公开信息提出申请的，可以纳入主动公开范围", knowledge: "application-to-active-conversion" },
  ] as const;
  return (
    <PaperShell code="09" title="特殊申请处置六大路径" subtitle="滥用 · 信访 · 加工 · 已公开 · 更正 · 转主动" accent={C.indigo}>
      <div
        data-layout="six-port-special-case-router"
        data-visual-anchor="document-fork"
        data-visual-grammar="six-anomalous-applications-route-to-statutory-ports,petition-motives-redirect-to-complaint-channels,multiple-identical-requests-convert-into-active-disclosure"
        data-text-treatments="label-block,external-negation,stamp"
        data-focal-channels="connector,locator,contrast"
        data-focal-rule="六类特殊信息公开申请的法定处置分流"
        data-stateful-source="special-request-dossier"
        data-stateful-terminal="special-request-dossier"
        style={{
          position: "absolute",
          inset: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: 18,
        }}
      >
        {paths.map((path, index) => (
          <div
            key={path.no}
            data-final-knowledge={path.knowledge}
            style={{
              backgroundColor: C.paperLight,
              border: `2px solid ${path.color}`,
              borderLeft: `12px solid ${path.color}`,
              borderRadius: 14,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              ...enter(f, 8 + index * 8, 0, 12),
            }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: path.color,
                color: C.white,
                display: "grid",
                placeItems: "center",
                fontSize: 22,
                fontWeight: 950,
                flex: "0 0 auto",
                fontFamily: "var(--inkloom-animation-mono)",
              }}
            >
              {path.no}
            </span>
            <div>
              <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 950, color: C.ink, marginBottom: 5 }}>
                {path.title}
              </div>
              <div style={{ fontSize: 20, color: C.inkSoft, lineHeight: 1.42 }}>{path.body}</div>
            </div>
          </div>
        ))}
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// SCENE 10 高频真题陷阱综合判别
// ---------------------------------------------------------------
export const ExamTrapsVerdictScene: React.FC = () => {
  const f = useCurrentFrame();
  const traps = [
    {
      question: "向上级请示属于内部事务信息？",
      answer: "错误 · 请示报告属过程性信息，非内部事务信息（定性不同）",
      pass: false,
      knowledge: "trap-process-vs-internal",
    },
    {
      question: "征求权利人意见逾期不表态视为拒绝？",
      answer: "错误 · 逾期不提出意见，由行政机关权衡判断，非一律视为同意或拒绝",
      pass: false,
      knowledge: "trap-consultation-overdue-balance",
    },
    {
      question: "主动公开遇特殊情况可再延长20个工作日？",
      answer: "错误 · 主动公开自形成或变更起20日，绝无延长制度",
      pass: false,
      knowledge: "trap-active-no-extension",
    },
    {
      question: "申请内容不明确，行政机关可直接拒绝？",
      answer: "错误 · 必须在7个工作日内一次性告知补正，不得直接拒绝",
      pass: false,
      knowledge: "trap-clarification-notice-duty",
    },
    {
      question: "除行政许可外，信息公开、复议、诉讼等申请均可口头提出？",
      answer: "正确 · 行政许可严禁口头申请，其余申请确有困难均允许口头提出",
      pass: true,
      knowledge: "trap-oral-form-allowance",
    },
  ] as const;
  return (
    <PaperShell code="10" title="高频真题陷阱综合判别" subtitle="法考高频高危易错点集中裁决" accent={C.red}>
      <div
        data-layout="five-trap-verdict-bench"
        data-visual-anchor="role-pair"
        data-visual-grammar="five-classic-misconceptions-face-the-verdict-bench,statutory-rules-strike-false-assumptions-with-seal-stamps,the-final-row-locks-one-oral-form-allowance"
        data-text-treatments="external-negation,stamp,soft-highlight"
        data-focal-channels="contrast,annotation,locator"
        data-focal-rule="法考高频五大核心易错陷阱终审裁决"
        data-stateful-source="exam-test-ticket"
        data-stateful-terminal="exam-test-ticket"
        style={{ position: "absolute", inset: 10, display: "flex", flexDirection: "column", gap: 14 }}
      >
        {traps.map((trap, index) => (
          <div
            key={trap.knowledge}
            data-final-knowledge={trap.knowledge}
            style={{
              flex: 1,
              backgroundColor: C.paperLight,
              border: `3px solid ${trap.pass ? C.green : C.red}`,
              borderRadius: 14,
              padding: "10px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ...enter(f, 8 + index * 10, 0, 10),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: trap.pass ? C.green : C.red,
                  color: C.white,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 30,
                  fontWeight: 950,
                  flex: "0 0 auto",
                  fontFamily: "var(--inkloom-animation-mono)",
                }}
              >
                {trap.pass ? "✓" : "✕"}
              </span>
              <div>
                <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 950 }}>
                  {trap.question}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: trap.pass ? C.greenInk : C.redInk,
                    fontFamily: "var(--inkloom-animation-label)",
                    fontWeight: 850,
                    lineHeight: 1.4,
                  }}
                >
                  {trap.answer}
                </div>
              </div>
            </div>
            <Tag label={trap.pass ? "正确结论" : "法考避坑"} color={trap.pass ? C.green : C.red} />
          </div>
        ))}
      </div>
    </PaperShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const DisclosureCaseDesk: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{ backgroundColor: C.paper, width: 1920, height: 1080 }}
  >
    <TimelineSequence name="01" start={SCENES["info-definition-scope"].start} duration={SCENES["info-definition-scope"].duration}>
      <InfoDefinitionScopeScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["disclosure-subject-matrix"].start} duration={SCENES["disclosure-subject-matrix"].duration}>
      <DisclosureSubjectMatrixScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["nondisclosure-tier-matrix"].start} duration={SCENES["nondisclosure-tier-matrix"].duration}>
      <NondisclosureTierMatrixScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["active-disclosure-scope-clock"].start} duration={SCENES["active-disclosure-scope-clock"].duration}>
      <ActiveDisclosureScopeClockScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["active-channels-venues"].start} duration={SCENES["active-channels-venues"].duration}>
      <ActiveChannelsVenuesScene />
    </TimelineSequence>
    <TimelineSequence name="06" start={SCENES["application-intake-rules"].start} duration={SCENES["application-intake-rules"].duration}>
      <ApplicationIntakeRulesScene />
    </TimelineSequence>
    <TimelineSequence name="07" start={SCENES["response-deadline-clock"].start} duration={SCENES["response-deadline-clock"].duration}>
      <ResponseDeadlineClockScene />
    </TimelineSequence>
    <TimelineSequence name="08" start={SCENES["response-classification-matrix"].start} duration={SCENES["response-classification-matrix"].duration}>
      <ResponseClassificationMatrixScene />
    </TimelineSequence>
    <TimelineSequence name="09" start={SCENES["special-application-router"].start} duration={SCENES["special-application-router"].duration}>
      <SpecialApplicationRouterScene />
    </TimelineSequence>
    <TimelineSequence name="10" start={SCENES["exam-traps-verdict"].start} duration={SCENES["exam-traps-verdict"].duration}>
      <ExamTrapsVerdictScene />
    </TimelineSequence>
  </AbsoluteFill>
);
