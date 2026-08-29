import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Clockwork tribunal: graphite plates, oxidized bronze gears, parchment dials, oxblood stamps
export const K = {
  room: "linear-gradient(180deg, #1b1f1c 0%, #12150f 100%)",
  plate: "#242a24",
  plateEdge: "#4a5244",
  gear: "#8c6d3f",
  gearLight: "#c2a061",
  gearDeep: "#5f4a2a",
  dial: "#efe9d4",
  dialInk: "#26211a",
  inkSoft: "#a8a290",
  cream: "#f3eedd",
  oxblood: "#8a3a34",
  oxbloodLight: "#c26a5c",
  pass: "#5f7040",
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

// 齿轮：描边齿圈
export const Gear: React.FC<{
  size: number;
  teeth?: number;
  color?: string;
  rotate?: number;
  style?: React.CSSProperties;
  center?: React.ReactNode;
}> = ({ size, teeth = 10, color = "#8c6d3f", rotate = 0, style, center }) => {
  const spokes = [];
  for (let i = 0; i < teeth; i++) {
    spokes.push(
      <div
        key={i}
        style={{
          position: "absolute",
          top: -size * 0.08,
          left: "50%",
          width: size * 0.14,
          height: size * 0.16,
          marginLeft: -(size * 0.07),
          background: color,
          transformOrigin: `50% ${size / 2 + size * 0.08}px`,
          transform: `rotate(${(360 / teeth) * i}deg)`,
          borderRadius: 1,
        }}
      />
    );
  }
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${size * 0.09}px solid ${color}`,
        background: "rgba(38,33,26,.35)",
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 6px 18px rgba(0,0,0,.5), inset 0 0 14px rgba(194,160,97,.18)",
        ...style,
      }}
    >
      {spokes}
      {center && (
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>{center}</div>
      )}
    </div>
  );
};

export const TribunalShell: React.FC<{
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
        background: K.room,
        color: K.cream,
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(140,109,63,.05) 0 2px, transparent 2px 52px)," +
          "radial-gradient(circle at 10% 6%, rgba(194,160,97,.10), transparent 26%)",
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
          borderBottom: `3px solid ${K.gear}`,
        }}
      >
        <Gear size={58} teeth={9} color={K.gear} rotate={f * 0.6} center={<span style={{ fontSize: 18, fontWeight: 950, color: K.gearLight, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>{code}</span>} />
        <div>
          <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: K.cream }}>
            {title}
          </h1>
          <div style={{ fontSize: 19, fontWeight: 800, color: K.inkSoft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
            {subtitle}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 16, fontWeight: 900, letterSpacing: 3, color: K.inkSoft, fontFamily: "var(--inkloom-animation-label, sans-serif)", opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }) }}>
          JUDGMENT & EXECUTION · CLOCKWORK TRIBUNAL
        </div>
      </header>
      <main style={{ position: "absolute", left: 60, right: 60, top: 164, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </main>
    </AbsoluteFill>
  );
};

// 羊皮纸表盘卡
export const DialCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, style, ...rest }) => (
  <div
    {...rest}
    style={{
      background: `linear-gradient(170deg, ${K.dial} 0%, #e2dac0 100%)`,
      color: K.dialInk,
      borderRadius: 10,
      boxShadow: "0 8px 22px rgba(0,0,0,.5), inset 0 0 0 2px rgba(140,109,63,.35)",
      padding: "16px 20px",
      ...style,
    }}
  >
    {children}
  </div>
);

// 判词印
export const VerdictStamp: React.FC<{
  label: string;
  tone?: string;
  delay?: number;
  rotation?: number;
}> = ({ label, tone = K.oxblood, delay = 0, rotation = -3 }) => {
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
        border: `3px double ${tone}`,
        color: tone,
        fontSize: 21,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        letterSpacing: 2,
        borderRadius: 6,
        background: "rgba(18,21,15,.75)",
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
      }}
    >
      {label}
    </span>
  );
};
