import React from "react";
import { useCurrentFrame } from "remotion";
import { DockPanel, SailCard, enter } from "./theme";

export const VerdictDockBerthsScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="verdict-unilateral-change" data-final-knowledge="verdict-non-performance" data-final-knowledge="verdict-invalid-switch" */
  const f = useCurrentFrame();
  return (
    <div
      data-layout="verdict-dock-berths"
      data-visual-anchor="flow-path"
      data-visual-grammar="unilateral-change-and-non-performance-moor-at-separate-berths,invalid-switch-prints-the-want-to-change-mnemonic"
      data-text-treatments="label-block,stamp,thin-underline"
      data-focal-rule="行政协议判决形式双轨"
      data-focal-channels="contrast,connector,enclosure"
      style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", gap: 18, flex: 1 }}>
        {/* 泊位1：单方变更解除（类似具体行政行为） */}
        <DockPanel edge="#3f8f8b" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, ...enter(f, 4, -24, 0) }}>
          <div style={{ fontSize: 22, fontWeight: 950, color: "#3f8f8b", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
            泊位① 被告单方变更、解除协议（类似具体行政行为判决）
          </div>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.5 }}>
            <b style={{ color: "#5f7040" }}>合法：</b>判决驳回原告诉讼请求；给原告造成损失的，判决被告予以<b>补偿</b>
          </SailCard>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.5 }}>
            <b style={{ color: "#b5432f" }}>违法：</b>判决撤销或部分撤销，可责令重新作出；可判决被告<b>继续履行</b>、采取补救措施；造成损失的判决<b>赔偿</b>
          </SailCard>
        </DockPanel>
        {/* 泊位2：未履约（类似民事合同） */}
        <DockPanel edge="#c97a5c" style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 10, ...enter(f, 14, 24, 0) }}>
          <div style={{ fontSize: 22, fontWeight: 950, color: "#c97a5c", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>
            泊位② 被告未履约行为（类似民事合同判决）
          </div>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.5 }}>
            <b style={{ color: "#5f7040" }}>合法：</b>判决驳回原告诉讼请求；原告履行不能/费用明显增加/遭受损失的，判决被告予以<b>补偿</b>
          </SailCard>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.5 }}>
            <b style={{ color: "#b5432f" }}>违法：</b>判决被告<b>继续履行</b>并明确具体内容；无法履行或无实际意义的 ➔ 采取补救措施；造成损失判决<b>赔偿</b>（约定违约金/定金条款的应予支持）
            <br />
            <b>预期违约</b>：被告明确表示或以行为表明不履行，原告在履行期届满前起诉请求承担违约责任的，<b>应予支持</b>
          </SailCard>
        </DockPanel>
      </div>
      <DockPanel
        data-final-knowledge="verdict-invalid-switch"
        tone="rgba(201,151,63,.10)"
        edge="#c9973f"
        style={{ padding: "13px 22px", display: "flex", alignItems: "center", gap: 18, ...enter(f, 48) }}
      >
        <span
          style={{
            padding: "5px 14px",
            background: "#c9973f",
            color: "#1d2340",
            fontSize: 19,
            fontWeight: 950,
            borderRadius: 4,
            whiteSpace: "nowrap",
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
          }}
        >
          判决转换
        </span>
        <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: "#f3eedd" }}>
          原告以<b>违约</b>为由请求担责，法院审理认为协议<b>无效</b>的 ➔ 释明后按变更诉求判<b>确认无效</b>；因被告行为致无效的可判<b>赔偿</b>；释明后拒绝变更 ➔ 判决驳回诉求
        </span>
        <span
          style={{
            padding: "5px 14px",
            border: `2.5px solid ${"#c96a5c"}`,
            color: "#c96a5c",
            fontSize: 19,
            fontWeight: 950,
            borderRadius: 4,
            whiteSpace: "nowrap",
            fontFamily: "var(--inkloom-animation-title, sans-serif)",
            flexShrink: 0,
          }}
        >
          想变就变，不变就败
        </span>
      </DockPanel>
    </div>
  );
};
