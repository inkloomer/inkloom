import type {CSSProperties, ReactNode} from 'react';
import {Bell, Building2, CalendarClock, CalendarDays, FileSignature, Flame, Hourglass, Landmark, Megaphone, SearchCheck, Siren, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  stone: '#2E333B',
  stoneDeep: '#22262C',
  panel: '#EFE9D6',
  panelDim: '#E0DAC5',
  edge: '#667080',
  ink: '#242932',
  inkSoft: '#55606E',
  beacon: '#D06428',
  signal: '#B03A2A',
  watchGold: '#C99B3F',
  mist: '#5A7A99',
  paper: '#F6F1E1',
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
      backgroundColor: C.stone,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1200px 480px at 50% -10%, rgba(208, 100, 40, 0.13), transparent 72%), repeating-linear-gradient(90deg, transparent 0 158px, rgba(34, 38, 44, 0.6) 158px 162px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.watchGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.stoneDeep, borderLeft: `8px solid ${C.beacon}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 42 · {code}</span>
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
        borderBottom: `2px solid ${C.watchGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.watchGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.beacon}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.beacon}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.beacon}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.beacon}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const WatchTab = ({children, bar = C.beacon, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.stoneDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const WatchStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(34, 38, 44, 0.94)', border: `2px solid ${C.watchGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.beacon}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const FlameSeal = ({children, tone = C.signal, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const AllocationScene = () => {
  /* data-final-knowledge="power-allocation" data-final-knowledge="announcement-route" */
  return (
    <Shell code="01" kicker="决定权分配" title="决定权分配">
      <div
        data-layout="beacon-grade-rows"
        data-visual-anchor="main center"
        data-text-treatments="beacon-plaques,flame-stamps"
        data-visual-grammar="npc-peace-row,sc-standing-row,council-row"
        data-focal-rule="war-mobilization-emergency-power-split"
        data-focal-channels="grade-headings,mnemonic-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="power-allocation" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.signal} watermark={<Flame size={180} color={C.signal} strokeWidth={1.6} />} style={{height: 404, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <WatchTab bar={C.signal} icon={<Flame size={26} color={C.paper} strokeWidth={2.2} />}>决定权分配</WatchTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.signal} title="全国人大：">
              <Mark color={C.signal}>决定战争与和平</Mark>（开火停火全人大）
            </IconChip>
            <IconChip icon={<Siren size={28} color={C.paper} strokeWidth={2.2} />} tone={C.beacon} title="全人常：">
              闭会期间<Mark color={C.beacon}>宣布战争状态</Mark> · <Mark color={C.beacon}>决定全国总动员和局部动员</Mark>（动员全部归人常）· 决定全国或个别省·自治区·直辖市<Mark color={C.beacon}>进入紧急状态</Mark>
            </IconChip>
            <IconChip icon={<Bell size={28} color={C.paper} strokeWidth={2.2} />} tone={C.mist} title="国务院：">
              依照法律规定决定省·自治区·直辖市的范围内<Mark color={C.mist}>部分地区</Mark>进入紧急状态（<FlameSeal tone={C.mist} delay={130}>不含特区</FlameSeal>）
            </IconChip>
            <IconChip icon={<Megaphone size={28} color={C.paper} strokeWidth={2.2} />} tone={C.watchGold} title="宣布方式：">
              人大·人常决定后 → 一般交<Mark color={C.watchGold}>国家主席</Mark>宣布；国务院决定后 → 由<Mark color={C.watchGold}>国务院总理签署国务院令</Mark>宣布
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 428, width: 1776}}>
          <WatchStrip style={{height: 116}}>
            <Flame size={42} color={C.beacon} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.beacon, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>总结口诀</span>
            <span style={{fontSize: 25, fontWeight: 950, color: C.paper, lineHeight: 1.55, letterSpacing: 1}}>
              省部紧急国务院（不含特区），开火停火全人大
              <br />
              其余全归全人常，人常闭会可开火
            </span>
          </WatchStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const PremierScene = () => {
  /* data-final-knowledge="council-composition" data-final-knowledge="premier-responsibility" */
  const clauses = [
    {title: '提名组成', body: '由总理提名组成国务院；总理有向全国人大及其常委会提出任免国务院其他组成人员议案的权利'},
    {title: '领导工作', body: '总理领导国务院工作；副总理·国务委员协助，其他组成人员向总理负责'},
    {title: '召集主持', body: '总理召集和主持常务会议与全体会议；所议事项总理有最后决定权，并对后果承担全部责任'},
    {title: '签署', body: '行政法规·决定命令·向人大人常的议案·任免决定，都由总理签署'},
  ] as const;
  return (
    <Shell code="02" kicker="机构概况 · 总理负责制" title="机构概况 · 总理负责制">
      <div
        data-layout="seat-plus-four-clauses"
        data-visual-anchor="main center"
        data-text-treatments="seat-plaques,clause-chips"
        data-visual-grammar="composition-seat,clauses-stack"
        data-focal-rule="council-composition-and-premier-final-say"
        data-focal-channels="composition-chips,four-clauses"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="council-composition" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.beacon} watermark={<Users size={170} color={C.beacon} strokeWidth={1.6} />} style={{height: 212, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <WatchTab bar={C.beacon} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>机构概况 · 性质与组成</WatchTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              性质：中央人民政府 · 最高权力机关的<Mark color={C.beacon}>执行机关</Mark> · <Mark color={C.beacon}>最高行政机关</Mark>
            </div>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.beacon} title="组成：">
              总理 · 副总理 · 国务委员 · 各部部长 · 各委员会主任（发改·民族·卫健，<Mark color={C.signal}>无国资委</Mark>）· 审计长 · <Mark color={C.watchGold}>中国人民银行行长</Mark> · 秘书长
            </IconChip>
            <IconChip icon={<Hourglass size={28} color={C.paper} strokeWidth={2.2} />} tone={C.mist} title="任期：">
              每届 5 年；<Mark color={C.mist}>总理·副总理·国务委员连任不得超过 2 届</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" marker="premier-responsibility" style={{position: 'absolute', left: 0, top: 236, width: 1776}}>
          <Panel tone={C.signal} watermark={<UserCheck size={170} color={C.signal} strokeWidth={1.6} />} style={{height: 252, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <WatchTab bar={C.signal} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>总理负责制的体现</WatchTab>
            {clauses.map((clause, index) => (
              <div key={clause.title} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.42, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.signal}`, padding: '5px 11px'}}>
                <span style={{color: C.signal, fontWeight: 950, marginRight: 8}}>{['壹', '贰', '叁', '肆'][index]}</span>
                <span style={{fontWeight: 950}}>{clause.title}</span> —— {clause.body}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 512, width: 1776}}>
          <WatchStrip style={{height: 96}}>
            <FileSignature size={40} color={C.watchGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.signal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              老大说了算：提名 · 领导 · 召集 · 签署，最后决定权在总理
            </span>
          </WatchStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MeetingsOrgsScene = () => {
  /* data-final-knowledge="meeting-system" data-final-knowledge="org-audit" */
  return (
    <Shell code="03" kicker="会议制度 · 组织机构 · 审计" title="会议制度 · 组织机构 · 审计">
      <div
        data-layout="twin-column-terrace"
        data-visual-anchor="main center"
        data-text-treatments="column-plaques,icon-chip-rows"
        data-visual-grammar="meetings-column,orgs-column"
        data-focal-rule="plenum-versus-standing-and-audit-independence"
        data-focal-channels="meeting-contrast,audit-independence"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="meeting-system" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 468}}>
          <Panel tone={C.mist} watermark={<CalendarClock size={170} color={C.mist} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <WatchTab bar={C.mist} icon={<CalendarClock size={26} color={C.paper} strokeWidth={2.2} />}>会议制度</WatchTab>
            <IconChip icon={<CalendarDays size={28} color={C.paper} strokeWidth={2.2} />} tone={C.beacon} title="全体会议：">
              全体组成人员参加，一般<Mark color={C.beacon}>每两月</Mark>召开；讨论决定政府工作报告·国民经济和社会发展规划等<Mark color={C.beacon}>重大事项</Mark>，部署重要工作
            </IconChip>
            <IconChip icon={<CalendarClock size={28} color={C.paper} strokeWidth={2.2} />} tone={C.signal} title="常务会议：">
              总理·副总理·国务委员·秘书长，一般<Mark color={C.signal}>每月 2-3 次</Mark>；讨论<Mark color={C.signal}>法律草案</Mark>·审议<Mark color={C.signal}>行政法规草案</Mark>，讨论决定通报重要事项
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>
              记忆锚：全体报计划（与 2024 组织法呼应）· 常务讨立法
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="org-audit" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 468}}>
          <Panel tone={C.watchGold} watermark={<Building2 size={170} color={C.watchGold} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <WatchTab bar={C.watchGold} icon={<Building2 size={26} color={C.paper} strokeWidth={2.2} />}>组织机构 · 审计机关</WatchTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.beacon} title="组成部门（部委行署）：">
              正职首长为国务院组成人员，由全国人大或全人常<Mark color={C.beacon}>根据总理提名</Mark>任免；部门调整由总理提出·人大人常决定
            </IconChip>
            <IconChip icon={<Building2 size={28} color={C.paper} strokeWidth={2.2} />} tone={C.mist} title="直属机构·办事机构：">
              主管专门业务·协助总理办理专门事项；每机构负责人 <Mark color={C.mist}>2-5 人</Mark>，由<Mark color={C.mist}>国务院任免</Mark>
            </IconChip>
            <IconChip icon={<SearchCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.signal} title="审计署：">
              在<Mark color={C.signal}>总理领导下</Mark>主管全国审计；<Mark color={C.signal}>依法独立</Mark>行使审计监督权，不受其他行政机关·团体·个人干涉；财政收支·国有金融机构和企事业组织财务收支接受审计；地方审计机关业务上主要受<Mark color={C.signal}>上级审计机关</Mark>领导
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 492, width: 1776}}>
          <WatchStrip style={{height: 104}}>
            <SearchCheck size={40} color={C.watchGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.watchGold, color: C.stoneDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              全体两月报计划 · 常务月两三次讨立法 · 组成部门人大定 · 直属 2-5 人国务院免 · 审计署独立属总理
            </span>
          </WatchStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const EmergencyDecisions = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-allocation" {...SCENES.allocation}>
      <AllocationScene />
    </TimelineSequence>
    <TimelineSequence name="02-premier" {...SCENES.premier}>
      <PremierScene />
    </TimelineSequence>
    <TimelineSequence name="03-meetings-orgs" {...SCENES.meetingsOrgs}>
      <MeetingsOrgsScene />
    </TimelineSequence>
  </AbsoluteFill>
);

