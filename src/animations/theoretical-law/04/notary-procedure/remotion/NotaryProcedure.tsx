import type {CSSProperties, ReactNode} from 'react';
import {Ban, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  procedure: '#2F3330',
  procedureDeep: '#242826',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E7168',
  ink: '#22302A',
  inkSoft: '#516260',
  dual: '#7C5AA6',
  personal: '#B04834',
  joint: '#4E7D74',
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
      backgroundColor: C.procedure,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(124, 90, 166, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 118px, rgba(36, 40, 38, 0.55) 118px 121px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.dual}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.procedureDeep, borderLeft: `8px solid ${C.personal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 82 · {code}</span>
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
        borderBottom: `2px solid ${C.dual}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.dual, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.joint}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.joint}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.joint}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.joint}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const StampTab = ({children, bar = C.personal, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.procedureDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const StampStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 40, 38, 0.94)', border: `2px solid ${C.dual}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.personal}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const DualStamp = ({children, tone = C.dual, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const AgencyScene = () => {
  /* data-final-knowledge="agency-rules" */
  const noAgency = ['遗嘱', '生存状况', '收养关系等应当由本人申办的公证事项'];
  return (
    <Shell code="01" kicker="公证代理 · 现场监督" title="公证代理与现场监督类公证">
      <div
        data-layout="agency-dual-stamps"
        data-visual-anchor="main center"
        data-text-treatments="stamp-plaques,dual-seals"
        data-visual-grammar="may-agency,no-agency,supervision-note"
        data-focal-rule="will-survival-adoption-must-be-personal"
        data-focal-channels="no-agency-list,two-person-note"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="agency-rules" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 620}}>
          <Panel tone={C.joint} watermark={<UserCheck size={190} color={C.joint} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <StampTab bar={C.joint} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>可以委托他人代理</StampTab>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6, backgroundColor: `${C.joint}14`, borderLeft: `6px solid ${C.joint}`, padding: '12px 14px'}}>
              当事人申请办理公证，<Mark color={C.joint}>可以委托他人代理</Mark>
            </div>
            <StampTab bar={C.joint} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>现场监督类公证</StampTab>
            <div style={{fontSize: 23, fontWeight: 920, color: C.ink}}>
              应当由 <DualStamp tone={C.joint} delay={140}>2 人共同办理</DualStamp>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 620}}>
          <Panel tone={C.personal} watermark={<Ban size={190} color={C.personal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <StampTab bar={C.personal} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不得委托他人代理（应当由本人申办）</StampTab>
            {noAgency.map((line) => (
              <div key={line} style={{fontSize: 25, fontWeight: 950, color: C.ink, backgroundColor: `${C.personal}12`, border: `3px solid ${C.personal}`, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14}}>
                <Ban size={30} color={C.personal} strokeWidth={2.2} />
                {line}
              </div>
            ))}
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>记住三件事：遗嘱 · 生存状况 · 收养关系 —— 必须本人申办</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const JointScene = () => {
  /* data-final-knowledge="joint-handling" */
  const joints = [
    {name: '现场监督类公证', tone: C.joint, icon: <Users size={30} color={C.paper} strokeWidth={2.2} />, body: '应当由 2 人共同办理'},
    {name: '遗嘱公证', tone: C.personal, icon: <UserCheck size={30} color={C.paper} strokeWidth={2.2} />, body: '应当由 2 人共同办理；承办公证员应当全程亲自办理；特殊情况下只能由 1 名公证员办理时，应当请 1 名见证人在场，见证人应当在询问笔录上签名或盖章'},
    {name: '保全证据公证', tone: C.dual, icon: <Users size={30} color={C.paper} strokeWidth={2.2} />, body: '由 2 人共同办理，亲自外出办理；发现当事人以违法手段取得证据的，不予办理公证'},
  ] as const;
  return (
    <Shell code="02" kicker="二人共同办理" title="三类公证 · 二人共同办理">
      <div
        data-layout="three-joint-stamps"
        data-visual-anchor="main center"
        data-text-treatments="joint-chips,witness-seals"
        data-visual-grammar="supervision-joint,will-joint,evidence-joint"
        data-focal-rule="three-types-two-notaries-together"
        data-focal-channels="three-joint-types,witness-rule"
        style={{position: 'absolute', inset: 0}}
      >
        {joints.map((joint, index) => (
          <Enter key={joint.name} delay={6 + index * 18} from="up" marker={index === 0 ? 'joint-handling' : undefined} style={{position: 'absolute', left: 0, top: index * 148, width: 1776}}>
            <Panel tone={joint.tone} style={{height: 132, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
              <span style={{flexShrink: 0, width: 64, height: 64, borderRadius: 32, backgroundColor: joint.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.dual}`}}>{joint.icon}</span>
              <span style={{flexShrink: 0, width: 230, fontSize: 27, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{joint.name}</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55, flex: 1}}>
                <DualStamp tone={joint.tone} delay={120 + index * 20}>2 人共同办理</DualStamp> {joint.body}
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 464, width: 1776}}>
          <StampStrip style={{height: 84}}>
            <Users size={40} color={C.dual} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.dual, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.paper}}>
              现场监督 · 遗嘱 · 保全证据 —— 三类都得<Mark color={C.paper}>二人共同办理</Mark>；遗嘱·生存状况·收养 —— 必须<Mark color={C.paper}>本人申办</Mark>
            </span>
          </StampStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NotaryProcedure = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-agency" {...SCENES.agency}>
      <AgencyScene />
    </TimelineSequence>
    <TimelineSequence name="02-joint" {...SCENES.joint}>
      <JointScene />
    </TimelineSequence>
  </AbsoluteFill>
);
