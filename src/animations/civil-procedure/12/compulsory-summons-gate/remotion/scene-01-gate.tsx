import React from "react";
import { useCurrentFrame } from "remotion";
import { EnamelPlate, enter } from "./theme";

export const SummonsGateDecisionScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="summons-object-scope" data-final-knowledge="summons-two-summons-rule" data-final-knowledge="summons-no-justified-reason" data-final-knowledge="summons-approval-warrant" */
  const f = useCurrentFrame();
  const checks = [
    {
      no: "①",
      title: "对象：必须到庭的当事人",
      body: "负有赡养、抚养、扶养义务和不到庭就无法查清案情的被告；必须到庭才能查清案件基本事实的原告。对象范围法定，不得扩大。",
    },
    {
      no: "②",
      title: "两次传票传唤",
      body: "须经两次传票传唤，未达法定传唤次数的不适用拘传。",
    },
    {
      no: "③",
      title: "无正当理由拒不到庭",
      body: "有正当理由的，不适用拘传。",
    },
  ];
  return (
    <div
      data-layout="three-condition-enamel-gate"
      data-visual-anchor="flow-path"
      data-visual-grammar="three-condition-plates-gate-the-summons-decision,all-pass-unlocks-the-presidential-approval-counter"
      data-text-treatments="label-block,stamp,soft-highlight"
      data-focal-rule="拘传适用三要件与院长批准程序"
      data-focal-channels="connector,contrast,locator"
      style={{ position: "absolute", inset: 8, display: "flex", gap: 26 }}
    >
      <div style={{ flex: 1.35, display: "flex", flexDirection: "column", gap: 14 }}>
        {checks.map((c, i) => (
          <div
            key={c.no}
            data-final-knowledge={i === 0 ? "summons-object-scope" : i === 1 ? "summons-two-summons-rule" : "summons-no-justified-reason"}
            style={{
              display: "flex",
              gap: 16,
              ...enter(f, 6 + i * 12, -26, 0),
            }}
          >
            <EnamelPlate style={{ width: 64, display: "grid", placeItems: "center" }}>
              <span style={{ fontSize: 26, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{c.no}</span>
            </EnamelPlate>
            <EnamelPlate style={{ flex: 1, padding: "14px 18px" }}>
              <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 5 }}>{c.title}</div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: "#4a4030" }}>{c.body}</div>
            </EnamelPlate>
          </div>
        ))}
        <div
          data-final-knowledge="summons-approval-warrant"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "#1a3329",
            border: `3px solid ${"#d9a13b"}`,
            borderRadius: 10,
            padding: "14px 20px",
            ...enter(f, 48),
          }}
        >
          <EnamelPlate mark={false} style={{ padding: "8px 14px", display: "grid", placeItems: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 950 }}>院长批准</span>
          </EnamelPlate>
          <span style={{ color: "#f4efdd", fontSize: 28, fontWeight: 950 }}>→</span>
          <EnamelPlate mark={false} style={{ padding: "8px 14px", display: "grid", placeItems: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 950 }}>签发拘传票</span>
          </EnamelPlate>
          <span style={{ color: "#f4efdd", fontSize: 28, fontWeight: 950 }}>→</span>
          <span style={{ fontSize: 22, fontWeight: 950, color: "#f4efdd" }}>拘传到庭</span>
        </div>
      </div>
      <div style={{ flex: "0 0 380px", display: "flex", flexDirection: "column", gap: 14 }}>
        <EnamelPlate
          style={{
            flex: 1,
            background: "linear-gradient(170deg, #f7e9b8 0%, #efd98f 100%)",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: 20,
            ...enter(f, 30, 26, 0),
          }}
        >
          <div>
            <div style={{ fontSize: 40, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)", color: "#26211a" }}>
              两传一拒
            </div>
            <div style={{ fontSize: 21, fontWeight: 800, marginTop: 12, lineHeight: 1.5, color: "#4a4030" }}>
              两次传票传唤 ＋ 无正当理由拒不到庭
              <br />
              缺一不可
            </div>
          </div>
        </EnamelPlate>
        <EnamelPlate style={{ padding: "14px 18px", ...enter(f, 44, 26, 0) }}>
          <div style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.55, color: "#4a4030" }}>
            ⚠ 罚款、拘留用<b>决定书</b>；拘传用<b>拘传票</b>——文书不同，均须经院长批准
          </div>
        </EnamelPlate>
      </div>
    </div>
  );
};
