import React from "react";
import { useCurrentFrame } from "remotion";
import { DialCard, TribunalShell, VerdictStamp, enter } from "./theme";

export const RevocationSpecialGearTrainScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="revocation-rehearing-rule" data-final-knowledge="revocation-invalid-switch" data-final-knowledge="modification-no-worse" data-final-knowledge="confirm-remedy-package" */
  const f = useCurrentFrame();
  return (
    <TribunalShell code="02" title="撤销轮组：三种特别适用" subtitle="重作限制 · 撤销↔无效转换 · 变更不得更不利 · 确认附补救">
      <div
        data-layout="revocation-special-gear-train"
        data-visual-anchor="flow-path"
        data-visual-grammar="revocation-drives-rehearing-and-invalid-switch-gears,modification-and-confirm-gears-mesh-at-the-tail"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="判决类型的特别适用规则"
        data-focal-channels="connector,contrast,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 14 }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          <DialCard
            data-final-knowledge="revocation-rehearing-rule"
            style={{ flex: 1, padding: "15px 20px", ...enter(f, 4, -24, 0) }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 6, color: "#8a3a34" }}>撤销 ➔ 重作判决</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              被告不得以<b>同一事实和理由</b>作出与原行为基本相同的行为
              <br />
              但因<b style={{ color: "#8a6d2f" }}>违反法定程序</b>被撤销的除外
              <br />
              违反禁令重作的 ➔ 法院应判决撤销/部分撤销，并可按生效判决执行手段<b>强制执行</b>
            </div>
          </DialCard>
          <DialCard
            data-final-knowledge="revocation-invalid-switch"
            style={{ flex: 1.2, padding: "15px 20px", ...enter(f, 14, 24, 0) }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 6, color: "#8a3a34" }}>撤销 ↔ 确认无效 转换</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6 }}>
              请求撤销，法院审查认为<b>无效</b> ➔ 应当判决<b>确认无效</b>
              <br />
              请求确认无效，法院认为<b>可撤销</b>：
              <br />
              ① 释明后原告<b>请求撤销</b> ➔ 继续审理依法判决
              <br />
              ② 释明后<b>拒绝变更</b> ➔ 判决驳回诉讼请求
              <br />
              ③ 但撤销已超法定起诉期限 ➔ <b>裁定驳回起诉</b>
            </div>
            <div style={{ marginTop: 8, textAlign: "right" }}>
              <VerdictStamp label="想变就变，不变就败" delay={44} rotation={-2} />
            </div>
          </DialCard>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <DialCard
            data-final-knowledge="modification-no-worse"
            style={{ flex: 1, padding: "15px 20px", ...enter(f, 28, -18, 0) }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 6, color: "#5f7040" }}>变更判决：不得更不利</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              不得对当事人作出<b>更为不利</b>的决定
              <br />
              例外：<b>利害关系人同为原告</b>，且诉讼请求相反的除外
            </div>
          </DialCard>
          <DialCard
            data-final-knowledge="confirm-remedy-package"
            style={{ flex: 1.2, padding: "15px 20px", ...enter(f, 38, 18, 0) }}
          >
            <div style={{ fontSize: 23, fontWeight: 950, marginBottom: 6, color: "#5f7040" }}>确认违法/无效的配套</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
              ① 可同时判决责令被告采取<b>补救措施</b>
              <br />
              ② 经释明原告请求一并解决<b>行政赔偿</b> ➔ 可调解；调解不成<b>一并判决</b>
              <br />
              ③ 也可告知就赔偿事项<b>另行起诉</b>
            </div>
          </DialCard>
        </div>
      </div>
    </TribunalShell>
  );
};
