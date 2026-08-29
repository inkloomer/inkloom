import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

// Canal-lock waterway chart: pale nautical chart, teal waterways, slate lock gates
const W = {
  chart: "#e9f1f0",
  panel: "#f8fcfb",
  ink: "#1d3a3f",
  soft: "#567679",
  line: "#bcd4d2",
  waterDeep: "#1f6b7a",
  water: "#2e8797",
  waterLight: "#9ccfd4",
  lock: "#3c5a63",
  lockInk: "#24444c",
  free: "#2f7d5a",
  freeInk: "#1d5540",
  brick: "#c25b3a",
  brickInk: "#8a3a22",
  brass: "#8a6d2f",
  brassInk: "#5f4c1d",
  white: "#ffffff",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (f: number, d = 0, x = 0, y = 26) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `${interpolate(f, [d, d + 24], [x, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px ${interpolate(f, [d, d + 24], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px`,
});

const Shell = ({
  code,
  title,
  children,
}: {
  code: string;
  title: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      background: W.chart,
      color: W.ink,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 90% 6%,rgba(31,107,122,.10),transparent 26%)," +
        "radial-gradient(circle at 4% 94%,rgba(138,109,47,.10),transparent 24%)," +
        "repeating-radial-gradient(circle at 50% 120%,transparent 0 58px,rgba(31,107,122,.05) 58px 60px)",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 30,
        height: 110,
        display: "flex",
        alignItems: "center",
        gap: 22,
        borderBottom: `4px solid ${W.lock}`,
      }}
    >
      <div
        style={{
          width: 166,
          height: 76,
          border: `4px solid ${W.lock}`,
          backgroundColor: W.panel,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: W.lockInk,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-mono)",
        }}
      >
        航道 {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 45, lineHeight: 1.06, margin: 0, fontWeight: 900 }}
      >
        {title}
      </h1>
      <div
        style={{
          marginLeft: "auto",
          fontSize: 18,
          fontWeight: 950,
          letterSpacing: 3,
          color: W.soft,
          fontFamily: "var(--inkloom-animation-label)",
        }}
      >
        LINKAGE · CANAL LOCK CHART
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

// 水路带：渠道水体 + 闸门头
const Waterway = ({
  color = W.water,
  gate = W.lock,
  style,
}: {
  color?: string;
  gate?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      position: "relative",
      height: 16,
      borderRadius: 8,
      background: `linear-gradient(90deg,${gate} 0 64px,${color} 64px)`,
      boxShadow: `inset 0 3px 0 rgba(255,255,255,0.35)`,
      ...style,
    }}
  />
);

// 闸门图标：两扇对开闸板
const LockGateIcon = ({ color = W.lock, size = 30, style }: { color?: string; size?: number; style?: React.CSSProperties }) => (
  <div
    style={{
      width: size,
      height: size * 0.78,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      gap: 3,
      ...style,
    }}
  >
    <div
      style={{
        width: size * 0.4,
        height: size * 0.78,
        backgroundColor: color,
        clipPath: "polygon(0 0, 100% 22%, 100% 100%, 0 100%)",
      }}
    />
    <div
      style={{
        width: size * 0.4,
        height: size * 0.78,
        backgroundColor: color,
        clipPath: "polygon(0 22%, 100% 0, 100% 100%, 0 100%)",
      }}
    />
  </div>
);

const SignalCard = ({
  children,
  color = W.lock,
  style,
  ...rest
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
} & Record<string, string | undefined>) => (
  <div
    {...rest}
    style={{
      border: `3.5px solid ${color}`,
      background: W.panel,
      borderRadius: 14,
      padding: "14px 18px",
      boxShadow: `0 6px 0 ${color}22`,
      ...style,
    }}
  >
    {children}
  </div>
);

const Plate = ({
  children,
  color = W.lock,
  filled = true,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-block",
      padding: "5px 16px",
      backgroundColor: filled ? color : `${color}16`,
      border: `3px solid ${color}`,
      borderRadius: 8,
      color: filled ? W.white : color,
      fontSize: 22,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label)",
      letterSpacing: 2,
      ...style,
    }}
  >
    {children}
  </span>
);

export const ThreeModeOverviewScene = () => {
  /* Static audit inventory: data-final-knowledge="mode-free-choice" data-final-knowledge="mode-mandatory" data-final-knowledge="mode-final" data-final-knowledge="overview-exception" */
  const f = useCurrentFrame();
  const modes = [
    {
      label: "自由选择",
      color: W.free,
      sub: "复议或诉讼皆可 · 议后可诉 · 一经选择从一而终 · 不能同时进行",
      knowledge: "mode-free-choice",
    },
    {
      label: "复议前置",
      color: W.brick,
      sub: "必须先申请复议，不服复议决定再起诉（特定争议）",
      knowledge: "mode-mandatory",
    },
    {
      label: "复议终局",
      color: W.brass,
      sub: "复议决定即为最终决定，不可再诉",
      knowledge: "mode-final",
    },
  ] as const;
  return (
    <Shell code="01" title="三模式总览：自由选择、复议前置、复议终局">
      <div
        data-layout="source-basin-three-waterways"
        data-visual-anchor="flow-path"
        data-visual-grammar="dispute-source-basin-feeds-three-waterways,each-waterway-carries-one-linkage-mode-with-its-own-lock,exceptions-bypass-note-marks-the-free-pass-lane"
        data-text-treatments="label-block,chip,thin-underline"
        data-focal-rule="three-linkage-modes-between-review-and-litigation"
        data-focal-channels="spatial,connector,contrast"
        style={{ position: "absolute", inset: 16 }}
      >
        {/* 源头水柜：行政争议 */}
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 60,
            width: 260,
            height: 560,
            border: `4px solid ${W.lock}`,
            borderRadius: "18px 18px 90px 18px",
            background: `linear-gradient(180deg,${W.panel} 0 42%,${W.waterLight} 42% 100%)`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 4),
          }}
        >
          <div>
            <div className="font-animation-title" style={{ fontSize: 30, fontWeight: 950 }}>
              行政争议
            </div>
            <div style={{ fontSize: 21, fontWeight: 800, color: W.soft, marginTop: 10, lineHeight: 1.45 }}>
              行政复议与诉讼
              <br />
              如何衔接？
            </div>
          </div>
        </div>

        {modes.map((mode, index) => (
          <React.Fragment key={mode.label}>
            <div
              style={{
                position: "absolute",
                left: 300,
                top: 108 + index * 178,
                width: 118,
                height: 10,
                borderRadius: 5,
                background: `linear-gradient(90deg,${W.waterLight},${mode.color})`,
                ...enter(f, 10 + index * 12, -20, 0),
              }}
            />
            <LockGateIcon color={mode.color} style={{ position: "absolute", left: 418, top: 84 + index * 178, ...enter(f, 12 + index * 12) }} />
            <Waterway color={mode.color} gate={mode.color} style={{ position: "absolute", left: 452, top: 100 + index * 178, width: 1320, ...enter(f, 12 + index * 12, 0, 8) }} />
            <SignalCard
              color={mode.color}
              data-final-knowledge={mode.knowledge}
              style={{
                position: "absolute",
                left: 480,
                top: 132 + index * 178,
                width: 1290,
                minHeight: 118,
                ...enter(f, 18 + index * 12),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span
                  className="font-animation-title"
                  style={{ fontSize: 29, fontWeight: 950, color: mode.color, borderBottom: `4px solid ${mode.color}`, paddingBottom: 4, whiteSpace: "nowrap" }}
                >
                  {mode.label}
                </span>
                <span style={{ fontSize: 21.5, fontWeight: 850, lineHeight: 1.36, color: W.ink }}>{mode.sub}</span>
              </div>
            </SignalCard>
          </React.Fragment>
        ))}

        <div
          data-final-knowledge="overview-exception"
          style={{
            position: "absolute",
            left: 480,
            top: 640,
            width: 1290,
            textAlign: "center",
            ...enter(f, 58),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${W.free}`,
              borderRadius: 10,
              background: `${W.free}12`,
              padding: "9px 18px",
              fontSize: 22,
              fontWeight: 900,
              color: W.freeInk,
            }}
          >
            例外提示：处罚、强制、反倾销税三类可直接起诉（前置例外）
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const FreeChoiceTrackScene = () => {
  /* Static audit inventory: data-final-knowledge="free-choice-core" data-final-knowledge="choice-station-1" data-final-knowledge="choice-station-2" data-final-knowledge="no-parallel-rule" data-final-knowledge="ministry-level-rule" data-stateful-source="choice-barge" data-stateful-terminal="choice-barge" */
  const f = useCurrentFrame();
  const bargeX = interpolate(f, [24, 150], [-80, 356], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  return (
    <Shell code="02" title="自由选择：议后可诉，从一而终">
      <div
        data-layout="twin-channel-commitment-lock"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="a-dispute-barge-commits-to-exactly-one-of-two-channels,one-way-commitment-gate-locks-the-chosen-channel,no-parallel-sign-forbids-simultaneous-locking"
        data-text-treatments="label-block,external-negation,thin-underline"
        data-focal-rule="free-choice-locks-after-first-selection"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 14 }}
      >
        <div
          data-final-knowledge="free-choice-core"
          style={{ position: "absolute", left: 40, top: 6, width: 820, ...enter(f, 4) }}
        >
          <Plate color={W.free}>自由选择</Plate>
          <span style={{ fontSize: 22, fontWeight: 850, marginLeft: 14, color: W.ink }}>
            既可以申请行政复议，也可以提起行政诉讼
          </span>
        </div>

        {/* 双渠道水体 */}
        <Waterway color={W.free} gate={W.free} style={{ position: "absolute", left: 60, top: 118, width: 1780 }} />
        <Waterway color={W.water} gate={W.water} style={{ position: "absolute", left: 60, top: 208, width: 1780 }} />
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 128,
            fontSize: 20,
            fontWeight: 950,
            color: W.freeInk,
            fontFamily: "var(--inkloom-animation-label)",
          }}
        >
          复议渠
        </div>
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 218,
            fontSize: 20,
            fontWeight: 950,
            color: W.waterDeep,
            fontFamily: "var(--inkloom-animation-label)",
          }}
        >
          诉讼渠
        </div>

        {/* 争议驳船：驶入分岔口停驻（终态保留） */}
        <div
          data-stateful-source="choice-barge"
          data-stateful-terminal="choice-barge"
          style={{
            position: "absolute",
            top: 96,
            left: bargeX,
            width: 320,
            height: 118,
            background: W.lock,
            border: `4px solid ${W.white}`,
            borderRadius: 14,
            display: "grid",
            placeItems: "center",
            fontSize: 23,
            fontWeight: 950,
            color: W.white,
            zIndex: 2,
            fontFamily: "var(--inkloom-animation-title)",
            boxShadow: "0 6px 0 rgba(36,68,76,0.35)",
          }}
        >
          争议驳船 · 二选一
        </div>
        <div
          style={{
            position: "absolute",
            left: 420,
            top: 190,
            opacity: interpolate(f, [120, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}
        >
          <LockGateIcon color={W.lockInk} size={40} />
        </div>

        {/* 两渠详解 */}
        {[
          ["行政复议", "先复议 → 对复议决定不服仍可诉（省部级对自身行为的复议决定除外）", W.free, "choice-station-1"],
          ["行政诉讼", "直接起诉 → 不得再申请复议", W.water, "choice-station-2"],
        ].map((item, index) => (
          <div
            key={String(item[0])}
            data-final-knowledge={String(item[3])}
            style={{
              position: "absolute",
              left: 40 + index * 900,
              top: 268,
              width: 860,
              minHeight: 240,
              border: `4px solid ${String(item[2])}`,
              borderRadius: 16,
              background: W.panel,
              padding: "18px 20px",
              boxShadow: `0 6px 0 ${String(item[2])}22`,
              ...enter(f, 20 + index * 10),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <LockGateIcon color={String(item[2])} />
              <span className="font-animation-title" style={{ fontSize: 28, fontWeight: 950, color: String(item[2]) }}>
                {String(item[0])}
              </span>
            </div>
            <div style={{ fontSize: 21.5, fontWeight: 850, marginTop: 12, lineHeight: 1.42, color: W.ink }}>
              {String(item[1])}
            </div>
          </div>
        ))}

        <div
          data-final-knowledge="no-parallel-rule"
          style={{
            position: "absolute",
            left: 40,
            top: 556,
            width: 1800,
            border: `4px dashed ${W.brick}`,
            borderRadius: 12,
            background: `${W.brick}0C`,
            padding: "13px 18px",
            ...enter(f, 42),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 950, color: W.brickInk }}>⛔ 不能同时进行：</div>
          <div style={{ fontSize: 21, fontWeight: 850, marginTop: 6, color: W.ink }}>
            已经诉讼 → 不得复议；已经复议 → 复议期间不得诉讼（谁先受理算谁的）
          </div>
        </div>
        <div
          data-final-knowledge="ministry-level-rule"
          style={{
            position: "absolute",
            left: 40,
            top: 668,
            width: 1800,
            border: `3px solid ${W.brass}`,
            borderRadius: 12,
            background: `${W.brass}12`,
            padding: "12px 18px",
            ...enter(f, 52),
          }}
        >
          <div style={{ fontSize: 21, fontWeight: 950, color: W.brassInk }}>
            省部级单位对自身行为的复议决定：可诉可裁（国务院裁决终局）· 一经选择，从一而终
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const MandatoryFirstTrackScene = () => {
  /* Static audit inventory: data-final-knowledge="gate-confirm-right" data-final-knowledge="gate-tax" data-final-knowledge="gate-merger" data-final-knowledge="gate-onspot" data-final-knowledge="gate-disclosure" data-final-knowledge="gate-inaction" data-final-knowledge="mandatory-exceptions" */
  const f = useCurrentFrame();
  const gates = [
    { name: "确权争议", text: "认为行政确认侵犯已取得的自然资源所有权 / 使用权", knowledge: "gate-confirm-right" },
    { name: "纳税争议", text: "纳税数额争议：是否纳、谁纳、纳多少、如何纳", knowledge: "gate-tax" },
    { name: "经营者集中", text: "禁止集中决定、对集中附加限制条件决定", knowledge: "gate-merger" },
    { name: "当场处罚", text: "一般罚：公民200元以下、单位3000元以下、警告；治安罚：公民500元以下、警告", knowledge: "gate-onspot" },
    { name: "信息公开", text: "国秘商秘隐私严、稳定三安全、内部过程执法卷 → 不公开，复议前", knowledge: "gate-disclosure" },
    { name: "消极不作为", text: "受理前 / 受理后不理不睬（申请许可、工伤认定、抚恤金等）", knowledge: "gate-inaction" },
  ] as const;
  return (
    <Shell code="03" title="复议前置：六类争议先过复议闸">
      <div
        data-layout="six-sluice-intake-with-bypass"
        data-visual-anchor="boundary"
        data-visual-grammar="six-dispute-streams-must-enter-the-mandatory-review-lock,three-exception-streams-bypass-through-the-free-channel,lock-keeper-plaque-names-every-gated-category"
        data-text-treatments="label-block,stamp,chip"
        data-focal-rule="mandatory-review-before-litigation-for-six-categories"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 14 }}
      >
        <div
          style={{
            position: "absolute",
            left: 640,
            top: 4,
            width: 600,
            height: 104,
            background: W.brick,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            boxShadow: `0 8px 0 ${W.brick}33`,
            ...enter(f, 4),
          }}
        >
          <LockGateIcon color={W.white} size={44} />
          <div style={{ fontSize: 29, fontWeight: 950, color: W.white, fontFamily: "var(--inkloom-animation-title)" }}>
            复议前置闸
            <span style={{ fontSize: 20, fontWeight: 850, marginLeft: 14 }}>必须先申请复议</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 40,
            top: 126,
            right: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 18,
          }}
        >
          {gates.map((gate, index) => (
            <div
              key={gate.name}
              data-final-knowledge={gate.knowledge}
              style={{
                border: `4px solid ${W.lock}`,
                borderTop: `10px solid ${W.brick}`,
                borderRadius: 14,
                background: W.panel,
                padding: "14px 16px",
                minHeight: 196,
                boxShadow: "0 6px 0 rgba(60,90,99,0.18)",
                ...enter(f, 10 + index * 9),
              }}
            >
              <div className="font-animation-title" style={{ fontSize: 25, fontWeight: 950, color: W.brickInk }}>
                {gate.name}
              </div>
              <div style={{ fontSize: 20.5, fontWeight: 850, marginTop: 10, lineHeight: 1.42, color: W.ink }}>
                {gate.text}
              </div>
            </div>
          ))}
        </div>

        <div
          data-final-knowledge="mandatory-exceptions"
          style={{
            position: "absolute",
            left: 40,
            right: 40,
            top: 590,
            border: `4px solid ${W.free}`,
            borderRadius: 14,
            background: `${W.free}10`,
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            ...enter(f, 66),
          }}
        >
          <Plate color={W.free} filled={false}>旁路</Plate>
          <div style={{ fontSize: 21.5, fontWeight: 950, color: W.freeInk }}>
            例外（可直接起诉）：处罚 · 强制（强制措施、强制执行）· 反倾销税
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const FinalReviewTrackScene = () => {
  /* Static audit inventory: data-final-knowledge="final-review-rule" data-final-knowledge="final-measure-1" data-final-knowledge="final-measure-2" data-final-knowledge="final-measure-3" data-final-knowledge="final-measure-4" data-final-knowledge="final-terminal" data-final-knowledge="final-summary" */
  const f = useCurrentFrame();
  const measures = ["继续盘问", "拘留审查", "限制活动范围", "遣送出境"];
  return (
    <Shell code="04" title="复议终局：出入境措施一锤定音">
      <div
        data-layout="closed-terminal-basin"
        data-visual-anchor="flow-target"
        data-visual-grammar="four-immigration-measure-barges-enter-the-closed-basin,terminal-wall-seals-the-basin-without-litigation-outlet,scope-annotation-limits-the-basin-to-foreigner-measures"
        data-text-treatments="stamp,label-block,soft-highlight"
        data-focal-rule="immigration-measures-end-at-final-review"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 16 }}
      >
        <div
          data-final-knowledge="final-review-rule"
          style={{ position: "absolute", left: 40, top: 8, width: 900, ...enter(f, 4) }}
        >
          <div className="font-animation-title" style={{ fontSize: 26, fontWeight: 950, color: W.brassInk }}>
            出入境管理机关对外国人及其他境外人员
          </div>
          <div style={{ fontSize: 21.5, fontWeight: 850, marginTop: 10, color: W.ink, lineHeight: 1.42 }}>
            可以依法申请行政复议，<b style={{ color: W.brassInk }}>该复议决定为最终决定</b>
          </div>
        </div>

        {/* 四艘措施驳船：2×2 */}
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 128,
            right: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 20,
          }}
        >
          {measures.map((measure, index) => (
            <div
              key={measure}
              data-final-knowledge={`final-measure-${index + 1}`}
              style={{
                border: `5px solid ${W.brass}`,
                borderRadius: 16,
                background: `linear-gradient(180deg,${W.panel} 0 46%,${W.waterLight} 46% 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingBottom: 16,
                gap: 8,
                minHeight: 158,
                ...enter(f, 14 + index * 10),
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 26,
                  backgroundColor: W.brass,
                  borderRadius: "12px 12px 4px 4px",
                  marginBottom: -6,
                }}
              />
              <div
                style={{
                  fontSize: 29,
                  fontWeight: 950,
                  color: W.brassInk,
                  fontFamily: "var(--inkloom-animation-title)",
                  background: W.panel,
                  border: `3px solid ${W.brass}`,
                  borderRadius: 8,
                  padding: "2px 16px",
                }}
              >
                {measure}
              </div>
            </div>
          ))}
        </div>

        {/* 封闭终点池壁 */}
        <div
          data-final-knowledge="final-terminal"
          style={{
            position: "absolute",
            left: 480,
            top: 512,
            width: 940,
            minHeight: 116,
            background: W.brass,
            borderRadius: 16,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 54),
          }}
        >
          <div style={{ fontSize: 29, fontWeight: 950, color: W.white, fontFamily: "var(--inkloom-animation-title)" }}>
            终点池：复议决定 = 最终决定
            <br />
            <span style={{ fontSize: 20, fontWeight: 850 }}>不能再提起行政诉讼</span>
          </div>
        </div>
        <div
          data-final-knowledge="final-summary"
          style={{ position: "absolute", left: 400, top: 656, width: 1100, textAlign: "center", ...enter(f, 64) }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px dashed ${W.lock}`,
              borderRadius: 10,
              background: W.panel,
              padding: "9px 18px",
              fontSize: 21,
              fontWeight: 900,
              color: W.soft,
            }}
          >
            仅限对外国人及境外人员的四种出入境强制措施
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const SwitchyardTrapsScene = () => {
  /* Static audit inventory: data-final-knowledge="trap-01" data-final-knowledge="trap-02" data-final-knowledge="trap-03" data-final-knowledge="trap-04" data-final-knowledge="trap-05" data-final-knowledge="trap-06" data-final-knowledge="trap-07" data-final-knowledge="trap-08" data-final-knowledge="trap-summary" */
  const f = useCurrentFrame();
  const traps = [
    { question: "当场罚200元（一般罚）", answer: "复议前置 → 不可直接起诉", pass: false },
    { question: "纳税方式由定额变自行申报", answer: "复议前置 → 不可直接起诉", pass: false },
    { question: "冻结账户（强制措施）", answer: "例外 → 可直接起诉", pass: true },
    { question: "复议受理后起诉", answer: "谁先受理算谁的 → 不受理", pass: false },
    { question: "不予许可（明确拒绝）", answer: "积极不作为 → 不需前置", pass: true },
    { question: "逾期未受理（不理不睬）", answer: "消极不作为 → 需前置", pass: false },
    { question: "信息不存在不予公开", answer: "不属于前置六类 → 不需前置", pass: true },
    { question: "国家秘密不予公开", answer: "前置案件直接起诉 → 裁定不予立案 / 驳回起诉", pass: false },
  ] as const;
  return (
    <Shell code="05" title="最爱考：谁要过复议闸，谁能直接起诉">
      <div
        data-layout="lock-keeper-signal-board"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="eight-exam-cases-route-to-pass-or-lock-signals,keeper-board-distills-the-two-step-judgment"
        data-text-treatments="stamp,label-block,external-negation"
        data-focal-rule="exam-traps-on-mandatory-review"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 12 }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: 14,
          }}
        >
          {traps.map((trap, index) => (
            <div
              key={String(index)}
              data-final-knowledge={`trap-${String(index + 1).padStart(2, "0")}`}
              style={{
                border: `4px solid ${trap.pass ? W.free : W.brick}`,
                borderRadius: 14,
                background: W.panel,
                boxShadow: `0 6px 0 ${trap.pass ? W.free : W.brick}22`,
                padding: "10px 18px",
                minHeight: 126,
                display: "flex",
                alignItems: "center",
                ...enter(f, 8 + index * 7),
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: trap.pass ? W.free : W.brick,
                    color: W.white,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 23,
                    fontWeight: 950,
                    flex: "0 0 auto",
                    fontFamily: "var(--inkloom-animation-mono)",
                  }}
                >
                  {trap.pass ? "✓" : "✕"}
                </span>
                <div>
                  <div className="font-animation-title" style={{ fontSize: 22, fontWeight: 950 }}>
                    {trap.question}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 850, marginTop: 5, color: W.soft, lineHeight: 1.32 }}>
                    {trap.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="trap-summary"
          style={{ position: "absolute", left: 420, top: 634, width: 1080, textAlign: "center", ...enter(f, 72) }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${W.brass}`,
              borderRadius: 10,
              background: W.panel,
              padding: "9px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: W.brassInk,
              rotate: "-2deg",
            }}
          >
            判断两步：先问是否前置六类，再问有无例外
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const LinkageRailSwitch = () => (
  <AbsoluteFill>
    <TimelineSequence name="01" start={SCENES["three-mode-overview"].start} duration={SCENES["three-mode-overview"].duration}>
      <ThreeModeOverviewScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["free-choice-track"].start} duration={SCENES["free-choice-track"].duration}>
      <FreeChoiceTrackScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["mandatory-first-track"].start} duration={SCENES["mandatory-first-track"].duration}>
      <MandatoryFirstTrackScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["final-review-track"].start} duration={SCENES["final-review-track"].duration}>
      <FinalReviewTrackScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["switchyard-traps"].start} duration={SCENES["switchyard-traps"].duration}>
      <SwitchyardTrapsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
