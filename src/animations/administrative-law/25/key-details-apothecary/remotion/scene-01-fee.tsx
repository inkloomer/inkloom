import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, CinnabarSeal, DrawerFace, HerbSlip, ThinUnderline, enter } from "./theme";

export const FeeDrawerTriadScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="fee-free-drawer" data-final-knowledge="fee-chargeable-drawer" data-final-knowledge="fee-partial-drawer" data-final-knowledge="fee-license-statutory-exception" data-final-knowledge="fee-information-processing-fee" data-stateful-source="herb-slip-fee-stream" data-stateful-terminal="herb-slip-fee-stream" */
  const f = useCurrentFrame();
  const drawers = [
    {
      key: "fee-free-drawer",
      label: "不收费",
      tone: "mugwort" as const,
      hint: "申请 · 听证 · 查封 · 赔偿 · 复议",
      items: [
        "行政许可申请格式文本",
        "听证",
        "查封、扣押",
        "国家赔偿申请",
        "行政复议申请",
      ],
    },
    {
      key: "fee-chargeable-drawer",
      label: "可收费",
      tone: "cinnabar" as const,
      hint: "费用由谁承担，是考点",
      items: [
        "复议鉴定费",
        "行政强制执行的合理费用",
        "行政诉讼案件受理费",
        "证人出庭的必要费用与误工损失，由败诉方承担",
        "申请法院责令行政机关提交证据的费用，由申请人预付",
      ],
    },
    {
      key: "fee-partial-drawer",
      label: "部分收费",
      tone: "brass" as const,
      hint: "原则免费 + 法定例外",
      items: [
        "行政许可的实施与监督：原则不收费",
        "政府信息公开：原则不收费",
      ],
    },
  ];
  return (
    <CabinetShell code="01" title="收费三格抽屉" subtitle="不收费 · 可收费 · 部分收费，一格一查">
      <div
        data-layout="three-fee-drawer-wall"
        data-visual-anchor="boundary"
        data-visual-grammar="three-fee-drawers-split-the-charge-question,free-drawer-holds-application-and-hearing-items,chargeable-drawer-holds-cost-shifting-items,partial-drawer-keeps-its-principle-and-statutory-exception"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="不收费为原则，收费须有明确依据"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 18 }}
      >
        <div data-stateful-terminal="herb-slip-fee-stream" style={{ flex: 1, display: "flex", gap: 22 }}>
          {drawers.map((d, i) => (
            <div
              key={d.key}
              data-final-knowledge={d.key}
              style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, ...enter(f, 6 + i * 14, 0, 30) }}
            >
              <DrawerFace label={d.label} tone={d.tone} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                {d.items.map((item, j) => (
                  <HerbSlip
                    key={j}
                    data-stateful-source="herb-slip-fee-stream"
                    style={{
                      fontSize: 22,
                      lineHeight: 1.4,
                      fontWeight: 700,
                      ...enter(f, 26 + i * 14 + j * 9, 0, 16),
                    }}
                  >
                    <span
                      style={{
                        minWidth: 30,
                        height: 28,
                        borderRadius: 3,
                        background: "#241c15",
                        color: "#f3ead7",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 15,
                        fontWeight: 950,
                        fontFamily: "var(--inkloom-animation-mono, monospace)",
                        flexShrink: 0,
                      }}
                    >
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </HerbSlip>
                ))}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#c99a4e",
                  letterSpacing: 1,
                  paddingLeft: 4,
                  ...enter(f, 70 + i * 14, 0, 12),
                }}
              >
                索引 · {d.hint}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            padding: "16px 22px",
            background: "rgba(27,18,11,0.72)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 96, 0, 20),
          }}
        >
          <CinnabarSeal label="原则不收费" delay={104} rotation={-2} />
          <div
            data-final-knowledge="fee-license-statutory-exception"
            style={{ fontSize: 22, lineHeight: 1.5, fontWeight: 800, color: "#efe3cd" }}
          >
            行政许可的实施与监督
            <ThinUnderline tone="#6d8f5e">不得收费</ThinUnderline>
            ，法律、行政法规另有规定的除外
          </div>
          <div
            data-final-knowledge="fee-information-processing-fee"
            style={{
              marginLeft: "auto",
              fontSize: 22,
              lineHeight: 1.5,
              fontWeight: 800,
              color: "#efe3cd",
              textAlign: "right",
            }}
          >
            信息公开数量、频次明显超过合理范围的，可收取
            <ThinUnderline tone="#c99a4e">信息处理费</ThinUnderline>
          </div>
        </div>
      </div>
    </CabinetShell>
  );
};
