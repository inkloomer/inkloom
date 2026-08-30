import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Handshake, MessageSquareWarning} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  peer: '#33362E',
  peerDeep: '#272A23',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#646B5E',
  ink: '#262923',
  inkSoft: '#565D51',
  courtesy: '#C0983E',
  unfair: '#B04834',
  friend: '#4E7D74',
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
      backgroundColor: C.peer,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 120px, rgba(39, 42, 35, 0.55) 120px 123px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.courtesy}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.peerDeep, borderLeft: `8px solid ${C.unfair}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 77 · {code}</span>
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
        borderBottom: `2px solid ${C.courtesy}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.courtesy, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.friend}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.friend}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.friend}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.friend}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const PeerTab = ({children, bar = C.unfair, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.peerDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const PeerStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 42, 35, 0.94)', border: `2px solid ${C.courtesy}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.unfair}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const CourtesySeal = ({children, tone = C.courtesy, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const FriendshipScene = () => {
  /* data-final-knowledge="friendship-principle" */
  return (
    <Shell code="01" kicker="朋友关系" title="同行之间的朋友关系">
      <div
        data-layout="friendship-plaque"
        data-visual-anchor="main center"
        data-text-treatments="friendship-plaque,courtesy-icon"
        data-visual-grammar="friendship-principle"
        data-focal-rule="peers-are-friends-unfair-competition-harms-courtesy"
        data-focal-channels="friendship-plaque,unfair-note"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="friendship-principle" style={{position: 'absolute', left: 238, top: 60, width: 1300}}>
          <Panel tone={C.friend} watermark={<Handshake size={200} color={C.friend} strokeWidth={1.6} />} style={{height: 520, padding: '30px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
            <span style={{width: 120, height: 120, borderRadius: 60, backgroundColor: C.friend, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `6px solid ${C.courtesy}`, boxShadow: '0 4px 0 rgba(0,0,0,0.22)'}}>
              <Handshake size={62} color={C.paper} strokeWidth={2.1} />
            </span>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', letterSpacing: 4}}>律所和律师与同行之间是「朋友关系」</span>
            <div style={{width: 140, height: 4, backgroundColor: C.courtesy}} />
            <div style={{fontSize: 26, fontWeight: 900, color: C.ink, textAlign: 'center', lineHeight: 1.7}}>
              影响「君子友谊」的竞争手段，均构成<Mark color={C.unfair}>不正当竞争</Mark>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const UnfairScene = () => {
  /* data-final-knowledge="typical-unfair-competition" */
  const items = [
    {icon: <MessageSquareWarning size={30} color={C.paper} strokeWidth={2.2} />, tone: C.unfair, text: '诋毁·诽谤同行'},
    {icon: <Coins size={30} color={C.paper} strokeWidth={2.2} />, tone: C.unfair, text: '给介绍费·回扣'},
    {icon: <Coins size={30} color={C.paper} strokeWidth={2.2} />, tone: C.courtesy, text: '低于同地区同行业收费标准争揽业务'},
    {icon: <MessageSquareWarning size={30} color={C.paper} strokeWidth={2.2} />, tone: C.unfair, text: '故意在委托人与代理律师之间制造纠纷'},
    {icon: <Ban size={30} color={C.paper} strokeWidth={2.2} />, tone: C.unfair, text: '虚假承诺法律服务结果'},
    {icon: <Ban size={30} color={C.paper} strokeWidth={2.2} />, tone: C.courtesy, text: '搞垄断·限定委托人接受指定律师'},
  ] as const;
  return (
    <Shell code="02" kicker="典型不正当竞争" title="典型不正当竞争">
      <div
        data-layout="unfair-pillar-column"
        data-visual-anchor="main center"
        data-text-treatments="pillar-chips,mnemonic-strip"
        data-visual-grammar="unfair-pillars"
        data-focal-rule="typical-unfair-competition-including-but-not-limited-to"
        data-focal-channels="pillar-chips,mnemonic-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {items.map((item, index) => (
          <Enter key={item.text} delay={6 + index * 14} from="up" marker={index === 0 ? 'typical-unfair-competition' : undefined} style={{position: 'absolute', left: 40 + (index % 2) * 880, top: Math.floor(index / 2) * 118, width: 856}}>
            <Panel tone={item.tone} style={{height: 104, padding: '0 18px', display: 'flex', alignItems: 'center', gap: 14}}>
              <span style={{flexShrink: 0, width: 54, height: 54, borderRadius: 12, backgroundColor: item.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.courtesy}`}}>{item.icon}</span>
              <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>{item.text}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 496, width: 1776}}>
          <PeerStrip style={{height: 92}}>
            <Handshake size={40} color={C.courtesy} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.unfair, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>包括但不限于</span>
            <span style={{fontSize: 25, fontWeight: 950, color: C.paper, letterSpacing: 1}}>
              <CourtesySeal tone={C.unfair} delay={170}>给介绍费</CourtesySeal> <CourtesySeal tone={C.courtesy} delay={182}>搞垄断</CourtesySeal> <CourtesySeal tone={C.unfair} delay={194}>乱承诺</CourtesySeal> <CourtesySeal tone={C.courtesy} delay={206}>挑拨离间</CourtesySeal> <CourtesySeal tone={C.unfair} delay={218}>诋毁同行</CourtesySeal>
            </span>
          </PeerStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawyerPeerRelations = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-friendship" {...SCENES.friendship}>
      <FriendshipScene />
    </TimelineSequence>
    <TimelineSequence name="02-unfair" {...SCENES.unfair}>
      <UnfairScene />
    </TimelineSequence>
  </AbsoluteFill>
);
