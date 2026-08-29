import React from "react";
import { AbsoluteFill } from "remotion";
import { T, AbacusShell, PaperPanel, PanelTitle, PanelBody, DeskChip, Enter } from "./theme";

const POSTPOSITION: { k: string; v: string }[] = [
  { k: "错拘", v: "决定拘留的机关（公安 / 检察院）" },
  { k: "错捕", v: "决定逮捕的机关（检察院 / 法院）；既错拘又错捕 → 由逮捕机关赔" },
  { k: "一审有罪，二审改判无罪 / 发回重审后改判无罪 / 检察院撤诉 / 退查后不起诉撤案", v: "一审法院" },
  { k: "再审改判无罪", v: "作出原生效判决的法院" },
];

export const JudicialCompensationGateScene: React.FC = () => (
  <AbacusShell sceneNo="二十四·叁" sceneTitle="司法赔偿 · 两步走的闸门" sceneTag="JUDICIAL-GATE">
    <AbsoluteFill
      data-layout="judicial-compensation-gate"
      data-visual-anchor="timeline-gate"
      data-text-treatments="label-block,chip,stamp"
      data-visual-grammar="nonlitigation-two-step-gates-run-across-the-top,postposition-principle-panel-lists-the-last-decision-maker,exemption-and-limitation-slots-close-the-gate-row"
      data-focal-channels="connector,locator,contrast"
      data-focal-rule="先读两步走闸门，再读后置名单，末读免罪与时效槽"
    >
      {/* Static audit inventory:
        data-final-knowledge="judicial-nonlitigation-steps"
        data-final-knowledge="judicial-obligor-postposition"
        data-final-knowledge="exemption-split-rule"
        data-final-knowledge="limitation-rules"
      */}
      <Enter data-final-knowledge="judicial-nonlitigation-steps" delay={0} style={{ display: "flex", gap: 20 }}>
        <PaperPanel style={{ flex: 1.08 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <DeskChip tone="seal">义务机关非法院</DeskChip>
            <span style={{ fontSize: 16, color: "rgba(43,29,18,0.75)" }}>非诉两步走</span>
          </div>
          <PanelBody size={16}>
            向义务机关申请（<b>3个月</b>内作决定，经院长批准可延3个月）→ 不服 → 向其<b>上一级机关复议</b> → 复议不服 → <b>向法院申请作出决定</b>（非诉讼）
          </PanelBody>
        </PaperPanel>
        <PaperPanel style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <DeskChip tone="seal">义务机关是法院</DeskChip>
            <span style={{ fontSize: 16, color: "rgba(43,29,18,0.75)" }}>一步申请赔委会</span>
          </div>
          <PanelBody size={16}>
            直接向本院<b>赔偿委员会</b>申请：3人以上单数；不公开、书面审查（必要时质证）；<b>申请人可委托律师</b>，机关只能委托自身工作人员；可就方式项目数额协商
          </PanelBody>
        </PaperPanel>
      </Enter>
      <Enter data-final-knowledge="judicial-obligor-postposition" delay={12} style={{ marginTop: 14, display: "flex" }}>
        <PaperPanel style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
            <PanelTitle>义务机关 · 后置原则</PanelTitle>
            <span style={{ fontSize: 16, color: "#9c4a33", fontWeight: 700 }}>
              谁最后作有罪决定，谁赔偿（原则：谁作谁赔）
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {POSTPOSITION.map((p) => (
              <PanelBody key={p.k} size={16}>
                <b>{p.k}</b> → {p.v}
              </PanelBody>
            ))}
          </div>
        </PaperPanel>
      </Enter>
      <div style={{ display: "flex", gap: 20, marginTop: 14, flex: 1 }}>
        <Enter data-final-knowledge="exemption-split-rule" delay={22} style={{ flex: 1, display: "flex" }}>
          <PaperPanel style={{ flex: 1, background: "linear-gradient(180deg, #f6e3d6, #eccfbc)", border: "2px dashed #b23a24" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <DeskChip tone="seal">免罪关了</DeskChip>
              <span style={{ fontFamily: "var(--inkloom-animation-title, serif)", fontSize: 19, fontWeight: 700, color: "#b23a24" }}>
                分前后，赔后不赔前
              </span>
            </div>
            <PanelBody size={15}>
              免罪 = 未成年 / 精神病人 / 刑诉法第16条不追责情形（<b>显时特告死</b>）；以<b>判决生效</b>为界：生效前羁押不赔，生效后仍在押的赔
            </PanelBody>
          </PaperPanel>
        </Enter>
        <Enter data-final-knowledge="limitation-rules" delay={30} style={{ flex: 1.15, display: "flex" }}>
          <PaperPanel style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <DeskChip tone="brass">请求时效</DeskChip>
              <span style={{ fontFamily: "var(--inkloom-animation-mono, monospace)", fontSize: 20, fontWeight: 800, color: "#2b1d12" }}>
                2 年
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <PanelBody size={15}>起算：人身自由 → <b>收到</b>无罪等法律文书之日（非作出之日）；生命健康 → 知道或应当知道损害结果之日</PanelBody>
              <PanelBody size={15}><b>被羁押期间不计入</b>；申请确认违法或寻求救济的期间不计入</PanelBody>
              <PanelBody size={15}>最后<b>6个月</b>内因不可抗力等中止 → 原因消除满6个月届满；机关不得以时效已过要求返还已赔金额；法院不得主动适用时效</PanelBody>
            </div>
          </PaperPanel>
        </Enter>
      </div>
    </AbsoluteFill>
  </AbacusShell>
);
