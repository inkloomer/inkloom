import type {CSSProperties, ReactNode} from 'react';
import {ArrowLeftRight, BookOpen, Flag, Heart, Landmark, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  teal: '#253D44',
  tealDeep: '#1C2F35',
  stone: '#EFE8D2',
  stoneDim: '#E0D7BB',
  stoneEdge: '#646A5E',
  ink: '#2B2721',
  inkSoft: '#56544A',
  gold: '#B08A38',
  goldPale: '#EADBB2',
  crimson: '#A93B32',
  crimsonPale: '#EFD0C8',
  paper: '#F6F1E2',
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
      backgroundColor: C.teal,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 146px, ${C.gold}0E 146px 148px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.tealDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 28 · {code}</span>
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
        borderBottom: `2px solid ${C.gold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Pillar = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.stone, border: `2px solid ${C.stoneEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.tealDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const BannerChip = ({tone = C.crimson, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${tone}`,
      backgroundColor: solid ? tone : `${tone}14`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, delay = 0, size = 26, tone = C.crimson}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}10`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

const InkUnderline = ({children, color = C.crimson, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -6,
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(28, 47, 53, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const FivePrinciplesScene = () => {
  /* data-final-knowledge="principles-heading" data-final-knowledge="colonnade-row" data-final-knowledge="party-leadership-note" */
  const pillars = [
    {name: '党的领导', tone: C.crimson, core: '党的领导是中国特色社会主义最本质的特征'},
    {name: '人民主权', tone: C.gold, core: '国家的一切权力属于人民'},
    {name: '基本人权', tone: C.crimson, core: '宪法确认和保障公民基本权利'},
    {name: '法治', tone: C.gold, core: '依法治国 · 1999 年入宪'},
    {name: '权力制约', tone: C.crimson, core: '权力相互监督牵制，保障公民权利'},
  ] as const;
  return (
    <Shell code="01" kicker="五大原则" title="宪法的五根廊柱">
      <div
        data-layout="five-principle-colonnade-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="party-leadership-pillar,sovereignty-rights-pillars,law-checks-pillars"
        data-focal-rule="party-leadership-ranks-first-among-five-principles"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="principles-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.stone, border: `3px solid ${C.stoneEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              五根廊柱，撑起一部宪法
            </span>
          </div>
        </Enter>
        {pillars.map((pillar, index) => (
          <Enter key={pillar.name} delay={28 + index * 18} from="up" style={{position: 'absolute', left: 40 + index * 356, top: 104, width: 324, height: 330}}>
            <Pillar tone={pillar.tone} style={{height: '100%', padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {index === 0 ? <Flag size={38} color={pillar.tone} strokeWidth={2.3} /> : index === 1 ? <Users size={38} color={pillar.tone} strokeWidth={2.3} /> : index === 2 ? <Heart size={38} color={pillar.tone} strokeWidth={2.3} /> : index === 3 ? <BookOpen size={38} color={pillar.tone} strokeWidth={2.3} /> : <Scale size={38} color={pillar.tone} strokeWidth={2.3} />}
                <span style={{fontSize: 20, fontWeight: 950, color: C.gold, letterSpacing: 3}}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div style={{fontSize: 27, fontWeight: 950, color: C.ink}}>{pillar.name}</div>
              <div style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5, marginTop: 6}}>{pillar.core}</div>
            </Pillar>
          </Enter>
        ))}
        <Enter delay={150} from="up" marker="party-leadership-note" style={{position: 'absolute', left: 40, top: 470, width: 1736}}>
          <Pillar tone={C.crimson} style={{height: 120, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              历部宪法的制定、修改和实施，都在<Soft color={C.crimson}>党的领导下</Soft>有序进行——社会主义制度是我国<Soft color={C.crimson}>最根本的制度</Soft>
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={150} size={24}>党领导＝最本质特征</Stamp>
            </span>
          </Pillar>
        </Enter>
      </div>
    </Shell>
  );
};

export const RightsLawScene = () => {
  /* data-final-knowledge="duo-heading" data-final-knowledge="rights-bench" data-final-knowledge="law-bench" data-final-knowledge="official-control-note" */
  return (
    <Shell code="02" kicker="人权与法治" title="两大入宪原则">
      <div
        data-layout="rights-law-duo-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="human-rights-bench,rule-of-law-bench,official-control-note"
        data-focal-rule="rights-and-rule-of-law-entered-the-constitution-in-2004-and-1999"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="duo-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.stone, border: `3px solid ${C.stoneEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              人权<InkUnderline delay={36}>2004 入宪</InkUnderline> · 依法治国<InkUnderline color={C.gold} delay={48}>1999 入宪</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="rights-bench" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 300}}>
          <Pillar tone={C.crimson} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Heart size={40} color={C.crimson} strokeWidth={2.3} />
              <LabelTab bar={C.crimson}>基本人权原则</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              人权＝人之所以为人<Soft color={C.crimson}>就应当享有</Soft>的权利
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              宪法确认保障公民<Soft color={C.crimson}>基本权利和自由</Soft>——2004 年增加「<Soft color={C.crimson}>国家尊重和保障人权</Soft>」
            </div>
          </Pillar>
        </Enter>
        <Enter delay={56} from="right" marker="law-bench" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 300}}>
          <Pillar tone={C.gold} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookOpen size={40} color={C.gold} strokeWidth={2.3} />
              <LabelTab>法治原则</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              相对于<Soft color={C.inkSoft}>人治</Soft>的治国方式——依法治国 1999 年入宪
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              国家事务<Soft color={C.gold}>法律化、制度化</Soft>，严格依法管理
            </div>
          </Pillar>
        </Enter>
        <Enter delay={150} from="up" marker="official-control-note" style={{position: 'absolute', left: 40, top: 440, width: 1736}}>
          <Pillar tone={C.inkSoft} style={{height: 130, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>法治既治官也治民，核心在<Soft color={C.crimson}>治官（控权）</Soft></span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={150} size={24}>考试高频：治官</Stamp>
            </span>
          </Pillar>
        </Enter>
      </div>
    </Shell>
  );
};

export const ChecksStanceScene = () => {
  /* data-final-knowledge="checks-heading" data-final-knowledge="divide-row" data-final-knowledge="stance-board" data-final-knowledge="independence-negation" */
  return (
    <Shell code="03" kicker="权力制约" title="分权与监督，我国立场">
      <div
        data-layout="checks-divide-with-stance-board"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="separation-supervision-divide,npc-stance-board,independence-negation"
        data-focal-rule="china-practices-supervision-not-separation-of-powers"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="checks-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.stone, border: `3px solid ${C.stoneEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              权力制约＝权利制约权力 ＋ <InkUnderline delay={36}>权力制约权力</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="divide-row" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 190}}>
          <Pillar tone={C.gold} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <ArrowLeftRight size={38} color={C.gold} strokeWidth={2.3} />
            <div style={{display: 'flex', gap: 16, flex: 1}}>
              <div style={{flex: 1, border: `2px solid ${C.stoneEdge}`, backgroundColor: C.stoneDim, padding: '12px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>资本主义国家 → <Soft color={C.gold}>分权原则</Soft></div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.stoneEdge}`, backgroundColor: C.stoneDim, padding: '12px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>社会主义国家 → <Soft color={C.crimson}>监督原则</Soft></div>
              </div>
            </div>
          </Pillar>
        </Enter>
        <Enter delay={70} from="up" marker="stance-board" style={{position: 'absolute', left: 40, top: 318, width: 1736, height: 210}}>
          <Pillar tone={C.crimson} style={{height: '100%', padding: '16px 24px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <LabelTab bar={C.crimson}>我国立场 · 反对三权分立</LabelTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              我国采用<Soft color={C.crimson}>人大政体</Soft>——司法机关由人大<Soft color={C.gold}>产生 · 对人大负责 · 受人大监督</Soft>
            </div>
            <div data-final-knowledge="independence-negation" style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              不存在西方意义下的<Soft color={C.crimson}>司法独立</Soft>（组织意义）；党领导一切——司法机关也不能在政治上独立
            </div>
          </Pillar>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 564, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <Landmark size={34} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              一句话：<Soft color={C.goldPale}>监督代替分立</Soft>——权力制约的最后目的是保障公民权利
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstitutionPrinciples = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-five-principles" {...SCENES.fivePrinciples}>
      <FivePrinciplesScene />
    </TimelineSequence>
    <TimelineSequence name="02-rights-law" {...SCENES.rightsLaw}>
      <RightsLawScene />
    </TimelineSequence>
    <TimelineSequence name="03-checks-stance" {...SCENES.checksStance}>
      <ChecksStanceScene />
    </TimelineSequence>
  </AbsoluteFill>
);
