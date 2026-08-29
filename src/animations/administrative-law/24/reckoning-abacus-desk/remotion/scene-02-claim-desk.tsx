import React from "react";
import { AbsoluteFill } from "remotion";
import { T, AbacusShell, PaperPanel, PanelTitle, PanelBody, DeskChip, Enter } from "./theme";

export const AdministrativeClaimDeskScene: React.FC = () => (
  <AbacusShell sceneNo="二十四·贰" sceneTitle="行政赔偿 · 三栏赔偿台" sceneTag="ADMIN-CLAIM-DESK">
    <AbsoluteFill
      data-layout="administrative-claim-desk"
      data-visual-anchor="flow-path"
      data-text-treatments="label-block,stamp,chip"
      data-visual-grammar="scope-obligor-procedure-columns-run-left-to-right,dual-track-claims-split-into-joined-and-standalone,burden-reversal-seal-presses-the-desk-edge"
      data-focal-channels="connector,contrast,locator"
      data-focal-rule="从范围读到义务机关再读双轨程序，倒置印压台角"
    >
      {/* Static audit inventory:
        data-final-knowledge="admin-compensation-scope"
        data-final-knowledge="admin-obligor-rules"
        data-final-knowledge="admin-dual-procedure"
        data-final-knowledge="admin-burden-reversal"
      */}
      <div style={{ display: "flex", gap: 20, height: "80%" }}>
        <Enter data-final-knowledge="admin-compensation-scope" delay={0} style={{ flex: 1.05, display: "flex" }}>
          <PaperPanel style={{ flex: 1 }}>
            <PanelTitle>赔什么 · 范围</PanelTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <PanelBody size={16}><b>人身权</b>：违法行政拘留、违法强制措施；非法拘禁；殴打虐待（含唆使放纵）；违法使用武器警械</PanelBody>
              <PanelBody size={16}><b>财产权</b>：违法行政处罚、违法强制措施、违法征收征用、其他致害行为</PanelBody>
              <PanelBody size={16}><b>不作为</b>：不履行/拖延履行法定职责致害；定数额时考虑其作用</PanelBody>
              <div style={{ height: 4 }} />
              <PanelBody size={16} >
                <b>不赔</b>：与职权无关的个人行为；因公民法人自己行为致害；法律规定的其他情形
              </PanelBody>
            </div>
          </PaperPanel>
        </Enter>
        <Enter data-final-knowledge="admin-obligor-rules" delay={9} style={{ flex: 1.05, display: "flex" }}>
          <PaperPanel style={{ flex: 1 }}>
            <PanelTitle>谁来赔 · 义务机关</PanelTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <PanelBody size={16}>授权组织致害 → <b>被授权组织</b>；委托组织个人 → <b>委托机关</b></PanelBody>
              <PanelBody size={16}>侵权机关被撤销 → 继续行使职权的机关或撤销决定机关</PanelBody>
              <PanelBody size={16}>派出机构 → 所属行政机关；非诉执行违法 → <b>申请执行的行政机关</b></PanelBody>
              <PanelBody size={16}>原行为 + <b>复议加重</b> → 原机关与复议机关<b>共同被告，按份责任</b>（“亲爷俩明算账”：拘留10日原机关赔、多出的5日复议机关赔）；坚持诉其一 → 被诉者为被告，另一机关追加为第三人</PanelBody>
            </div>
          </PaperPanel>
        </Enter>
        <Enter data-final-knowledge="admin-dual-procedure" delay={18} style={{ flex: 1.1, display: "flex" }}>
          <PaperPanel style={{ flex: 1 }}>
            <PanelTitle>怎么赔 · 双轨程序</PanelTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ background: "rgba(201,128,58,0.18)", border: "2px solid #9c4a33", borderRadius: 8, padding: "8px 12px" }}>
                <DeskChip tone="brass">一并赔偿</DeskChip>
                <PanelBody size={16}>提起行政诉讼时一并提出；未提出而法院认为可能存在赔偿的，<b>应当告知</b>可一并提起</PanelBody>
              </div>
              <div style={{ background: "rgba(201,128,58,0.18)", border: "2px solid #9c4a33", borderRadius: 8, padding: "8px 12px" }}>
                <DeskChip tone="brass">单独赔偿</DeskChip>
                <PanelBody size={16}>前提：<b>行为已被确认违法</b>（义务机关确认/有权机关撤销变更确认/被认定渎职滥权）→ 先向义务机关提出（<b>先行处理</b>）→ 2个月未答复或对决定不服 → 提起行政赔偿诉讼</PanelBody>
              </div>
              <PanelBody size={15}>行为未被确认违法而来诉 → 法院<b>视为一并提起</b>（“踢”到一并轨道）</PanelBody>
              <PanelBody size={15}>殴打等<b>事实行为</b>不可一并诉讼，只能走单独赔偿</PanelBody>
            </div>
          </PaperPanel>
        </Enter>
      </div>
      <Enter data-final-knowledge="admin-burden-reversal" delay={34} style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            border: "3px solid #b23a24",
            color: "#b23a24",
            borderRadius: 8,
            padding: "6px 18px",
            background: "rgba(178,58,36,0.1)",
            transform: "rotate(-2deg)",
          }}
        >
          <span style={{ fontFamily: "var(--inkloom-animation-title, serif)", fontSize: 21, fontWeight: 700, letterSpacing: 3 }}>
            举证倒置
          </span>
          <span style={{ fontSize: 18, color: "#b23a24", fontWeight: 700 }}>
            限制人身自由期间身体受到伤害 → 由义务机关就因果关系举证
          </span>
        </div>
      </Enter>
    </AbsoluteFill>
  </AbacusShell>
);
