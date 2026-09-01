import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Coins, Gavel, Gift, Hourglass, Landmark, Percent, Scale, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  rosewood: '#7A4E4E',
  rosewoodMid: '#8F6262',
  rosewoodPale: '#EBDCDC',
  cream: '#F7F2E9',
  creamDim: '#EDE5D8',
  edge: '#D0C4B4',
  plum: '#6E4A6B',
  plumPale: '#EBDFE9',
  moss: '#5C7245',
  mossPale: '#E2EAD5',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
  ink: '#2B2320',
  inkSoft: '#7E6E64',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
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

export const Path = ({color = C.plum, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
  const sceneIndex = Math.max(0, Math.min(4, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.rosewood,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(235, 220, 220, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.plum}, ${C.moss}, ${C.gold})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(235, 220, 220, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.rosewoodMid, borderLeft: `8px solid ${C.gold}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.rosewoodPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.gold}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.rosewoodPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.gold : 'transparent',
              border: `2px solid ${C.gold}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.rosewoodMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(43, 35, 32, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.rosewoodMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.rosewoodMid, borderLeft: `6px solid ${tone}`, color: C.rosewoodPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(160, 118, 47, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.plum}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.plum, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const GiftRevocationDuoScene = () => {
  /* data-final-knowledge="gift-nature" data-final-knowledge="arbitrary-revocation" data-final-knowledge="refusal-right" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="赠与 · 任意撤销 × 穷困抗辩" title="赠与的两种反悔">
      <div
        data-layout="gift-revocation-refusal-gates"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="gift-contract-is-bilateral-and-consensual-formed-by-agreement-without-delivery,arbitrary-revocation-needs-untransferred-rights-and-voids-the-contract-except-two-public-gifts,refusal-right-needs-deteriorated-economy-and-only-suspends-performance,refusal-keeps-the-contract-valid-while-revocation-kills-it-from-the-start"
        data-focal-rule="two-gift-tokens-pass-different-gates-one-voids-the-contract-while-the-other-only-stops-performance"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="gift-nature" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 120}}>
          <Panel tone={C.gold} watermark={<Gift size={100} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '8px 18px'}}>
            <PanelTab tone={C.gold} icon={<Gift size={24} color={C.cream} strokeWidth={2.2} />}>赠与合同 · 性质</PanelTab>
            <span style={{fontSize: 20, fontWeight: 900, color: C.ink}}><Soft color={C.gold}>双方法律行为</Soft>（赠与人与受赠人达成合意）＋ <Soft color={C.plum}>诺成法律行为</Soft>（一经合意即成立·<Soft color={C.moss}>无需交付</Soft>）</span>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="arbitrary-revocation" style={{position: 'absolute', left: 0, top: 136, width: 866, height: 616}}>
          <Panel tone={C.plum} watermark={<Ban size={130} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.plum} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>任意撤销权</PanelTab>
            <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="两公不得撤销：">① 已<Soft color={C.brick}>公证</Soft>的赠与合同；② <Soft color={C.brick}>救灾·扶贫</Soft>等社会公益·道德义务性质的赠与</IconChip>
            <IconChip icon={<Hourglass size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="时间节点：">赠与物财产权利<Soft color={C.gold}>尚未转移</Soft>（还没给）</IconChip>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 92, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 66, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 300, top: 12, width: 9, height: 64, borderRadius: 4, backgroundColor: frame > 170 ? C.plum : C.edge}} />
              <span style={{position: 'absolute', left: 250, top: 0, fontSize: 14, fontWeight: 900, color: frame > 170 ? C.plum : C.inkSoft}}>单方通知 ✦</span>
              <Mover delay={80} span={50} fromX={20} toX={230} style={{position: 'absolute', top: 38, left: 0}}>
                <Chip tone={C.plum} toneBg={C.plumPale}><Gift size={18} color={C.plum} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.plum}}>撤销通知</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 350, top: 40, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 180, 12)}}>→ 合同<Soft color={C.plum}>自始无效</Soft></span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={240} tone={C.plum} size={21}>后果：不给了·合同无效</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="refusal-right" style={{position: 'absolute', left: 910, top: 136, width: 866, height: 616}}>
          <Panel tone={C.moss} watermark={<Scale size={130} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.moss} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>赠与拒绝权（穷困抗辩权）</PanelTab>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.moss} title="要件：">经济状况<Soft color={C.moss}>显著恶化</Soft>＋ <Soft color={C.moss}>严重影响</Soft>生产经营或家庭生活</IconChip>
            <IconChip icon={<Hourglass size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="时间节点：">同样是财产权利<Soft color={C.gold}>尚未转移</Soft>（还没给）</IconChip>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 92, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 66, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 300, top: 12, width: 9, height: 64, borderRadius: 4, backgroundColor: frame > 230 ? C.moss : C.edge}} />
              <span style={{position: 'absolute', left: 250, top: 0, fontSize: 14, fontWeight: 900, color: frame > 230 ? C.moss : C.inkSoft}}>单方通知 ✦</span>
              <Mover delay={140} span={50} fromX={20} toX={230} style={{position: 'absolute', top: 38, left: 0}}>
                <Chip tone={C.moss} toneBg={C.mossPale}><Scale size={18} color={C.moss} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.moss}}>拒绝履行</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 350, top: 40, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 240, 12)}}>→ 合同<Soft color={C.moss}>依然有效</Soft></span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
              <Seal delay={300} tone={C.moss} size={21}>后果：拒绝给·合同不无效</Seal>
              <span style={{fontSize: 18, fontWeight: 900, color: C.inkSoft}}>辨析：拒绝权只<Under color={C.moss} delay={330}>拒绝履行</Under>，<Soft color={C.plum}>不导致</Soft>赠与合同<Soft color={C.plum}>无效</Soft></span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const StatutoryRevocationScene = () => {
  /* data-final-knowledge="statutory-grounds" data-final-knowledge="statutory-period-effect" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="赠与 · 法定撤销权" title="法定撤销的时钟与追回">
      <div
        data-layout="statutory-clock-take-back-verdicts"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="three-statutory-grounds-cover-serious-harm-unfulfilled-duty-and-broken-obligation,donor-exercises-within-one-year-while-heirs-and-agents-get-six-months-after-death-or-incapacity,transferred-property-is-claimed-back-and-untransferred-property-is-withheld,car-case-both-revocations-block-car-b-and-only-statutory-revocation-recalls-car-a"
        data-focal-rule="grounds-light-the-clock-which-lands-on-one-year-or-six-months-then-flips-to-take-back-or-withhold"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="statutory-grounds" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 210}}>
          <Panel tone={C.plum} watermark={<Gavel size={120} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.plum} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>法定撤销权 · 三事由（单方通知行使）</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, borderTop: `6px solid ${C.plum}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.plum, display: 'flex', alignItems: 'center', gap: 7}}><Gavel size={18} color={C.plum} strokeWidth={2.4} />事由① 严重侵害</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.4}}>受赠人<Soft color={C.plum}>严重侵害</Soft>赠与人或其<Soft color={C.plum}>近亲属</Soft>的合法权益</span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, borderTop: `6px solid ${C.plum}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.plum, display: 'flex', alignItems: 'center', gap: 7}}><Hourglass size={18} color={C.plum} strokeWidth={2.4} />事由② 扶养义务不履行</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.4}}>受赠人对赠与人有<Soft color={C.plum}>扶养义务</Soft>而<Soft color={C.plum}>不履行</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, borderTop: `6px solid ${C.plum}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.plum, display: 'flex', alignItems: 'center', gap: 7}}><Gift size={18} color={C.plum} strokeWidth={2.4} />事由③ 约定义务不履行</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.4}}>附义务赠与中受赠人<Soft color={C.plum}>不履行</Soft>约定的<Soft color={C.plum}>义务</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="statutory-period-effect" style={{position: 'absolute', left: 0, top: 226, width: 1776, height: 250}}>
          <Panel tone={C.gold} watermark={<Hourglass size={120} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.gold} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>行使期间 与 法律后果</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.gold}}>两种撤销权人 · 两种期间</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>赠与人<Soft color={C.gold}>本人</Soft>行使：知道或应当知道撤销事由之日起 <Seal delay={140} tone={C.gold} size={16}>1年内</Seal></span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>赠与人<Soft color={C.plum}>死亡或丧失行为能力</Soft> → <Soft color={C.plum}>继承人·法定代理人</Soft>：<Seal delay={180} tone={C.plum} size={16}>6个月内</Seal>（<Soft color={C.moss}>委托代理</Soft>行使仍为 1年）</span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.plum}}>一经撤销 · 合同自始无效</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>财产权利<Soft color={C.gold}>已转移</Soft> → 请求受赠人<Seal delay={220} tone={C.gold} size={16}>返还（要回来）</Seal></span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>财产权利<Soft color={C.moss}>未转移</Soft> → <Seal delay={260} tone={C.moss} size={16}>不再赠与（不给了）</Seal></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" style={{position: 'absolute', left: 0, top: 492, width: 1776, height: 260}}>
          <Panel tone={C.moss} watermark={<Gavel size={110} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.moss} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>车A车B案 · 三问判定</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 19, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.gold} toneBg={C.goldPale}><span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>甲赠乙车A+车B</span></Chip>
              <Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 18, fontWeight: 950, color: C.plum}}>车A已交付·车B未交付</span></Chip>
              <Chip tone={C.brick} toneBg={C.rosewoodPale}><span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>乙将甲之子丙打成重伤</span></Chip>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>① 能否不给车B？</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}><Seal delay={160} tone={C.gold} size={16}>能</Seal> 任意撤销权或法定撤销权<Soft color={C.gold}>均可</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.plum}`, backgroundColor: C.plumPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.plum}}>② 能否要回车A？</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}><Seal delay={200} tone={C.plum} size={16}>能</Seal> 凭<Soft color={C.plum}>法定撤销权</Soft>·已交付也可返还</span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.rosewoodPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>③ 丙能否行使撤销权？</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}><Seal delay={240} tone={C.brick} size={16}>不能</Seal> 甲<Soft color={C.moss}>未死亡未丧失</Soft>行为能力</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ObligationOrderScene = () => {
  /* data-final-knowledge="obligation-condition-order" data-final-knowledge="support-agreement-case" */
  const frame = useCurrentFrame();
  return (
    <Shell code="03" kicker="赠与 · 履行顺序" title="三种给法的先后">
      <div
        data-layout="three-lane-step-sequencer"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="obligated-gift-performs-the-gift-first-then-the-obligation-falls-due,conditioned-gift-waits-for-the-condition-before-the-gift-becomes-due,support-agreement-cares-for-life-and-pays-with-the-estate-after-death,mansion-case-transfers-before-death-so-it-is-an-obligated-gift-revocable-within-one-year"
        data-focal-rule="each-lane-fires-its-two-steps-in-legal-order-and-the-mansion-case-reroutes-into-the-obligated-lane"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="obligation-condition-order" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 420}}>
          <Panel tone={C.gold} watermark={<ScrollText size={130} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '10px 18px'}}>
            <PanelTab tone={C.gold} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>附义务 · 附条件 · 遗赠扶养 · 顺序之辨</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flex: 1}}>
              <div style={{flex: 1, border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.gold}}>附义务的赠与</span>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{opacity: prog(frame, 80, 14)}}><Chip tone={C.gold} toneBg={C.cream}><span style={{fontSize: 16, fontWeight: 950, color: C.gold}}>① 先完成赠与</span></Chip></span>
                  <ArrowRight size={20} color={C.gold} strokeWidth={2.6} />
                  <span style={{opacity: prog(frame, 140, 14)}}><Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 16, fontWeight: 950, color: C.plum}}>② 受赠人后履行义务</span></Chip></span>
                </div>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft}}>送宝马＋今年把法考过了 → 附<Soft color={C.gold}>义务</Soft></span>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.moss}}>附条件的赠与</span>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{opacity: prog(frame, 200, 14)}}><Chip tone={C.moss} toneBg={C.cream}><span style={{fontSize: 16, fontWeight: 950, color: C.moss}}>① 条件先成就</span></Chip></span>
                  <ArrowRight size={20} color={C.moss} strokeWidth={2.6} />
                  <span style={{opacity: prog(frame, 260, 14)}}><Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 16, fontWeight: 950, color: C.plum}}>② 后履行赠与</span></Chip></span>
                </div>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft}}>过了法考就送宝马 → 附<Soft color={C.moss}>条件</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="support-agreement-case" style={{position: 'absolute', left: 0, top: 436, width: 1776, height: 316}}>
          <Panel tone={C.plum} watermark={<Hourglass size={120} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '10px 18px'}}>
            <PanelTab tone={C.plum} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>遗赠扶养协议 与 别墅案</PanelTab>
            <IconChip icon={<Gift size={22} color={C.cream} strokeWidth={2.2} />} tone={C.plum} title="遗赠扶养协议：">受赠人对赠与人<Soft color={C.plum}>生养死葬</Soft> → 赠与人<Soft color={C.plum}>死亡后</Soft>以财产相赠</IconChip>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>案情：老汉生前将别墅过户给保姆·保姆随即赶人</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>老汉<Soft color={C.gold}>未死</Soft>就过户 → 构成<Seal delay={160} tone={C.gold} size={16}>附义务赠与</Seal>·<Soft color={C.brick}>不构成</Soft>遗赠扶养协议</span>
              </div>
              <div style={{border: `2px solid ${C.plum}`, backgroundColor: C.plumPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.plum }}>老汉怎么办？</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>行使<Seal delay={220} tone={C.plum} size={16}>法定撤销权</Seal>·撤销并<Soft color={C.plum}>要回别墅</Soft>·知道事由起<Soft color={C.gold}>1年内</Soft>行使</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LoanFormationScene = () => {
  /* data-final-knowledge="loan-formation" data-final-knowledge="loan-invalidity" */
  const frame = useCurrentFrame();
  return (
    <Shell code="04" kicker="民间借贷 · 成立与无效" title="借贷的成立与红灯">
      <div
        data-layout="loan-desk-with-three-invalidity-gates"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="inter-individual-loans-are-real-contracts-formed-when-the-borrower-gains-control,loans-with-legal-persons-are-consensual-unless-otherwise-agreed,three-invalidity-gateways-cover-relending-crowdfunding-and-unlicensed-profit-lending,invalid-loans-strip-interest-and-term-and-refund-principal-as-unjust-enrichment"
        data-focal-rule="loan-coins-arrive-at-the-account-to-form-the-contract-while-bad-loans-bounce-off-three-invalidity-gates"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="loan-formation" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 226}}>
          <Panel tone={C.gold} watermark={<Coins size={120} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.gold} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>民间借贷 · 概念分类与成立</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 19, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.gold} toneBg={C.goldPale}><span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>从非金融机构借款</span></Chip>
              <span>双方<Soft color={C.gold}>均为自然人</Soft> → 自然人之间借贷；一方或双方<Soft color={C.plum}>不是自然人</Soft> → 非自然人借贷</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.gold}}>自然人之间 = 实践合同</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>以<Soft color={C.gold}>款项交付</Soft>为成立条件·交付=借款人取得<Soft color={C.gold}>支配</Soft>——张三转出·次日<Seal delay={140} tone={C.gold} size={15}>到达账户时成立</Seal></span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.plum}}>非自然人参与 = 诺成合同</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>除另有约定外·一旦<Soft color={C.plum}>达成合意</Soft>即<Soft color={C.plum}>成立</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="loan-invalidity" style={{position: 'absolute', left: 0, top: 242, width: 1776, height: 510}}>
          <Panel tone={C.brick} watermark={<Ban size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>合同无效三宗罪（借贷涉犯罪不影响效力·但以下无效）</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 8}}><Landmark size={20} color={C.brick} strokeWidth={2.4} />① 违规转贷</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>从<Soft color={C.brick}>金融机构</Soft>或其他<Soft color={C.brick}>营利法人</Soft>借款后<Soft color={C.brick}>转贷</Soft>；向职工<Soft color={C.brick}>集资</Soft>或向公众<Soft color={C.brick}>非法吸收存款</Soft>后转贷</span>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>借来又借去·借去无效</span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.brick} strokeWidth={2.4} />② 职业放贷</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>未依法取得<Soft color={C.brick}>放贷资格</Soft>·以<Soft color={C.brick}>营利为目的</Soft>向社会<Soft color={C.brick}>不特定对象</Soft>提供借款</span>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>无照营生·放贷无效</span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 8}}><Gavel size={20} color={C.brick} strokeWidth={2.4} />③ 明知违法</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>事先<Soft color={C.brick}>知道或应当知道</Soft>借款用于<Soft color={C.brick}>违法犯罪活动</Soft>·仍然提供借款</span>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>知情出借·同归无效</span>
              </div>
            </div>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 14, fontSize: 19, fontWeight: 900, color: C.ink}}>
              <span style={{fontWeight: 950, color: C.brick}}>无效后果：</span>
              <span>约定<Soft color={C.brick}>利息</Soft>·<Soft color={C.brick}>借期</Soft>均<Soft color={C.brick}>无效</Soft>；借款已交付的 → 按<Soft color={C.moss}>不当得利</Soft>原则<Soft color={C.moss}>返还</Soft></span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LoanInterestScene = () => {
  /* data-final-knowledge="interest-presumption" data-final-knowledge="interest-caps" */
  const frame = useCurrentFrame();
  return (
    <Shell code="05" kicker="民间借贷 · 利息规则" title="利息的推定与红线">
      <div
        data-layout="interest-board-with-capped-gauge"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="no-agreement-means-no-interest-by-default-rule,unclear-terms-are-interest-free-between-individuals-but-interest-bearing-with-legal-persons,interest-must-not-be-deducted-upfront-and-repayment-follows-the-actual-sum,rates-beyond-four-times-the-lpr-are-usury-and-void-for-the-excess"
        data-focal-rule="the-rate-gauge-marks-the-four-times-lpr-redline-while-upfront-deduction-shrinks-the-principal-chip"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="interest-presumption" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 230}}>
          <Panel tone={C.gold} watermark={<Percent size={120} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.gold} icon={<Percent size={24} color={C.cream} strokeWidth={2.2} />}>有息无息 · 推定规则</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.moss}}>没有约定利息</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 一律推定为<Seal delay={120} tone={C.moss} size={17}>无息</Seal></span>
              </div>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.gold}}>约定不明</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}><Soft color={C.gold}>自然人之间</Soft> → 推定<Soft color={C.moss}>无息</Soft>；<Soft color={C.plum}>非自然人参与</Soft>且出借人主张 → 推定<Soft color={C.gold}>有息</Soft>（法院结合<Soft color={C.inkSoft}>交易习惯·市场报价利率</Soft>确定）</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="interest-caps" style={{position: 'absolute', left: 0, top: 246, width: 1776, height: 506}}>
          <Panel tone={C.brick} watermark={<Scale size={130} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>砍头息 与 高利贷红线</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 104, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 74, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 300, top: 16, width: 24, height: 62, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: prog(frame, 120, 14)}}>
                <Ban size={26} color={C.brick} strokeWidth={2.6} />
              </div>
              <span style={{position: 'absolute', left: 262, top: 0, fontSize: 14, fontWeight: 900, color: C.brick}}>预扣利息 ✗ 砍头息</span>
              <Mover delay={60} span={46} fromX={20} toX={230} style={{position: 'absolute', top: 42, left: 0}}>
                <Chip tone={C.gold} toneBg={C.goldPale}><Coins size={18} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.gold}}>约定借10万·息1万</span></Chip>
              </Mover>
              <Mover delay={150} span={46} fromX={360} toX={470} style={{position: 'absolute', top: 42, left: 0}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><Coins size={18} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.brick}}>实际只付9万</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 660, top: 44, fontSize: 17, fontWeight: 950, color: C.inkSoft, opacity: prog(frame, 220, 12)}}>→ 按<Soft color={C.gold}>实际借款数额</Soft>还本计息：期满还<Seal delay={260} tone={C.brick} size={17}>本息共9.9万</Seal></span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, flex: 1}}>
              <div style={{flex: 1, position: 'relative', height: 70, border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, overflow: 'hidden'}}>
                <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: '62%', backgroundColor: C.moss, opacity: 0.3}} />
                <div style={{position: 'absolute', left: '62%', top: 0, bottom: 0, right: 0, backgroundColor: C.brick, opacity: 0.3}} />
                <div style={{position: 'absolute', left: '62%', top: 0, bottom: 0, width: 4, backgroundColor: C.brick}} />
                <span style={{position: 'absolute', left: '63%', top: 6, fontSize: 15, fontWeight: 950, color: C.brick}}>1年期 LPR × 4 红线</span>
                <span style={{position: 'absolute', left: 14, top: 24, fontSize: 17, fontWeight: 950, color: C.moss}}>合法区间</span>
                <span style={{position: 'absolute', right: 14, top: 24, fontSize: 17, fontWeight: 950, color: C.brick}}>超过部分无效</span>
              </div>
              <span style={{fontSize: 19, fontWeight: 900, color: C.ink, width: 560, lineHeight: 1.5}}>约定利率超<Soft color={C.gold}>1年期贷款市场报价利率（LPR）的4倍</Soft> → 超过部分认定<Soft color={C.brick}>高利贷</Soft>·该部分<Soft color={C.brick}>归于无效</Soft></span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
