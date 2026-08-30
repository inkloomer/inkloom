import type {CSSProperties, ReactNode} from 'react';
import {Bell, BookOpen, CalendarClock, ClipboardCheck, Crown, Ear, FileSignature, Gavel, Handshake, Hourglass, Landmark, ListChecks, Medal, Megaphone, MessageCircleQuestion, PenLine, Scale, ScrollText, Search, ShieldAlert, Siren, UserCog, UserMinus, UserPlus, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  granite: '#3A4750',
  graniteDeep: '#2B353C',
  panel: '#F2EEE0',
  panelDim: '#E3DFCD',
  edge: '#6A7680',
  ink: '#242E34',
  inkSoft: '#55616B',
  vermilion: '#B5442E',
  liuli: '#D9A514',
  jade: '#40766A',
  paper: '#F7F4E8',
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
      backgroundColor: C.granite,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1200px 500px at 50% -8%, rgba(217, 165, 20, 0.13), transparent 72%), repeating-linear-gradient(90deg, transparent 0 236px, rgba(43, 53, 60, 0.6) 236px 240px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.liuli}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.graniteDeep, borderLeft: `8px solid ${C.vermilion}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 39 · {code}</span>
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
        borderBottom: `2px solid ${C.liuli}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.liuli, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermilion}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const SeatTab = ({children, bar = C.vermilion, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.graniteDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const HallStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(43, 53, 60, 0.94)', border: `2px solid ${C.liuli}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.vermilion}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.liuli, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const CompositionScene = () => {
  /* data-final-knowledge="npc-composition" data-final-knowledge="sc-composition-tenure" */
  return (
    <Shell code="01" kicker="组成与任期" title="两席对照：全国人大 · 全人常">
      <div
        data-layout="twin-seat-hall"
        data-visual-anchor="main center"
        data-text-treatments="seat-plaque,icon-chip-rows"
        data-visual-grammar="npc-seat,sc-seat"
        data-focal-rule="composition-caps-tenure-and-four-two-thirds"
        data-focal-channels="seat-headings,four-two-thirds-stamps"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="npc-composition" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 468}}>
          <Panel tone={C.vermilion} watermark={<Users size={190} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <SeatTab bar={C.vermilion} icon={<Landmark size={26} color={C.liuli} strokeWidth={2.2} />}>全国人大</SeatTab>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="组成：">
              ≤ <GoldSeal tone={C.vermilion} delay={110}>3000 人</GoldSeal>，省·自治区·直辖市·军队·特区选出；各少数民族有适当名额代表
            </IconChip>
            <IconChip icon={<Hourglass size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="任期：">
              每届 <Mark color={C.jade}>5 年</Mark>；届满 2 个月前全人常完成下届代表选举
            </IconChip>
            <IconChip icon={<ShieldAlert size={28} color={C.paper} strokeWidth={2.2} />} tone={C.liuli} title="非常情况：">
              全人常全体 <Mark color={C.vermilion}>2/3 以上</Mark>通过可推迟选举·延长任期；非常情况结束后 <Mark color={C.vermilion}>1 年内</Mark>完成换届
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>
              最高权力机关：凌驾于其他国家机关之上，只对<Mark color={C.vermilion}>人民</Mark>负责
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="sc-composition-tenure" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 468}}>
          <Panel tone={C.jade} watermark={<UserCog size={190} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <SeatTab bar={C.jade} icon={<Crown size={26} color={C.liuli} strokeWidth={2.2} />}>全国人大常委会</SeatTab>
            <IconChip icon={<UserCog size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="组成：">
              委员长·副委员长·秘书长·委员；少数民族适当名额
            </IconChip>
            <IconChip icon={<ShieldAlert size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="专职：">
              必须是全国人大代表，<Mark color={C.vermilion}>不得兼任</Mark>一府两院一委职务
            </IconChip>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.liuli} title="委员长会议：">
              委员长·副委员长·秘书长组成，处理常委会日常工作
            </IconChip>
            <IconChip icon={<Hourglass size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="任期：">
              5 年；上届人常须待下届人常产生后才结束；<Mark color={C.vermilion}>委员长·副委员长连任 ≤ 2 届</Mark>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>只对全国人大负责并报告工作</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 492, width: 1776}}>
          <HallStrip style={{height: 116}}>
            <Scale size={40} color={C.liuli} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>四个 2/3</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <GoldSeal tone={C.liuli} delay={150}>修宪</GoldSeal>
              <GoldSeal tone={C.liuli} delay={162}>推迟选举</GoldSeal>
              <GoldSeal tone={C.liuli} delay={174}>特区基本法修改</GoldSeal>
              <GoldSeal tone={C.liuli} delay={186}>所有代表开会</GoldSeal>
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SupervisionLegislationScene = () => {
  /* data-final-knowledge="supervision-methods" data-final-knowledge="legislation-powers" */
  return (
    <Shell code="02" kicker="监督权 · 法规权" title="监督方式五法 · 立法权分工">
      <div
        data-layout="twin-seat-hall"
        data-visual-anchor="main center"
        data-text-treatments="seat-plaque,icon-chip-rows"
        data-visual-grammar="supervision-rows,legislation-rows"
        data-focal-rule="five-supervision-verbs-and-legislation-split"
        data-focal-channels="supervision-verbs,legislation-split"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="supervision-methods" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 470}}>
          <Panel tone={C.vermilion} watermark={<Search size={180} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <SeatTab bar={C.vermilion} icon={<Landmark size={26} color={C.liuli} strokeWidth={2.2} />}>监督方式</SeatTab>
            <IconChip icon={<Ear size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="听报告：">
              人大听<Mark color={C.jade}>年度</Mark>工作报告（全人常+一府两院）；人常听<Mark color={C.vermilion}>专项</Mark>报告
            </IconChip>
            <IconChip icon={<MessageCircleQuestion size={28} color={C.paper} strokeWidth={2.2} />} tone={C.liuli} title="提质询：">
              人大·人常均可，针对一府两院一委
            </IconChip>
            <IconChip icon={<Search size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="做调查：">
              成立特定问题调查委员会
            </IconChip>
            <IconChip icon={<ClipboardCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="搞检查：">
              执法检查 —— <Mark color={C.vermilion}>全人常专属</Mark>监督方式
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.liuli} title="炒鱿鱼：">
              人大<Mark color={C.vermilion}>罢免</Mark> · 人常<Mark color={C.vermilion}>撤职</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="legislation-powers" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 470}}>
          <Panel tone={C.jade} watermark={<ScrollText size={180} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <SeatTab bar={C.jade} icon={<Crown size={26} color={C.liuli} strokeWidth={2.2} />}>立法权（法规权）</SeatTab>
            <IconChip icon={<FileSignature size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="全国人大：">
              修改宪法 · 监督宪法实施 · 制定和修改<Mark color={C.vermilion}>基本法律</Mark>
            </IconChip>
            <IconChip icon={<Handshake size={28} color={C.paper} strokeWidth={2.2} />} tone={C.liuli} title="授权立法：">
              全国人大可授权全人常制定基本法律
            </IconChip>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="全人常：">
              解释宪法 · 解释法律（基本+普通）· 制定修改<Mark color={C.jade}>普通法律</Mark>
            </IconChip>
            <IconChip icon={<PenLine size={28} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="闭会期间：">
              可对人大制定的法律<Mark color={C.jade}>部分修改</Mark>，但<Mark color={C.vermilion}>不得同其基本原则相抵触</Mark>
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="港澳基本法：">
              只能由<Mark color={C.vermilion}>全国人大</Mark>修改
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 494, width: 1776}}>
          <HallStrip style={{height: 114}}>
            <ShieldAlert size={40} color={C.liuli} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.jade, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>监察委报告</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              无需向全国人大作<GoldSeal tone={C.vermilion} delay={150}>年度</GoldSeal>报告 · 需向全人常作<GoldSeal tone={C.liuli} delay={164}>专项</GoldSeal>报告；专题询问：一府两院一委负责人到会回答
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const PersonnelScene = () => {
  /* data-final-knowledge="personnel-election-decision" data-final-knowledge="personnel-appointment" */
  const steps = [
    {
      name: '选举（人大）',
      tone: C.vermilion,
      icon: <Vote size={30} color={C.paper} strokeWidth={2.2} />,
      body: (
        <>
          <Mark color={C.vermilion}>主席团提名</Mark>，大会投票：全人常组成人员 · 国家主席·副主席 · 中央军委主席 · 国家监察委主任 · 最高法院长 · 最高检检察长
        </>
      ),
    },
    {
      name: '决定（提名链）',
      tone: C.liuli,
      icon: <UserPlus size={30} color={C.paper} strokeWidth={2.2} />,
      body: (
        <>
          人大：总理←<Mark color={C.liuli}>国家主席提名</Mark>；国务院其他←总理提名；军委其他←军委主席提名
          <br />
          人常（闭会期间）：决定政府+军委其他组成人员（<Mark color={C.vermilion}>排除国务院总理</Mark>）
        </>
      ),
    },
    {
      name: '任免（人常）',
      tone: C.jade,
      icon: <UserMinus size={30} color={C.paper} strokeWidth={2.2} />,
      body: (
        <>
          监察委副主任·委员←主任提请；两高副职·审判员·检察员·军事法院/检察院长←两高首长提请；
          <Mark color={C.jade}>批准省级检察长任免</Mark>
        </>
      ),
    },
  ] as const;
  return (
    <Shell code="03" kicker="人事权" title="红毯三步：选举 → 决定 → 任免">
      <div
        data-layout="three-step-red-carpet"
        data-visual-anchor="main center"
        data-text-treatments="step-plaque,icon-chip-rows"
        data-visual-grammar="election-step,decision-step,appointment-step"
        data-focal-rule="npc-elects-while-sc-decides-and-appoints-deputies"
        data-focal-channels="three-step-headings,recall-vs-dismiss"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 8, width: 1776, height: 6, backgroundColor: C.vermilion, opacity: 0.55}} />
        {steps.map((step, index) => (
          <Enter key={step.name} delay={8 + index * 22} from="up" marker={index === 0 ? 'personnel-election-decision' : undefined} style={{position: 'absolute', left: index * 20, top: 34 + index * 150, width: 1736}}>
            <Panel tone={step.tone} style={{height: 132, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 14}}>
              <span style={{flexShrink: 0, width: 58, height: 58, borderRadius: 12, backgroundColor: step.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{step.icon}</span>
              <span style={{flexShrink: 0, width: 190, fontSize: 27, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{step.name}</span>
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>{step.body}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" marker="personnel-appointment" style={{position: 'absolute', left: 0, top: 502, width: 1776}}>
          <HallStrip style={{height: 106}}>
            <Vote size={40} color={C.liuli} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              人大对官员有<GoldSeal tone={C.liuli} delay={150}>选举权＋决定权</GoldSeal>，人常只有<GoldSeal tone={C.vermilion} delay={162}>决定权（任免权）</GoldSeal>
              <br />
              人大<Mark color={C.paper}>罢免案</Mark> · 人常<Mark color={C.paper}>撤职案</Mark> —— 产生方式不同，炒鱿鱼方式不同
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MeetingsDecisionsScene = () => {
  /* data-final-knowledge="meeting-rules" data-final-knowledge="major-decision-powers" */
  const npcPowers = ['审批国民经济计划和预算及执行情况', '批准省级行政区建置', '特别行政区的设立及制度', '决定战争与和平'];
  const scFriendly = ['批准或废除同外国缔结的条约和重要协定', '决定驻外全权代表任免', '规定军人·外交人员衔级制度', '规定和决定授予国家勋章和荣誉称号', '决定特赦'];
  const scAdversary = ['审批计划预算部分调整', '闭会期间宣布战争状态', '决定全国总动员和局部动员', '决定全国或个别省·自治区·直辖市进入紧急状态'];
  return (
    <Shell code="04" kicker="会议制度 · 重大事项决定权" title="开会的规矩 · 定大事的权力">
      <div
        data-layout="ledger-plus-two-lines"
        data-visual-anchor="main center"
        data-text-treatments="ledger-rows,line-chips"
        data-visual-grammar="meeting-ledger,npc-line,sc-two-lines"
        data-focal-rule="meeting-cadence-and-major-decision-two-lines"
        data-focal-channels="ledger-rows,two-line-mnemonics"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="meeting-rules" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel style={{height: 170, padding: '12px 20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12}}>
            {[
              {label: '会期', icon: <CalendarClock size={30} color={C.paper} strokeWidth={2.2} />, body: '人大一年一次（乡一年两次）\n人常两个月一次'},
              {label: '召集', icon: <Bell size={30} color={C.paper} strokeWidth={2.2} />, body: '人大←全人常召集\n人常←委员长召集'},
              {label: '主持', icon: <Users size={30} color={C.paper} strokeWidth={2.2} />, body: '人大←预备会议选主席团主持\n人常←委员长（或委托副委员长）'},
              {label: '出席', icon: <UserPlus size={30} color={C.paper} strokeWidth={2.2} />, body: '人大：2/3 以上代表出席\n人常：过半数组成人员出席'},
            ].map((cell) => (
              <div key={cell.label} style={{backgroundColor: C.panelDim, borderLeft: `6px solid ${C.vermilion}`, padding: '8px 12px', display: 'flex', gap: 10, alignItems: 'flex-start'}}>
                <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 10, backgroundColor: C.vermilion, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{cell.icon}</span>
                <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
                  <span style={{fontWeight: 950, color: C.vermilion}}>{cell.label}</span>
                  <br />
                  {cell.body}
                </span>
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={50} from="left" marker="major-decision-powers" style={{position: 'absolute', left: 0, top: 190, width: 866, height: 292}}>
          <Panel tone={C.vermilion} watermark={<Landmark size={170} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <SeatTab bar={C.vermilion} icon={<Landmark size={24} color={C.liuli} strokeWidth={2.2} />}>全国人大 · 四项</SeatTab>
            {npcPowers.map((line, index) => (
              <div key={line} style={{backgroundColor: C.panelDim, borderLeft: `5px solid ${C.vermilion}`, padding: '5px 11px', fontSize: 22, fontWeight: 880, color: C.ink}}>
                <span style={{color: C.vermilion, fontWeight: 950, marginRight: 6}}>{['壹', '贰', '叁', '肆'][index]}</span>
                {line}
              </div>
            ))}
            <div style={{fontSize: 22, fontWeight: 950, color: C.inkSoft}}>口诀：批计划（有交叉）· 管省建 · 开停火（有交叉）</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" style={{position: 'absolute', left: 910, top: 190, width: 866, height: 292}}>
          <Panel tone={C.jade} watermark={<Medal size={170} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <SeatTab bar={C.jade} icon={<Crown size={24} color={C.liuli} strokeWidth={2.2} />}>全人常 · 两条线</SeatTab>
            <div style={{fontSize: 22, fontWeight: 920, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.jade}18`, borderLeft: `5px solid ${C.jade}`, padding: '5px 11px'}}>
              <Medal size={26} color={C.jade} strokeWidth={2.2} style={{verticalAlign: '-4px', marginRight: 6}} />
              友好：批条约 · 派代表 · 定等级 · 给荣誉 · 搞特赦
            </div>
            <div style={{fontSize: 22, fontWeight: 920, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.vermilion}18`, borderLeft: `5px solid ${C.vermilion}`, padding: '5px 11px'}}>
              <Siren size={26} color={C.vermilion} strokeWidth={2.2} style={{verticalAlign: '-4px', marginRight: 6}} />
              敌对：搞反击（宣战争状态）· 宣紧急 · 搞动员 · 调计划
            </div>
            {scFriendly.slice(0, 2).map((line) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, padding: '2px 11px', lineHeight: 1.4}}>· {line}</div>
            ))}
            <div style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, padding: '2px 11px', lineHeight: 1.4}}>· 临时召集：人大←人常认为必要或 1/5 以上代表提议；人常←特殊需要</div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 506, width: 1776}}>
          <HallStrip style={{height: 102}}>
            <Medal size={40} color={C.liuli} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.liuli, color: C.graniteDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>数字门槛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              人大秘密举行←主席团+各代表团团长会议决定；敌对线细目：<Mark color={C.paper}>计划预算「部分调整」审批权</Mark>
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MotionsScene = () => {
  /* data-final-knowledge="motion-procedure" data-final-knowledge="recall-dismiss-procedure" */
  const rows = [
    {icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, tone: C.jade, title: '机关提案', body: '人大：国务院·中央军委·两高·全人常·专门委员会·国家监委·主席团；人常：同上减全人常与主席团、加委员长会议 —— 机关议案必须列入议程'},
    {icon: <UserPlus size={28} color={C.paper} strokeWidth={2.2} />, tone: C.vermilion, title: '个人提案', body: '人大：一个代表团 或 30 名以上代表联名；人常：10 名以上组成人员联名 —— 是否列入由主席团（人常：委员长会议）决定'},
    {icon: <MessageCircleQuestion size={28} color={C.paper} strokeWidth={2.2} />, tone: C.liuli, title: '质询案', body: '提案主体同个人提案；质询对象：一府两院一委 —— 人常不罢免，机关不质询'},
    {icon: <Gavel size={28} color={C.paper} strokeWidth={2.2} />, tone: C.vermilion, title: '罢免案（人大）', body: '主席团 · 3 个以上代表团 或 1/10 以上代表提出；全体代表过半数通过'},
    {icon: <UserMinus size={28} color={C.paper} strokeWidth={2.2} />, tone: C.jade, title: '撤职案（人常）', body: '委员长会议·国务院总理提请→撤国务院其他个别组成人员；中央军委主席提请→撤军委其他个别组成人员'},
    {icon: <Megaphone size={28} color={C.paper} strokeWidth={2.2} />, tone: C.liuli, title: '公布程序', body: '法律议案由国家主席公布；宪法修正案由主席团公告；选举结果及其他议案可由主席公布或人大自行公布'},
  ] as const;
  return (
    <Shell code="05" kicker="议案程序" title="奏章七行：从提案到公布">
      <div
        data-layout="memorial-stack"
        data-visual-anchor="main center"
        data-text-treatments="memorial-rows,stamp-highlights"
        data-visual-grammar="proposal-rows,query-recall-rows,publish-row"
        data-focal-rule="motion-thresholds-30-10-and-recall-dismiss-split"
        data-focal-channels="motion-rows,closing-mnemonic"
        style={{position: 'absolute', inset: 0}}
      >
        {rows.map((row, index) => (
          <Enter key={row.title} delay={8 + index * 16} from="left" marker={index === 3 ? 'recall-dismiss-procedure' : undefined} style={{position: 'absolute', left: index % 2 === 0 ? 0 : 890, top: Math.floor(index / 2) * 122, width: 886}}>
            <Panel tone={row.tone} style={{height: 112, padding: '9px 14px', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
              <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: row.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{row.icon}</span>
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
                <span style={{fontWeight: 950, color: row.tone}}>{row.title}</span>
                <br />
                {row.body}
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={130} from="up" marker="motion-procedure" style={{position: 'absolute', left: 0, top: 372, width: 1776}}>
          <Panel tone={C.liuli} style={{height: 116, padding: '10px 20px'}}>
            <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.55, display: 'block'}}>
              <ListChecks size={26} color={C.vermilion} strokeWidth={2.2} style={{verticalAlign: '-4px', marginRight: 6}} />
              议案审议（国家发展规划）：国务院编制（发改委实施）→ 党中央·国务院审议 → 提请<Mark color={C.vermilion}>全国人大</Mark>审查批准（各代表团+财经委审查·主席团通过决议草案）→ 调整：国务院提方案·报党中央同意·提请<Mark color={C.jade}>全人常</Mark>批准并向人大下次会议报告
              <br />
              <Search size={26} color={C.jade} strokeWidth={2.2} style={{verticalAlign: '-4px', marginRight: 6}} />
              监督：人大及其常委会监督实施（财经委组织）；中期评估·总结评估报告均报党中央同意后提请人常审议/随下期草案提交
            </span>
          </Panel>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 0, top: 508, width: 1776}}>
          <HallStrip style={{height: 100}}>
            <Gavel size={40} color={C.liuli} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>共通规律</span>
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper, letterSpacing: 3}}>
              人常<GoldSeal tone={C.vermilion} delay={170}>不罢免</GoldSeal> · 机关<GoldSeal tone={C.liuli} delay={182}>不质询</GoldSeal>
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NpcStandingCommittee = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-composition" {...SCENES.composition}>
      <CompositionScene />
    </TimelineSequence>
    <TimelineSequence name="02-supervision-legislation" {...SCENES.supervisionLegislation}>
      <SupervisionLegislationScene />
    </TimelineSequence>
    <TimelineSequence name="03-personnel" {...SCENES.personnel}>
      <PersonnelScene />
    </TimelineSequence>
    <TimelineSequence name="04-meetings-decisions" {...SCENES.meetingsDecisions}>
      <MeetingsDecisionsScene />
    </TimelineSequence>
    <TimelineSequence name="05-motions" {...SCENES.motions}>
      <MotionsScene />
    </TimelineSequence>
  </AbsoluteFill>
);




