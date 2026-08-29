import React from "react";
import { AbsoluteFill } from "remotion";
import { T, BambooShell, Slip, SlipTitle, SlipBody, TagChip, CordRule, Enter } from "./theme";

const GATES: { d: string; t: string; b: string }[] = [
  { d: "3日", t: "发送副本", b: "受理之日起3日内将申请书副本发送被申请人" },
  { d: "5日", t: "书面答复", b: "被申请人收到后5日内答复并提交证据依据" },
  { d: "30日", t: "审结", b: "受理之日起30日内作出复议决定" },
];

export const SummarySlipsDrawerScene: React.FC = () => (
  <BambooShell sceneNo="二十三·叁" sceneTitle="简易程序 · 拉开的抽屉" sceneTag="SUMMARY-DRAWER">
    <AbsoluteFill
      data-layout="summary-slips-drawer"
      data-visual-anchor="timeline-gate"
      data-text-treatments="label-block,chip,stamp"
      data-visual-grammar="statutory-and-agreed-summary-slips-slide-open-the-left-drawer,three-gate-deadline-timeline-runs-across-the-right-shelf,conversion-note-presses-the-drawer-close"
      data-focal-channels="locator,contrast,enclosure"
      data-focal-rule="左抽屉装适用范围，右架三道期限闸门依次读"
    >
      {/* Static audit inventory:
        data-final-knowledge="summary-scope-rules"
        data-final-knowledge="summary-procedure-deadline"
      */}
      <div style={{ display: "flex", gap: 40, height: "78%" }}>
        <Enter data-final-knowledge="summary-scope-rules" delay={0} style={{ flex: 1.05, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <TagChip tone="seal">法定简易 · 四类</TagChip>
            <span style={{ fontSize: 17, color: "rgba(242,232,207,0.85)" }}>
              前提：事实清楚、权利义务关系明确、争议不大
            </span>
          </div>
          <CordRule delay={6} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["当场作出的", "警告或通报批评", "款额3000元以下", "政府信息公开"].map((s, i) => (
              <Slip key={s} delay={6 + 6 * i} style={{ width: "calc(50% - 6px)", padding: "12px 14px 12px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                      fontSize: 18,
                      color: "#9c4a33",
                      fontWeight: 700,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <SlipTitle>{s}</SlipTitle>
                </div>
              </Slip>
            ))}
          </div>
          <Slip tone="pale" delay={36} style={{ padding: "12px 16px 12px 22px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <TagChip tone="amber">约定简易</TagChip>
              <SlipBody size={18}>当事人各方同意适用简易程序 → 也可以适用</SlipBody>
            </div>
          </Slip>
          <Slip delay={44} style={{ padding: "12px 16px 12px 22px", background: "rgba(178,58,36,0.14)", border: "2px dashed #b23a24" }}>
            <SlipBody size={18}>
              <b>对比陷阱</b>：诉讼法定简易为当场作出 / 标的2000元以下 / 信息公开；复议是3000元
            </SlipBody>
          </Slip>
        </Enter>
        <Enter data-final-knowledge="summary-procedure-deadline" delay={18} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <TagChip tone="seal">期限闸门</TagChip>
            <span style={{ fontSize: 17, color: "rgba(242,232,207,0.85)" }}>比普通程序全面提速</span>
          </div>
          <CordRule delay={24} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {GATES.map((g, i) => (
              <div key={g.d} style={{ display: "flex", alignItems: "stretch", gap: 14 }}>
                <Enter delay={24 + 9 * i} distance={10} style={{ minWidth: 118 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#c9882d",
                      color: "#2e2415",
                      borderRadius: 8,
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                      fontSize: 26,
                      fontWeight: 800,
                      height: "100%",
                    }}
                  >
                    {g.d}
                  </div>
                </Enter>
                <Slip delay={24 + 9 * i} style={{ flex: 1, padding: "10px 14px 10px 20px" }}>
                  <SlipTitle>{g.t}</SlipTitle>
                  <SlipBody size={17}>{g.b}</SlipBody>
                </Slip>
              </div>
            ))}
          </div>
          <Slip tone="pale" delay={54} style={{ padding: "12px 16px 12px 22px" }}>
            <SlipBody size={18}>
              <b>可书面审理</b>（无需“因当事人原因”前提）；机构认为不宜简易的，经<b>复议机构负责人批准</b>转普通程序
            </SlipBody>
          </Slip>
        </Enter>
      </div>
      <div style={{ marginTop: 18, display: "flex", gap: 26, justifyContent: "center" }}>
        <Enter delay={63}>
          <span
            style={{
              display: "inline-block",
              border: "3px solid #b23a24",
              color: "#b23a24",
              padding: "4px 16px",
              borderRadius: 6,
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 3,
              transform: "rotate(-2deg)",
            }}
          >
            复议：普通60日 / 简易30日
          </span>
        </Enter>
        <Enter delay={69}>
          <span
            style={{
              display: "inline-block",
              border: "3px solid #c9882d",
              color: "#c9882d",
              padding: "4px 16px",
              borderRadius: 6,
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 3,
              transform: "rotate(2deg)",
            }}
          >
            诉讼：一审6个月 / 简易45日
          </span>
        </Enter>
      </div>
    </AbsoluteFill>
  </BambooShell>
);
