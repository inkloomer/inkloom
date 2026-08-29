import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

// Copper-still distillery: warm workshop dark, copper pipes, verdigris collect flasks, rust waste valves
const K = {
  bg: "#26190f",
  glow: "rgba(196,123,63,0.16)",
  panel: "#3a2817",
  panelEdge: "#6b4a26",
  copper: "#c47b3f",
  copperLight: "#e2a869",
  copperBright: "#f0c795",
  verdigris: "#4e8f7b",
  verdigrisInk: "#7fc0aa",
  spirit: "#e0a33e",
  spiritInk: "#f0c987",
  rust: "#b04a32",
  rustInk: "#e08a70",
  textWarm: "#f5e8d8",
  textSoft: "#c9ab88",
  white: "#fff8ec",
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
      background: K.bg,
      color: K.textWarm,
      overflow: "hidden",
      backgroundImage:
        `radial-gradient(circle at 12% 10%,${K.glow},transparent 30%),` +
        "radial-gradient(circle at 92% 90%,rgba(78,143,123,.10),transparent 28%)," +
        "linear-gradient(rgba(240,199,149,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(240,199,149,.04) 1px,transparent 1px)",
      backgroundSize: "auto,auto,56px 56px,56px 56px",
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
        borderBottom: `4px solid ${K.copper}`,
      }}
    >
      <div
        style={{
          width: 170,
          height: 78,
          border: `4px solid ${K.copper}`,
          borderRadius: 10,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: K.copperLight,
          letterSpacing: 2,
          fontFamily: "var(--inkloom-animation-mono)",
        }}
      >
        蒸馏 {code}
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
          color: K.textSoft,
          fontFamily: "var(--inkloom-animation-label)",
        }}
      >
        ACCEPTANCE · COPPER STILL WORKS
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

// 铜管连管
const Pipe = ({ style }: { style?: React.CSSProperties }) => (
  <div
    style={{
      background: `linear-gradient(180deg,${K.copperLight} 0%,${K.copper} 55%,#8a5426 100%)`,
      borderRadius: 7,
      boxShadow: "inset 0 2px 0 rgba(255,235,205,0.5)",
      ...style,
    }}
  />
);

// 阀门轮盘
const ValveWheel = ({ size = 34, color = K.copperLight, style }: { size?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="3" />
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="2.6" fill={color} />
  </svg>
);

// 馏出瓶
const FlaskGlyph = ({ size = 30, color = K.verdigrisInk, style }: { size?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M10 2h4" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M10.5 2v6L4.8 18.4A2 2 0 0 0 6.6 21.4h10.8a2 2 0 0 0 1.8-3L13.5 8V2" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M7.4 15.5h9.2" stroke={color} strokeWidth="2.2" />
  </svg>
);

// 橡木桶
const BarrelGlyph = ({ size = 30, color = K.copperLight, style }: { size?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M7 3h10c1.6 2.6 2.4 5.6 2.4 9S18.6 18.4 17 21H7c-1.6-2.6-2.4-5.6-2.4-9S5.4 5.6 7 3Z" stroke={color} strokeWidth="2.2" />
    <path d="M4.9 8.4h14.2M4.9 15.6h14.2" stroke={color} strokeWidth="2" />
  </svg>
);

const Panel = ({
  children,
  color = K.copper,
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
      background: K.panel,
      border: `4px solid ${color}`,
      borderRadius: 14,
      boxShadow: `0 8px 22px rgba(0,0,0,.4), inset 0 0 24px rgba(240,199,149,.06)`,
      padding: "16px 20px",
      ...style,
    }}
  >
    {children}
  </div>
);

export const PositiveListLaneScene = () => {
  /* Static audit inventory: data-final-knowledge="positive-01" data-final-knowledge="positive-02" data-final-knowledge="positive-03" data-final-knowledge="positive-04" data-final-knowledge="positive-05" data-final-knowledge="positive-06" data-final-knowledge="positive-07" data-final-knowledge="positive-08" data-final-knowledge="positive-09" data-final-knowledge="positive-10" data-final-knowledge="positive-11" data-final-knowledge="positive-entrance" data-final-knowledge="positive-mnemonic" */
  const f = useCurrentFrame();
  const items = [
    ["处罚", "行政处罚类行为"],
    ["强制", "行政强制措施与强制执行"],
    ["许可", "行政许可类行为"],
    ["确权", "自然资源所有权/使用权确认决定"],
    ["征补", "征收征用及补偿决定"],
    ["履职", "不履行保护人身财产权法定职责"],
    ["自主权", "侵犯经营自主权/土地承包经营权"],
    ["竞争", "滥用行政权力排除限制竞争"],
    ["摊派", "违法集资摊派/违法要求履行义务"],
    ["给付", "未依法支付抚恤金低保社保待遇"],
    ["其他", "其他侵犯人身权财产权行为"],
  ] as const;
  return (
    <Shell code="01" title="正面列举：十一类可诉行为入甑蒸馏">
      <div
        data-layout="copper-still-collection-bench"
        data-visual-anchor="flow-path"
        data-visual-grammar="raw-acts-heat-in-the-copper-boiler,distillate-pipe-feeds-eleven-collect-flasks-in-legal-order,collected-spirit-pours-into-the-court-barrel"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="eleven-positive-list-categories"
        data-focal-channels="connector,motion,enclosure"
        style={{ position: "absolute", inset: 16 }}
      >
        {/* 蒸馏锅 */}
        <div
          data-stateful-source="distillate-flow"
          style={{
            position: "absolute",
            left: 0,
            top: 90,
            width: 250,
            ...enter(f, 4),
          }}
        >
          <div
            style={{
              width: 220,
              height: 150,
              margin: "0 auto",
              background: `linear-gradient(180deg,${K.copperLight} 0%,${K.copper} 60%,#8a5426 100%)`,
              borderRadius: "26px 26px 40px 40px",
              border: `4px solid ${K.panelEdge}`,
              display: "grid",
              placeItems: "center",
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 950, color: K.white, fontFamily: "var(--inkloom-animation-title)", textShadow: "0 2px 4px rgba(0,0,0,.4)" }}>
              蒸馏锅
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 8 }}>
            {[0, 1, 2].map((i) => (
              <svg key={i} width="22" height="24" viewBox="0 0 24 28" fill="none">
                <path d="M12 2c4 6 6 8 6 13a6 6 0 0 1-12 0c0-5 2-7 6-13Z" fill={K.spirit} opacity={0.9 - i * 0.15} />
              </svg>
            ))}
          </div>
          <div style={{ textAlign: "center", fontSize: 19, fontWeight: 900, color: K.textSoft, marginTop: 4 }}>
            原料 · 具体行政行为
          </div>
        </div>

        {/* 铜管 → 冷凝汇流 */}
        <Pipe style={{ position: "absolute", left: 244, top: 130, width: 96, height: 18, ...enter(f, 12) }} />
        <Pipe style={{ position: "absolute", left: 330, top: 130, width: 18, height: 60, ...enter(f, 16) }} />
        <Pipe style={{ position: "absolute", left: 330, top: 184, width: 1560, height: 18, ...enter(f, 20) }} />

        {/* 11 只馏出瓶：6 + 5 */}
        <div
          data-stateful-terminal="distillate-flow"
          style={{
            position: "absolute",
            left: 356,
            top: 216,
            right: 10,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {[items.slice(0, 6), items.slice(6)].map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex", gap: 14 }}>
              {row.map((item, i) => {
                const index = rowIndex * 6 + i;
                return (
                  <div
                    key={item[1]}
                    data-final-knowledge={`positive-${String(index + 1).padStart(2, "0")}`}
                    style={{
                      flex: 1,
                      background: K.panel,
                      border: `3.5px solid ${K.verdigris}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                      minHeight: 158,
                      position: "relative",
                      boxShadow: "0 8px 20px rgba(0,0,0,.4)",
                      ...enter(f, 26 + index * 7),
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <FlaskGlyph size={26} />
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 950,
                          letterSpacing: 1,
                          color: K.textSoft,
                          background: "rgba(240,199,149,.08)",
                          padding: "3px 8px",
                          borderRadius: 6,
                          fontFamily: "var(--inkloom-animation-mono)",
                        }}
                      >
                        No.{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div style={{ marginTop: 10, fontSize: 23, fontWeight: 950, lineHeight: 1.3, color: K.white }}>
                      {item[1]}
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        right: 12,
                        bottom: 10,
                        border: `3px solid ${K.verdigris}`,
                        color: K.verdigrisInk,
                        padding: "2px 9px",
                        fontSize: 17,
                        fontWeight: 950,
                        rotate: "-3deg",
                        opacity: interpolate(f, [70 + index * 7, 88 + index * 7], [0, 1], {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        }),
                      }}
                    >
                      可诉 ✓
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* 收集桶 + 口诀 */}
        <div
          data-final-knowledge="positive-entrance"
          style={{
            position: "absolute",
            left: 0,
            top: 610,
            width: 300,
            display: "flex",
            alignItems: "center",
            gap: 10,
            ...enter(f, 84),
          }}
        >
          <BarrelGlyph size={40} color={K.spiritInk} />
          <span style={{ fontSize: 25, fontWeight: 950, color: K.spiritInk, fontFamily: "var(--inkloom-animation-title)" }}>
            法院受理
          </span>
        </div>
        <div
          data-final-knowledge="positive-mnemonic"
          style={{
            position: "absolute",
            left: 340,
            right: 0,
            top: 612,
            textAlign: "center",
            ...enter(f, 92),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `3px dashed ${K.copperLight}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: K.copperBright,
              background: "rgba(196,123,63,0.10)",
            }}
          >
            记忆：罚强制许可确权征补 → 履职自主权竞争摊派给付其他
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const ExclusionBarriersScene = () => {
  /* Static audit inventory: data-final-knowledge="exclude-1" data-final-knowledge="exclude-2" data-final-knowledge="exclude-3" data-final-knowledge="exclude-4" data-final-knowledge="exclude-5" data-final-knowledge="exclusion-mnemonic" */
  const f = useCurrentFrame();
  const bars = [
    ["无行政性", "国家行为 · 刑事司法行为 · 行政协助司法执行"],
    ["无处分性", "暴力侵权 · 行政指导 · 调解仲裁 · 重复处理 · 过程性行为 · 信访"],
    ["无特定性", "抽象行政行为：不可以直接起诉"],
    ["无外部性", "公务员奖惩任免 · 机关间内部行为 · 层级监督"],
    ["法定最终裁决", "国务院复议决定 · 对外国人限制人身自由的复议决定"],
  ] as const;
  return (
    <Shell code="02" title="反面排除：五道废液阀滤除不可诉">
      <div
        data-layout="waste-valve-fraction-trap"
        data-visual-anchor="boundary"
        data-visual-grammar="five-waste-valves-vent-their-barred-case-types,each-vented-type-condenses-into-a-labeled-residue-chip"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="negative-exclusion-five-reasons"
        data-focal-channels="contrast,enclosure,motion"
        style={{ position: "absolute", inset: 16 }}
      >
        {/* 主铜管 */}
        <Pipe style={{ position: "absolute", left: 0, top: 22, width: 1820, height: 18, ...enter(f, 2) }} />
        {bars.map((x, i) => {
          const rise = interpolate(f, [8 + i * 12, 30 + i * 12], [40, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          return (
            <div key={String(x[0])} style={{ position: "absolute", left: 0, right: 0, top: 54 + i * 116 }}>
              <Pipe style={{ position: "absolute", left: 120 + i * 340, top: -14, width: 16, height: 30 }} />
              <ValveWheel style={{ position: "absolute", left: 96 + i * 340, top: 8 }} />
              <div
                data-final-knowledge={`exclude-${i + 1}`}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 46,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  background: K.panel,
                  border: `4px solid ${K.rust}`,
                  borderLeft: `14px solid ${K.rust}`,
                  borderRadius: 12,
                  padding: "12px 18px",
                  minHeight: 74,
                  boxShadow: "0 8px 20px rgba(0,0,0,.4)",
                  translate: `0 ${rise}px`,
                }}
              >
                <span
                  style={{
                    background: K.rust,
                    color: K.white,
                    fontSize: 23,
                    fontWeight: 950,
                    padding: "5px 16px",
                    letterSpacing: 2,
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--inkloom-animation-title)",
                  }}
                >
                  ✕ {x[0]}
                </span>
                <span style={{ fontSize: 22, fontWeight: 850, color: K.textWarm, lineHeight: 1.3 }}>{x[1]}</span>
              </div>
            </div>
          );
        })}
        <div
          data-final-knowledge="exclusion-mnemonic"
          style={{
            position: "absolute",
            left: 400,
            right: 60,
            top: 646,
            textAlign: "center",
            ...enter(f, 66),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${K.textSoft}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: K.textSoft,
              background: "rgba(201,171,136,0.08)",
            }}
          >
            排除五因：无行政性 · 无处分性 · 无特定性 · 无外部性 · 法定终局
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const AgreementCounterScene = () => {
  /* Static audit inventory: data-final-knowledge="agreement-concept" data-final-knowledge="agreement-kind-1" data-final-knowledge="agreement-kind-2" data-final-knowledge="agreement-kind-3" data-final-knowledge="agreement-kind-4" data-final-knowledge="agreement-kind-5" data-final-knowledge="agreement-direction" data-final-knowledge="agreement-summary" */
  const f = useCurrentFrame();
  const kinds = [
    "政府特许经营协议",
    "征收征用补偿协议",
    "国有自然资源使用权出让",
    "保障性住房租赁买卖",
    "部分政府与社会资本合作",
  ];
  return (
    <Shell code="03" title="行政协议：民告官，不许官告民">
      <div
        data-layout="agreement-cask-counter"
        data-visual-anchor="role-pair"
        data-visual-grammar="agreement-concept-plank-mounts-above-the-cask-shelf,five-cask-heads-cell-every-agreement-kind,the-direction-scale-weighs-people-versus-agency"
        data-text-treatments="label-block,chip,stamp"
        data-focal-rule="administrative-agreement-acceptance"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="agreement-concept"
          style={{
            position: "absolute",
            left: 60,
            top: 12,
            width: 1800,
            border: `5px solid ${K.copper}`,
            borderRadius: 14,
            background: K.panel,
            padding: "18px 22px",
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: K.copperLight }}>行政协议（行政合同）</div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4 }}>
            为实现公共利益或行政管理目标，在法定职责范围内，与公民、法人或其他组织协商订立的
            具有行政法上权利义务内容的协议
          </div>
        </div>

        {/* 五只橡木桶：主要种类 */}
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 208,
            width: 1800,
            border: `5px solid ${K.spirit}`,
            borderRadius: 14,
            background: "rgba(224,163,62,0.06)",
            padding: "16px 22px 20px",
            ...enter(f, 10),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: K.spiritInk }}>主要种类 · 五桶分装</div>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
            {kinds.map((x, i) => (
              <div
                key={x}
                data-final-knowledge={`agreement-kind-${i + 1}`}
                style={{
                  border: `3px solid ${K.spirit}`,
                  background: K.panel,
                  borderRadius: "14px 14px 20px 20px",
                  padding: "14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  ...enter(f, 16 + i * 8),
                }}
              >
                <BarrelGlyph size={34} color={K.spiritInk} />
                <span style={{ fontSize: 21, fontWeight: 900, color: K.white, textAlign: "center", lineHeight: 1.3 }}>{x}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 方向天平 */}
        <div
          data-final-knowledge="agreement-direction"
          style={{
            position: "absolute",
            left: 60,
            top: 500,
            width: 1800,
            border: `5px solid ${K.verdigris}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 120px 1fr",
            alignItems: "center",
            gap: 10,
            ...enter(f, 40),
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 27, fontWeight: 950, color: K.verdigrisInk, fontFamily: "var(--inkloom-animation-title)" }}>✓ 民告官</div>
            <div style={{ fontSize: 21, fontWeight: 850, marginTop: 6, color: K.textWarm }}>
              公民、法人或其他组织可以起诉
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: 30, fontWeight: 950, color: K.copperLight, fontFamily: "var(--inkloom-animation-title)" }}>
            对
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 27, fontWeight: 950, color: K.rustInk, fontFamily: "var(--inkloom-animation-title)" }}>✕ 官告民</div>
            <div style={{ fontSize: 21, fontWeight: 850, marginTop: 6, color: K.textWarm }}>
              行政机关不能作为原告起诉相对人
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="agreement-summary"
          style={{
            position: "absolute",
            left: 560,
            top: 686,
            width: 800,
            textAlign: "center",
            ...enter(f, 52),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px dashed ${K.textSoft}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 900,
              color: K.textSoft,
            }}
          >
            受案特点：协议可诉 · 单向起诉
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const IncidentalReviewEntryScene = () => {
  /* Static audit inventory: data-final-knowledge="incidental-way" data-final-knowledge="incidental-object" data-final-knowledge="incidental-time" */
  const f = useCurrentFrame();
  return (
    <Shell code="04" title="附带审查：不能单独告，只能一并提">
      <div
        data-layout="side-arm-triple-checkpoint"
        data-visual-anchor="flow-path"
        data-visual-grammar="one-manifold-pipe-splits-into-three-checkpoint-columns,each-column-gauges-way-object-or-time"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="incidental-normative-document-review-conditions"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 18 }}
      >
        <Pipe style={{ position: "absolute", left: 0, top: 10, width: 1820, height: 16, ...enter(f, 2) }} />
        {[
          { left: 240, d: 10 },
          { left: 800, d: 14 },
          { left: 1360, d: 18 },
        ].map((p) => (
          <React.Fragment key={p.left}>
            <Pipe style={{ position: "absolute", left: p.left + 220, top: 22, width: 16, height: 44, ...enter(f, p.d) }} />
          </React.Fragment>
        ))}

        <div
          data-final-knowledge="incidental-way"
          style={{
            position: "absolute",
            left: 60,
            top: 84,
            width: 560,
            border: `5px solid ${K.spirit}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: K.spiritInk }}>方式 · 附带性</div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            不可单独、直接起诉规范性文件
            <br />
            只能在对具体行政行为起诉时<u style={{ textDecorationThickness: 3, textDecorationColor: K.spirit }}>一并</u>提出审查请求
          </div>
          <div style={{ marginTop: 18 }}>
            <span
              style={{
                border: `3px solid ${K.rust}`,
                color: K.rustInk,
                padding: "8px 14px",
                fontSize: 22,
                fontWeight: 900,
                display: "inline-block",
                borderRadius: 8,
              }}
            >
              ✕ 单独起诉文件
            </span>
          </div>
        </div>
        <div
          data-final-knowledge="incidental-object"
          style={{
            position: "absolute",
            left: 640,
            top: 84,
            width: 560,
            border: `5px solid ${K.copper}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: K.copperLight }}>对象 · 其他规范性文件</div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            国务院制定的文件<b style={{ color: K.rustInk }}>除外</b>
            <br />
            <b style={{ color: K.rustInk }}>规章</b>不属于可审查范围
          </div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 900, color: K.spiritInk, lineHeight: 1.35 }}>
            须与被诉行政行为具有关联性（是行政行为的法律依据）
          </div>
        </div>
        <div
          data-final-knowledge="incidental-time"
          style={{
            position: "absolute",
            left: 1220,
            top: 84,
            width: 560,
            border: `5px solid ${K.verdigris}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 18),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: K.verdigrisInk }}>时间 · 一审开庭前</div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.5 }}>
            应当在第一审开庭审理前提出
            <br />
            有正当理由的，也可以在<b style={{ color: K.verdigrisInk }}>法庭调查</b>中提出
          </div>
          <div style={{ marginTop: 18, fontSize: 22, fontWeight: 900, color: K.textSoft, lineHeight: 1.4 }}>
            管辖：由具体行政行为作出机关决定管辖法院，而非文件制定机关
          </div>
        </div>

        {/* 一并提出的耦合管路 */}
        <div
          style={{
            position: "absolute",
            left: 60,
            right: 60,
            top: 596,
            display: "flex",
            alignItems: "center",
            gap: 16,
            ...enter(f, 30),
          }}
        >
          <div
            style={{
              flex: 1,
              border: `4px solid ${K.copper}`,
              borderRadius: 12,
              background: K.panel,
              padding: "14px 18px",
              fontSize: 22,
              fontWeight: 900,
              color: K.white,
              textAlign: "center",
            }}
          >
            对具体行政行为提起诉讼
          </div>
          <Pipe style={{ width: 60, height: 16, flex: "0 0 auto" }} />
          <div
            style={{
              flex: 1.2,
              border: `4px solid ${K.spirit}`,
              borderRadius: 12,
              background: "rgba(224,163,62,0.08)",
              padding: "14px 18px",
              fontSize: 22,
              fontWeight: 900,
              color: K.spiritInk,
              textAlign: "center",
            }}
          >
            ＋ 一并请求审查规范性文件
          </div>
          <Pipe style={{ width: 60, height: 16, flex: "0 0 auto" }} />
          <div
            style={{
              flex: 1,
              border: `4px solid ${K.verdigris}`,
              borderRadius: 12,
              background: K.panel,
              padding: "14px 18px",
              fontSize: 22,
              fontWeight: 900,
              color: K.verdigrisInk,
              textAlign: "center",
            }}
          >
            法院一并审查
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const ReviewProcessConsoleScene = () => {
  /* Static audit inventory: data-final-knowledge="review-procedure" data-final-knowledge="review-content" */
  const f = useCurrentFrame();
  return (
    <Shell code="05" title="审查程序与内容：发现可能不合法才听意见">
      <div
        data-layout="heat-and-condensate-panels"
        data-visual-anchor="document-fork"
        data-visual-grammar="procedure-boiler-heats-on-suspicion-of-illegality,condenser-column-checks-three-items-and-strains-four-impurities"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="normative-document-review-procedure"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="review-procedure"
          style={{
            position: "absolute",
            left: 60,
            top: 30,
            width: 860,
            height: 664,
            border: `5px solid ${K.copper}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: K.copperLight }}>审查程序 · 加热段</div>
          {[
            ["①", "发现文件可能不合法的，应当听取制定机关的意见", K.rustInk],
            ["②", "制定机关申请出庭陈述意见 → 法院应当准许", K.copperLight],
            ["③", "制定机关未陈述意见或未提供证明材料 → 不能阻止审查", K.copperLight],
          ].map((row, i) => (
            <div
              key={i}
              style={{
                marginTop: 16,
                border: `3px solid ${K.panelEdge}`,
                borderLeft: `8px solid ${K.copper}`,
                borderRadius: 10,
                background: "rgba(240,199,149,0.05)",
                padding: "16px 16px",
                fontSize: 22,
                fontWeight: 850,
                lineHeight: 1.5,
                color: K.textWarm,
                ...enter(f, 14 + i * 10),
              }}
            >
              {row[0]} <b style={{ color: row[2] }}>{row[1]}</b>
            </div>
          ))}
        </div>
        <Pipe style={{ position: "absolute", left: 926, top: 330, width: 70, height: 18, ...enter(f, 16) }} />
        <div
          data-final-knowledge="review-content"
          style={{
            position: "absolute",
            left: 1000,
            top: 30,
            width: 860,
            height: 664,
            border: `5px solid ${K.verdigris}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: K.verdigrisInk }}>审查内容 · 冷凝段</div>
          {["① 是否超越权限", "② 是否违反法定程序", "③ 作出行政行为所依据的条款及相关条款"].map((item, i) => (
            <div
              key={i}
              style={{
                marginTop: 14,
                border: `3px solid ${K.panelEdge}`,
                borderLeft: `8px solid ${K.verdigris}`,
                borderRadius: 10,
                background: "rgba(78,143,123,0.08)",
                padding: "13px 16px",
                fontSize: 22,
                fontWeight: 850,
                color: K.textWarm,
                ...enter(f, 18 + i * 8),
              }}
            >
              {item}
            </div>
          ))}
          <div style={{ marginTop: 20, fontSize: 22, fontWeight: 950, color: K.textSoft }}>
            不合法情形（滤出的杂质）：
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 22,
              fontWeight: 850,
              lineHeight: 1.5,
              color: K.white,
              border: `3px dashed ${K.rust}`,
              borderRadius: 10,
              padding: "10px 14px",
              background: "rgba(176,74,50,0.08)",
            }}
          >
            超越职权/授权范围 · 与上位法相抵触 · 无依据增加义务减损权益 · 严重违反制定程序
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const CourtHandlingConsoleScene = () => {
  /* Static audit inventory: data-final-knowledge="court-legal-file" data-final-knowledge="court-illegal-file" data-final-knowledge="court-no-revoke" data-final-knowledge="court-joint-file" */
  const f = useCurrentFrame();
  return (
    <Shell code="06" title="法院处理结果：合法当依据，违法三动作">
      <div
        data-layout="fraction-collection-shelf"
        data-visual-anchor="document-fork"
        data-visual-grammar="legal-fractions-serve-as-basis-flask,illegal-fractions-split-into-three-tagged-vials,two-barrel-staves-note-the-limits"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="court-handling-of-normative-documents"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="court-legal-file"
          style={{
            position: "absolute",
            left: 60,
            top: 30,
            width: 880,
            height: 310,
            border: `5px solid ${K.verdigris}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FlaskGlyph size={30} color={K.verdigrisInk} />
            <div style={{ fontSize: 27, fontWeight: 950, color: K.verdigrisInk }}>文件合法 · 依据瓶</div>
          </div>
          <div style={{ marginTop: 14, fontSize: 23, fontWeight: 850, lineHeight: 1.4 }}>
            应当将该规范性文件作为认定行政行为合法的依据
          </div>
        </div>
        <div
          data-final-knowledge="court-illegal-file"
          style={{
            position: "absolute",
            left: 990,
            top: 30,
            width: 880,
            height: 310,
            border: `5px solid ${K.rust}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FlaskGlyph size={30} color={K.rustInk} />
            <div style={{ fontSize: 27, fontWeight: 950, color: K.rustInk }}>文件违法 · 三动作分装</div>
          </div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.6 }}>
            ① <b style={{ color: K.rustInk }}>不适用</b>：不作为认定合法的依据，裁判理由中阐明
            <br />
            ② <b style={{ color: K.spiritInk }}>提建议</b>：生效裁判法院向制定机关提处理建议；3个月内司法建议
            <br />
            ③ <b style={{ color: K.copperLight }}>告领导</b>：抄送同级政府/上一级机关、监察机关、备案机关
          </div>
        </div>
        <div
          data-final-knowledge="court-no-revoke"
          style={{
            position: "absolute",
            left: 60,
            top: 380,
            width: 880,
            height: 280,
            border: `4px dashed ${K.textSoft}`,
            borderRadius: 14,
            background: "rgba(201,171,136,0.06)",
            padding: "18px 22px",
            ...enter(f, 30),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 950, color: K.textSoft }}>
            ⚠ 法院无权改变、撤销规范性文件
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4, color: K.textWarm }}>
            只能不适用 + 建议 + 抄送，不能直接宣告无效或撤销
          </div>
        </div>
        <div
          data-final-knowledge="court-joint-file"
          style={{
            position: "absolute",
            left: 990,
            top: 380,
            width: 880,
            height: 280,
            border: `4px solid ${K.spirit}`,
            borderRadius: 14,
            background: K.panel,
            padding: "18px 22px",
            ...enter(f, 36),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BarrelGlyph size={26} color={K.spiritInk} />
            <div style={{ fontSize: 23, fontWeight: 950, color: K.spiritInk }}>多部门联合制定</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4, color: K.textWarm }}>
            向主办机关或共同上一级行政机关发送司法建议
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const SuggestionFilingConsoleScene = () => {
  /* Static audit inventory: data-final-knowledge="suggestion-execution" data-final-knowledge="suggestion-filing" */
  const f = useCurrentFrame();
  const steps = [
    ["报送上一级法院", "认为文件不合法 → 裁判生效后报送", 0],
    ["省级文件层报高级人民法院", "省级行政机关制定的规范性文件", 1],
    ["国务院部门文件层报最高人民法院", "国务院部门制定的规范性文件", 2],
  ] as const;
  return (
    <Shell code="07" title="司法建议：60日答复与层级备案">
      <div
        data-layout="dispatch-and-filing-stair"
        data-visual-anchor="flow-path"
        data-visual-grammar="dispatch-desk-replies-the-suggestion-in-sixty-days,filing-stairs-climb-to-higher-courts"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="judicial-suggestion-execution-and-filing"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="suggestion-execution"
          style={{
            position: "absolute",
            left: 60,
            top: 30,
            width: 860,
            height: 664,
            border: `5px solid ${K.copper}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ValveWheel size={30} />
            <div style={{ fontSize: 27, fontWeight: 950, color: K.copperLight }}>处理结果执行 · 发货台</div>
          </div>
          {[
            ["① 接收司法建议的行政机关应在", "60日内", "书面答复"],
            ["② 情况紧急 → 法院可建议", "立即停止执行", "该文件"],
          ].map((row, i) => (
            <div
              key={i}
              style={{
                marginTop: 16,
                border: `3px solid ${K.panelEdge}`,
                borderLeft: `8px solid ${K.copper}`,
                borderRadius: 10,
                background: "rgba(240,199,149,0.05)",
                padding: "16px 16px",
                fontSize: 22,
                fontWeight: 850,
                lineHeight: 1.5,
                color: K.textWarm,
                ...enter(f, 14 + i * 10),
              }}
            >
              {row[0]}<b style={{ color: K.copperBright }}>{row[1]}</b>{row[2]}
            </div>
          ))}
          <div
            style={{
              marginTop: 18,
              border: `3px dashed ${K.spirit}`,
              borderRadius: 10,
              background: "rgba(224,163,62,0.07)",
              padding: "14px 16px",
              fontSize: 22,
              fontWeight: 950,
              color: K.spiritInk,
              ...enter(f, 38),
            }}
          >
            时间点：裁判生效之日起 3 个月内可提司法建议
          </div>
        </div>
        <div
          data-final-knowledge="suggestion-filing"
          style={{
            position: "absolute",
            left: 990,
            top: 30,
            width: 880,
            height: 664,
            border: `5px solid ${K.spirit}`,
            borderRadius: 14,
            background: K.panel,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: K.spiritInk }}>处理结果备案 · 层报阶梯</div>
          <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
            {steps.map(([name, note, level]) => (
              <div
                key={name}
                style={{
                  marginLeft: level * 34,
                  border: `3.5px solid ${K.spirit}`,
                  borderRadius: 10,
                  background: "rgba(224,163,62,0.07)",
                  padding: "12px 16px",
                  ...enter(f, 20 + level * 12),
                }}
              >
                <div style={{ fontSize: 22.5, fontWeight: 950, color: K.spiritInk }}>
                  {"▲".repeat(level + 1)} {name}
                </div>
                <div style={{ fontSize: 20.5, fontWeight: 850, marginTop: 4, color: K.textWarm }}>{note}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18, fontSize: 22, fontWeight: 900, color: K.textSoft, lineHeight: 1.4 }}>
            注意：此处"省政府"不包括省政府下属部门
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const GateTrapsScene = () => {
  /* Static audit inventory: data-final-knowledge="trap-01" data-final-knowledge="trap-02" data-final-knowledge="trap-03" data-final-knowledge="trap-04" data-final-knowledge="trap-05" data-final-knowledge="trap-06" data-final-knowledge="trap-07" data-final-knowledge="trap-08" data-final-knowledge="trap-09" data-final-knowledge="trap-10" data-final-knowledge="trap-summary" */
  const f = useCurrentFrame();
  const traps = [
    ["无关联性的规定一并审查", "文件不是行为依据 → 不予审查", false],
    ["对规章《实施细则》一并审查", "规章不属于可审查范围", false],
    ["直接起诉《处罚办法》", "只能一并提出，不可单独起诉", false],
    ["一审开庭前一并请求审查办法", "符合条件 → 应予准许", true],
    ["可能不合法才听取制定机关意见", "非一律听取", true],
    ["未陈述意见不能阻止审查", "正确", true],
    ["法院撤销违法的规范性文件", "法院无权撤销文件", false],
    ["生效裁判法院提司法建议·60日答复", "正确", true],
    ["联合制定→共同上一级或主办机关", "正确（非必须共同上一级）", true],
    ["县法院报市中院备案", "报送上一级法院备案", true],
  ];
  return (
    <Shell code="08" title="最爱考：采矿许可案十判断">
      <div
        data-layout="tasting-verdict-board"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="ten-exam-tastings-stamp-copper-pass-or-fail-seals,five-question-plate-guides-the-review"
        data-text-treatments="stamp,label-block,external-negation"
        data-focal-rule="exam-traps-on-incidental-review"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 16 }}
      >
        {traps.map((x, i) => (
          <div
            key={String(i)}
            data-final-knowledge={`trap-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: 30 + (i % 2) * 920,
              top: 22 + Math.floor(i / 2) * 132,
              width: 900,
              height: 116,
              border: `4px solid ${x[2] ? K.verdigris : K.rust}`,
              borderTop: `10px solid ${x[2] ? K.verdigris : K.rust}`,
              background: K.panel,
              borderRadius: 12,
              padding: "12px 16px",
              boxShadow: "0 8px 20px rgba(0,0,0,.4)",
              ...enter(f, 6 + i * 7),
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: x[2] ? K.verdigris : K.rust,
                  color: K.white,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 22,
                  fontWeight: 950,
                  flex: "0 0 auto",
                  fontFamily: "var(--inkloom-animation-mono)",
                }}
              >
                {x[2] ? "✓" : "✕"}
              </span>
              <div>
                <div style={{ fontSize: 22, fontWeight: 950, color: K.white }}>{x[0]}</div>
                <div style={{ fontSize: 21, fontWeight: 850, marginTop: 3, color: K.textSoft, lineHeight: 1.25 }}>
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
            left: 560,
            top: 690,
            width: 800,
            textAlign: "center",
            ...enter(f, 80),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${K.copperLight}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: K.copperBright,
              background: "rgba(196,123,63,0.10)",
            }}
          >
            审查五问：对象？关联？方式？时间？处理？
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const AcceptanceSecurityGate = () => (
  <AbsoluteFill>
    <TimelineSequence name="01" start={SCENES["positive-list-lane"].start} duration={SCENES["positive-list-lane"].duration}>
      <PositiveListLaneScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES["exclusion-barriers"].start} duration={SCENES["exclusion-barriers"].duration}>
      <ExclusionBarriersScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES["agreement-counter"].start} duration={SCENES["agreement-counter"].duration}>
      <AgreementCounterScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES["incidental-review-entry"].start} duration={SCENES["incidental-review-entry"].duration}>
      <IncidentalReviewEntryScene />
    </TimelineSequence>
    <TimelineSequence name="05" start={SCENES["review-process-console"].start} duration={SCENES["review-process-console"].duration}>
      <ReviewProcessConsoleScene />
    </TimelineSequence>
    <TimelineSequence name="06" start={SCENES["court-handling-console"].start} duration={SCENES["court-handling-console"].duration}>
      <CourtHandlingConsoleScene />
    </TimelineSequence>
    <TimelineSequence name="07" start={SCENES["suggestion-filing-console"].start} duration={SCENES["suggestion-filing-console"].duration}>
      <SuggestionFilingConsoleScene />
    </TimelineSequence>
    <TimelineSequence name="08" start={SCENES["gate-traps"].start} duration={SCENES["gate-traps"].duration}>
      <GateTrapsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
