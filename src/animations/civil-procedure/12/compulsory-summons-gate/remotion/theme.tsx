import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Enamel gate-sign: deep green ground, cream enamel plates, red/green state marks, steel posts
export const E = {
  ground: "linear-gradient(180deg, #16342a 0%, #0f241d 100%)",
  plate: "#f4efdd",
  plateEdge: "#3a3226",
  ink: "#26211a",
  soft: "#7d8f85",
  steel: "#9aa4a8",
  pass: "#3f7f5f",
  warn: "#b5432f",
  gold: "#d9a13b",
};
export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const enter = (f: number, d = 0, x = 0, y = 24) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  transform: `translate(${interpolate(f, [d, d + 24], [x, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px, ${interpolate(f, [d, d + 24], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px)`,
});

export const GateShell: React.FC<{
  code: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}> = ({ code, title, subtitle, children }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      className="font-animation-body"
      style={{
        background: E.ground,
        color: E.ink,
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(244,239,221,.04) 0 2px, transparent 2px 46px)," +
          "radial-gradient(circle at 88% 12%, rgba(217,161,59,.10), transparent 26%)",
      }}
    >
      <header
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          top: 32,
          height: 106,
          display: "flex",
          alignItems: "center",
          gap: 22,
          borderBottom: `3px solid ${E.steel}`,
        }}
      >
        <div
          style={{
            width: 156,
            height: 72,
            background: E.gold,
            color: "#3a3226",
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 6,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          信号闸 {code}
        </div>
        <div>
          <h1
            className="font-animation-title"
            style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: E.plate }}
          >
            {title}
          </h1>
          <div
            style={{
              fontSize: 19,
              fontWeight: 800,
              color: E.soft,
              letterSpacing: 2,
              fontFamily: "var(--inkloom-animation-label, sans-serif)",
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: 3,
            color: E.soft,
            fontFamily: "var(--inkloom-animation-label, sans-serif)",
            opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }),
          }}
        >
          CIVIL PROCEDURE · ENAMEL GATE SIGN
        </div>
      </header>
      <main
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          top: 164,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
        }}
      >
        {children}
      </main>
    </AbsoluteFill>
  );
};

// 珐琅牌
export const EnamelPlate: React.FC<{
  children: React.ReactNode;
  edge?: string;
  style?: React.CSSProperties;
  mark?: boolean;
}> = ({ children, edge = E.plateEdge, style, mark = true }) => (
  <div
    style={{
      position: "relative",
      background: `linear-gradient(170deg, ${E.plate} 0%, #e9e2cc 100%)`,
      border: `3px solid ${edge}`,
      borderRadius: 8,
      boxShadow: "0 8px 20px rgba(0,0,0,.45), inset 0 0 0 2px rgba(58,50,38,.12)",
      ...style,
    }}
  >
    {mark && (
      <>
        <div style={{ position: "absolute", top: 5, left: 7, width: 5, height: 5, borderRadius: "50%", background: "rgba(58,50,38,.4)" }} />
        <div style={{ position: "absolute", top: 5, right: 7, width: 5, height: 5, borderRadius: "50%", background: "rgba(58,50,38,.4)" }} />
        <div style={{ position: "absolute", bottom: 5, left: 7, width: 5, height: 5, borderRadius: "50%", background: "rgba(58,50,38,.4)" }} />
        <div style={{ position: "absolute", bottom: 5, right: 7, width: 5, height: 5, borderRadius: "50%", background: "rgba(58,50,38,.4)" }} />
      </>
    )}
    {children}
  </div>
);

// 状态印
export const GateStamp: React.FC<{
  label: string;
  pass?: boolean;
  delay?: number;
  rotation?: number;
}> = ({ label, pass = true, delay = 0, rotation = -3 }) => {
  const f = useCurrentFrame();
  const tone = pass ? E.pass : E.warn;
  const press = interpolate(f, [delay, delay + 10], [1.5, 1], {
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
        padding: "6px 15px",
        background: tone,
        color: "#f4efdd",
        fontSize: 21,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        letterSpacing: 2,
        borderRadius: 5,
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
      }}
    >
      {label}
    </span>
  );
};
