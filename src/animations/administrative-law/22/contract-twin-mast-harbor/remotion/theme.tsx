import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Contract twin-mast harbor: deep harbor blue night, dock-lantern gold, sail cream cards, dual-mast motif
export const H = {
  harbor: "linear-gradient(180deg, #0d1f2e 0%, #091522 100%)",
  deck: "#12293b",
  sail: "#f3ecd9",
  sailEdge: "rgba(74,58,34,.5)",
  ink: "#26211a",
  inkSoft: "#5c5347",
  dockGold: "#c9973f",
  dockGoldLight: "#e4bd6b",
  mastAdmin: "#3f8f8b",
  mastContract: "#c97a5c",
  cream: "#f5efdf",
  soft: "#8aa0ad",
  rope: "rgba(201,151,63,.35)",
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

export const HarborShell: React.FC<{
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
        background: H.harbor,
        color: H.cream,
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle at 8% 90%, rgba(63,143,139,.10), transparent 26%)," +
          "radial-gradient(circle at 92% 90%, rgba(201,122,92,.10), transparent 26%)," +
          "repeating-linear-gradient(0deg, rgba(243,236,217,.03) 0 2px, transparent 2px 48px)",
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
          borderBottom: `3px solid ${H.dockGold}`,
        }}
      >
        <div
          style={{
            width: 156,
            height: 72,
            background: `linear-gradient(180deg, ${H.dockGoldLight} 0%, ${H.dockGold} 100%)`,
            color: "#1d2340",
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 6,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          泊位 {code}
        </div>
        <div>
          <h1 className="font-animation-title" style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: H.cream }}>
            {title}
          </h1>
          <div style={{ fontSize: 19, fontWeight: 800, color: H.soft, letterSpacing: 2, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>
            {subtitle}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 16, fontWeight: 900, letterSpacing: 3, color: H.soft, fontFamily: "var(--inkloom-animation-label, sans-serif)", opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }) }}>
          ADMINISTRATIVE AGREEMENT · TWIN-MAST HARBOR
        </div>
      </header>
      <main style={{ position: "absolute", left: 60, right: 60, top: 164, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </main>
    </AbsoluteFill>
  );
};

// 帆布卡片
export const SailCard: React.FC<{
  children: React.ReactNode;
  edge?: string;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, edge = H.sailEdge, style, ...rest }) => (
  <div
    {...rest}
    style={{
      background: `linear-gradient(170deg, ${H.sail} 0%, #e9e0c8 100%)`,
      color: H.ink,
      border: `2.5px solid ${edge}`,
      borderRadius: 6,
      boxShadow: "0 8px 20px rgba(0,0,0,.45)",
      padding: "13px 17px",
      overflowWrap: "anywhere",
      ...style,
    }}
  >
    {children}
  </div>
);

// 缆绳边框面板（深色底）
export const DockPanel: React.FC<{
  children: React.ReactNode;
  edge?: string;
  tone?: string;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, edge = H.dockGold, tone, style, ...rest }) => (
  <div
    {...rest}
    style={{
      background: tone || H.deck,
      border: `2.5px solid ${edge}`,
      borderRadius: 10,
      boxShadow: "0 8px 22px rgba(0,0,0,.5)",
      padding: "15px 20px",
      overflowWrap: "anywhere",
      ...style,
    }}
  >
    {children}
  </div>
);
