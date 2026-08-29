import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Lighthouse watch: deep teal-green night sea, warm cream beams, signal red-white stripes
export const L = {
  sea: "linear-gradient(180deg, #122b28 0%, #0c1e1c 100%)",
  beam: "#f2e6c4",
  beamWarm: "#e8cf94",
  ink: "#1e2620",
  inkSoft: "#5f6f66",
  cream: "#f5efdf",
  soft: "#8fa398",
  red: "#a03a30",
  redLight: "#c96a5c",
  brass: "#c9a24b",
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

export const WatchShell: React.FC<{
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
        background: L.sea,
        color: L.cream,
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle at 50% -10%, rgba(242,230,196,.14) 0 140px, transparent 380px)," +
          "repeating-linear-gradient(0deg, rgba(242,230,196,.03) 0 2px, transparent 2px 52px)",
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
          borderBottom: `3px solid ${L.brass}`,
        }}
      >
        <div
          style={{
            width: 68,
            height: 68,
            borderRadius: "50%",
            background: `repeating-conic-gradient(${L.red} 0 30deg, #f5efdf 30deg 60deg)`,
            display: "grid",
            placeItems: "center",
          }}
        >
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#122b28", display: "grid", placeItems: "center" }}>
            <span style={{ fontSize: 15, fontWeight: 950, color: L.beam, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>{code}</span>
          </div>
        </div>
        <div>
          <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: L.cream }}>
            {title}
          </h1>
          <div style={{ fontSize: 19, fontWeight: 800, color: L.soft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
            {subtitle}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 16, fontWeight: 900, letterSpacing: 3, color: L.soft, fontFamily: "var(--inkloom-animation-label, sans-serif)", opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }) }}>
          PUBLIC INTEREST · LIGHTHOUSE WATCH
        </div>
      </header>
      <main style={{ position: "absolute", left: 60, right: 60, top: 164, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </main>
    </AbsoluteFill>
  );
};

// 灯语信号牌
export const SignalCard: React.FC<{
  children: React.ReactNode;
  lit?: boolean;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, lit = false, style, ...rest }) => {
  const f = useCurrentFrame();
  return (
    <div
      {...rest}
      style={{
        position: "relative",
        background: lit ? "linear-gradient(170deg, #f2e6c4 0%, #e6d5a8 100%)" : "rgba(242,230,196,.08)",
        color: lit ? L.ink : L.cream,
        border: `2.5px solid ${lit ? L.brass : "rgba(143,163,152,.5)"}`,
        borderRadius: 10,
        boxShadow: lit ? "0 8px 22px rgba(0,0,0,.4), 0 0 24px rgba(242,230,196,.15)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
