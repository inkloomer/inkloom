import type {CSSProperties, ReactNode} from 'react';
import {Ban, Crown, HeartHandshake, Scale, Shield} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  supervision: '#322F38',
  supervisionDeep: '#26232B',
  panel: '#F1ECDA',
  panelDim: '#E2DDC7',
  edge: '#655F6B',
  ink: '#272330',
  inkSoft: '#585264',
  emblemGold: '#C0983E',
  duty: '#B04834',
  cleanTeal: '#4E7D74',
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
      backgroundColor: C.supervision,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 158px, rgba(38, 35, 43, 0.55) 158px 161px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.emblemGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.supervisionDeep, borderLeft: `8px solid ${C.duty}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 69 · {code}</span>
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
        borderBottom: `2px solid ${C.emblemGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.emblemGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cleanTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cleanTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cleanTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.cleanTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const EmblemTab = ({children, bar = C.duty, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.supervisionDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const EmblemStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 35, 43, 0.94)', border: `2px solid ${C.emblemGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.duty}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.emblemGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const LoyaltyPeopleScene = () => {
  /* data-final-knowledge="loyalty-people" */
  return (
    <Shell code="01" kicker="忠诚 · 为民" title="忠诚 · 为民">
      <div
        data-layout="twin-emblem-panels"
        data-visual-anchor="main center"
        data-text-treatments="emblem-plaques,row-chips"
        data-visual-grammar="loyalty-emblem,people-emblem"
        data-focal-rule="four-loyalties-and-people-centered-purpose"
        data-focal-channels="emblem-headings,four-loyalties"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="loyalty-people" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 468}}>
          <Panel tone={C.duty} watermark={<Shield size={190} color={C.duty} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <EmblemTab bar={C.duty} icon={<Shield size={26} color={C.paper} strokeWidth={2.2} />}>坚持忠诚品格，永葆政治本色</EmblemTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
              {['忠于党 · 忠于国家', '忠于人民', '忠于宪法和法律', '忠于检察事业'].map((line) => (
                <div key={line} style={{fontSize: 23, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.duty}`, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8}}>
                  <Shield size={24} color={C.duty} strokeWidth={2.2} />
                  {line}
                </div>
              ))}
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, lineHeight: 1.5}}>四忠于 —— 永葆政治本色</div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 468}}>
          <Panel tone={C.cleanTeal} watermark={<HeartHandshake size={190} color={C.cleanTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <EmblemTab bar={C.cleanTeal} icon={<HeartHandshake size={26} color={C.paper} strokeWidth={2.2} />}>坚持为民宗旨，保障人民权益</EmblemTab>
            {[
              {title: '坚持以人民为中心的理念', tone: C.cleanTeal},
              {title: '坚持严格、规范、公正、文明司法', tone: C.emblemGold},
              {title: '坚持融入群众：倾听群众呼声、解决群众诉求、接受群众监督', tone: C.duty},
            ].map((row) => (
              <div key={row.title} style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `6px solid ${row.tone}`, padding: '10px 13px'}}>{row.title}</div>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DutyFairCleanScene = () => {
  /* data-final-knowledge="duty-fair-clean" */
  const fairness = ['独立履职', '理性履职', '履职回避', '重视证据', '遵循程序', '保障人权', '尊重律师和法官', '遵守纪律', '提高效率'];
  return (
    <Shell code="02" kicker="担当 · 公正 · 廉洁" title="担当 · 公正 · 廉洁">
      <div
        data-layout="crown-plus-columns"
        data-visual-anchor="main center"
        data-text-treatments="crown-plaque,column-chips"
        data-visual-grammar="duty-crown,fair-column,clean-column"
        data-focal-rule="duty-spirit-is-the-exam-focus"
        data-focal-channels="duty-crown,fair-column"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="duty-fair-clean" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 464}}>
          <Panel tone={C.duty} watermark={<Crown size={190} color={C.duty} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <EmblemTab bar={C.duty} icon={<Crown size={26} color={C.paper} strokeWidth={2.2} />}>坚持担当精神，强化法律监督（重点）</EmblemTab>
            {[
              '敢于担当：坚决打击发生在群众身边损害群众利益的各类犯罪，增强群众安全感和满意度',
              '敢于担当：坚守良知·公正司法·司法公开，自觉接受人民群众和社会的监督，以公开促公正',
              '敢于担当：直面矛盾，正视问题',
            ].map((line) => (
              <div key={line} style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.duty}12`, borderLeft: `6px solid ${C.duty}`, padding: '9px 13px'}}>{line}</div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 464}}>
          <Panel tone={C.cleanTeal} watermark={<Scale size={190} color={C.cleanTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <EmblemTab bar={C.cleanTeal} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>坚持公正理念，维护法制统一（九条）</EmblemTab>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8}}>
              {fairness.map((line) => (
                <div key={line} style={{fontSize: 22, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.cleanTeal}`, padding: '9px 11px', textAlign: 'center'}}>{line}</div>
              ))}
            </div>
            <EmblemTab bar={C.emblemGold} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>坚持廉洁操守，自觉接受监督</EmblemTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              坚持廉洁操守 · 避免不当影响 · 妥善处理个人事务
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 488, width: 1776}}>
          <EmblemStrip style={{height: 104}}>
            <Crown size={42} color={C.duty} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.duty, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              重点注意「担当」：打击群众身边损害群众利益的犯罪 · 坚守良知公正司法司法公开 · 直面矛盾正视问题
            </span>
          </EmblemStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcuratorEthics = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-loyalty-people" {...SCENES.loyaltyPeople}>
      <LoyaltyPeopleScene />
    </TimelineSequence>
    <TimelineSequence name="02-duty-fair-clean" {...SCENES.dutyFairClean}>
      <DutyFairCleanScene />
    </TimelineSequence>
  </AbsoluteFill>
);
