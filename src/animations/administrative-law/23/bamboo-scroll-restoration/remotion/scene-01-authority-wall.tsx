import React from "react";
import { AbsoluteFill } from "remotion";
import { T, BambooShell, Slip, SlipTitle, SlipBody, TagChip, CordRule, Enter } from "./theme";

const GOV_WALL: { t: string; ex: string }[] = [
  { t: "本级政府工作部门", ex: "县公安局→县政府；省公安厅→省政府" },
  { t: "下一级人民政府", ex: "县政府→市政府；[例外]省级政府→自己复议自己" },
  { t: "政府设立的派出机关", ex: "街道办→设立者区政府" },
  { t: "政府及其部门管理的被授权组织", ex: "北工大→北京市政府；市律协→北京市政府" },
  { t: "部门设立的派出机构", ex: "甲县公安局派出所→甲县政府" },
];

const MINISTRY_WALL: { t: string; ex: string }[] = [
  { t: "国务院部门自身", ex: "含组成部门与直属机构：市场监管总局→自己" },
  { t: "部门设立的派出机构", ex: "财政部山西监管局→财政部" },
  { t: "部门管理的被授权组织", ex: "中国政法大学→教育部" },
];

export const ReviewAuthorityBambooWallScene: React.FC = () => (
  <BambooShell sceneNo="二十三·壹" sceneTitle="复议机关 · 两面对照墙" sceneTag="REVIEW-AUTHORITY">
    <AbsoluteFill
      data-layout="authority-bamboo-wall"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,chip,thin-underline"
      data-visual-grammar="government-wall-and-ministry-wall-hang-on-opposite-wings,two-exception-slips-break-across-the-normal-routes,technique-strip-presses-the-reading-order"
      data-focal-channels="contrast,spatial,enclosure"
      data-focal-rule="左右两墙对照，例外简横断其间，先定被申请人再定复议机关"
    >
      {/* Static audit inventory:
        data-final-knowledge="authority-local-government"
        data-final-knowledge="authority-national-ministry"
        data-final-knowledge="authority-two-exceptions"
      */}
      <div style={{ display: "flex", gap: 36, height: "74%" }}>
        <Enter data-final-knowledge="authority-local-government" delay={0} style={{ display: "flex", flexDirection: "column", flex: 1.15, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
          <TagChip tone="seal">地方事务归政府</TagChip>
          <span style={{ fontSize: 18, color: "rgba(242,232,207,0.8)" }}>
            被申请人是地方机关 → 政府当复议机关
          </span>
        </div>
        <CordRule delay={6} style={{ marginBottom: 14 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {GOV_WALL.map((g, i) => (
            <Slip key={g.t} delay={6 + 5 * i} style={{ padding: "10px 16px 10px 24px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <SlipTitle color={T.K}>{g.t}</SlipTitle>
                <span
                  style={{
                    borderBottom: "2px solid rgba(155,74,51,0.65)",
                    fontSize: 18,
                    color: T.K,
                    whiteSpace: "nowrap",
                  }}
                >
                  {g.ex}
                </span>
              </div>
            </Slip>
          ))}
        </div>
      </Enter>
      <Enter data-final-knowledge="authority-national-ministry" delay={18} style={{ display: "flex", flexDirection: "column", flex: 0.85, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
          <TagChip tone="seal">全国事务归部委</TagChip>
          <span style={{ fontSize: 18, color: "rgba(242,232,207,0.8)" }}>
            被申请人是国务院部门系统
          </span>
        </div>
        <CordRule delay={24} style={{ marginBottom: 14 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {MINISTRY_WALL.map((g, i) => (
            <Slip key={g.t} tone="pale" delay={24 + 6 * i} style={{ padding: "12px 16px 12px 24px" }}>
              <SlipTitle>{g.t}</SlipTitle>
              <SlipBody size={18}>{g.ex}</SlipBody>
            </Slip>
          ))}
        </div>
      </Enter>
      </div>
      <Enter
        data-final-knowledge="authority-two-exceptions"
        delay={42}
        style={{
          marginTop: 22,
          display: "flex",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(178,58,36,0.16)",
            border: "2px dashed #b23a24",
            borderRadius: 10,
            padding: "12px 20px",
          }}
        >
          <TagChip tone="amber">例外一 · 垂直领导</TagChip>
          <span style={{ fontSize: 19, color: "#f2e8cf" }}>
            海关、金融、外汇、税务、国家安全 → <b>上一级主管部门</b>
          </span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(178,58,36,0.16)",
            border: "2px dashed #b23a24",
            borderRadius: 10,
            padding: "12px 20px",
          }}
        >
          <TagChip tone="amber">例外二 · 司法行政</TagChip>
          <span style={{ fontSize: 19, color: "#f2e8cf" }}>
            县司法局 → 本级政府 <b>或</b> 上一级司法行政部门（两个都说全）
          </span>
        </div>
      </Enter>
      <Enter delay={57} style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: 20,
            letterSpacing: 2,
            color: "rgba(242,232,207,0.9)",
            borderBottom: "3px solid #c9882d",
            paddingBottom: 2,
          }}
        >
          应试技巧：先确定被申请人，再确定复议机关
        </div>
      </Enter>
    </AbsoluteFill>
  </BambooShell>
);
