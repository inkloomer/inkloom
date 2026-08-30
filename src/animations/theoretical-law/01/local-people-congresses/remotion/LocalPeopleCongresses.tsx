import type {CSSProperties, ReactNode} from 'react';
import {Bell, Building2, CalendarClock, FileCheck, Gavel, Hourglass, Landmark, MapPin, MessageCircleQuestion, PenLine, Scale, ScrollText, SearchCheck, UserCheck, UserMinus, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  atlas: '#2F5560',
  atlasDeep: '#224049',
  panel: '#F0E9D2',
  panelDim: '#E1DABF',
  edge: '#5F7480',
  ink: '#22323A',
  inkSoft: '#51626C',
  county: '#BC4A2E',
  mapGold: '#C7A23C',
  willow: '#7A9457',
  paper: '#F6F0DE',
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
      backgroundColor: C.atlas,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(199, 162, 60, 0.13), transparent 72%), repeating-linear-gradient(0deg, transparent 0 96px, rgba(34, 64, 73, 0.55) 96px 99px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.mapGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.atlasDeep, borderLeft: `8px solid ${C.county}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 45 · {code}</span>
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
        borderBottom: `2px solid ${C.mapGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.mapGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.county}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.county}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.county}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.county}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const TabletTab = ({children, bar = C.county, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.atlasDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const HallStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(34, 64, 73, 0.94)', border: `2px solid ${C.mapGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.county}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const MapSeal = ({children, tone = C.county, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const TenurePersonnelScene = () => {
  /* data-final-knowledge="tenure-powers" */
  return (
    <Shell code="01" kicker="任期与人事任免" title="任期与职权">
      <div
        data-layout="twin-tablet-hall"
        data-visual-anchor="main center"
        data-text-treatments="tablet-plaques,icon-chip-rows"
        data-visual-grammar="tenure-tablet,acting-tablet"
        data-focal-rule="five-year-term-and-shared-legislative-appointment-powers"
        data-focal-channels="tablet-headings,acting-slot-rule"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="tenure-powers" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 372}}>
          <Panel tone={C.county} watermark={<Hourglass size={170} color={C.county} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <TabletTab bar={C.county} icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />}>任期与职权</TabletTab>
            <IconChip icon={<Hourglass size={28} color={C.paper} strokeWidth={2.2} />} tone={C.county} title="任期：">
              地方各级人大任期 <Mark color={C.county}>5 年</Mark>；本级人大常委会同届
            </IconChip>
            <IconChip icon={<PenLine size={28} color={C.paper} strokeWidth={2.2} />} tone={C.mapGold} title="职权：">
              <Mark color={C.mapGold}>地方立法权 ＋ 人事任免权</Mark> —— 地方各级人大与人大常委会两者相同
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 372}}>
          <Panel tone={C.willow} watermark={<UserCheck size={170} color={C.willow} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <TabletTab bar={C.willow} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>代理正职与备案</TabletTab>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.willow} title="代理正职：">
              地方人大闭会期间，本级人常根据<Mark color={C.willow}>主任会议提名</Mark>，可以从<Mark color={C.willow}>副职中决定代理正职</Mark>
            </IconChip>
            <IconChip icon={<FileCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.mapGold} title="备案：">
              代理检察长仍需<Mark color={C.mapGold}>上一级检察长提请</Mark>同级人常<Mark color={C.mapGold}>备案</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" style={{position: 'absolute', left: 0, top: 428, width: 1776}}>
          <HallStrip style={{height: 200}}>
            <MapPin size={44} color={C.mapGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.county, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>中央与地方两个不同</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.7}}>
              地方的两院一委<Mark color={C.county}>没有提案权</Mark>；地方政府的正职<Mark color={C.county}>无权提名自己的副手</Mark>
              <br />
              县级人大无<Mark color={C.willow}>秘书长</Mark> · 乡级人大无<Mark color={C.willow}>常委会</Mark>；地方组织法亮点：跨行政区域协同发展 · 跨部门联合执法
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SpecialAppointmentScene = () => {
  /* data-final-knowledge="special-appointment" */
  const slots = [
    {name: '人大专属（非人常）', tone: C.county, icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, body: '一府两院一委正职 ＋ 副乡长；检察长必须由上一级检察长提请同级人大常委会批准'},
    {name: '均可（人大·人常）', tone: C.mapGold, icon: <Users size={28} color={C.paper} strokeWidth={2.2} />, body: '各级地方政府副职，但不包含副乡长'},
    {name: '人常专属（非人大）', tone: C.willow, icon: <Building2 size={28} color={C.paper} strokeWidth={2.2} />, body: '政府部门首长；法检及监察委其他官员'},
  ] as const;
  return (
    <Shell code="02" kicker="特殊任免 · 提名制度" title="特殊任免与提名">
      <div
        data-layout="tri-slot-appointment"
        data-visual-anchor="main center"
        data-text-treatments="slot-plaques,nomination-threads"
        data-visual-grammar="npc-slot,shared-slot,sc-slot"
        data-focal-rule="special-courts-appointed-by-provincial-standing-committee"
        data-focal-channels="three-slots,special-courts-mnemonic"
        style={{position: 'absolute', inset: 0}}
      >
        {slots.map((slot, index) => (
          <Enter key={slot.name} delay={6 + index * 20} from="up" style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={slot.tone} style={{height: 236, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 10, backgroundColor: slot.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{slot.icon}</span>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{slot.name}</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>{slot.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={80} from="up" marker="special-appointment" style={{position: 'absolute', left: 0, top: 260, width: 1776}}>
          <Panel tone={C.mapGold} watermark={<Scale size={170} color={C.mapGold} strokeWidth={1.6} />} style={{height: 224, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabletTab bar={C.mapGold} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>特殊任免：地区 · 直辖市的中院与分检</TabletTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.county} title="中院：">
              院长←<Mark color={C.county}>省级人大常委会主任会议</Mark>提名；审判员以上其他官员←<Mark color={C.county}>省级高院院长</Mark>提名
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.willow} title="分检：">
              检察长 · 检察员以上其他官员←<Mark color={C.willow}>省级检察院检察长</Mark>提名
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 508, width: 1776}}>
          <HallStrip style={{height: 100}}>
            <Scale size={40} color={C.mapGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.county, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 950, color: C.paper, letterSpacing: 1}}>
              特殊法检提半级，院长主任会议提，其他省院首长提
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MeetingsScene = () => {
  /* data-final-knowledge="meeting-system" */
  const cells = [
    {label: '会期', icon: <CalendarClock size={30} color={C.paper} strokeWidth={2.2} />, tone: C.county, body: '地方人大每年至少一次 · 乡一般两次；人常（省市县）每两月一次；开会需 2/3 以上代表出席'},
    {label: '临时开会', icon: <Bell size={30} color={C.paper} strokeWidth={2.2} />, tone: C.mapGold, body: '县级以上：1/5 以上代表 或 本级人常提议；乡：1/5 以上代表 或 主席团提议'},
    {label: '召集', icon: <Users size={30} color={C.paper} strokeWidth={2.2} />, tone: C.willow, body: '县级以上由本级人常召集；乡镇人大由上一次会议的主席团召集'},
    {label: '主持', icon: <Landmark size={30} color={C.paper} strokeWidth={2.2} />, tone: C.atlasDeep, body: '主席团主持；县级以上主席团由同级人常预备会议选举；乡主席团开会期间选举，乡正副主席为当然成员'},
  ] as const;
  return (
    <Shell code="03" kicker="会议制度" title="会议制度">
      <div
        data-layout="four-cell-ledger"
        data-visual-anchor="main center"
        data-text-treatments="ledger-cells,willow-notes"
        data-visual-grammar="term-cell,temp-cell,convene-cell,preside-cell"
        data-focal-rule="local-meeting-cadence-and-presidium-selection"
        data-focal-channels="ledger-cells,nomination-numbers"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1776, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          {cells.map((cell, index) => (
            <Enter key={cell.label} delay={6 + index * 16} from="up" style={{}}>
              <Panel marker={index === 0 ? 'meeting-system' : undefined} tone={cell.tone} style={{height: 180, padding: '12px 18px', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: cell.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{cell.icon}</span>
                <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                  <span style={{fontSize: 24, fontWeight: 950, color: cell.tone}}>{cell.label}</span>
                  <br />
                  {cell.body}
                </span>
              </Panel>
            </Enter>
          ))}
        </div>
        <Enter delay={90} from="up" style={{position: 'absolute', left: 0, top: 400, width: 1776}}>
          <Panel tone={C.willow} watermark={<ScrollText size={160} color={C.willow} strokeWidth={1.6} />} style={{height: 130, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabletTab bar={C.willow} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>提名 · 主任会议</TabletTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              人大常委会组成人员·乡人大正副主席·各级政府正副首长·监察委主任·两院首长：由<Mark color={C.willow}>主席团或代表提名</Mark>（省级 <MapSeal tone={C.willow} delay={140}>30 人</MapSeal> · 市级 <MapSeal tone={C.willow} delay={152}>20 人</MapSeal> · 县级以下 <MapSeal tone={C.willow} delay={164}>10 人</MapSeal>）；其他官员由本机关首长提名
              <br />
              主任会议（省市县）：常委会主任·副主任·<Mark color={C.county}>秘书长（地市级以上有，县以下无）</Mark>组成，处理常委会日常事务
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const MotionsRemovalScene = () => {
  /* data-final-knowledge="motion-removal" */
  const tracks = [
    {name: '地方各级人大', tone: C.county, icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, rows: [
      '机关提案：主席团·常委会·专委会（县级以上）·政府 —— 地方法·检没有提案权；个人提案：代表 10 人以上（乡镇 5 人以上）',
      '质询案：代表 10 人以上提出，对象一府两院一委',
      '罢免案：主席团·常委会 或 1/10 以上代表（乡镇：主席团 或 1/5 以上代表）',
      '特调委：主席团 或 1/10 以上代表书面联名；列入议程：机关必须列入·个人由主席团决定；表决：全体代表过半数',
    ]},
    {name: '地方各级人大常委会', tone: C.willow, icon: <Users size={28} color={C.paper} strokeWidth={2.2} />, rows: [
      '机关提案：主任会议·专委会（县级以上）·政府；个人提案：组成人员 5 人以上（县级 3 人以上）',
      '质询案：组成人员 5 人以上（县级 3 人以上），对象一府两院一委',
      '罢免案：无',
      '特调委：主任会议 或 1/5 以上组成人员书面联名；列入议程：统一由主任会议决定；表决：全体组成人员过半数',
    ]},
  ] as const;
  return (
    <Shell code="04" kicker="议案 · 质询 · 罢免 · 撤职" title="议案程序 · 撤职案">
      <div
        data-layout="dual-track-memorial"
        data-visual-anchor="main center"
        data-text-treatments="memorial-rows,threshold-stamps"
        data-visual-grammar="npc-track,sc-track,removal-board"
        data-focal-rule="local-motion-thresholds-and-removal-targets"
        data-focal-channels="dual-tracks,removal-board"
        style={{position: 'absolute', inset: 0}}
      >
        {tracks.map((track, index) => (
          <Enter key={track.name} delay={6 + index * 22} from="up" style={{position: 'absolute', left: 0, top: index * 226, width: 1776}}>
            <Panel tone={track.tone} style={{height: 210, padding: '8px 16px', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
              <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 10, backgroundColor: track.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{track.icon}</span>
              <span style={{fontSize: 21, fontWeight: 850, color: C.ink, lineHeight: 1.4}}>
                <span style={{fontSize: 23, fontWeight: 950, color: track.tone}}>{track.name}</span>
                {track.rows.map((row) => (
                  <span key={row} style={{display: 'block'}}>· {row}</span>
                ))}
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={70} from="up" marker="motion-removal" style={{position: 'absolute', left: 0, top: 452, width: 1776}}>
          <Panel tone={C.mapGold} watermark={<UserMinus size={150} color={C.mapGold} strokeWidth={1.6} />} style={{height: 272, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabletTab bar={C.mapGold} icon={<UserMinus size={26} color={C.paper} strokeWidth={2.2} />}>撤职案（向本级人常提出）</TabletTab>
            <IconChip icon={<UserMinus size={28} color={C.paper} strokeWidth={2.2} />} tone={C.county} title="对象：">
              政府个别副职或其任命的组成人员 · 法检副职与审检委员 · <Mark color={C.county}>中院院长 · 分检检察长</Mark> · 监委副主任·委员
            </IconChip>
            <IconChip icon={<MessageCircleQuestion size={28} color={C.paper} strokeWidth={2.2} />} tone={C.willow} title="提案主体：">
              一府两院一委 · 主任会议 · 1/5 以上常委会组成人员；写明对象和理由并提供材料
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.mapGold} title="通过：">
              <Mark color={C.mapGold}>无记名投票</Mark>，常委会全体组成人员<Mark color={C.mapGold}>过半数</Mark>通过
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LocalPeopleCongresses = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-tenure-personnel" {...SCENES.tenurePersonnel}>
      <TenurePersonnelScene />
    </TimelineSequence>
    <TimelineSequence name="02-special-appointment" {...SCENES.specialAppointment}>
      <SpecialAppointmentScene />
    </TimelineSequence>
    <TimelineSequence name="03-meetings" {...SCENES.meetings}>
      <MeetingsScene />
    </TimelineSequence>
    <TimelineSequence name="04-motions-removal" {...SCENES.motionsRemoval}>
      <MotionsRemovalScene />
    </TimelineSequence>
  </AbsoluteFill>
);


