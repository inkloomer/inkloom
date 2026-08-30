import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, FileCheck, Landmark, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  organs: '#2E3330',
  organsDeep: '#232825',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E7168',
  ink: '#22302A',
  inkSoft: '#516260',
  plate: '#C0983E',
  naming: '#4E7D74',
  restrict: '#B04834',
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
      backgroundColor: C.organs,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 118px, rgba(35, 40, 37, 0.55) 118px 121px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.plate}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.organsDeep, borderLeft: `8px solid ${C.restrict}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 80 · {code}</span>
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
        borderBottom: `2px solid ${C.plate}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.plate, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.naming}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.naming}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.naming}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.naming}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const OrganTab = ({children, bar = C.restrict, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.organsDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const OrganStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(35, 40, 37, 0.94)', border: `2px solid ${C.plate}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.restrict}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const PlateSealN = ({children, tone = C.plate, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const ConceptSetupScene = () => {
  /* data-final-knowledge="concept-setup" */
  const conditions = ['有自己的名称', '有固定的场所', '有 2 名以上公证员', '有必需的资金'];
  return (
    <Shell code="01" kicker="概念 · 设立原则 · 条件" title="公证机构的概念与设立">
      <div
        data-layout="concept-plus-principle"
        data-visual-anchor="main center"
        data-text-treatments="concept-plaque,principle-rows"
        data-visual-grammar="concept-plaque,principle-panel,conditions-panel"
        data-focal-rule="not-established-by-administrative-tiers-county-minimum"
        data-focal-channels="concept-plaque,no-administrative-tiers"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-setup" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.plate} watermark={<Landmark size={180} color={C.plate} strokeWidth={1.6} />} style={{height: 172, padding: '16px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <OrganTab bar={C.plate} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>公证机构的概念</OrganTab>
            <div style={{fontSize: 26, fontWeight: 950, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>
              依法设立 · <Mark color={C.plate}>不以营利为目的</Mark> · 依法<Mark color={C.naming}>独立行使公证职能</Mark> · 承担民事责任的<Mark color={C.restrict}>证明机构</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 196, width: 866, height: 400}}>
          <Panel tone={C.naming} watermark={<Building2 size={190} color={C.naming} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <OrganTab bar={C.naming} icon={<Building2 size={26} color={C.paper} strokeWidth={2.2} />}>设立原则</OrganTab>
            <div style={{fontSize: 23, fontWeight: 920, color: C.ink, lineHeight: 1.6, backgroundColor: `${C.naming}14`, borderLeft: `6px solid ${C.naming}`, padding: '10px 14px'}}>
              公证机构<Mark color={C.naming}>不按行政区划层层设立</Mark>；按照统筹规划·合理布局的原则，可以在<Mark color={C.naming}>县·不设区的市·设区的市·直辖市或市辖区</Mark>设立
              <br />
              在设区的市·直辖市可以设立<Mark color={C.plate}>一个或者若干个</Mark>公证机构
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>点睛：最低设在<Mark color={C.plate}>县一级</Mark>区划</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" style={{position: 'absolute', left: 910, top: 196, width: 866, height: 400}}>
          <Panel tone={C.plate} watermark={<Users size={190} color={C.plate} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <OrganTab bar={C.plate} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>设立条件（四条）</OrganTab>
            {conditions.map((line, index) => (
              <div key={line} style={{fontSize: 23, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.plate}`, padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10}}>
                <Users size={26} color={C.plate} strokeWidth={2.2} />
                {index + 1}. {line}
              </div>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const NamingScene = () => {
  /* data-final-knowledge="naming-rules" */
  const plates = [
    {scope: '县·不设区的市', formula: '省（自治区·直辖市）名称 ＋ 本县·市名称 ＋ 公证处', note: '不可以有字号', tone: C.restrict},
    {scope: '设区的市或其市辖区', formula: '省（自治区）名称 ＋ 本市名称 ＋ 字号 ＋ 公证处', note: '有字号', tone: C.naming},
    {scope: '直辖市或其市辖区', formula: '直辖市名称 ＋ 字号 ＋ 公证处', note: '有字号', tone: C.naming},
  ] as const;
  return (
    <Shell code="02" kicker="冠名 · 字号" title="冠名方式与字号限制">
      <div
        data-layout="three-naming-plates"
        data-visual-anchor="main center"
        data-text-treatments="naming-plates,restrict-seals"
        data-visual-grammar="naming-plates,text-rules"
        data-focal-rule="county-named-firms-have-no-trade-name"
        data-focal-channels="three-plates,no-trade-name-in-county"
        style={{position: 'absolute', inset: 0}}
      >
        {plates.map((plate, index) => (
          <Enter key={plate.scope} delay={6 + index * 18} from="up" marker={index === 0 ? 'naming-rules' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={plate.tone} style={{height: 264, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <OrganTab bar={plate.tone} icon={<FileCheck size={26} color={C.paper} strokeWidth={2.2} />}>{plate.scope}</OrganTab>
              <div style={{fontSize: 23, fontWeight: 920, color: C.ink, lineHeight: 1.6, backgroundColor: C.panelDim, borderLeft: `6px solid ${plate.tone}`, padding: '10px 13px'}}>{plate.formula}</div>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>
                {plate.note === '不可以有字号' ? <Mark color={C.restrict}>不可以有字号</Mark> : <Mark color={C.naming}>有字号</Mark>}
              </div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={90} from="up" style={{position: 'absolute', left: 0, top: 296, width: 1776}}>
          <Panel tone={C.naming} watermark={<Scale size={180} color={C.naming} strokeWidth={1.6} />} style={{height: 180, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <OrganTab bar={C.naming} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>名称文字与字号限制</OrganTab>
            <IconChip icon={<FileCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.naming} title="文字：">
              应当使用<Mark color={C.naming}>全国通用的文字</Mark>；民族自治地方的公证机构名称可以同时使用当地通用的民族文字
            </IconChip>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.restrict} title="字号：">
              应当由<Mark color={C.plate}>两个以上文字组成</Mark>，并不得与所在省·自治区·直辖市内设立的其他公证机构名称中的字号<Mark color={C.restrict}>相同或近似</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 500, width: 1776}}>
          <OrganStrip style={{height: 84}}>
            <Ban size={40} color={C.restrict} strokeWidth={2.2} />
            <span style={{padding: '3px 12px', backgroundColor: C.plate, color: C.organsDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.paper}}>
              不按行政区划层层设立，最低设在<PlateSealN tone={C.plate} delay={170}>县一级</PlateSealN>；县·不设区的市冠名<Mark color={C.paper}>无字号</Mark>
            </span>
          </OrganStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NotaryOrgans = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-setup" {...SCENES.conceptSetup}>
      <ConceptSetupScene />
    </TimelineSequence>
    <TimelineSequence name="02-naming" {...SCENES.naming}>
      <NamingScene />
    </TimelineSequence>
  </AbsoluteFill>
);
