import type {CSSProperties, ReactNode} from 'react';
import {Eye, Handshake, Link, RefreshCw, Shield} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  procurate: '#332F2A',
  procurateDeep: '#272320',
  panel: '#F1ECDA',
  panelDim: '#E2DDC7',
  edge: '#6C6459',
  ink: '#292420',
  inkSoft: '#5B5449',
  emblem: '#B04834',
  chainGold: '#C0983E',
  superviseTeal: '#4E7D74',
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
      backgroundColor: C.procurate,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 112px, rgba(39, 35, 32, 0.55) 112px 115px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.chainGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.procurateDeep, borderLeft: `8px solid ${C.emblem}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 67 · {code}</span>
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
        borderBottom: `2px solid ${C.chainGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.chainGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.superviseTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.superviseTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.superviseTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.superviseTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const EmblemTab = ({children, bar = C.emblem, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.procurateDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const EmblemStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 35, 32, 0.94)', border: `2px solid ${C.chainGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.emblem}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const ChainSeal = ({children, tone = C.chainGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '9px 13px'}}>
    <span style={{flexShrink: 0, width: 52, height: 52, borderRadius: 11, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const ThreePrinciplesScene = () => {
  /* data-final-knowledge="three-principles" */
  const pillars = [
    {name: '检察权统一行使', alias: '又称检察一体化原则', tone: C.emblem, icon: <Link size={32} color={C.paper} strokeWidth={2.2} />, body: '各级检察机关·检察官依法构成统一的整体，在履行职权·职务的过程中实行「上命下从」，内部各项工作可按上级指示「自由流通」'},
    {name: '依法独立行使检察权', alias: '独立行使', tone: C.chainGold, icon: <Shield size={32} color={C.paper} strokeWidth={2.2} />, body: '检察机关依照法律规定独立行使检察权，不受行政机关·社会团体和个人的干涉'},
    {name: '对诉讼活动实行法律监督', alias: '法律监督机关', tone: C.superviseTeal, icon: <Eye size={32} color={C.paper} strokeWidth={2.2} />, body: '人民检察院是国家的法律监督机关，对诉讼活动实行法律监督是履行法律监督职能的重要方面'},
  ] as const;
  return (
    <Shell code="01" kicker="三个基本原则" title="检察制度的基本原则">
      <div
        data-layout="principle-pillars"
        data-visual-anchor="main center"
        data-text-treatments="pillar-plaques,principle-chips"
        data-visual-grammar="integration-pillar,independence-pillar,supervision-pillar"
        data-focal-rule="three-basic-principles-of-procuratorial-system"
        data-focal-channels="pillar-headings,integration-emphasis"
        style={{position: 'absolute', inset: 0}}
      >
        {pillars.map((pillar, index) => (
          <Enter key={pillar.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'three-principles' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={pillar.tone} style={{height: 420, padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 84, height: 84, borderRadius: 42, backgroundColor: pillar.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.chainGold}`}}>{pillar.icon}</span>
              <span style={{fontSize: 28, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', textAlign: 'center'}}>{pillar.name}</span>
              <span style={{padding: '2px 12px', backgroundColor: `${pillar.tone}22`, color: pillar.tone, fontSize: 21, fontWeight: 950}}>{pillar.alias}</span>
              <div style={{width: 100, height: 3, backgroundColor: pillar.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>{pillar.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 238, top: 444, width: 1300}}>
          <EmblemStrip style={{height: 104}}>
            <Link size={42} color={C.emblem} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.emblem, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              检察一体化（绝对重点）：上命下从 · 职能协助 · 承继移转代理 —— 下屏展开
            </span>
          </EmblemStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const IntegrationScene = () => {
  /* data-final-knowledge="integration-links" */
  const links = [
    {name: '上命下从', tone: C.emblem, icon: <Link size={32} color={C.paper} strokeWidth={2.2} />, body: '上下级检察机关和检察官之间存在上命下从的领导关系'},
    {name: '职能协助', tone: C.chainGold, icon: <Handshake size={32} color={C.paper} strokeWidth={2.2} />, body: '各地各级检察机关之间具有职能协助义务'},
    {name: '承继·移转·代理', tone: C.superviseTeal, icon: <RefreshCw size={32} color={C.paper} strokeWidth={2.2} />, body: '检察官之间和检察院之间在职务上可以相互承继、移转和代理'},
  ] as const;
  return (
    <Shell code="02" kicker="检察一体化（绝对重点）" title="检察一体化">
      <div
        data-layout="chain-link-triad"
        data-visual-anchor="main center"
        data-text-treatments="link-chips,emphasis-seals"
        data-visual-grammar="order-link,assist-link,succession-link"
        data-focal-rule="integration-three-links-absolutely-key"
        data-focal-channels="three-links,emphasis-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {links.map((link, index) => (
          <Enter key={link.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'integration-links' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={link.tone} style={{height: 340, padding: '16px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 88, height: 88, borderRadius: 44, backgroundColor: link.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `5px solid ${C.chainGold}`, boxShadow: '0 4px 0 rgba(0,0,0,0.22)'}}>{link.icon}</span>
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{link.name}</span>
              <div style={{width: 100, height: 3, backgroundColor: link.tone}} />
              <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>{link.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 138, top: 380, width: 1500}}>
          <EmblemStrip style={{height: 128}}>
            <Link size={44} color={C.emblem} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.emblem, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper, lineHeight: 1.6}}>
              <ChainSeal tone={C.emblem} delay={170}>上命下从</ChainSeal> <ChainSeal tone={C.chainGold} delay={182}>职能协助</ChainSeal> <ChainSeal tone={C.superviseTeal} delay={194}>承继移转代理</ChainSeal>
              <br />
              检察一体化 = 检察权统一行使原则
            </span>
          </EmblemStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcuratorialPrinciples = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-three-principles" {...SCENES.threePrinciples}>
      <ThreePrinciplesScene />
    </TimelineSequence>
    <TimelineSequence name="02-integration" {...SCENES.integration}>
      <IntegrationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
