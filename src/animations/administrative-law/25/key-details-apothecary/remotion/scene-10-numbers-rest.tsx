import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { CabinetShell, HerbSlip, IndexTag, ThinUnderline, T, enter } from "./theme";

export const NumberScaleRemainderScene: React.FC = () => {
  const f = useCurrentFrame();
  const penalties = [
    { name: "警告", m: 6 },
    { name: "记过", m: 12 },
    { name: "记大过", m: 18 },
    { name: "降级", m: 24 },
    { name: "撤职", m: 24 },
  ];
  const license = [
    { v: "30 日", t: "法规规章制定：备案、草案公布" },
    { v: "5 日", t: "许可材料补正一次性告知" },
    { v: "20+10 日", t: "单一许可决定期" },
    { v: "45+15 日", t: "联合、统一、集中许可" },
    { v: "30 日", t: "延续许可申请期（届满前）" },
    { v: "5→20→7 日", t: "许可听证：申请 · 组织 · 告知" },
    { v: "5→未定→7 日", t: "处罚听证：组织时间未规定" },
  ];
  const disclosure = [
    { v: "20 工作日", t: "主动公开期限" },
    { v: "20+20 工作日", t: "依申请公开期限" },
    { v: "7 工作日", t: "补正一次性告知" },
    { v: "15 工作日", t: "征求第三方意见" },
    { v: "15 工作日", t: "征求其他机关意见" },
  ];
  const severe = ["无罪羁押 10 年以上", "死亡", "重伤或残疾 1～4 级且生活不能自理", "严重精神障碍或精神残疾 1～2 级"];
  const ordinary = ["无罪羁押 6 个月以上", "轻伤以上或者残疾", "精神障碍且与侵权有关联", "名誉、荣誉、家庭、职业、教育严重受损"];

  const numChip = (v: string, t: string, tone: string, delay: number) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "8px 11px",
        background: T.paper,
        borderRadius: 3,
        boxShadow: "0 3px 9px rgba(0,0,0,.36)",
        ...enter(f, delay, 0, 12),
      }}
    >
      <span
        style={{
          fontSize: 28,
          fontWeight: 950,
          color: tone,
          lineHeight: 1,
          whiteSpace: "nowrap",
          fontFamily: "var(--inkloom-animation-mono, monospace)",
        }}
      >
        {v}
      </span>
      <span style={{ fontSize: 22, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{t}</span>
    </div>
  );

  return (
    <CabinetShell code="10" title="必记数字 · 公务员 · 许可 · 公开 · 赔偿" subtitle="四格收尾 · 处分期成阶梯 · 公开按工作日计">
      <div
        data-layout="two-by-two-remainder-number-cabinet"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="four-remaining-domains-file-into-a-two-by-two-number-cabinet,civil-service-penalty-periods-climb-as-a-measured-ladder,license-decision-periods-branch-between-single-and-joint-handling,disclosure-periods-count-in-working-days-not-calendar-days,compensation-splits-mental-harm-into-two-severity-bands"
        data-text-treatments="label-block,chip,thin-underline"
        data-focal-rule="信息公开按工作日计算，公务员处分期最长均为 24 个月"
        data-focal-channels="contrast,enclosure,spatial"
        style={{
          position: "absolute",
          inset: 6,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 16,
        }}
      >
        <div
          data-final-knowledge="number-civil-service-group"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "12px 14px",
            background: "rgba(74,50,34,0.4)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 6, -22, 0),
          }}
        >
          <IndexTag label="公务员" tone={T.cinnabar} style={{ fontSize: 23, alignSelf: "flex-start" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {numChip("1～12 月", "聘任制试用期", T.cinnabar, 18)}
            {numChip("1～5 年", "聘任制合同期", T.cinnabar, 24)}
          </div>
          <div
            data-final-knowledge="number-civil-service-penalty-ladder"
            style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 14, paddingTop: 6 }}
          >
            {penalties.map((p, i) => {
              const h = interpolate(f, [34 + i * 8, 60 + i * 8], [0, (p.m / 24) * 156], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              });
              return (
                <div key={p.name} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 22, fontWeight: 950, color: T.paper }}>{p.m} 月</span>
                  <div style={{ width: "100%", height: 156, display: "flex", alignItems: "flex-end" }}>
                    <div
                      style={{
                        width: "100%",
                        height: h,
                        borderRadius: "4px 4px 0 0",
                        background: `linear-gradient(180deg, ${T.cinnabar} 0%, ${T.brassDeep} 100%)`,
                        border: `1px solid rgba(243,234,215,.35)`,
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 22, fontWeight: 850, color: "#efe3cd" }}>{p.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          data-final-knowledge="number-license-procedure-group"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "12px 14px",
            background: "rgba(74,50,34,0.4)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 12, 22, 0),
          }}
        >
          <IndexTag label="行政许可与制定程序" tone={T.indigo} style={{ fontSize: 23, alignSelf: "flex-start" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignContent: "start" }}>
            {license.map((l, i) => numChip(l.v, l.t, T.indigo, 24 + i * 6))}
          </div>
        </div>

        <div
          data-final-knowledge="number-information-disclosure-group"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "12px 14px",
            background: "rgba(74,50,34,0.4)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 18, -22, 0),
          }}
        >
          <IndexTag label="政府信息公开" tone={T.mugwort} style={{ fontSize: 23, alignSelf: "flex-start" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignContent: "start" }}>
            {disclosure.map((d, i) => numChip(d.v, d.t, T.mugwort, 30 + i * 6))}
          </div>
          <div
            style={{
              marginTop: "auto",
              fontSize: 22,
              fontWeight: 850,
              color: "#efe3cd",
              padding: "9px 12px",
              background: "rgba(109,143,94,0.16)",
              border: `2px solid ${T.mugwort}`,
              borderRadius: 4,
              ...enter(f, 70, 0, 10),
            }}
          >
            全部按
            <ThinUnderline tone={T.mugwort}>工作日</ThinUnderline>
            计算，不含法定节假日
          </div>
        </div>

        <div
          data-final-knowledge="number-state-compensation-group"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "12px 14px",
            background: "rgba(74,50,34,0.4)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 24, 22, 0),
          }}
        >
          <IndexTag label="国家赔偿" tone={T.brassDeep} style={{ fontSize: 23, alignSelf: "flex-start" }} />
          <HerbSlip style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.4, ...enter(f, 32, 0, 12) }}>
            丧失劳动能力：
            <ThinUnderline tone={T.brassDeep}>1～4 级</ThinUnderline>
            完全丧失，
            <ThinUnderline tone={T.brassDeep}>5～10 级</ThinUnderline>
            部分丧失
          </HerbSlip>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}>
            {[
              { title: "特别严重 ≥50%", list: severe, tone: T.cinnabar },
              { title: "一般严重 ≤50%", list: ordinary, tone: T.indigo },
            ].map((band, bi) => (
              <div
                key={band.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                  padding: "9px 11px",
                  background: "rgba(27,18,11,0.5)",
                  border: `2px solid ${band.tone}`,
                  borderRadius: 4,
                  ...enter(f, 40 + bi * 8, 0, 14),
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 950, color: band.tone, letterSpacing: 1 }}>{band.title}</span>
                {band.list.map((item, i) => (
                  <span
                    key={item}
                    style={{ fontSize: 22, fontWeight: 750, color: "#efe3cd", lineHeight: 1.35, ...enter(f, 48 + bi * 8 + i * 6, 0, 10) }}
                  >
                    · {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CabinetShell>
  );
};
