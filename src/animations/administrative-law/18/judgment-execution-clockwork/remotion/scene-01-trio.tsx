import React from "react";
import { useCurrentFrame } from "remotion";
import { DialCard, Gear, TribunalShell, VerdictStamp, enter } from "./theme";

export const FirstInstanceGearTrioScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="trio-revocation" data-final-knowledge="trio-modification" data-final-knowledge="trio-confirm-invalid" data-final-knowledge="minor-procedure-cases" data-final-knowledge="major-obvious-invalid" */
  const f = useCurrentFrame();
  return (
    <TribunalShell code="01" title="一审判决：三大齿轮" subtitle="撤销 · 变更 · 确认违法或无效——理解规则，拒绝死背">
      <div
        data-layout="first-instance-gear-trio"
        data-visual-anchor="flow-target"
        data-visual-grammar="three-verdict-gears-mesh-in-one-judgment-train,invalid-behaviors-bypass-revocation-entirely"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="一审判决三大类型与两类特殊情形"
        data-focal-channels="contrast,connector,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { name: "撤销判决", color: "#c26a5c", body: "全部撤销 / 部分撤销 ➔ 可附重作判决 ➔ 与确认无效判决可转换" },
            { name: "变更判决", color: "#c2a061", body: "法院直接改变处理结果；不得对当事人作出更为不利的决定（利害关系人同为原告且诉求相反的除外）" },
            { name: "确认违法或无效", color: "#5f7040", body: "可同时判决责令被告采取补救措施；可能造成损失的，可就赔偿事项调解，调解不成一并判决，或告知另行起诉" },
          ].map((g, i) => (
            <div
              key={g.name}
              data-final-knowledge={i === 0 ? "trio-revocation" : i === 1 ? "trio-modification" : "trio-confirm-invalid"}
              style={{ display: "flex", alignItems: "center", gap: 16, ...enter(f, 6 + i * 12, -26, 0) }}
            >
              <Gear size={62} teeth={10} color={g.color} rotate={i * 22} />
              <DialCard style={{ flex: 1, padding: "13px 18px" }}>
                <div style={{ fontSize: 24, fontWeight: 950, marginBottom: 4, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>{g.name}</div>
                <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45, color: "#4a4030" }}>{g.body}</div>
              </DialCard>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            data-final-knowledge="minor-procedure-cases"
            style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", ...enter(f, 40, 24, 0) }}
          >
            <DialCard style={{ padding: "15px 20px", width: "100%" }}>
              <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 8, color: "#8a6d2f" }}>不能撤销之一：程序轻微违法（对原告听证/陈述/申辩等权利无实际影响）</div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
                • 处理期限轻微违法
                <br />
                • 通知、送达等程序轻微违法
                <br />
                • 其他程序轻微违法的情形
              </div>
            </DialCard>
          </div>
          <div
            data-final-knowledge="major-obvious-invalid"
            style={{ flex: 1.15, display: "flex", flexDirection: "column", justifyContent: "center", ...enter(f, 52, 24, 0) }}
          >
            <DialCard style={{ padding: "15px 20px", width: "100%", background: "linear-gradient(170deg, #e8d5c8 0%, #dcc4b6 100%)" }}>
              <div style={{ fontSize: 22, fontWeight: 950, marginBottom: 8, color: "#8a3a34" }}>无效行政行为：自始/当然/确定无效，没有可撤销的内容</div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6 }}>
                属于<b>"重大且明显违法"</b>：
                <br />
                ① 主体不具有行政主体资格
                <br />
                ② 减损权利/增加义务<b>无法律规范依据</b>
                <br />
                ③ 内容<b>客观上不可能实施</b>
                <br />
                ④ 其他重大且明显违法的情形
              </div>
            </DialCard>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <VerdictStamp label="先判性质，再选形式" delay={70} rotation={-2} />
          </div>
        </div>
      </div>
    </TribunalShell>
  );
};
