import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  navy: "#0F1730",
  deep: "#1A2547",
  white: "#F4F6FB",
  blue: "#3D7BD9",
  red: "#D64545",
  amber: "#E0A63C",
  gold: "#C9A24B",
  gray: "#8E99B8",
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
      background: C.navy,
      color: C.white,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 12% 6%,rgba(61,123,217,.16),transparent 28%),linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
      backgroundSize: "auto,58px 58px,58px 58px",
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
          width: 168,
          height: 78,
          background: C.gold,
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%,14px 50%)",
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: C.navy,
          letterSpacing: 2,
        }}
      >
        BEACON {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 45, lineHeight: 1.08, margin: 0 }}
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
        LITIGANT · BEACON
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
      background: `${color}12`,
      border: `3px solid ${color}`,
      boxShadow: `0 0 22px ${color}26`,
      padding: "13px 16px",
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

const Role = ({
  label,
  color,
  style,
  finalKnowledge,
}: {
  label: string;
  color: string;
  style?: React.CSSProperties;
  finalKnowledge?: string;
}) => (
  <div
    data-final-knowledge={finalKnowledge}
    style={{
      border: `4px solid ${color}`,
      background: `${color}10`,
      padding: "14px 16px",
      ...style,
    }}
  >
    <div
      style={{
        fontSize: 26,
        fontWeight: 950,
        color,
        borderBottom: `3px solid ${color}`,
        display: "inline-block",
        paddingBottom: 6,
      }}
    >
      {label}
    </div>
  </div>
);

export const DefendantGeneralBoardScene = () => {
  /* Static audit inventory: data-final-knowledge="def-slot-01" data-final-knowledge="def-slot-02" data-final-knowledge="def-slot-03" data-final-knowledge="def-slot-04" data-final-knowledge="def-slot-05" data-final-knowledge="def-slot-06" data-final-knowledge="def-slot-07" data-final-knowledge="def-slot-08" data-final-knowledge="def-slot-09" data-final-knowledge="defendant-mnemonic" */
  const f = useCurrentFrame();
  return (
    <Shell code="01" title="直接起诉：九宫格被告登记板">
      <div
        data-layout="nine-slot-defendant-registry"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="nine-behavior-slots-map-to-their-defendants,joint-acts-split-into-defendant-and-third-party"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="direct-suit-defendant-identification"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 16 }}
      >
        {[
          ["作出行政行为的机关", "该行政机关", C.blue],
          ["法规规章授权的组织", "该授权组织（村居委、高校、行业协会）", C.amber],
          ["委托的组织", "委托的行政机关", C.red],
          ["派出机关", "派出机关", C.blue],
          ["被撤销的机关", "继受机关 / 所属政府 / 垂直上一级", C.red],
          ["临时组建的机构", "组建机关", C.blue],
          ["共同行为", "共同被告；不同意追加→第三人", C.red],
          ["假共同行为", "行政主体为被告，非行政主体为第三人", C.amber],
          ["经批准的行政行为", "诉讼看名义", C.gold],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`def-slot-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 40 + (i % 3) * 610,
              top: 30 + Math.floor(i / 3) * 215,
              width: 570,
              height: 185,
              border: `4px solid ${x[2]}`,
              background: `${x[2]}0e`,
              padding: "16px 18px",
              ...enter(f, 6 + i * 8),
            }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, color: x[2] }}>{x[0]}</div>
            <div
              style={{
                marginTop: 10,
                fontSize: 22,
                fontWeight: 850,
                lineHeight: 1.35,
                color: C.white,
              }}
            >
              → <b style={{ color: x[2] }}>{x[1]}</b>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="defendant-mnemonic"
          style={{
            position: "absolute",
            left: 460,
            top: 656,
            width: 1000,
            textAlign: "center",
            ...enter(f, 80),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.gold}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: C.gold,
            }}
          >
            口诀：谁行为谁被告；授权组织自己当；委托告委托方；共同行为一起告
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const DefendantSpecialRoutesScene = () => {
  /* Static audit inventory: data-final-knowledge="special-route-1" data-final-knowledge="special-route-2" data-final-knowledge="special-route-3" data-final-knowledge="special-route-4" data-final-knowledge="special-summary" */
  const f = useCurrentFrame();
  return (
    <Shell code="02" title="特别主体：内设、开发区、征收、大队支队">
      <div
        data-layout="four-special-defendant-routes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="four-special-subjects-route-to-their-defendants-by-name-or-authority,development-zones-follow-approval-and-authorization"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="special-subject-defendant-routes"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="special-route-1"
          style={{
            position: "absolute",
            left: 50,
            top: 34,
            width: 900,
            border: `5px solid ${C.blue}`,
            padding: "18px 20px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.blue }}>
            内设机构、派出机构（有授权，如派出所）
          </div>
          <div style={{ marginTop: 10, fontSize: 22, fontWeight: 850, lineHeight: 1.4 }}>
            以所属机关名义 → 被告为<b style={{ color: C.blue }}>所属机关</b>
            <br />
            以自己名义 → 被告为机构本身；但<b style={{ color: C.red }}>种类越权</b> → 所属机关
          </div>
        </div>
        <div
          data-final-knowledge="special-route-2"
          style={{
            position: "absolute",
            left: 1000,
            top: 34,
            width: 870,
            border: `5px solid ${C.amber}`,
            padding: "18px 20px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.amber }}>
            开发区管理机构
          </div>
          <div style={{ marginTop: 10, fontSize: 22, fontWeight: 850, lineHeight: 1.4 }}>
            国务院/省级批准 → 机构及职能部门<b style={{ color: C.amber }}>独立作被告</b>
            <br />
            非批准但有授权 → 管理机构为被告
            <br />
            非批准无授权 → <b style={{ color: C.red }}>设立的地方政府</b>为被告
          </div>
        </div>
        <div
          data-final-knowledge="special-route-3"
          style={{
            position: "absolute",
            left: 50,
            top: 360,
            width: 900,
            border: `5px solid ${C.red}`,
            padding: "18px 20px",
            ...enter(f, 18),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.red }}>
            房屋征收补偿
          </div>
          <div style={{ marginTop: 10, fontSize: 22, fontWeight: 850, lineHeight: 1.4 }}>
            市县级政府确定的征收部门 → <b style={{ color: C.red }}>征收部门</b>为被告
            <br />
            征收实施单位受委托 → 委托的<b style={{ color: C.red }}>征收部门</b>为被告
          </div>
        </div>
        <div
          data-final-knowledge="special-route-4"
          style={{
            position: "absolute",
            left: 1000,
            top: 360,
            width: 870,
            border: `5px solid ${C.gold}`,
            padding: "18px 20px",
            ...enter(f, 24),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.gold }}>
            大队与支队
          </div>
          <div style={{ marginTop: 10, fontSize: 22, fontWeight: 850, lineHeight: 1.4 }}>
            县交警大队 ≈ 县交管局；市交警支队 ≈ 市交管局
            <br />
            大队、支队均具有<b style={{ color: C.gold }}>被告资格</b>
          </div>
        </div>
        <div
          data-final-knowledge="special-summary"
          style={{
            position: "absolute",
            left: 460,
            top: 652,
            width: 1000,
            textAlign: "center",
            ...enter(f, 60),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px dashed ${C.gray}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 900,
              color: C.gray,
            }}
          >
            例外重点：种类越权告所属机关 · 开发区看批准与授权
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const DefendantGovRulesScene = () => {
  /* Static audit inventory: data-final-knowledge="gov-rule-guidance" data-final-knowledge="gov-rule-document" data-final-knowledge="gov-rule-force" */
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="县级以上政府：谁行为、看文书、看力度">
      <div
        data-layout="government-defendant-three-rule-panels"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="guidance-keeps-the-department-as-defendant,orders-name-the-government,demands-follow-the-document"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="county-government-defendant-rules"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="gov-rule-guidance"
          style={{
            position: "absolute",
            left: 60,
            top: 36,
            width: 580,
            height: 570,
            border: `5px solid ${C.blue}`,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.blue }}>
            谁行为，谁被告
          </div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            县政府"指导"（听取报告、开会、下发文件）
            <br />
            → 被告为<b style={{ color: C.blue }}>职能部门的机关</b>
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 22,
              fontWeight: 900,
              color: C.amber,
              border: `3px solid ${C.amber}`,
              padding: "10px 12px",
            }}
          >
            例：市政府开会指导市文旅局行政协议 → 被告是市文旅局
          </div>
          <div style={{ marginTop: 16, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            信息公开指定机构以自己名义
            <br />
            → 被告为<b style={{ color: C.blue }}>该指定机构</b>（特别记忆）
          </div>
        </div>
        <div
          data-final-knowledge="gov-rule-document"
          style={{
            position: "absolute",
            left: 680,
            top: 36,
            width: 580,
            height: 570,
            border: `5px solid ${C.red}`,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.red }}>
            有文书，看文书；没文书，告部门
          </div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            责成职能部门强拆：
            <br />
            ① 有强制拆除决定书 → 作出决定的机关
            <br />
            ② 无决定书 → 具体实施拆除的职能部门
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 22,
              fontWeight: 900,
              color: C.amber,
              border: `3px solid ${C.amber}`,
              padding: "10px 12px",
            }}
          >
            集体土地、国有土地征收拆除同此规则
          </div>
        </div>
        <div
          data-final-knowledge="gov-rule-force"
          style={{
            position: "absolute",
            left: 1300,
            top: 36,
            width: 560,
            height: 570,
            border: `5px solid ${C.amber}`,
            padding: "20px 22px",
            ...enter(f, 18),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.amber }}>
            指令 vs 责成
          </div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            <b style={{ color: C.red }}>指令/责令</b>：命令照方案办，下级如提线木偶
            <br />
            → 被告为<b style={{ color: C.red }}>县政府</b>
          </div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            <b style={{ color: C.blue }}>责成</b>：指定去办，被责成对象有独立意思空间
            <br />
            → 按"有文书看文书"判断
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 22,
              fontWeight: 900,
              color: C.gray,
              border: `3px dashed ${C.gray}`,
              padding: "10px 12px",
            }}
          >
            力度：指令 &gt; 责成
          </div>
        </div>
      </div>
    </Shell>
  );
};


export const DefendantAfterReviewScene = () => {
  /* Static audit inventory: data-final-knowledge="review-change" data-final-knowledge="review-uphold" data-final-knowledge="review-inaction" data-final-knowledge="change-detection" data-final-knowledge="mixed-outcome-rule" */
  const f = useCurrentFrame();
  return (
    <Shell code="04" title="经过复议：改变单独告、维持共同告、不作为择一告">
      <div
        data-layout="three-review-outcome-beams"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-review-outcomes-beam-to-their-defendant-slots,mixed-outcomes-join-as-co-defendants"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="defendant-after-review-decides-by-outcome"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        {[
          ["复议改变", "行为结果改变 → 被告为复议机关", C.green, "review-change", 0],
          ["复议维持", "审过且结果没变 → 原机关+复议机关共同被告", C.red, "review-uphold", 1],
          ["复议不作为", "没审理过 → 择一告（复议机关或原机关）", C.amber, "review-inaction", 2],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={String(x[3])}
            style={{
              position: "absolute",
              left: 90,
              top: 36 + i * 178,
              width: 1740,
              height: 160,
              border: `5px solid ${x[2]}`,
              background: `${x[2]}10`,
              padding: "18px 22px",
              ...enter(f, 6 + i * 12),
            }}
          >
            <div style={{ fontSize: 27, fontWeight: 950, color: x[2] }}>{x[0]}</div>
            <div style={{ marginTop: 10, fontSize: 23, fontWeight: 850, lineHeight: 1.35 }}>
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="change-detection"
          style={{
            position: "absolute",
            left: 90,
            top: 580,
            width: 860,
            border: `4px solid ${C.gray}`,
            padding: "14px 18px",
            ...enter(f, 46),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 950, color: C.gray }}>
            改变 = 行为结果改变
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 6, lineHeight: 1.35 }}>
            确认无效属改变；确认违法一般属改变（以违反法定程序为由确认违法的除外）；只变依据结果未变 = 维持
          </div>
        </div>
        <div
          data-final-knowledge="mixed-outcome-rule"
          style={{
            position: "absolute",
            left: 1000,
            top: 580,
            width: 830,
            border: `4px solid ${C.red}`,
            padding: "14px 18px",
            ...enter(f, 54),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 950, color: C.red }}>
            多重因素：既有维持又有改变内容
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 6, lineHeight: 1.35 }}>
            → 原机关和复议机关为共同被告
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const PlaintiffConceptLanternScene = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-definition" data-final-knowledge="lantern-1" data-final-knowledge="lantern-2" data-final-knowledge="lantern-3" data-final-knowledge="lantern-4" data-final-knowledge="lantern-5" data-final-knowledge="lantern-six-relationship" */
  const f = useCurrentFrame();
  return (
    <Shell code="05" title="原告概念：五盏判断灯">
      <div
        data-layout="five-concept-lanterns"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-requirement-lanterns-light-the-plaintiff-concept,each-lantern-tests-one-element"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="plaintiff-concept-five-elements"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="plaintiff-definition"
          style={{
            position: "absolute",
            left: 460,
            top: 24,
            width: 1000,
            textAlign: "center",
            ...enter(f, 4),
          }}
        >
          <div
            style={{
              fontSize: 27,
              fontWeight: 950,
              color: C.white,
              border: `4px solid ${C.gold}`,
              padding: "14px 16px",
              background: `${C.gold}10`,
            }}
          >
            原告：认为行政行为侵犯其合法权益的公民、法人或其他组织（须有法律上的利害关系）
          </div>
        </div>
        {[
          ["公民法人组织", "行政机关无原告资格（不能当原告）", C.blue],
          ["认为", "主观认识即可，不要求实体上确受影响", C.amber],
          ["侵犯", "实体权利受到必然影响（权利义务变化）", C.red],
          ["其", "自身利益受损；不能为他人、为公益（无普通公益诉讼）", C.gold],
          ["合法权益", "不保护非法利益", C.blue],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`lantern-${i + 1}`}
            style={{
              position: "absolute",
              left: 90 + (i % 3) * 590,
              top: 150 + Math.floor(i / 3) * 230,
              width: 550,
              height: 190,
              border: `5px solid ${x[2]}`,
              background: `${x[2]}0e`,
              padding: "18px 20px",
              ...enter(f, 10 + i * 9),
            }}
          >
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: "50%",
                border: `5px solid ${x[2]}`,
                display: "grid",
                placeItems: "center",
                fontSize: 30,
                fontWeight: 950,
                color: x[2],
              }}
            >
              {x[0]}
            </div>
            <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.35 }}>
              {x[1]}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="lantern-six-relationship"
          style={{
            position: "absolute",
            left: 90,
            top: 574,
            width: 550,
            height: 120,
            border: `4px solid ${C.amber}`,
            background: `${C.amber}0a`,
            padding: "14px 16px",
            ...enter(f, 56),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 950, color: C.amber }}>
            法律上的利害关系
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 6, lineHeight: 1.3 }}>
            相对人必然有；相关人看与行为的利害关系
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const RelatedPartyFiveTiesScene = () => {
  /* Static audit inventory: data-final-knowledge="tie-1" data-final-knowledge="tie-2" data-final-knowledge="tie-3" data-final-knowledge="tie-4" data-final-knowledge="tie-5" data-final-knowledge="tie-mnemonic" */
  const f = useCurrentFrame();
  return (
    <Shell code="06" title="相关人利害关系：五种关系五种结论">
      <div
        data-layout="five-tie-relationship-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="five-relationship-lanes-decide-the-related-partys-standing,kinship-alone-carries-no-standing"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="related-party-standing-by-relationship-type"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 16 }}
      >
        {[
          ["侵权关系", "受害人：机关不处理或处罚过轻 → 可诉", C.blue, true],
          ["亲属关系", "仅亲属关系 = 事实利害 → 无原告资格", C.gray, false],
          ["物权关系", "所有权/相邻权/用益物权 → 有资格", C.blue, true],
          ["公平竞争关系", "排除限制竞争受损 → 有资格", C.blue, true],
          ["合同关系", "有民诉没行政；没民诉有行政", C.amber, true],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={String(x[2] ? `tie-${i + 1}` : `tie-${i + 1}`)}
            style={{
              position: "absolute",
              left: 60 + (i % 2) * 910,
              top: 36 + Math.floor(i / 2) * 205,
              width: 870,
              height: 175,
              border: `5px solid ${x[2] ? C.blue : C.gray}`,
              background: `${x[2] ? C.blue : C.gray}0d`,
              padding: "16px 20px",
              ...enter(f, 8 + i * 9),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: x[2] ? C.blue : C.gray,
                  color: C.white,
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
                <div style={{ fontSize: 24, fontWeight: 950, color: x[2] ? C.blue : C.gray }}>
                  {x[0]}
                </div>
                <div style={{ fontSize: 22, fontWeight: 850, marginTop: 4, lineHeight: 1.3 }}>
                  {x[1]}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="tie-mnemonic"
          style={{
            position: "absolute",
            left: 460,
            top: 660,
            width: 1000,
            textAlign: "center",
            ...enter(f, 56),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.gold}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: C.gold,
            }}
          >
            口诀：相关人自身"有民诉，没行政；没民诉，有行政"
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const OrganizationPlaintiffsScene = () => {
  /* Static audit inventory: data-final-knowledge="org-01" data-final-knowledge="org-02" data-final-knowledge="org-03" data-final-knowledge="org-04" data-final-knowledge="org-05" data-final-knowledge="org-06" data-final-knowledge="org-07" data-final-knowledge="org-08" data-final-knowledge="org-exam-tip" */
  const f = useCurrentFrame();
  return (
    <Shell code="07" title="组织原告：谁以自己的名义起诉">
      <div
        data-layout="organization-plaintiff-registry"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="seven-organization-types-slot-into-their-own-name-or-entity-name,long-entity-names-signal-the-three-exam-points"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="organization-plaintiff-name-rules"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 16 }}
      >
        {[
          ["合伙企业", "字号为原告", C.blue],
          ["个人合伙（未登记）", "全体合伙人共同原告，可推选代表人", C.amber],
          ["个体工商户", "无字号→经营者；有字号→字号+经营者信息", C.blue],
          ["非营利法人出资人/设立人", "以自己名义起诉", C.amber],
          ["业主委员会", "自己名义；业委会不起诉→过半数业主起诉", C.blue],
          ["股份制企业", "股东会/董事会/法定代表人以企业名义起诉", C.red],
          ["投资人（联营合资合作）", "以自己名义起诉", C.amber],
          ["非国有企业", "被注销撤销合并强令兼并→企业或法定代表人", C.red],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`org-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 40 + (i % 2) * 920,
              top: 30 + Math.floor(i / 2) * 155,
              width: 880,
              height: 130,
              border: `4px solid ${x[2]}`,
              background: `${x[2]}0d`,
              padding: "14px 18px",
              ...enter(f, 6 + i * 8),
            }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, color: x[2] }}>{x[0]}</div>
            <div style={{ fontSize: 22, fontWeight: 850, marginTop: 6, lineHeight: 1.3 }}>
              → <b style={{ color: x[2] }}>{x[1]}</b>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="org-exam-tip"
          style={{
            position: "absolute",
            left: 460,
            top: 668,
            width: 1000,
            textAlign: "center",
            ...enter(f, 76),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px dashed ${C.gray}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 900,
              color: C.gray,
            }}
          >
            应试：企业名称写得很长（股份、合资、非国有）→ 考的就是这三处原告资格
          </span>
        </div>
      </div>
    </Shell>
  );
};


export const ThirdPartySeatScene = () => {
  /* Static audit inventory: data-final-knowledge="third-party-core" data-final-knowledge="third-party-plaintiff-type" data-final-knowledge="third-party-defendant-type" data-final-knowledge="third-party-procedure" */
  const f = useCurrentFrame();
  return (
    <Shell code="08" title="第三人：独三特征与两种类型">
      <div
        data-layout="third-party-seat-board"
        data-visual-anchor="role-pair"
        data-visual-grammar="third-party-sits-between-the-parties-with-independent-claims,plaintiff-type-and-defendant-type-seats-are-marked"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="third-party-characteristics-and-two-types"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="third-party-core"
          style={{
            position: "absolute",
            left: 120,
            top: 36,
            width: 1680,
            border: `5px solid ${C.amber}`,
            padding: "16px 20px",
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.amber }}>
            均为有独立请求权的第三人（独三）
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.35 }}>
            可以上诉、申请调取证据、申请执行生效裁判
          </div>
        </div>
        <div
          data-final-knowledge="third-party-plaintiff-type"
          style={{
            position: "absolute",
            left: 120,
            top: 190,
            width: 810,
            height: 400,
            border: `5px solid ${C.blue}`,
            padding: "20px 22px",
            ...enter(f, 10),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.blue }}>
            原告型第三人
          </div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            与被诉行为有法律上利害关系：起诉是原告，他人起诉时有资格作第三人
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 22,
              fontWeight: 900,
              color: C.white,
              border: `3px solid ${C.blue}`,
              padding: "10px 12px",
              lineHeight: 1.4,
            }}
          >
            利益相反 → 直接追加为第三人
            <br />
            利益一致 → 先考虑共同原告，不同意再列第三人
          </div>
        </div>
        <div
          data-final-knowledge="third-party-defendant-type"
          style={{
            position: "absolute",
            left: 990,
            top: 190,
            width: 810,
            height: 400,
            border: `5px solid ${C.red}`,
            padding: "20px 22px",
            ...enter(f, 16),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.red }}>
            被告型第三人（仅四种）
          </div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.5 }}>
            ① 假共同：共同署名的非行政组织
            <br />
            ② 相互矛盾的行政行为中非被告的机关
            <br />
            ③ 应追加被告而原告不同意 → 通知为第三人
            <br />
            ④ 复议改变后，原机关为第三人
          </div>
        </div>
        <div
          data-final-knowledge="third-party-procedure"
          style={{
            position: "absolute",
            left: 120,
            top: 620,
            width: 1680,
            border: `4px dashed ${C.gray}`,
            padding: "14px 18px",
            ...enter(f, 40),
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, color: C.gray, lineHeight: 1.4 }}>
            参加时间：一审中、判决作出前。一审漏通知 → 二审撤销原判发回重审；因不能归责事由未参加且判决损害其权益 → 6个月内申请再审。应当通知（同一行为多利害关系人）/ 可以通知（同类行为）。不参加不影响审理。
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const JurisdictionFloorsScene = () => {
  /* Static audit inventory: data-final-knowledge="jurisdiction-basic-floor" data-final-knowledge="jurisdiction-intermediate-floor" data-final-knowledge="jurisdiction-co-defendant-rule" */
  const f = useCurrentFrame();
  return (
    <Shell code="09" title="级别管辖：灯塔分层">
      <div
        data-layout="jurisdiction-lighthouse-floors"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="basic-floor-and-intermediate-floor-hold-distinct-cases,co-defendant-levels-follow-the-original-actor"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="level-jurisdiction-two-floors"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 20 }}
      >
        <div
          data-final-knowledge="jurisdiction-basic-floor"
          style={{
            position: "absolute",
            left: 110,
            top: 330,
            width: 800,
            height: 380,
            border: `6px solid ${C.blue}`,
            background: `${C.blue}0d`,
            padding: "24px 26px",
            ...enter(f, 8),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.blue }}>基层法院</div>
          <div style={{ marginTop: 14, fontSize: 23, fontWeight: 850, lineHeight: 1.4 }}>
            原则上管辖第一审行政诉讼
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 22,
              fontWeight: 900,
              color: C.gray,
              border: `3px dashed ${C.gray}`,
              padding: "10px 12px",
            }}
          >
            默认楼层 · 其余全归此处
          </div>
        </div>
        <div
          data-final-knowledge="jurisdiction-intermediate-floor"
          style={{
            position: "absolute",
            left: 1010,
            top: 60,
            width: 800,
            height: 650,
            border: `6px solid ${C.gold}`,
            background: `${C.gold}0d`,
            padding: "24px 26px",
            ...enter(f, 14),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.gold }}>中级法院（四种）</div>
          <div style={{ marginTop: 14, fontSize: 23, fontWeight: 850, lineHeight: 1.55 }}>
            <b style={{ color: C.gold }}>级别高</b>：县级以上地方政府、国务院部门为被告（不含工作部门）
            <br />
            <b style={{ color: C.gold }}>性质特</b>：海关处理案件；证交所为被告或第三人
            <br />
            <b style={{ color: C.gold }}>人数多</b>：社会影响重大的共同诉讼
            <br />
            <b style={{ color: C.gold }}>有涉外</b>：涉外或涉港澳台案件
          </div>
        </div>
        <div
          data-final-knowledge="jurisdiction-co-defendant-rule"
          style={{
            position: "absolute",
            left: 110,
            top: 60,
            width: 800,
            border: `4px solid ${C.red}`,
            padding: "16px 20px",
            ...enter(f, 30),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 950, color: C.red }}>
            复议维持共同被告 → 就低原则
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.35 }}>
            以作出原行政行为的机关确定级别管辖；复议改变 → 复议机关自己定级别
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const TerritorialStepsScene = () => {
  /* Static audit inventory: data-final-knowledge="step-1" data-final-knowledge="step-2" data-final-knowledge="step-3" data-final-knowledge="step-4" data-final-knowledge="territorial-order-tip" */
  const f = useCurrentFrame();
  return (
    <Shell code="10" title="地域管辖：四步走">
      <div
        data-layout="territorial-four-step-ladder"
        data-visual-anchor="flow-path"
        data-visual-grammar="four-territorial-steps-are-climbed-in-order,immovable-property-leads-then-review-and-detention"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="territorial-jurisdiction-step-order"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 20 }}
      >
        {[
          ["第一步 · 不动产案件", "不动产所在地法院专属管辖", C.red],
          ["第二步 · 经过复议", "原机关所在地或复议机关所在地法院", C.amber],
          ["第三步 · 限制人身自由", "被关了的人诉关的强制措施 → 原告或被告所在地", C.blue],
          ["第四步 · 一般规则", "原告就被告 → 最初作出行为机关所在地", C.green],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`step-${i + 1}`}
            style={{
              position: "absolute",
              left: 90 + i * 430,
              top: 60,
              width: 390,
              height: 540,
              border: `5px solid ${x[2]}`,
              background: `${x[2]}0d`,
              padding: "20px 22px",
              ...enter(f, 8 + i * 12, 0, 30),
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 950, color: x[2], lineHeight: 1.3 }}>
              {x[0]}
            </div>
            <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.4 }}>
              {x[1]}
            </div>
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            top: 330,
            left: 470,
            width: 980,
            height: 8,
            background: C.gray,
          }}
        />
        <div
          data-final-knowledge="territorial-order-tip"
          style={{
            position: "absolute",
            left: 300,
            top: 640,
            width: 1320,
            textAlign: "center",
            ...enter(f, 56),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.gold}`,
              padding: "12px 18px",
              fontSize: 24,
              fontWeight: 950,
              color: C.gold,
            }}
          >
            做题顺序：先定被告 → 先级别后地域 → 地域：不动产 → 复议/人身自由 → 原告就被告
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const RepresentativeDeskScene = () => {
  /* Static audit inventory: data-final-knowledge="representative-rule" data-final-knowledge="agent-rule" */
  const f = useCurrentFrame();
  return (
    <Shell code="11" title="诉讼代表人与诉讼代理人">
      <div
        data-layout="representative-vs-agent-desk"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="representative-and-agent-split-the-desk,quota-rules-define-both-roles"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="representative-and-agent-quotas"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 24 }}
      >
        <div
          data-final-knowledge="representative-rule"
          style={{
            position: "absolute",
            left: 60,
            top: 40,
            width: 880,
            height: 660,
            border: `6px solid ${C.blue}`,
            padding: "24px 26px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.blue }}>
            诉讼代表人
          </div>
          <div style={{ marginTop: 16, fontSize: 23, fontWeight: 850, lineHeight: 1.6 }}>
            ① 同案原告人数须为<b style={{ color: C.blue }}>10人以上</b>
            <br />
            ② 代表人总数限<b style={{ color: C.blue }}>2~5人</b>
            <br />
            ③ 限期内未选定 → 法院依职权指定
            <br />
            ④ 裁判效力及于全体当事人
          </div>
        </div>
        <div
          data-final-knowledge="agent-rule"
          style={{
            position: "absolute",
            left: 980,
            top: 40,
            width: 880,
            height: 660,
            border: `6px solid ${C.amber}`,
            padding: "24px 26px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 950, color: C.amber }}>
            诉讼代理人
          </div>
          <div style={{ marginTop: 16, fontSize: 23, fontWeight: 850, lineHeight: 1.6 }}>
            ① 可委托<b style={{ color: C.amber }}>1~2人</b>
            <br />
            ② 授权委托书载明委托事项和具体权限
            <br />
            ③ 原则上书面；被限制人身自由可<b style={{ color: C.amber }}>口头委托近亲属</b>，近亲属可先行起诉
            <br />
            ④ 解除或变更委托应书面报告法院
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const LitigantHierarchyBeacon = () => (
  <AbsoluteFill>
    <TimelineSequence name="01" start={SCENES["defendant-general-board"].start} duration={SCENES["defendant-general-board"].duration}>
      <DefendantGeneralBoardScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["defendant-special-routes"].start} duration={SCENES["defendant-special-routes"].duration}>
      <DefendantSpecialRoutesScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["defendant-gov-rules"].start} duration={SCENES["defendant-gov-rules"].duration}>
      <DefendantGovRulesScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["defendant-after-review"].start} duration={SCENES["defendant-after-review"].duration}>
      <DefendantAfterReviewScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["plaintiff-concept-lantern"].start} duration={SCENES["plaintiff-concept-lantern"].duration}>
      <PlaintiffConceptLanternScene />
    </TimelineSequence>
    <TimelineSequence name="06" start={SCENES["related-party-five-ties"].start} duration={SCENES["related-party-five-ties"].duration}>
      <RelatedPartyFiveTiesScene />
    </TimelineSequence>
    <TimelineSequence name="07" start={SCENES["organization-plaintiffs"].start} duration={SCENES["organization-plaintiffs"].duration}>
      <OrganizationPlaintiffsScene />
    </TimelineSequence>
    <TimelineSequence name="08" start={SCENES["third-party-seat"].start} duration={SCENES["third-party-seat"].duration}>
      <ThirdPartySeatScene />
    </TimelineSequence>
    <TimelineSequence name="09" start={SCENES["jurisdiction-floors"].start} duration={SCENES["jurisdiction-floors"].duration}>
      <JurisdictionFloorsScene />
    </TimelineSequence>
    <TimelineSequence name="10" start={SCENES["territorial-steps"].start} duration={SCENES["territorial-steps"].duration}>
      <TerritorialStepsScene />
    </TimelineSequence>
    <TimelineSequence name="11" start={SCENES["representative-desk"].start} duration={SCENES["representative-desk"].duration}>
      <RepresentativeDeskScene />
    </TimelineSequence>
  </AbsoluteFill>
);


