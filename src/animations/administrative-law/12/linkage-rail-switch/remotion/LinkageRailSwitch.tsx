import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  concrete: "#F2F4F0",
  panel: "#FCFDF9",
  ink: "#25313A",
  soft: "#66727D",
  line: "#C6CECA",
  rail: "#9AA6AE",
  jade: "#0F8B7D",
  jadeInk: "#075D53",
  blue: "#2F6FA7",
  blueInk: "#1E4E78",
  coral: "#D45B51",
  coralInk: "#8E332D",
  amber: "#D89B24",
  amberInk: "#7A5612",
  white: "#FFFFFF",
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
      background: C.concrete,
      color: C.ink,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 86% 8%,rgba(15,139,125,.10),transparent 28%)," +
        "radial-gradient(circle at 6% 96%,rgba(216,155,36,.12),transparent 26%)," +
        "linear-gradient(rgba(37,49,58,.045) 1px,transparent 1px)," +
        "linear-gradient(90deg,rgba(37,49,58,.045) 1px,transparent 1px)",
      backgroundSize: "auto,auto,52px 52px,52px 52px",
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
        borderBottom: `4px solid ${C.jade}`,
      }}
    >
      <div
        style={{
          width: 166,
          height: 76,
          border: `4px solid ${C.jade}`,
          backgroundColor: C.panel,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: C.jadeInk,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-mono)",
        }}
      >
        ROUTE {code}
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
          color: C.soft,
          fontFamily: "var(--inkloom-animation-label)",
        }}
      >
        LINKAGE · DAYLIGHT INTERCHANGE
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

const Sign = ({
  children,
  color = C.jade,
  style,
  finalKnowledge,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
  finalKnowledge?: string;
}) => (
  <div
    data-final-knowledge={finalKnowledge}
    style={{
      border: `3px solid ${color}`,
      background: `${color}14`,
      boxShadow: `0 0 0 4px ${color}14`,
      padding: "13px 16px",
      fontSize: 21,
      fontWeight: 850,
      lineHeight: 1.32,
      color: C.ink,
      borderRadius: 12,
      ...style,
    }}
  >
    {children}
  </div>
);

const Track = ({ color = C.rail, style }: { color?: string; style?: React.CSSProperties }) => (
  <div
    style={{
      height: 9,
      borderRadius: 5,
      background: `repeating-linear-gradient(90deg,${color} 0 24px,transparent 24px 40px)`,
      ...style,
    }}
  />
);

const StationDot = ({ color = C.jade, style }: { color?: string; style?: React.CSSProperties }) => (
  <div
    style={{
      position: "absolute",
      width: 22,
      height: 22,
      borderRadius: "50%",
      border: `5px solid ${color}`,
      backgroundColor: C.panel,
      ...style,
    }}
  />
);

const Signal = ({
  label,
  color = C.jade,
  sub,
  style,
  finalKnowledge,
}: {
  label: string;
  color?: string;
  sub?: string;
  style?: React.CSSProperties;
  finalKnowledge?: string;
}) => (
  <div
    data-final-knowledge={finalKnowledge}
    style={{
      border: `4px solid ${color}`,
      background: `${color}10`,
      borderRadius: 14,
      padding: "16px 18px",
      ...style,
    }}
  >
    <div
      className="font-animation-title"
      style={{
        fontSize: 27,
        fontWeight: 950,
        color,
        borderBottom: `4px solid ${color}`,
        display: "inline-block",
        paddingBottom: 6,
      }}
    >
      {label}
    </div>
    {sub && <div style={{ fontSize: 21, fontWeight: 850, marginTop: 10, lineHeight: 1.34 }}>{sub}</div>}
  </div>
);

export const ThreeModeOverviewScene = () => {
  /* Static audit inventory: data-final-knowledge="mode-free-choice" data-final-knowledge="mode-mandatory" data-final-knowledge="mode-final" data-final-knowledge="overview-exception" */
  const f = useCurrentFrame();
  const modes = [
    {
      label: "自由选择",
      color: C.jade,
      sub: "复议或诉讼皆可 · 议后可诉 · 一经选择从一而终 · 不能同时进行",
      knowledge: "mode-free-choice",
    },
    {
      label: "复议前置",
      color: C.coral,
      sub: "必须先申请复议，不服复议决定再起诉（特定争议）",
      knowledge: "mode-mandatory",
    },
    {
      label: "复议终局",
      color: C.amber,
      sub: "复议决定即为最终决定，不可再诉",
      knowledge: "mode-final",
    },
  ] as const;
  return (
    <Shell code="01" title="三模式总览：自由选择、复议前置、复议终局">
      <div
        data-layout="three-metro-lines-overview"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-linkage-modes-run-as-three-parallel-metro-lines,free-choice-is-jade-mandatory-coral-final-amber"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="three-linkage-modes-between-review-and-litigation"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 16 }}
      >
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 54,
            width: 250,
            height: 590,
            border: `4px solid ${C.rail}`,
            borderRadius: 18,
            backgroundColor: C.panel,
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
            <div style={{ fontSize: 21, fontWeight: 800, color: C.soft, marginTop: 10, lineHeight: 1.45 }}>
              行政复议与诉讼
              <br />
              如何衔接？
            </div>
          </div>
        </div>
        {modes.map((mode, index) => (
          <React.Fragment key={mode.label}>
            <StationDot color={mode.color} style={{ left: 338, top: 44 + index * 185 }} />
            <Track
              color={mode.color}
              style={{ position: "absolute", left: 348, top: 52 + index * 185, width: 1426, ...enter(f, 12 + index * 12, 0, 10) }}
            />
            <Signal
              label={mode.label}
              color={mode.color}
              sub={mode.sub}
              finalKnowledge={mode.knowledge}
              style={{
                position: "absolute",
                left: 426,
                top: 8 + index * 185,
                width: 1348,
                minHeight: 150,
                ...enter(f, 16 + index * 12),
              }}
            />
          </React.Fragment>
        ))}
        <div
          data-final-knowledge="overview-exception"
          style={{
            position: "absolute",
            left: 426,
            top: 612,
            width: 1348,
            textAlign: "center",
            ...enter(f, 58),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.rail}`,
              borderRadius: 10,
              background: C.panel,
              padding: "9px 18px",
              fontSize: 22,
              fontWeight: 900,
              color: C.soft,
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
  /* Static audit inventory: data-final-knowledge="free-choice-core" data-final-knowledge="choice-station-1" data-final-knowledge="choice-station-2" data-final-knowledge="no-parallel-rule" data-final-knowledge="ministry-level-rule" data-stateful-source="choice-train" data-stateful-terminal="choice-train" */
  const f = useCurrentFrame();
  const trainX = interpolate(f, [30, 380], [-60, 1620], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  return (
    <Shell code="02" title="自由选择：议后可诉，从一而终">
      <div
        data-layout="dual-track-free-choice-platform"
        data-visual-anchor="flow-path"
        data-visual-grammar="a-dispute-train-runs-along-two-parallel-tracks,choice-locks-after-first-pick"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="free-choice-locks-after-first-selection"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 14 }}
      >
        <div
          data-final-knowledge="free-choice-core"
          style={{ position: "absolute", left: 80, top: 14, width: 760, ...enter(f, 4) }}
        >
          <Signal
            label="自由选择"
            color={C.jade}
            sub="既可以申请行政复议，也可以提起行政诉讼"
            style={{ border: 0, background: "transparent", boxShadow: "none" }}
          />
        </div>
        <StationDot color={C.jade} style={{ left: 80, top: 156 }} />
        <Track color={C.jade} style={{ position: "absolute", left: 90, top: 164, width: 1680 }} />
        <Track color={C.blue} style={{ position: "absolute", left: 90, top: 240, width: 1680 }} />
        <div
          data-stateful-source="choice-train"
          data-stateful-terminal="choice-train"
          style={{
            position: "absolute",
            top: 150,
            left: trainX,
            width: 300,
            height: 102,
            background: C.jade,
            border: `4px solid ${C.white}`,
            borderRadius: 16,
            display: "grid",
            placeItems: "center",
            fontSize: 23,
            fontWeight: 950,
            color: C.white,
            zIndex: 2,
            fontFamily: "var(--inkloom-animation-title)",
          }}
        >
          争议列车 · 二选一
        </div>
        {[
          ["行政复议", "先复议 → 对复议决定不服仍可诉（省部级对自身行为的复议决定除外）", C.jade, "choice-station-1"],
          ["行政诉讼", "直接起诉 → 不得再申请复议", C.blue, "choice-station-2"],
        ].map((item, index) => (
          <div
            key={String(item[0])}
            data-final-knowledge={String(item[3])}
            style={{
              position: "absolute",
              left: 80 + index * 900,
              top: 292,
              width: 820,
              minHeight: 250,
              border: `4px solid ${item[2]}`,
              borderRadius: 16,
              background: `${item[2]}10`,
              padding: "18px 20px",
              ...enter(f, 20 + index * 10),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <StationDot color={String(item[2])} style={{ position: "relative", left: 0, top: 0 }} />
              <span className="font-animation-title" style={{ fontSize: 27, fontWeight: 950, color: item[2] }}>
                {String(item[0])}
              </span>
            </div>
            <div style={{ fontSize: 21, fontWeight: 850, marginTop: 12, lineHeight: 1.42, color: C.ink }}>
              {String(item[1])}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="no-parallel-rule"
          style={{
            position: "absolute",
            left: 80,
            top: 590,
            width: 1720,
            border: `4px dashed ${C.coral}`,
            borderRadius: 12,
            background: `${C.coral}0A`,
            padding: "13px 18px",
            ...enter(f, 42),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 950, color: C.coralInk }}>不能同时进行：</div>
          <div style={{ fontSize: 21, fontWeight: 850, marginTop: 6, color: C.ink }}>
            已经诉讼 → 不得复议；已经复议 → 复议期间不得诉讼（谁先受理算谁的）
          </div>
        </div>
        <div
          data-final-knowledge="ministry-level-rule"
          style={{
            position: "absolute",
            left: 80,
            top: 682,
            width: 1720,
            border: `3px solid ${C.amber}`,
            borderRadius: 12,
            background: `${C.amber}12`,
            padding: "12px 18px",
            ...enter(f, 52),
          }}
        >
          <div style={{ fontSize: 21, fontWeight: 950, color: C.amberInk }}>
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
        data-layout="mandatory-first-concourse"
        data-visual-anchor="boundary"
        data-visual-grammar="six-dispute-categories-pass-through-the-review-gate,three-exceptions-bypass-the-gate"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="mandatory-review-before-litigation-for-six-categories"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 14 }}
      >
        <div
          style={{
            position: "absolute",
            left: 680,
            top: 10,
            width: 520,
            height: 106,
            background: C.coral,
            borderRadius: 16,
            display: "grid",
            placeItems: "center",
            boxShadow: `0 8px 0 ${C.coral}30`,
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 29, fontWeight: 950, color: C.white, textAlign: "center", fontFamily: "var(--inkloom-animation-title)" }}>
            复议前置闸
            <br />
            <span style={{ fontSize: 20, fontWeight: 850 }}>必须先申请复议</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 128,
            right: 70,
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
                border: `4px solid ${C.coral}`,
                borderRadius: 14,
                background: `${C.coral}0C`,
                padding: "14px 16px",
                minHeight: 190,
                ...enter(f, 10 + index * 9),
              }}
            >
              <div className="font-animation-title" style={{ fontSize: 24, fontWeight: 950, color: C.coralInk }}>
                {gate.name}
              </div>
              <div style={{ fontSize: 20, fontWeight: 850, marginTop: 10, lineHeight: 1.42, color: C.ink }}>
                {gate.text}
              </div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="mandatory-exceptions"
          style={{
            position: "absolute",
            left: 70,
            right: 70,
            top: 548,
            border: `4px solid ${C.jade}`,
            borderRadius: 14,
            background: `${C.jade}10`,
            padding: "12px 18px",
            ...enter(f, 66),
          }}
        >
          <div style={{ fontSize: 21, fontWeight: 950, color: C.jadeInk }}>
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
        data-layout="final-stop-terminal-platform"
        data-visual-anchor="flow-target"
        data-visual-grammar="four-immigration-measures-arrive-at-the-final-terminal,the-review-decision-is-the-end-of-the-line"
        data-text-treatments="stamp,label-block,soft-highlight"
        data-focal-rule="immigration-measures-end-at-final-review"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 16 }}
      >
        <div
          data-final-knowledge="final-review-rule"
          style={{ position: "absolute", left: 70, top: 22, width: 800, ...enter(f, 4) }}
        >
          <div className="font-animation-title" style={{ fontSize: 26, fontWeight: 950, color: C.amberInk }}>
            出入境管理机关对外国人及其他境外人员
          </div>
          <div style={{ fontSize: 21, fontWeight: 850, marginTop: 10, color: C.ink, lineHeight: 1.42 }}>
            可以依法申请行政复议，<b style={{ color: C.amberInk }}>该复议决定为最终决定</b>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 138,
            right: 70,
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
                border: `5px solid ${C.amber}`,
                borderRadius: 16,
                background: `${C.amber}10`,
                display: "grid",
                placeItems: "center",
                fontSize: 29,
                fontWeight: 950,
                color: C.amberInk,
                fontFamily: "var(--inkloom-animation-title)",
                minHeight: 150,
                ...enter(f, 14 + index * 10),
              }}
            >
              {measure}
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="final-terminal"
          style={{
            position: "absolute",
            left: 550,
            top: 486,
            width: 800,
            minHeight: 118,
            background: C.amber,
            borderRadius: 16,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 54),
          }}
        >
          <div style={{ fontSize: 29, fontWeight: 950, color: C.white, fontFamily: "var(--inkloom-animation-title)" }}>
            终点站：复议决定 = 最终决定
            <br />
            <span style={{ fontSize: 20, fontWeight: 850 }}>不能再提起行政诉讼</span>
          </div>
        </div>
        <div
          data-final-knowledge="final-summary"
          style={{ position: "absolute", left: 430, top: 638, width: 1040, textAlign: "center", ...enter(f, 64) }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px dashed ${C.rail}`,
              borderRadius: 10,
              background: C.panel,
              padding: "9px 18px",
              fontSize: 21,
              fontWeight: 900,
              color: C.soft,
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
        data-layout="eight-judgment-interchange-signals"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="eight-exam-statements-route-to-jade-or-coral-signals,review-gate-exceptions-light-up-jade"
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
                border: `4px solid ${trap.pass ? C.jade : C.coral}`,
                borderRadius: 14,
                background: `${trap.pass ? C.jade : C.coral}0C`,
                padding: "10px 18px",
                minHeight: 128,
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
                    background: trap.pass ? C.jade : C.coral,
                    color: C.white,
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
                  <div style={{ fontSize: 20, fontWeight: 850, marginTop: 5, color: C.soft, lineHeight: 1.32 }}>
                    {trap.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="trap-summary"
          style={{ position: "absolute", left: 430, top: 618, width: 1060, textAlign: "center", ...enter(f, 72) }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.amber}`,
              borderRadius: 10,
              background: C.panel,
              padding: "9px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: C.amberInk,
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
