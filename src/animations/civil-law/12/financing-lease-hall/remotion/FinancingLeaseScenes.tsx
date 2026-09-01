import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Coins, Gavel, House, Key, Scale, ScrollText, Undo2, Users, Wrench} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  violet: '#5C527E',
  violetMid: '#72679A',
  violetPale: '#E4E0EE',
  cream: '#F5F3EA',
  creamDim: '#E9E7DA',
  edge: '#C8C6B4',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  moss: '#5C7245',
  mossPale: '#E2EAD5',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
  ink: '#282230',
  inkSoft: '#736C86',
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
        backgroundColor: C.violet,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(228, 224, 238, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.gold}, ${C.moss}, ${C.brick})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(228, 224, 238, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.violetMid, borderLeft: `8px solid ${C.gold}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.violetPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.violetPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
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

export const Panel = ({children, marker, tone = C.violetMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(40, 34, 48, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.violetMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.violetMid, borderLeft: `6px solid ${tone}`, color: C.violetPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
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

export const FinancingOverviewScene = () => {
  /* data-final-knowledge="financing-structure" data-final-knowledge="financing-security-nature" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="融资租赁 · 结构与本质" title="融资租赁的闭环与镜像">
      <div
        data-layout="tripartite-loop-with-leaseback-mirror"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="lessor-buys-from-the-seller-on-the-lessee-choice-and-leases-it-for-rent-keeping-title,sale-leaseback-keeps-possession-by-agreement-so-the-lessee-seller-never-moves,unregistered-lessor-title-cannot-oppose-good-faith-third-parties,price-is-funding-rent-is-principal-plus-interest-and-the-asset-is-the-security"
        data-focal-rule="funding-coins-run-the-seller-lessor-lessee-loop-while-the-leaseback-mirror-holds-possession-still"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="financing-structure" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 420}}>
          <Panel tone={C.gold} watermark={<Coins size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.gold} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>三方融资租赁 · 资金与物的环流</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 180, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 40, top: 40}}><Chip tone={C.indigoLike} toneBg={C.billowLike}><Users size={18} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.indigoLike}}>出卖人</span></Chip></div>
              <div style={{position: 'absolute', left: 780, top: 40}}><Chip tone={C.gold} toneBg={C.goldPale}><Key size={18} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.gold}}>出租人（所有权人）</span></Chip></div>
              <div style={{position: 'absolute', left: 1480, top: 40}}><Chip tone={C.moss} toneBg={C.mossPale}><House size={18} color={C.moss} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.moss}}>承租人（选择+使用）</span></Chip></div>
              <Mover delay={70} span={60} fromX={190} toX={760} fadeAt={140} style={{position: 'absolute', top: 48, left: 0}}>
                <Chip tone={C.gold} toneBg={C.cream}><Coins size={16} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.gold}}>价金=融资款</span></Chip>
              </Mover>
              <Mover delay={150} span={60} fromX={960} toX={1460} fadeAt={220} style={{position: 'absolute', top: 48, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.cream}><House size={16} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.indigoLike}}>租赁物交付使用</span></Chip>
              </Mover>
              <Mover delay={230} span={60} fromX={1450} toX={980} fadeAt={300} style={{position: 'absolute', top: 120, left: 0}}>
                <Chip tone={C.moss} toneBg={C.cream}><Coins size={16} color={C.moss} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.moss}}>租金=本息</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 40, top: 124, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 300, 14)}}>闭环：出租人按承租人的选择购买 → 交承租人使用收租 · <Soft color={C.gold}>所有权归出租人</Soft></div>
            </div>
            <IconChip icon={<ScrollText size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="两方融资租赁（售后回租）：">承租人把<Soft color={C.indigoLike}>自有物</Soft>卖给出租人再<Soft color={C.indigoLike}>租回</Soft> → 仍构成融资租赁·出租人基于<Soft color={C.brick}>占有改定</Soft>取得所有权</IconChip>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft}}>出租人所有权<Under color={C.brick} delay={280}>未经登记</Under> → <Soft color={C.brick}>不得对抗善意第三人</Soft>（登记对抗）</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="financing-security-nature" style={{position: 'absolute', left: 0, top: 436, width: 1776, height: 316}}>
          <Panel tone={C.moss} watermark={<Scale size={130} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.moss} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>担保合同的本质 · 四个等式</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>出租人付的价金</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>本质 = 向承租人支付的<Soft color={C.gold}>融资款</Soft></span>
                <span style={{fontSize: 18, fontWeight: 950, color: C.moss}}>承租人交的租金</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>本质 = 偿付融资款的<Soft color={C.moss}>本息</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike}}>融资租赁物</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>本质 = 融资本息债权的<Soft color={C.indigoLike}>担保物</Soft></span>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>出租人的所有权</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>本质 = <Soft color={C.brick}>担保权</Soft>·与<Soft color={C.brick}>抵押权</Soft>类似（登记对抗）</span>
              </div>
            </div>
            <div style={{fontSize: 19, fontWeight: 950, color: C.violet, opacity: prog(frame, 300, 14)}}>动产抵押 · 保留所有权买卖 · 融资租赁：<Under color={C.gold} delay={320}>三种交易本质一样</Under>——都是登记对抗的动产担保</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LiabilityAllocationScene = () => {
  /* data-final-knowledge="quality-defect-paths" data-final-knowledge="tort-repair-duty" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="融资租赁 · 责任分配" title="瑕疵追责与物的责任">
      <div
        data-layout="liability-board-with-two-defect-paths"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="claiming-the-seller-needs-explicit-tripartite-agreement-because-of-privity,lessor-who-blocked-the-claim-pays-when-failing-to-assist-or-hiding-known-defects,lessor-interference-with-lessee-choice-opens-damages-and-rent-reduction,tort-to-third-parties-and-repair-during-possession-belong-to-the-lessee"
        data-focal-rule="defect-claims-rail-toward-the-seller-or-the-lessor-while-tort-and-repair-chips-land-on-the-lessee-desk"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="quality-defect-paths" style={{position: 'absolute', left: 0, top: 0, width: 1030, height: 752}}>
          <Panel tone={C.gold} watermark={<Gavel size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>品质瑕疵 · 承租人的两条追责路</PanelTab>
            <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, 80, 14)}}>
              <span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike, display: 'flex', alignItems: 'center', gap: 8}}><Coins size={19} color={C.indigoLike} strokeWidth={2.4} />路① 追出卖人的违约责任</span>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>买卖合同在出租人与出卖人之间 → <Soft color={C.indigoLike}>合同相对性</Soft>障碍 → 需三方<Soft color={C.indigoLike}>明确约定</Soft>方可追究</span>
              <span style={{fontSize: 16, fontWeight: 900, color: C.brick, lineHeight: 1.5}}>出租人致追责失败 → 承租人可向出租人索赔两种情形：①未履行<Soft color={C.brick}>协助义务</Soft> ②<Soft color={C.brick}>明知</Soft>质量瑕疵而<Soft color={C.brick}>不告知</Soft></span>
            </div>
            <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, 180, 14)}}>
              <span style={{fontSize: 20, fontWeight: 950, color: C.gold, display: 'flex', alignItems: 'center', gap: 8}}><Scale size={19} color={C.gold} strokeWidth={2.4} />路② 追出租人的违约责任</span>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>前提：出租人<Soft color={C.gold}>干预</Soft>承租人的选择（承租人依赖出租人的<Soft color={C.gold}>技能</Soft>确定·选择租赁物）</span>
              <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft}}>后果：<Seal delay={260} tone={C.gold} size={16}>违约责任</Seal>＋可请求<Seal delay={300} tone={C.gold} size={16}>减免租金</Seal></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="tort-repair-duty" style={{position: 'absolute', left: 1060, top: 0, width: 716, height: 752}}>
          <Panel tone={C.moss} watermark={<Wrench size={140} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.moss} icon={<Wrench size={24} color={C.cream} strokeWidth={2.2} />}>物的责任 · 归承租人</PanelTab>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, 140, 14)}}>
              <span style={{fontSize: 20, fontWeight: 950, color: C.brick}}>物上侵权责任</span>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>承租人占有期间·租赁物致第三人<Soft color={C.brick}>人身损害</Soft>或<Soft color={C.brick}>财产损失</Soft></span>
              <span style={{fontSize: 17, fontWeight: 950, color: C.ink}}>承担主体 = <Seal delay={220} tone={C.brick} size={16}>承租人</Seal>·出租人<Soft color={C.moss}>不承担</Soft></span>
            </div>
            <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 6, opacity: prog(frame, 240, 14)}}>
              <span style={{fontSize: 20, fontWeight: 950, color: C.moss}}>物上维修责任</span>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>占有期间租赁物损坏 → 维修责任主体 = <Seal delay={300} tone={C.moss} size={16}>承租人</Seal></span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={340} tone={C.moss} size={19}>谁占有使用·谁担物上责任</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RentProtectionScene = () => {
  /* data-final-knowledge="rent-default-paths" data-final-knowledge="three-regime-repo-table" */
  const frame = useCurrentFrame();
  const tripped = frame > 150;
  return (
    <Shell code="03" kicker="融资租赁 · 租金债权保护" title="欠租的双径与三制对比">
      <div
        data-layout="rent-default-gauge-into-repo-ledger"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="one-missed-installment-after-notice-forfeits-the-timeline-into-lump-sum-payment,two-periods-or-fifteen-percent-after-notice-opens-rescission-and-repossession,repossessed-value-offsets-the-debt-as-priority-satisfaction,three-regimes-differ-on-trigger-and-whether-rescission-precedes-take-back"
        data-focal-rule="rent-default-tokens-pass-the-notice-gate-into-lump-sum-or-repossession-then-the-ledger-compares-three-regimes"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="rent-default-paths" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 240}}>
          <Panel tone={C.brick} watermark={<Coins size={120} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>欠租两径 · 共同前置 = 催告后合理期限仍不支付</PanelTab>
            <div style={{position: 'relative', height: 56, border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 14, top: 12, width: 420, height: 26, border: `2px solid ${C.edge}`, backgroundColor: C.cream, borderRadius: 4, overflow: 'hidden'}}>
                <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: C.brick, opacity: 0.7, width: `${Math.min(100, (frame / 130) * 100)}%`}} />
                <span style={{position: 'absolute', left: 12, top: 3, fontSize: 14, fontWeight: 950, color: C.ink}}>欠租累积</span>
              </div>
              <span style={{position: 'absolute', left: 470, top: 15, fontSize: 18, fontWeight: 950, color: tripped ? C.brick : C.inkSoft}}>＋ 催告 → 触发 ↓</span>
              <span style={{position: 'absolute', left: 700, top: 6, fontSize: 17, fontWeight: 950, color: C.gold}}>径① 期数无规定（≥1期）→ <Seal delay={180} tone={C.gold} size={16}>一次性支付全部未付租金</Seal>（剥夺期限利益）</span>
              <span style={{position: 'absolute', left: 700, top: 30, fontSize: 17, fontWeight: 950, color: C.brick}}>径② <Seal delay={220} tone={C.brick} size={16}>2期以上</Seal> 或 达全部租金<Seal delay={260} tone={C.brick} size={16}>15%以上</Seal> → 解除合同取回租赁物</span>
            </div>
            <div style={{fontSize: 18, fontWeight: 900, color: C.inkSoft, opacity: tripped ? 1 : 0.4}}>取回后：以租赁物价值<Soft color={C.brick}>充抵</Soft>承租人所负债务（本质 = <Soft color={C.brick}>优先受偿</Soft>·担保功能的落地）</div>
          </Panel>
        </Enter>
        <Enter delay={50} from="up" marker="three-regime-repo-table" style={{position: 'absolute', left: 0, top: 256, width: 1776, height: 496}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>三制取回对比 · 一张台账</PanelTab>
            <div style={{display: 'grid', gridTemplateRows: '46px 1fr 1fr 1fr', flex: 1, border: `2px solid ${C.edge}`}}>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr 1fr', backgroundColor: C.violetMid}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 950, color: C.violetPale, borderRight: `2px solid ${C.edge}`}}>类别</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 950, color: C.violetPale, borderRight: `2px solid ${C.edge}`}}>取回条件</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 950, color: C.violetPale, borderRight: `2px solid ${C.edge}` }}>是否需解除合同</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 950, color: C.violetPale}}>取回后果</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 120, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>分期付款买卖</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>价金违约 <Soft color={C.brick}>1/5</Soft></span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}` }}><Soft color={C.brick}>先解约</Soft>·后取回</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink}}>退货换钱·扣除<Soft color={C.gold}>使用费·赔偿金</Soft></span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr 1fr', borderTop: `2px solid ${C.edge}`, backgroundColor: C.creamDim, opacity: prog(frame, 180, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>融资租赁</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>租金违约 <Soft color={C.brick}>2期或15%</Soft></span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}` }}><Soft color={C.brick}>先解约</Soft>·后取回</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink}}>变价受偿<Soft color={C.brick}>（担保）</Soft></span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 240, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>保留所有权买卖</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>已付未达 <Soft color={C.gold}>75%</Soft></span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}` }}><Soft color={C.moss}>无需解约</Soft>·直接取回</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 900, color: C.ink}}>不赎再卖·变价受偿</span>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', fontSize: 19, fontWeight: 950, color: C.violet}}>
              <Undo2 size={22} color={C.violet} strokeWidth={2.4} />
              <Gavel size={22} color={C.violet} strokeWidth={2.4} />
              记法：融资租赁与保留所有权同属<Soft color={C.gold}>担保拿货</Soft>·分期付款走<Soft color={C.brick}>解约退货</Soft>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
