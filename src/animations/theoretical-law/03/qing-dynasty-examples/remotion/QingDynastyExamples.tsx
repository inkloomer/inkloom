import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Gavel, Landmark, Scale, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  imperial: '#8B7355',
  imperialDeep: '#6B5A3E',
  edict: '#F0E6CE',
  edictDim: '#E2D5B8',
  edictEdge: '#6E5A48',
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
      backgroundColor: C.imperial,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.gold}10 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.imperialDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 52 · {code}</span>
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

const Edict = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.edict, border: `2px solid ${C.edictEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.imperialDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '8px 16px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}10`, fontSize: size, fontWeight: 950, letterSpacing: 2, opacity: p, scale: 0.86 + p * 0.14, rotate: '-3deg'}}>{children}</span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(107, 90, 62, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const FourTypesScene = () => {
  /* data-final-knowledge="types-heading" data-final-knowledge="tiaoli-panel" data-final-knowledge="zeli-panel" data-final-knowledge="shili-panel" data-final-knowledge="chengli-panel" */
  return (
    <Shell code="01" kicker="清代的例" title="四类规范的对比">
      <div
        data-layout="four-edict-grid"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="tiaoli-panel,zeli-panel,shili-chengli-panel"
        data-focal-rule="four-legal-forms-differ-by-source-scope-and-nature"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="types-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.edict, border: `3px solid ${C.edictEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              清代的「例」——四种法律形式
            </span>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 40, top: 104, width: 1736, display: 'flex', flexDirection: 'column', gap: 14}}>
          <Enter delay={26} from="left" marker="tiaoli-panel">
            <Edict tone={C.seal} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <ScrollText size={36} color={C.seal} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>条例</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>专指刑事单行法规，大部分编入《大清律例》</span>
              </div>
            </Edict>
          </Enter>
          <Enter delay={54} from="left" marker="zeli-panel">
            <Edict tone={C.gold} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <BookOpen size={36} color={C.gold} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>则例</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>某一行政部门或专项事务的单行法规汇编</span>
              </div>
            </Edict>
          </Enter>
          <Enter delay={82} from="left" marker="shili-panel">
            <Edict tone={C.inkSoft} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <Landmark size={36} color={C.inkSoft} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>事例</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>皇帝就某项事务发布的「上谕」或经批准的部门建议</span>
              </div>
            </Edict>
          </Enter>
          <Enter delay={110} from="left" marker="chengli-panel">
            <Edict tone={C.seal} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <Gavel size={36} color={C.seal} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>成例</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>经过整理编订的事例，是一项单行法规</span>
              </div>
            </Edict>
          </Enter>
        </div>
      </div>
    </Shell>
  );
};

export const DistinctionsScene = () => {
  /* data-final-knowledge="distinctions-heading" data-final-knowledge="criminal-vs-administrative-strip" data-final-knowledge="imperial-vs-compiled-strip" */
  return (
    <Shell code="02" kicker="区分要点" title="四者怎么区分">
      <div
        data-layout="distinction-strips-bench"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="criminal-vs-administrative,imperial-vs-compiled"
        data-focal-rule="nature-and-origin-distinguish-the-four-legal-forms"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="distinctions-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.edict, border: `3px solid ${C.edictEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              条例 vs 则例 ｜ 事例 vs 成例
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="criminal-vs-administrative-strip" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 140}}>
          <Edict tone={C.seal} style={{height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Gavel size={34} color={C.seal} strokeWidth={2.3} />
              <Scale size={30} color={C.seal} strokeWidth={2.3} style={{marginLeft: 8}} />
              <LabelTab bar={C.seal}>性质区分</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              条例＝<Soft color={C.seal}>刑事</Soft>单行法规 ｜ 则例＝<Soft color={C.gold}>行政</Soft>部门或专项事务汇编
            </div>
          </Edict>
        </Enter>
        <Enter delay={80} from="right" marker="imperial-vs-compiled-strip" style={{position: 'absolute', left: 40, top: 268, width: 1736, height: 140}}>
          <Edict tone={C.gold} style={{height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Landmark size={34} color={C.gold} strokeWidth={2.3} />
              <LabelTab>来源区分</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              事例＝皇帝<Soft color={C.gold}>上谕</Soft>发布 ｜ 成例＝经过<Soft color={C.gold}>整理编订</Soft>的事例（单行法规）
            </div>
          </Edict>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 40, top: 432, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.imperialDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              条例管刑 · 则例管行政 · 事例是上谕 · 成例是编订
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ExamTipsScene = () => {
  /* data-final-knowledge="tips-heading" data-final-knowledge="exam-focus-panel" data-final-knowledge="mnemonic-strip" */
  return (
    <Shell code="03" kicker="考试聚焦" title="怎么记住这四种">
      <div
        data-layout="exam-tips-verdict-panel"
        data-visual-anchor="flow-target"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="exam-focus-panel,mnemonic-strip"
        data-focal-rule="four-forms-differ-by-source-nature-and-compilation"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="tips-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.edict, border: `3px solid ${C.edictEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              考试怎么考·怎么记
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="exam-focus-panel" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 220}}>
          <Edict tone={C.gold} style={{height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
            <Gavel size={32} color={C.seal} strokeWidth={2.3} />
            <LabelTab>高频考点 · 易混辨析</LabelTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              条例编入<Soft color={C.seal}>《大清律例》</Soft>（刑事），则例是<Soft color={C.gold}>行政</Soft>汇编——不要混
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              事例来自<Soft color={C.gold}>皇帝上谕</Soft>，成例是<Soft color={C.seal}>整理编订</Soft>——成例是单行法规
            </div>
          </Edict>
        </Enter>
        <Enter delay={100} from="up" marker="mnemonic-strip" style={{position: 'absolute', left: 40, top: 350, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.imperialDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              条例管刑 · 则例管行政 · 事例是上谕 · 成例是编订
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const QingDynastyExamples = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-four-types" {...SCENES.fourTypes}>
      <FourTypesScene />
    </TimelineSequence>
    <TimelineSequence name="02-distinctions" {...SCENES.distinctions}>
      <DistinctionsScene />
    </TimelineSequence>
    <TimelineSequence name="03-exam-tips" {...SCENES.examTips}>
      <ExamTipsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
