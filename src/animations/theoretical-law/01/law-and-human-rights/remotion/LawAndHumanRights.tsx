import type {CSSProperties, ReactNode} from 'react';
import {BookMarked, Flame, Landmark, Scale, TrendingUp} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  vigil: '#42262B',
  vigilDeep: '#331D21',
  parch: '#F2E9D2',
  parchDim: '#E4D9BC',
  parchEdge: '#6E6052',
  ink: '#2B2721',
  inkSoft: '#59503F',
  gold: '#C99B3F',
  goldPale: '#EDDCB0',
  ember: '#B0452F',
  emberPale: '#F0D2C4',
  wax: '#EFE6CE',
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
      backgroundColor: C.vigil,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 144px, ${C.gold}0D 144px 146px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.vigilDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 22 · {code}</span>
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

const Parch = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.parch, border: `2px solid ${C.parchEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.vigilDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
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
      color: solid ? C.vigilDeep : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, delay = 0, size = 26, tone = C.ember}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.ember, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(51, 29, 33, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const ConceptHistoryScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="concept-heading" data-final-knowledge="rights-definition" data-final-knowledge="historic-concept-note" data-final-knowledge="expansion-trend-band" */
  return (
    <Shell code="01" kicker="人权的概念" title="人权：作为人应有的权利">
      <div
        data-layout="definition-flame-plaque"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="rights-definition,historic-concept-note,expansion-trend-band"
        data-focal-rule="human-rights-belong-to-everyone-by-being-human"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parch, border: `3px solid ${C.parchEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              人权＝每个人<InkUnderline delay={36}>作为人</InkUnderline>应该享有或享有的权利
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="rights-definition" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 150}}>
          <Parch tone={C.gold} style={{height: '100%', padding: '18px 26px', display: 'flex', alignItems: 'center', gap: 20}}>
            <Flame size={52} color={C.gold} strokeWidth={2.2} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <LabelTab>定义</LabelTab>
              <span style={{fontSize: 25, fontWeight: 900, color: C.ink}}>
                凭「人」的身份即主张——不需要任何<Soft color={C.ember}>额外资格</Soft>
              </span>
            </div>
          </Parch>
        </Enter>
        <Enter delay={60} from="left" marker="historic-concept-note" style={{position: 'absolute', left: 40, top: 286, width: 850, height: 170}}>
          <Parch tone={C.ember} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.ember}>人权是一个历史概念</LabelTab>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              内容范围随<Soft color={C.ember}>人类历史发展</Soft>而变化
            </div>
          </Parch>
        </Enter>
        <Enter delay={92} from="right" marker="expansion-trend-band" style={{position: 'absolute', left: 930, top: 286, width: 886, height: 170}}>
          <Parch tone={C.gold} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
            <div style={{display: 'flex', alignItems: 'flex-end', gap: 10, height: 96}}>
              {[30, 48, 70, 96].map((height, index) => (
                <span key={height} style={{width: 22, height: prog(frame, 110 + index * 12, 14) * height, backgroundColor: C.gold, opacity: 0.75}} />
              ))}
            </div>
            <TrendingUp size={40} color={C.ember} strokeWidth={2.3} />
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>
              有<InkUnderline color={C.gold} delay={140}>不断扩张</InkUnderline>的趋势
            </span>
          </Parch>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 494, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.vigilDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              生而为人即有之——范围<Soft color={C.goldPale}>随历史长</Soft>，清单<Soft color={C.goldPale}>越拉越长</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NaturePriorityScene = () => {
  /* data-final-knowledge="priority-heading" data-final-knowledge="priority-position-board" data-final-knowledge="moral-right-note" data-final-knowledge="evaluation-standard-note" */
  return (
    <Shell code="02" kicker="人权的性质" title="先于国家与法的权利">
      <div
        data-layout="priority-position-board"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="pre-state-priority,moral-right-nature,evaluation-standard-role"
        data-focal-rule="rights-precede-state-and-law-in-logic"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="priority-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parch, border: `3px solid ${C.parchEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              人凭自己是人而享有——<InkUnderline delay={36}>逻辑上先于国家和法</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="priority-position-board" style={{position: 'absolute', left: 40, top: 104, width: 880, height: 300}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 880, height: 300}}>
            <Parch tone={C.gold} style={{position: 'absolute', left: 0, top: 0, width: 400, height: 190, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 28, fontWeight: 950, color: C.ink}}>
                <Flame size={38} color={C.gold} strokeWidth={2.3} />
                人权
              </span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>人凭自己是人而享有</span>
            </Parch>
            <span style={{position: 'absolute', left: 400, top: 88, width: 90, height: 5, backgroundColor: C.gold, scaleX: prog(120, 20), transformOrigin: 'left center', rotate: '18deg'}} />
            <span style={{position: 'absolute', left: 498, top: 44, opacity: prog(130, 16)}}>
              <Stamp delay={136} size={25}>逻辑在先</Stamp>
            </span>
            <Parch tone={C.parchEdge} style={{position: 'absolute', left: 500, top: 130, width: 380, height: 160, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 28, fontWeight: 950, color: C.ink}}>
                <Landmark size={36} color={C.vigilDeep} strokeWidth={2.3} />
                国家与法
              </span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>人权不依赖国家，更不依赖国家的法</span>
            </Parch>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 980, top: 104, width: 836, height: 300, display: 'flex', flexDirection: 'column', gap: 18}}>
          <Enter delay={64} from="right" marker="moral-right-note" style={{position: 'absolute', left: 980, top: 104, width: 836, height: 132}}>
            <Parch tone={C.ember} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <LabelTab bar={C.ember}>根本属性</LabelTab>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>
                根本上是<Soft color={C.ember}>道德权利</Soft>
              </div>
            </Parch>
          </Enter>
          <Enter delay={92} from="right" marker="evaluation-standard-note" style={{position: 'absolute', left: 980, top: 260, width: 836, height: 144}}>
            <Parch tone={C.gold} style={{height: '100%', padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
              <Scale size={40} color={C.ember} strokeWidth={2.3} />
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>
                可以作为<Soft color={C.ember}>法的评价标准</Soft>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 850, color: C.inkSoft}}>以人权衡量实在法的善恶</div>
              </div>
            </Parch>
          </Enter>
        </div>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 448, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.vigilDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              不是国家赐予的——<Soft color={C.goldPale}>先有 flames 人权</Soft>，后有国家与法
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalizationDualityScene = () => {
  /* data-final-knowledge="legalization-heading" data-final-knowledge="legalization-bench" data-final-knowledge="dual-existence-row" data-final-knowledge="value-canon-row" */
  return (
    <Shell code="03" kicker="人权的法律化" title="从应然到实然">
      <div
        data-layout="codification-bench-with-value-row"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="legalization-claim,dual-existence-row,value-canon-row"
        data-focal-rule="rights-should-be-legalized-to-be-enjoyed-in-fact"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="legalization-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parch, border: `3px solid ${C.parchEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              人权应尽可能<InkUnderline delay={36}>法律化</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="legalization-bench" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 220}}>
          <Parch tone={C.gold} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookMarked size={38} color={C.ember} strokeWidth={2.3} />
              <LabelTab>为什么法律化</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              保证人权能够<Soft color={C.ember}>被人们在事实上享有</Soft>
            </div>
          </Parch>
        </Enter>
        <Enter delay={56} from="right" marker="dual-existence-row" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 220}}>
          <Parch tone={C.ember} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.ember}>双重存在</LabelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <GoldChip tone={C.ember} solid>
                道德权利
              </GoldChip>
              <span style={{fontSize: 24, fontWeight: 900, color: C.inkSoft}}>＋</span>
              <GoldChip tone={C.gold} solid>
                法律权利
              </GoldChip>
              <span style={{fontSize: 22, fontWeight: 850, color: C.inkSoft, marginLeft: 8}}>可同时作为二者存在</span>
            </div>
          </Parch>
        </Enter>
        <Enter delay={110} from="up" marker="value-canon-row" style={{position: 'absolute', left: 40, top: 360, width: 1736, height: 200}}>
          <Parch tone={C.gold} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <LabelTab>法律的重要价值之一 · 四值并列</LabelTab>
            <div style={{display: 'flex', gap: 16, flex: 1}}>
              <div style={{flex: 1.3, border: `3px solid ${C.ember}`, backgroundColor: `${C.ember}12`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
                <Flame size={40} color={C.ember} strokeWidth={2.3} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.ink}}>人权</span>
              </div>
              {['自由', '秩序', '正义'].map((value) => (
                <div key={value} style={{flex: 1, border: `2px solid ${C.parchEdge}`, backgroundColor: C.parchDim, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: 28, fontWeight: 950, color: C.ink}}>{value}</span>
                </div>
              ))}
            </div>
          </Parch>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 592, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.vigilDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              写进法里才落得了地——人权与<Soft color={C.goldPale}>自由·秩序·正义</Soft>并列
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawAndHumanRights = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-history" {...SCENES.conceptHistory}>
      <ConceptHistoryScene />
    </TimelineSequence>
    <TimelineSequence name="02-nature-priority" {...SCENES.naturePriority}>
      <NaturePriorityScene />
    </TimelineSequence>
    <TimelineSequence name="03-legalization-duality" {...SCENES.legalizationDuality}>
      <LegalizationDualityScene />
    </TimelineSequence>
  </AbsoluteFill>
);
