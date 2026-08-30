import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileX, Lock, Scale, Shield, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  rights: '#2F3237',
  rightsDeep: '#242729',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5F6A6E',
  ink: '#232830',
  inkSoft: '#525C62',
  rightsGold: '#C0983E',
  forbid: '#B04834',
  protect: '#4E7D74',
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
      backgroundColor: C.rights,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 178px, rgba(36, 39, 41, 0.55) 178px 181px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.rightsGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.rightsDeep, borderLeft: `8px solid ${C.forbid}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 83 · {code}</span>
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
        borderBottom: `2px solid ${C.rightsGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.rightsGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.protect}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.protect}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.protect}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.protect}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const ScaleTab = ({children, bar = C.forbid, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.rightsDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const ScaleStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 39, 41, 0.94)', border: `2px solid ${C.rightsGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.forbid}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

export const RightsScene = () => {
  /* data-final-knowledge="notary-rights" */
  const rights = [
    '依法执业，受法律保护，任何单位和个人不得非法干预',
    '有权获得劳动报酬，享受保险和福利待遇',
    '有权提出辞职、申诉或者控告',
    '非因法定事由和非经法定程序，不被免职或者处罚',
  ] as const;
  return (
    <Shell code="01" kicker="公证员的权利" title="公证员的权利">
      <div
        data-layout="rights-scale-rows"
        data-visual-anchor="main center"
        data-text-treatments="rights-rows,scale-icon"
        data-visual-grammar="rights-rows"
        data-focal-rule="legal-protection-and-no-removal-without-statutory-grounds"
        data-focal-channels="rights-rows"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="notary-rights" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.protect} watermark={<Scale size={200} color={C.protect} strokeWidth={1.6} />} style={{height: 560, padding: '26px 32px', display: 'flex', flexDirection: 'column', gap: 18}}>
            <ScaleTab bar={C.protect} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>公证员的权利（四项）</ScaleTab>
            {rights.map((line, index) => (
              <div key={line} style={{fontSize: 25, fontWeight: 900, color: C.ink, lineHeight: 1.6, backgroundColor: C.panelDim, borderLeft: `7px solid ${C.protect}`, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
                <span style={{flexShrink: 0, width: 56, height: 56, borderRadius: 28, backgroundColor: C.protect, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  {index === 0 ? <Shield size={30} color={C.paper} strokeWidth={2.2} /> : index === 1 ? <Scale size={30} color={C.paper} strokeWidth={2.2} /> : index === 2 ? <UserCheck size={30} color={C.paper} strokeWidth={2.2} /> : <Shield size={30} color={C.paper} strokeWidth={2.2} />}
                </span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DutiesScene = () => {
  /* data-final-knowledge="notary-duties" */
  const forbids = [
    '同时在两个以上公证机构执业',
    '从事有报酬的其他职业',
    '为本人及近亲属办理公证或办理与本人及近亲属有利害关系的公证',
    '私自出具公证书',
    '为不真实·不合法的事项出具公证书',
    '侵占·挪用公证费或侵占·盗窃公证专用物品',
    '毁损·篡改公证文书或公证档案',
    '泄露执业中知悉的国家秘密·商业秘密或个人隐私',
    '法律法规和国务院司法行政部门规定禁止的其他行为',
  ] as const;
  return (
    <Shell code="02" kicker="禁止性义务" title="公证员的禁止性义务">
      <div
        data-layout="nine-forbid-grid"
        data-visual-anchor="main center"
        data-text-treatments="forbid-grid,number-seals"
        data-visual-grammar="forbid-grid"
        data-focal-rule="nine-forbidden-duties-of-notaries"
        data-focal-channels="nine-forbids"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="notary-duties" style={{position: 'absolute', left: 238, top: 0, width: 1300}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.edge}`, padding: '10px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              禁止性义务 · <span style={{color: C.forbid}}>九条</span>
            </span>
          </div>
        </Enter>
        {forbids.map((line, index) => (
          <Enter key={line} delay={20 + index * 12} from="up" style={{position: 'absolute', left: 20 + (index % 3) * 592, top: 84 + Math.floor(index / 3) * 150, width: 568}}>
            <Panel tone={C.forbid} style={{height: 132, padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
              <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: C.forbid, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {index === 7 ? <Lock size={26} color={C.paper} strokeWidth={2.2} /> : index === 6 || index === 4 ? <FileX size={26} color={C.paper} strokeWidth={2.2} /> : <Ban size={26} color={C.paper} strokeWidth={2.2} />}
              </span>
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                <span style={{color: C.forbid, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={160} from="up" style={{position: 'absolute', left: 0, top: 566, width: 1776}}>
          <ScaleStrip style={{height: 82}}>
            <Ban size={38} color={C.forbid} strokeWidth={2.2} />
            <span style={{padding: '3px 12px', backgroundColor: C.forbid, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 23, fontWeight: 950, color: C.paper}}>
              两机构执业 · 有报酬兼职 · 办本人近亲属公证 · 私自出证 · 不真实不合法出证 · 侵占挪用泄密
            </span>
          </ScaleStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NotaryRightsDuties = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-rights" {...SCENES.rights}>
      <RightsScene />
    </TimelineSequence>
    <TimelineSequence name="02-duties" {...SCENES.duties}>
      <DutiesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
