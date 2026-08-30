import type {CSSProperties, ReactNode} from 'react';
import {Briefcase, CircleAlert, Flag, Hammer, HeartHandshake, Scale, ScrollText, TrendingUp} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  celadon: '#3C5A52',
  celadonDeep: '#2D4540',
  panel: '#F0EBD9',
  panelDim: '#E1DCC6',
  edge: '#5F7370',
  ink: '#243030',
  inkSoft: '#526260',
  slipGreen: '#6F9484',
  virtueGold: '#C6A04C',
  annotRed: '#B04834',
  paper: '#F6F1E0',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 18,
  style,
}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left'
      ? `-${distance}px 0px`
      : from === 'right'
        ? `${distance}px 0px`
        : from === 'down'
          ? `0px -${distance}px`
          : from === 'none'
            ? '0px 0px'
            : `0px ${distance}px`;
  return (
    <div
      data-final-knowledge={marker}
      style={{
        ...style,
        opacity: p,
        translate: interpolate(frame, [delay, delay + span], [origin, '0px 0px'], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.celadon,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(198, 160, 76, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 148px, rgba(45, 69, 64, 0.55) 148px 151px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.virtueGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.celadonDeep, borderLeft: `8px solid ${C.annotRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 61 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.virtueGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.virtueGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.slipGreen}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.slipGreen}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.slipGreen}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.slipGreen}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const SlipTab = ({children, bar = C.annotRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.celadonDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const SlipStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(45, 69, 64, 0.94)', border: `2px solid ${C.virtueGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.annotRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.virtueGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const ConceptFeaturesScene = () => {
  /* data-final-knowledge="concept-features" */
  const jades = [
    {name: '政治性', tone: C.annotRed, icon: <Flag size={30} color={C.paper} strokeWidth={2.2} />, body: '政治性很强的业务工作，也是业务性很强的政治工作'},
    {name: '职业性', tone: C.slipGreen, icon: <Briefcase size={30} color={C.paper} strokeWidth={2.2} />, body: '同法律职业实践活动紧密相连，反映职业活动对从业人员的道德要求'},
    {name: '实践性', tone: C.virtueGold, icon: <Hammer size={30} color={C.paper} strokeWidth={2.2} />, body: '只有在法律实践过程中，才能体现职业道德的水准'},
    {name: '正式性', tone: C.slipGreen, icon: <ScrollText size={30} color={C.paper} strokeWidth={2.2} />, body: '除规章制度·守则·公约等形式外，还通过法律法规·规范性文件表现出来'},
    {name: '更高性', tone: C.annotRed, icon: <TrendingUp size={30} color={C.paper} strokeWidth={2.2} />, body: '更高水准，约束力强制力更明显；吊销执业证书·开除公职的终身执业禁止'},
  ] as const;
  return (
    <Shell code="01" kicker="概念 · 特征" title="主简五玉章：概念与特征">
      <div
        data-layout="master-slip-five-jades"
        data-visual-anchor="main center"
        data-text-treatments="slip-engraving,jade-chips"
        data-visual-grammar="concept-slip,political-jade,professional-jade,practice-jade,formal-jade,higher-jade"
        data-focal-rule="five-features-with-higher-standard"
        data-focal-channels="master-slip,five-jades"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-features" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.slipGreen} watermark={<Scale size={160} color={C.slipGreen} strokeWidth={1.6} />} style={{height: 188, padding: '14px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <SlipTab bar={C.slipGreen} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>法律职业道德的概念</SlipTab>
            <div style={{fontSize: 25, fontWeight: 900, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>
              法官·检察官·律师·公证员等法律职业人员在职业活动过程中应遵循的
              <Mark color={C.slipGreen}>心理意识</Mark>·<Mark color={C.virtueGold}>行为准则</Mark>和<Mark color={C.annotRed}>行为规范</Mark>的总和
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 212, width: 1776, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10}}>
          {jades.map((jade, index) => (
            <Enter key={jade.name} delay={30 + index * 12} from="up" style={{}}>
              <Panel tone={jade.tone} style={{height: 226, padding: '12px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                <span style={{width: 58, height: 58, borderRadius: 29, backgroundColor: jade.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.virtueGold}`}}>{jade.icon}</span>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>{jade.name}</span>
                <div style={{fontSize: 21, fontWeight: 850, color: C.inkSoft, lineHeight: 1.45, textAlign: 'center'}}>{jade.body}</div>
              </Panel>
            </Enter>
          ))}
        </div>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 462, width: 1776}}>
          <SlipStrip style={{height: 128}}>
            <ScrollText size={42} color={C.virtueGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.virtueGold, color: C.celadonDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>教育五途径</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              提高道德<GoldSeal tone={C.slipGreen} delay={160}>认识</GoldSeal> → 确立道德<GoldSeal tone={C.virtueGold} delay={172}>信念</GoldSeal> → 陶冶道德<GoldSeal tone={C.annotRed} delay={184}>情感</GoldSeal> → 锻炼道德<GoldSeal tone={C.slipGreen} delay={196}>意志</GoldSeal> → 养成道德<GoldSeal tone={C.virtueGold} delay={208}>习惯</GoldSeal>
            </span>
          </SlipStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const AnnotationsScene = () => {
  /* data-final-knowledge="ethics-annotations" */
  return (
    <Shell code="02" kicker="点睛三批注" title="朱批三则：道德属性辨析">
      <div
        data-layout="triplet-annotated-hall"
        data-visual-anchor="main center"
        data-text-treatments="annotated-plaques,red-notes"
        data-visual-grammar="nature-note,violation-note,cultivation-note"
        data-focal-rule="ethics-is-morality-not-law-unless-expressly-recognized"
        data-focal-channels="three-annotations,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {[
          {name: '道德属性', tone: C.slipGreen, icon: <Scale size={30} color={C.paper} strokeWidth={2.2} />, body: (
            <>本质上仍属<Mark color={C.slipGreen}>道德规范</Mark>，本身<Mark color={C.annotRed}>不具有国家强制性</Mark>；已被法律<Mark color={C.virtueGold}>明示认可</Mark>的除外 —— 兼具道德与法律双重属性</>
          )},
          {name: '违反 ≠ 违法', tone: C.annotRed, icon: <CircleAlert size={30} color={C.paper} strokeWidth={2.2} />, body: (
            <>违反职业道德<Mark color={C.annotRed}>不等同于违法行为</Mark>，二者责任边界要分清</>
          )},
          {name: '培育之道', tone: C.virtueGold, icon: <HeartHandshake size={30} color={C.paper} strokeWidth={2.2} />, body: (
            <>职业道德的培育主要依靠<Mark color={C.virtueGold}>道德教化</Mark>，而非强制灌输</>
          )},
        ].map((note, index) => (
          <Enter key={note.name} delay={6 + index * 22} from="up" marker={index === 0 ? 'ethics-annotations' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={note.tone} style={{height: 300, padding: '16px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 82, height: 82, borderRadius: 41, backgroundColor: note.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.virtueGold}`}}>{note.icon}</span>
              <span style={{fontSize: 28, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{note.name}</span>
              <div style={{width: 100, height: 3, backgroundColor: note.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>{note.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 336, width: 1776}}>
          <SlipStrip style={{height: 128}}>
            <Scale size={42} color={C.virtueGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.annotRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              职业道德本质是<Mark color={C.paper}>道德</Mark>：不具国家强制力 · 法律明示认可除外
              <br />
              违反职业道德 ≠ 违法；培育靠<Mark color={C.paper}>道德教化</Mark>
            </span>
          </SlipStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalProfessionalEthics = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-features" {...SCENES.conceptFeatures}>
      <ConceptFeaturesScene />
    </TimelineSequence>
    <TimelineSequence name="02-annotations" {...SCENES.annotations}>
      <AnnotationsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
