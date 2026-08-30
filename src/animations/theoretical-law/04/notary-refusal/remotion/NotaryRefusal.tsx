import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileCheck, FileX, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  refusal: '#33302C',
  refusalDeep: '#272421',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#6B6459',
  ink: '#282421',
  inkSoft: '#5B5449',
  returnRed: '#B04834',
  stopGray: '#6E6A64',
  object: '#4E7D74',
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
      backgroundColor: C.refusal,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(176, 72, 52, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 116px, rgba(39, 36, 33, 0.55) 116px 119px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.returnRed}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.refusalDeep, borderLeft: `8px solid ${C.returnRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 81 · {code}</span>
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
        borderBottom: `2px solid ${C.returnRed}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.returnRed, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.object}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.object}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.object}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.object}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const ReturnTab = ({children, bar = C.returnRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.refusalDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const ReturnStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 36, 33, 0.94)', border: `2px solid ${C.returnRed}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.returnRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

export const RefusalScene = () => {
  /* data-final-knowledge="refusal-cases" */
  const cases = [
    '无民事行为能力人或者限制民事行为能力人没有监护人代理申请办理公证的',
    '当事人与申请公证的事项没有利害关系的',
    '申请公证的事项属专业技术鉴定·评估事项的',
    '当事人之间对申请公证的事项有争议的',
    '当事人虚构·隐瞒事实，或者提供虚假证明材料的',
    '当事人提供的证明材料不充分或者拒绝补充证明材料的',
    '申请公证的事项不真实·不合法的',
    '申请公证的事项违背社会公德的',
    '当事人拒绝按照规定支付公证费的',
  ] as const;
  return (
    <Shell code="01" kicker="不予办理公证" title="不予办理公证的情形">
      <div
        data-layout="return-slip-nine"
        data-visual-anchor="main center"
        data-text-treatments="return-slips,number-seals"
        data-visual-grammar="return-slips"
        data-focal-rule="nine-refusal-situations-listed"
        data-focal-channels="nine-slips"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="refusal-cases" style={{position: 'absolute', left: 238, top: 0, width: 1300}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.edge}`, padding: '10px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              不予办理公证 · <span style={{color: C.returnRed}}>九情形</span>
            </span>
          </div>
        </Enter>
        {cases.map((line, index) => (
          <Enter key={line} delay={20 + index * 12} from="left" style={{position: 'absolute', left: 20 + (index % 3) * 592, top: 92 + Math.floor(index / 3) * 150, width: 568}}>
            <Panel tone={C.returnRed} style={{height: 130, padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
              <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: C.returnRed, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.paper, fontSize: 24, fontWeight: 950}}>{index + 1}</span>
              <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>{line}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={160} from="up" style={{position: 'absolute', left: 0, top: 568, width: 1776}}>
          <ReturnStrip style={{height: 92}}>
            <FileX size={40} color={C.returnRed} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.returnRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>记忆锚</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              主体不能 · 无利害 · 鉴评事项 · 有争议 · 虚假材料 · 材料不齐 · 不真实不合法 · 违公德 · 拒付费
            </span>
          </ReturnStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const StopObjectScene = () => {
  /* data-final-knowledge="stop-object" */
  const stops = ['因当事人的原因致使该公证事项在 6 个月内不能办结的', '公证书出具前当事人撤回公证申请的', '因申请公证的自然人死亡·法人或其他组织终止，不能继续办理或继续办理已无意义的', '当事人阻挠·妨碍公证机构及承办公证员按规定程序·期限办理公证的', '其他应当终止的情形'];
  return (
    <Shell code="02" kicker="终止公证 · 公证对象" title="终止公证的情形与公证对象">
      <div
        data-layout="stop-drawer-plus-object"
        data-visual-anchor="main center"
        data-text-treatments="stop-rows,object-seals"
        data-visual-grammar="stop-panel,object-panel"
        data-focal-rule="authenticity-and-legality-as-content-of-object"
        data-focal-channels="stop-causes,object-scope"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="stop-object" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 444}}>
          <Panel tone={C.stopGray} watermark={<Ban size={190} color={C.stopGray} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <ReturnTab bar={C.stopGray} icon={<FileX size={26} color={C.paper} strokeWidth={2.2} />}>应当终止公证（五情形）</ReturnTab>
            {stops.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.stopGray}`, padding: '9px 13px'}}>
                <span style={{color: C.stopGray, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 444}}>
          <Panel tone={C.object} watermark={<Scale size={190} color={C.object} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <ReturnTab bar={C.object} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>公证的对象（点睛）</ReturnTab>
            <IconChipLike text={<>原则上是没有<Mark color={C.object}>争议</Mark>的<Mark color={C.object}>民事法律行为</Mark>、有<Mark color={C.object}>法律意义的事实和文书</Mark></>} />
            <IconChipLike text={<>内容是对象的<Mark color={C.returnRed}>真实性</Mark>和<Mark color={C.returnRed}>合法性</Mark></>} />
            <IconChipLike text={<>证明对象<Mark color={C.returnRed}>没有法律意义</Mark>或不能保证其<Mark color={C.returnRed}>合法性和真实性</Mark>的 → 不得办理</>} />
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 468, width: 1776}}>
          <ReturnStrip style={{height: 92}}>
            <FileCheck size={40} color={C.object} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.object, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>对比</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              不予办理＝申请时就不能办（九情形）；终止公证＝办着办着办不下去（五情形，含 6 个月不能办结）
            </span>
          </ReturnStrip>
        </Enter>
      </div>
    </Shell>
  );
};

const IconChipLike = ({text}: {readonly text: ReactNode}) => (
  <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.object}`, padding: '11px 14px'}}>
    {text}
  </div>
);

export const NotaryRefusal = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-refusal" {...SCENES.refusal}>
      <RefusalScene />
    </TimelineSequence>
    <TimelineSequence name="02-stop-object" {...SCENES.stopObject}>
      <StopObjectScene />
    </TimelineSequence>
  </AbsoluteFill>
);
