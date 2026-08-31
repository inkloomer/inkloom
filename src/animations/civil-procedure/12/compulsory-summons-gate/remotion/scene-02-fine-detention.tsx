import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { AlertTriangle, Stamp, Banknote, Timer, BellRing, CornerUpRight, FileText, Scale } from 'lucide-react';
import { CLAMP } from "../../../../shared/remotion-runtime";
import { E, EnamelPlate, GateStamp, Shell, fadeIn, riseIn } from "./theme";

/* Static audit inventory: data-final-knowledge="measures-document-approval" data-final-knowledge="fines-amount-rules" data-final-knowledge="detention-day-rules" data-final-knowledge="detention-family-notice" data-final-knowledge="reconsideration-once-rule" data-stateful-source="reconsideration-petition" data-stateful-terminal="reconsideration-petition" */

// 强制措施经院长批准分叉两路；复议令牌沿走廊右行再上行，抵达上一级法院，执行传送带不停
export const FineDetentionDeskScene: React.FC = () => {
  const f = useCurrentFrame();
  // 复议令牌：先沿绿色走廊右行，再上行进入上一级法院
  const appealX = interpolate(f, [204, 232], [320, 1430], CLAMP);
  const appealY = interpolate(f, [234, 260], [206, 96], CLAMP);
  const appealFade = interpolate(f, [198, 210], [0, 1], CLAMP);
  const appealArrive = interpolate(f, [256, 268], [1, 0], CLAMP);
  const beltOffset = (f * 4) % 44;

  return (
    <Shell code="12.2" title="对妨碍诉讼的强制措施" subtitle="罚款和拘留：程序与救济">
      <div
        data-layout="measure-dispatch-desk"
        data-visual-anchor="document-fork"
        data-visual-grammar="president-approval-gates-both-measures,fines-and-detention-split-into-two-amount-lanes,reconsideration-climbs-while-execution-keeps-running"
        data-text-treatments="chip,soft-highlight,stamp"
        data-focal-rule="fine-detention-desk-rule"
        data-focal-channels="motion,connector,enclosure"
        style={{ position: "absolute", inset: 0 }}
      >
        <Scale size={170} color={E.steel} strokeWidth={1.1} style={{ position: "absolute", left: 950, top: 10, opacity: 0.08, pointerEvents: "none" }} />

        {/* 入口：罚款和拘留 */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 420, height: 168, ...riseIn(f, 8) }}>
          <EnamelPlate style={{ height: "100%", padding: "14px 20px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <AlertTriangle size={36} color={E.warn} />
              <span style={{ fontSize: 25, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>罚款和拘留</span>
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#4a4030" }}>针对妨碍诉讼的行为作出</div>
          </EnamelPlate>
        </div>

        {/* 院长批准闸口 */}
        <div
          data-final-knowledge="measures-document-approval"
          style={{ position: "absolute", left: 500, top: 0, width: 380, height: 168, ...riseIn(f, 22) }}
        >
          <EnamelPlate edge={E.gold} style={{ height: "100%", padding: "14px 22px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Stamp size={36} color={E.gold} style={{ opacity: fadeIn(f, 64, 10), transform: `scale(${interpolate(f, [64, 76], [1.5, 1], CLAMP)})` }} />
              <span style={{ fontSize: 25, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>院长批准</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18, fontWeight: 800, color: "#4a4030" }}>
              <FileText size={22} color={E.plateEdge} style={{ opacity: fadeIn(f, 78, 10) }} />
              制作<b>决定书</b>后方可实施
            </div>
          </EnamelPlate>
        </div>

        {/* 上一级法院（复议终到） */}
        <div
          data-stateful-terminal="reconsideration-petition"
          style={{ position: "absolute", left: 1180, right: 0, top: 0, height: 168, ...riseIn(f, 180, -18) }}
        >
          <EnamelPlate edge={E.pass} style={{ height: "100%", padding: "14px 22px", display: "flex", alignItems: "center", gap: 14 }}>
            <CornerUpRight size={38} color={E.pass} style={{ opacity: fadeIn(f, 252, 12) }} />
            <div>
              <div style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>向<span style={{ color: E.warn }}>上一级法院</span>申请复议</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#4a4030", marginTop: 4 }}>复议一次 · 拘传无此救济</div>
            </div>
          </EnamelPlate>
        </div>

        {/* 批准后下行分叉母线 + 复议走廊（绿） */}
        <div style={{ position: "absolute", left: 0, top: 168, right: 0, height: 72 }}>
          <div style={{ position: "absolute", left: 688, top: 0, width: 5, height: interpolate(f, [96, 108], [0, 34], CLAMP), background: E.steel }} />
          <div style={{ position: "absolute", left: interpolate(f, [104, 120], [688, 438], CLAMP), top: 34, width: interpolate(f, [104, 120], [0, 250], CLAMP), height: 5, background: E.steel }} />
          <div style={{ position: "absolute", left: 688, top: 34, width: interpolate(f, [108, 124], [0, 674], CLAMP), height: 5, background: E.steel }} />
          <div style={{ position: "absolute", left: 436, top: 34, width: 5, height: interpolate(f, [120, 136], [0, 34], CLAMP), background: E.steel }} />
          <div style={{ position: "absolute", left: 1360, top: 34, width: 5, height: interpolate(f, [124, 140], [0, 34], CLAMP), background: E.steel }} />
          <div style={{ position: "absolute", left: 320, top: 58, width: interpolate(f, [190, 212], [0, 1116], CLAMP), height: 4, background: E.pass, opacity: 0.6 }} />
          <div style={{ position: "absolute", left: 1452, top: 0, width: 4, height: interpolate(f, [228, 240], [0, 58], CLAMP), background: E.pass, opacity: 0.6 }} />
        </div>

        {/* 罚款车道 */}
        <div
          data-final-knowledge="fines-amount-rules"
          style={{ position: "absolute", left: 0, top: 240, width: 870, height: 290, ...riseIn(f, 118) }}
        >
          <EnamelPlate style={{ height: "100%", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Banknote size={34} color={E.gold} />
              <span style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>罚款</span>
              <span style={{ padding: "3px 12px", border: "2.5px solid " + E.plateEdge, borderRadius: 6, fontSize: 17, fontWeight: 900, opacity: fadeIn(f, 138, 12) }}>决定书</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
              <div style={{ border: "3px solid " + E.gold, background: "rgba(217,161,59,.14)", borderRadius: 8, padding: "10px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#4a4030" }}>个人</div>
                <div style={{ fontSize: 27, fontWeight: 950 }}><span style={{ fontSize: 33, color: E.warn }}>10 万元</span>以下</div>
                <div style={{ height: 9, background: "rgba(58,50,38,.14)", borderRadius: 5 }}>
                  <div style={{ height: 9, borderRadius: 5, background: E.gold, width: interpolate(f, [150, 176], [0, 84], CLAMP) }} />
                </div>
              </div>
              <div style={{ border: "3px solid " + E.gold, background: "rgba(217,161,59,.14)", borderRadius: 8, padding: "10px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#4a4030" }}>单位</div>
                <div style={{ fontSize: 27, fontWeight: 950 }}><span style={{ fontSize: 33, color: E.warn }}>5 万～100 万元</span></div>
                <div style={{ height: 9, background: "rgba(58,50,38,.14)", borderRadius: 5, position: "relative" }}>
                  <div style={{ position: "absolute", left: interpolate(f, [162, 188], [0, 34], CLAMP), top: 0, width: interpolate(f, [162, 188], [0, 312], CLAMP), height: 9, borderRadius: 5, background: E.gold }} />
                  <div style={{ position: "absolute", left: 4, top: -4, fontSize: 12, fontWeight: 900, color: "#4a4030", opacity: fadeIn(f, 186, 10) }}>5万</div>
                  <div style={{ position: "absolute", right: 2, top: -4, fontSize: 12, fontWeight: 900, color: "#4a4030", opacity: fadeIn(f, 186, 10) }}>100万</div>
                </div>
              </div>
            </div>
          </EnamelPlate>
        </div>

        {/* 拘留车道 */}
        <div
          data-final-knowledge="detention-day-rules"
          style={{ position: "absolute", left: 930, right: 0, top: 240, height: 290, ...riseIn(f, 128) }}
        >
          <EnamelPlate style={{ height: "100%", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Timer size={34} color={E.warn} />
              <span style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>拘留</span>
              <span style={{ padding: "3px 12px", border: "2.5px solid " + E.plateEdge, borderRadius: 6, fontSize: 17, fontWeight: 900, opacity: fadeIn(f, 148, 12) }}>决定书</span>
              <span style={{ marginLeft: "auto", fontSize: 25, fontWeight: 950 }}><span style={{ fontSize: 33, color: E.warn }}>15 日</span>以内</span>
            </div>
            <div
              data-final-knowledge="detention-family-notice"
              style={{ flex: 1, display: "flex", alignItems: "center", gap: 14, border: "3px solid " + E.warn, background: "rgba(181,67,47,.10)", borderRadius: 8, padding: "10px 18px", ...riseIn(f, 168) }}
            >
              <BellRing size={32} color={E.warn} style={{ opacity: fadeIn(f, 184, 12) }} />
              <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.55 }}>
                拘留后应当在<span style={{ background: "rgba(181,67,47,.16)", padding: "1px 6px", fontWeight: 900 }}>24 小时内</span>通知其<b>家属</b>
                <br />
                <span style={{ fontSize: 17.5, color: "#4a4030" }}>确实无法按时通知或者通知不到的，应当<b>记录在案</b></span>
              </div>
            </div>
          </EnamelPlate>
        </div>

        {/* 行进中的复议令牌 */}
        <div
          data-stateful-source="reconsideration-petition"
          style={{
            position: "absolute",
            left: appealX,
            top: appealY,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: E.pass,
            color: "#f4efdd",
            borderRadius: 999,
            padding: "6px 16px",
            fontSize: 19,
            fontWeight: 950,
            boxShadow: "0 6px 14px rgba(0,0,0,.5)",
            opacity: appealFade * appealArrive,
            zIndex: 3,
          }}
        >
          <CornerUpRight size={22} color="#f4efdd" />
          复议
        </div>

        {/* 底部：执行传送带（复议期间照常运转） */}
        <div
          data-final-knowledge="reconsideration-once-rule"
          style={{ position: "absolute", left: 0, right: 0, top: 560, bottom: 0, ...riseIn(f, 270) }}
        >
          <EnamelPlate edge={E.gold} style={{ height: "100%", padding: "12px 26px", display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                flex: 1,
                height: 18,
                borderRadius: 9,
                background: `repeating-linear-gradient(90deg, ${E.gold} 0 20px, transparent 20px 44px)`,
                backgroundPositionX: `${beltOffset}px`,
                opacity: 0.85,
              }}
            />
            <span style={{ fontSize: 21, fontWeight: 950, color: "#4a4030" }}>复议期间</span>
            <GateStamp label="不停止执行" delay={296} rotation={-2} />
          </EnamelPlate>
        </div>
      </div>
    </Shell>
  );
};
