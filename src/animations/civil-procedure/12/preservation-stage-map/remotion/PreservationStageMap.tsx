import type {CSSProperties, ReactNode} from 'react';
import {FileClock, Gavel, Scale, ShieldCheck, TimerReset, Unlock} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {bg: '#10152d', panel: '#192243', cyan: '#56d8e8', amber: '#f4c95d', coral: '#ff786c', ink: '#f7fbff', muted: '#9ba8c7'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 18], [0, 1], CLAMP), translate: interpolate(frame, [delay, delay + 18], ['0px 26px', '0px 0px'], CLAMP)}}>{children}</div>;
};

const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.bg, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 28, border: `2px solid ${C.panel}`}} />
    <div style={{position: 'absolute', left: 70, top: 54, fontSize: 18, fontWeight: 800, color: C.cyan}}>PROCEDURAL TIDE / {code}</div>
    <h1 style={{position: 'absolute', left: 70, top: 88, margin: 0, fontSize: 58, fontWeight: 900, letterSpacing: 0}}>{title}</h1>
    <div style={{position: 'absolute', left: 70, right: 70, top: 170, height: 2, backgroundColor: C.panel}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const StagePositionScene = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [18, 130], [0, 1], CLAMP);
  const stages = [
    {name: '诉前', detail: '起诉或仲裁前', color: C.cyan},
    {name: '诉讼中', detail: '案件受理后', color: C.amber},
    {name: '执行前', detail: '生效后·履行期内', color: C.coral},
  ];
  return <Shell code="01" title="保全发生在程序的哪一段？">
    <div data-layout="three-sector-procedural-horizon" data-visual-anchor="timeline-gate" data-text-treatments="label-block,soft-highlight" data-visual-grammar="sequence,stage-boundary,eligibility" data-focal-rule="three-preservation-stages-occupy-different-procedural-windows" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', left: 80, right: 80, top: 0, bottom: 0}}>
      <div style={{position: 'absolute', left: 80, right: 80, top: 310, height: 10, backgroundColor: C.panel}} />
      <div style={{position: 'absolute', left: 80, top: 310, width: 1600, height: 10, backgroundColor: C.cyan, scale: `${progress} 1`, transformOrigin: 'left center'}} />
      {stages.map(({name, detail, color}, index) => <Reveal key={name} delay={12 + index * 30} style={{position: 'absolute', left: 70 + index * 560, top: 80, width: 470, height: 430}}>
        <div style={{height: 250, padding: '38px 40px', backgroundColor: index === 1 ? C.panel : 'transparent', border: `4px solid ${color}`}}>
          {index === 1 ? <Gavel size={64} color={color} /> : <FileClock size={64} color={color} />}
          <div style={{marginTop: 24, fontSize: 48, fontWeight: 900}}>{name}</div>
          <div style={{marginTop: 14, fontSize: 27, color: C.muted}}>{detail}</div>
        </div>
        <div style={{width: 28, height: 28, margin: '44px auto 0', borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 0 12px ${C.bg}`}} />
      </Reveal>)}
      <div style={{position: 'absolute', left: 70, right: 70, bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: 24, color: C.muted}}><span>权利关系尚未确定</span><span style={{color: C.amber, fontWeight: 800}}>程序推进</span><span>法律文书已经生效</span></div>
    </div>
  </Shell>;
};

export const SecuritySlopeScene = () => {
  const levels = [
    {stage: '诉前保全', rule: '应当提供', strength: 100, color: C.coral},
    {stage: '诉讼中保全', rule: '可以要求', strength: 66, color: C.amber},
    {stage: '执行前保全', rule: '可以不要求', strength: 32, color: C.cyan},
  ];
  return <Shell code="02" title="程序越向后，担保必要性越低">
    <div data-layout="descending-security-slope" data-visual-anchor="comparison-axis" data-text-treatments="thin-underline,stamp" data-visual-grammar="comparison,progression,discretion" data-focal-rule="security-requirement-decreases-as-rights-become-clearer" data-focal-channels="contrast,connector,enclosure" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <div style={{position: 'absolute', left: 80, top: 30, bottom: 80, width: 6, backgroundColor: C.muted}} />
      <div style={{position: 'absolute', left: 35, top: 10, fontSize: 23, color: C.muted}}>担保强度</div>
      {levels.map((item, index) => <Reveal key={item.stage} delay={12 + index * 32} style={{position: 'absolute', left: 180, top: 80 + index * 190, width: 1450, height: 140}}>
        <div style={{display: 'flex', alignItems: 'center', height: '100%', gap: 30}}>
          {index === 0 ? <ShieldCheck size={62} color={item.color} /> : <Scale size={62} color={item.color} />}
          <div style={{width: 270, fontSize: 32, fontWeight: 850}}>{item.stage}</div>
          <div style={{width: item.strength * 8.4, height: 72, backgroundColor: item.color, borderRadius: 3}} />
          <div style={{fontSize: 32, fontWeight: 900, color: item.color, borderBottom: `4px solid ${item.color}`}}>{item.rule}</div>
        </div>
      </Reveal>)}
      <div style={{position: 'absolute', right: 40, bottom: 0, padding: '18px 28px', border: `2px solid ${C.cyan}`, fontSize: 25}}>权利义务逐渐明确 → 风险逐渐降低</div>
    </div>
  </Shell>;
};

export const DeadlineDialsScene = () => {
  const frame = useCurrentFrame();
  const angle = interpolate(frame, [20, 120], [-90, 228], CLAMP);
  return <Shell code="03" title="48小时、30日、5日分别管什么？">
    <div data-layout="nested-deadline-dials" data-visual-anchor="boundary" data-text-treatments="label-block,external-negation" data-visual-grammar="deadline,consequence,release" data-focal-rule="missed-follow-up-deadlines-trigger-release-of-preservation" data-focal-channels="icon,locator,motion" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <Reveal delay={8} style={{position: 'absolute', left: 50, top: 70, width: 480, height: 480, borderRadius: '50%', border: `18px solid ${C.cyan}`, display: 'grid', placeItems: 'center'}}>
        <TimerReset size={74} color={C.cyan} />
        <div style={{position: 'absolute', textAlign: 'center'}}><div style={{fontSize: 76, fontWeight: 950}}>48<span style={{fontSize: 34}}>小时</span></div><div style={{fontSize: 26}}>紧急申请作出裁定</div></div>
        <div style={{position: 'absolute', width: 8, height: 190, top: 40, backgroundColor: C.amber, transformOrigin: '50% 100%', rotate: `${angle}deg`}} />
      </Reveal>
      <Reveal delay={34} style={{position: 'absolute', left: 650, top: 10, width: 900, height: 260, backgroundColor: C.panel, borderLeft: `18px solid ${C.amber}`, padding: '38px 46px'}}>
        <div style={{fontSize: 54, fontWeight: 900, color: C.amber}}>30日</div>
        <div style={{marginTop: 14, fontSize: 31}}>诉前保全后起诉或申请仲裁</div>
        <div style={{marginTop: 16, fontSize: 25, color: C.coral}}>逾期 → 解除保全</div>
      </Reveal>
      <Reveal delay={62} style={{position: 'absolute', left: 650, bottom: 40, width: 900, height: 260, border: `4px solid ${C.coral}`, padding: '38px 46px'}}>
        <Unlock size={58} color={C.coral} />
        <div style={{position: 'absolute', left: 140, top: 42, fontSize: 54, fontWeight: 900, color: C.coral}}>5日</div>
        <div style={{position: 'absolute', left: 140, top: 116, fontSize: 30}}>履行期限届满后申请执行</div>
        <div style={{position: 'absolute', left: 140, top: 174, fontSize: 25, color: C.muted}}>逾期同样解除保全</div>
      </Reveal>
    </div>
  </Shell>;
};

export const PreservationStageMap = () => <AbsoluteFill>
  <TimelineSequence name="01-stage-position" {...SCENES.stagePosition}><StagePositionScene /></TimelineSequence>
  <TimelineSequence name="02-security-slope" {...SCENES.securitySlope}><SecuritySlopeScene /></TimelineSequence>
  <TimelineSequence name="03-deadline-dials" {...SCENES.deadlineDials}><DeadlineDialsScene /></TimelineSequence>
</AbsoluteFill>;
