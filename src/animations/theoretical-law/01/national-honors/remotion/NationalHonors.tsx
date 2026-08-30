import type {CSSProperties, ReactNode} from 'react';
import {Award, Crown, Gavel, Handshake, Landmark, Medal, MessageCircleQuestion, ScrollText, Sparkles} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  velvet: '#45242E',
  velvetDeep: '#331A22',
  panel: '#F3ECDB',
  panelDim: '#E5DCC5',
  edge: '#7A6258',
  ink: '#2A1E22',
  inkSoft: '#5E4C4E',
  gold: '#C9A23F',
  ribbon: '#3E5C8A',
  jade: '#4E7D6B',
  paper: '#F7F2E4',
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
      backgroundColor: C.velvet,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(201, 162, 63, 0.16), transparent 70%), repeating-linear-gradient(45deg, transparent 0 64px, rgba(51, 26, 34, 0.5) 64px 67px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.velvetDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 40 · {code}</span>
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
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const VelvetTab = ({children, bar = C.gold, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.velvetDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const VelvetStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(51, 26, 34, 0.94)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.gold}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const NumberPlate = ({children, tone = C.gold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
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

export const MotionsScene = () => {
  /* data-final-knowledge="motion-numbers" data-final-knowledge="presidium-powers" */
  return (
    <Shell code="01" kicker="议案对比 · 主席团" title="议案对比">
      <div
        data-layout="bronze-plaque-rows"
        data-visual-anchor="main center"
        data-text-treatments="engraved-numbers,icon-chip-rows"
        data-visual-grammar="general-motion-row,query-row,recall-row,presidium-row"
        data-focal-rule="motion-number-thresholds-and-presidium-four-powers"
        data-focal-channels="engraved-number-stamps,presidium-row"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="motion-numbers" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.gold} watermark={<Landmark size={190} color={C.gold} strokeWidth={1.6} />} style={{height: 340, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <VelvetTab bar={C.gold} icon={<Landmark size={26} color={C.gold} strokeWidth={2.2} />}>一般议案 · 质询案 · 鱿鱼案</VelvetTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="一般议案：">
              人大机关提案「两央（国务院·中央军委）两高（最高法·最高检）三委（全人常·专门委员会·国家监委）一团（主席团）」，个人 <NumberPlate tone={C.jade} delay={110}>一个代表团或 30 名以上</NumberPlate>；人常机关「两央两高三委」，个人 <NumberPlate tone={C.jade} delay={122}>10 名以上</NumberPlate> —— 机关议案必须列入议程
            </IconChip>
            <IconChip icon={<MessageCircleQuestion size={28} color={C.paper} strokeWidth={2.2} />} tone={C.ribbon} title="质询案：">
              人大 <NumberPlate tone={C.ribbon} delay={134}>301</NumberPlate> ｜ 人常 <NumberPlate tone={C.ribbon} delay={146}>10</NumberPlate> —— 对象一府两院一委
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.gold} title="鱿鱼案：">
              人大<Mark color={C.gold}>罢免案</Mark> <NumberPlate tone={C.gold} delay={158}>103团</NumberPlate>（主席团 · 3 个以上代表团 · 1/10 以上代表）；人常<Mark color={C.gold}>撤职案</Mark>：对象两央（副职），首长都能提（国务院总理·中央军委主席），国务院加上委员长会议
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="presidium-powers" style={{position: 'absolute', left: 0, top: 364, width: 1776}}>
          <Panel tone={C.ribbon} watermark={<Crown size={150} color={C.ribbon} strokeWidth={1.6} />} style={{height: 150, padding: '10px 22px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <VelvetTab bar={C.ribbon} icon={<Crown size={26} color={C.gold} strokeWidth={2.2} />}>主席团 · 开会期间的「主持人」</VelvetTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              <Mark color={C.ribbon}>预备会议选举产生</Mark> · 提名选举类官员候选人（国家主席·副主席·军委主席等）· 可向全国人大<Mark color={C.jade}>提出议案</Mark> · 可向全国人大<Mark color={C.gold}>提出罢免案</Mark>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>共有权力：监督宪法实施（人大·人常都有）；人大独有：选举国家主席·副主席，决定战争与和平</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 540, width: 1776}}>
          <VelvetStrip style={{height: 104}}>
            <MessageCircleQuestion size={40} color={C.gold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.velvetDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>记忆锚</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              机关必列议程 · 个人看数目：人大<NumberPlate tone={C.jade} delay={170}>一个团/30 名</NumberPlate>，人常<NumberPlate tone={C.jade} delay={182}>10 名</NumberPlate>；罢免 <NumberPlate tone={C.gold} delay={194}>103团</NumberPlate>，撤职两央副职首长提
            </span>
          </VelvetStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const HonoringScene = () => {
  /* data-final-knowledge="honor-process" data-final-knowledge="president-discretion" */
  const steps = [
    {name: '提请', tone: C.ribbon, icon: <Handshake size={32} color={C.paper} strokeWidth={2.2} />, body: '国务院 · 中央军委 · 委员长会议（「两央委员长会议提」）'},
    {name: '决定', tone: C.jade, icon: <ScrollText size={32} color={C.paper} strokeWidth={2.2} />, body: '全国人大常委会（「常委会定」）：授予国家勋章与国家荣誉称号'},
    {name: '颁发', tone: C.gold, icon: <Medal size={32} color={C.paper} strokeWidth={2.2} />, body: '国家主席（授予勋章·荣誉称号由主席颁授）'},
  ] as const;
  return (
    <Shell code="02" kicker="授予流程 · 主席自主权" title="授予与主席自主权">
      <div
        data-layout="three-step-gold-thread"
        data-visual-anchor="main center"
        data-text-treatments="step-plaques,medal-stamps"
        data-visual-grammar="propose-step,decide-step,award-step"
        data-focal-rule="honor-process-three-steps-and-president-discretion"
        data-focal-channels="three-step-headings,mnemonic-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 10, width: 1776, height: 6, backgroundColor: C.gold, opacity: 0.55}} />
        {steps.map((step, index) => (
          <Enter key={step.name} delay={8 + index * 22} from="up" marker={index === 0 ? 'honor-process' : undefined} style={{position: 'absolute', left: 0, top: 40 + index * 130, width: 1776}}>
            <Panel tone={step.tone} watermark={index === 2 ? <Medal size={140} color={C.gold} strokeWidth={1.6} /> : undefined} style={{height: 112, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
              <span style={{flexShrink: 0, width: 60, height: 60, borderRadius: 12, backgroundColor: step.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{step.icon}</span>
              <span style={{flexShrink: 0, width: 150, fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{step.name}</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>{step.body}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={100} from="left" marker="president-discretion" style={{position: 'absolute', left: 0, top: 442, width: 1776}}>
          <Panel tone={C.velvetDeep} style={{height: 84, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <Sparkles size={32} color={C.gold} strokeWidth={2.2} />
            <span style={{fontSize: 22, fontWeight: 900, color: C.paper}}>
              主席自主权（无需提请，依宪法职权直接行使）：
              <Mark color={C.gold}>进行国事活动</Mark> · <Mark color={C.gold}>接受外国使节</Mark> · <Mark color={C.gold}>授予友谊勋章</Mark>
            </span>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 552, width: 1776}}>
          <VelvetStrip style={{height: 112}}>
            <Award size={40} color={C.gold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.velvetDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper, letterSpacing: 2, lineHeight: 1.5}}>
              两央委员长会议提 · 常委会定 · 友谊勋章主席发
            </span>
          </VelvetStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NationalHonors = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-motions" {...SCENES.motions}>
      <MotionsScene />
    </TimelineSequence>
    <TimelineSequence name="02-honoring" {...SCENES.honoring}>
      <HonoringScene />
    </TimelineSequence>
  </AbsoluteFill>
);
