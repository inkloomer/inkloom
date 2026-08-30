import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Landmark, Scale, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  liability: '#33302F',
  liabilityDeep: '#272423',
  panel: '#F0ECDA',
  panelDim: '#E2DEC8',
  edge: '#6B6459',
  ink: '#282421',
  inkSoft: '#5B554B',
  pillarGold: '#C0983E',
  exception: '#B04834',
  principleTeal: '#4E7D74',
  paper: '#F6F1E0',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
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

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.liability,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 172px, rgba(39, 36, 35, 0.55) 172px 175px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.pillarGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.liabilityDeep, borderLeft: `8px solid ${C.exception}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 73 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.pillarGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.pillarGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.principleTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.principleTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.principleTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.principleTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const PillarTab = ({children, bar = C.exception, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.liabilityDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const PillarStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 36, 35, 0.94)', border: `2px solid ${C.pillarGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.exception}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const AmountSeal = ({children, tone = C.pillarGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const PartnershipsScene = () => {
  /* data-final-knowledge="partnership-types" */
  return (
    <Shell code="01" kicker="普通合伙 · 特殊合伙" title="合伙律师事务所">
      <div
        data-layout="twin-partner-columns"
        data-visual-anchor="main center"
        data-text-treatments="pillar-plaques,amount-seals"
        data-visual-grammar="general-partner,special-partner"
        data-focal-rule="partner-counts-and-liability-split-in-special-partnership"
        data-focal-channels="partner-counts,liability-split"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="partnership-types" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 648}}>
          <Panel tone={C.principleTeal} watermark={<Users size={190} color={C.principleTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <PillarTab bar={C.principleTeal} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>普通合伙律师事务所</PillarTab>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.principleTeal} title="成立条件：">
              书面合伙协议 · <AmountSeal tone={C.principleTeal} delay={130}>3 名以上合伙人</AmountSeal> 作为设立人 · 设立人具有 3 年以上执业经历并能够专职执业 · <AmountSeal tone={C.principleTeal} delay={142}>人民币 30 万元以上</AmountSeal> 资产
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.exception} title="责任承担：">
              合伙人对律所债务承担<Mark color={C.exception}>无限连带责任</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 648}}>
          <Panel tone={C.exception} watermark={<Scale size={190} color={C.exception} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <PillarTab bar={C.exception} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>特殊的普通合伙律师事务所</PillarTab>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.exception} title="成立条件：">
              书面合伙协议 · <AmountSeal tone={C.exception} delay={130}>20 名以上合伙人</AmountSeal> 作为设立人 · 设立人具有 3 年以上执业经历并能够专职执业 · <AmountSeal tone={C.exception} delay={142}>人民币 1000 万元以上</AmountSeal> 资产
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.exception} title="故意或重大过失：">
              一个或数个合伙人因<Mark color={C.exception}>故意或重大过失</Mark>造成律所债务的，承担<Mark color={C.exception}>无限责任或无限连带责任</Mark>；其他合伙人以<Mark color={C.principleTeal}>财产份额为限</Mark>承担责任
            </IconChip>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.principleTeal} title="非因故意或重大过失：">
              由<Mark color={C.principleTeal}>全体合伙人</Mark>承担无限连带责任
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const IndividualStateScene = () => {
  /* data-final-knowledge="individual-state-types" */
  return (
    <Shell code="02" kicker="个人所 · 国资所" title="个人律师事务所 · 国家出资设立的律师事务所">
      <div
        data-layout="twin-plus-exception-strip"
        data-visual-anchor="main center"
        data-text-treatments="pillar-plaques,exception-seals"
        data-visual-grammar="individual-pillar,state-pillar"
        data-focal-rule="unlimited-joint-liability-as-principle-with-two-exceptions"
        data-focal-channels="individual-conditions,exception-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="individual-state-types" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 492}}>
          <Panel tone={C.pillarGold} watermark={<UserCheck size={190} color={C.pillarGold} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <PillarTab bar={C.pillarGold} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>个人律师事务所</PillarTab>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pillarGold} title="成立条件：">
              符合《律师法》第 14 条条件外，设立人应当是具有 <AmountSeal tone={C.pillarGold} delay={130}>5 年以上执业经历</AmountSeal> 并能够专职执业的律师 · <AmountSeal tone={C.exception} delay={142}>人民币 10 万元以上</AmountSeal> 资产
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.exception} title="责任承担：">
              一名律师个人投资设立·财产归其个人所有，设立人以其<Mark color={C.exception}>个人财产</Mark>对事务所债务承担<Mark color={C.exception}>无限责任</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 492}}>
          <Panel tone={C.principleTeal} watermark={<Landmark size={190} color={C.principleTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <PillarTab bar={C.principleTeal} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>国家出资设立的律师事务所</PillarTab>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.principleTeal} title="成立条件：">
              符合《律师法》一般条件外，至少有 <AmountSeal tone={C.principleTeal} delay={130}>2 名</AmountSeal> 符合规定并能够专职执业的律师
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pillarGold} title="筹建：">
              由当地<Mark color={C.pillarGold}>县级司法行政机关筹建</Mark>；申请设立许可前须经所在地县级人民政府有关部门<Mark color={C.pillarGold}>核拨编制·提供经费保障</Mark>
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.principleTeal} title="责任承担：">
              以<Mark color={C.principleTeal}>全部资产</Mark>对其债务承担<Mark color={C.principleTeal}>有限责任</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 520, width: 1776}}>
          <PillarStrip style={{height: 132}}>
            <Scale size={44} color={C.pillarGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.principleTeal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.65}}>
              <Mark color={C.paper}>无限连带为原则</Mark>；两个例外：特殊合伙中<Mark color={C.paper}>故意或重大过失</Mark>者无限连带·其他合伙人有限责任；国资所一律<Mark color={C.paper}>有限责任</Mark>
            </span>
          </PillarStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawFirmTypes = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-partnerships" {...SCENES.partnerships}>
      <PartnershipsScene />
    </TimelineSequence>
    <TimelineSequence name="02-individual-state" {...SCENES.individualState}>
      <IndividualStateScene />
    </TimelineSequence>
  </AbsoluteFill>
);
