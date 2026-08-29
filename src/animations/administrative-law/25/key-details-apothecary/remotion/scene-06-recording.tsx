import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, CinnabarSeal, HerbSlip, IndexTag, ThinUnderline, T, enter } from "./theme";

export const RecordingHeadcountLockScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="recording-six-conditions" data-final-knowledge="headcount-one-officer" data-final-knowledge="headcount-two-officers" data-final-knowledge="headcount-three-panel" data-final-knowledge="headcount-five-representatives" data-final-knowledge="recording-headcount-binding" data-final-knowledge="recording-mnemonic" data-stateful-source="herb-slip-recording-stream" data-stateful-terminal="herb-slip-recording-stream" */
  const f = useCurrentFrame();
  const recordings = [
    { tag: "一人执法", text: "办案场所进行询问、扣押、辨认或调解，可由 1 名警察进行，但须全程同步录音录像" },
    { tag: "当场检查", text: "无检查证但确有必要立即检查的，出示警察证可当场检查，但须全程同步录音录像" },
    { tag: "当场扣押", text: "治安管理领域当场实施扣押的，应当全程同步录音录像" },
    { tag: "当场处罚", text: "被处罚人对内容、事实、理由、依据无异议的，可由 1 名警察当场处罚，但须全程同步录音录像" },
    { tag: "远程视频询问", text: "通过远程视频方式询问的，询问和宣读过程应当全程同步录音录像" },
    { tag: "办案场所询问", text: "在执法办案场所询问违反治安管理行为人的，应当全程同步录音录像", star: true },
  ];
  const headcounts: { key: string; n: string; tone: string; items: string[] }[] = [
    {
      key: "headcount-one-officer",
      n: "1",
      tone: T.cinnabar,
      items: ["行政/复议简易程序、形式审查", "办案场所询问、扣押、辨认、调解", "当场治安处罚且被处罚人无异议"],
    },
    {
      key: "headcount-two-officers",
      n: "2",
      tone: T.indigo,
      items: ["调取证据一般 2 人以上", "实质审查一般 2 人以上", "委托代理人 1～2 人"],
    },
    {
      key: "headcount-three-panel",
      n: "3",
      tone: T.mugwort,
      items: ["复议听证：1 主持 + 2 以上听证员", "行政诉讼一般程序 3 人以上单数", "法院司法赔偿程序 3 人以上单数"],
    },
    {
      key: "headcount-five-representatives",
      n: "5",
      tone: T.brassDeep,
      items: ["诉讼代表人 2～5 人", "复议代表人 2～5 人"],
    },
  ];
  return (
    <CabinetShell code="06" title="录音录像与人数" subtitle="六情形全程留痕 · 一至五人阶梯">
      <div
        data-layout="recording-grid-bound-to-headcount-ladder"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="six-recording-conditions-file-into-six-index-cells,one-officer-policing-locks-onto-full-course-recording,headcount-ladder-rises-from-one-to-five,the-mnemonic-one-on-the-spot-remote-and-case-handling-closes-the-scene"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="一人执法与当场处置，必须全程同步录音录像"
        data-focal-channels="connector,contrast,enclosure"
        data-stateful-terminal="herb-slip-recording-stream"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div
          data-final-knowledge="recording-six-conditions"
          style={{ height: 390, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 18 }}
        >
          {recordings.map((r, i) => (
            <HerbSlip
              key={r.tag}
              data-stateful-source="herb-slip-recording-stream"
              tone={r.star ? "#f7e9c8" : T.paper}
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 10,
                padding: "14px 16px",
                borderLeft: `6px solid ${r.star ? T.cinnabar : T.indigo}`,
                ...enter(f, 8 + i * 9, 0, 20),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IndexTag label={r.tag} tone={r.star ? T.cinnabar : T.indigo} style={{ fontSize: 23 }} />
                {r.star ? (
                  <span style={{ fontSize: 20, fontWeight: 950, color: T.cinnabar, letterSpacing: 1 }}>重点</span>
                ) : null}
              </div>
              <span style={{ fontSize: 22, lineHeight: 1.45, fontWeight: 700 }}>{r.text}</span>
            </HerbSlip>
          ))}
        </div>

        <div
          data-final-knowledge="recording-headcount-binding"
          style={{
            height: 66,
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "0 22px",
            borderRadius: 5,
            background: "rgba(201,154,78,0.14)",
            border: `2px solid ${T.brass}`,
            ...enter(f, 78, 0, -14),
          }}
        >
          <span style={{ fontSize: 24, fontWeight: 950, color: T.brass, letterSpacing: 2, whiteSpace: "nowrap" }}>
            1 人执法
          </span>
          <span style={{ flex: 1, height: 4, borderRadius: 2, background: `linear-gradient(90deg, ${T.brass}, ${T.cinnabar})` }} />
          <span style={{ fontSize: 26, fontWeight: 950, color: T.brass }}>⇄</span>
          <span style={{ flex: 1, height: 4, borderRadius: 2, background: `linear-gradient(90deg, ${T.cinnabar}, ${T.brass})` }} />
          <span style={{ fontSize: 24, fontWeight: 950, color: T.paper, whiteSpace: "nowrap" }}>
            <ThinUnderline tone={T.cinnabar}>全程同步录音录像</ThinUnderline>
          </span>
        </div>

        <div style={{ flex: 1, display: "flex", gap: 18 }}>
          {headcounts.map((h, i) => (
            <div
              key={h.key}
              data-final-knowledge={h.key}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "12px 14px",
                background: "rgba(74,50,34,0.42)",
                border: "2px solid #7a5639",
                borderRadius: 5,
                ...enter(f, 88 + i * 10, 0, 24),
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 950,
                    color: h.tone,
                    lineHeight: 1,
                    fontFamily: "var(--inkloom-animation-mono, monospace)",
                  }}
                >
                  {h.n}
                </span>
                <span style={{ fontSize: 24, fontWeight: 900, color: "#efe3cd", letterSpacing: 1 }}>人</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {h.items.map((item, j) => (
                  <HerbSlip
                    key={item}
                    data-stateful-source="herb-slip-recording-stream"
                    style={{ alignItems: "center", fontSize: 22, lineHeight: 1.4, fontWeight: 700, padding: "8px 12px", ...enter(f, 100 + i * 10 + j * 8, 0, 14) }}
                  >
                    {item}
                  </HerbSlip>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          data-final-knowledge="recording-mnemonic"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            padding: "10px 20px",
            background: "rgba(27,18,11,0.74)",
            border: `2px double ${T.cinnabar}`,
            borderRadius: 5,
            ...enter(f, 140, 0, 12),
          }}
        >
          <CinnabarSeal label="口诀" delay={148} rotation={-3} />
          <span style={{ fontSize: 30, fontWeight: 950, color: T.paper, letterSpacing: 3 }}>
            一人 · 当场 · 远程 · 办案
          </span>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#a8907a" }}>
            四字覆盖六情形，皆须全程同步录音录像
          </span>
        </div>
      </div>
    </CabinetShell>
  );
};
