import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// 百子药柜索引：深木柜墙、宣纸药签、朱砂印、靛青类目标签、铜质戥秤刻度
export const T = {
  wall: "linear-gradient(180deg, #2a1c13 0%, #1b120b 100%)",
  wood: "#4a3222",
  woodEdge: "#7a5639",
  drawer: "linear-gradient(180deg, #5e4029 0%, #3d2919 100%)",
  drawerDeep: "linear-gradient(180deg, #3d2919 0%, #291a10 100%)",
  paper: "#f3ead7",
  paperSoft: "#e3d7bd",
  paperEdge: "rgba(36,28,21,0.5)",
  ink: "#241c15",
  inkSoft: "#5a4a3a",
  cinnabar: "#b23a2f",
  cinnabarDeep: "#8a2a21",
  indigo: "#35617d",
  indigoDeep: "#23445a",
  mugwort: "#6d8f5e",
  mugwortDeep: "#4e6b43",
  brass: "#c99a4e",
  brassDeep: "#9a7130",
  soft: "#a8907a",
  text: "#efe3cd",
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

/** 药柜外壳：木墙、顶楣格号牌、铜质横梁 */
export const CabinetShell: React.FC<{
  code: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: React.ReactNode;
}> = ({ code, title, subtitle, eyebrow = "KEY DETAILS · APOTHECARY INDEX", children }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      className="font-animation-body"
      style={{
        background: T.wall,
        color: T.text,
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(180deg, rgba(201,154,78,.04) 0 1px, transparent 1px 52px)," +
          "repeating-linear-gradient(90deg, rgba(122,86,57,.07) 0 2px, transparent 2px 88px)," +
          "radial-gradient(circle at 88% 8%, rgba(178,58,47,.14), transparent 26%)",
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
          borderBottom: `3px solid ${T.brassDeep}`,
        }}
      >
        <div
          style={{
            width: 158,
            height: 74,
            background: `linear-gradient(160deg, ${T.cinnabar} 0%, ${T.cinnabarDeep} 100%)`,
            color: T.paper,
            display: "grid",
            placeItems: "center",
            fontSize: 21,
            fontWeight: 950,
            letterSpacing: 2,
            borderRadius: 5,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
            boxShadow: `0 4px 14px rgba(178,58,47,.35), inset 0 0 0 2px ${T.brass}`,
          }}
        >
          药柜 {code}
        </div>
        <div>
          <h1
            className="font-animation-title"
            style={{ fontSize: 44, lineHeight: 1.08, margin: 0, color: T.paper }}
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
            color: T.brass,
            fontFamily: "var(--inkloom-animation-label, sans-serif)",
          }}
        >
          {eyebrow}
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
      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: PLAYER_CONTROL_SAFE_BOTTOM - 150,
          height: 8,
          borderRadius: 4,
          background: `linear-gradient(90deg, ${T.brassDeep} 0%, ${T.brass} 50%, ${T.brassDeep} 100%)`,
          opacity: interpolate(f, [0, 30], [0.3, 1], { extrapolateRight: "clamp" }),
        }}
      />
    </AbsoluteFill>
  );
};

/** 抽屉面板：木框 + 宣纸类目标签 + 铜环拉手 */
export const DrawerFace: React.FC<{
  label: string;
  tone?: "cinnabar" | "indigo" | "mugwort" | "brass";
  style?: React.CSSProperties;
  width?: number;
}> = ({ label, tone = "cinnabar", style, width }) => {
  const accent =
    tone === "cinnabar"
      ? T.cinnabar
      : tone === "indigo"
        ? T.indigo
        : tone === "mugwort"
          ? T.mugwort
          : T.brassDeep;
  return (
    <div
      style={{
        background: T.drawer,
        border: `2px solid ${T.woodEdge}`,
        borderRadius: 4,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "inset 0 2px 0 rgba(201,154,78,.18), 0 6px 16px rgba(0,0,0,.45)",
        width,
        ...style,
      }}
    >
      <span
        style={{
          background: T.paper,
          color: T.ink,
          fontSize: 28,
          fontWeight: 950,
          padding: "6px 16px",
          borderRadius: 3,
          boxShadow: `inset 0 0 0 2px ${accent}`,
          whiteSpace: "nowrap",
          fontFamily: "var(--inkloom-animation-title, sans-serif)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          marginLeft: "auto",
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `4px solid ${T.brass}`,
          flexShrink: 0,
        }}
      />
    </div>
  );
};

/** 宣纸药签：承载一条可检索的细节条目 */
export const HerbSlip: React.FC<
  {
    children: React.ReactNode;
    style?: React.CSSProperties;
    tone?: string;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, style, tone = T.paper, ...rest }) => (
  <div
    {...rest}
    style={{
      background: tone,
      color: T.ink,
      border: `1px solid ${T.paperEdge}`,
      borderRadius: 3,
      boxShadow: "0 4px 12px rgba(0,0,0,.4)",
      padding: "9px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style,
    }}
  >
    {children}
  </div>
);

/** 朱砂印：正式结论、禁止性规定、生效标记 */
export const CinnabarSeal: React.FC<{
  label: string;
  delay?: number;
  rotation?: number;
  tone?: string;
}> = ({ label, delay = 0, rotation = -2, tone = T.cinnabar }) => {
  const f = useCurrentFrame();
  const press = interpolate(f, [delay, delay + 12], [1.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const opacity = interpolate(f, [delay, delay + 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 18px",
        border: `3px double ${tone}`,
        color: tone,
        fontSize: 23,
        fontWeight: 950,
        letterSpacing: 2,
        borderRadius: 5,
        background: "rgba(27,18,11,0.78)",
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
};

/** 靛青类目牌：一个分组的索引标签 */
export const IndexTag: React.FC<{
  label: string;
  tone?: string;
  style?: React.CSSProperties;
}> = ({ label, tone = T.indigo, style }) => (
  <span
    style={{
      display: "inline-block",
      background: tone,
      color: T.paper,
      fontSize: 24,
      fontWeight: 950,
      letterSpacing: 2,
      padding: "5px 16px",
      borderRadius: 3,
      fontFamily: "var(--inkloom-animation-title, sans-serif)",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {label}
  </span>
);

/** 艾草青细划线：标注决定性条件或需检索的关键短语 */
export const ThinUnderline: React.FC<{
  children: React.ReactNode;
  tone?: string;
  style?: React.CSSProperties;
}> = ({ children, tone = T.mugwort, style }) => (
  <span
    style={{
      display: "inline-block",
      borderBottom: `2px solid ${tone}`,
      paddingBottom: 2,
      fontWeight: 950,
      ...style,
    }}
  >
    {children}
  </span>
);

/** 铜质戥秤横梁：把数字读数落在刻度位上 */
export const BrassBeam: React.FC<{
  width: number;
  ticks?: number;
  style?: React.CSSProperties;
}> = ({ width, ticks = 12, style }) => (
  <div
    style={{
      position: "relative",
      width,
      height: 14,
      borderRadius: 7,
      background: `linear-gradient(180deg, ${T.brass} 0%, ${T.brassDeep} 100%)`,
      boxShadow: "0 3px 10px rgba(0,0,0,.45)",
      ...style,
    }}
  >
    {Array.from({ length: ticks }, (_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${((i + 0.5) / ticks) * 100}%`,
          top: 14,
          width: i % 3 === 0 ? 3 : 2,
          height: i % 3 === 0 ? 14 : 9,
          background: i % 3 === 0 ? T.brass : "rgba(201,154,78,.55)",
        }}
      />
    ))}
    <span
      style={{
        position: "absolute",
        left: 0,
        top: -9,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: T.brass,
      }}
    />
    <span
      style={{
        position: "absolute",
        right: 0,
        top: -9,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: T.brass,
      }}
    />
  </div>
);
