import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const T = {
  W: "#5b3a24", // 深胡桃木台
  K: "#2b1d12", // 墨字
  P: "#f1e5c8", // 账页米色
  G: "#c9a04a", // 黄铜框
  B: "#c9803a", // 琥珀算珠
  S: "#b23a24", // 朱砂结清印
  D: "#a08a66", // 暗字
  V: "#7d9a6f", // 认可绿
  R: "#9c4a33", // 路线红褐
  C: "#3a2c1c", // 台面深色面板
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

export const AbacusShell: React.FC<{
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
        backgroundColor: T.C,
        backgroundImage:
          "radial-gradient(1100px 560px at 15% -8%, rgba(201,160,74,0.14), transparent 60%), radial-gradient(900px 520px at 108% 112%, rgba(43,29,18,0.55), transparent 58%)",
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
          borderBottom: "3px double rgba(201,160,74,0.6)",
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
            boxShadow: "0 3px 0 rgba(43,29,18,0.5)",
          }}
        >
          {sceneNo}
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 44,
            letterSpacing: 3,
            color: "#f4e9cf",
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
            color: "rgba(244,233,207,0.75)",
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

/** 账页纸面板 */
export const PaperPanel: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => (
  <div
    style={{
      background: `linear-gradient(180deg, ${T.P}, #e6d6ae)`,
      border: `2px solid ${T.W}`,
      borderRadius: 10,
      boxShadow: "0 4px 0 rgba(43,29,18,0.4)",
      padding: "14px 18px",
      position: "relative",
      ...useEnterStyle(delay),
      ...style,
    }}
  >
    {children}
  </div>
);

/** 算珠行（一根黄铜档 + 标题珠 + 说明） */
export const BeadRow: React.FC<{
  label: string;
  tone?: "amber" | "seal";
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ label, tone = "amber", delay = 0, children, style }) => (
  <div
    style={{
      display: "flex",
      alignItems: "stretch",
      gap: 14,
      position: "relative",
      ...useEnterStyle(delay),
      ...style,
    }}
  >
    <div
      style={{
        minWidth: 148,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
        background: tone === "amber" ? T.B : T.S,
        color: "#f8efdb",
        fontFamily: "var(--inkloom-animation-title, serif)",
        fontSize: 21,
        fontWeight: 700,
        letterSpacing: 2,
        border: "3px solid rgba(201,160,74,0.85)",
        boxShadow: "inset 0 -6px 0 rgba(43,29,18,0.3)",
        padding: "8px 12px",
      }}
    >
      {label}
    </div>
    <div
      style={{
        flex: 1,
        minWidth: 0,
        background: "rgba(241,229,200,0.94)",
        border: `2px solid ${T.W}`,
        borderLeft: `6px solid ${tone === "amber" ? T.G : T.S}`,
        borderRadius: 8,
        padding: "10px 16px",
      }}
    >
      {children}
    </div>
  </div>
);

export const PanelTitle: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = T.K,
}) => (
  <div
    style={{
      fontFamily: "var(--inkloom-animation-title, serif)",
      fontSize: 25,
      fontWeight: 700,
      letterSpacing: 2,
      color,
      marginBottom: 6,
    }}
  >
    {children}
  </div>
);

export const PanelBody: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 18,
}) => (
  <div style={{ fontSize: size, lineHeight: 1.5, color: T.K, opacity: 0.94 }}>{children}</div>
);

/** 结清朱印 */
export const SettleSeal: React.FC<{ text: string; delay?: number; size?: number }> = ({
  text,
  delay = 0,
  size = 20,
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
        letterSpacing: 3,
        padding: "5px 12px",
        borderRadius: 6,
        background: "rgba(178,58,36,0.08)",
        opacity: interpolate(f, [delay, delay + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        transform: `rotate(-7deg) scale(${interpolate(f, [delay, delay + 16], [1.6, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        })})`,
      }}
    >
      {text}
    </div>
  );
};

/** 黄铜档线 */
export const RodRule: React.FC<{ delay?: number; style?: React.CSSProperties }> = ({
  delay = 0,
  style,
}) => (
  <div
    style={{
      height: 4,
      background: `linear-gradient(90deg, transparent, ${T.G} 12%, ${T.G} 88%, transparent)`,
      borderRadius: 2,
      opacity: 0.85,
      ...useEnterStyle(delay, 6),
      ...style,
    }}
  />
);

/** 台签 chip */
export const DeskChip: React.FC<{ children: React.ReactNode; tone?: "ink" | "brass" | "seal" }> = ({
  children,
  tone = "ink",
}) => {
  const map = {
    ink: { bg: "rgba(43,29,18,0.88)", fg: "#f4e9cf" },
    brass: { bg: T.G, fg: "#2b1d12" },
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
