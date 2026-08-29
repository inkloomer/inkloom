import React from "react";
import { useCurrentFrame } from "remotion";
import { DarkroomShell, Print, Tray, enter } from "./theme";

export const BurdenDevelopingPanScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="burden-defendant-list" data-final-knowledge="burden-plaintiff-list" data-final-knowledge="evidence-supplement-court" */
  const f = useCurrentFrame();
  const defRows = [
    ["公开/不予公开行为合法性", ""],
    ["已公开的事实", "＋已告知获取方式途径"],
    ["因公共利益公开涉隐私信息", "公共利益理由＋重大影响"],
    ["内部事务信息", "人事管理、后勤管理、内部工作流程"],
    ["过程性信息", "处理决定前的讨论记录、过程稿、磋商信函、请示报告"],
    ["执法案卷信息", "当事人信息、调查笔录、询问笔录"],
    ["信息不存在", "已尽合理检索义务"],
    ["国家秘密", "密级标识、保密期限等证明"],
    ["三安全一稳定", "不利影响证据或合理说明"],
  ];
  const plRows = [
    "曾向行政机关提出申请",
    "信息涉及其商业秘密/个人隐私",
    "公开或不公开行为可能损害其合法权益",
  ];
  return (
    <DarkroomShell code="03" title="举证责任显影盘" subtitle="被告证合法性 · 原告证三项 · 法院可要求补充">
      <div
        data-layout="burden-developing-pan"
        data-visual-anchor="document-fork"
        data-visual-grammar="defendant-and-plaintiff-burdens-develop-side-by-side,court-supplement-power-prints-at-the-pan-edge"
        data-text-treatments="label-block,thin-underline,chip"
        data-focal-rule="公开案件举证责任分配"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 22 }}
      >
        <Tray title="被告举证（证合法性）" style={{ flex: 1.45, display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
          {defRows.map((r, i) => (
            <Print
              key={i}
              style={{
                fontSize: 18,
                fontWeight: 700,
                lineHeight: 1.4,
                padding: "7px 12px",
                display: "flex",
                gap: 10,
                ...enter(f, 8 + i * 6, -14, 0),
              }}
            >
              <b style={{ color: "#8a3a34", whiteSpace: "nowrap" }}>{r[0]}</b>
              {r[1] && <span style={{ color: "#5c5347" }}>{r[1]}</span>}
            </Print>
          ))}
        </Tray>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <Tray title="原告举证" tone="#c99a3e" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {plRows.map((r, i) => (
              <Print
                key={i}
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 1.45,
                  padding: "9px 14px",
                  ...enter(f, 60 + i * 8, 14, 0),
                }}
              >
                {r}
              </Print>
            ))}
          </Tray>
          <div
            data-final-knowledge="evidence-supplement-court"
            style={{
              background: "rgba(201,154,62,.10)",
              border: `2.5px dashed ${"#c99a3e"}`,
              borderRadius: 10,
              padding: "14px 20px",
              fontSize: 20.5,
              fontWeight: 800,
              color: "#f3eedd",
              lineHeight: 1.55,
              ...enter(f, 84),
            }}
          >
            🧪 证据补充：法院认为可能危及<b>三安全一稳定</b>的，有权要求当事人<b>提供或补充证据</b>
          </div>
        </div>
      </div>
    </DarkroomShell>
  );
};
