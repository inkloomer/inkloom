import type {CSSProperties, ReactNode} from 'react';
import {BookMarked, CheckCircle2, CircleHelp, FileText, Gavel, Globe, Landmark, Scale, ScrollText, Users, XCircle} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  chart: '#1F3A4D',
  chartDeep: '#172C3B',
  panel: '#EFE8D2',
  panelDim: '#DFD6BB',
  panelEdge: '#5E6A62',
  ink: '#2B2721',
  inkSoft: '#4F5450',
  cyan: '#3E8A85',
  cyanPale: '#CFE2DE',
  rust: '#A05538',
  rustPale: '#EFD3C4',
  gold: '#B08A38',
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
      backgroundColor: C.chart,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 142px, ${C.cyan}10 142px 144px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.cyan}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.cyanPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.chartDeep, borderLeft: `8px solid ${C.cyan}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 29 · {code}</span>
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
        borderBottom: `2px solid ${C.cyan}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.cyanPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.panelEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cyan}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cyan}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cyan}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cyan}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.cyan}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.chartDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const ChartChip = ({tone = C.cyan, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.rust}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.rust, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(23, 44, 59, 0.92)', border: `2px solid ${C.cyan}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const SourcesFiveScene = () => {
  /* data-final-knowledge="sources-heading" data-final-knowledge="source-row" data-final-knowledge="china-verdicts" */
  const sources = [
    {name: '宪法典', tone: C.cyan, text: <>成文宪法国家<Soft color={C.cyan}>有</Soft> · 不成文宪法国家无</>, verdict: '确定有'},
    {name: '宪法性法律', tone: C.cyan, text: <>不成文国家：就是宪法本体 ｜ 成文国家：为实施宪法典而制定</>, verdict: '确定有'},
    {name: '宪法惯例', tone: C.gold, text: <>有宪法效力的习惯传统 · <Soft color={C.gold}>并非法律</Soft> · 靠自觉和舆论维系</>, verdict: '确定有'},
    {name: '宪法判例', tone: C.rust, text: <>成文与不成文国家均有——<Soft color={C.rust}>中国没有</Soft></>, verdict: '确定没有'},
    {name: '国际条约', tone: C.inkSoft, text: <>取决于国家<Soft color={C.inkSoft}>参与和认可</Soft>——中国宪法语焉不详</>, verdict: '未明确规定'},
  ] as const;
  return (
    <Shell code="01" kicker="五种渊源" title="五源汇流：宪法的渊源">
      <div
        data-layout="five-source-stream-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="codex-stream,custom-practice-stream,precedent-treaty-streams"
        data-focal-rule="china-recognizes-codex-statute-and-custom-not-precedent"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="sources-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              五条支流，汇成<InkUnderline delay={36}>宪法渊源</InkUnderline>
            </span>
          </div>
        </Enter>
        {sources.map((source, index) => (
          <Enter key={source.name} delay={28 + index * 20} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 104, width: 1736, height: 92}}>
            <Panel tone={source.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: C.chartDeep, color: C.paper, fontSize: 21, fontWeight: 950, flexShrink: 0}}>{String(index + 1).padStart(2, '0')}</span>
              {index === 0 ? <BookMarked size={34} color={source.tone} strokeWidth={2.3} /> : index === 1 ? <ScrollText size={34} color={source.tone} strokeWidth={2.3} /> : index === 2 ? <Users size={34} color={source.tone} strokeWidth={2.3} /> : index === 3 ? <Gavel size={34} color={source.tone} strokeWidth={2.3} /> : <Globe size={34} color={source.tone} strokeWidth={2.3} />}
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink, width: 230}}>{source.name}</span>
              <span style={{width: 2, height: 48, backgroundColor: C.panelEdge}} />
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, flex: 1}}>{source.text}</span>
              <span data-final-knowledge="china-verdicts" style={{marginLeft: 'auto', flexShrink: 0}}>
                {index < 2 ? <ChartChip tone={C.cyan} solid>{source.verdict}</ChartChip> : index === 2 ? <ChartChip tone={C.gold} solid>{source.verdict}</ChartChip> : index === 3 ? <Stamp delay={120 + index * 14} size={22}>{source.verdict}</Stamp> : <ChartChip tone={C.inkSoft} solid>{source.verdict}</ChartChip>}
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 634, width: 1736}}>
          <DarkStrip style={{height: 64}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              三有 · 一无 · 一未明——中国渊源五字诀
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CodexStructureScene = () => {
  /* data-final-knowledge="structure-heading" data-final-knowledge="preface-leaf" data-final-knowledge="body-leaf" data-final-knowledge="schedule-leaf" data-final-knowledge="rights-order-note" */
  return (
    <Shell code="02" kicker="宪法典结构" title="序言 · 正文 · 附则">
      <div
        data-layout="codex-vertical-structure-chart"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="preflight-section,body-sections,schedule-section"
        data-focal-rule="chinas-codex-has-preface-and-body-without-schedule"
        data-focal-channels="icon,connector,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="structure-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              宪法典的三段式结构
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="preface-leaf" style={{position: 'absolute', left: 40, top: 104, width: 1020, height: 170}}>
          <Panel tone={C.cyan} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <FileText size={32} color={C.cyan} strokeWidth={2.3} />
              <LabelTab>序言</LabelTab>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>制定宗旨 · 指导思想 · 基本任务目标</span>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              我国序言集中展现两个地位：<Soft color={C.cyan}>党的领导地位</Soft> ＋ <Soft color={C.cyan}>宪法根本大法地位</Soft>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>效力对比：</span>
              <ChartChip tone={C.cyan} solid>我国推定有效</ChartChip>
              <ChartChip tone={C.rust} solid>美国确定无效</ChartChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" marker="body-leaf" style={{position: 'absolute', left: 40, top: 296, width: 1020, height: 220}}>
          <Panel tone={C.gold} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Landmark size={32} color={C.gold} strokeWidth={2.3} />
              <LabelTab bar={C.gold}>正文四部分</LabelTab>
              <span data-final-knowledge="rights-order-note" style={{fontSize: 21, fontWeight: 900, color: C.rust}}>公民基本权利和义务排在国家机构之前（1982 调整）</span>
            </div>
            <div style={{display: 'flex', gap: 10, flex: 1}}>
              {['总纲 · 基本原则', '公民的基本权利和义务', '国家机构', '国旗国歌国徽首都'].map((part, index) => (
                <div key={part} style={{flex: part.length > 8 ? 1.4 : 1, border: `2px solid ${C.panelEdge}`, backgroundColor: index === 1 ? `${C.gold}22` : C.panelDim, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 10px', textAlign: 'center'}}>
                  <span style={{fontSize: 22, fontWeight: 950, color: C.ink, lineHeight: 1.4}}>
                    {index + 1}. {part}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
        <Enter delay={96} from="left" marker="schedule-leaf" style={{position: 'absolute', left: 40, top: 540, width: 1020, height: 150}}>
          <Panel tone={C.inkSoft} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Scale size={36} color={C.inkSoft} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab bar={C.inkSoft}>附则</LabelTab>
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                效力与一般条文相同 · <Soft color={C.inkSoft}>特定性</Soft>＋<Soft color={C.inkSoft}>临时性</Soft>——我国现行宪法<Soft color={C.rust}>没有附则</Soft>
              </span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={180} from="right" style={{position: 'absolute', left: 1100, top: 104, width: 716, height: 586}}>
          <DarkStrip style={{height: 586, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 20}}>
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper, letterSpacing: 2}}>易错对比</span>
            <div style={{display: 'flex', flexDirection: 'column', gap: 14, fontSize: 22, fontWeight: 880, color: C.paper, lineHeight: 1.55}}>
              <span>我国宪法：<Soft color={C.cyanPale}>序言＋正文，无附则</Soft></span>
              <span>美国宪法：正文<Soft color={C.rustPale}>未规定公民基本权利</Soft>——体现在修正案</span>
              <span>前十条修正案＝<Soft color={C.goldPale}>「权利法案」</Soft></span>
            </div>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const VerdictBoardScene = () => {
  /* data-final-knowledge="verdict-heading" data-final-knowledge="china-has-lane" data-final-knowledge="china-not-lane" data-final-knowledge="us-comparison-lane" */
  const lanes = [
    {marker: 'china-has-lane', tone: C.cyan, title: '确定有', items: '宪法典 · 宪法性法律 · 宪法惯例'},
    {marker: 'china-not-lane', tone: C.rust, title: '确定没有', items: '宪法判例——中国不存在'},
    {marker: 'us-comparison-lane', tone: C.gold, title: '未明确 · 对比', items: '国际条约（中国语焉不详）｜ 美国：权利法案＝前十条修正案'},
  ] as const;
  return (
    <Shell code="03" kicker="判词收束" title="渊源判词与中美分界">
      <div
        data-layout="three-lane-verdict-boundary-board"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="china-has-lane,china-not-lane,us-comparison-lane"
        data-focal-rule="china-has-three-sources-lacks-precedent-and-is-silent-on-treaties"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="verdict-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              三道判词，一次收束
            </span>
          </div>
        </Enter>
        {lanes.map((lane, index) => (
          <Enter key={lane.title} delay={28 + index * 30} from="left" marker={lane.marker} style={{position: 'absolute', left: 40, top: 120 + index * 160, width: 1736, height: 130}}>
            <Panel tone={lane.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 20, padding: '0 28px'}}>
              {index === 0 ? <CheckCircle2 size={44} color={lane.tone} strokeWidth={2.3} /> : index === 1 ? <XCircle size={44} color={lane.tone} strokeWidth={2.3} /> : <CircleHelp size={44} color={lane.tone} strokeWidth={2.3} />}
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, width: 220}}>{lane.title}</span>
              <span style={{width: 2, height: 60, backgroundColor: C.panelEdge}} />
              <span style={{fontSize: 24, fontWeight: 880, color: C.ink, flex: 1, lineHeight: 1.5}}>{lane.items}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 622, width: 1736}}>
          <DarkStrip style={{height: 76}}>
            <span style={{padding: '4px 13px', backgroundColor: C.rust, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>收束</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              渊源三有一无一未明 · 结构<InkUnderline color={C.cyanPale} delay={190}>序言加正文无附则</InkUnderline>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstitutionSourcesStructure = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-sources-five" {...SCENES.sourcesFive}>
      <SourcesFiveScene />
    </TimelineSequence>
    <TimelineSequence name="02-codex-structure" {...SCENES.codexStructure}>
      <CodexStructureScene />
    </TimelineSequence>
    <TimelineSequence name="03-verdict-board" {...SCENES.verdictBoard}>
      <VerdictBoardScene />
    </TimelineSequence>
  </AbsoluteFill>
);
