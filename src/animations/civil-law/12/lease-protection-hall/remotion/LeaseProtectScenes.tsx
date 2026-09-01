import type {CSSProperties, ReactNode} from 'react';
import {Hourglass, ArrowRight, Ban, Bell, Car, Coins, Gavel, House, Key, Scale, ScrollText, Stamp, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  shield: '#4F6B52',
  shieldMid: '#648068',
  shieldPale: '#DFEADF',
  cream: '#F5F3EA',
  creamDim: '#E9E7DA',
  edge: '#C8C6B4',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
  mossDeep: '#3F6B54',
  mossDeepPale: '#DCEAE0',
  ink: '#242B24',
  inkSoft: '#6F7A70',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 18,
  style,
}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left'
      ? `-${distance}px 0px`
      : from === 'right'
        ? `${distance}px 0px`
        : from === 'down'
          ? `0px -${distance}px`
          : from === 'none'
            ? '0px 0px'
            : `0px ${distance}px`;
  return (
    <div
      data-final-knowledge={marker}
      style={{
        ...style,
        opacity: p,
        translate: interpolate(frame, [delay, delay + span], [origin, '0px 0px'], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.brick, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        scale: `${prog(frame, delay, span)} 1`,
        transformOrigin: 'left center',
      }}
    />
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(1, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.shield,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(223, 234, 223, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.gold}, ${C.indigoLike}, ${C.brick})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(223, 234, 223, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.shieldMid, borderLeft: `8px solid ${C.gold}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.shieldPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
      </div>
      <header
        style={{
          position: 'absolute',
          left: 290,
          right: 72,
          top: 34,
          height: 88,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 22,
          borderBottom: `2px solid ${C.gold}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.shieldPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.gold : 'transparent',
              border: `2px solid ${C.gold}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.shieldMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(36, 43, 36, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.shieldMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.shieldMid, borderLeft: `6px solid ${tone}`, color: C.shieldPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(160, 118, 47, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.brick}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        border: `4px double ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.85 + p * 0.15,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.brick, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -6,
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

export const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const PriorityPurchaseScene = () => {
  /* data-final-knowledge="priority-purchase-rules" data-final-knowledge="renewal-succession-rights" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="优先购买 · 优先续租" title="承租人的两类优先权">
      <div
        data-layout="priority-desk-with-limit-stamps"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="only-housing-tenants-hold-purchase-priority-with-fifteen-day-or-five-day-auction-notice,breach-of-priority-pays-damages-but-never-voids-the-third-party-sale,five-stamps-block-priority-from-co-owners-relatives-registration-silence-and-missing-auction,whole-building-transfers-deny-floor-tenants-for-lack-of-equal-terms"
        data-focal-rule="notice-lanterns-light-before-the-sale-sign-flips-while-limit-stamps-knock-priority-chips-off-the-desk"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="priority-purchase-rules" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 496}}>
          <Panel tone={C.gold} watermark={<Bell size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.gold} icon={<Bell size={24} color={C.cream} strokeWidth={2.2} />}>承租人优先购买权 · 仅房屋承租人享有</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 108, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 78, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 380, top: 16, width: 10, height: 72, borderRadius: 5, backgroundColor: frame > 140 ? C.gold : C.edge}} />
              <span style={{position: 'absolute', left: 288, top: 0, fontSize: 14, fontWeight: 900, color: frame > 140 ? C.gold : C.inkSoft}}>出卖前合理期限通知 ✓</span>
              <Mover delay={60} span={50} fromX={20} toX={310} style={{position: 'absolute', top: 44, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><Bell size={18} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>出卖前15日通知</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 480, top: 44, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 150, 12)}}>委托拍卖 → 拍卖<Soft color={C.gold}>5日前</Soft>通知</span>
              <div style={{position: 'absolute', right: 24, top: 38, opacity: prog(frame, 200, 14)}}><Chip tone={C.mossDeep} toneBg={C.mossDeepPale}><House size={16} color={C.mossDeep} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.mossDeep}}>同等条件·优先购买</span></Chip></div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 240, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.gold}}>侵害优先购买权的后果</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>承租人可请求<Soft color={C.gold}>赔偿责任</Soft>；但<Seal delay={300} tone={C.brick} size={16}>无权</Seal>请求确认出租人与第三人的买卖合同<Soft color={C.brick}>无效</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 280, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={19} color={C.brick} strokeWidth={2.4} />五枚限制章 + 整楼例外</span>
                <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>①按份共有人行使优先购买 ②卖给<Soft color={C.brick}>近亲属</Soft> ③受让人<Soft color={C.brick}>已登记</Soft> ④通知后<Soft color={C.brick}>15日内</Soft>未表示购买 ⑤拍卖<Soft color={C.brick}>未参加</Soft></span>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>整楼转让时部分楼层承租人<Soft color={C.brick}>不得行使</Soft>（非同等条件）</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const RenewalSuccessionScene = () => {
  /* data-final-knowledge="renewal-succession-rights" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="优先续租 · 继续承租" title="期满与身后的承租位">
      <div
        data-layout="renewal-bench-with-succession-desk"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="expired-tenants-renew-at-equal-terms-under-housing-leases,death-reroutes-the-lease-to-prior-cohabitants-or-co-operators-on-original-terms,renewal-runs-at-expiry-while-succession-triggers-on-death-during-the-term,both-protections-keep-the-tenant-side-seated-against-new-landlords"
        data-focal-rule="the-expired-lease-chip-slides-into-the-renewal-bench-while-the-death-event-reroutes-the-lease-to-cohabitants"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="renewal-succession-rights" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 752}}>
          <Panel tone={C.mossDeep} watermark={<Bell size={140} color={C.mossDeep} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.mossDeep} icon={<Bell size={24} color={C.cream} strokeWidth={2.2} />}>优先续租权</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 130, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 96, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 300, top: 30, width: 9, height: 74, borderRadius: 4, backgroundColor: frame > 150 ? C.mossDeep : C.edge}} />
              <span style={{position: 'absolute', left: 236, top: 8, fontSize: 14, fontWeight: 900, color: frame > 150 ? C.mossDeep : C.inkSoft}}>同等条件 ✓</span>
              <Mover delay={80} span={54} fromX={20} toX={230} style={{position: 'absolute', top: 58, left: 0}}>
                <Chip tone={C.mossDeep} toneBg={C.mossDeepPale}><Hourglass size={17} color={C.mossDeep} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.mossDeep}}>租期届满</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 350, top: 58, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 160, 12)}}>→ 房屋承租人<Soft color={C.mossDeep}>优先承租</Soft></span>
            </div>
            <IconChip icon={<Bell size={22} color={C.cream} strokeWidth={2.2} />} tone={C.mossDeep} title="要点：">主体是<Soft color={C.mossDeep}>房屋承租人</Soft>·条件是<Soft color={C.mossDeep}>同等条件</Soft>·时点是<Soft color={C.mossDeep}>租赁期限届满</Soft></IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={260} tone={C.mossDeep} size={20}>续租优先·与优先购买并列</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 752}}>
          <Panel tone={C.indigoLike} watermark={<Users size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>继续承租权 · 身后不逐客</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 130, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 96, height: 4, backgroundColor: C.edge}} />
              <Mover delay={200} span={54} fromX={20} toX={300} style={{position: 'absolute', top: 58, left: 0}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><Users size={17} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.brick}}>承租人死亡·宣告死亡</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 380, top: 30, width: 9, height: 74, borderRadius: 4, backgroundColor: frame > 280 ? C.indigoLike : C.edge}} />
              <span style={{position: 'absolute', left: 330, top: 8, fontSize: 14, fontWeight: 900, color: frame > 280 ? C.indigoLike : C.inkSoft}}>租赁权移交 ✓</span>
              <span style={{position: 'absolute', left: 420, top: 58, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 290, 12)}}>→ 按<Soft color={C.indigoLike}>原租赁合同</Soft>继续租赁</span>
            </div>
            <IconChip icon={<House size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="承接主体：">生前<Soft color={C.indigoLike}>共同居住的人</Soft>或<Soft color={C.indigoLike}>共同经营人</Soft>——房屋租赁场景的保护</IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={320} tone={C.indigoLike} size={20}>人走租不散·同住同营接手</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const NoBreakLeaseScene = () => {
  /* data-final-knowledge="no-break-rule" data-final-knowledge="no-break-limits" data-final-knowledge="car-case-verdicts" */
  const frame = useCurrentFrame();
  const gated = frame > 220;
  return (
    <Shell code="02" kicker="买卖不破租赁" title="买卖不破租赁与两道闸">
      <div
        data-layout="transfer-band-over-mortgage-gate"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="ownership-transfers-leave-the-tenancy-untouched-for-every-tenant-who-holds-possession,transfers-without-prior-possession-get-no-protection-in-the-registered-sale-case,known-earlier-mortgages-and-court-seizures-block-protection-only-when-the-mortgage-is-exercised,car-case-protection-holds-for-later-mortgages-and-ordinary-sales-but-fails-on-earlier-mortgage-enforcement"
        data-focal-rule="ownership-tokens-pass-over-the-tenancy-band-untouched-until-the-mortgage-gate-stops-the-known-earlier-one"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="no-break-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 252}}>
          <Panel tone={C.shieldMid} watermark={<House size={130} color={C.shieldMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.shieldMid} icon={<House size={24} color={C.cream} strokeWidth={2.2} />}>买卖不破租赁 · 规则与占有前提</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 108, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 30, right: 30, top: 66, height: 26, backgroundColor: C.mossDeepPale, border: `2px solid ${C.mossDeep}`, borderRadius: 6}} />
              <span style={{position: 'absolute', left: 44, top: 70, fontSize: 15, fontWeight: 950, color: C.mossDeep}}>租赁权带 · 所有权转移也不受影响</span>
              <Mover delay={70} span={60} fromX={20} toX={640} style={{position: 'absolute', top: 26, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><House size={17} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>所有权转移（出卖·继承·赠与）</span></Chip>
              </Mover>
              <div style={{position: 'absolute', right: 26, top: 20, opacity: prog(frame, 180, 14)}}><Chip tone={C.mossDeep} toneBg={C.mossDeepPale}><Key size={16} color={C.mossDeep} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.mossDeep}}>前提：转移时承租人已占有</span></Chip></div>
            </div>
            <IconChip icon={<Users size={22} color={C.cream} strokeWidth={2.2} />} tone={C.mossDeep} title="适用范围：">一切承租人<Soft color={C.mossDeep}>不以房屋租赁为限</Soft>——动产承租人也受保护（但<Soft color={C.brick}>优先购买权</Soft>仅房屋承租人享有）</IconChip>
            <div style={{marginTop: 'auto', fontSize: 18, fontWeight: 900, color: C.inkSoft}}>过户案：先过户给丙·<Under color={C.brick} delay={200}>后</Under>交付乙 → 乙转移时<Soft color={C.brick}>未占有</Soft> → <Soft color={C.brick}>不得主张</Soft>买卖不破租赁保护</div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="no-break-limits" style={{position: 'absolute', left: 0, top: 268, width: 1030, height: 484}}>
          <Panel tone={C.brick} watermark={<Ban size={130} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 16px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>两道闸 · 保护的限制</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 120, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 90, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 430, top: 16, width: 10, height: 82, borderRadius: 5, backgroundColor: gated ? C.brick : C.edge}} />
              <span style={{position: 'absolute', left: 330, top: 0, fontSize: 14, fontWeight: 900, color: gated ? C.brick : C.inkSoft}}>{gated ? '抵押权行使 → 不受保护 ✗' : '先押后租 + 知情'}</span>
              <Mover delay={90} span={54} fromX={20} toX={390} fadeAt={400} style={{position: 'absolute', top: 52, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><Scale size={17} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>租到一个抵押物</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 480, top: 52, fontSize: 15, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 230, 12)}}>知情=抵押<Soft color={C.brick}>已登记</Soft>或承租人<Soft color={C.brick}>知情</Soft></span>
            </div>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="闸① 先押后租：">仅在<Soft color={C.brick}>抵押权的行使</Soft>中不受保护——出租人<Soft color={C.mossDeep}>普通出卖</Soft>仍受保护</IconChip>
            <IconChip icon={<Gavel size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="闸② 查封扣押：">租赁前已被<Soft color={C.brick}>查封·扣押</Soft>·因法院执行取得所有权 → <Soft color={C.brick}>不得主张</Soft>保护（强制措施效力=登记抵押权）</IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.brick} size={19}>知道租到抵押物·抵押行使时不保</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="car-case-verdicts" style={{position: 'absolute', left: 1060, top: 268, width: 716, height: 484}}>
          <Panel tone={C.gold} watermark={<Car size={130} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 16px'}}>
            <PanelTab tone={C.gold} icon={<Car size={24} color={C.cream} strokeWidth={2.2} />}>汽车案 · 三问</PanelTab>
            <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              甲将汽车出租给乙·已交付；车上存在<Soft color={C.brick}>建行抵押权·已登记</Soft>
            </div>
            <div style={{border: `2px solid ${C.mossDeep}`, backgroundColor: C.mossDeepPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.mossDeep}}>① 抵押设立于租赁之后</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}><Seal delay={200} tone={C.mossDeep} size={15}>受保护</Seal> 后成立的抵押不破坏租赁</span>
            </div>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.brick}}>② 先押后租·建行行使抵押权卖车</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}><Seal delay={260} tone={C.brick} size={15}>不受保护</Seal> 知道租到抵押物·抵押行使时不保</span>
            </div>
            <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.gold}}>③ 先押后租·甲普通出卖</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}><Seal delay={320} tone={C.gold} size={15}>受保护</Seal> 仅<Soft color={C.brick}>抵押权行使</Soft>中不保·普通出卖仍保</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
