import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

// Go board kifu: kaya wood grid, black/white stones as knowledge nodes, lacquer score cards
const G = {
  board: "linear-gradient(160deg, #e2bf82 0%, #d4ad69 45%, #c1934e 100%)",
  gridLine: "rgba(74, 56, 38, 0.28)",
  lacquer: "rgba(40, 30, 18, 0.94)",
  lacquerEdge: "rgba(120, 90, 48, 0.65)",
  ink: "#2e2415",
  inkSoft: "#5c4a30",
  cream: "#f5efdf",
  creamSoft: "#d8cdb4",
  blackStone: "radial-gradient(circle at 35% 30%, #5c5c64 0%, #202027 62%, #101014 100%)",
  whiteStone: "radial-gradient(circle at 35% 30%, #ffffff 0%, #efe8d6 55%, #cfc6ae 100%)",
  vermillion: "#b5432f",
  indigo: "#3a5a74",
  moss: "#5f7040",
  gold: "#8a6d2f",
  stoneShadow: "0 4px 10px rgba(46, 36, 21, 0.45)",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (f: number, d = 0, x = 0, y = 24) => ({
  opacity: interpolate(f, [d, d + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  transform: `translateY(${interpolate(f, [d, d + 22], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  })}px)`,
});

const Shell = ({
  code,
  title,
  subLabel,
  children,
}: {
  code: string;
  title: string;
  subLabel: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      background: G.board,
      color: G.ink,
      overflow: "hidden",
      backgroundImage:
        `repeating-linear-gradient(0deg, ${G.gridLine} 0 1.5px, transparent 1.5px 64px),` +
        `repeating-linear-gradient(90deg, ${G.gridLine} 0 1.5px, transparent 1.5px 64px),` +
        G.board,
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 56,
        right: 56,
        top: 32,
        height: 108,
        display: "flex",
        alignItems: "center",
        gap: 22,
        borderBottom: `3px solid rgba(46, 36, 21, 0.55)`,
      }}
    >
      <div
        style={{
          height: 66,
          padding: "0 22px",
          background: G.lacquer,
          border: `2px solid ${G.lacquerEdge}`,
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderRadius: 8,
        }}
      >
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: G.whiteStone, boxShadow: G.stoneShadow }} />
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: G.blackStone, boxShadow: G.stoneShadow }} />
        <span
          style={{
            fontSize: 21,
            fontWeight: 900,
            color: G.cream,
            letterSpacing: 2,
            fontFamily: "var(--inkloom-animation-mono, monospace)",
          }}
        >
          谱局 {code}
        </span>
      </div>
      <div>
        <h1
          className="font-animation-title"
          style={{ fontSize: 43, lineHeight: 1.1, margin: 0, color: G.ink, fontWeight: 900, letterSpacing: 1 }}
        >
          {title}
        </h1>
        <div
          style={{
            fontSize: 16,
            color: G.inkSoft,
            marginTop: 4,
            fontWeight: 800,
            letterSpacing: 2,
            fontFamily: "var(--inkloom-animation-label, sans-serif)",
          }}
        >
          {subLabel}
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          background: "rgba(40,30,18,0.85)",
          border: `2px solid ${G.lacquerEdge}`,
          padding: "9px 18px",
          borderRadius: 8,
          fontSize: 16,
          color: G.cream,
          fontWeight: 900,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-label, sans-serif)",
        }}
      >
        行政诉讼参加人 · GO BOARD KIFU
      </div>
    </header>
    <main
      style={{
        position: "absolute",
        left: 56,
        right: 56,
        top: 158,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);

// 棋子：黑/白，带谱位坐标
const Stone: React.FC<{
  color: "black" | "white";
  coord?: string;
  size?: number;
  label?: string;
  style?: React.CSSProperties;
}> = ({ color, coord, size = 40, label, style }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, ...style }}>
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color === "black" ? G.blackStone : G.whiteStone,
        border: color === "white" ? "1px solid rgba(74,56,38,0.4)" : "1px solid rgba(0,0,0,0.5)",
        boxShadow: G.stoneShadow,
      }}
    />
    {coord && (
      <span
        style={{
          fontSize: 15,
          fontWeight: 900,
          color: G.inkSoft,
          fontFamily: "var(--inkloom-animation-mono, monospace)",
          letterSpacing: 1,
        }}
      >
        {coord}
      </span>
    )}
    {label && (
      <span
        style={{
          fontSize: 19,
          fontWeight: 900,
          color: G.ink,
          fontFamily: "var(--inkloom-animation-label, sans-serif)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    )}
  </div>
);

const LacquerCard = ({
  children,
  edge = "rgba(120, 90, 48, 0.65)",
  style,
  ...rest
}: {
  children: React.ReactNode;
  edge?: string;
  style?: React.CSSProperties;
} & Record<string, string | undefined>) => (
  <div
    {...rest}
    style={{
      background: G.lacquer,
      border: `2.5px solid ${edge}`,
      borderRadius: 12,
      boxShadow: "0 10px 26px rgba(30, 22, 10, 0.5)",
      padding: "18px 22px",
      ...style,
    }}
  >
    {children}
  </div>
);

const WoodTag = ({
  children,
  color = G.ink,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 14px",
      border: `2px solid ${color}`,
      borderRadius: 6,
      color,
      fontSize: 20,
      fontWeight: 950,
      fontFamily: "var(--inkloom-animation-label, sans-serif)",
      letterSpacing: 2,
      whiteSpace: "nowrap",
      background: "rgba(245, 239, 223, 0.55)",
      ...style,
    }}
  />
);

const KifuRibbon = ({
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
      background: G.lacquer,
      border: `2.5px solid ${G.vermillion}`,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      padding: "12px 24px",
      ...style,
    }}
  >
    <span style={{ fontSize: 22, fontWeight: 950, color: G.cream, letterSpacing: 1.5, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
      {children}
    </span>
  </div>
);

// ==========================================
// SCENE 01: 直接起诉九宫格被告登记席
// ==========================================
export const DefendantGeneralBoardScene = () => {
  /* Static audit inventory: data-final-knowledge="def-slot-01" data-final-knowledge="def-slot-02" data-final-knowledge="def-slot-03" data-final-knowledge="def-slot-04" data-final-knowledge="def-slot-05" data-final-knowledge="def-slot-06" data-final-knowledge="def-slot-07" data-final-knowledge="def-slot-08" data-final-knowledge="def-slot-09" data-final-knowledge="defendant-mnemonic" */
  const f = useCurrentFrame();
  const coords = ["C3", "F3", "J3", "C7", "F7", "J7", "C11", "F11", "J11"];
  const slots = [
    { label: "1. 作出行为的行政机关", def: "该行政机关", dark: true },
    { label: "2. 法律/法规/规章授权组织", def: "该授权组织（村居委/高校/协会）", dark: false },
    { label: "3. 行政机关委托的组织", def: "委托的行政机关作被告", dark: true },
    { label: "4. 派出机关（行署/区公所/街道）", def: "派出机关独立作被告", dark: false },
    { label: "5. 被撤销的行政机关", def: "继受机关 / 所属政府 / 垂直上一级", dark: true },
    { label: "6. 临时组建的机构", def: "组建机关为被告", dark: false },
    { label: "7. 共同行为（共同署名）", def: "共同被告（不同意追加转第三人）", dark: true },
    { label: "8. 假共同行为（混编署名）", def: "行政主体是被告，非行政主体是第三人", dark: false },
    { label: "9. 经批准的行政行为", def: "诉讼看名义（对外署名者为被告）", dark: true },
  ];
  return (
    <Shell code="01" title="直接起诉：九大被告确定席位矩阵" subLabel="DIRECT SUIT DEFENDANT REGISTRATION MATRIX">
      <div
        data-layout="nine-stone-defendant-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="nine-behavior-slots-map-to-their-defendants,joint-acts-split-into-defendant-and-third-party"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="direct-suit-defendant-identification"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 14,
            height: 528,
          }}
        >
          {slots.map((s, i) => (
            <div
              key={s.label}
              data-final-knowledge={`def-slot-${String(i + 1).padStart(2, "0")}`}
              style={{
                background: G.lacquer,
                border: `2px solid ${G.lacquerEdge}`,
                borderRadius: 10,
                padding: "12px 16px",
                display: "flex",
                gap: 14,
                alignItems: "center",
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 4 + i * 5),
              }}
            >
              <Stone color={s.dark ? "black" : "white"} coord={coords[i]} size={38} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: G.cream, lineHeight: 1.3 }}>{s.label}</div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 19,
                    fontWeight: 900,
                    color: s.dark ? G.cream : G.ink,
                    background: s.dark ? "rgba(245,239,223,0.12)" : G.whiteStone,
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px dashed rgba(245,239,223,0.35)",
                    fontFamily: "var(--inkloom-animation-label, sans-serif)",
                  }}
                >
                  ➔ 被告：{s.def}
                </div>
              </div>
            </div>
          ))}
        </div>
        <KifuRibbon
          data-final-knowledge="defendant-mnemonic"
          style={{ position: "absolute", left: 0, right: 0, bottom: 4, ...enter(f, 54) }}
        >
          【被告总口诀】谁行为谁被告 · 授权组织自己当 · 委托告委托方 · 批准看对外名义
        </KifuRibbon>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 02: 特别主体被告确定案卷台
// ==========================================
export const DefendantSpecialRoutesScene = () => {
  /* Static audit inventory: data-final-knowledge="special-route-1" data-final-knowledge="special-route-2" data-final-knowledge="special-route-3" data-final-knowledge="special-route-4" data-final-knowledge="special-summary" */
  const f = useCurrentFrame();
  const quadrants = [
    {
      coord: "C16",
      dark: false,
      tag: "定石一 · 授权/名义区分",
      title: "① 内设机构与派出机构（如派出所）",
      lines: [
        <>以所属机关名义 ➔ 被告为 <b style={{ color: G.cream }}>所属机关</b></>,
        <>以自己名义 ➔ 被告为 <b style={{ color: G.cream }}>派出机构/内设机构自身</b></>,
        <><span style={{ color: "#e8a184", fontWeight: 900 }}>【致命陷阱】种类越权</span>（如派出所作出拘留）➔ 仍以 <b style={{ color: "#e8a184" }}>所属机关（县公安局）</b>为被告</>,
      ],
      knowledge: "special-route-1",
    },
    {
      coord: "Q16",
      dark: true,
      tag: "定石二 · 三级审批体系",
      title: "② 开发区管理机构",
      lines: [
        <><b style={{ color: "#a8c79a" }}>国务院/省级政府批准</b> ➔ 管委会及其职能部门<b style={{ color: "#a8c79a" }}>均具独立被告资格</b></>,
        <><b style={{ color: G.cream }}>非国/省批但有授权</b> ➔ 仅<b style={{ color: G.cream }}>管委会为被告</b>（内设职能部门不能作被告）</>,
        <><span style={{ color: "#e8a184", fontWeight: 900 }}>非国/省批且无授权</span> ➔ <b style={{ color: "#e8a184" }}>设立该机构的地方政府</b>为被告</>,
      ],
      knowledge: "special-route-2",
    },
    {
      coord: "C4",
      dark: true,
      tag: "定石三 · 征收部门责任",
      title: "③ 房屋征收补偿案件",
      lines: [
        <>市县政府确定的房屋征收部门（如区住建局）实施征收补偿 ➔ <b style={{ color: "#e8a184" }}>房屋征收部门为被告</b></>,
        <>征收实施单位（如拆迁公司）受委托从事补偿行为 ➔ 仍以<b style={{ color: "#e8a184" }}>委托的征收部门为被告</b></>,
      ],
      knowledge: "special-route-3",
    },
    {
      coord: "Q4",
      dark: false,
      tag: "定石四 · 法定授权主体",
      title: "④ 交警大队与支队",
      lines: [
        <>县交警大队 ≈ 县交管局；市交警支队 ≈ 市交管局</>,
        <>法律法规直接授权：大队、支队均<b style={{ color: G.cream }}>具有独立诉讼被告资格</b></>,
      ],
      knowledge: "special-route-4",
    },
  ];
  return (
    <Shell code="02" title="特别主体：内设、开发区、征收、大队支队" subLabel="SPECIAL ADMINISTRATIVE SUBJECT DEFENDANT ROUTES">
      <div
        data-layout="four-corner-joseki-quadrants"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="four-special-subjects-route-to-their-defendants-by-name-or-authority,development-zones-follow-approval-and-authorization"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="special-subject-defendant-routes"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, height: 532 }}>
          {quadrants.map((q, i) => (
            <div
              key={q.knowledge}
              data-final-knowledge={q.knowledge}
              style={{
                background: G.lacquer,
                border: `2.5px solid ${G.lacquerEdge}`,
                borderRadius: 12,
                padding: "16px 20px",
                display: "flex",
                gap: 16,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 6 + i * 8),
              }}
            >
              <Stone color={q.dark ? "black" : "white"} coord={q.coord} size={44} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 950, color: G.cream }}>{q.title}</span>
                  <WoodTag color={G.creamSoft} style={{ fontSize: 15 }}>{q.tag}</WoodTag>
                </div>
                <div style={{ fontSize: 20, lineHeight: 1.62, color: G.creamSoft }}>
                  {q.lines.map((line, j) => (
                    <div key={j} style={{ marginBottom: 4 }}>
                      • {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <KifuRibbon
          data-final-knowledge="special-summary"
          style={{ position: "absolute", left: 0, right: 0, bottom: 4, ...enter(f, 44) }}
        >
          ⚡ 考点核心：种类越权告所属机关 · 开发区看国省批与授权 · 拆迁公司不当被告
        </KifuRibbon>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 03: 县级以上地方政府及部门被告规则
// ==========================================
export const DefendantGovRulesScene = () => {
  /* Static audit inventory: data-final-knowledge="gov-rule-guidance" data-final-knowledge="gov-rule-document" data-final-knowledge="gov-rule-force" */
  const f = useCurrentFrame();
  const rules = [
    {
      move: "本手一",
      coord: "Q16",
      title: "规则一：谁行为，谁被告",
      edge: "#a8c79a",
      body: (
        <>
          • <b style={{ color: "#a8c79a" }}>政府柔性指导</b>（听取汇报/开协调会/下发意见）➔ 被告为<b style={{ color: "#a8c79a" }}>具体履职的职能部门</b>
          <div style={{ margin: "10px 0", background: "rgba(245,239,223,0.08)", border: "1px solid rgba(245,239,223,0.25)", padding: "9px 13px", borderRadius: 6, fontSize: 19, color: G.creamSoft }}>
            例：市政府召开协调会指导市文旅局签订行政协议 ➔ 协议纠纷被告为市文旅局
          </div>
          • <b style={{ color: G.cream }}>信息公开指定机构</b>以自己名义答复 ➔ 被告为<b style={{ color: G.cream }}>该指定机构</b>（突破一般法理特例！）
        </>
      ),
      knowledge: "gov-rule-guidance",
    },
    {
      move: "本手二",
      coord: "K10",
      title: "规则二：文书与实施分离",
      edge: "#e8a184",
      body: (
        <>
          <div style={{ fontSize: 22, fontWeight: 900, color: G.cream, marginBottom: 8 }}>【口诀】有文书看文书；没文书告部门</div>
          • 县政府责成职能部门实施违建强拆：
          <br />① <b style={{ color: "#a8c79a" }}>有强拆决定书</b> ➔ 以作出决定的机关为被告
          <br />② <b style={{ color: "#e8a184" }}>无决定书直接拆</b> ➔ 以具体实施强拆的部门为被告
          <br /><br />• 集体土地房屋拆除 / 国有土地征收强拆均适用此规则！
        </>
      ),
      knowledge: "gov-rule-document",
    },
    {
      move: "本手三",
      coord: "C4",
      title: "规则三：指令 vs 责成力度",
      edge: G.creamSoft,
      body: (
        <>
          • <b style={{ color: "#e8a184" }}>指令 / 责令</b>（命令照方案办，下级如提线木偶）➔ 意志作出者为被告 ➔ <b style={{ color: "#e8a184" }}>县政府为被告</b>
          <br /><br />
          • <b style={{ color: "#a8c79a" }}>责成</b>（指定交办，下级有独立意思裁量空间）➔ 按“有文书看文书，没文书告部门”分情况判断
          <br /><br />
          <span style={{ fontSize: 20, color: G.cream, fontWeight: 900 }}>力度等级：指令（刚性）&gt; 责成（交办）&gt; 指导（柔性）</span>
        </>
      ),
      knowledge: "gov-rule-force",
    },
  ];
  return (
    <Shell code="03" title="县级以上地方政府：谁行为、看文书、看力度" subLabel="COUNTY GOVERNMENT DEFENDANT CRITERIA">
      <div
        data-layout="three-move-basic-rules"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="guidance-keeps-the-department-as-defendant,orders-name-the-government,demands-follow-the-document"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="county-government-defendant-rules"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, height: 574 }}>
          {rules.map((r, i) => (
            <div
              key={r.knowledge}
              data-final-knowledge={r.knowledge}
              style={{
                background: G.lacquer,
                border: `2.5px solid ${G.lacquerEdge}`,
                borderTop: `8px solid ${r.edge}`,
                borderRadius: 12,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 6 + i * 8),
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Stone color={i === 1 ? "black" : "white"} coord={r.coord} size={40} />
                <WoodTag color={r.edge} style={{ fontSize: 16 }}>{r.move}</WoodTag>
              </div>
              <div style={{ fontSize: 24, fontWeight: 950, color: G.cream }}>{r.title}</div>
              <div style={{ fontSize: 20, lineHeight: 1.6, color: G.creamSoft }}>{r.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 04: 经过复议后再起诉三大金律
// ==========================================
export const DefendantAfterReviewScene = () => {
  /* Static audit inventory: data-final-knowledge="review-change" data-final-knowledge="review-uphold" data-final-knowledge="review-inaction" data-final-knowledge="change-detection" data-final-knowledge="mixed-outcome-rule" */
  const f = useCurrentFrame();
  const tracks = [
    {
      stone: "white" as const,
      coord: "Q16",
      title: "① 复议改变（单独告）",
      body: "复议机关改变了原行为处理结果 ➔ 仅以复议机关为被告（原机关转列为第三人）",
      verdict: "被告：复议机关",
      edge: "#a8c79a",
      knowledge: "review-change",
    },
    {
      stone: "black" as const,
      coord: "K10",
      title: "② 复议维持（共同告）",
      body: "实质审理过且行为结果未改变 ➔ 原行为机关与复议机关为共同被告（告漏了通知追加，原告拒绝仍列共同被告）",
      verdict: "共同被告：原机关 + 复议机关",
      edge: "#e8a184",
      knowledge: "review-uphold",
    },
    {
      stone: "white" as const,
      coord: "C4",
      title: "③ 复议不作为（择一告）",
      body: "未进行实质审理（超期未答复/违法驳回申请）➔ 对不作为不服告复议机关；对原行为不服告原机关",
      verdict: "二选一：复议机关 OR 原机关",
      edge: G.creamSoft,
      knowledge: "review-inaction",
    },
  ];
  return (
    <Shell code="04" title="经过复议：改变单独告、维持共同告、不作为择一告" subLabel="DEFENDANT AFTER ADMINISTRATIVE RECONSIDERATION">
      <div
        data-layout="three-kifu-line-review"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-review-outcomes-beam-to-their-defendant-slots,mixed-outcomes-join-as-co-defendants"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="defendant-after-review-decides-by-outcome"
        data-focal-channels="contrast,connector,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {tracks.map((t, i) => (
            <div
              key={t.knowledge}
              data-final-knowledge={t.knowledge}
              style={{
                background: G.lacquer,
                border: `2.5px solid ${G.lacquerEdge}`,
                borderLeft: `10px solid ${t.edge}`,
                borderRadius: 10,
                padding: "14px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 18,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 6 + i * 8),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                <Stone color={t.stone} coord={t.coord} size={42} />
                <div>
                  <div style={{ fontSize: 25, fontWeight: 950, color: G.cream }}>{t.title}</div>
                  <div style={{ fontSize: 20, color: G.creamSoft, marginTop: 4, lineHeight: 1.45 }}>{t.body}</div>
                </div>
              </div>
              <div
                style={{
                  background: G.whiteStone,
                  color: G.ink,
                  padding: "9px 18px",
                  borderRadius: 8,
                  fontWeight: 900,
                  fontSize: 19,
                  border: `2px solid rgba(74,56,38,0.4)`,
                  whiteSpace: "nowrap",
                  fontFamily: "var(--inkloom-animation-label, sans-serif)",
                }}
              >
                {t.verdict}
              </div>
            </div>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div
              data-final-knowledge="change-detection"
              style={{
                background: "rgba(245,239,223,0.08)",
                border: `1.5px solid rgba(245,239,223,0.3)`,
                borderRadius: 10,
                padding: "14px 20px",
                fontSize: 20,
                lineHeight: 1.55,
                color: G.creamSoft,
                ...enter(f, 32),
              }}
            >
              <b style={{ color: G.cream }}>改变的实质认定：</b>确认无效属改变；确认违法一般属改变（程序瑕疵确认违法除外）；仅改变法律事实依据但结果未变 ➔ <b style={{ color: "#e8a184" }}>仍属维持！</b>
            </div>
            <div
              data-final-knowledge="mixed-outcome-rule"
              style={{
                background: "rgba(245,239,223,0.08)",
                border: `1.5px solid rgba(232,161,132,0.5)`,
                borderRadius: 10,
                padding: "14px 20px",
                fontSize: 20,
                lineHeight: 1.55,
                color: G.creamSoft,
                ...enter(f, 40),
              }}
            >
              <b style={{ color: "#e8a184" }}>多重因素规则：</b>复议决定既有维持内容，又有改变或不予受理内容的 ➔ <b style={{ color: "#e8a184" }}>一律以作出原行政行为的机关和复议机关为共同被告！</b>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 05: 原告资格概念五大审判柱石
// ==========================================
export const PlaintiffConceptLanternScene = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-definition" data-final-knowledge="lantern-1" data-final-knowledge="lantern-2" data-final-knowledge="lantern-3" data-final-knowledge="lantern-4" data-final-knowledge="lantern-5" data-final-knowledge="lantern-six-relationship" */
  const f = useCurrentFrame();
  const starPoints = ["C4", "K10", "Q4", "C16", "Q16"];
  const lanterns = [
    { title: "主体要件", desc: "公民、法人或其他组织（行政机关作为行政主体时不享有原告资格）" },
    { title: "主观要件", desc: "“认为”受侵犯即可提起诉讼，属主观认识，不以实体胜诉为前提" },
    { title: "侵犯要件", desc: "实体权利受到必然影响（权利义务发生增减变化）" },
    { title: "自身要件", desc: "“其”合法权益受损（自身利益；普通公民无提起公益诉讼原告资格）" },
    { title: "合法要件", desc: "受法律保护的“合法权益”，行政诉讼不保护非法利益" },
  ];
  return (
    <Shell code="05" title="原告资格：法庭审理五大准入基石" subLabel="PLAINTIFF STANDING FIVE JURISDICTIONAL PILLARS">
      <div
        data-layout="five-star-point-pillars"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-requirement-lanterns-light-the-plaintiff-concept,each-lantern-tests-one-element"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="plaintiff-concept-five-elements"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 8 }}
      >
        <div
          data-final-knowledge="plaintiff-definition"
          style={{
            background: G.lacquer,
            border: `2.5px solid ${G.vermillion}`,
            borderRadius: 10,
            padding: "14px 24px",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 950,
            color: G.cream,
            ...enter(f, 4),
          }}
        >
          原告定义：<span style={{ color: "#e8a184" }}>认为行政行为侵犯其合法权益</span>，并与该行为具有
          <span style={{ color: "#a8c79a" }}>法律上利害关系</span>的公民、法人或其他组织
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginTop: 18, height: 404 }}>
          {lanterns.map((l, i) => (
            <div
              key={l.title}
              data-final-knowledge={`lantern-${i + 1}`}
              style={{
                background: G.lacquer,
                border: `2px solid ${G.lacquerEdge}`,
                borderRadius: 12,
                padding: "18px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 10,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 10 + i * 6),
              }}
            >
              <Stone color={i % 2 === 0 ? "black" : "white"} coord={starPoints[i]} size={46} />
              <div style={{ fontSize: 22, fontWeight: 950, color: G.cream }}>{l.title}</div>
              <div style={{ fontSize: 18.5, lineHeight: 1.5, color: G.creamSoft }}>{l.desc}</div>
            </div>
          ))}
        </div>

        <div
          data-final-knowledge="lantern-six-relationship"
          style={{
            marginTop: 16,
            background: "rgba(245,239,223,0.08)",
            border: `2px dashed ${G.vermillion}`,
            borderRadius: 10,
            padding: "12px 24px",
            fontSize: 21,
            fontWeight: 900,
            color: G.cream,
            textAlign: "center",
            ...enter(f, 46),
          }}
        >
          ⚖️ 利害关系双分法：<b style={{ color: "#a8c79a" }}>行政相对人（必然有原告资格）</b> vs{" "}
          <b style={{ color: "#e8a184" }}>行政相关人（视具体法律利害关系而定）</b>
        </div>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 06: 行政相关人五种关系与五种结论
// ==========================================
export const RelatedPartyFiveTiesScene = () => {
  /* Static audit inventory: data-final-knowledge="tie-1" data-final-knowledge="tie-2" data-final-knowledge="tie-3" data-final-knowledge="tie-4" data-final-knowledge="tie-5" data-final-knowledge="tie-mnemonic" */
  const f = useCurrentFrame();
  const ties = [
    { title: "1. 侵权关系", status: "有原告资格", ok: true, desc: "侵权受害人：行政机关不予处理，或处罚加害人轻微 ➔ 受害人有权起诉要求追究/加重责任" },
    { title: "2. 亲属关系", status: "无原告资格", ok: false, desc: "仅凭亲属关系（父子/夫妻/兄弟）仅具有事实利害关系，不具有法律上利害关系 ➔ 无资格" },
    { title: "3. 物权关系", status: "有原告资格", ok: true, desc: "所有权与所有权/相邻权/用益物权冲突（如建楼遮挡相邻采光、土地确权重叠）➔ 有权起诉" },
    { title: "4. 公平竞争关系", status: "有原告资格", ok: true, desc: "行政机关滥用行政权力排除或限制竞争，使经营者陷入不利竞争地位 ➔ 有权起诉" },
    { title: "5. 合同关系", status: "口诀判定", ok: true, desc: "【口诀】相关人自身“有民诉，没行政；没民诉，有行政”（买卖合同被吊销执照不能起诉）" },
  ];
  return (
    <Shell code="06" title="相关人利害关系：五种民行关系五种裁决" subLabel="RELATED PARTY STANDING: FIVE RELATIONSHIP CATEGORIES">
      <div
        data-layout="five-lane-standing-paths"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="five-relationship-lanes-decide-the-related-partys-standing,kinship-alone-carries-no-standing"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="related-party-standing-by-relationship-type"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ties.map((t, i) => (
            <div
              key={t.title}
              data-final-knowledge={`tie-${i + 1}`}
              style={{
                background: G.lacquer,
                border: `2.5px solid ${G.lacquerEdge}`,
                borderLeft: `10px solid ${t.ok ? "#a8c79a" : "#e8a184"}`,
                borderRadius: 10,
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 4 + i * 7),
              }}
            >
              <div style={{ width: 230, display: "flex", alignItems: "center", gap: 12 }}>
                <Stone color={i % 2 === 0 ? "black" : "white"} size={38} />
                <span style={{ fontSize: 22, fontWeight: 950, color: G.cream }}>{t.title}</span>
              </div>
              <div style={{ flex: 1, fontSize: 19.5, color: G.creamSoft, padding: "0 14px", lineHeight: 1.45 }}>{t.desc}</div>
              <div
                style={{
                  background: t.ok ? "#a8c79a" : "#e8a184",
                  color: G.ink,
                  padding: "7px 14px",
                  borderRadius: 6,
                  fontSize: 18,
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                  fontFamily: "var(--inkloom-animation-label, sans-serif)",
                }}
              >
                {t.ok ? "●" : "○"} {t.status}
              </div>
            </div>
          ))}
        </div>
        <KifuRibbon
          data-final-knowledge="tie-mnemonic"
          style={{ position: "absolute", left: 0, right: 0, bottom: 4, ...enter(f, 44) }}
        >
          📜 合同关系做题必杀口诀：相关人自身"有民诉，没行政；没民诉，有行政"
        </KifuRibbon>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 07: 特殊组织的原告资格八大席位
// ==========================================
export const OrganizationPlaintiffsScene = () => {
  /* Static audit inventory: data-final-knowledge="org-01" data-final-knowledge="org-02" data-final-knowledge="org-03" data-final-knowledge="org-04" data-final-knowledge="org-05" data-final-knowledge="org-06" data-final-knowledge="org-07" data-final-knowledge="org-08" data-final-knowledge="org-exam-tip" */
  const f = useCurrentFrame();
  const coords = ["C4", "F4", "J4", "Q4", "C10", "F10", "J10", "Q10"];
  const orgs = [
    { name: "1. 合伙企业", who: "核准登记的字号为原告", dark: true },
    { name: "2. 个人合伙（未领照）", who: "全体合伙人为共同原告（可推选代表人）", dark: false },
    { name: "3. 个体工商户", who: "有字号以字号为原告；无字号以经营者为原告", dark: true },
    { name: "4. 非营利法人", who: "出资人、设立人可以自己的名义起诉", dark: false },
    { name: "5. 业主委员会", who: "业委会以自己名义起诉；不起诉则过半数业主起诉", dark: true },
    { name: "6. 股份制企业", who: "股东会/董事会/法定代表人均以企业名义起诉", dark: false },
    { name: "7. 联营/合资/合作投资人", who: "投资人均可以自己的名义起诉（保护合资利益）", dark: true },
    { name: "8. 非国有企业撤销兼并", who: "企业或者其法定代表人可以自己的名义起诉", dark: false },
  ];
  return (
    <Shell code="07" title="组织原告：谁能以自己的名义起诉" subLabel="ORGANIZATIONAL PLAINTIFF STANDING REGISTRY">
      <div
        data-layout="eight-stone-registry-grid"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="seven-organization-types-slot-into-their-own-name-or-entity-name,long-entity-names-signal-the-three-exam-points"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="organization-plaintiff-name-rules"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, height: 520 }}>
          {orgs.map((o, i) => (
            <div
              key={o.name}
              data-final-knowledge={`org-${String(i + 1).padStart(2, "0")}`}
              style={{
                background: G.lacquer,
                border: `2px solid ${G.lacquerEdge}`,
                borderLeft: `7px solid ${i % 2 === 0 ? "#a8c79a" : "#e8a184"}`,
                borderRadius: 10,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 4 + i * 5),
              }}
            >
              <Stone color={o.dark ? "black" : "white"} coord={coords[i]} size={36} />
              <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 21, fontWeight: 950, color: G.cream }}>{o.name}</div>
                <div style={{ fontSize: 19.5, fontWeight: 850, color: G.creamSoft, textAlign: "right", lineHeight: 1.35 }}>➔ {o.who}</div>
              </div>
            </div>
          ))}
        </div>
        <KifuRibbon
          data-final-knowledge="org-exam-tip"
          style={{ position: "absolute", left: 0, right: 0, bottom: 4, ...enter(f, 48) }}
        >
          💡 试卷密码：题干中企业名称表述特别长（股份制、合资、非国有）➔ 考点必在原告起诉名义！
        </KifuRibbon>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 08: 第三人特征与两种类型
// ==========================================
export const ThirdPartySeatScene = () => {
  /* Static audit inventory: data-final-knowledge="third-party-core" data-final-knowledge="third-party-plaintiff-type" data-final-knowledge="third-party-defendant-type" data-final-knowledge="third-party-procedure" */
  const f = useCurrentFrame();
  return (
    <Shell code="08" title="第三人：独三特征与两大席位类型" subLabel="THIRD PARTY STANDING AND JOINDER RULES">
      <div
        data-layout="tri-stone-seat-diagram"
        data-visual-anchor="role-pair"
        data-visual-grammar="third-party-sits-between-the-parties-with-independent-claims,plaintiff-type-and-defendant-type-seats-are-marked"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="third-party-characteristics-and-two-types"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 8 }}
      >
        <LacquerCard
          data-final-knowledge="third-party-core"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            ...enter(f, 4),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ position: "relative", width: 96, height: 52 }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: 42, height: 42, borderRadius: "50%", background: G.blackStone, boxShadow: G.stoneShadow }} />
              <div style={{ position: "absolute", right: 0, top: 0, width: 42, height: 42, borderRadius: "50%", background: G.whiteStone, border: "1px solid rgba(74,56,38,0.4)", boxShadow: G.stoneShadow }} />
              <div style={{ position: "absolute", left: 27, top: 10, width: 42, height: 42, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #e8b24a 0%, #a8762a 65%, #7a5314 100%)", border: "1px solid rgba(0,0,0,0.4)", boxShadow: G.stoneShadow }} />
            </div>
            <div style={{ fontSize: 24, fontWeight: 950, color: G.cream }}>
              核心特征：行政诉讼第三人均为【有独立请求权第三人】
            </div>
          </div>
          <div style={{ fontSize: 20, color: G.creamSoft, textAlign: "right", lineHeight: 1.4 }}>
            享有一审当事人完整权利
            <br />
            可上诉、申请调取证据、申请执行生效裁判
          </div>
        </LacquerCard>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 16, height: 384 }}>
          <LacquerCard
            data-final-knowledge="third-party-plaintiff-type"
            style={{ borderTop: `7px solid #a8c79a`, ...enter(f, 12) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <Stone color="white" size={34} />
              <div style={{ fontSize: 24, fontWeight: 950, color: "#a8c79a" }}>原告型第三人（民）</div>
            </div>
            <div style={{ fontSize: 20.5, lineHeight: 1.6, color: G.creamSoft }}>
              • 与被诉行政行为有法律上利害关系：自己起诉是原告；他人先起诉时有资格作第三人
              <br /><br />
              • <b style={{ color: "#e8a184" }}>利益相反</b>（如争议地块判给甲，乙起诉）➔ <b style={{ color: "#e8a184" }}>直接追加甲为第三人</b>
              <br />
              • <b style={{ color: "#a8c79a" }}>利益一致</b>（如夫妇被罚款5000元，夫起诉）➔ <b style={{ color: "#a8c79a" }}>先考虑共同原告</b>，妻不同意再列第三人
            </div>
          </LacquerCard>

          <LacquerCard
            data-final-knowledge="third-party-defendant-type"
            style={{ borderTop: `7px solid #e8a184`, ...enter(f, 20) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <Stone color="black" size={34} />
              <div style={{ fontSize: 24, fontWeight: 950, color: "#e8a184" }}>被告型第三人（官 · 仅4种情形！）</div>
            </div>
            <div style={{ fontSize: 20.5, lineHeight: 1.6, color: G.creamSoft }}>
              ① <b style={{ color: G.cream }}>假共同行为</b>：共同署名的非行政组织（如消协）
              <br />
              ② <b style={{ color: G.cream }}>相互矛盾行政行为</b>中非被告的行政机关
              <br />
              ③ <b style={{ color: G.cream }}>共同行为告漏了</b>：法院通知追加原告拒绝 ➔ 通知该机关为第三人
              <br />
              ④ <b style={{ color: G.cream }}>复议改变后再起诉</b>：被告为复议机关，原机关为第三人
            </div>
          </LacquerCard>
        </div>

        <div
          data-final-knowledge="third-party-procedure"
          style={{
            marginTop: 14,
            background: "rgba(245,239,223,0.08)",
            border: `2px dashed ${G.vermillion}`,
            borderRadius: 10,
            padding: "11px 20px",
            fontSize: 20.5,
            fontWeight: 800,
            color: G.cream,
            ...enter(f, 32),
          }}
        >
          ⚠️ 程序铁律：一审应通知第三人而未通知 ➔ 二审法院必须【撤销原判，发回重审】！
        </div>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 09: 级别管辖双层法庭沙盘
// ==========================================
export const JurisdictionFloorsScene = () => {
  /* Static audit inventory: data-final-knowledge="jurisdiction-basic-floor" data-final-knowledge="jurisdiction-intermediate-floor" data-final-knowledge="jurisdiction-co-defendant-rule" */
  const f = useCurrentFrame();
  return (
    <Shell code="09" title="级别管辖：基层原则与中院四类案件" subLabel="COURT HIERARCHY LEVEL JURISDICTION">
      <div
        data-layout="two-tier-court-boards"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="basic-floor-and-intermediate-floor-hold-distinct-cases,co-defendant-levels-follow-the-original-actor"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="level-jurisdiction-two-floors"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 20, height: 494 }}>
          <LacquerCard
            data-final-knowledge="jurisdiction-basic-floor"
            style={{ borderTop: `8px solid #a8c79a`, display: "flex", flexDirection: "column", gap: 14, ...enter(f, 6) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Stone color="white" size={38} />
              <div style={{ fontSize: 27, fontWeight: 950, color: "#a8c79a" }}>基层人民法院（第一审原则）</div>
            </div>
            <div style={{ fontSize: 21.5, lineHeight: 1.6, color: G.creamSoft }}>
              • 第一审行政案件原则上由基层人民法院管辖
              <br /><br />
              • 除法律规定由中院、高院、最高法管辖的第一审案件外，其余案件全部归基层法院！
            </div>
            <div style={{ marginTop: "auto", background: "rgba(245,239,223,0.08)", border: "1.5px dashed rgba(245,239,223,0.35)", padding: "12px 16px", borderRadius: 8, fontSize: 20, color: G.cream }}>
              🏛️ 兜底管辖楼层：凡未明确列举归中院者，一律基层管辖
            </div>
          </LacquerCard>

          <LacquerCard
            data-final-knowledge="jurisdiction-intermediate-floor"
            style={{ borderTop: `8px solid #e8a184`, display: "flex", flexDirection: "column", gap: 12, ...enter(f, 14) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Stone color="black" size={38} />
              <div style={{ fontSize: 27, fontWeight: 950, color: "#e8a184" }}>中级人民法院（法定四类案件）</div>
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.55, color: G.creamSoft }}>
              ① <b style={{ color: G.cream }}>级别高</b>：被告为县级以上地方政府、国务院部门（注意：不含县级政府工作部门！）
              <br />
              ② <b style={{ color: G.cream }}>性质特</b>：海关处理的案件；证券交易所为被告或第三人的案件
              <br />
              ③ <b style={{ color: G.cream }}>人数多</b>：本辖区内社会影响重大的共同诉讼案件
              <br />
              ④ <b style={{ color: G.cream }}>有涉外</b>：涉外或者涉及香港特别行政区、澳门特别行政区、台湾地区的案件
            </div>
          </LacquerCard>
        </div>

        <div
          data-final-knowledge="jurisdiction-co-defendant-rule"
          style={{
            marginTop: 14,
            background: G.lacquer,
            border: `2.5px solid ${G.vermillion}`,
            borderRadius: 10,
            padding: "13px 24px",
            fontSize: 22,
            fontWeight: 950,
            color: G.cream,
            textAlign: "center",
            ...enter(f, 26),
          }}
        >
          ⚡ 复议维持共同被告"就低原则"：以作出原行政行为的机关确定级别管辖（原机关为县公安局 ➔ 基层法院管辖！）
        </div>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 10: 地域管辖四步走法则
// ==========================================
export const TerritorialStepsScene = () => {
  /* Static audit inventory: data-final-knowledge="step-1" data-final-knowledge="step-2" data-final-knowledge="step-3" data-final-knowledge="step-4" data-final-knowledge="territorial-order-tip" */
  const f = useCurrentFrame();
  const coords = ["C16", "F10", "J10", "Q4"];
  const steps = [
    { title: "不动产案件", who: "不动产所在地法院专属管辖", desc: "土地、房屋等不动产征收、登记纠纷，排他专属" },
    { title: "经过复议案件", who: "原机关所在地 或 复议机关所在地", desc: "维持或改变均可由最初机关或复议机关所在地管辖" },
    { title: "限制人身自由", who: "原告所在地 或 被告所在地", desc: "原告地含户籍地、经常居住地、被限制人身自由地" },
    { title: "一般地域管辖", who: "原告就被告（最初机关所在地）", desc: "由最初作出行政行为的行政机关所在地法院管辖" },
  ];
  return (
    <Shell code="10" title="地域管辖：四步走判定法庭" subLabel="TERRITORIAL VENUE FOUR-STEP DETERMINATION LADDER">
      <div
        data-layout="four-move-order-columns"
        data-visual-anchor="flow-path"
        data-visual-grammar="four-territorial-steps-are-climbed-in-order,immovable-property-leads-then-review-and-detention"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="territorial-jurisdiction-step-order"
        data-focal-channels="contrast,connector,motion"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, height: 494 }}>
          {steps.map((s, i) => (
            <div
              key={s.title}
              data-final-knowledge={`step-${i + 1}`}
              style={{
                background: G.lacquer,
                border: `2px solid ${G.lacquerEdge}`,
                borderRadius: 12,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
                boxShadow: "0 8px 22px rgba(30,22,10,0.45)",
                ...enter(f, 6 + i * 8),
              }}
            >
              <Stone color={i % 2 === 0 ? "black" : "white"} coord={coords[i]} size={46} />
              <div style={{ fontSize: 22, fontWeight: 950, color: G.cream }}>
                第 {i + 1} 手 · {s.title}
              </div>
              <div
                style={{
                  fontSize: 19.5,
                  fontWeight: 900,
                  color: G.cream,
                  background: "rgba(245,239,223,0.1)",
                  border: "1px dashed rgba(245,239,223,0.35)",
                  padding: "10px 12px",
                  borderRadius: 8,
                  lineHeight: 1.4,
                }}
              >
                ➔ {s.who}
              </div>
              <div style={{ fontSize: 18, lineHeight: 1.5, color: G.creamSoft }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <KifuRibbon
          data-final-knowledge="territorial-order-tip"
          style={{ position: "absolute", left: 0, right: 0, bottom: 4, ...enter(f, 44) }}
        >
          ⚖️ 做题黄金顺序：先定被告 ➔ 先级别后地域 ➔ 地域：不动产 ➔ 复议 / 人身自由 ➔ 原告就被告
        </KifuRibbon>
      </div>
    </Shell>
  );
};

// ==========================================
// SCENE 11: 诉讼代表人与代理人席位
// ==========================================
export const RepresentativeDeskScene = () => {
  /* Static audit inventory: data-final-knowledge="representative-rule" data-final-knowledge="agent-rule" */
  const f = useCurrentFrame();
  return (
    <Shell code="11" title="诉讼席位：诉讼代表人与诉讼代理人" subLabel="LITIGATION REPRESENTATIVES AND LEGAL AGENTS">
      <div
        data-layout="dual-kifu-seating-desk"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="representative-and-agent-split-the-desk,quota-rules-define-both-roles"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="representative-and-agent-quotas"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 8 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, height: 574 }}>
          <LacquerCard
            data-final-knowledge="representative-rule"
            style={{ borderTop: `9px solid #a8c79a`, display: "flex", flexDirection: "column", gap: 18, ...enter(f, 6) }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 29, fontWeight: 950, color: "#a8c79a" }}>👥 诉讼代表人（本身是原告）</span>
              <WoodTag color="#a8c79a">2 ~ 5 人</WoodTag>
            </div>
            <div style={{ fontSize: 21.5, lineHeight: 1.7, color: G.creamSoft }}>
              ① <b style={{ color: "#a8c79a" }}>适用门槛</b>：同案原告人数须为 <b style={{ color: "#a8c79a" }}>10人以上</b>
              <br />
              ② <b style={{ color: "#a8c79a" }}>推选人数</b>：由原告推选 <b style={{ color: "#a8c79a" }}>2 ~ 5 名代表人</b>
              <br />
              ③ <b style={{ color: G.cream }}>指定产生</b>：限期内未选定的，由人民法院依职权指定
              <br />
              ④ <b style={{ color: G.cream }}>裁判效力</b>：代表人的诉讼行为及裁判效力<b style={{ color: G.cream }}>及于全体当事人</b>
            </div>
          </LacquerCard>

          <LacquerCard
            data-final-knowledge="agent-rule"
            style={{ borderTop: `9px solid #e8a184`, display: "flex", flexDirection: "column", gap: 18, ...enter(f, 14) }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 29, fontWeight: 950, color: "#e8a184" }}>⚖️ 诉讼代理人（受托代为诉讼）</span>
              <WoodTag color="#e8a184">1 ~ 2 人</WoodTag>
            </div>
            <div style={{ fontSize: 21.5, lineHeight: 1.7, color: G.creamSoft }}>
              ① <b style={{ color: "#e8a184" }}>委托人数</b>：当事人、法定代理人可委托 <b style={{ color: "#e8a184" }}>1 ~ 2 人</b>
              <br />
              ② <b style={{ color: "#e8a184" }}>委托手续</b>：应向法院提交授权委托书，记明委托事项与具体权限
              <br />
              ③ <b style={{ color: G.cream }}>【特例】口头委托</b>：被限制人身自由无法书面委托的，可<b style={{ color: "#e8a184" }}>口头委托近亲属</b>，近亲属可先行起诉
              <br />
              ④ <b style={{ color: G.cream }}>变更解除</b>：解除或变更委托的，应当书面报告法院
            </div>
          </LacquerCard>
        </div>
      </div>
    </Shell>
  );
};

// ==========================================
// MAIN COMPOSITION
// ==========================================
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

export default LitigantHierarchyBeacon;
