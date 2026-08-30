import type {CSSProperties, ReactNode} from 'react';
import {BellOff, Eye, Globe, Gavel, Landmark, ListOrdered, MessagesSquare, Shield, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  stone: '#33302C',
  stoneDeep: '#262320',
  panel: '#F1ECDA',
  panelDim: '#E2DDC8',
  edge: '#6B6458',
  ink: '#28241F',
  inkSoft: '#5B5548',
  sealRed: '#B0442E',
  bronze: '#C08840',
  pine: '#58785F',
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
      backgroundColor: C.stone,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 136, 64, 0.12), transparent 72%), repeating-linear-gradient(45deg, transparent 0 130px, rgba(38, 35, 32, 0.5) 130px 133px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.bronze}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.stoneDeep, borderLeft: `8px solid ${C.sealRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 57 · {code}</span>
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
        borderBottom: `2px solid ${C.bronze}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.bronze, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.sealRed}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.sealRed}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.sealRed}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.sealRed}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const WallTab = ({children, bar = C.sealRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.stoneDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const WallStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 35, 32, 0.94)', border: `2px solid ${C.bronze}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.sealRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const SealStamp = ({children, tone = C.sealRed, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const SixFeaturesScene = () => {
  /* data-final-knowledge="six-features" */
  const seals = [
    {name: '独立性', tone: C.sealRed, icon: <Shield size={34} color={C.paper} strokeWidth={2.2} />, body: '独立行使职权，不受上级机关·行政机关干涉；独立性是法治的基本要求'},
    {name: '被动性', tone: C.pine, icon: <BellOff size={34} color={C.paper} strokeWidth={2.2} />, body: '「不告不理」—— 法律适用活动的惯常机制'},
    {name: '交涉性', tone: C.bronze, icon: <MessagesSquare size={34} color={C.paper} strokeWidth={2.2} />, body: '离不开多方当事人的诉讼参与'},
    {name: '程序性', tone: C.bronze, icon: <ListOrdered size={34} color={C.paper} strokeWidth={2.2} />, body: '处理案件必须依据相应的程序法规定'},
    {name: '普遍性', tone: C.pine, icon: <Globe size={34} color={C.paper} strokeWidth={2.2} />, body: '社会纠纷解决体系中最具普适性的方式，法院是最主要纠纷解决主体'},
    {name: '终极性', tone: C.sealRed, icon: <Gavel size={34} color={C.paper} strokeWidth={2.2} />, body: '解决纠纷·处理冲突的最后环节，结果是最终性决定；现代社会最重要的争端解决手段'},
  ] as const;
  return (
    <Shell code="01" kicker="司法六特征" title="六印司法墙：特征方阵">
      <div
        data-layout="six-seal-grid"
        data-visual-anchor="main center"
        data-text-treatments="seal-faces,knob-icons"
        data-visual-grammar="independence-seal,passive-seal,negotiation-seal,procedure-seal,universal-seal,finality-seal"
        data-focal-rule="six-characteristics-with-exam-weight-on-first-three"
        data-focal-channels="seal-grid,exam-weight-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {seals.map((seal, index) => (
          <Enter key={seal.name} delay={6 + index * 14} from="up" marker={index === 0 ? 'six-features' : undefined} style={{position: 'absolute', left: 20 + (index % 3) * 592, top: Math.floor(index / 3) * 218, width: 568}}>
            <Panel tone={seal.tone} style={{height: 198, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{flexShrink: 0, width: 56, height: 56, borderRadius: 12, backgroundColor: seal.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.bronze}`, boxShadow: '0 3px 0 rgba(0,0,0,0.22)'}}>{seal.icon}</span>
                <span style={{fontSize: 27, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{seal.name}</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>{seal.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 456, width: 1776}}>
          <WallStrip style={{height: 104}}>
            <Shield size={40} color={C.bronze} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.sealRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>考查重点</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              <SealStamp tone={C.sealRed} delay={150}>独立性</SealStamp> <SealStamp tone={C.pine} delay={162}>被动性</SealStamp> <SealStamp tone={C.bronze} delay={174}>交涉性</SealStamp> 考查比例较高
            </span>
          </WallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const IndependenceScene = () => {
  /* data-final-knowledge="independence-notes" */
  const notes = [
    {name: '政体辨', tone: C.sealRed, icon: <Landmark size={30} color={C.paper} strokeWidth={2.2} />, body: '我国是人大政体，不强调三权分立下的「司法独立」'},
    {name: '边界辨', tone: C.bronze, icon: <Shield size={30} color={C.paper} strokeWidth={2.2} />, body: '表现为「司法机关独立行使职权，不受行政机关、社会团体和公民的干涉」'},
    {name: '监督辨', tone: C.pine, icon: <Eye size={30} color={C.paper} strokeWidth={2.2} />, body: '未排除人大的监督和党的领导'},
  ] as const;
  return (
    <Shell code="02" kicker="独立性的理解" title="单室三辨：独立性">
      <div
        data-layout="single-room-three-notes"
        data-visual-anchor="main center"
        data-text-treatments="note-plaques,boundary-seals"
        data-visual-grammar="polity-note,boundary-note,supervision-note"
        data-focal-rule="npc-polity-independence-without-separation-of-powers"
        data-focal-channels="three-notes,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {notes.map((note, index) => (
          <Enter key={note.name} delay={6 + index * 22} from="up" marker={index === 0 ? 'independence-notes' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={note.tone} style={{height: 264, padding: '14px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 80, height: 80, borderRadius: 40, backgroundColor: note.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.bronze}`}}>{note.icon}</span>
              <span style={{fontSize: 28, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{note.name}</span>
              <div style={{width: 100, height: 3, backgroundColor: note.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.55, textAlign: 'center'}}>{note.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 300, width: 1776}}>
          <WallStrip style={{height: 116}}>
            <Landmark size={42} color={C.bronze} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.bronze, color: C.stoneDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>易错</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              「不受干涉」名单里<Mark color={C.paper}>没有人大</Mark> —— 人大监督与党的领导都未排除
              <br />
              干涉主体记三个：行政机关 · 社会团体 · 公民
            </span>
          </WallStrip>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 440, width: 1776}}>
          <Panel tone={C.pine} style={{height: 128, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <Users size={38} color={C.pine} strokeWidth={2.2} />
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              <span style={{fontWeight: 950, color: C.pine}}>六特征连记</span>：独立行使（法治要求）→ 不告不理（被动）→ 当事人参与（交涉）→ 依程序法（程序）→ 最普适（普遍）→ 最后环节·最终决定（终极）
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialCharacteristics = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-six-features" {...SCENES.sixFeatures}>
      <SixFeaturesScene />
    </TimelineSequence>
    <TimelineSequence name="02-independence" {...SCENES.independence}>
      <IndependenceScene />
    </TimelineSequence>
  </AbsoluteFill>
);
