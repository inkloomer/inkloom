import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, BookCheck, Briefcase, Gavel, Landmark, Undo2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {paper: '#faf8f1', ink: '#20201f', green: '#27866f', red: '#b94343', blue: '#356f9f', gray: '#83837d', line: '#d6d0c3'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {const frame = useCurrentFrame(); return <div style={{...style, opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP), translate: interpolate(frame, [delay, delay + 16], ['0px 30px', '0px 0px'], CLAMP)}}>{children}</div>;};
const Shell = ({folio, title, children}: {folio: string; title: string; children: ReactNode}) => <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}><div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${C.line} 1px, transparent 1px)`, backgroundSize: '100% 54px', opacity: 0.6}}/><div style={{position: 'absolute', left: 70, top: 48, fontSize: 18, fontWeight: 800, color: C.blue}}>JUDGMENT SETTLEMENT LEDGER</div><div style={{position: 'absolute', right: 70, top: 44, width: 110, height: 74, border: `3px double ${C.ink}`, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 900}}>{folio}</div><h1 style={{position: 'absolute', left: 70, top: 88, margin: 0, fontSize: 58, fontWeight: 900}}>{title}</h1><div style={{position: 'absolute', left: 70, right: 70, top: 170, borderTop: `6px double ${C.ink}`}}/><div style={{position: 'absolute', left: 0, right: 0, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div></AbsoluteFill>;

export const CivilAndLaborRoutesScene = () => <Shell folio="01" title="民诉裁定与劳动仲裁：谁作出，谁执行？">
  <div data-layout="dual-source-execution-ledger" data-visual-anchor="document-fork" data-text-treatments="label-block,thin-underline" data-visual-grammar="source-distinction,handoff,execution" data-focal-rule="civil-courts-execute-their-orders-while-labor-awards-are-transferred-to-court" data-focal-channels="icon,connector,contrast" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
    <Reveal delay={4} style={{position: 'absolute', left: 40, top: 70, width: 690, height: 520, border: `5px solid ${C.green}`, padding: '46px'}}><Landmark size={80} color={C.green}/><div style={{marginTop: 30, fontSize: 43, fontWeight: 900}}>民事诉讼</div><div style={{marginTop: 40, fontSize: 31}}>法院裁定</div><div style={{marginTop: 26, width: 360, borderBottom: `5px solid ${C.green}`}}/><div style={{marginTop: 26, fontSize: 35, fontWeight: 900}}>法院执行</div></Reveal>
    <Reveal delay={34} style={{position: 'absolute', right: 40, top: 70, width: 850, height: 520, backgroundColor: C.ink, color: C.paper, padding: '46px'}}><Briefcase size={80} color={C.blue}/><div style={{marginTop: 30, fontSize: 43, fontWeight: 900}}>劳动仲裁</div><div style={{marginTop: 32, display: 'flex', alignItems: 'center', gap: 26, fontSize: 30}}><span style={{padding: '18px 22px', border: `3px solid ${C.blue}`}}>仲裁委裁决</span><span>→</span><span style={{padding: '18px 22px', backgroundColor: C.blue}}>移送法院执行</span></div></Reveal>
  </div>
</Shell>;

export const WinningResolutionScene = () => {
  const frame = useCurrentFrame();
  const fill = interpolate(frame, [25, 105], [0, 1], CLAMP);
  return <Shell folio="02" title="权利人胜诉：把预先实现记入判决">
    <div data-layout="realized-rights-closing-entry" data-visual-anchor="flow-target" data-text-treatments="stamp,soft-highlight" data-visual-grammar="confirmation,realization,closure" data-focal-rule="correct-provisional-execution-is-recorded-as-rights-already-realized" data-focal-channels="icon,enclosure,spatial" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 60, top: 100, width: 500, height: 430, border: `5px solid ${C.blue}`, padding: '46px'}}><BookCheck size={86} color={C.blue}/><div style={{marginTop: 36, fontSize: 42, fontWeight: 900}}>先予执行正确</div><div style={{marginTop: 28, fontSize: 28}}>权利人最终胜诉</div></Reveal>
      <div style={{position: 'absolute', left: 620, top: 300, width: 340, height: 18, backgroundColor: C.line}}><div style={{height: '100%', width: `${fill * 100}%`, backgroundColor: C.green}}/></div>
      <Reveal delay={62} style={{position: 'absolute', right: 60, top: 100, width: 670, height: 430, backgroundColor: C.green, color: C.paper, padding: '46px'}}><BadgeCheck size={86}/><div style={{marginTop: 34, fontSize: 44, fontWeight: 950}}>判决中说明</div><div style={{marginTop: 30, fontSize: 31, lineHeight: 1.45}}>权利已经通过先予执行<br/>全部或部分实现</div></Reveal>
    </div>
  </Shell>;
};

export const LosingReversalScene = () => {
  const frame = useCurrentFrame();
  const travel = interpolate(frame, [20, 125], [0, 1], CLAMP);
  return <Shell folio="03" title="权利人败诉：返还，拒不返还则执行回转">
    <div data-layout="return-and-reversal-balance-path" data-visual-anchor="timeline-gate" data-text-treatments="external-negation,label-block" data-visual-grammar="error,return,compulsion" data-focal-rule="erroneous-provisional-execution-requires-return-and-compulsory-reversal-if-refused" data-focal-channels="icon,connector,motion" style={{position: 'absolute', left: 90, right: 90, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 40, top: 150, width: 420, height: 330, backgroundColor: C.red, color: C.paper, display: 'grid', placeItems: 'center', textAlign: 'center'}}><Undo2 size={86}/><strong style={{fontSize: 42, marginTop: -80}}>先予执行错误</strong></Reveal>
      <div style={{position: 'absolute', left: 460, top: 310, width: 190 * travel, height: 12, backgroundColor: C.red}} />
      <Reveal delay={40} style={{position: 'absolute', left: 650, top: 180, width: 420, height: 270, border: `5px solid ${C.green}`, padding: '42px'}}><div style={{fontSize: 40, fontWeight: 900}}>责令返还利益</div><div style={{marginTop: 28, fontSize: 27}}>先恢复原有状态</div></Reveal>
      <div style={{position: 'absolute', left: 1070, top: 310, width: 70 * travel, height: 12, backgroundColor: C.red}} />
      <Reveal delay={76} style={{position: 'absolute', right: 40, top: 130, width: 560, height: 370, backgroundColor: C.ink, color: C.paper, padding: '46px'}}><Gavel size={80} color={C.red}/><div style={{marginTop: 30, fontSize: 42, fontWeight: 950}}>拒不返还</div><div style={{marginTop: 26, padding: '18px 24px', backgroundColor: C.red, fontSize: 34, fontWeight: 900}}>强制执行 · 执行回转</div></Reveal>
    </div>
  </Shell>;
};

export const ProvisionalExecutionResolution = () => <AbsoluteFill>
  <TimelineSequence name="01-civil-and-labor-routes" {...SCENES.civilAndLaborRoutes}><CivilAndLaborRoutesScene /></TimelineSequence>
  <TimelineSequence name="02-winning-resolution" {...SCENES.winningResolution}><WinningResolutionScene /></TimelineSequence>
  <TimelineSequence name="03-losing-reversal" {...SCENES.losingReversal}><LosingReversalScene /></TimelineSequence>
</AbsoluteFill>;
