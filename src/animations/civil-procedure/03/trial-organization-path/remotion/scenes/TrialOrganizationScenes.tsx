import {
  Ban,
  Building2,
  CheckCircle2,
  Gavel,
  Layers,
  Scale,
  ShieldAlert,
  Users,
  UserRound,
  XCircle,
  GitBranch,
  Landmark,
  FileText,
  RotateCcw,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  ENTER_EASING,
  FlowArrow,
  GateChip,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';

/* ========== 01 路径闸门：先锁审级与程序 ========== */
export const PathGateScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [18, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [130, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line1 = interpolate(frame, [50, 95], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line2 = interpolate(frame, [110, 155], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="路径闸门" title="先锁审级与程序类型" accent="teal" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 40, fontWeight: 900, lineHeight: 1.22}}>
          独任 / 合议 · 不要直接猜 · 先走 <Keyword accent="teal">两道闸门</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 380,
          width: 1720,
          height: 220,
          boxSizing: 'border-box',
          padding: '28px 32px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          opacity: p1,
        }}
      >
        <IconNode icon={GitBranch} label="起点" detail="谁来审？" accent="teal" style={{width: 280, minHeight: 140}} />
        <div style={{width: 160, position: 'relative', height: 80}}>
          <FlowArrow left={6} top={18} width={130} progress={line1} accent="blue" label="第一闸" />
        </div>
        <div style={{opacity: p2}}>
          <IconNode icon={Layers} label="审级" detail="一审 / 二审 / 再审" accent="blue" style={{width: 340, minHeight: 140}} />
        </div>
        <div style={{width: 160, position: 'relative', height: 80, opacity: p2}}>
          <FlowArrow left={6} top={18} width={130} progress={line2} accent="gold" label="第二闸" />
        </div>
        <div style={{opacity: p3}}>
          <IconNode icon={FileText} label="程序类型" detail="简易 / 普通 / 特别" accent="gold" style={{width: 360, minHeight: 140}} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 660,
          display: 'flex',
          gap: 24,
          opacity: p3,
          translate: `0px ${interpolate(frame, [130, 180], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={Gavel} label="再核对条件" detail="例外 · 禁止 · 当事人同意" accent="red" style={{width: 560, minHeight: 150}} />
        <IconNode icon={Scale} label="输出结论" detail="独任制 或 合议制" accent="purple" style={{width: 560, minHeight: 150}} />
        <IconNode icon={RotateCcw} label="不宜独任" detail="裁定转合议庭" accent="gold" style={{width: 520, minHeight: 150}} />
      </div>
    </div>
  );
};

/* ========== 02 一审：简易必独任；普通原则合议；基层例外 ========== */
export const FirstInstanceScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [140, 195], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [100, 150], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="一审程序" title="简易必独任 · 普通看例外" accent="blue" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          一审分流：程序类型决定默认组织，再看 <Keyword accent="gold">基层例外</Keyword>
        </div>
      </MaskedReveal>

      {/* 双车道：简易 vs 普通 */}
      <div style={{position: 'absolute', left: 100, top: 360, display: 'flex', gap: 28, opacity: p1}}>
        <div
          style={{
            width: 820,
            minHeight: 220,
            boxSizing: 'border-box',
            padding: '26px 28px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20}}>
            <UserRound size={40} color={PALETTE.blue} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.blue}}>简易程序</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <IconNode icon={Gavel} label="必独任" detail="审判员一人" accent="blue" style={{width: 360, minHeight: 110}} />
            <GateChip label="无例外" accent="blue" />
          </div>
        </div>

        <div
          style={{
            width: 880,
            minHeight: 220,
            boxSizing: 'border-box',
            padding: '26px 28px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            opacity: p2,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20}}>
            <Users size={40} color={PALETTE.teal} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.teal}}>普通程序 · 原则</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <IconNode icon={Users} label="合议制" detail="审判员 / +陪审员" accent="teal" style={{width: 380, minHeight: 110}} />
            <GateChip label="默认" accent="teal" />
          </div>
        </div>
      </div>

      {/* 普通程序例外路径 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 640,
          width: 1720,
          height: 200,
          boxSizing: 'border-box',
          padding: '24px 30px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.gold}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          opacity: p3,
          translate: `0px ${interpolate(frame, [140, 195], [22, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={Building2} label="基层法院" detail="法院层级门槛" accent="gold" compact style={{width: 280}} />
        <div style={{width: 120, position: 'relative', height: 70}}>
          <FlowArrow left={4} top={12} width={90} progress={line} accent="gold" />
        </div>
        <IconNode icon={CheckCircle2} label="事实清楚" detail="基本事实清楚" accent="gold" compact style={{width: 300}} />
        <div style={{width: 36, height: 4, backgroundColor: PALETTE.line}} />
        <IconNode icon={Scale} label="权利义务明确" detail="关系清晰" accent="gold" compact style={{width: 320}} />
        <div style={{width: 36, height: 4, backgroundColor: PALETTE.line}} />
        <IconNode icon={UserRound} label="可独任" detail="普通程序例外" accent="red" compact style={{width: 280}} />
      </div>
    </div>
  );
};

/* ========== 03 二审：四道门同时满足 ========== */
export const SecondInstanceScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const gates = [0, 1, 2, 3].map((i) =>
    interpolate(frame, [40 + i * 28, 75 + i * 28], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: ENTER_EASING,
    }),
  );
  const pFail = interpolate(frame, [180, 230], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [55, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  const gateItems = [
    {icon: Landmark, label: '中级法院', detail: '法院层级', accent: 'gold' as const, width: 300},
    {icon: FileText, label: '简易或不服裁定', detail: '案件来源', accent: 'gold' as const, width: 340},
    {icon: CheckCircle2, label: '清楚·明确', detail: '事实与权利义务', accent: 'gold' as const, width: 300},
    {icon: Users, label: '双方同意', detail: '当事人合意', accent: 'gold' as const, width: 280},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="二审程序" title="四道门同时满足" accent="gold" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          二审原则合议 · 独任须 <Keyword accent="gold">四条件齐备</Keyword>
        </div>
      </MaskedReveal>

      {/* 四道门串联 */}
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 380,
          width: 1740,
          height: 200,
          boxSizing: 'border-box',
          padding: '22px 24px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          opacity: p1,
        }}
      >
        {gateItems.map((item, index) => (
          <div key={item.label} style={{display: 'flex', alignItems: 'center', gap: 10, opacity: gates[index]}}>
            <IconNode
              icon={item.icon}
              label={item.label}
              detail={item.detail}
              accent={item.accent}
              compact
              style={{width: item.width}}
            />
            {index < gateItems.length - 1 ? (
              <div style={{width: 58, position: 'relative', height: 60}}>
                <FlowArrow left={0} top={8} width={45} progress={line} accent="gold" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* 通过 / 不通过 分叉 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 640,
          display: 'flex',
          gap: 28,
          opacity: pFail,
          translate: `0px ${interpolate(frame, [180, 230], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div
          style={{
            width: 820,
            boxSizing: 'border-box',
            padding: '28px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            ...baseTextStyle,
          }}
        >
          <CheckCircle2 size={48} color={PALETTE.teal} strokeWidth={2.3} />
          <div>
            <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.teal}}>四门全过</div>
            <div style={{marginTop: 8, fontSize: 24, fontWeight: 750, color: PALETTE.muted}}>→ 可以独任审理</div>
          </div>
        </div>
        <div
          style={{
            width: 860,
            boxSizing: 'border-box',
            padding: '28px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            ...baseTextStyle,
          }}
        >
          <XCircle size={48} color={PALETTE.red} strokeWidth={2.3} />
          <div>
            <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.red}}>任一不过</div>
            <div style={{marginTop: 8, fontSize: 24, fontWeight: 750, color: PALETTE.muted}}>→ 回到合议制</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========== 04 关键结论：中院一审案件双禁独任 ========== */
export const MidCourtBanScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [150, 210], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [55, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="关键结论" title="中院一审 · 双禁独任" accent="red" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          中级法院一审的案件 · 一审与二审 <Keyword accent="red">均不能独任</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 380,
          width: 1600,
          height: 180,
          boxSizing: 'border-box',
          padding: '28px 36px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.red}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          opacity: p1,
        }}
      >
        <IconNode icon={Landmark} label="中院一审案件" detail="起点锁定" accent="red" style={{width: 420, minHeight: 120}} />
        <div style={{width: 180, position: 'relative', height: 80}}>
          <FlowArrow left={10} top={18} width={140} progress={line} accent="red" label="推导" />
        </div>
        <IconNode icon={Ban} label="组织禁区" detail="审级链条全锁" accent="red" style={{width: 380, minHeight: 120}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 620,
          display: 'flex',
          gap: 32,
          opacity: p2,
        }}
      >
        <div
          style={{
            width: 760,
            boxSizing: 'border-box',
            padding: '30px 34px',
            backgroundColor: PALETTE.redSoft,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            ...baseTextStyle,
          }}
        >
          <Ban size={52} color={PALETTE.red} strokeWidth={2.3} />
          <div>
            <div style={{fontSize: 34, fontWeight: 900, color: PALETTE.red}}>一审不能独任</div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: PALETTE.muted}}>非基层法院 · 无普通独任例外</div>
          </div>
        </div>
        <div
          style={{
            width: 760,
            boxSizing: 'border-box',
            padding: '30px 34px',
            backgroundColor: PALETTE.redSoft,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            ...baseTextStyle,
          }}
        >
          <Ban size={52} color={PALETTE.red} strokeWidth={2.3} />
          <div>
            <div style={{fontSize: 34, fontWeight: 900, color: PALETTE.red}}>二审也不能独任</div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: PALETTE.muted}}>来源非基层简易 / 条件链断裂</div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={190} style={{position: 'absolute', left: 280, top: 840, opacity: p3}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            padding: '18px 28px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 10,
            fontSize: 28,
            fontWeight: 850,
          }}
        >
          <ShieldAlert size={36} color={PALETTE.gold} />
          口诀：中院一审案 → 一审合议 · 二审合议
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 05 易混：独任≠简易 / 合议≠普通 ========== */
export const MisconceptionsScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [80, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [150, 200], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="高频陷阱" title="组织 ≠ 程序类型" accent="purple" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          双车道对照 · 切断 <Keyword accent="purple">错误等价</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 100, top: 340, display: 'flex', gap: 28}}>
        {/* 车道 A */}
        <div
          style={{
            width: 840,
            boxSizing: 'border-box',
            padding: '24px 28px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            opacity: p1,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18}}>
            <XCircle size={40} color={PALETTE.red} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.red}}>独任制 ≠ 简易程序</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <IconNode icon={FileText} label="简易→必独任" detail="单向成立" accent="red" compact style={{width: '100%'}} />
            <IconNode icon={Building2} label="普通也可独任" detail="基层 + 清楚明确" accent="gold" compact style={{width: '100%'}} />
            <IconNode icon={Gavel} label="特别/督促等" detail="亦可独任" accent="gold" compact style={{width: '100%'}} />
          </div>
        </div>

        {/* 车道 B */}
        <div
          style={{
            width: 840,
            boxSizing: 'border-box',
            padding: '24px 28px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            opacity: p2,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18}}>
            <XCircle size={40} color={PALETTE.blue} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.blue}}>合议制 ≠ 普通程序</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <IconNode icon={Users} label="普通→原则合议" detail="默认组织" accent="blue" compact style={{width: '100%'}} />
            <IconNode icon={Scale} label="特别重大疑难" detail="也可合议" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={Landmark} label="除权判决阶段" detail="审判员合议" accent="teal" compact style={{width: '100%'}} />
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 240,
          top: 780,
          opacity: p3,
          ...baseTextStyle,
          fontSize: 28,
          fontWeight: 850,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '16px 28px',
          backgroundColor: PALETTE.purpleSoft,
          border: `2px solid ${PALETTE.purple}`,
          borderRadius: 10,
        }}
      >
        <ShieldAlert size={34} color={PALETTE.purple} />
        先问“谁审”，再问“按什么程序审”——两套坐标系
      </div>
    </div>
  );
};

/* ========== 06 人民陪审员双要件 ========== */
export const JurorsScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [145, 200], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [55, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="06" eyebrow="人民陪审员" title="双要件同时满足" accent="teal" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          陪审员进庭 · 必须 <Keyword accent="teal">一审程序</Keyword> + <Keyword accent="blue">诉讼程序</Keyword>
        </div>
      </MaskedReveal>

      {/* AND 结构 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 370,
          width: 1680,
          height: 200,
          boxSizing: 'border-box',
          padding: '26px 30px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          opacity: p1,
        }}
      >
        <IconNode icon={UserRound} label="人民陪审员" detail="候选参审" accent="teal" style={{width: 320, minHeight: 130}} />
        <div style={{width: 140, position: 'relative', height: 80}}>
          <FlowArrow left={6} top={18} width={110} progress={line} accent="teal" label="要件①" />
        </div>
        <IconNode icon={Layers} label="一审程序" detail="含发回重审 · 一审再审" accent="teal" style={{width: 400, minHeight: 130}} />
        <div style={{width: 48, height: 4, backgroundColor: PALETTE.line, opacity: p2}} />
        <div style={{opacity: p2, display: 'flex', alignItems: 'center', gap: 16}}>
          <GateChip label="且" accent="purple" />
          <IconNode icon={Scale} label="诉讼程序" detail="争讼案件" accent="blue" style={{width: 320, minHeight: 130}} />
        </div>
      </div>

      {/* 通过 / 排除 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 630,
          display: 'flex',
          gap: 28,
          opacity: p3,
          translate: `0px ${interpolate(frame, [145, 200], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div
          style={{
            width: 800,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18}}>
            <CheckCircle2 size={40} color={PALETTE.teal} strokeWidth={2.3} />
            <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.teal}}>可以有陪审员</div>
          </div>
          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <IconNode icon={Gavel} label="一审诉讼" detail="普通 / 简易" accent="teal" compact style={{width: 340}} />
            <IconNode icon={RotateCcw} label="发回 / 一审再审" detail="仍属一审程序" accent="teal" compact style={{width: 360}} />
          </div>
        </div>

        <div
          style={{
            width: 820,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18}}>
            <Ban size={40} color={PALETTE.red} strokeWidth={2.3} />
            <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.red}}>不能有陪审员</div>
          </div>
          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <IconNode icon={Landmark} label="二审 / 提审" detail="非一审程序" accent="red" compact style={{width: 340}} />
            <IconNode icon={FileText} label="特别程序等" detail="非诉讼程序" accent="red" compact style={{width: 360}} />
          </div>
        </div>
      </div>
    </div>
  );
};
