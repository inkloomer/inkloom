import {
  BadgeCheck,
  Ban,
  FileCheck2,
  FileSignature,
  Gavel,
  Globe,
  Handshake,
  HeartHandshake,
  NotebookPen,
  PenLine,
  Scale,
  UsersRound,
} from 'lucide-react';
import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, createMotionPrimitives, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const C = {
  bg: '#1d2436',
  panel: '#252f49',
  parchment: '#f2ead8',
  cream: '#faf6ec',
  ink: '#23262d',
  tail: '#6f6a5c',
  muted: '#8d97af',
  seal: '#c8402f',
  brass: '#c9a13b',
  teal: '#3f8f8a',
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const {Enter, StaggerEnter} = createMotionPrimitives(toSourceFrame);

const AnimatedHeading = ({children}: {children: string}) => {
  const frame = toSourceFrame(useCurrentFrame());
  return <div style={{display: 'flex', fontSize: 58, lineHeight: 1.08, fontWeight: 950}}>{[...children].map((character, index) => <span key={`${character}-${index}`} style={{opacity: interpolate(frame, [index * 2, index * 2 + 12], [0, 1], CLAMP), translate: `0px ${interpolate(frame, [index * 2, index * 2 + 12], [22, 0], CLAMP)}px`}}>{character}</span>)}</div>;
};

const Canvas = ({children, code, title}: {children: ReactNode; code: string; title: string}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor: C.bg, color: C.cream, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(250,246,236,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(250,246,236,.045) 1px, transparent 1px)', backgroundSize: '64px 64px'}} />
    <div style={{position: 'absolute', left: 0, top: 0, width: 36, height: '100%', backgroundColor: C.brass}} />
    <div style={{position: 'absolute', left: 92, top: 62, display: 'flex', alignItems: 'center', gap: 26}}>
      <span style={{fontSize: 24, fontWeight: 950, padding: '10px 15px', backgroundColor: C.seal, color: C.cream}}>{code}</span>
      <AnimatedHeading>{title}</AnimatedHeading>
    </div>
    <div style={{position: 'absolute', left: 92, right: 86, top: 145, height: 5, backgroundColor: C.brass}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Entry = ({children, accent = C.teal, style}: {children: ReactNode; accent?: string; style?: CSSProperties}) => (
  <div style={{backgroundColor: C.parchment, border: `3px solid ${C.ink}`, borderLeft: `14px solid ${accent}`, color: C.ink, padding: '18px 24px', ...style}}>{children}</div>
);

const Verdict = ({children, color = C.seal, size = 30}: {children: ReactNode; color?: string; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: `5px solid ${color}`, color, padding: '8px 14px', fontSize: size, lineHeight: 1, fontWeight: 950, rotate: '-2deg'}}>{children}</span>
);

const Rail = ({color, left, top, width, progress}: {color: string; left: number; top: number; width: number; progress: number}) => (
  <div style={{position: 'absolute', left, top, width, height: 10, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}}>
    <div style={{position: 'absolute', right: -2, top: -10, width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: `24px solid ${color}`}} />
  </div>
);

export const CoreMapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const flyStamp = (label: string, left: number, fromX: number, fromY: number, window: [number, number]) => {
    const appear = interpolate(frame, [window[0] - 8, window[0]], [0, 1], CLAMP);
    const flyX = interpolate(frame, window, [fromX, 0], CLAMP);
    const flyY = interpolate(frame, window, [fromY, 0], CLAMP);
    return (
      <span style={{position: 'absolute', left, top: 258, opacity: appear, translate: `${flyX}px ${flyY}px`, rotate: '-2deg', display: 'inline-flex', border: `4px solid ${C.teal}`, color: C.teal, backgroundColor: C.cream, padding: '5px 12px', fontSize: 24, lineHeight: 1, fontWeight: 950}}>{label}</span>
    );
  };
  const routeMain = interpolate(frame, [90, 116], [0, 1], CLAMP);
  const chipRise = interpolate(frame, [104, 124], [20, 0], CLAMP);
  const chipFly = interpolate(frame, [124, 156], [0, -158], CLAMP);
  const sealPop = interpolate(frame, [156, 170], [0.6, 1], CLAMP);
  const forkDrop = interpolate(frame, [150, 180], [0, 1], CLAMP);
  const forkArms = interpolate(frame, [176, 196], [0, 1], CLAMP);
  const railDraw = interpolate(frame, [232, 262], [0, 1], CLAMP);
  const sideCard = (icon: ReactNode, title: string, accent: string, tail: ReactNode) => (
    <Entry accent={accent} style={{width: 412, height: 190, padding: '18px 22px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 14}}>{icon}<b style={{fontSize: 28, fontWeight: 950}}>{title}</b></div>
      <div style={{fontSize: 23, lineHeight: 1.55, marginTop: 14}}>{tail}</div>
    </Entry>
  );
  return (
    <Canvas code="01" title="调解核心要点总览">
      <div data-layout="mediation-journey-fork" data-visual-anchor="flow-path" data-visual-grammar="principles,review,document,record,exit" data-text-treatments="stamp,chip,label-block,external-negation" data-focal-rule="one-agreement-passes-principles-and-review-then-exits-as-document-or-record-with-side-rules" data-focal-channels="icon,motion,connector,contrast" style={{position: 'absolute', inset: 0}}>
        <Gavel size={170} color={C.cream} style={{position: 'absolute', left: 130, top: 470, opacity: 0.07}}/>
        <Enter delay={8} style={{position: 'absolute', left: 104, top: 240}}>
          <Entry accent={C.teal} style={{width: 340, height: 190, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 22}}>
            <div data-stateful-source="agreement-sheet" style={{display: 'flex', alignItems: 'center', gap: 16}}><FileSignature size={48} color={C.teal}/><b style={{fontSize: 32, fontWeight: 950}}>调解协议</b></div>
          </Entry>
        </Enter>
        <div data-final-knowledge="principles-scope" style={{position: 'absolute', left: 520, top: 240, width: 220, height: 190, border: `6px solid ${C.brass}`}}>
          <div style={{textAlign: 'center', fontSize: 26, fontWeight: 950, color: C.brass, paddingTop: 12}}>自愿 · 合法</div>
          <div style={{position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', fontSize: 20, color: C.muted}}>原则之门</div>
        </div>
        {flyStamp('自愿', 160, 392, 54, [44, 82])}
        {flyStamp('合法', 292, 302, 54, [58, 96])}
        <Rail color={C.brass} left={444} top={330} width={356} progress={routeMain}/>
        <div data-final-knowledge="agreement-rules" style={{position: 'absolute', left: 800, top: 240}}>
          <Enter delay={90}>
            <Entry accent={C.seal} style={{width: 320, height: 190}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}><Gavel size={36} color={C.seal}/><b style={{fontSize: 26, fontWeight: 950}}>调解协议审查</b></div>
              <div style={{marginTop: 12, fontSize: 21, color: C.tail}}>超出诉请、约定民责随协议通过</div>
            </Entry>
          </Enter>
        </div>
        <div style={{position: 'absolute', left: 820, top: 308, opacity: interpolate(frame, [104, 114], [0, 1], CLAMP), translate: `${interpolate(frame, [124, 156], [0, -305], CLAMP)}px ${chipRise + chipFly}px`, rotate: '-3deg', zIndex: 3}}>
          <span style={{display: 'inline-flex', alignItems: 'center', border: `4px solid ${C.seal}`, backgroundColor: C.parchment, color: C.ink, padding: '8px 14px', fontSize: 22, fontWeight: 900}}>「不履行则请求裁判」条款</span>
        </div>
        <div style={{position: 'absolute', left: 830, top: 150, opacity: interpolate(frame, [156, 168], [0, 1], CLAMP), scale: `${sealPop}`, rotate: '-6deg', zIndex: 3}}>
          <Verdict size={30}>不予准许</Verdict>
        </div>
        <Enter delay={140} style={{position: 'absolute', left: 800, top: 470}}>
          <Entry accent={C.teal} style={{width: 320}}>
            <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink}}><b style={{color: C.teal, fontWeight: 950}}>超出诉请</b> → 可准许</div>
            <div style={{fontSize: 22, lineHeight: 1.6, marginTop: 8, color: C.ink}}>可约定<b style={{color: C.teal, fontWeight: 950}}>不履行的民事责任</b></div>
          </Entry>
        </Enter>
        <div style={{position: 'absolute', left: 1180, top: 200, width: 10, height: 300, backgroundColor: C.brass, scale: `1 ${forkDrop}`, transformOrigin: 'top center'}}/>
        <div style={{position: 'absolute', left: 1180, top: 200, width: 44, height: 10, backgroundColor: C.brass, scale: `${forkArms} 1`, transformOrigin: 'left center'}}/>
        <div style={{position: 'absolute', left: 1180, top: 490, width: 44, height: 10, backgroundColor: C.brass, scale: `${forkArms} 1`, transformOrigin: 'left center'}}/>
        <div data-final-knowledge="document-effect" style={{position: 'absolute', left: 1220, top: 130}}>
          <Enter delay={176}>
            <Entry accent={C.brass} style={{width: 600, height: 170}}>
              <b style={{fontSize: 26, fontWeight: 950}}>制作调解书</b>
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginTop: 16}}>
                <span data-stateful-terminal="agreement-sheet" style={{display: 'flex', alignItems: 'center', gap: 10}}><FileCheck2 size={36} color={C.brass}/><span style={{fontSize: 24, fontWeight: 900}}>调解书</span></span>
                <span style={{color: C.brass, fontSize: 24, fontWeight: 950}}>→</span>
                <span style={{display: 'flex', alignItems: 'center', gap: 10}}><PenLine size={36} color={C.seal}/><span style={{fontSize: 24, fontWeight: 900}}>双方签收</span></span>
                <span style={{color: C.brass, fontSize: 24, fontWeight: 950}}>→</span>
                <Verdict color={C.brass} size={28}>调解书生效</Verdict>
              </div>
            </Entry>
          </Enter>
        </div>
        <div data-final-knowledge="record-effective" style={{position: 'absolute', left: 1220, top: 420}}>
          <Enter delay={196}>
            <Entry accent={C.teal} style={{width: 600, height: 190}}>
              <div style={{fontSize: 26, fontWeight: 950}}><b style={{color: C.seal, fontWeight: 950}}>四类案件</b> → 不制作调解书</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginTop: 16}}>
                <span style={{display: 'flex', alignItems: 'center', gap: 10}}><NotebookPen size={36} color={C.teal}/><span style={{fontSize: 24, fontWeight: 900}}>记入笔录</span></span>
                <span style={{color: C.brass, fontSize: 24, fontWeight: 950}}>→</span>
                <span style={{display: 'flex', alignItems: 'center', gap: 10}}><PenLine size={36} color={C.seal}/><span style={{fontSize: 24, fontWeight: 900}}>签字或盖章</span></span>
                <span style={{color: C.brass, fontSize: 24, fontWeight: 950}}>→</span>
                <Verdict color={C.teal} size={28}>即生效</Verdict>
              </div>
            </Entry>
          </Enter>
        </div>
        <div style={{position: 'absolute', left: 104, top: 662, width: 1716, height: 8, backgroundColor: C.brass, scale: `${railDraw} 1`, transformOrigin: 'left center'}}/>
        <StaggerEnter baseDelay={246} step={10} style={{position: 'absolute', left: 104, top: 690, width: 1716, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12}}>
          <div data-final-knowledge="judgment-document">{sideCard(<Gavel size={40} color={C.seal}/>, '制作判决书', C.seal, <>{'依协议请求发判决书'}<b style={{color: C.seal, fontWeight: 950}}>{'不予支持'}</b>{'；两种例外可发'}</>)}</div>
          <div data-final-knowledge="third-party">{sideCard(<UsersRound size={40} color={C.seal}/>, '无独三', C.seal, <>{'需担义务：拒签'}<b style={{color: C.seal, fontWeight: 950}}>{'不生效'}</b>{'、及时判决；不担责：'}<b style={{color: C.teal, fontWeight: 950}}>{'不影响'}</b></>)}</div>
          <div data-final-knowledge="guarantee">{sideCard(<Scale size={40} color={C.brass}/>, '担保', C.brass, <>{'应当'}<b style={{color: C.brass, fontWeight: 950}}>{'准许'}</b>{' · 列明担保人；符合《民法典》条件时生效'}</>)}</div>
          <div data-final-knowledge="settlement">{sideCard(<Handshake size={40} color={C.teal}/>, '和解', C.teal, <>{'请求制作调解书'}<b style={{color: C.teal, fontWeight: 950}}>{'可强制执行'}</b>{'；撤诉'}<b style={{color: C.teal, fontWeight: 950}}>{'可再诉'}</b></>)}</div>
        </StaggerEnter>
      </div>
    </Canvas>
  );
};

export const JudgmentDocumentRulesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const route1 = interpolate(frame, [40, 70], [0, 1], CLAMP);
  const route2 = interpolate(frame, [90, 116], [0, 1], CLAMP);
  return (
    <Canvas code="02" title="制作判决书：原则与两种例外">
      <div data-layout="verdict-exception-split" data-visual-anchor="document-fork" data-visual-grammar="refusal,exception,document" data-text-treatments="stamp,external-negation,label-block" data-focal-rule="no-judgment-document-from-mediation-agreement-unless-incompetent-divorce-or-foreign" data-focal-channels="icon,connector,contrast,motion" style={{position: 'absolute', inset: 0}}>
        <Gavel size={200} color={C.cream} style={{position: 'absolute', left: 120, top: 640, opacity: 0.07}}/>
        <Enter delay={8} style={{position: 'absolute', left: 104, top: 250}}>
          <Entry accent={C.teal} style={{width: 340}}>
            <div data-stateful-source="agreement-sheet" style={{display: 'flex', alignItems: 'center', gap: 16}}><FileSignature size={56} color={C.teal}/><b style={{fontSize: 32, fontWeight: 950}}>调解 · 和解协议</b></div>
            <div style={{marginTop: 20, fontSize: 23, lineHeight: 1.45, color: C.tail}}>据此请求制作判决书</div>
          </Entry>
        </Enter>
        <Rail color={C.brass} left={444} top={380} width={80} progress={route1}/>
        <div data-final-knowledge="judgment-refused" data-stateful-terminal="agreement-sheet" style={{position: 'absolute', left: 530, top: 235}}>
          <Enter delay={60}>
            <div style={{position: 'relative', width: 430, height: 290, backgroundColor: C.parchment, border: `5px solid ${C.ink}`, color: C.ink, padding: '26px 28px'}}>
              <div style={{position: 'absolute', right: -18, top: -20}}><Ban size={60} color={C.seal}/></div>
              <Gavel size={56} color={C.seal}/>
              <b style={{fontSize: 34, fontWeight: 950, marginTop: 12, display: 'block'}}>判决书</b>
              <div style={{fontSize: 23, marginTop: 12, color: C.tail}}>不能根据调解、和解协议制作</div>
              <div style={{position: 'absolute', right: 22, bottom: -26}}><Verdict size={34}>不予支持</Verdict></div>
            </div>
          </Enter>
        </div>
        <Rail color={C.brass} left={960} top={380} width={80} progress={route2}/>
        <Enter delay={104} style={{position: 'absolute', left: 1040, top: 200}}>
          <div data-final-knowledge="exception-incompetent-divorce">
            <Entry accent={C.teal} style={{width: 790, height: 310}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}><HeartHandshake size={48} color={C.teal}/><b style={{fontSize: 29, fontWeight: 950}}>例外① 无民事行为能力人的离婚案件</b></div>
              <div style={{fontSize: 24, lineHeight: 1.55, marginTop: 18, color: C.ink}}>法定代理人与对方达成协议，<b style={{color: C.teal, fontWeight: 950}}>要求发给判决书</b>的，可以依协议内容制作判决书</div>
            </Entry>
          </div>
        </Enter>
        <Enter delay={124} style={{position: 'absolute', left: 1040, top: 545}}>
          <div data-final-knowledge="exception-foreign">
            <Entry accent={C.teal} style={{width: 790, height: 310}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}><Globe size={48} color={C.teal}/><b style={{fontSize: 29, fontWeight: 950}}>例外② 涉外民事诉讼</b></div>
              <div style={{fontSize: 24, lineHeight: 1.55, marginTop: 18, color: C.ink}}>经调解达成协议<b style={{color: C.brass, fontWeight: 950}}>应当制发调解书</b>；当事人要求发给判决书的，可以依协议内容制作</div>
            </Entry>
          </div>
        </Enter>
      </div>
    </Canvas>
  );
};

export const ThirdPartySignatureScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const fork = interpolate(frame, [40, 86], [0, 1], CLAMP);
  return (
    <Canvas code="03" title="无独三：签收如何影响调解书生效">
      <div data-layout="obligation-fork-lanes" data-visual-anchor="role-pair" data-visual-grammar="consent,delivery,refusal,effect" data-text-treatments="chip,stamp,label-block" data-focal-rule="obligated-third-party-refusal-blocks-effect-while-non-obligated-refusal-does-not" data-focal-channels="icon,connector,contrast,motion" style={{position: 'absolute', inset: 0}}>
        <UsersRound size={200} color={C.cream} style={{position: 'absolute', left: 130, top: 680, opacity: 0.07}}/>
        <Enter delay={8} style={{position: 'absolute', left: 104, top: 360}}>
          <Entry accent={C.teal} style={{width: 380, height: 300}}>
            <UsersRound size={56} color={C.teal}/>
            <b style={{fontSize: 29, fontWeight: 950, marginTop: 14, display: 'block'}}>无独立请求权第三人</b>
            <div style={{fontSize: 23, marginTop: 12, color: C.tail}}>对调解书生效的影响，分两种情形</div>
          </Entry>
        </Enter>
        <div style={{position: 'absolute', left: 520, top: 300, width: 10, height: 400, backgroundColor: C.brass, scale: `1 ${fork}`, transformOrigin: 'top center'}}/>
        <div style={{position: 'absolute', left: 520, top: 300, width: 44, height: 10, backgroundColor: C.brass, scale: `${fork} 1`, transformOrigin: 'left center'}}/>
        <div style={{position: 'absolute', left: 520, top: 690, width: 44, height: 10, backgroundColor: C.brass, scale: `${fork} 1`, transformOrigin: 'left center'}}/>
        <Enter delay={70} style={{position: 'absolute', left: 560, top: 235}}>
          <Entry accent={C.seal} style={{width: 300, height: 130, display: 'flex', alignItems: 'center'}}><b style={{fontSize: 29, fontWeight: 950}}>需承担义务</b></Entry>
        </Enter>
        <Enter delay={84} style={{position: 'absolute', left: 920, top: 235}}>
          <div data-final-knowledge="liable-consent-delivery">
            <Entry accent={C.seal} style={{width: 640, height: 130, display: 'flex', alignItems: 'center', gap: 16}}>
              <PenLine size={36} color={C.seal}/>
              <span style={{fontSize: 27, fontWeight: 950}}>须经其同意</span>
              <span data-stateful-source="mediation-document" style={{display: 'flex', alignItems: 'center', gap: 12}}><FileCheck2 size={36} color={C.brass}/><span style={{fontSize: 27, fontWeight: 950}}>调解书应向其送达</span></span>
            </Entry>
          </div>
        </Enter>
        <Enter delay={116} style={{position: 'absolute', left: 560, top: 420}}>
          <div data-final-knowledge="liable-refusal-ineffective">
            <Entry accent={C.seal} style={{width: 1000, height: 130, display: 'flex', alignItems: 'center', gap: 20}}>
              <b style={{fontSize: 27, fontWeight: 950}}>拒不签收 →</b>
              <Verdict size={30}>调解书不生效</Verdict>
              <span data-final-knowledge="prompt-judgment" style={{display: 'flex', alignItems: 'center', gap: 12, marginLeft: 'auto'}}><Gavel size={40} color={C.seal}/><b style={{fontSize: 27, fontWeight: 950}}>法院应当及时判决</b></span>
            </Entry>
          </div>
        </Enter>
        <Enter delay={140} style={{position: 'absolute', left: 560, top: 640}}>
          <div data-final-knowledge="non-liable-no-effect" data-stateful-terminal="mediation-document">
            <Entry accent={C.teal} style={{width: 1000, height: 200}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}><UsersRound size={44} color={C.teal}/><b style={{fontSize: 29, fontWeight: 950}}>既不享有权利又不承担义务</b></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 20}}>
                <span style={{fontSize: 27, fontWeight: 950}}>不签收 →</span>
                <Verdict color={C.teal} size={30}>不影响调解书生效</Verdict>
                <BadgeCheck size={40} color={C.teal}/>
              </div>
            </Entry>
          </div>
        </Enter>
      </div>
    </Canvas>
  );
};

export const GuaranteeRulesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const route1 = interpolate(frame, [36, 60], [0, 1], CLAMP);
  const route2 = interpolate(frame, [76, 96], [0, 1], CLAMP);
  const route3 = interpolate(frame, [116, 136], [0, 1], CLAMP);
  return (
    <Canvas code="04" title="担保：准许、列明与生效条件">
      <div data-layout="guarantee-condition-gauge" data-visual-anchor="flow-path" data-visual-grammar="permission,listing,refusal,condition" data-text-treatments="stamp,chip,thin-underline" data-focal-rule="guarantee-permitted-and-listed-while-guarantor-refusal-does-not-block-and-effect-needs-civil-code-conditions" data-focal-channels="icon,connector,enclosure,motion" style={{position: 'absolute', inset: 0}}>
        <Scale size={200} color={C.cream} style={{position: 'absolute', left: 120, top: 580, opacity: 0.07}}/>
        <Enter delay={8} style={{position: 'absolute', left: 104, top: 280}}>
          <div data-stateful-source="guarantee-sheet">
            <Entry accent={C.brass} style={{width: 380, height: 280}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}><Scale size={54} color={C.brass}/><b style={{fontSize: 32, fontWeight: 950}}>担保</b></div>
              <div style={{fontSize: 24, lineHeight: 1.6, marginTop: 16}}>约定<b style={{color: C.brass, fontWeight: 950}}>一方提供担保</b><br/>或<b style={{color: C.brass, fontWeight: 950}}>案外人愿意担保</b></div>
            </Entry>
          </div>
        </Enter>
        <Rail color={C.teal} left={484} top={420} width={86} progress={route1}/>
        <Enter delay={56} style={{position: 'absolute', left: 570, top: 280}}>
          <div data-final-knowledge="guarantee-permitted">
            <Entry accent={C.teal} style={{width: 320, height: 280, display: 'grid', placeItems: 'center'}}>
              <Verdict color={C.teal} size={38}>应当准许</Verdict>
            </Entry>
          </div>
        </Enter>
        <Rail color={C.teal} left={890} top={420} width={60} progress={route2}/>
        <Enter delay={92} style={{position: 'absolute', left: 950, top: 280}}>
          <Entry accent={C.teal} style={{width: 460, height: 280}}>
            <div data-final-knowledge="guarantor-listed" style={{display: 'flex', alignItems: 'center', gap: 14}}><PenLine size={44} color={C.teal}/><b style={{fontSize: 27, fontWeight: 950}}>调解书应当列明担保人</b></div>
            <div data-final-knowledge="guarantor-refusal-no-effect" style={{fontSize: 25, lineHeight: 1.5, marginTop: 18, borderTop: `3px solid ${C.ink}`, paddingTop: 16}}>担保人<b style={{color: C.seal, fontWeight: 950}}>拒不签收</b> → <b style={{color: C.teal, fontWeight: 950}}>不影响</b>调解书生效</div>
          </Entry>
        </Enter>
        <Rail color={C.brass} left={1410} top={420} width={60} progress={route3}/>
        <Enter delay={132} style={{position: 'absolute', left: 1470, top: 280}}>
          <div data-final-knowledge="guarantee-civil-code-condition">
            <div style={{width: 350, height: 280, backgroundColor: C.parchment, border: `6px solid ${C.brass}`, color: C.ink, padding: '24px 26px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}><BadgeCheck size={48} color={C.brass}/><b style={{fontSize: 27, fontWeight: 950}}>担保的效力</b></div>
              <div style={{fontSize: 24, lineHeight: 1.55, marginTop: 16}}>符合《民法典》规定的<span style={{borderBottom: `4px solid ${C.brass}`, fontWeight: 950}}>担保条件</span>时</div>
              <div style={{marginTop: 18}}><Verdict color={C.brass} size={28}>生效</Verdict></div>
            </div>
          </div>
        </Enter>
        <Enter delay={156} style={{position: 'absolute', left: 104, top: 700, width: 1716}}>
          <div data-final-knowledge="effect-contrast">
            <Entry accent={C.brass} style={{height: 110, display: 'flex', alignItems: 'center', padding: '0 26'}}>
              <span style={{display: 'flex', alignItems: 'center', gap: 14, flex: 1}}><FileCheck2 size={44} color={C.teal}/><b style={{fontSize: 27, fontWeight: 950}}>调解书生效：当事人签收</b></span>
              <span data-stateful-terminal="guarantee-sheet" style={{display: 'flex', alignItems: 'center', gap: 14, flex: 1, borderLeft: `4px solid ${C.ink}`, paddingLeft: 30}}><Scale size={44} color={C.brass}/><b style={{fontSize: 27, fontWeight: 950}}>担保生效：符合《民法典》担保条件</b></span>
            </Entry>
          </div>
        </Enter>
      </div>
    </Canvas>
  );
};
