import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const AcceptanceVerdictComposeScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="acceptance-register" data-final-knowledge="acceptance-reject" data-final-knowledge="acceptance-undecided-seven-days" */
  const f = useCurrentFrame();
  const outcomes = [
    {
      title: "能判断符合条件",
      body: "当场或 7 日内判断符合起诉条件 ➔ 登记立案",
      edge: "#5f7040",
      knowledge: "acceptance-register",
    },
    {
      title: "能判断不符合条件",
      body: "当场或 7 日内判断不符合 ➔ 裁定不予立案，并载明不予立案的理由",
      edge: "#b5432f",
      knowledge: "acceptance-reject",
    },
    {
      title: "不能判断是否符合",
      body: "第一步先接收起诉状，7 日内决定是否立案；7 日内仍不能判断的 ➔ 应当先予立案",
      edge: "#8d97a5",
      knowledge: "acceptance-undecided-seven-days",
    },
  ];
  return (
    <PressShell code="02" title="受理：立案拣字台" subtitle="符合 · 不符合 · 不能判断 · 状纸欠缺四路分拣">
      <div
        data-layout="typesetter-acceptance-case"
        data-visual-anchor="flow-path"
        data-visual-grammar="one-filing-decision-composes-four-outcomes,undecidable-cases-wait-seven-days-then-register"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="受理处理方式分流"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div
          style={{
            width: 300,
            display: "grid",
            placeItems: "center",
            ...enter(f, 4),
          }}
        >
          <div
            style={{
              width: 250,
              height: 250,
              borderRadius: 14,
              background: "#1d1f24",
              border: `3px solid #b5432f`,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <TypeSort label="状" tone="cream" size={72} style={{ margin: "0 auto 14px" }} />
              <div style={{ fontSize: 27, fontWeight: 950, color: "#efe8d6", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
                起诉状
                <br />
                进入拣字台
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          {outcomes.map((o, i) => (
            <div
              key={o.knowledge}
              data-final-knowledge={o.knowledge}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                ...enter(f, 10 + i * 10, 30, 0),
              }}
            >
              <TypeSort label={String(i + 1)} tone={o.edge === "#b5432f" ? "red" : "lead"} size={46} />
              <ProofCard style={{ flex: 1, padding: "13px 20px" }}>
                <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 4, color: o.edge }}>{o.title}</div>
                <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.4 }}>{o.body}</div>
              </ProofCard>
            </div>
          ))}
          <div
            data-final-knowledge="acceptance-supplement-flow"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              ...enter(f, 42),
            }}
          >
            <TypeSort label="补" tone="cream" size={46} />
            <ProofCard style={{ flex: 1, padding: "13px 20px" }}>
              <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45 }}>
                起诉状内容或材料欠缺 ➔ 法院指导释明，<b>一次性全面告知</b>补正内容、材料及期限：
                ① 按期补正且符合条件 ➔ <b style={{ color: "#5f7040" }}>登记立案</b>；
                ② 拒绝补正或补正仍不符 ➔ <b>退回诉状并记录在册</b>；
                ③ 仍坚持起诉 ➔ <b style={{ color: "#b5432f" }}>裁定不予立案并载明理由</b>
              </div>
            </ProofCard>
          </div>
        </div>
        <div style={{ position: "absolute", right: 10, bottom: 4 }}>
          <RedInkStamp label="7 日为受理判断法定节拍" delay={60} rotation={-2} />
        </div>
      </div>
    </PressShell>
  );
};
