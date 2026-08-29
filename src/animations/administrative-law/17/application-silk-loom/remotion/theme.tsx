import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

export const S = {
  room: "linear-gradient(180deg, #1d2340 0%, #141930 100%)",
  beam: "#7a5a30",
  beamLight: "#a9824a",
  cream: "#f3eedd",
  soft: "#9aa3c0",
  threadGold: "#d9b24a",
  threadBronze: "#b98d3e",
  threadAzure: "#7fa3c0",
  threadPale: "#a9bed6",
  threadMist: "#c6d2e2",
  frame: "rgba(154,163,192,.3)",
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

export const LoomShell: React.FC<{
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
        background: S.room,
        color: S.cream,
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(243,238,221,.03) 0 1.5px, transparent 1.5px 42px)," +
          "radial-gradient(circle at 90% 6%, rgba(217,178,74,.10), transparent 24%)",
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
          borderBottom: `3px solid ${S.beam}`,
        }}
      >
        <div
          style={{
            width: 156,
            height: 72,
            background: `linear-gradient(180deg, ${S.beamLight} 0%, ${S.beam} 100%)`,
            color: "#241a0c",
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 5,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          织机 {code}
        </div>
        <div>
          <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: S.cream }}>
            {title}
          </h1>
          <div style={{ fontSize: 19, fontWeight: 800, color: S.soft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
            {subtitle}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 16, fontWeight: 900, letterSpacing: 3, color: S.soft, fontFamily: "var(--inkloom-animation-label, sans-serif)", opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }) }}>
          APPLICATION OF LAW · SILK LOOM
        </div>
      </header>
      <main style={{ position: "absolute", left: 60, right: 60, top: 164, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </main>
    </AbsoluteFill>
  );
};

export const ThreadLabel: React.FC<{ children: React.ReactNode; color: string; style?: React.CSSProperties }> = ({ children, color, style }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 14px",
      background: color,
      color: "#1d2340",
      fontSize: 20,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label, sans-serif)",
      letterSpacing: 1.5,
      borderRadius: 3,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </span>
);
