import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Gavel, Landmark, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  stone: '#2F3538',
  stoneDeep: '#22282B',
  panel: '#F0EBD9',
  panelDim: '#E1DCC6',
  edge: '#5F6A6E',
  ink: '#23292C',
  inkSoft: '#545E62',
  cinnabar: '#B3442E',
  bronzeGreen: '#4F7A6A',
  paleGold: '#CDA85C',
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
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(205, 168, 92, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 112px, rgba(34, 40, 43, 0.55) 112px 115px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.paleGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.stoneDeep, borderLeft: `8px solid ${C.cinnabar}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 56 · {code}</span>
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
        borderBottom: `2px solid ${C.paleGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.paleGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronzeGreen}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronzeGreen}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronzeGreen}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronzeGreen}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const JadeTab = ({children, bar = C.cinnabar, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.stoneDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const JadeStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(34, 40, 43, 0.94)', border: `2px solid ${C.paleGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.cinnabar}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const JadeSeal = ({children, tone = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const ConceptScene = () => {
  /* data-final-knowledge="judicial-concept" */
  const plaques = [
    {icon: <BookOpen size={28} color={C.paper} strokeWidth={2.2} />, tone: C.bronzeGreen, title: '近代源流：', body: '乔治·劳森提出政府职能的三重划分；孟德斯鸠第一次全面论述了「司法」问题'},
    {icon: <Users size={28} color={C.paper} strokeWidth={2.2} />, tone: C.paleGold, title: '社会主义国家司法体制：', body: '司法机关由审判机关和检察机关共同构成'},
  ] as const;
  return (
    <Shell code="01" kicker="司法概念" title="司法概念">
      <div
        data-layout="jade-medallion-rows"
        data-visual-anchor="main center"
        data-text-treatments="medallion-engraving,bronze-plaques"
        data-visual-grammar="definition-medallion,origin-plaque,socialist-plaque"
        data-focal-rule="definition-centered-with-modern-origins"
        data-focal-channels="definition-medallion,bronze-plaques"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="judicial-concept" style={{position: 'absolute', left: 238, top: 0, width: 1300}}>
          <Panel tone={C.cinnabar} watermark={<Scale size={170} color={C.cinnabar} strokeWidth={1.6} />} style={{height: 248, padding: '20px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <JadeTab bar={C.cinnabar} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>司法概念</JadeTab>
            <div style={{fontSize: 30, fontWeight: 950, color: C.ink, lineHeight: 1.6, textAlign: 'center', fontFamily: 'var(--inkloom-animation-title)'}}>
              司法：国家司法机关根据<Mark color={C.cinnabar}>法定职权</Mark>和<Mark color={C.cinnabar}>法定程序</Mark>
              <br />
              具体应用法律<Mark color={C.bronzeGreen}>处理案件</Mark>的专门活动
            </div>
          </Panel>
        </Enter>
        {plaques.map((plaque, index) => (
          <Enter key={plaque.title} delay={40 + index * 24} from="left" style={{position: 'absolute', left: 0, top: 288 + index * 130, width: 1776}}>
            <Panel tone={plaque.tone} style={{height: 112, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 14}}>
              <span style={{flexShrink: 0, width: 54, height: 54, borderRadius: 27, backgroundColor: plaque.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.paleGold}`}}>{plaque.icon}</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                <span style={{fontWeight: 950, color: plaque.tone}}>{plaque.title}</span>
                {plaque.body}
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 576, width: 1776}}>
          <JadeStrip style={{height: 116}}>
            <Landmark size={42} color={C.paleGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.cinnabar, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>伏笔</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              英美法系与我国对「司法机关」的范围理解不同 —— 下屏对照
            </span>
          </JadeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ComparisonScene = () => {
  /* data-final-knowledge="common-law-vs-china" */
  return (
    <Shell code="02" kicker="英美法系 VS 我国" title="司法机关的范围">
      <div
        data-layout="east-west-jade-screens"
        data-visual-anchor="main center"
        data-text-treatments="screen-plaques,contrast-chips"
        data-visual-grammar="common-law-screen,china-screen"
        data-focal-rule="common-law-courts-only-versus-china-dual-organs"
        data-focal-channels="screen-headings,contrast-chips"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="common-law-vs-china" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 452}}>
          <Panel tone={C.bronzeGreen} watermark={<Gavel size={180} color={C.bronzeGreen} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <JadeTab bar={C.bronzeGreen} icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />}>英美法系国家</JadeTab>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronzeGreen} title="司法权：">
              特指<Mark color={C.bronzeGreen}>审判权</Mark>
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronzeGreen} title="司法机关：">
              特指<Mark color={C.bronzeGreen}>法院</Mark>
            </IconChip>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.cinnabar} title="检察权：">
              由政府的职能部门负责行使，<Mark color={C.cinnabar}>不专设检察院</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 452}}>
          <Panel tone={C.paleGold} watermark={<Scale size={180} color={C.paleGold} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <JadeTab bar={C.paleGold} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>我国</JadeTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronzeGreen} title="审判机关：">
              人民法院
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.cinnabar} title="检察机关：">
              人民检察院 —— 与审判机关并列为<Mark color={C.cinnabar}>两个司法机关</Mark>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>
              我国司法机关 ＝ 审判机关 ＋ 检察机关，共<Mark color={C.cinnabar}>两个</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" style={{position: 'absolute', left: 0, top: 492, width: 1776}}>
          <JadeStrip style={{height: 128}}>
            <Scale size={42} color={C.paleGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.paleGold, color: C.stoneDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              英美司法即审判，司法机关单指法院
              <br />
              我国司法两个半边天：审判＋检察
            </span>
          </JadeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialSystemOverview = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept" {...SCENES.concept}>
      <ConceptScene />
    </TimelineSequence>
    <TimelineSequence name="02-comparison" {...SCENES.comparison}>
      <ComparisonScene />
    </TimelineSequence>
  </AbsoluteFill>
);
