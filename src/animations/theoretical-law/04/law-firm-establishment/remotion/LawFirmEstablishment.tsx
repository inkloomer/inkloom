import type {CSSProperties, ReactNode} from 'react';
import {ArrowLeftRight, Ban, Building2, FileCheck, Network, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  registry: '#313A34',
  registryDeep: '#252C28',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E7064',
  ink: '#222E27',
  inkSoft: '#51625A',
  plate: '#C0983E',
  changeTeal: '#4E7D74',
  terminateGray: '#6E6A64',
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
      backgroundColor: C.registry,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 110px, rgba(37, 44, 40, 0.55) 110px 113px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.plate}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.registryDeep, borderLeft: `8px solid ${C.changeTeal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 72 · {code}</span>
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
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.changeTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.changeTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.changeTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.changeTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const PlateTab = ({children, bar = C.changeTeal, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.registryDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const PlateStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(37, 44, 40, 0.94)', border: `2px solid ${C.plate}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.changeTeal}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const PlateSeal = ({children, tone = C.plate, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const EstablishmentScene = () => {
  /* data-final-knowledge="establishment-rules" */
  const conditions = ['有自己的名称、住所和章程', '有符合《律师法》规定的律师', '设立人应当具有一定的执业经历，且 3 年内未受过停止执业处罚的律师', '有符合国务院司法行政部门规定数额的资产'];
  return (
    <Shell code="01" kicker="设立 · 合伙 · 分所" title="律师事务所的设立">
      <div
        data-layout="plate-rows-branch"
        data-visual-anchor="main center"
        data-text-treatments="plate-rows,branch-seals"
        data-visual-grammar="condition-plates,partnership-row,branch-row"
        data-focal-rule="four-conditions-and-branch-office-thresholds"
        data-focal-channels="four-conditions,branch-rules"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="establishment-rules" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 620}}>
          <Panel tone={C.plate} watermark={<Building2 size={190} color={C.plate} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <PlateTab bar={C.plate} icon={<Building2 size={26} color={C.paper} strokeWidth={2.2} />}>设立条件（四条）</PlateTab>
            {conditions.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.plate}`, padding: '9px 13px'}}>
                <span style={{color: C.plate, fontWeight: 950, marginRight: 8}}>{index + 1}.</span>
                {line}
              </div>
            ))}
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              合伙所可采用<Mark color={C.changeTeal}>普通合伙</Mark>或者<Mark color={C.changeTeal}>特殊的普通合伙</Mark>形式设立；合伙人按合伙形式对律所债务依法承担责任
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 620}}>
          <Panel tone={C.changeTeal} watermark={<Network size={190} color={C.changeTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <PlateTab bar={C.changeTeal} icon={<Network size={26} color={C.paper} strokeWidth={2.2} />}>设立分所</PlateTab>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.plate} title="门槛：">
              成立 <PlateSeal tone={C.plate} delay={130}>3 年以上</PlateSeal> 并具有 <PlateSeal tone={C.changeTeal} delay={142}>20 名以上</PlateSeal> 执业律师的合伙律师事务所，可以设立分所
            </IconChip>
            <IconChip icon={<FileCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.changeTeal} title="审核：">
              须经<Mark color={C.changeTeal}>拟设立分所所在地</Mark>的省·自治区·直辖市人民政府司法行政部门审核
            </IconChip>
            <IconChip icon={<Building2 size={28} color={C.paper} strokeWidth={2.2} />} tone={C.plate} title="责任：">
              合伙律师事务所对其<Mark color={C.plate}>分所的债务承担责任</Mark>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ChangeTerminateScene = () => {
  /* data-final-knowledge="change-terminate" */
  const terminations = ['不能保持法定设立条件，经限期整改仍不符合条件的', '律师事务所执业证书被依法吊销的', '自行决定解散的', '法律·行政法规规定应当终止的其他情形'];
  return (
    <Shell code="02" kicker="变更 · 终止" title="变更与终止">
      <div
        data-layout="twin-window-plus-gray"
        data-visual-anchor="main center"
        data-text-treatments="window-chips,gray-seals"
        data-visual-grammar="approve-window,file-window,terminate-panel"
        data-focal-rule="approval-for-name-versus-filing-within-fifteen-days"
        data-focal-channels="approve-vs-file,termination-causes"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="change-terminate" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 268}}>
          <Panel tone={C.changeTeal} watermark={<ArrowLeftRight size={160} color={C.changeTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <PlateTab bar={C.changeTeal} icon={<ArrowLeftRight size={26} color={C.paper} strokeWidth={2.2} />}>变更 · 批准</PlateTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              变更<Mark color={C.changeTeal}>名称·负责人·章程·合伙协议</Mark>的，应当报原审核部门<Mark color={C.changeTeal}>批准</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={26} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 268}}>
          <Panel tone={C.plate} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <PlateTab bar={C.plate} icon={<FileCheck size={26} color={C.paper} strokeWidth={2.2} />}>变更 · 备案</PlateTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              变更<Mark color={C.plate}>住所·合伙人</Mark>的，应当自变更之日起 <PlateSeal tone={C.plate} delay={130}>15 日内</PlateSeal> 报原审核部门<Mark color={C.plate}>备案</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" style={{position: 'absolute', left: 0, top: 296, width: 1776}}>
          <Panel tone={C.terminateGray} watermark={<Ban size={180} color={C.terminateGray} strokeWidth={1.6} />} style={{height: 288, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <PlateTab bar={C.terminateGray} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>终止（四情形）</PlateTab>
            {terminations.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.45, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.terminateGray}`, padding: '7px 11px'}}>
                <span style={{color: C.terminateGray, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>终止的，由颁发执业证书的部门<Mark color={C.terminateGray}>注销执业证书</Mark></div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 608, width: 1776}}>
          <PlateStrip style={{height: 92}}>
            <ArrowLeftRight size={42} color={C.plate} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.changeTeal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              分所门槛「成立 3 年＋20 名律师」；变更记忆「名称负责人章程→批准 · 住所合伙人→15 日内备案」
            </span>
          </PlateStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawFirmEstablishment = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-establishment" {...SCENES.establishment}>
      <EstablishmentScene />
    </TimelineSequence>
    <TimelineSequence name="02-change-terminate" {...SCENES.changeTerminate}>
      <ChangeTerminateScene />
    </TimelineSequence>
  </AbsoluteFill>
);
