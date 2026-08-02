import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, BriefcaseBusiness, DoorOpen, HeartHandshake, ScanLine, ShieldQuestion} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {white: '#f7faf9', ink: '#17313a', red: '#df4a50', teal: '#2a9d8f', violet: '#7459a6', amber: '#e4ad42', pale: '#dfecea'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {const frame = useCurrentFrame(); return <div style={{...style, opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP), translate: interpolate(frame, [delay, delay + 16], ['28px 0px', '0px 0px'], CLAMP)}}>{children}</div>;};
const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.white, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}><div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 18, backgroundColor: C.red}}/><div style={{position: 'absolute', left: 70, top: 48, width: 76, height: 76, backgroundColor: C.red, color: C.white, fontSize: 36, fontWeight: 950, display: 'grid', placeItems: 'center'}}>+</div><div style={{position: 'absolute', left: 180, top: 52, fontSize: 18, color: C.teal, fontWeight: 900}}>EMERGENCY RELIEF TRIAGE / {code}</div><h1 style={{position: 'absolute', left: 180, top: 86, margin: 0, fontSize: 56, fontWeight: 900}}>{title}</h1><div style={{position: 'absolute', left: 0, right: 0, top: 180, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div></AbsoluteFill>;

export const EligibleClaimsScene = () => {
  const streams = [
    {label: '生活保障', items: '赡养·扶养·抚养\n抚恤·医疗', color: C.red},
    {label: '劳动报酬', items: '追索劳动报酬', color: C.violet},
    {label: '其他紧急', items: '停止侵害·返还救助\n恢复生产经营', color: C.amber},
  ];
  return <Shell code="01" title="哪些请求可以进入先予执行？">
    <div data-layout="three-stream-urgency-intake" data-visual-anchor="flow-path" data-text-treatments="label-block,soft-highlight" data-visual-grammar="classification,urgency,convergence" data-focal-rule="only-enumerated-or-urgent-claims-enter-provisional-execution" data-focal-channels="icon,connector,contrast" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      {streams.map((stream, index) => <Reveal key={stream.label} delay={6 + index * 24} style={{position: 'absolute', left: 40, top: 45 + index * 190, width: 780, height: 160, borderLeft: `18px solid ${stream.color}`, backgroundColor: C.pale, padding: '28px 34px'}}>{index === 1 ? <BriefcaseBusiness size={58} color={stream.color}/> : <HeartHandshake size={58} color={stream.color}/>}<div style={{position: 'absolute', left: 130, top: 26, fontSize: 36, fontWeight: 900}}>{stream.label}</div><div style={{position: 'absolute', left: 360, top: 28, whiteSpace: 'pre-line', fontSize: 27, lineHeight: 1.45}}>{stream.items}</div></Reveal>)}
      <div style={{position: 'absolute', left: 850, top: 120, width: 220, height: 390, borderTop: `8px solid ${C.teal}`, borderBottom: `8px solid ${C.teal}`, borderRight: `8px solid ${C.teal}`}} />
      <Reveal delay={80} style={{position: 'absolute', right: 40, top: 150, width: 560, height: 350, backgroundColor: C.ink, color: C.white, padding: '46px'}}><HeartHandshake size={82} color={C.red}/><div style={{marginTop: 30, fontSize: 45, fontWeight: 950}}>共同核心</div><div style={{marginTop: 28, fontSize: 32, borderBottom: `6px solid ${C.red}`, paddingBottom: 12}}>生产、生活的迫切需要</div></Reveal>
    </div>
  </Shell>;
};

export const FourGatesScene = () => {
  const frame = useCurrentFrame();
  const gates = [
    {label: '权利义务明确', color: C.teal},
    {label: '申请人迫切需要', color: C.red},
    {label: '必须由当事人申请', color: C.amber},
    {label: '被申请人有履行能力', color: C.violet},
  ];
  return <Shell code="02" title="四项条件必须同时通过">
    <div data-layout="four-gate-admission-corridor" data-visual-anchor="timeline-gate" data-text-treatments="stamp,thin-underline" data-visual-grammar="conjunction,sequence,admission" data-focal-rule="all-four-conditions-are-required-for-provisional-execution" data-focal-channels="icon,enclosure,motion" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      <div style={{position: 'absolute', left: 80, right: 80, top: 330, height: 14, backgroundColor: C.pale}} />
      {gates.map((gate, index) => {const open = interpolate(frame, [12 + index * 28, 36 + index * 28], [0, 1], CLAMP); return <div key={gate.label} style={{position: 'absolute', left: 90 + index * 405, top: 110, width: 340, height: 460, border: `7px solid ${gate.color}`, backgroundColor: C.white, translate: `0px ${20 * (1 - open)}px`, opacity: open}}><BadgeCheck size={60} color={gate.color} style={{position: 'absolute', left: 130, top: 38}}/><div style={{position: 'absolute', left: 28, right: 28, top: 145, fontSize: 34, lineHeight: 1.3, textAlign: 'center', fontWeight: 900}}>{gate.label}</div><div style={{position: 'absolute', left: 55, right: 55, bottom: 44, height: 12, backgroundColor: gate.color}}/></div>;})}
      <Reveal delay={130} style={{position: 'absolute', right: 40, top: 0, width: 220, height: 88, backgroundColor: C.ink, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, fontSize: 27, fontWeight: 900}}><DoorOpen size={38} color={C.teal}/>准予入口</Reveal>
    </div>
  </Shell>;
};

export const ScopeAndSecurityScene = () => <Shell code="03" title="范围有双重边界，担保由法院决定">
  <div data-layout="bounded-request-security-chamber" data-visual-anchor="boundary" data-text-treatments="external-negation,label-block" data-visual-grammar="scope-limit,discretion,rejection" data-focal-rule="relief-is-bounded-by-the-claim-and-urgent-need-while-security-is-discretionary" data-focal-channels="icon,spatial,annotation" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
    <Reveal delay={4} style={{position: 'absolute', left: 40, top: 70, width: 900, height: 520, border: `8px solid ${C.teal}`, padding: '46px'}}><ScanLine size={74} color={C.teal}/><div style={{marginTop: 30, fontSize: 40, fontWeight: 950}}>先予执行范围</div><div style={{marginTop: 36, display: 'flex', gap: 28}}><div style={{flex: 1, padding: '28px', backgroundColor: C.pale, fontSize: 31, fontWeight: 900}}>不得超出<br/>诉讼请求</div><div style={{flex: 1, padding: '28px', backgroundColor: C.red, color: C.white, fontSize: 31, fontWeight: 900}}>仅限生产生活<br/>急需</div></div></Reveal>
    <Reveal delay={42} style={{position: 'absolute', right: 40, top: 70, width: 650, height: 520, backgroundColor: C.ink, color: C.white, padding: '46px'}}><ShieldQuestion size={74} color={C.amber}/><div style={{marginTop: 30, fontSize: 40, fontWeight: 950}}>担保不是必需</div><div style={{marginTop: 34, fontSize: 29, lineHeight: 1.55}}>法院可以责令提供<br/>责令后拒不提供</div><div style={{marginTop: 30, padding: '18px 22px', backgroundColor: C.red, fontSize: 31, fontWeight: 900}}>裁定驳回申请</div></Reveal>
  </div>
</Shell>;

export const ProvisionalExecutionGates = () => <AbsoluteFill>
  <TimelineSequence name="01-eligible-claims" {...SCENES.eligibleClaims}><EligibleClaimsScene /></TimelineSequence>
  <TimelineSequence name="02-four-gates" {...SCENES.fourGates}><FourGatesScene /></TimelineSequence>
  <TimelineSequence name="03-scope-and-security" {...SCENES.scopeAndSecurity}><ScopeAndSecurityScene /></TimelineSequence>
</AbsoluteFill>;
