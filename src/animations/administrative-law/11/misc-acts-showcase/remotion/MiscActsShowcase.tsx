import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SCENES } from "./storyboard";

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Optical & Kinetic Physics Laboratory Theme
const OPTICS = {
  bg: "#070b14",
  bgGradient: "radial-gradient(ellipse at 50% 18%, #111d33 0%, #05080f 100%)",
  benchSurface: "rgba(11, 18, 32, 0.92)",
  benchBorder: "rgba(56, 189, 248, 0.22)",
  gridLine: "rgba(56, 189, 248, 0.05)",
  laserWhite: "#ffffff",
  laserWhiteGlow: "rgba(255, 255, 255, 0.6)",
  rubyCrimson: "#f43f5e",
  rubyGlow: "rgba(244, 63, 94, 0.35)",
  emeraldBeam: "#10b981",
  emeraldGlow: "rgba(16, 185, 129, 0.35)",
  celestialPurple: "#a855f7",
  purpleGlow: "rgba(168, 85, 247, 0.35)",
  cyanLaser: "#06b6d4",
  cyanGlow: "rgba(6, 182, 212, 0.35)",
  amberSurge: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.35)",
  roseFlash: "#ec4899",
  roseGlow: "rgba(236, 72, 153, 0.35)",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  brassGold: "#eab308",
};

const InstrumentHeader: React.FC<{
  channel: string;
  title: string;
  subtitle: string;
  themeColor?: string;
}> = ({ channel, title, subtitle, themeColor = OPTICS.cyanLaser }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [-18, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 30,
        left: 60,
        right: 60,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottom: `2px solid ${themeColor}`,
        paddingBottom: 14,
        opacity,
        transform: `translateY(${translateY}px)`,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
        <div
          style={{
            padding: "4px 14px",
            backgroundColor: `${themeColor}18`,
            border: `1.5px solid ${themeColor}`,
            borderRadius: "6px",
            color: themeColor,
            fontSize: "20px",
            fontWeight: 900,
            fontFamily: "var(--inkloom-animation-mono)",
            letterSpacing: "2px",
          }}
        >
          CHANNEL {channel}
        </div>
        <h2
          style={{
            color: OPTICS.textPrimary,
            fontSize: "36px",
            fontWeight: 900,
            fontFamily: "var(--inkloom-animation-title)",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          color: themeColor,
          fontSize: "22px",
          fontFamily: "var(--inkloom-animation-label)",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};

const LaserStamp: React.FC<{
  label: string;
  color?: string;
  delay?: number;
  rotation?: number;
  style?: React.CSSProperties;
}> = ({ label, color = OPTICS.emeraldBeam, delay = 0, rotation = -4, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const effectiveFrame = Math.max(0, frame - delay);
  const scale = spring({
    frame: effectiveFrame,
    fps,
    config: { damping: 10, stiffness: 240, mass: 0.6 },
  });
  const opacity = interpolate(effectiveFrame, [0, 4], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 22px",
        border: `3px solid ${color}`,
        borderRadius: "8px",
        color,
        fontSize: "24px",
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title)",
        letterSpacing: "2px",
        textTransform: "uppercase",
        backgroundColor: "rgba(7, 11, 20, 0.95)",
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: `0 0 20px ${color}44`,
        ...style,
      }}
    >
      {label}
    </div>
  );
};

// -------------------------------------------------------------
// SCENE 1: 权力光谱六向色散仪 (PowerPrismDispersionScene)
// -------------------------------------------------------------
export const PowerPrismDispersionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const beamPulse = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  const prismRotation = interpolate(frame, [0, 180], [0, 6], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      data-layout="six-channel-power-prism"
      data-visual-anchor="flow-target"
      data-text-treatments="label-block,soft-highlight,thin-underline"
      data-visual-grammar="white-mandate-beam-strikes-central-crystal-prism,six-colored-laser-conduits-energize-distinct-act-nodes,each-node-reveals-its-defining-legal-signature"
      data-focal-channels="connector,contrast,spatial"
      data-focal-rule="行政权力光束经由法理棱镜色散为六类具体行政行为"
      style={{
        background: OPTICS.bgGradient,
        color: OPTICS.textPrimary,
        padding: "40px 60px",
      }}
    >
      <InstrumentHeader
        channel="01"
        title="行政权力光谱分流仪"
        subtitle="六大其他具体行政行为 · 动能与权属性质全景"
        themeColor={OPTICS.cyanLaser}
      />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 22,
        }}
      >
        {/* Node 1: 行政征收 */}
        <div
          data-final-knowledge="levy-ownership"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.rubyCrimson}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 30px ${OPTICS.rubyGlow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: OPTICS.rubyCrimson }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: OPTICS.rubyCrimson, fontFamily: "var(--inkloom-animation-mono)" }}>SPECTRUM · 01</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, backgroundColor: `${OPTICS.rubyCrimson}22`, border: `1.5px solid ${OPTICS.rubyCrimson}`, color: OPTICS.rubyCrimson, fontSize: "22px", fontWeight: 800 }}>限制所有权</span>
          </div>
          <div style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
            行政征收
          </div>
          <div style={{ fontSize: "22px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", backgroundColor: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: 8 }}>
            强制征收税费或私有财产（税/费/地/房）➔ 所有权永久转移归国家
          </div>
        </div>

        {/* Node 2: 行政征用 */}
        <div
          data-final-knowledge="requisition-use"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.emeraldBeam}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 30px ${OPTICS.emeraldGlow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: OPTICS.emeraldBeam }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: OPTICS.emeraldBeam, fontFamily: "var(--inkloom-animation-mono)" }}>SPECTRUM · 02</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, backgroundColor: `${OPTICS.emeraldBeam}22`, border: `1.5px solid ${OPTICS.emeraldBeam}`, color: OPTICS.emeraldBeam, fontSize: "22px", fontWeight: 800 }}>限制使用权</span>
          </div>
          <div style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
            行政征用
          </div>
          <div style={{ fontSize: "22px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", backgroundColor: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: 8 }}>
            公共利益突发需要（抢险救灾/防疫）＋ 法定补偿 ➔ 用完必须归还
          </div>
        </div>

        {/* Node 3: 行政裁决 */}
        <div
          data-final-knowledge="adjudication"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.celestialPurple}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 30px ${OPTICS.purpleGlow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: OPTICS.celestialPurple }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: OPTICS.celestialPurple, fontFamily: "var(--inkloom-animation-mono)" }}>SPECTRUM · 03</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, backgroundColor: `${OPTICS.celestialPurple}22`, border: `1.5px solid ${OPTICS.celestialPurple}`, color: OPTICS.celestialPurple, fontSize: "22px", fontWeight: 800 }}>居间第三方中立</span>
          </div>
          <div style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
            行政裁决
          </div>
          <div style={{ fontSize: "22px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", backgroundColor: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: 8 }}>
            机关居间中立处理特定民事纠纷 ➔ 必然涵盖三方主体法律关系
          </div>
        </div>

        {/* Node 4: 行政确认 */}
        <div
          data-final-knowledge="confirmation"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.cyanLaser}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 30px ${OPTICS.cyanGlow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: OPTICS.cyanLaser }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: OPTICS.cyanLaser, fontFamily: "var(--inkloom-animation-mono)" }}>SPECTRUM · 04</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, backgroundColor: `${OPTICS.cyanLaser}22`, border: `1.5px solid ${OPTICS.cyanLaser}`, color: OPTICS.cyanLaser, fontSize: "22px", fontWeight: 800 }}>双方 · 管理者</span>
          </div>
          <div style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
            行政确认
          </div>
          <div style={{ fontSize: "22px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", backgroundColor: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: 8 }}>
            甄别并宣告法律地位/事实（工伤认定/权属确认）➔ 加强既存权利
          </div>
        </div>

        {/* Node 5: 行政给付 */}
        <div
          data-final-knowledge="grant"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.amberSurge}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 30px ${OPTICS.amberGlow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: OPTICS.amberSurge }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: OPTICS.amberSurge, fontFamily: "var(--inkloom-animation-mono)" }}>SPECTRUM · 05</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, backgroundColor: `${OPTICS.amberSurge}22`, border: `1.5px solid ${OPTICS.amberSurge}`, color: OPTICS.amberSurge, fontSize: "22px", fontWeight: 800 }}>生存底线救助</span>
          </div>
          <div style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
            行政给付
          </div>
          <div style={{ fontSize: "22px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", backgroundColor: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: 8 }}>
            法定生存保障义务（低保/五保/灾害救济/社保/创业财政扶持）
          </div>
        </div>

        {/* Node 6: 行政奖励 */}
        <div
          data-final-knowledge="award"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.roseFlash}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 30px ${OPTICS.roseGlow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: OPTICS.roseFlash }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: OPTICS.roseFlash, fontFamily: "var(--inkloom-animation-mono)" }}>SPECTRUM · 06</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, backgroundColor: `${OPTICS.roseFlash}22`, border: `1.5px solid ${OPTICS.roseFlash}`, color: OPTICS.roseFlash, fontSize: "22px", fontWeight: 800 }}>表彰先进功绩</span>
          </div>
          <div style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-title)" }}>
            行政奖励
          </div>
          <div style={{ fontSize: "22px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", backgroundColor: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: 8 }}>
            表彰先进激励后进（精神荣誉称号/嘉奖 ＋ 物质奖金/晋升）
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div
        data-final-knowledge="six-act-summary"
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 20,
          height: 48,
          backgroundColor: "rgba(6, 182, 212, 0.12)",
          border: `1.5px dashed ${OPTICS.cyanLaser}`,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e0f2fe",
          fontSize: "22px",
          fontWeight: 800,
          fontFamily: "var(--inkloom-animation-label)",
          letterSpacing: "1px",
        }}
      >
        🔬 核心口诀：征收所有权 · 征用使用权 · 裁决居间中立 · 确认宣告加强 · 给付救济生存 · 奖励表彰先进
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 2: 征收 vs 征用 动能杠杆与补偿滑轨 (LevyRequisitionKineticBalanceScene)
// -------------------------------------------------------------
export const LevyRequisitionKineticBalanceScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const balancePhysics = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 9, stiffness: 130, mass: 0.9 },
  });
  const tiltAngle = interpolate(balancePhysics, [0, 1], [-10, 5]);

  return (
    <AbsoluteFill
      data-layout="kinetic-balance-beam-levy-requisition"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,thin-underline,stamp"
      data-visual-grammar="mechanical-beam-tips-under-four-heavy-property-blocks,ownership-arrow-permanently-locks-into-state-vault,borrowed-asset-conveys-with-rebounding-compensation-coin"
      data-focal-channels="contrast,connector,enclosure"
      data-focal-rule="征收剥夺所有权与征用借调使用权动能比对"
      style={{
        background: OPTICS.bgGradient,
        color: OPTICS.textPrimary,
        padding: "40px 60px",
      }}
    >
      <InstrumentHeader
        channel="02"
        title="征收 vs 征用 动力学平衡台"
        subtitle="所有权永久移转（可能有偿/无偿） VS 使用权临时借调（法定刚性补偿）"
        themeColor={OPTICS.rubyCrimson}
      />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 36,
        }}
      >
        {/* Left Side: 行政征收 (所有权) */}
        <div
          data-final-knowledge="levy-specimen"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2.5px solid ${OPTICS.rubyCrimson}`,
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 12px 36px ${OPTICS.rubyGlow}`,
            position: "relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span
                style={{
                  padding: "4px 14px",
                  backgroundColor: "rgba(244, 63, 94, 0.2)",
                  border: `1.5px solid ${OPTICS.rubyCrimson}`,
                  borderRadius: 8,
                  color: "#fca5a5",
                  fontSize: "22px",
                  fontWeight: 900,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                限制【所有权】
              </span>
              <span style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.rubyCrimson, fontFamily: "var(--inkloom-animation-title)" }}>
                行政征收
              </span>
            </div>

            <div style={{ fontSize: "24px", color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 16 }}>
              行政机关依法向相对人<span style={{ color: "#f87171", fontWeight: 800, borderBottom: "2px solid #f87171" }}>强制征收税费或私有财产</span>，财产所有权永久归国家。
            </div>

            {/* 4 Types Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
              <div data-final-knowledge="levy-kind-1" style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-label)" }}>
                ① 征税（法定无偿）
              </div>
              <div data-final-knowledge="levy-kind-2" style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-label)" }}>
                ② 征费（可能无偿）
              </div>
              <div data-final-knowledge="levy-kind-3" style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-label)" }}>
                ③ 土地征收（法定有偿）
              </div>
              <div data-final-knowledge="levy-kind-4" style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#fecdd3", fontFamily: "var(--inkloom-animation-label)" }}>
                ④ 房屋征收（法定有偿）
              </div>
            </div>
          </div>

          <div
            data-final-knowledge="levy-requisition-difference"
            style={{
              backgroundColor: "rgba(244, 63, 94, 0.12)",
              borderRadius: 12,
              padding: "12px 18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "22px", color: "#fecdd3", fontWeight: 700, fontFamily: "var(--inkloom-animation-body)" }}>
              ⚖️ 补偿属性：征收有可能有偿，有可能无偿
            </span>
            <LaserStamp label="所有权移转" color={OPTICS.rubyCrimson} delay={60} rotation={-4} />
          </div>
        </div>

        {/* Right Side: 行政征用 (使用权) */}
        <div
          data-final-knowledge="requisition-specimen"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2.5px solid ${OPTICS.emeraldBeam}`,
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 12px 36px ${OPTICS.emeraldGlow}`,
            position: "relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span
                style={{
                  padding: "4px 14px",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: `1.5px solid ${OPTICS.emeraldBeam}`,
                  borderRadius: 8,
                  color: "#6ee7b7",
                  fontSize: "22px",
                  fontWeight: 900,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                限制【使用权】
              </span>
              <span style={{ fontSize: "32px", fontWeight: 900, color: OPTICS.emeraldBeam, fontFamily: "var(--inkloom-animation-title)" }}>
                行政征用
              </span>
            </div>

            <div style={{ fontSize: "24px", color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 16 }}>
              因<span style={{ color: "#34d399", fontWeight: 800, borderBottom: "2px solid #34d399" }}>公共利益需要</span>强制使用财产并<span style={{ color: "#f59e0b", fontWeight: 800, borderBottom: "2px solid #f59e0b" }}>给予补偿</span>（用完归还，用坏赔偿）。
            </div>

            {/* Core Conditions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
              <div style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#a7f3d0", fontFamily: "var(--inkloom-animation-body)" }}>
                🚨 适用目的：抢险救灾、突发疫情防控等公共危机
              </div>
              <div style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#a7f3d0", fontFamily: "var(--inkloom-animation-body)" }}>
                🔄 权属保留：所有权仍归相对人，仅临时移转占有使用
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              borderRadius: 12,
              padding: "12px 18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "22px", color: "#a7f3d0", fontWeight: 700, fontFamily: "var(--inkloom-animation-body)" }}>
              💰 刚性要件：征用必须依法给予补偿金！
            </span>
            <LaserStamp label="公共利益+补偿" color={OPTICS.emeraldBeam} delay={70} rotation={3} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 3: 裁决三方力场 vs 确认光学显影扫描透镜 (AdjudicationFieldConfirmationScannerScene)
// -------------------------------------------------------------
export const AdjudicationFieldConfirmationScannerScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scanOffset = interpolate(frame, [20, 100], [-100, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      data-layout="tripartite-field-and-optical-scanner"
      data-visual-anchor="role-pair"
      data-text-treatments="label-block,thin-underline,external-negation"
      data-visual-grammar="tripartite-magnetic-field-stabilizes-dispute-with-neutral-arbiter,optical-scanner-sweeps-over-existing-credential-to-project-confirmation-seal,license-empowers-while-confirmation-strengthens-existing-status"
      data-focal-channels="contrast,connector,spatial"
      data-focal-rule="三方中立裁决机制与双方法律事实确认扫描"
      style={{
        background: OPTICS.bgGradient,
        color: OPTICS.textPrimary,
        padding: "40px 60px",
      }}
    >
      <InstrumentHeader
        channel="03"
        title="裁决三方力场 vs 确认扫描透镜"
        subtitle="三方主体 · 居间中立解决民事争议 VS 双方法律关系 · 管理者宣告加强既有事实"
        themeColor={OPTICS.celestialPurple}
      />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1.1fr 1.1fr",
          gap: 36,
        }}
      >
        {/* Left: 行政裁决 (三方力场) */}
        <div
          data-final-knowledge="adjudication-specimen"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.celestialPurple}`,
            borderRadius: 20,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${OPTICS.purpleGlow}`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span
                style={{
                  padding: "4px 14px",
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  border: `1.5px solid ${OPTICS.celestialPurple}`,
                  borderRadius: 8,
                  color: "#d8b4fe",
                  fontSize: "22px",
                  fontWeight: 900,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                居间 · 第三方中立
              </span>
              <span style={{ fontSize: "30px", fontWeight: 900, color: OPTICS.celestialPurple, fontFamily: "var(--inkloom-animation-title)" }}>
                行政裁决
              </span>
            </div>

            <div
              data-final-knowledge="adjudication-role-1"
              style={{ fontSize: "23px", color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 16 }}
            >
              行政机关作为<span style={{ color: "#c084fc", fontWeight: 800 }}>中立第三方</span>，居间对特定的<span style={{ color: "#f87171", fontWeight: 800 }}>民事争议</span>作出具有约束力的处理。
            </div>

            {/* Tripartite Diagram */}
            <div
              data-final-knowledge="adjudication-role-2"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1.5px solid rgba(168, 85, 247, 0.3)",
                borderRadius: 14,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ padding: "6px 20px", backgroundColor: OPTICS.celestialPurple, color: "#070b14", borderRadius: 8, fontSize: "22px", fontWeight: 900, fontFamily: "var(--inkloom-animation-label)" }}>
                ⚖️ 行政机关（中立裁判者）
              </div>
              <div style={{ fontSize: "18px", color: "#d8b4fe" }}>↙ 居间裁判 ↘</div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <span style={{ padding: "4px 12px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 6, fontSize: "20px", color: OPTICS.textPrimary }}>民事相对人 甲</span>
                <span style={{ color: "#f87171", fontSize: "22px", fontWeight: 900 }}>⚡ 争议纠纷 ⚡</span>
                <span style={{ padding: "4px 12px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 6, fontSize: "20px", color: OPTICS.textPrimary }}>民事相对人 乙</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(168, 85, 247, 0.12)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#e9d5ff", fontFamily: "var(--inkloom-animation-label)" }}>
            📌 铁律：法律关系中必然涵盖【三方主体】！
          </div>
        </div>

        {/* Right: 行政确认 (光学显影扫描透镜) */}
        <div
          data-final-knowledge="confirmation-specimen"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.cyanLaser}`,
            borderRadius: 20,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${OPTICS.cyanGlow}`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span
                style={{
                  padding: "4px 14px",
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  border: `1.5px solid ${OPTICS.cyanLaser}`,
                  borderRadius: 8,
                  color: "#67e8f9",
                  fontSize: "22px",
                  fontWeight: 900,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                双方 · 管理者身份
              </span>
              <span style={{ fontSize: "30px", fontWeight: 900, color: OPTICS.cyanLaser, fontFamily: "var(--inkloom-animation-title)" }}>
                行政确认
              </span>
            </div>

            <div
              data-final-knowledge="confirmation-role-1"
              style={{ fontSize: "23px", color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 16 }}
            >
              依法对法律地位、法律关系或法律事实进行甄别并给予<span style={{ color: "#22d3ee", fontWeight: 800 }}>确定、认定、证明、宣告</span>。
            </div>

            {/* Bilateral Comparison */}
            <div
              data-final-knowledge="confirmation-role-2"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1.5px solid rgba(6, 182, 212, 0.3)",
                borderRadius: 14,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "22px", fontWeight: 800, color: "#22d3ee" }}>行政机关（管理者）</span>
                <span style={{ fontSize: "20px", color: OPTICS.cyanLaser }}>➔ 甄别宣告 ➔</span>
                <span style={{ fontSize: "22px", fontWeight: 800, color: OPTICS.textPrimary }}>相对人</span>
              </div>
              <div
                data-final-knowledge="license-vs-confirmation"
                style={{ fontSize: "21px", color: OPTICS.textSecondary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.4, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 8 }}
              >
                【许可 vs 确认】：许可为<span style={{ color: "#f43f5e", fontWeight: 700 }}>从无到有赋权</span>（权利来自政府）；确认为对既存事实的<span style={{ color: "#06b6d4", fontWeight: 700 }}>加强</span>（权利非政府赋予）。
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(6, 182, 212, 0.12)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#cffafe", fontFamily: "var(--inkloom-animation-label)" }}>
            🔍 典型：工伤认定、交通事故责任认定、专利权确认
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 4: 给付生存安全网液压阀 vs 奖励功绩高光发射台 (WelfareHydraulicsMeritLauncherScene)
// -------------------------------------------------------------
export const WelfareHydraulicsMeritLauncherScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      data-layout="hydraulic-welfare-and-merit-podium"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,soft-highlight,thin-underline"
      data-visual-grammar="hydraulic-welfare-valves-dispense-survival-energy-drops-to-cushion-citizens,gilded-merit-launcher-propels-honor-medals-and-material-prizes-with-light-bursts"
      data-focal-channels="contrast,enclosure,locator"
      data-focal-rule="给付生存底线救助与奖励先进功绩表彰"
      style={{
        background: OPTICS.bgGradient,
        color: OPTICS.textPrimary,
        padding: "40px 60px",
      }}
    >
      <InstrumentHeader
        channel="04"
        title="给付安全网 vs 奖励发射台"
        subtitle="法定生存底线义务保障 VS 卓越功绩先进表彰激励"
        themeColor={OPTICS.amberSurge}
      />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 36,
        }}
      >
        {/* Left: 行政给付 (生存保障) */}
        <div
          data-final-knowledge="grant-specimen"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.emeraldBeam}`,
            borderRadius: 20,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${OPTICS.emeraldGlow}`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span
                style={{
                  padding: "4px 14px",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: `1.5px solid ${OPTICS.emeraldBeam}`,
                  borderRadius: 8,
                  color: "#6ee7b7",
                  fontSize: "22px",
                  fontWeight: 900,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                生存底线 · 行政义务
              </span>
              <span style={{ fontSize: "30px", fontWeight: 900, color: OPTICS.emeraldBeam, fontFamily: "var(--inkloom-animation-title)" }}>
                行政给付
              </span>
            </div>

            <div style={{ fontSize: "23px", color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 16 }}>
              政府提供必需生活条件、防范生活风险的<span style={{ color: "#34d399", fontWeight: 800 }}>法定行政义务</span>。
            </div>

            {/* 4 Kinds Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div data-final-knowledge="grant-kind-1" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "10px 12px", fontSize: "22px", color: "#d1fae5", fontFamily: "var(--inkloom-animation-label)" }}>
                ① 城市最低生活保障金
              </div>
              <div data-final-knowledge="grant-kind-2" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "10px 12px", fontSize: "22px", color: "#d1fae5", fontFamily: "var(--inkloom-animation-label)" }}>
                ② 农村五保户救济金
              </div>
              <div data-final-knowledge="grant-kind-3" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "10px 12px", fontSize: "22px", color: "#d1fae5", fontFamily: "var(--inkloom-animation-label)" }}>
                ③ 自然灾害生活救济金
              </div>
              <div data-final-knowledge="grant-kind-4" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "10px 12px", fontSize: "22px", color: "#d1fae5", fontFamily: "var(--inkloom-animation-label)" }}>
                ④ 国家承担的社会保险费
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(16, 185, 129, 0.12)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#a7f3d0", fontFamily: "var(--inkloom-animation-label)" }}>
            🛡️ 扩展覆盖：企业科技开发 / 大学生创业财政支持亦属给付！
          </div>
        </div>

        {/* Right: 行政奖励 (先进表彰) */}
        <div
          data-final-knowledge="award-specimen"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `2px solid ${OPTICS.amberSurge}`,
            borderRadius: 20,
            padding: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: `0 8px 32px ${OPTICS.amberGlow}`,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span
                style={{
                  padding: "4px 14px",
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                  border: `1.5px solid ${OPTICS.amberSurge}`,
                  borderRadius: 8,
                  color: "#fde047",
                  fontSize: "22px",
                  fontWeight: 900,
                  fontFamily: "var(--inkloom-animation-label)",
                }}
              >
                表彰先进 · 激励后进
              </span>
              <span style={{ fontSize: "30px", fontWeight: 900, color: OPTICS.amberSurge, fontFamily: "var(--inkloom-animation-title)" }}>
                行政奖励
              </span>
            </div>

            <div style={{ fontSize: "23px", color: OPTICS.textPrimary, fontFamily: "var(--inkloom-animation-body)", lineHeight: 1.5, marginBottom: 16 }}>
              对遵纪守法或为国家社会作出卓越贡献者给予<span style={{ color: "#f59e0b", fontWeight: 800 }}>物质或精神奖励</span>。
            </div>

            {/* 2 Kinds */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div data-final-knowledge="award-kind-1" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "12px 14px", fontSize: "22px", color: "#fef3c7", fontFamily: "var(--inkloom-animation-body)" }}>
                🏅 精神奖励：授予荣誉称号、颁发奖状/通令嘉奖、记功
              </div>
              <div data-final-knowledge="award-kind-2" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "12px 14px", fontSize: "22px", color: "#fef3c7", fontFamily: "var(--inkloom-animation-body)" }}>
                🎁 物质奖励：发放奖金、实物奖品、晋升职务/工资等
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(245, 158, 11, 0.12)", borderRadius: 10, padding: "10px 14px", fontSize: "22px", color: "#fef08a", fontFamily: "var(--inkloom-animation-label)" }}>
            🌟 激励宗旨：调动相对人积极性与社会创造力
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 5: 法考高频真题雷达与终审钢印 (ExamRadarSteelVerdictScene)
// -------------------------------------------------------------
export const ExamRadarSteelVerdictScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      data-layout="circular-radar-verdict-arena"
      data-visual-anchor="typographic-sequence"
      data-text-treatments="stamp,label-block,soft-highlight"
      data-visual-grammar="circular-radar-sweeps-and-detects-classic-exam-traps,heavy-steel-stamps-slam-down-with-rotational-recoil-to-lock-the-knowledge-map"
      data-focal-channels="contrast,enclosure,annotation"
      data-focal-rule="法考高频核心要点雷达锁定与终局裁决"
      style={{
        background: OPTICS.bgGradient,
        color: OPTICS.textPrimary,
        padding: "40px 60px",
      }}
    >
      <InstrumentHeader
        channel="05"
        title="真题雷达锁定与终审裁决"
        subtitle="法考高频必考核心要领 · 极速辨析锁定"
        themeColor={OPTICS.emeraldBeam}
      />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: 16,
        }}
      >
        <div
          data-final-knowledge="memo-levy"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `1.5px solid ${OPTICS.rubyCrimson}`,
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#f87171" }}>行政征收</span>
            <div style={{ fontSize: "22px", color: OPTICS.textSecondary }}>收所有权 · 税费土地房屋 · 或有偿或无偿</div>
          </div>
          <LaserStamp label="所有权" color={OPTICS.rubyCrimson} delay={20} rotation={-3} />
        </div>

        <div
          data-final-knowledge="memo-requisition"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `1.5px solid ${OPTICS.emeraldBeam}`,
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#34d399" }}>行政征用</span>
            <div style={{ fontSize: "22px", color: OPTICS.textSecondary }}>借使用权 · 公共利益需要 · 必须法定补偿</div>
          </div>
          <LaserStamp label="使用权+补偿" color={OPTICS.emeraldBeam} delay={25} rotation={3} />
        </div>

        <div
          data-final-knowledge="memo-adjudication"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `1.5px solid ${OPTICS.celestialPurple}`,
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#c084fc" }}>行政裁决</span>
            <div style={{ fontSize: "22px", color: OPTICS.textSecondary }}>三方中立 · 居间化解特定民事争议</div>
          </div>
          <LaserStamp label="三方居间" color={OPTICS.celestialPurple} delay={30} rotation={-2} />
        </div>

        <div
          data-final-knowledge="memo-confirmation"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `1.5px solid ${OPTICS.cyanLaser}`,
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#38bdf8" }}>行政确认</span>
            <div style={{ fontSize: "22px", color: OPTICS.textSecondary }}>双方法律关系 · 管理者身份 · 甄别宣告加强</div>
          </div>
          <LaserStamp label="宣告加强" color={OPTICS.cyanLaser} delay={35} rotation={2} />
        </div>

        <div
          data-final-knowledge="memo-grant"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: "1.5px solid #10b981",
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#10b981" }}>行政给付</span>
            <div style={{ fontSize: "22px", color: OPTICS.textSecondary }}>生存底线保障 · 低保五保救济 · 国家社保</div>
          </div>
          <LaserStamp label="生存兜底" color="#10b981" delay={40} rotation={-3} />
        </div>

        <div
          data-final-knowledge="memo-award"
          style={{
            backgroundColor: OPTICS.benchSurface,
            border: `1.5px solid ${OPTICS.amberSurge}`,
            borderRadius: 12,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#f59e0b" }}>行政奖励</span>
            <div style={{ fontSize: "22px", color: OPTICS.textSecondary }}>表彰先进功绩 · 精神荣誉与物质奖励</div>
          </div>
          <LaserStamp label="先进表彰" color={OPTICS.amberSurge} delay={45} rotation={3} />
        </div>
      </div>

      <div
        data-final-knowledge="mnemonic-exam-tip"
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 20,
          textAlign: "center",
          fontSize: "22px",
          color: OPTICS.amberSurge,
          fontFamily: "var(--inkloom-animation-label)",
          fontWeight: 800,
        }}
      >
        💡 极速秒杀：赋权找许可，加强找确认；所有权看征收，使用权看征用！
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// MAIN COMPOSITION
// -------------------------------------------------------------
export const MiscActsShowcase: React.FC = () => {
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: OPTICS.bg,
        width: 1920,
        height: 1080,
      }}
    >
      <Sequence from={SCENES["power-prism-dispersion"].start} durationInFrames={SCENES["power-prism-dispersion"].duration}>
        <PowerPrismDispersionScene />
      </Sequence>
      <Sequence from={SCENES["levy-requisition-kinetic-balance"].start} durationInFrames={SCENES["levy-requisition-kinetic-balance"].duration}>
        <LevyRequisitionKineticBalanceScene />
      </Sequence>
      <Sequence from={SCENES["adjudication-field-confirmation-scanner"].start} durationInFrames={SCENES["adjudication-field-confirmation-scanner"].duration}>
        <AdjudicationFieldConfirmationScannerScene />
      </Sequence>
      <Sequence from={SCENES["welfare-hydraulics-merit-launcher"].start} durationInFrames={SCENES["welfare-hydraulics-merit-launcher"].duration}>
        <WelfareHydraulicsMeritLauncherScene />
      </Sequence>
      <Sequence from={SCENES["exam-radar-steel-verdict"].start} durationInFrames={SCENES["exam-radar-steel-verdict"].duration}>
        <ExamRadarSteelVerdictScene />
      </Sequence>
    </AbsoluteFill>
  );
};
