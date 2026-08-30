import type {CSSProperties, ReactNode} from 'react';
import {Ban, BookOpen, Briefcase, Building2, Coffee, Coins, Feather, Fingerprint, Flag, Gavel, Globe, GraduationCap, HandCoins, HandHeart, Handshake, HeartHandshake, HeartPulse, Home, Hourglass, Landmark, Lamp, Lightbulb, Lock, Mail, Megaphone, MessageSquarePlus, Scale, ScrollText, ShieldAlert, Timer, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  night: '#232B3A',
  nightDeep: '#1A2130',
  panel: '#EFEAD8',
  panelDim: '#E0DCC6',
  edge: '#5C6478',
  ink: '#22283A',
  inkSoft: '#545C72',
  lantern: '#C9502F',
  amber: '#D9A441',
  pine: '#4E7D6B',
  paper: '#F6F2E3',
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
      backgroundColor: C.night,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 480px at 24% -6%, rgba(217, 164, 65, 0.14), transparent 70%), radial-gradient(1100px 480px at 76% -6%, rgba(201, 80, 47, 0.12), transparent 70%)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.amber}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.nightDeep, borderLeft: `8px solid ${C.lantern}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 38 · {code}</span>
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
        borderBottom: `2px solid ${C.amber}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.amber, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pine}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pine}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pine}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.pine}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const LampTab = ({children, bar = C.lantern, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.nightDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const NightStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(26, 33, 48, 0.94)', border: `2px solid ${C.amber}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.lantern}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const SealStamp = ({children, tone = C.lantern, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '6px 14px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 23, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 52, height: 52, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.48}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const EqualityPoliticalScene = () => {
  /* data-final-knowledge="equality-scope" data-final-knowledge="political-freedoms" */
  return (
    <Shell code="01" kicker="第一盏·第二盏 · 平等权与政治自由" title="平等权与政治权利和自由">
      <div
        data-layout="twin-panel-rights"
        data-visual-anchor="main center"
        data-text-treatments="plaque-heading,icon-chip-rows"
        data-visual-grammar="equality-panel,political-panel"
        data-focal-rule="equality-admits-reasonable-difference-and-political-freedom-deadlines"
        data-focal-channels="panel-headings,deadline-numbers"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="equality-scope" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 560}}>
          <Panel tone={C.pine} watermark={<Scale size={190} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LampTab bar={C.pine} icon={<Lamp size={26} color={C.amber} strokeWidth={2.2} />}>第一盏 · 平等权</LampTab>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              法律面前人人平等：指<Mark color={C.pine}>权利能力平等</Mark>，非行为能力和事实意义上的平等
              <br />
              承认<Mark color={C.pine}>合理差别</Mark>，禁止不合理差别 —— 常见合理差别三类型：
            </div>
            <IconChip icon={<Hourglass size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="年龄差异：">
              年满 <SealStamp tone={C.pine} delay={120}>18 周岁</SealStamp> 才有选举权与被选举权
            </IconChip>
            <IconChip icon={<HeartPulse size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="生理差异：">
              女性的孕期保护
            </IconChip>
            <IconChip icon={<Users size={30} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="民族差异：">
              少数民族在政治 · 经济 · 文化等领域的优待措施
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="political-freedoms" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 560}}>
          <Panel tone={C.lantern} watermark={<Flag size={190} color={C.lantern} strokeWidth={1.6} />} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <LampTab bar={C.lantern} icon={<Lamp size={26} color={C.amber} strokeWidth={2.2} />}>第二盏 · 政治权利和自由</LampTab>
            <IconChip icon={<Vote size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="选举权和被选举权：">
              选代表 · 被选为代表 · 监督和罢免代表
            </IconChip>
            <IconChip icon={<Megaphone size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="言论自由：">
              政治自由之母 · 居基础性地位，其他政治自由是它的衍生
            </IconChip>
            <IconChip icon={<BookOpen size={30} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="出版自由：">
              著作自由＋出版单位依法设立管理；<Mark color={C.pine}>预防制＋追惩制</Mark>相结合
            </IconChip>
            <IconChip icon={<Handshake size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="结社自由：">
              <Mark color={C.pine}>核准登记制度</Mark>，主管机关为民政部和县级以上地方政府民政部门
            </IconChip>
            <IconChip icon={<Flag size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="集会游行示威：">
              源于请愿权；主管机关为举行地的市·县公安局·城市公安分局；临时举行的立即报告、立即审查决定
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 584, width: 1776}}>
          <NightStrip style={{height: 104}}>
            <Timer size={40} color={C.amber} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.lantern, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>数字门槛</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              需申请的集会游行示威：举行日期 <SealStamp tone={C.amber} delay={150}>5 日前</SealStamp> 递交书面申请 → 主管机关举行日期 <SealStamp tone={C.lantern} delay={166}>2 日前</SealStamp> 书面通知 → <Mark color={C.amber}>逾期不通知视为许可</Mark>
            </span>
          </NightStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SupervisionReligionScene = () => {
  /* data-final-knowledge="supervision-rights" data-final-knowledge="religion-freedom" */
  return (
    <Shell code="02" kicker="第三盏·第四盏 · 监督权与宗教信仰" title="监督权、国家赔偿与宗教信仰自由">
      <div
        data-layout="twin-panel-rights"
        data-visual-anchor="main center"
        data-text-treatments="plaque-heading,icon-chip-rows"
        data-visual-grammar="supervision-panel,religion-panel"
        data-focal-rule="criticism-suggestion-versus-appeal-accusation-and-religion-taboos"
        data-focal-channels="contrast-rows,taboo-list"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="supervision-rights" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 560}}>
          <Panel tone={C.pine} watermark={<Gavel size={190} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <LampTab bar={C.pine} icon={<Lamp size={26} color={C.amber} strokeWidth={2.2} />}>第三盏 · 监督权和获得国家赔偿权</LampTab>
            <IconChip icon={<MessageSquarePlus size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="批评建议权：">
              对<Mark color={C.pine}>任何</Mark>国家机关和国家工作人员、任何行为 —— <SealStamp tone={C.pine} delay={110}>要态度</SealStamp>
            </IconChip>
            <IconChip icon={<ShieldAlert size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="申诉控告检举权：">
              针对违法失职行为，向<Mark color={C.lantern}>有关</Mark>机关提出 —— 要行动；不得捏造歪曲事实诬告陷害，任何人不得压制打击报复
            </IconChip>
            <IconChip icon={<HandCoins size={30} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="获得国家赔偿权：">
              违法行使职权侵犯合法权益造成损害
            </IconChip>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
              <div style={{backgroundColor: `${C.pine}1c`, border: `2px solid ${C.pine}`, padding: '9px 12px', fontSize: 22, fontWeight: 880, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}>
                <Building2 size={30} color={C.pine} strokeWidth={2.2} />
                <span><span style={{fontWeight: 950, color: C.pine}}>行政赔偿</span>：行政机关及其工作人员</span>
              </div>
              <div style={{backgroundColor: `${C.lantern}1c`, border: `2px solid ${C.lantern}`, padding: '9px 12px', fontSize: 22, fontWeight: 880, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}>
                <Gavel size={30} color={C.lantern} strokeWidth={2.2} />
                <span><span style={{fontWeight: 950, color: C.lantern}}>刑事赔偿</span>：侦查·检察·审判·监狱管理机关和看守所</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="religion-freedom" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 560}}>
          <Panel tone={C.amber} watermark={<HandHeart size={190} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <LampTab bar={C.amber} icon={<Lamp size={26} color={C.amber} strokeWidth={2.2} />}>第四盏 · 宗教信仰自由</LampTab>
            <IconChip icon={<HandHeart size={30} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="内涵：">
              信教不信教 · 过去不信现在信 · 信仰不同宗教 · 信仰这个或那个教派（大陆无传教办教自由，港澳无办教自由）
            </IconChip>
            <IconChip icon={<Ban size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="禁：">
              强制信仰或不信仰 · 歧视信教与不信教公民
            </IconChip>
            <IconChip icon={<Ban size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="禁：">
              利用宗教破坏社会秩序 · 损害公民身体健康 · 妨碍国家教育制度
            </IconChip>
            <IconChip icon={<Landmark size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="保护：">
              国家保护正常的宗教活动
            </IconChip>
            <IconChip icon={<Globe size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="独立：">
              宗教团体和宗教事务不受外国势力支配
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 584, width: 1776}}>
          <NightStrip style={{height: 104}}>
            <MessageSquarePlus size={40} color={C.amber} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.pine, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              批评建议「<SealStamp tone={C.pine} delay={150}>任何机关 · 要态度</SealStamp>」｜ 申诉控告检举「<SealStamp tone={C.lantern} delay={164}>有关机关 · 违法失职 · 要行动</SealStamp>」
            </span>
          </NightStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const PersonalFreedomScene = () => {
  /* data-final-knowledge="personal-liberty-core" data-final-knowledge="dignity-home-mail" */
  const cells = [
    {
      name: '狭义人身自由',
      tone: C.pine,
      icon: <Lock size={30} color={C.paper} strokeWidth={2.2} />,
      mark: <Lock size={150} color={C.pine} strokeWidth={1.6} />,
      body: (
        <>
          非经<Mark color={C.pine}>检察院批准或决定</Mark>·<Mark color={C.pine}>法院决定</Mark>，并由<Mark color={C.pine}>公安机关执行</Mark>，不受逮捕
          <br />
          禁止非法拘禁·非法剥夺限制人身自由·非法搜查身体
        </>
      ),
    },
    {
      name: '人格尊严',
      tone: C.lantern,
      icon: <Fingerprint size={30} color={C.paper} strokeWidth={2.2} />,
      mark: <Fingerprint size={150} color={C.lantern} strokeWidth={1.6} />,
      body: (
        <>
          禁止侮辱 · 诽谤 · 诬告陷害
          <br />
          姓名权 · 肖像权 · 名誉权 · 隐私权 · 荣誉权；与民法刑法衔接成完整规范体系
        </>
      ),
    },
    {
      name: '住宅权',
      tone: C.amber,
      icon: <Home size={30} color={C.paper} strokeWidth={2.2} />,
      mark: <Home size={150} color={C.amber} strokeWidth={1.6} />,
      body: (
        <>
          禁止<Mark color={C.amber}>非法搜查</Mark>·<Mark color={C.amber}>非法侵入</Mark>住宅
          <br />
          核心法益：生活安宁＋居住安全；搜查须严格依法定程序
        </>
      ),
    },
    {
      name: '通信自由和通信秘密',
      tone: C.pine,
      icon: <Mail size={30} color={C.paper} strokeWidth={2.2} />,
      mark: <Mail size={150} color={C.pine} strokeWidth={1.6} />,
      body: (
        <>
          检查主体：<Mark color={C.pine}>公安机关·检察机关</Mark>
          <br />
          理由：<Mark color={C.lantern}>国家安全</Mark>·<Mark color={C.lantern}>追查刑事犯罪</Mark>，依法定程序
        </>
      ),
    },
  ] as const;
  return (
    <Shell code="03" kicker="第五盏 · 人身自由" title="人身自由：一盏灯下四格">
      <div
        data-layout="four-cell-lantern-grid"
        data-visual-anchor="main center"
        data-text-treatments="cell-heading,taboo-highlights"
        data-visual-grammar="liberty-cell,dignity-cell,home-cell,mail-cell"
        data-focal-rule="arrest-three-subjects-and-mail-inspection-limits"
        data-focal-channels="four-cell-headings,arrest-subjects"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.edge}`, padding: '9px 22px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              广义人身自由四格 · 宪法未规定<Mark color={C.lantern}>生命权</Mark>，但它是<Mark color={C.amber}>最基础的人权</Mark>，当然受国家尊重和保障
            </span>
          </div>
        </Enter>
        {cells.map((cell, index) => (
          <Enter key={cell.name} delay={20 + index * 18} from="up" style={{position: 'absolute', left: 20 + (index % 2) * 890, top: 68 + Math.floor(index / 2) * 220, width: 876}}>
            <Panel tone={cell.tone} watermark={cell.mark} style={{height: 200, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 10, backgroundColor: cell.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{cell.icon}</span>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{cell.name}</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.52}}>{cell.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={130} from="up" marker="personal-liberty-core" style={{position: 'absolute', left: 20, top: 528, width: 1736}}>
          <NightStrip style={{height: 100}}>
            <Lock size={40} color={C.amber} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.amber, color: C.nightDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              逮捕三主体：<SealStamp tone={C.amber} delay={170}>检批准·决定 / 法决定 / 公安执行</SealStamp> ｜ 通信检查：<SealStamp tone={C.lantern} delay={184}>公安检察 · 国安犯罪</SealStamp>
            </span>
          </NightStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SocialEconomicScene = () => {
  /* data-final-knowledge="social-economic-rights" data-final-knowledge="rights-boundary" */
  return (
    <Shell code="04" kicker="第六盏·点睛 · 社会经济文化教育" title="社会经济和文化教育权利">
      <div
        data-layout="twin-panel-rights"
        data-visual-anchor="main center"
        data-text-treatments="plaque-heading,amendment-stamps"
        data-visual-grammar="material-panel,education-panel"
        data-focal-rule="property-amendment-wording-and-double-limit-clause-51"
        data-focal-channels="property-amendment-stamp,boundary-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="social-economic-rights" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 436}}>
          <Panel tone={C.pine} watermark={<Coins size={170} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <LampTab bar={C.pine} icon={<Lamp size={26} color={C.amber} strokeWidth={2.2} />}>第六盏 · 物质与经济性权利</LampTab>
            <IconChip icon={<Coins size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="财产权：">
              2004 年修宪增加，规定在<Mark color={C.pine}>总纲</Mark>；征收征用<Mark color={C.lantern}>并给予补偿</Mark>
            </IconChip>
            <IconChip icon={<Briefcase size={30} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="劳动权：">
              平等就业·选择职业·取得劳动报酬 —— <Mark color={C.lantern}>既是权利又是义务</Mark>
            </IconChip>
            <IconChip icon={<Coffee size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="休息权：">
              劳动者有休息的权利；国家发展休息休养设施，规定工作时间和休假制度
            </IconChip>
            <IconChip icon={<HeartHandshake size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="获得物质帮助权：">
              <Mark color={C.pine}>年老 · 疾病 · 丧失劳动能力</Mark>时从国家和社会获得物质帮助
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 436}}>
          <Panel tone={C.amber} watermark={<GraduationCap size={170} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <LampTab bar={C.amber} icon={<Lamp size={26} color={C.amber} strokeWidth={2.2} />}>教育与文化权利</LampTab>
            <IconChip icon={<GraduationCap size={30} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="受教育权：">
              <Mark color={C.lantern}>既是权利又是义务</Mark>（与劳动权并称双义务）
            </IconChip>
            <IconChip icon={<Feather size={30} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="文化自由：">
              科学研究 · 文学艺术创作 · 其他文化活动；国家给创造性工作以鼓励帮助
            </IconChip>
            <IconChip icon={<Lightbulb size={30} color={C.paper} strokeWidth={2.2} />} tone={C.lantern} title="记忆锚：">
              财产写总纲 · 劳动教育双义务 · 帮助看三情形（老病失能）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="rights-boundary" style={{position: 'absolute', left: 0, top: 460, width: 1776}}>
          <Panel tone={C.lantern} style={{height: 138, padding: '12px 22px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 20}}>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <LampTab bar={C.lantern} icon={<ShieldAlert size={26} color={C.paper} strokeWidth={2.2} />}>权利行使的边界（宪法第 51 条）</LampTab>
              <div style={{marginTop: 8}}>
                不得损害国家·社会·集体利益 → <Mark color={C.lantern}>外部限制</Mark>；不得损害他人合法自由和权利 → <Mark color={C.lantern}>内部限制</Mark>
              </div>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55, borderLeft: `2px dashed ${C.edge}`, paddingLeft: 20}}>
              <LampTab bar={C.pine} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>主体范围</LampTab>
              <div style={{marginTop: 8}}>
                外国人享有人格尊严等基础人权，无选举权等政治权利；<Mark color={C.pine}>法人</Mark>可成为财产权等基本权利的主体
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 622, width: 1776}}>
          <NightStrip style={{height: 92}}>
            <ScrollText size={40} color={C.amber} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.lantern, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              财产权：04 修宪入总纲 —— 「保护」前无<SealStamp tone={C.amber} delay={180}>神圣</SealStamp>、「补偿」前无<SealStamp tone={C.lantern} delay={192}>合理</SealStamp>
            </span>
          </NightStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CitizenFundamentalRights = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-equality-political" {...SCENES.equalityPolitical}>
      <EqualityPoliticalScene />
    </TimelineSequence>
    <TimelineSequence name="02-supervision-religion" {...SCENES.supervisionReligion}>
      <SupervisionReligionScene />
    </TimelineSequence>
    <TimelineSequence name="03-personal-freedom" {...SCENES.personalFreedom}>
      <PersonalFreedomScene />
    </TimelineSequence>
    <TimelineSequence name="04-social-economic" {...SCENES.socialEconomic}>
      <SocialEconomicScene />
    </TimelineSequence>
  </AbsoluteFill>
);


