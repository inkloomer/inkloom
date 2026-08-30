import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Eye, Hourglass, Scale, ScrollText, ShieldAlert, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  hall: '#333A40',
  hallDeep: '#262C31',
  panel: '#EFEAD9',
  panelDim: '#E0DBC6',
  edge: '#647079',
  ink: '#242B30',
  inkSoft: '#56636B',
  mirrorSilver: '#9FB4C4',
  justiceGold: '#C9A24A',
  sealRed: '#AE452F',
  pine: '#557A6C',
  paper: '#F6F2E2',
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
      backgroundColor: C.hall,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(159, 180, 196, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 186px, rgba(38, 44, 49, 0.55) 186px 189px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.justiceGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.hallDeep, borderLeft: `8px solid ${C.sealRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 59 · {code}</span>
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
        borderBottom: `2px solid ${C.justiceGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.justiceGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.justiceGold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.justiceGold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.justiceGold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.justiceGold}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const HallTab = ({children, bar = C.sealRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.hallDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const HallStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 44, 49, 0.94)', border: `2px solid ${C.justiceGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.sealRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.justiceGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const FairnessScene = () => {
  /* data-final-knowledge="fairness-elements" */
  const nails = ['合法性', '中立性', '公开性', '平等性', '参与性', '正确性', '廉洁性'];
  return (
    <Shell code="01" kicker="司法公正" title="司法公正">
      <div
        data-layout="mirror-seven-nails"
        data-visual-anchor="main center"
        data-text-treatments="mirror-plaque,nail-chips"
        data-visual-grammar="meaning-plaque,substantive-nail,procedural-nail"
        data-focal-rule="substantive-versus-procedural-justice-and-seven-elements"
        data-focal-channels="mirror-center,seven-nails"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="fairness-elements" style={{position: 'absolute', left: 438, top: 0, width: 900}}>
          <Panel tone={C.justiceGold} watermark={<Scale size={170} color={C.justiceGold} strokeWidth={1.6} />} style={{height: 308, padding: '18px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, borderRadius: 18}}>
            <HallTab bar={C.justiceGold} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>司法公正 · 法律精神的内在要求</HallTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>
              法治的组成部分和基本内容
              <br />
              <Mark color={C.pine}>实体公正</Mark>：案件事实真相的发现 ＋ 实体法的正确适用
              <br />
              <Mark color={C.sealRed}>程序公正</Mark>：司法程序具有正当性和合理性，当事人在司法过程中受到公平对待
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 348, width: 1776, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10}}>
          {nails.map((nail, index) => (
            <Enter key={nail} delay={30 + index * 10} from="up" style={{}}>
              <div style={{height: 116, backgroundColor: C.panel, border: `2px solid ${index === 6 ? C.sealRed : C.edge}`, borderTop: `6px solid ${index === 6 ? C.sealRed : C.justiceGold}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6}}>
                <UserCheck size={26} color={index === 6 ? C.sealRed : C.justiceGold} strokeWidth={2.2} />
                <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>{nail}</span>
              </div>
            </Enter>
          ))}
        </div>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 496, width: 1776}}>
          <HallStrip style={{height: 116}}>
            <Eye size={42} color={C.mirrorSilver} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.justiceGold, color: C.hallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>司法公正的要素</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              合法 · 中立 · 公开 · 平等 · 参与 · 正确 · 廉洁 —— 第七钉「廉洁性」另有细则专室（下屏）
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const OpennessIntegrityScene = () => {
  /* data-final-knowledge="openness-integrity-rules" */
  const exceptions = ['涉及国家秘密', '涉及未成年人犯罪', '调解结案或确认人民调解协议效力（保护国家·社会·他人利益确有必要公开的除外）', '离婚诉讼或涉及未成年子女抚养·监护', '法院认为不宜公布的其他情形'];
  const taboos = ['泄露办案工作秘密', '推荐介绍代理人·辩护人，介绍案件或暗示更换律师', '接受请客送礼或其他利益', '借款·租借房屋·借用交通工具通讯工具等物品', '委托评估拍卖中徇私舞弊·恶意串通·弄虚作假', '其他不正当接触交往行为'];
  return (
    <Shell code="02" kicker="公开性 · 廉洁性细则" title="公开性 · 廉洁性的体现">
      <div
        data-layout="twin-inscription-panels"
        data-visual-anchor="main center"
        data-text-treatments="inscription-bands,taboo-seals"
        data-visual-grammar="openness-panel,integrity-panel"
        data-focal-rule="document-publication-exceptions-and-six-contact-taboos"
        data-focal-channels="openness-exceptions,six-taboos"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="openness-integrity-rules" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 524}}>
          <Panel tone={C.mirrorSilver} watermark={<Eye size={180} color={C.mirrorSilver} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <HallTab bar={C.mirrorSilver} icon={<Eye size={26} color={C.paper} strokeWidth={2.2} />}>公开性 · 阳光司法</HallTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              构建<Mark color={C.mirrorSilver}>开放·动态·透明·便民</Mark>的阳光司法机制：审判公开·检务公开·警务公开·狱务公开，杜绝「暗箱操作」；生效法律文书统一上网·公开查询
            </div>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="检务公开：">
              <Mark color={C.pine}>重要案件信息和法律文书</Mark>向社会主动公开；<Mark color={C.pine}>一般案件信息</Mark>只向相关人员提供查询（互联网·电话·邮件·检察服务窗口）
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>裁判文书不上网五例外：</div>
            {exceptions.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.mirrorSilver}`, padding: '4px 10px'}}>
                <span style={{color: C.mirrorSilver, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 524}}>
          <Panel tone={C.sealRed} watermark={<Ban size={180} color={C.sealRed} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <HallTab bar={C.sealRed} icon={<ShieldAlert size={26} color={C.paper} strokeWidth={2.2} />}>廉洁性 · 规范接触交往（2015 五部门《规定》）</HallTab>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>与当事人·律师·特殊关系人·中介组织六禁止：</div>
            {taboos.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.4, backgroundColor: `${C.sealRed}12`, borderLeft: `5px solid ${C.sealRed}`, padding: '4px 10px'}}>
                <span style={{color: C.sealRed, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
            <IconChip icon={<ShieldAlert size={28} color={C.paper} strokeWidth={2.2} />} tone={C.justiceGold} title="接触规则：">
              应在<Mark color={C.justiceGold}>工作场所·工作时间</Mark>接待；确需非工作接触的应<Mark color={C.justiceGold}>报批</Mark>；不明原因接触的，<GoldSeal tone={C.sealRed} delay={170}>3 日内</GoldSeal>向纪检监察部门报告
            </IconChip>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.sealRed} title="终身禁业：">
              因违法违纪被开除公职的司法人员、吊销执业证书的律师公证员，<Mark color={C.sealRed}>终身禁止从事法律职业</Mark>；构成犯罪依法追究刑责
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const EfficiencyScene = () => {
  /* data-final-knowledge="efficiency-relation" */
  return (
    <Shell code="03" kicker="司法效率 · 关系" title="司法效率与司法公正的关系">
      <div
        data-layout="balance-hall-motto"
        data-visual-anchor="main center"
        data-text-treatments="balance-plaques,motto-seals"
        data-visual-grammar="time-efficiency,resource-efficiency,cost-efficiency"
        data-focal-rule="fairness-first-while-considering-efficiency"
        data-focal-channels="hall-motto,three-efficiencies"
        style={{position: 'absolute', inset: 0}}
      >
        {[
          {name: '时间效率', tone: C.justiceGold, icon: <Hourglass size={34} color={C.paper} strokeWidth={2.2} />},
          {name: '资源利用效率', tone: C.pine, icon: <Coins size={34} color={C.paper} strokeWidth={2.2} />},
          {name: '成本效率', tone: C.sealRed, icon: <Scale size={34} color={C.paper} strokeWidth={2.2} />},
        ].map((item, index) => (
          <Enter key={item.name} delay={6 + index * 18} from="up" style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={item.tone} style={{height: 224, padding: '14px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12}}>
              <span style={{width: 72, height: 72, borderRadius: 36, backgroundColor: item.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.justiceGold}`}}>{item.icon}</span>
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{item.name}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={70} from="down" marker="efficiency-relation" style={{position: 'absolute', left: 138, top: 264, width: 1500}}>
          <Panel tone={C.justiceGold} watermark={<Scale size={180} color={C.justiceGold} strokeWidth={1.6} />} style={{height: 204, padding: '16px 26px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <HallTab bar={C.justiceGold} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>司法效率与司法公正的关系</HallTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.65}}>
              司法公正是司法<Mark color={C.justiceGold}>永恒的目标追求</Mark>；提高司法效率是适应我国社会新形势发展的要求
              <br />
              两者存在<Mark color={C.sealRed}>内在的紧张关系</Mark> —— 我国作出「公正优先，兼顾效率」的价值选择
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 508, width: 1776}}>
          <HallStrip style={{height: 128}}>
            <Scale size={44} color={C.justiceGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.sealRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>价值选择</span>
            <span style={{fontSize: 27, fontWeight: 950, color: C.paper, letterSpacing: 2, lineHeight: 1.6}}>
              <GoldSeal tone={C.justiceGold} delay={170}>公正优先</GoldSeal> <GoldSeal tone={C.pine} delay={184}>兼顾效率</GoldSeal>
              <br />
              效率三面：时间 · 资源利用 · 成本
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialFairnessEfficiency = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-fairness" {...SCENES.fairness}>
      <FairnessScene />
    </TimelineSequence>
    <TimelineSequence name="02-openness-integrity" {...SCENES.opennessIntegrity}>
      <OpennessIntegrityScene />
    </TimelineSequence>
    <TimelineSequence name="03-efficiency" {...SCENES.efficiency}>
      <EfficiencyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
