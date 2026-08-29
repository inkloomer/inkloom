import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, DrawerFace, HerbSlip, IndexTag, T, enter } from "./theme";

type SealItem = { n: number; text: string; seal: "agency" | "court" | "signature" };

export const SealDrawerQuartetScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="seal-admin-procedure-drawer" data-final-knowledge="seal-review-procedure-drawer" data-final-knowledge="seal-litigation-procedure-drawer" data-final-knowledge="seal-compensation-execution-drawer" data-final-knowledge="seal-authority-legend" data-stateful-source="herb-slip-seal-stream" data-stateful-terminal="herb-slip-seal-stream" */
  const f = useCurrentFrame();
  const sealColor: Record<SealItem["seal"], string> = {
    agency: T.cinnabar,
    court: T.indigo,
    signature: T.brassDeep,
  };
  const drawers: { key: string; label: string; tone: "cinnabar" | "indigo" | "mugwort" | "brass"; items: SealItem[] }[] = [
    {
      key: "seal-admin-procedure-drawer",
      label: "行政程序文书",
      tone: "cinnabar",
      items: [
        { n: 1, text: "国务院部门、地方政府对行政法规的书面意见", seal: "agency" },
        { n: 2, text: "普通程序的行政处罚决定书", seal: "agency" },
        { n: 3, text: "受理或不予受理行政许可申请的书面凭证", seal: "agency" },
        { n: 4, text: "行政许可证件", seal: "agency" },
        { n: 5, text: "治安管理处罚决定书", seal: "agency" },
      ],
    },
    {
      key: "seal-review-procedure-drawer",
      label: "复议程序文书",
      tone: "mugwort",
      items: [
        { n: 6, text: "行政复议决定书", seal: "agency" },
        { n: 7, text: "行政复议调解书", seal: "agency" },
      ],
    },
    {
      key: "seal-litigation-procedure-drawer",
      label: "诉讼程序文书",
      tone: "indigo",
      items: [
        { n: 8, text: "行政诉讼裁定书：审判人员、书记员署名并盖法院印章", seal: "court" },
        { n: 9, text: "行政诉讼调解书：审判人员、书记员署名并盖法院印章", seal: "court" },
        { n: 10, text: "负责人不能出庭的情况说明：盖行政机关印章或主要负责人签字", seal: "signature" },
        { n: 11, text: "委托工作人员出庭的授权委托书", seal: "agency" },
      ],
    },
    {
      key: "seal-compensation-execution-drawer",
      label: "赔偿与执行文书",
      tone: "brass",
      items: [
        { n: 12, text: "当面递交赔偿申请的书面凭证：盖专用印章并注明收讫日期", seal: "agency" },
        { n: 13, text: "国家赔偿决定书", seal: "court" },
        { n: 14, text: "强制执行申请书：负责人签名并加盖行政机关印章", seal: "signature" },
      ],
    },
  ];
  return (
    <CabinetShell code="04" title="印章四屉" subtitle="行政 · 复议 · 诉讼 · 赔偿执行，十四份文书各归其格">
      <div
        data-layout="four-stage-seal-drawer-grid"
        data-visual-anchor="document-fork"
        data-visual-grammar="four-procedure-stages-file-into-four-seal-drawers,each-document-carries-either-the-agency-seal-or-the-court-seal,the-execution-application-adds-the-head-signature-beside-the-agency-seal,fourteen-numbered-documents-stay-visible-in-their-own-drawer"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="诉讼裁判类文书盖法院印章，行政决定类文书盖行政机关印章"
        data-focal-channels="enclosure,contrast,connector"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div
          data-final-knowledge="seal-authority-legend"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            padding: "10px 18px",
            background: "rgba(27,18,11,0.6)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 4, 0, -14),
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 950, color: T.brass, letterSpacing: 2 }}>章型索引</span>
          {[
            { c: T.cinnabar, t: "行政机关专用印章" },
            { c: T.indigo, t: "人民法院印章" },
            { c: T.brassDeep, t: "负责人签名或签字认可" },
          ].map((l, i) => (
            <span
              key={l.t}
              style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 22, fontWeight: 850, color: "#efe3cd", ...enter(f, 12 + i * 8, 0, 8) }}
            >
              <span style={{ width: 16, height: 16, borderRadius: 3, background: l.c, display: "inline-block" }} />
              {l.t}
            </span>
          ))}
        </div>

        <div
          data-stateful-terminal="herb-slip-seal-stream"
          style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 18 }}
        >
          {drawers.map((d, i) => (
            <div
              key={d.key}
              data-final-knowledge={d.key}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "12px 14px",
                background: "rgba(74,50,34,0.42)",
                border: "2px solid #7a5639",
                borderRadius: 5,
                ...enter(f, 20 + i * 12, i % 2 === 0 ? -22 : 22, 0),
              }}
            >
              <DrawerFace label={d.label} tone={d.tone} />
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignContent: "start" }}>
                {d.items.map((it, j) => (
                  <HerbSlip
                    key={it.n}
                    data-stateful-source="herb-slip-seal-stream"
                    style={{
                      alignItems: "stretch",
                      gap: 10,
                      padding: "8px 12px",
                      fontSize: 22,
                      lineHeight: 1.4,
                      fontWeight: 700,
                      ...enter(f, 34 + i * 12 + j * 8, 0, 14),
                    }}
                  >
                    <span style={{ width: 5, borderRadius: 3, background: sealColor[it.seal], flexShrink: 0 }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 950,
                          color: T.inkSoft,
                          fontFamily: "var(--inkloom-animation-mono, monospace)",
                        }}
                      >
                        NO.{String(it.n).padStart(2, "0")}
                      </span>
                      <span>{it.text}</span>
                    </span>
                  </HerbSlip>
                ))}
              </div>
              <IndexTag
                label={`共 ${d.items.length} 份`}
                tone={T.wood}
                style={{ fontSize: 20, alignSelf: "flex-start", ...enter(f, 76 + i * 12, 0, 8) }}
              />
            </div>
          ))}
        </div>
      </div>
    </CabinetShell>
  );
};
