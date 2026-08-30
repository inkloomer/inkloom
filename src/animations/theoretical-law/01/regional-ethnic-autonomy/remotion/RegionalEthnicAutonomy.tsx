import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, Landmark, Lock, Map, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  meadow: '#3C5238',
  meadowDeep: '#2E4029',
  flag: '#F0E9D2',
  flagDim: '#E0D9BE',
  flagEdge: '#5C6A56',
  ink: '#2B2721',
  inkSoft: '#4F5648',
  fiveBlue: '#4A6B8A',
  fiveRed: '#A8503C',
  fiveYellow: '#B08A38',
  wind: '#8FA9B0',
  windPale: '#D9E2E0',
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
      backgroundColor: C.meadow,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 144px, ${C.wind}0F 144px 146px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.wind}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.gold ?? C.fiveYellow}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.meadowDeep, borderLeft: `8px solid ${C.fiveYellow}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 35 · {code}</span>
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
        borderBottom: `2px solid ${C.fiveYellow}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.windPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Flag = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.flag, border: `2px solid ${C.flagEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.fiveYellow}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.fiveYellow}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.fiveYellow}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.fiveYellow}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.fiveYellow}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.meadowDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const FiveChip = ({tone = C.fiveBlue, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.fiveRed}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.fiveRed, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(46, 64, 41, 0.92)', border: `2px solid ${C.fiveYellow}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const ConceptScene = () => {
  /* data-final-knowledge="concept-heading" data-final-knowledge="concept-flag" data-final-knowledge="scope-flags" data-final-knowledge="township-negation" */
  return (
    <Shell code="01" kicker="制度内涵" title="民族自治 × 区域自治">
      <div
        data-layout="central-flag-with-scope-flags"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="concept-flag,scope-flags,township-negation"
        data-focal-rule="autonomy-combines-ethnic-self-rule-with-territorial-division"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.flag, border: `3px solid ${C.flagEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              以<InkUnderline delay={36}>少数民族聚居区</InkUnderline>为基础
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="concept-flag" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 390}}>
          <Flag tone={C.fiveBlue} style={{height: '100%', padding: '20px 26px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Users size={40} color={C.fiveBlue} strokeWidth={2.3} />
              <Map size={40} color={C.fiveYellow} strokeWidth={2.3} />
            </div>
            <div style={{fontSize: 26, fontWeight: 950, color: C.ink, lineHeight: 1.5, marginTop: 4}}>
              <Soft color={C.fiveBlue}>民族自治</Soft> ＋ <Soft color={C.fiveYellow}>区域自治</Soft>的结合
            </div>
            <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>设立自治地方 · 建立自治机关</div>
          </Flag>
        </Enter>
        <Enter delay={60} from="right" marker="scope-flags" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 390}}>
          <Flag tone={C.fiveYellow} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab>自治地方 · 三级</LabelTab>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
              <FiveChip tone={C.fiveBlue} solid>自治区</FiveChip>
              <FiveChip tone={C.fiveBlue} solid>自治州</FiveChip>
              <FiveChip tone={C.fiveBlue} solid>自治县</FiveChip>
            </div>
            <div data-final-knowledge="township-negation" style={{marginTop: 'auto'}}>
              <Stamp delay={130} size={24}>民族乡 ≠ 自治地方</Stamp>
            </div>
          </Flag>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 40, top: 536, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.fiveYellow, color: C.meadowDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>区划变更授权</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              根据国务院授权：县·市·市辖区界线<Soft color={C.windPale}>局部变更</Soft> ｜ 乡·民族乡·镇<Soft color={C.windPale}>设撤更名及界线变更</Soft>——省级政府<Soft color={C.windPale}>审批</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const OrgansScene = () => {
  /* data-final-knowledge="organs-heading" data-final-knowledge="organ-flags" data-final-knowledge="court-negation" */
  return (
    <Shell code="02" kicker="自治机关" title="人大和政府，别数法院">
      <div
        data-layout="organs-flag-pair-with-negation"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="congress-flag,government-flag,court-negation"
        data-focal-rule="only-the-congress-and-government-are-self-government-organs"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="organs-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.flag, border: `3px solid ${C.flagEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              自治机关＝<InkUnderline delay={36}>人大 ＋ 人民政府</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="organ-flags" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 260}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Flag tone={C.fiveBlue} style={{flex: 1, padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Landmark size={38} color={C.fiveBlue} strokeWidth={2.3} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>自治人大</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                常委会的<Soft color={C.fiveBlue}>主任或副主任</Soft>由实行区域自治的民族的公民担任
              </div>
            </Flag>
            <Flag tone={C.fiveYellow} style={{flex: 1, padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Building2 size={38} color={C.fiveYellow} strokeWidth={2.3} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>自治人民政府</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                <Soft color={C.fiveYellow}>首长</Soft>（主席·州长·县长）由实行区域自治的民族的公民担任
              </div>
            </Flag>
          </div>
        </Enter>
        <Enter delay={100} from="up" marker="court-negation" style={{position: 'absolute', left: 40, top: 390, width: 1736, height: 160}}>
          <Flag tone={C.fiveRed} style={{height: '100%', padding: '16px 26px 18px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Ban size={36} color={C.fiveRed} strokeWidth={2.4} />
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>法院 · 检察院 —— <span style={{color: C.fiveRed, fontWeight: 950}}>不是自治机关</span></span>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              自治地方的国家机关≠都是自治机关——只有人大和政府；人大常委会也<Soft color={C.fiveRed}>没有自治权</Soft>
            </div>
          </Flag>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 578, width: 1736}}>
          <DarkStrip style={{height: 86}}>
            <span style={{padding: '4px 13px', backgroundColor: C.fiveYellow, color: C.meadowDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              数机关只数<Soft color={C.windPale}>两块牌子</Soft>——人大＋政府，其他都不是
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MnemonicsScene = () => {
  /* data-final-knowledge="mnemonics-heading" data-final-knowledge="rhyme-wall" data-final-knowledge="schedule-change-strip" */
  const rhymes = [
    {label: '变通限制', rhyme: '宪民基专不得变 · 变通批准60天', tone: C.fiveBlue},
    {label: '减税审批', rhyme: '州县减税省政府 · 边贸口岸国务院', tone: C.fiveYellow},
    {label: '公安交流', rhyme: '公安批准国务院 · 不交流是自治县', tone: C.fiveRed},
  ] as const;
  return (
    <Shell code="03" kicker="口诀幡阵" title="三串口诀，一面墙">
      <div
        data-layout="five-color-rhyme-wall"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="variation-rhyme-flags,approval-rhyme-flags,schedule-change-strip"
        data-focal-rule="rhymed-lines-encode-approvals-and-limits-of-autonomy"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="mnemonics-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.flag, border: `3px solid ${C.flagEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              口诀幡阵 · <InkUnderline delay={36}>一句一考点</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="rhyme-wall" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 290}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16, height: '100%', justifyContent: 'center'}}>
            {rhymes.map((row) => (
              <div key={row.label} style={{border: `2px solid ${C.flagEdge}`, backgroundColor: C.flagDim, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 18}}>
                <span style={{display: 'inline-flex', padding: '6px 16px', backgroundColor: row.tone, color: C.paper, fontSize: 25, fontWeight: 950, letterSpacing: 2, flexShrink: 0}}>{row.label}</span>
                <span style={{width: 2, height: 44, backgroundColor: C.flagEdge}} />
                <span style={{fontSize: 25, fontWeight: 900, color: C.ink, letterSpacing: 1, flex: 1}}>{row.rhyme}</span>
              </div>
            ))}
          </div>
        </Enter>
        <Enter delay={100} from="up" marker="schedule-change-strip" style={{position: 'absolute', left: 40, top: 428, width: 1736, height: 150}}>
          <Flag tone={C.fiveYellow} style={{height: '100%', padding: '16px 26px 18px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <ScrollText size={34} color={C.fiveYellow} strokeWidth={2.3} />
              <LabelTab>自治条例·单行条例的变通</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              不得对<Soft color={C.fiveRed}>宪法 · 民族区域自治法 · 法律行政法规基本原则 · 专门就民族自治地方所作规定</Soft>变通
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>
              「宪民基专」——口诀对应四不碰
            </div>
          </Flag>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 606, width: 1736}}>
          <DarkStrip style={{height: 82}}>
            <span style={{padding: '4px 13px', backgroundColor: C.fiveYellow, color: C.meadowDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>锁记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              <InkUnderline color={C.windPale} delay={190}>变通有底线，批准有期限</InkUnderline>
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Lock size={32} color={C.windPale} strokeWidth={2.3} />
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const RegionalEthnicAutonomy = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept" {...SCENES.concept}>
      <ConceptScene />
    </TimelineSequence>
    <TimelineSequence name="02-organs" {...SCENES.organs}>
      <OrgansScene />
    </TimelineSequence>
    <TimelineSequence name="03-mnemonics" {...SCENES.mnemonics}>
      <MnemonicsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
