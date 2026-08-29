import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Glass vitrine museum: ivory gallery, glass panes with reflection streaks, black frames, brass plaques, velvet plinths
export const V = {
  wall: "linear-gradient(180deg, #f0eadc 0%, #e6dec9 100%)",
  glass: "rgba(196, 218, 232, 0.30)",
  glassEdge: "rgba(58, 63, 69, 0.75)",
  frame: "#3a3f45",
  brass: "#8a6d2f",
  brassLight: "#c5a55a",
  ink: "#26211a",
  soft: "#6d6353",
  velvet: "#5d3a34",
  cream: "#f7f3e6",
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

export const GalleryShell: React.FC<{
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
        backgroundColor: "#efe9dc",
        color: V.ink,
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle at 88% 8%, rgba(138,109,47,.08), transparent 24%)," +
          "linear-gradient(rgba(58,63,69,.045) 1px, transparent 1px)",
        backgroundSize: "auto, 96px 96px",
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
          borderBottom: `3px solid ${V.frame}`,
        }}
      >
        <div
          style={{
            width: 156,
            height: 72,
            background: V.brass,
            color: V.cream,
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 4,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          展厅 {code}
        </div>
        <div>
          <h1
            className="font-animation-title"
            style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: V.ink }}
          >
            {title}
          </h1>
          <div
            style={{
              fontSize: 19,
              fontWeight: 800,
              color: V.soft,
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
            color: V.soft,
            fontFamily: "var(--inkloom-animation-label, sans-serif)",
            opacity: interpolate(f, [0, 24], [0.4, 1], { extrapolateRight: "clamp" }),
          }}
        >
          ADMINISTRATIVE EVIDENCE · GLASS VITRINE MUSEUM
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

// 玻璃展柜：黑金属框 + 玻璃反光斜线 + 天鹅绒衬底
export const Vitrine: React.FC<{
  children: React.ReactNode;
  edge?: string;
  style?: React.CSSProperties;
  glow?: boolean;
}> = ({ children, edge = V.frame, style, glow = false }) => {
  const f = useCurrentFrame();
  const shine = interpolate(f, [10, 55], [0, 1], { extrapolateRight: "clamp" });
  return (
    <div
      style={{
        position: "relative",
        border: `3px solid ${edge}`,
        borderRadius: 6,
        background: `linear-gradient(160deg, ${V.glass} 0%, rgba(250,248,240,0.92) 38%, ${V.glass} 100%)`,
        boxShadow: glow
          ? `0 0 0 6px rgba(138,109,47,0.14), 0 12px 26px rgba(38,33,26,.22)`
          : "0 10px 24px rgba(38,33,26,.18)",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(115deg, transparent 30%, rgba(214,232,242,${0.5 * shine}) 44%, transparent 58%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
};

// 黄铜铭牌
export const BrassPlaque: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <span
    style={{
      display: "inline-block",
      padding: "5px 16px",
      background: `linear-gradient(180deg, ${V.brassLight} 0%, ${V.brass} 100%)`,
      color: V.cream,
      fontSize: 20,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label, sans-serif)",
      letterSpacing: 2,
      borderRadius: 3,
      border: "1px solid rgba(38,33,26,.4)",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </span>
);

// 展签卡（墨字）
export const ExhibitCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  "data-final-knowledge"?: string;
}> = ({ children, style, ...rest }) => (
  <div {...rest} style={{ position: "relative", background: V.cream, border: "2px solid rgba(38,33,26,.35)", borderRadius: 4, padding: "10px 14px", ...style }}>
    {children}
  </div>
);
