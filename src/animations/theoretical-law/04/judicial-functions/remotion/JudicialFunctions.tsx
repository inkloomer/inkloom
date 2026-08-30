import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Handshake, Lightbulb, Megaphone, Network, Scale, Shield, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  tower: '#3A3440',
  towerDeep: '#2B2732',
  panel: '#F1ECDB',
  panelDim: '#E2DDCB',
  edge: '#6C6472',
  ink: '#282330',
  inkSoft: '#5B5462',
  bellBrass: '#C2913C',
  mainBell: '#B04A32',
  skyBlue: '#5B7E96',
  paper: '#F6F1E1',
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
      backgroundColor: C.tower,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(194, 145, 60, 0.13), transparent 72%), repeating-linear-gradient(0deg, transparent 0 96px, rgba(43, 39, 50, 0.55) 96px 99px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.bellBrass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.towerDeep, borderLeft: `8px solid ${C.mainBell}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 58 · {code}</span>
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
        borderBottom: `2px solid ${C.bellBrass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.bellBrass, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bellBrass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bellBrass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bellBrass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bellBrass}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const BellTab = ({children, bar = C.mainBell, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.towerDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const BellStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(43, 39, 50, 0.94)', border: `2px solid ${C.bellBrass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.mainBell}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const BellSeal = ({children, tone = C.mainBell, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const FiveFunctionsScene = () => {
  /* data-final-knowledge="five-functions" */
  const bells = [
    {name: '解决纠纷', tone: C.mainBell, icon: <Handshake size={36} color={C.paper} strokeWidth={2.2} />, tag: '主要功能', body: '司法的主要功能；也是最直接的功能'},
    {name: '人权保障', tone: C.bellBrass, icon: <Shield size={32} color={C.paper} strokeWidth={2.2} />, tag: '坚强后盾', body: '司法权是维护人权的坚强后盾；司法程序是依法理性维权的基本途径；司法机关是保障人权的责任主体'},
    {name: '调整社会关系', tone: C.skyBlue, icon: <Network size={32} color={C.paper} strokeWidth={2.2} />, tag: '审判实现', body: '通过司法机关和司法组织的各项司法活动发挥，具体主要通过人民法院的审判活动实现'},
    {name: '解释·补充法律', tone: C.bellBrass, icon: <BookOpen size={32} color={C.paper} strokeWidth={2.2} />, tag: '克服滞后', body: '法律有滞后性；法官·检察官应根据社会生活变化对法律进行正确完整的阐释'},
    {name: '形成公共政策', tone: C.skyBlue, icon: <Megaphone size={32} color={C.paper} strokeWidth={2.2} />, tag: '角色定位', body: '司法机关参与公共政策制定，表征司法权在国家权力配置与运作中的角色与定位'},
  ] as const;
  return (
    <Shell code="01" kicker="五大功能" title="五音钟楼：司法的功能">
      <div
        data-layout="five-bell-row"
        data-visual-anchor="main center"
        data-text-treatments="bell-plaques,clapper-icons"
        data-visual-grammar="dispute-bell,rights-bell,relations-bell,interpret-bell,policy-bell"
        data-focal-rule="dispute-resolution-is-primary-and-most-direct"
        data-focal-channels="main-bell,direct-indirect-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {bells.map((bell, index) => (
          <Enter key={bell.name} delay={6 + index * 16} from="up" marker={index === 0 ? 'five-functions' : undefined} style={{position: 'absolute', left: 10 + index * 356, top: index === 0 ? 0 : 26, width: 336}}>
            <Panel tone={bell.tone} style={{height: 336, padding: '14px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
              <span style={{width: 84, height: 84, borderRadius: index === 0 ? 42 : 16, backgroundColor: bell.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.bellBrass}`, boxShadow: '0 3px 0 rgba(0,0,0,0.22)'}}>{bell.icon}</span>
              <span style={{fontSize: index === 0 ? 28 : 24, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{bell.name}</span>
              <span style={{padding: '2px 10px', backgroundColor: `${bell.tone}22`, color: bell.tone, fontSize: 20, fontWeight: 950, letterSpacing: 2}}>{bell.tag}</span>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5, textAlign: 'center'}}>{bell.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 392, width: 1776}}>
          <BellStrip style={{height: 116}}>
            <Handshake size={42} color={C.mainBell} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.mainBell, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>直接 · 间接</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              解决纠纷是司法<Mark color={C.paper}>最直接</Mark>的功能 —— 其余所有功能都是<Mark color={C.paper}>间接功能</Mark>
            </span>
          </BellStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const DistinctionsScene = () => {
  /* data-final-knowledge="function-distinctions" */
  return (
    <Shell code="02" kicker="三组辨析" title="辨析三室：直接间接 · 应然实然 · 申诉代理">
      <div
        data-layout="three-lamp-rooms"
        data-visual-anchor="main center"
        data-text-treatments="lamp-plaques,contrast-seals"
        data-visual-grammar="direct-room,ought-room,appeal-room"
        data-focal-rule="direct-versus-indirect-and-ought-versus-actual"
        data-focal-channels="three-rooms,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {[
          {name: '直接 vs 间接', tone: C.mainBell, icon: <Lightbulb size={30} color={C.paper} strokeWidth={2.2} />, body: '解决纠纷是最直接功能；人权保障·调整社会关系·解释补充法律·形成公共政策均为间接功能'},
          {name: '应然 vs 实然', tone: C.skyBlue, icon: <Scale size={30} color={C.paper} strokeWidth={2.2} />, body: '应然功能：司法应当发挥的功能；实然功能：司法实际所发挥的功能'},
          {name: '申诉代理', tone: C.bellBrass, icon: <UserCheck size={30} color={C.paper} strokeWidth={2.2} />, body: '对不服生效裁判的申诉逐步实行律师代理制度；聘不起律师的申诉人纳入法律援助范围'},
        ].map((room, index) => (
          <Enter key={room.name} delay={6 + index * 22} from="up" marker={index === 0 ? 'function-distinctions' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={room.tone} style={{height: 296, padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 80, height: 80, borderRadius: 40, backgroundColor: room.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.bellBrass}`}}>{room.icon}</span>
              <span style={{fontSize: 28, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{room.name}</span>
              <div style={{width: 100, height: 3, backgroundColor: room.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>{room.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 332, width: 1776}}>
          <BellStrip style={{height: 108}}>
            <Scale size={42} color={C.bellBrass} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.bellBrass, color: C.towerDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              主功能<Mark color={C.paper}>解决纠纷</Mark>（最直接）· 保障人权是坚强后盾 · 调整关系靠审判 · 解释补充克滞后 · 参与公共定政策
            </span>
          </BellStrip>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 464, width: 1776}}>
          <BellStrip style={{height: 100, borderColor: C.skyBlue}}>
            <Megaphone size={40} color={C.skyBlue} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.skyBlue, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>易混</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              应然＝「应当发挥」· 实然＝「实际发挥」；申诉代理两件套：<BellSeal tone={C.bellBrass} delay={190}>律师代理</BellSeal> + <BellSeal tone={C.skyBlue} delay={202}>法律援助兜底</BellSeal>
            </span>
          </BellStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialFunctions = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-five-functions" {...SCENES.fiveFunctions}>
      <FiveFunctionsScene />
    </TimelineSequence>
    <TimelineSequence name="02-distinctions" {...SCENES.distinctions}>
      <DistinctionsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
