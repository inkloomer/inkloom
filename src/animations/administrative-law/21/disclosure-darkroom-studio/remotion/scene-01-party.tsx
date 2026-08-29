import React from "react";
import { useCurrentFrame } from "remotion";
import { DarkroomShell, Print, Tray, enter } from "./theme";

export const PartyAndDefendantTraysScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-standing-rule" data-final-knowledge="defendant-disclosure-org" data-final-knowledge="defendant-archival-split" */
  const f = useCurrentFrame();
  return (
    <DarkroomShell code="01" title="诉讼当事人显影" subtitle="原告资格 · 被告确定 · 档案分界">
      <div
        data-layout="party-defendant-tray-pair"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="plaintiff-standing-and-defendant-rules-develop-in-two-trays,archival-custody-splits-applicable-law"
        data-text-treatments="label-block,chip,thin-underline"
        data-focal-rule="原告资格与被告确定规则"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div style={{ display: "flex", gap: 18, flex: 1 }}>
          <Tray title="原告资格" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
            <Print style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.5 }}>
              ✓ 利害关系人：认为信息公开/不予公开行为<b>侵害其合法权益</b>
            </Print>
            <Print style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55, background: "linear-gradient(170deg, #e8cfc4 0%, #d9bcae 100%)" }}>
              <b style={{ color: "#8a3a34" }}>✕ 主动公开而未主动公开</b>：公共利益受损而非个人权利受损 ➔ 起诉人<b>不具有原告资格</b>，法院不受理
              <br />
              ➔ 应告知先向行政机关申请；对答复/逾期不答复不服可复议或诉讼
            </Print>
          </Tray>
          <Tray title="被告确定" tone="#c99a3e" style={{ flex: 1.25, display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
            <Print style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>
              • 主动公开行为 ➔ <b>公开该信息</b>的行政机关
              <br />
              • 依申请公开 ➔ 作出<b>答复</b>的机关；逾期未答复 ➔ <b>收到申请</b>的机关
              <br />
              • 政府指定信息公开机构以<b>自己名义</b>作出行为 ➔ 该机构为被告
            </Print>
            <Print style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>
              例：A 从 B 获取信息，左某向 A 申请 —— ① A 拒绝 ➔ 被告 A；② B 拒绝 ➔ 被告 B；③ A、B 均逾期 ➔ 被告 A
            </Print>
          </Tray>
        </div>
        <div
          data-final-knowledge="defendant-archival-split"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            background: "rgba(176,64,46,.10)",
            border: `2.5px dashed ${"#b0402e"}`,
            borderRadius: 10,
            padding: "12px 22px",
            fontSize: 21,
            fontWeight: 800,
            color: "#f3eedd",
            ...enter(f, 40),
          }}
        >
          <span>
            🗄️ 档案分界：由被告<b>档案机构/工作人员</b>保管 ➔ 适用政府信息公开条例；<b>已移交国家档案馆</b> ➔ 依档案法
          </span>
        </div>
      </div>
    </DarkroomShell>
  );
};
