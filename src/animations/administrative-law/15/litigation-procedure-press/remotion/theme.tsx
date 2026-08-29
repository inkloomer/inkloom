import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Movable-type press room: charcoal walls, lead-steel type sorts, cream proofs, print-red roller ink
export const T = {
  room: "linear-gradient(180deg, #17191f 0%, #101218 100%)",
  frame: "rgba(122, 134, 150, 0.28)",
  lead: "#8d97a5",
  leadDeep: "#565e6a",
  proof: "#efe8d6",
  proofEdge: "rgba(38, 33, 26, 0.55)",
  printInk: "#1d1f24",
  printRed: "#b5432f",
  printRedDeep: "#8a2f22",
  steelText: "#c3ccd8",
  soft: "#8792a1",
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

export const PressShell: React.FC<{
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
        background: T.room,
        color: T.steelText,
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(122,134,150,.06) 0 2px, transparent 2px 54px)," +
          "radial-gradient(circle at 86% 10%, rgba(181,67,47,.12), transparent 26%)",
      }}
    >
      <header
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          top: 32,
          height: 108,
          display: "flex",
          alignItems: "center",
          gap: 22,
          borderBottom: `3px solid ${T.frame}`,
        }}
      >
        <div
          style={{
            width: 158,
            height: 74,
            background: T.printRed,
            color: T.proof,
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 6,
            rotate: "-1.5deg",
            fontFamily: "var(--inkloom-animation-mono, monospace)",
            boxShadow: "0 4px 14px rgba(181,67,47,.35)",
          }}
        >
          排字 {code}
        </div>
        <div>
          <h1
            className="font-animation-title"
            style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: T.proof }}
          >
            {title}
          </h1>
          <div
            style={{
              fontSize: 19,
              fontWeight: 800,
              color: T.soft,
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
            color: T.soft,
            fontFamily: "var(--inkloom-animation-label, sans-serif)",
          }}
        >
          ADMINISTRATIVE PROCEDURE · TYPE PRESS
        </div>
      </header>
      <main
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          top: 166,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
        }}
      >
        {children}
      </main>
      {/* 红墨滚筒条 */}
      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 150,
          height: 6,
          borderRadius: 3,
          background: `linear-gradient(90deg, ${T.printRed} 0%, ${T.printRedDeep} 55%, ${T.printRed} 100%)`,
          opacity: interpolate(f, [0, 30], [0.25, 1], { extrapolateRight: "clamp" }),
        }}
      />
    </AbsoluteFill>
  );
};

// 铅字块：金属活字
export const TypeSort: React.FC<{
  label: string;
  size?: number;
  tone?: "lead" | "red" | "cream";
  style?: React.CSSProperties;
}> = ({ label, size = 54, tone = "lead", style }) => {
  const bg =
    tone === "red"
      ? `linear-gradient(150deg, ${T.printRed} 0%, ${T.printRedDeep} 100%)`
      : tone === "cream"
        ? `linear-gradient(150deg, ${T.proof} 0%, #d9d0b8 100%)`
        : `linear-gradient(150deg, ${T.lead} 0%, ${T.leadDeep} 100%)`;
  const ink = tone === "cream" ? T.printInk : tone === "red" ? T.proof : "#12141a";
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 7,
        background: bg,
        border: "1px solid rgba(0,0,0,0.45)",
        boxShadow: "inset 0 2px 0 rgba(255,255,255,.25), 0 5px 12px rgba(0,0,0,.5)",
        display: "grid",
        placeItems: "center",
        fontSize: size * 0.42,
        fontWeight: 950,
        color: ink,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        ...style,
      }}
    >
      {label}
    </div>
  );
};

// 清样纸：印好的校样
export const ProofCard: React.FC<{
  children: React.ReactNode;
  edge?: string;
  style?: React.CSSProperties;
  mark?: boolean;
}> = ({ children, edge = "rgba(38,33,26,0.55)", style, mark = true }) => (
  <div
    style={{
      position: "relative",
      background: T.proof,
      color: T.printInk,
      border: `2px solid ${edge}`,
      borderRadius: 4,
      boxShadow: "0 10px 24px rgba(0,0,0,.5)",
      ...style,
    }}
  >
    {mark && (
      <>
        <div style={{ position: "absolute", top: 6, left: 8, width: 10, height: 10, borderLeft: "2px solid rgba(29,31,36,.5)", borderTop: "2px solid rgba(29,31,36,.5)" }} />
        <div style={{ position: "absolute", top: 6, right: 8, width: 10, height: 10, borderRight: "2px solid rgba(29,31,36,.5)", borderTop: "2px solid rgba(29,31,36,.5)" }} />
        <div style={{ position: "absolute", bottom: 6, left: 8, width: 10, height: 10, borderLeft: "2px solid rgba(29,31,36,.5)", borderBottom: "2px solid rgba(29,31,36,.5)" }} />
        <div style={{ position: "absolute", bottom: 6, right: 8, width: 10, height: 10, borderRight: "2px solid rgba(29,31,36,.5)", borderBottom: "2px solid rgba(29,31,36,.5)" }} />
      </>
    )}
    {children}
  </div>
);

// 红墨章
export const RedInkStamp: React.FC<{
  label: string;
  delay?: number;
  rotation?: number;
  tone?: string;
}> = ({ label, delay = 0, rotation = -3, tone = T.printRed }) => {
  const f = useCurrentFrame();
  const press = interpolate(f, [delay, delay + 10], [1.55, 1], {
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
        padding: "7px 16px",
        border: `3px double ${tone}`,
        color: tone,
        fontSize: 22,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        letterSpacing: 2,
        borderRadius: 6,
        background: "rgba(16,18,24,0.75)",
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
      }}
    >
      {label}
    </span>
  );
};
