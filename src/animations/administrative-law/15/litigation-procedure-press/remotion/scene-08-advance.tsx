import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const AdvanceExecutionDovetailScene: React.FC = () => {
  const f = useCurrentFrame();
  const reconsideration = [
    "对驳回回避申请决定不服",
    "对保全裁定不服",
    "对不予准许一并审理民事争议的决定不服",
    "行政机关对不准予非诉执行的裁定有异议（向上一级法院）",
    "对停止执行/不停止执行裁定不服",
    "对先予执行裁定不服",
    "对法院罚款、拘留决定不服（向上一级法院）",
    "对不予准许调取证据的申请不服（书面申请复议一次）",
  ];
  return (
    <PressShell code="08" title="先予执行 · 榫卯锁" subtitle="可怜的人，申请可怜的钱 —— 无担保 · 书面申请 · 司法复议一次">
      <div
        data-layout="advance-execution-dovetail-lock"
        data-visual-anchor="flow-target"
        data-visual-grammar="pitiable-applicants-lock-advance-execution-without-guarantee,judicial-reconsideration-runs-once-for-both-parties"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="先予执行条件程序与救济"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 14 }}>
          <ProofCard
            data-final-knowledge="advance-execution-conditions"
            style={{ padding: "16px 22px", ...enter(f, 4, -24, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="条" tone="red" size={40} />
              <span style={{ fontSize: 23, fontWeight: 950 }}>三个条件同时满足</span>
            </div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6 }}>
              ① 案件类型：<b>支付抚恤金</b>、最低生活保障金和工伤、医疗社会保险金
              <br />
              ② 权利义务关系明确，不先予执行将<b>严重影响原告生活</b>
              <br />
              ③ 根据原告申请，裁定先予执行（不能是其他费用或行为）
            </div>
          </ProofCard>
          <ProofCard
            data-final-knowledge="advance-execution-procedure"
            style={{ padding: "16px 22px", flex: 1, ...enter(f, 16, -24, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="程" tone="lead" size={40} />
              <span style={{ fontSize: 23, fontWeight: 950 }}>程序三钉</span>
            </div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.65 }}>
              ① 权利人向法院申请；法院<b>不能主动依职权</b>采取；必须<b>书面申请</b>
              <br />
              ② 申请人是"可怜的人"，<b>不必提供担保</b>
              <br />
              ③ 法院必须以<b>书面形式</b>作出先予执行裁定
            </div>
          </ProofCard>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <RedInkStamp label="司法复议 ≠ 行政复议：对象是法院行为" delay={56} rotation={-2} />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <ProofCard
            data-final-knowledge="judicial-reconsideration-once"
            style={{ padding: "16px 22px", ...enter(f, 30, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="复" tone="red" size={40} />
              <span style={{ fontSize: 23, fontWeight: 950 }}>先予执行的救济：司法复议一次</span>
            </div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55 }}>
              当事人对先予执行裁定不服的，可以申请<b>司法复议一次</b>；原被告<b>双方均有</b>复议权（类民诉司法复议制度）
            </div>
          </ProofCard>
          <ProofCard style={{ padding: "16px 22px", flex: 1, ...enter(f, 42, 26, 0) }}>
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 10 }}>有权申请司法复议的八种情形（归纳）</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 14px" }}>
              {reconsideration.map((r, i) => (
                <div key={i} style={{ fontSize: 17.5, fontWeight: 700, lineHeight: 1.4, display: "flex", gap: 8 }}>
                  <span
                    style={{
                      minWidth: 24,
                      height: 24,
                      borderRadius: 4,
                      background: "#1d1f24",
                      color: "#efe8d6",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 12,
                      fontWeight: 950,
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  {r}
                </div>
              ))}
            </div>
          </ProofCard>
        </div>
      </div>
    </PressShell>
  );
};
