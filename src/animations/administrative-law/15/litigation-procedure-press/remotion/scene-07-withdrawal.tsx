import React from "react";
import { useCurrentFrame } from "remotion";
import { PressShell, ProofCard, RedInkStamp, TypeSort, enter } from "./theme";

export const WithdrawalAbsenceSortingScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <PressShell code="07" title="撤诉与缺席判决 · 分拣盘" subtitle="一改二撤三裁 · 视为撤诉 · 缺席判决">
      <div
        data-layout="withdrawal-absence-sorting-tray"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="withdrawal-letters-sort-into-change-consent-and-ruling-pigeonholes,deemed-withdrawal-and-absence-judgment-end-in-distinct-trays"
        data-text-treatments="label-block,stamp,external-negation"
        data-focal-rule="撤诉与缺席判决规则"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 26 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <ProofCard
            data-final-knowledge="withdrawal-three-rules"
            style={{ padding: "14px 20px", ...enter(f, 4, -24, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="改" tone="red" size={40} />
              <span style={{ fontSize: 22, fontWeight: 950 }}>一改（申请撤诉的前提动态）</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              • 动因：被告自主改变 / 法院建议改变（时间：一审、二审、再审均可）
              <br />
              • 实质改变：改变行为结果、事实证据、规范依据并影响定性
              <br />
              • 视为改变：履行法定职责、采取补救补偿；对行政裁决案件书面认可原告与第三人达成的和解协议
            </div>
          </ProofCard>
          <ProofCard style={{ padding: "14px 20px", ...enter(f, 14) }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="撤" tone="lead" size={40} />
              <span style={{ fontSize: 22, fontWeight: 950 }}>二撤 · 三裁</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              • 二撤：出于原告真实意思表示撤回起诉（法庭辩论终结后申请撤诉法院可准许，涉国家/社会公共利益除外）
              <br />
              • 三裁条件：被诉行为改变＋不违法违规、不越权弃权、不侵犯法益＋书面告知法院＋第三人无异议
              <br />
              • 三裁结果：准予撤诉 / 不予撤诉；不能即时或一次性履行的，可<b style={{ color: "#8a2f22" }}>裁定准许撤诉</b>，也可<b>裁定中止审理</b>
              <br />
              • 旧案审不审看撤不撤，新案审不审看诉没诉；旧不撤新又诉 ➔ <b>合并审理</b>
            </div>
          </ProofCard>
          <ProofCard
            data-final-knowledge="withdrawal-consequence"
            style={{ padding: "14px 20px", ...enter(f, 24) }}
          >
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 6, color: "#8a2f22" }}>撤诉后果</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>
              撤诉/视为撤诉后<b>不得以同一事实和理由重新起诉</b>（不缴诉讼费的除外）；民诉一审撤诉后可再次起诉
            </div>
          </ProofCard>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <ProofCard
            data-final-knowledge="deemed-withdrawal-cases"
            style={{ padding: "14px 20px", ...enter(f, 10, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="视" tone="lead" size={40} />
              <span style={{ fontSize: 22, fontWeight: 950 }}>视为撤诉（原告三种情形）</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6 }}>
              ① 经传票传唤拒不到庭
              <br />
              ② 未经许可中途退庭
              <br />
              ③ <b>不交诉讼费</b>
            </div>
          </ProofCard>
          <ProofCard
            data-final-knowledge="absence-judgment-rules"
            style={{ padding: "14px 20px", flex: 1, ...enter(f, 20, 26, 0) }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <TypeSort label="缺" tone="red" size={40} />
              <span style={{ fontSize: 22, fontWeight: 950 }}>缺席判决</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6 }}>
              • 针对被告：经传票传唤无正当理由拒不到庭或未经许可中途退庭 ➔ 可缺席判决；法院可将情况<b>公告</b>，并向<b>监察机关、上一级机关</b>提司法建议（处分主要负责人/直接责任人）
              <br />
              • 针对原告/上诉人：申请撤诉不准许，经合法传唤无正当理由不到庭或未经许可中途退庭 ➔ 缺席判决
            </div>
          </ProofCard>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RedInkStamp label="第三人拒不到庭 ➔ 不影响案件审理" delay={64} rotation={-2} />
          </div>
        </div>
      </div>
    </PressShell>
  );
};
