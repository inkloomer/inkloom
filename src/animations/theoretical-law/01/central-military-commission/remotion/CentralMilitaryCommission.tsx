import type {CSSProperties, ReactNode} from 'react';
import {Bell, Crown, Flame, Hourglass, Landmark, ScrollText, Shield, Siren, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  iron: '#33383B',
  ironDeep: '#24282B',
  panel: '#EFE8D2',
  panelDim: '#E0D9C0',
  edge: '#687076',
  ink: '#262B2E',
  inkSoft: '#576066',
  tally: '#C69A3C',
  cinnabar: '#AE3B2B',
  army: '#5F6F4E',
  paper: '#F5F0DE',
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
      backgroundColor: C.iron,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 440px at 50% -8%, rgba(198, 154, 60, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 108px, rgba(36, 40, 43, 0.6) 108px 111px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.tally}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.ironDeep, borderLeft: `8px solid ${C.cinnabar}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 43 · {code}</span>
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
        borderBottom: `2px solid ${C.tally}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.tally, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.tally}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.tally}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.tally}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.tally}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const GateTab = ({children, bar = C.cinnabar, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.ironDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const GateStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 40, 43, 0.94)', border: `2px solid ${C.tally}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.cinnabar}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const TallySeal = ({children, tone = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const TalliesScene = () => {
  /* data-final-knowledge="tally-allocation" */
  const rows = [
    {group: '战争类', tone: C.cinnabar, icon: <Flame size={28} color={C.paper} strokeWidth={2.2} />, item: '决定战争与和平', decide: '全国人大', publish: '国家主席公布'},
    {group: '战争类', tone: C.cinnabar, icon: <Siren size={28} color={C.paper} strokeWidth={2.2} />, item: '宣布战争状态', decide: '全国人大常委会', publish: '国家主席公布'},
    {group: '动员类', tone: C.army, icon: <Bell size={28} color={C.paper} strokeWidth={2.2} />, item: '全国总动员和局部动员', decide: '全国人大常委会', publish: '国家主席公布'},
    {group: '紧急状态类', tone: C.tally, icon: <Siren size={28} color={C.paper} strokeWidth={2.2} />, item: '全国或个别省·自治区·直辖市进入紧急状态', decide: '全国人大常委会', publish: '国家主席公布'},
    {group: '紧急状态类', tone: C.tally, icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, item: '特别行政区整体或部分地区进入紧急状态', decide: '全国人大常委会', publish: '国家主席公布'},
    {group: '紧急状态类', tone: C.tally, icon: <Bell size={28} color={C.paper} strokeWidth={2.2} />, item: '省·自治区·直辖市的部分地区进入紧急状态', decide: '国务院', publish: '国务院令公布'},
  ] as const;
  return (
    <Shell code="01" kicker="决定机关 · 公布" title="决定机关与公布">
      <div
        data-layout="tally-sign-rows"
        data-visual-anchor="main center"
        data-text-treatments="tally-plaques,dual-seals"
        data-visual-grammar="war-group,mobilization-group,emergency-group"
        data-focal-rule="decide-and-publish-split-across-war-mobilization-emergency"
        data-focal-channels="group-headings,dual-seals"
        style={{position: 'absolute', inset: 0}}
      >
        {rows.map((row, index) => (
          <Enter key={row.item} delay={6 + index * 14} from="left" marker={index === 0 ? 'tally-allocation' : undefined} style={{position: 'absolute', left: 0, top: index * 68, width: 1776}}>
            <Panel tone={row.tone} style={{height: 58, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 14}}>
              <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 9, backgroundColor: row.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{row.icon}</span>
              <span style={{flexShrink: 0, width: 118, fontSize: 21, fontWeight: 950, color: row.tone}}>{row.group}</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.35, flex: 1}}>{row.item}</span>
              <span style={{flexShrink: 0}}>
                <TallySeal tone={C.cinnabar} delay={120 + index * 10}>决定：{row.decide}</TallySeal>
              </span>
              <span style={{flexShrink: 0}}>
                <TallySeal tone={C.tally} delay={140 + index * 10}>公布：{row.publish}</TallySeal>
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={160} from="up" style={{position: 'absolute', left: 0, top: 424, width: 1776}}>
          <GateStrip style={{height: 104}}>
            <Crown size={40} color={C.tally} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.cinnabar, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              开火停火全人大 · 宣战动员紧急全人常 · 省内部分地区国务院 —— 人大人常定后主席宣布，国务院定后总理签署令
            </span>
          </GateStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CmcScene = () => {
  /* data-final-knowledge="cmc-organization" */
  const roster = ['委员长 · 副委员长', '总理 · 副总理 · 国务委员', '国家监察委主任', '最高法院长 · 最高检检察长', '特别行政区行政长官'];
  return (
    <Shell code="02" kicker="中央军委" title="帅帐铭牌：中央军事委员会">
      <div
        data-layout="command-tent-plaques"
        data-visual-anchor="main center"
        data-text-treatments="tent-plaques,roster-scroll"
        data-visual-grammar="nature-plaque,only-responsible-plaque,term-limit-roster"
        data-focal-rule="cmc-supreme-command-and-only-responsible-no-report"
        data-focal-channels="only-responsible-highlight,term-limit-roster"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="cmc-organization" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 264}}>
          <Panel tone={C.army} watermark={<Shield size={160} color={C.army} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <GateTab bar={C.army} icon={<Shield size={26} color={C.paper} strokeWidth={2.2} />}>性质 · 组成 · 任期</GateTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              <Mark color={C.army}>性质</Mark>：全国武装力量的最高领导机关
              <br />
              <Mark color={C.tally}>组成</Mark>：主席 · 副主席 · 委员
              <br />
              <Mark color={C.cinnabar}>任期</Mark>：5 年，连选连任（主席无连任限制）
            </div>
          </Panel>
        </Enter>
        <Enter delay={26} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 264}}>
          <Panel tone={C.cinnabar} watermark={<ScrollText size={160} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <GateTab bar={C.cinnabar} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>只负责 · 不报告</GateTab>
            <div style={{fontSize: 23, fontWeight: 920, color: C.ink, lineHeight: 1.6}}>
              中央军委对全国人大<Mark color={C.cinnabar}>只负责</Mark>，<Mark color={C.cinnabar}>不报告工作</Mark>，<Mark color={C.cinnabar}>不接受质询</Mark>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>对比：国务院每届向人大报告工作；两高报告工作；监委作专项报告</div>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" style={{position: 'absolute', left: 0, top: 288, width: 1776}}>
          <Panel tone={C.tally} watermark={<Hourglass size={160} color={C.tally} strokeWidth={1.6} />} style={{height: 220, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <GateTab bar={C.tally} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>两届之限 · 连任不得超过两届的官员</GateTab>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10}}>
              {roster.map((line) => (
                <div key={line} style={{backgroundColor: C.panelDim, borderLeft: `5px solid ${C.tally}`, padding: '8px 12px', fontSize: 22, fontWeight: 880, color: C.ink, display: 'flex', alignItems: 'center', gap: 8}}>
                  <Hourglass size={24} color={C.tally} strokeWidth={2.2} />
                  {line}
                </div>
              ))}
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>记忆锚：除军委主席外，上述「首席们」都受两届之限</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 532, width: 1776}}>
          <GateStrip style={{height: 84}}>
            <Shield size={38} color={C.tally} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.tally, color: C.ironDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              军委：只负责 · 不报告 · 不受质询；主席连选连任无限制
            </span>
          </GateStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CentralMilitaryCommission = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-tallies" {...SCENES.tallies}>
      <TalliesScene />
    </TimelineSequence>
    <TimelineSequence name="02-cmc" {...SCENES.cmc}>
      <CmcScene />
    </TimelineSequence>
  </AbsoluteFill>
);
