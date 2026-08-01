import {
  BadgeCheck,
  Clock3,
  FileWarning,
  Landmark,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Snowflake,
  Timer,
  UnlockKeyhole,
  UserRound,
} from 'lucide-react';
import type {ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const ICE = {
  paper: '#F5FAF9', ink: '#182326', graphite: '#34454A', aqua: '#28A7A2', pale: '#D7EFEB',
  amber: '#F0B44D', coral: '#E4675B', white: '#FFFFFF', line: '#A9C7C3',
};
const {Enter, StaggerEnter, MaskedReveal} = createMotionPrimitives(toSourceFrame);

const Canvas = ({code, title, cue, children}: {code: string; title: string; cue: string; children: ReactNode}) => (
  <AbsoluteFill style={{backgroundColor: ICE.paper, color: ICE.ink, fontFamily: 'Inter, Microsoft YaHei, sans-serif', overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${ICE.line}45 1px, transparent 1px), linear-gradient(90deg, ${ICE.line}45 1px, transparent 1px)`, backgroundSize: '44px 44px'}} />
    <div style={{position: 'absolute', left: 64, top: 50, width: 110, height: 84, border: `3px solid ${ICE.ink}`, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 900}}>{code}</div>
    <div style={{position: 'absolute', left: 206, top: 48, fontSize: 52, fontWeight: 900, letterSpacing: 0}}>{title}</div>
    <div style={{position: 'absolute', right: 66, top: 64, padding: '12px 20px', backgroundColor: ICE.ink, color: ICE.white, fontSize: 22, fontWeight: 800}}>{cue}</div>
    <div style={{position: 'absolute', left: 66, right: 66, top: 170, bottom: 66}}>{children}</div>
  </AbsoluteFill>
);

const Label = ({children, tone = 'aqua'}: {children: ReactNode; tone?: 'aqua' | 'amber' | 'coral' | 'ink'}) => (
  <span style={{display: 'inline-flex', padding: '8px 14px', backgroundColor: tone === 'aqua' ? ICE.aqua : tone === 'amber' ? ICE.amber : tone === 'coral' ? ICE.coral : ICE.ink, color: tone === 'amber' ? ICE.ink : ICE.white, fontSize: 22, fontWeight: 900}}>{children}</span>
);

const Arrow = ({left, top, width, delay = 0, color = ICE.aqua}: {left: number; top: number; width: number; delay?: number; color?: string}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 28], [0, 1], CLAMP);
  return <div style={{position: 'absolute', left, top, width: width * progress, height: 4, backgroundColor: color}}><div style={{position: 'absolute', right: -2, top: -8, width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: `16px solid ${color}`}} /></div>;
};

export const PreservationTriggerScene = () => {
  const frame = useCurrentFrame();
  const closure = interpolate(frame, [54, 92], [0, 1], CLAMP);
  return (
    <Canvas code="01" title="证据为什么需要保全" cue="共同前提">
      <div data-layout="specimen-risk-chamber" data-visual-anchor="boundary" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="threat,containment,transformation" data-focal-rule="evidence-at-risk-must-be-fixed-and-protected" data-focal-channels="icon,enclosure,connector,motion" style={{position: 'absolute', inset: 0}}>
        <Enter delay={4} style={{position: 'absolute', left: 84, top: 92, width: 430, height: 470, border: `4px solid ${ICE.coral}`, backgroundColor: ICE.white, padding: 42}}>
          <FileWarning size={80} color={ICE.coral} strokeWidth={2.2} />
          <div style={{marginTop: 30, fontSize: 40, lineHeight: 1.25, fontWeight: 900}}>证据可能灭失</div>
          <div style={{marginTop: 20, width: 300, height: 4, backgroundColor: ICE.coral}} />
          <div style={{marginTop: 28, fontSize: 30, lineHeight: 1.45, fontWeight: 760}}>或者日后<br />难以取得</div>
        </Enter>
        <Arrow left={514} top={320} width={310} delay={34} color={ICE.coral} />
        <div style={{position: 'absolute', left: 840, top: 52, width: 720, height: 550, backgroundColor: ICE.ink, color: ICE.white, padding: 44, overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 34 - 34 * closure, top: 34, bottom: 34, width: 14, backgroundColor: ICE.aqua}} />
          <div style={{position: 'absolute', right: 34 - 34 * closure, top: 34, bottom: 34, width: 14, backgroundColor: ICE.aqua}} />
          <MaskedReveal delay={52} edge="left"><div style={{display: 'flex', alignItems: 'center', gap: 24}}><Snowflake size={76} color={ICE.aqua} strokeWidth={2.2} /><Label>法院保全舱</Label></div></MaskedReveal>
          <Enter delay={72} from="right" style={{marginTop: 72, display: 'flex', alignItems: 'center', gap: 26}}>
            <ShieldCheck size={112} color={ICE.amber} strokeWidth={2.2} />
            <div><div style={{fontSize: 50, fontWeight: 950}}>固定 + 保护</div><div style={{marginTop: 14, fontSize: 25, color: ICE.pale}}>让证据保持可用状态</div></div>
          </Enter>
          <Enter delay={108} style={{position: 'absolute', left: 44, right: 44, bottom: 42, padding: '18px 24px', border: `2px solid ${ICE.aqua}`, fontSize: 27, fontWeight: 800, textAlign: 'center'}}>时间不同，进入两套程序</Enter>
        </div>
      </div>
    </Canvas>
  );
};

export const DuringLitigationScene = () => (
  <Canvas code="02" title="诉讼中证据保全" cue="规则较宽">
    <div data-layout="dual-entry-litigation-vault" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="convergence,deadline,conditional-result" data-focal-rule="litigation-preservation-has-two-start-routes-and-conditional-security" data-focal-channels="icon,connector,spatial,annotation" style={{position: 'absolute', inset: 0}}>
      <StaggerEnter baseDelay={6} step={18} direction="column" gap={24} style={{position: 'absolute', left: 42, top: 88, width: 350}}>
        <div style={{height: 150, backgroundColor: ICE.aqua, color: ICE.white, padding: 26, display: 'flex', alignItems: 'center', gap: 20}}><UserRound size={58} /><div><Label tone="ink">申请</Label><div style={{fontSize: 28, marginTop: 12, fontWeight: 850}}>当事人启动</div></div></div>
        <div style={{height: 150, backgroundColor: ICE.ink, color: ICE.white, padding: 26, display: 'flex', alignItems: 'center', gap: 20}}><Landmark size={58} color={ICE.amber} /><div><Label tone="amber">职权</Label><div style={{fontSize: 28, marginTop: 12, fontWeight: 850}}>法院主动</div></div></div>
      </StaggerEnter>
      <Arrow left={392} top={255} width={260} delay={52} />
      <Enter delay={58} style={{position: 'absolute', left: 670, top: 74, width: 490, height: 390, backgroundColor: ICE.white, border: `4px solid ${ICE.ink}`, padding: 34}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Landmark size={60} color={ICE.aqua} /><div style={{fontSize: 36, fontWeight: 900}}>受理案件的法院</div></div>
        <div style={{marginTop: 56, display: 'flex', alignItems: 'center', gap: 20, padding: 24, backgroundColor: ICE.pale}}><Clock3 size={54} color={ICE.graphite} /><div><div style={{fontSize: 25, color: ICE.graphite}}>申请时间</div><div style={{fontSize: 34, fontWeight: 900, textDecoration: 'underline', textDecorationColor: ICE.aqua, textUnderlineOffset: 8}}>举证期限届满前</div></div></div>
      </Enter>
      <Arrow left={1160} top={255} width={210} delay={88} color={ICE.amber} />
      <Enter delay={96} from="right" style={{position: 'absolute', right: 42, top: 74, width: 350, height: 390, backgroundColor: ICE.ink, color: ICE.white, padding: 34}}>
        <ShieldAlert size={66} color={ICE.amber} />
        <div style={{marginTop: 28, fontSize: 32, lineHeight: 1.35, fontWeight: 900}}>可能给他人<br />造成损失？</div>
        <div style={{marginTop: 34, padding: '18px 20px', backgroundColor: ICE.amber, color: ICE.ink, fontSize: 29, fontWeight: 950}}>是 → 应当担保</div>
        <div style={{marginTop: 18, fontSize: 22, color: ICE.pale}}>不是一律要求</div>
      </Enter>
      <Enter delay={126} from="none" style={{position: 'absolute', left: 670, bottom: 28, width: 700, height: 92, display: 'grid', placeItems: 'center', backgroundColor: ICE.aqua, color: ICE.white, fontSize: 30, fontWeight: 900}}>可申请，也可依职权；担保有条件</Enter>
    </div>
  </Canvas>
);

export const BeforeLitigationScene = () => (
  <Canvas code="03" title="诉前证据保全" cue="规则更严">
    <div data-layout="emergency-timed-locks" data-visual-anchor="timeline" data-text-treatments="soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="sequence,jurisdiction-fan,release" data-focal-rule="pre-action-preservation-is-application-only-and-time-locked" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: 0}}>
      <StaggerEnter baseDelay={4} step={24} gap={0} style={{position: 'absolute', left: 44, right: 44, top: 44, height: 220, alignItems: 'stretch'}}>
        <div style={{flex: 1, backgroundColor: ICE.coral, color: ICE.white, padding: 26}}><Siren size={54} /><div style={{fontSize: 29, fontWeight: 900, marginTop: 18}}>情况紧急</div><div style={{fontSize: 22, marginTop: 10}}>证据有灭失风险</div></div>
        <div style={{width: 70, display: 'grid', placeItems: 'center', fontSize: 42, color: ICE.coral}}>→</div>
        <div style={{flex: 1.25, backgroundColor: ICE.white, border: `3px solid ${ICE.coral}`, padding: 26}}><UserRound size={54} color={ICE.coral} /><div style={{fontSize: 29, fontWeight: 900, marginTop: 18}}>利害关系人申请</div><div style={{fontSize: 22, marginTop: 10}}>只能依申请</div></div>
        <div style={{width: 70, display: 'grid', placeItems: 'center', fontSize: 42, color: ICE.aqua}}>→</div>
        <div style={{flex: 1.4, backgroundColor: ICE.ink, color: ICE.white, padding: 26}}><MapPin size={54} color={ICE.aqua} /><div style={{fontSize: 29, fontWeight: 900, marginTop: 18}}>三类法院均可</div><div style={{fontSize: 21, lineHeight: 1.4, marginTop: 10}}>证据地 · 被申请人住所地<br />有管辖权的法院</div></div>
      </StaggerEnter>
      <Enter delay={82} style={{position: 'absolute', left: 44, top: 324, width: 530, height: 250, border: `4px solid ${ICE.amber}`, backgroundColor: ICE.white, padding: 30}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22}}><Timer size={66} color={ICE.amber} /><div><div style={{fontSize: 48, fontWeight: 950}}>48 小时</div><div style={{fontSize: 25, fontWeight: 760}}>法院作出裁定</div></div></div>
        <div style={{marginTop: 30, height: 10, backgroundColor: ICE.pale}}><div style={{width: '72%', height: '100%', backgroundColor: ICE.amber}} /></div>
      </Enter>
      <Arrow left={574} top={444} width={210} delay={104} color={ICE.coral} />
      <Enter delay={112} style={{position: 'absolute', left: 800, top: 324, width: 590, height: 250, border: `4px solid ${ICE.coral}`, backgroundColor: ICE.white, padding: 30}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22}}><UnlockKeyhole size={66} color={ICE.coral} /><div><div style={{fontSize: 48, fontWeight: 950}}>30 日</div><div style={{fontSize: 24, fontWeight: 760}}>不起诉或不申请仲裁</div></div></div>
        <div style={{marginTop: 28, padding: '14px 18px', backgroundColor: ICE.coral, color: ICE.white, fontSize: 28, fontWeight: 900}}>应当裁定解除保全</div>
      </Enter>
      <Enter delay={136} from="right" style={{position: 'absolute', right: 44, top: 324, width: 300, height: 250, backgroundColor: ICE.aqua, color: ICE.white, padding: 30, textAlign: 'center'}}>
        <BadgeCheck size={68} style={{margin: '0 auto'}} />
        <div style={{fontSize: 31, lineHeight: 1.3, fontWeight: 950, marginTop: 26}}>一律<br />应当担保</div>
      </Enter>
    </div>
  </Canvas>
);

export const EvidencePreservation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-preservation-trigger" {...SCENES.preservationTrigger}><PreservationTriggerScene /></TimelineSequence>
    <TimelineSequence name="02-during-litigation" {...SCENES.duringLitigation}><DuringLitigationScene /></TimelineSequence>
    <TimelineSequence name="03-before-litigation" {...SCENES.beforeLitigation}><BeforeLitigationScene /></TimelineSequence>
  </AbsoluteFill>
);
