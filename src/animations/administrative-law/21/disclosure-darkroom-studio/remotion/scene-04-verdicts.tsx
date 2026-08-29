import React from "react";
import { useCurrentFrame } from "remotion";
import { DarkroomShell, Print, Tray, VerdictStamp, enter } from "./theme";

export const VerdictFourTroughsScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="verdict-dismiss-claims" data-final-knowledge="verdict-perform-disclosure" data-final-knowledge="verdict-confirm-illegal" data-final-knowledge="verdict-forbid-publication" */
  const f = useCurrentFrame();
  const troughs = [
    {
      name: "驳回诉讼请求",
      tone: "#c99a3e",
      body: "公开/不予公开/无法提供/不予处理合法；信息已向公众公开并告知获取方式途径时间；同一申请人相同内容申请一并答复合法；逾期不予答复理由不成立；以侵犯商业秘密/个人隐私请求不公开理由不成立",
      knowledge: "verdict-dismiss-claims",
    },
    {
      name: "履行公开职责（能作为就作为）",
      tone: "#5f7040",
      body: "拒绝/部分拒绝公开应当公开的信息 ➔ 撤销＋20个工作日内公开；无正当理由逾期不答复 ➔ 20个工作日内公开；可区分处理 ➔ 20个工作日内公开能公开部分；第三方同意且法院认为可公开 ➔ 20个工作日内公开",
      knowledge: "verdict-perform-disclosure",
    },
    {
      name: "确认违法",
      tone: "#b0402e",
      body: "公开违法但无可撤销内容（如已公开不能撤销）；诉讼中已公开但仍要求确认原行为违法；不予公开/不答复违法但判决公开无意义",
      knowledge: "verdict-confirm-illegal",
    },
    {
      name: "禁止判决",
      tone: "#3a5a74",
      body: "尚未公开前，原告起诉不得公开，涉商业秘密/个人隐私且不公开不会对公共利益造成重大影响 ➔ 判决不得公开",
      knowledge: "verdict-forbid-publication",
    },
  ];
  return (
    <DarkroomShell code="04" title="判决四槽" subtitle="驳回 · 履行 · 确认 · 禁止，四个显影槽出片">
      <div
        data-layout="verdict-four-troughs"
        data-visual-anchor="flow-target"
        data-visual-grammar="four-verdict-troughs-hold-distinct-final-prints,twenty-working-day-deadline-prints-on-performance-trough"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="信息公开案件四类判决"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        {troughs.map((t, i) => (
          <div key={t.knowledge} style={{ display: "flex", ...enter(f, 6 + i * 12, 0, 16) }}>
            <Tray title={t.name} tone={t.tone} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
              <Print style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.5, padding: "9px 13px" }}>{t.body}</Print>
              {i === 1 && (
                <div style={{ textAlign: "right" }}>
                  <VerdictStamp label="履行槽统一 20 个工作日" delay={56} rotation={-2} />
                </div>
              )}
            </Tray>
          </div>
        ))}
      </div>
    </DarkroomShell>
  );
};
