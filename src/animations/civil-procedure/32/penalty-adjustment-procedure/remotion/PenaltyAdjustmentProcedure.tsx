import type {ReactNode} from 'react';
import {
  ArrowUpRight,
  Ban,
  Gauge,
  Gavel,
  Landmark,
  MessageSquareWarning,
  Scale,
  SlidersHorizontal,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const C = {
  bg: '#eef1ef',
  panel: '#fbfcf9',
  ink: '#242a2d',
  red: '#c7483a',
  green: '#2b7a61',
  amber: '#d7a32e',
  violet: '#76558f',
  track: '#cbd2ce',
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const {Enter, MaskedReveal} = createMotionPrimitives(toSourceFrame);

const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background: C.bg, color: C.ink, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${C.ink}18 1.5px,transparent 1.5px)`, backgroundSize: '30px 30px'}} />
    <div style={{position: 'absolute', left: 74, top: 42, width: 126, height: 76, display: 'grid', placeItems: 'center', background: C.ink, color: C.panel, fontSize: 27, fontWeight: 900, borderBottom: `9px solid ${C.amber}`}}>{code}</div>
    <MaskedReveal style={{position: 'absolute', left: 232, right: 76, top: 42, fontSize: 51, lineHeight: 1.16, fontWeight: 900}}>{title}</MaskedReveal>
    <div style={{position: 'absolute', left: 74, right: 74, top: 140, height: 5, background: `linear-gradient(90deg,${C.red},${C.amber} 35%,${C.green} 68%,${C.violet})`}} />
    <div style={{position: 'absolute', left: 74, right: 74, top: 176, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Module = ({index, label, detail, icon, knowledge, tone = 'green'}: {index: number; label: string; detail: string; icon: ReactNode; knowledge: string; tone?: 'red' | 'green' | 'amber' | 'violet'}) => {
  const color = C[tone];
  return <Enter delay={20 + index * 17} from={index % 2 ? 'right' : 'left'} style={{height: '100%'}}>
    <div data-audit-boundary="true" data-final-knowledge={knowledge} style={{height: '100%', minHeight: 132, background: C.panel, border: `3px solid ${C.ink}`, boxShadow: `0 12px 0 ${color}24`, display: 'grid', gridTemplateColumns: '62px minmax(0,1fr)', gridTemplateRows: 'auto 1fr', gap: '10px 16px', padding: '22px 24px'}}>
      <div style={{gridRow: '1 / 3', width: 58, height: 58, display: 'grid', placeItems: 'center', color: C.panel, background: color, border: `4px solid ${C.ink}`}}>{icon}</div>
      <div style={{fontSize: 31, fontWeight: 900, lineHeight: 1.18, paddingBottom: 8, borderBottom: `4px solid ${color}`}}>{label}</div>
      <div style={{fontSize: 23, fontWeight: 650, lineHeight: 1.5}}>{detail}</div>
    </div>
  </Enter>;
};

const Signal = ({active, label, knowledge}: {active: number; label: string; knowledge?: string}) => (
  <div data-stateful-source="penalty-signal" data-stateful-terminal="penalty-signal" data-final-knowledge={knowledge} style={{position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', width: 250, height: 158, display: 'grid', placeItems: 'center', background: C.ink, color: C.panel, border: `7px solid ${C.amber}`, zIndex: 3}}>
    <div style={{fontSize: 24, fontWeight: 800, color: C.amber}}>{label}</div>
    <div style={{display: 'flex', alignItems: 'end', gap: 6}}><span style={{fontSize: 67, lineHeight: 1, fontWeight: 900}}>{Math.round(active * 100)}</span><span style={{fontSize: 25, fontWeight: 900, paddingBottom: 8}}>%</span></div>
  </div>
);

export const RequestArmsAdjustmentScene = () => {
  const active = interpolate(toSourceFrame(useCurrentFrame()), [22, 104], [0, 1], CLAMP);
  return <Shell code="32.1" title="违约金调整必须先由当事人“打开开关”">
    <div data-layout="request-arms-adjustment-control-switch" data-visual-anchor="boundary" data-visual-grammar="party-request,counterclaim,defense,no-ex-officio-adjustment,article-585-basis" data-text-treatments="label-block,thin-underline,external-negation" data-focal-rule="party-request-arms-adjustment" data-focal-channels="enclosure,icon,contrast" style={{position: 'absolute', inset: 0}}>
      <Signal active={active} label="调整通道" data-final-knowledge="party-request-required" />
      <div style={{position: 'absolute', inset: '28px 24px', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gridTemplateRows: 'repeat(2,minmax(0,1fr))', gap: '188px 330px'}}>
        <Module index={0} data-final-knowledge="article-585-adjustment-basis" label="实体法基础" detail="约定违约金过分高于损失时，法院或仲裁机构依请求适当减少" icon={<Scale size={34}/>} tone="amber" />
        <Module index={1} data-final-knowledge="counterclaim-channel" label="反诉通道" detail="当事人可以反诉方式请求调整，形成独立请求" icon={<SlidersHorizontal size={34}/>} tone="green" />
        <Module index={2} data-final-knowledge="defense-channel" label="抗辩通道" detail="也可以抗辩方式请求调整，不强制必须提起反诉" icon={<SlidersHorizontal size={34}/>} tone="violet" />
        <Module index={3} data-final-knowledge="no-ex-officio-adjustment" label="不得依职权直接调整" detail="当事人未请求时，法院不得跳过请求前提自行减少" icon={<Ban size={34}/>} tone="red" />
      </div>
    </div>
  </Shell>;
};

export const ProofAndInvalidWaiverScene = () => {
  const weight = interpolate(toSourceFrame(useCurrentFrame()), [18, 112], [0.18, 0.78], CLAMP);
  return <Shell code="32.2" title="举证责任在违约方，“事先放弃调整”不锁死法院">
    <div data-layout="proof-and-invalid-waiver-burden-rail" data-visual-anchor="comparison-axis" data-visual-grammar="breaching-party-burden,nonbreaching-party-evidence,uncertain-loss-risk,advance-waiver-invalid" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="breaching-party-proof-burden" data-focal-channels="motion,locator,contrast" style={{position: 'absolute', inset: 0}}>
      <div data-stateful-source="proof-weight" data-stateful-terminal="proof-weight" style={{position: 'absolute', left: 150, right: 150, top: '50%', height: 16, translate: '0 -50%', background: C.track, border: `3px solid ${C.ink}`}}><div style={{position: 'absolute', left: `${weight * 100}%`, top: -27, width: 62, height: 62, translate: '-50% 0', background: C.red, border: `5px solid ${C.ink}`, display: 'grid', placeItems: 'center', color: C.panel}}><Gauge size={36}/></div></div>
      <div style={{position: 'absolute', inset: '34px 24px', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gridTemplateRows: 'repeat(2,minmax(0,1fr))', gap: '156px 190px'}}>
        <Module index={0} data-final-knowledge="breaching-party-proves-excess" label="违约方：证明过分高" detail="主张减少者对约定违约金过分高于损失承担证明责任" icon={<Gauge size={34}/>} tone="red" />
        <Module index={1} data-final-knowledge="nonbreaching-party-provides-evidence" label="守约方：提供合理证据" detail="主张违约金合理的一方也应提供损失等相应证据" icon={<Scale size={34}/>} tone="green" />
        <Module index={2} data-final-knowledge="uncertainty-risk-on-breaching-party" label="真伪不明的风险" detail="无法证明过分高时，不利后果由承担证明责任的违约方承担" icon={<Gauge size={34}/>} tone="violet" />
        <Module index={3} data-final-knowledge="advance-adjustment-waiver-ineffective" label="预先放弃条款无效力" detail="仅以合同约定“不得调整”为由请求不调整的，法院不予支持" icon={<Ban size={34}/>} tone="amber" />
      </div>
    </div>
  </Shell>;
};

export const FirstInstanceClarificationScene = () => {
  const progress = interpolate(toSourceFrame(useCurrentFrame()), [20, 126], [0, 1], CLAMP);
  return <Shell code="32.3" title="一审释明：先判断“要不要赔”，再询问“要不要减”">
    <div data-layout="first-instance-clarification-guarded-fork" data-visual-anchor="document-fork" data-visual-grammar="primary-defense,court-rejects-defense,clarification-duty,adjustment-request,full-debate" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="court-clarification-duty" data-focal-channels="connector,icon,enclosure" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: '50%', top: 64, bottom: 74, width: 10, translate: '-50% 0', background: C.track}}><div style={{height: `${progress * 100}%`, background: C.amber}} /></div>
      <div style={{position: 'absolute', left: 54, right: 54, top: '50%', height: 10, background: C.track}}><div style={{width: `${progress * 100}%`, height: '100%', background: C.green}} /></div>
      <Signal active={progress} label="释明后请求" data-final-knowledge="party-elects-adjustment" />
      <div style={{position: 'absolute', inset: '28px 24px', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gridTemplateRows: 'repeat(2,minmax(0,1fr))', gap: '190px 344px'}}>
        <Module index={0} data-final-knowledge="primary-nonliability-defense" label="原始抗辩" detail="合同不成立、无效、被撤销、不发生效力、不构成违约或对方无损失" icon={<MessageSquareWarning size={34}/>} tone="violet" />
        <Module index={1} data-final-knowledge="possible-defense-rejection" label="法院可能不采纳" detail="若法院拟不支持不承担违约责任的抗辩，违约金调整成为备位问题" icon={<Landmark size={34}/>} tone="red" />
        <Module index={2} data-final-knowledge="court-clarification-duty" label="必须释明" detail="法院应当询问：若原抗辩不成立，是否请求调整过高违约金" icon={<MessageSquareWarning size={34}/>} tone="amber" />
        <Module index={3} data-final-knowledge="proof-debate-before-adjustment" label="请求后充分攻防" detail="当事人选择调整后，对损失与过分高的判断充分举证、质证和辩论" icon={<Scale size={34}/>} tone="green" />
      </div>
    </div>
  </Shell>;
};

export const AppellateCompletionScene = () => {
  const progress = interpolate(toSourceFrame(useCurrentFrame()), [12, 132], [0, 1], CLAMP);
  return <Shell code="32.4" title="二审可直接释明并减少，不必一律发回重审">
    <div data-layout="appellate-completion-two-stage-route" data-visual-anchor="timeline-gate" data-visual-grammar="first-instance-no-penalty,no-prior-clarification,appeal-finds-penalty,appeal-clarifies,direct-reduction-after-debate,absent-defendant-exception" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="appeal-direct-completion" data-focal-channels="connector,motion,contrast" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 84, right: 84, top: '50%', height: 16, translate: '0 -50%', background: C.track, border: `3px solid ${C.ink}`}}><div style={{width: `${progress * 100}%`, height: '100%', background: `linear-gradient(90deg,${C.violet},${C.amber},${C.green})`}} /></div>
      <div data-stateful-source="adjusted-award" data-stateful-terminal="adjusted-award" style={{position: 'absolute', right: 82, top: '50%', translate: '0 -50%', width: 176, height: 120, display: 'grid', placeItems: 'center', background: C.green, color: C.panel, border: `6px solid ${C.ink}`, fontSize: 29, fontWeight: 900, scale: progress}}>直接改判</div>
      <div style={{position: 'absolute', inset: '30px 188px 30px 24px', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gridTemplateRows: 'repeat(2,minmax(0,1fr))', gap: '172px 22px'}}>
        <Module index={0} data-final-knowledge="first-instance-rejected-penalty" label="一审认为无需支付" detail="一审采纳不承担违约责任的抗辩，因而未进入过高调整" icon={<Landmark size={31}/>} tone="violet" />
        <Module index={1} data-final-knowledge="first-instance-no-clarification" label="一审未释明" detail="既然一审未判付违约金，当时可能也未就是否请求减少进行释明" icon={<MessageSquareWarning size={31}/>} tone="amber" />
        <Module index={2} data-final-knowledge="appeal-finds-penalty-due" label="二审认为应支付" detail="二审否定一审前提判断，需要接续处理违约金是否过高" icon={<ArrowUpRight size={31}/>} tone="red" />
        <Module index={3} data-final-knowledge="appeal-direct-clarification" label="二审可直接释明" detail="二审法院可当庭询问当事人是否请求调整" icon={<MessageSquareWarning size={31}/>} tone="amber" />
        <Module index={4} data-final-knowledge="appeal-may-directly-reduce" label="充分攻防后直接减少" detail="就是否调整充分举证、质证、辩论后，二审可依法判决适当减少" icon={<Gavel size={31}/>} tone="green" />
        <Module index={5} data-final-knowledge="objectively-absent-defendant-may-request-on-appeal" label="客观未到庭的补救" detail="被告因客观原因未参加一审，二审到庭后仍可请求减少" icon={<ArrowUpRight size={31}/>} tone="violet" />
      </div>
    </div>
  </Shell>;
};

export const PenaltyAdjustmentProcedure = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-request-arms-adjustment" start={SCENES.requestArmsAdjustment.start} duration={SCENES.requestArmsAdjustment.duration}><RequestArmsAdjustmentScene /></TimelineSequence>
    <TimelineSequence name="02-proof-and-invalid-waiver" start={SCENES.proofAndInvalidWaiver.start} duration={SCENES.proofAndInvalidWaiver.duration}><ProofAndInvalidWaiverScene /></TimelineSequence>
    <TimelineSequence name="03-first-instance-clarification" start={SCENES.firstInstanceClarification.start} duration={SCENES.firstInstanceClarification.duration}><FirstInstanceClarificationScene /></TimelineSequence>
    <TimelineSequence name="04-appellate-completion" start={SCENES.appellateCompletion.start} duration={SCENES.appellateCompletion.duration}><AppellateCompletionScene /></TimelineSequence>
  </AbsoluteFill>
);
