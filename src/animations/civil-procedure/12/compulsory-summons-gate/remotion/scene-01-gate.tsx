import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { UserCheck, Mail, UserX, Stamp, FileBadge, DoorOpen, Landmark } from 'lucide-react';
import { CLAMP } from "../../../../shared/remotion-runtime";
import { E, EnamelPlate, GateStamp, Shell, fadeIn, riseIn, drawLine } from "./theme";

/* Static audit inventory: data-final-knowledge="summons-object-scope" data-final-knowledge="summons-two-summons-rule" data-final-knowledge="summons-no-justified-reason" data-final-knowledge="summons-approval-warrant" data-stateful-source="summons-case-file" data-stateful-terminal="summons-case-file" */

// 当事人令牌沿检线行进：对象 → 两次传票传唤 → 无正当理由 → 院长批准 → 拘传票
export const SummonsGateDecisionScene: React.FC = () => {
  const f = useCurrentFrame();
  // 令牌行进关键帧：各站停留盖章后继续前行，终点并入拘传票
  const chipX = interpolate(
    f,
    [30, 62, 70, 102, 112, 144, 152, 176],
    [110, 470, 470, 890, 890, 1270, 1270, 1610],
    CLAMP,
  );
  const chipFade = interpolate(f, [160, 176], [1, 0], CLAMP);
  // 正当理由芯片：自左滑入第三站下方，撞检后被弹回抖动定格
  const pushX = interpolate(f, [150, 172, 230, 240, 252], [-64, 0, 0, -10, 0], CLAMP);
  const pushTilt = interpolate(f, [230, 240, 252], [0, -6, 0], CLAMP);

  return (
    <Shell code="12.1" title="对妨碍诉讼的强制措施" subtitle="拘传：三要件与程序">
      <div
        data-layout="courtroom-entrance-checkline"
        data-visual-anchor="flow-path"
        data-visual-grammar="object-dock-feeds-the-condition-checkline,justified-reason-chip-bounces-off-the-third-check,approval-counter-issues-the-summons-warrant"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="summons-gate-checkline-rule"
        data-focal-channels="motion,connector,contrast"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* 对象：必须到庭的当事人（两类） */}
        <div
          data-final-knowledge="summons-object-scope"
          style={{ position: "absolute", left: 0, right: 0, top: 0, height: 190, ...riseIn(f, 8) }}
        >
          <EnamelPlate style={{ height: "100%", padding: "14px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <UserCheck size={38} color={E.pass} />
              <span style={{ fontSize: 26, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>对象：必须到庭的当事人</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(63,127,95,.12)", border: "2.5px solid " + E.pass, borderRadius: 8, padding: "8px 16px", fontSize: 21, fontWeight: 800, lineHeight: 1.4 }}>
                <span style={{ color: E.pass, fontWeight: 950 }}>1</span>
                <span>负有<b>赡养、抚养、扶养义务</b>的被告</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(63,127,95,.12)", border: "2.5px solid " + E.pass, borderRadius: 8, padding: "8px 16px", fontSize: 21, fontWeight: 800, lineHeight: 1.4 }}>
                <span style={{ color: E.pass, fontWeight: 950 }}>2</span>
                <span><b>不到庭就无法查清案情</b>的当事人</span>
              </div>
            </div>
          </EnamelPlate>
        </div>

        <Landmark size={170} color={E.steel} strokeWidth={1.1} style={{ position: "absolute", right: 6, top: 250, opacity: 0.08, pointerEvents: "none" }} />

        {/* 检线：对象令牌 → 两次传票传唤 → 无正当理由拒不到庭 → 院长批准 → 拘传票 */}
        <div style={{ position: "absolute", left: 0, right: 0, top: 236, height: 250 }}>
          <div style={{ position: "absolute", left: 30, top: 204, height: 5, background: E.steel, ...drawLine(f, 26, 1720, 130) }} />
          {/* 起点站台 */}
          <div style={{ position: "absolute", left: 20, top: 20, width: 210, height: 148, ...riseIn(f, 18) }}>
            <EnamelPlate edge={E.pass} style={{ height: "100%", display: "grid", placeItems: "center", textAlign: "center", padding: 10 }}>
              <div>
                <UserCheck size={34} color={E.pass} style={{ margin: "0 auto 6px" }} />
                <div style={{ fontSize: 21, fontWeight: 950 }}>当事人</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#4a4030" }}>必须到庭</div>
              </div>
            </EnamelPlate>
          </div>
          {/* 站① 两次传票传唤 */}
          <div
            data-final-knowledge="summons-two-summons-rule"
            style={{ position: "absolute", left: 330, top: 20, width: 330, height: 148, ...riseIn(f, 30) }}
          >
            <EnamelPlate style={{ height: "100%", padding: "12px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 22, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>① 两次传票传唤</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={30} color={E.gold} style={{ opacity: fadeIn(f, 44, 12), transform: `translateY(${interpolate(f, [44, 60], [-14, 0], CLAMP)}px)` }} />
                <Mail size={30} color={E.gold} style={{ opacity: fadeIn(f, 54, 12), transform: `translateY(${interpolate(f, [54, 70], [-14, 0], CLAMP)}px)` }} />
                <span style={{ fontSize: 18, fontWeight: 800, color: "#4a4030" }}>传票逐次送达</span>
              </div>
            </EnamelPlate>
          </div>
          {/* 站② 无正当理由拒不到庭 */}
          <div
            data-final-knowledge="summons-no-justified-reason"
            style={{ position: "absolute", left: 750, top: 20, width: 330, height: 148, ...riseIn(f, 42) }}
          >
            <EnamelPlate edge={E.warn} style={{ height: "100%", padding: "12px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 22, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>② 无正当理由拒不到庭</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <UserX size={30} color={E.warn} style={{ opacity: fadeIn(f, 100, 12) }} />
                <span style={{ fontSize: 18, fontWeight: 800, color: "#4a4030" }}>拒不到庭才触发拘传</span>
              </div>
            </EnamelPlate>
          </div>
          {/* 院长批准 + 拘传票 */}
          <div
            data-final-knowledge="summons-approval-warrant"
            style={{ position: "absolute", left: 1160, right: 0, top: 20, height: 148, ...riseIn(f, 54) }}
          >
            <EnamelPlate edge={E.gold} style={{ height: "100%", padding: "12px 20px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "grid", placeItems: "center", gap: 4 }}>
                <Stamp size={34} color={E.gold} style={{ opacity: fadeIn(f, 146, 10), transform: `scale(${interpolate(f, [146, 158], [1.5, 1], CLAMP)})` }} />
                <div style={{ fontSize: 20, fontWeight: 950 }}>院长批准</div>
              </div>
              <span style={{ fontSize: 28, fontWeight: 950, color: E.gold, opacity: fadeIn(f, 158, 10) }}>→</span>
              <div
                data-stateful-terminal="summons-case-file"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(217,161,59,.18)",
                  border: "3px solid " + E.gold,
                  borderRadius: 8,
                  padding: "10px 16px",
                  opacity: fadeIn(f, 168, 14),
                }}
              >
                <FileBadge size={34} color={E.gold} />
                <div>
                  <div style={{ fontSize: 22, fontWeight: 950 }}>签发拘传票</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 17, fontWeight: 800, color: "#4a4030" }}>
                    <DoorOpen size={22} color={E.pass} style={{ opacity: fadeIn(f, 186, 10) }} />
                    拘传到庭
                  </div>
                </div>
              </div>
            </EnamelPlate>
          </div>
          {/* 行进中的当事人令牌 */}
          <div
            data-stateful-source="summons-case-file"
            style={{
              position: "absolute",
              left: chipX,
              top: 226,
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
              opacity: chipFade,
              zIndex: 3,
            }}
          >
            <UserCheck size={24} color="#f4efdd" />
            当事人
          </div>
        </div>

        {/* 弹回分支：有正当理由 → 不能拘传 */}
        <div style={{ position: "absolute", left: 40, right: 740, top: 520, bottom: 0 }}>
          <EnamelPlate edge={E.warn} style={{ height: "100%", padding: "12px 22px", display: "flex", alignItems: "center", gap: 18, ...riseIn(f, 140, 20) }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: E.warn,
                color: "#f4efdd",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 19,
                fontWeight: 950,
                opacity: fadeIn(f, 150, 20),
                transform: `translateX(${pushX}px) rotate(${pushTilt}deg)`,
                flexShrink: 0,
              }}
            >
              有正当理由
            </div>
            <UserX size={32} color={E.warn} style={{ opacity: fadeIn(f, 226, 12) }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 22, fontWeight: 950 }}>第二要件不成立</span>
                <GateStamp label="不能拘传" pass={false} delay={238} rotation={-2} />
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.5, color: "#4a4030", marginTop: 6 }}>
                已<b>委托代理人</b>到庭的，本人可以不再出庭（<span style={{ background: "rgba(181,67,47,.14)", padding: "1px 6px", fontWeight: 900 }}>离婚除外</span>）——不适用拘传
              </div>
            </div>
          </EnamelPlate>
        </div>

        {/* 口诀：拘传三要件 */}
        <div style={{ position: "absolute", left: 1180, right: 0, top: 520, bottom: 0, ...riseIn(f, 300, 24) }}>
          <EnamelPlate edge={E.gold} style={{ height: "100%", padding: "12px 22px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ padding: "4px 14px", background: E.gold, color: "#3a3226", fontSize: 19, fontWeight: 950, borderRadius: 5, fontFamily: "var(--inkloom-animation-label, sans-serif)" }}>记忆口诀</span>
              <span style={{ fontSize: 24, fontWeight: 950, fontFamily: "var(--inkloom-animation-title, sans-serif)" }}>拘传三要件</span>
            </div>
            <div style={{ fontSize: 19.5, fontWeight: 800, lineHeight: 1.6, color: "#4a4030" }}>
              <span style={{ background: "rgba(217,161,59,.22)", padding: "1px 6px", fontWeight: 900 }}>必须到庭的当事人</span> ＋ <span style={{ background: "rgba(217,161,59,.22)", padding: "1px 6px", fontWeight: 900 }}>两次传票传唤</span> ＋ <span style={{ background: "rgba(217,161,59,.22)", padding: "1px 6px", fontWeight: 900 }}>无正当理由拒不到庭</span>
              <br />
              须凭<b>拘传票</b>，经<b>院长批准</b>
            </div>
          </EnamelPlate>
        </div>
      </div>
    </Shell>
  );
};
