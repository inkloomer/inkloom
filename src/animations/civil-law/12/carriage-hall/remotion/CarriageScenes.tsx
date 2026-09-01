import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, Key, Package, Scale, ScrollText, Users, Wrench} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  indigo: '#44557A',
  indigoMid: '#5A6C94',
  indigoPale: '#DFE5F0',
  cream: '#F5F3EA',
  creamDim: '#E9E7DA',
  edge: '#C8C6B4',
  teal: '#3E7268',
  tealPale: '#DBE9E4',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  ink: '#232830',
  inkSoft: '#6E7580',
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
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.indigo,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(223, 229, 240, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.teal}, ${C.gold}, ${C.brick})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(223, 229, 240, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.indigoMid, borderLeft: `8px solid ${C.teal}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.indigoPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.teal}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.indigoPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.tealPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
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

export const Panel = ({children, marker, tone = C.indigoMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 40, 48, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.indigoMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.indigoMid, borderLeft: `6px solid ${tone}`, color: C.indigoPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(62, 114, 104, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
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

export const PassengerLiabilityScene = () => {
  /* data-final-knowledge="traveler-definition" data-final-knowledge="injury-no-fault-rule" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="客运 · 人身损害" title="旅客的身份与免责闸">
      <div
        data-layout="traveler-queue-into-exemption-gate"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="four-traveler-kinds-count-ticket-free-discounted-and-permitted-stowaways,personal-injury-uses-no-fault-liability-with-only-two-exemptions,own-health-or-deliberate-gross-fault-bounces-the-claim-back,taxi-case-third-party-rock-fails-the-exemption-while-lean-out-gross-fault-passes-it"
        data-focal-rule="traveler-badges-queue-the-no-fault-gate-whose-two-exemption-blades-bounce-claims-back"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="traveler-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 170}}>
          <Panel tone={C.teal} watermark={<Users size={110} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.teal} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>旅客的界定 · 追责的逻辑前提</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 18, fontWeight: 950, color: C.teal}}>① 持票旅客</span></Chip>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 18, fontWeight: 950, color: C.teal}}>② 免票旅客</span></Chip>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 18, fontWeight: 950, color: C.teal}}>③ 优待票旅客</span></Chip>
              <Chip tone={C.gold} toneBg={C.goldPale}><span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>④ 经承运人许可搭乘的无票旅客</span></Chip>
              <span style={{fontSize: 18, fontWeight: 900, color: C.inkSoft}}>先看是不是旅客 → 再看有无免责事由</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="injury-no-fault-rule" style={{position: 'absolute', left: 0, top: 186, width: 1030, height: 566}}>
          <Panel tone={C.gold} watermark={<Gavel size={130} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>人身损害 · 无过错责任 + 两片免责刀</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 140, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 108, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 400, top: 18, width: 10, height: 96, borderRadius: 5, backgroundColor: C.gold}} />
              <span style={{position: 'absolute', left: 344, top: 0, fontSize: 14, fontWeight: 900, color: C.gold}}>无过错责任门</span>
              <Mover delay={80} span={52} fromX={20} toX={330} style={{position: 'absolute', top: 62, left: 0}}>
                <Chip tone={C.teal} toneBg={C.tealPale}><Users size={17} color={C.teal} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.teal}}>旅客人身损害索赔</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 440, top: 62, fontSize: 15, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 150, 12)}}>→ 无需证明承运人<Soft color={C.gold}>有过错</Soft></span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 180, 14)}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>免责刀① 自身健康原因</span>
                <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}>旅客自身健康造成的损害 → <Soft color={C.brick}>不赔</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 230, 14)}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>免责刀② 故意·重大过失</span>
                <span style={{fontSize: 16, fontWeight: 880, color: C.ink}}>旅客主观故意或<Soft color={C.brick}>重大过失</Soft> → <Soft color={C.brick}>不赔</Soft></span>
              </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.gold} size={20}>无过错打底·两刀免责</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" style={{position: 'absolute', left: 1060, top: 186, width: 716, height: 566}}>
          <Panel tone={C.indigoMid} watermark={<Key size={130} color={C.indigoMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoMid} icon={<Key size={24} color={C.cream} strokeWidth={2.2} />}>出租车案 · 两问判定</PanelTab>
            <div style={{border: `2px solid ${C.teal}`, backgroundColor: C.tealPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1, opacity: prog(frame, 140, 14)}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.teal}}>① 小牛扔石块致张某损害</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}><Seal delay={200} tone={C.teal} size={16}>要赔</Seal> 张某是<Soft color={C.teal}>旅客</Soft>·第三人侵权不构成免责·免责事由<Soft color={C.teal}>不存在</Soft></span>
            </div>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1, opacity: prog(frame, 220, 14)}}>
              <span style={{fontSize: 17, fontWeight: 950, color: C.brick}}>② 张某头手伸出窗外被擦伤</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}><Seal delay={270} tone={C.brick} size={16}>不赔</Seal> 张某<Soft color={C.brick}>重大过失</Soft>·免责刀②落下</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 17, fontWeight: 900, color: C.inkSoft, textAlign: 'center'}}>判定顺序：身份 → 免责事由</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CargoLiabilityScene = () => {
  /* data-final-knowledge="cargo-no-fault-rule" data-final-knowledge="luggage-regime-split" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="货运 × 随身 × 托运" title="三条责任车道">
      <div
        data-layout="three-lane-liability-split"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="goods-loss-uses-no-fault-with-force-majeure-nature-and-consignor-fault-exemptions,carry-on-items-use-fault-liability-so-no-fault-means-no-pay,checked-luggage-follows-the-goods-regime-by-reference,leaking-pipe-pays-while-another-passenger-spill-does-not"
        data-focal-rule="cargo-chips-run-three-lanes-with-no-fault-fault-and-reference-regime-colors"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="cargo-no-fault-rule" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 752}}>
          <Panel tone={C.gold} watermark={<Package size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Package size={24} color={C.cream} strokeWidth={2.2} />}>车道① 货物毁损灭失</PanelTab>
            <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 19, fontWeight: 950, color: C.gold, display: 'flex', alignItems: 'center', gap: 8}}><Scale size={19} color={C.gold} strokeWidth={2.4} />归责：无过错责任</span>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>货物毁损·灭失 → 承运人<Soft color={C.gold}>不问过错</Soft>即担责</span>
            </div>
            <span style={{fontSize: 18, fontWeight: 950, color: C.ink}}>三片免责刀（任一即免）：</span>
            {[
              {t: '① 不可抗力', op: 160},
              {t: '② 货物自然性质·合理损耗', op: 220},
              {t: '③ 托运人·收货人的过错', op: 280},
            ].map((row) => (
              <div key={row.t} style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '7px 12px', fontSize: 17, fontWeight: 900, color: C.brick, opacity: prog(frame, row.op, 14)}}>{row.t}</div>
            ))}
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={330} tone={C.gold} size={19}>货运无过错·三刀免责</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="luggage-regime-split" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 752}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 22, height: '100%'}}>
            <Panel tone={C.teal} watermark={<Users size={130} color={C.teal} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 16px'}}>
              <PanelTab tone={C.teal} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>车道② 随身携带物品 · 过错责任</PanelTab>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>运输途中旅客<Soft color={C.teal}>随身携带</Soft>物品毁损灭失 → 适用<Soft color={C.teal}>过错责任</Soft>：承运人<Soft color={C.teal}>有过错才赔</Soft></span>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 'auto'}}>
                <div style={{border: `2px solid ${C.teal}`, backgroundColor: C.tealPale, padding: '6px 10px', fontSize: 15, fontWeight: 900, color: C.teal}}>他人倾倒饮料致损 → 无过错·<Soft color={C.brick}>不赔</Soft></div>
                <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '6px 10px', fontSize: 15, fontWeight: 900, color: C.gold}}>管道漏水致损 → 有过错·<Soft color={C.teal}>要赔</Soft></div>
              </div>
            </Panel>
            <Panel tone={C.indigoMid} watermark={<ScrollText size={130} color={C.indigoMid} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 16px'}}>
              <PanelTab tone={C.indigoMid} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>车道③ 托运行李 · 参照货运</PanelTab>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>旅客<Soft color={C.indigoMid}>托运</Soft>的行李毁损灭失 → <Soft color={C.indigoMid}>参照货物运输</Soft>规则 → 即回到车道①的无过错+三刀免责</span>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.indigoMid} size={19}>随身看过错·托运随货运</Seal></div>
            </Panel>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ShipperChangeScene = () => {
  /* data-final-knowledge="free-change-window" data-final-knowledge="four-reroute-switches" */
  const frame = useCurrentFrame();
  const closed = frame > 340;
  return (
    <Shell code="03" kicker="托运人 · 任意变更解除权" title="交付前的四向闸刀">
      <div
        data-layout="pre-delivery-switchboard"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="free-change-rights-run-only-before-delivery-to-the-consignee,no-cause-is-needed-to-halt-return-redirect-or-replace-consignee,four-switches-cover-halt-return-redirect-and-replace,loss-caused-to-the-carrier-must-be-compensated"
        data-focal-rule="the-shipper-token-forks-four-reroute-switches-before-the-delivery-gate-slams-shut"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="free-change-window" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 240}}>
          <Panel tone={C.gold} watermark={<Package size={120} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.gold} icon={<Package size={24} color={C.cream} strokeWidth={2.2} />}>任意变更解除权 · 时间窗口</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 120, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 88, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 1000, top: 18, width: 10, height: 78, borderRadius: 5, backgroundColor: closed ? C.brick : C.edge}} />
              <span style={{position: 'absolute', left: 930, top: 0, fontSize: 14, fontWeight: 900, color: closed ? C.brick : C.inkSoft}}>交付收货人 ✗ 窗口关闭</span>
              <Mover delay={80} span={70} fromX={20} toX={880} style={{position: 'absolute', top: 54, left: 0}}>
                <Chip tone={C.gold} toneBg={C.goldPale}><Package size={17} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.gold}}>在途货物</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 300, top: 18, fontSize: 16, fontWeight: 900, color: C.teal, opacity: prog(frame, 140, 12)}}>窗口内：无需任何法定事由 ✓</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 18, fontWeight: 900, color: C.inkSoft}}>时间节点：必须在<Under color={C.brick} delay={260}>交付收货人之前</Under>行使（承运合同的特殊单方权利·与定作人任意解除同款逻辑）</div>
          </Panel>
        </Enter>
        <Enter delay={50} from="up" marker="four-reroute-switches" style={{position: 'absolute', left: 0, top: 256, width: 1776, height: 496}}>
          <Panel tone={C.teal} watermark={<Wrench size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.teal} icon={<Wrench size={24} color={C.cream} strokeWidth={2.2} />}>四向闸刀 · 可要求的处置</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 14, flex: 1}}>
              {[
                {t: '闸① 中止运输', op: 120},
                {t: '闸② 返还货物', op: 180},
                {t: '闸③ 变更到达地', op: 240},
                {t: '闸④ 更换收货人', op: 300},
              ].map((row) => (
                <div key={row.t} style={{border: `2px solid ${C.teal}`, backgroundColor: C.tealPale, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, row.op, 14)}}>
                  <span style={{fontSize: 19, fontWeight: 950, color: C.teal}}>{row.t === '闸④ 更换收货人' ? <Users size={18} color={C.teal} strokeWidth={2.4} style={{verticalAlign: '-3px', marginRight: 6}} /> : null}{row.t}</span>
                  <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>单方要求·承运人应配合</span>
                </div>
              ))}
            </div>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 18, fontWeight: 900, color: C.ink}}>
              <Coins size={20} color={C.brick} strokeWidth={2.4} />
              <span>对价：因变更解除致承运人<Soft color={C.brick}>损失</Soft>的 → 托运人应当<Soft color={C.brick}>予以赔偿</Soft></span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={360} tone={C.teal} size={20}>交付前自由改·损失照赔</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
