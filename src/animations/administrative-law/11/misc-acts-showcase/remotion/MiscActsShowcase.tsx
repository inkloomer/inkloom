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

// Shadow-Puppet Stage: warm backlit gauze screen, ink silhouettes, cinnabar seals
const STAGE = {
  screen:
    "radial-gradient(ellipse at 50% 26%, #f9eccd 0%, #f1ddB2 34%, #e3c291 58%, #c49a63 78%, #93683c 100%)",
  clothTexture:
    "repeating-linear-gradient(90deg, rgba(90,58,26,0.035) 0px, rgba(90,58,26,0.035) 2px, transparent 2px, transparent 9px)",
  proscenium: "rgba(58, 36, 18, 0.85)",
  rod: "rgba(74, 46, 22, 0.65)",
  ink: "#2a1a10",
  inkPanel: "rgba(42, 26, 16, 0.94)",
  cardLight: "rgba(253, 244, 224, 0.96)",
  cardEdge: "rgba(90, 58, 26, 0.55)",
  cardInnerGlow: "inset 0 0 26px rgba(255, 226, 168, 0.65)",
  cinnabar: "#b3402e",
  cinnabarDeep: "#8f2f22",
  indigo: "#2f4d73",
  bamboo: "#56743f",
  ochre: "#a06a2c",
  gold: "#a97b18",
  plum: "#77354f",
  textInk: "#3a2415",
  textWarm: "#6b4a2a",
  textOnInk: "#f7e8c8",
  halo: "rgba(255, 238, 196, 0.85)",
};

// 顶部横匾：幕号 + 标题 + 副题，台口双线
const StageHeader: React.FC<{
  act: string;
  title: string;
  subtitle: string;
}> = ({ act, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame, fps, config: { damping: 16 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [-16, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 28,
        left: 60,
        right: 60,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: 12,
        borderBottom: `3px double ${STAGE.proscenium}`,
        opacity,
        transform: `translateY(${translateY}px)`,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            padding: "5px 14px",
            backgroundColor: STAGE.cinnabar,
            color: STAGE.textOnInk,
            fontSize: "20px",
            fontWeight: 900,
            fontFamily: "var(--inkloom-animation-label)",
            letterSpacing: "4px",
            borderRadius: 4,
            boxShadow: "0 2px 8px rgba(90, 40, 20, 0.35)",
          }}
        >
          {act}
        </div>
        <h2
          style={{
            color: STAGE.textInk,
            fontSize: "36px",
            fontWeight: 900,
            fontFamily: "var(--inkloom-animation-title)",
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          color: STAGE.textWarm,
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

// 皮影挂牌：竹竿吊挂、落幕摆入后静止
type PlaqueProps = {
  accent: string;
  tag: string;
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
  "data-stateful-terminal"?: string;
};

const HangingPlaque: React.FC<PlaqueProps> = ({
  accent,
  tag,
  children,
  delay = 0,
  style,
  ...rest
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const drop = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 13, stiffness: 130, mass: 0.9 },
  });
  const swing = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 9, stiffness: 110, mass: 0.7 },
  });
  const translateY = interpolate(drop, [0, 1], [-46, 0]);
  const rotate = interpolate(swing, [0, 1], [-5, 0]);
  const opacity = interpolate(Math.max(0, frame - delay), [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        opacity,
        ...style,
      }}
    >
      <div
        style={{
          height: 26,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div style={{ width: 2, height: 22, backgroundColor: STAGE.rod }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            backgroundColor: STAGE.ink,
            boxShadow: `0 0 0 2px rgba(253,244,224,0.7)`,
          }}
        />
      </div>
      <div
        {...rest}
        style={{
          flex: 1,
          backgroundColor: STAGE.cardLight,
          border: `2.5px solid ${accent}`,
          borderRadius: 14,
          boxShadow: `0 10px 26px rgba(70, 40, 16, 0.28), ${STAGE.cardInnerGlow}`,
          transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
          transformOrigin: "top center",
          padding: "16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: accent,
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 800,
              color: accent,
              fontFamily: "var(--inkloom-animation-mono)",
              letterSpacing: "2px",
            }}
          >
            {tag}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

// 朱砂印章：砸落后静止
const SealStamp: React.FC<{
  label: string;
  color?: string;
  delay?: number;
  rotation?: number;
  style?: React.CSSProperties;
}> = ({ label, color = STAGE.cinnabar, delay = 0, rotation = -3, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const press = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 11, stiffness: 220, mass: 0.7 },
  });
  const scale = interpolate(press, [0, 1], [1.7, 1]);
  const opacity = interpolate(Math.max(0, frame - delay), [0, 5], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7px 16px",
        backgroundColor: color,
        color: STAGE.textOnInk,
        fontSize: "23px",
        fontWeight: 900,
        fontFamily: "var(--inkloom-animation-title)",
        letterSpacing: "3px",
        borderRadius: 6,
        border: `2px solid rgba(253, 244, 224, 0.55)`,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: "0 4px 14px rgba(90, 40, 20, 0.4)",
        ...style,
      }}
    >
      {label}
    </div>
  );
};

// 对联卷轴横幅
const CoupletBanner: React.FC<{
  lines: string[];
  delay?: number;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ lines, delay = 0, style, ...rest }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const open = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 15, stiffness: 120 },
  });
  const scaleX = interpolate(open, [0, 1], [0.12, 1]);
  const opacity = interpolate(Math.max(0, frame - delay), [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      {...rest}
      style={{
        backgroundColor: STAGE.cardLight,
        border: `2px solid ${STAGE.cardEdge}`,
        borderRadius: 10,
        boxShadow: "0 8px 20px rgba(70, 40, 16, 0.25), inset 0 0 18px rgba(255, 226, 168, 0.5)",
        padding: "12px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        transform: `scaleX(${scaleX})`,
        transformOrigin: "center",
        opacity,
        ...style,
      }}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          style={{
            color: STAGE.textInk,
            fontSize: "24px",
            fontWeight: 800,
            fontFamily: "var(--inkloom-animation-label)",
            letterSpacing: "2px",
            whiteSpace: "nowrap",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

// -------------------------------------------------------------
// SCENE 1: 六类行为入幕总览 (PowerPrismDispersionScene)
// -------------------------------------------------------------
export const PowerPrismDispersionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const beamGrow = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      data-layout="gauze-stage-six-plaque-entrance"
      data-visual-anchor="flow-target"
      data-text-treatments="label-block,chip,soft-highlight"
      data-visual-grammar="lamp-mandate-beam-opens-the-gauze-stage,six-jointed-plaques-descend-on-bamboo-rods-in-legal-order,each-plaque-hangs-its-own-legal-signature-chip"
      data-focal-channels="spatial,connector,contrast"
      data-focal-rule="行政权力的六类其他具体行政行为入幕定位"
      style={{
        background: STAGE.screen,
        color: STAGE.textInk,
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: STAGE.clothTexture,
          pointerEvents: "none",
        }}
      />
      <StageHeader
        act="第 01 幕"
        title="六类其他具体行政行为"
        subtitle="入幕次序即法理坐标 · 权属性质全景"
      />

      {/* 幕布灯与光锥 */}
      <div
        style={{
          position: "absolute",
          top: 96,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${STAGE.halo} 0%, #e8b95c 55%, #a9713a 100%)`,
            boxShadow: "0 0 34px rgba(255, 220, 150, 0.9)",
          }}
        />
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${150 * beamGrow}px solid transparent`,
            borderRight: `${150 * beamGrow}px solid transparent`,
            borderTop: `46px solid rgba(255, 232, 180, 0.4)`,
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* 竹竿挂轨 */}
      <div
        style={{
          position: "absolute",
          top: 178,
          left: 60,
          right: 60,
          height: 5,
          backgroundColor: STAGE.rod,
          borderRadius: 3,
          zIndex: 6,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 196,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 18,
        }}
      >
        <HangingPlaque accent={STAGE.cinnabar} tag="入幕 · 01" delay={14} data-final-knowledge="levy-overview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "30px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)" }}>
              行政征收
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: `${STAGE.cinnabar}22`,
                border: `1.5px solid ${STAGE.cinnabar}`,
                color: STAGE.cinnabar,
                fontSize: "20px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              限制所有权
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: STAGE.textWarm,
              fontFamily: "var(--inkloom-animation-body)",
              backgroundColor: "rgba(255, 240, 208, 0.75)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            强制征收税费或私有财产（税/费/地/房）➜ 所有权永久转移归国家
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.bamboo} tag="入幕 · 02" delay={24} data-final-knowledge="requisition-overview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "30px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)" }}>
              行政征用
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: `${STAGE.bamboo}22`,
                border: `1.5px solid ${STAGE.bamboo}`,
                color: STAGE.bamboo,
                fontSize: "20px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              限制使用权
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: STAGE.textWarm,
              fontFamily: "var(--inkloom-animation-body)",
              backgroundColor: "rgba(255, 240, 208, 0.75)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            公共利益突发需要（抢险救灾/防疫）＋ 法定补偿 ➜ 用完必须归还
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.indigo} tag="入幕 · 03" delay={34} data-final-knowledge="adjudication-overview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "30px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)" }}>
              行政裁决
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: `${STAGE.indigo}22`,
                border: `1.5px solid ${STAGE.indigo}`,
                color: STAGE.indigo,
                fontSize: "20px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              居间第三方中立
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: STAGE.textWarm,
              fontFamily: "var(--inkloom-animation-body)",
              backgroundColor: "rgba(255, 240, 208, 0.75)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            机关居间中立处理特定民事纠纷 ➜ 必然涵盖三方主体法律关系
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.ochre} tag="入幕 · 04" delay={44} data-final-knowledge="confirmation-overview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "30px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)" }}>
              行政确认
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: `${STAGE.ochre}22`,
                border: `1.5px solid ${STAGE.ochre}`,
                color: STAGE.ochre,
                fontSize: "20px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              双方 · 管理者
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: STAGE.textWarm,
              fontFamily: "var(--inkloom-animation-body)",
              backgroundColor: "rgba(255, 240, 208, 0.75)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            甄别并宣告法律地位/事实（工伤认定/权属确认）➜ 加强既存权利
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.gold} tag="入幕 · 05" delay={54} data-final-knowledge="grant-overview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "30px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)" }}>
              行政给付
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: `${STAGE.gold}22`,
                border: `1.5px solid ${STAGE.gold}`,
                color: STAGE.gold,
                fontSize: "20px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              生存底线救助
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: STAGE.textWarm,
              fontFamily: "var(--inkloom-animation-body)",
              backgroundColor: "rgba(255, 240, 208, 0.75)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            法定生存保障义务（低保/五保/灾害救济/社保/创业财政扶持）
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.plum} tag="入幕 · 06" delay={64} data-final-knowledge="award-overview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "30px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)" }}>
              行政奖励
            </span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                backgroundColor: `${STAGE.plum}22`,
                border: `1.5px solid ${STAGE.plum}`,
                color: STAGE.plum,
                fontSize: "20px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              表彰先进功绩
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: STAGE.textWarm,
              fontFamily: "var(--inkloom-animation-body)",
              backgroundColor: "rgba(255, 240, 208, 0.75)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            表彰先进激励后进（精神荣誉称号/嘉奖 ＋ 物质奖金/晋升）
          </div>
        </HangingPlaque>
      </div>

      {/* 收幕对联 */}
      <CoupletBanner
        lines={["征收所有权 · 征用使用权 · 裁决居间中立", "确认宣告加强 · 给付救济生存 · 奖励表彰先进"]}
        delay={96}
        data-final-knowledge="six-act-couplet"
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 20,
        }}
      />
    </AbsoluteFill>
  );
};

// 暖光知识芯片：从幕布侧面滑入后静止
const KindChip: React.FC<{
  label: string;
  accent: string;
  delay: number;
  "data-final-knowledge"?: string;
}> = ({ label, accent, delay, ...rest }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 150 },
  });
  const opacity = interpolate(Math.max(0, frame - delay), [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      {...rest}
      style={{
        backgroundColor: "rgba(255, 240, 208, 0.85)",
        border: `1.5px solid ${accent}`,
        borderLeft: `5px solid ${accent}`,
        borderRadius: 8,
        padding: "10px 14px",
        fontSize: "22px",
        fontWeight: 700,
        color: STAGE.textInk,
        fontFamily: "var(--inkloom-animation-label)",
        opacity,
        transform: `translateX(${interpolate(enter, [0, 1], [-18, 0])}px)`,
      }}
    >
      {label}
    </div>
  );
};

// -------------------------------------------------------------
// SCENE 2: 征收与征用对比 (LevyRequisitionKineticBalanceScene)
// -------------------------------------------------------------
export const LevyRequisitionKineticBalanceScene: React.FC = () => {
  return (
    <AbsoluteFill
      data-layout="twin-shadow-comparison-lanes"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,thin-underline,stamp"
      data-visual-grammar="twin-silhouette-lanes-face-off-across-the-screen-seam,levy-kinds-and-requisition-conditions-enter-as-warm-interior-chips,compensation-axis-settles-the-legal-difference-at-the-lane-bottom"
      data-focal-channels="contrast,enclosure,connector"
      data-focal-rule="征收移转所有权与征用借用使用权并须补偿的对比"
      style={{
        background: STAGE.screen,
        color: STAGE.textInk,
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: STAGE.clothTexture,
          pointerEvents: "none",
        }}
      />
      <StageHeader
        act="第 02 幕"
        title="征收与征用对比"
        subtitle="所有权永久移转 VS 使用权临时借用"
      />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM + 76,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
        }}
      >
        {/* 左幕：行政征收 */}
        <div
          data-final-knowledge="levy-definition"
          style={{
            backgroundColor: STAGE.inkPanel,
            border: `2.5px solid ${STAGE.cinnabar}`,
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 12px 30px rgba(70, 30, 14, 0.4)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                padding: "4px 14px",
                backgroundColor: STAGE.cinnabar,
                color: STAGE.textOnInk,
                borderRadius: 6,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
              }}
            >
              限制【所有权】
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#f2b6a4",
                fontFamily: "var(--inkloom-animation-title)",
              }}
            >
              行政征收
            </span>
          </div>
          <div style={{ fontSize: "22px", lineHeight: 1.5, color: STAGE.textOnInk, fontFamily: "var(--inkloom-animation-body)" }}>
            行政机关依法向相对人
            <span style={{ color: "#ffb3a0", fontWeight: 800, borderBottom: "2px solid #ffb3a0" }}>
              强制征收税费或私有财产
            </span>
            ，财产所有权永久归国家。
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1, alignContent: "start" }}>
            <KindChip label="① 征税（法定无偿）" accent={STAGE.cinnabar} delay={20} data-final-knowledge="levy-kind-tax" />
            <KindChip label="② 征费（可能无偿）" accent={STAGE.cinnabar} delay={30} data-final-knowledge="levy-kind-fee" />
            <KindChip label="③ 土地征收（法定有偿）" accent={STAGE.cinnabar} delay={40} data-final-knowledge="levy-kind-land" />
            <KindChip label="④ 房屋征收（法定有偿）" accent={STAGE.cinnabar} delay={50} data-final-knowledge="levy-kind-house" />
          </div>
          <div
            data-final-knowledge="levy-compensation-note"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffd9cc",
              fontFamily: "var(--inkloom-animation-body)",
              borderTop: "1px solid rgba(255, 220, 200, 0.25)",
              paddingTop: 10,
            }}
          >
            ⚖️ 补偿属性：征收有可能有偿，有可能无偿
          </div>
        </div>

        {/* 右幕：行政征用 */}
        <div
          data-final-knowledge="requisition-definition"
          style={{
            backgroundColor: STAGE.inkPanel,
            border: `2.5px solid ${STAGE.bamboo}`,
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 12px 30px rgba(40, 50, 20, 0.4)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                padding: "4px 14px",
                backgroundColor: STAGE.bamboo,
                color: STAGE.textOnInk,
                borderRadius: 6,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
              }}
            >
              限制【使用权】
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#cfe3ae",
                fontFamily: "var(--inkloom-animation-title)",
              }}
            >
              行政征用
            </span>
          </div>
          <div style={{ fontSize: "22px", lineHeight: 1.5, color: STAGE.textOnInk, fontFamily: "var(--inkloom-animation-body)" }}>
            因
            <span style={{ color: "#d7e8b0", fontWeight: 800, borderBottom: "2px solid #d7e8b0" }}>
              公共利益需要
            </span>
            强制使用财产并
            <span style={{ color: "#f0c86a", fontWeight: 800, borderBottom: "2px solid #f0c86a" }}>
              给予补偿
            </span>
            （用完归还，用坏赔偿）。
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            <KindChip label="🚨 适用目的：抢险救灾、突发疫情防控等公共危机" accent={STAGE.bamboo} delay={64} data-final-knowledge="requisition-purpose" />
            <KindChip label="🔄 权属保留：所有权仍归相对人，仅临时移转占有使用" accent={STAGE.bamboo} delay={74} data-final-knowledge="requisition-ownership-note" />
          </div>
          <div
            data-final-knowledge="requisition-compensation-rule"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#e4efc8",
              fontFamily: "var(--inkloom-animation-body)",
              borderTop: "1px solid rgba(220, 235, 190, 0.25)",
              paddingTop: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>💰 刚性要件：征用必须依法给予补偿金！</span>
            <SealStamp label="公共利益＋补偿" color={STAGE.bamboo} delay={92} rotation={3} />
          </div>
        </div>
      </div>

      {/* 台口对比轴：补偿差异 */}
      <div
        data-final-knowledge="compensation-axis"
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 20,
          display: "grid",
          gridTemplateColumns: "1fr 64px 1fr",
          alignItems: "stretch",
          gap: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(179, 64, 46, 0.14)",
            border: `2px solid ${STAGE.cinnabar}`,
            borderRadius: 10,
            padding: "8px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontWeight: 800,
            color: STAGE.cinnabarDeep,
            fontFamily: "var(--inkloom-animation-label)",
          }}
        >
          征收 ➜ 补偿可有可无
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: 900,
            color: STAGE.cinnabarDeep,
            fontFamily: "var(--inkloom-animation-title)",
          }}
        >
          对
        </div>
        <div
          style={{
            backgroundColor: "rgba(86, 116, 63, 0.16)",
            border: `2px solid ${STAGE.bamboo}`,
            borderRadius: 10,
            padding: "8px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontWeight: 800,
            color: STAGE.bamboo,
            fontFamily: "var(--inkloom-animation-label)",
          }}
        >
          征用 ➜ 必须依法补偿
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 3: 裁决与确认对比 (AdjudicationFieldConfirmationScannerScene)
// -------------------------------------------------------------
export const AdjudicationFieldConfirmationScannerScene: React.FC = () => {
  const frame = useCurrentFrame();

  const threadGrow = interpolate(frame, [34, 70], [0, 1], { extrapolateRight: "clamp" });
  const threadGrow2 = interpolate(frame, [50, 86], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      data-layout="tripartite-bilateral-stage-vignette"
      data-visual-anchor="role-pair"
      data-text-treatments="label-block,chip,thin-underline"
      data-visual-grammar="arbiter-plaque-overlooks-two-disputing-figures-with-live-connector-threads,manager-to-party-single-thread-projects-confirmation-onto-existing-facts,license-confirmation-pair-splits-empowerment-from-reinforcement"
      data-focal-channels="connector,spatial,contrast"
      data-focal-rule="裁决的三方居间结构与确认的双方法律事实宣告"
      style={{
        background: STAGE.screen,
        color: STAGE.textInk,
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: STAGE.clothTexture,
          pointerEvents: "none",
        }}
      />
      <StageHeader
        act="第 03 幕"
        title="裁决与确认对比"
        subtitle="三方居间解决民事争议 VS 双方宣告加强既存事实"
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
        {/* 左：三方居间皮影小戏 */}
        <div
          data-final-knowledge="adjudication-definition"
          style={{
            backgroundColor: STAGE.inkPanel,
            border: `2.5px solid ${STAGE.indigo}`,
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                padding: "4px 14px",
                backgroundColor: STAGE.indigo,
                color: STAGE.textOnInk,
                borderRadius: 6,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
              }}
            >
              居间 · 第三方中立
            </span>
            <span style={{ fontSize: "30px", fontWeight: 900, color: "#b9cbe8", fontFamily: "var(--inkloom-animation-title)" }}>
              行政裁决
            </span>
          </div>
          <div style={{ fontSize: "22px", lineHeight: 1.5, color: STAGE.textOnInk, fontFamily: "var(--inkloom-animation-body)" }}>
            行政机关作为
            <span style={{ color: "#c3d5f2", fontWeight: 800 }}>中立第三方</span>
            ，居间对特定的
            <span style={{ color: "#ffb3a0", fontWeight: 800 }}>民事争议</span>
            作出具有约束力的处理。
          </div>

          {/* 三方皮影图 */}
          <div
            data-final-knowledge="adjudication-tripartite-structure"
            style={{
              flex: 1,
              position: "relative",
              backgroundColor: "rgba(255, 240, 208, 0.9)",
              border: `1.5px solid rgba(47, 77, 115, 0.4)`,
              borderRadius: 12,
              minHeight: 210,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                padding: "6px 20px",
                backgroundColor: STAGE.indigo,
                color: STAGE.textOnInk,
                borderRadius: 8,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
                whiteSpace: "nowrap",
              }}
            >
              ⚖️ 行政机关（中立裁判者）
            </div>
            {/* 连接线：裁决者 → 双方（不穿透角色牌） */}
            <div
              style={{
                position: "absolute",
                top: 62,
                left: "50%",
                width: 2,
                height: 34 * threadGrow,
                backgroundColor: STAGE.indigo,
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 96,
                left: `${18 + 32 * (1 - threadGrow)}%`,
                width: `${64 * threadGrow}%`,
                height: 2,
                backgroundColor: STAGE.indigo,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 108,
                left: 18,
                padding: "5px 12px",
                backgroundColor: "rgba(47, 77, 115, 0.12)",
                border: `1.5px solid ${STAGE.indigo}`,
                borderRadius: 6,
                fontSize: "21px",
                fontWeight: 700,
                color: STAGE.textInk,
              }}
            >
              民事相对人 甲
            </div>
            <div
              style={{
                position: "absolute",
                top: 118,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "22px",
                fontWeight: 900,
                color: STAGE.cinnabar,
                fontFamily: "var(--inkloom-animation-label)",
                whiteSpace: "nowrap",
              }}
            >
              ⚡ 争议纠纷 ⚡
            </div>
            <div
              style={{
                position: "absolute",
                top: 108,
                right: 18,
                padding: "5px 12px",
                backgroundColor: "rgba(47, 77, 115, 0.12)",
                border: `1.5px solid ${STAGE.indigo}`,
                borderRadius: 6,
                fontSize: "21px",
                fontWeight: 700,
                color: STAGE.textInk,
              }}
            >
              民事相对人 乙
            </div>
          </div>

          <div
            data-final-knowledge="adjudication-three-party-rule"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#c3d5f2",
              fontFamily: "var(--inkloom-animation-label)",
              borderTop: "1px solid rgba(195, 213, 242, 0.25)",
              paddingTop: 10,
            }}
          >
            📌 铁律：法律关系中必然涵盖【三方主体】！
          </div>
        </div>

        {/* 右：双方管理与许可/确认之辨 */}
        <div
          data-final-knowledge="confirmation-definition"
          style={{
            backgroundColor: STAGE.inkPanel,
            border: `2.5px solid ${STAGE.ochre}`,
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                padding: "4px 14px",
                backgroundColor: STAGE.ochre,
                color: STAGE.textOnInk,
                borderRadius: 6,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
              }}
            >
              双方 · 管理者身份
            </span>
            <span style={{ fontSize: "30px", fontWeight: 900, color: "#ecd3a4", fontFamily: "var(--inkloom-animation-title)" }}>
              行政确认
            </span>
          </div>
          <div style={{ fontSize: "22px", lineHeight: 1.5, color: STAGE.textOnInk, fontFamily: "var(--inkloom-animation-body)" }}>
            依法对法律地位、法律关系或法律事实进行甄别并给予
            <span style={{ color: "#f0c86a", fontWeight: 800 }}>确定、认定、证明、宣告</span>
            。
          </div>

          {/* 双方连线 */}
          <div
            data-final-knowledge="confirmation-bilateral-relation"
            style={{
              position: "relative",
              backgroundColor: "rgba(255, 240, 208, 0.9)",
              border: `1.5px solid rgba(160, 106, 44, 0.4)`,
              borderRadius: 12,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "22px", fontWeight: 800, color: STAGE.ochre, fontFamily: "var(--inkloom-animation-label)" }}>
              行政机关（管理者）
            </span>
            <div
              style={{
                flex: 1,
                margin: "0 12px",
                height: 2,
                backgroundColor: STAGE.ochre,
                transform: `scaleX(${threadGrow2})`,
                transformOrigin: "left center",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -30,
                  left: "50%",
                  transform: `translateX(-50%)`,
                  fontSize: "19px",
                  fontWeight: 800,
                  color: STAGE.ochre,
                  whiteSpace: "nowrap",
                  opacity: threadGrow2,
                }}
              >
                甄别宣告 ➜
              </span>
            </div>
            <span style={{ fontSize: "22px", fontWeight: 800, color: STAGE.textInk }}>相对人</span>
          </div>

          {/* 许可 vs 确认 */}
          <div
            data-final-knowledge="license-confirmation-contrast"
            style={{
              backgroundColor: "rgba(255, 240, 208, 0.9)",
              border: `1.5px solid rgba(160, 106, 44, 0.4)`,
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flex: 1,
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span
                style={{
                  padding: "3px 12px",
                  backgroundColor: STAGE.cinnabar,
                  color: STAGE.textOnInk,
                  borderRadius: 6,
                  fontSize: "21px",
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                }}
              >
                许可
              </span>
              <span style={{ fontSize: "21px", color: STAGE.textInk, fontFamily: "var(--inkloom-animation-body)" }}>
                从无到有赋权（权利来自政府赋予）
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span
                style={{
                  padding: "3px 12px",
                  backgroundColor: STAGE.indigo,
                  color: STAGE.textOnInk,
                  borderRadius: 6,
                  fontSize: "21px",
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                }}
              >
                确认
              </span>
              <span style={{ fontSize: "21px", color: STAGE.textInk, fontFamily: "var(--inkloom-animation-body)" }}>
                对既存事实、法律关系的<span style={{ fontWeight: 800, color: STAGE.cinnabarDeep }}>加强</span>（权利并非政府赋予）
              </span>
            </div>
          </div>

          <div
            data-final-knowledge="confirmation-examples"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ecd3a4",
              fontFamily: "var(--inkloom-animation-label)",
            }}
          >
            🔍 典型：工伤认定 · 交通事故责任认定 · 专利权确认
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 4: 给付与奖励对比 (WelfareHydraulicsMeritLauncherScene)
// -------------------------------------------------------------
export const WelfareHydraulicsMeritLauncherScene: React.FC = () => {
  const frame = useCurrentFrame();

  const provisionEntry = (delay: number) => {
    const enter = spring({
      frame: Math.max(0, frame - delay),
      fps: 60,
      config: { damping: 15, stiffness: 140 },
    });
    return {
      opacity: interpolate(Math.max(0, frame - delay), [0, 8], [0, 1], {
        extrapolateRight: "clamp",
      }),
      transform: `translateY(${interpolate(enter, [0, 1], [-26, 0])}px)`,
    };
  };

  return (
    <AbsoluteFill
      data-layout="descent-provision-ascending-podium"
      data-visual-anchor="flow-path"
      data-text-treatments="chip,soft-highlight,label-block"
      data-visual-grammar="statutory-duty-plaque-releases-survival-provisions-down-onto-the-subsistence-baseline,merit-steps-ascend-from-spiritual-to-material-rewards,extension-chips-widen-the-provision-family"
      data-focal-channels="motion,spatial,enclosure"
      data-focal-rule="给付的生存底线义务与奖励的先进表彰激励"
      style={{
        background: STAGE.screen,
        color: STAGE.textInk,
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: STAGE.clothTexture,
          pointerEvents: "none",
        }}
      />
      <StageHeader
        act="第 04 幕"
        title="给付与奖励对比"
        subtitle="法定生存底线义务 VS 卓越功绩表彰激励"
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
        {/* 左：给付——自上而下发放至生存底线 */}
        <div
          style={{
            backgroundColor: STAGE.inkPanel,
            border: `2.5px solid ${STAGE.gold}`,
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            data-final-knowledge="grant-definition"
            data-stateful-source="survival-provision-tokens"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                padding: "4px 14px",
                backgroundColor: STAGE.gold,
                color: STAGE.textOnInk,
                borderRadius: 6,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
                whiteSpace: "nowrap",
              }}
            >
              生存底线 · 行政义务
            </span>
            <span style={{ fontSize: "30px", fontWeight: 900, color: "#ecd89e", fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政给付
            </span>
          </div>
          <div style={{ fontSize: "22px", lineHeight: 1.45, color: STAGE.textOnInk, fontFamily: "var(--inkloom-animation-body)" }}>
            政府提供必需生活条件、防范生活风险的
            <span style={{ color: "#f0d68a", fontWeight: 800, borderBottom: "2px solid #f0d68a" }}>法定行政义务</span>
            ，四类救助沿幕布落下：
          </div>

          <div
            data-stateful-terminal="survival-provision-tokens"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div
              data-final-knowledge="grant-kind-baozhang"
              style={{
                backgroundColor: "rgba(255, 240, 208, 0.9)",
                border: `1.5px solid ${STAGE.gold}`,
                borderLeft: `5px solid ${STAGE.gold}`,
                borderRadius: 10,
                padding: "16px 20px",
                fontSize: "23px",
                fontWeight: 700,
                color: STAGE.textInk,
                fontFamily: "var(--inkloom-animation-label)",
                ...provisionEntry(26),
              }}
            >
              ① 城市居民最低生活保障金
            </div>
            <div
              data-final-knowledge="grant-kind-wubao"
              style={{
                backgroundColor: "rgba(255, 240, 208, 0.9)",
                border: `1.5px solid ${STAGE.gold}`,
                borderLeft: `5px solid ${STAGE.gold}`,
                borderRadius: 10,
                padding: "16px 20px",
                fontSize: "23px",
                fontWeight: 700,
                color: STAGE.textInk,
                fontFamily: "var(--inkloom-animation-label)",
                ...provisionEntry(36),
              }}
            >
              ② 农村五保户救济金
            </div>
            <div
              data-final-knowledge="grant-kind-jiuji"
              style={{
                backgroundColor: "rgba(255, 240, 208, 0.9)",
                border: `1.5px solid ${STAGE.gold}`,
                borderLeft: `5px solid ${STAGE.gold}`,
                borderRadius: 10,
                padding: "16px 20px",
                fontSize: "23px",
                fontWeight: 700,
                color: STAGE.textInk,
                fontFamily: "var(--inkloom-animation-label)",
                ...provisionEntry(46),
              }}
            >
              ③ 自然灾害生活救济金
            </div>
            <div
              data-final-knowledge="grant-kind-shebao"
              style={{
                backgroundColor: "rgba(255, 240, 208, 0.9)",
                border: `1.5px solid ${STAGE.gold}`,
                borderLeft: `5px solid ${STAGE.gold}`,
                borderRadius: 10,
                padding: "16px 20px",
                fontSize: "23px",
                fontWeight: 700,
                color: STAGE.textInk,
                fontFamily: "var(--inkloom-animation-label)",
                ...provisionEntry(56),
              }}
            >
              ④ 国家承担的社会保险费
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(169, 123, 24, 0.35)",
              border: `2px dashed ${STAGE.gold}`,
              borderRadius: 8,
              padding: "7px 14px",
              textAlign: "center",
              fontSize: "22px",
              fontWeight: 900,
              color: "#f4e3b0",
              fontFamily: "var(--inkloom-animation-label)",
              letterSpacing: "3px",
            }}
          >
            —— 生存底线 ——
          </div>

          <div
            data-final-knowledge="grant-extension"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#f4e3b0",
              fontFamily: "var(--inkloom-animation-body)",
            }}
          >
            🛡️ 扩展覆盖：企业科技开发 / 大学生创业财政支持亦属给付！
          </div>
        </div>

        {/* 右：奖励——台阶上升 */}
        <div
          style={{
            backgroundColor: STAGE.inkPanel,
            border: `2.5px solid ${STAGE.plum}`,
            borderRadius: 18,
            padding: "18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            data-final-knowledge="award-definition"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                padding: "4px 14px",
                backgroundColor: STAGE.plum,
                color: STAGE.textOnInk,
                borderRadius: 6,
                fontSize: "22px",
                fontWeight: 900,
                fontFamily: "var(--inkloom-animation-label)",
                whiteSpace: "nowrap",
              }}
            >
              表彰先进 · 激励后进
            </span>
            <span style={{ fontSize: "30px", fontWeight: 900, color: "#e3b9c9", fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政奖励
            </span>
          </div>
          <div style={{ fontSize: "22px", lineHeight: 1.45, color: STAGE.textOnInk, fontFamily: "var(--inkloom-animation-body)" }}>
            对遵纪守法或为国家社会作出卓越贡献者给予
            <span style={{ color: "#e3b9c9", fontWeight: 800, borderBottom: "2px solid #e3b9c9" }}>物质或精神奖励</span>
            ，两级台阶依次升起：
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
            <div
              data-final-knowledge="award-spiritual"
              style={{
                backgroundColor: "rgba(255, 240, 208, 0.9)",
                border: `1.5px solid ${STAGE.plum}`,
                borderRadius: 10,
                padding: "20px 22px",
                flex: 1,
                display: "flex",
                alignItems: "center",
                fontSize: "23px",
                color: STAGE.textInk,
                fontFamily: "var(--inkloom-animation-body)",
                opacity: interpolate(frame, [40, 52], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                transform: `translateY(${interpolate(frame, [40, 56], [34, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
              }}
            >
              🏅 <span style={{ fontWeight: 900, color: STAGE.plum, marginRight: 10, whiteSpace: "nowrap" }}>精神奖励</span>：授予荣誉称号、颁发奖状/通令嘉奖、记功
            </div>
            <div
              data-final-knowledge="award-material"
              style={{
                backgroundColor: "rgba(255, 240, 208, 0.9)",
                border: `1.5px solid ${STAGE.cinnabar}`,
                borderRadius: 10,
                padding: "20px 22px",
                flex: 1,
                display: "flex",
                alignItems: "center",
                fontSize: "23px",
                color: STAGE.textInk,
                fontFamily: "var(--inkloom-animation-body)",
                opacity: interpolate(frame, [24, 36], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                transform: `translateY(${interpolate(frame, [24, 40], [34, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
              }}
            >
              🎁 <span style={{ fontWeight: 900, color: STAGE.cinnabar, marginRight: 10, whiteSpace: "nowrap" }}>物质奖励</span>：发放奖金、实物奖品、晋升职务/工资等
            </div>
          </div>

          <div
            data-final-knowledge="award-purpose"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#e3b9c9",
              fontFamily: "var(--inkloom-animation-label)",
              borderTop: "1px solid rgba(227, 185, 201, 0.25)",
              paddingTop: 10,
            }}
          >
            🌟 激励宗旨：调动相对人积极性与社会创造力
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SCENE 5: 高频考点终审 (ExamRadarSteelVerdictScene)
// -------------------------------------------------------------
export const ExamRadarSteelVerdictScene: React.FC = () => {
  return (
    <AbsoluteFill
      data-layout="closing-ledger-hanging-plaques"
      data-visual-anchor="typographic-sequence"
      data-text-treatments="stamp,label-block,chip"
      data-visual-grammar="six-verdict-plaques-hang-in-staggered-ledger-order-with-miniature-seal-chips,rapid-recognition-couplet-closes-the-stage-scroll,terminal-cinnabar-seal-locks-the-knowledge-ledger"
      data-focal-channels="contrast,locator,annotation"
      data-focal-rule="六行为一秒判别口诀与高频易错锁定"
      style={{
        background: STAGE.screen,
        color: STAGE.textInk,
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: STAGE.clothTexture,
          pointerEvents: "none",
        }}
      />
      <StageHeader
        act="第 05 幕"
        title="高频考点终审"
        subtitle="法考高频必考核心要领 · 一秒判别锁定"
      />

      {/* 挂账双排：三列两行，第二排错位 */}
      <div
        style={{
          position: "absolute",
          top: 132,
          left: 60,
          right: 60,
          height: 96,
          display: "flex",
          justifyContent: "center",
          gap: 12,
          zIndex: 6,
        }}
      >
        <div key="rod-1" style={{ width: 14, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 2, height: 96, backgroundColor: STAGE.rod }} />
        </div>
        <div key="rod-2" style={{ width: 14, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 2, height: 96, backgroundColor: STAGE.rod }} />
        </div>
        <div key="rod-3" style={{ width: 14, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 2, height: 96, backgroundColor: STAGE.rod }} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 224,
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM + 92,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "64px 18px",
        }}
      >
        <HangingPlaque accent={STAGE.cinnabar} tag="终审 · 01" delay={12} data-final-knowledge="memo-levy">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "28px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政征收
            </span>
            <SealStamp label="所有权" color={STAGE.cinnabar} delay={38} rotation={-3} />
          </div>
          <div style={{ fontSize: "21px", lineHeight: 1.4, color: STAGE.textWarm, fontFamily: "var(--inkloom-animation-body)" }}>
            收所有权 · 税费土地房屋 · 或有偿或无偿
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.bamboo} tag="终审 · 02" delay={22} data-final-knowledge="memo-requisition">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "28px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政征用
            </span>
            <SealStamp label="使用权＋补偿" color={STAGE.bamboo} delay={48} rotation={3} />
          </div>
          <div style={{ fontSize: "21px", lineHeight: 1.4, color: STAGE.textWarm, fontFamily: "var(--inkloom-animation-body)" }}>
            借使用权 · 公共利益需要 · 必须法定补偿
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.indigo} tag="终审 · 03" delay={32} data-final-knowledge="memo-adjudication">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "28px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政裁决
            </span>
            <SealStamp label="三方居间" color={STAGE.indigo} delay={58} rotation={-2} />
          </div>
          <div style={{ fontSize: "21px", lineHeight: 1.4, color: STAGE.textWarm, fontFamily: "var(--inkloom-animation-body)" }}>
            三方中立 · 居间化解特定民事争议
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.ochre} tag="终审 · 04" delay={42} data-final-knowledge="memo-confirmation" style={{ marginTop: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "28px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政确认
            </span>
            <SealStamp label="宣告加强" color={STAGE.ochre} delay={68} rotation={2} />
          </div>
          <div style={{ fontSize: "21px", lineHeight: 1.4, color: STAGE.textWarm, fontFamily: "var(--inkloom-animation-body)" }}>
            双方法律关系 · 管理者身份 · 甄别宣告加强
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.gold} tag="终审 · 05" delay={52} data-final-knowledge="memo-grant" style={{ marginTop: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "28px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政给付
            </span>
            <SealStamp label="生存兜底" color={STAGE.gold} delay={78} rotation={-3} />
          </div>
          <div style={{ fontSize: "21px", lineHeight: 1.4, color: STAGE.textWarm, fontFamily: "var(--inkloom-animation-body)" }}>
            生存底线保障 · 低保五保救济 · 国家社保
          </div>
        </HangingPlaque>

        <HangingPlaque accent={STAGE.plum} tag="终审 · 06" delay={62} data-final-knowledge="memo-award" style={{ marginTop: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "28px", fontWeight: 900, color: STAGE.textInk, fontFamily: "var(--inkloom-animation-title)", whiteSpace: "nowrap" }}>
              行政奖励
            </span>
            <SealStamp label="先进表彰" color={STAGE.plum} delay={88} rotation={3} />
          </div>
          <div style={{ fontSize: "21px", lineHeight: 1.4, color: STAGE.textWarm, fontFamily: "var(--inkloom-animation-body)" }}>
            表彰先进功绩 · 精神荣誉与物质奖励
          </div>
        </HangingPlaque>
      </div>

      {/* 收幕口诀卷轴 + 终审朱印 */}
      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 20,
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <CoupletBanner
          lines={["赋权找许可 · 加强找确认", "所有权看征收 · 使用权看征用"]}
          delay={110}
          data-final-knowledge="exam-tip-couplet"
          style={{ flex: 1 }}
        />
        <SealStamp label="终审定谳" color={STAGE.cinnabarDeep} delay={140} rotation={-6} />
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
        backgroundColor: "#93683c",
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
