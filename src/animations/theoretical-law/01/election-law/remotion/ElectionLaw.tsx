import type {CSSProperties, ReactNode} from 'react';
import {ArrowLeftRight, Ban, Calendar, CheckCircle2, ChevronsUp, Clock, EyeOff, Landmark, MapPin, Repeat, Scale, Search, Undo2, UserPlus, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  grove: '#1F3D2B',
  groveDeep: '#172F21',
  ballot: '#F0E9D2',
  ballotDim: '#E0D9BC',
  ballotEdge: '#5C6A56',
  ink: '#2B2721',
  inkSoft: '#4F5648',
  bamboo: '#5E8A4A',
  bambooPale: '#D6E0C8',
  vermilion: '#B0452F',
  vermilionPale: '#F0D2C4',
  brass: '#A9822F',
  brassPale: '#E5D3A4',
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
      backgroundColor: C.grove,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 132px, ${C.bamboo}10 132px 134px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.vermilion}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.bamboo}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.groveDeep, borderLeft: `8px solid ${C.vermilion}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 33 · {code}</span>
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
        borderBottom: `2px solid ${C.vermilion}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.bambooPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Ballot = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.ballot, border: `2px solid ${C.ballotEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.vermilion}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.groveDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const TickChip = ({tone = C.bamboo, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.vermilion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(23, 47, 33, 0.92)', border: `2px solid ${C.vermilion}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const PrinciplesScene = () => {
  /* data-final-knowledge="principles-heading" data-final-knowledge="rule-rail" data-final-knowledge="special-voters-note" */
  const rules = [
    {name: '选举权普遍', tone: C.bamboo, text: <>中国人 · 成年人 · 政治人——条件宽松</>},
    {name: '选举权平等', tone: C.bamboo, text: <>一人一票 · 同票同权 · 弱势地区特殊保护</>},
    {name: '直选间选并用', tone: C.brass, text: <>县乡<Soft color={C.bamboo}>直接选举</Soft> ｜ 市级以上<Soft color={C.brass}>间接选举</Soft></>},
    {name: '差额选举', tone: C.brass, text: <>直选多<Soft color={C.vermilion}>1/3至1倍</Soft> ｜ 间选多<Soft color={C.vermilion}>1/5至1/2</Soft></>},
    {name: '秘密投票', tone: C.vermilion, text: <>无记名＋秘密写票处 ｜ 例外：代写（会写即可）· 代投（受托人须有选民身份·限3人）</>},
  ] as const;
  return (
    <Shell code="01" kicker="五大原则" title="选举的五条铁律">
      <div
        data-layout="five-principle-rule-rail"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="universal-equal-principles,direct-indirect-principle,margin-secret-principles"
        data-focal-rule="direct-election-margins-run-a-third-to-double-indirect-a-fifth-to-half"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="principles-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.ballot, border: `3px solid ${C.ballotEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              五大原则：<InkUnderline delay={36}>差额幅度</InkUnderline>是高频考点
            </span>
          </div>
        </Enter>
        {rules.map((rule, index) => (
          <Enter key={rule.name} delay={26 + index * 20} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 96, width: 1736, height: 86}}>
            <Ballot tone={rule.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              {index === 0 ? <Users size={34} color={rule.tone} strokeWidth={2.3} /> : index === 1 ? <Scale size={34} color={rule.tone} strokeWidth={2.3} /> : index === 2 ? <ArrowLeftRight size={34} color={rule.tone} strokeWidth={2.3} /> : index === 3 ? <ChevronsUp size={34} color={rule.tone} strokeWidth={2.3} /> : <EyeOff size={34} color={rule.tone} strokeWidth={2.3} />}
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink, width: 250}}>{rule.name}</span>
              <span style={{width: 2, height: 48, backgroundColor: C.ballotEdge}} />
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, flex: 1}}>{rule.text}</span>
            </Ballot>
          </Enter>
        ))}
        <Enter delay={180} from="up" marker="special-voters-note" style={{position: 'absolute', left: 40, top: 600, width: 1736}}>
          <DarkStrip style={{height: 108}}>
            <span style={{padding: '4px 13px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>特殊人群</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              精神病人——<Soft color={C.bambooPale}>选委会确认不投票</Soft> ｜ 被羁押——<Soft color={C.bambooPale}>法检决定停止</Soft>（公安无权） ｜ 服刑——流动票箱或选民代投 ｜ 两拘——可回原选区投票
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const HostsVotersScene = () => {
  /* data-final-knowledge="hosts-heading" data-final-knowledge="compare-board" data-final-knowledge="voter-list-timeline" data-final-knowledge="precinct-rule-note" */
  return (
    <Shell code="02" kicker="主持与投票人" title="直选间选，两套班子">
      <div
        data-layout="direct-indirect-compare-board"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="host-compare,voter-precinct-compare,voter-list-timeline"
        data-focal-rule="the-standing-committee-hosts-indirect-while-committees-host-direct"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="hosts-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.ballot, border: `3px solid ${C.ballotEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              主持人 · 投票人 · 选区——<InkUnderline delay={36}>对表看齐</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="compare-board" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 230}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Ballot tone={C.bamboo} style={{flex: 1, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <TickChip tone={C.bamboo} solid>直接选举</TickChip>
                <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>县 · 乡两级</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                主持：<Soft color={C.bamboo}>选举委员会</Soft>——县人常<Soft color={C.bamboo}>领导</Soft> · 市以上人常<Soft color={C.bamboo}>指导</Soft>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                投票人：<Soft color={C.bamboo}>选区选民</Soft>
              </div>
            </Ballot>
            <Ballot tone={C.brass} style={{flex: 1, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <TickChip tone={C.brass} solid>
                  间接选举
                </TickChip>
                <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>市级以上</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                <Landmark size={28} color={C.brass} strokeWidth={2.3} style={{verticalAlign: '-5px', marginRight: 4}} />
                整体：<Soft color={C.brass}>常委会主持</Soft> · 具体：<Soft color={C.brass}>主席团负责</Soft>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                投票人：<Soft color={C.brass}>下一级人大代表</Soft>
              </div>
            </Ballot>
          </div>
        </Enter>
        <Enter delay={80} from="left" marker="voter-list-timeline" style={{position: 'absolute', left: 40, top: 358, width: 1736, height: 130}}>
          <Ballot tone={C.vermilion} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <Clock size={34} color={C.vermilion} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab>选民名单时间线 · 直选</LabelTab>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, letterSpacing: 1}}>
                <Soft color={C.vermilion}>20日</Soft>公布 → <Soft color={C.vermilion}>5日</Soft>申诉 → <Soft color={C.vermilion}>3日</Soft>处理 → <Soft color={C.vermilion}>5日</Soft>前起诉（申诉前置·一审终审）
              </div>
            </div>
          </Ballot>
        </Enter>
        <Enter delay={140} from="up" marker="precinct-rule-note" style={{position: 'absolute', left: 40, top: 512, width: 1736, height: 130}}>
          <Ballot tone={C.bamboo} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <MapPin size={36} color={C.bamboo} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab bar={C.bamboo}>选区划分 · 一次登记长期有效</LabelTab>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                按<Soft color={C.bamboo}>居住状况或生产/工作单位</Soft>划分——绝不可能按行政区划 ｜ 每选区选<Soft color={C.vermilion}>1至3名</Soft>代表（123随便不区划） ｜ 只能在一个选区投票
              </div>
            </div>
          </Ballot>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 666, width: 1736}}>
          <DarkStrip style={{height: 42, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const CandidatesScene = () => {
  /* data-final-knowledge="candidates-heading" data-final-knowledge="nomination-fork" data-final-knowledge="margin-fork" data-final-knowledge="publicity-fork" */
  return (
    <Shell code="03" kicker="候选人" title="提名、差额与公示">
      <div
        data-layout="candidate-fork-board"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="nomination-fork,margin-fork,publicity-fork"
        data-focal-rule="direct-excess-goes-negotiate-first-indirect-goes-preselect-directly"
        data-focal-channels="icon,contrast,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="candidates-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.ballot, border: `3px solid ${C.ballotEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              单位可单可联合 · 个人必须<InkUnderline delay={36}>10个人</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="nomination-fork" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 130}}>
          <Ballot tone={C.bamboo} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <UserPlus size={36} color={C.bamboo} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab bar={C.bamboo}>提名 · 谁能推谁</LabelTab>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                各政党·人民团体（联合或单独）＋<Soft color={C.bamboo}>选民或代表10人以上联名</Soft>——<span style={{color: C.crimson, fontWeight: 950}}>国家机关不行</span> ｜ 每一推荐主体≤应选名额 ｜ 间选酝酿<Soft color={C.vermilion}>不少于2天</Soft>
              </div>
            </div>
          </Ballot>
        </Enter>
        <Enter delay={80} from="left" marker="margin-fork" style={{position: 'absolute', left: 40, top: 258, width: 1736, height: 170}}>
          <Ballot tone={C.brass} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Vote size={34} color={C.brass} strokeWidth={2.3} />
              <LabelTab bar={C.brass}>差额与超员处理</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              直选：候选人多于应选<Soft color={C.brass}>1/3至1倍</Soft>——超员→选民小组<Soft color={C.vermilion}>协商</Soft>，不成<Soft color={C.vermilion}>预选</Soft>（协商前置）
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              间选：多于应选<Soft color={C.brass}>1/5至1/2</Soft>——超员→<Soft color={C.vermilion}>直接预选</Soft>（无协商）
            </div>
          </Ballot>
        </Enter>
        <Enter delay={140} from="left" marker="publicity-fork" style={{position: 'absolute', left: 40, top: 452, width: 1736, height: 160}}>
          <Ballot tone={C.vermilion} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Calendar size={34} color={C.vermilion} strokeWidth={2.3} />
              <LabelTab>公示时间 · 直选硬性时间</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              候选人名单<Soft color={C.vermilion}>15日前</Soft>公布 ｜ 正式候选人<Soft color={C.vermilion}>7日前</Soft>公布 ｜ 见面活动选举日前必须<Soft color={C.vermilion}>停止介绍</Soft>
            </div>
            <div style={{fontSize: 21, fontWeight: 870, color: C.inkSoft}}>间选：候选人名单和正式候选人名单由主席团在选举前宣布即可</div>
          </Ballot>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 636, width: 1736}}>
          <DarkStrip style={{height: 72}}>
            <span style={{padding: '4px 13px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>直选硬性时间</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, letterSpacing: 1}}>
              20 · 5 · 3 · 5 ＋ 15 · 7——<Soft color={C.bambooPale}>一串数字一次记牢</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const VotingResultScene = () => {
  /* data-final-knowledge="voting-heading" data-final-knowledge="gate-verdict" data-final-knowledge="overflow-shortfall-lanes" data-final-knowledge="announce-note" */
  return (
    <Shell code="04" kicker="投票与当选" title="双过半 · 单过半">
      <div
        data-layout="voting-gate-result-bench"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="double-half-gate,overflow-lane,shortfall-lane"
        data-focal-rule="direct-election-needs-double-half-indirect-needs-single-half"
        data-focal-channels="icon,connector,contrast,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="voting-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.ballot, border: `3px solid ${C.ballotEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              直选<InkUnderline delay={36}>双过半</InkUnderline> · 间选<InkUnderline color={C.brass} delay={48}>单过半</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={30} from="up" marker="gate-verdict" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 150}}>
          <div style={{height: '100%', border: `4px solid ${C.groveDeep}`, backgroundColor: C.groveDeep, color: C.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, padding: '0 30px'}}>
            <Vote size={46} color={C.brassPale} strokeWidth={2.2} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{fontSize: 28, fontWeight: 950}}>当选闸口</span>
              <span style={{fontSize: 23, fontWeight: 880, opacity: 0.92}}>
                直选：全体选民<Soft color={C.bambooPale}>过半数</Soft>参加投票有效 ＋ 候选人得参加投票选民<Soft color={C.bambooPale}>过半数</Soft>票 ｜ 间选：全体代表<Soft color={C.brassPale}>过半数</Soft>选票
              </span>
            </div>
          </div>
        </Enter>
        <Enter delay={90} from="left" marker="overflow-shortfall-lanes" style={{position: 'absolute', left: 40, top: 286, width: 1736, height: 230}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Ballot tone={C.bamboo} style={{flex: 1, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <CheckCircle2 size={34} color={C.bamboo} strokeWidth={2.3} />
                <LabelTab bar={C.bamboo}>选超了</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                过半数票者<Soft color={C.bamboo}>超过应选名额</Soft>→ 以<Soft color={C.bamboo}>得票多的</Soft>当选
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                票数相等不能确定 → 就票数相等者<Soft color={C.bamboo}>再次投票</Soft>
              </div>
            </Ballot>
            <Ballot tone={C.brass} style={{flex: 1, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Repeat size={34} color={C.brass} strokeWidth={2.3} />
                <LabelTab bar={C.brass}>没选够 · 另行选举</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                过半数者<Soft color={C.brass}>少于</Soft>应选名额 → 不足名额另行选举
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                直选：得票不少于参选票<Soft color={C.brass}>1/3</Soft> ｜ 间选：仍需全体代表<Soft color={C.brass}>过半数</Soft>
              </div>
            </Ballot>
          </div>
        </Enter>
        <Enter delay={160} from="up" marker="announce-note" style={{position: 'absolute', left: 40, top: 540, width: 1736}}>
          <Ballot tone={C.vermilion} style={{height: 130, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab>结果公示</LabelTab>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                直选由<Soft color={C.vermilion}>选举委员会</Soft>、间选由<Soft color={C.brass}>人大主席团</Soft>确定是否有效并宣布（同时公布代表名单）
              </div>
            </div>
          </Ballot>
        </Enter>
        <Enter delay={210} from="up" style={{position: 'absolute', left: 40, top: 694, width: 1736}}>
          <DarkStrip style={{height: 14, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const ReviewRecallScene = () => {
  /* data-final-knowledge="review-heading" data-final-knowledge="five-questions-wall" data-final-knowledge="recall-rail" data-final-knowledge="protection-rail" */
  const questions = [
    {q: '谁审查', a: '代表资格审查委员会'},
    {q: '审查谁', a: '已经当选的本级代表'},
    {q: '审查啥', a: '贿选 · 胁迫 · 伪造 · 报复 · 境外资助'},
    {q: '报告谁', a: '县以上人常 · 乡镇主席团'},
    {q: '谁决定', a: '县以上人常 · 乡镇主席团'},
  ] as const;
  return (
    <Shell code="05" kicker="复查与去留" title="五问收束，来去有踪">
      <div
        data-layout="review-questions-wall-with-recall-rail"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="five-questions-wall,recall-rail,protection-rail"
        data-focal-rule="recall-and-resignation-return-to-the-original-precinct"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="review-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.ballot, border: `3px solid ${C.ballotEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              资格复查<InkUnderline delay={36}>五问</InkUnderline> ＋ 补选罢免辞职
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="five-questions-wall" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 200}}>
          <Search size={34} color={C.vermilion} strokeWidth={2.3} style={{position: 'absolute', left: -2, top: -44}} />
          <div style={{display: 'flex', gap: 12, height: '100%'}}>
            {questions.map((item, index) => (
              <Ballot key={item.q} tone={index === 2 ? C.vermilion : C.bamboo} style={{flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>{item.q}</span>
                <span style={{width: 40, height: 3, backgroundColor: C.vermilion}} />
                <span style={{fontSize: 20, fontWeight: 870, color: C.inkSoft, lineHeight: 1.45}}>{item.a}</span>
              </Ballot>
            ))}
          </div>
        </Enter>
        <Enter delay={90} from="up" marker="recall-rail" style={{position: 'absolute', left: 40, top: 328, width: 1736, height: 180}}>
          <Ballot tone={C.brass} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Ban size={30} color={C.vermilion} strokeWidth={2.4} />
              <Undo2 size={34} color={C.brass} strokeWidth={2.3} />
              <LabelTab bar={C.brass}>补选 · 罢免 · 辞职</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              一律<Soft color={C.brass}>回原选区或原选举单位</Soft>——哪里来的回哪去，哪里缺了哪里补
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              辞职规律：<Soft color={C.vermilion}>县找县 · 乡找乡</Soft> ｜ 间选回原人常——间选丢人要报告
            </div>
          </Ballot>
        </Enter>
        <Enter delay={150} from="up" marker="protection-rail" style={{position: 'absolute', left: 40, top: 532, width: 1736, height: 150}}>
          <Ballot tone={C.bamboo} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <LabelTab bar={C.bamboo}>资格暂停 / 终止 / 履职保障</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              暂停：<Soft color={C.bamboo}>刑诉+服刑（未被剥夺政治权利）</Soft> ｜ 终止：<Soft color={C.vermilion}>两次不开会</Soft>＋明显拉倒（走人·疯了·挂了·被罢免）
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              保障：<Soft color={C.bamboo}>言论免责权</Soft>（会上发言表决不追究）· <Soft color={C.bamboo}>人身特别保护</Soft>（县级以上经主席团或许可才能逮捕）
            </div>
          </Ballot>
        </Enter>
        <Enter delay={210} from="up" style={{position: 'absolute', left: 40, top: 706, width: 1736}}>
          <DarkStrip style={{height: 2, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const ElectionLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principles" {...SCENES.principles}>
      <PrinciplesScene />
    </TimelineSequence>
    <TimelineSequence name="02-hosts-voters" {...SCENES.hostsVoters}>
      <HostsVotersScene />
    </TimelineSequence>
    <TimelineSequence name="03-candidates" {...SCENES.candidates}>
      <CandidatesScene />
    </TimelineSequence>
    <TimelineSequence name="04-voting-result" {...SCENES.votingResult}>
      <VotingResultScene />
    </TimelineSequence>
    <TimelineSequence name="05-review-recall" {...SCENES.reviewRecall}>
      <ReviewRecallScene />
    </TimelineSequence>
  </AbsoluteFill>
);
