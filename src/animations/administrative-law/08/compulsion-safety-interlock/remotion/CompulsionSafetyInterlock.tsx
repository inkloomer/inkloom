import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  ink: "#17222B",
  steel: "#526570",
  paper: "#F5F3E8",
  white: "#FFFFFF",
  yellow: "#F2C94C",
  orange: "#E87532",
  cyan: "#2D9CDB",
  green: "#31936A",
  red: "#C4423B",
  gray: "#A9B2B6",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const enter = (f: number, d = 0, x = 0, y = 24) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `${interpolate(f, [d, d + 22], [x, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px ${interpolate(f, [d, d + 22], [y, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px`,
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
      background: C.paper,
      color: C.ink,
      overflow: "hidden",
      backgroundImage:
        "linear-gradient(rgba(23,34,43,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(23,34,43,.06) 1px,transparent 1px)",
      backgroundSize: "44px 44px",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 58,
        right: 58,
        top: 34,
        height: 112,
        borderBottom: `6px solid ${C.ink}`,
        display: "flex",
        alignItems: "center",
        gap: 24,
      }}
    >
      <div
        style={{
          width: 94,
          height: 72,
          background: C.yellow,
          color: C.ink,
          clipPath: "polygon(0 0,82% 0,100% 50%,82% 100%,0 100%)",
          display: "grid",
          placeItems: "center",
          fontSize: 25,
          fontWeight: 950,
        }}
      >
        {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 47, lineHeight: 1.08, margin: 0 }}
      >
        {title}
      </h1>
      <div
        style={{
          marginLeft: "auto",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 3,
          color: C.steel,
        }}
      >
        COMPULSION · SAFETY INTERLOCK
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 58,
        right: 58,
        top: 174,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);
const Tag = ({
  children,
  color = C.cyan,
  invert = false,
}: {
  children: React.ReactNode;
  color?: string;
  invert?: boolean;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 48,
      padding: "8px 14px",
      background: invert ? color : C.white,
      color: invert ? C.white : C.ink,
      border: `3px solid ${color}`,
      fontSize: 22,
      fontWeight: 900,
      lineHeight: 1.24,
      textAlign: "center",
    }}
  >
    {children}
  </span>
);
const Block = ({
  title,
  children,
  color = C.cyan,
  style,
}: {
  title: string;
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      background: C.white,
      border: `5px solid ${C.ink}`,
      borderTop: `13px solid ${color}`,
      padding: 20,
      boxShadow: "9px 9px 0 rgba(23,34,43,.13)",
      ...style,
    }}
  >
    <div style={{ fontSize: 30, fontWeight: 950, color }}>{title}</div>
    <div style={{ marginTop: 15 }}>{children}</div>
  </div>
);
const Stamp = ({
  children,
  color = C.red,
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <span
    style={{
      display: "inline-block",
      border: `4px solid ${color}`,
      color,
      padding: "7px 13px",
      fontSize: 22,
      fontWeight: 950,
      rotate: "-2deg",
    }}
  >
    {children}
  </span>
);
const Arrow = ({
  color = C.orange,
  down = false,
}: {
  color?: string;
  down?: boolean;
}) => (
  <span style={{ fontSize: 48, color, fontWeight: 950, lineHeight: 1 }}>
    {down ? "↓" : "→"}
  </span>
);

export const MeasureExecutionSplitScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="01" title="措施与执行：一个先控制，一个后实现">
      <div
        data-layout="split-containment-and-enforcement-bays"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="temporary-control-acts-without-a-prior-decision-in-the-left-bay,enforcement-activates-only-after-a-prior-decision-remains-unperformed-in-the-right-bay"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="distinction-between-compulsory-measures-and-enforcement"
        data-focal-channels="contrast,enclosure,spatial"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 160px 1fr",
          height: "100%",
          alignItems: "center",
          padding: "0 35px",
        }}
      >
        <div
          data-final-knowledge="measure-definition"
          style={{
            height: 550,
            border: `8px solid ${C.cyan}`,
            background: C.white,
            padding: 35,
            ...enter(f, 5, -35, 0),
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 950, color: C.cyan }}>
            行政强制措施
          </div>
          <div style={{ fontSize: 66, fontWeight: 950, marginTop: 35 }}>
            暂时控制
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 35,
            }}
          >
            <Tag color={C.cyan}>无基础决定</Tag>
            <Tag color={C.cyan}>制止违法</Tag>
            <Tag color={C.cyan}>防止证据损毁</Tag>
            <Tag color={C.cyan}>避免危害</Tag>
            <Tag color={C.cyan}>控制危险扩大</Tag>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            fontSize: 55,
            fontWeight: 950,
          }}
        >
          ≠
        </div>
        <div
          data-final-knowledge="execution-definition"
          style={{
            height: 550,
            border: `8px solid ${C.orange}`,
            background: C.ink,
            color: C.white,
            padding: 35,
            ...enter(f, 28, 35, 0),
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 950, color: C.yellow }}>
            行政强制执行
          </div>
          <div style={{ fontSize: 66, fontWeight: 950, marginTop: 35 }}>
            实现决定
          </div>
          <div style={{ display: "grid", gap: 15, marginTop: 35 }}>
            <Tag color={C.orange} invert>
              先有行政决定
            </Tag>
            <Tag color={C.orange} invert>
              当事人不履行
            </Tag>
            <Tag color={C.green} invert>
              机关自行 / 申请法院
            </Tag>
            <Tag color={C.yellow}>结果具有持续性</Tag>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const ThreeIndependentActsScene = () => {
  /* Stable generated markers: data-final-knowledge="independent-act-0" data-final-knowledge="independent-act-1" data-final-knowledge="independent-act-2" */ const f =
    useCurrentFrame();
  const a = [
    ["强制措施", "调查前后控制", "扣押 / 检查", C.cyan],
    ["行政处罚", "确认违法并惩戒", "罚款 / 责令限期拆除", C.red],
    ["强制执行", "不履行后实现", "拍卖 / 强拆", C.orange],
  ];
  return (
    <Shell code="02" title="三个独立行政行为：相邻不等于阶段从属">
      <div
        data-layout="three-independent-process-platforms"
        data-visual-anchor="flow-path"
        data-visual-grammar="measure-penalty-and-enforcement-follow-a-common-chronology,each-platform-independently-affects-rights-and-remains-a-separate-administrative-act"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="independence-of-three-administrative-acts"
        data-focal-channels="connector,contrast,motion"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          style={{
            position: "absolute",
            left: 120,
            right: 120,
            top: 330,
            height: 18,
            background: C.ink,
          }}
        />
        {a.map((x, i) => (
          <React.Fragment key={x[0]}>
            <div
              data-final-knowledge={`independent-act-${i}`}
              style={{
                position: "absolute",
                left: 70 + i * 560,
                top: i % 2 ? 380 : 65,
                width: 470,
                height: 220,
                background: C.white,
                border: `6px solid ${x[3]}`,
                padding: 24,
                ...enter(f, 6 + i * 18),
              }}
            >
              <div style={{ fontSize: 35, fontWeight: 950, color: x[3] }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 25, fontWeight: 850, marginTop: 18 }}>
                {x[1]}
              </div>
              <div style={{ marginTop: 22 }}>
                <Tag color={x[3]}>{x[2]}</Tag>
              </div>
            </div>
            {i < 2 && (
              <div
                style={{
                  position: "absolute",
                  left: 535 + i * 560,
                  top: 300,
                  fontSize: 55,
                  color: C.orange,
                }}
              >
                →
              </div>
            )}
          </React.Fragment>
        ))}
        <div
          data-final-knowledge="independent-rights-impact"
          style={{
            position: "absolute",
            left: 560,
            right: 560,
            bottom: 0,
            textAlign: "center",
          }}
        >
          <Stamp>每一行为均独立影响权利义务；强制传唤不是“过程性行为”</Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const CompulsionToolSpectrumScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="强制工具谱：措施控制对象，执行改变结果">
      <div
        data-layout="radial-measure-tools-and-two-stage-execution-drive"
        data-visual-anchor="flow-target"
        data-visual-grammar="five-measure-tools-radiate-around-temporary-control,enforcement-divides-into-direct-and-indirect-drive-systems"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="types-of-administrative-compulsion"
        data-focal-channels="icon,connector,enclosure"
        style={{ position: "absolute", inset: 10 }}
      >
        <div
          data-final-knowledge="measure-types"
          style={{
            position: "absolute",
            left: 20,
            top: 20,
            width: 960,
            height: 590,
            border: `8px solid ${C.cyan}`,
            borderRadius: "50%",
            background: C.white,
            padding: 60,
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 950,
              color: C.cyan,
              textAlign: "center",
            }}
          >
            行政强制措施
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 18,
              marginTop: 35,
            }}
          >
            {[
              "限制人身自由",
              "查封场所/设施/财物",
              "扣押财物",
              "冻结存款/汇款",
              "其他强制措施",
            ].map((x, i) => (
              <Tag
                key={x}
                color={i === 0 ? C.red : i === 3 ? C.orange : C.cyan}
              >
                {x}
              </Tag>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="execution-types"
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            width: 690,
            height: 590,
            background: C.ink,
            color: C.white,
            padding: 45,
            ...enter(f, 28, 30, 0),
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 950, color: C.yellow }}>
            行政强制执行
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 45,
            }}
          >
            <div style={{ border: `6px solid ${C.orange}`, padding: 24 }}>
              <div style={{ fontSize: 31, fontWeight: 950 }}>直接强制</div>
              <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
                <Tag color={C.orange} invert>
                  划拨
                </Tag>
                <Tag color={C.orange} invert>
                  拍卖
                </Tag>
                <Tag color={C.orange} invert>
                  排除妨碍
                </Tag>
                <Tag color={C.orange} invert>
                  恢复原状
                </Tag>
              </div>
            </div>
            <div style={{ border: `6px solid ${C.green}`, padding: 24 }}>
              <div style={{ fontSize: 31, fontWeight: 950 }}>间接强制</div>
              <div style={{ display: "grid", gap: 18, marginTop: 24 }}>
                <Tag color={C.green} invert>
                  代履行
                </Tag>
                <Tag color={C.green} invert>
                  执行罚
                </Tag>
                <Tag color={C.yellow}>滞纳金</Tag>
                <Tag color={C.yellow}>加处罚款</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const SettingAuthorityLayersScene = () => {
  /* Stable generated markers: data-final-knowledge="setting-layer-0" data-final-knowledge="setting-layer-1" data-final-knowledge="setting-layer-2" data-final-knowledge="setting-layer-3" */ const f =
    useCurrentFrame();
  const rows = [
    ["法律", "全部措施＋全部执行", C.ink, 760],
    ["行政法规", "措施：除人身、冻结、法律保留", C.orange, 620],
    ["地方性法规", "措施：仅查封、扣押", C.cyan, 490],
    ["规章/规范性文件", "无设定权", C.red, 350],
  ];
  return (
    <Shell code="04" title="设定权层板：执行权全部锁在法律层">
      <div
        data-layout="four-layer-compulsion-setting-press"
        data-visual-anchor="boundary"
        data-visual-grammar="each-lower-norm-layer-loses-measure-setting-capacity,all-enforcement-methods-remain-locked-exclusively-to-statutes"
        data-text-treatments="label-block,external-negation,thin-underline"
        data-focal-rule="setting-authority-for-measures-and-enforcement"
        data-focal-channels="spatial,enclosure,contrast"
        style={{ position: "absolute", inset: 10 }}
      >
        {rows.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`setting-layer-${i}`}
            style={{
              position: "absolute",
              left: 80 + i * 150,
              top: 45 + i * 135,
              width: x[3],
              height: 105,
              background: x[2],
              color: i === 2 ? C.ink : C.white,
              padding: "16px 25px",
              clipPath: "polygon(0 0,95% 0,100% 50%,95% 100%,0 100%)",
              ...enter(f, 6 + i * 14, -35, 0),
            }}
          >
            <b style={{ fontSize: 31 }}>{x[0]}</b>
            <span style={{ fontSize: 22, marginLeft: 22 }}>{x[1]}</span>
          </div>
        ))}
        <div
          data-final-knowledge="execution-statute-lock"
          style={{
            position: "absolute",
            right: 45,
            top: 85,
            width: 450,
            height: 390,
            background: C.ink,
            color: C.white,
            padding: 35,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 85 }}>▣</div>
          <div style={{ fontSize: 35, fontWeight: 950, color: C.yellow }}>
            强制执行设定权
          </div>
          <div style={{ fontSize: 50, fontWeight: 950, marginTop: 25 }}>
            只限法律
          </div>
          <div style={{ marginTop: 30 }}>
            <Stamp color={C.orange}>滞纳金、拍卖也不能由行政法规创设</Stamp>
          </div>
        </div>
        <div
          data-final-knowledge="specific-provision-limit"
          style={{ position: "absolute", right: 70, bottom: 15 }}
        >
          <Tag color={C.cyan}>下位法可具体规定，但不得抵触对象、条件、种类</Tag>
        </div>
      </div>
    </Shell>
  );
};

export const ImplementationSubjectCircuitScene = () => {
  /* Stable generated markers: data-final-knowledge="subject-route-0" data-final-knowledge="subject-route-1" data-final-knowledge="subject-route-2" data-final-knowledge="subject-route-3" */ const f =
    useCurrentFrame();
  return (
    <Shell code="05" title="措施主体电路：授权线很窄，委托线永久断开">
      <div
        data-layout="four-branch-implementation-subject-circuit"
        data-visual-anchor="document-fork"
        data-visual-grammar="administrative-organs-and-narrowly-authorized-organizations-connect-to-measure-power,the-delegation-branch-is-physically-open-while-custody-outsourcing-remains-a-separate-civil-line"
        data-text-treatments="external-negation,label-block,stamp"
        data-focal-rule="implementation-subjects-for-compulsory-measures"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="measure-power-source"
          style={{
            position: "absolute",
            left: 690,
            top: 220,
            width: 360,
            height: 220,
            background: C.yellow,
            border: `7px solid ${C.ink}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            fontSize: 36,
            fontWeight: 950,
          }}
        >
          行政强制
          <br />
          措施权
        </div>
        {[
          [50, 40, "机关实施", "法律、法规规定的行政机关", C.cyan],
          [1240, 40, "授权实施", "只能法律、行政法规授权", C.green],
          [50, 430, "集中实施", "集中处罚机关实施相关措施", C.orange],
          [1240, 430, "委托实施", "禁止", C.red],
        ].map((x, i) => (
          <div
            key={String(x[2])}
            data-final-knowledge={`subject-route-${i}`}
            style={{
              position: "absolute",
              left: x[0],
              top: x[1],
              width: 450,
              height: 180,
              background: C.white,
              border: `6px ${i === 3 ? "dashed" : "solid"} ${x[4]}`,
              padding: 24,
              ...enter(f, 8 + i * 13),
            }}
          >
            <div style={{ fontSize: 33, fontWeight: 950, color: x[4] }}>
              {x[2]}
            </div>
            <div style={{ fontSize: 23, marginTop: 15 }}>{x[3]}</div>
          </div>
        ))}
        <div
          data-final-knowledge="custody-outsourcing"
          style={{
            position: "absolute",
            left: 570,
            bottom: 0,
            width: 600,
            textAlign: "center",
          }}
        >
          <Stamp color={C.steel}>
            可委托第三人保管财物；损害先由行政机关国家赔偿，再追偿
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const GeneralMeasureCheckpointsScene = () => {
  /* Stable generated markers: data-final-knowledge="measure-step-0" data-final-knowledge="measure-step-1" data-final-knowledge="measure-step-2" data-final-knowledge="measure-step-3" data-final-knowledge="measure-step-4" data-final-knowledge="measure-step-5" */ const f =
    useCurrentFrame();
  const a = [
    ["报批", "负责人批准"],
    ["身份", "2名以上＋执法证"],
    ["通知", "当事人到场"],
    ["告知", "理由·依据·权利·救济"],
    ["意见", "陈述＋申辩"],
    ["笔录", "现场笔录＋签章"],
  ];
  return (
    <Shell code="06" title="一般程序六联锁：没有听证，但每一道现场保障都要闭合">
      <div
        data-layout="six-inline-measure-safety-interlocks"
        data-visual-anchor="flow-path"
        data-visual-grammar="six-procedural-interlocks-close-in-statutory-order,signature-refusal-and-party-absence-trigger-different-recording-responses"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="general-procedure-for-compulsory-measures"
        data-focal-channels="connector,motion,locator"
        style={{ position: "absolute", inset: 10 }}
      >
        <div
          style={{
            position: "absolute",
            left: 60,
            right: 60,
            top: 310,
            height: 18,
            background: C.ink,
          }}
        />
        {a.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`measure-step-${i}`}
            style={{
              position: "absolute",
              left: 20 + i * 285,
              top: i % 2 ? 365 : 70,
              width: 260,
              height: 190,
              background: C.white,
              border: `5px solid ${[C.orange, C.cyan, C.green, C.yellow, C.cyan, C.steel][i]}`,
              padding: 18,
              ...enter(f, 5 + i * 12),
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 950 }}>0{i + 1}</div>
            <div
              style={{
                fontSize: 31,
                fontWeight: 950,
                color: [C.orange, C.cyan, C.green, C.yellow, C.cyan, C.steel][
                  i
                ],
              }}
            >
              {x[0]}
            </div>
            <div style={{ fontSize: 22, marginTop: 13 }}>{x[1]}</div>
          </div>
        ))}
        <div
          data-final-knowledge="record-signature-rules"
          style={{
            position: "absolute",
            left: 160,
            bottom: 0,
            display: "flex",
            gap: 18,
          }}
        >
          <Tag color={C.orange}>拒绝签章 → 笔录注明</Tag>
          <Tag color={C.cyan}>本人不到场 → 邀见证人到场签章</Tag>
          <Stamp>行政强制措施没有听证程序</Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const EmergencyReportingForkScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="07" title="紧急分叉：财产看24小时，人身看立即">
      <div
        data-layout="emergency-property-personal-reporting-fork"
        data-visual-anchor="document-fork"
        data-visual-grammar="emergency-action-bypasses-prior-approval-then-forks-by-protected-interest,property-control-uses-a-twenty-four-hour-clock-while-personal-restraint-requires-immediate-family-notice-and-reporting"
        data-text-treatments="stamp,soft-highlight,label-block"
        data-focal-rule="emergency-measure-approval-rules"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          data-final-knowledge="emergency-source"
          style={{
            position: "absolute",
            left: 80,
            top: 240,
            width: 380,
            height: 220,
            background: C.ink,
            color: C.white,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            fontSize: 35,
            fontWeight: 950,
          }}
        >
          紧急情况
          <br />
          <span style={{ fontSize: 23, color: C.yellow }}>可先当场实施</span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 465,
            top: 335,
            fontSize: 70,
            color: C.orange,
          }}
        >
          Y
        </div>
        <div
          data-final-knowledge="emergency-property"
          style={{
            position: "absolute",
            left: 660,
            top: 40,
            width: 930,
            height: 250,
            ...enter(f, 20, 30, 0),
          }}
        >
          <Block title="限制财产" color={C.orange}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ fontSize: 72, fontWeight: 950, color: C.orange }}>
                24h
              </div>
              <Tag color={C.orange}>报告负责人</Tag>
              <Tag color={C.orange}>补办批准</Tag>
              <Tag color={C.red}>认为不应强制 → 立即解除</Tag>
            </div>
          </Block>
        </div>
        <div
          data-final-knowledge="emergency-personal"
          style={{
            position: "absolute",
            left: 660,
            bottom: 40,
            width: 930,
            height: 250,
            ...enter(f, 38, 30, 0),
          }}
        >
          <Block title="限制人身自由" color={C.red}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ fontSize: 58, fontWeight: 950, color: C.red }}>
                立即
              </div>
              <Tag color={C.red}>告知家属</Tag>
              <Tag color={C.red}>返回机关后报告</Tag>
              <Tag color={C.red}>立即补办手续</Tag>
            </div>
          </Block>
        </div>
      </div>
    </Shell>
  );
};

export const SealSeizureObjectFilterScene = () => {
  /* Stable generated markers: data-final-knowledge="reject-unrelated" data-final-knowledge="reject-necessities" data-final-knowledge="reject-duplicate" */ const f =
    useCurrentFrame();
  return (
    <Shell code="08" title="查封扣押对象筛网：一个限于，三个不得">
      <div
        data-layout="one-admission-three-rejection-clamp-filter"
        data-visual-anchor="boundary"
        data-visual-grammar="only-case-related-property-passes-the-central-clamp,unrelated-necessity-and-duplicate-seizure-items-drop-into-three-rejection-zones"
        data-text-treatments="external-negation,stamp,label-block"
        data-focal-rule="objects-of-sealing-and-seizure"
        data-focal-channels="enclosure,contrast,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="case-related-only"
          style={{
            position: "absolute",
            left: 580,
            top: 20,
            width: 580,
            height: 210,
            background: C.green,
            color: C.white,
            clipPath: "polygon(8% 0,92% 0,100% 50%,92% 100%,8% 100%,0 50%)",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 36, fontWeight: 950 }}>一个限于</div>
            <div style={{ fontSize: 27, marginTop: 14 }}>
              限于涉案场所、设施或者财物
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 850,
            top: 230,
            width: 18,
            height: 100,
            background: C.ink,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 120,
            right: 120,
            top: 330,
            height: 16,
            background: C.ink,
          }}
        />
        {[
          ["unrelated", "与违法行为无关", C.red],
          ["necessities", "个人及扶养家属生活必需品", C.orange],
          ["duplicate", "已被其他国家机关依法查封", C.cyan],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`reject-${x[0]}`}
            style={{
              position: "absolute",
              left: 70 + i * 560,
              top: 410,
              width: 500,
              height: 190,
              background: C.white,
              border: `6px dashed ${x[2]}`,
              padding: 25,
              textAlign: "center",
              ...enter(f, 20 + i * 14),
            }}
          >
            <Stamp color={x[2]}>不得</Stamp>
            <div style={{ fontSize: 28, fontWeight: 900, marginTop: 20 }}>
              {x[1]}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const SealSeizureControlPanelScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="09" title="查扣控制盘：文书、期限、费用与保管责任同时运行">
      <div
        data-layout="four-instrument-seal-seizure-control-panel"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="documents-time-cost-and-custody-run-as-four-independent-instruments,the-thirty-plus-thirty-clock-excludes-technical-testing-time"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="special-procedure-for-sealing-and-seizure"
        data-focal-channels="locator,enclosure,contrast"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          data-final-knowledge="seal-documents"
          style={{
            position: "absolute",
            left: 20,
            top: 20,
            width: 700,
            height: 270,
          }}
        >
          <Block title="当场文书" color={C.cyan}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Tag color={C.cyan}>查扣决定书</Tag>
              <Tag color={C.cyan}>清单一式两份</Tag>
              <Tag color={C.steel}>机关名称·印章·日期</Tag>
            </div>
          </Block>
        </div>
        <div
          data-final-knowledge="seal-deadline"
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            width: 900,
            height: 270,
            background: C.ink,
            color: C.white,
            padding: 28,
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.yellow }}>
            期限仪表
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginTop: 22,
            }}
          >
            <div style={{ fontSize: 72, fontWeight: 950 }}>30＋30</div>
            <Tag color={C.orange} invert>
              延长须负责人批准
            </Tag>
            <Tag color={C.yellow}>检测/检验/检疫/鉴定不计入</Tag>
          </div>
        </div>
        <div
          data-final-knowledge="seal-cost"
          style={{
            position: "absolute",
            left: 20,
            bottom: 20,
            width: 700,
            height: 285,
            background: C.white,
            border: `6px solid ${C.orange}`,
            padding: 26,
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.orange }}>
            费用归属
          </div>
          <div style={{ display: "grid", gap: 14, marginTop: 25 }}>
            <Tag color={C.orange}>技术检测鉴定费用 → 行政机关</Tag>
            <Tag color={C.orange}>保管费用 → 行政机关</Tag>
          </div>
        </div>
        <div
          data-final-knowledge="seal-custody"
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            width: 900,
            height: 285,
            background: C.white,
            border: `6px solid ${C.green}`,
            padding: 26,
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.green }}>
            财物保管
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 25,
            }}
          >
            <Tag color={C.green}>不得使用 / 损毁</Tag>
            <Arrow color={C.green} />
            <Tag color={C.red}>损失：机关赔偿</Tag>
            <Arrow color={C.orange} />
            <Tag color={C.orange}>第三人有责：机关追偿</Tag>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const SealSeizureDispositionTreeScene = () => {
  /* Stable generated markers: data-final-knowledge="disposition-0" data-final-knowledge="disposition-1" data-final-knowledge="disposition-2" */ const f =
    useCurrentFrame();
  return (
    <Shell code="10" title="查扣后续处置：违法、无关、届满分别进入不同出口">
      <div
        data-layout="three-exit-seal-seizure-disposition-tree"
        data-visual-anchor="document-fork"
        data-visual-grammar="the-investigation-result-forks-into-confiscation-destruction-or-release,released-perishables-preserve-value-through-proceeds-return-and-low-price-compensation"
        data-text-treatments="stamp,soft-highlight,label-block"
        data-focal-rule="disposition-after-sealing-and-seizure"
        data-focal-channels="connector,contrast,motion"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="disposition-source"
          style={{
            position: "absolute",
            left: 670,
            top: 10,
            width: 400,
            height: 170,
            background: C.ink,
            color: C.white,
            display: "grid",
            placeItems: "center",
            fontSize: 34,
            fontWeight: 950,
          }}
        >
          查扣调查结果
        </div>
        <div
          style={{
            position: "absolute",
            left: 860,
            top: 180,
            width: 16,
            height: 100,
            background: C.orange,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 180,
            right: 180,
            top: 275,
            height: 15,
            background: C.orange,
          }}
        />
        {[
          ["违法且依法处理", "没收优先 / 法定销毁", C.red],
          ["无违法或对象无关", "解除并立即退还", C.green],
          ["期限届满", "解除强制措施", C.cyan],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`disposition-${i}`}
            style={{
              position: "absolute",
              left: 65 + i * 570,
              top: 360,
              width: 520,
              height: 190,
              background: C.white,
              border: `6px solid ${x[2]}`,
              padding: 24,
              ...enter(f, 20 + i * 14),
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 950, color: x[2] }}>
              {x[0]}
            </div>
            <div style={{ marginTop: 25 }}>
              <Tag color={x[2]}>{x[1]}</Tag>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="perishable-return"
          style={{
            position: "absolute",
            left: 370,
            right: 370,
            bottom: 0,
            textAlign: "center",
          }}
        >
          <Stamp color={C.orange}>
            鲜活/不易保管财物已拍卖变卖：退还价款；明显低于市价 → 补偿
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const BankFreezeProtocolScene = () => {
  /* Stable generated markers: data-final-knowledge="freeze-step-0" data-final-knowledge="freeze-step-1" data-final-knowledge="freeze-step-2" data-final-knowledge="freeze-step-3" */ const f =
    useCurrentFrame();
  return (
    <Shell
      code="11"
      title="冻结协议：金额匹配、银行立即、3日送达、期满自动解锁"
    >
      <div
        data-layout="bank-freeze-valve-and-deadline-gauges"
        data-visual-anchor="flow-path"
        data-visual-grammar="an-approved-notice-opens-the-bank-freeze-valve-without-prior-disclosure,the-thirty-plus-thirty-gauge-ends-in-transfer-release-or-automatic-bank-release"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="special-procedure-for-freezing-funds"
        data-focal-channels="connector,locator,motion"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 40,
          }}
        >
          {[
            ["批准＋2人", "执法证·笔录", C.cyan],
            ["冻结通知书", "交金融机构", C.orange],
            ["银行立即冻结", "不得拖延/泄露", C.red],
            ["3日内", "向当事人交决定书", C.green],
          ].map((x, i) => (
            <React.Fragment key={x[0]}>
              <div
                data-final-knowledge={`freeze-step-${i}`}
                style={{
                  width: 360,
                  height: 210,
                  background: C.white,
                  border: `6px solid ${x[2]}`,
                  padding: 22,
                  ...enter(f, 5 + i * 14),
                }}
              >
                <div style={{ fontSize: 33, fontWeight: 950, color: x[2] }}>
                  {x[0]}
                </div>
                <div style={{ fontSize: 23, marginTop: 18 }}>{x[1]}</div>
              </div>
              {i < 3 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
        <div
          data-final-knowledge="freeze-object-limit"
          style={{ position: "absolute", left: 40, bottom: 20, width: 480 }}
        >
          <Block title="对象阀" color={C.cyan}>
            <div style={{ display: "grid", gap: 11 }}>
              <Tag color={C.cyan}>数额与涉案金额相当</Tag>
              <Tag color={C.red}>不得重复冻结</Tag>
            </div>
          </Block>
        </div>
        <div
          data-final-knowledge="freeze-deadline"
          style={{
            position: "absolute",
            left: 590,
            bottom: 20,
            width: 500,
            height: 245,
            background: C.ink,
            color: C.white,
            padding: 28,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.yellow }}>
            冻结期限
          </div>
          <div style={{ fontSize: 72, fontWeight: 950, marginTop: 18 }}>
            30＋30
          </div>
          <div style={{ fontSize: 21, color: C.gray }}>法律另有规定除外</div>
        </div>
        <div
          data-final-knowledge="freeze-outcomes"
          style={{ position: "absolute", right: 40, bottom: 20, width: 590 }}
        >
          <Block title="期末出口" color={C.green}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 11 }}>
              <Tag color={C.orange}>依法收缴 → 划拨</Tag>
              <Tag color={C.green}>无违法/无关/届满 → 解除</Tag>
              <Tag color={C.red}>逾期未处理 → 银行直接解除</Tag>
            </div>
          </Block>
        </div>
      </div>
    </Shell>
  );
};

export const ExecutionPowerGridScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="12" title="执行权电网：间接普遍，直接必须找到法律插座">
      <div
        data-layout="indirect-direct-execution-power-grid"
        data-visual-anchor="role-pair"
        data-visual-grammar="all-administrative-organs-connect-to-indirect-enforcement,direct-enforcement-routes-only-to-statutorily-named-organs-or-to-court-application"
        data-text-treatments="label-block,external-negation,stamp"
        data-focal-rule="subjects-of-administrative-enforcement"
        data-focal-channels="connector,contrast,spatial"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          data-final-knowledge="indirect-general-power"
          style={{
            position: "absolute",
            left: 25,
            top: 60,
            width: 650,
            height: 500,
            background: C.green,
            color: C.white,
            padding: 38,
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 950 }}>间接强制执行</div>
          <div style={{ fontSize: 64, fontWeight: 950, marginTop: 45 }}>
            一般机关均有
          </div>
          <div style={{ display: "flex", gap: 15, marginTop: 45 }}>
            <Tag color={C.white}>执行罚</Tag>
            <Tag color={C.white}>代履行</Tag>
          </div>
        </div>
        <div
          data-final-knowledge="direct-special-power"
          style={{
            position: "absolute",
            right: 25,
            top: 20,
            width: 920,
            height: 590,
            background: C.ink,
            color: C.white,
            padding: 35,
            ...enter(f, 25, 30, 0),
          }}
        >
          <div style={{ fontSize: 39, fontWeight: 950, color: C.yellow }}>
            直接强制执行
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 18,
              marginTop: 30,
            }}
          >
            <Block title="人身" color={C.red}>
              <Tag color={C.red}>公安 · 国安</Tag>
            </Block>
            <Block title="划拨" color={C.orange}>
              <Tag color={C.orange}>税务 · 海关</Tag>
            </Block>
            <Block title="违法建筑拆除" color={C.cyan}>
              <Tag color={C.cyan}>县级以上政府</Tag>
            </Block>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 35,
            }}
          >
            <Tag color={C.red} invert>
              无法律直接执行权
            </Tag>
            <Arrow />
            <Tag color={C.cyan} invert>
              申请法院强制执行
            </Tag>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const AuctionUnlockConditionsScene = () => {
  /* Stable generated markers: data-final-knowledge="auction-lock-0" data-final-knowledge="auction-lock-1" data-final-knowledge="auction-lock-2" data-final-knowledge="auction-lock-3" */ const f =
    useCurrentFrame();
  const locks = ["不复议", "不诉讼", "经催告仍不履行", "此前已查封/扣押"];
  return (
    <Shell code="13" title="拍卖抵罚款解锁器：山穷水尽后，只能卖原先扣住的货">
      <div
        data-layout="four-lock-auction-offset-unlocker"
        data-visual-anchor="flow-target"
        data-visual-grammar="four-cumulative-conditions-unlock-the-special-auction-power,the-unlocked-power-applies-only-to-previously-seized-property-and-only-to-fines"
        data-text-treatments="stamp,thin-underline,external-negation"
        data-focal-rule="special-auction-power-to-offset-fines"
        data-focal-channels="icon,enclosure,motion"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          data-final-knowledge="auction-core"
          style={{
            position: "absolute",
            left: 650,
            top: 100,
            width: 440,
            height: 450,
            background: C.ink,
            color: C.white,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 90 }}>▣</div>
            <div style={{ fontSize: 36, fontWeight: 950, color: C.yellow }}>
              拍卖抵罚款
            </div>
            <div style={{ fontSize: 22, marginTop: 18 }}>
              普遍授权，但条件必须齐全
            </div>
          </div>
        </div>
        {locks.map((x, i) => {
          const p = [
            [30, 35],
            [30, 390],
            [1280, 35],
            [1280, 390],
          ][i];
          return (
            <div
              key={x}
              data-final-knowledge={`auction-lock-${i}`}
              style={{
                position: "absolute",
                left: p[0],
                top: p[1],
                width: 400,
                height: 190,
                background: C.white,
                border: `6px solid ${[C.cyan, C.orange, C.red, C.green][i]}`,
                display: "grid",
                placeItems: "center",
                fontSize: 28,
                fontWeight: 950,
                textAlign: "center",
                ...enter(f, 8 + i * 13),
              }}
            >
              {x}
            </div>
          );
        })}
        <div
          data-final-knowledge="auction-three-limits"
          style={{
            position: "absolute",
            left: 350,
            right: 350,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Tag color={C.cyan}>查扣发生在处罚前</Tag>
          <Tag color={C.orange}>只能抵罚款</Tag>
          <Tag color={C.red}>只能拍卖，不得变卖/划拨</Tag>
        </div>
      </div>
    </Shell>
  );
};

export const SelfExecutionSequenceScene = () => {
  /* Stable generated markers: data-final-knowledge="self-step-0" data-final-knowledge="self-step-1" data-final-knowledge="self-step-2" */ const f =
    useCurrentFrame();
  return (
    <Shell code="14" title="自行执行主序列：催告不是终点，复核后才作执行决定">
      <div
        data-layout="three-gate-self-execution-sequence"
        data-visual-anchor="flow-path"
        data-visual-grammar="written-demand-opens-the-sequence-before-party-statement-and-organ-review,only-continued-nonperformance-without-justification-reaches-the-enforcement-decision"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="general-self-enforcement-procedure"
        data-focal-channels="connector,motion,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            marginTop: 110,
          }}
        >
          {[
            ["书面催告", "转移/隐匿财物迹象 → 可立即执行", C.orange],
            ["陈述申辩", "机关复核并采纳合理主张", C.cyan],
            ["执行决定", "催告无效＋无正当理由", C.red],
          ].map((x, i) => (
            <React.Fragment key={x[0]}>
              <div
                data-final-knowledge={`self-step-${i}`}
                style={{
                  width: 470,
                  height: 310,
                  background: C.white,
                  border: `7px solid ${x[2]}`,
                  padding: 28,
                  ...enter(f, 7 + i * 18),
                }}
              >
                <div style={{ fontSize: 40, fontWeight: 950, color: x[2] }}>
                  0{i + 1} {x[0]}
                </div>
                <div style={{ marginTop: 45 }}>
                  <Tag color={x[2]}>{x[1]}</Tag>
                </div>
              </div>
              {i < 2 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
        <div
          data-final-knowledge="self-execution-prerequisites"
          style={{
            position: "absolute",
            left: 330,
            right: 330,
            bottom: 20,
            textAlign: "center",
          }}
        >
          <Stamp color={C.steel}>
            前提：义务履行期内未履行 ＋ 行政机关依法具有自行执行权
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const ExecutionSafetyInterlocksScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="15" title="执行比例四联锁：方式、时间、手段、标的各有限位">
      <div
        data-layout="four-quadrant-execution-safety-interlocks"
        data-visual-anchor="boundary"
        data-visual-grammar="four-independent-proportionality-interlocks-limit-how-when-and-against-what-enforcement-operates,emergency-and-nonresident-contexts-open-only-their-specific-exception-paths"
        data-text-treatments="external-negation,label-block,soft-highlight"
        data-focal-rule="proportionality-limits-on-self-enforcement"
        data-focal-channels="enclosure,contrast,spatial"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 25,
          padding: 15,
        }}
      >
        <div data-final-knowledge="agreement-interlock">
          <Block
            title="方式：执行协议"
            color={C.green}
            style={{ height: "100%" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 11 }}>
              <Tag color={C.green}>不损公共利益/他人权益</Tag>
              <Tag color={C.green}>可分阶段履行</Tag>
              <Tag color={C.orange}>补救后可减免执行罚</Tag>
              <Tag color={C.red}>不得减免本金</Tag>
              <Tag color={C.red}>违约 → 恢复执行</Tag>
            </div>
          </Block>
        </div>
        <div data-final-knowledge="time-interlock">
          <Block
            title="时间：夜间与节假日"
            color={C.orange}
            style={{ height: "100%" }}
          >
            <div style={{ fontSize: 54, fontWeight: 950 }}>原则禁止</div>
            <div style={{ marginTop: 25 }}>
              <Stamp color={C.red}>情况紧急除外</Stamp>
            </div>
          </Block>
        </div>
        <div data-final-knowledge="utility-interlock">
          <Block
            title="手段：断水电气热"
            color={C.cyan}
            style={{ height: "100%" }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <Tag color={C.red}>居民生活：禁止</Tag>
              <Tag color={C.cyan}>法人/单位：不在该禁令内</Tag>
            </div>
          </Block>
        </div>
        <div data-final-knowledge="demolition-interlock">
          <Block
            title="标的：建筑物等强拆"
            color={C.red}
            style={{ height: "100%" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Tag color={C.red}>先公告限期自行拆除</Tag>
              <Tag color={C.orange}>期限内不复议</Tag>
              <Tag color={C.orange}>不诉讼</Tag>
              <Tag color={C.orange}>又不拆除</Tag>
              <Tag color={C.red} invert>
                方可强拆
              </Tag>
            </div>
          </Block>
        </div>
      </div>
    </Shell>
  );
};

export const MoneyObligationEscalatorScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="16" title="金钱义务升级梯：先间接，超过30日再接直接执行">
      <div
        data-layout="money-obligation-three-stage-escalator"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="money-obligations-first-rise-through-a-capped-surcharge,after-thirty-days-and-a-demand-the-route-branches-to-auction-or-statutory-transfer"
        data-text-treatments="stamp,thin-underline,label-block"
        data-focal-rule="enforcement-of-monetary-obligations"
        data-focal-channels="connector,locator,motion"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="money-surcharge"
          style={{
            position: "absolute",
            left: 60,
            bottom: 60,
            width: 500,
            height: 230,
            background: C.green,
            color: C.white,
            padding: 28,
            ...enter(f, 5),
          }}
        >
          <div style={{ fontSize: 35, fontWeight: 950 }}>1 · 执行罚</div>
          <div style={{ display: "grid", gap: 11, marginTop: 20 }}>
            <Tag color={C.white}>先告知</Tag>
            <Tag color={C.white}>加处罚款/滞纳金 ≤ 本数</Tag>
            <Tag color={C.yellow}>复议诉讼期间不计算加处罚款</Tag>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 570,
            bottom: 260,
            fontSize: 60,
            color: C.orange,
          }}
        >
          ↗
        </div>
        <div
          data-final-knowledge="money-thirty-days"
          style={{
            position: "absolute",
            left: 660,
            top: 210,
            width: 440,
            height: 220,
            background: C.yellow,
            border: `7px solid ${C.ink}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 70, fontWeight: 950 }}>30日</div>
            <div style={{ fontSize: 25, fontWeight: 900 }}>
              仍不履行 ＋ 再催告
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 1110,
            top: 285,
            fontSize: 60,
            color: C.orange,
          }}
        >
          Y
        </div>
        <div
          data-final-knowledge="money-direct-options"
          style={{
            position: "absolute",
            right: 45,
            top: 60,
            width: 510,
            height: 520,
            background: C.ink,
            color: C.white,
            padding: 32,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 950, color: C.yellow }}>
            2 · 直接执行
          </div>
          <div style={{ display: "grid", gap: 20, marginTop: 40 }}>
            <Tag color={C.orange} invert>
              拍卖已查封/扣押财物
            </Tag>
            <Tag color={C.cyan} invert>
              有法律授权 → 书面通知划拨
            </Tag>
            <Stamp color={C.red}>仍须匹配本机关的执行权</Stamp>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const SubstitutePerformanceGatesScene = () => {
  /* Stable generated markers: data-final-knowledge="substitute-gate-0" data-final-knowledge="substitute-gate-1" data-final-knowledge="substitute-gate-2" data-final-knowledge="substitute-gate-3" */ const f =
    useCurrentFrame();
  const gates = [
    "不履行排除妨碍/恢复原状",
    "经催告仍不履行",
    "危害交通安全/污染环境/破坏资源",
    "机关自行或无利害关系第三人",
  ];
  return (
    <Shell code="17" title="代履行准入门：义务、催告、公共风险、执行者四项齐备">
      <div
        data-layout="four-gate-substitute-performance-admission"
        data-visual-anchor="flow-path"
        data-visual-grammar="substitute-performance-crosses-four-cumulative-admission-gates,the-final-gate-allows-the-organ-or-an-interest-free-third-party-to-perform"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="conditions-for-substitute-performance"
        data-focal-channels="connector,motion,enclosure"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          style={{
            position: "absolute",
            left: 45,
            right: 45,
            top: 320,
            height: 18,
            background: C.ink,
          }}
        />
        {gates.map((x, i) => (
          <div
            key={x}
            data-final-knowledge={`substitute-gate-${i}`}
            style={{
              position: "absolute",
              left: 35 + i * 420,
              top: i % 2 ? 365 : 75,
              width: 380,
              height: 205,
              background: C.white,
              border: `7px solid ${[C.cyan, C.orange, C.red, C.green][i]}`,
              padding: 22,
              ...enter(f, 5 + i * 15),
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 950 }}>GATE 0{i + 1}</div>
            <div style={{ fontSize: 27, fontWeight: 950, marginTop: 20 }}>
              {x}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="substitute-admission"
          style={{ position: "absolute", right: 30, bottom: 0 }}
        >
          <Stamp color={C.green}>四门全开 → 可以代履行</Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const SubstitutePerformanceSequenceScene = () => {
  /* Stable generated markers: data-final-knowledge="substitute-step-0" data-final-knowledge="substitute-step-1" data-final-knowledge="substitute-step-2" data-final-knowledge="substitute-step-3" data-final-knowledge="substitute-step-4" */ const f =
    useCurrentFrame();
  return (
    <Shell code="18" title="代履行作业序列：3日再催告、现场监督、三方确认">
      <div
        data-layout="five-stage-substitute-performance-workcell"
        data-visual-anchor="flow-path"
        data-visual-grammar="ordinary-substitute-performance-runs-through-five-workcell-stages,immediate-cleanup-bypasses-the-ordinary-documents-but-requires-prompt-notice-when-the-party-is-absent"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="procedure-and-immediate-form-of-substitute-performance"
        data-focal-channels="connector,locator,contrast"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          style={{
            position: "absolute",
            left: 75,
            right: 75,
            top: 285,
            height: 18,
            background: C.ink,
          }}
        />
        <div
          data-final-knowledge="substitute-step-0"
          style={{
            position: "absolute",
            left: 45,
            top: 75,
            width: 300,
            height: 215,
            background: C.white,
            border: `6px solid ${C.cyan}`,
            padding: 22,
            clipPath: "polygon(0 0,88% 0,100% 18%,100% 100%,0 100%)",
            ...enter(f, 5, -25, 0),
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 950 }}>WORK ORDER 01</div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 950,
              color: C.cyan,
              marginTop: 15,
            }}
          >
            决定送达
          </div>
          <div
            style={{
              fontSize: 22,
              marginTop: 18,
              borderBottom: `4px solid ${C.cyan}`,
              display: "inline-block",
            }}
          >
            代履行前
          </div>
        </div>
        <div
          data-final-knowledge="substitute-step-1"
          style={{
            position: "absolute",
            left: 385,
            top: 185,
            width: 285,
            height: 265,
            borderRadius: "50%",
            border: `9px solid ${C.orange}`,
            background: C.white,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 17, 0, 25),
          }}
        >
          <div>
            <div style={{ fontSize: 70, fontWeight: 950, color: C.orange }}>
              3日
            </div>
            <div style={{ fontSize: 27, fontWeight: 950 }}>提前再催告</div>
            <div
              style={{
                fontSize: 22,
                marginTop: 12,
                background: "#FFF1D8",
                padding: "7px 12px",
              }}
            >
              已履行 → 停止
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="substitute-step-2"
          style={{
            position: "absolute",
            left: 735,
            top: 55,
            width: 300,
            height: 250,
            background: C.ink,
            color: C.white,
            padding: 25,
            clipPath:
              "polygon(0 12%,42% 12%,50% 0,58% 12%,100% 12%,100% 100%,0 100%)",
            ...enter(f, 29, 0, -25),
          }}
        >
          <div style={{ fontSize: 70, textAlign: "center", color: C.yellow }}>
            ⌾
          </div>
          <div
            style={{
              fontSize: 31,
              fontWeight: 950,
              color: C.yellow,
              textAlign: "center",
            }}
          >
            派员监督
          </div>
          <div style={{ fontSize: 22, textAlign: "center", marginTop: 12 }}>
            机关人员到场
          </div>
        </div>
        <div
          data-final-knowledge="substitute-step-3"
          style={{
            position: "absolute",
            left: 1100,
            top: 180,
            width: 330,
            height: 275,
            background: C.white,
            border: `6px solid ${C.green}`,
            padding: 23,
            ...enter(f, 41, 25, 0),
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.green }}>
            签章夹具
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            {["监督人", "代履行人", "当事人 / 见证人"].map((label, index) => (
              <span
                key={label}
                style={{
                  flex: index === 2 ? 1.5 : 1,
                  border: `3px solid ${C.green}`,
                  padding: "10px 6px",
                  fontSize: 20,
                  fontWeight: 900,
                  textAlign: "center",
                }}
              >
                {label}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Stamp color={C.green}>三方确认</Stamp>
          </div>
        </div>
        <div
          data-final-knowledge="substitute-step-4"
          style={{
            position: "absolute",
            right: 45,
            top: 65,
            width: 260,
            height: 205,
            background: C.white,
            borderTop: `16px solid ${C.steel}`,
            boxShadow: `inset 0 -13px 0 ${C.gray}`,
            padding: 22,
            ...enter(f, 53, 25, 0),
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 950, letterSpacing: 2 }}>
            COST OUTPUT
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 950,
              color: C.steel,
              marginTop: 18,
            }}
          >
            合理费用
          </div>
          <div style={{ fontSize: 22, marginTop: 20 }}>原则：当事人承担</div>
        </div>
        <div
          data-final-knowledge="immediate-substitute"
          style={{
            position: "absolute",
            left: 160,
            right: 160,
            bottom: 10,
            background: C.ink,
            color: C.white,
            padding: "18px 28px",
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.yellow }}>
            立即代履行
          </div>
          <Tag color={C.orange} invert>
            道路/河道/航道/公共场所障碍或污染
          </Tag>
          <Tag color={C.red} invert>
            当事人不能清除
          </Tag>
          <Tag color={C.green}>不在场 → 事后立即通知并处理</Tag>
        </div>
      </div>
    </Shell>
  );
};

export const ExecutionRemedySeparationScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="19" title="救济分离器：催告不可诉，基础决定与执行行为各自可诉">
      <div
        data-layout="two-track-execution-remedy-separator"
        data-visual-anchor="document-fork"
        data-visual-grammar="the-stage-only-demand-remains-inside-the-enforcement-process,final-enforcement-and-the-underlying-decision-create-separate-reviewable-acts-and-separate-actions"
        data-text-treatments="external-negation,stamp,thin-underline"
        data-focal-rule="reviewability-of-enforcement-acts"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          data-final-knowledge="demand-nonreviewable"
          style={{
            position: "absolute",
            left: 50,
            top: 230,
            width: 430,
            height: 220,
            background: C.gray,
            border: `6px dashed ${C.steel}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 36, fontWeight: 950 }}>催告</div>
            <div style={{ fontSize: 27, marginTop: 20 }}>阶段性行为</div>
            <div style={{ marginTop: 18 }}>
              <Stamp>不可单独诉</Stamp>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 490,
            top: 310,
            fontSize: 70,
            color: C.orange,
          }}
        >
          Y
        </div>
        <div
          data-final-knowledge="underlying-decision-remedy"
          style={{
            position: "absolute",
            left: 680,
            top: 35,
            width: 850,
            height: 255,
            ...enter(f, 25, 30, 0),
          }}
        >
          <Block title="基础决定违法" color={C.cyan}>
            <div style={{ display: "flex", gap: 16 }}>
              <Tag color={C.cyan}>就基础决定复议/诉讼</Tag>
              <Tag color={C.steel}>例如处罚、命令本身</Tag>
            </div>
          </Block>
        </div>
        <div
          data-final-knowledge="enforcement-act-remedy"
          style={{
            position: "absolute",
            left: 680,
            bottom: 35,
            width: 850,
            height: 255,
            ...enter(f, 43, 30, 0),
          }}
        >
          <Block title="强制执行违法" color={C.red}>
            <div style={{ display: "flex", gap: 16 }}>
              <Tag color={C.red}>就执行行为复议/诉讼</Tag>
              <Tag color={C.orange}>可申请国家赔偿</Tag>
              <Tag color={C.green}>两者均违法 → 两个诉</Tag>
            </div>
          </Block>
        </div>
      </div>
    </Shell>
  );
};

export const CourtApplicationWindowScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="20" title="法院非诉执行申请窗：3个月总窗，10日催告门槛">
      <div
        data-layout="three-month-court-application-window"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="the-court-application-window-opens-after-remedy-periods-expire-and-lasts-three-months,a-ten-day-demand-may-be-sent-before-or-after-opening-but-late-demand-consumes-window-time"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="conditions-and-timing-for-court-enforcement-application"
        data-focal-channels="locator,connector,contrast"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          data-final-knowledge="court-window"
          style={{
            position: "absolute",
            left: 100,
            right: 100,
            top: 210,
            height: 130,
            background: C.ink,
            color: C.white,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: -70,
              fontSize: 27,
              fontWeight: 950,
            }}
          >
            复议/诉讼期限届满
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: -70,
              fontSize: 27,
              fontWeight: 950,
            }}
          >
            申请截止
          </div>
          <div
            style={{
              position: "absolute",
              left: "38%",
              top: 17,
              fontSize: 66,
              fontWeight: 950,
              color: C.yellow,
            }}
          >
            3个月
          </div>
        </div>
        <div
          data-final-knowledge="court-demand-ten-days"
          style={{
            position: "absolute",
            left: 330,
            top: 390,
            width: 650,
            height: 210,
            background: C.white,
            border: `6px solid ${C.orange}`,
            padding: 25,
          }}
        >
          <div style={{ fontSize: 35, fontWeight: 950, color: C.orange }}>
            催告后10日仍不履行
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <Tag color={C.green}>可提前10日催告</Tag>
            <Tag color={C.red}>晚催告会浪费申请期</Tag>
          </div>
        </div>
        <div
          data-final-knowledge="court-subject-condition"
          style={{
            position: "absolute",
            right: 120,
            top: 390,
            width: 580,
            height: 210,
          }}
        >
          <Block title="申请主体" color={C.cyan}>
            <div style={{ display: "grid", gap: 10 }}>
              <Tag color={C.cyan}>无直接执行权机关</Tag>
              <Tag color={C.cyan}>税务/海关等特别法允许双通道者</Tag>
            </div>
          </Block>
        </div>
        <div
          data-final-knowledge="court-jurisdiction"
          style={{
            position: "absolute",
            left: 50,
            top: 30,
            display: "flex",
            gap: 14,
          }}
        >
          <Tag color={C.cyan}>一般：申请机关所在地基层法院</Tag>
          <Tag color={C.orange}>不动产：不动产所在地法院</Tag>
        </div>
      </div>
    </Shell>
  );
};

export const CourtReviewChambersScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="21" title="非诉审查舱：行政庭先书面，明显违法才转听取意见">
      <div
        data-layout="court-intake-and-two-review-chambers"
        data-visual-anchor="flow-path"
        data-visual-grammar="court-intake-precedes-administrative-division-review,ordinary-cases-receive-seven-day-written-review-while-only-obvious-illegality-opens-the-thirty-day-opinion-chamber"
        data-text-treatments="stamp,label-block,external-negation"
        data-focal-rule="court-review-of-nonlitigation-enforcement"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 15 }}
      >
        <div
          data-final-knowledge="court-intake"
          style={{
            position: "absolute",
            left: 20,
            top: 100,
            width: 390,
            height: 400,
            background: C.ink,
            color: C.white,
            padding: 30,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 950, color: C.yellow }}>
            法院入口
          </div>
          <div style={{ fontSize: 76, fontWeight: 950, marginTop: 30 }}>
            5日
          </div>
          <Tag color={C.cyan} invert>
            受理
          </Tag>
          <div style={{ marginTop: 25 }}>
            <Tag color={C.red}>不予受理 → 15日内向上一级复议</Tag>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 420,
            top: 270,
            fontSize: 60,
            color: C.orange,
          }}
        >
          →
        </div>
        <div
          data-final-knowledge="written-review"
          style={{
            position: "absolute",
            left: 540,
            top: 30,
            width: 550,
            height: 540,
            background: C.white,
            border: `7px solid ${C.cyan}`,
            padding: 30,
            ...enter(f, 20),
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 950, color: C.cyan }}>
            行政庭 · 书面审查
          </div>
          <div style={{ fontSize: 82, fontWeight: 950, marginTop: 30 }}>
            7日
          </div>
          <div style={{ display: "grid", gap: 12, marginTop: 25 }}>
            <Tag color={C.cyan}>一般仅形式审查</Tag>
            <Tag color={C.green}>符合条件 → 裁定执行</Tag>
            <Tag color={C.red}>作“裁定”，不是判决</Tag>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 1100,
            top: 270,
            fontSize: 60,
            color: C.orange,
          }}
        >
          →
        </div>
        <div
          data-final-knowledge="opinion-review"
          style={{
            position: "absolute",
            right: 20,
            top: 30,
            width: 550,
            height: 540,
            background: C.white,
            border: `7px solid ${C.red}`,
            padding: 30,
            ...enter(f, 38),
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 950, color: C.red }}>
            明显违法 · 听取意见
          </div>
          <div style={{ fontSize: 82, fontWeight: 950, marginTop: 30 }}>
            30日
          </div>
          <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
            <Tag color={C.red}>无主体资格</Tag>
            <Tag color={C.red}>明显缺乏事实根据</Tag>
            <Tag color={C.red}>明显缺乏法、法规依据</Tag>
            <Stamp>不是听证，也不是开庭</Stamp>
          </div>
        </div>
        <div
          data-final-knowledge="court-immediate-and-cost"
          style={{
            position: "absolute",
            left: 220,
            right: 220,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Tag color={C.orange}>立即执行申请＋院长批准 → 裁定后5日内执行</Tag>
          <Tag color={C.green}>申请不收费；合理执行费用由被执行人承担</Tag>
        </div>
      </div>
    </Shell>
  );
};

export const CompulsionSafetyInterlock = () => (
  <AbsoluteFill>
    <TimelineSequence
      name="01"
      start={SCENES["measure-execution-split"].start}
      duration={SCENES["measure-execution-split"].duration}
    >
      <MeasureExecutionSplitScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES["three-independent-acts"].start}
      duration={SCENES["three-independent-acts"].duration}
    >
      <ThreeIndependentActsScene />
    </TimelineSequence>
    <TimelineSequence
      name="03"
      start={SCENES["compulsion-tool-spectrum"].start}
      duration={SCENES["compulsion-tool-spectrum"].duration}
    >
      <CompulsionToolSpectrumScene />
    </TimelineSequence>
    <TimelineSequence
      name="04"
      start={SCENES["setting-authority-layers"].start}
      duration={SCENES["setting-authority-layers"].duration}
    >
      <SettingAuthorityLayersScene />
    </TimelineSequence>
    <TimelineSequence
      name="05"
      start={SCENES["implementation-subject-circuit"].start}
      duration={SCENES["implementation-subject-circuit"].duration}
    >
      <ImplementationSubjectCircuitScene />
    </TimelineSequence>
    <TimelineSequence
      name="06"
      start={SCENES["general-measure-checkpoints"].start}
      duration={SCENES["general-measure-checkpoints"].duration}
    >
      <GeneralMeasureCheckpointsScene />
    </TimelineSequence>
    <TimelineSequence
      name="07"
      start={SCENES["emergency-reporting-fork"].start}
      duration={SCENES["emergency-reporting-fork"].duration}
    >
      <EmergencyReportingForkScene />
    </TimelineSequence>
    <TimelineSequence
      name="08"
      start={SCENES["seal-seizure-object-filter"].start}
      duration={SCENES["seal-seizure-object-filter"].duration}
    >
      <SealSeizureObjectFilterScene />
    </TimelineSequence>
    <TimelineSequence
      name="09"
      start={SCENES["seal-seizure-control-panel"].start}
      duration={SCENES["seal-seizure-control-panel"].duration}
    >
      <SealSeizureControlPanelScene />
    </TimelineSequence>
    <TimelineSequence
      name="10"
      start={SCENES["seal-seizure-disposition-tree"].start}
      duration={SCENES["seal-seizure-disposition-tree"].duration}
    >
      <SealSeizureDispositionTreeScene />
    </TimelineSequence>
    <TimelineSequence
      name="11"
      start={SCENES["bank-freeze-protocol"].start}
      duration={SCENES["bank-freeze-protocol"].duration}
    >
      <BankFreezeProtocolScene />
    </TimelineSequence>
    <TimelineSequence
      name="12"
      start={SCENES["execution-power-grid"].start}
      duration={SCENES["execution-power-grid"].duration}
    >
      <ExecutionPowerGridScene />
    </TimelineSequence>
    <TimelineSequence
      name="13"
      start={SCENES["auction-unlock-conditions"].start}
      duration={SCENES["auction-unlock-conditions"].duration}
    >
      <AuctionUnlockConditionsScene />
    </TimelineSequence>
    <TimelineSequence
      name="14"
      start={SCENES["self-execution-sequence"].start}
      duration={SCENES["self-execution-sequence"].duration}
    >
      <SelfExecutionSequenceScene />
    </TimelineSequence>
    <TimelineSequence
      name="15"
      start={SCENES["execution-safety-interlocks"].start}
      duration={SCENES["execution-safety-interlocks"].duration}
    >
      <ExecutionSafetyInterlocksScene />
    </TimelineSequence>
    <TimelineSequence
      name="16"
      start={SCENES["money-obligation-escalator"].start}
      duration={SCENES["money-obligation-escalator"].duration}
    >
      <MoneyObligationEscalatorScene />
    </TimelineSequence>
    <TimelineSequence
      name="17"
      start={SCENES["substitute-performance-gates"].start}
      duration={SCENES["substitute-performance-gates"].duration}
    >
      <SubstitutePerformanceGatesScene />
    </TimelineSequence>
    <TimelineSequence
      name="18"
      start={SCENES["substitute-performance-sequence"].start}
      duration={SCENES["substitute-performance-sequence"].duration}
    >
      <SubstitutePerformanceSequenceScene />
    </TimelineSequence>
    <TimelineSequence
      name="19"
      start={SCENES["execution-remedy-separation"].start}
      duration={SCENES["execution-remedy-separation"].duration}
    >
      <ExecutionRemedySeparationScene />
    </TimelineSequence>
    <TimelineSequence
      name="20"
      start={SCENES["court-application-window"].start}
      duration={SCENES["court-application-window"].duration}
    >
      <CourtApplicationWindowScene />
    </TimelineSequence>
    <TimelineSequence
      name="21"
      start={SCENES["court-review-chambers"].start}
      duration={SCENES["court-review-chambers"].duration}
    >
      <CourtReviewChambersScene />
    </TimelineSequence>
  </AbsoluteFill>
);
