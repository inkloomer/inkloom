import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Courier relay night road: slate-blue night, parchment dispatch cards, wax-seal red, lantern accents
export const C = {
  night: "linear-gradient(180deg, #1f2733 0%, #161c26 100%)",
  route: "rgba(217,150,47,0.55)",
  envelope: "#f1e8d2",
  envelopeEdge: "#5a4a34",
  ink: "#2b2318",
  inkSoft: "#6a5c44",
  wax: "#a03a30",
  waxLight: "#c96a5c",
  lantern: "#d9962f",
  cream: "#f5efdf",
  soft: "#93a0b4",
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

export const RelayShell: React.FC<{
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
        background: C.night,
        color: C.cream,
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(217,150,47,.05) 0 2px, transparent 2px 58px)," +
          "radial-gradient(circle at 12% 8%, rgba(217,150,47,.10), transparent 24%)",
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
          borderBottom: `3px solid ${C.wax}`,
        }}
      >
        <div
          style={{
            width: 156,
            height: 72,
            background: C.wax,
            color: C.cream,
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 6,
            rotate: "-1.5deg",
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          驿站 {code}
        </div>
        <div>
          <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: C.cream }}>
            {title}
          </h1>
          <div style={{ fontSize: 19, fontWeight: 800, color: C.soft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
            {subtitle}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 16, fontWeight: 900, letterSpacing: 3, color: C.soft, fontFamily: "var(--inkloom-animation-label, sans-serif)", opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }) }}>
          REVIEW CASES · COURIER RELAY NETWORK
        </div>
      </header>
      <main style={{ position: "absolute", left: 60, right: 60, top: 164, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </main>
    </AbsoluteFill>
  );
};

// 信封派单卡
export const DispatchCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, style, ...rest }) => (
  <div
    {...rest}
    style={{
      position: "relative",
      background: `linear-gradient(170deg, ${C.envelope} 0%, #e4d8bc 100%)`,
      color: C.ink,
      border: `2.5px solid ${C.envelopeEdge}`,
      borderRadius: 6,
      boxShadow: "0 8px 20px rgba(0,0,0,.45)",
      ...style,
    }}
  >
    {children}
  </div>
);

// 火漆印
export const WaxSeal: React.FC<{
  label: string;
  tone?: string;
  delay?: number;
  rotation?: number;
}> = ({ label, tone = C.wax, delay = 0, rotation = -3 }) => {
  const f = useCurrentFrame();
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
        color: C.cream,
        fontSize: 21,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        letterSpacing: 2,
        borderRadius: "50%",
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: "0 4px 12px rgba(0,0,0,.4)",
      }}
    >
      {label}
    </span>
  );
};

// 站牌
export const StationTag: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 14px",
      border: `2.5px solid ${C.lantern}`,
      color: C.lantern,
      fontSize: 20,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label, sans-serif)",
      letterSpacing: 2,
      borderRadius: 4,
      background: "rgba(217,150,47,.08)",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </span>
);
