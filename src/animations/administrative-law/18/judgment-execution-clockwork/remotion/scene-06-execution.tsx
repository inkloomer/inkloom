import React from "react";
import { useCurrentFrame } from "remotion";
import { DialCard, TribunalShell, VerdictStamp, enter } from "./theme";

export const ExecutionMechanismBoardScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="execution-body-term" data-final-knowledge="execution-defendant-measures" data-final-knowledge="execution-plaintiff-rules" */
  const f = useCurrentFrame();
  const measures = [
    "钱款类行为不履行 ➔ 直接划拨款项",
    "对行政机关负责人按日加处罚款（每日 50～100 元）",
    "公告",
    "向上一级机关或监察机关提司法建议",
    "社会影响恶劣的，可对直接负责的主管人员和其他直接责任人员予以拘留",
    "构成犯罪的，依法追究刑事责任",
  ];
  return (
    <TribunalShell code="06" title="诉讼执行机械板" subtitle="一审执行 · 申请期限 2 年 · 被告/原告两套措施">
      <div
        data-layout="execution-mechanism-board"
        data-visual-anchor="flow-path"
        data-visual-grammar="one-two-year-main-spring-drives-defendant-and-plaintiff-mechanism-tracks,defendant-default-unlocks-six-escalating-execution-measures,plaintiff-default-splits-into-self-execution-or-court-application"
        data-text-treatments="label-block,stamp,chip"
        data-focal-rule="执行主体期限与执行措施"
        data-focal-channels="contrast,connector,locator"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: "0 0 470px", display: "flex", flexDirection: "column", gap: 14 }}>
          <DialCard
            data-final-knowledge="execution-body-term"
            style={{ padding: "16px 22px", flex: 1, ...enter(f, 4, -24, 0) }}
          >
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 10, color: "#8a6d2f" }}>执行主体</div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.65 }}>
              • 由<b>第一审法院</b>执行
              <br />
              • 一审法院认为情况特殊需二审执行的，可<b>报请二审法院</b>
              <br />
              • 二审法院可决定由其执行，也可决定仍由一审法院执行
            </div>
            <div style={{ marginTop: 14, padding: "12px 16px", background: "rgba(138,58,52,.10)", border: "2px solid rgba(138,58,52,.4)", borderRadius: 8 }}>
              <div style={{ fontSize: 44, fontWeight: 950, color: "#8a3a34", fontFamily: "var(--inkloom-animation-mono, monospace)", lineHeight: 1 }}>2 年</div>
              <div style={{ fontSize: 19, fontWeight: 800, marginTop: 6, lineHeight: 1.5 }}>
                申请执行期限：从文书规定履行期最后一日起算；分期履行的从每次履行期最后一日起算；无规定履行期的从文书送达之日起算
              </div>
            </div>
          </DialCard>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <DialCard
            data-final-knowledge="execution-defendant-measures"
            style={{ padding: "15px 20px", flex: 1.3, ...enter(f, 14, 24, 0) }}
          >
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 8, color: "#8a3a34" }}>被告败诉 ➔ 对被告的执行措施</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {measures.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 19.5,
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      minWidth: 26,
                      height: 26,
                      borderRadius: 4,
                      background: "#8a3a34",
                      color: "#f3eedd",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 13,
                      fontWeight: 950,
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  {m}
                </div>
              ))}
            </div>
          </DialCard>
          <DialCard
            data-final-knowledge="execution-plaintiff-rules"
            style={{ padding: "15px 20px", ...enter(f, 40, 24, 0) }}
          >
            <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 8, color: "#5f7040" }}>原告败诉 ➔ 被告的执行路径</div>
            <div style={{ fontSize: 20.5, fontWeight: 700, lineHeight: 1.55 }}>
              被告<b>有强制执行权</b>的可以<b>自行执行</b>；<b>无强制执行权</b>的申请<b>法院</b>执行
            </div>
            <div style={{ marginTop: 10, display: "flex", justifyContent: "flex-end" }}>
              <VerdictStamp label="依据 = 法院裁判与调解书" delay={56} rotation={-2} />
            </div>
          </DialCard>
        </div>
      </div>
    </TribunalShell>
  );
};
