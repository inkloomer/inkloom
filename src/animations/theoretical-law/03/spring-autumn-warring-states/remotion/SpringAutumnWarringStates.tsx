import type {CSSProperties, ReactNode} from 'react';
import {Flame, Gavel, Landmark, Scale, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  earth: '#4A3828',
  earthDeep: '#382A1E',
  bronze: '#E8DDBE',
  bronzeDim: '#D8CDA8',
  bronzeEdge: '#6E6250',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  ochre: '#C08A2E',
  ochrePale: '#EDDDB4',
  seal: '#A3412F',
  sealPale: '#EFD0C4',
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
      backgroundColor: C.earth,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.ochre}10 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.seal}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.ochre}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.earthDeep, borderLeft: `8px solid ${C.seal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 48 · {code}</span>
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
        borderBottom: `2px solid ${C.seal}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.ochrePale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Bronze = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.bronze, border: `2px solid ${C.bronzeEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.seal}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.earthDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const OchreChip = ({tone = C.ochre, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.seal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(56, 42, 30, 0.92)', border: `2px solid ${C.seal}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const CastingScene = () => {
  /* data-final-knowledge="casting-heading" data-final-knowledge="first-casting-plaque" data-final-knowledge="second-casting-plaque" data-final-knowledge="date-contrast-note" */
  return (
    <Shell code="01" kicker="铸刑鼎·铸刑书" title="两次公布成文法">
      <div
        data-layout="twin-cauldron-casting-plaques"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="first-casting-plaque,second-casting-plaque,date-contrast-note"
        data-focal-rule="two-castings-two-states-two-moments-published-law"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="casting-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.bronze, border: `3px solid ${C.bronzeEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              从秘密到公开——<InkUnderline delay={36}>成文法诞生</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="first-casting-plaque" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 290}}>
          <Bronze tone={C.ochre} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Flame size={38} color={C.ochre} strokeWidth={2.3} />
              <Landmark size={30} color={C.inkSoft} strokeWidth={2.2} style={{marginLeft: 'auto'}} />
              <LabelTab bar={C.ochre}>第一次 · 铸刑书</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>
              <InkUnderline delay={110}>公元前 536 年</InkUnderline> · 郑国子产
            </div>
            <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>中国历史上第一次公布成文法的活动</div>
            <div style={{marginTop: 'auto'}}>
              <SealStamp delay={130} size={24}>第一次</SealStamp>
            </div>
          </Bronze>
        </Enter>
        <Enter delay={64} from="right" marker="second-casting-plaque" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 290}}>
          <Bronze tone={C.seal} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Flame size={38} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>第二次 · 铸刑鼎</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>
              <InkUnderline delay={130}>公元前 513 年</InkUnderline> · 晋国赵鞅
            </div>
            <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>中国历史上第二次公布成文法的活动 · 铸范宣子刑书于鼎</div>
            <div style={{marginTop: 'auto'}}>
              <SealStamp delay={150} size={24} tone={C.ochre}>第二次</SealStamp>
            </div>
          </Bronze>
        </Enter>
        <Enter delay={170} from="up" marker="date-contrast-note" style={{position: 'absolute', left: 40, top: 418, width: 1736}}>
          <DarkStrip style={{height: 92}}>
            <span style={{padding: '4px 13px', backgroundColor: C.seal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>对比</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              536 郑国子产 <Soft color={C.ochrePale}>铸刑书</Soft> → 513 晋国赵鞅 <Soft color={C.ochrePale}>铸刑鼎</Soft>——两次公布·两个国家
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const FajingScene = () => {
  /* data-final-knowledge="fajing-heading" data-final-knowledge="status-plaque" data-final-knowledge="six-chapter-scroll" data-final-knowledge="jail-capture-note" */
  return (
    <Shell code="02" kicker="《法经》" title="六篇：盗贼网捕杂具">
      <div
        data-layout="fajing-six-chapter-scroll"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="status-plaque,six-chapter-scroll,jail-capture-note"
        data-focal-rule="six-chapters-map-the-criminal-and-procedural-framework"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="fajing-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.bronze, border: `3px solid ${C.bronzeEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              李悝《法经》——<InkUnderline delay={36}>第一部比较系统的封建成文法典</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="status-plaque" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 110}}>
          <Bronze tone={C.ochre} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Scale size={36} color={C.ochre} strokeWidth={2.3} />
            <ScrollText size={30} color={C.seal} strokeWidth={2.2} style={{marginLeft: 12}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.5, flex: 1}}>
              战国·魏国·李悝制定——中国历史上第一部<Soft color={C.ochre}>比较系统的封建成文法典</Soft>
            </span>
          </Bronze>
        </Enter>
        <Enter delay={70} from="up" marker="six-chapter-scroll" style={{position: 'absolute', left: 40, top: 238, width: 1736, height: 180}}>
          <Bronze tone={C.seal} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
            <LabelTab>六篇结构</LabelTab>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              {['盗', '贼', '网（囚）', '捕', '杂', '具'].map((ch, i) => (
                <span key={ch} style={{display: 'inline-flex', padding: '6px 16px', backgroundColor: i === 5 ? C.seal : `${C.ochre}18`, color: i === 5 ? C.paper : C.ink, fontSize: 24, fontWeight: 950, border: `2px solid ${C.seal}`}}>{ch}</span>
              ))}
            </div>
            <div style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>
              杂法规定「六禁」：淫禁·狡禁·城禁·嬉禁·徒禁·金禁 ｜ 具法＝定罪量刑的从轻从重原则（相当于近代总则）
            </div>
          </Bronze>
        </Enter>
        <Enter delay={140} from="up" marker="jail-capture-note" style={{position: 'absolute', left: 40, top: 446, width: 1736}}>
          <DarkStrip style={{height: 92}}>
            <span style={{padding: '4px 13px', backgroundColor: C.seal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>记忆</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              网 · 捕二篇多属<Soft color={C.ochrePale}>诉讼法范畴</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ShangYangScene = () => {
  /* data-final-knowledge="shang-yang-heading" data-final-knowledge="reform-plate" data-final-knowledge="harsh-law-note" */
  return (
    <Shell code="03" kicker="商鞅变法" title="改法为律，富国强兵">
      <div
        data-layout="shang-yang-reform-plate"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="law-to-lin-strip,economy-strip,harsh-law-strip"
        data-focal-rule="four-reforms-transform-law-from-privilege-to-state-instrument"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="shang-yang-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.bronze, border: `3px solid ${C.bronzeEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              商鞅变法 · <InkUnderline delay={36}>改法为律</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="reform-plate" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 320}}>
          <Bronze tone={C.ochre} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={36} color={C.ochre} strokeWidth={2.3} />
              <LabelTab bar={C.ochre}>四大改革措施</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.7}}>
              ① <Soft color={C.ochre}>改法为律</Soft>——扩充法律内容与调整范围
              <br />
              ② <Soft color={C.ochre}>富国强兵</Soft>——用法律手段推行
              <br />
              ③ <Soft color={C.seal}>剥夺旧贵族特权</Soft>
              <br />
              ④ <Soft color={C.seal}>明法重刑</Soft>
            </div>
          </Bronze>
        </Enter>
        <Enter delay={100} from="up" marker="harsh-law-note" style={{position: 'absolute', left: 40, top: 450, width: 1736, height: 140}}>
          <Bronze tone={C.seal} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Users size={36} color={C.seal} strokeWidth={2.3} />
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55, flex: 1}}>
              明法重刑五要：<Soft color={C.seal}>以法治国</Soft> · <Soft color={C.seal}>轻罪重罚</Soft> · <Soft color={C.seal}>不赦不宥</Soft> · <Soft color={C.seal}>鼓励告奸</Soft> · <Soft color={C.seal}>实行连坐</Soft>
            </div>
            <span style={{marginLeft: 'auto'}}>
              <SealStamp delay={160} size={24}>五要连坐</SealStamp>
            </span>
          </Bronze>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 614, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              改法为律 · 富国强兵 · 剥夺特权 · 明法重刑——<Soft color={C.ochrePale}>法家奠基</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SpringAutumnWarringStates = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-casting" {...SCENES.casting}>
      <CastingScene />
    </TimelineSequence>
    <TimelineSequence name="02-fajing" {...SCENES.fajing}>
      <FajingScene />
    </TimelineSequence>
    <TimelineSequence name="03-shang-yang" {...SCENES.shangYang}>
      <ShangYangScene />
    </TimelineSequence>
  </AbsoluteFill>
);