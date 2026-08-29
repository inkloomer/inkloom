import React from "react";
import { AbsoluteFill } from "remotion";
import { BambooShell, Slip, SlipBody, TagChip, Enter } from "./theme";

const STOP_CAUSES = [
  { tag: "主体原因", lines: ["公民死亡，近亲属未定 / 丧失行为能力，法代未定", "公民下落不明；法人终止，承受人未定"] },
  { tag: "程序原因", lines: ["不可抗力或其他正当理由不能参加", "调解、和解，双方同意中止"] },
  { tag: "法律原因", lines: ["适用问题需有权机关解释或确认", "以他案结果为据未审结；附带审查未果"] },
];

export const SpecialSlipsConservationScene: React.FC = () => (
  <BambooShell sceneNo="二十三·肆" sceneTitle="特别程序 · 五只保护筒" sceneTag="SPECIAL-PROCEDURES">
    <AbsoluteFill
      data-layout="special-slips-conservation"
      data-visual-anchor="boundary"
      data-text-treatments="label-block,stamp,chip"
      data-visual-grammar="five-conservation-tubes-rest-on-the-shelf-in-legal-order,recoverable-and-final-zones-split-by-a-vermilion-cord-line,sixty-day-motto-presses-the-final-zone"
      data-focal-channels="contrast,enclosure,locator"
      data-focal-rule="左三筒可重启，右两筒终局，红绳分界"
    >
      {/* Static audit inventory:
        data-final-knowledge="special-withdraw-settle-mediate"
        data-final-knowledge="special-stop-terminate"
      */}
      <div style={{ display: "flex", gap: 22, height: "66%" }}>
        <Enter data-final-knowledge="special-withdraw-settle-mediate" delay={0} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <TagChip tone="seal">撤回</TagChip>
          <Slip tone="pale" delay={6} style={{ flex: 1, padding: "12px 14px 12px 20px" }}>
            <SlipBody size={17}>提出撤回申请并说明理由 + 复议机构同意</SlipBody>
            <div style={{ height: 8 }} />
            <SlipBody size={17}>准予撤回 → 程序终止；同一事实理由不得再申请（违背真实意思除外）；起诉期内仍可起诉</SlipBody>
          </Slip>
        </Enter>
        <Enter delay={7} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <TagChip tone="seal">和解</TagChip>
          <Slip tone="pale" delay={13} style={{ flex: 1, padding: "12px 14px 12px 20px" }}>
            <SlipBody size={17}>决定作出前双方自愿；提交书面和解协议</SlipBody>
            <div style={{ height: 8 }} />
            <SlipBody size={17}>内容不得损害国益、公益、他人权益；达成后由申请人撤回申请结案</SlipBody>
          </Slip>
        </Enter>
        <Enter delay={14} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <TagChip tone="seal">调解</TagChip>
          <Slip tone="pale" delay={20} style={{ flex: 1, padding: "12px 14px 12px 20px" }}>
            <SlipBody size={17}>复议机关主持，审理前或审理中均可</SlipBody>
            <div style={{ height: 8 }} />
            <SlipBody size={17}><b>范围无限制</b>（诉讼仅赔偿/补偿/裁量行为）；合法自愿</SlipBody>
            <div style={{ height: 8 }} />
            <SlipBody size={17}>各方签字签章 + 复议机关盖章 → 生效，可作<b>强制执行</b>根据</SlipBody>
          </Slip>
        </Enter>
        <Enter data-final-knowledge="special-stop-terminate" delay={22} style={{ flex: 1.35, display: "flex", flexDirection: "column", gap: 10 }}>
          <TagChip tone="seal">中止 → 终止</TagChip>
          <Slip delay={28} style={{ flex: 1, padding: "12px 16px 12px 22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {STOP_CAUSES.map((c) => (
                <div key={c.tag} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                  <span style={{ minWidth: 84, fontWeight: 700, fontSize: 17, color: "#9c4a33" }}>{c.tag}</span>
                  <SlipBody size={16}>{c.lines.join("；")}</SlipBody>
                </div>
              ))}
            </div>
          </Slip>
          <Slip tone="pale" delay={36} style={{ padding: "12px 16px 12px 22px", background: "rgba(178,58,36,0.14)", border: "2px dashed #b23a24" }}>
            <SlipBody size={17}>
              终止：撤回被准予 / 死亡无近亲属或放弃 / 法人终止无人承受或放弃 / <b>行转刑：复议终止，诉讼中止</b>
            </SlipBody>
          </Slip>
        </Enter>
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          gap: 26,
        }}
      >
        <div style={{ flex: 1, height: 0, borderTop: "3px dashed #b23a24" }} />
        <Enter delay={48} distance={8}>
          <span
            style={{
              display: "inline-block",
              border: "3px solid #b23a24",
              color: "#b23a24",
              padding: "6px 18px",
              borderRadius: 6,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              transform: "rotate(-3deg)",
              background: "rgba(178,58,36,0.1)",
            }}
          >
            中转终：人死了、人疯了才有——中止满60日原因未除 → 终止（不可抗力没有）
          </span>
        </Enter>
        <div style={{ flex: 1, height: 0, borderTop: "3px dashed #b23a24" }} />
      </div>
    </AbsoluteFill>
  </BambooShell>
);
