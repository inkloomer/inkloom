import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Building2, SearchX, Ban, Users, Gavel, FileBadge, FileText, Stamp } from 'lucide-react';
import { CLAMP } from "../../../../shared/remotion-runtime";
import { E, EnamelPlate, GateStamp, Shell, fadeIn, riseIn } from "./theme";

/* Static audit inventory: data-final-knowledge="unit-violation-scope" data-final-knowledge="unit-penalty-rules" data-final-knowledge="unit-person-escalation" data-final-knowledge="unit-crime-liability" data-final-knowledge="documents-approval-comparison" data-stateful-source="unit-penalty-order" data-stateful-terminal="unit-penalty-order" data-stateful-source="person-liability-token" data-stateful-terminal="person-liability-token" */

// 两类妨害行为触发单位罚款；责任升级至主要负责人或直接责任人；构成犯罪再分叉出刑事责任
export const UnitMeasuresForkScene: React.FC = () => {
  const f = useCurrentFrame();
  // 两枚罚款令牌：自行为站台驶向单位
  const orderAY = interpolate(f, [54, 92], [96, 200], CLAMP);
  const orderAX = interpolate(f, [54, 92], [400, 620], CLAMP);
  const orderBY = interpolate(f, [66, 104], [306, 200], CLAMP);
  const orderBX = interpolate(f, [66, 104], [400, 620], CLAMP);
  const orderFade = interpolate(f, [96, 108], [1, 0], CLAMP);
  const showOrder = interpolate(f, [48, 58], [0, 1], CLAMP);

  return (
    <Shell code="12.3" title="对妨碍诉讼的强制措施" subtitle="对单位的措施">
      <div
        data-layout="unit-responsibility-fork"
        data-visual-anchor="role-pair"
        data-visual-grammar="obstruction-behaviors-trigger-the-unit-fine,liability-escalates-to-responsible-persons,crime-fork-opens-criminal-liability,documents-and-approval-close-the-trio"
        data-text-treatments="label-block,external-negation,chip"
        data-focal-rule="unit-measures-fork-rule"
        data-focal-channels="motion,contrast,enclosure"
        style={{ position: "absolute", inset: 0 }}
      >
        <Building2 size={175} color={E.steel} strokeWidth={1.1} style={{ position: "absolute", left: 700, top: 120, opacity: 0.08, pointerEvents: "none" }} />

        {/* 左列：两类妨害行为 */}
        <div data-final-knowledge="unit-violation-scope" style={{ position: "absolute", left: 0, top: 0, width: 520, height: 420 }}>
          <div style={{ position: "absolute", left: 0, top: 20, width: 520, height: 170, ...riseIn(f, 8) }}>
            <EnamelPlate edge={E.warn} style={{ height: "100%", padding: "14px 20px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <SearchX size={34} color={E.warn} />
                <span style={{ fontSize: 21, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>拒绝或妨碍人民法院<span style={{ color: E.warn }}>调查取证</span></span>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#4a4030" }}>单位负有协助义务</div>
            </EnamelPlate>
          </div>
          <div style={{ position: "absolute", left: 0, top: 230, width: 520, height: 170, ...riseIn(f, 22) }}>
            <EnamelPlate edge={E.warn} style={{ height: "100%", padding: "14px 20px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Ban size={34} color={E.warn} />
                <span style={{ fontSize: 21, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>拒绝协助人民法院<span style={{ color: E.warn }}>执行</span></span>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#4a4030" }}>两类行为任一出现即可处罚</div>
            </EnamelPlate>
          </div>
        </div>

        {/* 中列：单位 */}
        <div
          data-final-knowledge="unit-penalty-rules"
          data-stateful-source="person-liability-token"
          style={{ position: "absolute", left: 640, top: 40, width: 480, height: 390, ...riseIn(f, 34) }}
        >
          <EnamelPlate edge={E.gold} style={{ height: "100%", padding: "18px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Building2 size={36} color={E.gold} />
              <span style={{ fontSize: 26, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>该单位</span>
            </div>
            <div
              data-stateful-terminal="unit-penalty-order"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                border: "3px solid " + E.gold,
                background: "rgba(217,161,59,.16)",
                borderRadius: 8,
                padding: "12px 16px",
                opacity: fadeIn(f, 104, 14),
                transform: `scale(${interpolate(f, [104, 118], [0.86, 1], CLAMP)})`,
              }}
            >
              <span style={{ padding: "4px 14px", background: E.gold, color: "#3a3226", fontSize: 20, fontWeight: 950, borderRadius: 5 }}>罚款</span>
              <span style={{ fontSize: 20, fontWeight: 900 }}>对该单位进行罚款</span>
            </div>
            <div style={{ fontSize: 18.5, fontWeight: 800, lineHeight: 1.6, color: "#4a4030", opacity: fadeIn(f, 124, 14) }}>
              单位受罚不停步：仍可对<span style={{ background: "rgba(217,161,59,.22)", padding: "1px 6px", fontWeight: 900 }}>主要负责人或者直接责任人</span>追责
            </div>
          </EnamelPlate>
        </div>

        {/* 行进中的罚款令牌 ×2 */}
        <div
          data-stateful-source="unit-penalty-order"
          style={{
            position: "absolute",
            left: orderAX,
            top: orderAY,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: E.gold,
            color: "#3a3226",
            borderRadius: 999,
            padding: "5px 14px",
            fontSize: 18,
            fontWeight: 950,
            boxShadow: "0 6px 14px rgba(0,0,0,.5)",
            opacity: showOrder * orderFade,
            zIndex: 3,
          }}
        >
          <Stamp size={20} color="#3a3226" />
          罚款
        </div>
        <div
          style={{
            position: "absolute",
            left: orderBX,
            top: orderBY,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: E.gold,
            color: "#3a3226",
            borderRadius: 999,
            padding: "5px 14px",
            fontSize: 18,
            fontWeight: 950,
            boxShadow: "0 6px 14px rgba(0,0,0,.5)",
            opacity: showOrder * orderFade,
            zIndex: 3,
          }}
        >
          <Stamp size={20} color="#3a3226" />
          罚款
        </div>

        {/* 升级连线：单位 → 责任人 */}
        <div style={{ position: "absolute", left: 1100, top: 180, width: 160, height: 60 }}>
          <div style={{ position: "absolute", left: 0, top: 28, width: interpolate(f, [134, 154], [0, 150], CLAMP), height: 5, background: E.gold }} />
          <span style={{ position: "absolute", left: 34, top: -6, fontSize: 16, fontWeight: 900, color: E.gold, opacity: fadeIn(f, 150, 10) }}>升级追责</span>
        </div>

        {/* 右列：责任人 + 刑事责任 */}
        <div
          data-final-knowledge="unit-person-escalation"
          data-stateful-terminal="person-liability-token"
          style={{ position: "absolute", left: 1240, right: 0, top: 40, height: 230, ...riseIn(f, 150) }}
        >
          <EnamelPlate style={{ height: "100%", padding: "14px 22px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Users size={34} color={E.plateEdge} />
              <span style={{ fontSize: 22, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>主要负责人或者直接责任人</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ padding: "4px 14px", background: E.warn, color: "#f4efdd", fontSize: 19, fontWeight: 950, borderRadius: 5, opacity: fadeIn(f, 172, 12) }}>罚款</span>
              <span style={{ padding: "4px 14px", background: E.warn, color: "#f4efdd", fontSize: 19, fontWeight: 950, borderRadius: 5, opacity: fadeIn(f, 184, 12) }}>拘留</span>
              <span style={{ fontSize: 18.5, fontWeight: 800, color: "#4a4030" }}>予以罚款、拘留</span>
            </div>
          </EnamelPlate>
        </div>
        <div style={{ position: "absolute", left: 1516, top: 268, width: 5, height: interpolate(f, [206, 224], [0, 56], CLAMP), background: E.warn }} />
        <div
          data-final-knowledge="unit-crime-liability"
          style={{ position: "absolute", left: 1240, right: 0, top: 324, height: 180, ...riseIn(f, 220) }}
        >
          <EnamelPlate edge={E.warn} style={{ height: "100%", padding: "14px 22px", display: "flex", alignItems: "center", gap: 16 }}>
            <Gavel size={38} color={E.warn} style={{ opacity: fadeIn(f, 236, 12) }} />
            <div style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.5 }}>
              <b>构成犯罪</b>的，依法追究<span style={{ background: "rgba(181,67,47,.16)", padding: "1px 6px", fontWeight: 900 }}>刑事责任</span>
            </div>
          </EnamelPlate>
        </div>

        {/* 底部收束：三种措施的文书与批准 */}
        <div
          data-final-knowledge="documents-approval-comparison"
          style={{ position: "absolute", left: 0, right: 0, top: 560, bottom: 0, ...riseIn(f, 270) }}
        >
          <EnamelPlate edge={E.gold} style={{ height: "100%", padding: "12px 26px", display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FileBadge size={30} color={E.gold} />
              <span style={{ fontSize: 20, fontWeight: 900 }}>拘传 → <b>拘传票</b></span>
            </div>
            <span style={{ fontSize: 24, fontWeight: 950, color: E.gold }}>｜</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FileText size={30} color={E.gold} />
              <span style={{ fontSize: 20, fontWeight: 900 }}>罚款、拘留 · 单位措施 → <b>决定书</b></span>
            </div>
            <span style={{ fontSize: 24, fontWeight: 950, color: E.gold }}>｜</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Stamp size={30} color={E.gold} />
              <span style={{ fontSize: 20, fontWeight: 900 }}>均经<b>院长批准</b></span>
            </div>
            <span style={{ marginLeft: "auto" }}>
              <GateStamp label="文书不同 · 批准相同" delay={300} rotation={-2} />
            </span>
          </EnamelPlate>
        </div>
      </div>
    </Shell>
  );
};
