import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

// Bronze-rubbing atlas: aged paper, heavy ink rubbings, bronze-gold and patina accents
const R = {
  paper: "linear-gradient(175deg, #f2ecdc 0%, #eae1cb 55%, #e0d4b8 100%)",
  ink: "#26211a",
  inkDeep: "#141009",
  soft: "#6d6353",
  bronze: "#9a7a2e",
  bronzeLight: "#b3944a",
  patina: "#5f7040",
  rust: "#8a4a38",
  card: "rgba(250, 246, 236, 0.86)",
  cardEdge: "rgba(38, 33, 26, 0.8)",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const enter = (frame: number, delay = 0, x = 0, y = 28) => ({
  opacity: interpolate(frame, [delay, delay + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  }),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  })}px ${interpolate(frame, [delay, delay + 24], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  })}px`,
});

// 拓片卡：双墨线边框 + 四角对位标记
const corner: React.CSSProperties = {
  position: "absolute",
  width: 14,
  height: 14,
  borderColor: R.ink,
  borderStyle: "solid",
};
const Corners = () => (
  <>
    <div style={{ ...corner, top: -7, left: -7, borderWidth: "3px 0 0 3px" }} />
    <div style={{ ...corner, top: -7, right: -7, borderWidth: "3px 3px 0 0" }} />
    <div style={{ ...corner, bottom: -7, left: -7, borderWidth: "0 0 3px 3px" }} />
    <div style={{ ...corner, bottom: -7, right: -7, borderWidth: "0 3px 3px 0" }} />
  </>
);

const RubbingCard = ({
  children,
  style,
  ...rest
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & Record<string, string | undefined>) => (
  <div
    {...rest}
    style={{
      position: "relative",
      background: R.card,
      border: `3px double ${R.cardEdge}`,
      boxShadow: "0 10px 24px rgba(38,33,26,.18)",
      ...style,
    }}
  >
    <Corners />
    {children}
  </div>
);

const InkSeal: React.FC<{
  label: string;
  tone?: string;
  delay?: number;
  rotation?: number;
}> = ({ label, tone = R.inkDeep, delay = 0, rotation = -2 }) => {
  const f = useCurrentFrame();
  const press = interpolate(f, [delay, delay + 10], [1.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(f, [delay, delay + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 16px",
        background: tone,
        color: "#f4edda",
        fontSize: 22,
        fontWeight: 950,
        fontFamily: "var(--inkloom-animation-title, sans-serif)",
        letterSpacing: 2,
        borderRadius: 4,
        transform: `scale(${press}) rotate(${rotation}deg)`,
        opacity,
        boxShadow: "0 4px 12px rgba(38,33,26,.35)",
      }}
    >
      {label}
    </span>
  );
};

const BronzeTag = ({
  children,
  color = R.bronze,
  outline = false,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  outline?: boolean;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 40,
      padding: "5px 14px",
      border: `3px solid ${color}`,
      background: outline ? "transparent" : "rgba(250,246,236,0.9)",
      color: outline ? color : R.ink,
      fontSize: 21,
      fontWeight: 950,
      lineHeight: 1.15,
      fontFamily: "var(--inkloom-animation-label, sans-serif)",
      ...style,
    }}
  >
    {children}
  </span>
);

const RubbingShell = ({
  code,
  title,
  section,
  children,
}: {
  code: string;
  title: string;
  section: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      color: R.ink,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 12% 24%, rgba(38,33,26,.05) 0 42px, transparent 43px)," +
        "radial-gradient(circle at 88% 78%, rgba(38,33,26,.045) 0 56px, transparent 57px)," +
        "radial-gradient(circle at 70% 12%, rgba(154,122,46,.10), transparent 26%)," +
        R.paper,
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 64,
        right: 64,
        top: 34,
        height: 112,
        display: "grid",
        gridTemplateColumns: "110px 1fr auto",
        alignItems: "center",
        gap: 24,
        borderBottom: `4px solid ${R.ink}`,
      }}
    >
      <div
        style={{
          width: 94,
          height: 72,
          display: "grid",
          placeItems: "center",
          background: R.inkDeep,
          color: "#f4edda",
          fontSize: 26,
          fontWeight: 950,
          borderRadius: 4,
          rotate: "-2deg",
          fontFamily: "var(--inkloom-animation-title, sans-serif)",
        }}
      >
        拓 {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 45, lineHeight: 1.08, margin: 0, fontWeight: 950 }}
      >
        {title}
      </h1>
      <div style={{ textAlign: "right" }}>
        <div style={{ color: R.bronze, fontSize: 20, fontWeight: 950 }}>{section}</div>
        <div
          style={{
            marginTop: 7,
            color: R.soft,
            fontSize: 16,
            fontWeight: 800,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          ADMINISTRATIVE LAW · BRONZE RUBBING ATLAS
        </div>
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 64,
        right: 64,
        top: 172,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);

const sceneBox: React.CSSProperties = { position: "absolute", inset: 10 };

export const SettingSpectrumScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-setting" data-final-knowledge="license-setting" data-final-knowledge="measure-setting" data-final-knowledge="execution-setting" */
  const f = useCurrentFrame();
  const rows = [
    ["行政处罚", R.rust, "全部", "除人身自由", "再除吊照等", "警告·通报·一定罚款", "penalty-setting"],
    ["行政许可", R.bronze, "全部", "经常性", "本地经常性", "省级·1年临时", "license-setting"],
    ["强制措施", R.patina, "全部", "除人身·冻结·保留", "仅查封·扣押", "×", "measure-setting"],
    ["强制执行", R.ink, "仅法律", "×", "×", "×", "execution-setting"],
  ] as const;
  return (
    <RubbingShell code="01" title="设定权限：四条规范阶梯在哪里停止" section="设定权">
      <div
        data-layout="four-rubbing-staircase-panels"
        data-visual-anchor="boundary"
        data-visual-grammar="four-authority-staircases-share-one-normative-axis,each-staircase-stops-at-its-own-legislative-boundary"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="comparison-of-setting-authority"
        data-focal-channels="contrast,connector,spatial"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 270,
            right: 10,
            top: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {["法律", "行政法规", "地方性法规", "规章"].map((x, i) => (
            <div
              key={x}
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: 950,
                color: [R.patina, R.bronze, R.inkSoft, R.rust][i],
                fontFamily: "var(--inkloom-animation-title, sans-serif)",
              }}
            >
              {x}
              <div
                style={{
                  height: 5,
                  margin: "10px 24px 0",
                  background: [R.patina, R.bronze, R.inkSoft, R.rust][i],
                }}
              />
            </div>
          ))}
        </div>
        {rows.map((row, r) => (
          <div
            key={row[0]}
            data-final-knowledge={row[6]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 90 + r * 145,
              height: 106,
              ...enter(f, 6 + r * 12, -24, 0),
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 25,
                width: 245,
                fontSize: 31,
                fontWeight: 950,
                color: row[1],
                fontFamily: "var(--inkloom-animation-title, sans-serif)",
              }}
            >
              {row[0]}
            </div>
            <div
              style={{
                position: "absolute",
                left: 245,
                right: 10,
                top: 44,
                height: 6,
                background: row[1],
                opacity: 0.4,
              }}
            />
            {row.slice(2, 6).map((x, i) => (
              <RubbingCard
                key={`${x}-${i}`}
                style={{
                  position: "absolute",
                  left: 270 + i * 365,
                  top: i % 2 === 0 ? 0 : 22,
                  width: 300,
                  minHeight: 72,
                  padding: "10px 14px",
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: 900,
                  color: x === "×" ? R.rust : R.ink,
                  borderLeft: `8px solid ${x === "×" ? R.rust : row[1]}`,
                }}
              >
                {x === "×" ? "× 不得设定" : x}
              </RubbingCard>
            ))}
          </div>
        ))}
      </div>
    </RubbingShell>
  );
};

export const RulemakingChronologyScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-rulemaking-era" data-final-knowledge="license-rulemaking-era" data-final-knowledge="compulsion-rulemaking-era" data-final-knowledge="normative-document-exception" */
  const f = useCurrentFrame();
  const eras = [
    ["1996 / 2021", "处罚法", "所有规章可设警告、通报、一定罚款", R.rust, "penalty-rulemaking-era"],
    ["2003 / 2019", "许可法", "仅省级规章·1年临时许可", R.bronze, "license-rulemaking-era"],
    ["2011", "强制法", "所有规章均无设定权", R.patina, "compulsion-rulemaking-era"],
  ] as const;
  return (
    <RubbingShell code="02" title="规章设定权：三部法律依次收紧" section="时间轴">
      <div
        data-layout="stele-rulemaking-timeline"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="three-statutes-align-on-one-chronological-ruler,rulemaking-authority-narrows-from-general-to-provincial-only-to-none"
        data-text-treatments="thin-underline,label-block,stamp"
        data-focal-rule="chronology-of-rulemaking-authority"
        data-focal-channels="locator,contrast,motion"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 90,
            right: 90,
            top: 338,
            height: 8,
            background: R.ink,
          }}
        />
        {eras.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[4]}
            style={{
              position: "absolute",
              left: 70 + i * 570,
              top: i === 1 ? 70 : 375,
              width: 500,
              minHeight: 205,
              padding: 24,
              borderTop: `9px solid ${x[3]}`,
              ...enter(f, 8 + i * 16, 0, i === 1 ? -24 : 24),
            }}
          >
            <div style={{ fontSize: 46, fontWeight: 950, color: x[3], fontFamily: "var(--inkloom-animation-mono, monospace)" }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 29, fontWeight: 950, marginTop: 9 }}>{x[1]}</div>
            <div
              style={{
                fontSize: 23,
                fontWeight: 850,
                marginTop: 18,
                borderBottom: `3px solid ${x[3]}`,
                paddingBottom: 7,
              }}
            >
              {x[2]}
            </div>
          </RubbingCard>
        ))}
        <div
          data-final-knowledge="normative-document-exception"
          style={{
            position: "absolute",
            left: 640,
            top: 565,
            width: 590,
            textAlign: "center",
            ...enter(f, 62),
          }}
        >
          <InkSeal tone={R.bronze} label="其他规范性文件原则无权 · 国务院决定可设临时许可" delay={66} />
        </div>
      </div>
    </RubbingShell>
  );
};

export const SettingTrapLensesScene = () => {
  /* Stable generated markers: data-final-knowledge="trap-department-decision" data-final-knowledge="trap-license-suspension" data-final-knowledge="trap-regulation-freeze" data-final-knowledge="trap-rule-seizure" */
  const f = useCurrentFrame();
  const traps = [
    ["国务院部门决定设临时许可", "错", "只能国务院决定", "trap-department-decision"],
    ["地方性法规暂扣营业执照", "对", "可暂扣，不可吊销", "trap-license-suspension"],
    ["行政法规设冻结措施", "错", "冻结由法律保留", "trap-regulation-freeze"],
    ["省级规章设临时扣押", "错", "规章无强制设定权", "trap-rule-seizure"],
  ] as const;
  return (
    <RubbingShell code="03" title="设定权陷阱：四张判断票逐一盖章" section="考点校准">
      <div
        data-layout="verdict-ticket-rubbing-stack"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="four-exam-statements-enter-as-independent-tickets,each-ticket-ends-with-a-verdict-and-correct-rule"
        data-text-treatments="external-negation,stamp,soft-highlight"
        data-focal-rule="setting-authority-traps"
        data-focal-channels="annotation,contrast,enclosure"
        style={{
          ...sceneBox,
          display: "grid",
          gridTemplateRows: "repeat(4,1fr)",
          gap: 18,
          padding: "20px 80px",
        }}
      >
        {traps.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={x[3]}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 130px 1fr",
              alignItems: "center",
              gap: 30,
              padding: "14px 26px",
              background: i % 2 ? R.card : "rgba(234,225,203,0.6)",
              borderLeft: `7px solid ${x[1] === "对" ? R.patina : R.rust}`,
              boxShadow: "0 8px 20px rgba(38,33,26,.14)",
              ...enter(f, 5 + i * 14, -35, 0),
            }}
          >
            <div style={{ fontSize: 27, fontWeight: 900 }}>{x[0]}</div>
            <InkSeal tone={x[1] === "对" ? R.patina : R.rust} label={x[1]} delay={20 + i * 12} />
            <div
              style={{
                fontSize: 23,
                fontWeight: 850,
                color: x[1] === "对" ? R.patina : R.rust,
              }}
            >
              {x[2]}
            </div>
          </div>
        ))}
      </div>
    </RubbingShell>
  );
};

export const AuthorizationPrismScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-authorization" data-final-knowledge="license-authorization" data-final-knowledge="measure-authorization" data-final-knowledge="authorization-object" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="04" title="授权来源：同一座权源金字塔，不同入口" section="实施主体">
      <div
        data-layout="stele-pyramid-rubbing"
        data-visual-anchor="boundary"
        data-visual-grammar="three-authority-routes-enter-one-source-pyramid,each-power-stops-at-its-own-authorizing-level"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="authorization-sources"
        data-focal-channels="connector,contrast,spatial"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 650,
            top: 60,
            width: 470,
            height: 540,
            clipPath: "polygon(50% 0,100% 100%,0 100%)",
            background: `linear-gradient(${R.inkDeep} 0 32%,${R.bronze} 32% 66%,${R.patina} 66%)`,
            opacity: 0.2,
          }}
        />
        {["法律", "行政法规", "地方性法规"].map((x, i) => (
          <div
            key={x}
            style={{
              position: "absolute",
              left: 785,
              top: 170 + i * 145,
              width: 200,
              textAlign: "center",
              fontSize: 27,
              fontWeight: 950,
              color: [R.inkDeep, R.bronze, R.patina][i],
              fontFamily: "var(--inkloom-animation-title, sans-serif)",
            }}
          >
            {x}
          </div>
        ))}
        {[
          ["处罚", "法律＋法规", R.rust, 50, 110, "penalty-authorization"],
          ["许可", "法律＋法规", R.bronze, 1180, 120, "license-authorization"],
          ["强制措施", "法律＋行政法规", R.patina, 1180, 420, "measure-authorization"],
        ].map((x, i) => (
          <RubbingCard
            key={String(x[0])}
            data-final-knowledge={String(x[5])}
            style={{
              position: "absolute",
              left: Number(x[3]),
              top: Number(x[4]),
              width: 430,
              padding: 26,
              borderBottom: `7px solid ${x[2]}`,
              ...enter(f, 8 + i * 18, i === 0 ? -40 : 40, 0),
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {x[0]}
            </div>
            <div style={{ marginTop: 18, fontSize: 25, fontWeight: 900 }}>{x[1]}</div>
          </RubbingCard>
        ))}
        <div
          data-final-knowledge="authorization-object"
          style={{
            position: "absolute",
            left: 585,
            bottom: 10,
            width: 600,
            textAlign: "center",
            ...enter(f, 65),
          }}
        >
          <InkSeal tone={R.patina} label="授权对象：无行政权能组织 → 获得行政主体资格" delay={69} />
        </div>
      </div>
    </RubbingShell>
  );
};

export const DelegationFiltersScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-delegation" data-final-knowledge="license-delegation" data-final-knowledge="measure-delegation" */
  const f = useCurrentFrame();
  const lanes = [
    ["处罚委托", "行政机关", "符合条件的组织", "责任仍归委托机关", R.rust, "penalty-delegation"],
    ["许可委托", "行政机关", "行政机关", "公告受托机关和事项", R.bronze, "license-delegation"],
    ["强制措施", "行政机关", "禁止委托", "只能法定主体实施", R.patina, "measure-delegation"],
  ] as const;
  return (
    <RubbingShell code="05" title="委托边界：对象不同，强制措施直接封路" section="主体通道">
      <div
        data-layout="three-rubbing-delegation-lanes"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-delegation-lanes-start-from-administrative-organs,recipient-and-validity-differ-across-penalty-license-and-compulsion"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="delegation-differences"
        data-focal-channels="connector,contrast,spatial"
        style={{ ...sceneBox, padding: "45px 40px" }}
      >
        {lanes.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={x[5]}
            style={{
              height: 175,
              display: "grid",
              gridTemplateColumns: "280px 260px 90px 350px 1fr",
              alignItems: "center",
              gap: 20,
              borderBottom: `3px dashed rgba(109,99,83,0.5)`,
              ...enter(f, 8 + i * 18, -40, 0),
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 950, color: x[4], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {x[0]}
            </div>
            <BronzeTag color={x[4]}>{x[1]}</BronzeTag>
            <span style={{ color: x[4], fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
            {x[2] === "禁止委托" ? (
              <InkSeal tone={R.rust} label="× 禁止委托" delay={30 + i * 16} />
            ) : (
              <BronzeTag color={R.bronze}>{x[2]}</BronzeTag>
            )}
            <div
              style={{
                fontSize: 23,
                fontWeight: 850,
                borderBottom: `3px solid ${x[4]}`,
                paddingBottom: 8,
              }}
            >
              {x[3]}
            </div>
          </div>
        ))}
      </div>
    </RubbingShell>
  );
};

export const ConcentrationAperturesScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-concentration" data-final-knowledge="license-concentration" data-final-knowledge="measure-concentration" data-final-knowledge="execution-no-concentration" */
  const f = useCurrentFrame();
  const rings = [
    ["处罚权", "国务院或省级政府决定", "人身自由处罚不得集中", R.rust, "penalty-concentration"],
    ["许可权", "国务院批准＋省级政府决定", "无权限限制", R.bronze, "license-concentration"],
    ["相关措施", "随相对集中处罚权", "仅法律法规规定且相关", R.patina, "measure-concentration"],
  ] as const;
  return (
    <RubbingShell code="06" title="相对集中：三圈权限收束，执行权留在圈外" section="权限边界">
      <div
        data-layout="ink-concentration-rings"
        data-visual-anchor="boundary"
        data-visual-grammar="three-concentration-rings-close-around-one-organ,enforcement-power-remains-outside-the-rings"
        data-text-treatments="soft-highlight,label-block,external-negation"
        data-focal-rule="concentrated-authority"
        data-focal-channels="enclosure,contrast,locator"
        style={sceneBox}
      >
        {rings.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={x[4]}
            style={{
              position: "absolute",
              left: 170 + i * 410,
              top: 80 + i * 80,
              width: 760 - i * 120,
              height: 500 - i * 120,
              border: `${11 - i * 2}px double ${x[3]}`,
              borderRadius: "50%",
              opacity: 0.9,
              ...enter(f, 8 + i * 18),
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: 650,
            top: 255,
            width: 470,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 43, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>一个机关</div>
          <div style={{ fontSize: 24, marginTop: 16, fontWeight: 850 }}>承接相关行政权</div>
        </div>
        {rings.map((x, i) => (
          <RubbingCard
            key={`${x[0]}-label`}
            style={{
              position: "absolute",
              left: 70 + i * 520,
              top: 40 + i * 180,
              width: 380,
              padding: 18,
              borderLeft: `7px solid ${x[3]}`,
              ...enter(f, 40 + i * 10),
            }}
          >
            <div style={{ fontSize: 29, fontWeight: 950, color: x[3] }}>{x[0]}</div>
            <div style={{ fontSize: 21, marginTop: 8, fontWeight: 850 }}>{x[1]}</div>
            <div style={{ fontSize: 20, marginTop: 7, color: R.soft }}>{x[2]}</div>
          </RubbingCard>
        ))}
        <div
          data-final-knowledge="execution-no-concentration"
          style={{
            position: "absolute",
            right: 50,
            bottom: 25,
            ...enter(f, 72),
          }}
        >
          <InkSeal tone={R.rust} label="强制执行权：不得相对集中" delay={76} />
        </div>
      </div>
    </RubbingShell>
  );
};

export const SubjectTrapDarkroomScene = () => {
  /* Stable generated markers: data-final-knowledge="delegated-defendant" data-final-knowledge="invalid-authorization-defendant" data-final-knowledge="compulsion-delegation-trap" data-final-knowledge="custody-delegation-valid" */
  const f = useCurrentFrame();
  const cases = [
    ["处罚委托", "委托机关", "受托者不独立担责", R.rust, "delegated-defendant"],
    ["文件非法授权", "设立机关", "组织无授权资格", R.bronze, "invalid-authorization-defendant"],
    ["委托扣押", "无效", "强制措施禁止委托", R.patina, "compulsion-delegation-trap"],
    ["委托仓库保管", "有效", "属于民事保管", R.inkSoft, "custody-delegation-valid"],
  ] as const;
  return (
    <RubbingShell code="07" title="主体陷阱：沿权力来源追到真正被告" section="身份鉴别">
      <div
        data-layout="four-case-file-rubbings"
        data-visual-anchor="document-fork"
        data-visual-grammar="four-case-files-unfold-from-power-source,each-file-terminates-in-defendant-or-validity"
        data-text-treatments="stamp,thin-underline,external-negation"
        data-focal-rule="subject-traps"
        data-focal-channels="connector,contrast,enclosure"
        style={{
          ...sceneBox,
          padding: "25px 70px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
        }}
      >
        {cases.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[4]}
            style={{
              padding: 28,
              borderTop: `10px solid ${x[3]}`,
              ...enter(f, 8 + i * 15, i % 2 ? 30 : -30, 0),
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 950, color: x[3], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              案卷 {String(i + 1).padStart(2, "0")} · {x[0]}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 34 }}>
              <BronzeTag color={R.ink}>行为来源</BronzeTag>
              <span style={{ color: x[3], fontSize: 44, fontWeight: 950, lineHeight: 1 }}>→</span>
              <InkSeal tone={x[1] === "无效" ? R.rust : x[3]} label={x[1]} delay={24 + i * 13} />
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 23,
                fontWeight: 850,
                borderBottom: `3px solid ${x[3]}`,
                paddingBottom: 8,
              }}
            >
              {x[2]}
            </div>
          </RubbingCard>
        ))}
      </div>
    </RubbingShell>
  );
};

export const HearingSignalSplitScene = () => {
  /* Stable generated markers: data-final-knowledge="penalty-hearing-exists" data-final-knowledge="license-hearing-exists" data-final-knowledge="compulsion-no-hearing" */
  const f = useCurrentFrame();
  const signals = [
    ["行政处罚", "有听证", R.rust, "∿∿∿∿∿", "penalty-hearing-exists"],
    ["行政许可", "有听证", R.bronze, "∿∿∿∿∿", "license-hearing-exists"],
    ["行政强制", "无听证制度", R.patina, "────────", "compulsion-no-hearing"],
  ] as const;
  return (
    <RubbingShell code="08" title="听证总开关：处罚、许可有信号，强制静音" section="听证分流">
      <div
        data-layout="ink-signal-three-lanes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="penalty-and-license-signals-travel-on-active-lanes,compulsion-remains-a-flat-no-hearing-line"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="hearing-availability"
        data-focal-channels="contrast,motion,spatial"
        style={{ ...sceneBox, padding: "40px 70px" }}
      >
        {signals.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={x[4]}
            style={{
              height: 190,
              display: "grid",
              gridTemplateColumns: "330px 1fr 330px",
              alignItems: "center",
              gap: 40,
              ...enter(f, 8 + i * 18, -40, 0),
            }}
          >
            <div style={{ fontSize: 38, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {x[0]}
            </div>
            <div
              style={{
                fontSize: 70,
                letterSpacing: 12,
                color: x[2],
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {x[3]}
            </div>
            {i === 2 ? (
              <InkSeal tone={R.rust} label="× 无听证制度" delay={40 + i * 16} />
            ) : (
              <BronzeTag color={x[2]}>● {x[1]}</BronzeTag>
            )}
          </div>
        ))}
      </div>
    </RubbingShell>
  );
};

export const PenaltyHearingWavebandScene = () => {
  /* Stable generated markers: data-final-knowledge="statutory-penalty-hearing" data-final-knowledge="security-penalty-hearing" data-final-knowledge="agreed-penalty-hearing" */
  const f = useCurrentFrame();
  const bands = [
    ["法定听证", "较大罚没 · 降级吊证 · 关停限业 · 其他较重", R.rust, "statutory-penalty-hearing"],
    ["治安法定", "吊证 · 4000元以上罚款 · 停业整顿 · 未成年人可能拘留", R.bronze, "security-penalty-hearing"],
    ["约定听证", "案情复杂或重大社会影响 · 当事人要求 · 公安认为必要", R.patina, "agreed-penalty-hearing"],
  ] as const;
  return (
    <RubbingShell code="09" title="处罚听证：三条触发波段不能混用" section="处罚听证">
      <div
        data-layout="three-ink-waveband-rubbings"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-hearing-trigger-bands-run-in-parallel,adult-detention-enters-only-through-discretionary-hearing"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="penalty-hearing-scope"
        data-focal-channels="connector,contrast,locator"
        style={{ ...sceneBox, padding: "35px 70px" }}
      >
        {bands.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[3]}
            style={{
              height: 185,
              marginBottom: 22,
              background: `linear-gradient(90deg,${x[2]}20,${R.card} 60%)`,
              borderLeft: `15px solid ${x[2]}`,
              padding: "24px 34px",
              ...enter(f, 8 + i * 18, -50, 0),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
              <div
                style={{
                  fontSize: 35,
                  fontWeight: 950,
                  color: x[2],
                  width: 250,
                  fontFamily: "var(--inkloom-animation-title, sans-serif)",
                }}
              >
                {x[0]}
              </div>
              <div style={{ height: 5, background: x[2], width: "100%" }} />
            </div>
            <div style={{ marginTop: 26, fontSize: 24, fontWeight: 850, lineHeight: 1.4 }}>{x[1]}</div>
          </RubbingCard>
        ))}
      </div>
    </RubbingShell>
  );
};

export const LicenseHearingFocusScene = () => {
  /* Stable generated markers: data-final-knowledge="license-ex-officio-hearing" data-final-knowledge="license-on-application-hearing" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="10" title="许可听证：公共利益与私人重大利益两条焦点" section="许可听证">
      <div
        data-layout="dual-focus-rubbing-fork"
        data-visual-anchor="document-fork"
        data-visual-grammar="one-license-file-forks-by-interest-type,public-interest-and-private-major-interest-trigger-different-hearing-routes"
        data-text-treatments="soft-highlight,label-block,thin-underline"
        data-focal-rule="license-hearing-triggers"
        data-focal-channels="contrast,enclosure,locator"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 710,
            top: 250,
            width: 340,
            height: 170,
            display: "grid",
            placeItems: "center",
            background: R.inkDeep,
            color: "#f4edda",
            fontSize: 37,
            fontWeight: 950,
            clipPath: "polygon(12% 0,88% 0,100% 50%,88% 100%,12% 100%,0 50%)",
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
            ...enter(f, 5),
          }}
        >
          许可事项
        </div>
        <RubbingCard
          data-final-knowledge="license-ex-officio-hearing"
          style={{
            position: "absolute",
            left: 80,
            top: 80,
            width: 540,
            minHeight: 430,
            padding: 36,
            border: `8px double ${R.bronze}`,
            ...enter(f, 22, -35, 0),
          }}
        >
          <div style={{ fontSize: 39, fontWeight: 950, color: R.bronze, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>依职权</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 34 }}>法定应听证</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 22 }}>涉及公共利益的重大许可</div>
          <div style={{ marginTop: 38 }}>
            <InkSeal tone={R.bronze} label="公告" delay={40} />
          </div>
        </RubbingCard>
        <RubbingCard
          data-final-knowledge="license-on-application-hearing"
          style={{
            position: "absolute",
            right: 80,
            top: 130,
            width: 540,
            minHeight: 430,
            padding: 36,
            border: `8px double ${R.patina}`,
            ...enter(f, 38, 35, 0),
          }}
        >
          <div style={{ fontSize: 39, fontWeight: 950, color: R.patina, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>依申请</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 34 }}>申请人与他人</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 22 }}>存在重大利益关系</div>
          <div style={{ marginTop: 38 }}>
            <InkSeal tone={R.patina} label="单独告知" delay={54} />
          </div>
        </RubbingCard>
        <div style={{ position: "absolute", left: 600, top: 280 }}>
          <span style={{ color: R.bronze, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
        <div style={{ position: "absolute", right: 600, top: 330 }}>
          <span style={{ color: R.patina, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
      </div>
    </RubbingShell>
  );
};

export const HearingClockArrayScene = () => {
  /* Stable generated markers: data-final-knowledge="hearing-application-five-days" data-final-knowledge="license-hearing-twenty-days" data-final-knowledge="hearing-notice-seven-days" */
  const f = useCurrentFrame();
  const clocks = [
    ["5", "日内申请", "处罚＋许可", R.rust, "hearing-application-five-days"],
    ["20", "日内组织", "仅许可", R.bronze, "license-hearing-twenty-days"],
    ["7", "日前通知", "处罚＋许可", R.patina, "hearing-notice-seven-days"],
  ] as const;
  return (
    <RubbingShell code="11" title="听证时间：5、20、7 三只法定钟" section="期限记忆">
      <div
        data-layout="ink-dial-clock-array"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="five-and-seven-day-clocks-are-shared,only-license-adds-the-twenty-day-organization-clock"
        data-text-treatments="stamp,thin-underline,label-block"
        data-focal-rule="hearing-deadlines"
        data-focal-channels="locator,contrast,enclosure"
        style={{
          ...sceneBox,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 55px",
        }}
      >
        {clocks.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[4]}
            style={{
              width: 440,
              height: 440,
              borderRadius: "50%",
              border: `12px double ${x[3]}`,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              boxShadow: `0 15px 0 ${x[3]}33`,
              ...enter(f, 8 + i * 18, 0, 35),
            }}
          >
            <div>
              <div style={{ fontSize: 112, lineHeight: 1, fontWeight: 950, color: x[3], fontFamily: "var(--inkloom-animation-mono, monospace)" }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 33, fontWeight: 950, marginTop: 12 }}>{x[1]}</div>
              <div
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  fontWeight: 850,
                  borderBottom: `3px solid ${x[3]}`,
                  paddingBottom: 7,
                }}
              >
                {x[2]}
              </div>
            </div>
          </RubbingCard>
        ))}
      </div>
    </RubbingShell>
  );
};

export const HearingCommonConsoleScene = () => {
  /* Stable generated markers: data-final-knowledge="hearing-record-basis" data-final-knowledge="hearing-public" data-final-knowledge="hearing-recusal" data-final-knowledge="hearing-agent" data-final-knowledge="hearing-free" */
  const f = useCurrentFrame();
  const items = [
    ["笔录", "决定依据", R.rust, "hearing-record-basis"],
    ["公开", "依法公开", R.bronze, "hearing-public"],
    ["回避", "主持人回避", R.patina, "hearing-recusal"],
    ["代理", "可委托代理人", R.bronzeLight, "hearing-agent"],
    ["费用", "不收费", R.rust, "hearing-free"],
  ] as const;
  return (
    <RubbingShell code="12" title="听证共同规则：五枚控制钮同时生效" section="共同程序">
      <div
        data-layout="five-spoke-rubbing-console"
        data-visual-anchor="flow-target"
        data-visual-grammar="five-common-hearing-rules-orbit-one-decision-hub,the-record-rule-feeds-the-final-decision"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="common-hearing-rules"
        data-focal-channels="icon,connector,enclosure"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 670,
            top: 210,
            width: 450,
            height: 250,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            background: R.inkDeep,
            color: "#f4edda",
            borderRadius: "50%",
            border: `4px double ${R.bronze}`,
          }}
        >
          <div>
            <div style={{ fontSize: 41, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>听证程序</div>
            <div style={{ fontSize: 23, marginTop: 14 }}>共同保障</div>
          </div>
        </div>
        {items.map((x, i) => {
          const angle = ((-150 + i * 75) * Math.PI) / 180;
          const left = 690 + Math.cos(angle) * 620;
          const top = 250 + Math.sin(angle) * 250;
          return (
            <RubbingCard
              key={x[0]}
              data-final-knowledge={x[3]}
              style={{
                position: "absolute",
                left,
                top,
                width: 330,
                minHeight: 135,
                padding: 22,
                border: `5px solid ${x[2]}`,
                textAlign: "center",
                ...enter(f, 8 + i * 12),
              }}
            >
              <div style={{ fontSize: 31, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 22, fontWeight: 850, marginTop: 14 }}>{x[1]}</div>
            </RubbingCard>
          );
        })}
      </div>
    </RubbingShell>
  );
};

export const HearingTrapScopeScene = () => {
  /* Stable generated markers: data-final-knowledge="trap-no-compulsion-hearing" data-final-knowledge="trap-fine-carries-detention" data-final-knowledge="trap-suspension-no-hearing" data-final-knowledge="trap-private-interest-no-notice" data-final-knowledge="trap-hearing-publicity" */
  const f = useCurrentFrame();
  const rows = [
    ["扣押200万应告知听证", "错 · 强制无听证", "trap-no-compulsion-hearing"],
    ["成年拘留＋5000元罚款", "对 · 罚款带入法定听证", "trap-fine-carries-detention"],
    ["暂扣许可证必须听证", "错 · 暂扣不在法定范围", "trap-suspension-no-hearing"],
    ["私人重大利益听证需公告", "错 · 单独告知", "trap-private-interest-no-notice"],
    ["听证是否公开可裁量", "错 · 依法公开", "trap-hearing-publicity"],
  ] as const;
  return (
    <RubbingShell code="13" title="听证陷阱扫描：五条错误边界" section="判断题">
      <div
        data-layout="five-row-verdict-rubbing-scan"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-statements-pass-one-verdict-scan,each-row-locks-a-corrective-rule-at-the-end"
        data-text-treatments="external-negation,thin-underline,stamp"
        data-focal-rule="hearing-traps"
        data-focal-channels="annotation,contrast,motion"
        style={{ ...sceneBox, padding: "15px 90px" }}
      >
        {rows.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={x[2]}
            style={{
              height: 118,
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              alignItems: "center",
              gap: 40,
              borderBottom: `4px solid ${i === 1 ? R.patina : R.rust}`,
              ...enter(f, 5 + i * 12, -30, 0),
            }}
          >
            <div style={{ fontSize: 27, fontWeight: 900 }}>{x[0]}</div>
            <div
              style={{
                fontSize: 25,
                fontWeight: 950,
                color: i === 1 ? R.patina : R.rust,
              }}
            >
              {x[1]}
            </div>
          </div>
        ))}
      </div>
    </RubbingShell>
  );
};

export const InformationDefinitionProjectorScene = () => {
  /* Stable generated markers: data-final-knowledge="information-maker" data-final-knowledge="information-acquirer" data-final-knowledge="information-recorded" data-final-knowledge="information-management-function" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="14" title="政府信息定义：制作或获取，并被记录保存" section="信息定义">
      <div
        data-layout="dual-rubbing-information-file"
        data-visual-anchor="flow-target"
        data-visual-grammar="made-and-acquired-information-enter-from-two-sources,management-function-plus-recorded-form-complete-the-definition"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="government-information-definition"
        data-focal-channels="connector,icon,enclosure"
        style={sceneBox}
      >
        <RubbingCard
          data-final-knowledge="information-maker"
          style={{
            position: "absolute",
            left: 80,
            top: 90,
            width: 470,
            height: 210,
            padding: 32,
            borderLeft: `12px solid ${R.rust}`,
            ...enter(f, 8, -30, 0),
          }}
        >
          <div style={{ fontSize: 39, fontWeight: 950, color: R.rust, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>制作</div>
          <div style={{ fontSize: 25, marginTop: 24, fontWeight: 850 }}>例：监督检查笔录</div>
        </RubbingCard>
        <RubbingCard
          data-final-knowledge="information-acquirer"
          style={{
            position: "absolute",
            left: 80,
            bottom: 80,
            width: 470,
            height: 210,
            padding: 32,
            borderLeft: `12px solid ${R.bronze}`,
            ...enter(f, 24, -30, 0),
          }}
        >
          <div style={{ fontSize: 39, fontWeight: 950, color: R.bronze, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>获取</div>
          <div style={{ fontSize: 25, marginTop: 24, fontWeight: 850 }}>例：企业登记信息</div>
        </RubbingCard>
        <div style={{ position: "absolute", left: 590, top: 260 }}>
          <span style={{ color: R.bronze, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
        <RubbingCard
          data-final-knowledge="information-recorded"
          style={{
            position: "absolute",
            right: 100,
            top: 90,
            width: 760,
            height: 430,
            padding: 50,
            background: R.inkDeep,
            clipPath: "polygon(0 0,92% 0,100% 12%,100% 100%,0 100%)",
            ...enter(f, 40, 35, 0),
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 950, color: "#f4edda", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
            以一定形式记录、保存
          </div>
          <div style={{ fontSize: 28, marginTop: 42, fontWeight: 850, color: "#d8cdb4" }}>
            不是仅指主动公开的信息
          </div>
          <div style={{ marginTop: 45 }}>
            <BronzeTag color={R.bronzeLight}>信息载体可多样</BronzeTag>
          </div>
        </RubbingCard>
        <div
          data-final-knowledge="information-management-function"
          style={{
            position: "absolute",
            right: 250,
            bottom: 35,
            ...enter(f, 58),
          }}
        >
          <InkSeal tone={R.patina} label="前提：行政机关履行行政管理职能" delay={62} />
        </div>
      </div>
    </RubbingShell>
  );
};

export const DisclosureSourceRoutingScene = () => {
  /* Stable generated markers: data-final-knowledge="made-information-route" data-final-knowledge="acquired-information-route" data-final-knowledge="authorized-office-route" data-final-knowledge="joint-information-route" */
  const f = useCurrentFrame();
  const routes = [
    ["谁制作", "制作机关公开", R.rust, "made-information-route"],
    ["谁保存", "保存机关公开", R.bronze, "acquired-information-route"],
    ["派出/内设机构", "获授权后自己名义公开", R.patina, "authorized-office-route"],
    ["共同制作", "牵头机关公开 · 其他机关15日回复", R.inkSoft, "joint-information-route"],
  ] as const;
  return (
    <RubbingShell code="15" title="公开主体：沿信息来源找到出口" section="主体路由">
      <div
        data-layout="four-route-rubbing-map"
        data-visual-anchor="document-fork"
        data-visual-grammar="four-information-origins-enter-a-routing-map,each-origin-terminates-at-the-responsible-disclosure-organ"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="disclosure-responsibility"
        data-focal-channels="connector,contrast,spatial"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 700,
            top: 235,
            width: 360,
            height: 180,
            display: "grid",
            placeItems: "center",
            background: R.inkDeep,
            color: "#f4edda",
            fontSize: 38,
            fontWeight: 950,
            rotate: "-2deg",
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
          }}
        >
          政府信息
        </div>
        {routes.map((x, i) => {
          const positions = [
            [40, 60],
            [1180, 60],
            [40, 420],
            [1180, 420],
          ];
          return (
            <RubbingCard
              key={x[0]}
              data-final-knowledge={x[3]}
              style={{
                position: "absolute",
                left: positions[i][0],
                top: positions[i][1],
                width: 520,
                minHeight: 180,
                padding: 28,
                borderBottom: `8px solid ${x[2]}`,
                ...enter(f, 8 + i * 14, i % 2 ? 30 : -30, 0),
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 24, fontWeight: 850, marginTop: 28 }}>{x[1]}</div>
            </RubbingCard>
          );
        })}
      </div>
    </RubbingShell>
  );
};

export const AbsoluteSecrecyShutterScene = () => {
  /* Stable generated markers: data-final-knowledge="state-secret" data-final-knowledge="statutory-nondisclosure" data-final-knowledge="security-risk" */
  const f = useCurrentFrame();
  const blocks = [
    ["国家秘密", "state-secret"],
    ["法律、行政法规禁止公开", "statutory-nondisclosure"],
    ["危及国安·公安·经安·社会稳定", "security-risk"],
  ] as const;
  return (
    <RubbingShell code="16" title="绝对不公开：三道红色封条" section="不公开范围">
      <div
        data-layout="three-seal-rubbing-wall"
        data-visual-anchor="boundary"
        data-visual-grammar="three-absolute-bars-seal-one-information-file,any-bar-closes-the-publication-route"
        data-text-treatments="stamp,external-negation,label-block"
        data-focal-rule="absolute-nondisclosure"
        data-focal-channels="enclosure,contrast,motion"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            inset: "60px 100px",
            border: `10px double ${R.inkDeep}`,
            background: R.card,
          }}
        />
        {blocks.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={x[1]}
            style={{
              position: "absolute",
              left: 120 + i * 520,
              top: 75 + i * 95,
              width: 500,
              height: 430 - i * 30,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              padding: 36,
              background: R.rust,
              color: "#f4edda",
              clipPath: "polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)",
              fontSize: 31,
              fontWeight: 950,
              fontFamily: "var(--inkloom-animation-title, sans-serif)",
              ...enter(f, 8 + i * 18, 0, -45),
            }}
          >
            {x[0]}
          </div>
        ))}
        <div style={{ position: "absolute", right: 90, bottom: 24 }}>
          <InkSeal tone={R.rust} label="一律不公开" delay={62} />
        </div>
      </div>
    </RubbingShell>
  );
};

export const PrivacyBalanceFilterScene = () => {
  /* Stable generated markers: data-final-knowledge="privacy-input" data-final-knowledge="written-consultation" data-final-knowledge="privacy-outcomes" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="17" title="隐私与商业秘密：15日征求意见后仍需权衡" section="利益衡量">
      <div
        data-layout="third-party-rubbing-scale"
        data-visual-anchor="role-pair"
        data-visual-grammar="written-third-party-opinion-enters-one-scale,consent-reason-public-interest-and-silence-produce-distinct-outcomes"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="conditional-nondisclosure-of-private-information"
        data-focal-channels="connector,contrast,enclosure"
        style={sceneBox}
      >
        <RubbingCard
          data-final-knowledge="privacy-input"
          style={{
            position: "absolute",
            left: 50,
            top: 200,
            width: 380,
            minHeight: 210,
            padding: 35,
            borderLeft: `12px solid ${R.patina}`,
            ...enter(f, 8, -35, 0),
          }}
        >
          <div style={{ fontSize: 38, fontWeight: 950, color: R.patina, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>商业秘密</div>
          <div style={{ fontSize: 38, fontWeight: 950, color: R.patina, marginTop: 24, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
            个人隐私
          </div>
        </RubbingCard>
        <RubbingCard
          data-final-knowledge="written-consultation"
          style={{
            position: "absolute",
            left: 560,
            top: 100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: `10px double ${R.bronze}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 25),
          }}
        >
          <div>
            <div style={{ fontSize: 100, fontWeight: 950, color: R.bronze, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>15</div>
            <div style={{ fontSize: 29, fontWeight: 950 }}>工作日书面征求</div>
            <div style={{ marginTop: 22 }}>
              <BronzeTag color={R.bronze}>第三方意见</BronzeTag>
            </div>
          </div>
        </RubbingCard>
        <div
          data-final-knowledge="privacy-outcomes"
          style={{
            position: "absolute",
            right: 40,
            top: 30,
            width: 650,
            height: 590,
            ...enter(f, 45, 35, 0),
          }}
        >
          {[
            ["同意", "公开", R.patina],
            ["不同意＋合理理由", "原则不公开", R.rust],
            ["重大公共利益", "仍可公开", R.bronze],
            ["逾期未表态", "机关权衡，不视为同意/拒绝", R.inkSoft],
          ].map((x) => (
            <RubbingCard
              key={String(x[0])}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.4fr",
                alignItems: "center",
                minHeight: 128,
                marginBottom: 14,
                padding: "15px 22px",
                borderLeft: `9px solid ${x[2]}`,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 950, color: x[2] }}>{x[0]}</div>
              <div style={{ fontSize: 22, fontWeight: 850 }}>{x[1]}</div>
            </RubbingCard>
          ))}
        </div>
        <div style={{ position: "absolute", left: 450, top: 280 }}>
          <span style={{ color: R.bronze, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
      </div>
    </RubbingShell>
  );
};

export const OptionalNondisclosureDimmersScene = () => {
  /* Stable generated markers: data-final-knowledge="internal-affairs-information" data-final-knowledge="process-information" data-final-knowledge="enforcement-file-information" */
  const f = useCurrentFrame();
  const dims = [
    ["内部事务", "人事·后勤·内部流程", 35, "internal-affairs-information"],
    ["过程性信息", "讨论记录·过程稿·磋商·请示报告", 58, "process-information"],
    ["执法案卷", "法律法规规章另有规定则公开", 75, "enforcement-file-information"],
  ] as const;
  return (
    <RubbingShell code="18" title="可以不公开：三只裁量调光器" section="选择性不公开">
      <div
        data-layout="three-dimmer-rubbing-axes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-information-categories-align-on-one-discretion-axis,statutory-publication-rules-can-override-optional-nondisclosure"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="optional-nondisclosure"
        data-focal-channels="contrast,locator,enclosure"
        style={{
          ...sceneBox,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px 60px",
        }}
      >
        {dims.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[3]}
            style={{
              width: 470,
              height: 500,
              padding: 34,
              ...enter(f, 8 + i * 18, 0, 35),
            }}
          >
            <div style={{ fontSize: 37, fontWeight: 950, color: [R.patina, R.bronze, R.rust][i], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 23, minHeight: 80, marginTop: 24, fontWeight: 850 }}>{x[1]}</div>
            <div style={{ position: "relative", height: 250, marginTop: 35 }}>
              <div
                style={{
                  position: "absolute",
                  left: 55,
                  right: 55,
                  top: 115,
                  height: 12,
                  background: "rgba(38,33,26,0.18)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 50 + Number(x[2]) * 2.6,
                  top: 75,
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: [R.patina, R.bronze, R.rust][i],
                  boxShadow: `0 0 0 14px ${[R.patina, R.bronze, R.rust][i]}22`,
                }}
              />
            </div>
            <InkSeal tone={[R.patina, R.bronze, R.rust][i]} label="可以不公开" delay={30 + i * 14} />
          </RubbingCard>
        ))}
      </div>
    </RubbingShell>
  );
};

export const ActiveDisclosureBeamScene = () => {
  /* Stable generated markers: data-final-knowledge="public-interest-adjustment" data-final-knowledge="public-awareness" data-final-knowledge="public-participation" data-final-knowledge="active-disclosure-examples" */
  const f = useCurrentFrame();
  const rays = [
    ["公众利益调整", R.rust, "public-interest-adjustment"],
    ["公众广泛知晓", R.bronze, "public-awareness"],
    ["公众参与决策", R.patina, "public-participation"],
  ] as const;
  return (
    <RubbingShell code="19" title="主动公开：三种公共性触发一束曝光" section="主动公开">
      <div
        data-layout="radial-trigger-rubbing-beam"
        data-visual-anchor="flow-target"
        data-visual-grammar="three-publicity-triggers-radiate-to-one-duty-center,representative-examples-confirm-active-disclosure-scope"
        data-text-treatments="soft-highlight,label-block,stamp"
        data-focal-rule="active-disclosure-scope"
        data-focal-channels="connector,icon,contrast"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 650,
            top: 130,
            width: 480,
            height: 480,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            background: R.bronze,
            color: "#f4edda",
            border: `5px double ${R.inkDeep}`,
            boxShadow: "0 0 0 35px rgba(154,122,46,0.18)",
            ...enter(f, 10),
          }}
        >
          <div>
            <div style={{ fontSize: 50, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>主动公开</div>
            <div style={{ fontSize: 25, marginTop: 18, fontWeight: 850 }}>无需申请</div>
          </div>
        </div>
        {rays.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[2]}
            style={{
              position: "absolute",
              left: [70, 1170, 650][i],
              top: [90, 90, 500][i],
              width: 500,
              padding: 28,
              textAlign: "center",
              borderTop: `8px double ${x[1]}`,
              fontSize: 31,
              fontWeight: 950,
              fontFamily: "var(--inkloom-animation-title, sans-serif)",
              ...enter(f, 28 + i * 14),
            }}
          >
            {x[0]}
          </RubbingCard>
        ))}
        <div
          data-final-knowledge="active-disclosure-examples"
          style={{
            position: "absolute",
            left: 160,
            bottom: 20,
            width: 580,
            ...enter(f, 65),
          }}
        >
          <InkSeal tone={R.rust} label="例：有社会影响处罚 · 监督检查 · 公务员录用结果" delay={69} />
        </div>
      </div>
    </RubbingShell>
  );
};

export const ActiveDisclosureExposureScene = () => {
  /* Stable generated markers: data-final-knowledge="active-twenty-day-rule" data-final-knowledge="active-disclosure-media" data-final-knowledge="mandatory-venues" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="20" title="主动公开程序：20日、传播渠道、法定场所" section="公开程序">
      <div
        data-layout="three-stop-rubbing-route"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="formation-or-change-starts-one-twenty-day-clock,media-channels-and-mandatory-venues-complete-publication"
        data-text-treatments="stamp,label-block,thin-underline"
        data-focal-rule="active-disclosure-procedure"
        data-focal-channels="locator,connector,enclosure"
        style={sceneBox}
      >
        <RubbingCard
          data-final-knowledge="active-twenty-day-rule"
          style={{
            position: "absolute",
            left: 60,
            top: 70,
            width: 520,
            height: 500,
            border: `8px double ${R.rust}`,
            padding: 34,
            ...enter(f, 8, -35, 0),
          }}
        >
          <div style={{ fontSize: 98, fontWeight: 950, color: R.rust, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>20</div>
          <div style={{ fontSize: 34, fontWeight: 950 }}>工作日内公开</div>
          <div style={{ fontSize: 23, marginTop: 30, fontWeight: 850 }}>自信息形成或变更之日起</div>
          <div style={{ marginTop: 45 }}>
            <InkSeal tone={R.rust} label="无延长制度" delay={26} />
          </div>
        </RubbingCard>
        <RubbingCard
          data-final-knowledge="active-disclosure-media"
          style={{
            position: "absolute",
            left: 680,
            top: 40,
            width: 480,
            height: 260,
            padding: 32,
            background: R.inkDeep,
            ...enter(f, 28),
          }}
        >
          <div style={{ fontSize: 35, fontWeight: 950, color: R.bronzeLight, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
            传播渠道
          </div>
          <div style={{ fontSize: 25, marginTop: 27, lineHeight: 1.5, color: "#e8dfc9" }}>
            公报 · 网站 · 政务媒体
            <br />
            发布会 · 报刊 · 广播电视
          </div>
        </RubbingCard>
        <RubbingCard
          data-final-knowledge="mandatory-venues"
          style={{
            position: "absolute",
            right: 40,
            bottom: 50,
            width: 620,
            height: 340,
            padding: 38,
            borderLeft: `12px solid ${R.patina}`,
            ...enter(f, 48, 35, 0),
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 950, color: R.patina, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>法定场所</div>
          <div style={{ fontSize: 28, marginTop: 30, fontWeight: 900 }}>国家档案馆</div>
          <div style={{ fontSize: 28, marginTop: 20, fontWeight: 900 }}>公共图书馆</div>
          <div style={{ fontSize: 28, marginTop: 20, fontWeight: 900 }}>政务服务场所</div>
        </RubbingCard>
      </div>
    </RubbingShell>
  );
};

export const ApplicationInputSpecimenScene = () => {
  /* Stable generated markers: data-final-knowledge="application-no-purpose" data-final-knowledge="application-form" data-final-knowledge="application-identity" data-final-knowledge="application-description" data-final-knowledge="application-delivery-form" */
  const f = useCurrentFrame();
  const fields = [
    ["身份", "姓名/名称 · 身份证明 · 联系方式", "application-identity"],
    ["信息特征", "名称 · 文号 · 便于查询的描述", "application-description"],
    ["提供形式", "获取方式 · 获取途径", "application-delivery-form"],
  ] as const;
  return (
    <RubbingShell code="21" title="申请公开：一张表单的三个必填区" section="申请入口">
      <div
        data-layout="application-sheet-rubbing-blueprint"
        data-visual-anchor="document-fork"
        data-visual-grammar="one-application-sheet-exposes-three-required-fields,purpose-is-relaxed-while-identity-proof-remains-required"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="application-requirements"
        data-focal-channels="enclosure,locator,contrast"
        style={sceneBox}
      >
        <RubbingCard
          data-final-knowledge="application-form"
          style={{
            position: "absolute",
            left: 80,
            top: 20,
            width: 1050,
            height: 600,
            padding: 40,
            boxShadow: "18px 18px 0 rgba(38,33,26,.14)",
            ...enter(f, 8),
          }}
        >
          <div
            style={{
              fontSize: 39,
              fontWeight: 950,
              borderBottom: `5px solid ${R.ink}`,
              paddingBottom: 15,
              fontFamily: "var(--inkloom-animation-title, sans-serif)",
            }}
          >
            政府信息公开申请
          </div>
          {fields.map((x, i) => (
            <div
              key={x[0]}
              data-final-knowledge={x[2]}
              style={{
                display: "grid",
                gridTemplateColumns: "230px 1fr",
                gap: 25,
                alignItems: "center",
                minHeight: 140,
                borderBottom: `3px solid ${[R.rust, R.bronze, R.patina][i]}66`,
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 950, color: [R.rust, R.bronze, R.patina][i], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 24, fontWeight: 850 }}>{x[1]}</div>
            </div>
          ))}
        </RubbingCard>
        <RubbingCard
          data-final-knowledge="application-no-purpose"
          style={{
            position: "absolute",
            right: 50,
            top: 70,
            width: 520,
            height: 240,
            padding: 34,
            background: "rgba(95,112,64,0.10)",
            border: `7px dashed ${R.patina}`,
            ...enter(f, 35, 35, 0),
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 950, color: R.patina, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>一松</div>
          <div style={{ fontSize: 27, marginTop: 26, fontWeight: 900 }}>无需特殊需要</div>
          <div style={{ fontSize: 23, marginTop: 18 }}>无需说明用途</div>
        </RubbingCard>
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 65,
            width: 470,
            ...enter(f, 52),
          }}
        >
          <BronzeTag color={R.bronze}>书面为主 · 确有困难可口头</BronzeTag>
        </div>
      </div>
    </RubbingShell>
  );
};

export const ReceiptClockDetectorsScene = () => {
  /* Stable generated markers: data-final-knowledge="receipt-in-person" data-final-knowledge="receipt-mail" data-final-knowledge="receipt-online" data-final-knowledge="response-deadline" */
  const f = useCurrentFrame();
  const events = [
    ["当面", "提交之日", R.rust, "receipt-in-person"],
    ["邮寄", "签收日；平信以确认日", R.bronze, "receipt-mail"],
    ["网络/传真", "双方确认日", R.patina, "receipt-online"],
  ] as const;
  return (
    <RubbingShell code="22" title="收到申请：三种渠道从不同节点起算" section="起算点">
      <div
        data-layout="three-channel-rubbing-timeline"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="three-delivery-channels-start-the-clock-at-different-events,receipt-date-connects-to-the-twenty-plus-twenty-response-window"
        data-text-treatments="stamp,soft-highlight,label-block"
        data-focal-rule="receipt-date-and-response-period"
        data-focal-channels="locator,connector,contrast"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 110,
            right: 120,
            top: 350,
            height: 10,
            background: R.ink,
          }}
        />
        {events.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[3]}
            style={{
              position: "absolute",
              left: 80 + i * 520,
              top: i === 1 ? 70 : 390,
              width: 440,
              minHeight: 210,
              padding: 28,
              borderTop: `9px solid ${x[2]}`,
              ...enter(f, 8 + i * 18, 0, i === 1 ? -30 : 30),
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 25, marginTop: 30, fontWeight: 900 }}>{x[1]}</div>
          </RubbingCard>
        ))}
        <div
          data-final-knowledge="response-deadline"
          style={{
            position: "absolute",
            right: 40,
            top: 85,
            width: 370,
            height: 240,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            background: R.inkDeep,
            color: "#f4edda",
            border: `3px double ${R.bronze}`,
            ...enter(f, 62),
          }}
        >
          <div>
            <div style={{ fontSize: 72, fontWeight: 950, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>20＋20</div>
            <div style={{ fontSize: 25, fontWeight: 900 }}>答复＋最长延长</div>
            <div style={{ fontSize: 20, marginTop: 13 }}>征求意见时间不计入</div>
          </div>
        </div>
      </div>
    </RubbingShell>
  );
};

export const ResponseSpectrumSplitterScene = () => {
  /* Stable generated markers: data-final-knowledge="response-public" data-final-knowledge="response-form" data-final-knowledge="response-fee" data-final-knowledge="response-severability" data-final-knowledge="negative-response" */
  const f = useCurrentFrame();
  const branches = [
    ["公开", "按保存情况和申请要求提供", R.patina, "response-public"],
    ["形式调整", "载体安全/成本过高可改适当形式", R.bronze, "response-form"],
    ["费用", "原则免费；明显超合理范围可收费", R.bronzeLight, "response-fee"],
    ["区分处理", "公开可公开部分并说明其余理由", R.inkSoft, "response-severability"],
    ["否定答复", "不公开/不存在/非本机关均须说明", R.rust, "negative-response"],
  ] as const;
  return (
    <RubbingShell code="23" title="答复方式：一份申请分成五个出口" section="答复分支">
      <div
        data-layout="five-branch-rubbing-tree"
        data-visual-anchor="document-fork"
        data-visual-grammar="one-application-branches-to-five-response-types,form-fee-severability-and-negative-results-stay-distinct"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="response-methods"
        data-focal-channels="connector,contrast,spatial"
        style={sceneBox}
      >
        <div
          style={{
            position: "absolute",
            left: 65,
            top: 230,
            width: 330,
            height: 190,
            display: "grid",
            placeItems: "center",
            background: R.inkDeep,
            color: "#f4edda",
            fontSize: 36,
            fontWeight: 950,
            clipPath: "polygon(0 0,88% 0,100% 50%,88% 100%,0 100%)",
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
          }}
        >
          公开申请
        </div>
        <div style={{ position: "absolute", left: 400, top: 300 }}>
          <span style={{ color: R.rust, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 590,
            top: 75,
            width: 10,
            height: 500,
            background: R.ink,
          }}
        />
        {branches.map((x, i) => (
          <RubbingCard
            key={x[0]}
            data-final-knowledge={x[3]}
            style={{
              position: "absolute",
              left: 650 + (i % 2) * 540,
              top: 20 + Math.floor(i / 2) * 205,
              width: 490,
              minHeight: 165,
              padding: 24,
              borderLeft: `9px solid ${x[2]}`,
              ...enter(f, 15 + i * 10, 35, 0),
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              {x[0]}
            </div>
            <div style={{ fontSize: 22, fontWeight: 850, marginTop: 19 }}>{x[1]}</div>
          </RubbingCard>
        ))}
      </div>
    </RubbingShell>
  );
};

export const SupplementCorrectionGateScene = () => {
  /* Stable generated markers: data-final-knowledge="unclear-application" data-final-knowledge="supplement-notice" data-final-knowledge="supplement-outcomes" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="24" title="材料补正：7日内一次告知，逾期不补才退出" section="补正程序">
      <div
        data-layout="seven-day-rubbing-gate"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="unclear-content-enters-guidance-and-one-time-notice,correction-or-unjustified-delay-produces-two-terminal-results"
        data-text-treatments="external-negation,thin-underline,stamp"
        data-focal-rule="supplementing-unclear-applications"
        data-focal-channels="connector,locator,contrast"
        style={sceneBox}
      >
        <RubbingCard
          data-final-knowledge="unclear-application"
          style={{
            position: "absolute",
            left: 50,
            top: 210,
            width: 400,
            height: 220,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            border: `8px dashed ${R.soft}`,
            fontSize: 34,
            fontWeight: 950,
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
            ...enter(f, 8, -35, 0),
          }}
        >
          申请内容
          <br />
          不明确
        </RubbingCard>
        <div style={{ position: "absolute", left: 470, top: 285 }}>
          <span style={{ color: R.bronze, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
        <RubbingCard
          data-final-knowledge="supplement-notice"
          style={{
            position: "absolute",
            left: 610,
            top: 90,
            width: 520,
            height: 480,
            borderRadius: "50%",
            border: `11px double ${R.bronze}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 28),
          }}
        >
          <div>
            <div style={{ fontSize: 98, fontWeight: 950, color: R.bronze, fontFamily: "var(--inkloom-animation-mono, monospace)" }}>7</div>
            <div style={{ fontSize: 30, fontWeight: 950 }}>工作日内一次告知</div>
            <div style={{ fontSize: 24, marginTop: 22, fontWeight: 850 }}>指导＋释明＋更改/补充</div>
            <div style={{ marginTop: 32 }}>
              <InkSeal tone={R.rust} label="不能直接拒绝" delay={44} />
            </div>
          </div>
        </RubbingCard>
        <div
          data-final-knowledge="supplement-outcomes"
          style={{
            position: "absolute",
            right: 40,
            top: 80,
            width: 500,
            ...enter(f, 48, 35, 0),
          }}
        >
          <RubbingCard style={{ padding: 30, borderLeft: `10px solid ${R.patina}`, marginBottom: 34 }}>
            <div style={{ fontSize: 32, fontWeight: 950, color: R.patina, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>按期补正</div>
            <div style={{ fontSize: 24, marginTop: 20 }}>继续处理申请</div>
          </RubbingCard>
          <RubbingCard style={{ padding: 30, borderLeft: `10px solid ${R.rust}` }}>
            <div style={{ fontSize: 32, fontWeight: 950, color: R.rust, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>无正当理由逾期</div>
            <div style={{ fontSize: 24, marginTop: 20 }}>视为放弃 · 不再处理</div>
          </RubbingCard>
          <div style={{ marginTop: 35 }}>
            <InkSeal tone={R.inkSoft} label="补正通知不可单独诉" delay={62} />
          </div>
        </div>
      </div>
    </RubbingShell>
  );
};

export const SpecialRequestRouterScene = () => {
  /* Stable generated markers: data-final-knowledge="special-router" data-final-knowledge="motive-channel" data-final-knowledge="analysis-request" data-final-knowledge="published-material" data-final-knowledge="correction-request" data-final-knowledge="application-to-active" */
  const f = useCurrentFrame();
  const routes = [
    ["信访/投诉/举报", "告知走相应渠道", R.rust, "motive-channel"],
    ["加工分析", "可以不予提供", R.patina, "analysis-request"],
    ["公开出版物", "告知获取途径", R.bronze, "published-material"],
    ["信息有误", "更正或转送有权机关", R.bronzeLight, "correction-request"],
    ["多人申请同一信息", "可转入主动公开", R.inkSoft, "application-to-active"],
  ] as const;
  return (
    <RubbingShell code="25" title="特殊申请：五种请求切换到不同轨道" section="特殊处理">
      <div
        data-layout="five-port-rubbing-switch"
        data-visual-anchor="document-fork"
        data-visual-grammar="five-special-request-types-enter-one-switch,each-request-exits-through-its-own-statutory-treatment"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="special-treatment-of-disclosure-requests"
        data-focal-channels="connector,contrast,locator"
        style={sceneBox}
      >
        <div
          data-final-knowledge="special-router"
          style={{
            position: "absolute",
            left: 690,
            top: 205,
            width: 400,
            height: 250,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            background: R.inkDeep,
            color: "#f4edda",
            clipPath: "polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)",
            fontSize: 38,
            fontWeight: 950,
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
            ...enter(f, 8),
          }}
        >
          特殊申请
          <br />
          切换器
        </div>
        {routes.map((x, i) => {
          const pos = [
            [40, 40],
            [1220, 40],
            [50, 470],
            [1220, 470],
            [650, 485],
          ][i];
          return (
            <RubbingCard
              key={x[0]}
              data-final-knowledge={x[3]}
              style={{
                position: "absolute",
                left: pos[0],
                top: pos[1],
                width: i === 4 ? 500 : 480,
                minHeight: 150,
                padding: 24,
                borderTop: `8px solid ${x[2]}`,
                ...enter(f, 25 + i * 10, i % 2 ? 30 : -30, 0),
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 950, color: x[2], fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
                {x[0]}
              </div>
              <div style={{ fontSize: 22, fontWeight: 850, marginTop: 18 }}>{x[1]}</div>
            </RubbingCard>
          );
        })}
      </div>
    </RubbingShell>
  );
};

export const AbuseThrottleRemedyScene = () => {
  /* Stable generated markers: data-final-knowledge="excessive-request" data-final-knowledge="reason-throttle" data-final-knowledge="abuse-outcomes" */
  const f = useCurrentFrame();
  return (
    <RubbingShell code="26" title="滥用申请权：先说明理由，再决定节流方式" section="权利边界">
      <div
        data-layout="abuse-throttle-rubbing-flow"
        data-visual-anchor="flow-path"
        data-visual-grammar="excessive-frequency-enters-a-reason-gauge,unreasonable-and-reasonable-but-impracticable-cases-end-differently"
        data-text-treatments="stamp,thin-underline,label-block"
        data-focal-rule="abusive-requests-and-remedies"
        data-focal-channels="connector,contrast,locator"
        style={sceneBox}
      >
        <RubbingCard
          data-final-knowledge="excessive-request"
          style={{
            position: "absolute",
            left: 50,
            top: 190,
            width: 420,
            height: 250,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            border: `9px solid ${R.rust}`,
            ...enter(f, 8, -35, 0),
          }}
        >
          <div>
            <div style={{ fontSize: 36, fontWeight: 950, color: R.rust, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              数量 / 频次
            </div>
            <div style={{ fontSize: 31, fontWeight: 950, marginTop: 28 }}>明显超过合理范围</div>
          </div>
        </RubbingCard>
        <div style={{ position: "absolute", left: 500, top: 285 }}>
          <span style={{ color: R.bronze, fontSize: 48, fontWeight: 950, lineHeight: 1 }}>→</span>
        </div>
        <RubbingCard
          data-final-knowledge="reason-throttle"
          style={{
            position: "absolute",
            left: 650,
            top: 95,
            width: 460,
            height: 460,
            borderRadius: "50%",
            border: `12px double ${R.bronze}`,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            ...enter(f, 28),
          }}
        >
          <div>
            <div style={{ fontSize: 38, fontWeight: 950, color: R.bronze, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              要求说明理由
            </div>
            <div
              style={{
                width: 280,
                height: 14,
                background: "rgba(38,33,26,0.18)",
                margin: "45px auto 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 170,
                  top: -23,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: R.rust,
                }}
              />
            </div>
            <div style={{ fontSize: 22, marginTop: 45 }}>合理性校验</div>
          </div>
        </RubbingCard>
        <div
          data-final-knowledge="abuse-outcomes"
          style={{
            position: "absolute",
            right: 35,
            top: 70,
            width: 520,
            ...enter(f, 50, 35, 0),
          }}
        >
          <RubbingCard style={{ padding: 30, borderLeft: `10px solid ${R.rust}`, marginBottom: 28 }}>
            <div style={{ fontSize: 31, fontWeight: 950, color: R.rust, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>理由不合理</div>
            <div style={{ fontSize: 24, marginTop: 18 }}>告知不予处理</div>
          </RubbingCard>
          <RubbingCard style={{ padding: 30, borderLeft: `10px solid ${R.bronze}`, marginBottom: 30 }}>
            <div style={{ fontSize: 31, fontWeight: 950, color: R.bronze, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
              理由合理但无法按期答复
            </div>
            <div style={{ fontSize: 24, marginTop: 18 }}>确定合理延迟期限并告知</div>
          </RubbingCard>
          <InkSeal tone={R.patina} label="最终答复可诉 · 补正通知不可单诉" delay={66} />
        </div>
      </div>
    </RubbingShell>
  );
};

const SCENE_COMPONENTS = {
  "setting-spectrum": SettingSpectrumScene,
  "rulemaking-chronology": RulemakingChronologyScene,
  "setting-trap-lenses": SettingTrapLensesScene,
  "authorization-prism": AuthorizationPrismScene,
  "delegation-filters": DelegationFiltersScene,
  "concentration-apertures": ConcentrationAperturesScene,
  "subject-trap-darkroom": SubjectTrapDarkroomScene,
  "hearing-signal-split": HearingSignalSplitScene,
  "penalty-hearing-waveband": PenaltyHearingWavebandScene,
  "license-hearing-focus": LicenseHearingFocusScene,
  "hearing-clock-array": HearingClockArrayScene,
  "hearing-common-console": HearingCommonConsoleScene,
  "hearing-trap-scope": HearingTrapScopeScene,
  "information-definition-projector": InformationDefinitionProjectorScene,
  "disclosure-source-routing": DisclosureSourceRoutingScene,
  "absolute-secrecy-shutter": AbsoluteSecrecyShutterScene,
  "privacy-balance-filter": PrivacyBalanceFilterScene,
  "optional-nondisclosure-dimmers": OptionalNondisclosureDimmersScene,
  "active-disclosure-beam": ActiveDisclosureBeamScene,
  "active-disclosure-exposure": ActiveDisclosureExposureScene,
  "application-input-specimen": ApplicationInputSpecimenScene,
  "receipt-clock-detectors": ReceiptClockDetectorsScene,
  "response-spectrum-splitter": ResponseSpectrumSplitterScene,
  "supplement-correction-gate": SupplementCorrectionGateScene,
  "special-request-router": SpecialRequestRouterScene,
  "abuse-throttle-remedy": AbuseThrottleRemedyScene,
} as const;

export const TransparencyOpticsLab = () => (
  <AbsoluteFill>
    {(Object.keys(SCENES) as Array<keyof typeof SCENES>).map((key, index) => {
      const Component = SCENE_COMPONENTS[key];
      const scene = SCENES[key];
      return (
        <TimelineSequence
          key={key}
          name={String(index + 1).padStart(2, "0")}
          start={scene.start}
          duration={scene.duration}
        >
          <Component />
        </TimelineSequence>
      );
    })}
  </AbsoluteFill>
);
