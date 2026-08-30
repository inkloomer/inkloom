import type {CSSProperties, ReactNode} from 'react';
import {Ban, Eye, Megaphone, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  promotion: '#33362F',
  promotionDeep: '#272A24',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#646B5E',
  ink: '#262923',
  inkSoft: '#565D51',
  board: '#C0983E',
  forbid: '#B04834',
  publicity: '#4E7D74',
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
      backgroundColor: C.promotion,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 118px, rgba(39, 42, 36, 0.55) 118px 121px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.board}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.promotionDeep, borderLeft: `8px solid ${C.forbid}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 75 · {code}</span>
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
        borderBottom: `2px solid ${C.board}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.board, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.publicity}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.publicity}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.publicity}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.publicity}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const BoardTab = ({children, bar = C.forbid, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.promotionDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const BoardStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 42, 36, 0.94)', border: `2px solid ${C.board}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.forbid}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const BoardSeal = ({children, tone = C.board, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const PrinciplesScene = () => {
  /* data-final-knowledge="promotion-principles" */
  const mays = [
    '通过简介等方式介绍自己的业务领域和专业特长',
    '发表学术论文·案例分析·专题解答·授课等，普及法律并宣传自己的专业领域',
    '举办或参加各种专题·专业研讨会，推荐自己的专业特长',
    '以自己或律所名义参加社会公益活动，参加各类依法成立的社团组织',
  ] as const;
  const mustNots = [
    '不得向中介人或推荐人以许诺兑现任何物质或非物质利益的方式，获得有偿法律服务机会',
    '不得提供虚假信息或夸大自己的专业能力',
    '不得明示或暗示与司法·行政等关联机关的特殊关系',
    '不得贬低同行的专业能力和水平',
    '不得以提供或承诺回扣等方式承揽业务',
    '不得以明显低于同行业的收费水平竞争法律业务',
  ] as const;
  return (
    <Shell code="01" kicker="执业推广的原则" title="律师执业推广的原则">
      <div
        data-layout="may-versus-must-not-columns"
        data-visual-anchor="main center"
        data-text-treatments="board-columns,forbid-seals"
        data-visual-grammar="may-column,must-not-column"
        data-focal-rule="may-promote-expertise-never-promise-or-derogate"
        data-focal-channels="may-column,must-not-column"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="promotion-principles" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 620}}>
          <Panel tone={C.publicity} watermark={<Megaphone size={190} color={C.publicity} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <BoardTab bar={C.publicity} icon={<Megaphone size={26} color={C.paper} strokeWidth={2.2} />}>可以推广</BoardTab>
            {mays.map((line, index) => (
              <IconChip key={line} icon={<Megaphone size={26} color={C.paper} strokeWidth={2.2} />} tone={C.publicity} title={`${index + 1}.`}>
                {line}
              </IconChip>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 620}}>
          <Panel tone={C.forbid} watermark={<Ban size={190} color={C.forbid} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BoardTab bar={C.forbid} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不得（六条）</BoardTab>
            {mustNots.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.48, backgroundColor: `${C.forbid}12`, borderLeft: `5px solid ${C.forbid}`, padding: '8px 11px'}}>
                <span style={{color: C.forbid, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AdPublicityScene = () => {
  /* data-final-knowledge="ad-publicity-rules" */
  const forbids = ['没有通过年度考核的', '处于停止执业或停业整顿处罚期间的', '受到通报批评·公开谴责未满 1 年的'];
  const cannots = ['不能进行歪曲事实或法律，或可能使公众对律师产生不合理期望的宣传', '可以宣传所从事的某一专业法律服务领域，但不能自我声明或暗示其被公认或证明为某一专业领域的权威或专家', '不能进行律师之间或律师事务所之间的比较宣传'];
  return (
    <Shell code="02" kicker="广告规范 · 宣传规范" title="律师广告与宣传规范">
      <div
        data-layout="ad-seals-plus-notes"
        data-visual-anchor="main center"
        data-text-treatments="ad-rows,seal-strips"
        data-visual-grammar="subject-row,forbid-seals,cannot-notes"
        data-focal-rule="three-ad-forbids-and-three-publicity-cannots"
        data-focal-channels="three-forbid-seals,three-cannot-notes"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="ad-publicity-rules" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.board} watermark={<ScrollText size={170} color={C.board} strokeWidth={1.6} />} style={{height: 140, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <BoardTab bar={C.board} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>律师广告的主体和内容</BoardTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              <Mark color={C.board}>律师和律所均可</Mark>发布；以律师个人名义发布的广告应当注明律师个人<Mark color={C.board}>所在的执业机构名称</Mark>，应当载明<Mark color={C.board}>律师执业证号</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={50} from="left" style={{position: 'absolute', left: 0, top: 164, width: 1776}}>
          <Panel tone={C.forbid} watermark={<Ban size={170} color={C.forbid} strokeWidth={1.6} />} style={{height: 176, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <BoardTab bar={C.forbid} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>律师广告禁止（三情形）</BoardTab>
            {forbids.map((line, index) => (
              <div key={line} style={{fontSize: 23, fontWeight: 900, color: C.ink, backgroundColor: `${C.forbid}12`, border: `2px solid ${C.forbid}`, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 12}}>
                <Ban size={26} color={C.forbid} strokeWidth={2.2} />
                {line}
                {index === 2 ? <BoardSeal tone={C.forbid} delay={150}>未满 1 年</BoardSeal> : null}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 364, width: 1776}}>
          <Panel tone={C.publicity} watermark={<Eye size={170} color={C.publicity} strokeWidth={1.6} />} style={{height: 200, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <BoardTab bar={C.publicity} icon={<Eye size={26} color={C.paper} strokeWidth={2.2} />}>律师宣传规范（三不能）</BoardTab>
            {cannots.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.45, backgroundColor: `${C.publicity}14`, borderLeft: `5px solid ${C.publicity}`, padding: '7px 11px'}}>
                <span style={{color: C.publicity, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 588, width: 1776}}>
          <BoardStrip style={{height: 60}}>
            <Ban size={38} color={C.forbid} strokeWidth={2.2} />
            <span style={{padding: '3px 12px', backgroundColor: C.forbid, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 23, fontWeight: 950, color: C.paper}}>
              未考核 · 停业中 · 谴责未满年，广告不发；不歪曲 · 不称权威 · 不比较，宣传守规
            </span>
          </BoardStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawyerPromotion = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principles" {...SCENES.principles}>
      <PrinciplesScene />
    </TimelineSequence>
    <TimelineSequence name="02-ad-publicity" {...SCENES.adPublicity}>
      <AdPublicityScene />
    </TimelineSequence>
  </AbsoluteFill>
);
