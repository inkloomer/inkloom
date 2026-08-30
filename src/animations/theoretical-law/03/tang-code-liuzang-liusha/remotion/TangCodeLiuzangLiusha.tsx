import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Gavel, History, Landmark, Scale, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  vermillion: '#7A2525',
  vermillionDeep: '#5C1D1D',
  scroll: '#F0E6CE',
  scrollDim: '#E2D5B8',
  scrollEdge: '#6E5A48',
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
      backgroundColor: C.vermillion,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 130px, ${C.gold}0E 130px 132px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.vermillionDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 51 · {code}</span>
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

const ScrollPanel = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.scroll, border: `2px solid ${C.scrollEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.vermillionDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const InkChip = ({tone = C.gold, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', border: `2px solid ${tone}`, backgroundColor: solid ? tone : `${tone}14`, fontSize: 23, fontWeight: 880, color: solid ? C.paper : C.ink}}>{children}</span>
);

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '8px 16px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}10`, fontSize: size, fontWeight: 950, letterSpacing: 2, opacity: p, scale: 0.86 + p * 0.14, rotate: '-3deg'}}>{children}</span>
  );
};

const InkUnderline = ({children, color = C.seal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -6, height: 4, backgroundColor: color, scale: `${prog(frame, delay, 22)} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(92, 29, 29, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const LiuzangScene = () => {
  /* data-final-knowledge="zang-heading" data-final-knowledge="official-group" data-final-knowledge="common-group" data-final-knowledge="split-criterion-note" */
  const officials = [
    {name: '受财枉法', text: '收受财物致枉法裁判'},
    {name: '受财不枉法', text: '收受财物但未枉法裁判'},
    {name: '受所监临', text: '收受辖内百姓或下属财物'},
  ] as const;
  const commons = [
    {name: '强盗', text: '暴力获取公私财物'},
    {name: '窃盗', text: '隐蔽手段据为己有'},
    {name: '坐赃', text: '非因职权之便非法收受财物'},
  ] as const;
  return (
    <Shell code="01" kicker="六赃" title="官吏涉赃 · 常人涉赃">
      <div
        data-layout="six-zang-two-group-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="official-group,common-group,split-criterion-note"
        data-focal-rule="six-crimes-split-by-official-versus-common-person"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="zang-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.scroll, border: `3px solid ${C.scrollEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              六赃：<InkUnderline delay={36}>身份定类</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="official-group" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 330}}>
          <ScrollPanel tone={C.gold} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>官吏涉赃</LabelTab>
            </div>
            {officials.map((o, i) => (
              <div key={o.name} style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.gold, width: 28}}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 220}}>{o.name}</span>
                <span style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, flex: 1}}>{o.text}</span>
              </div>
            ))}
          </ScrollPanel>
        </Enter>
        <Enter delay={64} from="right" marker="common-group" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 330}}>
          <ScrollPanel tone={C.seal} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Users size={38} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>常人涉赃</LabelTab>
            </div>
            {commons.map((c, i) => (
              <div key={c.name} style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.seal, width: 28}}>{String(i + 4).padStart(2, '0')}</span>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 220}}>{c.name}</span>
                <span style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, flex: 1}}>{c.text}</span>
              </div>
            ))}
          </ScrollPanel>
        </Enter>
        <Enter delay={170} from="up" marker="split-criterion-note" style={{position: 'absolute', left: 40, top: 470, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.vermillionDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>分界</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              前三＝官吏<Soft color={C.goldPale}>以职权</Soft>涉赃 ｜ 后三＝常人涉赃（强盗·窃盗·坐赃）
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LiushaScene = () => {
  /* data-final-knowledge="sha-heading" data-final-knowledge="intent-pair" data-final-knowledge="fight-play-pair" data-final-knowledge="error-negligence-pair" */
  const pairs = [
    {a: {name: '谋杀', text: '二人以上合谋杀人'}, b: {name: '故杀', text: '无事而杀，情急产生杀人意念'}, label: '有预谋或故意'},
    {a: {name: '斗杀', text: '原无杀心，因相斗殴而杀人（处绞）'}, b: {name: '戏杀', text: '以力共戏，至死和同'}, label: '斗殴与游戏'},
    {a: {name: '误杀', text: '斗殴而误杀伤旁人'}, b: {name: '过失杀', text: '耳目所不及，思虑所不到'}, label: '误失'},
  ] as const;
  return (
    <Shell code="02" kicker="六杀" title="谋杀·故杀·斗杀·戏杀·误杀·过失杀">
      <div
        data-layout="six-kill-severity-pair-scroll"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="intent-pair,fight-play-pair,error-negligence-pair"
        data-focal-rule="six-kill-types-span-from-intent-to-pure-accident"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="sha-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.scroll, border: `3px solid ${C.scrollEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              六杀：<InkUnderline delay={36}>从故意到过失</InkUnderline>的光谱
            </span>
          </div>
        </Enter>
        {pairs.map((pair, index) => (
          <Enter key={pair.label} delay={30 + index * 26} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 126, width: 1736, height: 110}}>
            <ScrollPanel tone={index % 2 === 0 ? C.gold : C.seal} style={{height: '100%', padding: '12px 24px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
              <span style={{fontSize: 20, fontWeight: 950, color: C.gold, letterSpacing: 3}}>{pair.label}</span>
              <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                {index === 0 ? <Gavel size={32} color={C.gold} strokeWidth={2.3} /> : index === 1 ? <Users size={32} color={C.gold} strokeWidth={2.3} /> : <BookOpen size={32} color={C.gold} strokeWidth={2.3} />}
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 160}}>{pair.a.name}</span>
                <span style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, flex: 1}}>{pair.a.text}</span>
                <span style={{width: 2, height: 44, backgroundColor: C.scrollEdge}} />
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 160}}>{pair.b.name}</span>
                <span style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, flex: 1}}>{pair.b.text}</span>
              </div>
            </ScrollPanel>
          </Enter>
        ))}
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 500, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.vermillionDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              谋→故→斗→戏→误→过失：主观恶性<InkUnderline color={C.goldPale} delay={190}>递减</InkUnderline>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const EvolutionScene = () => {
  /* data-final-knowledge="evolution-heading" data-final-knowledge="lineage-strip" */
  const eras = [
    {era: '北魏', text: '故杀最早源于此——临时起意杀人，近「激情杀人」'},
    {era: '晋朝', text: '张斐将「谋」释为「二人对议」'},
    {era: '唐律', text: '谋杀不视为必要共犯，单独一人亦可构成'},
    {era: '清代', text: '以「事前有无预谋」为唯一标准，彻底突破必要共犯观念'},
  ] as const;
  return (
    <Shell code="03" kicker="谋杀演变" title="故杀与谋杀的历史流变">
      <div
        data-layout="murder-evolution-lineage-strip"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="bei-wei-origin,jin-interpretation,tang-qing-development"
        data-focal-rule="the-definition-of-murder-evolved-across-four-dynasties"
        data-focal-channels="icon,contrast,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="evolution-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.scroll, border: `3px solid ${C.scrollEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              <InkUnderline delay={36}>谋杀与故杀</InkUnderline>的演变
            </span>
          </div>
        </Enter>
        {eras.map((item, index) => (
          <Enter key={item.era} delay={28 + index * 24} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 104, width: 1736, height: 88}}>
            <ScrollPanel tone={index % 2 === 0 ? C.gold : C.seal} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              <span style={{display: 'inline-flex', padding: '4px 14px', backgroundColor: index % 2 === 0 ? C.brass : C.seal, color: C.paper, fontSize: 22, fontWeight: 950, flexShrink: 0}}>{item.era}</span>
              <span style={{width: 2, height: 44, backgroundColor: C.scrollEdge}} />
              <span style={{fontSize: 22, fontWeight: 880, color: C.ink, flex: 1}}>{item.text}</span>
            </ScrollPanel>
          </Enter>
        ))}
        <Enter delay={180} from="up" marker="lineage-strip" style={{position: 'absolute', left: 40, top: 540, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <History size={34} color={C.goldPale} strokeWidth={2.2} />
            <BookOpen size={30} color={C.goldPale} strokeWidth={2.2} style={{marginLeft: 8}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              从共犯说到<Soft color={C.goldPale}>预谋标准</Soft>——谋杀定义不断精细
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const TangCodeLiuzangLiusha = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-liuzang" {...SCENES.liuzang}>
      <LiuzangScene />
    </TimelineSequence>
    <TimelineSequence name="02-liusha" {...SCENES.liusha}>
      <LiushaScene />
    </TimelineSequence>
    <TimelineSequence name="03-evolution" {...SCENES.evolution}>
      <EvolutionScene />
    </TimelineSequence>
  </AbsoluteFill>
);
