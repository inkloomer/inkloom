import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Coins, Gavel, House, Hourglass, Key, Scale, ScrollText, Stamp, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  steel: '#4E6A85',
  steelMid: '#64809C',
  steelPale: '#DDE8F1',
  cream: '#F5F3EA',
  creamDim: '#E9E7DA',
  edge: '#C8C6B4',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
  moss: '#5C7245',
  mossPale: '#E2EAD5',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
  ink: '#232A30',
  inkSoft: '#6E7A80',
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
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.steel,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(221, 232, 241, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.indigoLike}, ${C.moss}, ${C.gold})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(221, 232, 241, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.steelMid, borderLeft: `8px solid ${C.gold}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.steelPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.steelPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
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

export const Panel = ({children, marker, tone = C.steelMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 42, 48, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.steelMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.steelMid, borderLeft: `6px solid ${tone}`, color: C.steelPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
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

export const LeaseFormScene = () => {
  /* data-final-knowledge="lease-form-rule" data-final-knowledge="lease-indefinite-types" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="租赁 · 形式与不定期" title="租赁的形式与不定期">
      <div
        data-layout="written-form-gate-into-indefinite-pool"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="leases-over-six-months-need-writing-or-fail-unless-performed-and-accepted,registration-filing-is-administrative-and-never-blocks-validity-unless-agreed-as-condition,three-entries-produce-indefinite-tenancy-which-either-party-exits-by-notice,debt-offset-rent-lets-the-term-be-computed-so-it-stays-periodic"
        data-focal-rule="lease-chips-hop-the-written-form-gate-then-three-entries-drain-into-the-indefinite-pool"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="lease-form-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 190}}>
          <Panel tone={C.indigoLike} watermark={<ScrollText size={110} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>租赁合同的形式 与 登记备案</PanelTab>
            <IconChip icon={<ScrollText size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="6个月以上：">应当采用<Soft color={C.indigoLike}>书面形式</Soft>（要式合同）→ 否则<Soft color={C.brick}>不成立</Soft>；但一方已履行<Soft color={C.moss}>主要义务</Soft>且对方<Soft color={C.moss}>接受</Soft>的除外</IconChip>
            <IconChip icon={<Stamp size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="登记备案：">行政管理手段·<Soft color={C.moss}>不影响</Soft>效力；约定以备案为<Soft color={C.gold}>生效条件</Soft> → 转化为<Soft color={C.indigoLike}>要式合同</Soft>（已履行主要义务且接受除外）</IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="lease-indefinite-types" style={{position: 'absolute', left: 0, top: 206, width: 1776, height: 546}}>
          <Panel tone={C.moss} watermark={<Hourglass size={140} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.moss} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>不定期租赁 · 三条入口 与 效力</PanelTab>
            <div style={{display: 'flex', alignItems: 'stretch', gap: 0, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 10, opacity: prog(frame, 70, 14)}}>
                  <Chip tone={C.indigoLike} toneBg={C.cream}><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>入口① 未约定租期</span></Chip>
                  <ArrowRight size={20} color={C.moss} strokeWidth={2.6} />
                </div>
                <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 10, opacity: prog(frame, 120, 14)}}>
                  <Chip tone={C.indigoLike} toneBg={C.cream}><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>入口② 6个月+未书面·无法确定租期</span></Chip>
                  <ArrowRight size={20} color={C.moss} strokeWidth={2.6} />
                </div>
                <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 10, opacity: prog(frame, 170, 14)}}>
                  <Chip tone={C.indigoLike} toneBg={C.cream}><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>入口③ 期满继续使用·出租人无异议</span></Chip>
                  <ArrowRight size={20} color={C.moss} strokeWidth={2.6} />
                </div>
                <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 220, 14)}}>
                  <span style={{fontSize: 19, fontWeight: 950, color: C.moss}}>汇入：不定期租赁（入口③原合同继续有效·租期转不定期）</span>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>双方均有权<Soft color={C.brick}>随时解除</Soft>·但应在合理期间<Soft color={C.indigoLike}>事先通知</Soft>对方</span>
                </div>
              </div>
              <div style={{width: 560, marginLeft: 18, display: 'flex', flexDirection: 'column', gap: 8}}>
                <PanelTab tone={C.gold} icon={<House size={22} color={C.cream} strokeWidth={2.2} />}>抵债租金案</PanelTab>
                <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 5, flex: 1}}>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>甲欠乙1万·以<Soft color={C.gold}>月租2000</Soft>抵债·未约定租期 → 是不定期租赁吗？</span>
                  <span style={{fontSize: 18, fontWeight: 950, color: C.ink, marginTop: 'auto'}}><Seal delay={280} tone={C.brick} size={17}>否</Seal> 租金÷债务可<Soft color={C.gold}>算出5个月租期</Soft> → 仍为定期租赁</span>
                </div>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const OneHouseLeasesScene = () => {
  /* data-final-knowledge="lease-priority-order" data-final-knowledge="lease-order-comparison" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="一房数租 · 履行顺序" title="一房数租的领奖台">
      <div
        data-layout="tenant-podium-with-cross-regime-table"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="possession-beats-filing-and-filing-beats-earlier-formation-in-rank,ranked-out-tenants-keep-valid-contracts-and-claim-rescission-with-damages,ordinary-chattels-rank-payment-second-while-vehicles-rank-transfer-registration-second,housing-leases-rank-filing-second-keeping-formation-last-across-all-regimes"
        data-focal-rule="tenant-chips-climb-the-podium-in-statutory-order-while-ranked-out-tenants-keep-valid-claims"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="lease-priority-order" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 752}}>
          <Panel tone={C.gold} watermark={<Key size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Key size={24} color={C.cream} strokeWidth={2.2} />}>数租均有效 · 履行顺序</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 9, flex: 1, justifyContent: 'center'}}>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 12, opacity: prog(frame, 80, 14)}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.gold}}>①</span>
                <Chip tone={C.gold} toneBg={C.cream}><Key size={18} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>已合法占有租赁房屋</span></Chip>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}><ArrowRight size={20} color={C.inkSoft} strokeWidth={2.4} style={{rotate: '90deg'}} /></div>
              <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 12, opacity: prog(frame, 150, 14)}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.indigoLike}}>②</span>
                <Chip tone={C.indigoLike} toneBg={C.cream}><Stamp size={18} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike}}>已办理登记备案手续</span></Chip>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}><ArrowRight size={20} color={C.inkSoft} strokeWidth={2.4} style={{rotate: '90deg'}} /></div>
              <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 12, opacity: prog(frame, 220, 14)}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.moss}}>③</span>
                <Chip tone={C.moss} toneBg={C.cream}><ScrollText size={18} color={C.moss} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.moss}}>合同成立在先</span></Chip>
              </div>
            </div>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              口诀：先<Soft color={C.gold}>占有</Soft>·后<Soft color={C.indigoLike}>登记</Soft>·最后看<Soft color={C.moss}>成立</Soft>——落选承租人合同<Soft color={C.moss}>依然有效</Soft> → 可<Soft color={C.brick}>解除</Soft>并请求<Soft color={C.brick}>违约责任</Soft>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="lease-order-comparison" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 752}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>三 regime · 顺位对比</PanelTab>
            <div style={{display: 'grid', gridTemplateRows: '42px 1fr 1fr 1fr', flex: 1, border: `2px solid ${C.edge}`}}>
              <div style={{display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1fr', backgroundColor: C.steelMid}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.steelPale, borderRight: `2px solid ${C.edge}`}}>顺位</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.steelPale, borderRight: `2px solid ${C.edge}`}}>普通动产数卖</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.steelPale, borderRight: `2px solid ${C.edge}`}}>交通工具数卖</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.steelPale}}>一房数租</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 120, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.gold, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>①</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>合法占有者</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>合法占有者</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink}}>合法占有者</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1fr', borderTop: `2px solid ${C.edge}`, backgroundColor: C.creamDim, opacity: prog(frame, 180, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.indigoLike, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>②</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>先支付价款者</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>过户登记者</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink}}>租赁备案登记者</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 240, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.moss, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>③</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>合同成立在先</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>合同成立在先</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: C.ink}}>合同成立在先</span>
              </div>
            </div>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', fontSize: 17, fontWeight: 900, color: C.ink}}>
              补充：不能获得履行的债权人 → 追究<Soft color={C.brick}>违约责任</Soft>·或<Soft color={C.brick}>解除合同</Soft>并追究违约责任
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.indigoLike} size={19}>占有永远第一·三 regime 通行</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const InvalidSubleaseScene = () => {
  /* data-final-knowledge="lease-void-types" data-final-knowledge="lease-sublease-rules" data-final-knowledge="sublease-case-verdicts" */
  const frame = useCurrentFrame();
  const expired = frame > 320;
  return (
    <Shell code="03" kicker="租赁无效 · 擅自转租" title="无效红线与转租闸机">
      <div
        data-layout="void-list-then-sublease-switchboard"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="illegal-structures-void-leases-and-overshooting-terms-fail-part-wise,void-leases-owe-no-rent-but-usage-fees-by-unjust-enrichment,unauthorized-sublease-gives-a-six-month-rescission-window-that-expires-into-consent,rescission-first-then-reclaim-and-lawful-subtenants-may-pay-rent-to-block-termination"
        data-focal-rule="the-sublease-token-passes-a-six-month-gate-that-either-opens-rescission-or-flips-to-consent"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="lease-void-types" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 214}}>
          <Panel tone={C.brick} watermark={<Ban size={120} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>租赁合同的无效 · 三型与后果</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>① 违法建筑出租</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>→ 租赁合同<Soft color={C.brick}>无效</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>② 临建超批准使用期限</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>约定租期超过批准期限的<Soft color={C.brick}>部分无效</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>③ 租期超20年</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>超过20年的<Soft color={C.brick}>部分无效</Soft>（续租合同同）</span>
              </div>
            </div>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '6px 14px', fontSize: 18, fontWeight: 900, color: C.ink}}>
              后果：出租人<Soft color={C.brick}>不得请求租金</Soft>；但可参照约定<Soft color={C.gold}>租金标准</Soft>请求<Soft color={C.gold}>占有使用费</Soft>（性质=<Soft color={C.moss}>不当得利</Soft>返还）
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="lease-sublease-rules" style={{position: 'absolute', left: 0, top: 230, width: 1030, height: 522}}>
          <Panel tone={C.indigoLike} watermark={<Users size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>擅自转租 · 6个月闸机</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 130, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 100, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 420, top: 18, width: 10, height: 92, borderRadius: 5, backgroundColor: expired ? C.moss : C.brick}} />
              <span style={{position: 'absolute', left: 340, top: 0, fontSize: 14, fontWeight: 900, color: expired ? C.moss : C.brick}}><Hourglass size={15} color={expired ? C.moss : C.brick} strokeWidth={2.4} style={{verticalAlign: '-2px'}} /> {expired ? '逾期未行使 → 视为同意转租 ✓' : '知道起6个月内 → 解除权 ✓'}</span>
              <Mover delay={70} span={52} fromX={20} toX={380} style={{position: 'absolute', top: 62, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><Users size={18} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>承租人擅自转租</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 470, top: 62, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 150, 12)}}>→ 出租人可<Soft color={C.brick}>解除</Soft>与承租人的合同</span>
            </div>
            <IconChip icon={<Gavel size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="先解约·再要房：">合同解除后 → 出租人有权请求<Soft color={C.indigoLike}>次承租人返还</Soft>租赁物；逾期腾房 → 支付<Soft color={C.gold}>占有使用费</Soft></IconChip>
            <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.moss} title="次承租人代为履行：">承租人拖欠租金·出租人欲解约 → <Soft color={C.moss}>合法转租</Soft>的次承租人可<Soft color={C.moss}>代付租金</Soft>并担违约责任·<Soft color={C.moss}>阻止解除</Soft></IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={280} tone={C.indigoLike} size={19}>6个月是解约的时间限制·先解约再要房</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="sublease-case-verdicts" style={{position: 'absolute', left: 1060, top: 230, width: 716, height: 522}}>
          <Panel tone={C.gold} watermark={<Gavel size={120} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 16px'}}>
            <PanelTab tone={C.gold} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>甲乙丙案 · 三问</PanelTab>
            <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              2024.1.5 甲租房A给乙·租期3年；5.5 乙欠3个月租金+甲知乙擅自转租丙；12.5 甲欲解约
            </div>
            <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.gold}}>① 5.5 后甲有几项解除权？</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}><Seal delay={180} tone={C.gold} size={15}>两项</Seal> 迟延交租解除权＋擅自转租解除权</span>
            </div>
            <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.indigoLike}}>② 12.5 还能解除吗？</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}><Seal delay={240} tone={C.indigoLike} size={15}>是</Seal> 转租解除权<Soft color={C.brick}>已消灭</Soft>（超6个月）·迟延解除权<Soft color={C.moss}>未消灭</Soft></span>
            </div>
            <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.moss}}>③ 丙能代付租金吗？</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}><Seal delay={300} tone={C.moss} size={15}>能</Seal> 逾期未解约=视为<Soft color={C.moss}>同意转租</Soft>·丙转合法次承租人</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
