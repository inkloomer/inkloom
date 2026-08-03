import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, FileCheck2, FileClock, Gavel, Landmark, Scale, ShieldAlert, ShieldCheck, TimerReset, Unlock} from 'lucide-react';
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

export const AuthoritySplitScene = () => {
  const frame = useCurrentFrame();
  const appellateRail = interpolate(frame, [84, 142], [0, 1], CLAMP);
  const stages = [
    {label: '诉前保全', detail: '情况紧急\n难以弥补损害', rule: '只能依申请', color: C.cyan},
    {label: '诉讼中保全', detail: '判决可能难以执行\n或造成其他损害', rule: '申请 / 依职权', color: C.amber},
    {label: '执行前保全', detail: '生效后\n履行期限届满前', rule: '向执行法院申请', color: C.coral},
  ];
  return <Shell code="04" title="保全由谁启动，谁有权采取？">
    <div data-layout="stage-authority-fork-and-appeal-lane" data-visual-anchor="document-fork" data-text-treatments="label-block,soft-highlight,external-negation" data-visual-grammar="stage-comparison,authority-fork,appellate-exception" data-focal-rule="litigation-preservation-may-start-by-application-or-court-authority" data-focal-channels="icon,contrast,connector,annotation" style={{position: 'absolute', left: 80, right: 80, top: 0, bottom: 0}}>
      {stages.map(({label, detail, rule, color}, index) => <Reveal key={label} delay={8 + index * 24} style={{position: 'absolute', left: 34 + index * 565, top: 24, width: 500, height: 405, border: `4px solid ${color}`, backgroundColor: index === 1 ? C.panel : 'transparent', padding: '30px 34px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>{index === 0 ? <ShieldAlert size={56} color={color}/> : index === 1 ? <Gavel size={56} color={color}/> : <Landmark size={56} color={color}/>}<div style={{fontSize: 38, fontWeight: 950}}>{label}</div></div>
        <div style={{marginTop: 26, minHeight: 76, color: C.muted, fontSize: 25, fontWeight: 760, lineHeight: 1.38, whiteSpace: 'pre-line'}}>{detail}</div>
        <div style={{position: 'absolute', left: 34, right: 34, bottom: 34, padding: '18px 20px', backgroundColor: color, color: C.bg, fontSize: 30, fontWeight: 900, textAlign: 'center'}}>{rule}</div>
        {index === 1 ? <div style={{position: 'absolute', left: 74, right: 74, top: 210, display: 'flex', justifyContent: 'space-between', color: C.amber, fontSize: 24, fontWeight: 900}}><span>当事人申请</span><span>法院依职权</span></div> : null}
      </Reveal>)}
      <Reveal delay={68} style={{position: 'absolute', left: 34, right: 34, bottom: 0, height: 180, borderTop: `3px solid ${C.cyan}`, backgroundColor: '#111a36', padding: '26px 34px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, color: C.cyan, fontSize: 25, fontWeight: 850}}><FileCheck2 size={38}/><span>上诉阶段的例外</span></div>
        <div style={{position: 'absolute', left: 310, top: 92, width: 420, height: 6, backgroundColor: C.cyan, scale: `${appellateRail} 1`, transformOrigin: 'left center'}} />
        <div style={{position: 'absolute', left: 34, top: 74, width: 250, fontSize: 29, fontWeight: 900}}>一审法院</div>
        <div style={{position: 'absolute', left: 770, top: 66, width: 430, padding: '13px 18px', border: `3px solid ${C.amber}`, fontSize: 25, textAlign: 'center', fontWeight: 850}}>二审尚未收到报送案件</div>
        <div style={{position: 'absolute', right: 34, top: 70, width: 430, color: C.coral, fontSize: 29, fontWeight: 950, textAlign: 'right'}}>仍由一审采取保全</div>
      </Reveal>
    </div>
  </Shell>;
};

export const RulingDeadlinesScene = () => {
  const frame = useCurrentFrame();
  const mainRail = interpolate(frame, [26, 104], [0, 1], CLAMP);
  const urgentRail = interpolate(frame, [82, 142], [0, 1], CLAMP);
  return <Shell code="05" title="诉中保全：裁定期限怎么走？">
    <div data-layout="ruling-deadline-branching-track" data-visual-anchor="timeline-gate" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="sequence,conditional-deadline,urgent-override" data-focal-rule="security-changes-the-five-day-start-while-emergency-uses-forty-eight-hours" data-focal-channels="icon,connector,enclosure,contrast" style={{position: 'absolute', left: 80, right: 80, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 32, top: 215, width: 325, height: 240, backgroundColor: C.panel, padding: '30px 32px'}}>
        <FileCheck2 size={58} color={C.cyan}/><div style={{marginTop: 24, fontSize: 34, fontWeight: 950}}>接受申请</div><div style={{marginTop: 14, fontSize: 24, color: C.muted}}>诉讼中财产保全</div>
      </Reveal>
      <div style={{position: 'absolute', left: 357, top: 330, width: 180, height: 8, backgroundColor: C.cyan, scale: `${mainRail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={28} style={{position: 'absolute', left: 550, top: 92, width: 430, height: 230, border: `5px solid ${C.amber}`, padding: '30px 34px'}}>
        <TimerReset size={56} color={C.amber}/><div style={{marginTop: 18, fontSize: 35, fontWeight: 950}}>一般情形</div><div style={{marginTop: 18, fontSize: 31, color: C.amber, fontWeight: 900}}>5日内作出裁定</div>
      </Reveal>
      <Reveal delay={48} style={{position: 'absolute', left: 550, top: 402, width: 430, height: 230, border: `5px solid ${C.violet}`, padding: '30px 34px'}}>
        <ShieldCheck size={56} color={C.violet}/><div style={{marginTop: 18, fontSize: 35, fontWeight: 950}}>需要担保</div><div style={{marginTop: 18, fontSize: 29, lineHeight: 1.35, color: C.violet, fontWeight: 900}}>提供担保后<br/>5日内作出裁定</div>
      </Reveal>
      <div style={{position: 'absolute', left: 980, top: 210, width: 160, height: 6, backgroundColor: C.amber, rotate: '30deg', transformOrigin: 'left center', scale: `${mainRail} 1`}} />
      <div style={{position: 'absolute', left: 980, top: 518, width: 160, height: 6, backgroundColor: C.violet, rotate: '-30deg', transformOrigin: 'left center', scale: `${mainRail} 1`}} />
      <Reveal delay={74} from="right" style={{position: 'absolute', right: 32, top: 196, width: 420, height: 280, backgroundColor: C.coral, color: C.bg, padding: '34px 38px'}}>
        <BadgeCheck size={62}/><div style={{marginTop: 24, fontSize: 39, fontWeight: 950}}>裁定保全</div><div style={{marginTop: 20, fontSize: 31, fontWeight: 900}}>应当立即执行</div>
      </Reveal>
      <div style={{position: 'absolute', left: 165, bottom: 10, width: 1310, height: 6, backgroundColor: C.coral, scale: `${urgentRail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={100} style={{position: 'absolute', left: 350, bottom: 42, width: 940, height: 104, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, border: `4px solid ${C.coral}`, backgroundColor: C.bg, color: C.coral}}>
        <ShieldAlert size={54}/><span style={{fontSize: 34, fontWeight: 950}}>情况紧急：48小时内作出裁定</span>
      </Reveal>
    </div>
  </Shell>;
};

export const PreservationStageMap = () => <AbsoluteFill>
  <TimelineSequence name="01-stage-position" {...SCENES.stagePosition}><StagePositionScene /></TimelineSequence>
  <TimelineSequence name="02-security-slope" {...SCENES.securitySlope}><SecuritySlopeScene /></TimelineSequence>
  <TimelineSequence name="03-deadline-dials" {...SCENES.deadlineDials}><DeadlineDialsScene /></TimelineSequence>
  <TimelineSequence name="04-authority-split" {...SCENES.authoritySplit}><AuthoritySplitScene /></TimelineSequence>
  <TimelineSequence name="05-ruling-deadlines" {...SCENES.rulingDeadlines}><RulingDeadlinesScene /></TimelineSequence>
</AbsoluteFill>;
