import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const T = {
  T: "#d8c193", // 竹简浅褐
  K: "#2e2415", // 墨字
  O: "#3d5240", // 修复堂深绿垫
  P: "#efe3c3", // 淡简纸
  S: "#b23a24", // 朱砂修复印
  L: "#8a6f45", // 编绳
  D: "#9a8763", // 暗字
  H: "#c9882d", // 琥珀高亮
  V: "#5d8a5f", // 认可绿
  R: "#9c4a33", // 路线红褐
};

export const useEnterStyle = (delay = 0, distance = 14): React.CSSProperties => {
  const f = useCurrentFrame();
  return {
    opacity: interpolate(f, [delay, delay + 14], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(f, [delay, delay + 22], [distance, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  };
};

export const Enter: React.FC<{
  delay?: number;
  distance?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>> = ({ delay = 0, distance = 14, style, children, ...rest }) => (
  <div {...rest} style={{ ...useEnterStyle(delay, distance), ...style }}>{children}</div>
);

export const BambooShell: React.FC<{
  sceneNo: string;
  sceneTitle: string;
  sceneTag: string;
  children: React.ReactNode;
}> = ({ sceneNo, sceneTitle, sceneTag, children }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: T.O,
        backgroundImage:
          "radial-gradient(1200px 600px at 18% -10%, rgba(216,193,147,0.16), transparent 60%), radial-gradient(900px 500px at 105% 110%, rgba(46,36,21,0.4), transparent 55%)",
        padding: "0 96px",
        color: T.K,
      }}
    >
      <header
        style={{
          position: "absolute",
          top: 44,
          left: 96,
          right: 96,
          display: "flex",
          alignItems: "center",
          gap: 22,
          borderBottom: "3px double rgba(216,193,147,0.55)",
          paddingBottom: 16,
          opacity: interpolate(f, [0, 18], [0.4, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: "var(--inkloom-animation-title, serif)",
            background: T.S,
            color: "#f6ecd6",
            padding: "8px 14px",
            borderRadius: 6,
            fontSize: 26,
            letterSpacing: 2,
            transform: "rotate(-4deg)",
            boxShadow: "0 3px 0 rgba(46,36,21,0.45)",
          }}
        >
          {sceneNo}
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 44,
            letterSpacing: 3,
            color: "#f2e8cf",
            fontFamily: "var(--inkloom-animation-title, serif)",
            fontWeight: 700,
          }}
        >
          {sceneTitle}
        </h1>
        <div
          style={{
            marginLeft: "auto",
            fontFamily: "var(--inkloom-animation-mono, monospace)",
            fontSize: 20,
            letterSpacing: 2,
            color: "rgba(242,232,207,0.75)",
          }}
        >
          {sceneTag}
        </div>
      </header>
      <main
        style={{
          position: "absolute",
          top: 172,
          left: 96,
          right: 96,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM,
        }}
      >
        {children}
      </main>
    </AbsoluteFill>
  );
};

/** 一枚竹简条 */
export const Slip: React.FC<{
  children: React.ReactNode;
  width?: number | string;
  delay?: number;
  tone?: "tan" | "pale";
  style?: React.CSSProperties;
}> = ({ children, width = "auto", delay = 0, tone = "tan", style }) => (
  <div
    style={{
      width,
      background:
        tone === "tan"
          ? `linear-gradient(180deg, ${T.T}, #cdb686)`
          : `linear-gradient(180deg, ${T.P}, #e2d3ab)`,
      border: `2px solid ${T.L}`,
      borderLeft: `7px solid ${T.L}`,
      borderRadius: 8,
      boxShadow: "0 4px 0 rgba(46,36,21,0.35)",
      padding: "16px 20px 16px 26px",
      position: "relative",
      ...useEnterStyle(delay),
      ...style,
    }}
  >
    <span
      aria-hidden
      style={{
        position: "absolute",
        left: -3,
        top: 10,
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: T.O,
        border: `2px solid ${T.L}`,
      }}
    />
    {children}
  </div>
);

/** 简条标题 */
export const SlipTitle: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = T.K,
}) => (
  <div
    style={{
      fontFamily: "var(--inkloom-animation-title, serif)",
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: 2,
      color,
      marginBottom: 6,
    }}
  >
    {children}
  </div>
);

export const SlipBody: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 19,
}) => (
  <div style={{ fontSize: size, lineHeight: 1.5, color: T.K, opacity: 0.92 }}>{children}</div>
);

/** 朱砂印 */
export const SealMark: React.FC<{ text: string; delay?: number; size?: number }> = ({
  text,
  delay = 0,
  size = 22,
}) => {
  const f = useCurrentFrame();
  return (
    <div
      style={{
        display: "inline-block",
        border: `3px solid ${T.S}`,
        color: T.S,
        fontFamily: "var(--inkloom-animation-title, serif)",
        fontSize: size,
        fontWeight: 700,
        letterSpacing: 4,
        padding: "4px 10px",
        borderRadius: 6,
        opacity: interpolate(f, [delay, delay + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        transform: `rotate(-8deg) scale(${interpolate(f, [delay, delay + 16], [1.6, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        })})`,
        background: "rgba(178,58,36,0.08)",
      }}
    >
      {text}
    </div>
  );
};

/** 编绳横线 */
export const CordRule: React.FC<{ delay?: number; style?: React.CSSProperties }> = ({
  delay = 0,
  style,
}) => (
  <div
    style={{
      height: 4,
      background: `repeating-linear-gradient(90deg, ${T.L}, ${T.L} 26px, transparent 26px, transparent 34px)`,
      borderRadius: 2,
      opacity: 0.8,
      ...useEnterStyle(delay, 6),
      ...style,
    }}
  />
);

/** 窄标签 chip */
export const TagChip: React.FC<{ children: React.ReactNode; tone?: "ink" | "amber" | "seal" }> = ({
  children,
  tone = "ink",
}) => {
  const map = {
    ink: { bg: "rgba(46,36,21,0.85)", fg: "#f2e8cf" },
    amber: { bg: T.H, fg: "#2e2415" },
    seal: { bg: T.S, fg: "#f6ecd6" },
  } as const;
  const c = map[tone];
  return (
    <span
      style={{
        display: "inline-block",
        background: c.bg,
        color: c.fg,
        fontSize: 17,
        fontWeight: 700,
        padding: "3px 12px",
        borderRadius: 5,
        letterSpacing: 2,
        fontFamily: "var(--inkloom-animation-mono, monospace)",
      }}
    >
      {children}
    </span>
  );
};
