import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

// Brass chronometer observatory: navy night sky, brass dials with tick rings, cream starlight text
const O = {
  night: "radial-gradient(ellipse at 50% 16%, #182645 0%, #0e1830 55%, #070d1c 100%)",
  panel: "rgba(19, 31, 58, 0.92)",
  panelEdge: "rgba(201, 162, 75, 0.5)",
  brass: "#c9a24b",
  brassLight: "#e0c184",
  cream: "#f2ead8",
  azure: "#6f9bc4",
  azureLight: "#9cc0e4",
  coral: "#cf7a5a",
  coralLight: "#e8a184",
  soft: "#8fa0bd",
  glow: "rgba(224, 193, 132, 0.14)",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (f: number, d = 0, x = 0, y = 24) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `${interpolate(f, [d, d + 24], [x, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px ${interpolate(f, [d, d + 24], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px`,
});

const Shell = ({
  code,
  title,
  subtitle,
  children,
}: {
  code: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      background: O.night,
      color: O.cream,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 8% 20%, rgba(111,155,196,.10), transparent 22%)," +
        "radial-gradient(circle at 94% 82%, rgba(201,162,75,.10), transparent 24%)," +
        "radial-gradient(circle at 78% 8%, rgba(242,234,216,.16) 1px, transparent 1.6px)," +
        "radial-gradient(circle at 30% 70%, rgba(242,234,216,.12) 1px, transparent 1.6px)",
      backgroundSize: "auto,auto,220px 180px,160px 200px",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 32,
        height: 110,
        display: "flex",
        alignItems: "center",
        gap: 22,
        borderBottom: `3px solid ${O.brass}`,
      }}
    >
      <div
        style={{
          width: 164,
          height: 76,
          border: `3px solid ${O.brass}`,
          borderRadius: 10,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: O.brassLight,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-mono)",
        }}
      >
        观测 {code}
      </div>
      <div>
        <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0 }}>
          {title}
        </h1>
        <div style={{ fontSize: 20, fontWeight: 800, color: O.soft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label)" }}>
          {subtitle}
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          fontSize: 17,
          fontWeight: 900,
          letterSpacing: 3,
          color: O.soft,
          fontFamily: "var(--inkloom-animation-label)",
        }}
      >
        DISCLOSURE · CHRONOMETER OBSERVATORY
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 168,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);

// 黄铜刻度环表盘
const TickRing: React.FC<{
  size: number;
  center?: React.ReactNode;
  sweep?: number;
  style?: React.CSSProperties;
}> = ({ size, center, sweep = 0, style }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: `5px solid ${O.brass}`,
      position: "relative",
      display: "grid",
      placeItems: "center",
      background: "radial-gradient(circle, rgba(201,162,75,0.10) 0 62%, transparent 63%)",
      boxShadow: "0 0 0 10px rgba(201,162,75,0.08), inset 0 0 26px rgba(201,162,75,0.14)",
      ...style,
    }}
  >
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: 4,
          left: "50%",
          width: 3,
          height: Math.round(size * 0.09),
          backgroundColor: O.brassLight,
          transformOrigin: "50% " + (size / 2 - 4) + "px",
          transform: `translateX(-50%) rotate(${i * 30}deg)`,
          opacity: 0.8,
        }}
      />
    ))}
    {sweep > 0 && (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "38%",
          height: 5,
          backgroundColor: O.brassLight,
          transformOrigin: "0% 50%",
          transform: `rotate(${sweep - 90}deg)`,
          borderRadius: 3,
          boxShadow: `0 0 12px ${O.glow}`,
        }}
      />
    )}
    {center}
  </div>
);

const BrassCard = ({
  children,
  edge = O.brass,
  style,
  ...rest
}: {
  children: React.ReactNode;
  edge?: string;
  style?: React.CSSProperties;
} & Record<string, string | undefined>) => (
  <div
    {...rest}
    style={{
      background: O.panel,
      border: `3.5px solid ${edge}`,
      borderRadius: 16,
      boxShadow: "0 10px 26px rgba(0,0,0,.45), inset 0 0 30px rgba(201,162,75,0.06)",
      padding: "18px 22px",
      ...style,
    }}
  >
    {children}
  </div>
);

const Plate = ({
  children,
  color = O.brass,
  outline = false,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  outline?: boolean;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 14px",
      backgroundColor: outline ? "transparent" : color,
      border: `2.5px solid ${color}`,
      borderRadius: 7,
      color: outline ? color : "#101a30",
      fontSize: 20,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label)",
      letterSpacing: 2,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </span>
);

const VerdictSeal: React.FC<{
  label: string;
  pass?: boolean;
  delay?: number;
  rotation?: number;
}> = ({ label, pass = true, delay = 0, rotation = -3 }) => {
  const f = useCurrentFrame();
  const press = interpolate(f, [delay, delay + 10], [1.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(f, [delay, delay + 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 16px",
        border: `3px double ${pass ? O.azureLight : O.coralLight}`,
        borderRadius: 8,
        color: pass ? O.azureLight : O.coralLight,
        fontSize: 23,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title)",
        letterSpacing: 2,
        backgroundColor: "rgba(13,24,46,0.85)",
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
      }}
    >
      {label}
    </span>
  );
};

// ---------------------------------------------------------------
// SCENE 01 政府信息内涵判定
// ---------------------------------------------------------------
export const InfoDefinitionScopeScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="01" title="政府信息内涵判定" subtitle="制作 · 获取 · 记录保存">
      <div
        data-layout="twin-source-verification-gimbal"
        data-visual-anchor="flow-target"
        data-visual-grammar="made-and-acquired-dossiers-enter-the-verification-gimbal,two-statutory-elements-must-coexist-to-qualify,verified-material-receives-the-government-info-seal"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-channels="contrast,connector,enclosure"
        data-focal-rule="政府信息定义与双来源判定"
        style={{ position: "absolute", inset: 12, display: "flex", gap: 30 }}
      >
        <div
          data-stateful-source="info-specimen-token"
          data-final-knowledge="made-vs-acquired"
          style={{ flex: "0 0 470px", display: "flex", flexDirection: "column", gap: 20 }}
        >
          <BrassCard edge={O.azure} style={{ ...enter(f, 6, -26, 0) }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <Plate color={O.azure}>来源 01</Plate>
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: O.azureLight }}>
                行政机关【制作】
              </span>
            </div>
            <div style={{ fontSize: 22, color: O.cream, lineHeight: 1.5 }}>
              履行职责自制，如许可监督检查笔录、处罚决定书、督查报告
            </div>
          </BrassCard>
          <BrassCard edge={O.brass} style={{ ...enter(f, 14, -26, 0) }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <Plate color={O.brass}>来源 02</Plate>
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: O.brassLight }}>
                行政机关【获取】
              </span>
            </div>
            <div style={{ fontSize: 22, color: O.cream, lineHeight: 1.5 }}>
              履职外部取得，如企业登记申报材料、公民提交申请书、检测报告
            </div>
          </BrassCard>
          <div
            style={{
              border: `2px dashed ${O.azure}`,
              borderRadius: 12,
              padding: "12px 16px",
              fontSize: 21,
              color: O.azureLight,
              fontWeight: 800,
              fontFamily: "var(--inkloom-animation-label)",
              ...enter(f, 24),
            }}
          >
            两道来源汇入同一鉴真环，先看职能再看载体
          </div>
        </div>

        <BrassCard
          data-final-knowledge="info-concept-definition"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 18,
            ...enter(f, 20, 0, 14),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <TickRing
                size={64}
                center={
                  <span style={{ fontSize: 26, fontWeight: 950, color: O.brassLight, fontFamily: "var(--inkloom-animation-mono)" }}>
                    鉴
                  </span>
                }
              />
              <div>
                <div className="font-animation-title" style={{ fontSize: 27, fontWeight: 900 }}>
                  法定要件鉴真环
                </div>
                <div style={{ fontSize: 21, color: O.soft, fontFamily: "var(--inkloom-animation-label)" }}>
                  双重要件同时具备，才能盖下"法定政府信息"印
                </div>
              </div>
            </div>
            <Plate color={O.brass} outline>全要素检验</Plate>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div
              style={{
                background: "rgba(111,155,196,0.10)",
                border: `2px solid ${O.azure}66`,
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: O.azureLight }} />
                <span style={{ fontSize: 23, fontWeight: 900, color: O.azureLight, fontFamily: "var(--inkloom-animation-label)" }}>
                  要件一：行政职能关联
                </span>
              </div>
              <div style={{ fontSize: 21, color: O.cream, lineHeight: 1.55 }}>
                在履行行政管理职能过程中产生或持有；排除纯个人私信与民商事活动
              </div>
            </div>
            <div
              data-final-knowledge="recorded-preserved-standard"
              style={{
                background: "rgba(201,162,75,0.10)",
                border: `2px solid ${O.brass}66`,
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: O.brassLight }} />
                <span style={{ fontSize: 23, fontWeight: 900, color: O.brassLight, fontFamily: "var(--inkloom-animation-label)" }}>
                  要件二：介质记录保存
                </span>
              </div>
              <div style={{ fontSize: 21, color: O.cream, lineHeight: 1.55 }}>
                以一定形式记录、保存：纸质卷宗、电子数据、影像磁介质
              </div>
            </div>
          </div>

          <div
            data-stateful-terminal="info-specimen-token"
            style={{
              background: "rgba(111,155,196,0.12)",
              border: `3px solid ${O.azure}`,
              borderRadius: 14,
              padding: "16px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div className="font-animation-title" style={{ fontSize: 25, fontWeight: 900, color: O.azureLight }}>
                法律结论：依法纳入《政府信息公开条例》调整范围
              </div>
              <div style={{ fontSize: 20, color: O.soft, fontFamily: "var(--inkloom-animation-label)", marginTop: 5 }}>
                检查记录、申报材料，皆属政府信息，不能以"内部文件"搪塞
              </div>
            </div>
            <VerdictSeal label="法定政府信息" delay={110} rotation={-4} />
          </div>
        </BrassCard>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 02 公开主体权属登记簿
// ---------------------------------------------------------------
export const DisclosureSubjectMatrixScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="who-makes-discloses" data-final-knowledge="derived-info-origin" data-final-knowledge="authorized-branch-duty" data-final-knowledge="joint-lead-organ-rule" data-stateful-source="origin-authority-token" data-stateful-terminal="origin-authority-token" */
  const f = useCurrentFrame();
  return (
    <Shell code="02" title="公开主体权属登记簿" subtitle="制作 · 保存 · 派生 · 共同信息">
      <div
        data-layout="four-bearing-subject-ring"
        data-visual-anchor="document-fork"
        data-visual-grammar="produced-or-preserved-dossiers-stay-with-their-own-agency,derived-information-traces-back-to-the-original-source,jointly-produced-information-lands-on-the-lead-agency-with-fifteen-day-replies"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-channels="connector,locator,contrast"
        data-focal-rule="公开主体四大法定归属规则"
        style={{ position: "absolute", inset: 12 }}
      >
        <TickRing
          size={330}
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", ...enter(f, 2) }}
          center={
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 950, color: O.brassLight, fontFamily: "var(--inkloom-animation-title)" }}>权属罗盘</div>
              <div style={{ fontSize: 18, color: O.soft, fontFamily: "var(--inkloom-animation-label)", marginTop: 4 }}>四大归属规则</div>
            </div>
          }
        />
        <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 24, padding: 4 }}>
          {[
            {
              tag: "基本原则",
              edge: O.azure,
              title: "谁制作谁公开 · 谁保存谁公开",
              body: "自行制作的信息由制作机关公开；从公民、法人处获取的信息由保存机关公开，职责对应不推诿。",
              note: "职责对应，杜绝踢皮球",
              knowledge: "who-makes-discloses",
              first: true,
            },
            {
              tag: "派生获取",
              edge: O.brass,
              title: "派生信息溯源至源头机关",
              body: "A机关从B机关获取的信息，由制作或最初获取该信息的B机关负责公开，非源头机关只负责指引。",
              note: "溯源规则：源头机关负公开主责",
              knowledge: "derived-info-origin",
            },
            {
              tag: "授权机构",
              edge: O.azureLight,
              title: "授权机构以自己名义履职",
              body: "取得授权的派出机构、内设机构，以自己名义履行行政管理职能时，由其自行负责公开。",
              note: "以自己名义作出的，可直接当被告",
              knowledge: "authorized-branch-duty",
            },
            {
              tag: "共同信息",
              edge: O.coral,
              title: "牵头机关公开 · 15日不回复视为同意",
              body: "数机关共同制作的信息由牵头机关公开；征求意见时被征求机关应在15个工作日内回复，逾期不回复视为同意。",
              note: "机关间推定同意机制",
              knowledge: "joint-lead-organ-rule",
            },
          ].map((card, index) => (
            <div
              key={card.knowledge}
              data-final-knowledge={card.knowledge}
              data-stateful-source={card.first ? "origin-authority-token" : undefined}
              data-stateful-terminal={index === 3 ? "origin-authority-token" : undefined}
              style={{
                background: O.panel,
                border: `3px solid ${card.edge}`,
                borderTop: `10px solid ${card.edge}`,
                borderRadius: 16,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 26px rgba(0,0,0,.45)",
                ...enter(f, 8 + index * 12, 0, 16),
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <Plate color={card.edge} outline>{card.tag}</Plate>
                <span className="font-animation-title" style={{ fontSize: 24, fontWeight: 900, color: O.cream, textAlign: "right" }}>
                  {card.title}
                </span>
              </div>
              <div style={{ fontSize: 21, color: O.cream, lineHeight: 1.5 }}>{card.body}</div>
              <div
                style={{
                  background: "rgba(201,162,75,0.10)",
                  borderLeft: `4px solid ${card.edge}`,
                  borderRadius: 8,
                  padding: "8px 14px",
                  fontSize: 20,
                  color: O.brassLight,
                  fontWeight: 800,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                {card.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 03 不予公开三级梯队
// ---------------------------------------------------------------
export const NondisclosureTierMatrixScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="absolute-nondisclosure-tier" data-final-knowledge="relative-exception-tier" data-final-knowledge="discretionary-exemption-tier" data-final-knowledge="dispute-determination-rule" data-stateful-source="confidential-packet" data-stateful-terminal="confidential-packet" */
  const f = useCurrentFrame();
  const tiers = [
    {
      tag: "第一梯队",
      edge: O.coral,
      title: "一律不公开",
      items: ["涉及国家秘密的信息", "法律、行政法规禁止公开", "危及国家安全、公共安全、经济安全、社会稳定（三安全一稳定）"],
      foot: "绝无例外，无自由裁量余地",
      knowledge: "absolute-nondisclosure-tier",
      first: true,
    },
    {
      tag: "第二梯队",
      edge: O.brass,
      title: "原则不公开（有例外）",
      items: ["对象：商业秘密、个人隐私", "① 同意→公开 ② 不同意且有合理理由→不公开 ③ 涉重大公共利益→必须公开", "④ 逾期未提意见→行政机关权衡判断（非一刀切视为同意或拒绝）"],
      foot: "书面征求意见程序 · 15个工作日内回复",
      knowledge: "relative-exception-tier",
    },
    {
      tag: "第三梯队",
      edge: O.azure,
      title: "可以不公开",
      items: ["内部事务信息：人事、后勤、内部工作流程", "过程性信息：讨论记录、过程稿、磋商信函、请示报告", "行政执法案卷信息（法律法规规章规定应公开的除外）"],
      foot: "争议处置：报主管部门或保密行政部门确定",
      knowledge: "discretionary-exemption-tier",
    },
  ] as const;
  return (
    <Shell code="03" title="不予公开三级梯队" subtitle="一律不 · 原则不（可例外） · 可以不">
      <div
        data-layout="three-deck-tiered-gate"
        data-visual-anchor="boundary"
        data-visual-grammar="absolute-prohibition-seals-the-confidential-vault,commercial-secrets-and-privacy-open-only-after-consultation,discretionary-internal-records-remain-behind-frosted-glass"
        data-text-treatments="external-negation,stamp,label-block"
        data-focal-channels="enclosure,contrast,motion"
        data-focal-rule="不予公开三级分类与征求意见权衡"
        style={{ position: "absolute", inset: 10, display: "flex", flexDirection: "column", gap: 16 }}
      >
        {tiers.map((tier, index) => (
          <div
            key={tier.knowledge}
            data-final-knowledge={tier.knowledge}
            data-stateful-source={tier.first ? "confidential-packet" : undefined}
            data-stateful-terminal={index === tiers.length - 1 ? "confidential-packet" : undefined}
            style={{
              flex: 1,
              background: O.panel,
              border: `3.5px solid ${tier.edge}`,
              borderLeft: `16px solid ${tier.edge}`,
              borderRadius: 14,
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: 22,
              boxShadow: "0 10px 24px rgba(0,0,0,.45)",
              ...enter(f, 6 + index * 14, -20, 0),
            }}
          >
            <div style={{ flex: "0 0 250px" }}>
              <Plate color={tier.edge} outline>{tier.tag}</Plate>
              <div className="font-animation-title" style={{ fontSize: 27, fontWeight: 950, color: O.cream, marginTop: 8 }}>
                {tier.title}
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 21, color: O.cream, lineHeight: 1.6, flex: 1 }}>
              {tier.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div
              style={{
                flex: "0 0 300px",
                border: `2px dashed ${tier.edge}`,
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 20,
                color: index === 1 ? O.brassLight : tier.edge,
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
                lineHeight: 1.4,
              }}
            >
              {tier.foot}
            </div>
          </div>
        ))}
        <div style={{ textAlign: "center" }}>
          <VerdictSeal label="非一刀切推定" delay={58} rotation={-3} />
        </div>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 04 主动公开范围与刚性时限
// ---------------------------------------------------------------
export const ActiveDisclosureScopeClockScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="public-interest-scope" data-final-knowledge="penalty-with-impact" */
  const f = useCurrentFrame();
  const clockSweep = interpolate(f, [20, 100], [0, 360], { extrapolateRight: "clamp" });
  return (
    <Shell code="04" title="主动公开范围与刚性时限" subtitle="20个工作日 · 绝无延长">
      <div
        data-layout="chronometer-fixed-escapement"
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
          {[
            {
              no: "01",
              edge: O.azure,
              title: "公众重大知情事项",
              body: "涉及公众利益调整、需要公众广泛知晓或公众参与决策",
              knowledge: "public-interest-scope",
            },
            {
              no: "02",
              edge: O.brass,
              title: "有社会影响的处罚决定",
              body: "并非所有处罚都主动公开，仅限行政机关认为具有社会影响者",
              knowledge: "penalty-with-impact",
            },
            {
              no: "03",
              edge: O.azureLight,
              title: "民生安全监督检查",
              body: "环保、公共卫生、安全生产、食品药品、产品质量监督检查情况",
              knowledge: undefined,
            },
            {
              no: "04",
              edge: O.coral,
              title: "公务员招考录用",
              body: "招考职位、名额、报考条件及录用结果",
              knowledge: undefined,
            },
          ].map((item, index) => (
            <div
              key={item.no}
              {...(item.knowledge ? { "data-final-knowledge": item.knowledge } : {})}
              style={{
                background: O.panel,
                border: `2.5px solid ${item.edge}77`,
                borderLeft: `10px solid ${item.edge}`,
                borderRadius: 14,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 8px 22px rgba(0,0,0,.4)",
                ...enter(f, 8 + index * 10, -20, 0),
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `3px solid ${item.edge}`,
                  color: O.brassLight,
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
                <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: O.cream }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 20, color: O.soft, lineHeight: 1.4 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <BrassCard
          data-stateful-terminal="active-release-payload"
          data-final-knowledge="twenty-day-deadline"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            ...enter(f, 18, 0, 10),
          }}
        >
          <Plate color={O.brass}>法定刚性时限</Plate>
          <TickRing
            size={210}
            sweep={clockSweep}
            center={
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 52, fontWeight: 950, color: O.brassLight, fontFamily: "var(--inkloom-animation-mono)" }}>20</div>
                <div style={{ fontSize: 20, color: O.cream, fontWeight: 900, fontFamily: "var(--inkloom-animation-label)" }}>个工作日内</div>
              </div>
            }
          />
          <div style={{ textAlign: "center", fontSize: 22, color: O.cream, lineHeight: 1.5 }}>
            起算点：信息<span style={{ color: O.azureLight, fontWeight: 900 }}>形成</span>或者
            <span style={{ color: O.azureLight, fontWeight: 900 }}>变更</span>之日起
          </div>
          <div
            data-final-knowledge="no-extension-rule"
            style={{
              background: "rgba(207,122,90,0.12)",
              border: `3px dashed ${O.coral}`,
              borderRadius: 12,
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 30, color: O.coralLight }}>✕</span>
            <span style={{ fontSize: 23, fontWeight: 950, color: O.coralLight, fontFamily: "var(--inkloom-animation-label)" }}>
              主动公开无延长制度，绝不可再加20日
            </span>
          </div>
          <VerdictSeal label="刚性不可延期" pass={false} delay={115} rotation={5} />
        </BrassCard>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 05 主动公开渠道与场所网络
// ---------------------------------------------------------------
export const ActiveChannelsVenuesScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="05" title="主动公开渠道与场所网络" subtitle="5大线上途径 · 3大法定场所">
      <div
        data-layout="channel-lighthouse-venue-chart"
        data-visual-anchor="flow-path"
        data-visual-grammar="disclosure-stream-fans-out-through-five-media-channels,physical-access-anchors-into-three-statutory-venues,optional-access-points-expand-the-reading-room-network"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-channels="connector,spatial,contrast"
        data-focal-rule="主动公开五大渠道与三大法定场所"
        style={{ position: "absolute", inset: 12, display: "flex", flexDirection: "column", gap: 18 }}
      >
        <BrassCard
          data-stateful-source="public-gazette-packet"
          data-final-knowledge="five-media-channels"
          style={{ ...enter(f, 6, 0, -14) }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <Plate color={O.azure} outline>线上发布矩阵</Plate>
            <span className="font-animation-title" style={{ fontSize: 26, fontWeight: 900, color: O.azureLight }}>
              五大公开途径
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
            {[
              { no: "01", name: "政府公报", desc: "法定权威发布载体" },
              { no: "02", name: "政府网站", desc: "政务公开第一主平台" },
              { no: "03", name: "互联网政务媒体", desc: "政务微博 / 微信 / 客户端" },
              { no: "04", name: "新闻发布会", desc: "重大政策与突发应答" },
              { no: "05", name: "报刊 · 广播 · 电视", desc: "传统广覆盖传播阵地" },
            ].map((item, index) => (
              <div
                key={item.no}
                style={{
                  background: "rgba(111,155,196,0.10)",
                  border: `2px solid ${O.azure}55`,
                  borderRadius: 12,
                  padding: "12px 14px",
                  ...enter(f, 12 + index * 8, 0, 10),
                }}
              >
                <div style={{ fontSize: 19, fontWeight: 950, color: O.azure, fontFamily: "var(--inkloom-animation-mono)" }}>
                  信号 {item.no}
                </div>
                <div className="font-animation-title" style={{ fontSize: 22, fontWeight: 900, color: O.cream, marginTop: 6 }}>
                  {item.name}
                </div>
                <div style={{ fontSize: 18.5, color: O.soft, fontFamily: "var(--inkloom-animation-label)", marginTop: 4 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </BrassCard>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ fontSize: 20, color: O.soft, fontFamily: "var(--inkloom-animation-label)", letterSpacing: 3 }}>
            线上信号 ↓ 沉降为线下阵地
          </span>
        </div>

        <BrassCard
          data-stateful-terminal="public-gazette-packet"
          data-final-knowledge="three-statutory-venues"
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 14, ...enter(f, 46) }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Plate color={O.brass} outline>线下查阅阵地</Plate>
            <span className="font-animation-title" style={{ fontSize: 26, fontWeight: 900, color: O.brassLight }}>
              法定场所 vs 选择场所
            </span>
          </div>
          <div>
            <div style={{ fontSize: 21, fontWeight: 900, color: O.azureLight, fontFamily: "var(--inkloom-animation-label)", marginBottom: 10 }}>
              法定必须设置（配备设施设备）：
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              {["国家档案馆", "公共图书馆", "政务服务场所"].map((name, i) => (
                <div
                  key={name}
                  style={{
                    background: "rgba(201,162,75,0.12)",
                    border: `2.5px solid ${O.brass}`,
                    borderRadius: 12,
                    padding: "14px 10px",
                    textAlign: "center",
                    fontSize: 23,
                    fontWeight: 900,
                    color: O.brassLight,
                    fontFamily: "var(--inkloom-animation-title)",
                    ...enter(f, 54 + i * 8),
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div data-final-knowledge="optional-access-points">
            <div style={{ fontSize: 21, fontWeight: 900, color: O.azureLight, fontFamily: "var(--inkloom-animation-label)", marginBottom: 10 }}>
              根据需要自主设立的选择场所：
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {["公共查阅室", "资料索取点", "信息公告栏", "电子信息屏"].map((name, i) => (
                <div
                  key={name}
                  style={{
                    border: `2px dashed ${O.azure}77`,
                    borderRadius: 10,
                    padding: "10px 12px",
                    textAlign: "center",
                    fontSize: 21,
                    color: O.azureLight,
                    fontWeight: 800,
                    ...enter(f, 74 + i * 6),
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: O.soft, fontFamily: "var(--inkloom-animation-label)" }}>
              三大法定场所必须提供查阅
            </span>
            <VerdictSeal label="法定线下阵地" delay={110} rotation={-4} />
          </div>
        </BrassCard>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 06 申请准入与收到日计算
// ---------------------------------------------------------------
export const ApplicationIntakeRulesScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="06" title="申请准入与收到日计算" subtitle="一松一紧准入 · 四种收到日">
      <div
        data-layout="twin-gate-receipt-scale"
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
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          <BrassCard edge={O.azure} style={{ ...enter(f, 6, -24, 0) }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Plate color={O.azure} outline>准入门槛</Plate>
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: O.azureLight }}>
                一松一紧
              </span>
            </div>
            <div
              style={{
                marginTop: 14,
                background: "rgba(111,155,196,0.10)",
                border: `2px solid ${O.azure}55`,
                borderRadius: 14,
                padding: 16,
              }}
            >
              <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: O.azureLight, marginBottom: 8 }}>
                一松 · 取消特殊需要与用途限制
              </div>
              <div style={{ fontSize: 21, color: O.cream, lineHeight: 1.5 }}>
                不再要求与生产、生活、科研等"特殊需要"相关，无需说明申请用途
              </div>
            </div>
            <div
              data-final-knowledge="mandatory-identity-rule"
              style={{
                marginTop: 14,
                background: "rgba(207,122,90,0.10)",
                border: `2px solid ${O.coral}`,
                borderRadius: 14,
                padding: 16,
              }}
            >
              <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: O.coralLight, marginBottom: 8 }}>
                一紧 · 必须提交身份证明
              </div>
              <div style={{ fontSize: 21, color: O.cream, lineHeight: 1.5 }}>
                无论申请何种信息，申请时必须提交申请人身份证明
              </div>
            </div>
          </BrassCard>
          <div
            data-final-knowledge="written-priority-form"
            style={{
              border: `2px dashed ${O.brass}`,
              borderRadius: 12,
              padding: "12px 16px",
              fontSize: 20,
              color: O.brassLight,
              fontWeight: 800,
              fontFamily: "var(--inkloom-animation-label)",
              ...enter(f, 30),
            }}
          >
            形式原则：书面为主（含信件、数据电文）；确有困难可口头提出
          </div>
        </div>

        <BrassCard
          data-stateful-terminal="citizen-application-file"
          data-final-knowledge="four-receipt-date-rules"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 14,
            ...enter(f, 14, 24, 0),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Plate color={O.brass} outline>起算节点</Plate>
            <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 900, color: O.brassLight }}>
              收到申请之日判定
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { method: "当面提交", rule: "提交之日", note: "窗口现场交付", edge: O.azure },
              { method: "挂号信 / 特快专递", rule: "签收之日", note: "以行政机关签收凭证为据", edge: O.azureLight },
              { method: "平常信函（免签收）", rule: "确认之日", note: "收到当日与申请人确认", edge: O.brass },
              { method: "互联网 / 传真", rule: "双方确认之日", note: "系统交互或电话核实确认", edge: O.coral },
            ].map((item, index) => (
              <div
                key={item.method}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  background: "rgba(201,162,75,0.07)",
                  borderLeft: `6px solid ${item.edge}`,
                  borderRadius: 12,
                  padding: "12px 16px",
                  ...enter(f, 18 + index * 8, 0, 8),
                }}
              >
                <div>
                  <span className="font-animation-title" style={{ fontSize: 23, fontWeight: 900, color: O.cream }}>
                    {item.method}
                  </span>
                  <div style={{ fontSize: 19, color: O.soft, fontFamily: "var(--inkloom-animation-label)" }}>
                    {item.note}
                  </div>
                </div>
                <Plate color={item.edge} outline>收到日 = {item.rule}</Plate>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: O.soft, fontFamily: "var(--inkloom-animation-label)" }}>
              收到之日起，启动法定20日倒计时
            </span>
            <VerdictSeal label="起算基准确立" delay={120} rotation={-3} />
          </div>
        </BrassCard>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 07 答复期限与延长机制
// ---------------------------------------------------------------
export const ResponseDeadlineClockScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="extension-approval-condition" data-final-knowledge="consultation-time-exclusion" */
  const f = useCurrentFrame();
  return (
    <Shell code="07" title="答复期限与延长机制" subtitle="基础20日 + 批准延长20日 · 扣除征求意见">
      <div
        data-layout="twenty-plus-twenty-cascade-dials"
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
          style={{ flex: 1, display: "flex", flexDirection: "column", ...enter(f, 6, 0, 12) }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <Plate color={O.brass} outline>法定答复日历</Plate>
            <span className="font-animation-title" style={{ fontSize: 28, fontWeight: 950, color: O.brassLight }}>
              20 ＋ 20 工作日两段式答复结构
            </span>
          </div>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 20, alignItems: "stretch" }}>
            {[
              {
                stage: "STAGE 01 · 基础答复期",
                big: "20 个工作日内",
                body: "自收到申请之日起算；能当场答复的应当场答复",
                edge: O.azure,
                knowledge: undefined as string | undefined,
              },
              {
                stage: "STAGE 02 · 延长审批闸门",
                big: "最长 ＋20 个工作日",
                body: "双重要件：经政府信息公开工作机构负责人同意，并告知申请人",
                edge: O.brass,
                knowledge: "extension-approval-condition",
              },
              {
                stage: "STAGE 03 · 扣除时钟",
                big: "征求意见不计入",
                body: "征求第三方和其他机关意见所需时间，不计算在期限内",
                edge: O.azureLight,
                knowledge: "consultation-time-exclusion",
              },
            ].map((stage, index) => (
              <div
                key={stage.stage}
                {...(stage.knowledge ? { "data-final-knowledge": stage.knowledge } : {})}
                style={{
                  background: O.panel,
                  border: `3px solid ${stage.edge}`,
                  borderTop: `10px solid ${stage.edge}`,
                  borderRadius: 16,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 12,
                  boxShadow: "0 10px 26px rgba(0,0,0,.45)",
                  ...enter(f, 12 + index * 12),
                }}
              >
                <div style={{ fontSize: 20, color: O.soft, fontWeight: 900, fontFamily: "var(--inkloom-animation-label)", letterSpacing: 1 }}>
                  {stage.stage}
                </div>
                <div className="font-animation-title" style={{ fontSize: 31, fontWeight: 950, color: O.cream }}>
                  {stage.big}
                </div>
                <div style={{ fontSize: 21, color: O.cream, lineHeight: 1.5 }}>{stage.body}</div>
              </div>
            ))}
          </div>
        </div>

        <BrassCard
          data-stateful-terminal="response-timeline-token"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 24px",
            ...enter(f, 32),
          }}
        >
          <div style={{ display: "flex", gap: 34, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Plate color={O.azure} outline>主动公开</Plate>
              <span style={{ fontSize: 23, color: O.cream }}>
                形成起 20 日（<b style={{ color: O.coralLight }}>无延长制度</b>）
              </span>
            </div>
            <span className="font-animation-mono" style={{ fontSize: 26, fontWeight: 950, color: O.brass }}>
              VS
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Plate color={O.brass} outline>依申请公开</Plate>
              <span style={{ fontSize: 23, color: O.cream }}>
                收到起 20 日 ＋ 批准延长最多 <b style={{ color: O.brassLight }}>20 日</b>
              </span>
            </div>
          </div>
          <VerdictSeal label="法定时限锁定" delay={120} rotation={-2} />
        </BrassCard>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 08 答复分类与分割处理
// ---------------------------------------------------------------
export const ResponseClassificationMatrixScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="no-fee-with-cost-exception" data-final-knowledge="severability-disclosure" data-final-knowledge="non-existent-search-duty" data-final-knowledge="not-this-agency-guidance-duty" data-final-knowledge="seven-day-supplement-notice" data-stateful-source="severable-record-token" data-stateful-terminal="severable-record-token" */
  const f = useCurrentFrame();
  return (
    <Shell code="08" title="答复分类与分割处理" subtitle="6种法定答复结果 · 涉密分割 · 补正机制">
      <div
        data-layout="six-sector-response-compass"
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
        {[
          {
            no: "01",
            tag: "予以公开",
            edge: O.azureLight,
            title: "依申请提供",
            body: "按申请形式提供；危及载体安全或成本过高时，可提供电子版或安排查阅抄录。",
            note: "免费原则 · 超频超量收处理费",
            knowledge: "no-fee-with-cost-exception",
            source: true,
            terminal: false,
          },
          {
            no: "02",
            tag: "区分处理",
            edge: O.azure,
            title: "涉密分割提供",
            body: "能作区分处理的，必须提供可公开部分，并对不予公开部分说明理由。",
            note: "严禁因部分涉密而全盘拒绝",
            knowledge: "severability-disclosure",
            source: false,
            terminal: false,
          },
          {
            no: "03",
            tag: "不予公开",
            edge: O.coral,
            title: "书面说明理由",
            body: "符合不予公开三级梯队的，告知申请人不予公开并明确说明理由。",
            note: "当事人具有诉权",
            knowledge: undefined as string | undefined,
            source: false,
            terminal: false,
          },
          {
            no: "04",
            tag: "信息不存在",
            edge: O.brass,
            title: "检索后告知",
            body: "经全面检索没有所申请信息的，明确告知该政府信息不存在。",
            note: "需承担合理检索举证责任",
            knowledge: "non-existent-search-duty",
            source: false,
            terminal: false,
          },
          {
            no: "05",
            tag: "非本机关",
            edge: O.azureLight,
            title: "说明并指引",
            body: "告知申请人理由；能确定负责机关的，告知该机关名称与联系方式。",
            note: "协助指引义务",
            knowledge: "not-this-agency-guidance-duty",
            source: false,
            terminal: false,
          },
          {
            no: "06",
            tag: "内容不明确",
            edge: O.brass,
            title: "7日内一次性补正",
            body: "收到申请起7个工作日内一次性告知补正；无正当理由逾期不补正，视为放弃申请。",
            note: "补正通知书属过程性行为，不可诉",
            knowledge: "seven-day-supplement-notice",
            source: false,
            terminal: true,
          },
        ].map((route, index) => (
          <div
            key={route.no}
            {...(route.knowledge ? { "data-final-knowledge": route.knowledge } : {})}
            {...(route.source ? { "data-stateful-source": "severable-record-token" } : {})}
            {...(route.terminal ? { "data-stateful-terminal": "severable-record-token" } : {})}
            style={{
              background: O.panel,
              border: `3px solid ${route.edge}`,
              borderTop: `10px solid ${route.edge}`,
              borderRadius: 14,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 24px rgba(0,0,0,.45)",
              ...enter(f, 8 + index * 8, 0, 14),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <Plate color={route.edge} outline>
                {route.no} {route.tag}
              </Plate>
              <span className="font-animation-title" style={{ fontSize: 22, fontWeight: 950, color: O.cream, textAlign: "right" }}>
                {route.title}
              </span>
            </div>
            <div style={{ fontSize: 20, color: O.cream, lineHeight: 1.5 }}>{route.body}</div>
            <div
              style={{
                background: "rgba(201,162,75,0.09)",
                borderLeft: `4px solid ${route.edge}`,
                borderRadius: 8,
                padding: "6px 10px",
                fontSize: 18,
                color: O.brassLight,
                fontWeight: 800,
                fontFamily: "var(--inkloom-animation-label)",
              }}
            >
              {route.note}
            </div>
          </div>
        ))}
        <div style={{ position: "absolute", right: 26, top: 14, zIndex: 2 }}>
          <VerdictSeal label="分类精准答复" delay={58} rotation={-4} />
        </div>
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 09 特殊申请处置六大路径
// ---------------------------------------------------------------
export const SpecialApplicationRouterScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="abuse-request-handling" data-final-knowledge="petition-motive-redirect" data-final-knowledge="data-processing-rejection" data-final-knowledge="published-item-guidance" data-final-knowledge="error-correction-duty" data-final-knowledge="application-to-active-conversion" */
  const f = useCurrentFrame();
  return (
    <Shell code="09" title="特殊申请处置六大路径" subtitle="滥用 · 信访 · 加工 · 已公开 · 更正 · 转主动">
      <div
        data-layout="telescope-routing-deck"
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
        {[
          {
            no: "01",
            edge: O.coral,
            title: "滥用申请权（超频超量）",
            body: "可要求说明理由；理由不合理 → 告知不予处理；理由合理但超期 → 确定延迟期限并告知",
            knowledge: "abuse-request-handling",
          },
          {
            no: "02",
            edge: O.azure,
            title: "动机不单纯（信访/投诉/举报）",
            body: "告知不作为信息公开申请处理，并告知通过相应法定渠道提出",
            knowledge: "petition-motive-redirect",
          },
          {
            no: "03",
            edge: O.brass,
            title: "申请加工、分析现有数据",
            body: "要求行政机关对现有信息进行加工、分析的，可以不予提供",
            knowledge: "data-processing-rejection",
          },
          {
            no: "04",
            edge: O.azureLight,
            title: "申请已公开发行出版物",
            body: "政府公报、报刊、书籍等公开出版物，告知获取途径即可",
            knowledge: "published-item-guidance",
          },
          {
            no: "05",
            edge: O.azureLight,
            title: "信息有误要求更正",
            body: "有权机关审核属实应当更正并告知；非职能范围的可转送有权机关或告知申请人向有权机关提出",
            knowledge: "error-correction-duty",
          },
          {
            no: "06",
            edge: O.azure,
            title: "多位申请人申请相同信息",
            body: "多个申请人就相同可公开信息提出申请的，可以纳入主动公开范围",
            knowledge: "application-to-active-conversion",
          },
        ].map((path, index) => (
          <div
            key={path.no}
            data-final-knowledge={path.knowledge}
            style={{
              background: O.panel,
              border: `2.5px solid ${path.edge}66`,
              borderLeft: `12px solid ${path.edge}`,
              borderRadius: 14,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              boxShadow: "0 8px 22px rgba(0,0,0,.4)",
              ...enter(f, 8 + index * 8, 0, 12),
            }}
          >
            <TickRing
              size={58}
              center={
                <span style={{ fontSize: 21, fontWeight: 950, color: O.brassLight, fontFamily: "var(--inkloom-animation-mono)" }}>
                  {path.no}
                </span>
              }
            />
            <div>
              <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 950, color: O.cream, marginBottom: 5 }}>
                {path.title}
              </div>
              <div style={{ fontSize: 20, color: O.soft, lineHeight: 1.42 }}>{path.body}</div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// SCENE 10 高频真题陷阱综合判别
// ---------------------------------------------------------------
export const ExamTrapsVerdictScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="trap-process-vs-internal" data-final-knowledge="trap-consultation-overdue-balance" data-final-knowledge="trap-active-no-extension" data-final-knowledge="trap-clarification-notice-duty" data-final-knowledge="trap-oral-form-allowance" */
  const f = useCurrentFrame();
  return (
    <Shell code="10" title="高频真题陷阱综合判别" subtitle="法考高频高危易错点集中裁决">
      <div
        data-layout="five-entry-verdict-log"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-classic-misconceptions-face-the-verdict-bench,statutory-rules-strike-false-assumptions-with-seal-stamps,the-final-row-locks-one-oral-form-allowance"
        data-text-treatments="external-negation,stamp,soft-highlight"
        data-focal-channels="contrast,annotation,locator"
        data-focal-rule="法考高频五大核心易错陷阱终审裁决"
        data-stateful-source="exam-test-ticket"
        data-stateful-terminal="exam-test-ticket"
        style={{ position: "absolute", inset: 10, display: "flex", flexDirection: "column", gap: 14 }}
      >
        {[
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
        ].map((trap, index) => (
          <div
            key={trap.knowledge}
            data-final-knowledge={trap.knowledge}
            style={{
              flex: 1,
              background: O.panel,
              border: `3px solid ${trap.pass ? O.azure : O.coral}`,
              borderLeft: `14px solid ${trap.pass ? O.azure : O.coral}`,
              borderRadius: 14,
              padding: "10px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 8px 22px rgba(0,0,0,.4)",
              ...enter(f, 8 + index * 10, 0, 10),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: `3px solid ${trap.pass ? O.azureLight : O.coralLight}`,
                  color: trap.pass ? O.azureLight : O.coralLight,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 28,
                  fontWeight: 950,
                  flex: "0 0 auto",
                  fontFamily: "var(--inkloom-animation-mono)",
                }}
              >
                {trap.pass ? "✓" : "✕"}
              </span>
              <div>
                <div className="font-animation-title" style={{ fontSize: 23, fontWeight: 950, color: O.cream }}>
                  {trap.question}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: trap.pass ? O.azureLight : O.coralLight,
                    fontFamily: "var(--inkloom-animation-label)",
                    fontWeight: 850,
                    lineHeight: 1.4,
                  }}
                >
                  {trap.answer}
                </div>
              </div>
            </div>
            <Plate color={trap.pass ? O.azure : O.coral} outline>
              {trap.pass ? "正确结论" : "法考避坑"}
            </Plate>
          </div>
        ))}
      </div>
    </Shell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const DisclosureCaseDesk: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{ backgroundColor: "#070d1c", width: 1920, height: 1080 }}
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
