import {
  BadgeCheck,
  Ban,
  FileCheck2,
  FileSignature,
  FileX2,
  Gavel,
  Handshake,
  HeartHandshake,
  Landmark,
  PenLine,
  Scale,
  ShieldX,
  Undo2,
  UsersRound,
} from 'lucide-react';
import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, createMotionPrimitives, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const C = {
  paper: '#f4f0e7',
  ink: '#17191d',
  muted: '#5f6268',
  cyan: '#19a7b5',
  cyanSoft: '#d8f2f2',
  green: '#237d5b',
  greenSoft: '#dcefe6',
  red: '#d84235',
  redSoft: '#f7dfdc',
  violet: '#6944a5',
  violetSoft: '#e9e0f5',
  yellow: '#e8bd3d',
  white: '#fffdfa',
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const {Enter, StaggerEnter} = createMotionPrimitives(toSourceFrame);

const AnimatedHeading = ({children}: {children: string}) => {
  const frame = toSourceFrame(useCurrentFrame());
  return <div style={{display: 'flex', fontSize: 58, lineHeight: 1.08, fontWeight: 950}}>{[...children].map((character, index) => <span key={`${character}-${index}`} style={{opacity: interpolate(frame, [index * 2, index * 2 + 12], [0, 1], CLAMP), translate: `0px ${interpolate(frame, [index * 2, index * 2 + 12], [22, 0], CLAMP)}px`}}>{character}</span>)}</div>;
};

const Canvas = ({children, code, title}: {children: ReactNode; code: string; title: string}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor: C.paper, color: C.ink, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(23,25,29,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(23,25,29,.055) 1px, transparent 1px)', backgroundSize: '64px 64px'}} />
    <div style={{position: 'absolute', left: 0, top: 0, width: 36, height: '100%', backgroundColor: C.cyan}} />
    <div style={{position: 'absolute', left: 92, top: 62, display: 'flex', alignItems: 'center', gap: 26}}>
      <span style={{fontSize: 24, fontWeight: 950, padding: '10px 15px', backgroundColor: C.ink, color: C.white}}>{code}</span>
      <AnimatedHeading>{title}</AnimatedHeading>
    </div>
    <div style={{position: 'absolute', left: 92, right: 86, top: 145, height: 5, backgroundColor: C.ink}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Sheet = ({children, accent = C.cyan, style}: {children: ReactNode; accent?: string; style?: CSSProperties}) => (
  <div style={{backgroundColor: C.white, border: `4px solid ${C.ink}`, boxShadow: `14px 14px 0 ${accent}`, padding: '24px 28px', ...style}}>{children}</div>
);

const Stamp = ({children, color = C.green}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: `5px solid ${color}`, color, padding: '8px 14px', fontSize: 29, lineHeight: 1, fontWeight: 950, rotate: '-2deg'}}>{children}</span>
);

const Route = ({color, left, top, width, progress}: {color: string; left: number; top: number; width: number; progress: number}) => (
  <div style={{position: 'absolute', left, top, width, height: 10, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}}>
    <div style={{position: 'absolute', right: -2, top: -10, width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: `24px solid ${color}`}} />
  </div>
);

export const MediationScopeScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const travel = interpolate(frame, [38, 98], [0, 1], CLAMP);
  return (
    <Canvas code="01" title="先问程序：这里能不能调解？">
      <div data-layout="procedure-eligibility-boundary" data-visual-anchor="boundary" data-visual-grammar="forum,authorization,exclusion,exception" data-text-treatments="label-block,external-negation,thin-underline" data-focal-rule="litigation-open-execution-and-status-confirmation-closed" data-focal-channels="icon,enclosure,motion" style={{position: 'absolute', inset: 0}}>
        <Enter delay={10} style={{position: 'absolute', left: 104, top: 268}}>
          <Sheet style={{width: 330, height: 222}}>
            <div data-stateful-source="dispute-sheet" style={{display: 'flex', gap: 18, alignItems: 'center'}}><FileSignature size={58} color={C.cyan}/><b style={{fontSize: 35}}>民事纠纷</b></div>
            <div style={{marginTop: 25, fontSize: 25, lineHeight: 1.4, color: C.muted}}>带着争议进入程序边界</div>
          </Sheet>
        </Enter>
        <Route color={C.cyan} left={466} top={382} width={286} progress={travel}/>
        <Enter delay={48} style={{position: 'absolute', left: 772, top: 220}}>
          <div data-stateful-terminal="dispute-sheet" style={{width: 286, height: 330, border: `7px solid ${C.ink}`, backgroundColor: C.cyanSoft, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <Landmark size={76}/><div style={{fontSize: 38, fontWeight: 950}}>诉讼程序</div><Stamp>可以调解</Stamp>
          </div>
        </Enter>
        <StaggerEnter baseDelay={82} step={14} style={{position: 'absolute', left: 1110, top: 208, width: 692, display: 'grid', gap: 22}}>
          <div data-final-knowledge="litigation-open" style={{display: 'flex', alignItems: 'center', gap: 18, padding: '19px 22px', backgroundColor: C.greenSoft, borderLeft: `12px solid ${C.green}`, fontSize: 29, fontWeight: 900}}><Handshake size={43} color={C.green}/>诉讼程序：开放</div>
          <div data-final-knowledge="execution-closed" style={{display: 'flex', alignItems: 'center', gap: 18, padding: '19px 22px', backgroundColor: C.redSoft, borderLeft: `12px solid ${C.red}`, fontSize: 29, fontWeight: 900}}><Ban size={43} color={C.red}/>执行程序：关闭</div>
          <div data-final-knowledge="status-confirmation-closed" style={{display: 'flex', alignItems: 'center', gap: 18, padding: '19px 22px', backgroundColor: C.redSoft, borderLeft: `12px solid ${C.red}`, fontSize: 29, fontWeight: 900}}><ShieldX size={43} color={C.red}/>身份关系确认：关闭</div>
          <div data-final-knowledge="divorce-exception" style={{display: 'flex', alignItems: 'center', gap: 18, padding: '19px 22px', backgroundColor: C.violetSoft, borderBottom: `5px solid ${C.violet}`, fontSize: 27, fontWeight: 900}}><HeartHandshake size={43} color={C.violet}/>离婚诉讼并非排除：应先行调解</div>
        </StaggerEnter>
      </div>
    </Canvas>
  );
};

export const AgreementReviewScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const travel = interpolate(frame, [34, 90], [0, 1], CLAMP);
  const press = interpolate(frame, [86, 112, 130], [0, 1, 0], CLAMP);
  return (
    <Canvas code="02" title="协议不是一签就过：法院还要审查">
      <div data-layout="agreement-confirmation-press" data-visual-anchor="boundary" data-visual-grammar="permission,responsibility,prohibition,confirmation" data-text-treatments="soft-highlight,label-block,external-negation,stamp" data-focal-rule="allowed-arrangements-pass-but-second-judgment-clause-is-barred" data-focal-channels="icon,motion,contrast" style={{position: 'absolute', inset: 0}}>
        <Enter delay={8} style={{position: 'absolute', left: 110, top: 265}}>
          <Sheet accent={C.yellow} style={{width: 330, height: 290}}>
            <div data-stateful-source="agreement-sheet" style={{display: 'flex', alignItems: 'center', gap: 18}}><FileSignature size={62} color={C.cyan}/><b style={{fontSize: 35}}>调解协议</b></div>
            <div style={{marginTop: 28, fontSize: 27, lineHeight: 1.55}}>超出诉请<br/>违约民责<br/>再次裁判条款</div>
          </Sheet>
        </Enter>
        <Route color={C.cyan} left={478} top={410} width={260} progress={travel}/>
        <div style={{position: 'absolute', left: 756, top: 212, width: 270, height: 414, border: `8px solid ${C.ink}`, backgroundColor: C.white}}>
          <div style={{height: 78, backgroundColor: C.ink, color: C.white, display: 'grid', placeItems: 'center', fontSize: 31, fontWeight: 950}}>合法性审查</div>
          <div style={{position: 'absolute', left: 32, right: 32, top: 158, height: 38, backgroundColor: C.violet, translate: `0px ${press * 82}px`}}/>
          <Scale size={104} color={C.violet} style={{position: 'absolute', left: 76, top: 116}}/>
          <div data-stateful-terminal="agreement-sheet" style={{position: 'absolute', left: 36, bottom: 28, width: 182, padding: '14px', backgroundColor: C.cyanSoft, border: `3px solid ${C.cyan}`, textAlign: 'center', fontSize: 23, fontWeight: 900}}>协议审查结果</div>
        </div>
        <StaggerEnter baseDelay={80} step={16} style={{position: 'absolute', left: 1090, top: 205, width: 704, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
          <div data-final-knowledge="beyond-claim-allowed" style={{height: 160, padding: 24, backgroundColor: C.greenSoft, borderTop: `10px solid ${C.green}`}}><BadgeCheck size={46} color={C.green}/><div style={{marginTop: 14, fontSize: 28, fontWeight: 950}}>超出诉请</div><div style={{fontSize: 24, marginTop: 8}}>可以准许</div></div>
          <div data-final-knowledge="civil-liability-allowed" style={{height: 160, padding: 24, backgroundColor: C.greenSoft, borderTop: `10px solid ${C.green}`}}><BadgeCheck size={46} color={C.green}/><div style={{marginTop: 14, fontSize: 28, fontWeight: 950}}>不履行民责</div><div style={{fontSize: 24, marginTop: 8}}>可以约定</div></div>
          <div data-final-knowledge="second-judgment-barred" style={{height: 180, padding: 24, backgroundColor: C.redSoft, borderTop: `10px solid ${C.red}`}}><ShieldX size={46} color={C.red}/><div style={{marginTop: 14, fontSize: 28, fontWeight: 950}}>不履行再裁判</div><div style={{fontSize: 24, marginTop: 8}}>不予准许</div></div>
          <div data-final-knowledge="confirmation-result" style={{height: 180, padding: 24, backgroundColor: C.violetSoft, display: 'grid', placeItems: 'center', textAlign: 'center'}}><Gavel size={48} color={C.violet}/><Stamp color={C.violet}>法院确认</Stamp></div>
        </StaggerEnter>
      </div>
    </Canvas>
  );
};

export const SignatureEffectScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const leftSign = interpolate(frame, [48, 78], [0, 1], CLAMP);
  const rightSign = interpolate(frame, [82, 112], [0, 1], CLAMP);
  return (
    <Canvas code="03" title="生效不是送出：关键是双方签收">
      <div data-layout="dual-signature-effect-threshold" data-visual-anchor="role-pair" data-visual-grammar="agreement,signature,effect,refusal" data-text-treatments="thin-underline,stamp,external-negation" data-focal-rule="both-parties-must-sign-before-the-mediation-order-takes-effect" data-focal-channels="icon,connector,motion" style={{position: 'absolute', inset: 0}}>
        <div data-stateful-source="mediation-document" style={{position: 'absolute', left: 736, top: 235, width: 450, height: 330, padding: 30, backgroundColor: C.white, border: `6px solid ${C.ink}`, boxShadow: `16px 16px 0 ${C.cyan}`}}>
          <FileCheck2 size={72} color={C.cyan}/><div style={{fontSize: 42, fontWeight: 950, marginTop: 18}}>民事调解书</div><div style={{fontSize: 26, color: C.muted, marginTop: 14}}>经双方当事人签收后生效</div>
          <div data-stateful-terminal="mediation-document" style={{position: 'absolute', left: 30, right: 30, bottom: 26, display: 'flex', justifyContent: 'space-between'}}><Stamp color={leftSign > .95 ? C.green : C.muted}>甲方签收</Stamp><Stamp color={rightSign > .95 ? C.green : C.muted}>乙方签收</Stamp></div>
        </div>
        <Enter delay={12} style={{position: 'absolute', left: 118, top: 272, width: 370, height: 245, backgroundColor: C.cyanSoft, border: `5px solid ${C.cyan}`, padding: 28}}><UsersRound size={66}/><div style={{fontSize: 34, fontWeight: 950, marginTop: 18}}>双方都签收</div><PenLine size={48} color={C.green} style={{marginTop: 18}}/></Enter>
        <Route color={C.green} left={492} top={390} width={220} progress={leftSign}/>
        <Enter delay={100} style={{position: 'absolute', left: 1370, top: 220}}><div data-final-knowledge="both-signed-effective" style={{width: 420, padding: 28, backgroundColor: C.greenSoft, borderLeft: `14px solid ${C.green}`}}><FileCheck2 size={54} color={C.green}/><div style={{fontSize: 33, fontWeight: 950, marginTop: 12}}>双方签收</div><Stamp>调解书生效</Stamp></div></Enter>
        <Enter delay={120} style={{position: 'absolute', left: 138, top: 630}}><div data-final-knowledge="one-refuses-ineffective" style={{width: 690, padding: 24, backgroundColor: C.redSoft, display: 'flex', alignItems: 'center', gap: 24, borderLeft: `14px solid ${C.red}`}}><FileX2 size={58} color={C.red}/><div><div style={{fontSize: 31, fontWeight: 950}}>一方拒签 / 签收前反悔</div><div style={{fontSize: 25, marginTop: 8}}>调解书不生效</div></div></div></Enter>
        <Enter delay={142} style={{position: 'absolute', left: 950, top: 650}}><div data-final-knowledge="prompt-judgment" style={{width: 770, padding: 24, backgroundColor: C.violetSoft, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `7px solid ${C.violet}`}}><Gavel size={58} color={C.violet}/><div style={{fontSize: 31, fontWeight: 950}}>法院应当及时判决</div></div></Enter>
      </div>
    </Canvas>
  );
};

export const SettlementExitsScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const fork = interpolate(frame, [42, 92], [0, 1], CLAMP);
  return (
    <Canvas code="04" title="诉讼和解后，结案路径决定法律效果">
      <div data-layout="settlement-two-exit-fork" data-visual-anchor="flow-path" data-visual-grammar="settlement,withdrawal,mediation-order,effect" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="withdrawal-allows-refiling-while-a-mediation-order-is-enforceable" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', inset: 0}}>
        <Enter delay={8} style={{position: 'absolute', left: 120, top: 300}}><Sheet accent={C.yellow} style={{width: 390, height: 280}}><div data-stateful-source="settlement-sheet"><Handshake size={76} color={C.cyan}/><div style={{fontSize: 38, fontWeight: 950, marginTop: 20}}>自行达成和解</div><div style={{fontSize: 25, color: C.muted, marginTop: 14}}>同一份和解协议</div></div></Sheet></Enter>
        <Route color={C.ink} left={548} top={436} width={220} progress={fork}/>
        <div style={{position: 'absolute', left: 760, top: 320, width: 92, height: 240, borderLeft: `10px solid ${C.ink}`, borderTop: `10px solid ${C.ink}`, borderBottom: `10px solid ${C.ink}`, scale: `${fork} 1`, transformOrigin: 'left center'}}/>
        <Enter delay={72} style={{position: 'absolute', left: 890, top: 218}}><div data-final-knowledge="withdrawal-reclaim" style={{width: 760, height: 220, padding: 30, backgroundColor: C.violetSoft, borderLeft: `14px solid ${C.violet}`, display: 'flex', gap: 30, alignItems: 'center'}}><Undo2 size={76} color={C.violet}/><div><div style={{fontSize: 36, fontWeight: 950}}>申请撤诉</div><div style={{fontSize: 27, marginTop: 14}}>视为从未起诉 → 可以再次起诉</div></div></div></Enter>
        <Enter delay={98} style={{position: 'absolute', left: 890, top: 520}}><div data-final-knowledge="order-enforceable" style={{width: 760, height: 220, padding: 30, backgroundColor: C.greenSoft, borderLeft: `14px solid ${C.green}`, display: 'flex', gap: 30, alignItems: 'center'}}><FileCheck2 size={76} color={C.green}/><div data-stateful-terminal="settlement-sheet"><div style={{fontSize: 36, fontWeight: 950}}>请求制作调解书</div><div style={{fontSize: 27, marginTop: 14}}>调解书生效 → 可以强制执行</div></div></div></Enter>
      </div>
    </Canvas>
  );
};

export const MediationSettlementPath = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-mediation-scope" start={SCENES.mediationScope.start} duration={SCENES.mediationScope.duration}><MediationScopeScene/></TimelineSequence>
    <TimelineSequence name="02-agreement-review" start={SCENES.agreementReview.start} duration={SCENES.agreementReview.duration}><AgreementReviewScene/></TimelineSequence>
    <TimelineSequence name="03-signature-effect" start={SCENES.signatureEffect.start} duration={SCENES.signatureEffect.duration}><SignatureEffectScene/></TimelineSequence>
    <TimelineSequence name="04-settlement-exits" start={SCENES.settlementExits.start} duration={SCENES.settlementExits.duration}><SettlementExitsScene/></TimelineSequence>
  </AbsoluteFill>
);
