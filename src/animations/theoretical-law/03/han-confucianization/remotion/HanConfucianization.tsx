import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Gavel, Heart, Landmark, Scale, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  silk: '#5C2E2E',
  silkDeep: '#472323',
  panel: '#F0E6CE',
  panelDim: '#E2D5B8',
  panelEdge: '#6E5A48',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  gold: '#B08A38',
  goldPale: '#EADBB2',
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
      backgroundColor: C.silk,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 130px, ${C.gold}10 130px 132px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.silkDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 49 · {code}</span>
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

const Silk = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.panelEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.silkDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const GoldChip = ({tone = C.gold, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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
  <div style={{backgroundColor: 'rgba(71, 35, 35, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const PetitionMercyScene = () => {
  /* data-final-knowledge="petition-heading" data-final-knowledge="petition-plaque" data-final-knowledge="mercy-plaque" data-final-knowledge="scope-note" */
  return (
    <Shell code="01" kicker="上请与恤刑" title="贵族优待 · 弱者恤刑">
      <div
        data-layout="twin-silk-petition-bench"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="petition-plaque,mercy-plaque,scope-note"
        data-focal-rule="aristocrats-petit-the-emperor-while-the-vulnerable-receive-mercy"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="petition-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              汉代法律儒家化 · 五大制度
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="petition-plaque" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 300}}>
          <Silk tone={C.gold} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>上请</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              汉高祖七年诏：「郎中有罪<Soft color={C.gold}>耐以上，请之</Soft>」
              <br />
              宣帝·平帝：百石以上官吏·公侯及子孙可享「上请」
              <br />
              东汉适用面<Soft color={C.seal}>渐宽</Soft>——徒刑二年到死刑均可适用
            </div>
            <div style={{marginTop: 'auto'}}>
              <SealStamp delay={140} size={24}>贵族官僚优待</SealStamp>
            </div>
          </Silk>
        </Enter>
        <Enter delay={64} from="right" marker="mercy-plaque" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 300}}>
          <Silk tone={C.seal} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Heart size={38} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>恤刑</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              对<Soft color={C.seal}>80岁以上老人</Soft>、<Soft color={C.seal}>8岁以下幼童</Soft>、孕妇、盲人、侏儒的优待
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 870, color: C.inkSoft}}>儒家「矜老恤幼」思想的体现</div>
          </Silk>
        </Enter>
        <Enter delay={170} from="up" marker="scope-note" style={{position: 'absolute', left: 40, top: 434, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.silkDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>五制</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              上请 · 恤刑 · 亲亲得相首匿 · 春秋决狱 · 秋冬行刑——<Soft color={C.goldPale}>儒家化五柱</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConcealSpringScene = () => {
  /* data-final-knowledge="conceal-heading" data-final-knowledge="conceal-plaque" data-final-knowledge="spring-plaque" data-final-knowledge="core-principle-note" */
  return (
    <Shell code="02" kicker="首匿与春秋决狱" title="亲亲相隐 · 论心定罪">
      <div
        data-layout="conceal-spring-silk-pair"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="conceal-plaque,spring-plaque,core-principle-note"
        data-focal-rule="concealment-preserves-family-and-spring-annals-judge-by-intent"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="conceal-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              「父为子隐，子为父隐」——<InkUnderline delay={36}>汉宣帝确立</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="conceal-plaque" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 290}}>
          <Silk tone={C.gold} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Heart size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>亲亲得相首匿</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              卑幼首匿尊长：<Soft color={C.gold}>不追究</Soft>刑事责任
              <br />
              尊长首匿卑幼：处死者<Soft color={C.seal}>可上请</Soft>
            </div>
          </Silk>
        </Enter>
        <Enter delay={64} from="right" marker="spring-plaque" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 290}}>
          <Silk tone={C.seal} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookOpen size={38} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>春秋决狱</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              引用儒家经典<Soft color={C.seal}>断案</Soft>——「论心定罪」
              <br />
              <Soft color={C.gold}>志善而违于法者免</Soft> ｜ <Soft color={C.seal}>志恶而合于法者诛</Soft>
            </div>
          </Silk>
        </Enter>
        <Enter delay={170} from="up" marker="core-principle-note" style={{position: 'absolute', left: 40, top: 420, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.silkDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>核心</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              儒家伦理<InkUnderline color={C.goldPale} delay={190}>直接介入</InkUnderline>司法审判
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const AutumnWinterScene = () => {
  /* data-final-knowledge="autumn-heading" data-final-knowledge="timing-plaque" data-final-knowledge="inheritance-note" */
  return (
    <Shell code="03" kicker="秋冬行刑" title="秋霜降后，冬至之前">
      <div
        data-layout="seasonal-execution-verdict-panel"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="timing-plaque,inheritance-note"
        data-focal-rule="death-sentences-execute-only-between-autumn-frost-and-winter-solstice"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="autumn-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              除谋反大逆「决不待时」外——死刑限于<InkUnderline delay={36}>秋冬</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="timing-plaque" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 280}}>
          <Silk tone={C.gold} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ScrollText size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>秋冬行刑 · 时间限制</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              死刑在<Soft color={C.gold}>秋霜降后 · 冬至前</Soft>执行
            </div>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8}}>
              <GoldChip tone={C.seal} solid>唐律「立春后不决死刑」</GoldChip>
              <GoldChip tone={C.seal} solid>明清「秋审」</GoldChip>
              <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, alignSelf: 'center'}}>均源于此</span>
            </div>
          </Silk>
        </Enter>
        <Enter delay={120} from="up" marker="inheritance-note" style={{position: 'absolute', left: 40, top: 410, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.silkDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>流变</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              汉 · 秋冬行刑 → 唐 · 立春不决死 → 明清 · <Soft color={C.goldPale}>秋审朝审</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const HanConfucianization = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-petition-mercy" {...SCENES.petitionMercy}>
      <PetitionMercyScene />
    </TimelineSequence>
    <TimelineSequence name="02-conceal-spring" {...SCENES.concealSpring}>
      <ConcealSpringScene />
    </TimelineSequence>
    <TimelineSequence name="03-autumn-winter" {...SCENES.autumnWinter}>
      <AutumnWinterScene />
    </TimelineSequence>
  </AbsoluteFill>
);