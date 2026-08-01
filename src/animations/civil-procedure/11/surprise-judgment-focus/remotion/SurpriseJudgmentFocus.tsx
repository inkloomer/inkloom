import {
  BadgeCheck,
  Ban,
  CalendarPlus,
  CheckCheck,
  Fence,
  FilePenLine,
  FileText,
  Landmark,
  MessagesSquare,
  Scale,
  ScanSearch,
  UserRound,
} from 'lucide-react';
import type {ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const STAGE = {
  black: '#101112', charcoal: '#222527', white: '#F4F2EA', yellow: '#F2CE58', blue: '#4D78E8',
  red: '#E24E4E', grey: '#A9ADB0',
};
const {Enter, StaggerEnter, MaskedReveal} = createMotionPrimitives(toSourceFrame);

const Canvas = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <div style={{position: 'absolute', inset: 0, backgroundColor: STAGE.black, color: STAGE.white, fontFamily: 'Inter, Microsoft YaHei, sans-serif', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 190, backgroundColor: STAGE.charcoal}} />
    <div style={{position: 'absolute', left: 74, top: 58, fontSize: 18, fontWeight: 900, color: STAGE.yellow}}>FOCUS {code}</div>
    <div style={{position: 'absolute', left: 74, top: 92, fontSize: 54, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', left: 74, right: 74, top: 174, bottom: 70}}>{children}</div>
    <div style={{position: 'absolute', left: 74, right: 74, bottom: 48, height: 4, backgroundColor: STAGE.grey}} />
  </div>
);

const StopBar = ({top, text, delay}: {top: number; text: string; delay: number}) => (
  <Enter delay={delay} from="right" style={{position: 'absolute', right: 32, top, width: 530, height: 132, border: `4px solid ${STAGE.red}`, backgroundColor: STAGE.black, display: 'flex', alignItems: 'center', gap: 22, padding: '24px 28px'}}>
    <Ban size={58} color={STAGE.red} strokeWidth={2.8} /><div style={{fontSize: 30, lineHeight: 1.3, fontWeight: 950}}>{text}</div>
  </Enter>
);

export const RecognitionMismatchScene = () => {
  const frame = useCurrentFrame();
  const focus = interpolate(frame, [48, 86], [0.25, 1], CLAMP);
  return (
    <Canvas code="01" title="主张与法院认定不一致">
      <div data-layout="opposed-stage-wings" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,external-negation" data-visual-grammar="opposition,mismatch,prohibition" data-focal-rule="recognition-mismatch-cannot-be-resolved-by-surprise-judgment" data-focal-channels="icon,contrast,spatial,annotation" style={{position: 'absolute', inset: 0}}>
        <Enter delay={4} from="left" style={{position: 'absolute', left: 26, top: 94, width: 470, height: 370, backgroundColor: STAGE.blue, padding: 36}}>
          <UserRound size={72} /><div style={{fontSize: 23, fontWeight: 850, marginTop: 28}}>当事人主张</div><div style={{fontSize: 44, lineHeight: 1.25, fontWeight: 950, marginTop: 16}}>借款关系<br />合同有效</div>
        </Enter>
        <Enter delay={22} from="right" style={{position: 'absolute', left: 610, top: 94, width: 470, height: 370, backgroundColor: STAGE.white, color: STAGE.black, padding: 36}}>
          <Landmark size={72} color={STAGE.red} /><div style={{fontSize: 23, fontWeight: 850, marginTop: 28}}>法院初步认定</div><div style={{fontSize: 44, lineHeight: 1.25, fontWeight: 950, marginTop: 16}}>买卖关系<br />合同不成立</div>
        </Enter>
        <div style={{position: 'absolute', left: 500, top: 138, width: 106, height: 290, backgroundColor: STAGE.yellow, opacity: focus, clipPath: 'polygon(42% 0, 58% 0, 100% 100%, 0 100%)'}} />
        <Enter delay={58} from="none" style={{position: 'absolute', left: 458, top: 244, width: 190, height: 118, backgroundColor: STAGE.yellow, color: STAGE.black, display: 'grid', placeItems: 'center'}}><FileText size={52} /><div style={{fontSize: 23, fontWeight: 950, marginTop: -30}}>同一案件</div></Enter>
        <StopBar top={82} text="不能直接按法院认定裁判" delay={78} />
        <StopBar top={250} text="不能告知当事人变更诉请" delay={100} />
        <Enter delay={126} from="none" style={{position: 'absolute', left: 230, bottom: 40, width: 1040, height: 86, border: `3px solid ${STAGE.yellow}`, display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 950}}>否则会剥夺举证、质证、辩论机会，形成突袭裁判</Enter>
      </div>
    </Canvas>
  );
};

export const IssueHearingPathScene = () => (
  <Canvas code="02" title="正确路径：把不一致变成争点">
    <div data-layout="central-focus-three-lane-hearing" data-visual-anchor="flow-path" data-text-treatments="soft-highlight,thin-underline,stamp" data-visual-grammar="focus,sequence,exception" data-focal-rule="the-mismatch-must-be-heard-as-a-focal-issue" data-focal-channels="icon,connector,enclosure,motion" style={{position: 'absolute', inset: 0}}>
      <MaskedReveal delay={4} edge="top" style={{position: 'absolute', left: 420, top: 22, width: 940, height: 190, backgroundColor: STAGE.yellow, color: STAGE.black, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
        <div><ScanSearch size={64} style={{margin: '0 auto 14px'}} /><div style={{fontSize: 46, fontWeight: 950}}>法律关系性质 / 民事行为效力</div><div style={{fontSize: 25, fontWeight: 800, marginTop: 10}}>列为焦点问题</div></div>
      </MaskedReveal>
      <div style={{position: 'absolute', left: 887, top: 212, width: 5, height: 86, backgroundColor: STAGE.yellow}} />
      <StaggerEnter baseDelay={52} step={24} gap={36} style={{position: 'absolute', left: 110, right: 110, top: 298}}>
        <div style={{flex: 1, height: 220, backgroundColor: STAGE.blue, padding: 32, textAlign: 'center'}}><FileText size={62} style={{margin: '0 auto'}} /><div style={{fontSize: 36, fontWeight: 950, marginTop: 28}}>举证</div></div>
        <div style={{flex: 1, height: 220, backgroundColor: STAGE.white, color: STAGE.black, padding: 32, textAlign: 'center'}}><MessagesSquare size={62} style={{margin: '0 auto'}} /><div style={{fontSize: 36, fontWeight: 950, marginTop: 28}}>质证</div></div>
        <div style={{flex: 1, height: 220, border: `4px solid ${STAGE.yellow}`, padding: 32, textAlign: 'center'}}><Scale size={62} color={STAGE.yellow} style={{margin: '0 auto'}} /><div style={{fontSize: 36, fontWeight: 950, marginTop: 28}}>辩论</div></div>
      </StaggerEnter>
      <Enter delay={126} from="none" style={{position: 'absolute', left: 300, bottom: 18, width: 1180, height: 105, backgroundColor: STAGE.charcoal, borderLeft: `12px solid ${STAGE.red}`, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 24}}><BadgeCheck size={54} color={STAGE.yellow} /><div><div style={{fontSize: 28, fontWeight: 950}}>例外</div><div style={{fontSize: 23, marginTop: 6}}>不影响裁判结果和理由，或者已经充分辩论</div></div></Enter>
    </div>
  </Canvas>
);

export const DispositionBoundaryScene = () => (
  <Canvas code="03" title="变更诉请与处分边界">
    <div data-layout="request-boundary-stage" data-visual-anchor="boundary" data-text-treatments="label-block,external-negation,stamp" data-visual-grammar="choice,authorization,constraint" data-focal-rule="request-change-must-be-allowed-but-new-deadline-is-discretionary" data-focal-channels="icon,enclosure,contrast,annotation" style={{position: 'absolute', inset: 0}}>
      <Enter delay={4} style={{position: 'absolute', left: 44, top: 94, width: 440, height: 390, backgroundColor: STAGE.blue, padding: 36}}><FilePenLine size={76} /><div style={{fontSize: 27, fontWeight: 850, marginTop: 30}}>当事人选择</div><div style={{fontSize: 42, lineHeight: 1.3, fontWeight: 950, marginTop: 16}}>根据审理情况<br />变更诉讼请求</div></Enter>
      <Enter delay={42} style={{position: 'absolute', left: 650, top: 62, width: 470, height: 210, backgroundColor: STAGE.yellow, color: STAGE.black, padding: 30, display: 'flex', alignItems: 'center', gap: 24}}><CheckCheck size={72} /><div><div style={{fontSize: 38, fontWeight: 950}}>法院应当准许</div><div style={{fontSize: 23, marginTop: 10}}>处分原则</div></div></Enter>
      <Enter delay={70} style={{position: 'absolute', left: 650, top: 318, width: 470, height: 210, border: `4px solid ${STAGE.yellow}`, padding: 30, display: 'flex', alignItems: 'center', gap: 24}}><CalendarPlus size={72} color={STAGE.yellow} /><div><div style={{fontSize: 35, fontWeight: 950}}>可以重定举证期限</div><div style={{fontSize: 23, marginTop: 10}}>不是一律“应当”</div></div></Enter>
      <Enter delay={94} from="right" style={{position: 'absolute', right: 44, top: 94, width: 480, height: 434, border: `5px solid ${STAGE.red}`, padding: 36}}><Fence size={76} color={STAGE.red} /><div style={{fontSize: 28, fontWeight: 850, marginTop: 26}}>当事人拒绝变更</div><div style={{fontSize: 39, lineHeight: 1.35, fontWeight: 950, marginTop: 20}}>法院仍受原诉讼请求约束</div><div style={{marginTop: 28, paddingTop: 20, borderTop: `3px solid ${STAGE.red}`, fontSize: 23, color: STAGE.grey}}>不能越过处分边界替当事人重写请求</div></Enter>
      <Enter delay={132} from="none" style={{position: 'absolute', left: 420, bottom: 26, width: 960, height: 92, backgroundColor: STAGE.white, color: STAGE.black, display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 950}}>法院负责保障辩论，不替当事人处分权利</Enter>
    </div>
  </Canvas>
);

export const SurpriseJudgmentFocus = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-recognition-mismatch" {...SCENES.recognitionMismatch}><RecognitionMismatchScene /></TimelineSequence>
    <TimelineSequence name="02-issue-hearing-path" {...SCENES.issueHearingPath}><IssueHearingPathScene /></TimelineSequence>
    <TimelineSequence name="03-disposition-boundary" {...SCENES.dispositionBoundary}><DispositionBoundaryScene /></TimelineSequence>
  </AbsoluteFill>
);
