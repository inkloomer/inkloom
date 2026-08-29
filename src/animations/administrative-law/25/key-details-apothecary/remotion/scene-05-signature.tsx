import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, CinnabarSeal, HerbSlip, IndexTag, ThinUnderline, T, enter } from "./theme";

export const SignatureHerbLedgerScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="signature-decision-column" data-final-knowledge="signature-security-record-column" data-final-knowledge="signature-general-record-column" data-final-knowledge="signature-equivalent-forms" data-stateful-source="herb-slip-signature-stream" data-stateful-terminal="herb-slip-signature-stream" */
  const f = useCurrentFrame();
  const columns: { key: string; tag: string; tone: string; items: string[]; note?: string; seal?: string }[] = [
    {
      key: "signature-decision-column",
      tag: "壹 · 决定书与当场文书",
      tone: T.cinnabar,
      items: [
        "当场处罚决定书（填写预定格式、编有号码）",
        "当场作出治安管理处罚决定书，由经办的警察签名或者盖章",
      ],
      note: "当场文书先落款，后交付",
      seal: "当场即签",
    },
    {
      key: "signature-security-record-column",
      tag: "贰 · 治安管理类笔录",
      tone: T.indigo,
      items: [
        "询问笔录：被询问人确认无误后签名、盖章或按指印，询问的警察也应签名",
        "检查笔录：由检查人、被检查人和见证人签名、盖章或按指印；拒绝签名的，警察应当注明",
        "辨认笔录：由警察和辨认人签名、盖章或者按指印",
        "扣押的物品清单由调查人员、见证人和持有人签名或者盖章",
      ],
      note: "拒绝签名时注明原因，不代表笔录失效",
      seal: "按指印等效",
    },
    {
      key: "signature-general-record-column",
      tag: "叁 · 通用笔录与司法程序",
      tone: T.mugwort,
      items: [
        "行政机关对行政许可实施情况进行监督检查的笔录",
        "询问、陈述、谈话类笔录：行政执法人员、被询问人、陈述人、谈话人签名或者盖章",
        "现场笔录由执法人员和当事人签名；拒绝或不能签名的应注明原因，可由其他在场人签名",
        "听证笔录交当事人或者其代理人核对无误后签字或者盖章",
        "勘验笔录由勘验人、当事人、在场人签名",
        "法院可要求当事人本人或行政机关执法人员到庭接受询问；询问前可要求签署保证书，其应当在保证书上签名或者捺印",
      ],
    },
  ];
  return (
    <CabinetShell code="05" title="签名盖章十二签" subtitle="决定 · 治安笔录 · 通用笔录，三册台账逐签落名">
      <div
        data-layout="three-ledger-signature-columns"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="twelve-signature-duties-file-into-three-record-ledgers,on-the-spot-decisions-lead-the-ledger,public-security-records-add-the-fingerprint-and-annotation-variants,signature-sealing-and-fingerprint-count-as-equivalent-forms"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="签名、盖章、按指印三者等效，拒绝签名时注明原因"
        data-focal-channels="enclosure,contrast,locator"
        data-stateful-terminal="herb-slip-signature-stream"
        style={{ position: "absolute", inset: 6, display: "flex", gap: 20 }}
      >
        {columns.map((col, i) => (
          <div
            key={col.key}
            data-final-knowledge={col.key}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "12px 14px",
              background: "rgba(74,50,34,0.4)",
              border: "2px solid #7a5639",
              borderRadius: 5,
              ...enter(f, 6 + i * 12, 0, 28),
            }}
          >
            <IndexTag label={col.tag} tone={col.tone} style={{ fontSize: 23, alignSelf: "flex-start" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {col.items.map((item, j) => (
                <HerbSlip
                  key={item}
                  data-stateful-source="herb-slip-signature-stream"
                  style={{
                    alignItems: "flex-start",
                    gap: 9,
                    fontSize: 22,
                    lineHeight: 1.45,
                    fontWeight: 700,
                    ...enter(f, 22 + i * 12 + j * 9, 0, 16),
                  }}
                >
                  <span
                    style={{
                      minWidth: 26,
                      height: 26,
                      marginTop: 2,
                      borderRadius: 3,
                      background: col.tone,
                      color: "#f3ead7",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 15,
                      fontWeight: 950,
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                      flexShrink: 0,
                    }}
                  >
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </HerbSlip>
              ))}
            </div>
            {col.note ? (
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  padding: "16px 14px",
                  background: "rgba(27,18,11,0.62)",
                  border: `2px solid ${col.tone}`,
                  borderRadius: 5,
                  ...enter(f, 90 + i * 12, 0, 14),
                }}
              >
                <CinnabarSeal label={col.seal ?? "落名规则"} delay={98 + i * 12} rotation={-2} tone={col.tone} />
                <span style={{ fontSize: 22, fontWeight: 800, color: "#efe3cd", textAlign: "center", lineHeight: 1.5 }}>
                  {col.note}
                </span>
              </div>
            ) : null}
          </div>
        ))}
        <div
          data-final-knowledge="signature-equivalent-forms"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -4,
            display: "flex",
            justifyContent: "center",
            gap: 10,
            ...enter(f, 130, 0, 12),
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 850,
              color: "#efe3cd",
              background: "rgba(27,18,11,0.86)",
              border: "2px solid #7a5639",
              borderRadius: 4,
              padding: "8px 18px",
            }}
          >
            签名 · 盖章 · 按指印 · 捺印
            <ThinUnderline tone={T.brass}>四者等效</ThinUnderline>
            ，法律另有要求的从其要求
          </span>
        </div>
      </div>
    </CabinetShell>
  );
};
