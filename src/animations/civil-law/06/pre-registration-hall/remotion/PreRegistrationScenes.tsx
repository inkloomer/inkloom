import type {CSSProperties, ReactNode} from 'react';
import {Ban, BellRing, CircleAlert, CircleSlash2, FileSignature, Gavel, Hammer, RefreshCw, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  wine: '#5B2531',
  wineMid: '#7A3442',
  cream: '#F6F1E4',
  creamDim: '#ECE4D2',
  edge: '#C9C0AB',
  teal: '#3E6B6B',
  tealPale: '#DDE9E8',
  ochre: '#97742E',
  ochrePale: '#EFE5C6',
  brick: '#8E3B2E',
  brickPale: '#F0DEDA',
  ink: '#2C2426',
  inkSoft: '#6E6266',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
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

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fromY = 0, toY = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly fromY?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly toY?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px ${interpolate(frame, [delay, delay + span], [fromY, toY], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.teal, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        scale: `${prog(frame, delay, span)} 1`,
        transformOrigin: 'left center',
      }}
    />
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.wine,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 164px, rgba(255, 255, 255, 0.045) 164px 167px), repeating-linear-gradient(0deg, transparent 0 164px, rgba(0, 0, 0, 0.12) 164px 167px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.brick}, ${C.ochre}, ${C.teal})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(221, 233, 232, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.wineMid, borderLeft: `8px solid ${C.teal}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第6讲 · {code}</span>
      </div>
      <header
        style={{
          position: 'absolute',
          left: 290,
          right: 72,
          top: 34,
          height: 88,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 22,
          borderBottom: `2px solid ${C.ochre}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.ochrePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.teal : 'transparent',
              border: `2px solid ${C.teal}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.wineMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(44, 36, 38, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.wineMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.wineMid, borderLeft: `6px solid ${tone}`, color: C.cream, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(151, 116, 46, 0.5)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.brick}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        border: `4px double ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.85 + p * 0.15,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.ochre, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

export const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const NonContractShiftsScene = () => {
  /* data-final-knowledge="exception-premise" data-final-knowledge="three-triggers" data-final-knowledge="demolition-rule" data-final-knowledge="unregistered-disposition" */
  return (
    <Shell code="01" kicker="公示原则的例外" title="非基于合同引起的物权变动">
      <div
        data-layout="three-bypass-lanes-under-publicity-gate"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="non-contract-changes-skip-registration-and-delivery-as-an-exception,inheritance-shifts-property-when-succession-opens,legal-instruments-shift-property-when-they-take-effect,lawful-completion-creates-property-and-demolition-ends-it-without-filings"
        data-focal-rule="three-triggers-move-property-directly-while-the-publicity-gate-stands-bypassed"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="exception-premise" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104}}>
          <Panel tone={C.wineMid} watermark={<CircleSlash2 size={110} color={C.wineMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.wineMid} icon={<CircleSlash2 size={24} color={C.cream} strokeWidth={2.2} />}>前提 · 公示原则的例外</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>非基于合同引起物权变动 → <Soft color={C.brick}>不适用</Soft>通常的<Soft color={C.brick}>登记或交付</Soft>规则</span>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 380}}>
          <Enter delay={30} from="none" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 84}}>
            <div style={{height: '100%', border: '2px dashed rgba(142, 59, 46, 0.55)', backgroundColor: 'rgba(142, 59, 46, 0.06)', display: 'flex', alignItems: 'center', gap: 18, padding: '0 18px'}}>
              <Chip tone={C.brick} toneBg={C.brickPale}><FileSignature size={22} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950}}>通常路径 · 基于合同</span></Chip>
              <span style={{fontSize: 30, fontWeight: 950, color: C.brick}}>→</span>
              <Chip tone={C.brick} toneBg={C.brickPale}><Ban size={22} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.brick, textDecoration: 'line-through'}}>登记 / 交付</span></Chip>
              <span style={{fontSize: 30, fontWeight: 950, color: C.brick}}>→</span>
              <Chip tone={C.brick} toneBg={C.brickPale}><RefreshCw size={22} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950}}>物权变动</span></Chip>
              <span style={{fontSize: 22, fontWeight: 950, color: C.brick}}>——本场景三情形不走此路（下方绕行）</span>
            </div>
          </Enter>
          {(
            [
              {top: 100, tone: C.teal, icon: <Users size={24} color={C.cream} strokeWidth={2.2} />, name: '① 继承', trigger: '继承开始', detail: '物权即发生变动 · 无需登记或交付', delay: 70},
              {top: 196, tone: C.ochre, icon: <ScrollText size={24} color={C.cream} strokeWidth={2.2} />, name: '② 法律文书', trigger: '文书生效', detail: '物权即发生变动 · 无需登记或交付', delay: 130},
              {top: 292, tone: C.wineMid, icon: <Hammer size={24} color={C.cream} strokeWidth={2.2} />, name: '③ 合法建造', trigger: '建造完成', detail: '物权即产生 · 无需登记', delay: 190},
            ] as const
          ).map((lane) => (
            <Enter key={lane.name} delay={lane.delay} from="left" style={{position: 'absolute', left: 0, top: lane.top, width: 1776, height: 88}}>
              <div style={{height: '100%', backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${lane.tone}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px', position: 'relative', overflow: 'hidden'}}>
                <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: lane.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{lane.icon}</span>
                <span style={{fontSize: 24, fontWeight: 950, color: lane.tone, width: 190}}>{lane.name}</span>
                <Chip tone={lane.tone} toneBg={C.creamDim}><span style={{fontSize: 22, fontWeight: 950}}>{lane.trigger}</span></Chip>
                <Path color={lane.tone} delay={lane.delay + 30} span={20} style={{position: 'absolute', left: 560, top: 42, width: 700, height: 4}} />
                <Mover delay={lane.delay + 36} span={24} fromX={0} toX={700} fadeAt={lane.delay + 96} style={{position: 'absolute', left: 566, top: 20, zIndex: 2}}>
                  <Chip tone={lane.tone} toneBg={C.creamDim}><RefreshCw size={22} color={lane.tone} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: lane.tone}}>物权变动</span></Chip>
                </Mover>
                <span style={{position: 'absolute', left: 1290, fontSize: 23, fontWeight: 950, color: lane.tone}}>{lane.detail}</span>
              </div>
            </Enter>
          ))}
        </div>
        <Enter delay={150} from="up" marker="unregistered-disposition" style={{position: 'absolute', left: 0, top: 516, width: 1776, height: 252}}>
          <Panel tone={C.brick} watermark={<Ban size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>取得物权后 · 未登记就向第三人处分（三情形通用后果）</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 23, fontWeight: 950, color: C.teal}}>① 债权合同有效 ✓</span></Chip>
              <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 23, fontWeight: 950, color: C.brick}}>② 受让人不得取得物权 ✗</span></Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>——未登记在自己名下，便无法为受让人办理登记</span>
            </div>
            <div data-final-knowledge="demolition-rule" style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Hammer size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wineMid} title="反向情形 · 房屋拆除：">
                拆除行为完成时，物权即发生<Soft color={C.wineMid}>消灭</Soft>——无需办理<Under color={C.wineMid} delay={230}>注销登记</Under>
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="扩张适用 · 自然事件：">
                地震·海啸·泥石流等引起的房屋<Soft color={C.brick}>毁损·灭失</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：继承看<Soft color={C.teal}>开始</Soft>·文书看<Soft color={C.ochre}>生效</Soft>·建造看<Soft color={C.wineMid}>完成</Soft>——事成即变动，登记靠边站</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DocumentForksScene = () => {
  /* data-final-knowledge="fertile-documents" data-final-knowledge="barren-documents" data-final-knowledge="divorce-verdicts" data-final-knowledge="confirmation-limits" */
  return (
    <Shell code="02" kicker="法律文书 · 能与不能" title="能够与不能引起物权变动的法律文书">
      <div
        data-layout="fertile-barren-document-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="formation-litigation-documents-change-property-upon-effect,auction-and-debt-for-asset-rulings-transfer-on-service,confirmation-and-payment-documents-never-change-property,the-real-owner-cannot-transfer-but-the-nominal-owner-may-good-faith"
        data-focal-rule="formation-and-ruling-documents-move-property-while-confirmation-and-payment-documents-bounce"
        data-focal-channels="contrast,connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="fertile-documents" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 384}}>
          <Panel tone={C.teal} watermark={<ScrollText size={140} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>能变动物权 · 三类文书</PanelTab>
            <div style={{position: 'relative', height: 64}}>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>物权形成之诉（仲裁）文书</span></Chip>
              <Mover delay={70} span={22} fromX={0} toX={430} fadeAt={130} style={{position: 'absolute', left: 320, top: 0, zIndex: 2}}>
                <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>变动物权为内容</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 620, top: 2}}><Seal delay={120} size={18} tone={C.teal}>生效即变动</Seal></span>
              <span style={{position: 'absolute', left: 0, top: 36, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>如：判决共有财产归一方所有</span>
            </div>
            <div style={{position: 'relative', height: 64}}>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>拍卖·变卖成交裁定书</span></Chip>
              <Mover delay={110} span={22} fromX={0} toX={360} fadeAt={170} style={{position: 'absolute', left: 330, top: 0, zIndex: 2}}>
                <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>送达买受人</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 580, top: 2}}><Seal delay={160} size={18} tone={C.teal}>所有权即转移</Seal></span>
              <span style={{position: 'absolute', left: 0, top: 36, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>无需交付或登记</span>
            </div>
            <div style={{position: 'relative', height: 64}}>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>以物抵债裁定书</span></Chip>
              <Mover delay={150} span={22} fromX={0} toX={360} fadeAt={210} style={{position: 'absolute', left: 330, top: 0, zIndex: 2}}>
                <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>送达债权人</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 580, top: 2}}><Seal delay={200} size={18} tone={C.teal}>所有权即转移</Seal></span>
              <span style={{position: 'absolute', left: 0, top: 36, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>民事执行中作出 · 无需交付或登记</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="barren-documents" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 384}}>
          <Panel tone={C.brick} watermark={<Ban size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>不能变动物权 · 三类文书</PanelTab>
            <div style={{position: 'relative', height: 64}}>
              <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>物权确认之诉文书</span></Chip>
              <Mover delay={90} span={20} fromX={0} toX={330} fadeAt={150} style={{position: 'absolute', left: 300, top: 0, zIndex: 2}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>确定归属</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 560, top: -4, bottom: 0, width: 5, backgroundColor: C.brick, opacity: 0.75}} />
              <span style={{position: 'absolute', left: 580, top: 2}}><Seal delay={140} size={18}>不变动 ✗</Seal></span>
              <span style={{position: 'absolute', left: 0, top: 36, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>确权≠变动——物权一直都是他的，未曾变动</span>
            </div>
            <div style={{position: 'relative', height: 64}}>
              <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>物权给付之诉文书</span></Chip>
              <Mover delay={130} span={20} fromX={0} toX={330} fadeAt={190} style={{position: 'absolute', left: 300, top: 0, zIndex: 2}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>责令转让物权</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 560, top: -4, bottom: 0, width: 5, backgroundColor: C.brick, opacity: 0.75}} />
              <span style={{position: 'absolute', left: 580, top: 2}}><Seal delay={180} size={18}>不直接变动 ✗</Seal></span>
              <span style={{position: 'absolute', left: 0, top: 36, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>意义在于督促履行，推动而非直接引起变动</span>
            </div>
            <div data-final-knowledge="confirmation-limits" style={{position: 'relative', height: 96}}>
              <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>以物抵债调解书·确认书</span></Chip>
              <div style={{position: 'absolute', left: 560, top: 0, bottom: 0, width: 5, backgroundColor: C.brick, opacity: 0.75}} />
              <Mover delay={170} span={20} fromX={0} toX={330} fadeAt={230} style={{position: 'absolute', left: 360, top: 0, zIndex: 2}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>抵债协议</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 580, top: 0}}><Seal delay={220} size={18}>不引起变动·不对抗善意第三人 ✗</Seal></span>
              <span style={{position: 'absolute', left: 0, top: 36, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>案例：确认书后乙仍卖房并过户 → 有权处分·丙取得所有权——确认书等同于未登记</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="divorce-verdicts" style={{position: 'absolute', left: 0, top: 400, width: 1776, height: 368}}>
          <Panel tone={C.ochre} watermark={<Gavel size={150} color={C.ochre} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.ochre} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>综合案例 · 夫妻共有房屋 A 登记在甲名下，离婚判决归乙</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="问① 判决生效·仍登记在甲名下：">
              房屋 A 归<Seal delay={160} size={19} tone={C.teal}>乙</Seal>——法律文书生效即变动，无需登记
            </IconChip>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="问② 乙（真正权利人）未登记卖丙：">
                丙<Seal delay={200} size={19}>不能取得</Seal>（乙无法为丙办登记）· 合同<Seal delay={230} size={19} tone={C.teal}>有效</Seal>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wineMid} title="问③ 甲（名义权利人）私自卖丙：">
                <Soft color={C.wineMid}>无权处分</Soft>·丙符合<Soft color={C.teal}>善意取得</Soft>可取得 · 合同<Seal delay={260} size={19} tone={C.teal}>有效</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：真正权利人<Soft color={C.brick}>卖不掉</Soft>（无法登记）· 名义权利人<Soft color={C.wineMid}>可能被善意取得</Soft>· 合同一律<Soft color={C.teal}>有效</Soft>（债权效力不问有权无权处分）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const NoticeRegistrationScene = () => {
  /* data-final-knowledge="notice-meaning" data-final-knowledge="blocked-effect" data-final-knowledge="developer-verdicts" data-final-knowledge="notice-expiry" */
  return (
    <Shell code="03" kicker="买卖预告登记" title="买卖预告登记">
      <div
        data-layout="blocked-disposition-gate-with-expiry-strip"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="notice-registration-records-the-buyer-credit-claim,it-blocks-the-seller-from-disposing-again-to-secure-the-claim,a-blocked-disposition-still-leaves-the-contract-binding,extinguished-claim-or-ninety-idle-days-ends-the-notice"
        data-focal-rule="the-notice-wall-stops-the-seller-disposition-token-before-it-can-reach-a-third-party"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="notice-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 110}}>
          <Panel tone={C.teal} watermark={<BellRing size={120} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.teal} icon={<BellRing size={24} color={C.cream} strokeWidth={2.2} />}>含义与目的</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>买受人对所买受不动产的<Soft color={C.teal}>债权</Soft>进行的<Soft color={C.teal}>登记</Soft>——阻止出卖人<Soft color={C.brick}>再次处分</Soft>·确保买受人<Under color={C.teal} delay={110}>债权实现</Under></span>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 126, width: 1776, height: 354}}>
          <Enter delay={30} from="none" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.wineMid} watermark={<Ban size={140} color={C.wineMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.wineMid} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>效力 · 处分流撞上预告登记之墙</PanelTab>
              <div style={{position: 'relative', height: 150}}>
                <div style={{position: 'absolute', left: 0, top: 22, display: 'flex', flexDirection: 'column', gap: 4}}>
                  <Chip tone={C.wineMid} toneBg={C.creamDim}><FileSignature size={22} color={C.wineMid} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950 }}>出卖人乙 · 再次处分</span></Chip>
                  <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>卖丙并办理过户登记</span>
                </div>
                <Path color={C.wineMid} delay={90} span={22} style={{position: 'absolute', left: 320, top: 52, width: 330, height: 4}} />
                <Mover delay={96} span={26} fromX={0} toX={330} fadeAt={176} style={{position: 'absolute', left: 326, top: 22, zIndex: 2}}>
                  <Chip tone={C.wineMid} toneBg={C.creamDim}><span style={{fontSize: 22, fontWeight: 950 }}>处分行为</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 660, top: -6, bottom: -6, width: 12, backgroundColor: C.teal, opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: 15, fontWeight: 950, color: C.cream, letterSpacing: 2, writingMode: 'vertical-rl'}}>预告登记</span>
                </div>
                <div style={{position: 'absolute', left: 700, top: 14, display: 'flex', flexDirection: 'column', gap: 8}}>
                  <Seal delay={176} size={21}>处分不发生物权变动</Seal>
                  <Seal delay={210} size={21} tone={C.teal}>丙不能取得所有权</Seal>
                </div>
                <div style={{position: 'absolute', right: 0, top: 14, width: 420, display: 'flex', flexDirection: 'column', gap: 10}}>
                  <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.teal}}>✓ 原合同的债权效力不受影响</span></Chip>
                  <Chip tone={C.ochre} toneBg={C.ochrePale}><span style={{fontSize: 21, fontWeight: 950, color: C.ochre}}>丙可追究乙的违约责任</span></Chip>
                </div>
                <div style={{position: 'absolute', left: 0, top: 108, fontSize: 21, fontWeight: 900, color: C.inkSoft}}>买家甲已办理买卖预告登记——乙未经甲同意的处分，撞墙而止</div>
              </div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={110} from="up" marker="notice-expiry" style={{position: 'absolute', left: 0, top: 496, width: 1776, height: 272}}>
          <Panel tone={C.ochre} watermark={<BellRing size={140} color={C.ochre} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.ochre} icon={<BellRing size={24} color={C.cream} strokeWidth={2.2} />}>失效 · 两种情形</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="① 债权消灭：">
                买受人的债权<Soft color={C.brick}>消灭</Soft>→ 买卖预告登记<Seal delay={170} size={19}>失效</Seal>
              </IconChip>
              <IconChip icon={<BellRing size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wineMid} title="② 期限届满：">
                自能够进行不动产登记之日起 <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 26, fontWeight: 950, color: C.brick}}>90 日</span></Chip> 内未申请过户登记 → <Seal delay={210} size={19}>失效</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap'}}>
              <Chip tone={C.teal} toneBg={C.tealPale}><Users size={22} color={C.teal} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.teal}}>案例：甲办预告登记后乙卖丙并过户</span></Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>① 丙<Seal delay={240} size={19}>不能取得</Seal>所有权</span>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>② 乙丙买卖合同<Seal delay={270} size={19} tone={C.teal}>有效</Seal>——追究乙违约责任</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ObjectionRegistrationScene = () => {
  /* data-final-knowledge="objection-meaning" data-final-knowledge="filing-order" data-final-knowledge="verdict-fork" data-final-knowledge="objection-expiry" */
  return (
    <Shell code="04" kicker="异议登记" title="异议登记">
      <div
        data-layout="correction-objection-chain-with-verdict-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="objection-registration-publicises-a-dispute-over-the-record,correction-first-objection-second-is-the-filing-order,upheld-objection-makes-disposition-unauthorised-and-blocks-good-faith,rejected-objection-restores-authority-and-exposes-to-damages"
        data-focal-rule="the-objection-chain-runs-correction-first-then-objection-and-forks-into-win-and-lose-verdicts"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="objection-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104}}>
          <Panel tone={C.wineMid} watermark={<CircleAlert size={110} color={C.wineMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.wineMid} icon={<CircleAlert size={24} color={C.cream} strokeWidth={2.2} />}>含义与目的</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>对登记记载事项<Soft color={C.wineMid}>有异议</Soft>的人，就其异议所为的<Soft color={C.wineMid}>登记</Soft>——宣示权属存在异议·<Under color={C.brick} delay={110}>阻止登记人处分</Under></span>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="filing-order" style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 218}}>
          <Panel tone={C.teal} watermark={<FileSignature size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.teal} icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />}>办理顺序 · 先更正，后异议</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Chip tone={C.wineMid} toneBg={C.creamDim}><Users size={22} color={C.wineMid} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950 }}>异议人</span></Chip>
              <span style={{fontSize: 26, fontWeight: 950, color: C.inkSoft}}>→</span>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 22, fontWeight: 950, color: C.teal}}>① 先申请更正登记</span></Chip>
              <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>条件之一：现权利人书面同意 ｜ 有证据证明登记确有错误 → 予以更正 ✓</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 22, fontWeight: 950, color: C.brick}}>更正不成（未予更正）</span></Chip>
              <span style={{fontSize: 26, fontWeight: 950, color: C.inkSoft}}>→</span>
              <Chip tone={C.brick} toneBg={C.brickPale}><CircleAlert size={22} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.brick}}>② 可申请异议登记</span></Chip>
              <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>此时无需现登记人的同意</span>
              <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 950, color: C.ochre}}>顺口溜：欲办异议登记，先办更正登记；更正登记不成，可办异议登记</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="verdict-fork" style={{position: 'absolute', left: 0, top: 354, width: 1776, height: 258}}>
          <Panel tone={C.brick} watermark={<Gavel size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>效力分叉 · 异议登记成立 / 不成立（3月15日甲卖丙并过户）</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 7, backgroundColor: C.creamDim, border: `2px solid ${C.edge}`, borderLeft: `8px solid ${C.brick}`, padding: '9px 13px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.brick}}>成立时 · 丙赌输了</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>① 登记人处分＝<Soft color={C.brick}>无权处分</Soft></span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>② 受让人<Soft color={C.brick}>不能善意取得</Soft>→ 丙<Seal delay={200} size={18}>不能取得</Seal></span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>③ 丙可追究处分人<Soft color={C.ochre}>违约责任</Soft></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 7, backgroundColor: C.creamDim, border: `2px solid ${C.edge}`, borderLeft: `8px solid ${C.teal}`, padding: '9px 13px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.teal}}>不成立时 · 丙赌赢了</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>① 登记人处分＝<Soft color={C.teal}>有权处分</Soft>→ 丙<Seal delay={230} size={18} tone={C.teal}>继受取得</Seal></span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>② 异议登记不当致损——现登记人可向异议人请求<Soft color={C.wineMid}>损害赔偿</Soft></span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>案例：8月15日判决·文书已生效</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="objection-expiry" style={{position: 'absolute', left: 0, top: 628, width: 1776, height: 140}}>
          <Panel tone={C.ochre} watermark={<CircleAlert size={110} color={C.ochre} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.ochre} icon={<CircleAlert size={24} color={C.cream} strokeWidth={2.2} />}>失效与权利保留</PanelTab>
            <IconChip icon={<CircleAlert size={24} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="失效期：">
              异议登记之日起 <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 24, fontWeight: 950, color: C.brick}}>15 日</span></Chip> 内不起诉请求法院审理异议 → <Seal delay={180} size={19}>失效</Seal>
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="权利保留：">
              异议登记失效，<Soft color={C.teal}>不影响</Soft>异议人提起<Under color={C.teal} delay={210}>确权之诉</Under>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
