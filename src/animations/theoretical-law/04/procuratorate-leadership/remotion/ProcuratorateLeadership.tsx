import type {CSSProperties, ReactNode} from 'react';
import {ArrowUp, Landmark, Scale, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  procurator: '#36302C',
  procuratorDeep: '#2A2522',
  panel: '#F1ECDA',
  panelDim: '#E2DDC7',
  edge: '#6C6459',
  ink: '#292420',
  inkSoft: '#5B5449',
  seal: '#B04834',
  committeeTeal: '#4E7D74',
  escalateGold: '#C0983E',
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
      backgroundColor: C.procurator,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 116px, rgba(42, 37, 34, 0.55) 116px 119px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.escalateGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.procuratorDeep, borderLeft: `8px solid ${C.seal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 68 · {code}</span>
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
        borderBottom: `2px solid ${C.escalateGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.escalateGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.committeeTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.committeeTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.committeeTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.committeeTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const SealTab = ({children, bar = C.seal, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.procuratorDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const SealStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(42, 37, 34, 0.94)', border: `2px solid ${C.escalateGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.seal}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '9px 13px'}}>
    <span style={{flexShrink: 0, width: 52, height: 52, borderRadius: 11, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const DualTrackScene = () => {
  /* data-final-knowledge="leadership-principle" */
  return (
    <Shell code="01" kicker="原则规定 · 具体规定" title="人民检察院的领导体制">
      <div
        data-layout="twin-track-combination"
        data-visual-anchor="main center"
        data-text-treatments="track-plaques,clause-chips"
        data-visual-grammar="principle-track,detail-rows"
        data-focal-rule="chief-procurator-system-combined-with-committee-collective-leadership"
        data-focal-channels="combination-principle,clause-rows"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="leadership-principle" style={{position: 'absolute', left: 238, top: 0, width: 1300}}>
          <Panel tone={C.seal} watermark={<Scale size={180} color={C.seal} strokeWidth={1.6} />} style={{height: 272, padding: '22px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <SealTab bar={C.seal} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>原则规定</SealTab>
            <div style={{fontSize: 32, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', textAlign: 'center'}}>
              <Mark color={C.seal}>检察长负责制</Mark> 与 <Mark color={C.committeeTeal}>检察委员会集体领导</Mark> 相结合
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" style={{position: 'absolute', left: 0, top: 312, width: 1776}}>
          <Panel tone={C.committeeTeal} watermark={<Users size={180} color={C.committeeTeal} strokeWidth={1.6} />} style={{height: 340, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <SealTab bar={C.committeeTeal} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>具体规定</SealTab>
            <IconChip icon={<UserCheck size={30} color={C.paper} strokeWidth={2.2} />} tone={C.seal} title="检察长：">
              <Mark color={C.seal}>统一领导检察院的工作</Mark>
            </IconChip>
            <IconChip icon={<Users size={30} color={C.paper} strokeWidth={2.2} />} tone={C.committeeTeal} title="检察委员会：">
              实行<Mark color={C.committeeTeal}>民主集中制</Mark>，讨论决定<Mark color={C.committeeTeal}>重大案件和其他重大问题</Mark>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DisagreementScene = () => {
  /* data-final-knowledge="disagreement-route" */
  return (
    <Shell code="02" kicker="分歧处理" title="分歧处理">
      <div
        data-layout="escalation-fork"
        data-visual-anchor="main center"
        data-text-treatments="escalation-arrows,fork-chips"
        data-visual-grammar="disagreement-origin,escalate-fork"
        data-focal-rule="disagreement-escalates-to-higher-procuratorate-or-standing-committee"
        data-focal-channels="escalation-fork,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="disagreement-route" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.seal} watermark={<ArrowUp size={180} color={C.seal} strokeWidth={1.6} />} style={{height: 156, padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 18}}>
            <UserCheck size={48} color={C.seal} strokeWidth={2.2} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.ink, lineHeight: 1.6}}>
              检察长<Mark color={C.seal}>不同意</Mark>检委会<Mark color={C.committeeTeal}>多数人的决定</Mark> ——
            </span>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 500, top: 176, width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ArrowUp size={48} color={C.escalateGold} strokeWidth={2.6} />
        </div>
        <div style={{position: 'absolute', left: 1180, top: 176, width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ArrowUp size={48} color={C.escalateGold} strokeWidth={2.6} />
        </div>
        <Enter delay={60} from="up" style={{position: 'absolute', left: 138, top: 260, width: 720}}>
          <Panel tone={C.committeeTeal} style={{height: 150, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <Landmark size={44} color={C.committeeTeal} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.ink, lineHeight: 1.55}}>报请<Mark color={C.committeeTeal}>上一级人民检察院</Mark>决定</span>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" style={{position: 'absolute', left: 918, top: 260, width: 720}}>
          <Panel tone={C.seal} style={{height: 150, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <Landmark size={44} color={C.seal} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.ink, lineHeight: 1.55}}>或报请<Mark color={C.seal}>同级人大常委会</Mark>决定</span>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 446, width: 1776}}>
          <SealStrip style={{height: 104}}>
            <Scale size={42} color={C.escalateGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.seal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              检察长负责制＋检委会集体领导；检察长不服多数决定 → <Mark color={C.paper}>上一级检察院 或 同级人大常委会</Mark>决定
            </span>
          </SealStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcuratorateLeadership = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-dual-track" {...SCENES.dualTrack}>
      <DualTrackScene />
    </TimelineSequence>
    <TimelineSequence name="02-disagreement" {...SCENES.disagreement}>
      <DisagreementScene />
    </TimelineSequence>
  </AbsoluteFill>
);
