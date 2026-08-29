import React from "react";
import { useCurrentFrame } from "remotion";
import { BrassPlaque, ExhibitCard, GalleryShell, Vitrine, enter } from "./theme";

export const DigitalVsAnalogCompareScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="electronic-binary" data-final-knowledge="analog-signal" data-final-knowledge="propagation-diff" */
  const f = useCurrentFrame();
  const sides = [
    {
      name: "电子数据",
      edge: "#8a6d2f",
      tag: "数字世界",
      rows: ["以二进制数字方式，凭计算机生成和识别", "存放介质：光盘、SD卡、U盘、电脑磁盘", "可在虚拟空间内无限制快速传播"],
    },
    {
      name: "视听资料",
      edge: "#3a5a74",
      tag: "模拟世界",
      rows: ["存放在录像带、磁带、胶片等介质", "模拟信号存放介质", "只能在物理空间传播"],
    },
  ];
  return (
    <GalleryShell code="02" title="电子数据 vs 视听资料" subtitle="同一块玻璃，两个世界">
      <div
        data-layout="twin-vitrine-compare-cases"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="one-evidence-file-shines-in-two-compare-cases,propagation-boundary-splits-the-two-worlds"
        data-text-treatments="label-block,chip,soft-highlight"
        data-focal-rule="电子数据与视听资料的介质与传播辨析"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 8, display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 130px 1fr", alignItems: "stretch", gap: 0, flex: 1 }}>
          {sides.map((s, i) => (
            <React.Fragment key={s.name}>
              {i === 1 && (
                <div style={{ display: "grid", placeItems: "center" }}>
                  <div
                    style={{
                      padding: "10px 12px",
                      background: "#26211a",
                      color: "#f7f3e6",
                      borderRadius: 6,
                      fontSize: 22,
                      fontWeight: 950,
                      textAlign: "center",
                      fontFamily: "var(--inkloom-animation-title, sans-serif)",
                      ...enter(f, 30),
                    }}
                  >
                    VS
                  </div>
                </div>
              )}
              <div style={{ display: "flex", ...enter(f, 6 + i * 14, i === 0 ? -30 : 30, 0) }}>
                <Vitrine style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 30, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)", color: s.edge }}>
                      {s.name}
                    </span>
                    <BrassPlaque style={{ fontSize: 17 }}>{s.tag}</BrassPlaque>
                  </div>
                  {s.rows.map((row, j) => (
                    <ExhibitCard
                      key={j}
                      {...(i === 0 && j === 0 ? { "data-final-knowledge": "electronic-binary" } : {})}
                      {...(i === 1 && j === 1 ? { "data-final-knowledge": "analog-signal" } : {})}
                      style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45, padding: "10px 14px" }}
                    >
                      {row}
                    </ExhibitCard>
                  ))}
                </Vitrine>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div
          data-final-knowledge="propagation-diff"
          style={{
            background: "rgba(138,109,47,0.10)",
            border: `2.5px dashed ${"#8a6d2f"}`,
            borderRadius: 10,
            padding: "12px 22px",
            textAlign: "center",
            fontSize: 22,
            fontWeight: 900,
            ...enter(f, 52),
          }}
        >
          ⚡ 分界线：视听资料只能在<b>物理空间</b>传播；电子数据可在<b>虚拟空间</b>无限制快速传播
        </div>
      </div>
    </GalleryShell>
  );
};
