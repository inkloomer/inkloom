import {
  Baby,
  BadgeCheck,
  BrainCircuit,
  DoorOpen,
  EyeOff,
  Files,
  Gauge,
  Handshake,
  HeartHandshake,
  KeyRound,
  Link,
  MessagesSquare,
  Scale,
  ScrollText,
  ShieldX,
  UserRound,
  Video,
} from 'lucide-react';
import type {ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const ROOM = {
  mineral: '#E7E8E4', pale: '#F7F7F3', black: '#17191A', steel: '#555E61', cobalt: '#2D58C8',
  yellow: '#F2C94C', red: '#D94A48', white: '#FFFFFF',
};
const {Enter, StaggerEnter, MaskedReveal} = createMotionPrimitives(toSourceFrame);

const Canvas = ({code, title, reading, children}: {code: string; title: string; reading: string; children: ReactNode}) => (
  <div style={{position: 'absolute', inset: 0, backgroundColor: ROOM.mineral, color: ROOM.black, fontFamily: 'Arial, Microsoft YaHei, sans-serif', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 46, backgroundColor: ROOM.black}} />
    <div style={{position: 'absolute', left: 80, top: 52, fontSize: 20, fontWeight: 900, color: ROOM.cobalt}}>MEASURE {code}</div>
    <div style={{position: 'absolute', left: 80, top: 88, fontSize: 54, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', right: 70, top: 70, minWidth: 280, padding: '16px 22px', backgroundColor: ROOM.black, color: ROOM.white, fontSize: 22, fontWeight: 850, textAlign: 'center'}}>{reading}</div>
    <div style={{position: 'absolute', left: 80, right: 70, top: 178, bottom: 66}}>{children}</div>
    <div style={{position: 'absolute', left: 80, right: 70, bottom: 38, height: 4, backgroundColor: ROOM.steel}}><div style={{width: '34%', height: '100%', backgroundColor: ROOM.cobalt}} /></div>
  </div>
);

const Arrow = ({left, top, width, delay, color = ROOM.cobalt}: {left: number; top: number; width: number; delay: number; color?: string}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 26], [0, 1], CLAMP);
  return <div style={{position: 'absolute', left, top, width: width * progress, height: 5, backgroundColor: color}}><div style={{position: 'absolute', right: -2, top: -8, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: `16px solid ${color}`}} /></div>;
};

export const CrossExaminationGateScene = () => (
  <Canvas code="01" title="证据先通过质证门" reading="未经质证，不得定案">
    <div data-layout="hearing-admission-gate" data-visual-anchor="timeline-gate" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="qualification,exception,privacy-boundary" data-focal-rule="evidence-must-be-cross-examined-before-fact-finding" data-focal-channels="icon,enclosure,connector,contrast" style={{position: 'absolute', inset: 0}}>
      <Enter delay={4} style={{position: 'absolute', left: 36, top: 150, width: 340, height: 310, backgroundColor: ROOM.cobalt, color: ROOM.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><ScrollText size={82} /><div style={{fontSize: 38, fontWeight: 950, marginTop: -48}}>证据材料</div></Enter>
      <Arrow left={376} top={303} width={250} delay={28} />
      <Enter delay={36} style={{position: 'absolute', left: 650, top: 56, width: 470, height: 500, backgroundColor: ROOM.black, color: ROOM.white, padding: 38}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22}}><DoorOpen size={72} color={ROOM.yellow} /><div style={{fontSize: 42, fontWeight: 950}}>法庭质证门</div></div>
        <div style={{marginTop: 48, display: 'flex', gap: 18, alignItems: 'center'}}><UserRound size={48} color={ROOM.cobalt} /><MessagesSquare size={48} color={ROOM.yellow} /><UserRound size={48} color={ROOM.red} /><div style={{fontSize: 26, fontWeight: 850}}>当事人互相质证</div></div>
        <div style={{marginTop: 38, padding: 24, border: `3px solid ${ROOM.yellow}`, fontSize: 25, lineHeight: 1.45, fontWeight: 780}}>庭前已认可 + 法官庭审说明<br /><strong style={{fontSize: 31}}>视为已经质证</strong></div>
      </Enter>
      <Arrow left={1120} top={303} width={210} delay={82} color={ROOM.yellow} />
      <Enter delay={92} from="right" style={{position: 'absolute', right: 34, top: 150, width: 380, height: 310, backgroundColor: ROOM.yellow, padding: 34, textAlign: 'center'}}><BadgeCheck size={76} style={{margin: '0 auto'}} /><div style={{fontSize: 37, lineHeight: 1.3, fontWeight: 950, marginTop: 24}}>可进入<br />事实认定</div></Enter>
      <MaskedReveal delay={120} edge="left" style={{position: 'absolute', left: 330, right: 330, bottom: 14, height: 108, backgroundColor: ROOM.pale, borderLeft: `10px solid ${ROOM.red}`, padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 22}}>
        <EyeOff size={52} color={ROOM.red} /><div><div style={{fontSize: 28, fontWeight: 950}}>秘密、隐私证据不得公开质证</div><div style={{fontSize: 21, marginTop: 5}}>不等于完全不质证</div></div>
      </MaskedReveal>
    </div>
  </Canvas>
);

export const IllegalEvidenceSieveScene = () => (
  <Canvas code="02" title="非法证据排除的三道筛孔" reading="严重 / 禁止 / 严重">
    <div data-layout="three-slot-legality-sieve" data-visual-anchor="boundary" data-text-treatments="soft-highlight,external-negation,stamp" data-visual-grammar="exclusion,threshold,safe-route" data-focal-rule="only-serious-rights-harm-prohibited-methods-or-serious-public-order-violations-trigger-exclusion" data-focal-channels="icon,contrast,spatial,annotation" style={{position: 'absolute', inset: 0}}>
      <Enter delay={4} style={{position: 'absolute', left: 28, top: 74, width: 350, height: 500, backgroundColor: ROOM.black, color: ROOM.white, padding: 34}}><ShieldX size={76} color={ROOM.red} /><div style={{fontSize: 38, fontWeight: 950, marginTop: 30}}>形成 / 获取方法</div><div style={{fontSize: 23, color: ROOM.mineral, lineHeight: 1.5, marginTop: 22}}>不是只看证据内容<br />而是检查取得方式</div></Enter>
      <StaggerEnter baseDelay={34} step={24} gap={24} style={{position: 'absolute', left: 450, right: 40, top: 74}}>
        <div style={{flex: 1, height: 300, backgroundColor: ROOM.red, color: ROOM.white, padding: 28}}><HeartHandshake size={58} /><div style={{fontSize: 28, lineHeight: 1.35, fontWeight: 950, marginTop: 24}}>严重侵害<br />他人合法权益</div></div>
        <div style={{flex: 1, height: 300, border: `5px solid ${ROOM.red}`, backgroundColor: ROOM.pale, padding: 28}}><Scale size={58} color={ROOM.red} /><div style={{fontSize: 28, lineHeight: 1.35, fontWeight: 950, marginTop: 24}}>违反法律<br />禁止性规定</div></div>
        <div style={{flex: 1, height: 300, backgroundColor: ROOM.black, color: ROOM.white, padding: 28}}><ShieldX size={58} color={ROOM.yellow} /><div style={{fontSize: 28, lineHeight: 1.35, fontWeight: 950, marginTop: 24}}>严重违背<br />公序良俗</div></div>
      </StaggerEnter>
      <Enter delay={112} from="none" style={{position: 'absolute', left: 650, top: 420, width: 730, height: 122, backgroundColor: ROOM.red, color: ROOM.white, display: 'grid', placeItems: 'center', fontSize: 34, fontWeight: 950}}>命中任一 → 不得作为定案根据</Enter>
      <Enter delay={132} from="right" style={{position: 'absolute', right: 40, bottom: 14, width: 520, height: 116, backgroundColor: ROOM.yellow, display: 'flex', alignItems: 'center', gap: 22, padding: '20px 26px'}}><Video size={52} /><div><div style={{fontSize: 28, fontWeight: 950}}>偷拍、偷录一般不当然非法</div><div style={{fontSize: 20, marginTop: 6}}>仍需结合取得方法判断</div></div></Enter>
    </div>
  </Canvas>
);

export const CapacityAndWeightScene = () => (
  <Canvas code="03" title="证据能力与证明力不是一回事" reading="先资格，后衡量">
    <div data-layout="dual-instrument-measurement" data-visual-anchor="comparison-axis" data-text-treatments="label-block,thin-underline,soft-highlight" data-visual-grammar="sequence,qualification,measurement" data-focal-rule="law-controls-capacity-while-objective-connection-controls-weight" data-focal-channels="icon,connector,enclosure,motion" style={{position: 'absolute', inset: 0}}>
      <Enter delay={4} style={{position: 'absolute', left: 60, top: 70, width: 620, height: 500, backgroundColor: ROOM.black, color: ROOM.white, padding: 40}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 24}}><KeyRound size={74} color={ROOM.yellow} /><div><div style={{fontSize: 24, color: ROOM.mineral}}>第一道仪器</div><div style={{fontSize: 43, fontWeight: 950}}>证据能力</div></div></div>
        <div style={{marginTop: 52, fontSize: 30, lineHeight: 1.45, fontWeight: 850}}>能否作为证据使用的<br /><span style={{backgroundColor: ROOM.yellow, color: ROOM.black, padding: '4px 10px'}}>资格</span></div>
        <div style={{marginTop: 46, paddingTop: 24, borderTop: `3px solid ${ROOM.yellow}`, fontSize: 27, fontWeight: 900}}>由法律规定 · 法律属性</div>
      </Enter>
      <Arrow left={680} top={320} width={250} delay={54} color={ROOM.yellow} />
      <Enter delay={62} from="right" style={{position: 'absolute', right: 60, top: 70, width: 720, height: 500, backgroundColor: ROOM.pale, border: `5px solid ${ROOM.cobalt}`, padding: 40}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 24}}><Gauge size={74} color={ROOM.cobalt} /><div><div style={{fontSize: 24, color: ROOM.steel}}>第二道仪器</div><div style={{fontSize: 43, fontWeight: 950}}>证明力</div></div></div>
        <div style={{marginTop: 42, display: 'flex', alignItems: 'center', gap: 28}}><BrainCircuit size={74} color={ROOM.red} /><div style={{fontSize: 29, lineHeight: 1.45, fontWeight: 850}}>证明作用有无、大小<br />取决于与案件事实的客观联系</div></div>
        <div style={{marginTop: 38, paddingTop: 22, borderTop: `3px solid ${ROOM.cobalt}`, fontSize: 26, fontWeight: 900}}>法官依法独立判断，并公开理由和结果</div>
      </Enter>
      <Enter delay={126} from="none" style={{position: 'absolute', left: 310, bottom: 10, width: 1180, height: 92, backgroundColor: ROOM.cobalt, color: ROOM.white, display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 950}}>真实或具有证据能力，不等于当然具有证明力</Enter>
    </div>
  </Canvas>
);

const WeakInput = ({left, top, icon, label, delay}: {left: number; top: number; icon: ReactNode; label: string; delay: number}) => (
  <Enter delay={delay} style={{position: 'absolute', left, top, width: 260, height: 138, backgroundColor: ROOM.pale, border: `3px solid ${ROOM.black}`, padding: 20, display: 'flex', alignItems: 'center', gap: 18}}>{icon}<div style={{fontSize: 23, lineHeight: 1.3, fontWeight: 900}}>{label}</div></Enter>
);

export const CorroborationRingScene = () => (
  <Canvas code="04" title="五类证据需要补强" reading="有资格，但不能单独定案">
    <div data-layout="five-input-corroboration-ring" data-visual-anchor="flow-target" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="grouping,support,result" data-focal-rule="five-weak-evidence-types-need-corroboration-rather-than-exclusion" data-focal-channels="icon,connector,spatial,contrast" style={{position: 'absolute', inset: 0}}>
      <WeakInput left={30} top={42} icon={<UserRound size={48} color={ROOM.cobalt} />} label="当事人陈述" delay={8} />
      <WeakInput left={30} top={232} icon={<Baby size={48} color={ROOM.cobalt} />} label="能力不相当的证言" delay={24} />
      <WeakInput left={30} top={422} icon={<Handshake size={48} color={ROOM.cobalt} />} label="有利害关系的证言" delay={40} />
      <WeakInput left={1490} top={128} icon={<Video size={48} color={ROOM.red} />} label="有疑点的视听/电子数据" delay={56} />
      <WeakInput left={1490} top={342} icon={<Files size={48} color={ROOM.red} />} label="无法核对的复制件" delay={72} />
      <Enter delay={82} from="none" style={{position: 'absolute', left: 630, top: 112, width: 550, height: 410, borderRadius: '50%', backgroundColor: ROOM.black, color: ROOM.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><div><ShieldX size={74} color={ROOM.yellow} style={{margin: '0 auto 20px'}} /><div style={{fontSize: 42, fontWeight: 950}}>不能单独定案</div><div style={{fontSize: 24, color: ROOM.mineral, marginTop: 16}}>不是“不能作为证据”</div></div></Enter>
      <Arrow left={290} top={112} width={340} delay={90} />
      <Arrow left={290} top={302} width={340} delay={98} />
      <Arrow left={290} top={492} width={340} delay={106} />
      <Arrow left={1180} top={198} width={310} delay={114} color={ROOM.red} />
      <Arrow left={1180} top={412} width={310} delay={122} color={ROOM.red} />
      <MaskedReveal delay={138} edge="bottom" style={{position: 'absolute', left: 570, bottom: 6, width: 660, height: 104, backgroundColor: ROOM.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24}}><Link size={54} /><div style={{fontSize: 32, fontWeight: 950}}>其他证据补强 → 才可据以认定事实</div></MaskedReveal>
    </div>
  </Canvas>
);

export const EvidenceReview = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-cross-examination-gate" {...SCENES.crossExaminationGate}><CrossExaminationGateScene /></TimelineSequence>
    <TimelineSequence name="02-illegal-evidence-sieve" {...SCENES.illegalEvidenceSieve}><IllegalEvidenceSieveScene /></TimelineSequence>
    <TimelineSequence name="03-capacity-and-weight" {...SCENES.capacityAndWeight}><CapacityAndWeightScene /></TimelineSequence>
    <TimelineSequence name="04-corroboration-ring" {...SCENES.corroborationRing}><CorroborationRingScene /></TimelineSequence>
  </AbsoluteFill>
);
