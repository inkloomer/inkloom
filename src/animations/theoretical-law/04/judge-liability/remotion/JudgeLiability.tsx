import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, CircleAlert, FileX, HeartHandshake, RefreshCw, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  hall: '#3B342C',
  fold: '#2C2721',
  panel: '#F1ECDA',
  panelDim: '#E2DBC5',
  edge: '#6E6557',
  ink: '#2A241D',
  inkSoft: '#5C5346',
  seam: '#C09A44',
  pardon: '#4E7D74',
  liability: '#B04834',
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
      backgroundColor: C.hall,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 154, 68, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 116px, rgba(44, 39, 33, 0.55) 116px 119px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.seam}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.fold, borderLeft: `8px solid ${C.liability}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 65 · {code}</span>
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
        borderBottom: `2px solid ${C.seam}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.seam, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pardon}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pardon}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pardon}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pardon}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const FoldTab = ({children, bar = C.liability, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.fold, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const FoldStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(44, 39, 33, 0.94)', border: `2px solid ${C.seam}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.liability}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const SeamSeal = ({children, tone = C.seam, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const NoPunishScene = () => {
  /* data-final-knowledge="no-exempt-punishment" */
  const cognitions = [
    '因法律、法规没有规定或者法律、法规规定不明确，在认识上产生偏差的',
    '法律、法规虽有规定，但在适用法律时对法律、法规在理解和认识上产生偏差的',
    '在案件事实和证据的认定上产生认识上的偏差的',
  ] as const;
  return (
    <Shell code="01" kicker="不予 · 免予纪律处分" title="不予纪律处分与免予纪律处分">
      <div
        data-layout="twin-fold-disposition"
        data-visual-anchor="main center"
        data-text-treatments="fold-plaques,cognition-chips"
        data-visual-grammar="no-punish-fold,exempt-fold"
        data-focal-rule="cognitive-deviation-not-punished-light-circumstance-exempted"
        data-focal-channels="cognition-deviations,mnemonic-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="no-exempt-punishment" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 404}}>
          <Panel tone={C.pardon} watermark={<BookOpen size={180} color={C.pardon} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <FoldTab bar={C.pardon} icon={<BookOpen size={26} color={C.paper} strokeWidth={2.2} />}>不予纪律处分 · 认识偏差三情形</FoldTab>
            {cognitions.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.pardon}`, padding: '9px 13px'}}>
                <span style={{color: C.pardon, fontWeight: 950, marginRight: 8}}>{['壹', '贰', '叁'][index]}</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 404}}>
          <Panel tone={C.seam} watermark={<HeartHandshake size={180} color={C.seam} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <FoldTab bar={C.seam} icon={<HeartHandshake size={26} color={C.paper} strokeWidth={2.2} />}>免予纪律处分 · 三要件同时具备</FoldTab>
            {['错误情节较轻', '未造成不良后果', '认错态度好，能积极改正错误'].map((line, index) => (
              <div key={line} style={{fontSize: 24, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.seam}`, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12}}>
                <CircleAlert size={26} color={C.seam} strokeWidth={2.2} />
                <span><span style={{fontWeight: 950, color: C.seam}}>{['壹', '贰', '叁'][index]}</span> {line}</span>
              </div>
            ))}
            <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>三要件齐备 → 可免予纪律处分</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 428, width: 1776}}>
          <FoldStrip style={{height: 140}}>
            <BookOpen size={42} color={C.seam} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.liability, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper, lineHeight: 1.65}}>
              <SeamSeal tone={C.pardon} delay={170}>认识偏差的不处分</SeamSeal>，情节轻、后果小、态度好的免处分
            </span>
          </FoldStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const RelieveRevokeScene = () => {
  /* data-final-knowledge="relieve-revoke" */
  const grounds = [
    '适用法律、法规或者《人民法院工作人员处分条例》规定错误的',
    '对违纪违法行为的事实、情节认定有误的',
    '处分所依据的违纪违法事实证据不足的',
    '调查处理违反法定程序，影响案件公正处理的',
    '作出处分决定超越职权或者滥用职权的',
    '有其他处分不当情形的',
  ] as const;
  return (
    <Shell code="02" kicker="解除 · 变更 · 撤销" title="处分的解除、变更和撤销">
      <div
        data-layout="relieve-plus-six-seals"
        data-visual-anchor="main center"
        data-text-treatments="relieve-rows,seal-grid"
        data-visual-grammar="relieve-panel,change-revoke-panel"
        data-focal-rule="expiry-relieves-except-expulsion-not-restoring-rank"
        data-focal-channels="relieve-effects,six-grounds"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="relieve-revoke" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 452}}>
          <Panel tone={C.pardon} watermark={<RefreshCw size={180} color={C.pardon} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <FoldTab bar={C.pardon} icon={<RefreshCw size={26} color={C.paper} strokeWidth={2.2} />}>解除</FoldTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              受<Mark color={C.liability}>开除以外</Mark>处分的，在受处分期间<Mark color={C.pardon}>有悔改表现</Mark>，并且<Mark color={C.pardon}>没有再发生违纪违法行为</Mark>的，<Mark color={C.seam}>处分期满后应当解除处分</Mark>
            </div>
            <IconChipRelieve text="解除处分后，晋升工资档次、级别、职务不再受原处分的影响" />
            <IconChipRelieve text="但是，解除降级·撤职处分的，不视为恢复原级别、原职务" warn />
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 452}}>
          <Panel tone={C.liability} watermark={<FileX size={180} color={C.liability} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <FoldTab bar={C.liability} icon={<FileX size={26} color={C.paper} strokeWidth={2.2} />}>应当变更或者撤销处分决定（六情形）</FoldTab>
            {grounds.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.45, backgroundColor: `${C.liability}12`, borderLeft: `5px solid ${C.liability}`, padding: '6px 11px'}}>
                <span style={{color: C.liability, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 476, width: 1776}}>
          <FoldStrip style={{height: 124}}>
            <Scale size={42} color={C.seam} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.liability, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 950, color: C.paper, lineHeight: 1.6}}>
              <SeamSeal tone={C.pardon} delay={170}>处分期满叫解除</SeamSeal>，<SeamSeal tone={C.liability} delay={182}>处分错误变撤销</SeamSeal>；解除降级撤职，不视为恢复原级别原职务
            </span>
          </FoldStrip>
        </Enter>
      </div>
    </Shell>
  );
};

const IconChipRelieve = ({text, warn}: {readonly text: string; readonly warn?: boolean}) => (
  <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: warn ? `${C.liability}12` : C.panelDim, borderLeft: `6px solid ${warn ? C.liability : C.pardon}`, padding: '9px 13px'}}>
    {warn ? <Mark color={C.liability}>注意</Mark> : <Mark color={C.pardon}>效果</Mark>} {text}
  </div>
);

export const JudgeLiability = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-no-punish" {...SCENES.noPunish}>
      <NoPunishScene />
    </TimelineSequence>
    <TimelineSequence name="02-relieve-revoke" {...SCENES.relieveRevoke}>
      <RelieveRevokeScene />
    </TimelineSequence>
  </AbsoluteFill>
);

