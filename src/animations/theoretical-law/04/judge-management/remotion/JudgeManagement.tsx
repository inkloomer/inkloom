import type {CSSProperties, ReactNode} from 'react';
import {Award, Landmark, TrendingUp, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  desk: '#3A322A',
  deskDeep: '#2C2620',
  panel: '#F1EBD9',
  panelDim: '#E2DBC5',
  edge: '#6E6557',
  ink: '#2A241D',
  inkSoft: '#5C5346',
  brass: '#C09A44',
  teal: '#4E7D74',
  assess: '#B04834',
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
      backgroundColor: C.desk,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 154, 68, 0.13), transparent 72%), repeating-linear-gradient(0deg, transparent 0 110px, rgba(44, 38, 32, 0.55) 110px 113px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.deskDeep, borderLeft: `8px solid ${C.assess}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 63 · {code}</span>
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
        borderBottom: `2px solid ${C.brass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brass, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.teal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.teal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.teal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.teal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const DeskTab = ({children, bar = C.assess, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.deskDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const DeskStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(44, 38, 32, 0.94)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.assess}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const BrassSeal = ({children, tone = C.brass, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const SelectionScene = () => {
  /* data-final-knowledge="judge-selection" */
  return (
    <Shell code="01" kicker="法官遴选" title="法官遴选">
      <div
        data-layout="selection-stair-rows"
        data-visual-anchor="main center"
        data-text-treatments="stair-rows,quota-seals"
        data-visual-grammar="committee-row,junior-row,stepwise-row,open-selection-row"
        data-focal-rule="committee-in-supreme-and-provincial-courts-one-third-judge-representatives"
        data-focal-channels="committee-row,selection-stairs"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="judge-selection" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.teal} watermark={<Landmark size={180} color={C.teal} strokeWidth={1.6} />} style={{height: 132, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DeskTab bar={C.teal} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>法官遴选委员会</DeskTab>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <Mark color={C.teal}>最高人民法院</Mark>和<Mark color={C.teal}>省级人民法院</Mark>设置法官遴选委员会
              <br />
              省级遴选委员会组成：地方各级法院法官代表 · 其他从事法律职业的人员 · 有关方面代表 —— 法官代表 <BrassSeal tone={C.assess} delay={130}>不少于 1/3</BrassSeal>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 156, width: 1776}}>
          <Panel tone={C.brass} watermark={<TrendingUp size={170} color={C.brass} strokeWidth={1.6} />} style={{height: 208, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <DeskTab bar={C.brass} icon={<TrendingUp size={26} color={C.paper} strokeWidth={2.2} />}>初任 · 逐级遴选</DeskTab>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.teal} title="初任法官：">
              一般到<Mark color={C.teal}>基层人民法院</Mark>任职
            </IconChip>
            <IconChip icon={<TrendingUp size={28} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="逐级遴选：">
              上级法院法官一般<Mark color={C.brass}>逐级遴选</Mark>；最高人民法院和高级人民法院法官可以从<Mark color={C.brass}>下两级人民法院</Mark>遴选；参加遴选应在下级法院担任法官一定年限＋具有遴选职位相关工作经历
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" style={{position: 'absolute', left: 0, top: 388, width: 1776}}>
          <Panel tone={C.assess} watermark={<Users size={170} color={C.assess} strokeWidth={1.6} />} style={{height: 160, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DeskTab bar={C.assess} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>公开选拔</DeskTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              从<Mark color={C.assess}>律师</Mark>或<Mark color={C.assess}>法学教学·研究人员</Mark>中公开选拔：律师<BrassSeal tone={C.assess} delay={150}>实际执业不少于 5 年</BrassSeal>·执业经验丰富·从业声誉良好；教研人员<Mark color={C.assess}>中级以上职称</Mark>＋从事教学研究 <BrassSeal tone={C.brass} delay={165}>5 年以上</BrassSeal>＋突出研究能力和相应研究成果
              <br />
              院长应当具有<Mark color={C.teal}>法学专业知识和法律职业经历</Mark>；副院长·审委会委员从法官·检察官或其他具备法官条件的人员中产生
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AssessmentScene = () => {
  /* data-final-knowledge="judge-assessment" */
  const grades = [
    {name: '优秀', tone: C.teal},
    {name: '称职', tone: C.brass},
    {name: '基本称职', tone: C.inkSoft},
    {name: '不称职', tone: C.assess},
  ] as const;
  return (
    <Shell code="02" kicker="法官考评" title="法官考评">
      <div
        data-layout="grade-tile-row"
        data-visual-anchor="main center"
        data-text-treatments="grade-tiles,committee-chips"
        data-visual-grammar="grade-tile-x4,committee-row"
        data-focal-rule="four-annual-assessment-grades-and-committee-make-up"
        data-focal-channels="grade-tiles,committee-row"
        style={{position: 'absolute', inset: 0}}
      >
        {grades.map((grade, index) => (
          <Enter key={grade.name} delay={6 + index * 16} from="up" marker={index === 0 ? 'judge-assessment' : undefined} style={{position: 'absolute', left: 138 + index * 380, top: 0, width: 360}}>
            <Panel tone={grade.tone} style={{height: 168, padding: '14px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
              <Award size={44} color={grade.tone} strokeWidth={2.2} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{grade.name}</span>
              <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>年度考核结果</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={70} from="up" style={{position: 'absolute', left: 0, top: 208, width: 1776}}>
          <Panel tone={C.brass} watermark={<Users size={170} color={C.brass} strokeWidth={1.6} />} style={{height: 140, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DeskTab bar={C.brass} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>法官考评委员会</DeskTab>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              组成人员 <BrassSeal tone={C.teal} delay={140}>5 至 9 人</BrassSeal>；考评委员会主任由<Mark color={C.brass}>本院院长</Mark>担任
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 372, width: 1776}}>
          <DeskStrip style={{height: 128}}>
            <Award size={42} color={C.brass} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.assess, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              遴选委员会：最高法＋省级法院设置，法官代表<Mark color={C.paper}>不少于 1/3</Mark>
              <br />
              逐级遴选：初任到基层 · 上级逐级遴选 · 最高和高院可从下两级遴选
            </span>
          </DeskStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudgeManagement = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-selection" {...SCENES.selection}>
      <SelectionScene />
    </TimelineSequence>
    <TimelineSequence name="02-assessment" {...SCENES.assessment}>
      <AssessmentScene />
    </TimelineSequence>
  </AbsoluteFill>
);
