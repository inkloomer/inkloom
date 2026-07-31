import type {CSSProperties, ReactNode} from 'react';
import {Activity, ArrowRight, CircleX, Landmark, PenLine, RotateCcw, Scale, UserRound} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  AuthorityCord,
  baseTextStyle,
  CustodyHeading,
  DifferenceRow,
  ENTER_EASING,
  GuardianNode,
  Keyword,
  LawBadge,
  PartyCarrier,
  SoftReveal,
  VerdictBand,
  WardNode,
} from '../visual-system';

const ConsequenceChip = ({children, color, top, left}: {readonly children: ReactNode; readonly color: string; readonly top: number; readonly left: number}) => (
  <div style={{position: 'absolute', left, top, padding: '12px 26px', borderRadius: 16, backgroundColor: PALETTE.panel, border: `3px solid ${color}`, color, fontSize: 26, fontWeight: 800}}>{children}</div>
);

const ForkLine = ({left, top, width, rotate, progress, color}: {readonly left: number; readonly top: number; readonly width: number; readonly rotate: number; readonly progress: number; readonly color: string}) => (
  <div style={{position: 'absolute', left, top, width, height: 4, backgroundColor: color, borderRadius: 2, transformOrigin: 'left center', rotate: `${rotate}deg`, scale: `${progress} 1`}}>
    <ArrowRight size={26} strokeWidth={2.6} style={{position: 'absolute', right: -8, top: -11, color, opacity: interpolate(progress, [0.82, 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
  </div>
);

export const DefinitionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const cord1 = interpolate(frame, [34, 82], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const cord2 = interpolate(frame, [64, 112], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <CustodyHeading index="01" eyebrow="guardian · 法定代理" title="法律规定，天然全权" accent="teal" />
      <SoftReveal delay={14} style={{position: 'absolute', left: 106, top: 226}}>
        <div style={{...baseTextStyle, fontSize: 24, color: PALETTE.muted}}>代理权来源是<Keyword accent="teal">法律</Keyword>，而不是当事人的委托授权。</div>
      </SoftReveal>
      <LawBadge icon={Landmark} label="法律规定" note="代理权来源" style={{left: 140, top: 400, width: 400}} />
      <GuardianNode label="法定代理人" note="依法律规定取得代理权" style={{left: 720, top: 400, width: 470}} />
      <WardNode icon={UserRound} label="无诉讼行为能力人" note="无 / 限制民事行为能力人" style={{left: 1330, top: 400, width: 460}} />
      <AuthorityCord left={540} top={430} width={178} progress={cord1} accent="teal" label="无需委托授权" />
      <AuthorityCord left={1190} top={430} width={138} progress={cord2} accent="teal" label="全权代理" />
      <VerdictBand delay={142} style={{left: 300, right: 300, top: 806}}>
        法定代理人所为的诉讼行为，与当事人所为的诉讼行为<span style={{color: PALETTE.background, backgroundColor: PALETTE.teal, borderRadius: 10, padding: '2px 12px'}}>效力相同</span>
      </VerdictBand>
    </div>
  );
};

export const DifferencesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const spine = interpolate(frame, [16, 52], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <CustodyHeading index="02" eyebrow="three differences" title="地位 · 事件 · 裁判" accent="red" />
      <PartyCarrier label="当事人" note="与法定代理人比较的三个维度" style={{left: 120, top: 430, width: 380}} />
      <div style={{position: 'absolute', left: 560, top: 368, width: 4, height: 400, borderRadius: 2, backgroundColor: PALETTE.red, opacity: 0.4, scale: `${spine} 1`, transformOrigin: 'top center'}} />
      <DifferenceRow index="01" icon={PenLine} title="诉讼地位不同" note="法定代理人只能以被代理人的名义起诉、应诉" left={640} top={290} width={1060} delay={26} />
      <DifferenceRow index="02" icon={Activity} title="事件效力不同" note="诉讼行为效力相同，但诉讼中发生的事件效力不同" left={640} top={470} width={1060} delay={78} />
      <DifferenceRow index="03" icon={Scale} title="裁判对象不同" note="裁判针对的是当事人，而不是法定代理人" left={640} top={650} width={1060} delay={130} />
      <VerdictBand delay={176} style={{left: 360, right: 360, top: 856}}>法定代理人 ≠ 当事人 · 三个维度皆不同</VerdictBand>
    </div>
  );
};

export const DeathEventScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const token = interpolate(frame, [10, 46], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const forkA = interpolate(frame, [48, 96], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const forkB = interpolate(frame, [84, 132], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const chipsA = interpolate(frame, [120, 168], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const chipsB = interpolate(frame, [156, 204], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <CustodyHeading index="03" eyebrow="death event" title="当事人死 vs 代理人死" accent="red" />
      <SoftReveal delay={12} style={{position: 'absolute', left: 106, top: 226}}>
        <div style={{...baseTextStyle, fontSize: 24, color: PALETTE.muted}}>同样是"死亡"，后果完全不同。</div>
      </SoftReveal>
      <div style={{position: 'absolute', left: 790, top: 250, width: 340, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, borderRadius: 22, backgroundColor: PALETTE.redSoft, border: `3px solid ${PALETTE.red}`, opacity: token}}>
        <CircleX size={42} strokeWidth={2} color={PALETTE.red} />
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.red}}>诉讼中死亡</div>
      </div>
      <ForkLine left={960} top={360} width={594} rotate={163.4} progress={forkA} color={PALETTE.red} />
      <ForkLine left={960} top={360} width={594} rotate={16.6} progress={forkB} color={PALETTE.teal} />
      <div style={{position: 'absolute', left: 240, top: 500, width: 300, height: 150, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px', borderRadius: 22, backgroundColor: PALETTE.redSoft, border: `3px solid ${PALETTE.red}`, opacity: forkA}}>
        <UserRound size={42} strokeWidth={1.8} color={PALETTE.red} />
        <div style={{...baseTextStyle, fontSize: 27, fontWeight: 800, color: PALETTE.red, lineHeight: 1.3}}>当事人<br />死亡</div>
      </div>
      <div style={{position: 'absolute', left: 1380, top: 500, width: 300, height: 150, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px', borderRadius: 22, backgroundColor: PALETTE.tealSoft, border: `3px solid ${PALETTE.teal}`, opacity: forkB}}>
        <RotateCcw size={42} strokeWidth={1.8} color={PALETTE.teal} />
        <div style={{...baseTextStyle, fontSize: 27, fontWeight: 800, color: PALETTE.teal, lineHeight: 1.3}}>法定代理人<br />死亡</div>
      </div>
      <div style={{opacity: chipsA}}>
        <ConsequenceChip left={240} top={690} color={PALETTE.red}>中止</ConsequenceChip>
        <ConsequenceChip left={380} top={690} color={PALETTE.red}>变更</ConsequenceChip>
        <ConsequenceChip left={520} top={690} color={PALETTE.red}>终结</ConsequenceChip>
        <div style={{position: 'absolute', left: 250, top: 830, ...baseTextStyle, color: PALETTE.muted, fontSize: 20}}>诉讼中止 · 当事人变更 · 诉讼终结</div>
      </div>
      <div style={{opacity: chipsB}}>
        <ConsequenceChip left={1380} top={690} color={PALETTE.teal}>更换代理人</ConsequenceChip>
        <ConsequenceChip left={1540} top={690} color={PALETTE.teal}>继续诉讼</ConsequenceChip>
        <div style={{position: 'absolute', left: 1390, top: 830, ...baseTextStyle, color: PALETTE.muted, fontSize: 20}}>更换后继续，不中止、不终结</div>
      </div>
      <VerdictBand delay={220} style={{left: 420, right: 420, top: 884}}>只有当事人的死，才动摇诉讼本身</VerdictBand>
    </div>
  );
};
