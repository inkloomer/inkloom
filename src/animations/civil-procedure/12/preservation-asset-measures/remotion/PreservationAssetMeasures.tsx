import type {CSSProperties, ReactNode} from 'react';
import {Apple, BadgeDollarSign, Coins, LockKeyhole, PackageCheck, Snowflake} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {bg: '#12352f', floor: '#19483f', cream: '#f4eedb', aqua: '#6cd6d0', copper: '#d58b52', magenta: '#e75b8d', ink: '#17312c'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {const frame = useCurrentFrame(); return <div style={{...style, opacity: interpolate(frame, [delay, delay + 18], [0, 1], CLAMP), scale: interpolate(frame, [delay, delay + 18], [0.92, 1], CLAMP)}}>{children}</div>;};
const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.bg, color: C.cream, fontFamily: 'var(--inkloom-animation-body)'}}><div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${C.floor} 2px, transparent 2px), linear-gradient(90deg, ${C.floor} 2px, transparent 2px)`, backgroundSize: '88px 88px', opacity: 0.45}}/><div style={{position: 'absolute', left: 72, top: 50, padding: '10px 18px', backgroundColor: C.aqua, color: C.ink, fontSize: 18, fontWeight: 900}}>ASSET CONSERVATION / {code}</div><h1 style={{position: 'absolute', left: 72, top: 104, margin: 0, fontSize: 58, fontWeight: 900}}>{title}</h1><div style={{position: 'absolute', left: 0, right: 0, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div></AbsoluteFill>;

export const OrdinaryPropertyScene = () => {
  const actions = [{name: '查封', color: C.aqua}, {name: '扣押', color: C.copper}, {name: '冻结', color: C.magenta}];
  return <Shell code="01" title="一般财产：三种限制动作">
    <div data-layout="three-action-loading-bay" data-visual-anchor="flow-path" data-text-treatments="label-block,stamp" data-visual-grammar="classification,restraint,custody" data-focal-rule="ordinary-property-is-preserved-through-seizure-detention-or-freezing" data-focal-channels="icon,connector,enclosure" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      <Reveal delay={6} style={{position: 'absolute', left: 40, top: 170, width: 380, height: 360, backgroundColor: C.cream, color: C.ink, display: 'grid', placeItems: 'center'}}><PackageCheck size={100} color={C.bg}/><strong style={{fontSize: 38, marginTop: -100}}>一般财产</strong></Reveal>
      <div style={{position: 'absolute', left: 420, top: 344, width: 220, height: 10, backgroundColor: C.aqua}} />
      {actions.map((action, index) => <Reveal key={action.name} delay={30 + index * 24} style={{position: 'absolute', left: 680 + index * 340, top: 110 + index * 105, width: 280, height: 220, backgroundColor: action.color, color: C.ink, display: 'grid', placeItems: 'center', border: `12px solid ${C.cream}`}}><div style={{fontSize: 58, fontWeight: 950}}>{action.name}</div><div style={{fontSize: 24, marginTop: -70}}>限制处分状态</div></Reveal>)}
      <div style={{position: 'absolute', left: 680, right: 60, bottom: 20, borderTop: `4px solid ${C.cream}`, paddingTop: 18, fontSize: 26}}>原则：妥善保管；可指定被保全人、他人或申请保全人保管</div>
      <Snowflake size={40} color={C.aqua} style={{position: 'absolute', right: 60, top: 40}} />
    </div>
  </Shell>;
};

export const PerishableValueScene = () => {
  const frame = useCurrentFrame();
  const travel = interpolate(frame, [18, 112], [0, 840], CLAMP);
  return <Shell code="02" title="鲜活易腐物：保全的是价值，不是形态">
    <div data-layout="perishable-value-conversion-channel" data-visual-anchor="timeline-gate" data-text-treatments="thin-underline,soft-highlight" data-visual-grammar="urgency,conversion,preservation" data-focal-rule="perishable-goods-convert-into-preserved-price" data-focal-channels="icon,motion,contrast" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 30, top: 140, width: 420, height: 400, backgroundColor: C.magenta, color: C.cream, display: 'grid', placeItems: 'center'}}><Apple size={108}/><div style={{fontSize: 38, fontWeight: 900, marginTop: -100}}>季节性·鲜活·易腐</div></Reveal>
      <div style={{position: 'absolute', left: 450, right: 450, top: 330, height: 18, backgroundColor: C.copper}} />
      <div style={{position: 'absolute', left: 480 + travel, top: 254, width: 210, height: 170, backgroundColor: C.cream, color: C.ink, display: 'grid', placeItems: 'center'}}><span style={{fontSize: 30, fontWeight: 900}}>{travel < 500 ? '及时处理' : '变卖'}</span></div>
      <Reveal delay={70} style={{position: 'absolute', right: 30, top: 140, width: 420, height: 400, backgroundColor: C.aqua, color: C.ink, display: 'grid', placeItems: 'center'}}><Coins size={108}/><div style={{fontSize: 42, fontWeight: 950, marginTop: -100}}>法院保存价款</div></Reveal>
      <div style={{position: 'absolute', left: 560, bottom: 25, width: 600, paddingBottom: 12, borderBottom: `5px solid ${C.copper}`, textAlign: 'center', fontSize: 29}}>必要时法院可直接变卖</div>
    </div>
  </Shell>;
};

export const SecuredPropertyScene = () => <Shell code="03" title="保全担保财产，不消灭优先受偿权">
  <div data-layout="secured-rights-custody-shell" data-visual-anchor="boundary" data-text-treatments="external-negation,label-block" data-visual-grammar="restraint,priority,continuity" data-focal-rule="preservation-does-not-eliminate-security-priority-or-possessory-rights" data-focal-channels="icon,enclosure,spatial" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
    <Reveal delay={4} style={{position: 'absolute', left: 140, top: 60, width: 620, height: 590, border: `14px solid ${C.aqua}`, display: 'grid', placeItems: 'center'}}><LockKeyhole size={120} color={C.aqua}/><div style={{fontSize: 50, fontWeight: 950, marginTop: -190}}>查封·扣押·冻结</div><div style={{fontSize: 28, marginTop: -240}}>可以作用于抵押物、留置物、质押物</div></Reveal>
    <Reveal delay={38} style={{position: 'absolute', right: 120, top: 90, width: 680, height: 260, backgroundColor: C.copper, color: C.ink, padding: '40px 46px'}}><BadgeDollarSign size={72}/><div style={{position: 'absolute', left: 150, top: 42, fontSize: 44, fontWeight: 950}}>优先受偿权</div><div style={{position: 'absolute', left: 150, top: 112, fontSize: 29}}>不受保全措施影响</div></Reveal>
    <Reveal delay={66} style={{position: 'absolute', right: 120, bottom: 70, width: 680, height: 250, border: `5px solid ${C.magenta}`, padding: '40px 46px'}}><div style={{fontSize: 36, fontWeight: 900}}>占有与保管</div><div style={{marginTop: 24, fontSize: 27, lineHeight: 1.55}}>一般由担保物权人保管<br/>法院保管也不消灭质权、留置权</div></Reveal>
  </div>
</Shell>;

export const PreservationAssetMeasures = () => <AbsoluteFill>
  <TimelineSequence name="01-ordinary-property" {...SCENES.ordinaryProperty}><OrdinaryPropertyScene /></TimelineSequence>
  <TimelineSequence name="02-perishable-value" {...SCENES.perishableValue}><PerishableValueScene /></TimelineSequence>
  <TimelineSequence name="03-secured-property" {...SCENES.securedProperty}><SecuredPropertyScene /></TimelineSequence>
</AbsoluteFill>;
