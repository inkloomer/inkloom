import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Darkroom studio: near-black walls, red safelight glow, amber tray light, cream prints
export const D = {
  room: "linear-gradient(180deg, #131110 0%, #0c0a09 100%)",
  safelight: "rgba(176,58,48,.14)",
  print: "#f1ead6",
  printEdge: "rgba(58,50,38,.55)",
  ink: "#26211a",
  inkSoft: "#5c5347",
  red: "#b0402e",
  redGlow: "rgba(176,64,46,.35)",
  amber: "#c99a3e",
  cream: "#f3eedd",
  soft: "#9a8f7c",
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

export const DarkroomShell: React.FC<{
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
        background: D.room,
        color: D.cream,
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle at 50% -6%, rgba(176,64,46,.20) 0 150px, transparent 400px)," +
          "radial-gradient(circle at 90% 90%, rgba(201,154,62,.08), transparent 26%)",
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
          borderBottom: `3px solid ${D.red}`,
        }}
      >
        <div
          style={{
            width: 156,
            height: 72,
            border: `3px solid ${D.red}`,
            color: D.red,
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 6,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
            boxShadow: `inset 0 0 18px ${D.redGlow}`,
          }}
        >
          暗房 {code}
        </div>
        <div>
          <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: D.cream }}>
            {title}
          </h1>
          <div style={{ fontSize: 19, fontWeight: 800, color: D.soft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
            {subtitle}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 16, fontWeight: 900, letterSpacing: 3, color: D.soft, fontFamily: "var(--inkloom-animation-label, sans-serif)", opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }) }}>
          INFO DISCLOSURE · DARKROOM STUDIO
        </div>
      </header>
      <main style={{ position: "absolute", left: 60, right: 60, top: 164, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </main>
    </AbsoluteFill>
  );
};

// 相纸
export const Print: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, style, ...rest }) => (
  <div
    {...rest}
    style={{
      background: `linear-gradient(170deg, ${D.print} 0%, #e6dcc2 100%)`,
      color: D.ink,
      border: `2px solid ${D.printEdge}`,
      borderRadius: 4,
      boxShadow: "0 8px 20px rgba(0,0,0,.5)",
      padding: "12px 16px",
      ...style,
    }}
  >
    {children}
  </div>
);

// 显影盘（红/琥珀光槽）
export const Tray: React.FC<{
  title: string;
  tone?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ title, tone = D.red, children, style }) => (
  <div
    style={{
      position: "relative",
      border: `2.5px solid ${tone}88`,
      borderRadius: 12,
      background: `linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.15) 100%)`,
      boxShadow: `0 0 26px ${tone}22, inset 0 0 30px ${tone}14`,
      padding: "16px 20px",
      ...style,
    }}
  >
    <div
      style={{
        display: "inline-block",
        padding: "4px 14px",
        background: tone,
        color: "#f3eedd",
        fontSize: 20,
        fontWeight: 950,
        borderRadius: 4,
        marginBottom: 10,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
      }}
    >
      {title}
    </div>
    {children}
  </div>
);


// 显影定妆印
export const VerdictStamp: React.FC<{
  label: string;
  tone?: string;
  delay?: number;
  rotation?: number;
}> = ({ label, tone = D.red, delay = 0, rotation = -2 }) => {
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
        color: "#f3eedd",
        fontSize: 20,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        letterSpacing: 2,
        borderRadius: 5,
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: "0 4px 12px rgba(0,0,0,.4)",
      }}
    >
      {label}
    </span>
  );
};
