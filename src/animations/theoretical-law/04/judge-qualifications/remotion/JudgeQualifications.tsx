import type {CSSProperties, ReactNode} from 'react';
import {Award, Ban, FileCheck, Gavel, GraduationCap, HeartHandshake, Home, Hourglass, Landmark, Scale, UserX, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  robe: '#2E3440',
  robeDeep: '#232935',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5F6B7A',
  ink: '#242B36',
  inkSoft: '#556070',
  tasselGold: '#C7A24B',
  measureRed: '#B04834',
  archiveTeal: '#4F7D74',
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
      backgroundColor: C.robe,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(199, 162, 75, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 104px, rgba(35, 41, 53, 0.55) 104px 107px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.tasselGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.robeDeep, borderLeft: `8px solid ${C.measureRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 62 · {code}</span>
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
        borderBottom: `2px solid ${C.tasselGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.tasselGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.archiveTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.archiveTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.archiveTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.archiveTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const RobeTab = ({children, bar = C.measureRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.robeDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const RobeStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(35, 41, 53, 0.94)', border: `2px solid ${C.tasselGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.measureRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.tasselGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const ConditionsScene = () => {
  /* data-final-knowledge="qualification-conditions" */
  const years = [
    {degree: '法学学士 / 非法学学士以上学位', years: '5 年法律工作经验', icon: <GraduationCap size={28} color={C.paper} strokeWidth={2.2} />, tone: C.archiveTeal},
    {degree: '法学硕士 · 法律硕士', years: '4 年法律工作经验', icon: <GraduationCap size={28} color={C.paper} strokeWidth={2.2} />, tone: C.tasselGold},
    {degree: '法学博士', years: '3 年法律工作经验', icon: <GraduationCap size={28} color={C.paper} strokeWidth={2.2} />, tone: C.measureRed},
  ] as const;
  const bans = ['因犯罪受过刑事处罚', '被开除公职', '被吊销律师·公证员执业证书或被仲裁委员会除名', '法律规定的其他情形'];
  return (
    <Shell code="01" kicker="学历 · 年限 · 禁止性 · 限制" title="任职条件">
      <div
        data-layout="measure-scale-columns"
        data-visual-anchor="main center"
        data-text-treatments="scale-rows,forbid-seals"
        data-visual-grammar="degree-scale,year-scale,forbid-row,restrict-row"
        data-focal-rule="degree-times-years-scale-and-post-departure-limits"
        data-focal-channels="scale-rows,departure-limits"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="qualification-conditions" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 548}}>
          <Panel tone={C.archiveTeal} watermark={<GraduationCap size={180} color={C.archiveTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <RobeTab bar={C.archiveTeal} icon={<GraduationCap size={26} color={C.paper} strokeWidth={2.2} />}>学历条件 × 年限条件</RobeTab>
            {years.map((row) => (
              <IconChip key={row.degree} icon={row.icon} tone={row.tone} title={`${row.degree}：`}>
                <GoldSeal tone={row.tone} delay={100}>{row.years}</GoldSeal>
              </IconChip>
            ))}
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.archiveTeal}`, padding: '8px 12px'}}>
              非法学本科及以上学位，应当具备<Mark color={C.archiveTeal}>相当的法律专业知识</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 548}}>
          <Panel tone={C.measureRed} watermark={<Ban size={180} color={C.measureRed} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RobeTab bar={C.measureRed} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>禁止性条件（四不得任法官）</RobeTab>
            {bans.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.45, backgroundColor: `${C.measureRed}12`, borderLeft: `5px solid ${C.measureRed}`, padding: '6px 11px'}}>
                <span style={{color: C.measureRed, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
            <RobeTab bar={C.tasselGold} icon={<UserX size={26} color={C.paper} strokeWidth={2.2} />}>限制条件 · 兼职与离任</RobeTab>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.tasselGold} title="兼职禁止：">
              不得兼任人大常委会组成人员·行政机关·监察机关·检察机关职务·企业等营利组织·事业单位职务·律师·仲裁员·公证员
            </IconChip>
            <IconChip icon={<Hourglass size={28} color={C.paper} strokeWidth={2.2} />} tone={C.measureRed} title="离任限制：">
              离任后 <GoldSeal tone={C.measureRed} delay={150}>2 年内</GoldSeal>不得以律师身份担任诉讼代理人·辩护人；离任后不得担任<Mark color={C.measureRed}>原任职法院</Mark>办理案件的代理人·辩护人（当事人监护人·近亲属除外）；被开除后同样不得担任（同除外）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AvoidanceScene = () => {
  /* data-final-knowledge="recusal-rules" */
  const bounds = [
    {text: '同一法院的院长·副院长·审判委员会委员·庭长·副庭长', icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, tone: C.measureRed},
    {text: '同一法院的院长·副院长和审判员', icon: <Users size={28} color={C.paper} strokeWidth={2.2} />, tone: C.tasselGold},
    {text: '同一审判庭的庭长·副庭长·审判员', icon: <Scale size={28} color={C.paper} strokeWidth={2.2} />, tone: C.archiveTeal},
    {text: '上下相邻两级人民法院的院长·副院长', icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, tone: C.measureRed},
  ] as const;
  return (
    <Shell code="02" kicker="夫妻 · 直系血亲 · 三代以内旁系血亲 · 近姻亲" title="任职回避">
      <div
        data-layout="four-boundary-steles"
        data-visual-anchor="main center"
        data-text-treatments="boundary-steles,family-seals"
        data-visual-grammar="court-boundary-x4,family-bar"
        data-focal-rule="relatives-cannot-hold-listed-posts-simultaneously"
        data-focal-channels="four-boundaries,family-bar"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="up" marker="recusal-rules" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.measureRed} watermark={<Users size={180} color={C.measureRed} strokeWidth={1.6} />} style={{height: 330, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <RobeTab bar={C.measureRed} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>法官之间有夫妻·直系血亲·三代以内旁系血亲·近姻亲关系的，不得同时担任：</RobeTab>
            {bounds.map((bound, index) => (
              <div key={bound.text} style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.45, backgroundColor: C.panelDim, borderLeft: `6px solid ${bound.tone}`, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 10, backgroundColor: bound.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{bound.icon}</span>
                <span><span style={{fontWeight: 950, color: bound.tone}}>{['（一）', '（二）', '（三）', '（四）'][index]}</span> {bound.text}</span>
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={70} from="up" style={{position: 'absolute', left: 0, top: 354, width: 1776}}>
          <Panel tone={C.archiveTeal} watermark={<Home size={160} color={C.archiveTeal} strokeWidth={1.6} />} style={{height: 148, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RobeTab bar={C.archiveTeal} icon={<Home size={26} color={C.paper} strokeWidth={2.2} />}>配偶 · 父母 · 子女的律师情形，法官应当实行任职回避</RobeTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              （一）担任该法官所任职法院<Mark color={C.archiveTeal}>辖区内律师事务所的合伙人或者设立人</Mark>的
              <br />
              （二）在该法官所任职法院辖区内<Mark color={C.archiveTeal}>以律师身份担任诉讼代理人·辩护人</Mark>，或者为诉讼案件当事人提供<Mark color={C.archiveTeal}>其他有偿法律服务</Mark>的
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 526, width: 1776}}>
          <RobeStrip style={{height: 118}}>
            <Ban size={42} color={C.tasselGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.measureRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>任职回避口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              不能同院都领导，不能同院正副院长和法官
              <br />
              不能同院同部门，不能上下两级法院正副院长
            </span>
          </RobeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const AppointmentScene = () => {
  /* data-final-knowledge="appointment-punishment" */
  return (
    <Shell code="03" kicker="任免 · 奖惩 · 保障" title="任免与奖惩保障">
      <div
        data-layout="archive-ledger-tiers"
        data-visual-anchor="main center"
        data-text-treatments="ledger-tiers,archive-stamps"
        data-visual-grammar="supreme-tier,local-tier,region-tier,exemptions-row,guarantee-row"
        data-focal-rule="appointment-authority-split-by-court-tier"
        data-focal-channels="appointment-tiers,guarantees"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="appointment-punishment" style={{position: 'absolute', left: 0, top: 0, width: 960, height: 548}}>
          <Panel tone={C.archiveTeal} watermark={<Landmark size={180} color={C.archiveTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RobeTab bar={C.archiveTeal} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>法官的任免（分法院层级）</RobeTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.measureRed} title="最高人民法院：">
              院长由<Mark color={C.measureRed}>全国人大选举和罢免</Mark>；副院长·审委会委员·庭长·副庭长·审判员由院长<Mark color={C.archiveTeal}>提请全国人大常委会任免</Mark>；巡回法庭庭长·副庭长同
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.tasselGold} title="地方各级法院：">
              院长由<Mark color={C.tasselGold}>本级人大选举和罢免</Mark>；副院长·审委会委员·庭长·副庭长·审判员由本院院长<Mark color={C.archiveTeal}>提请本级人大常委会任免</Mark>
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.archiveTeal} title="地区·直辖市中院：">
              院长由省级人大常委会<Mark color={C.archiveTeal}>根据主任会议的提名</Mark>决定任免；副院长等由<Mark color={C.archiveTeal}>高级人民法院院长提请</Mark>省级人大常委会任免
            </IconChip>
            <IconChip icon={<FileCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.measureRed} title="兵团·专门法院：">
              依照<Mark color={C.measureRed}>全国人大常委会的有关规定</Mark>任免
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.archiveTeal}`, padding: '7px 12px'}}>
              初任法官采用<Mark color={C.archiveTeal}>考试·考核</Mark>办法，德才兼备·择优人选；院长应当具有法学专业知识和法律职业经历
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 1000, top: 0, width: 776, height: 548}}>
          <Panel tone={C.measureRed} watermark={<Gavel size={170} color={C.measureRed} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RobeTab bar={C.measureRed} icon={<FileCheck size={26} color={C.paper} strokeWidth={2.2} />}>免除职务（八情形）</RobeTab>
            <div style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.55}}>
              丧失中国国籍 · 调出本法院或申请免职经批准 · 职务变动 · 不称职 · 健康原因 · 退休 · 辞职或被辞退 · 违纪违法犯罪的
            </div>
            <RobeTab bar={C.tasselGold} icon={<Award size={26} color={C.paper} strokeWidth={2.2} />}>奖励与处分</RobeTab>
            <IconChip icon={<Award size={28} color={C.paper} strokeWidth={2.2} />} tone={C.archiveTeal} title="奖励：">
              公正司法成绩显著 · 审判经验成果突出 · 重大案件专项工作贡献 · 改革建议被采纳 · 司法建议与法治宣传效果显著等
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.measureRed} title="处分：">
              贪污受贿·徇私舞弊·枉法裁判 · 隐瞒伪造损毁证据 · 泄露秘密隐私 · 故意违法办案 · 重大过失致裁判错误 · 拖延办案 · 谋取私利 · 违规会见当事人·利益输送 · 违规兼职营利等，构成犯罪追究刑责
            </IconChip>
            <RobeTab bar={C.archiveTeal} icon={<HeartHandshake size={26} color={C.paper} strokeWidth={2.2} />}>法官的保障</RobeTab>
            <div style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.5}}>
              履行职务保障（依法审判不受干涉·非因法定事由程序不被免职降职辞退处分）· 人身财产保障 · 工资保险福利保障（<Mark color={C.archiveTeal}>定期增资</Mark>·审判津贴地区津贴·退休养老金）
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const JudgeQualifications = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-conditions" {...SCENES.conditions}>
      <ConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="02-avoidance" {...SCENES.avoidance}>
      <AvoidanceScene />
    </TimelineSequence>
    <TimelineSequence name="03-appointment" {...SCENES.appointment}>
      <AppointmentScene />
    </TimelineSequence>
  </AbsoluteFill>
);


