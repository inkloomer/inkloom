import React from "react";
import { useCurrentFrame } from "remotion";
import { DarkroomShell, Print, Tray, enter } from "./theme";

export const AcceptanceScreeningBathScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="accept-should-list" data-final-knowledge="accept-should-not-list" data-final-knowledge="trial-special-methods" */
  const f = useCurrentFrame();
  const should = [
    "告知无法提供 / 不予处理",
    "对复议机关不予公开决定不服（涉密、禁止公开、三安全一稳定、商业秘密、个人隐私、内部事务、过程性、执法案卷）",
    "提供的信息不符合申请内容",
    "主动公开或依他人申请公开侵犯商业秘密/个人隐私",
    "其他侵犯合法权益的情形",
  ];
  const shouldNot = [
    "明显不符合起诉条件；复议前置未复议",
    "程序性告知（延长答复期限、要求补正）",
    "单独起诉信息处理费决定",
    "重复申请已公开信息不予重复处理；告知按法律规定查询工商/不动产登记资料",
    "要求制作加工分析未提供；以申请形式信访投诉举报；要求提供公报报刊书籍等公开出版物",
    "公共企事业单位未公开；其他对权利义务不产生实际影响",
  ];
  return (
    <DarkroomShell code="02" title="受理筛选显影盘" subtitle="应受理 · 不应受理，两盘分流">
      <div
        data-layout="acceptance-screening-bath"
        data-visual-anchor="boundary"
        data-visual-grammar="should-accept-and-should-reject-prints-develop-in-separate-baths,trial-methods-printed-on-the-divider"
        data-text-treatments="label-block,external-negation,soft-highlight"
        data-focal-rule="应受理与不应受理清单"
        data-focal-channels="contrast,enclosure,locator"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div style={{ display: "flex", gap: 20, flex: 1 }}>
          <Tray title="✓ 应受理" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
            {should.map((s, i) => (
              <Print key={i} style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.42, padding: "8px 12px", ...enter(f, 8 + i * 8, -16, 0) }}>
                {s}
              </Print>
            ))}
          </Tray>
          <Tray title="✕ 不应受理（裁定不予立案/驳回起诉）" tone="#c99a3e" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
            {shouldNot.map((s, i) => (
              <Print key={i} style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.42, padding: "8px 12px", ...enter(f, 14 + i * 8, 16, 0) }}>
                {s}
              </Print>
            ))}
          </Tray>
        </div>
        <div
          data-final-knowledge="trial-special-methods"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            background: "rgba(201,154,62,.10)",
            border: `2.5px dashed ${"#c99a3e"}`,
            borderRadius: 10,
            padding: "12px 22px",
            fontSize: 20.5,
            fontWeight: 800,
            color: "#f3eedd",
            ...enter(f, 60),
          }}
        >
          <span>
            🔬 审理特殊方式：可适用<b>简易程序</b>；视情采取适当方式避免泄露国家秘密/商业秘密/个人隐私；原告申请停止公开涉商业秘密/个人隐私信息 ➔ 可裁定<b>暂时停止公开</b>
          </span>
        </div>
      </div>
    </DarkroomShell>
  );
};
