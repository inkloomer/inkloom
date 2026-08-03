import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, BriefcaseBusiness, CircleSlash2, DoorOpen, FileClock, Gavel, HeartHandshake, RefreshCcw, ScanLine, ShieldCheck, ShieldQuestion} from 'lucide-react';
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

export const TimingWindowScene = () => {
  const frame = useCurrentFrame();
  const rail = interpolate(frame, [24, 102], [0, 1], CLAMP);
  return <Shell code="04" title="先予执行在哪个时间窗口？">
    <div data-layout="pre-judgment-relief-window" data-visual-anchor="timeline-gate" data-text-treatments="label-block,soft-highlight,external-negation" data-visual-grammar="sequence,window,cutoff" data-focal-rule="provisional-execution-runs-after-acceptance-and-before-final-judgment" data-focal-channels="icon,connector,enclosure,contrast" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      <div style={{position: 'absolute', left: 105, right: 105, top: 350, height: 10, backgroundColor: C.pale}} />
      <div style={{position: 'absolute', left: 105, top: 350, width: 1500, height: 10, backgroundColor: C.teal, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={6} style={{position: 'absolute', left: 36, top: 175, width: 390, height: 290, border: `5px solid ${C.teal}`, padding: '34px 36px'}}>
        <FileClock size={66} color={C.teal}/><div style={{marginTop: 26, fontSize: 38, fontWeight: 950}}>案件受理</div><div style={{marginTop: 18, fontSize: 27, color: C.teal, fontWeight: 850}}>窗口从这里开启</div>
      </Reveal>
      <Reveal delay={42} style={{position: 'absolute', left: 628, top: 92, width: 500, height: 460, backgroundColor: C.ink, color: C.white, padding: '42px 44px'}}>
        <BadgeCheck size={78} color={C.red}/><div style={{marginTop: 28, fontSize: 46, fontWeight: 950}}>先予执行</div><div style={{marginTop: 24, padding: '16px 18px', border: `4px solid ${C.red}`, fontSize: 30, lineHeight: 1.35, fontWeight: 900}}>为生产、生活急需<br/>预先履行义务</div><div style={{marginTop: 28, fontSize: 25, color: '#dbe6e2'}}>只在案件尚未终局时解决紧急需要</div>
      </Reveal>
      <Reveal delay={72} from="right" style={{position: 'absolute', right: 36, top: 175, width: 390, height: 290, border: `5px solid ${C.violet}`, padding: '34px 36px'}}>
        <Gavel size={66} color={C.violet}/><div style={{marginTop: 26, fontSize: 38, fontWeight: 950}}>终局判决</div><div style={{marginTop: 18, fontSize: 27, color: C.violet, fontWeight: 850}}>窗口在此截止</div>
      </Reveal>
      <Reveal delay={104} style={{position: 'absolute', left: 1260, bottom: 40, width: 450, height: 104, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, border: `3px solid ${C.red}`, color: C.red, fontSize: 28, fontWeight: 900}}><CircleSlash2 size={44}/>不是终局判决之后</Reveal>
    </div>
  </Shell>;
};

export const ReviewRemedyScene = () => {
  const frame = useCurrentFrame();
  const rail = interpolate(frame, [38, 118], [0, 1], CLAMP);
  return <Shell code="05" title="不服先予执行：同级复议一次">
    <div data-layout="provisional-review-parallel-circuit" data-visual-anchor="comparison-axis" data-text-treatments="label-block,stamp,external-negation" data-visual-grammar="remedy,parallelism,non-suspension" data-focal-rule="one-same-level-review-does-not-stop-provisional-execution" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 40, top: 160, width: 400, height: 330, backgroundColor: C.ink, color: C.white, padding: '36px'}}>
        <Gavel size={70} color={C.red}/><div style={{marginTop: 28, fontSize: 37, fontWeight: 950}}>先予执行裁定</div><div style={{marginTop: 18, fontSize: 25}}>义务人预先履行</div>
      </Reveal>
      <div style={{position: 'absolute', left: 440, top: 325, width: 300, height: 8, backgroundColor: C.teal, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={28} style={{position: 'absolute', left: 760, top: 105, width: 470, height: 430, border: `6px solid ${C.teal}`, padding: '38px'}}>
        <RefreshCcw size={76} color={C.teal}/><div style={{marginTop: 28, fontSize: 40, fontWeight: 950}}>作出裁定的法院</div><div style={{marginTop: 26, padding: '15px 18px', backgroundColor: C.teal, color: C.white, fontSize: 31, fontWeight: 900}}>同级复议 · 仅一次</div><div style={{marginTop: 30, fontSize: 25, color: C.ink, lineHeight: 1.42}}>复议针对裁定本身，不改变先予执行的紧急性质。</div>
      </Reveal>
      <div style={{position: 'absolute', left: 1230, top: 225, width: 235, height: 6, backgroundColor: C.red, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 1230, top: 430, width: 235, height: 6, backgroundColor: C.violet, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={68} from="right" style={{position: 'absolute', right: 40, top: 92, width: 340, height: 220, backgroundColor: C.red, color: C.white, padding: '28px 30px'}}>
        <ShieldCheck size={56}/><div style={{marginTop: 20, fontSize: 31, fontWeight: 950}}>原裁定继续执行</div><div style={{marginTop: 16, fontSize: 23}}>复议不停止执行</div>
      </Reveal>
      <Reveal delay={92} from="right" style={{position: 'absolute', right: 40, bottom: 92, width: 340, height: 220, border: `4px solid ${C.violet}`, padding: '28px 30px'}}>
        <CircleSlash2 size={56} color={C.violet}/><div style={{marginTop: 20, fontSize: 31, fontWeight: 950}}>不是上诉程序</div><div style={{marginTop: 16, fontSize: 23, color: C.ink}}>不能向上级法院另行上诉</div>
      </Reveal>
    </div>
  </Shell>;
};

export const ProvisionalExecutionGates = () => <AbsoluteFill>
  <TimelineSequence name="01-eligible-claims" {...SCENES.eligibleClaims}><EligibleClaimsScene /></TimelineSequence>
  <TimelineSequence name="02-four-gates" {...SCENES.fourGates}><FourGatesScene /></TimelineSequence>
  <TimelineSequence name="03-scope-and-security" {...SCENES.scopeAndSecurity}><ScopeAndSecurityScene /></TimelineSequence>
  <TimelineSequence name="04-timing-window" {...SCENES.timingWindow}><TimingWindowScene /></TimelineSequence>
  <TimelineSequence name="05-review-remedy" {...SCENES.reviewRemedy}><ReviewRemedyScene /></TimelineSequence>
</AbsoluteFill>;
