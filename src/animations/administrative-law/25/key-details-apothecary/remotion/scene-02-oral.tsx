import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, CinnabarSeal, DrawerFace, HerbSlip, IndexTag, ThinUnderline, T, enter } from "./theme";

export const OralFormGateScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="oral-prohibited-track" data-final-knowledge="oral-permitted-track" data-final-knowledge="oral-entrustment-exception" data-stateful-source="herb-slip-oral-stream" data-stateful-terminal="herb-slip-oral-stream" */
  const f = useCurrentFrame();
  const written = [
    { name: "行政处罚", note: "仅现场发现的违法行为人可口头传唤", flag: true },
    { name: "行政许可", note: "无口头形式", flag: false },
    { name: "行政强制", note: "无口头形式", flag: false },
  ];
  const filings = [
    "信息公开：可以口头申请",
    "行政复议：可以口头申请",
    "国家赔偿：可口头申请赔偿、口头申请回避",
  ];
  const suitItems = [
    "可以口头起诉",
    "公民被限制人身自由，近亲属依其口头委托以该公民名义起诉",
    "简易程序可口头通知传唤当事人、通知证人、送达裁判文书以外的诉讼文书",
    "法院可以口头形式作出回避决定",
    "情况紧急提审或指令再审，可口头作出中止执行裁定",
  ];
  return (
    <CabinetShell code="02" title="口头与书面闸门" subtitle="原则须书面 · 例外可口头">
      <div
        data-layout="oral-written-contrast-gate"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="oral-and-written-forms-split-into-two-contrast-lanes,penalty-license-and-compulsion-stay-on-the-written-lane,information-review-suit-and-compensation-open-the-oral-lane,two-named-exceptions-sit-outside-their-own-default"
        data-text-treatments="label-block,external-negation,stamp"
        data-focal-rule="行政处罚、行政许可、行政强制原则须书面"
        data-focal-channels="contrast,enclosure,locator"
        data-stateful-terminal="herb-slip-oral-stream"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div
          data-final-knowledge="oral-prohibited-track"
          style={{ width: 560, display: "flex", flexDirection: "column", gap: 12, ...enter(f, 6, -30, 0) }}
        >
          <DrawerFace label="原则：不可口头" tone="indigo" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {written.map((w, i) => (
              <HerbSlip
                key={w.name}
                data-stateful-source="herb-slip-oral-stream"
                style={{
                  minHeight: 78,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: 6,
                  ...enter(f, 24 + i * 12, -18, 0),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <IndexTag label={w.name} tone={T.indigo} style={{ fontSize: 24 }} />
                  {w.flag ? (
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 950,
                        color: T.cinnabar,
                        border: `2px solid ${T.cinnabar}`,
                        borderRadius: 3,
                        padding: "2px 8px",
                        letterSpacing: 1,
                      }}
                    >
                      例外
                    </span>
                  ) : null}
                </div>
                <span style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 700 }}>
                  {w.flag ? (
                    <>
                      仅 <ThinUnderline tone={T.cinnabar}>现场发现</ThinUnderline> 的违法行为人可口头传唤，其余须书面
                    </>
                  ) : (
                    w.note
                  )}
                </span>
              </HerbSlip>
            ))}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 14,
              background: "rgba(27,18,11,0.6)",
              border: "2px solid #7a5639",
              borderRadius: 5,
              padding: 18,
              ...enter(f, 66, 0, 16),
            }}
          >
            <CinnabarSeal label="书面为原则" delay={74} rotation={-2} />
            <span style={{ fontSize: 21, fontWeight: 800, color: "#a8907a", textAlign: "center", lineHeight: 1.5 }}>
              许可、强制无口头；处罚仅留一个传唤出口
            </span>
          </div>
        </div>

        <div
          data-final-knowledge="oral-permitted-track"
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, ...enter(f, 12, 30, 0) }}
        >
          <DrawerFace label="例外：可以口头" tone="mugwort" />
          <div style={{ fontSize: 22, fontWeight: 950, color: T.brass, letterSpacing: 2, ...enter(f, 26, 0, 10) }}>
            壹 · 申请与赔偿
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {filings.map((item, i) => (
              <HerbSlip
                key={item}
                data-stateful-source="herb-slip-oral-stream"
                style={{ minHeight: 78, alignItems: "center", fontSize: 22, lineHeight: 1.4, fontWeight: 750, ...enter(f, 32 + i * 10, 0, 16) }}
              >
                {item}
              </HerbSlip>
            ))}
          </div>
          <div style={{ fontSize: 22, fontWeight: 950, color: T.brass, letterSpacing: 2, ...enter(f, 60, 0, 10) }}>
            贰 · 行政诉讼
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {suitItems.map((item, i) => (
              <HerbSlip
                key={item}
                data-stateful-source="herb-slip-oral-stream"
                style={{ minHeight: 78, alignItems: "center", fontSize: 22, lineHeight: 1.4, fontWeight: 750, ...enter(f, 68 + i * 9, 0, 16) }}
              >
                {item}
              </HerbSlip>
            ))}
          </div>
          <div
            data-final-knowledge="oral-entrustment-exception"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              padding: "12px 18px",
              background: "rgba(109,143,94,0.16)",
              border: `2px solid ${T.mugwort}`,
              borderRadius: 5,
              ...enter(f, 116, 0, 14),
            }}
          >
            <IndexTag label="唯一口头委托" tone={T.mugwort} />
            <span style={{ fontSize: 22, fontWeight: 800, color: "#efe3cd", lineHeight: 1.45 }}>
              被限制人身自由公民的近亲属，可依其口头委托代为起诉
            </span>
          </div>
        </div>
      </div>
    </CabinetShell>
  );
};
