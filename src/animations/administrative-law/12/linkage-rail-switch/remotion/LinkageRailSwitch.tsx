import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  navy: "#141B2E",
  deep: "#1E2740",
  rail: "#5A6B8C",
  green: "#3BC47F",
  red: "#E05252",
  gold: "#E8B64C",
  blue: "#5AA9E6",
  white: "#F2F5FA",
  gray: "#9AA7BF",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const enter = (f: number, d = 0, x = 0, y = 26) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `${interpolate(f, [d, d + 24], [x, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px ${interpolate(f, [d, d + 24], [y, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px`,
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
      background: C.navy,
      color: C.white,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 82% 10%,rgba(90,169,230,.14),transparent 30%),linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
      backgroundSize: "auto,56px 56px,56px 56px",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 34,
        height: 112,
        display: "flex",
        alignItems: "center",
        gap: 24,
        borderBottom: `4px solid ${C.gold}`,
      }}
    >
      <div
        style={{
          width: 150,
          height: 78,
          border: `4px solid ${C.gold}`,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: C.gold,
          letterSpacing: 2,
        }}
      >
        ROUTE {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 46, lineHeight: 1.08, margin: 0 }}
      >
        {title}
      </h1>
      <div
        style={{
          marginLeft: "auto",
          fontSize: 17,
          fontWeight: 900,
          letterSpacing: 3,
          color: C.gray,
        }}
      >
        LINKAGE · RAIL SWITCH
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 172,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);

const Sign = ({
  children,
  color = C.blue,
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
      border: `4px solid ${color}`,
      background: `${color}14`,
      boxShadow: `0 0 26px ${color}2e`,
      padding: "14px 18px",
      fontSize: 22,
      fontWeight: 850,
      lineHeight: 1.3,
      color: C.white,
      ...style,
    }}
  >
    {children}
  </div>
);

const Track = ({
  color = C.rail,
  style,
}: {
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      height: 10,
      background: `repeating-linear-gradient(90deg,${color} 0 26px,transparent 26px 44px)`,
      ...style,
    }}
  />
);

const Signal = ({
  label,
  color = C.green,
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
      padding: "16px 18px",
      ...style,
    }}
  >
    <div
      style={{
        fontSize: 28,
        fontWeight: 950,
        color,
        borderBottom: `3px solid ${color}`,
        display: "inline-block",
        paddingBottom: 6,
      }}
    >
      {label}
    </div>
    {sub && (
      <div style={{ fontSize: 22, fontWeight: 850, marginTop: 10, lineHeight: 1.35 }}>
        {sub}
      </div>
    )}
  </div>
);

export const ThreeModeOverviewScene = () => {
  /* Static audit inventory: data-final-knowledge="mode-free-choice" data-final-knowledge="mode-mandatory" data-final-knowledge="mode-final" data-final-knowledge="overview-exception" */
  const f = useCurrentFrame();
  return (
    <Shell code="01" title="三模式总览：自由选择、复议前置、复议终局">
      <div
        data-layout="three-rail-lines-overview"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-linkage-modes-run-as-three-parallel-tracks,free-choice-is-green-mandatory-red-final-gold"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="three-linkage-modes-between-review-and-litigation"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          style={{
            position: "absolute",
            left: 90,
            top: 70,
            width: 240,
            height: 620,
            border: `5px solid ${C.rail}`,
            display: "grid",
            placeItems: "center",
            ...enter(f, 4),
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 30, fontWeight: 950, color: C.white }}>行政争议</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: C.gray, marginTop: 8 }}>
              行政复议与诉讼
              <br />
              如何衔接？
            </div>
          </div>
        </div>
        {[
          [
            "自由选择",
            C.green,
            "复议或诉讼皆可 · 议后可诉 · 一经选择从一而终 · 不能同时进行",
            "mode-free-choice",
            0,
          ],
          [
            "复议前置",
            C.red,
            "必须先申请复议，不服复议决定再起诉（特定争议）",
            "mode-mandatory",
            1,
          ],
          [
            "复议终局",
            C.gold,
            "复议决定即为最终决定，不可再诉",
            "mode-final",
            2,
          ],
        ].map((x, i) => (
          <React.Fragment key={String(x[0])}>
            <Track
              color={String(x[1])}
              style={{
                position: "absolute",
                left: 340,
                top: 96 + i * 205,
                width: 1250,
                ...enter(f, 12 + i * 14, 0, 10),
              }}
            />
            <Signal
              label={String(x[0])}
              color={String(x[1])}
              sub={String(x[2])}
              finalKnowledge={String(x[3])}
              style={{
                position: "absolute",
                left: 430,
                top: 44 + i * 205,
                width: 1150,
                ...enter(f, 16 + i * 14),
              }}
            />
          </React.Fragment>
        ))}
        <div
          data-final-knowledge="overview-exception"
          style={{
            position: "absolute",
            left: 430,
            top: 620,
            width: 1150,
            textAlign: "center",
            ...enter(f, 58),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.gray}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 900,
              color: C.gray,
            }}
          >
            处罚、强制、反倾销税三类可直接起诉（前置例外）
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
        data-layout="dual-track-free-choice"
        data-visual-anchor="flow-path"
        data-visual-grammar="a-train-runs-along-two-parallel-tracks,choice-locks-after-first-pick"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="free-choice-locks-after-first-selection"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="free-choice-core"
          style={{
            position: "absolute",
            left: 130,
            top: 50,
            width: 800,
            ...enter(f, 4),
          }}
        >
          <Signal
            label="自由选择"
            color={C.green}
            sub="既可以申请行政复议，也可以提起行政诉讼"
            finalKnowledge="free-choice-core"
            style={{ border: 0, background: "transparent", boxShadow: "none" }}
          />
        </div>
        <Track
          color={C.green}
          style={{ position: "absolute", left: 130, top: 240, width: 1630 }}
        />
        <Track
          color={C.green}
          style={{ position: "absolute", left: 130, top: 330, width: 1630 }}
        />
        <div
          data-stateful-source="choice-train"
          data-stateful-terminal="choice-train"
          style={{
            position: "absolute",
            top: 236,
            left: trainX,
            width: 320,
            height: 96,
            background: C.green,
            border: `4px solid ${C.white}`,
            display: "grid",
            placeItems: "center",
            fontSize: 24,
            fontWeight: 950,
            color: C.navy,
            zIndex: 2,
          }}
        >
          争议列车 · 二选一
        </div>
        {[
          ["行政复议", "先复议 → 对复议决定不服仍可诉（省部级对自身行为的复议决定除外）", C.green],
          ["行政诉讼", "直接起诉 → 不得再申请复议", C.blue],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`choice-station-${i + 1}`}
            style={{
              position: "absolute",
              left: 130 + i * 830,
              top: 344,
              width: 760,
              border: `5px solid ${x[2]}`,
              background: `${x[2]}10`,
              padding: "20px 22px",
              ...enter(f, 20 + i * 10),
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 950, color: x[2] }}>{x[0]}</div>
            <div style={{ fontSize: 22, fontWeight: 850, marginTop: 10, lineHeight: 1.4 }}>
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="no-parallel-rule"
          style={{
            position: "absolute",
            left: 130,
            top: 538,
            width: 1630,
            border: `4px dashed ${C.red}`,
            padding: "16px 20px",
            ...enter(f, 42),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 900, color: C.red }}>
            不能同时进行：
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, color: C.white }}>
            已经诉讼 → 不得复议；已经复议 → 复议期间不得诉讼（谁先受理算谁的）
          </div>
        </div>
        <div
          data-final-knowledge="ministry-level-rule"
          style={{
            position: "absolute",
            left: 130,
            top: 648,
            width: 1630,
            border: `4px solid ${C.gold}`,
            padding: "14px 18px",
            ...enter(f, 52),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, color: C.gold }}>
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
  return (
    <Shell code="03" title="复议前置：六类争议先过复议闸">
      <div
        data-layout="mandatory-first-gate"
        data-visual-anchor="boundary"
        data-visual-grammar="six-dispute-categories-pass-through-the-review-gate,three-exceptions-bypass-it"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="mandatory-review-before-litigation-for-six-categories"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          style={{
            position: "absolute",
            left: 700,
            top: 70,
            width: 480,
            height: 120,
            background: C.red,
            display: "grid",
            placeItems: "center",
            boxShadow: `0 10px 0 ${C.red}33`,
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.white, textAlign: "center" }}>
            复议前置闸
            <br />
            <span style={{ fontSize: 22, fontWeight: 850 }}>必须先申请复议</span>
          </div>
        </div>
        {[
          ["确权争议", "认为行政确认侵犯已取得的自然资源所有权/使用权", C.gold, "gate-confirm-right"],
          ["纳税争议", "纳税数额争议：是否纳、谁纳、纳多少、如何纳", C.gold, "gate-tax"],
          ["经营者集中", "禁止集中决定、对集中附加限制条件决定", C.gold, "gate-merger"],
          ["当场处罚", "一般罚：公民200元以下、单位3000元以下、警告；治安罚：公民500元以下、警告", C.gold, "gate-onspot"],
          ["信息公开", "国秘商秘隐私严、稳定三安全、内部过程执法卷 → 不公开，复议前", C.gold, "gate-disclosure"],
          ["消极不作为", "受理前/受理后不理不睬（申请许可、工伤认定、抚恤金等）", C.gold, "gate-inaction"],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={String(x[3])}
            style={{
              position: "absolute",
              left: 80 + (i % 2) * 860,
              top: 196 + Math.floor(i / 2) * 150,
              width: 800,
              minHeight: 130,
              border: `4px solid ${x[2]}`,
              background: `${x[2]}10`,
              padding: "14px 18px",
              ...enter(f, 10 + i * 10),
            }}
          >
            <div style={{ fontSize: 25, fontWeight: 950, color: x[2] }}>{x[0]}</div>
            <div style={{ fontSize: 22, fontWeight: 820, marginTop: 6, lineHeight: 1.35 }}>
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="mandatory-exceptions"
          style={{
            position: "absolute",
            left: 80,
            top: 646,
            width: 1660,
            border: `4px solid ${C.green}`,
            padding: "12px 18px",
            ...enter(f, 70),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, color: C.green }}>
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
  return (
    <Shell code="04" title="复议终局：出入境措施一锤定音">
      <div
        data-layout="final-stop-terminal"
        data-visual-anchor="flow-target"
        data-visual-grammar="four-immigration-measures-arrive-at-the-final-review-terminal,the-review-decision-is-the-end-of-the-line"
        data-text-treatments="stamp,label-block,soft-highlight"
        data-focal-rule="immigration-measures-end-at-final-review"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 24 }}
      >
        <div
          data-final-knowledge="final-review-rule"
          style={{
            position: "absolute",
            left: 90,
            top: 40,
            width: 780,
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.gold }}>
            出入境管理机关对外国人及其他境外人员
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 10, color: C.white, lineHeight: 1.4 }}>
            可以依法申请行政复议，<b style={{ color: C.gold }}>该复议决定为最终决定</b>
          </div>
        </div>
        {[
          "继续盘问",
          "拘留审查",
          "限制活动范围",
          "遣送出境",
        ].map((x, i) => (
          <div
            key={x}
            data-final-knowledge={`final-measure-${i + 1}`}
            style={{
              position: "absolute",
              left: 90 + (i % 2) * 860,
              top: 196 + Math.floor(i / 2) * 140,
              width: 800,
              height: 120,
              border: `5px solid ${C.gold}`,
              background: `${C.gold}10`,
              display: "grid",
              placeItems: "center",
              fontSize: 30,
              fontWeight: 950,
              color: C.gold,
              ...enter(f, 14 + i * 10),
            }}
          >
            {x}
          </div>
        ))}
        <div
          data-final-knowledge="final-terminal"
          style={{
            position: "absolute",
            left: 590,
            top: 500,
            width: 800,
            height: 126,
            background: C.gold,
            display: "grid",
            placeItems: "center",
            ...enter(f, 54),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.navy, textAlign: "center" }}>
            终点站：复议决定 = 最终决定
            <br />
            <span style={{ fontSize: 21, fontWeight: 850 }}>
              不能再提起行政诉讼
            </span>
          </div>
        </div>
        <div
          data-final-knowledge="final-summary"
          style={{
            position: "absolute",
            left: 480,
            top: 634,
            width: 960,
            textAlign: "center",
            ...enter(f, 64),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px dashed ${C.gray}`,
              padding: "10px 18px",
              fontSize: 22,
              fontWeight: 900,
              color: C.gray,
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
    ["当场罚200元（一般罚）", "复议前置 → 不可直接起诉", false],
    ["纳税方式由定额变自行申报", "复议前置 → 不可直接起诉", false],
    ["冻结账户（强制措施）", "例外 → 可直接起诉", true],
    ["复议受理后起诉", "谁先受理算谁的 → 不受理", false],
    ["不予许可（明确拒绝）", "积极不作为 → 不需前置", true],
    ["逾期未受理（不理不睬）", "消极不作为 → 需前置", false],
    ["信息不存在不予公开", "不属于前置六类 → 不需前置", true],
    ["国家秘密不予公开", "前置案件直接起诉 → 裁定不予立案/驳回起诉", false],
  ];
  return (
    <Shell code="05" title="最爱考：谁要过复议闸，谁能直接起诉">
      <div
        data-layout="eight-judgment-switches"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="eight-exam-statements-are-routed-to-green-or-red-switches,review-gate-exceptions-are-green"
        data-text-treatments="stamp,label-block,external-negation"
        data-focal-rule="exam-traps-on-mandatory-review"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 18 }}
      >
        {traps.map((x, i) => (
          <div
            key={String(i)}
            data-final-knowledge={`trap-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 60 + (i % 2) * 900,
              top: 30 + Math.floor(i / 2) * 146,
              width: 850,
              height: 140,
              border: `4px solid ${x[2] ? C.green : C.red}`,
              background: `${x[2] ? C.green : C.red}10`,
              padding: "14px 18px",
              ...enter(f, 8 + i * 8),
            }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: x[2] ? C.green : C.red,
                  color: C.navy,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 24,
                  fontWeight: 950,
                  flex: "0 0 auto",
                }}
              >
                {x[2] ? "✓" : "✕"}
              </span>
              <div>
                <div style={{ fontSize: 23, fontWeight: 950, color: C.white }}>{x[0]}</div>
                <div style={{ fontSize: 22, fontWeight: 820, marginTop: 4, color: C.gray, lineHeight: 1.3 }}>
                  {x[1]}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="trap-summary"
          style={{
            position: "absolute",
            left: 460,
            top: 636,
            width: 1000,
            textAlign: "center",
            ...enter(f, 76),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.gold}`,
              padding: "10px 18px",
              fontSize: 24,
              fontWeight: 950,
              color: C.gold,
              rotate: "-2deg",
            }}
          >
            判断三步：先问是否前置六类，再问有无例外
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
