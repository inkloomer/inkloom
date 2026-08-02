import type {CSSProperties, ReactNode} from 'react';
import {ArrowRightLeft, FolderInput, Landmark, MapPin, Pause, Route} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {paper: '#f3f0e7', ink: '#18243a', blue: '#2d68b2', red: '#c7473d', yellow: '#e4b63f', gray: '#7b8490', white: '#fffdf7'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {const frame = useCurrentFrame(); return <div style={{...style, opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP), translate: interpolate(frame, [delay, delay + 16], ['-34px 0px', '0px 0px'], CLAMP)}}>{children}</div>;};
const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}><div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 36, backgroundColor: C.red}}/><div style={{position: 'absolute', left: 76, top: 52, fontSize: 18, fontWeight: 850, color: C.blue}}>COURT ROUTING TABLE / {code}</div><h1 style={{position: 'absolute', left: 76, top: 88, margin: 0, fontSize: 58, fontWeight: 900}}>{title}</h1><div style={{position: 'absolute', left: 76, right: 76, top: 174, borderTop: `4px solid ${C.ink}`}}/><div style={{position: 'absolute', left: 0, right: 0, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div></AbsoluteFill>;

export const JurisdictionTriangleScene = () => {
  const courts = [
    {label: '财产所在地', left: 130, top: 150},
    {label: '被申请人住所地', left: 1110, top: 150},
    {label: '案件管辖法院', left: 620, top: 500},
  ];
  return <Shell code="01" title="诉前保全可以向哪三个法院申请？">
    <div data-layout="triangular-jurisdiction-field" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight" data-visual-grammar="alternative,connection,selection" data-focal-rule="three-alternative-connections-support-pre-suit-preservation-jurisdiction" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <svg width="1720" height="760" style={{position: 'absolute', inset: 0}}><path d="M350 260 L1370 260 L860 610 Z" fill="none" stroke={C.yellow} strokeWidth="8" strokeDasharray="18 14" /></svg>
      {courts.map((court, index) => <Reveal key={court.label} delay={10 + index * 28} style={{position: 'absolute', left: court.left, top: court.top, width: 480, height: 190, backgroundColor: C.white, border: `5px solid ${index === 2 ? C.red : C.blue}`, padding: '30px 34px'}}><Landmark size={58} color={index === 2 ? C.red : C.blue}/><div style={{marginTop: 18, fontSize: 33, fontWeight: 900}}>{court.label}</div></Reveal>)}
      <Reveal delay={76} style={{position: 'absolute', left: 690, top: 300, width: 340, height: 170, backgroundColor: C.ink, color: C.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><MapPin size={52} color={C.yellow}/><strong style={{fontSize: 30, marginTop: -45}}>任选其一申请</strong></Reveal>
    </div>
  </Shell>;
};

export const ProcedureHandoffScene = () => {
  const frame = useCurrentFrame();
  const travel = interpolate(frame, [28, 105], [0, 410], CLAMP);
  return <Shell code="02" title="在另一有管辖权法院起诉：移送什么？">
    <div data-layout="dual-court-handoff-conveyor" data-visual-anchor="flow-path" data-text-treatments="thin-underline,stamp" data-visual-grammar="handoff,continuity,attribution" data-focal-rule="the-preservation-procedures-move-and-the-order-is-attributed-to-the-receiving-court" data-focal-channels="icon,connector,motion" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 40, top: 110, width: 500, height: 430, backgroundColor: C.ink, color: C.white, padding: '42px'}}><Landmark size={68} color={C.yellow}/><div style={{marginTop: 30, fontSize: 38, fontWeight: 900}}>采取保全法院</div><div style={{marginTop: 24, fontSize: 27, color: '#d6deeb'}}>先作出诉前保全裁定</div></Reveal>
      <Reveal delay={70} style={{position: 'absolute', right: 40, top: 110, width: 500, height: 430, border: `6px solid ${C.red}`, backgroundColor: C.white, padding: '42px'}}><FolderInput size={68} color={C.red}/><div style={{marginTop: 30, fontSize: 38, fontWeight: 900}}>受理案件法院</div><div style={{marginTop: 24, fontSize: 27}}>接收保全手续</div><div style={{marginTop: 30, padding: '14px 18px', backgroundColor: C.red, color: C.white, fontSize: 25, fontWeight: 850}}>裁定视为本院作出</div></Reveal>
      <div style={{position: 'absolute', left: 550, right: 550, top: 320, height: 12, backgroundColor: C.gray}} />
      <div style={{position: 'absolute', left: 580 + travel, top: 272, width: 180, height: 110, backgroundColor: C.blue, color: C.white, display: 'grid', placeItems: 'center', boxShadow: `10px 10px 0 ${C.yellow}`}}><ArrowRightLeft size={38}/><span style={{fontSize: 25, fontWeight: 900, marginTop: -24}}>保全手续</span></div>
      <div style={{position: 'absolute', left: 610, bottom: 30, width: 500, paddingBottom: 12, borderBottom: `4px solid ${C.blue}`, fontSize: 28, textAlign: 'center'}}>移送保全手续，不移送诉讼案件</div>
    </div>
  </Shell>;
};

export const JurisdictionHoldScene = () => <Shell code="03" title="案件管辖权未确定：保全财产先停在哪里？">
  <div data-layout="suspended-routing-hold-bay" data-visual-anchor="boundary" data-text-treatments="external-negation,label-block" data-visual-grammar="uncertainty,prohibition,resolution" data-focal-rule="preserved-property-must-wait-until-jurisdiction-is-determined" data-focal-channels="contrast,enclosure,locator" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
    <Reveal delay={4} style={{position: 'absolute', left: 50, top: 140, width: 500, height: 390, backgroundColor: C.blue, color: C.white, padding: '42px'}}><Route size={68}/><div style={{marginTop: 32, fontSize: 37, fontWeight: 900}}>B法院移送A法院</div><div style={{marginTop: 28, fontSize: 27}}>A法院认为移送错误</div></Reveal>
    <Reveal delay={32} style={{position: 'absolute', left: 660, top: 60, width: 400, height: 560, border: `10px solid ${C.yellow}`, backgroundColor: C.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><Pause size={100} color={C.red}/><div style={{fontSize: 48, fontWeight: 950, marginTop: -170}}>暂停移送</div><div style={{fontSize: 28, marginTop: -210}}>不能退回<br/>不能再次移送</div></Reveal>
    <Reveal delay={62} style={{position: 'absolute', right: 50, top: 140, width: 500, height: 390, border: `5px solid ${C.red}`, padding: '42px'}}><Landmark size={68} color={C.red}/><div style={{marginTop: 32, fontSize: 37, fontWeight: 900}}>报上级法院</div><div style={{marginTop: 28, fontSize: 27}}>指定管辖后再移送</div></Reveal>
    <div style={{position: 'absolute', left: 580, right: 580, bottom: 0, height: 50, backgroundColor: C.ink, color: C.white, display: 'grid', placeItems: 'center', fontSize: 25}}>保全财产维持现状</div>
  </div>
</Shell>;

export const PreSuitPreservationTransfer = () => <AbsoluteFill>
  <TimelineSequence name="01-jurisdiction-triangle" {...SCENES.jurisdictionTriangle}><JurisdictionTriangleScene /></TimelineSequence>
  <TimelineSequence name="02-procedure-handoff" {...SCENES.procedureHandoff}><ProcedureHandoffScene /></TimelineSequence>
  <TimelineSequence name="03-jurisdiction-hold" {...SCENES.jurisdictionHold}><JurisdictionHoldScene /></TimelineSequence>
</AbsoluteFill>;
