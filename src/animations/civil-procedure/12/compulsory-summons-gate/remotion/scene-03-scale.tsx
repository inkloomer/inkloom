import React from "react";
import { useCurrentFrame } from "remotion";
import { EnamelPlate, GateStamp, enter } from "./theme";

export const FinesDetentionScaleScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="fines-amount-rules" data-final-knowledge="detention-day-rules" data-final-knowledge="reconsideration-once-rule" */
  const f = useCurrentFrame();
  return (
    <div
      data-layout="fine-detention-scale-gate"
      data-visual-anchor="boundary"
      data-visual-grammar="fine-and-detention-amounts-hang-on-one-warning-scale,reconsideration-once-never-stays-execution"
      data-text-treatments="label-block,stamp,chip"
      data-focal-rule="罚款拘留数额与救济"
      data-focal-channels="contrast,enclosure,locator"
      style={{ position: "absolute", inset: 8, display: "flex", gap: 26 }}
    >
      <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          data-final-knowledge="fines-amount-rules"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            ...enter(f, 6, -26, 0),
          }}
        >
          <EnamelPlate style={{ width: 150, padding: "16px 0", textAlign: "center" }}>
            <span style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>罚款</span>
          </EnamelPlate>
          <EnamelPlate style={{ flex: 1, padding: "14px 20px" }}>
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 4 }}>
              个人 <span style={{ fontSize: 30, fontWeight: 950 }}>10 万元</span>以下
              　·　单位 <span style={{ fontSize: 30, fontWeight: 950 }}>5 万～100 万元</span>
            </div>
            <div style={{ fontSize: 19, fontWeight: 700, color: "#4a4030" }}>可单独或合并适用</div>
          </EnamelPlate>
        </div>
        <div
          data-final-knowledge="detention-day-rules"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            ...enter(f, 18, -26, 0),
          }}
        >
          <EnamelPlate style={{ width: 150, padding: "16px 0", textAlign: "center" }}>
            <span style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>拘留</span>
          </EnamelPlate>
          <EnamelPlate style={{ flex: 1, padding: "14px 20px" }}>
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 4 }}>
              <span style={{ fontSize: 30, fontWeight: 950 }}>15 日</span>以下
            </div>
            <div style={{ fontSize: 19, fontWeight: 700, color: "#4a4030" }}>对同一妨害诉讼行为，不得连续罚款、拘留</div>
          </EnamelPlate>
        </div>
        <EnamelPlate style={{ padding: "15px 20px", flex: 1, ...enter(f, 30) }}>
          <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.6 }}>
            • 三种措施的对象、文书与批准各归其位：拘传用<b>拘传票</b>，罚款、拘留与单位措施用<b>决定书</b>
            <br />
            • 罚款、拘留须经<b>院长批准</b>；复议期间<b>不停止执行</b>
          </div>
        </EnamelPlate>
      </div>
      <div style={{ flex: "0 0 400px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div
          data-final-knowledge="reconsideration-once-rule"
          style={{
            background: "#1a3329",
            border: `3px solid ${"#d9a13b"}`,
            borderRadius: 12,
            flex: 1,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: 20,
            ...enter(f, 38, 26, 0),
          }}
        >
          <div>
            <div style={{ fontSize: 34, fontWeight: 950, color: "#f4efdd", fontFamily: "var(--inkloom-animation-title, sans-serif)", lineHeight: 1.5 }}>
              仅罚款、拘留
              <br />
              可向上一级法院
              <br />
              <span style={{ color: "#d9a13b" }}>复议一次</span>
            </div>
            <div style={{ fontSize: 19, color: "#8fa398", marginTop: 14 }}>拘传无此复议救济</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GateStamp label="复议期间不停止执行" delay={62} rotation={-2} />
        </div>
      </div>
    </div>
  );
};
