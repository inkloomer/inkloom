import React from "react";
import { useCurrentFrame } from "remotion";
import { LoomShell, ThreadLabel, enter } from "./theme";

export const FiveThreadLoomWallScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="basis-laws-regulations" data-final-knowledge="reference-rules" data-final-knowledge="consider-other-norms" data-final-knowledge="transform-wto" data-final-knowledge="cite-judicial-interpretation" */
  const f = useCurrentFrame();
  const threads = [
    { name: "依据", color: "#d9b24a", who: "法律、法规", rule: "必须适用，不能拒绝适用", extra: "" },
    { name: "参照", color: "#b98d3e", who: "规章", rule: "法院选择适用：符合法律/法规的必须参照适用并可在裁判文书引用；不符合的可灵活处理不适用", extra: "[对比] 规章符合法律/法规时法院必须参照适用" },
    { name: "参考", color: "#7fa3c0", who: "其他规范性文件", rule: "仅作考虑，只具有辅助作用；合法有效的可在裁判文书中引用", extra: "" },
    { name: "转化", color: "#a9bed6", who: "WTO规则", rule: "转化成国内法后才可以适用", extra: "" },
    { name: "援引", color: "#c6d2e2", who: "司法解释", rule: "行政审判适用司法解释的，要在裁判文书中指出", extra: "" },
  ];
  return (
    <LoomShell code="01" title="五档经纬线墙" subtitle="依据 · 参照 · 参考 · 转化 · 援引，效力由强到弱">
      <div
        data-layout="five-thread-loom-wall"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="five-normative-threads-woven-in-binding-strength-order,each-thread-carries-its-own-application-rule"
        data-text-treatments="label-block,thin-underline,chip"
        data-focal-rule="五种规范效力档次"
        data-focal-channels="contrast,spatial,locator"
        style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 14 }}
      >
        {threads.map((t, i) => (
          <div
            key={t.name}
            data-final-knowledge={t.name === "依据" ? "basis-laws-regulations" : t.name === "参照" ? "reference-rules" : t.name === "参考" ? "consider-other-norms" : t.name === "转化" ? "transform-wto" : "cite-judicial-interpretation"}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 18,
              borderBottom: `3px solid ${t.color}`,
              paddingBottom: 8,
              ...enter(f, 6 + i * 10, -26, 0),
            }}
          >
            <ThreadLabel color={t.color} style={{ fontSize: 24, minWidth: 86, textAlign: "center" }}>{t.name}</ThreadLabel>
            <span style={{ fontSize: 21, fontWeight: 900, color: "#f3eedd", whiteSpace: "nowrap" }}>{t.who}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#c8cede", lineHeight: 1.42, flex: 1 }}>{t.rule}</span>
          </div>
        ))}
        {threads[1].extra && (
          <div style={{ textAlign: "right", fontSize: 19, fontWeight: 800, color: "#b98d3e", ...enter(f, 60) }}>
            {threads[1].extra}
          </div>
        )}
      </div>
    </LoomShell>
  );
};
