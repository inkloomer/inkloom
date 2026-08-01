import {
  CalendarClock,
  CalendarPlus,
  CircleCheckBig,
  CircleX,
  FilePenLine,
  FileWarning,
  Gavel,
  GitBranch,
  HandHelping,
  Landmark,
  MessageSquareText,
  ShieldCheck,
  TrainFront,
  UsersRound,
} from 'lucide-react';
import type {ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const SIGNAL = {
  paper: '#F8FAF7', ink: '#151B1D', steel: '#46565A', green: '#149B70', blue: '#2459D8',
  magenta: '#D43C74', yellow: '#F4C44E', mist: '#DCE5DF', white: '#FFFFFF',
};
const {Enter, StaggerEnter, MaskedReveal} = createMotionPrimitives(toSourceFrame);

const Canvas = ({code, title, cue, children}: {code: string; title: string; cue: string; children: ReactNode}) => (
  <div style={{position: 'absolute', inset: 0, backgroundColor: SIGNAL.paper, color: SIGNAL.ink, fontFamily: 'var(--inkloom-animation-body)', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 28, background: `linear-gradient(90deg, ${SIGNAL.green} 0 28%, ${SIGNAL.blue} 28% 61%, ${SIGNAL.magenta} 61% 82%, ${SIGNAL.yellow} 82%)`}} />
    <div style={{position: 'absolute', left: 64, top: 58, fontSize: 20, fontWeight: 900, color: SIGNAL.steel}}>DISPATCH / {code}</div>
    <div style={{position: 'absolute', left: 64, top: 92, fontSize: 54, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', right: 64, top: 80, padding: '14px 22px', border: `3px solid ${SIGNAL.ink}`, fontSize: 23, fontWeight: 900}}>{cue}</div>
    <div style={{position: 'absolute', left: 64, right: 64, top: 178, bottom: 74}}>{children}</div>
    <div style={{position: 'absolute', left: 64, right: 64, bottom: 34, height: 5, backgroundColor: SIGNAL.ink}}><div style={{width: '26%', height: '100%', backgroundColor: SIGNAL.green}} /></div>
  </div>
);

const Route = ({top, color, label, value, operator, delay}: {top: number; color: string; label: string; value: string; operator: string; delay: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 36], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', left: 84, right: 84, top, height: 120}}>
      <div style={{position: 'absolute', left: 0, top: 34, width: 300, fontSize: 30, fontWeight: 900}}>{label}</div>
      <div style={{position: 'absolute', left: 300, top: 56, width: 930 * progress, height: 8, backgroundColor: color}} />
      <div style={{position: 'absolute', left: 300 + 900 * progress, top: 24, width: 78, height: 78, borderRadius: '50%', backgroundColor: color, color: SIGNAL.white, display: 'grid', placeItems: 'center', fontSize: 25, fontWeight: 950}}>{operator}</div>
      <Enter delay={delay + 24} from="right" style={{position: 'absolute', right: 0, top: 0, width: 250, height: 116, backgroundColor: SIGNAL.ink, color: SIGNAL.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
        <div><div style={{fontSize: 46, fontWeight: 950}}>{value}</div><div style={{fontSize: 20, color}}>法院指定</div></div>
      </Enter>
    </div>
  );
};

export const DeadlineRoutesScene = () => (
  <Canvas code="01" title="不同程序的举证期限" cue="方向词比数字更重要">
    <div data-layout="four-route-deadline-scale" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="comparison,threshold,direction" data-focal-rule="procedure-type-controls-the-direction-of-the-deadline-limit" data-focal-channels="icon,spatial,contrast,annotation" style={{position: 'absolute', inset: 0}}>
      <Enter delay={2} style={{position: 'absolute', left: 0, top: 8, width: 54, height: 610, backgroundColor: SIGNAL.ink, color: SIGNAL.white, display: 'grid', placeItems: 'center'}}><CalendarClock size={34} /></Enter>
      <Route top={4} color={SIGNAL.green} label="一审普通程序" operator="≥" value="15 日" delay={10} />
      <Route top={154} color={SIGNAL.blue} label="二审新证据" operator="≥" value="10 日" delay={30} />
      <Route top={304} color={SIGNAL.magenta} label="简易程序" operator="≤" value="15 日" delay={50} />
      <Route top={454} color={SIGNAL.yellow} label="小额诉讼" operator="≤" value="7 日" delay={70} />
      <Enter delay={112} from="none" style={{position: 'absolute', left: 560, bottom: 8, width: 760, height: 78, backgroundColor: SIGNAL.white, border: `3px solid ${SIGNAL.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: 27, fontWeight: 900}}><TrainFront size={40} color={SIGNAL.green} /> 普通程序保留最低准备时间；简易程序压缩上限</Enter>
    </div>
  </Canvas>
);

export const ExtensionBridgeScene = () => (
  <Canvas code="02" title="举证期限怎样延长" cue="三步缺一不可">
    <div data-layout="all-party-extension-bridge" data-visual-anchor="timeline-gate" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="condition,sequence,shared-effect" data-focal-rule="approved-extension-applies-to-all-parties" data-focal-channels="icon,connector,enclosure,motion" style={{position: 'absolute', inset: 0}}>
      <StaggerEnter baseDelay={8} step={28} gap={88} style={{position: 'absolute', left: 58, right: 58, top: 96, alignItems: 'center'}}>
        <div style={{width: 390, height: 240, backgroundColor: SIGNAL.ink, color: SIGNAL.white, padding: 34}}><CalendarClock size={58} color={SIGNAL.yellow} /><div style={{fontSize: 34, fontWeight: 950, marginTop: 28}}>期限内确有困难</div><div style={{fontSize: 23, color: SIGNAL.mist, marginTop: 18}}>困难是启动条件</div></div>
        <div style={{width: 390, height: 240, border: `4px solid ${SIGNAL.blue}`, backgroundColor: SIGNAL.white, padding: 34}}><FilePenLine size={58} color={SIGNAL.blue} /><div style={{fontSize: 34, fontWeight: 950, marginTop: 28}}>届满前书面申请</div><div style={{fontSize: 23, color: SIGNAL.steel, marginTop: 18, textDecoration: 'underline', textUnderlineOffset: 7}}>必须在原期限届满前</div></div>
        <div style={{width: 390, height: 240, backgroundColor: SIGNAL.green, color: SIGNAL.white, padding: 34}}><CalendarPlus size={58} /><div style={{fontSize: 34, fontWeight: 950, marginTop: 28}}>法院准许并延长</div><div style={{fontSize: 23, marginTop: 18}}>期限适当延长</div></div>
      </StaggerEnter>
      <MaskedReveal delay={96} edge="left" style={{position: 'absolute', left: 180, right: 180, top: 420, height: 190, backgroundColor: SIGNAL.yellow, padding: '30px 56px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 28}}><UsersRound size={72} color={SIGNAL.ink} /><div><div style={{fontSize: 42, fontWeight: 950}}>延长期限适用于其他当事人</div><div style={{fontSize: 24, marginTop: 12, fontWeight: 760}}>不是只给申请人单独加时</div></div></div>
      </MaskedReveal>
    </div>
  </Canvas>
);

const Outcome = ({top, color, icon, title, detail, delay}: {top: number; color: string; icon: ReactNode; title: string; detail: string; delay: number}) => (
  <Enter delay={delay} from="right" style={{position: 'absolute', right: 46, top, width: 650, height: 126, backgroundColor: color, color: color === SIGNAL.yellow ? SIGNAL.ink : SIGNAL.white, padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 24}}>
    {icon}<div><div style={{fontSize: 30, fontWeight: 950}}>{title}</div><div style={{fontSize: 22, marginTop: 8, fontWeight: 730}}>{detail}</div></div>
  </Enter>
);

export const LateEvidenceSwitchScene = () => (
  <Canvas code="03" title="逾期证据的四路后果" cue="先说明理由，再判断过错">
    <div data-layout="fault-sensitive-switchyard" data-visual-anchor="document-fork" data-text-treatments="soft-highlight,external-negation,stamp" data-visual-grammar="decision,exception,sanction" data-focal-rule="basic-facts-guarantee-admission-despite-serious-fault" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={4} style={{position: 'absolute', left: 42, top: 168, width: 380, height: 310, backgroundColor: SIGNAL.ink, color: SIGNAL.white, padding: 36}}><FileWarning size={72} color={SIGNAL.yellow} /><div style={{fontSize: 42, fontWeight: 950, marginTop: 30}}>逾期提供证据</div><div style={{fontSize: 25, color: SIGNAL.mist, marginTop: 22}}>法院应当责令说明理由</div></Enter>
      <Enter delay={36} style={{position: 'absolute', left: 500, top: 225, width: 300, height: 190, border: `4px solid ${SIGNAL.magenta}`, backgroundColor: SIGNAL.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><GitBranch size={58} color={SIGNAL.magenta} /><div style={{fontSize: 30, fontWeight: 950, marginTop: -34}}>原因 + 过错<br />+ 基本事实</div></Enter>
      <div style={{position: 'absolute', left: 422, top: 319, width: 82, height: 5, backgroundColor: SIGNAL.magenta}} />
      <div style={{position: 'absolute', left: 796, top: 90, width: 70, height: 468, borderLeft: `5px solid ${SIGNAL.magenta}`, borderTop: `5px solid ${SIGNAL.magenta}`, borderBottom: `5px solid ${SIGNAL.magenta}`}} />
      <Outcome top={22} color={SIGNAL.green} icon={<CircleCheckBig size={54} />} title="客观原因 / 对方无异议" detail="视为未逾期，不施加制裁" delay={62} />
      <Outcome top={170} color={SIGNAL.blue} icon={<CircleCheckBig size={54} />} title="非故意或重大过失" detail="应当采纳 + 训诫" delay={80} />
      <Outcome top={318} color={SIGNAL.magenta} icon={<Gavel size={54} />} title="严重过错 + 涉及基本事实" detail="应当采纳 + 训诫、罚款" delay={98} />
      <Outcome top={466} color={SIGNAL.yellow} icon={<CircleX size={54} />} title="严重过错 + 不涉基本事实" detail="原则上不予采纳" delay={116} />
      <Enter delay={146} from="none" style={{position: 'absolute', left: 118, bottom: 24, width: 600, height: 84, border: `4px solid ${SIGNAL.magenta}`, backgroundColor: SIGNAL.white, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 950}}>基本事实是“应当采纳”的保底闸门</Enter>
    </div>
  </Canvas>
);

export const CourtCollectionBoundaryScene = () => (
  <Canvas code="04" title="法院调查取证的边界" cue="职权是例外，申请是常态">
    <div data-layout="authority-collection-boundary" data-visual-anchor="boundary" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="scope,comparison,hearing-effect" data-focal-rule="ex-officio-collection-is-limited-and-does-not-use-formal-cross-examination" data-focal-channels="icon,enclosure,connector,annotation" style={{position: 'absolute', inset: 0}}>
      <Enter delay={4} style={{position: 'absolute', left: 42, top: 34, width: 760, height: 560, backgroundColor: SIGNAL.ink, color: SIGNAL.white, padding: 38}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}><Landmark size={64} color={SIGNAL.yellow} /><div style={{fontSize: 38, fontWeight: 950}}>依职权调查</div></div>
        <StaggerEnter baseDelay={28} step={15} direction="column" gap={16} style={{marginTop: 38}}>
          <div style={{padding: '18px 22px', backgroundColor: SIGNAL.green, fontSize: 27, fontWeight: 850}}>国家、社会、第三人利益</div>
          <div style={{padding: '18px 22px', border: `3px solid ${SIGNAL.blue}`, fontSize: 27, fontWeight: 850}}>身份关系</div>
          <div style={{padding: '18px 22px', border: `3px solid ${SIGNAL.magenta}`, fontSize: 27, fontWeight: 850}}>追加、中止、终结、回避等程序事实</div>
        </StaggerEnter>
        <Enter delay={90} from="none" style={{marginTop: 30, display: 'flex', alignItems: 'center', gap: 18, fontSize: 25, fontWeight: 800}}><ShieldCheck size={44} color={SIGNAL.yellow} /> 无需质证；法官说明并听取意见</Enter>
      </Enter>
      <Enter delay={26} from="right" style={{position: 'absolute', right: 42, top: 34, width: 890, height: 560, backgroundColor: SIGNAL.white, border: `4px solid ${SIGNAL.blue}`, padding: 38}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}><HandHelping size={64} color={SIGNAL.blue} /><div style={{fontSize: 38, fontWeight: 950}}>依申请调查</div></div>
        <div style={{marginTop: 42, display: 'flex', gap: 24}}>
          <div style={{flex: 1, padding: 26, backgroundColor: SIGNAL.mist}}><div style={{fontSize: 23, color: SIGNAL.steel}}>前提</div><div style={{fontSize: 31, lineHeight: 1.35, fontWeight: 900, marginTop: 16}}>当事人因客观原因<br />无法自行收集</div></div>
          <div style={{flex: 1, padding: 26, backgroundColor: SIGNAL.yellow}}><div style={{fontSize: 23, color: SIGNAL.steel}}>时间</div><div style={{fontSize: 31, lineHeight: 1.35, fontWeight: 900, marginTop: 16}}>举证期限<br />届满前申请</div></div>
        </div>
        <div style={{marginTop: 34, display: 'flex', alignItems: 'center', gap: 22, padding: '24px 28px', backgroundColor: SIGNAL.blue, color: SIGNAL.white}}><MessageSquareText size={54} /><div><div style={{fontSize: 31, fontWeight: 950}}>法官说明后进行质证</div><div style={{fontSize: 22, marginTop: 8}}>申请方 + 对方 + 第三人</div></div></div>
      </Enter>
    </div>
  </Canvas>
);

export const ProofFilingInvestigation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-deadline-routes" {...SCENES.deadlineRoutes}><DeadlineRoutesScene /></TimelineSequence>
    <TimelineSequence name="02-extension-bridge" {...SCENES.extensionBridge}><ExtensionBridgeScene /></TimelineSequence>
    <TimelineSequence name="03-late-evidence-switch" {...SCENES.lateEvidenceSwitch}><LateEvidenceSwitchScene /></TimelineSequence>
    <TimelineSequence name="04-court-collection-boundary" {...SCENES.courtCollectionBoundary}><CourtCollectionBoundaryScene /></TimelineSequence>
  </AbsoluteFill>
);
