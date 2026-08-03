import type {CSSProperties, ReactNode} from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from 'remotion';
import {
  BadgeCheck,
  FileCheck2,
  FileText,
  FileX2,
  Gavel,
  Languages,
  Landmark,
  MapPinned,
  ShieldCheck,
  Stamp,
  UserRound,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {
  paper: '#f7f1e7',
  ink: '#172536',
  cobalt: '#2455a4',
  cobaltSoft: '#e5eefb',
  teal: '#187b78',
  tealSoft: '#e3f0ed',
  red: '#c84b3f',
  redSoft: '#f8e3dd',
  gold: '#d39b38',
  line: '#b9c5d4',
  white: '#fffdf8',
};

const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const CLAMP = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const enter = (frame: number, at: number) =>
  interpolate(frame, [at, at + 16], [0, 1], {
    ...CLAMP,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

const Reveal = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const progress = enter(frame, delay);
  return <div style={{opacity: progress, translate: `0 ${28 * (1 - progress)}px`, ...style}}>{children}</div>;
};

const Route = ({left, top, width, color = C.cobalt, delay = 0}: {left: number; top: number; width: number; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = enter(frame, delay);
  return (
    <div style={{position: 'absolute', left, top, width, height: 6, backgroundColor: color, transformOrigin: 'left', scale: `${progress} 1`}}>
      <div style={{position: 'absolute', right: -1, top: -8, width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: `18px solid ${color}`}} />
    </div>
  );
};

const Sheet = ({children, accent = C.cobalt, dark = false, style}: {children: ReactNode; accent?: string; dark?: boolean; style?: CSSProperties}) => (
  <div style={{boxSizing: 'border-box', backgroundColor: dark ? C.ink : C.white, color: dark ? C.white : C.ink, border: `4px solid ${accent}`, borderTopWidth: 12, padding: '26px 30px', boxShadow: `10px 10px 0 ${dark ? C.gold : C.line}`, ...style}}>
    {children}
  </div>
);

const Header = ({code, title}: {code: string; title: string}) => (
  <>
    <div style={{position: 'absolute', inset: '0 0 auto', height: 26, backgroundColor: C.ink}} />
    <div style={{position: 'absolute', left: 86, top: 50, fontSize: 18, fontWeight: 800, color: C.teal, letterSpacing: 2}}>CIVIL PROCEDURE / EVIDENCE ROUTE {code}</div>
    <h1 style={{position: 'absolute', left: 86, top: 82, margin: 0, fontFamily: 'var(--inkloom-animation-title)', fontSize: 54, lineHeight: 1.1, color: C.ink}}>{title}</h1>
    <div style={{position: 'absolute', left: 86, right: 86, top: 166, height: 3, backgroundColor: C.ink}} />
  </>
);

const Base = ({children, code, title}: {children: ReactNode; code: string; title: string}) => (
  <AbsoluteFill style={{backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <Header code={code} title={title} />
    <div data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{position: 'absolute', left: 86, right: 86, top: 194, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
    <div style={{position: 'absolute', left: 86, right: 86, bottom: 28, display: 'flex', justifyContent: 'space-between', fontSize: 17, color: C.teal, fontWeight: 750}}>
      <span>民事诉讼法 · 专题十 证据</span>
      <span>FOREIGN DOCUMENT / COURT INTAKE</span>
    </div>
  </AbsoluteFill>
);

export const PublicDocumentRouteScene = () => (
  <Base code="01" title="域外公文书证：所在国证明后再入境">
    <div data-layout="jurisdiction-border-lane" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="origin,checkpoint,arrival" data-focal-rule="foreign-public-document-needs-local-notary-proof-or-treaty-procedure" data-focal-channels="icon,connector,spatial,contrast">
      <Reveal delay={4} style={{position: 'absolute', left: 0, top: 112}}>
        <Sheet dark accent={C.gold} style={{width: 420, height: 350}}>
          <div data-stateful-source="foreign-public-document">
            <MapPinned size={62} color={C.gold} />
            <div style={{marginTop: 22, fontSize: 35, fontWeight: 900}}>中国领域外形成</div>
            <div style={{marginTop: 16, fontSize: 25, color: '#d5dfec'}}>域外公文书证</div>
          </div>
        </Sheet>
      </Reveal>
      <Route left={420} top={284} width={170} delay={24} />
      <Reveal delay={40} style={{position: 'absolute', left: 610, top: 112}}>
        <Sheet accent={C.cobalt} style={{width: 450, height: 350}}>
          <Stamp size={62} color={C.cobalt} />
          <div data-final-knowledge="local-notary-proof" style={{marginTop: 22, fontSize: 34, fontWeight: 900}}>所在国公证机关证明</div>
          <div style={{marginTop: 20, width: 220, borderBottom: `4px solid ${C.red}`, fontSize: 24, fontWeight: 850, color: C.cobalt}}>通常证明路线</div>
        </Sheet>
      </Reveal>
      <Route left={1060} top={284} width={170} color={C.teal} delay={62} />
      <Reveal delay={78} style={{position: 'absolute', left: 1250, top: 112}}>
        <Sheet accent={C.teal} style={{width: 480, height: 350, backgroundColor: C.tealSoft}}>
          <div data-stateful-terminal="foreign-public-document" data-final-knowledge="court-intake" style={{display: 'flex', alignItems: 'center', gap: 20}}>
            <Landmark size={62} color={C.teal} />
            <div style={{fontSize: 35, fontWeight: 900}}>中国法院收件</div>
          </div>
          <div data-final-knowledge="treaty-alternative" style={{marginTop: 36, padding: '18px 20px', borderLeft: `10px solid ${C.gold}`, backgroundColor: C.white, fontSize: 25, fontWeight: 850}}>替代路线：履行中外条约规定的证明手续</div>
        </Sheet>
      </Reveal>
    </div>
  </Base>
);

export const IdentityDocumentRouteScene = () => (
  <Base code="02" title="涉及身份关系：认证门槛再加一层">
    <div data-layout="identity-escalation-fork" data-visual-anchor="boundary" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="classification,escalation,authorization" data-focal-rule="identity-evidence-adds-consular-authentication-after-local-notary-proof" data-focal-channels="icon,enclosure,connector,annotation">
      <Reveal delay={4} style={{position: 'absolute', left: 0, top: 88}}>
        <Sheet dark accent={C.gold} style={{width: 430, height: 420}}>
          <div data-stateful-source="identity-evidence">
            <UserRound size={68} color={C.gold} />
            <div data-final-knowledge="identity-relation" style={{marginTop: 24, fontSize: 36, fontWeight: 900}}>涉及身份关系</div>
            <div style={{marginTop: 16, fontSize: 25, color: '#d5dfec'}}>中国领域外形成的证据</div>
            <div style={{marginTop: 28, display: 'inline-block', padding: '9px 14px', backgroundColor: C.red, fontSize: 23, fontWeight: 900}}>特别认证路线</div>
          </div>
        </Sheet>
      </Reveal>
      <Route left={430} top={292} width={140} delay={24} />
      <Reveal delay={40} style={{position: 'absolute', left: 590, top: 88}}>
        <Sheet accent={C.cobalt} style={{width: 390, height: 210}}>
          <Stamp size={52} color={C.cobalt} />
          <div data-final-knowledge="notary-proof" style={{marginTop: 14, fontSize: 29, fontWeight: 900}}>所在国公证机关证明</div>
        </Sheet>
      </Reveal>
      <Route left={980} top={188} width={130} color={C.red} delay={62} />
      <Reveal delay={76} style={{position: 'absolute', left: 1130, top: 88}}>
        <Sheet accent={C.red} style={{width: 600, height: 210, backgroundColor: C.redSoft}}>
          <div data-stateful-terminal="identity-evidence" data-final-knowledge="consular-authentication" style={{display: 'flex', alignItems: 'center', gap: 22}}>
            <ShieldCheck size={58} color={C.red} />
            <div style={{fontSize: 31, fontWeight: 900}}>再经中国驻该国使领馆认证</div>
          </div>
        </Sheet>
      </Reveal>
      <Reveal delay={96} style={{position: 'absolute', left: 590, top: 358}}>
        <div data-final-knowledge="identity-treaty-alternative" style={{width: 1140, height: 150, boxSizing: 'border-box', padding: '28px 34px', borderTop: `5px dashed ${C.teal}`, backgroundColor: C.tealSoft, display: 'flex', alignItems: 'center', gap: 24}}>
          <BadgeCheck size={56} color={C.teal} />
          <div><div style={{fontSize: 29, fontWeight: 900, color: C.teal}}>条约路线可以替代上述认证链</div><div style={{marginTop: 10, fontSize: 23}}>履行中国与该国条约规定的证明手续</div></div>
        </div>
      </Reveal>
    </div>
  </Base>
);

export const TranslationAndTrapScene = () => (
  <Base code="03" title="中文译本与日本判决书例题">
    <div data-layout="court-intake-dual-gate" data-visual-anchor="role-pair" data-text-treatments="label-block,thin-underline,external-negation" data-visual-grammar="translation,classification,rejection" data-focal-rule="foreign-language-material-needs-chinese-translation-and-unauthenticated-japanese-judgment-cannot-be-used" data-focal-channels="icon,contrast,enclosure,motion">
      <Reveal delay={4} style={{position: 'absolute', left: 0, top: 42}}>
        <div style={{width: 1730, height: 180, display: 'flex', alignItems: 'center', backgroundColor: C.cobaltSoft, borderLeft: `14px solid ${C.cobalt}`, padding: '24px 30px', boxSizing: 'border-box'}}>
          <Languages size={64} color={C.cobalt} />
          <div style={{marginLeft: 26, fontSize: 31, fontWeight: 900}}>外文书证 / 外文说明资料</div>
          <Route left={570} top={88} width={150} color={C.teal} delay={24} />
          <div data-final-knowledge="chinese-translation" style={{position: 'absolute', left: 770, top: 43, width: 450, padding: '22px 28px', backgroundColor: C.white, borderBottom: `6px solid ${C.teal}`, fontSize: 31, fontWeight: 900}}>必须附中文译本</div>
          <div data-final-knowledge="court-intake" style={{position: 'absolute', right: 42, top: 43, display: 'flex', alignItems: 'center', gap: 16, fontSize: 29, fontWeight: 900, color: C.teal}}><Gavel size={54} />法院收件</div>
        </div>
      </Reveal>
      <Reveal delay={50} style={{position: 'absolute', left: 0, top: 274}}>
        <Sheet dark accent={C.gold} style={{width: 420, height: 320}}>
          <div data-stateful-source="japanese-judgment">
            <FileText size={68} color={C.gold} />
            <div style={{marginTop: 20, fontSize: 34, fontWeight: 900}}>日本法院判决书</div>
            <div data-final-knowledge="japanese-judgment-foreign-public" style={{marginTop: 14, fontSize: 23, color: '#d5dfec'}}>域外公文书证 · 未经相应认证手续</div>
          </div>
        </Sheet>
      </Reveal>
      <Route left={420} top={430} width={130} delay={68} />
      <Reveal delay={82} style={{position: 'absolute', left: 570, top: 274}}>
        <div style={{width: 500, height: 320, display: 'grid', gap: 18}}>
          <div data-final-knowledge="japanese-judgment-documentary" style={{padding: '22px 26px', backgroundColor: C.tealSoft, borderLeft: `12px solid ${C.teal}`, display: 'flex', alignItems: 'center', gap: 20}}><FileCheck2 size={50} color={C.teal} /><div><div style={{fontSize: 31, fontWeight: 900}}>性质：书证</div><div style={{marginTop: 8, fontSize: 23}}>以判决书内容证明案件事实</div></div></div>
          <div data-final-knowledge="not-exempt-fact" style={{padding: '20px 26px', backgroundColor: C.white, borderLeft: `12px solid ${C.gold}`, display: 'flex', alignItems: 'center', gap: 20}}><Landmark size={48} color={C.gold} /><div><div style={{fontSize: 28, fontWeight: 900}}>不是免证事实</div><div style={{marginTop: 8, fontSize: 22}}>并非我国法院判决认定的事实</div></div></div>
        </div>
      </Reveal>
      <Route left={1070} top={430} width={130} color={C.red} delay={102} />
      <Reveal delay={116} style={{position: 'absolute', left: 1220, top: 274}}>
        <div data-stateful-terminal="japanese-judgment" data-final-knowledge="unauthenticated-rejection" style={{width: 510, height: 320, boxSizing: 'border-box', backgroundColor: C.redSoft, border: `5px solid ${C.red}`, padding: '28px 32px', position: 'relative'}}>
          <FileX2 size={68} color={C.red} />
          <div style={{marginTop: 18, fontSize: 32, fontWeight: 950}}>认证缺失</div>
          <div style={{marginTop: 14, fontSize: 27, fontWeight: 850}}>不符合法定形式</div>
          <div style={{position: 'absolute', right: 26, bottom: 24, padding: '10px 16px', backgroundColor: C.red, color: C.white, fontSize: 25, fontWeight: 950}}>不能作为证据使用</div>
        </div>
      </Reveal>
    </div>
  </Base>
);

export const ForeignDocumentAuthentication = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-public-document-route" {...SCENES.publicDocumentRoute}><PublicDocumentRouteScene /></TimelineSequence>
    <TimelineSequence name="02-identity-document-route" {...SCENES.identityDocumentRoute}><IdentityDocumentRouteScene /></TimelineSequence>
    <TimelineSequence name="03-translation-and-trap" {...SCENES.translationAndTrap}><TranslationAndTrapScene /></TimelineSequence>
  </AbsoluteFill>
);
