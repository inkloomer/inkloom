import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, Hammer, Handshake, Scale, ScrollText, Users, Wrench} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  walnut: '#5E4A38',
  walnutMid: '#75604A',
  walnutPale: '#E8DFD2',
  cream: '#F6F2E8',
  creamDim: '#ECE6D7',
  edge: '#CCC3AF',
  copper: '#9C5F2E',
  copperPale: '#F2DFCE',
  moss: '#5C7245',
  mossPale: '#E2EAD5',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
  ink: '#2B241D',
  inkSoft: '#7A6E5E',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
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

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.brick, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
  const sceneIndex = Math.max(0, Math.min(5, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.walnut,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(232, 223, 210, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.copper}, ${C.moss}, ${C.brick})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(232, 223, 210, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.walnutMid, borderLeft: `8px solid ${C.copper}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.walnutPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.copper}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.walnutPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.copperPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.copper : 'transparent',
              border: `2px solid ${C.copper}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.walnutMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(43, 36, 29, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.walnutMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.walnutMid, borderLeft: `6px solid ${tone}`, color: C.walnutPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(156, 95, 46, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
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

export const Under = ({children, color = C.brick, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const ContractorEmploymentScene = () => {
  /* data-final-knowledge="contractor-definition" data-final-knowledge="employment-contrast" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="承揽 · 对比雇佣" title="承揽与雇佣的分诊台">
      <div
        data-layout="four-row-comparison-counter"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="contractor-completes-work-to-order-delivers-a-result-for-payment,employment-lends-labor-while-contracting-delivers-labor-plus-a-work-result,content-tools-and-pace-sort-contracting-independent-from-employment-dependent,both-are-paid-labor-but-the-contractor-enjoys-stronger-independence"
        data-focal-rule="work-content-tools-and-pace-chips-sort-themselves-onto-the-contracting-side-of-the-counter"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="contractor-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 130}}>
          <Panel tone={C.copper} watermark={<Hammer size={100} color={C.copper} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '8px 18px'}}>
            <PanelTab tone={C.copper} icon={<Hammer size={24} color={C.cream} strokeWidth={2.2} />}>承揽合同 · 概念</PanelTab>
            <span style={{fontSize: 20, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><ScrollText size={20} color={C.indigoLike} strokeWidth={2.4} />承揽人按照定作人的要求完成工作（<Soft color={C.copper}>加工·定作·修理</Soft>等）→ 交付<Soft color={C.copper}>工作成果</Soft> → 定作人支付<Soft color={C.gold}>报酬</Soft></span>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="employment-contrast" style={{position: 'absolute', left: 0, top: 146, width: 1776, height: 606}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={150} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>承揽 × 雇佣 · 分诊四行</PanelTab>
            <div style={{display: 'grid', gridTemplateRows: '44px 1fr 1fr 1fr', flex: 1, border: `2px solid ${C.edge}`}}>
              <div style={{display: 'grid', gridTemplateColumns: '210px 1fr 1fr', backgroundColor: C.walnutMid}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 950, color: C.walnutPale, borderRight: `2px solid ${C.edge}`}}>分辨维度</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 18, fontWeight: 950, color: C.walnutPale, borderRight: `2px solid ${C.edge}`}}><Hammer size={17} color={C.walnutPale} strokeWidth={2.4} />承揽（独立性）</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 18, fontWeight: 950, color: C.walnutPale}}><Users size={17} color={C.walnutPale} strokeWidth={2.4} />雇佣（依附性）</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '210px 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 80, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>工作内容</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>定作人<Soft color={C.brick}>不能随意</Soft>改变</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink}}>雇主<Soft color={C.moss}>可以随意</Soft>改变</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '210px 1fr 1fr', borderTop: `2px solid ${C.edge}`, backgroundColor: C.creamDim, opacity: prog(frame, 150, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>劳动工具</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>干活者<Soft color={C.copper}>自备</Soft></span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink}}>出钱者<Soft color={C.moss}>提供</Soft></span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '210px 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 220, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>履行方式</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}><Soft color={C.copper}>一次性</Soft>·交付成果</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink}}><Soft color={C.moss}>连续性</Soft>·提供劳务</span>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 19, fontWeight: 950, color: C.ink}}>
              <Handshake size={20} color={C.copper} strokeWidth={2.4} />
              <span>两者均<Soft color={C.copper}>有偿</Soft>提供劳务；性质分野：雇佣=提供<Soft color={C.moss}>劳务</Soft>·承揽=劳务＋交付<Soft color={C.copper}>工作成果</Soft> → 承揽人<Under color={C.copper} delay={260}>独立性更强</Under></span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RescissionTrioScene = () => {
  /* data-final-knowledge="contractor-rescission" data-final-knowledge="client-rescission-pair" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="承揽 · 特别解除权" title="三把解除闸刀">
      <div
        data-layout="three-gate-foreman-wall"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="contractor-rescinds-when-assistance-fails-after-reminder,client-rescinds-when-main-work-is-secretly-delegated-otherwise-the-contractor-answers-for-the-third-party,client-may-change-or-rescind-anytime-without-any-cause-but-pays-the-loss,personal-performance-means-own-equipment-skill-and-labor-for-the-main-work"
        data-focal-rule="three-gate-blades-light-in-turn-on-assist-failure-secret-delegation-and-free-change"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="contractor-rescission" style={{position: 'absolute', left: 0, top: 0, width: 580, height: 752}}>
          <Panel tone={C.copper} watermark={<Wrench size={130} color={C.copper} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.copper} icon={<Wrench size={24} color={C.cream} strokeWidth={2.2} />}>闸① 承揽人的解除权</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 120, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 92, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 330, top: 20, width: 9, height: 82, borderRadius: 4, backgroundColor: frame > 200 ? C.copper : C.edge}} />
              <span style={{position: 'absolute', left: 258, top: 0, fontSize: 13, fontWeight: 900, color: frame > 200 ? C.copper : C.inkSoft}}>催告后仍不履行 ✓</span>
              <Mover delay={80} span={54} fromX={16} toX={260} style={{position: 'absolute', top: 54, left: 0}}>
                <Chip tone={C.copper} toneBg={C.copperPale}><Wrench size={16} color={C.copper} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.copper}}>定作人不协助</span></Chip>
              </Mover>
            </div>
            <span style={{fontSize: 19, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>定作人不履行<Soft color={C.copper}>协助义务</Soft>致工作不能完成·经承揽人<Soft color={C.copper}>催告</Soft>后合理期间仍不履行 → 承揽人<Seal delay={240} tone={C.copper} size={17}>可以解除</Seal></span>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.copper} size={19}>协助落空·承揽可割席</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="client-rescission-pair" style={{position: 'absolute', left: 598, top: 0, width: 1178, height: 752}}>
          <div style={{display: 'flex', gap: 22, height: '100%'}}>
            <Panel tone={C.brick} watermark={<Ban size={130} color={C.brick} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
              <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>闸② 定作人法定解除权</PanelTab>
              <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 120, overflow: 'hidden'}}>
                <div style={{position: 'absolute', left: 20, right: 20, top: 92, height: 4, backgroundColor: C.edge}} />
                <div style={{position: 'absolute', left: 240, top: 20, width: 9, height: 82, borderRadius: 4, backgroundColor: frame > 150 ? C.brick : C.edge}} />
                <span style={{position: 'absolute', left: 168, top: 0, fontSize: 13, fontWeight: 900, color: frame > 150 ? C.brick : C.inkSoft}}>擅自转交第三人 ✗</span>
                <Mover delay={120} span={50} fromX={16} toX={170} style={{position: 'absolute', top: 54, left: 0}}>
                  <Chip tone={C.brick} toneBg={C.brickPale}><Users size={16} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.brick}}>主要工作外流</span></Chip>
                </Mover>
              </div>
              <span style={{fontSize: 18, fontWeight: 900, color: C.ink, lineHeight: 1.5}}><Hammer size={17} color={C.brick} strokeWidth={2.4} style={{verticalAlign: '-3px'}} /> 亲自完成义务 = 以<Soft color={C.brick}>自己的设备·技术·劳力</Soft>完成<Soft color={C.brick}>主要工作</Soft></span>
              <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>擅自将主要工作交第三人 → 定作人<Seal delay={230} tone={C.brick} size={16}>可以解除</Seal>；不解除 → 承揽人为第三人行为<Soft color={C.brick}>负责</Soft></span>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={290} tone={C.brick} size={18}>私自转包·任凭定作人处置</Seal></div>
            </Panel>
            <Panel tone={C.moss} watermark={<Gavel size={130} color={C.moss} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
              <PanelTab tone={C.moss} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>闸③ 定作人任意变更解除权</PanelTab>
              <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, 100, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.moss}}>随时变更·解除</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>前提 = <Soft color={C.moss}>无需任何法定事由</Soft>·承揽合同特有特权</span>
              </div>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, 200, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.gold, display: 'flex', alignItems: 'center', gap: 8}}><Coins size={19} color={C.gold} strokeWidth={2.4} />对价 = 赔偿损失</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>造成承揽人<Soft color={C.gold}>损失</Soft>的 → 定作人应当<Soft color={C.gold}>赔偿损失</Soft></span>
              </div>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.moss} size={19}>想撤就撤·赔钱即可</Seal></div>
            </Panel>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
