import React from "react";
import { useCurrentFrame } from "remotion";
import { BrassPlaque, ExhibitCard, GalleryShell, Vitrine, enter } from "./theme";

export const BurdenOfProofLedgerScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="burden-defendant-legality" data-final-knowledge="burden-review-join" data-final-knowledge="burden-plaintiff-initial" data-final-knowledge="burden-plaintiff-scope" */
  const f = useCurrentFrame();
  return (
    <GalleryShell code="03" title="举证责任分配账墙" subtitle="被告举证合法性 · 复议维持共同举 · 原告初步证明">
      <div
        data-layout="burden-ledger-wall"
        data-visual-anchor="document-fork"
        data-visual-grammar="defendant-and-plaintiff-ledgers-hang-on-opposite-walls,review-join-bridges-the-two-ledgers"
        data-text-treatments="label-block,chip,thin-underline"
        data-focal-rule="举证责任分配"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 26 }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <BrassPlaque style={{ alignSelf: "flex-start" }}>被告账页</BrassPlaque>
          <div
            data-final-knowledge="burden-defendant-legality"
            style={{ display: "flex", ...enter(f, 4, -24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <ExhibitCard style={{ fontSize: 21, fontWeight: 900, padding: "8px 12px" }}>
                对<b>行政行为合法</b>承担举证责任
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "9px 12px" }}>
                不提供或无正当理由逾期提供 ➔ 视为<b style={{ color: "#8a4a38" }}>没有相应证据</b>；
                但行为涉及第三人合法权益、第三人提供证据的除外
              </ExhibitCard>
            </Vitrine>
          </div>
          <div
            data-final-knowledge="burden-review-join"
            style={{ display: "flex", ...enter(f, 22, -24, 0) }}
          >
            <Vitrine glow style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <BrassPlaque style={{ alignSelf: "flex-start", fontSize: 17 }}>复议维持 · 共同被告</BrassPlaque>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "9px 12px" }}>
                原机关与复议机关对<b>原行为合法性</b>共同举证（举证行为可由其中一个机关实施）；复议机关对<b>复议决定</b>合法性举证
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.5, padding: "9px 12px" }}>
                复议机关在<b>复议程序中</b>依法收集补充的证据，可作为法院认定复议决定与原行为合法的依据
              </ExhibitCard>
            </Vitrine>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <BrassPlaque style={{ alignSelf: "flex-start" }}>原告账页</BrassPlaque>
          <div
            data-final-knowledge="burden-plaintiff-initial"
            style={{ display: "flex", ...enter(f, 10, 24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 7 }}>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "8px 12px" }}>
                ① 起诉时提供符合<b>起诉条件</b>的证据材料（初步证明责任）
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "8px 12px" }}>
                ② 不作为案件：提供曾向被告<b>提出申请</b>的证据（被告应主动履行/正当理由不能提供除外）
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "8px 12px" }}>
                ③ 行政赔偿补偿：证明<b>损害事实</b>（被告致无法举证由被告担；价值无法认定由负责方申请鉴定；无法鉴定由法院酌定）
              </ExhibitCard>
            </Vitrine>
          </div>
          <div
            data-final-knowledge="burden-plaintiff-scope"
            style={{ display: "flex", ...enter(f, 30, 24, 0) }}
          >
            <Vitrine style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 7 }}>
              <ExhibitCard style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: "8px 12px" }}>
                ④ 证明申请公开的政府信息涉其商业秘密、个人隐私的存在
                <br />
                ⑤ 信息公开案件中<b>损害结果的存在</b>
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 19.5, fontWeight: 700, lineHeight: 1.55, padding: "8px 12px", background: "rgba(138,74,56,0.08)" }}>
                ⚠ 其他事项原告不承担举证责任，只享有举证权利；原告证明违法的证据不成立的，<b>不免除</b>被告的举证责任
              </ExhibitCard>
            </Vitrine>
          </div>
        </div>
      </div>
    </GalleryShell>
  );
};
