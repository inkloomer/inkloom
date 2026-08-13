import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  paper: "#F5EFE0",
  cream: "#FBF7EC",
  ink: "#22304A",
  blue: "#2F6DB5",
  green: "#2E8B57",
  red: "#C0392B",
  gray: "#8A93A6",
  amber: "#C9852B",
  white: "#FFFFFF",
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
      background: C.paper,
      color: C.ink,
      overflow: "hidden",
      backgroundImage:
        "linear-gradient(rgba(34,48,74,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,48,74,.05) 1px,transparent 1px)",
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
        borderBottom: `4px solid ${C.ink}`,
      }}
    >
      <div
        style={{
          width: 150,
          height: 78,
          background: C.ink,
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%,12px 50%)",
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: C.paper,
          letterSpacing: 2,
        }}
      >
        CASE {code}
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
        DISCLOSURE · CASE DESK
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

const Chip = ({
  children,
  color = C.blue,
  fill = false,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 46,
      padding: "8px 14px",
      border: `3px solid ${color}`,
      background: fill ? color : "transparent",
      color: fill ? C.paper : C.ink,
      fontSize: 22,
      fontWeight: 900,
      lineHeight: 1.25,
      textAlign: "center",
      ...style,
    }}
  >
    {children}
  </span>
);

const Stamp = ({
  children,
  color = C.red,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-block",
      border: `4px solid ${color}`,
      color,
      padding: "7px 14px",
      fontSize: 24,
      fontWeight: 950,
      rotate: "-3deg",
      lineHeight: 1.2,
      ...style,
    }}
  >
    {children}
  </span>
);

const Slip = ({
  children,
  color = C.blue,
  style,
  finalKnowledge,
  statefulSource,
  statefulTerminal,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
  finalKnowledge?: string;
  statefulSource?: string;
  statefulTerminal?: string;
}) => (
  <div
    data-final-knowledge={finalKnowledge}
    data-stateful-source={statefulSource}
    data-stateful-terminal={statefulTerminal}
    style={{
      background: C.white,
      border: `3px solid ${color}`,
      borderLeft: `10px solid ${color}`,
      padding: "12px 16px",
      boxShadow: `6px 6px 0 ${color}26`,
      fontSize: 22,
      fontWeight: 850,
      lineHeight: 1.3,
      color: C.ink,
      ...style,
    }}
  >
    {children}
  </div>
);

const Arrow = ({
  color = C.ink,
  down = false,
  style,
}: {
  color?: string;
  down?: boolean;
  style?: React.CSSProperties;
}) => (
  <span style={{ fontSize: 46, color, fontWeight: 950, lineHeight: 1, ...style }}>
    {down ? "↓" : "→"}
  </span>
);

const Neg = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: C.red,
      fontWeight: 950,
      fontSize: 23,
      lineHeight: 1.25,
      ...style,
    }}
  >
    <span
      style={{
        width: 34,
        height: 34,
        border: `4px solid ${C.red}`,
        borderRadius: "50%",
        display: "inline-grid",
        placeItems: "center",
        fontSize: 22,
        flex: "0 0 auto",
      }}
    >
      ✕
    </span>
    <span>{children}</span>
  </span>
);

export const CaseMainlineScene = () => {
  /* Static audit inventory: data-final-knowledge="station-apply" data-final-knowledge="station-respond" data-final-knowledge="station-remedy" data-final-knowledge="proactive-not-directly-sue" data-final-knowledge="procedural-notice-not-sue" data-final-knowledge="burden-overview" data-stateful-source="mainline-slip" data-stateful-terminal="mainline-slip" */
  const f = useCurrentFrame();
  const slipX = interpolate(f, [12, 220], [80, 1640], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  return (
    <Shell code="01" title="案件主线：申请 → 答复 → 救济">
      <div
        data-layout="three-station-case-conveyor"
        data-visual-anchor="flow-path"
        data-visual-grammar="case-slip-travels-apply-respond-remedy,procedural-exceptions-block-the-route"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="government-information-litigation-mainline"
        data-focal-channels="connector,locator,motion"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          style={{
            position: "absolute",
            top: 96,
            left: 120,
            right: 120,
            height: 10,
            background: C.gray,
          }}
        />
        {[
          ["申请", "向行政机关申请获取政府信息", C.blue, 90],
          ["答复", "公开 · 不予公开 · 逾期不答复", C.green, 640],
          ["救济", "申请复议或者提起行政诉讼", C.red, 1190],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={
              ["station-apply", "station-respond", "station-remedy"][i]
            }
            style={{
              position: "absolute",
              top: 120,
              left: Number(x[3]),
              width: 430,
              height: 230,
              border: `5px solid ${x[2]}`,
              background: C.cream,
              boxShadow: `12px 12px 0 ${x[2]}22`,
              padding: 24,
              ...enter(f, 6 + i * 14),
            }}
          >
            <div
              style={{
                fontSize: 44,
                fontWeight: 950,
                color: x[2],
                borderBottom: `4px solid ${x[2]}`,
                display: "inline-block",
                paddingBottom: 8,
              }}
            >
              {x[0]}
            </div>
            <div style={{ fontSize: 25, fontWeight: 850, marginTop: 20 }}>
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-stateful-source="mainline-slip"
          data-stateful-terminal="mainline-slip"
          style={{
            position: "absolute",
            top: 62,
            left: slipX,
            width: 150,
            height: 82,
            background: C.amber,
            border: `4px solid ${C.ink}`,
            display: "grid",
            placeItems: "center",
            fontSize: 22,
            fontWeight: 950,
            color: C.ink,
            rotate: "-2deg",
            zIndex: 2,
          }}
        >
          信息公开申请单
        </div>
        <div
          data-final-knowledge="proactive-not-directly-sue"
          style={{
            position: "absolute",
            left: 130,
            top: 420,
            width: 560,
            border: `4px solid ${C.red}`,
            background: "#C0392B14",
            padding: "16px 20px",
            ...enter(f, 30),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.red }}>
            主动公开而未主动公开
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 10 }}>
            损害的是<u style={{ textDecorationThickness: 3 }}>公共利益</u>，非个人权利
            → 不可直接起诉
          </div>
          <div style={{ marginTop: 12 }}>
            <Chip color={C.blue}>应先向行政机关申请</Chip>
          </div>
        </div>
        <div
          data-final-knowledge="procedural-notice-not-sue"
          style={{
            position: "absolute",
            left: 790,
            top: 420,
            width: 560,
            border: `4px solid ${C.amber}`,
            background: "#C9852B14",
            padding: "16px 20px",
            ...enter(f, 44),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.amber }}>
            程序性告知不可诉
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 10 }}>
            延长答复期限、要求补正等程序性告知行为
          </div>
          <div style={{ marginTop: 12 }}>
            <Stamp color={C.red}>不可诉</Stamp>
          </div>
        </div>
        <div
          data-final-knowledge="burden-overview"
          style={{
            position: "absolute",
            left: 1450,
            top: 420,
            width: 400,
            border: `4px solid ${C.green}`,
            background: "#2E8B5714",
            padding: "16px 20px",
            ...enter(f, 58),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.green }}>
            举证总览
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 10 }}>
            被告证合法性
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 6 }}>
            原告证申请与损害
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const PlaintiffGateScene = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-interest" data-final-knowledge="proactive-no-standing" data-final-knowledge="application-lane-valid" data-final-knowledge="notify-apply-first" */
  const f = useCurrentFrame();
  return (
    <Shell code="02" title="原告资格：公共利益受损不能替身起诉">
      <div
        data-layout="two-lane-plaintiff-gate"
        data-visual-anchor="role-pair"
        data-visual-grammar="active-disclosure-lane-is-blocked,application-lane-passes-through"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="plaintiff-standing-for-information-disclosure"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="plaintiff-interest"
          style={{
            position: "absolute",
            left: 170,
            top: 30,
            width: 320,
            border: `4px solid ${C.blue}`,
            background: C.cream,
            padding: "16px 20px",
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.blue }}>
            原告资格
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 8 }}>
            具有法律上利害关系的公民、法人或其他组织
          </div>
        </div>
        <div
          data-final-knowledge="proactive-no-standing"
          style={{
            position: "absolute",
            left: 150,
            top: 260,
            width: 640,
            border: `5px solid ${C.red}`,
            background: "#C0392B0D",
            padding: "22px 24px",
            ...enter(f, 16),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.red }}>
            主动公开而未主动公开 → 直接起诉
          </div>
          <div style={{ marginTop: 14 }}>
            <Neg>损害公共利益（每个人的利益），非个人权利 → 无原告资格</Neg>
          </div>
          <div style={{ marginTop: 16 }}>
            <Chip color={C.blue}>法院应告知其先向行政机关申请获取</Chip>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 150,
            top: 505,
            width: 640,
            ...enter(f, 28),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 900, color: C.gray }}>
            对行政机关的答复、逾期不予答复等行为不服的
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 16 }}>
            <Chip color={C.green} fill>
              可依法申请行政复议
            </Chip>
            <Chip color={C.green} fill>
              或提起行政诉讼
            </Chip>
          </div>
        </div>
        <div
          data-final-knowledge="application-lane-valid"
          style={{
            position: "absolute",
            left: 930,
            top: 260,
            width: 820,
            border: `5px solid ${C.green}`,
            background: "#2E8B570D",
            padding: "22px 24px",
            ...enter(f, 20),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.green }}>
            依申请公开 · 答复 / 逾期不答复 → 有原告资格
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Chip color={C.green}>利害关系人可诉</Chip>
            <Chip color={C.green}>申请被拒可诉</Chip>
            <Chip color={C.green}>逾期不答复可诉</Chip>
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 23,
              fontWeight: 850,
              color: C.ink,
            }}
          >
            起诉要求公开的，原告应举证其<u style={{ textDecorationThickness: 3, textDecorationColor: C.green }}>曾提出申请</u>
          </div>
        </div>
        <div
          data-final-knowledge="notify-apply-first"
          style={{
            position: "absolute",
            left: 930,
            top: 560,
            width: 820,
            border: `4px dashed ${C.amber}`,
            padding: "16px 20px",
            ...enter(f, 34),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 900, color: C.amber }}>
            正确做法：告知先申请 → 对答复不服再救济（复议或诉讼）
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const DefendantRoutingScene = () => {
  /* Static audit inventory: data-final-knowledge="defendant-proactive" data-final-knowledge="defendant-application" data-final-knowledge="defendant-overdue" data-final-knowledge="defendant-designated" data-final-knowledge="archive-track" data-final-knowledge="defendant-examples" data-final-knowledge="designated-office-example" */
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="被告确定：行为与机关一一对应">
      <div
        data-layout="defendant-routing-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="four-behavior-lanes-route-to-their-organs,archive-case-takes-a-separate-track"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="defendant-identification-rules"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 14 }}
      >
        <div style={{ fontSize: 24, fontWeight: 950, color: C.gray, marginBottom: 10 }}>
          行为类型 → 被告
        </div>
        {[
          ["对主动公开行为不服", "公开该信息的行政机关", C.blue],
          ["对依申请公开行为不服", "作出答复的行政机关", C.green],
          ["逾期未作答复", "收到申请的行政机关", C.amber],
          ["指定机构以自己名义作出行为", "该信息公开工作机构", C.red],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={
              [
                "defendant-proactive",
                "defendant-application",
                "defendant-overdue",
                "defendant-designated",
              ][i]
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              position: "absolute",
              left: 40,
              top: 62 + i * 118,
              width: 1180,
              ...enter(f, 6 + i * 10),
            }}
          >
            <div
              style={{
                width: 560,
                border: `3px solid ${x[2]}`,
                background: C.cream,
                padding: "14px 18px",
                fontSize: 24,
                fontWeight: 900,
              }}
            >
              {x[0]}
            </div>
            <Arrow color={x[2]} />
            <div
              style={{
                width: 520,
                border: `4px solid ${x[2]}`,
                background: x[2] === C.red ? "#C0392B12" : "#FFFFFF",
                padding: "14px 18px",
                fontSize: 24,
                fontWeight: 950,
                color: x[2],
              }}
            >
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="archive-track"
          style={{
            position: "absolute",
            left: 40,
            top: 540,
            width: 1180,
            border: `4px dashed ${C.gray}`,
            padding: "14px 18px",
            ...enter(f, 52),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 950, color: C.gray }}>
            档案保管与移交
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 6 }}>
            由被告的档案机构或档案工作人员保管 → 适用政府信息公开条例；
            已移交各级国家档案馆 → 依照档案管理的法律、法规执行
          </div>
        </div>
        <div
          data-final-knowledge="defendant-examples"
          style={{
            position: "absolute",
            left: 1300,
            top: 62,
            width: 540,
            border: `4px solid ${C.ink}`,
            background: C.cream,
            padding: "18px 20px",
            ...enter(f, 40),
          }}
        >
          <div style={{ fontSize: 25, fontWeight: 950 }}>例 · 左某向 A 机关申请</div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 10, lineHeight: 1.6 }}>
            ① A 以信息不存在拒绝 → 被告 <b style={{ color: C.red }}>A</b>
            <br />
            ② B 以信息不存在拒绝 → 被告 <b style={{ color: C.red }}>B</b>
            <br />
            ③ A、B 逾期未答复 → 被告 <b style={{ color: C.red }}>A</b>（收到申请的机关）
          </div>
        </div>
        <div
          data-final-knowledge="designated-office-example"
          style={{
            position: "absolute",
            left: 1300,
            top: 330,
            width: 540,
            border: `4px solid ${C.ink}`,
            background: C.cream,
            padding: "18px 20px",
            ...enter(f, 46),
          }}
        >
          <div style={{ fontSize: 25, fontWeight: 950 }}>例 · 政务公开办公室</div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 10, lineHeight: 1.6 }}>
            甲市政府指定机构以自己名义拒绝公开 → 被告
            <b style={{ color: C.red }}> 该办公室</b>
          </div>
        </div>
      </div>
    </Shell>
  );
};


export const AdmissionTrayScene = () => {
  /* Static audit inventory: data-final-knowledge="admission-tray" data-final-knowledge="admit-unable" data-final-knowledge="admit-review" data-final-knowledge="admit-mismatch" data-final-knowledge="admit-privacy" data-final-knowledge="admit-other" */
  const f = useCurrentFrame();
  return (
    <Shell code="04" title="应受理：五类案件进入立案台">
      <div
        data-layout="five-slip-admission-tray"
        data-visual-anchor="flow-target"
        data-visual-grammar="five-case-slips-slide-into-the-acceptance-tray,procedural-blockers-never-reach-the-tray"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="admissible-information-disclosure-cases"
        data-focal-channels="connector,enclosure,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="admission-tray"
          style={{
            position: "absolute",
            left: 1180,
            top: 40,
            width: 640,
            height: 690,
            border: `7px solid ${C.green}`,
            background: "#2E8B5710",
            boxShadow: `14px 14px 0 ${C.green}22`,
            padding: 26,
            ...enter(f, 8),
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 950,
              color: C.green,
              borderBottom: `5px solid ${C.green}`,
              display: "inline-block",
              paddingBottom: 8,
            }}
          >
            应受理 · 立案台
          </div>
          <div style={{ marginTop: 18, fontSize: 23, fontWeight: 850 }}>
            不符合立案条件的，裁定不予立案或驳回起诉
          </div>
        </div>
        {[
          [
            "告知无法提供或不予处理",
            "行政机关告知政府信息无法提供或者不予处理",
            C.blue,
          ],
          [
            "复议不予公开决定",
            "对复议机关不予公开决定不服（涉密、禁止公开、三安全一稳定、商业秘密、个人隐私、内部事务、过程性、执法案卷信息）",
            C.green,
          ],
          [
            "提供不符合申请内容",
            "认为行政机关提供的政府信息不符合其申请内容",
            C.amber,
          ],
          [
            "公开侵犯合法权益",
            "主动公开或依他人申请公开侵犯其商业秘密、个人隐私等合法权益",
            C.red,
          ],
          [
            "其他行为",
            "认为政府信息公开工作中的其他行为侵犯其合法权益",
            C.gray,
          ],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={
              ["admit-unable", "admit-review", "admit-mismatch", "admit-privacy", "admit-other"][i]
            }
            style={{
              position: "absolute",
              left: 70 + (i % 2) * 560,
              top: 60 + Math.floor(i / 2) * 230,
              width: 520,
              minHeight: 190,
              ...enter(f, 14 + i * 12, -40, 0),
            }}
          >
            <Slip color={String(x[2])}>
              <div style={{ fontSize: 24, fontWeight: 950, color: String(x[2]) }}>
                {x[0]}
              </div>
              <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, color: C.ink }}>
                {x[1]}
              </div>
            </Slip>
          </div>
        ))}
      </div>
    </Shell>
  );
};

export const RejectionGateScene = () => {
  /* Static audit inventory: data-final-knowledge="rejection-gate" data-final-knowledge="reject-01" data-final-knowledge="reject-02" data-final-knowledge="reject-03" data-final-knowledge="reject-04" data-final-knowledge="reject-05" data-final-knowledge="reject-06" data-final-knowledge="reject-07" data-final-knowledge="reject-08" data-final-knowledge="reject-09" data-final-knowledge="reject-10" data-final-knowledge="reject-summary" */
  const f = useCurrentFrame();
  const gateY = interpolate(f, [30, 66], [-30, 12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <Shell code="05" title="不应受理：十类申请被闸门拒收">
      <div
        data-layout="ten-slip-rejection-gate"
        data-visual-anchor="boundary"
        data-visual-grammar="ten-slips-approach-the-gate-and-are-blocked,invalid-procedural-requests-stack-behind-the-bar"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="non-admissible-information-disclosure-cases"
        data-focal-channels="contrast,enclosure,motion"
        style={{ position: "absolute", inset: 14 }}
      >
        <div
          data-final-knowledge="rejection-gate"
          style={{
            position: "absolute",
            left: 60,
            right: 60,
            top: gateY,
            height: 96,
            background: C.red,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            boxShadow: `0 12px 0 ${C.red}33`,
          }}
        >
          <span style={{ fontSize: 30, fontWeight: 950, color: C.paper }}>
            ✕ 不予立案 / 驳回起诉
          </span>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#FFD9D3" }}>
            涉政府信息公开诉讼明显不符合起诉条件
          </span>
        </div>
        {[
          "复议前置案件未经过复议直接起诉",
          "程序性告知：延长答复期限、要求补正",
          "单独起诉行政机关收取信息处理费决定",
          "重复申请已公开信息 · 不予重复处理",
          "工商、不动产登记资料 · 告知依法查询",
          "要求制作、加工、分析信息未予提供",
          "以申请形式进行信访、投诉、举报",
          "要求提供公报、报刊、书籍等公开出版物",
          "认为公共企事业单位未公开信息",
          "其他对权利义务不产生实际影响",
        ].map((x, i) => (
          <div
            key={String(i)}
            data-final-knowledge={`reject-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 90 + (i % 2) * 880,
              top: 150 + Math.floor(i / 2) * 90,
              width: 820,
              ...enter(f, 10 + i * 9),
            }}
          >
            <Slip color={i >= 7 ? C.gray : C.red}>
              <span style={{ fontWeight: 950, color: C.red, marginRight: 10 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {x}
            </Slip>
          </div>
        ))}
        <div
          data-final-knowledge="reject-summary"
          style={{
            position: "absolute",
            left: 560,
            top: 620,
            width: 800,
            textAlign: "center",
            ...enter(f, 100),
          }}
        >
          <Stamp color={C.red} style={{ fontSize: 26 }}>
            程序性告知、收费决定等均不可单独起诉
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const TrialDeskScene = () => {
  /* Static audit inventory: data-final-knowledge="summary-procedure" data-final-knowledge="confidential-hearing" data-final-knowledge="stop-disclosure" */
  const f = useCurrentFrame();
  return (
    <Shell code="06" title="审理规则：简易、保密与停止公开">
      <div
        data-layout="three-panel-trial-desk"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="summary-procedure-confidential-hearing-and-stop-disclosure-are-three-independent-panels,privacy-and-secrecy-guard-the-hearing-room"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="trial-rules-for-information-disclosure-cases"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 24 }}
      >
        <div
          data-final-knowledge="summary-procedure"
          style={{
            position: "absolute",
            left: 40,
            top: 60,
            width: 560,
            height: 640,
            border: `6px solid ${C.blue}`,
            background: C.cream,
            padding: 30,
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.blue }}>
            简易程序
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 16, lineHeight: 1.5 }}>
            法院审理第一审政府信息公开案件，
            <u style={{ textDecorationThickness: 3, textDecorationColor: C.blue }}>可以</u>
            适用简易程序
          </div>
          <div style={{ marginTop: 24 }}>
            <Chip color={C.blue}>一审 · 可选择简易</Chip>
          </div>
        </div>
        <div
          data-final-knowledge="confidential-hearing"
          style={{
            position: "absolute",
            left: 680,
            top: 60,
            width: 560,
            height: 640,
            border: `6px solid ${C.amber}`,
            background: C.cream,
            padding: 30,
            ...enter(f, 14),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.amber }}>
            保密审理方式
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 16, lineHeight: 1.5 }}>
            应视情采取适当的审理方式，
            <b>避免泄露</b>国家秘密、商业秘密、个人隐私
            及依法应当保密的政府信息
          </div>
          <div style={{ marginTop: 24 }}>
            <Chip color={C.amber}>避免泄露涉密信息</Chip>
          </div>
        </div>
        <div
          data-final-knowledge="stop-disclosure"
          style={{
            position: "absolute",
            left: 1320,
            top: 60,
            width: 540,
            height: 640,
            border: `6px solid ${C.green}`,
            background: C.cream,
            padding: 30,
            ...enter(f, 22),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.green }}>
            诉讼中停止公开
          </div>
          <div style={{ fontSize: 23, fontWeight: 850, marginTop: 16, lineHeight: 1.5 }}>
            原告申请停止公开涉及其商业秘密、个人隐私的政府信息，
            法院经审理认为符合停止执行规定的，裁定
            <b style={{ color: C.green }}>暂时停止公开</b>
          </div>
          <div style={{ marginTop: 24 }}>
            <Chip color={C.green} fill>
              原告申请 → 法院裁定
            </Chip>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const DefendantProofScaleScene = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-weight-01" data-final-knowledge="plaintiff-weight-02" data-final-knowledge="plaintiff-weight-03" data-final-knowledge="def-weight-01" data-final-knowledge="def-weight-02" data-final-knowledge="def-weight-03" data-final-knowledge="def-weight-04" data-final-knowledge="def-weight-05" data-final-knowledge="def-weight-06" data-final-knowledge="def-weight-07" data-final-knowledge="def-weight-08" data-final-knowledge="defendant-burden-core" */
  const f = useCurrentFrame();
  return (
    <Shell code="07" title="举证责任：被告证行为合法，八类情形">
      <div
        data-layout="defendant-proof-scale"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="eight-weights-drop-on-the-defendant-pan,plaintiff-pan-carries-only-application-and-damage"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="defendant-bears-legality-burden"
        data-focal-channels="contrast,motion,spatial"
        style={{ position: "absolute", inset: 14 }}
      >
        <div
          style={{
            position: "absolute",
            left: 710,
            top: 36,
            width: 500,
            height: 14,
            background: C.ink,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 880,
            top: 50,
            width: 0,
            height: 0,
            borderLeft: "80px solid transparent",
            borderRight: "80px solid transparent",
            borderTop: "58px solid " + C.ink,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 150,
            top: 116,
            width: 560,
            height: 460,
            border: `4px solid ${C.gray}`,
            background: "#8A93A61A",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.gray, padding: 18 }}>
            原告盘 · 三项举证
          </div>
          <div style={{ padding: "0 18px 18px" }}>
            {[
              "曾向行政机关提出信息公开申请",
              "信息涉及其商业秘密、个人隐私",
              "公开或不公开可能损害其合法权益",
            ].map((x, i) => (
              <div
                key={String(i)}
                data-final-knowledge={`plaintiff-weight-${String(i + 1).padStart(2, "0")}`}
                style={{
                  background: C.white,
                  border: `3px solid ${C.gray}`,
                  borderLeft: `10px solid ${C.gray}`,
                  padding: "12px 14px",
                  marginBottom: 16,
                  fontSize: 22,
                  fontWeight: 850,
                  lineHeight: 1.3,
                  ...enter(f, 12 + i * 10),
                }}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 850,
            top: 116,
            width: 920,
            height: 460,
            border: `4px solid ${C.green}`,
            background: "#2E8B5718",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.green, padding: 18 }}>
            被告盘 · 证行为合法性（八类）
          </div>
          <div
            style={{
              padding: "0 18px 18px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {[
              "公开 / 不予公开行为合法",
              "已公开事实 + 已告知获取方式、途径",
              "因公共利益公开涉隐私：理由 + 重大影响",
              "内部事务信息：人事、后勤、内部流程",
              "过程性信息：内部讨论记录、过程稿、磋商信函、请示报告",
              "执法案卷信息：当事人信息、调查笔录、询问笔录",
              "信息不存在：已尽合理检索义务",
              "国家秘密：密级标识、保密期限；三安全一稳定：不利影响证据",
            ].map((x, i) => (
              <div
                key={String(i)}
                data-final-knowledge={`def-weight-${String(i + 1).padStart(2, "0")}`}
                style={{
                  background: C.white,
                  border: `3px solid ${C.green}`,
                  borderLeft: `10px solid ${C.green}`,
                  padding: "10px 12px",
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1.3,
                  opacity: interpolate(f, [20 + i * 12, 34 + i * 12], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="defendant-burden-core"
          style={{
            position: "absolute",
            left: 300,
            top: 620,
            width: 1320,
            textAlign: "center",
            ...enter(f, 130),
          }}
        >
          <Stamp color={C.green} style={{ fontSize: 27 }}>
            核心：被告对其公开、不予公开等行为的合法性承担举证责任
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const PlaintiffProofScaleScene = () => {
  /* Static audit inventory: data-final-knowledge="pl-burden-application" data-final-knowledge="pl-burden-privacy" data-final-knowledge="pl-burden-damage" data-final-knowledge="court-supplement" data-final-knowledge="burden-mnemonic" */
  const f = useCurrentFrame();
  return (
    <Shell code="08" title="原告举证：申请、隐私与损害三件事">
      <div
        data-layout="plaintiff-proof-scale"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-plaintiff-weights-lift-on-the-plaintiff-pan,court-may-order-supplementary-evidence-below"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="plaintiff-bears-application-and-damage-burden"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          style={{
            position: "absolute",
            left: 710,
            top: 36,
            width: 500,
            height: 14,
            background: C.ink,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 880,
            top: 50,
            width: 0,
            height: 0,
            borderLeft: "80px solid transparent",
            borderRight: "80px solid transparent",
            borderTop: "58px solid " + C.ink,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 430,
            top: 116,
            width: 560,
            height: 400,
            border: `5px solid ${C.blue}`,
            background: "#2F6DB51A",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 950, color: C.blue, padding: 20 }}>
            原告盘 · 就下列事项举证
          </div>
          <div style={{ padding: "0 20px 20px" }}>
            {[
              ["application", "起诉要求公开的 → 曾向行政机关提出申请"],
              ["privacy", "起诉要求不得公开的 → 涉及其商业秘密、个人隐私"],
              ["damage", "公开或不公开行为可能损害其合法权益"],
            ].map((x, i) => (
              <div
                key={String(x[0])}
                data-final-knowledge={`pl-burden-${x[0]}`}
                style={{
                  background: C.white,
                  border: `3px solid ${C.blue}`,
                  borderLeft: `10px solid ${C.blue}`,
                  padding: "14px 16px",
                  marginBottom: 16,
                  fontSize: 22,
                  fontWeight: 850,
                  lineHeight: 1.35,
                  ...enter(f, 14 + i * 12, -30, 0),
                }}
              >
                {x[1]}
              </div>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="court-supplement"
          style={{
            position: "absolute",
            left: 430,
            top: 570,
            width: 1060,
            border: `4px dashed ${C.amber}`,
            background: "#C9852B12",
            padding: "16px 22px",
            ...enter(f, 50),
          }}
        >
          <div style={{ fontSize: 25, fontWeight: 950, color: C.amber }}>
            法院调取与补充证据
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4 }}>
            法院经审理认为政府信息公开后可能危及国家安全、公共安全、社会稳定的，
            有权要求当事人<u style={{ textDecorationThickness: 3, textDecorationColor: C.amber }}>提供或者补充证据</u>
          </div>
        </div>
        <div
          data-final-knowledge="burden-mnemonic"
          style={{
            position: "absolute",
            left: 1060,
            top: 116,
            width: 520,
            height: 400,
            border: `4px solid ${C.green}`,
            background: C.cream,
            padding: 24,
            ...enter(f, 36),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.green }}>
            记忆口诀
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, marginTop: 18, lineHeight: 1.7 }}>
            被告证<u style={{ textDecorationThickness: 3, textDecorationColor: C.green }}>合法性</u>
            <br />
            原告证<u style={{ textDecorationThickness: 3, textDecorationColor: C.blue }}>申请与损害</u>
          </div>
          <div style={{ marginTop: 26 }}>
            <Stamp color={C.blue} style={{ fontSize: 22 }}>
              官管民：原告证申请、隐私、损害
            </Stamp>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const JudgmentSealsScene = () => {
  /* Static audit inventory: data-final-knowledge="judgment-dismiss" data-final-knowledge="judgment-perform" data-final-knowledge="judgment-confirm" data-final-knowledge="judgment-prohibit" data-final-knowledge="twenty-day-rule" */
  const f = useCurrentFrame();
  return (
    <Shell code="09" title="判决四种：驳回、履行、确认违法、禁止">
      <div
        data-layout="four-verdict-seal-stations"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="four-judgment-types-are-stamped-at-four-stations,perform-duty-seal-carries-the-twenty-working-day-rule"
        data-text-treatments="stamp,label-block,thin-underline"
        data-focal-rule="four-judgment-types-for-information-disclosure-cases"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 16 }}
      >
        {[
          [
            "驳回诉讼请求",
            "公开、不予公开决定或告知合法；已向公众公开并告知获取方式、途径和时间；同一申请人相同内容申请一并答复合法；逾期不予答复理由不成立；请求不公开理由不成立",
            C.gray,
            "dismiss",
          ],
          [
            "履行公开职责",
            "应当公开而拒绝或部分拒绝 → 撤销并判决 20 个工作日内公开；无正当理由逾期不答复 → 20 个工作日内公开；可区分处理 → 20 个工作日内公开能公开部分；第三方同意公开且法院认为可公开 → 20 个工作日内公开",
            C.green,
            "perform",
          ],
          [
            "确认违法",
            "公开违法但无可撤销内容（如已公开不能撤销）；诉讼中已公开但仍要求确认原行为违法；不予公开或不答复违法但判决公开没有意义",
            C.amber,
            "confirm",
          ],
          [
            "禁止公开",
            "尚未公开前，原告起诉不得公开；涉及其商业秘密、个人隐私，且不公开不会对公共利益造成重大影响的，判决不得公开",
            C.red,
            "prohibit",
          ],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`judgment-${x[3]}`}
            style={{
              position: "absolute",
              left: 40 + (i % 2) * 900,
              top: 40 + Math.floor(i / 2) * 330,
              width: 860,
              height: 290,
              border: `5px solid ${x[2]}`,
              background: C.cream,
              padding: 20,
              ...enter(f, 8 + i * 10),
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 950,
                color: x[2],
                borderBottom: `4px solid ${x[2]}`,
                display: "inline-block",
                paddingBottom: 6,
              }}
            >
              {x[0]}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                lineHeight: 1.42,
                marginTop: 12,
                color: C.ink,
              }}
            >
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="twenty-day-rule"
          style={{
            position: "absolute",
            left: 540,
            top: 648,
            width: 840,
            textAlign: "center",
            ...enter(f, 60),
          }}
        >
          <Stamp color={C.green} style={{ fontSize: 27 }}>
            履行判决统一期限：20 个工作日
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const TrapQuizScene = () => {
  /* Static audit inventory: data-final-knowledge="trap-01" data-final-knowledge="trap-02" data-final-knowledge="trap-03" data-final-knowledge="trap-04" data-final-knowledge="trap-05" data-final-knowledge="trap-06" data-final-knowledge="trap-summary" */
  const f = useCurrentFrame();
  return (
    <Shell code="10" title="最爱考：程序性事项均不可诉">
      <div
        data-layout="six-judgment-slips"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="six-exam-statements-are-stamped-correct,procedural-matters-are-not-separately-sueable"
        data-text-treatments="stamp,label-block,soft-highlight"
        data-focal-rule="procedural-matters-are-not-separately-sueable"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 18 }}
      >
        {[
          ["收取信息处理费决定 · 单独起诉", "裁定不予立案", C.red],
          ["要求制作、加工、分析信息未提供", "裁定不予立案", C.red],
          ["要求提供公报、报刊、书籍等公开出版物", "裁定不予立案", C.red],
          ["信息不存在 · 不予公开", "被告就尽合理检索义务举证或合理说明", C.green],
          ["国家秘密不予公开", "被告提供密级标识、保密期限等，法院应予支持", C.green],
          ["起诉要求公开", "原告应就其曾提出申请举证", C.green],
        ].map((x, i) => (
          <div
            key={String(i)}
            data-final-knowledge={`trap-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 60 + (i % 3) * 600,
              top: 50 + Math.floor(i / 3) * 310,
              width: 560,
              height: 260,
              border: `4px solid ${x[2]}`,
              background: C.cream,
              padding: "18px 20px",
              ...enter(f, 8 + i * 10),
            }}
          >
            <div style={{ fontSize: 23, fontWeight: 900, lineHeight: 1.4 }}>
              {x[0]}
            </div>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: C.green,
                  color: C.paper,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 30,
                  fontWeight: 950,
                  flex: "0 0 auto",
                }}
              >
                ✓
              </span>
              <div style={{ fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.3 }}>
                {x[1]}
              </div>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="trap-summary"
          style={{
            position: "absolute",
            left: 560,
            top: 660,
            width: 800,
            textAlign: "center",
            ...enter(f, 70),
          }}
        >
          <Stamp color={C.red} style={{ fontSize: 26 }}>
            程序性告知、收费决定、重复申请答复均不可单独起诉
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const PrivacyCaseScene = () => {
  /* Static audit inventory: data-final-knowledge="privacy-case-setup" data-final-knowledge="case-01" data-final-knowledge="case-02" data-final-knowledge="case-03" data-final-knowledge="case-04" data-final-knowledge="case-05" data-final-knowledge="case-06" data-final-knowledge="privacy-balance-key" */
  const f = useCurrentFrame();
  return (
    <Shell code="11" title="多问案例：拆迁补助明细公开之争">
      <div
        data-layout="privacy-case-verdict-board"
        data-visual-anchor="role-pair"
        data-visual-grammar="six-verdicts-are-stamped-onto-the-disclosure-dispute,stop-and-prohibit-rules-follow-the-public-interest-balance"
        data-text-treatments="stamp,label-block,external-negation"
        data-focal-rule="privacy-vs-public-interest-in-disclosure-cases"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 16 }}
      >
        <div
          data-final-knowledge="privacy-case-setup"
          style={{
            position: "absolute",
            left: 60,
            top: 30,
            width: 1800,
            border: `4px solid ${C.ink}`,
            background: C.cream,
            padding: "14px 20px",
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 950 }}>
            刘某申请公开拆迁补助发放明细；乙区政府认为涉隐私但为公共利益决定公开；
            小区居民李某起诉请求判决不得公开
          </div>
        </div>
        {[
          ["诉讼中申请停止公开", "法院可裁定暂时停止公开", true],
          ["李某请求不得公开", "应就信息涉其个人隐私举证", true],
          ["证明公共利益的理由", "由李某举证（错）→ 应由被告举证", false],
          ["公开决定违法 · 尚未公开", "应当判决被告不得公开", true],
          ["公开决定违法 · 已公开", "撤销无意义 → 判决确认违法", false],
          ["主动公开未主动 · 直接起诉", "法院不应受理 → 告知先申请", false],
        ].map((x, i) => (
          <div
            key={String(i)}
            data-final-knowledge={`case-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 60 + (i % 2) * 910,
              top: 130 + Math.floor(i / 2) * 170,
              width: 870,
              height: 140,
              border: `4px solid ${x[2] ? C.green : C.red}`,
              background: C.cream,
              padding: "12px 18px",
              ...enter(f, 12 + i * 10),
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: x[2] ? C.green : C.red,
                  color: C.paper,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 27,
                  fontWeight: 950,
                  flex: "0 0 auto",
                }}
              >
                {x[2] ? "✓" : "✕"}
              </span>
              <div>
                <div style={{ fontSize: 23, fontWeight: 950 }}>{x[0]}</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, color: C.ink }}>
                  {x[1]}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="privacy-balance-key"
          style={{
            position: "absolute",
            left: 560,
            top: 660,
            width: 800,
            textAlign: "center",
            ...enter(f, 80),
          }}
        >
          <Stamp color={C.red} style={{ fontSize: 26 }}>
            隐私 vs 公共利益：由被告证明公共利益及其重大影响
          </Stamp>
        </div>
      </div>
    </Shell>
  );
};

export const DisclosureCaseDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01" start={SCENES["case-mainline"].start} duration={SCENES["case-mainline"].duration}>
      <CaseMainlineScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["plaintiff-gate"].start} duration={SCENES["plaintiff-gate"].duration}>
      <PlaintiffGateScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["defendant-routing"].start} duration={SCENES["defendant-routing"].duration}>
      <DefendantRoutingScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["admission-tray"].start} duration={SCENES["admission-tray"].duration}>
      <AdmissionTrayScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["rejection-gate"].start} duration={SCENES["rejection-gate"].duration}>
      <RejectionGateScene />
    </TimelineSequence>
    <TimelineSequence name="06" start={SCENES["trial-desk"].start} duration={SCENES["trial-desk"].duration}>
      <TrialDeskScene />
    </TimelineSequence>
    <TimelineSequence name="07" start={SCENES["defendant-proof-scale"].start} duration={SCENES["defendant-proof-scale"].duration}>
      <DefendantProofScaleScene />
    </TimelineSequence>
    <TimelineSequence name="08" start={SCENES["plaintiff-proof-scale"].start} duration={SCENES["plaintiff-proof-scale"].duration}>
      <PlaintiffProofScaleScene />
    </TimelineSequence>
    <TimelineSequence name="09" start={SCENES["judgment-seals"].start} duration={SCENES["judgment-seals"].duration}>
      <JudgmentSealsScene />
    </TimelineSequence>
    <TimelineSequence name="10" start={SCENES["trap-quiz"].start} duration={SCENES["trap-quiz"].duration}>
      <TrapQuizScene />
    </TimelineSequence>
    <TimelineSequence name="11" start={SCENES["privacy-case"].start} duration={SCENES["privacy-case"].duration}>
      <PrivacyCaseScene />
    </TimelineSequence>
  </AbsoluteFill>
);


