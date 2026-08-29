import type {CSSProperties, ReactNode} from 'react';
import {
  Crown,
  Factory,
  FileText,
  GitBranch,
  Landmark,
  Layers,
  Quote,
  ScrollText,
  ShieldCheck,
  UserX,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  steel: '#3B4854',
  steelDeep: '#2C3640',
  grid: '#4A5763',
  paper: '#EAE4D4',
  paperDim: '#DFD8C4',
  soot: '#26221E',
  ink: '#2E2A24',
  red: '#C33D2E',
  redDeep: '#9E2F23',
  brass: '#A98B4F',
  line: '#6E7A84',
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

const Tab = ({children, tone = C.red}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: tone, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, borderLeft: `6px solid ${C.soot}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}26`, padding: '2px 9px'}}>{children}</span>
);

const DraftChip = ({accent = C.line, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}12`,
      fontSize: 23,
      fontWeight: 870,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.red, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        border: `5px solid ${color}`,
        color,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 3,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

const Underline = ({children, color = C.red, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
          height: 5,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Crosshair = ({x, y, tone = C.brass}: {readonly x: number; readonly y: number; readonly tone?: string}) => (
  <div style={{position: 'absolute', left: x - 11, top: y - 11, width: 22, height: 22}}>
    <span style={{position: 'absolute', left: 0, right: 0, top: 10, height: 2, backgroundColor: tone}} />
    <span style={{position: 'absolute', top: 0, bottom: 0, left: 10, width: 2, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 7, top: 7, width: 8, height: 8, border: `2px solid ${tone}`, borderRadius: 11}} />
  </div>
);

const DraftSheet = ({
  children,
  marker,
  style,
  tone,
}: {
  readonly children: ReactNode;
  readonly marker?: string;
  readonly style?: CSSProperties;
  readonly tone?: string;
}) => (
  <div
    data-final-knowledge={marker}
    style={{
      position: 'absolute',
      backgroundColor: C.paper,
      border: `2px solid ${C.steelDeep}`,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: 0, top: 0, width: 12, height: '100%', backgroundColor: tone ?? C.red}} />
    {children}
    <Crosshair x={22} y={20} />
  </div>
);

const DimLine = ({
  delay,
  label,
  left,
  top,
  width,
  labelTone = C.paper,
}: {
  readonly delay: number;
  readonly label: ReactNode;
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly labelTone?: string;
}) => {
  const frame = useCurrentFrame();
  const draw = prog(frame, delay, 26);
  return (
    <div style={{position: 'absolute', left, top, width, height: 44, opacity: draw}}>
      <span style={{position: 'absolute', left: 0, top: 20, height: 3, width: width * draw, backgroundColor: C.brass}} />
      <span style={{position: 'absolute', left: 0, top: 12, width: 3, height: 18, backgroundColor: C.brass}} />
      <span style={{position: 'absolute', right: width - width * draw, top: 12, width: 3, height: 18, backgroundColor: C.brass}} />
      <span
        style={{
          position: 'absolute',
          left: '50%',
          top: -8,
          translate: '-50% 0',
          backgroundColor: C.steelDeep,
          border: `2px solid ${C.brass}`,
          color: labelTone,
          fontSize: 24,
          fontWeight: 920,
          padding: '4px 16px',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
};

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.steel,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 95px, ${C.grid} 95px 96px), repeating-linear-gradient(90deg, transparent 0 95px, ${C.grid} 95px 96px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.brass}`}} />
    <Crosshair x={62} y={62} />
    <Crosshair x={1858} y={62} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.soot, borderLeft: `8px solid ${C.red}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 02 · {code}</span>
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
        borderBottom: `2px solid ${C.brass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brass, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const OfficialFormalityScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="formality-heading" data-final-knowledge="issuance-flow" data-final-knowledge="enforcement-tether" data-final-knowledge="formality-note" data-final-knowledge="state-nature-rename" data-final-knowledge="official-nature-chip" data-final-knowledge="initial-position-note" */
  const travel = interpolate(frame, [64, 118], [0, 1], CLAMP);
  return (
    <Shell code="01" kicker="本质的最初表现" title="正式性：绑定国家机器">
      <div
        data-layout="state-apparatus-issuance-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,soft-highlight,chip,thin-underline"
        data-visual-grammar="state-issuance,enforcement-tether,official-rename"
        data-focal-rule="law-is-made-and-kept-by-the-formal-state-apparatus"
        data-focal-channels="icon,motion,enclosure,annotation,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" marker="initial-position-note" style={{position: 'absolute', left: 0, top: 10}}>
          <Tab>法的本质 · 最初表现</Tab>
        </Enter>
        <Enter delay={14} from="down" marker="formality-heading" style={{position: 'absolute', left: 320, top: 4, width: 1140}}>
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.steelDeep}`, padding: '16px 28px', textAlign: 'center'}}>
            <span style={{fontSize: 37, fontWeight: 950, color: C.soot}}>
              <Underline delay={40}>正式性</Underline>：依靠正式的国家机关制定和保障实施
            </span>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 190, width: 1776, height: 260}}>
        <Enter delay={38} from="left" marker="issuance-flow" style={{position: 'absolute', left: 40, top: 40, width: 470, height: 250}}>
          <DraftSheet style={{left: 0, top: 0, width: 470, height: 250}} tone={C.red}>
            <div style={{padding: '24px 26px 20px 40px', display: 'flex', flexDirection: 'column', gap: 14}}>
              <Landmark size={52} color={C.red} strokeWidth={2.2} />
              <div style={{fontSize: 34, fontWeight: 950, color: C.soot}}>国家机关</div>
              <div style={{fontSize: 23, fontWeight: 830, color: C.line}}>正式的立法与执法机构</div>
            </div>
          </DraftSheet>
        </Enter>
        <Enter delay={62} from="none" marker="enforcement-tether" style={{position: 'absolute', left: 1266, top: 40, width: 470, height: 250}}>
          <DraftSheet style={{left: 0, top: 0, width: 470, height: 250}} tone={C.brass}>
            <div style={{padding: '24px 26px 20px 40px', display: 'flex', flexDirection: 'column', gap: 14}}>
              <ShieldCheck size={52} color={C.redDeep} strokeWidth={2.2} />
              <div style={{fontSize: 34, fontWeight: 950, color: C.soot}}>国家强制保障</div>
              <div style={{fontSize: 23, fontWeight: 830, color: C.line}}>实施离不开国家机器</div>
            </div>
          </DraftSheet>
        </Enter>
          <div
            data-stateful-source="statute-issued-by-state"
            style={{
              position: 'absolute',
              left: interpolate(frame, [56, 130], [130, 1330], CLAMP),
              top: 130,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              opacity: prog(frame, 52, 12) * (1 - prog(frame, 130, 16)),
            }}
          >
            <FileText size={44} color={C.soot} strokeWidth={2.2} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.soot, backgroundColor: C.paper, border: `3px solid ${C.steelDeep}`, padding: '6px 14px'}}>法律</span>
          </div>
          <div
            data-stateful-terminal="statute-issued-by-state"
            style={{
              position: 'absolute',
              left: 566,
              top: 66,
              opacity: prog(frame, 132, 14),
            }}
          >
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, backgroundColor: C.steelDeep, border: `2px solid ${C.brass}`, padding: '6px 16px'}}>
              法律已在国家机器手中 · 制定与保障一体
            </span>
          </div>
        </div>
        <Enter delay={140} marker="formality-note" style={{position: 'absolute', left: 150, top: 520, width: 1476}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: '#26221E18', padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontSize: 27, fontWeight: 880, color: C.paper}}>
              必然<Soft color={C.brass}>绑定正式的国家机器</Soft>（机关）—— 制定与实施都出不去这张图纸
            </span>
          </div>
        </Enter>
        <Enter delay={172} marker="state-nature-rename" style={{position: 'absolute', left: 400, top: 640, width: 976}}>
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.steelDeep}`, padding: '20px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.soot}}>正式性</span>
            <span style={{fontSize: 28, fontWeight: 950, color: C.red}}>亦称 ↓</span>
            <DraftChip accent={C.red} solid>
              国家性
            </DraftChip>
            <span data-final-knowledge="official-nature-chip">
              <DraftChip accent={C.red} solid>
                官方性
              </DraftChip>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ClassWillScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="class-heading" data-final-knowledge="ruling-class-block" data-final-knowledge="ruled-class-block" data-final-knowledge="sole-will-claim" data-final-knowledge="exclusion-negation" data-final-knowledge="aspiration-valve" data-final-knowledge="whole-longterm-note" */
  const valve = interpolate(frame, [140, 186], [0, 1], CLAMP);
  return (
    <Shell code="02" kicker="本质的其次反映" title="阶级性：唯一的意志来源">
      <div
        data-layout="class-pair-with-will-gate"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,soft-highlight,chip,external-negation,stamp"
        data-visual-grammar="sole-will-claim,exclusion-negation,concession-valve,whole-vs-part-contrast"
        data-focal-rule="law-expresses-only-the-will-of-the-ruling-class"
        data-focal-channels="icon,contrast,enclosure,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" marker="class-heading" style={{position: 'absolute', left: 0, top: 10}}>
          <div style={{display: 'flex', gap: 12}}>
            <Tab>法的本质 · 其次反映</Tab>
            <Tab tone={C.steelDeep}>唯一性</Tab>
          </div>
        </Enter>
        <Enter delay={14} from="down" style={{position: 'absolute', left: 380, top: 4, width: 1020}}>
          <div data-final-knowledge="sole-will-claim" style={{backgroundColor: C.paper, border: `3px solid ${C.steelDeep}`, padding: '16px 28px', textAlign: 'center'}}>
            <span style={{fontSize: 37, fontWeight: 950, color: C.soot}}>
              法律 = <Underline delay={40}>统治阶级意志</Underline>的体现
            </span>
          </div>
        </Enter>
        <Enter delay={40} from="left" marker="ruling-class-block" style={{position: 'absolute', left: 40, top: 180, width: 500, height: 300}}>
          <div style={{backgroundColor: C.paper, border: `4px solid ${C.red}`, height: '100%', padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Crown size={50} color={C.red} strokeWidth={2.3} />
              <span style={{fontSize: 36, fontWeight: 950, color: C.soot}}>统治阶级</span>
            </div>
            <div style={{fontSize: 24, fontWeight: 850, color: C.ink}}>
              意志<Soft color={C.red}>上升为法律</Soft>
            </div>
            <span style={{marginTop: 'auto'}}>
              <Stamp delay={90} size={28}>唯一体现</Stamp>
            </span>
          </div>
        </Enter>
        <Enter delay={58} from="right" marker="ruled-class-block" style={{position: 'absolute', left: 1236, top: 180, width: 500, height: 300}}>
          <div style={{backgroundColor: C.paperDim, border: `4px solid ${C.line}`, height: '100%', padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <UserX size={50} color={C.line} strokeWidth={2.3} />
              <span style={{fontSize: 36, fontWeight: 950, color: C.ink}}>被统治阶级</span>
            </div>
            <div style={{fontSize: 24, fontWeight: 850, color: C.ink}}>不是法律的意志来源</div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{width: 0, height: 0, borderLeft: '16px solid transparent', borderRight: '16px solid transparent', borderBottom: `26px solid ${C.red}`}} />
              <span style={{fontSize: 25, fontWeight: 930, color: C.redDeep}}>任何时候都不可能体现其意志</span>
            </div>
          </div>
        </Enter>
        <svg style={{position: 'absolute', inset: 0, width: 1776, height: 752, opacity: prog(frame, 84, 20)}} viewBox="0 0 1776 752">
          <defs>
            <marker id="will-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6.5" refY="5" viewBox="0 0 10 10">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={C.red} />
            </marker>
          </defs>
          <path d="M 290 196 V 148 H 700 V 108" fill="none" stroke={C.red} strokeWidth={7} markerEnd="url(#will-arrow)" />
          <path d="M 1486 196 V 148 H 1076 V 108" fill="none" stroke={C.line} strokeWidth={5} strokeDasharray="14 10" />
        </svg>
        <div style={{position: 'absolute', left: 330, top: 118, opacity: prog(frame, 96, 16)}}>
          <span style={{fontSize: 24, fontWeight: 930, color: C.paper, backgroundColor: C.redDeep, padding: '4px 16px', border: `2px solid ${C.paper}`}}>意志直达法律</span>
        </div>
        <div style={{position: 'absolute', left: 1226, top: 116, opacity: prog(frame, 108, 16), display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{width: 44, height: 44, border: `5px solid ${C.red}`, backgroundColor: C.paper, position: 'relative'}}>
            <span style={{position: 'absolute', left: 6, top: 2, fontSize: 38, fontWeight: 950, color: C.red, lineHeight: 1}}>×</span>
          </span>
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>此路不通</span>
        </div>
        <div
          data-stateful-source="aspiration-through-valve"
          style={{
            position: 'absolute',
            left: interpolate(frame, [128, 190], [1268, 880], CLAMP),
            top: interpolate(frame, [128, 190], [444, 540], CLAMP),
            opacity: prog(frame, 124, 12) * (1 - prog(frame, 176, 14)),
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{fontSize: 23, fontWeight: 900, color: C.paper, backgroundColor: C.steelDeep, border: `2px solid ${C.brass}`, padding: '5px 14px'}}>愿望和要求</span>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 596,
            top: 470,
            width: 588,
            height: 88,
            border: `3px dashed ${C.brass}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            opacity: prog(frame, 148, 16),
          }}
        >
          <span style={{fontSize: 24, fontWeight: 920, color: C.brass, backgroundColor: C.steelDeep, padding: '4px 12px'}}>阀门 · 为缓和矛盾</span>
          <span style={{fontSize: 23, fontWeight: 850, color: C.paper}}>放行限量信号</span>
        </div>
        <div
          data-stateful-terminal="aspiration-through-valve"
          data-final-knowledge="aspiration-valve"
          style={{
            position: 'absolute',
            left: 646,
            top: 584,
            width: 588,
            opacity: valve,
          }}
        >
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.brass}`, padding: '13px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.soot}}>
              仅可能反映其某些<Soft color={C.brass}>愿望和要求</Soft>
            </span>
          </div>
        </div>
        <Enter delay={206} marker="whole-longterm-note" style={{position: 'absolute', left: 40, top: 596, width: 500}}>
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.steelDeep}`, borderLeftWidth: 10, padding: '14px 20px'}}>
            <DraftChip accent={C.red} solid>
              整体意志 · 长远利益
            </DraftChip>
            <div style={{marginTop: 9, fontSize: 22, fontWeight: 850, color: C.ink}}>可能违背个别统治者利益、与短期利益相违背</div>
          </div>
        </Enter>
        <Enter delay={222} style={{position: 'absolute', left: 1236, top: 596, width: 500}}>
          <div data-final-knowledge="exclusion-negation" style={{border: `3px solid ${C.red}`, backgroundColor: '#C33D2E14', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12}}>
            <UserX size={32} color={C.red} strokeWidth={2.6} />
            <span style={{fontSize: 23, fontWeight: 880, color: C.paper}}>意志来源上没有例外条款</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const MaterialDeterminismScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="material-heading" data-final-knowledge="material-base-block" data-final-knowledge="law-superstructure-token" data-final-knowledge="determine-arrow" data-final-knowledge="scribe-quote" data-final-knowledge="factor-diversity-note" data-final-knowledge="decisive-not-sole-chip" */
  const rise = interpolate(frame, [96, 148], [0, 1], CLAMP);
  return (
    <Shell code="03" kicker="本质的最终体现" title="物质制约性：地基决定上部">
      <div
        data-layout="foundation-superstructure-with-tributaries"
        data-visual-anchor="flow-target"
        data-text-treatments="label-block,soft-highlight,chip,stamp,thin-underline"
        data-visual-grammar="base-determines-superstructure,scribe-not-author,non-sole-factor"
        data-focal-rule="law-content-is-finally-determined-by-material-life-conditions"
        data-focal-channels="icon,motion,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" marker="material-heading" style={{position: 'absolute', left: 0, top: 10}}>
          <div style={{display: 'flex', gap: 12}}>
            <Tab>法的本质 · 最终体现</Tab>
            <Tab tone={C.steelDeep}>社会性</Tab>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 40, top: 90, width: 820, height: 660}}>
          <Enter delay={20} from="up" marker="law-superstructure-token" style={{position: 'absolute', left: 60, top: 0, width: 700}}>
            <div style={{backgroundColor: C.paper, border: `4px solid ${C.steelDeep}`, padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 16}}>
              <ScrollText size={48} color={C.redDeep} strokeWidth={2.2} />
              <div>
                <div style={{fontSize: 34, fontWeight: 950, color: C.soot}}>法律的内容</div>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 830, color: C.line}}>上层建筑的一部分</div>
              </div>
              <div
                data-stateful-terminal="economic-requirement-into-law"
                style={{
                  marginLeft: 'auto',
                  opacity: rise,
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.paper,
                  backgroundColor: C.steelDeep,
                  border: `2px solid ${C.brass}`,
                  padding: '6px 14px',
                }}
              >
                经济要求 已写入条文
              </div>
            </div>
          </Enter>
          <div style={{position: 'absolute', left: 130, top: 130, width: 560, height: 300, opacity: prog(frame, 64, 20)}}>
            <span style={{position: 'absolute', left: 278, top: interpolate(frame, [84, 140], [256, 100], CLAMP), height: interpolate(frame, [84, 140], [44, 200], CLAMP), width: 10, backgroundColor: C.red}} />
            <span style={{position: 'absolute', left: 252, top: interpolate(frame, [84, 140], [212, 56], CLAMP), borderLeft: '31px solid transparent', borderRight: '31px solid transparent', borderBottom: `44px solid ${C.red}`}} />
            <span style={{position: 'absolute', left: 420, top: 96, fontSize: 30, fontWeight: 950, color: C.paper, backgroundColor: C.red, padding: '6px 18px'}}>归根到底 · 决定</span>
          </div>
          <div
            data-final-knowledge="determine-arrow"
            style={{
              position: 'absolute',
              left: 420,
              top: 264,
              width: 280,
              textAlign: 'left',
              opacity: prog(frame, 88, 16),
            }}
          >
            <span style={{fontSize: 24, fontWeight: 880, color: C.brass}}>决定方向：自下而上 · 单向</span>
          </div>
          <Enter delay={40} from="up" marker="material-base-block" style={{position: 'absolute', left: 60, top: 460, width: 700}}>
            <div style={{backgroundColor: C.soot, border: `4px solid ${C.brass}`, padding: '22px 26px', display: 'flex', alignItems: 'center', gap: 16}}>
              <Factory size={50} color={C.brass} strokeWidth={2.2} />
              <div>
                <div style={{fontSize: 34, fontWeight: 950, color: C.paper}}>物质生活条件（经济基础）</div>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 830, color: C.brass}}>地基：一切上层建筑的地块</div>
              </div>
              <div
                data-stateful-source="economic-requirement-into-law"
                style={{
                  marginLeft: 'auto',
                  opacity: prog(frame, 84, 14),
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.soot,
                  backgroundColor: C.paper,
                  border: `2px solid ${C.brass}`,
                  padding: '6px 14px',
                }}
              >
                经济要求 ↑
              </div>
            </div>
          </Enter>
        </div>
        <Enter delay={120} marker="scribe-quote" style={{position: 'absolute', left: 920, top: 150, width: 816}}>
          <div style={{backgroundColor: C.paper, border: `4px solid ${C.red}`, padding: '22px 28px', position: 'relative'}}>
            <Quote size={44} color={C.red} strokeWidth={2.3} style={{position: 'absolute', right: 24, top: 20}} />
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={40} color={C.redDeep} strokeWidth={2.3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.soot}}>国家的角色</span>
            </div>
            <div style={{marginTop: 10, fontSize: 30, fontWeight: 950, color: C.soot, lineHeight: 1.45, width: 620}}>
              国家不是在<Underline color={C.line} delay={150}>创造法律</Underline>，
              <br />
              只是在<Soft color={C.red}>表述法律</Soft>
            </div>
            <div style={{marginTop: 12}}>
              <Stamp delay={170} size={26}>表述者 · 非作者</Stamp>
            </div>
          </div>
        </Enter>
        <Enter delay={150} marker="decisive-not-sole-chip" style={{position: 'absolute', left: 920, top: 470, width: 816}}>
          <div style={{border: `3px solid ${C.brass}`, backgroundColor: '#26221E14', padding: '14px 22px'}}>
            <DraftChip accent={C.brass} solid>
              决定性因素 · 但非唯一
            </DraftChip>
          </div>
        </Enter>
        <Enter delay={176} marker="factor-diversity-note" style={{position: 'absolute', left: 920, top: 590, width: 816}}>
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.steelDeep}`, padding: '18px 24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <GitBranch size={36} color={C.steelDeep} strokeWidth={2.3} />
              <span style={{fontSize: 26, fontWeight: 920, color: C.soot}}>影响因素的多样性</span>
            </div>
            <div style={{marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 10}}>
              <DraftChip accent={C.red}>历史传统</DraftChip>
              <DraftChip accent={C.red}>民族习惯</DraftChip>
              <DraftChip accent={C.red}>文化偏好</DraftChip>
              <DraftChip accent={C.line}>等其他因素</DraftChip>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const DepthLadderStatusScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="ladder-heading" data-final-knowledge="formality-step" data-final-knowledge="class-step" data-final-knowledge="material-step" data-final-knowledge="organic-bond-note" data-final-knowledge="status-plaque" data-final-knowledge="marx-quote-strip" */
  const steps = [
    {marker: 'formality-step', label: '正式性', note: '最初表现', tone: C.red, left: 40, top: 480},
    {marker: 'class-step', label: '阶级性', note: '其次反映', tone: C.redDeep, left: 330, top: 340},
    {marker: 'material-step', label: '物质制约性', note: '最终体现', tone: C.soot, left: 620, top: 200},
  ];
  return (
    <Shell code="04" kicker="由浅到深" title="三重定性，一个地位">
      <div
        data-layout="depth-ladder-with-status-plaque"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="shallow-to-deep-ladder,theory-status,quote-attestation"
        data-focal-rule="three-characters-ascend-from-surface-to-depth"
        data-focal-channels="spatial,contrast,icon,annotation,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" marker="ladder-heading" style={{position: 'absolute', left: 0, top: 10}}>
          <Tab>三重定性 · 有机联系</Tab>
        </Enter>
        <div style={{position: 'absolute', left: 130, top: 90, width: 0, height: 560, borderLeft: `3px dashed ${C.brass}`, opacity: prog(frame, 20, 20)}} />
        <div style={{position: 'absolute', left: 40, top: 96, opacity: prog(frame, 24, 20)}}>
          <span style={{fontSize: 26, fontWeight: 950, color: C.brass, letterSpacing: 4, writingMode: 'vertical-rl'}}>浅 → 深</span>
        </div>
        {steps.map((step, index) => (
          <Enter key={step.marker} delay={40 + index * 44} from="left" marker={step.marker} style={{position: 'absolute', left: step.left, top: step.top, width: 520}}>
            <div style={{backgroundColor: C.paper, border: `4px solid ${step.tone}`, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 16}}>
              <Layers size={46} color={step.tone === C.soot ? C.steelDeep : step.tone} strokeWidth={2.3} />
              <div>
                <div style={{fontSize: 34, fontWeight: 950, color: C.soot}}>{step.label}</div>
                <div style={{marginTop: 6, fontSize: 23, fontWeight: 850, color: C.line}}>{step.note}</div>
              </div>
              <span style={{marginLeft: 'auto', fontSize: 26, fontWeight: 950, color: step.tone === C.soot ? C.steelDeep : step.tone}}>{index + 1}</span>
            </div>
          </Enter>
        ))}
        <Enter delay={180} marker="organic-bond-note" style={{position: 'absolute', left: 40, top: 650, width: 1100}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: '#26221E14', padding: '10px 20px'}}>
            <span style={{fontSize: 23, fontWeight: 880, color: C.paper}}>三者有机联系，构成完整看法 · 与其他本质学说存在<Soft color={C.red}>鲜明差别</Soft></span>
          </div>
        </Enter>
        <Enter delay={210} from="right" marker="status-plaque" style={{position: 'absolute', left: 1200, top: 96, width: 536}}>
          <div style={{backgroundColor: C.paper, border: `4px solid ${C.red}`, padding: '24px 28px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Landmark size={44} color={C.red} strokeWidth={2.3} />
              <span style={{fontSize: 31, fontWeight: 950, color: C.soot}}>马列理论的地位</span>
            </div>
            <div style={{marginTop: 12, fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              当代中国法理学的<Soft color={C.red}>统治性理论</Soft>，绝对正确，不容置疑
            </div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 850, color: C.line}}>觉得马列矛盾时，矛盾的不是马列，是你</div>
            <div style={{marginTop: 12}}>
              <Stamp delay={236} size={26}>考试立场</Stamp>
            </div>
          </div>
        </Enter>
        <Enter delay={240} from="up" marker="marx-quote-strip" style={{position: 'absolute', left: 1200, top: 560, width: 536}}>
          <div style={{backgroundColor: C.soot, border: `3px solid ${C.brass}`, padding: '16px 24px'}}>
            <div style={{display: 'flex', gap: 14, alignItems: 'flex-start'}}>
              <Quote size={34} color={C.brass} strokeWidth={2.3} />
              <div>
                <div style={{fontSize: 23, fontWeight: 920, color: C.paper, lineHeight: 1.5}}>
                  「无论是政治的立法或是市民的立法，都只是表明和记载经济关系的要求而已。」
                </div>
                <div style={{marginTop: 6, fontSize: 21, fontWeight: 850, color: C.brass}}>—— 马克思 · 对应物质制约性</div>
              </div>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const MarxistLawEssence = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-official-formality" {...SCENES.officialFormality}>
      <OfficialFormalityScene />
    </TimelineSequence>
    <TimelineSequence name="02-class-will" {...SCENES.classWill}>
      <ClassWillScene />
    </TimelineSequence>
    <TimelineSequence name="03-material-determinism" {...SCENES.materialDeterminism}>
      <MaterialDeterminismScene />
    </TimelineSequence>
    <TimelineSequence name="04-depth-ladder-status" {...SCENES.depthLadderStatus}>
      <DepthLadderStatusScene />
    </TimelineSequence>
  </AbsoluteFill>
);
