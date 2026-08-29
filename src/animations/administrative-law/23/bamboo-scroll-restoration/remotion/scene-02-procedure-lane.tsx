import React from "react";
import { AbsoluteFill } from "remotion";
import { T, BambooShell, Slip, SlipTitle, SlipBody, TagChip, Enter } from "./theme";

const STATIONS: { no: string; title: string; lines: string[]; tone: "tan" | "pale" }[] = [
  {
    no: "①",
    title: "申请 · 60日",
    tone: "tan",
    lines: [
      "全知道：知行为之日起60日内（法律可更长 ≥60）",
      "知一半：告知内容未告知救济 → 最长1年",
      "全不知：知内容起60日；保护期5年（不动产20年）",
      "不作为：拒绝/履行期届满/满60日/紧急 当时",
    ],
  },
  {
    no: "②",
    title: "受理 · 5日",
    tone: "pale",
    lines: [
      "5日内审查决定；不符合→不受理（受理后发现→驳回）",
      "逾期未作出不予受理决定 → 视为受理",
      "补正：收到通知10日内提交，可延长；逾期视为放弃",
      "不收费；当场/电子监控处罚可经作出机关提交，需维持的5日内移送",
    ],
  },
  {
    no: "③",
    title: "普通审理",
    tone: "tan",
    lines: [
      "7日内发副本 → 被申请人10日内书面答复+证据依据",
      "原则：当面/互联网/电话听取意见并记录在案",
      "因当事人原因不能听取意见 → 才可书面审理",
      "重大疑难复杂应当听证：1主持+2以上听证员+1记录员，5日前书面通知",
      "被申请人负责人应参加；申请人拒不听证=放弃听证权利（非撤诉）",
      "2名以上复议人员；复议委员会仅咨询=重要参考",
    ],
  },
  {
    no: "④",
    title: "决定 · 60日",
    tone: "pale",
    lines: [
      "受理之日起60日内结案（法律规定少于60日的除外 ≤60）",
      "对比：申请期≥60日，决定期≤60日 ← 高效便民",
      "延长：复议机构负责人批准，最多30日，书面告知",
      "负责人同意或集体讨论通过，以复议机关名义作出",
    ],
  },
];

export const ProcedureSlipsLaneScene: React.FC = () => (
  <BambooShell sceneNo="二十三·贰" sceneTitle="申请受理到决定 · 程序简道" sceneTag="PROCEDURE-LANE">
    <AbsoluteFill
      data-layout="procedure-slips-lane"
      data-visual-anchor="flow-path"
      data-text-treatments="label-block,chip,stamp"
      data-visual-grammar="four-station-slips-unroll-along-one-lane-with-connector-arrows,hearing-rules-printed-on-the-listening-station,deadline-pair-stamped-on-the-final-station"
      data-focal-channels="connector,locator,contrast"
      data-focal-rule="沿箭头从申请读到决定，期限数字做路标"
    >
      {/* Static audit inventory:
        data-final-knowledge="procedure-application-acceptance"
        data-final-knowledge="procedure-ordinary-hearing"
        data-final-knowledge="procedure-decision-deadline"
      */}
      <div style={{ display: "flex", gap: 20, height: "84%", alignItems: "stretch" }}>
        {STATIONS.map((s, i) => (
          <React.Fragment key={s.no}>
            <Enter
              delay={12 * i}
              style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <TagChip tone="seal">{s.no}</TagChip>
                <SlipTitle color="#f2e8cf">{s.title}</SlipTitle>
              </div>
              <Slip tone={s.tone} delay={12 * i + 6} style={{ flex: 1, padding: "12px 14px 12px 20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.lines.map((l) => (
                    <SlipBody key={l} size={17}>
                      {l}
                    </SlipBody>
                  ))}
                </div>
              </Slip>
            </Enter>
            {i < STATIONS.length - 1 && (
              <div
                style={{
                  alignSelf: "center",
                  fontSize: 34,
                  color: "#c9882d",
                  fontFamily: "var(--inkloom-animation-mono, monospace)",
                  textShadow: "0 2px 0 rgba(46,36,21,0.5)",
                  opacity: 1,
                  transform: `translateY(${i * 0}px)`,
                }}
              >
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          gap: 18,
          justifyContent: "center",
        }}
      >
        <Enter delay={48}>
          <span
            style={{
              display: "inline-block",
              border: "3px solid #b23a24",
              color: "#b23a24",
              padding: "4px 14px",
              borderRadius: 6,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 3,
              transform: "rotate(-3deg)",
            }}
          >
            审理对象：合法 + 合理（诉讼只审合法性）
          </span>
        </Enter>
        <Enter delay={54}>
          <span
            style={{
              display: "inline-block",
              border: "3px solid #c9882d",
              color: "#c9882d",
              padding: "4px 14px",
              borderRadius: 6,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 3,
              transform: "rotate(2deg)",
            }}
          >
            听证≠开庭审理
          </span>
        </Enter>
      </div>
    </AbsoluteFill>
  </BambooShell>
);
