import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  night: "#11142A",
  deep: "#20264D",
  paper: "#F8F5ED",
  white: "#FFFFFF",
  cyan: "#37C9E7",
  violet: "#8267E8",
  lime: "#A8D94E",
  magenta: "#E54885",
  amber: "#F3B53F",
  gray: "#A8B2C8",
  ink: "#191D34",
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
      background: C.night,
      color: C.white,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 14% 8%,rgba(55,201,231,.18),transparent 24%),linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
      backgroundSize: "auto,52px 52px,52px 52px",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 35,
        height: 112,
        display: "flex",
        alignItems: "center",
        gap: 24,
        borderBottom: `3px solid ${C.cyan}`,
      }}
    >
      <div
        style={{
          width: 86,
          height: 70,
          border: `3px solid ${C.cyan}`,
          display: "grid",
          placeItems: "center",
          fontSize: 24,
          fontWeight: 950,
          color: C.cyan,
          clipPath: "polygon(18% 0,82% 0,100% 50%,82% 100%,18% 100%,0 50%)",
        }}
      >
        {code}
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
        TRANSPARENCY · OPTICS LAB
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: 175,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);
const Chip = ({
  children,
  color = C.cyan,
  fill = false,
}: {
  children: React.ReactNode;
  color?: string;
  fill?: boolean;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center,min-content",
      minHeight: 46,
      padding: "8px 14px",
      border: `3px solid ${color}`,
      background: fill ? color : "transparent",
      color: fill ? C.night : C.white,
      fontSize: 22,
      fontWeight: 900,
      lineHeight: 1.2,
      textAlign: "center",
    }}
  >
    {children}
  </span>
);
const Pane = ({
  title,
  color = C.cyan,
  children,
  style,
}: {
  title: string;
  color?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      background: "rgba(255,255,255,.06)",
      border: `4px solid ${color}`,
      padding: 22,
      boxShadow: `0 0 28px ${color}33`,
      ...style,
    }}
  >
    <div style={{ fontSize: 29, fontWeight: 950, color }}>{title}</div>
    <div style={{ marginTop: 18 }}>{children}</div>
  </div>
);
const Stamp = ({
  children,
  color = C.magenta,
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
  color = C.amber,
  down = false,
  style,
}: {
  color?: string;
  down?: boolean;
  style?: React.CSSProperties;
}) => (
  <span
    style={{ fontSize: 48, color, fontWeight: 950, lineHeight: 1, ...style }}
  >
    {down ? "↓" : "→"}
  </span>
);

export const SettingSpectrumScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-setting" data-final-knowledge="license-setting" data-final-knowledge="measure-setting" data-final-knowledge="execution-setting" */
  const f = useCurrentFrame();
  return (
    <Shell code="01" title="设定权光谱：四类行为随规范层级逐级失光">
      <div
        data-layout="four-independent-attenuation-beams"
        data-visual-anchor="boundary"
        data-visual-grammar="four-independent-authority-beams-enter-at-the-law-level,each-beam-narrows-or-terminates-at-its-own-normative-boundary,terminal-shutters-make-the-different-loss-points-visible-without-a-grid"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="comparison-of-setting-authority"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          style={{
            position: "absolute",
            left: 245,
            right: 20,
            top: 0,
            height: 60,
          }}
        >
          {["法律", "行政法规", "地方性法规", "规章"].map((label, i) => (
            <div
              key={label}
              style={{
                position: "absolute",
                left: 35 + i * 365,
                top: 0,
                width: 260,
                textAlign: "center",
                fontSize: 23,
                fontWeight: 950,
                color: [C.lime, C.cyan, C.violet, C.amber][i],
                borderBottom: `3px solid ${[C.lime, C.cyan, C.violet, C.amber][i]}`,
                paddingBottom: 8,
              }}
            >
              {label}
            </div>
          ))}
        </div>
        {[
          {
            id: "penalty-setting",
            name: "行政处罚",
            color: C.magenta,
            y: 95,
            stops: [
              "全部",
              "除人身自由",
              "再除吊销执照等",
              "警告·通报·一定罚款",
            ],
            widths: [1, 0.83, 0.58, 0.34],
          },
          {
            id: "license-setting",
            name: "行政许可",
            color: C.cyan,
            y: 245,
            stops: ["全部", "经常性许可", "本地经常性许可", "省级规章·1年临时"],
            widths: [1, 0.78, 0.54, 0.3],
          },
          {
            id: "measure-setting",
            name: "强制措施",
            color: C.violet,
            y: 395,
            stops: ["全部", "除人身·冻结·保留", "仅查封·扣押", "熄灭"],
            widths: [1, 0.72, 0.38, 0],
          },
          {
            id: "execution-setting",
            name: "强制执行",
            color: C.amber,
            y: 545,
            stops: ["仅法律", "熄灭", "熄灭", "熄灭"],
            widths: [1, 0, 0, 0],
          },
        ].map((beam, beamIndex) => (
          <div
            key={beam.id}
            data-final-knowledge={beam.id}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: beam.y,
              height: 118,
              ...enter(f, 5 + beamIndex * 12),
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 28,
                width: 205,
                fontSize: 29,
                fontWeight: 950,
                color: beam.color,
              }}
            >
              {beam.name}
            </div>
            {beam.widths.map((intensity, segmentIndex) => (
              <div
                key={`${beam.id}-segment-${segmentIndex}`}
                style={{
                  position: "absolute",
                  left: 215 + segmentIndex * 365,
                  top: 52 - intensity * 7,
                  width: segmentIndex === 3 ? 330 : 365,
                  height: Math.max(4, intensity * 14),
                  opacity: intensity === 0 ? 0.12 : 1,
                  background:
                    intensity === 0
                      ? `repeating-linear-gradient(90deg,${C.magenta} 0 10px,transparent 10px 22px)`
                      : `linear-gradient(90deg,${beam.color},${beam.color}88)`,
                  boxShadow:
                    intensity === 0 ? "none" : `0 0 22px ${beam.color}`,
                }}
              />
            ))}
            {beam.stops.map((label, stopIndex) => {
              const active = beam.widths[stopIndex] > 0;
              return (
                <div
                  key={`${beam.id}-${stopIndex}-${label}`}
                  style={{
                    position: "absolute",
                    left: 250 + stopIndex * 365,
                    top: active ? 5 : 15,
                    width: active ? 260 : 130,
                    minHeight: active ? 82 : 62,
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    padding: "8px 12px",
                    fontSize: stopIndex === 0 ? 25 : 22,
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: active ? C.white : C.magenta,
                    background: active ? C.deep : C.night,
                    border: active
                      ? `4px solid ${beam.color}`
                      : `4px solid ${C.magenta}`,
                    clipPath: active
                      ? "polygon(8% 0,100% 0,92% 100%,0 100%)"
                      : "polygon(12% 0,88% 0,100% 50%,88% 100%,12% 100%,0 50%)",
                  }}
                >
                  {active ? label : <span>× {label}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const RulemakingChronologyScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-rulemaking-era" data-final-knowledge="license-rulemaking-era" data-final-knowledge="compulsion-rulemaking-era" data-final-knowledge="normative-document-exception" */
  const f = useCurrentFrame();
  return (
    <Shell code="02" title="规章权限三次衰减：处罚有、许可仅省级、强制全无">
      <div
        data-layout="three-era-rulemaking-refraction"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="three-statutes-arrive-in-chronological-order,rulemaking-authority-refracts-from-general-to-provincial-only-to-none"
        data-text-treatments="thin-underline,label-block,stamp"
        data-focal-rule="chronology-of-rulemaking-authority"
        data-focal-channels="locator,contrast,motion"
        style={{ position: "absolute", inset: 30 }}
      >
        <div
          style={{
            position: "absolute",
            left: 100,
            right: 100,
            top: 315,
            height: 12,
            background: C.gray,
          }}
        />
        {[
          ["1996/2021", "处罚法", "所有规章", C.magenta],
          ["2003/2019", "许可法", "仅省级规章·1年临时", C.cyan],
          ["2011", "强制法", "所有规章均无权", C.violet],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "penalty-rulemaking-era",
                "license-rulemaking-era",
                "compulsion-rulemaking-era",
              ][i]
            }
            style={{
              position: "absolute",
              left: 80 + i * 570,
              top: i === 1 ? 60 : 365,
              width: 480,
              height: 235,
              border: `5px solid ${x[3]}`,
              background: C.deep,
              padding: 28,
              ...enter(f, 8 + i * 18),
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 950,
                color: x[3],
                borderBottom: `4px solid ${x[3]}`,
                display: "inline-block",
              }}
            >
              {x[0]}
            </div>
            <div style={{ fontSize: 31, fontWeight: 950, marginTop: 18 }}>
              {x[1]}
            </div>
            <div style={{ marginTop: 24 }}>
              <Chip color={x[3]}>{x[2]}</Chip>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="normative-document-exception"
          style={{
            position: "absolute",
            left: 510,
            right: 510,
            bottom: 0,
            textAlign: "center",
          }}
        >
          <Stamp color={C.lime}>
            其他规范性文件原则无权；唯一例外：国务院决定可设临时许可
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const SettingTrapLensesScene = () => {
  /* Stable generated markers: data-final-knowledge="trap-department-decision" data-final-knowledge="trap-license-suspension" data-final-knowledge="trap-regulation-freeze" data-final-knowledge="trap-rule-seizure" */
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="高频陷阱透镜：四句只留一束真光">
      <div
        data-layout="four-lens-setting-trap-test"
        data-visual-anchor="flow-target"
        data-visual-grammar="four-exam-statements-enter-independent-lenses,only-the-license-suspension-statement-exits-as-correct"
        data-text-treatments="external-negation,stamp,soft-highlight"
        data-focal-rule="setting-authority-traps"
        data-focal-channels="icon,contrast,enclosure"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 22,
          padding: "45px 10px",
        }}
      >
        {[
          ["国务院部门决定", "临时许可", "错：只能国务院决定", C.magenta],
          ["地方性法规", "暂扣营业执照", "对：禁吊销，不禁暂扣", C.lime],
          ["行政法规", "冻结", "错：不得限制钱自由", C.violet],
          ["省级规章", "临时扣押", "错：强制设定权为零", C.amber],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "trap-department-decision",
                "trap-license-suspension",
                "trap-regulation-freeze",
                "trap-rule-seizure",
              ][i]
            }
            style={{
              position: "relative",
              height: 520,
              border: `4px solid ${x[3]}`,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              padding: 35,
              ...enter(f, 6 + i * 13, 0, 28),
            }}
          >
            <div>
              <div style={{ fontSize: 28, fontWeight: 950, color: x[3] }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 38, fontWeight: 950, marginTop: 30 }}>
                {x[1]}
              </div>
              <div style={{ marginTop: 38 }}>
                <Stamp color={x[3]}>{x[2]}</Stamp>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const AuthorizationPrismScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-authorization" data-final-knowledge="license-authorization" data-final-knowledge="measure-authorization" data-final-knowledge="authorization-object" */
  const f = useCurrentFrame();
  return (
    <Shell code="04" title="授权棱镜：强制措施比处罚、许可少一层光源">
      <div
        data-layout="three-face-authorization-prism"
        data-visual-anchor="role-pair"
        data-visual-grammar="penalty-and-license-accept-authorization-from-laws-and-regulations,compulsory-measures-block-local-regulations-and-accept-only-laws-and-administrative-regulations"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="authorization-sources-and-effects"
        data-focal-channels="connector,contrast,spatial"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          style={{
            position: "absolute",
            left: 700,
            top: 190,
            width: 360,
            height: 310,
            clipPath: "polygon(50% 0,100% 100%,0 100%)",
            background:
              "linear-gradient(135deg,rgba(55,201,231,.6),rgba(130,103,232,.65))",
            display: "grid",
            placeItems: "end center",
            paddingBottom: 45,
            fontSize: 32,
            fontWeight: 950,
          }}
        >
          被授权组织
          <br />
          <span style={{ fontSize: 22 }}>取得行政主体资格</span>
        </div>
        {[
          ["处罚授权", "法律＋法规", 80, 70, C.magenta],
          ["许可授权", "法律＋法规", 80, 430, C.cyan],
          ["措施授权", "法律＋行政法规", 1230, 240, C.violet],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "penalty-authorization",
                "license-authorization",
                "measure-authorization",
              ][i]
            }
            style={{
              position: "absolute",
              left: x[2],
              top: x[3],
              width: 430,
              height: 180,
              border: `5px solid ${x[4]}`,
              padding: 25,
              ...enter(f, 10 + i * 17, i === 2 ? 30 : -30, 0),
            }}
          >
            <div style={{ fontSize: 31, fontWeight: 950, color: x[4] }}>
              {x[0]}
            </div>
            <div
              style={{
                fontSize: 27,
                marginTop: 22,
                borderBottom: `3px solid ${x[4]}`,
                display: "inline-block",
              }}
            >
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="authorization-object"
          style={{ position: "absolute", right: 100, bottom: 15 }}
        >
          <Chip color={C.lime}>授权对象：原无行政权能的组织</Chip>
        </div>
      </div>
    </Shell>
  );
};

export const DelegationFiltersScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-delegation" data-final-knowledge="license-delegation" data-final-knowledge="measure-delegation" */
  const f = useCurrentFrame();
  return (
    <Shell code="05" title="委托滤镜：处罚给组织，许可给机关，措施光路封死">
      <div
        data-layout="three-delegation-filter-columns"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="delegation-light-passes-through-qualified-organizations-for-penalties,through-administrative-organs-for-licenses,and-is-fully-blocked-for-compulsory-measures"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="delegation-subjects-and-effects"
        data-focal-channels="contrast,enclosure,spatial"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 32,
          padding: "45px 30px",
        }}
      >
        {[
          ["行政处罚", "符合条件的组织", "受托者无独立主体资格", C.magenta],
          ["行政许可", "其他行政机关", "受托者无独立主体资格", C.cyan],
          ["强制措施", "禁止委托", "保管财物可作民事委托", C.violet],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "penalty-delegation",
                "license-delegation",
                "measure-delegation",
              ][i]
            }
            style={{
              height: 520,
              background:
                i === 2 ? "rgba(229,72,133,.12)" : "rgba(255,255,255,.05)",
              border: `5px ${i === 2 ? "dashed" : "solid"} ${x[3]}`,
              padding: 35,
              textAlign: "center",
              ...enter(f, 8 + i * 18, 0, 25),
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 950, color: x[3] }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 50, fontWeight: 950, marginTop: 65 }}>
              {x[1]}
            </div>
            <div style={{ marginTop: 55 }}>
              {i === 2 ? (
                <Stamp>{x[2]}</Stamp>
              ) : (
                <Chip color={x[3]}>{x[2]}</Chip>
              )}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const ConcentrationAperturesScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-concentration" data-final-knowledge="license-concentration" data-final-knowledge="measure-concentration" data-final-knowledge="execution-no-concentration" */
  const f = useCurrentFrame();
  return (
    <Shell code="06" title="集中实施光圈：前三权有孔径，执行权没有集中制度">
      <div
        data-layout="four-aperture-concentration-board"
        data-visual-anchor="boundary"
        data-visual-grammar="penalty-license-and-related-measure-powers-pass-through-distinct-concentration-apertures,enforcement-power-remains-behind-a-closed-plate"
        data-text-treatments="soft-highlight,label-block,external-negation"
        data-focal-rule="concentrated-exercise-of-powers"
        data-focal-channels="enclosure,contrast,locator"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 20,
          padding: "60px 5px",
        }}
      >
        {[
          ["处罚权", "国务院或省政府决定", "人身自由处罚不得集中", C.magenta],
          ["许可权", "国务院批准＋省政府决定", "无权限种类限制", C.cyan],
          ["措施权", "随集中处罚权联动", "限相关强制措施", C.violet],
          ["执行权", "无集中制度", "不可类推", C.amber],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "penalty-concentration",
                "license-concentration",
                "measure-concentration",
                "execution-no-concentration",
              ][i]
            }
            style={{
              height: 500,
              borderRadius: "50%",
              border: `8px ${i === 3 ? "dashed" : "solid"} ${x[3]}`,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              padding: 35,
              ...enter(f, 8 + i * 14),
            }}
          >
            <div>
              <div style={{ fontSize: 38, fontWeight: 950, color: x[3] }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 27, fontWeight: 900, marginTop: 35 }}>
                {x[1]}
              </div>
              <div style={{ marginTop: 35 }}>
                <Chip color={x[3]}>{x[2]}</Chip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const SubjectTrapDarkroomScene = () => {
  /* Stable generated markers: data-final-knowledge="delegated-defendant" data-final-knowledge="invalid-authorization-defendant" data-final-knowledge="compulsion-delegation-trap" data-final-knowledge="custody-delegation-valid" */
  const f = useCurrentFrame();
  return (
    <Shell code="07" title="主体陷阱暗房：先找权力来源，再找真正被告">
      <div
        data-layout="four-specimen-subject-darkroom"
        data-visual-anchor="document-fork"
        data-visual-grammar="four-subject-problems-develop-from-source-documents,the-resulting-defendant-or-validity-label-appears-only-after-the-authority-source-is-tested"
        data-text-treatments="stamp,thin-underline,external-negation"
        data-focal-rule="implementation-subject-traps"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 25 }}
      >
        {[
          [
            "生态环境局委托乡政府",
            "乡政府是帮手",
            "被告：生态环境局",
            C.magenta,
            35,
            40,
          ],
          [
            "县文件“授权”生猪办",
            "规范性文件无授权资格",
            "视为县政府委托；被告县政府",
            C.cyan,
            900,
            40,
          ],
          ["委托城管扣押设备", "强制措施禁止委托", "违法", C.violet, 35, 365],
          ["委托仓库保管设备", "属于民事保管委托", "可以", C.lime, 900, 365],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "delegated-defendant",
                "invalid-authorization-defendant",
                "compulsion-delegation-trap",
                "custody-delegation-valid",
              ][i]
            }
            style={{
              position: "absolute",
              left: x[4],
              top: x[5],
              width: 780,
              height: 260,
              border: `4px solid ${x[3]}`,
              padding: 26,
              background: "rgba(255,255,255,.05)",
              ...enter(f, 7 + i * 13, i % 2 ? 25 : -25, 0),
            }}
          >
            <div
              style={{
                fontSize: 29,
                fontWeight: 950,
                color: x[3],
                borderBottom: `3px solid ${x[3]}`,
                display: "inline-block",
              }}
            >
              {x[0]}
            </div>
            <div style={{ fontSize: 23, marginTop: 24 }}>{x[1]}</div>
            <div style={{ marginTop: 25 }}>
              <Stamp color={x[3]}>{x[2]}</Stamp>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const HearingSignalSplitScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-hearing-exists" data-final-knowledge="license-hearing-exists" data-final-knowledge="compulsion-no-hearing" */
  const f = useCurrentFrame();
  return (
    <Shell code="08" title="听证信号分流：处罚与许可有波形，强制保持静默">
      <div
        data-layout="three-channel-hearing-signal-split"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="penalty-and-license-channels-carry-hearing-signals,compulsory-measures-and-enforcement-remain-a-flat-silent-line"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="existence-of-hearing-systems"
        data-focal-channels="contrast,motion,spatial"
        style={{
          display: "grid",
          gridTemplateRows: "repeat(3,1fr)",
          gap: 28,
          padding: "30px 50px",
        }}
      >
        {[
          ["行政处罚", "法定＋约定＋治安必要听证", "∿ ∿∿ ∿ ∿∿", C.magenta],
          ["行政许可", "依职权＋依申请", "∿∿ ∿ ∿∿ ∿", C.cyan],
          ["行政强制", "措施、执行均无听证制度", "────────", C.gray],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "penalty-hearing-exists",
                "license-hearing-exists",
                "compulsion-no-hearing",
              ][i]
            }
            style={{
              display: "grid",
              gridTemplateColumns: "300px 1fr 520px",
              alignItems: "center",
              borderLeft: `12px solid ${x[3]}`,
              padding: "10px 30px",
              ...enter(f, 8 + i * 18, -30, 0),
            }}
          >
            <div style={{ fontSize: 35, fontWeight: 950, color: x[3] }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 25 }}>{x[1]}</div>
            <div
              style={{
                fontSize: 46,
                fontWeight: 950,
                color: x[3],
                letterSpacing: 8,
              }}
            >
              {x[2]}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const PenaltyHearingWavebandScene = () => {
  /* Stable generated markers: data-final-knowledge="statutory-penalty-hearing" data-final-knowledge="security-penalty-hearing" data-final-knowledge="agreed-penalty-hearing" */
  const f = useCurrentFrame();
  return (
    <Shell code="09" title="处罚听证波段：法定高频、约定中频、治安特殊频">
      <div
        data-layout="three-band-penalty-hearing-spectrum"
        data-visual-anchor="flow-path"
        data-visual-grammar="penalty-hearing-scope-is-separated-into-statutory-agreed-and-public-security-bands,the-adult-detention-signal-enters-only-the-discretionary-band"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="scope-of-penalty-hearings"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="statutory-penalty-hearing"
          style={{
            position: "absolute",
            left: 25,
            top: 20,
            width: 740,
            height: 570,
            border: `5px solid ${C.magenta}`,
            padding: 28,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 950, color: C.magenta }}>
            法定听证 · 应告知＋申请
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 28,
            }}
          >
            {[
              "较大罚款/没收",
              "降级/吊销许可证件",
              "停产停业/关闭",
              "限制从业",
              "其他较重处罚",
            ].map((x) => (
              <Chip key={x} color={C.magenta}>
                {x}
              </Chip>
            ))}
          </div>
          <div
            style={{
              fontSize: 23,
              marginTop: 28,
              borderBottom: `3px solid ${C.magenta}`,
              display: "inline-block",
            }}
          >
            口诀：降级吊证件，责令关停业
          </div>
        </div>
        <div
          data-final-knowledge="security-penalty-hearing"
          style={{
            position: "absolute",
            right: 25,
            top: 20,
            width: 900,
            height: 300,
            border: `5px solid ${C.amber}`,
            padding: 28,
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 950, color: C.amber }}>
            治安法定：4·停·吊
          </div>
          <div style={{ display: "flex", gap: 13, marginTop: 28 }}>
            <Chip color={C.amber}>4000元以上罚款</Chip>
            <Chip color={C.amber}>停业整顿</Chip>
            <Chip color={C.amber}>吊销许可证件</Chip>
            <Chip color={C.amber}>未成年人可能执行拘留</Chip>
          </div>
        </div>
        <div
          data-final-knowledge="agreed-penalty-hearing"
          style={{
            position: "absolute",
            right: 25,
            bottom: 20,
            width: 900,
            height: 250,
            border: `5px solid ${C.violet}`,
            padding: 28,
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 950, color: C.violet }}>
            约定 / 治安必要听证
          </div>
          <div style={{ display: "flex", gap: 18, marginTop: 28 }}>
            <Chip color={C.violet}>案情复杂或重大影响</Chip>
            <Chip color={C.violet}>当事人要求＋机关认为必要</Chip>
            <Stamp color={C.magenta}>成年人拘留：可听证，不属法定告知</Stamp>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const LicenseHearingFocusScene = () => {
  /* Stable generated markers: data-final-knowledge="license-ex-officio-hearing" data-final-knowledge="license-on-application-hearing" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="10"
      title="许可听证双焦点：公共利益由机关启动，重大利害由申请启动"
    >
      <div
        data-layout="dual-focus-license-hearing-lenses"
        data-visual-anchor="role-pair"
        data-visual-grammar="public-interest-license-matters-focus-through-ex-officio-hearing,major-interests-between-applicant-and-others-focus-through-application"
        data-text-treatments="soft-highlight,label-block,thin-underline"
        data-focal-rule="scope-of-license-hearings"
        data-focal-channels="contrast,enclosure,locator"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 180px 1fr",
          alignItems: "center",
          height: "100%",
          padding: "0 45px",
        }}
      >
        <div
          data-final-knowledge="license-ex-officio-hearing"
          style={{
            height: 500,
            borderRadius: "50%",
            border: `8px solid ${C.cyan}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: 55,
            ...enter(f, 7, -35, 0),
          }}
        >
          <div>
            <div style={{ fontSize: 34, fontWeight: 950, color: C.cyan }}>
              依职权
            </div>
            <div style={{ fontSize: 48, fontWeight: 950, marginTop: 35 }}>
              公共利益
            </div>
            <div style={{ marginTop: 30 }}>
              <Chip color={C.cyan}>法/法规/规章规定应听证</Chip>
              <Chip color={C.cyan}>重大许可事项</Chip>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 70, textAlign: "center", color: C.gray }}>
          ＋
        </div>
        <div
          data-final-knowledge="license-on-application-hearing"
          style={{
            height: 500,
            borderRadius: "50%",
            border: `8px solid ${C.violet}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: 55,
            ...enter(f, 28, 35, 0),
          }}
        >
          <div>
            <div style={{ fontSize: 34, fontWeight: 950, color: C.violet }}>
              依申请
            </div>
            <div style={{ fontSize: 42, fontWeight: 950, marginTop: 35 }}>
              申请人与他人
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 950,
                marginTop: 15,
                borderBottom: `4px solid ${C.violet}`,
                display: "inline-block",
              }}
            >
              重大利益关系
            </div>
            <div style={{ marginTop: 30 }}>
              <Stamp color={C.violet}>单独告知，不必公告</Stamp>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const HearingClockArrayScene = () => {
  /* Stable generated markers: data-final-knowledge="hearing-application-five-days" data-final-knowledge="license-hearing-twenty-days" data-final-knowledge="hearing-notice-seven-days" */
  const f = useCurrentFrame();
  return (
    <Shell code="11" title="听证时钟阵列：共同5与7，许可独有20">
      <div
        data-layout="three-dial-hearing-clock-array"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="both-systems-share-five-day-application-and-seven-day-notice-clocks,only-license-hearing-has-a-twenty-day-organization-clock"
        data-text-treatments="stamp,thin-underline,label-block"
        data-focal-rule="hearing-procedure-deadlines"
        data-focal-channels="locator,contrast,enclosure"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
          padding: "0 90px",
        }}
      >
        {[
          ["5日", "被告知后提出申请", "处罚＋许可", C.lime],
          ["20日", "许可机关组织听证", "处罚无此期限", C.cyan],
          ["7日前", "通知时间地点", "许可必要时公告", C.amber],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "hearing-application-five-days",
                "license-hearing-twenty-days",
                "hearing-notice-seven-days",
              ][i]
            }
            style={{
              width: 430,
              height: 430,
              borderRadius: "50%",
              border: `9px solid ${x[3]}`,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              ...enter(f, 8 + i * 18, 0, 25),
            }}
          >
            <div>
              <div style={{ fontSize: 88, fontWeight: 950, color: x[3] }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 28, fontWeight: 950, marginTop: 15 }}>
                {x[1]}
              </div>
              <div style={{ marginTop: 25 }}>
                <Stamp color={x[3]}>{x[2]}</Stamp>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const HearingCommonConsoleScene = () => {
  /* Stable generated markers: data-final-knowledge="hearing-record-basis" data-final-knowledge="hearing-public" data-final-knowledge="hearing-recusal" data-final-knowledge="hearing-agent" data-final-knowledge="hearing-free" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="12"
      title="听证共同控制台：笔录、公开、回避、代理、免费同时点亮"
    >
      <div
        data-layout="five-switch-hearing-common-console"
        data-visual-anchor="flow-target"
        data-visual-grammar="five-common-hearing-guarantees-activate-on-one-console,the-record-switch-directly-feeds-the-final-decision"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="common-rules-of-penalty-and-license-hearings"
        data-focal-channels="icon,connector,enclosure"
        style={{ position: "absolute", inset: 30 }}
      >
        <div
          data-final-knowledge="hearing-record-basis"
          style={{
            position: "absolute",
            left: 580,
            top: 150,
            width: 600,
            height: 330,
            border: `7px solid ${C.cyan}`,
            background: C.deep,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 44, fontWeight: 950, color: C.cyan }}>
              听证笔录
            </div>
            <div style={{ fontSize: 34, fontWeight: 950, marginTop: 25 }}>
              行政决定必须“根据”笔录
            </div>
          </div>
        </div>
        {[
          ["公开", 80, 40, C.lime],
          ["主持人回避", 1270, 40, C.violet],
          ["可委托代理人", 80, 430, C.amber],
          ["不收费", 1270, 430, C.magenta],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "hearing-public",
                "hearing-recusal",
                "hearing-agent",
                "hearing-free",
              ][i]
            }
            style={{
              position: "absolute",
              left: x[1],
              top: x[2],
              width: 420,
              height: 180,
              border: `5px solid ${x[3]}`,
              display: "grid",
              placeItems: "center",
              fontSize: 31,
              fontWeight: 950,
              color: x[3],
              ...enter(f, 8 + i * 14),
            }}
          >
            {x[0]}
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const HearingTrapScopeScene = () => {
  /* Stable generated markers: data-final-knowledge="trap-no-compulsion-hearing" data-final-knowledge="trap-fine-carries-detention" data-final-knowledge="trap-suspension-no-hearing" data-final-knowledge="trap-private-interest-no-notice" data-final-knowledge="trap-hearing-publicity" */
  const f = useCurrentFrame();
  return (
    <Shell code="13" title="听证误区扫描：强制静默、暂扣不触发、公开不是裁量">
      <div
        data-layout="five-scanline-hearing-trap-scope"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-common-hearing-misstatements-are-scanned-line-by-line,the-correct-trigger-or-negation-locks-at-the-end-of-each-line"
        data-text-treatments="external-negation,thin-underline,stamp"
        data-focal-rule="hearing-exam-traps"
        data-focal-channels="annotation,contrast,motion"
        style={{ display: "grid", gap: 18, padding: "30px 110px" }}
      >
        {[
          ["扣押200万元商品", "强制措施无听证", C.violet],
          ["成年人拘留10日＋罚款5000", "罚款搭便车：应告知听证", C.lime],
          ["暂扣卫生许可证", "不属法定听证", C.magenta],
          ["个人重大利益许可听证", "单独告知，不公告", C.cyan],
          ["是否公开听证", "法定规则，不是自由裁量", C.amber],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "trap-no-compulsion-hearing",
                "trap-fine-carries-detention",
                "trap-suspension-no-hearing",
                "trap-private-interest-no-notice",
                "trap-hearing-publicity",
              ][i]
            }
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 70px 1fr",
              alignItems: "center",
              borderBottom: `3px solid ${x[2]}`,
              padding: "15px 20px",
              ...enter(f, 5 + i * 11, -25, 0),
            }}
          >
            <div style={{ fontSize: 27, fontWeight: 900 }}>{x[0]}</div>
            <Arrow color={x[2]} />
            <div style={{ fontSize: 27, fontWeight: 950, color: x[2] }}>
              {x[1]}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const InformationDefinitionProjectorScene = () => {
  /* Stable generated markers: data-final-knowledge="information-made" data-final-knowledge="information-acquired" data-final-knowledge="government-information-definition" */
  const f = useCurrentFrame();
  return (
    <Shell code="14" title="政府信息投影：履职中制作或获取，并被记录保存">
      <div
        data-layout="two-source-information-projector"
        data-visual-anchor="flow-target"
        data-visual-grammar="made-and-acquired-information-reels-enter-one-projector,only-recorded-and-preserved-administrative-management-information-appears-on-screen"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="definition-of-government-information"
        data-focal-channels="connector,enclosure,icon"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          data-final-knowledge="information-made"
          style={{
            position: "absolute",
            left: 60,
            top: 80,
            width: 420,
            height: 200,
            border: `5px solid ${C.cyan}`,
            padding: 30,
            ...enter(f, 7, -30, 0),
          }}
        >
          <div style={{ fontSize: 33, fontWeight: 950, color: C.cyan }}>
            制作
          </div>
          <div style={{ fontSize: 25, marginTop: 20 }}>许可监督检查笔录</div>
        </div>
        <div
          data-final-knowledge="information-acquired"
          style={{
            position: "absolute",
            left: 60,
            bottom: 80,
            width: 420,
            height: 200,
            border: `5px solid ${C.violet}`,
            padding: 30,
            ...enter(f, 24, -30, 0),
          }}
        >
          <div style={{ fontSize: 33, fontWeight: 950, color: C.violet }}>
            获取
          </div>
          <div style={{ fontSize: 25, marginTop: 20 }}>企业登记信息</div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 530,
            top: 170,
            fontSize: 120,
            color: C.amber,
          }}
        >
          ▷
        </div>
        <div
          data-final-knowledge="government-information-definition"
          style={{
            position: "absolute",
            right: 80,
            top: 65,
            width: 900,
            height: 520,
            border: `7px solid ${C.lime}`,
            background: "rgba(168,217,78,.08)",
            padding: 55,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 52, fontWeight: 950, color: C.lime }}>
              政府信息
            </div>
            <div style={{ fontSize: 31, fontWeight: 900, marginTop: 35 }}>
              行政机关履行行政管理职能过程中
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 18,
                marginTop: 35,
              }}
            >
              <Chip color={C.cyan}>制作或获取</Chip>
              <Chip color={C.lime}>一定形式记录</Chip>
              <Chip color={C.lime}>保存</Chip>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const DisclosureSourceRoutingScene = () => {
  /* Stable generated markers: data-final-knowledge="information-origin" data-final-knowledge="maker-or-holder-discloses" data-final-knowledge="authorized-unit-discloses" data-final-knowledge="lead-organ-discloses" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="15"
      title="公开主体路由：制作/保存者、获授权机构、共同信息牵头者"
    >
      <div
        data-layout="three-route-disclosure-source-map"
        data-visual-anchor="document-fork"
        data-visual-grammar="information-routes-to-the-maker-or-original-acquirer,authorized-branches-publish-in-their-own-name,and-joint-information-routes-to-the-lead-organ"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="subjects-responsible-for-disclosure"
        data-focal-channels="connector,locator,contrast"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="information-origin"
          style={{
            position: "absolute",
            left: 690,
            top: 10,
            width: 400,
            height: 160,
            background: C.cyan,
            color: C.night,
            display: "grid",
            placeItems: "center",
            fontSize: 35,
            fontWeight: 950,
          }}
        >
          政府信息光源
        </div>
        <div
          style={{
            position: "absolute",
            left: 880,
            top: 170,
            width: 12,
            height: 90,
            background: C.gray,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 170,
            right: 170,
            top: 250,
            height: 12,
            background: C.gray,
          }}
        />
        {[
          ["谁制作/保存", "谁公开", "其他机关信息：制作或最初获取者", C.cyan],
          ["派出/内设机构", "获授权且以自己名义履职", "机构自己公开", C.violet],
          [
            "共同信息",
            "牵头机关公开",
            "征求意见15工作日；不回复视为同意",
            C.lime,
          ],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "maker-or-holder-discloses",
                "authorized-unit-discloses",
                "lead-organ-discloses",
              ][i]
            }
            style={{
              position: "absolute",
              left: 65 + i * 570,
              top: 335,
              width: 520,
              height: 250,
              border: `5px solid ${x[3]}`,
              padding: 28,
              ...enter(f, 18 + i * 14, 0, 25),
            }}
          >
            <div style={{ fontSize: 31, fontWeight: 950, color: x[3] }}>
              {x[0]}
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 950,
                marginTop: 20,
                borderBottom: `3px solid ${x[3]}`,
                display: "inline-block",
              }}
            >
              {x[1]}
            </div>
            <div style={{ fontSize: 22, marginTop: 22 }}>{x[2]}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const AbsoluteSecrecyShutterScene = () => {
  /* Stable generated markers: data-final-knowledge="absolute-nondisclosure-core" data-final-knowledge="state-secret" data-final-knowledge="statutory-nondisclosure" data-final-knowledge="security-risk" */
  const f = useCurrentFrame();
  return (
    <Shell code="16" title="绝对遮光阀：三类信息一律不公开">
      <div
        data-layout="three-blade-absolute-secrecy-shutter"
        data-visual-anchor="boundary"
        data-visual-grammar="three-independent-blackout-blades-close-over-state-secrets,statutory-prohibitions-and-major-security-risks"
        data-text-treatments="external-negation,stamp,label-block"
        data-focal-rule="absolute-nondisclosure"
        data-focal-channels="enclosure,contrast,motion"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          data-final-knowledge="absolute-nondisclosure-core"
          style={{
            position: "absolute",
            left: 660,
            top: 190,
            width: 460,
            height: 260,
            border: `8px solid ${C.magenta}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            background: C.deep,
          }}
        >
          <div>
            <div style={{ fontSize: 52, fontWeight: 950, color: C.magenta }}>
              一律不公开
            </div>
            <div style={{ marginTop: 25 }}>
              <Stamp>不得权衡</Stamp>
            </div>
          </div>
        </div>
        {[
          ["国家秘密", 70, 70],
          ["法律/行政法规禁止公开", 1240, 70],
          ["危及国安/公安/经安/社会稳定", 540, 475],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              ["state-secret", "statutory-nondisclosure", "security-risk"][i]
            }
            style={{
              position: "absolute",
              left: x[1],
              top: x[2],
              width: i === 2 ? 700 : 480,
              height: 170,
              background: C.magenta,
              color: C.white,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              fontSize: 29,
              fontWeight: 950,
              clipPath: "polygon(0 0,92% 0,100% 50%,92% 100%,0 100%)",
              ...enter(f, 8 + i * 18, i === 1 ? 30 : -30, 0),
            }}
          >
            {x[0]}
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const PrivacyBalanceFilterScene = () => {
  /* Stable generated markers: data-final-knowledge="privacy-input" data-final-knowledge="written-consultation" data-final-knowledge="privacy-outcomes" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="17"
      title="隐私与商业秘密滤镜：15日征求意见后仍要做公共利益权衡"
    >
      <div
        data-layout="third-party-privacy-balance-filter"
        data-visual-anchor="document-fork"
        data-visual-grammar="privacy-and-trade-secret-information-enters-written-consultation,the-third-party-response-and-public-interest-weight-determine-the-output"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="conditional-nondisclosure-of-private-information"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="privacy-input"
          style={{
            position: "absolute",
            left: 40,
            top: 220,
            width: 360,
            height: 220,
            border: `6px solid ${C.violet}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            fontSize: 32,
            fontWeight: 950,
          }}
        >
          商业秘密
          <br />
          个人隐私
        </div>
        <Arrow
          color={C.amber}
          style={{ position: "absolute", left: 420, top: 290 }}
        />
        <div
          data-final-knowledge="written-consultation"
          style={{
            position: "absolute",
            left: 500,
            top: 150,
            width: 430,
            height: 360,
            borderRadius: "50%",
            border: `8px solid ${C.cyan}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 78, fontWeight: 950, color: C.cyan }}>
              15
            </div>
            <div style={{ fontSize: 29, fontWeight: 950 }}>工作日书面征求</div>
            <div style={{ marginTop: 20 }}>
              <Chip color={C.cyan}>第三方意见</Chip>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="privacy-outcomes"
          style={{
            position: "absolute",
            right: 30,
            top: 40,
            width: 740,
            height: 570,
            display: "grid",
            gridTemplateRows: "repeat(4,1fr)",
            gap: 12,
          }}
        >
          {[
            ["同意", "公开", C.lime],
            ["不同意＋合理理由", "原则不公开", C.magenta],
            ["不同意但重大公共利益", "公开", C.amber],
            ["逾期未表态", "机关权衡；不视为同意/拒绝", C.violet],
          ].map((x) => (
            <div
              key={x[0]}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                alignItems: "center",
                border: `4px solid ${x[2]}`,
                padding: "12px 20px",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 950, color: x[2] }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 23, fontWeight: 900 }}>{x[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

export const OptionalNondisclosureDimmersScene = () => {
  /* Stable generated markers: data-final-knowledge="internal-affairs-information" data-final-knowledge="process-information" data-final-knowledge="enforcement-file-information" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="18"
      title="可不公开调光器：内部事务、过程信息、执法案卷可选择降光"
    >
      <div
        data-layout="three-dimmer-optional-nondisclosure-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-discretionary-information-categories-use-independent-dimmers,statutory-disclosure-rules-can-override-the-process-and-file-dimmers"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="optional-nondisclosure"
        data-focal-channels="contrast,locator,enclosure"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 28,
          padding: "55px 20px",
        }}
      >
        {[
          ["内部事务", "人事·后勤·内部流程", "可以不公开", C.cyan],
          [
            "过程性信息",
            "讨论记录·过程稿·磋商·请示报告",
            "法律法规规章另有规定则公开",
            C.violet,
          ],
          ["行政执法案卷", "案卷材料", "法律法规规章另有规定则公开", C.amber],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "internal-affairs-information",
                "process-information",
                "enforcement-file-information",
              ][i]
            }
            style={{
              height: 500,
              border: `5px solid ${x[3]}`,
              padding: 35,
              background: `linear-gradient(180deg,${x[3]}33,transparent)`,
              ...enter(f, 8 + i * 15, 0, 30),
            }}
          >
            <div
              style={{
                height: 150,
                width: 38,
                background: `linear-gradient(${x[3]} 0 ${35 + i * 20}%,${C.deep} ${35 + i * 20}% 100%)`,
                float: "right",
                border: `3px solid ${x[3]}`,
              }}
            />
            <div style={{ fontSize: 38, fontWeight: 950, color: x[3] }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 24, marginTop: 35, maxWidth: 360 }}>
              {x[1]}
            </div>
            <div style={{ marginTop: 65 }}>
              <Stamp color={x[3]}>{x[2]}</Stamp>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const ActiveDisclosureBeamScene = () => {
  /* Stable generated markers: data-final-knowledge="public-interest-adjustment" data-final-knowledge="broad-public-awareness" data-final-knowledge="public-participation" data-final-knowledge="active-disclosure-examples" */
  const f = useCurrentFrame();
  return (
    <Shell code="19" title="主动公开光束：公众利益、广泛知晓、公众参与三项触发">
      <div
        data-layout="three-trigger-active-disclosure-beam"
        data-visual-anchor="flow-target"
        data-visual-grammar="three-public-interest-triggers-converge-on-the-active-disclosure-projector,representative-information-examples-appear-on-the-projection-screen"
        data-text-treatments="soft-highlight,label-block,thin-underline"
        data-focal-rule="content-of-active-disclosure"
        data-focal-channels="connector,enclosure,icon"
        style={{ position: "absolute", inset: 20 }}
      >
        {[
          ["公众利益调整", 60, 45, C.lime],
          ["需要广泛知晓", 60, 245, C.cyan],
          ["需要公众参与决策", 60, 445, C.violet],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "public-interest-adjustment",
                "broad-public-awareness",
                "public-participation",
              ][i]
            }
            style={{
              position: "absolute",
              left: x[1],
              top: x[2],
              width: 480,
              height: 145,
              border: `5px solid ${x[3]}`,
              display: "grid",
              placeItems: "center",
              fontSize: 30,
              fontWeight: 950,
              color: x[3],
              ...enter(f, 6 + i * 14, -30, 0),
            }}
          >
            {x[0]}
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            left: 550,
            top: 275,
            fontSize: 90,
            color: C.amber,
          }}
        >
          ▷
        </div>
        <div
          data-final-knowledge="active-disclosure-examples"
          style={{
            position: "absolute",
            right: 60,
            top: 35,
            width: 1020,
            height: 555,
            border: `7px solid ${C.lime}`,
            padding: 45,
            background: "rgba(168,217,78,.07)",
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 950, color: C.lime }}>
            主动公开投影
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 40,
            }}
          >
            <Chip color={C.magenta}>有一定社会影响的处罚决定</Chip>
            <Chip color={C.cyan}>环保/卫生/安全/食品等监督检查</Chip>
            <Chip color={C.violet}>公务员职位·名额·条件</Chip>
            <Chip color={C.lime}>公务员录用结果</Chip>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const ActiveDisclosureExposureScene = () => {
  /* Stable generated markers: data-final-knowledge="active-disclosure-deadline" data-final-knowledge="active-disclosure-channels" data-final-knowledge="active-disclosure-venues" */
  const f = useCurrentFrame();
  return (
    <Shell code="20" title="主动公开曝光：20个工作日，不存在延长曝光">
      <div
        data-layout="active-disclosure-exposure-timeline"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="information-formation-or-change-starts-a-single-twenty-working-day-exposure,the-result-disperses-through-mandatory-and-optional-publication-venues"
        data-text-treatments="stamp,label-block,external-negation"
        data-focal-rule="procedure-for-active-disclosure"
        data-focal-channels="locator,connector,contrast"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          data-final-knowledge="active-disclosure-deadline"
          style={{
            position: "absolute",
            left: 60,
            top: 120,
            width: 560,
            height: 380,
            borderRadius: "50%",
            border: `10px solid ${C.lime}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 100, fontWeight: 950, color: C.lime }}>
              20
            </div>
            <div style={{ fontSize: 30, fontWeight: 950 }}>工作日</div>
            <div style={{ fontSize: 23, marginTop: 15 }}>
              信息形成或变更之日起
            </div>
            <div style={{ marginTop: 22 }}>
              <Stamp>无延长制度</Stamp>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="active-disclosure-channels"
          style={{
            position: "absolute",
            right: 40,
            top: 30,
            width: 980,
            height: 310,
            border: `5px solid ${C.cyan}`,
            padding: 30,
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.cyan }}>
            公开方式
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 25,
            }}
          >
            {[
              "政府公报",
              "政府网站/政务媒体",
              "新闻发布会",
              "报刊",
              "广播",
              "电视",
            ].map((x) => (
              <Chip key={x} color={C.cyan}>
                {x}
              </Chip>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="active-disclosure-venues"
          style={{
            position: "absolute",
            right: 40,
            bottom: 25,
            width: 980,
            height: 250,
            border: `5px solid ${C.violet}`,
            padding: 28,
          }}
        >
          <div style={{ fontSize: 31, fontWeight: 950, color: C.violet }}>
            公开场所
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
            <Chip color={C.lime}>国家档案馆</Chip>
            <Chip color={C.lime}>公共图书馆</Chip>
            <Chip color={C.lime}>政务服务场所</Chip>
            <Chip color={C.violet}>查阅室/索取点/公告栏/电子屏</Chip>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const ApplicationInputSpecimenScene = () => {
  /* Stable generated markers: data-final-knowledge="application-relaxed-requirements" data-final-knowledge="application-required-elements" */
  const f = useCurrentFrame();
  return (
    <Shell code="21" title="申请公开标本：用途要求放松，身份与检索信息收紧">
      <div
        data-layout="application-input-specimen-tray"
        data-visual-anchor="document-fork"
        data-visual-grammar="the-obsolete-special-need-requirement-is-removed,the-application-tray-still-requires-identity-search-description-and-delivery-form"
        data-text-treatments="external-negation,label-block,thin-underline"
        data-focal-rule="requirements-for-disclosure-applications"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="application-relaxed-requirements"
          style={{
            position: "absolute",
            left: 40,
            top: 60,
            width: 520,
            height: 470,
            border: `6px dashed ${C.magenta}`,
            padding: 35,
          }}
        >
          <div style={{ fontSize: 38, fontWeight: 950, color: C.magenta }}>
            一松
          </div>
          <div style={{ fontSize: 31, fontWeight: 950, marginTop: 45 }}>
            无需特殊需要
          </div>
          <div style={{ fontSize: 26, marginTop: 25 }}>无需说明用途</div>
          <div style={{ marginTop: 55 }}>
            <Stamp>书面为主；确有困难可口头</Stamp>
          </div>
        </div>
        <div
          data-final-knowledge="application-required-elements"
          style={{
            position: "absolute",
            right: 40,
            top: 30,
            width: 1060,
            height: 560,
            border: `7px solid ${C.cyan}`,
            padding: 42,
          }}
        >
          <div style={{ fontSize: 38, fontWeight: 950, color: C.cyan }}>
            一紧 · 三组输入
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
              marginTop: 45,
            }}
          >
            <Pane title="申请人" color={C.lime}>
              <Chip color={C.lime}>姓名/名称</Chip>
              <Chip color={C.lime}>身份证明</Chip>
              <Chip color={C.lime}>联系方式</Chip>
            </Pane>
            <Pane title="检索特征" color={C.cyan}>
              <Chip color={C.cyan}>名称</Chip>
              <Chip color={C.cyan}>文号</Chip>
              <Chip color={C.cyan}>其他特征描述</Chip>
            </Pane>
            <Pane title="提供形式" color={C.violet}>
              <Chip color={C.violet}>获取方式</Chip>
              <Chip color={C.violet}>获取途径</Chip>
              <Chip color={C.violet}>形式要求</Chip>
            </Pane>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const ReceiptClockDetectorsScene = () => {
  /* Stable generated markers: data-final-knowledge="receipt-in-person" data-final-knowledge="receipt-signed-mail" data-final-knowledge="receipt-confirmed-channel" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="22"
      title="收到日探测器：当面看提交，签收邮寄看签收，其余看确认"
    >
      <div
        data-layout="three-detector-receipt-clock"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-application-channels-trigger-receipt-on-submission-signature-or-mutual-confirmation,the-clock-origin-changes-with-the-delivery-method"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="date-of-receipt-for-applications"
        data-focal-channels="locator,contrast,enclosure"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 30,
          padding: "50px 20px",
        }}
      >
        {[
          ["当面申请", "提交之日", "即时触发", C.lime],
          ["需签收邮寄", "机关签收之日", "签收触发", C.cyan],
          [
            "普通信函/互联网/传真",
            "双方确认之日",
            "普通信函须当日确认",
            C.violet,
          ],
        ].map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={
              [
                "receipt-in-person",
                "receipt-signed-mail",
                "receipt-confirmed-channel",
              ][i]
            }
            style={{
              height: 500,
              border: `6px solid ${x[3]}`,
              padding: 40,
              textAlign: "center",
              ...enter(f, 8 + i * 17, 0, 30),
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 950, color: x[3] }}>
              {x[0]}
            </div>
            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                border: `8px solid ${x[3]}`,
                margin: "45px auto 0",
                display: "grid",
                placeItems: "center",
                fontSize: 30,
                fontWeight: 950,
              }}
            >
              {x[1]}
            </div>
            <div style={{ marginTop: 35 }}>
              <Stamp color={x[3]}>{x[2]}</Stamp>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const ResponseSpectrumSplitterScene = () => {
  /* Stable generated markers: data-final-knowledge="response-deadline" data-final-knowledge="response-form" data-final-knowledge="response-splitter" data-final-knowledge="response-cost" data-final-knowledge="response-severability" data-final-knowledge="negative-response" */
  const f = useCurrentFrame();
  return (
    <Shell code="23" title="答复分光器：期限、形式、费用、分割、去向分别输出">
      <div
        data-layout="five-output-response-spectrum-splitter"
        data-visual-anchor="flow-target"
        data-visual-grammar="one-disclosure-application-enters-a-five-output-splitter,deadline-form-cost-severability-and-negative-response-each-use-a-distinct-output"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="response-to-disclosure-applications"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="response-deadline"
          style={{
            position: "absolute",
            left: 30,
            top: 45,
            width: 400,
            height: 250,
            border: `6px solid ${C.lime}`,
            padding: 26,
          }}
        >
          <div style={{ fontSize: 70, fontWeight: 950, color: C.lime }}>
            当场 / 20＋20
          </div>
          <div style={{ fontSize: 22, marginTop: 20 }}>
            延长须负责人同意并告知；征求第三方/其他机关意见时间不计
          </div>
        </div>
        <div
          data-final-knowledge="response-form"
          style={{
            position: "absolute",
            left: 30,
            bottom: 30,
            width: 400,
            height: 250,
            border: `6px solid ${C.cyan}`,
            padding: 26,
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 950, color: C.cyan }}>
            提供形式
          </div>
          <div style={{ fontSize: 23, marginTop: 24 }}>
            结合申请要求＋机关保存实际；载体风险/成本过高可改电子、查阅、抄录
          </div>
        </div>
        <div
          data-final-knowledge="response-splitter"
          style={{
            position: "absolute",
            left: 680,
            top: 185,
            width: 360,
            height: 300,
            clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)",
            background:
              "linear-gradient(135deg,rgba(55,201,231,.7),rgba(130,103,232,.8))",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 950,
          }}
        >
          申请
          <br />
          答复
        </div>
        <div
          data-final-knowledge="response-cost"
          style={{
            position: "absolute",
            right: 30,
            top: 30,
            width: 540,
            height: 160,
            border: `5px solid ${C.amber}`,
            padding: 24,
          }}
        >
          <div style={{ fontSize: 29, fontWeight: 950, color: C.amber }}>
            费用
          </div>
          <div style={{ fontSize: 22, marginTop: 16 }}>
            原则免费；数量频次明显超合理范围可收信息处理费
          </div>
        </div>
        <div
          data-final-knowledge="response-severability"
          style={{
            position: "absolute",
            right: 30,
            top: 225,
            width: 540,
            height: 180,
            border: `5px solid ${C.violet}`,
            padding: 24,
          }}
        >
          <div style={{ fontSize: 29, fontWeight: 950, color: C.violet }}>
            可分割处理
          </div>
          <div style={{ fontSize: 22, marginTop: 16 }}>
            公开可公开部分；不公开部分说明理由
          </div>
        </div>
        <div
          data-final-knowledge="negative-response"
          style={{
            position: "absolute",
            right: 30,
            bottom: 30,
            width: 540,
            height: 180,
            border: `5px solid ${C.magenta}`,
            padding: 24,
          }}
        >
          <div style={{ fontSize: 29, fontWeight: 950, color: C.magenta }}>
            不公开 / 不存在 / 非本机关
          </div>
          <div style={{ fontSize: 22, marginTop: 14 }}>
            说明理由；可确定负责机关时告知名称、联系方式
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const SupplementCorrectionGateScene = () => {
  /* Stable generated markers: data-final-knowledge="unclear-application" data-final-knowledge="supplement-notice" data-final-knowledge="supplement-outcomes" */
  const f = useCurrentFrame();
  return (
    <Shell code="24" title="材料补正闸：7日内一次告知，逾期不补正才退出">
      <div
        data-layout="seven-day-supplement-correction-gate"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="an-unclear-application-enters-guidance-and-one-time-notice,the-applicant-either-corrects-or-exits-after-unjustified-delay"
        data-text-treatments="external-negation,thin-underline,stamp"
        data-focal-rule="supplementing-unclear-applications"
        data-focal-channels="connector,locator,contrast"
        style={{ position: "absolute", inset: 25 }}
      >
        <div
          data-final-knowledge="unclear-application"
          style={{
            position: "absolute",
            left: 50,
            top: 220,
            width: 360,
            height: 220,
            border: `6px dashed ${C.gray}`,
            display: "grid",
            placeItems: "center",
            fontSize: 32,
            fontWeight: 950,
            textAlign: "center",
          }}
        >
          申请内容
          <br />
          不明确
        </div>
        <Arrow
          color={C.cyan}
          style={{ position: "absolute", left: 445, top: 290 }}
        />
        <div
          data-final-knowledge="supplement-notice"
          style={{
            position: "absolute",
            left: 560,
            top: 110,
            width: 540,
            height: 450,
            borderRadius: "50%",
            border: `9px solid ${C.cyan}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 88, fontWeight: 950, color: C.cyan }}>
              7
            </div>
            <div style={{ fontSize: 30, fontWeight: 950 }}>
              工作日内一次告知
            </div>
            <div
              style={{
                fontSize: 24,
                marginTop: 20,
                borderBottom: `3px solid ${C.cyan}`,
                display: "inline-block",
              }}
            >
              指导＋释明＋更改/补充
            </div>
            <div style={{ marginTop: 25 }}>
              <Stamp color={C.magenta}>不能直接拒绝公开</Stamp>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="supplement-outcomes"
          style={{
            position: "absolute",
            right: 40,
            top: 110,
            width: 530,
            height: 450,
            display: "grid",
            gap: 25,
          }}
        >
          <Pane title="按期补正" color={C.lime}>
            <Chip color={C.lime}>继续处理申请</Chip>
          </Pane>
          <Pane title="无正当理由逾期" color={C.magenta}>
            <Chip color={C.magenta}>视为放弃</Chip>
            <Chip color={C.magenta}>机关不再处理</Chip>
          </Pane>
          <Stamp color={C.violet}>补正通知是过程行为，不可单独诉</Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const SpecialRequestRouterScene = () => {
  /* Stable generated markers: data-final-knowledge="special-router" data-final-knowledge="motive-channel" data-final-knowledge="analysis-request" data-final-knowledge="published-material" data-final-knowledge="correction-request" data-final-knowledge="application-to-active" */
  const f = useCurrentFrame();
  return (
    <Shell
      code="25"
      title="特殊申请路由器：错频道、加工、已公开、更正、转主动各走一口"
    >
      <div
        data-layout="five-port-special-request-router"
        data-visual-anchor="document-fork"
        data-visual-grammar="five-special-request-types-enter-a-central-router,each-exits-through-its-own-statutory-treatment-port"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="special-treatment-of-disclosure-requests"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="special-router"
          style={{
            position: "absolute",
            left: 690,
            top: 190,
            width: 380,
            height: 300,
            borderRadius: "50%",
            background: C.deep,
            border: `8px solid ${C.cyan}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            fontSize: 36,
            fontWeight: 950,
          }}
        >
          特殊申请
          <br />
          路由器
        </div>
        {[
          [
            "信访/投诉/举报",
            "告知不作为公开申请；可指引相应渠道",
            40,
            25,
            C.magenta,
            "motive-channel",
          ],
          [
            "加工分析信息",
            "可以不予提供",
            1230,
            25,
            C.violet,
            "analysis-request",
          ],
          [
            "公报/报刊/书籍",
            "告知获取途径",
            30,
            455,
            C.amber,
            "published-material",
          ],
          [
            "信息有误更正",
            "有权机关更正；无权可转送或告知",
            1210,
            455,
            C.lime,
            "correction-request",
          ],
          [
            "多人申请同一可公开信息",
            "可以转为主动公开",
            580,
            510,
            C.cyan,
            "application-to-active",
          ],
        ].map((x) => (
          <div
            key={x[0]}
            data-final-knowledge={x[5]}
            style={{
              position: "absolute",
              left: x[2],
              top: x[3],
              width: x[5] === "application-to-active" ? 600 : 500,
              height: x[5] === "application-to-active" ? 130 : 180,
              border: `5px solid ${x[4]}`,
              padding: 22,
              ...enter(f, 8, 0, 20),
            }}
          >
            <div style={{ fontSize: 27, fontWeight: 950, color: x[4] }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 21, marginTop: 17 }}>{x[1]}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const AbuseThrottleRemedyScene = () => {
  /* Stable generated markers: data-final-knowledge="excessive-request" data-final-knowledge="reason-throttle" data-final-knowledge="abuse-outcomes" */
  const f = useCurrentFrame();
  return (
    <Shell code="26" title="滥用申请节流与救济：先问理由，再决定不处理或延迟">
      <div
        data-layout="abuse-throttle-and-remedy-output"
        data-visual-anchor="flow-path"
        data-visual-grammar="excessive-frequency-enters-a-reason-throttle,unreasonable-reasons-stop-processing-while-reasonable-but-impracticable-requests-receive-a-notified-delay"
        data-text-treatments="stamp,thin-underline,label-block"
        data-focal-rule="abusive-requests-and-remedies"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="excessive-request"
          style={{
            position: "absolute",
            left: 30,
            top: 210,
            width: 390,
            height: 230,
            border: `7px solid ${C.magenta}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 34, fontWeight: 950, color: C.magenta }}>
              数量 / 频次
            </div>
            <div style={{ fontSize: 44, fontWeight: 950, marginTop: 20 }}>
              明显超合理范围
            </div>
          </div>
        </div>
        <Arrow
          color={C.amber}
          style={{ position: "absolute", left: 465, top: 290 }}
        />
        <div
          data-final-knowledge="reason-throttle"
          style={{
            position: "absolute",
            left: 570,
            top: 120,
            width: 470,
            height: 410,
            borderRadius: "50%",
            border: `9px solid ${C.amber}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 39, fontWeight: 950, color: C.amber }}>
              要求说明理由
            </div>
            <div
              style={{
                fontSize: 24,
                marginTop: 24,
                borderBottom: `3px solid ${C.amber}`,
                display: "inline-block",
              }}
            >
              不是立即拒绝
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="abuse-outcomes"
          style={{
            position: "absolute",
            right: 30,
            top: 50,
            width: 620,
            height: 520,
            display: "grid",
            gap: 24,
          }}
        >
          <Pane title="理由不合理" color={C.magenta}>
            <Stamp>告知不予处理</Stamp>
          </Pane>
          <Pane title="理由合理但法定期内无法答复" color={C.cyan}>
            <Chip color={C.cyan}>确定合理延迟期限</Chip>
            <Chip color={C.cyan}>告知申请人</Chip>
          </Pane>
          <Pane title="救济边界" color={C.lime}>
            <Chip color={C.lime}>公开/不公开等最终答复可诉</Chip>
            <Chip color={C.violet}>补正通知过程性，不可单诉</Chip>
          </Pane>
        </div>
      </div>
    </Shell>
  );
};

export const TransparencyOpticsLab = () => (
  <AbsoluteFill>
    <TimelineSequence
      name="01"
      start={SCENES["setting-spectrum"].start}
      duration={SCENES["setting-spectrum"].duration}
    >
      <SettingSpectrumScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES["rulemaking-chronology"].start}
      duration={SCENES["rulemaking-chronology"].duration}
    >
      <RulemakingChronologyScene />
    </TimelineSequence>
    <TimelineSequence
      name="03"
      start={SCENES["setting-trap-lenses"].start}
      duration={SCENES["setting-trap-lenses"].duration}
    >
      <SettingTrapLensesScene />
    </TimelineSequence>
    <TimelineSequence
      name="04"
      start={SCENES["authorization-prism"].start}
      duration={SCENES["authorization-prism"].duration}
    >
      <AuthorizationPrismScene />
    </TimelineSequence>
    <TimelineSequence
      name="05"
      start={SCENES["delegation-filters"].start}
      duration={SCENES["delegation-filters"].duration}
    >
      <DelegationFiltersScene />
    </TimelineSequence>
    <TimelineSequence
      name="06"
      start={SCENES["concentration-apertures"].start}
      duration={SCENES["concentration-apertures"].duration}
    >
      <ConcentrationAperturesScene />
    </TimelineSequence>
    <TimelineSequence
      name="07"
      start={SCENES["subject-trap-darkroom"].start}
      duration={SCENES["subject-trap-darkroom"].duration}
    >
      <SubjectTrapDarkroomScene />
    </TimelineSequence>
    <TimelineSequence
      name="08"
      start={SCENES["hearing-signal-split"].start}
      duration={SCENES["hearing-signal-split"].duration}
    >
      <HearingSignalSplitScene />
    </TimelineSequence>
    <TimelineSequence
      name="09"
      start={SCENES["penalty-hearing-waveband"].start}
      duration={SCENES["penalty-hearing-waveband"].duration}
    >
      <PenaltyHearingWavebandScene />
    </TimelineSequence>
    <TimelineSequence
      name="10"
      start={SCENES["license-hearing-focus"].start}
      duration={SCENES["license-hearing-focus"].duration}
    >
      <LicenseHearingFocusScene />
    </TimelineSequence>
    <TimelineSequence
      name="11"
      start={SCENES["hearing-clock-array"].start}
      duration={SCENES["hearing-clock-array"].duration}
    >
      <HearingClockArrayScene />
    </TimelineSequence>
    <TimelineSequence
      name="12"
      start={SCENES["hearing-common-console"].start}
      duration={SCENES["hearing-common-console"].duration}
    >
      <HearingCommonConsoleScene />
    </TimelineSequence>
    <TimelineSequence
      name="13"
      start={SCENES["hearing-trap-scope"].start}
      duration={SCENES["hearing-trap-scope"].duration}
    >
      <HearingTrapScopeScene />
    </TimelineSequence>
    <TimelineSequence
      name="14"
      start={SCENES["information-definition-projector"].start}
      duration={SCENES["information-definition-projector"].duration}
    >
      <InformationDefinitionProjectorScene />
    </TimelineSequence>
    <TimelineSequence
      name="15"
      start={SCENES["disclosure-source-routing"].start}
      duration={SCENES["disclosure-source-routing"].duration}
    >
      <DisclosureSourceRoutingScene />
    </TimelineSequence>
    <TimelineSequence
      name="16"
      start={SCENES["absolute-secrecy-shutter"].start}
      duration={SCENES["absolute-secrecy-shutter"].duration}
    >
      <AbsoluteSecrecyShutterScene />
    </TimelineSequence>
    <TimelineSequence
      name="17"
      start={SCENES["privacy-balance-filter"].start}
      duration={SCENES["privacy-balance-filter"].duration}
    >
      <PrivacyBalanceFilterScene />
    </TimelineSequence>
    <TimelineSequence
      name="18"
      start={SCENES["optional-nondisclosure-dimmers"].start}
      duration={SCENES["optional-nondisclosure-dimmers"].duration}
    >
      <OptionalNondisclosureDimmersScene />
    </TimelineSequence>
    <TimelineSequence
      name="19"
      start={SCENES["active-disclosure-beam"].start}
      duration={SCENES["active-disclosure-beam"].duration}
    >
      <ActiveDisclosureBeamScene />
    </TimelineSequence>
    <TimelineSequence
      name="20"
      start={SCENES["active-disclosure-exposure"].start}
      duration={SCENES["active-disclosure-exposure"].duration}
    >
      <ActiveDisclosureExposureScene />
    </TimelineSequence>
    <TimelineSequence
      name="21"
      start={SCENES["application-input-specimen"].start}
      duration={SCENES["application-input-specimen"].duration}
    >
      <ApplicationInputSpecimenScene />
    </TimelineSequence>
    <TimelineSequence
      name="22"
      start={SCENES["receipt-clock-detectors"].start}
      duration={SCENES["receipt-clock-detectors"].duration}
    >
      <ReceiptClockDetectorsScene />
    </TimelineSequence>
    <TimelineSequence
      name="23"
      start={SCENES["response-spectrum-splitter"].start}
      duration={SCENES["response-spectrum-splitter"].duration}
    >
      <ResponseSpectrumSplitterScene />
    </TimelineSequence>
    <TimelineSequence
      name="24"
      start={SCENES["supplement-correction-gate"].start}
      duration={SCENES["supplement-correction-gate"].duration}
    >
      <SupplementCorrectionGateScene />
    </TimelineSequence>
    <TimelineSequence
      name="25"
      start={SCENES["special-request-router"].start}
      duration={SCENES["special-request-router"].duration}
    >
      <SpecialRequestRouterScene />
    </TimelineSequence>
    <TimelineSequence
      name="26"
      start={SCENES["abuse-throttle-remedy"].start}
      duration={SCENES["abuse-throttle-remedy"].duration}
    >
      <AbuseThrottleRemedyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
