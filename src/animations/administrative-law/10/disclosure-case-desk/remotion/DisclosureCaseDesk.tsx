import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SCENES } from "./storyboard";

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme Palette: Deep Navy & Civic Transparency
const THEME = {
  bg: "#0b1222",
  bgGradient: "radial-gradient(ellipse at 50% 20%, #152238 0%, #080d1a 100%)",
  cardBg: "rgba(15, 23, 42, 0.88)",
  cardBorder: "rgba(56, 189, 248, 0.22)",
  primary: "#38bdf8", // Cyan Beacon
  primaryGlow: "rgba(56, 189, 248, 0.35)",
  accentGold: "#f59e0b", // Amber Signal
  accentGoldGlow: "rgba(245, 158, 11, 0.3)",
  accentGreen: "#10b981", // Jade Approval
  accentRed: "#f43f5e", // Crimson Prohibit
  accentPurple: "#a855f7", // Ultraviolet Branch
  textPrimary: "#f8fafc", // Warm Bone White
  textSecondary: "#94a3b8", // Slate Muted
  stampCrimson: "#e11d48",
  stampGreen: "#059669",
};

interface BadgeProps {
  label: string;
  variant?: "primary" | "gold" | "green" | "red" | "purple" | "muted";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const TokenBadge: React.FC<BadgeProps> = ({
  label,
  variant = "primary",
  size = "md",
  style,
}) => {
  const colorMap = {
    primary: { bg: "rgba(56, 189, 248, 0.15)", border: "#38bdf8", text: "#e0f2fe" },
    gold: { bg: "rgba(245, 158, 11, 0.18)", border: "#f59e0b", text: "#fef3c7" },
    green: { bg: "rgba(16, 185, 129, 0.18)", border: "#10b981", text: "#d1fae5" },
    red: { bg: "rgba(244, 63, 94, 0.18)", border: "#f43f5e", text: "#ffe4e6" },
    purple: { bg: "rgba(168, 85, 247, 0.18)", border: "#a855f7", text: "#f3e8ff" },
    muted: { bg: "rgba(148, 163, 184, 0.12)", border: "#64748b", text: "#cbd5e1" },
  };
  const conf = colorMap[variant];
  const padding = size === "lg" ? "8px 20px" : size === "md" ? "6px 14px" : "4px 10px";
  const fontSize = size === "lg" ? "24px" : size === "md" ? "22px" : "18px";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        backgroundColor: conf.bg,
        border: `1.5px solid ${conf.border}`,
        borderRadius: "8px",
        color: conf.text,
        fontSize,
        fontWeight: 600,
        fontFamily: "var(--inkloom-animation-label)",
        letterSpacing: "0.5px",
        boxShadow: `0 2px 10px ${conf.bg}`,
        ...style,
      }}
    >
      {label}
    </span>
  );
};

const SceneHeader: React.FC<{
  step: string;
  title: string;
  subtitle: string;
}> = ({ step, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [-20, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 36,
        left: 60,
        right: 60,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottom: `1px solid ${THEME.cardBorder}`,
        paddingBottom: 16,
        opacity,
        transform: `translateY(${translateY}px)`,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
        <span
          style={{
            color: THEME.primary,
            fontSize: "24px",
            fontWeight: 800,
            fontFamily: "var(--inkloom-animation-mono)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {step}
        </span>
        <h2
          style={{
            color: THEME.textPrimary,
            fontSize: "36px",
            fontWeight: 800,
            fontFamily: "var(--inkloom-animation-title)",
            margin: 0,
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          color: THEME.textSecondary,
          fontSize: "22px",
          fontFamily: "var(--inkloom-animation-body)",
          fontWeight: 500,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};

const StampVerdict: React.FC<{
  label: string;
  pass?: boolean;
  delay?: number;
  rotation?: number;
  style?: React.CSSProperties;
}> = ({ label, pass = true, delay = 0, rotation = -6, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const effectiveFrame = Math.max(0, frame - delay);
  const scale = spring({
    frame: effectiveFrame,
    fps,
    config: { damping: 10, stiffness: 220, mass: 0.6 },
  });
  const opacity = interpolate(effectiveFrame, [0, 5], [0, 1], { extrapolateRight: "clamp" });
  const borderColor = pass ? THEME.stampGreen : THEME.stampCrimson;
  const textColor = pass ? "#10b981" : "#f43f5e";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 24px",
        border: `3.5px dashed ${borderColor}`,
        borderRadius: "12px",
        color: textColor,
        fontSize: "28px",
        fontWeight: 900,
        fontFamily: "var(--inkloom-animation-title)",
        letterSpacing: "3px",
        textTransform: "uppercase",
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: `0 4px 20px ${pass ? "rgba(16, 185, 129, 0.25)" : "rgba(244, 63, 94, 0.25)"}`,
        ...style,
      }}
    >
      {label}
    </div>
  );
};

// -------------------------------------------------------------
// SCENE 1: 政府信息内涵判定 (InfoDefinitionScopeScene)
// -------------------------------------------------------------
export const InfoDefinitionScopeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 110;

  return (
    <AbsoluteFill
      data-layout="dual-channel-info-definition"
      data-visual-anchor="flow-target"
      data-text-treatments="label-block,soft-highlight,stamp"
      data-visual-grammar="two-information-streams-enter-the-core-vault,recorded-and-preserved-administrative-data-is-stamped-as-government-info,pure-personal-or-unrelated-items-are-diverted"
      data-focal-channels="contrast,connector,enclosure"
      data-focal-rule="政府信息定义与双来源判定"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 01"
        title="政府信息内涵判定"
        subtitle="行政管理职能 × 形式记录保存"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "flex",
          gap: 36,
          alignItems: "center",
        }}
      >
        {/* Left: Two Input Streams */}
        <div
          data-stateful-source="info-specimen-token"
          style={{ flex: "0 0 520px", display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Stream A: 制作 */}
          <div
            data-final-knowledge="made-vs-acquired"
            style={{
              padding: 24,
              backgroundColor: THEME.cardBg,
              border: `2px solid ${THEME.primary}`,
              borderRadius: 16,
              boxShadow: `0 8px 32px ${THEME.primaryGlow}`,
              transform: `translateX(${interpolate(entrance, [0, 1], [-40, 0])}px)`,
              opacity: entrance,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <TokenBadge label="来源通道 01" variant="primary" size="sm" />
              <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.primary, fontFamily: "var(--inkloom-animation-title)" }}>
                行政机关【制作】
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5 }}>
              履行职责自制：如<span style={{ color: "#38bdf8", fontWeight: 700 }}>许可监督检查笔录</span>、处罚决定书、督查报告
            </div>
          </div>

          {/* Stream B: 获取 */}
          <div
            style={{
              padding: 24,
              backgroundColor: THEME.cardBg,
              border: `2px solid ${THEME.accentGold}`,
              borderRadius: 16,
              boxShadow: `0 8px 32px ${THEME.accentGoldGlow}`,
              transform: `translateX(${interpolate(entrance, [0, 1], [-40, 0])}px)`,
              opacity: entrance,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <TokenBadge label="来源通道 02" variant="gold" size="sm" />
              <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.accentGold, fontFamily: "var(--inkloom-animation-title)" }}>
                行政机关【获取】
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5 }}>
              履职外部取得：如<span style={{ color: "#f59e0b", fontWeight: 700 }}>企业登记申报材料</span>、公民提交申请书、检测报告
            </div>
          </div>
        </div>

        {/* Center: Conduits & Filter Core */}
        <div
          data-final-knowledge="info-concept-definition"
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 20,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Core Condition Gate */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: THEME.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: 900,
                  color: "#0b1222",
                  fontFamily: "var(--inkloom-animation-mono)",
                }}
              >
                §
              </div>
              <div>
                <div style={{ fontSize: "26px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                  法定要件过滤闸门
                </div>
                <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                  双重要件同时具备 ➔ 确认为法定政府信息
                </div>
              </div>
            </div>
            <TokenBadge label="全要素检验" variant="purple" size="md" />
          </div>

          {/* Condition Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.7)",
                border: "1.5px solid rgba(56, 189, 248, 0.3)",
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: THEME.accentGreen }} />
                <span style={{ fontSize: "24px", fontWeight: 700, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-label)" }}>
                  要件一：行政职能关联
                </span>
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                在履行<span style={{ color: "#38bdf8", fontWeight: 700 }}>行政管理职能</span>过程中产生或持有（排除纯个人私信/民商事活动）
              </div>
            </div>

            <div
              data-final-knowledge="recorded-preserved-standard"
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.7)",
                border: "1.5px solid rgba(245, 158, 11, 0.3)",
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: THEME.accentGreen }} />
                <span style={{ fontSize: "24px", fontWeight: 700, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-label)" }}>
                  要件二：介质记录保存
                </span>
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                以<span style={{ color: "#f59e0b", fontWeight: 700 }}>一定形式记录、保存</span>（纸质卷宗、电子数据、影像磁介质）
              </div>
            </div>
          </div>

          {/* Outcome Bar & Stamp */}
          <div
            data-stateful-terminal="info-specimen-token"
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: `2px solid ${THEME.accentGreen}`,
              borderRadius: 14,
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: THEME.accentGreen, fontFamily: "var(--inkloom-animation-title)" }}>
                【法律结论】依法纳入《政府信息公开条例》调整范围
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", marginTop: 4 }}>
                县政府对企业检查记录、企业向住建委申报材料 ➔ 均属政府信息！
              </div>
            </div>

            <StampVerdict label="法定政府信息" pass={true} delay={stampDelay} rotation={-4} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 2: 公开主体权属矩阵 (DisclosureSubjectMatrixScene)
// -------------------------------------------------------------
export const DisclosureSubjectMatrixScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 120;

  return (
    <AbsoluteFill
      data-layout="four-branch-subject-matrix"
      data-visual-anchor="document-fork"
      data-text-treatments="label-block,thin-underline,stamp"
      data-visual-grammar="information-routes-to-producing-or-preserving-authority,derived-info-traces-back-to-origin-source,joint-info-routes-to-lead-organ-with-fifteen-day-consultation"
      data-focal-channels="connector,locator,contrast"
      data-focal-rule="公开主体四大法定归属规则"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 02"
        title="公开主体权属矩阵"
        subtitle="制作/保存/派生/共同信息的权属界定"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 24,
        }}
      >
        {/* Card 1: 制作/保存 */}
        <div
          data-stateful-source="origin-authority-token"
          data-final-knowledge="who-makes-discloses"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 28px ${THEME.primaryGlow}`,
            transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
            opacity: entrance,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="基本原则" variant="primary" size="md" />
            <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.primary, fontFamily: "var(--inkloom-animation-title)" }}>
              谁制作谁公开 · 谁保存谁公开
            </span>
          </div>
          <div style={{ fontSize: "24px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.6 }}>
            行政机关自行制作的信息由<span style={{ color: "#38bdf8", fontWeight: 700, borderBottom: "2px solid #38bdf8" }}>制作机关</span>公开；从公民/法人处获取的由<span style={{ color: "#38bdf8", fontWeight: 700, borderBottom: "2px solid #38bdf8" }}>保存机关</span>公开。
          </div>
          <div style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", borderRadius: 10, padding: "8px 16px", fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            📌 核心要领：职责对应，杜绝踢皮球
          </div>
        </div>

        {/* Card 2: 派生获取 */}
        <div
          data-final-knowledge="derived-info-origin"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.accentGold}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 28px ${THEME.accentGoldGlow}`,
            transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
            opacity: entrance,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="派生获取" variant="gold" size="md" />
            <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.accentGold, fontFamily: "var(--inkloom-animation-title)" }}>
              溯源至最初获取/制作机关
            </span>
          </div>
          <div style={{ fontSize: "24px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.6 }}>
            A 机关从 B 机关处获取的政府信息，由<span style={{ color: "#f59e0b", fontWeight: 700, borderBottom: "2px solid #f59e0b" }}>制作或最初获取</span>该信息的 B 机关负责公开。
          </div>
          <div style={{ backgroundColor: "rgba(245, 158, 11, 0.1)", borderRadius: 10, padding: "8px 16px", fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            ⚠️ 易错防坑：非源头机关只负指引告知职责
          </div>
        </div>

        {/* Card 3: 授权机构 */}
        <div
          data-final-knowledge="authorized-branch-duty"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.accentPurple}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 8px 28px rgba(168, 85, 247, 0.25)",
            transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
            opacity: entrance,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="分支机构" variant="purple" size="md" />
            <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.accentPurple, fontFamily: "var(--inkloom-animation-title)" }}>
              授权内设/派出机构以己名义
            </span>
          </div>
          <div style={{ fontSize: "24px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.6 }}>
            取得法律法规<span style={{ color: "#a855f7", fontWeight: 700 }}>授权</span>的派出机构或指定机构，以<span style={{ color: "#a855f7", fontWeight: 700, borderBottom: "2px solid #a855f7" }}>自己名义</span>履职时由其自行公开。
          </div>
          <div style={{ backgroundColor: "rgba(168, 85, 247, 0.1)", borderRadius: 10, padding: "8px 16px", fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            🏛️ 诉讼关联：以自己名义作出的直接当被告
          </div>
        </div>

        {/* Card 4: 共同信息 */}
        <div
          data-stateful-terminal="origin-authority-token"
          data-final-knowledge="joint-lead-organ-rule"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.accentGreen}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 8px 28px rgba(16, 185, 129, 0.25)",
            transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
            opacity: entrance,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="共同信息" variant="green" size="md" />
            <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.accentGreen, fontFamily: "var(--inkloom-animation-title)" }}>
              牵头机关公开 · 15日不复视为同意
            </span>
          </div>
          <div style={{ fontSize: "24px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.6 }}>
            数机关共同制作：由<span style={{ color: "#10b981", fontWeight: 700, borderBottom: "2px solid #10b981" }}>牵头机关</span>公开；征求意见时被征求者在<span style={{ color: "#10b981", fontWeight: 700 }}>15个工作日内</span>回复，<span style={{ color: "#f59e0b", fontWeight: 700 }}>逾期不回复视为同意</span>！
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", borderRadius: 10, padding: "8px 16px", fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
              ⏱️ 机关间推定同意机制
            </div>
            <StampVerdict label="牵头机关主责" pass={true} delay={stampDelay} rotation={-3} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 3: 不予公开三级梯队 (NondisclosureTierMatrixScene)
// -------------------------------------------------------------
export const NondisclosureTierMatrixScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 130;

  return (
    <AbsoluteFill
      data-layout="three-tier-nondisclosure-gateway"
      data-visual-anchor="boundary"
      data-text-treatments="external-negation,stamp,label-block"
      data-visual-grammar="absolute-prohibition-locks-the-iron-shutter,relative-exceptions-weigh-privacy-against-public-interest,discretionary-internal-records-dim-at-gate"
      data-focal-channels="enclosure,contrast,motion"
      data-focal-rule="不予公开三级分类与征求意见权衡"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 03"
        title="不予公开三级梯队"
        subtitle="一律不 · 原则不（例外） · 可以不"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1.1fr 1.3fr 1.1fr",
          gap: 24,
        }}
      >
        {/* Tier 1: 一律不公开 (绝对禁止) */}
        <div
          data-stateful-source="confidential-packet"
          data-final-knowledge="absolute-nondisclosure-tier"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2.5px solid ${THEME.accentRed}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 8px 32px rgba(244, 63, 94, 0.25)",
            transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <TokenBadge label="第一梯队" variant="red" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 900, color: THEME.accentRed, fontFamily: "var(--inkloom-animation-title)" }}>
                【一律不公开】
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, marginBottom: 14, fontFamily: "var(--inkloom-animation-label)" }}>
              绝对刚性排除清单：
            </div>
            <ul style={{ margin: 0, paddingLeft: 22, fontSize: "23px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.7 }}>
              <li>涉及<span style={{ color: "#f43f5e", fontWeight: 700 }}>国家秘密</span></li>
              <li>法律、行政法规<span style={{ color: "#f43f5e", fontWeight: 700 }}>明令禁止</span></li>
              <li>危及<span style={{ color: "#f43f5e", fontWeight: 700 }}>三安全一稳定</span>（国家安全、公共安全、经济安全、社会稳定）</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgba(244, 63, 94, 0.15)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#fecdd3", fontWeight: 700, fontFamily: "var(--inkloom-animation-label)" }}>
            🚫 绝无例外，行政机关无自由裁量权
          </div>
        </div>

        {/* Tier 2: 原则不公开 (相对例外) */}
        <div
          data-final-knowledge="relative-exception-tier"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2.5px solid ${THEME.accentGold}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${THEME.accentGoldGlow}`,
            transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <TokenBadge label="第二梯队" variant="gold" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 900, color: THEME.accentGold, fontFamily: "var(--inkloom-animation-title)" }}>
                【原则不公开】
              </span>
            </div>
            <div style={{ fontSize: "23px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 12 }}>
              对象：涉及<span style={{ color: "#f59e0b", fontWeight: 700 }}>商业秘密</span>、<span style={{ color: "#f59e0b", fontWeight: 700 }}>个人隐私</span>
            </div>

            <div style={{ backgroundColor: "rgba(15, 23, 42, 0.9)", border: "1.5px solid rgba(245, 158, 11, 0.3)", borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: "22px", fontWeight: 700, color: THEME.accentGold, marginBottom: 6, fontFamily: "var(--inkloom-animation-label)" }}>
                ⚖️ 征求意见程序（15个工作日内）：
              </div>
              <div style={{ fontSize: "21px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.6 }}>
                1. 权利人同意 ➔ <span style={{ color: "#10b981", fontWeight: 700 }}>公开</span><br />
                2. 不同意+合理理由 ➔ <span style={{ color: "#f43f5e", fontWeight: 700 }}>不公开</span><br />
                3. 不同意但涉<span style={{ color: "#38bdf8", fontWeight: 700 }}>重大公共利益</span> ➔ <span style={{ color: "#10b981", fontWeight: 700 }}>必须公开</span><br />
                4. 逾期未答复 ➔ <span style={{ color: "#f59e0b", fontWeight: 800 }}>行政机关权衡判断</span>（非视为同意/拒绝！）
              </div>
            </div>
          </div>

          <StampVerdict label="非一刀切推定" pass={true} delay={stampDelay} rotation={-4} />
        </div>

        {/* Tier 3: 可以不公开 (裁量豁免) */}
        <div
          data-stateful-terminal="confidential-packet"
          data-final-knowledge="discretionary-exemption-tier"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2.5px solid ${THEME.primary}`,
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${THEME.primaryGlow}`,
            transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <TokenBadge label="第三梯队" variant="primary" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 900, color: THEME.primary, fontFamily: "var(--inkloom-animation-title)" }}>
                【可以不公开】
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, marginBottom: 14, fontFamily: "var(--inkloom-animation-label)" }}>
              行政裁量豁免范围：
            </div>
            <ul
              data-final-knowledge="dispute-determination-rule"
              style={{ margin: 0, paddingLeft: 22, fontSize: "23px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.7 }}
            >
              <li><span style={{ color: "#38bdf8", fontWeight: 700 }}>内部事务信息</span>：人事管理、后勤、内部工作流程</li>
              <li><span style={{ color: "#38bdf8", fontWeight: 700 }}>过程性信息</span>：讨论记录、过程稿、磋商信函、请示报告</li>
              <li><span style={{ color: "#38bdf8", fontWeight: 700 }}>行政执法案卷信息</span>（法规定应公开除外）</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#bae6fd", fontWeight: 700, fontFamily: "var(--inkloom-animation-label)" }}>
            🛡️ 争议处置：报主管部门或保密行政部门确定
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 4: 主动公开范围与刚性时限 (ActiveDisclosureScopeClockScene)
// -------------------------------------------------------------
export const ActiveDisclosureScopeClockScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const clockSweep = interpolate(frame, [20, 100], [0, 360], { extrapolateRight: "clamp" });
  const stampDelay = 115;

  return (
    <AbsoluteFill
      data-layout="twenty-day-active-disclosure-clock"
      data-visual-anchor="timeline-gate"
      data-text-treatments="label-block,soft-highlight,external-negation"
      data-visual-grammar="four-public-interest-categories-enter-the-active-lane,twenty-working-day-clock-counts-down-from-formation-or-change,rigid-lock-forbids-any-deadline-extension"
      data-focal-channels="locator,contrast,spatial"
      data-focal-rule="主动公开法定范围与20工作日不可延长原则"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 04"
        title="主动公开范围与刚性时限"
        subtitle="20个工作日刚性公开 · 严禁任何延长"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "flex",
          gap: 36,
          alignItems: "center",
        }}
      >
        {/* Left: 4 Active Categories */}
        <div
          data-stateful-source="active-release-payload"
          style={{ flex: "1.2", display: "flex", flexDirection: "column", gap: 18 }}
        >
          <div
            data-final-knowledge="public-interest-scope"
            style={{
              backgroundColor: THEME.cardBg,
              border: `1.5px solid ${THEME.primary}`,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: THEME.primary, color: "#0b1222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 900, fontFamily: "var(--inkloom-animation-mono)" }}>
              01
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                公众重大知情事项
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                涉及<span style={{ color: "#38bdf8", fontWeight: 700 }}>公众利益调整</span>、需要<span style={{ color: "#38bdf8", fontWeight: 700 }}>公众广泛知晓</span>或需要<span style={{ color: "#38bdf8", fontWeight: 700 }}>公众参与决策</span>
              </div>
            </div>
          </div>

          <div
            data-final-knowledge="penalty-with-impact"
            style={{
              backgroundColor: THEME.cardBg,
              border: `1.5px solid ${THEME.accentGold}`,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: THEME.accentGold, color: "#0b1222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 900, fontFamily: "var(--inkloom-animation-mono)" }}>
              02
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                重大行政处罚决定
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                行政机关认为<span style={{ color: "#f59e0b", fontWeight: 700 }}>具有一定社会影响</span>的处罚决定（⚠️并非所有处罚都主动公开）
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: THEME.cardBg,
              border: `1.5px solid ${THEME.accentGreen}`,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: THEME.accentGreen, color: "#0b1222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 900, fontFamily: "var(--inkloom-animation-mono)" }}>
              03
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                民生安全监督检查
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                环保、公共卫生、安全生产、食品药品、产品质量的<span style={{ color: "#10b981", fontWeight: 700 }}>监督检查情况</span>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: THEME.cardBg,
              border: `1.5px solid ${THEME.accentPurple}`,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: THEME.accentPurple, color: "#0b1222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 900, fontFamily: "var(--inkloom-animation-mono)" }}>
              04
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                公务员招考录用
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                招考职位、名额、报考条件等事项以及<span style={{ color: "#a855f7", fontWeight: 700 }}>录用结果</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 20-Day Clock & No Extension Rule */}
        <div
          data-stateful-terminal="active-release-payload"
          data-final-knowledge="twenty-day-deadline"
          style={{
            flex: "1",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: `2px solid ${THEME.primary}`,
            borderRadius: 20,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: `0 8px 36px ${THEME.primaryGlow}`,
            transform: `scale(${entrance})`,
          }}
        >
          <TokenBadge label="法定刚性时限" variant="primary" size="lg" />

          {/* Clock Dial Graphic */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: `4px solid ${THEME.primary}`,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 30px ${THEME.primaryGlow}`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "42%",
                height: 4,
                backgroundColor: THEME.accentGold,
                transformOrigin: "0% 50%",
                transform: `rotate(${clockSweep - 90}deg)`,
                borderRadius: 2,
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "44px", fontWeight: 900, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-mono)" }}>
                20
              </div>
              <div style={{ fontSize: "20px", color: THEME.primary, fontWeight: 700, fontFamily: "var(--inkloom-animation-label)" }}>
                个工作日内
              </div>
            </div>
          </div>

          <div
            data-final-knowledge="no-extension-rule"
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: "24px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)", marginBottom: 8 }}>
              起算点：信息<span style={{ color: "#38bdf8", fontWeight: 700 }}>形成</span>或者<span style={{ color: "#38bdf8", fontWeight: 700 }}>变更</span>之日起
            </div>
            <div
              style={{
                backgroundColor: "rgba(244, 63, 94, 0.2)",
                border: `2px dashed ${THEME.accentRed}`,
                borderRadius: 12,
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ color: "#f43f5e", fontSize: "28px" }}>❌</span>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#fecdd3", fontFamily: "var(--inkloom-animation-label)" }}>
                【主动公开无延长制度】绝不可再加20日！
              </span>
            </div>
          </div>

          <StampVerdict label="刚性不可延期" pass={false} delay={stampDelay} rotation={5} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 5: 主动公开渠道与场所网络 (ActiveChannelsVenuesScene)
// -------------------------------------------------------------
export const ActiveChannelsVenuesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 110;

  return (
    <AbsoluteFill
      data-layout="channel-and-venue-distribution-dock"
      data-visual-anchor="flow-target"
      data-text-treatments="label-block,thin-underline,stamp"
      data-visual-grammar="disclosure-stream-fans-out-through-five-media-channels,physical-access-anchors-into-three-statutory-venues,supplementary-access-points-expand-coverage"
      data-focal-channels="connector,spatial,contrast"
      data-focal-rule="主动公开五大渠道与三大法定场所"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 05"
        title="主动公开渠道与场所网络"
        subtitle="5大线上发布途径 ＋ 3大线下法定场所"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1.1fr 1.1fr",
          gap: 36,
        }}
      >
        {/* Left: 5 Media Channels */}
        <div
          data-stateful-source="public-gazette-packet"
          data-final-knowledge="five-media-channels"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${THEME.primaryGlow}`,
            transform: `translateX(${interpolate(entrance, [0, 1], [-30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <TokenBadge label="发布矩阵" variant="primary" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.primary, fontFamily: "var(--inkloom-animation-title)" }}>
                【五大公开途径】
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { tag: "01", name: "政府公报", desc: "法定权威发布载体" },
                { tag: "02", name: "政府网站", desc: "政务公开第一主平台" },
                { tag: "03", name: "互联网政务媒体", desc: "政务微博/微信/客户端" },
                { tag: "04", name: "新闻发布会", desc: "重大政策与突发应答" },
                { tag: "05", name: "报刊 · 广播 · 电视", desc: "传统广覆盖传播阵地" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    backgroundColor: "rgba(30, 41, 59, 0.7)",
                    borderRadius: 10,
                    padding: "10px 18px",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 900, color: THEME.primary, fontFamily: "var(--inkloom-animation-mono)" }}>
                    {item.tag}
                  </span>
                  <span style={{ fontSize: "24px", fontWeight: 700, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                    {item.name}
                  </span>
                  <span style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", marginLeft: "auto" }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(56, 189, 248, 0.12)", borderRadius: 10, padding: "10px 16px", fontSize: "22px", color: "#bae6fd", fontFamily: "var(--inkloom-animation-label)" }}>
            🌐 线上互联：全媒体融合，便于公民快捷查阅
          </div>
        </div>

        {/* Right: Statutory vs Optional Venues */}
        <div
          data-stateful-terminal="public-gazette-packet"
          data-final-knowledge="three-statutory-venues"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.accentGold}`,
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${THEME.accentGoldGlow}`,
            transform: `translateX(${interpolate(entrance, [0, 1], [30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <TokenBadge label="线下查阅" variant="gold" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.accentGold, fontFamily: "var(--inkloom-animation-title)" }}>
                【法定场所 vs 选择场所】
              </span>
            </div>

            {/* Mandatory */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: "23px", fontWeight: 800, color: THEME.accentGreen, marginBottom: 10, fontFamily: "var(--inkloom-animation-label)" }}>
                🏛️ 法定必须设置的 3 大场所（配备相应设施设备）：
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {["国家档案馆", "公共图书馆", "政务服务场所"].map((name, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      border: `1.5px solid ${THEME.accentGreen}`,
                      borderRadius: 12,
                      padding: "12px 10px",
                      textAlign: "center",
                      fontSize: "23px",
                      fontWeight: 800,
                      color: "#d1fae5",
                      fontFamily: "var(--inkloom-animation-title)",
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Optional */}
            <div data-final-knowledge="optional-access-points">
              <div style={{ fontSize: "23px", fontWeight: 800, color: THEME.accentGold, marginBottom: 10, fontFamily: "var(--inkloom-animation-label)" }}>
                📋 行政机关根据需要自主设立的选择场所：
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {["公共查阅室", "资料索取点", "信息公告栏", "电子信息屏"].map((name, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                      border: "1.5px dashed rgba(245, 158, 11, 0.4)",
                      borderRadius: 10,
                      padding: "10px 14px",
                      textAlign: "center",
                      fontSize: "22px",
                      color: "#fef3c7",
                      fontFamily: "var(--inkloom-animation-body)",
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
              🔍 档案馆/图书馆/政务大厅必须提供查阅！
            </div>
            <StampVerdict label="法定线下阵地" pass={true} delay={stampDelay} rotation={-4} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 6: 申请准入与收到日计算 (ApplicationIntakeRulesScene)
// -------------------------------------------------------------
export const ApplicationIntakeRulesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 120;

  return (
    <AbsoluteFill
      data-layout="intake-balance-and-receipt-detector"
      data-visual-anchor="comparison-axis"
      data-text-treatments="external-negation,label-block,stamp"
      data-visual-grammar="relaxed-purpose-requirement-balances-against-mandatory-id-rule,four-intake-methods-trigger-distinct-receipt-milestones,formal-written-intake-leads-over-oral-exception"
      data-focal-channels="contrast,locator,enclosure"
      data-focal-rule="依申请公开一松一紧准入要件与四种收到日判定"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 06"
        title="申请准入与收到日计算"
        subtitle="准入条件【一松一紧】 ＋ 4种途径收到日规则"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1.1fr 1.3fr",
          gap: 36,
        }}
      >
        {/* Left: 一松一紧 */}
        <div
          data-stateful-source="citizen-application-file"
          data-final-knowledge="relaxed-purpose-rule"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 20,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${THEME.primaryGlow}`,
            transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <TokenBadge label="准入门槛" variant="primary" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.primary, fontFamily: "var(--inkloom-animation-title)" }}>
                【一松一紧】准入标准
              </span>
            </div>

            {/* 松 */}
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: `1.5px solid ${THEME.accentGreen}`,
                borderRadius: 14,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: "24px", color: THEME.accentGreen }}>🟢</span>
                <span style={{ fontSize: "24px", fontWeight: 800, color: "#d1fae5", fontFamily: "var(--inkloom-animation-title)" }}>
                  【一松】取消特殊需要与用途限制
                </span>
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                不再要求与生产、生活、科研等“特殊需要”相关，<span style={{ color: "#10b981", fontWeight: 700 }}>无需说明申请用途</span>！
              </div>
            </div>

            {/* 紧 */}
            <div
              data-final-knowledge="mandatory-identity-rule"
              style={{
                backgroundColor: "rgba(244, 63, 94, 0.15)",
                border: `1.5px solid ${THEME.accentRed}`,
                borderRadius: 14,
                padding: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: "24px", color: THEME.accentRed }}>🔴</span>
                <span style={{ fontSize: "24px", fontWeight: 800, color: "#ffe4e6", fontFamily: "var(--inkloom-animation-title)" }}>
                  【一紧】必须提交身份证明
                </span>
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                无论申请何种信息，申请时<span style={{ color: "#f43f5e", fontWeight: 800 }}>必须提交申请人身份证明</span>！
              </div>
            </div>
          </div>

          <div
            data-final-knowledge="written-priority-form"
            style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#bae6fd", fontFamily: "var(--inkloom-animation-label)" }}
          >
            📝 形式原则：书面为主（含信件/电文）；确有困难可口头提出
          </div>
        </div>

        {/* Right: 收到日计算 */}
        <div
          data-stateful-terminal="citizen-application-file"
          data-final-knowledge="four-receipt-date-rules"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.accentGold}`,
            borderRadius: 20,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${THEME.accentGoldGlow}`,
            transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
            opacity: entrance,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <TokenBadge label="起算节点" variant="gold" size="md" />
              <span style={{ fontSize: "28px", fontWeight: 800, color: THEME.accentGold, fontFamily: "var(--inkloom-animation-title)" }}>
                【收到申请之日判定】
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { method: "当面提交", rule: "提交之日", note: "窗口现场当场交付", color: "#38bdf8" },
                { method: "挂号信/特快专递", rule: "行政机关签收之日", note: "以邮政妥投签收凭证为据", color: "#10b981" },
                { method: "平常信函(免签收)", rule: "确认之日", note: "收到当日主动与申请人确认", color: "#f59e0b" },
                { method: "互联网平台 / 传真", rule: "双方确认之日", note: "系统交互或电话核实确认", color: "#a855f7" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(30, 41, 59, 0.75)",
                    borderRadius: 12,
                    padding: "12px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "24px", fontWeight: 700, color: item.color, fontFamily: "var(--inkloom-animation-title)" }}>
                      {item.method}
                    </span>
                    <div style={{ fontSize: "20px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                      {item.note}
                    </div>
                  </div>
                  <TokenBadge label={`➔ ${item.rule}`} variant="primary" size="md" style={{ borderColor: item.color }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
              ⏱️ 收到之日起启动法定20日倒计时
            </div>
            <StampVerdict label="起算基准确立" pass={true} delay={stampDelay} rotation={-3} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 7: 答复期限与延长机制 (ResponseDeadlineClockScene)
// -------------------------------------------------------------
export const ResponseDeadlineClockScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 120;

  return (
    <AbsoluteFill
      data-layout="twenty-plus-twenty-response-timeline"
      data-visual-anchor="timeline-gate"
      data-text-treatments="label-block,soft-highlight,thin-underline"
      data-visual-grammar="base-twenty-day-track-opens-on-application-receipt,extension-gate-permits-up-to-twenty-additional-days-with-approval,third-party-consultation-pauses-the-clock"
      data-focal-channels="locator,connector,contrast"
      data-focal-rule="答复期限20+20机制与征求意见时间扣除"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 07"
        title="答复期限与延长机制"
        subtitle="基础20日 ＋ 最长延长20日（经批准） ＋ 扣除征求意见"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Timeline Pipeline Graphic */}
        <div
          data-stateful-source="response-timeline-token"
          data-final-knowledge="base-twenty-day-limit"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 20,
            padding: "24px 36px",
            boxShadow: `0 8px 36px ${THEME.primaryGlow}`,
            transform: `scale(${entrance})`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <TokenBadge label="法定答复轴" variant="primary" size="lg" />
            <span style={{ fontSize: "30px", fontWeight: 900, color: THEME.primary, fontFamily: "var(--inkloom-animation-title)" }}>
              【20 ＋ 20 工作日】两段式答复结构
            </span>
          </div>

          {/* 3 Step Track */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 20 }}>
            {/* Step 1 */}
            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: `2px solid ${THEME.primary}`,
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div style={{ fontSize: "22px", color: THEME.primary, fontWeight: 700, marginBottom: 8, fontFamily: "var(--inkloom-animation-label)" }}>
                STAGE 01 · 基础答复期
              </div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)", marginBottom: 8 }}>
                20 个工作日内
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                自收到申请之日起计算；能当场答复的应当场答复。
              </div>
            </div>

            {/* Step 2 */}
            <div
              data-final-knowledge="extension-approval-condition"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                border: `2px solid ${THEME.accentGold}`,
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div style={{ fontSize: "22px", color: THEME.accentGold, fontWeight: 700, marginBottom: 8, fontFamily: "var(--inkloom-animation-label)" }}>
                STAGE 02 · 延长审批闸门
              </div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: THEME.accentGold, fontFamily: "var(--inkloom-animation-title)", marginBottom: 8 }}>
                最长 ＋20 个工作日
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                双重要件：经<span style={{ color: "#f59e0b", fontWeight: 700 }}>公开工作机构负责人同意</span> ＋ <span style={{ color: "#f59e0b", fontWeight: 700 }}>告知申请人</span>。
              </div>
            </div>

            {/* Step 3 */}
            <div
              data-final-knowledge="consultation-time-exclusion"
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.12)",
                border: `2px solid ${THEME.accentPurple}`,
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div style={{ fontSize: "22px", color: THEME.accentPurple, fontWeight: 700, marginBottom: 8, fontFamily: "var(--inkloom-animation-label)" }}>
                STAGE 03 · 扣除时钟
              </div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: THEME.accentPurple, fontFamily: "var(--inkloom-animation-title)", marginBottom: 8 }}>
                扣除征求意见期
              </div>
              <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                征求第三方和其他机关意见时间<span style={{ color: "#a855f7", fontWeight: 700 }}>不计算在期限内</span>！
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Bottom Bar */}
        <div
          data-stateful-terminal="response-timeline-token"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 16,
            padding: "16px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <TokenBadge label="主动公开" variant="muted" size="md" />
              <span style={{ fontSize: "24px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)" }}>
                形成起 20 日（<span style={{ color: "#f43f5e", fontWeight: 700 }}>无延长制度</span>）
              </span>
            </div>
            <span style={{ color: THEME.primary, fontSize: "28px", fontWeight: 900 }}>VS</span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <TokenBadge label="依申请公开" variant="gold" size="md" />
              <span style={{ fontSize: "24px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
                收到起 20 日 ＋ 延长最多 <span style={{ color: "#f59e0b", fontWeight: 800 }}>20 日</span>
              </span>
            </div>
          </div>

          <StampVerdict label="法定时限锁死" pass={true} delay={stampDelay} rotation={-2} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 8: 答复分类与分割处理 (ResponseClassificationMatrixScene)
// -------------------------------------------------------------
export const ResponseClassificationMatrixScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });
  const stampDelay = 125;

  return (
    <AbsoluteFill
      data-layout="six-route-response-switchboard"
      data-visual-anchor="flow-target"
      data-text-treatments="label-block,stamp,thin-underline"
      data-visual-grammar="mixed-confidential-packet-undergoes-severability-split,seven-day-supplement-notice-triggers-for-unclear-contents,no-fee-standard-applies-unless-abuse-threshold-breached"
      data-focal-channels="connector,contrast,enclosure"
      data-focal-rule="六类法定答复方式与涉密分割提供规则"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 08"
        title="答复分类与分割处理"
        subtitle="6种法定答复结果 ＋ 涉密分割与补正机制"
      />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
        }}
      >
        {/* Type 1: 公开 */}
        <div
          data-stateful-source="severable-record-token"
          data-final-knowledge="no-fee-with-cost-exception"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentGreen}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="01 予以公开" variant="green" size="sm" />
            <span style={{ fontSize: "24px", color: THEME.accentGreen, fontWeight: 800, fontFamily: "var(--inkloom-animation-title)" }}>
              依申请提供
            </span>
          </div>
          <div style={{ fontSize: "22px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
            按申请形式提供；危及安全或成本过高可提供电子版或安排查阅抄录。
          </div>
          <div style={{ fontSize: "20px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            💰 免费原则（超频超量收处理费）
          </div>
        </div>

        {/* Type 2: 区分处理 (涉密分割) */}
        <div
          data-final-knowledge="severability-disclosure"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2.5px solid ${THEME.primary}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 4px 20px ${THEME.primaryGlow}`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="02 区分处理" variant="primary" size="sm" />
            <span style={{ fontSize: "24px", color: THEME.primary, fontWeight: 800, fontFamily: "var(--inkloom-animation-title)" }}>
              【涉密分割提供】
            </span>
          </div>
          <div style={{ fontSize: "22px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
            能作区分处理的，必须向申请人提供<span style={{ color: "#38bdf8", fontWeight: 800 }}>可公开部分</span>，并对不予公开部分说明理由。
          </div>
          <div style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", borderRadius: 8, padding: "4px 10px", fontSize: "20px", color: "#e0f2fe", fontFamily: "var(--inkloom-animation-label)" }}>
            ⚠️ 严禁因部分涉密而全盘拒绝！
          </div>
        </div>

        {/* Type 3: 不予公开 */}
        <div
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentRed}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="03 不予公开" variant="red" size="sm" />
            <span style={{ fontSize: "24px", color: THEME.accentRed, fontWeight: 800, fontFamily: "var(--inkloom-animation-title)" }}>
              书面说明理由
            </span>
          </div>
          <div style={{ fontSize: "22px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
            符合法定不予公开三级梯队的，告知申请人不予公开并<span style={{ color: "#f43f5e", fontWeight: 700 }}>明确说明理由</span>。
          </div>
          <div style={{ fontSize: "20px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            ⚖️ 当事人具有诉权
          </div>
        </div>

        {/* Type 4: 不存在 */}
        <div
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.textSecondary}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="04 信息不存在" variant="muted" size="sm" />
            <span style={{ fontSize: "24px", color: "#cbd5e1", fontWeight: 800, fontFamily: "var(--inkloom-animation-title)" }}>
              检索后告知
            </span>
          </div>
          <div style={{ fontSize: "22px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
            经行政机关全面检索没有所申请信息的，明确告知<span style={{ color: "#94a3b8", fontWeight: 700 }}>该政府信息不存在</span>。
          </div>
          <div style={{ fontSize: "20px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            🔍 需承担合理检索举证责任
          </div>
        </div>

        {/* Type 5: 不属于本机关 */}
        <div
          data-final-knowledge="non-existent-guidance-duty"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentPurple}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="05 非本机关" variant="purple" size="sm" />
            <span style={{ fontSize: "24px", color: THEME.accentPurple, fontWeight: 800, fontFamily: "var(--inkloom-animation-title)" }}>
              说明并指引
            </span>
          </div>
          <div style={{ fontSize: "22px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
            不属本机关负责公开的告知理由；能确定负责机关的，<span style={{ color: "#a855f7", fontWeight: 700 }}>告知该机关名称与联系方式</span>。
          </div>
          <div style={{ fontSize: "20px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-label)" }}>
            🧭 协助指引义务
          </div>
        </div>

        {/* Type 6: 材料补正 */}
        <div
          data-stateful-terminal="severable-record-token"
          data-final-knowledge="seven-day-supplement-notice"
          style={{
            backgroundColor: THEME.cardBg,
            border: `2px solid ${THEME.accentGold}`,
            borderRadius: 16,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TokenBadge label="06 内容不明确" variant="gold" size="sm" />
            <span style={{ fontSize: "24px", color: THEME.accentGold, fontWeight: 800, fontFamily: "var(--inkloom-animation-title)" }}>
              【7日内一次性补正】
            </span>
          </div>
          <div style={{ fontSize: "22px", color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-body)" }}>
            自收到起<span style={{ color: "#f59e0b", fontWeight: 800 }}>7个工作日内一次性告知补正</span>；逾期无正当理由不补正<span style={{ color: "#f43f5e", fontWeight: 700 }}>视为放弃申请</span>。
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "20px", color: "#fef3c7", fontFamily: "var(--inkloom-animation-label)" }}>
              通知书过程性不可诉
            </span>
            <StampVerdict label="分类精准答复" pass={true} delay={stampDelay} rotation={-4} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 9: 特殊申请处置六大路径 (SpecialApplicationRouterScene)
// -------------------------------------------------------------
export const SpecialApplicationRouterScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      data-layout="six-port-special-case-router"
      data-visual-anchor="document-fork"
      data-text-treatments="label-block,external-negation,stamp"
      data-visual-grammar="six-anomalous-application-types-route-to-statutory-ports,petition-motives-redirect-to-complaint-channels,multiple-identical-requests-convert-into-active-disclosure"
      data-focal-channels="connector,locator,contrast"
      data-focal-rule="六类特殊信息公开申请的法定处置分流"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 09"
        title="特殊申请处置六大路径"
        subtitle="滥用/信访/加工/已公开/更正/转主动 处置矩阵"
      />

      <div
        data-stateful-source="special-request-dossier"
        data-stateful-terminal="special-request-dossier"
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: 18,
        }}
      >
        <div
          data-final-knowledge="abuse-request-handling"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TokenBadge label="路径 01" variant="red" size="sm" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                滥用申请权（超频超量）
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4 }}>
              可要求说明理由；理由不合理➔告知不予处理；理由合理但超期➔确定延迟期限并告知
            </div>
          </div>
        </div>

        <div
          data-final-knowledge="petition-motive-redirect"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TokenBadge label="路径 02" variant="purple" size="sm" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                动机不单纯（信访/投诉/举报）
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4 }}>
              告知不作为信息公开申请处理，并告知通过信访、举报等法定相应渠道提出
            </div>
          </div>
        </div>

        <div
          data-final-knowledge="data-processing-rejection"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TokenBadge label="路径 03" variant="gold" size="sm" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                申请加工、分析现有数据
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4 }}>
              要求行政机关对现有信息进行加工、分析的，行政机关【可以不予提供】
            </div>
          </div>
        </div>

        <div
          data-final-knowledge="published-item-guidance"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TokenBadge label="路径 04" variant="primary" size="sm" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                申请已公开发行出版物
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4 }}>
              要求提供政府公报、报刊、书籍等公开出版物的，行政机关【告知获取途径】即可
            </div>
          </div>
        </div>

        <div
          data-final-knowledge="error-correction-duty"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TokenBadge label="路径 05" variant="green" size="sm" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                信息有误要求更正
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4 }}>
              有权机关审核属实应当更正并告知；非职能范围的可转送有权机关或告知向其提出
            </div>
          </div>
        </div>

        <div
          data-final-knowledge="application-to-active-conversion"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.cardBorder}`,
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <TokenBadge label="路径 06" variant="primary" size="sm" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                多位申请人申请相同信息
              </span>
            </div>
            <div style={{ fontSize: "22px", color: THEME.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4 }}>
              多个申请人就相同可公开信息提出申请的，行政机关【可以纳入主动公开范围】
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 10: 高频真题陷阱综合判别 (ExamTrapsVerdictScene)
// -------------------------------------------------------------
export const ExamTrapsVerdictScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      data-layout="five-trap-verdict-arena"
      data-visual-anchor="role-pair"
      data-text-treatments="external-negation,stamp,soft-highlight"
      data-visual-grammar="five-classic-exam-misconceptions-enter-the-adjudication-bench,statutory-rules-strike-false-assumptions-with-verdict-stamps,final-summary-locks-the-complete-disclosure-mindmap"
      data-focal-channels="contrast,annotation,locator"
      data-focal-rule="法考高频五大核心易错陷阱终审裁决"
      style={{
        background: THEME.bgGradient,
        color: THEME.textPrimary,
        padding: "40px 60px",
      }}
    >
      <SceneHeader
        step="POINT 10"
        title="高频真题陷阱综合判别"
        subtitle="法考高频高危易错点集中裁决"
      />

      <div
        data-stateful-source="exam-test-ticket"
        data-stateful-terminal="exam-test-ticket"
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          data-final-knowledge="trap-process-vs-internal"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentRed}`,
            borderRadius: 14,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "28px" }}>❌</span>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                陷阱 1：向上级请示属于内部事务信息？
              </div>
              <div style={{ fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-body)" }}>
                【错误】请示报告属于过程性信息，非内部事务信息（定性不同）
              </div>
            </div>
          </div>
          <TokenBadge label="法考避坑" variant="red" size="md" />
        </div>

        <div
          data-final-knowledge="trap-consultation-overdue-balance"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentRed}`,
            borderRadius: 14,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "28px" }}>❌</span>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                陷阱 2：征求权利人意见逾期不表态视为拒绝？
              </div>
              <div style={{ fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-body)" }}>
                【错误】逾期不提出意见由行政机关权衡判断，非一律视为同意或拒绝
              </div>
            </div>
          </div>
          <TokenBadge label="法考避坑" variant="red" size="md" />
        </div>

        <div
          data-final-knowledge="trap-active-no-extension"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentRed}`,
            borderRadius: 14,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "28px" }}>❌</span>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                陷阱 3：主动公开遇特殊情况可再延长20个工作日？
              </div>
              <div style={{ fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-body)" }}>
                【错误】主动公开自形成或变更起20日，绝无延长制度（延长仅限申请公开）
              </div>
            </div>
          </div>
          <TokenBadge label="法考避坑" variant="red" size="md" />
        </div>

        <div
          data-final-knowledge="trap-clarification-notice-duty"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentRed}`,
            borderRadius: 14,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "28px" }}>❌</span>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                陷阱 4：申请公开内容不明确行政机关可直接拒绝？
              </div>
              <div style={{ fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-body)" }}>
                【错误】必须在7个工作日内一次性告知补正通知书，不得直接拒绝
              </div>
            </div>
          </div>
          <TokenBadge label="法考避坑" variant="red" size="md" />
        </div>

        <div
          data-final-knowledge="trap-oral-form-allowance"
          style={{
            backgroundColor: THEME.cardBg,
            border: `1.5px solid ${THEME.accentGreen}`,
            borderRadius: 14,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "28px" }}>✅</span>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: THEME.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
                陷阱 5：除行政许可外，信息公开、复议、诉讼等申请均可口头提出？
              </div>
              <div style={{ fontSize: "22px", color: "#a7f3d0", fontFamily: "var(--inkloom-animation-body)" }}>
                【正确】行政许可严禁口头申请，其余申请确有困难均允许口头提出
              </div>
            </div>
          </div>
          <TokenBadge label="正确结论" variant="green" size="md" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// MAIN COMPOSITION
// -------------------------------------------------------------
export const DisclosureCaseDesk: React.FC = () => {
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: THEME.bg,
        width: 1920,
        height: 1080,
      }}
    >
      <Sequence from={SCENES["info-definition-scope"].start} durationInFrames={SCENES["info-definition-scope"].duration}>
        <InfoDefinitionScopeScene />
      </Sequence>
      <Sequence from={SCENES["disclosure-subject-matrix"].start} durationInFrames={SCENES["disclosure-subject-matrix"].duration}>
        <DisclosureSubjectMatrixScene />
      </Sequence>
      <Sequence from={SCENES["nondisclosure-tier-matrix"].start} durationInFrames={SCENES["nondisclosure-tier-matrix"].duration}>
        <NondisclosureTierMatrixScene />
      </Sequence>
      <Sequence from={SCENES["active-disclosure-scope-clock"].start} durationInFrames={SCENES["active-disclosure-scope-clock"].duration}>
        <ActiveDisclosureScopeClockScene />
      </Sequence>
      <Sequence from={SCENES["active-channels-venues"].start} durationInFrames={SCENES["active-channels-venues"].duration}>
        <ActiveChannelsVenuesScene />
      </Sequence>
      <Sequence from={SCENES["application-intake-rules"].start} durationInFrames={SCENES["application-intake-rules"].duration}>
        <ApplicationIntakeRulesScene />
      </Sequence>
      <Sequence from={SCENES["response-deadline-clock"].start} durationInFrames={SCENES["response-deadline-clock"].duration}>
        <ResponseDeadlineClockScene />
      </Sequence>
      <Sequence from={SCENES["response-classification-matrix"].start} durationInFrames={SCENES["response-classification-matrix"].duration}>
        <ResponseClassificationMatrixScene />
      </Sequence>
      <Sequence from={SCENES["special-application-router"].start} durationInFrames={SCENES["special-application-router"].duration}>
        <SpecialApplicationRouterScene />
      </Sequence>
      <Sequence from={SCENES["exam-traps-verdict"].start} durationInFrames={SCENES["exam-traps-verdict"].duration}>
        <ExamTrapsVerdictScene />
      </Sequence>
    </AbsoluteFill>
  );
};
