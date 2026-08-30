import type {CSSProperties, ReactNode} from 'react';
import {Ban, Clock, Eye, HeartHandshake, Scale, Shield, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  charter: '#2F3D4E',
  charterDeep: '#24303D',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E6E7E',
  ink: '#232F3B',
  inkSoft: '#52626F',
  balance: '#C0983E',
  red: '#B04834',
  teal: '#4E7D74',
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
      backgroundColor: C.charter,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 168px, rgba(36, 48, 61, 0.55) 168px 171px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.balance}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.charterDeep, borderLeft: `8px solid ${C.red}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 64 · {code}</span>
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
        borderBottom: `2px solid ${C.balance}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.balance, textAlign: 'right'}}>{kicker}</span>
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

const CharterTab = ({children, bar = C.red, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.charterDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const CharterStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 48, 61, 0.94)', border: `2px solid ${C.balance}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.red}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const BalanceSeal = ({children, tone = C.balance, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 21, fontWeight: 950, letterSpacing: 1, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, tag, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly tag?: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45, flex: 1}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
    {tag ? <span style={{flexShrink: 0, padding: '2px 9px', backgroundColor: `${tone}22`, color: tone, fontSize: 20, fontWeight: 950}}>{tag}</span> : null}
  </div>
);

export const CoreLoyaltyScene = () => {
  /* data-final-knowledge="core-loyalty" */
  const loyalties = [
    {title: '牢固树立社会主义法治理念：', body: '忠于党 · 忠于国家 · 忠于人民 · 忠于法律，做中国特色社会主义事业建设者和捍卫者', tag: '第 1 条', tone: C.teal},
    {title: '尊崇和信仰法律：', body: '模范遵守法律，严格执行法律，自觉维护法律的权威和尊严', tag: '第 2 条', tone: C.balance},
    {title: '坚持职业操守：', body: '恪守法官良知，牢固树立司法核心价值观，以维护社会公平正义为己任', tag: '第 3 条', tone: C.red},
    {title: '不从事或参与有损国家利益和司法权威的活动，不发表有损国家利益和司法权威的言论', body: '', tag: '第 4 条', tone: C.teal},
  ] as const;
  return (
    <Shell code="01" kicker="核心 · 忠诚司法事业" title="法官职业道德：核心与忠诚">
      <div
        data-layout="core-triad-loyalty-rows"
        data-visual-anchor="main center"
        data-text-treatments="core-seals,loyalty-chips"
        data-visual-grammar="fairness-seal,clean-seal,people-seal,loyalty-rows"
        data-focal-rule="core-is-fairness-cleanliness-for-the-people"
        data-focal-channels="core-triad,loyalty-rows"
        style={{position: 'absolute', inset: 0}}
      >
        {[
          {name: '公正', tone: C.balance},
          {name: '廉洁', tone: C.teal},
          {name: '为民', tone: C.red},
        ].map((core, index) => (
          <Enter key={core.name} delay={6 + index * 14} from="down" style={{position: 'absolute', left: 620 + index * 190, top: 0, width: 170}}>
            <div style={{height: 92, backgroundColor: C.panel, border: `3px solid ${core.tone}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              {index === 0 ? <Scale size={30} color={core.tone} strokeWidth={2.2} /> : index === 1 ? <Shield size={30} color={core.tone} strokeWidth={2.2} /> : <HeartHandshake size={30} color={core.tone} strokeWidth={2.2} />}
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{core.name}</span>
            </div>
          </Enter>
        ))}
        <Enter delay={40} from="left" marker="core-loyalty" style={{position: 'absolute', left: 0, top: 128, width: 1776}}>
          <Panel tone={C.red} watermark={<Shield size={180} color={C.red} strokeWidth={1.6} />} style={{height: 428, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <CharterTab bar={C.red} icon={<Shield size={26} color={C.paper} strokeWidth={2.2} />}>忠诚司法事业</CharterTab>
            {loyalties.map((row) => (
              <IconChip key={row.tag} icon={<Shield size={26} color={C.paper} strokeWidth={2.2} />} tone={row.tone} title={row.title} tag={row.tag}>
                {row.body}
              </IconChip>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const JusticeScene = () => {
  /* data-final-knowledge="justice-clauses" */
  const clauses = [
    {title: '维护独立行使审判权', body: '', tag: '第 8 条', tone: C.teal},
    {title: '确保案件裁判结果公平公正', body: '', tag: '第 9 条', tone: C.balance},
    {title: '坚持实体公正与程序公正并重', body: '', tag: '第 10 条', tone: C.red},
    {title: '提高司法效率：', body: '严格遵守审限 · 职权活动充分考虑效率因素 · 监督当事人及时完成诉讼活动', tag: '第 11 条', tone: C.teal},
    {title: '公开审判', body: '', tag: '第 12 条', tone: C.balance},
    {title: '遵守回避规定，保持中立地位', body: '', tag: '第 13 条', tone: C.red},
    {title: '不办关系案、人情案：', body: '坚决破除各种潜规则，绝不允许法外开恩，绝不允许办关系案·人情案·金钱案；对司法领域的腐败零容忍', tag: '第 14 条', tone: C.teal},
  ] as const;
  return (
    <Shell code="02" kicker="保证司法公正" title="保证司法公正">
      <div
        data-layout="seven-clause-scale"
        data-visual-anchor="main center"
        data-text-treatments="clause-rows,article-tags"
        data-visual-grammar="independence-clause,result-clause,dual-fairness-clause,efficiency-clause,open-clause,recusal-clause,relation-clause"
        data-focal-rule="seven-fairness-clauses-under-basic-guidelines"
        data-focal-channels="seven-clauses,relation-money-cases"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="justice-clauses" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.balance} watermark={<Scale size={180} color={C.balance} strokeWidth={1.6} />} style={{height: 608, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <CharterTab bar={C.balance} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>保证司法公正（《基本准则》）</CharterTab>
            {clauses.map((clause) => (
              <IconChip key={clause.tag} icon={clause.tone === C.red ? <Scale size={26} color={C.paper} strokeWidth={2.2} /> : clause.tone === C.balance ? <Eye size={26} color={C.paper} strokeWidth={2.2} /> : clause.tag === '第 11 条' ? <Clock size={26} color={C.paper} strokeWidth={2.2} /> : clause.tag === '第 14 条' ? <Ban size={26} color={C.paper} strokeWidth={2.2} /> : <Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={clause.tone} title={clause.title} tag={clause.tag}>
                {clause.body}
              </IconChip>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CleanPeopleImageScene = () => {
  /* data-final-knowledge="clean-people-image" */
  const columns = [
    {name: '确保司法廉洁', tone: C.teal, icon: <Ban size={28} color={C.paper} strokeWidth={2.2} />, rows: ['自重·自省，坚守廉洁底线（第 15 条）', '不得接受诉讼当事人的钱物和其他利益（第 16 条）', '不得从事或参与营利性的经营活动（第 17 条）', '不得以其身份谋取特殊利益（第 18 条）']},
    {name: '坚持司法为民', tone: C.balance, icon: <HeartHandshake size={28} color={C.paper} strokeWidth={2.2} />, rows: ['以人为本（第 19 条）', '发挥司法的能动作用（第 20 条）', '司法便民（第 21 条）', '尊重当事人和其他诉讼参与人（第 22 条）']},
    {name: '维护司法形象', tone: C.red, icon: <UserCheck size={28} color={C.paper} strokeWidth={2.2} />, rows: ['坚持学习，精研业务（第 23 条）', '坚持文明司法，遵守司法礼仪（第 24 条）', '加强自身修养，约束业外活动（第 25 条）', '退休及辞职法官谨慎行为（第 26 条）']},
  ] as const;
  return (
    <Shell code="03" kicker="廉洁 · 为民 · 形象" title="廉洁 · 为民 · 形象">
      <div
        data-layout="tri-column-charter"
        data-visual-anchor="main center"
        data-text-treatments="column-chips,article-tags"
        data-visual-grammar="clean-column,people-column,image-column"
        data-focal-rule="wide-scope-covering-in-and-out-of-office"
        data-focal-channels="three-columns,scope-note"
        style={{position: 'absolute', inset: 0}}
      >
        {columns.map((column, index) => (
          <Enter key={column.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'clean-people-image' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={column.tone} style={{height: 436, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
              <CharterTab bar={column.tone} icon={column.icon}>{column.name}</CharterTab>
              {column.rows.map((row) => (
                <div key={row} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `5px solid ${column.tone}`, padding: '8px 12px'}}>{row}</div>
              ))}
            </Panel>
          </Enter>
        ))}
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 460, width: 1776}}>
          <CharterStrip style={{height: 140}}>
            <Shield size={42} color={C.balance} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.red, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              约束范围广泛：涵盖法官业内业外方方面面，对<Mark color={C.paper}>退休法官</Mark>和法官<Mark color={C.paper}>亲属</Mark>也提出要求
              <br />
              核心：<BalanceSeal tone={C.balance} delay={180}>公正</BalanceSeal> <BalanceSeal tone={C.teal} delay={192}>廉洁</BalanceSeal> <BalanceSeal tone={C.red} delay={204}>为民</BalanceSeal>
            </span>
          </CharterStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudgeEthics = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-core-loyalty" {...SCENES.coreLoyalty}>
      <CoreLoyaltyScene />
    </TimelineSequence>
    <TimelineSequence name="02-justice" {...SCENES.justice}>
      <JusticeScene />
    </TimelineSequence>
    <TimelineSequence name="03-clean-people-image" {...SCENES.cleanPeopleImage}>
      <CleanPeopleImageScene />
    </TimelineSequence>
  </AbsoluteFill>
);
