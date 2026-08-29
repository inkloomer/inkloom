import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, TypeSort, enter } from "./theme";

export const RemedyTypeDrawerScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="remedy-appeal" data-final-knowledge="remedy-complaint" data-final-knowledge="remedy-sue-higher" */
  const f = useCurrentFrame();
  const drawers = [
    {
      label: "裁",
      title: "不予立案的救济",
      scope: "法院裁定不予立案",
      route: "向上一级法院上诉",
      edge: "#b5432f",
      knowledge: "remedy-appeal",
    },
    {
      label: "诉",
      title: "受理瑕疵的救济",
      scope: "① 不接收起诉状 ② 接收后不出具书面凭证 ③ 不一次性告知需补正的内容",
      route: "向上级法院投诉 ➔ 责令改正，对直接责任人依法处分",
      edge: "#8d97a5",
      knowledge: "remedy-complaint",
    },
    {
      label: "拖",
      title: "不立不裁的救济",
      scope: "既不立案，又不出具不予立案的裁定",
      route: "向上一级法院起诉 ➔ 认为符合起诉条件的应当立案、审理，也可指定其他下级法院立案、审理",
      edge: "#5f7040",
      knowledge: "remedy-sue-higher",
    },
  ];
  return (
    <PressShell code="03" title="救济字屉" subtitle="不予立案 · 受理瑕疵 · 不立不裁，三屉对应三条出口">
      <div
        data-layout="three-drawer-remedy-cabinet"
        data-visual-anchor="document-fork"
        data-visual-grammar="three-remedy-drawers-open-to-distinct-recourse-routes,acceptance-flaws-complain-while-silent-rejections-sue-higher"
        data-text-treatments="label-block,thin-underline,chip"
        data-focal-rule="受理环节三类救济路径"
        data-focal-channels="connector,contrast,locator"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 18 }}
      >
        {drawers.map((d, i) => (
          <div
            key={d.knowledge}
            data-final-knowledge={d.knowledge}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "stretch",
              gap: 16,
              ...enter(f, 6 + i * 12, -26, 0),
            }}
          >
            <div
              style={{
                width: 130,
                display: "grid",
                placeItems: "center",
                background: "#1d1f24",
                border: `2px solid ${d.edge}`,
                borderRadius: 10,
              }}
            >
              <TypeSort label={d.label} tone={i === 0 ? "red" : "lead"} size={48} />
            </div>
            <ProofCard style={{ flex: 1, padding: "14px 22px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontSize: 24, fontWeight: 950, color: d.edge }}>{d.title}</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#5c5347" }}>{d.scope}</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, borderTop: `2px solid ${d.edge}`, paddingTop: 6 }}>
                ➔ 出口：{d.route}
              </div>
            </ProofCard>
          </div>
        ))}
      </div>
    </PressShell>
  );
};
