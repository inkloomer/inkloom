import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  porcelain: "#F7F4EC",
  white: "#FFFFFF",
  ink: "#1E2A45",
  jade: "#2E7D5B",
  red: "#C0392B",
  gold: "#B8892F",
  slate: "#7C8798",
  glass: "#DDE3EC",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const enter = (f: number, d = 0, y = 26) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `0 ${interpolate(f, [d, d + 24], [y, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px`,
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
      background: C.porcelain,
      color: C.ink,
      overflow: "hidden",
      backgroundImage:
        "linear-gradient(rgba(30,42,69,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,42,69,.04) 1px,transparent 1px)",
      backgroundSize: "auto,64px 64px,64px 64px",
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
          border: `4px solid ${C.gold}`,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: C.gold,
          letterSpacing: 2,
        }}
      >
        EXHIBIT {code}
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
          color: C.slate,
        }}
      >
        CIVIC ACT · SHOWCASE
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

const Plate = ({
  children,
  color = C.ink,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      border: `3px solid ${color}`,
      background: C.white,
      padding: "10px 14px",
      boxShadow: `5px 5px 0 ${color}1f`,
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

const Label = ({
  children,
  color = C.ink,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      fontSize: 27,
      fontWeight: 950,
      color,
      borderBottom: `4px solid ${color}`,
      display: "inline-block",
      paddingBottom: 6,
      ...style,
    }}
  >
    {children}
  </div>
);

const Specimen = ({
  title,
  color,
  lines,
  style,
  finalKnowledge,
}: {
  title: string;
  color: string;
  lines: React.ReactNode[];
  style?: React.CSSProperties;
  finalKnowledge?: string;
}) => (
  <div
    data-final-knowledge={finalKnowledge}
    style={{
      background: C.white,
      border: `4px solid ${color}`,
      boxShadow: `10px 10px 0 ${color}1f`,
      padding: "18px 20px",
      ...style,
    }}
  >
    <Label color={color}>{title}</Label>
    <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
      {lines.map((l, i) => (
        <div key={i} style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.3 }}>
          {l}
        </div>
      ))}
    </div>
  </div>
);

export const SixActShowcaseScene = () => {
  /* Static audit inventory: data-final-knowledge="levy-ownership" data-final-knowledge="requisition-use" data-final-knowledge="adjudication" data-final-knowledge="confirmation" data-final-knowledge="grant" data-final-knowledge="award" data-final-knowledge="six-act-summary" */
  const f = useCurrentFrame();
  const acts = [
    ["行政征收", "所有权", C.red, "levy-ownership"],
    ["行政征用", "使用权", C.jade, "requisition-use"],
    ["行政裁决", "居间处理民事争议", C.gold, "adjudication"],
    ["行政确认", "甄别 · 宣告", C.ink, "confirmation"],
    ["行政给付", "生存保障", C.jade, "grant"],
    ["行政奖励", "表彰先进", C.gold, "award"],
  ];
  return (
    <Shell code="01" title="六种其他具体行政行为：政务展柜总览">
      <div
        data-layout="six-specimen-showcase-wall"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="six-act-specimens-stand-on-their-own-pedestals,each-act-carries-its-distinct-legal-marker"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="six-other-concrete-acts-and-their-core-markers"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        {acts.map((x, i) => (
          <div
            key={String(x[0])}
            style={{
              position: "absolute",
              left: 60 + (i % 3) * 600,
              top: 40 + Math.floor(i / 3) * 350,
              width: 540,
              height: 300,
              border: `4px solid ${x[2]}`,
              background: C.white,
              boxShadow: `10px 10px 0 ${x[2]}1f`,
              padding: "20px 22px",
              ...enter(f, 8 + i * 8),
            }}
          >
            <div
              style={{
                fontSize: 34,
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
              data-final-knowledge={String(x[3])}
              style={{
                marginTop: 20,
                fontSize: 24,
                fontWeight: 900,
                color: C.ink,
                background: "#" + (x[2] === C.red ? "C0392B" : x[2] === C.jade ? "2E7D5B" : "B8892F") + "14",
                border: `2px solid ${x[2]}`,
                padding: "12px 14px",
              }}
            >
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="six-act-summary"
          style={{
            position: "absolute",
            left: 500,
            top: 604,
            width: 920,
            textAlign: "center",
            ...enter(f, 60),
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 950,
              color: C.ink,
              background: "#F7F4EC",
              border: `3px dashed ${C.gold}`,
              padding: "14px 18px",
            }}
          >
            口诀：征收所有权 · 征用使用权 · 裁决居中 · 确认宣告 · 给付保生存 · 奖励扬先进
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const LevyVsRequisitionScene = () => {
  /* Static audit inventory: data-final-knowledge="levy-specimen" data-final-knowledge="levy-kind-1" data-final-knowledge="levy-kind-2" data-final-knowledge="levy-kind-3" data-final-knowledge="levy-kind-4" data-final-knowledge="requisition-specimen" data-final-knowledge="levy-requisition-difference" */
  const f = useCurrentFrame();
  return (
    <Shell code="02" title="征收 vs 征用：所有权与使用权">
      <div
        data-layout="twin-vitrine-levy-requisition"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="levy-and-requisition-face-each-other-across-the-vitrine,use-and-ownership-split-the-specimens"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="levy-takes-ownership-requisition-borrows-use"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="levy-specimen"
          style={{
            position: "absolute",
            left: 60,
            top: 50,
            width: 840,
            height: 640,
            border: `6px solid ${C.red}`,
            background: "#C0392B0d",
            padding: "26px 28px",
            ...enter(f, 6),
          }}
        >
          <Label color={C.red} style={{ fontSize: 32 }}>行政征收 · 所有权</Label>
          <div style={{ marginTop: 18 }}>
            <Plate>行政机关依法强制征收税费或私有财产</Plate>
          </div>
          <div style={{ marginTop: 16, fontSize: 24, fontWeight: 950, color: C.ink }}>
            种类：
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["征税", "征费", "土地征收", "房屋征收"].map((x, i) => (
              <span
                key={x}
                data-final-knowledge={`levy-kind-${i + 1}`}
                style={{
                  border: `3px solid ${C.red}`,
                  padding: "8px 14px",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.red,
                  background: C.white,
                  ...enter(f, 18 + i * 8),
                }}
              >
                {x}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 20, fontSize: 23, fontWeight: 850 }}>
            可能有偿，也可能无偿
          </div>
        </div>
        <div
          data-final-knowledge="requisition-specimen"
          style={{
            position: "absolute",
            left: 1000,
            top: 50,
            width: 840,
            height: 640,
            border: `6px solid ${C.jade}`,
            background: "#2E7D5B0d",
            padding: "26px 28px",
            ...enter(f, 14),
          }}
        >
          <Label color={C.jade} style={{ fontSize: 32 }}>行政征用 · 使用权</Label>
          <div style={{ marginTop: 18 }}>
            <Plate>
              为<u style={{ textDecorationThickness: 3, textDecorationColor: C.jade }}>公共利益</u>需要，依法强制使用财产并给予
              <b style={{ color: C.jade }}>补偿</b>
            </Plate>
          </div>
          <div style={{ marginTop: 22, fontSize: 23, fontWeight: 850 }}>
            限制的是使用权，非所有权
          </div>
          <div style={{ marginTop: 16 }}>
            <span
              style={{
                border: `3px solid ${C.jade}`,
                background: C.white,
                padding: "8px 14px",
                fontSize: 22,
                fontWeight: 900,
                color: C.jade,
              }}
            >
              征用具有补偿性
            </span>
          </div>
        </div>
        <div
          data-final-knowledge="levy-requisition-difference"
          style={{
            position: "absolute",
            left: 460,
            top: 658,
            width: 1000,
            textAlign: "center",
            ...enter(f, 50),
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 950,
              color: C.ink,
              background: C.white,
              border: `4px solid ${C.gold}`,
              padding: "14px 16px",
            }}
          >
            征收限制所有权 · 征用限制使用权；征用必补偿，征收或有偿或无偿
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const AdjudicationVsConfirmationScene = () => {
  /* Static audit inventory: data-final-knowledge="adjudication-specimen" data-final-knowledge="adjudication-role-1" data-final-knowledge="adjudication-role-2" data-final-knowledge="confirmation-specimen" data-final-knowledge="confirmation-role-1" data-final-knowledge="confirmation-role-2" data-final-knowledge="license-vs-confirmation" */
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="裁决 vs 确认：居间与宣告">
      <div
        data-layout="twin-vitrine-adjudication-confirmation"
        data-visual-anchor="role-pair"
        data-visual-grammar="adjudication-stands-between-three-parties,confirmation-stands-over-two-parties"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="adjudication-is-neutral-third-party-confirmation-is-manager"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="adjudication-specimen"
          style={{
            position: "absolute",
            left: 60,
            top: 50,
            width: 840,
            height: 620,
            border: `6px solid ${C.gold}`,
            background: "#B8892F0d",
            padding: "26px 28px",
            ...enter(f, 6),
          }}
        >
          <Label color={C.gold} style={{ fontSize: 32 }}>行政裁决 · 居间</Label>
          <div style={{ marginTop: 18 }}>
            <Plate>行政机关居间对特定民事争议作出有约束力的处理</Plate>
          </div>
          <div style={{ marginTop: 18, fontSize: 23, fontWeight: 850, lineHeight: 1.5 }}>
            以<u style={{ textDecorationThickness: 3, textDecorationColor: C.gold }}>第三方中立</u>主体身份出现
            <br />
            必然涉及<b style={{ color: C.gold }}>三方主体</b>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            {["行政机关", "争议双方"].map((x, i) => (
              <span
                key={x}
                data-final-knowledge={`adjudication-role-${i + 1}`}
                style={{
                  border: `3px solid ${C.gold}`,
                  background: C.white,
                  padding: "8px 12px",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.gold,
                  ...enter(f, 18 + i * 8),
                }}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="confirmation-specimen"
          style={{
            position: "absolute",
            left: 1000,
            top: 50,
            width: 840,
            height: 620,
            border: `6px solid ${C.jade}`,
            background: "#2E7D5B0d",
            padding: "26px 28px",
            ...enter(f, 14),
          }}
        >
          <Label color={C.jade} style={{ fontSize: 32 }}>行政确认 · 宣告</Label>
          <div style={{ marginTop: 18 }}>
            <Plate>
              对法律地位、法律关系或法律事实甄别、确定、认定、证明并宣告
            </Plate>
          </div>
          <div style={{ marginTop: 18, fontSize: 23, fontWeight: 850, lineHeight: 1.5 }}>
            以<u style={{ textDecorationThickness: 3, textDecorationColor: C.jade }}>管理者</u>身份出现
            <br />
            机关与相对人的<b style={{ color: C.jade }}>双方</b>法律关系
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            {["行政机关", "行政相对人"].map((x, i) => (
              <span
                key={x}
                data-final-knowledge={`confirmation-role-${i + 1}`}
                style={{
                  border: `3px solid ${C.jade}`,
                  background: C.white,
                  padding: "8px 12px",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.jade,
                  ...enter(f, 20 + i * 8),
                }}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="license-vs-confirmation"
          style={{
            position: "absolute",
            left: 300,
            top: 648,
            width: 1320,
            textAlign: "center",
            ...enter(f, 46),
          }}
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: 950,
              background: C.white,
              border: `4px solid ${C.gold}`,
              padding: "14px 16px",
            }}
          >
            许可 = 赋权（权利来自政府赋予） · 确认 = 加强既存事实与法律关系（权利并非来自政府）
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const GrantVsAwardScene = () => {
  /* Static audit inventory: data-final-knowledge="grant-specimen" data-final-knowledge="grant-kind-1" data-final-knowledge="grant-kind-2" data-final-knowledge="grant-kind-3" data-final-knowledge="grant-kind-4" data-final-knowledge="award-specimen" data-final-knowledge="award-kind-1" data-final-knowledge="award-kind-2" */
  const f = useCurrentFrame();
  return (
    <Shell code="04" title="给付 vs 奖励：保障与表彰">
      <div
        data-layout="twin-vitrine-grant-award"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="grant-secures-survival-award-honors-contribution,specimens-cover-welfare-and-recognition"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="grant-is-survival-duty-award-is-recognition-system"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="grant-specimen"
          style={{
            position: "absolute",
            left: 60,
            top: 50,
            width: 840,
            height: 660,
            border: `6px solid ${C.jade}`,
            background: "#2E7D5B0d",
            padding: "26px 28px",
            ...enter(f, 6),
          }}
        >
          <Label color={C.jade} style={{ fontSize: 32 }}>行政给付 · 生存保障</Label>
          <div style={{ marginTop: 18 }}>
            <Plate>政府提供必需生存条件、防范生活风险和社会共同生活条件的行政义务</Plate>
          </div>
          <div style={{ marginTop: 16, fontSize: 24, fontWeight: 950, color: C.ink }}>
            种类：
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              "城市低保金",
              "五保户救济金",
              "灾害生活救济金",
              "国家承担的社会保险费",
            ].map((x, i) => (
              <span
                key={x}
                data-final-knowledge={`grant-kind-${i + 1}`}
                style={{
                  border: `3px solid ${C.jade}`,
                  background: C.white,
                  padding: "8px 12px",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.jade,
                  ...enter(f, 16 + i * 8),
                }}
              >
                {x}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 14 }}>
            <Plate>财政支持费用：企业科技开发、大学生自主创业等</Plate>
          </div>
        </div>
        <div
          data-final-knowledge="award-specimen"
          style={{
            position: "absolute",
            left: 1000,
            top: 50,
            width: 840,
            height: 660,
            border: `6px solid ${C.gold}`,
            background: "#B8892F0d",
            padding: "26px 28px",
            ...enter(f, 14),
          }}
        >
          <Label color={C.gold} style={{ fontSize: 32 }}>行政奖励 · 表彰先进</Label>
          <div style={{ marginTop: 18 }}>
            <Plate>
              给予遵纪守法或为国家社会作出成就贡献者
              <b style={{ color: C.gold }}>物质或精神奖励</b>
            </Plate>
          </div>
          <div style={{ marginTop: 18, fontSize: 23, fontWeight: 850, lineHeight: 1.5 }}>
            目的：<u style={{ textDecorationThickness: 3, textDecorationColor: C.gold }}>表彰先进、激励后进</u>
            <br />
            调动和激发积极性、创造性
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            {["物质奖励", "精神奖励"].map((x, i) => (
              <span
                key={x}
                data-final-knowledge={`award-kind-${i + 1}`}
                style={{
                  border: `3px solid ${C.gold}`,
                  background: C.white,
                  padding: "8px 12px",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.gold,
                  ...enter(f, 22 + i * 8),
                }}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const MnemonicRecapScene = () => {
  /* Static audit inventory: data-final-knowledge="memo-levy" data-final-knowledge="memo-requisition" data-final-knowledge="memo-adjudication" data-final-knowledge="memo-confirmation" data-final-knowledge="memo-grant" data-final-knowledge="memo-award" data-final-knowledge="mnemonic-exam-tip" */
  const f = useCurrentFrame();
  return (
    <Shell code="05" title="记忆口诀：征收所有权，征用使用权">
      <div
        data-layout="mnemonic-plaque-wall"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="six-mnemonics-engrave-onto-plaques-in-reading-order,exam-favorites-are-stamped-last"
        data-text-treatments="stamp,label-block,soft-highlight"
        data-focal-rule="mnemonic-for-other-concrete-acts"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 30 }}
      >
        {[
          ["征收", "所有权 · 收税费、土地、房屋", C.red, "memo-levy"],
          ["征用", "使用权 · 公共利益 + 补偿", C.jade, "memo-requisition"],
          ["裁决", "居间 · 第三方中立 · 三方主体", C.gold, "memo-adjudication"],
          ["确认", "宣告 · 管理者身份 · 双方", C.ink, "memo-confirmation"],
          ["给付", "保生存 · 低保救济社保", C.jade, "memo-grant"],
          ["奖励", "扬先进 · 物质精神激励", C.gold, "memo-award"],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={String(x[3])}
            style={{
              position: "absolute",
              left: 90 + (i % 3) * 580,
              top: 40 + Math.floor(i / 3) * 300,
              width: 520,
              height: 250,
              border: `5px solid ${x[2]}`,
              background: C.white,
              boxShadow: `10px 10px 0 ${x[2]}1f`,
              padding: "22px 24px",
              ...enter(f, 6 + i * 8),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  width: 74,
                  height: 74,
                  borderRadius: "50%",
                  border: `5px solid ${x[2]}`,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 32,
                  fontWeight: 950,
                  color: x[2],
                  flex: "0 0 auto",
                }}
              >
                {x[0]}
              </span>
              <div style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.35 }}>
                {x[1]}
              </div>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="mnemonic-exam-tip"
          style={{
            position: "absolute",
            left: 460,
            top: 612,
            width: 1000,
            textAlign: "center",
            ...enter(f, 60),
          }}
        >
          <div
            style={{
              display: "inline-block",
              border: `4px solid ${C.gold}`,
              color: C.gold,
              padding: "12px 20px",
              fontSize: 27,
              fontWeight: 950,
              rotate: "-2deg",
            }}
          >
            考频最高：征收 vs 征用 · 裁决 vs 确认
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const MiscActsShowcase = () => (
  <AbsoluteFill>
    <TimelineSequence name="01" start={SCENES["six-act-showcase"].start} duration={SCENES["six-act-showcase"].duration}>
      <SixActShowcaseScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["levy-vs-requisition"].start} duration={SCENES["levy-vs-requisition"].duration}>
      <LevyVsRequisitionScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["adjudication-vs-confirmation"].start} duration={SCENES["adjudication-vs-confirmation"].duration}>
      <AdjudicationVsConfirmationScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["grant-vs-award"].start} duration={SCENES["grant-vs-award"].duration}>
      <GrantVsAwardScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["mnemonic-recap"].start} duration={SCENES["mnemonic-recap"].duration}>
      <MnemonicRecapScene />
    </TimelineSequence>
  </AbsoluteFill>
);
