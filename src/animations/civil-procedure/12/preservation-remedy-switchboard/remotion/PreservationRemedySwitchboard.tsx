import type {CSSProperties, ReactNode} from 'react';
import {RefreshCcw, Replace, Scale, ShieldOff, Unplug, Zap} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {black: '#151515', panel: '#292929', white: '#f4f1e9', red: '#e84942', blue: '#4f8edc', lime: '#b8dc62', steel: '#777b80'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {const frame = useCurrentFrame(); return <div style={{...style, opacity: interpolate(frame, [delay, delay + 14], [0, 1], CLAMP), translate: interpolate(frame, [delay, delay + 14], ['0px -24px', '0px 0px'], CLAMP)}}>{children}</div>;};
const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.black, color: C.white, fontFamily: 'var(--inkloom-animation-body)'}}><div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 30, backgroundColor: C.red}}/><div style={{position: 'absolute', left: 70, top: 54, fontSize: 18, fontWeight: 900, color: C.lime}}>REMEDY SWITCHBOARD / {code}</div><h1 style={{position: 'absolute', left: 70, top: 88, margin: 0, fontSize: 58, fontWeight: 900}}>{title}</h1><div style={{position: 'absolute', left: 0, right: 0, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div></AbsoluteFill>;

export const ReconsiderationScene = () => {
  const frame = useCurrentFrame();
  const execution = interpolate(frame, [18, 118], [0, 1], CLAMP);
  return <Shell code="01" title="复议一次，但原裁定继续执行">
    <div data-layout="parallel-reconsideration-execution-circuit" data-visual-anchor="comparison-axis" data-text-treatments="label-block,external-negation" data-visual-grammar="remedy,parallelism,non-suspension" data-focal-rule="reconsideration-does-not-suspend-preservation-execution" data-focal-channels="icon,connector,contrast" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 60, top: 90, width: 520, height: 500, border: `6px solid ${C.blue}`, padding: '46px'}}><RefreshCcw size={92} color={C.blue}/><div style={{marginTop: 40, fontSize: 46, fontWeight: 950}}>同级复议</div><div style={{marginTop: 24, fontSize: 34}}>仅可申请一次</div></Reveal>
      <div style={{position: 'absolute', left: 650, top: 80, bottom: 80, width: 12, backgroundColor: C.steel}} />
      <Reveal delay={34} style={{position: 'absolute', right: 60, top: 90, width: 820, height: 500, backgroundColor: C.panel, padding: '46px'}}><Zap size={92} color={C.red}/><div style={{marginTop: 36, fontSize: 48, fontWeight: 950}}>执行不中断</div><div style={{marginTop: 32, height: 20, backgroundColor: C.steel}}><div style={{width: `${execution * 100}%`, height: '100%', backgroundColor: C.red}} /></div><div style={{marginTop: 32, padding: '18px 24px', border: `4px solid ${C.red}`, fontSize: 30}}>复议期间，保全裁定仍然执行</div></Reveal>
    </div>
  </Shell>;
};

export const MandatoryReleaseScene = () => {
  const triggers = ['保全错误', '撤回申请', '诉请被驳回', '30日未起诉', '财产纠纷已担保'];
  return <Shell code="02" title="五类情形触发“应当解除”">
    <div data-layout="five-input-release-relay" data-visual-anchor="flow-target" data-text-treatments="soft-highlight,stamp" data-visual-grammar="trigger-set,convergence,mandatory-result" data-focal-rule="five-statutory-triggers-require-release-of-preservation" data-focal-channels="icon,connector,enclosure" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      {triggers.map((trigger, index) => <Reveal key={trigger} delay={4 + index * 16} style={{position: 'absolute', left: 40, top: 30 + index * 125, width: 600, height: 92, backgroundColor: index % 2 ? C.panel : C.white, color: index % 2 ? C.white : C.black, borderLeft: `12px solid ${index < 3 ? C.blue : C.lime}`, padding: '25px 30px', fontSize: 30, fontWeight: 850}}>{index + 1}. {trigger}</Reveal>)}
      <div style={{position: 'absolute', left: 640, top: 75, bottom: 85, width: 260, borderTop: `8px solid ${C.steel}`, borderBottom: `8px solid ${C.steel}`, borderRight: `8px solid ${C.steel}`}} />
      <Reveal delay={96} style={{position: 'absolute', right: 70, top: 160, width: 650, height: 400, backgroundColor: C.red, color: C.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><Unplug size={104}/><ShieldOff size={84}/><strong style={{fontSize: 58, marginTop: -120}}>法院应当解除保全</strong></Reveal>
    </div>
  </Shell>;
};

export const SecuritySubstitutionScene = () => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame, [28, 108], [0, 520], CLAMP);
  return <Shell code="03" title="等值担保且有利执行：可以变更标的物">
    <div data-layout="equal-value-asset-toggle" data-visual-anchor="role-pair" data-text-treatments="thin-underline,label-block" data-visual-grammar="equivalence,substitution,discretion" data-focal-rule="equivalent-security-may-substitute-for-the-preserved-asset" data-focal-channels="icon,motion,spatial" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 50, top: 120, width: 520, height: 430, border: `6px solid ${C.red}`, padding: '44px'}}><div style={{fontSize: 28, color: C.steel}}>原保全标的物</div><div style={{marginTop: 56, fontSize: 60, fontWeight: 950}}>财产 A</div></Reveal>
      <Scale size={96} color={C.lime} style={{position: 'absolute', left: 810, top: 80}} />
      <div style={{position: 'absolute', left: 660, top: 230, width: 400, height: 160, borderTop: `8px solid ${C.lime}`, borderBottom: `8px solid ${C.lime}`}}><div style={{position: 'absolute', left: shift, top: 25, width: 120, height: 100, backgroundColor: C.blue, display: 'grid', placeItems: 'center'}}><Replace size={52}/></div></div>
      <Reveal delay={76} style={{position: 'absolute', right: 50, top: 120, width: 520, height: 430, backgroundColor: C.white, color: C.black, padding: '44px'}}><div style={{fontSize: 28, color: C.steel}}>其他等值担保财产</div><div style={{marginTop: 56, fontSize: 60, fontWeight: 950}}>财产 B</div><div style={{marginTop: 42, borderBottom: `5px solid ${C.blue}`, paddingBottom: 10, fontSize: 28}}>且有利于执行</div></Reveal>
      <div style={{position: 'absolute', left: 660, bottom: 25, width: 400, textAlign: 'center', fontSize: 30, color: C.lime, fontWeight: 900}}>法院可以裁定变更</div>
    </div>
  </Shell>;
};

export const PreservationRemedySwitchboard = () => <AbsoluteFill>
  <TimelineSequence name="01-reconsideration" {...SCENES.reconsideration}><ReconsiderationScene /></TimelineSequence>
  <TimelineSequence name="02-mandatory-release" {...SCENES.mandatoryRelease}><MandatoryReleaseScene /></TimelineSequence>
  <TimelineSequence name="03-security-substitution" {...SCENES.securitySubstitution}><SecuritySubstitutionScene /></TimelineSequence>
</AbsoluteFill>;
