import React from "react";
import { useCurrentFrame } from "remotion";
import { DockPanel, SailCard, enter } from "./theme";

export const ReviewMastSplitScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="review-dual-track" data-final-knowledge="mediation-allowed" data-final-knowledge="burden-dual-track" data-final-knowledge="law-application-old-new" */
  const f = useCurrentFrame();
  return (
    <div
      data-layout="review-mast-split"
      data-visual-anchor="document-fork"
      data-visual-grammar="legality-and-contract-review-split-across-two-masts,old-case-new-case-split-at-may-first-2015"
      data-text-treatments="label-block,chip,thin-underline"
      data-focal-rule="审查、调解、举证与法律适用双轨"
      data-focal-channels="contrast,connector,enclosure"
      style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", gap: 20, flex: 1 }}>
        {/* 行政性桅 */}
        <DockPanel edge="#3f8f8b" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, ...enter(f, 4, -24, 0) }}>
          <div style={{ fontSize: 24, fontWeight: 950, color: "#3f8f8b", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>［行政性］</div>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.55 }}>
            <b>合法性审查</b>：订立、履行、变更、解除协议是否具有法定职权、是否滥用职权、适用法律法规是否正确、是否遵守法定程序、是否明显不当、是否履行相应法定职责
          </SailCard>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.55 }}>
            <b>举证</b>：被告对法定职权、法定程序、相应职责及订立/履行/变更/解除协议等行为的<b>合法性</b>承担举证责任
          </SailCard>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.55 }}>
            <b>起诉期</b>：单方变更解除 ➔ 适用行政诉讼起诉期限
          </SailCard>
        </DockPanel>
        {/* 合同性桅 */}
        <DockPanel edge="#c97a5c" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, ...enter(f, 12, 24, 0) }}>
          <div style={{ fontSize: 24, fontWeight: 950, color: "#c97a5c", fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>［合同性］</div>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.55 }}>
            <b>合约性审查</b>：原告认为被告未依法或未按约定履行的，针对其诉求审查被告是否具有相应义务或履行相应义务
          </SailCard>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.55 }}>
            <b>举证</b>："谁主张，谁举证"——原告主张撤销/解除的，对事由举证；履行争议由<b>负有履行义务的当事人</b>举证
            <br />
            ⚡ 涉"合法性"问题一律由<b>被告</b>举证
          </SailCard>
          <SailCard style={{ padding: "12px 16px", fontSize: 19.5, fontWeight: 700, lineHeight: 1.55 }}>
            <b>起诉期</b>：不履约 ➔ 参照民事<b>诉讼时效</b>
          </SailCard>
        </DockPanel>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <SailCard
          data-final-knowledge="mediation-allowed"
          style={{ flex: 1, padding: "13px 20px", fontSize: 20, fontWeight: 700, lineHeight: 1.55, ...enter(f, 40) }}
        >
          <b style={{ color: "#8a6d2f" }}>调解 ⚖</b>：行政协议案件<b>可以依法调解</b>，但应遵循自愿、合法原则，不得损害国家利益、社会公共利益和他人合法权益
        </SailCard>
        <SailCard
          data-final-knowledge="law-application-old-new"
          style={{ flex: 1.3, padding: "13px 20px", fontSize: 20, fontWeight: 700, lineHeight: 1.55, ...enter(f, 48) }}
        >
          <b style={{ color: "#8a6d2f" }}>法律适用</b>：程序适用行诉法，无规定参照民诉法；实体可用行政法规范，也可参照民事合同规定。
          新旧法：<b>"老案老办法，新案新办法"</b>——以 2015 年 5 月 1 日（新行诉法生效日）为界
        </SailCard>
      </div>
    </div>
  );
};
