import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";

const C = {
  slate: "#1B2433",
  deep: "#26334A",
  white: "#F5F7FB",
  green: "#3FBF77",
  red: "#E05555",
  amber: "#E2A93E",
  blue: "#4A82D9",
  gray: "#8D98AF",
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
      background: C.slate,
      color: C.white,
      overflow: "hidden",
      backgroundImage:
        "radial-gradient(circle at 84% 8%,rgba(74,130,217,.15),transparent 26%),linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
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
        borderBottom: `4px solid ${C.green}`,
      }}
    >
      <div
        style={{
          width: 150,
          height: 78,
          border: `4px solid ${C.green}`,
          display: "grid",
          placeItems: "center",
          fontSize: 21,
          fontWeight: 950,
          color: C.green,
          letterSpacing: 2,
        }}
      >
        GATE {code}
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
        ACCEPTANCE · GATE
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

const Lane = ({
  children,
  color = C.green,
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
      background: `${color}0d`,
      boxShadow: `0 0 20px ${color}20`,
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

export const PositiveListLaneScene = () => {
  /* Static audit inventory: data-final-knowledge="positive-01" data-final-knowledge="positive-02" data-final-knowledge="positive-03" data-final-knowledge="positive-04" data-final-knowledge="positive-05" data-final-knowledge="positive-06" data-final-knowledge="positive-07" data-final-knowledge="positive-08" data-final-knowledge="positive-09" data-final-knowledge="positive-10" data-final-knowledge="positive-11" data-final-knowledge="positive-entrance" data-final-knowledge="positive-mnemonic" */
  const f = useCurrentFrame();
  const scanX = interpolate(f, [40, 300], [-120, 1830], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const items = [
    ["处罚", "行政处罚类行为", "Gavel", C.green],
    ["强制", "行政强制措施与强制执行", "LockKeyhole", C.green],
    ["许可", "行政许可类行为", "FileCheck2", C.green],
    ["确权", "自然资源所有权/使用权确认决定", "MapPin", C.green],
    ["征补", "征收征用及补偿决定", "House", C.green],
    ["履职", "不履行保护人身财产权法定职责", "ShieldAlert", C.green],
    ["自主权", "侵犯经营自主权/土地承包经营权", "Factory", C.green],
    ["竞争", "滥用行政权力排除限制竞争", "Scale", C.green],
    ["摊派", "违法集资摊派/违法要求履行义务", "Coins", C.green],
    ["给付", "未依法支付抚恤金低保社保待遇", "HeartHandshake", C.green],
    ["其他", "其他侵犯人身权财产权行为", "FileQuestion", C.green],
  ];
  return (
    <Shell code="01" title="正面列举：十一类可诉行为过安检">
      <div
        data-layout="conveyor-admission-line"
        data-visual-anchor="flow-path"
        data-visual-grammar="eleven-admissible-acts-travel-the-green-conveyor,scan-beam-approves-each-item-into-the-court"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="eleven-positive-list-categories"
        data-focal-channels="contrast,enclosure,motion"
        style={{ position: "absolute", inset: 16 }}
      >
        {/* conveyor rail */}
        <div
          style={{
            position: "absolute",
            left: 30,
            right: 30,
            top: 578,
            height: 16,
            borderRadius: 8,
            background: C.deep,
            border: `3px solid ${C.gray}55`,
            ...enter(f, 20),
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 30,
            right: 30,
            top: 578,
            height: 16,
            borderRadius: 8,
            overflow: "hidden",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,.16) 0 26px, transparent 26px 52px)",
            ...enter(f, 20),
          }}
        />
        {/* scan beam */}
        <div
          style={{
            position: "absolute",
            top: 600,
            left: scanX,
            width: 26,
            height: 90,
            background: C.green,
            boxShadow: `0 0 30px ${C.green}`,
            opacity: 0.85,
            zIndex: 3,
          }}
        />
        {/* court entrance */}
        <div
          data-final-knowledge="positive-entrance"
          style={{
            position: "absolute",
            right: 20,
            top: 634,
            width: 210,
            height: 70,
            background: C.green,
            display: "grid",
            placeItems: "center",
            ...enter(f, 34),
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 950, color: C.slate }}>
            法院受理 →
          </span>
        </div>
        {items.map((x, i) => (
          <div
            key={String(i)}
            data-final-knowledge={`positive-${String(i + 1).padStart(2, "0")}`}
            style={{
              position: "absolute",
              left: i < 6 ? 36 + i * 292 : 240 + (i - 6) * 292,
              top: i < 6 ? 24 : 316,
              width: 268,
              height: 238,
              background: "rgba(255,255,255,.05)",
              border: `4px solid ${x[3]}`,
              borderTop: `10px solid ${x[3]}`,
              boxShadow: `0 10px 24px rgba(0,0,0,.35)`,
              borderRadius: 12,
              padding: "18px 20px",
              ...enter(f, 8 + i * 9, i < 6 ? -60 : 60, 0),
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 950,
                  letterSpacing: 2,
                  color: C.gray,
                  background: "rgba(255,255,255,.07)",
                  padding: "3px 8px",
                }}
              >
                CASE {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  display: "inline-grid",
                  placeItems: "center",
                  width: 54,
                  height: 54,
                  borderRadius: 12,
                  background: `${x[3]}22`,
                  border: `3px solid ${x[3]}`,
                }}
              >
                <Icon name={String(x[2])} size={30} color={String(x[3])} />
              </span>
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 26,
                fontWeight: 950,
                lineHeight: 1.25,
                color: C.white,
              }}
            >
              {x[1]}
            </div>
            <div
              style={{
                marginTop: 12,
                fontSize: 15,
                fontWeight: 800,
                color: C.gray,
              }}
            >
              类型：{x[0]}
            </div>
            <span
              style={{
                position: "absolute",
                right: 14,
                bottom: 12,
                border: `3px solid ${C.green}`,
                color: C.green,
                padding: "3px 9px",
                fontSize: 18,
                fontWeight: 950,
                rotate: "-3deg",
                opacity: interpolate(f, [60 + i * 9, 80 + i * 9], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              可诉 ✓
            </span>
          </div>
        ))}
        <div
          data-final-knowledge="positive-mnemonic"
          style={{
            position: "absolute",
            left: 430,
            top: 634,
            width: 980,
            textAlign: "center",
            ...enter(f, 66),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `3px dashed ${C.green}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: C.green,
              background: `${C.green}0d`,
            }}
          >
            记忆：罚强制许可确权征补 → 履职自主权竞争摊派给付其他
          </span>
        </div>
      </div>
    </Shell>
  );
};

const Icon = ({ name, size, color }: { name: string; size: number; color: string }) => {
  const glyphs: Record<string, React.ReactNode> = {
    Gavel: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
        <path d="m16 16 6-6" /><path d="m8 8 6-6" /><path d="m9 7 8 8" /><path d="m21 11-8-8" />
      </svg>
    ),
    LockKeyhole: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
      </svg>
    ),
    FileCheck2: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" /><path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m3 15 2 2 4-4" />
      </svg>
    ),
    MapPin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    House: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.527l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    ShieldAlert: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
    Factory: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
      </svg>
    ),
    Scale: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
    Coins: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" />
      </svg>
    ),
    HeartHandshake: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
        <path d="m18 15-2-2" /><path d="m15 18-2-2" />
      </svg>
    ),
    FileQuestion: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M10 9a3 3 0 1 1 4 2.83c-.65.3-1 .94-1 1.67" /><path d="M13 17h.01" />
      </svg>
    ),
  };
  return <>{glyphs[name] ?? null}</>;
};

export const ExclusionBarriersScene = () => {
  /* Static audit inventory: data-final-knowledge="exclude-1" data-final-knowledge="exclude-2" data-final-knowledge="exclude-3" data-final-knowledge="exclude-4" data-final-knowledge="exclude-5" data-final-knowledge="exclusion-mnemonic" */
  const f = useCurrentFrame();
  return (
    <Shell code="02" title="反面排除：五道栏杆拦住不可诉行为">
      <div
        data-layout="five-exclusion-barriers"
        data-visual-anchor="boundary"
        data-visual-grammar="five-exclusion-reasons-bar-their-case-types,abstract-acts-need-no-direct-suit"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="negative-exclusion-five-reasons"
        data-focal-channels="contrast,enclosure,icon"
        style={{ position: "absolute", inset: 16 }}
      >
        {[
          ["无行政性", "国家行为 · 刑事司法行为 · 行政协助司法执行", C.red],
          ["无处分性", "暴力侵权 · 行政指导 · 行政调解仲裁 · 重复处理 · 过程性行为 · 信访", C.red],
          ["无特定性", "抽象行政行为（不可以直接起诉）", C.amber],
          ["无外部性", "公务员奖惩任免 · 机关间内部行为 · 层级监督", C.red],
          ["法定最终裁决", "国务院复议决定 · 对外国人限制人身自由的复议决定", C.amber],
        ].map((x, i) => (
          <div
            key={String(x[0])}
            data-final-knowledge={`exclude-${i + 1}`}
            style={{
              position: "absolute",
              left: 90,
              top: 40 + i * 132,
              width: 1740,
              height: 112,
              border: `5px solid ${x[2]}`,
              background: `${x[2]}0a`,
              padding: "14px 20px",
              ...enter(f, 8 + i * 10),
            }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span
                style={{
                  width: 88,
                  height: 46,
                  background: x[2],
                  color: C.slate,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 22,
                  fontWeight: 950,
                  flex: "0 0 auto",
                  rotate: "-2deg",
                }}
              >
                {x[0]}
              </span>
              <div style={{ fontSize: 22, fontWeight: 850, lineHeight: 1.3 }}>{x[1]}</div>
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="exclusion-mnemonic"
          style={{
            position: "absolute",
            left: 460,
            top: 662,
            width: 1000,
            textAlign: "center",
            ...enter(f, 62),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.gray}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: C.gray,
            }}
          >
            排除五因：无行政性、无处分性、无特定性、无外部性、法定终局
          </span>
        </div>
      </div>
    </Shell>
  );
};

export const AgreementCounterScene = () => {
  /* Static audit inventory: data-final-knowledge="agreement-concept" data-final-knowledge="agreement-kind-1" data-final-knowledge="agreement-kind-2" data-final-knowledge="agreement-kind-3" data-final-knowledge="agreement-kind-4" data-final-knowledge="agreement-kind-5" data-final-knowledge="agreement-direction" data-final-knowledge="agreement-summary" */
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="行政协议：民告官，不许官告民">
      <div
        data-layout="agreement-counter"
        data-visual-anchor="role-pair"
        data-visual-grammar="agreement-types-enter-the-counter,only-the-people-side-may-sue"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="administrative-agreement-acceptance"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="agreement-concept"
          style={{
            position: "absolute",
            left: 100,
            top: 30,
            width: 1720,
            border: `5px solid ${C.blue}`,
            padding: "18px 22px",
            ...enter(f, 4),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.blue }}>行政协议（行政合同）</div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4 }}>
            为实现公共利益或行政管理目标，在法定职责范围内，与公民、法人或其他组织协商订立的
            具有行政法上权利义务内容的协议
          </div>
        </div>
        <div
          data-final-knowledge="agreement-kinds"
          style={{
            position: "absolute",
            left: 100,
            top: 210,
            width: 1720,
            border: `5px solid ${C.amber}`,
            padding: "18px 22px",
            ...enter(f, 10),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.amber }}>主要种类</div>
          <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              "政府特许经营协议",
              "征收征用补偿协议",
              "国有自然资源使用权出让",
              "保障性住房租赁买卖",
              "部分政府与社会资本合作",
            ].map((x, i) => (
              <span
                key={x}
                data-final-knowledge={`agreement-kind-${i + 1}`}
                style={{
                  border: `3px solid ${C.amber}`,
                  background: `${C.amber}0d`,
                  padding: "8px 14px",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.white,
                  ...enter(f, 16 + i * 8),
                }}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="agreement-direction"
          style={{
            position: "absolute",
            left: 100,
            top: 480,
            width: 1720,
            border: `5px solid ${C.green}`,
            padding: "20px 24px",
            ...enter(f, 40),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.green }}>
            民告官，不允许官告民
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8 }}>
            只有公民、法人或其他组织可起诉；行政机关不能作为原告起诉相对人
          </div>
        </div>
        <div
          data-final-knowledge="agreement-summary"
          style={{
            position: "absolute",
            left: 560,
            top: 660,
            width: 800,
            textAlign: "center",
            ...enter(f, 52),
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
        data-layout="incidental-review-entry-console"
        data-visual-anchor="flow-path"
        data-visual-grammar="incidental-request-rides-alongside-the-main-suit,object-time-and-venue-are-checked-at-entry"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="incidental-normative-document-review-conditions"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="incidental-way"
          style={{
            position: "absolute",
            left: 90,
            top: 34,
            width: 560,
            height: 600,
            border: `5px solid ${C.amber}`,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.amber }}>方式 · 附带性</div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            不可单独、直接起诉规范性文件
            <br />
            只能在对具体行政行为起诉时<u style={{ textDecorationThickness: 3, textDecorationColor: C.amber }}>一并</u>提出审查请求
          </div>
          <div style={{ marginTop: 18 }}>
            <span
              style={{
                border: `3px solid ${C.red}`,
                color: C.red,
                padding: "8px 14px",
                fontSize: 22,
                fontWeight: 900,
                display: "inline-block",
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
            left: 690,
            top: 34,
            width: 560,
            height: 600,
            border: `5px solid ${C.blue}`,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.blue }}>对象 · 其他规范性文件</div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.45 }}>
            国务院制定的文件<b style={{ color: C.red }}>除外</b>
            <br />
            <b style={{ color: C.red }}>规章</b>不属于可审查范围
          </div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 900, color: C.amber, lineHeight: 1.35 }}>
            须与被诉行政行为具有关联性（是行政行为的法律依据）
          </div>
        </div>
        <div
          data-final-knowledge="incidental-time"
          style={{
            position: "absolute",
            left: 1290,
            top: 34,
            width: 560,
            height: 600,
            border: `5px solid ${C.green}`,
            padding: "20px 22px",
            ...enter(f, 18),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 950, color: C.green }}>时间 · 一审开庭前</div>
          <div style={{ marginTop: 12, fontSize: 22, fontWeight: 850, lineHeight: 1.5 }}>
            应当在第一审开庭审理前提出
            <br />
            有正当理由的，也可以在<b style={{ color: C.green }}>法庭调查</b>中提出
          </div>
          <div style={{ marginTop: 18, fontSize: 22, fontWeight: 900, color: C.gray, lineHeight: 1.4 }}>
            管辖：由具体行政行为作出机关决定管辖法院，而非文件制定机关
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
        data-layout="review-process-console"
        data-visual-anchor="flow-path"
        data-visual-grammar="review-process-starts-when-illegality-is-suspected,the-maker-hears-and-the-court-checks-three-items"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="normative-document-review-procedure"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="review-procedure"
          style={{
            position: "absolute",
            left: 90,
            top: 34,
            width: 860,
            height: 660,
            border: `5px solid ${C.blue}`,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.blue }}>审查程序</div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.6 }}>
            ① 发现文件<b style={{ color: C.red }}>可能不合法</b>的，应当听取制定机关的意见
            <br />
            ② 制定机关申请出庭陈述意见 → 法院<b style={{ color: C.blue }}>应当准许</b>
            <br />
            ③ 制定机关未陈述意见或未提供证明材料 → <b style={{ color: C.blue }}>不能阻止审查</b>
          </div>
        </div>
        <div
          data-final-knowledge="review-content"
          style={{
            position: "absolute",
            left: 990,
            top: 34,
            width: 860,
            height: 660,
            border: `5px solid ${C.amber}`,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.amber }}>审查内容</div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.6 }}>
            ① 是否超越权限
            <br />
            ② 是否违反法定程序
            <br />
            ③ 作出行政行为所依据的条款及相关条款
          </div>
          <div style={{ marginTop: 20, fontSize: 22, fontWeight: 950, color: C.gray }}>
            不合法情形：
          </div>
          <div style={{ fontSize: 22, fontWeight: 820, marginTop: 8, lineHeight: 1.5, color: C.white }}>
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
        data-layout="court-handling-console"
        data-visual-anchor="flow-path"
        data-visual-grammar="legal-files-serve-as-basis,illegal-files-get-not-applied-suggestion-and-copy"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="court-handling-of-normative-documents"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="court-legal-file"
          style={{
            position: "absolute",
            left: 90,
            top: 34,
            width: 860,
            height: 300,
            border: `5px solid ${C.green}`,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.green }}>文件合法</div>
          <div style={{ marginTop: 14, fontSize: 23, fontWeight: 850, lineHeight: 1.4 }}>
            应当将该规范性文件作为认定行政行为合法的依据
          </div>
        </div>
        <div
          data-final-knowledge="court-illegal-file"
          style={{
            position: "absolute",
            left: 990,
            top: 34,
            width: 860,
            height: 300,
            border: `5px solid ${C.red}`,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.red }}>文件违法 · 三动作</div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.6 }}>
            ① <b style={{ color: C.red }}>不适用</b>：不作为认定合法的依据，裁判理由中阐明
            <br />
            ② <b style={{ color: C.amber }}>提建议</b>：生效裁判法院向制定机关提处理建议；3个月内司法建议
            <br />
            ③ <b style={{ color: C.blue }}>告领导</b>：抄送同级政府/上一级机关、监察机关、备案机关
          </div>
        </div>
        <div
          data-final-knowledge="court-no-revoke"
          style={{
            position: "absolute",
            left: 90,
            top: 380,
            width: 860,
            height: 260,
            border: `4px dashed ${C.gray}`,
            padding: "18px 22px",
            ...enter(f, 30),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 950, color: C.gray }}>
            法院无权改变、撤销规范性文件
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4 }}>
            只能不适用 + 建议 + 抄送，不能直接宣告无效或撤销
          </div>
        </div>
        <div
          data-final-knowledge="court-joint-file"
          style={{
            position: "absolute",
            left: 990,
            top: 380,
            width: 860,
            height: 260,
            border: `4px solid ${C.amber}`,
            padding: "18px 22px",
            ...enter(f, 36),
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 950, color: C.amber }}>
            多部门联合制定
          </div>
          <div style={{ fontSize: 22, fontWeight: 850, marginTop: 8, lineHeight: 1.4 }}>
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
  return (
    <Shell code="07" title="司法建议：60日答复与层级备案">
      <div
        data-layout="suggestion-filing-console"
        data-visual-anchor="flow-path"
        data-visual-grammar="the-suggestion-desk-replies-in-sixty-days,filing-climbs-to-the-higher-court"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="judicial-suggestion-execution-and-filing"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 18 }}
      >
        <div
          data-final-knowledge="suggestion-execution"
          style={{
            position: "absolute",
            left: 90,
            top: 34,
            width: 860,
            height: 660,
            border: `5px solid ${C.blue}`,
            padding: "20px 22px",
            ...enter(f, 6),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.blue }}>处理结果执行</div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.6 }}>
            ① 接收司法建议的行政机关应在<b style={{ color: C.blue }}>60日内</b>书面答复
            <br />
            ② 情况紧急 → 法院可建议立即停止执行该文件
          </div>
          <div style={{ marginTop: 20, fontSize: 22, fontWeight: 950, color: C.gray }}>
            时间点：裁判生效之日起 3 个月内可提司法建议
          </div>
        </div>
        <div
          data-final-knowledge="suggestion-filing"
          style={{
            position: "absolute",
            left: 990,
            top: 34,
            width: 860,
            height: 660,
            border: `5px solid ${C.amber}`,
            padding: "20px 22px",
            ...enter(f, 12),
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 950, color: C.amber }}>处理结果备案</div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 850, lineHeight: 1.6 }}>
            ① 认为文件不合法 → 裁判生效后报送<b style={{ color: C.amber }}>上一级法院</b>备案
            <br />
            ② 国务院部门文件 → 层报<b style={{ color: C.amber }}>最高人民法院</b>备案
            <br />
            ③ 省级行政机关文件 → 层报<b style={{ color: C.amber }}>高级人民法院</b>备案
          </div>
          <div style={{ marginTop: 20, fontSize: 22, fontWeight: 900, color: C.gray, lineHeight: 1.4 }}>
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
        data-layout="ten-judgment-gates"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="ten-exam-statements-pass-through-green-or-red-gates,incidental-review-five-questions-guide-the-answers"
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
              left: 50 + (i % 2) * 920,
              top: 28 + Math.floor(i / 2) * 136,
              width: 880,
              height: 120,
              border: `4px solid ${x[2] ? C.green : C.red}`,
              background: `${x[2] ? C.green : C.red}0a`,
              padding: "12px 16px",
              ...enter(f, 6 + i * 7),
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: x[2] ? C.green : C.red,
                  color: C.slate,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 22,
                  fontWeight: 950,
                  flex: "0 0 auto",
                }}
              >
                {x[2] ? "✓" : "✕"}
              </span>
              <div>
                <div style={{ fontSize: 22, fontWeight: 950, color: C.white }}>{x[0]}</div>
                <div style={{ fontSize: 22, fontWeight: 820, marginTop: 3, color: C.gray, lineHeight: 1.25 }}>
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
            top: 672,
            width: 800,
            textAlign: "center",
            ...enter(f, 80),
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: `4px solid ${C.green}`,
              padding: "10px 18px",
              fontSize: 23,
              fontWeight: 950,
              color: C.green,
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

