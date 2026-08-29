import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { CabinetShell, IndexTag, T, enter } from "./theme";

type Exclusion = { name: string; cite: string };

export const ExclusionTierStairScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="exclusion-tier-law-only" data-final-knowledge="exclusion-tier-law-and-regulation" data-final-knowledge="exclusion-tier-law-and-rules" data-final-knowledge="exclusion-tier-law-rules-and-regulations" data-final-knowledge="exclusion-tier-law-regulation-and-department-rules" data-final-knowledge="exclusion-tier-widest-scope" data-final-knowledge="exclusion-ladder-progression" */
  const f = useCurrentFrame();
  const tiers: {
    key: string;
    label: string;
    bar: number;
    tone: string;
    cols: number;
    items: Exclusion[];
  }[] = [
    {
      key: "exclusion-tier-law-only",
      label: "法律",
      bar: 0.17,
      tone: T.cinnabar,
      cols: 5,
      items: [
        { name: "行政处罚时效", cite: "处罚法 36" },
        { name: "执法人数 2 人", cite: "处罚法 42" },
        { name: "处罚简易程序范围", cite: "处罚法 51" },
        { name: "争议期不停止执行", cite: "处罚法 73" },
        { name: "处罚属地主义", cite: "处罚法 84" },
        { name: "治安罚属地主义", cite: "治安法 5" },
        { name: "海警机构海上治安职责", cite: "治安法 142" },
        { name: "公务员回避", cite: "公务员法 78" },
        { name: "冻结期限", cite: "强制法 32" },
        { name: "代履行费用承担", cite: "强制法 51" },
        { name: "复议申请期 / 决定期", cite: "复议法 20、62" },
        { name: "起诉期 / 公开审理", cite: "行诉法 45、46、54" },
        { name: "外国人行政诉讼法律适用", cite: "行诉法 98" },
        { name: "一并审理民事争议可适用民法", cite: "行诉解释 141" },
      ],
    },
    {
      key: "exclusion-tier-law-and-regulation",
      label: "法律、行政法规",
      bar: 0.34,
      tone: T.brassDeep,
      cols: 4,
      items: [
        { name: "许可认可程序", cite: "许可法 54" },
        { name: "有数量限制的许可程序", cite: "许可法 57" },
        { name: "行政许可的收费", cite: "许可法 58" },
        { name: "处罚级别管辖", cite: "处罚法 23" },
        { name: "主观无过错不处罚", cite: "处罚法 33" },
        { name: "查封、扣押期限", cite: "强制法 25" },
        { name: "查封扣押财产销毁方式", cite: "强制法 27" },
        { name: "登记资料特别获取", cite: "公开条例 36" },
      ],
    },
    {
      key: "exclusion-tier-law-and-rules",
      label: "法律、法规",
      bar: 0.5,
      tone: T.mugwort,
      cols: 5,
      items: [
        { name: "行政许可决定期", cite: "许可法 42" },
        { name: "下级机关审查期限", cite: "许可法 43" },
        { name: "信息公开权限", cite: "公开条例 17" },
        { name: "主动公开期限", cite: "公开条例 26" },
        { name: "履行职责期限", cite: "行诉法 47" },
      ],
    },
    {
      key: "exclusion-tier-law-rules-and-regulations",
      label: "法律、法规、规章",
      bar: 0.67,
      tone: T.indigo,
      cols: 5,
      items: [
        { name: "许可延续申请期", cite: "许可法 50" },
        { name: "处罚决定期限", cite: "处罚法 60" },
        { name: "过程性信息可否公开", cite: "公开条例 16" },
        { name: "现场笔录制作形式", cite: "证据规定 15" },
        { name: "损失价值鉴定申请人", cite: "行诉解释 47" },
      ],
    },
    {
      key: "exclusion-tier-law-regulation-and-department-rules",
      label: "法律、行政法规、部门规章",
      bar: 0.84,
      tone: "#7d5aa6",
      cols: 2,
      items: [
        { name: "处罚地域管辖", cite: "处罚法 22" },
        { name: "没收违法所得范围", cite: "处罚法 28" },
      ],
    },
    {
      key: "exclusion-tier-widest-scope",
      label: "法律、法规、规章或其他规范性文件",
      bar: 1,
      tone: "#3f7f86",
      cols: 1,
      items: [{ name: "许可变更、撤回的补偿标准", cite: "许可法司法解释 15" }],
    },
  ];
  return (
    <CabinetShell code="07" title="除外条款六层阶梯" subtitle="可另行规定的规范范围，自法律逐级放宽">
      <div
        data-layout="six-tier-exclusion-ladder"
        data-visual-anchor="boundary"
        data-visual-grammar="six-statutory-tiers-climb-from-law-only-to-any-normative-document,each-tier-widens-the-permission-bar-for-a-different-exception,the-permission-bar-grows-from-left-to-right-down-the-stair,every-exception-keeps-its-own-statute-citation-inside-its-tier"
        data-text-treatments="label-block,chip,thin-underline"
        data-focal-rule="除外条款的可授权范围随层级逐级放宽"
        data-focal-channels="spatial,contrast,enclosure"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-start" }}
      >
        {tiers.map((tier, i) => (
          <div
            key={tier.key}
            data-final-knowledge={tier.key}
            style={{ display: "flex", gap: 16, alignItems: "stretch", ...enter(f, 6 + i * 10, -18, 0) }}
          >
            <div
              style={{
                width: i === 5 ? 360 : 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 7,
                padding: "10px 14px",
                background: "rgba(27,18,11,0.66)",
                border: `2px solid ${tier.tone}`,
                borderRadius: 5,
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 4,
                    background: tier.tone,
                    color: "#f3ead7",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 16,
                    fontWeight: 950,
                    fontFamily: "var(--inkloom-animation-mono, monospace)",
                  }}
                >
                  {i + 1}
                </span>
                <IndexTag
                  label={tier.label}
                  tone={tier.tone}
                  style={{
                    fontSize: 22,
                    whiteSpace: i === 5 ? "normal" : "nowrap",
                    lineHeight: i === 5 ? 1.25 : 1,
                  }}
                />
              </div>
              <div style={{ height: 10, borderRadius: 5, background: "rgba(201,154,78,0.2)", overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${tier.bar * 100}%`,
                    borderRadius: 5,
                    background: tier.tone,
                    transform: `scaleX(${interpolate(f, [22 + i * 10, 44 + i * 10], [0.02, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.out(Easing.cubic),
                    })})`,
                    transformOrigin: "left center",
                  }}
                />
              </div>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#a8907a", letterSpacing: 1 }}>可授权范围</span>
            </div>
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: `repeat(${tier.cols}, 1fr)`,
                gap: 8,
                alignContent: "center",
              }}
            >
              {tier.items.map((item, j) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "8px 12px",
                    background: T.paper,
                    borderLeft: `5px solid ${tier.tone}`,
                    borderRadius: 3,
                    boxShadow: "0 3px 9px rgba(0,0,0,.38)",
                    ...enter(f, 26 + i * 10 + j * 4, 0, 12),
                  }}
                >
                  <span style={{ fontSize: 22, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{item.name}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 15,
                      fontWeight: 950,
                      color: T.inkSoft,
                      whiteSpace: "nowrap",
                      fontFamily: "var(--inkloom-animation-mono, monospace)",
                    }}
                  >
                    {item.cite}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          data-final-knowledge="exclusion-ladder-progression"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            padding: "8px 20px",
            background: "rgba(27,18,11,0.7)",
            border: `2px solid ${T.brass}`,
            borderRadius: 5,
            ...enter(f, 120, 0, 12),
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 850, color: "#efe3cd" }}>
            阶梯越往下，能另行规定的规范性文件
            <span style={{ borderBottom: `2px solid ${T.brass}`, fontWeight: 950 }}>范围越宽</span>
            ；答题先定位该条属于哪一级
          </span>
        </div>
      </div>
    </CabinetShell>
  );
};
