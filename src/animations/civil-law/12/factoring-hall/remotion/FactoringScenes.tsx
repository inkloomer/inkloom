import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Coins, Gavel, Hourglass, Key, Scale, ScrollText, Undo2, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  slate: '#4A5A72',
  slateMid: '#5F7090',
  slatePale: '#DFE4EE',
  cream: '#F5F3EA',
  creamDim: '#E9E7DA',
  edge: '#C8C6B4',
  gold: '#A0762F',
  goldPale: '#F1E3C6',
  teal: '#3E7268',
  tealPale: '#DBE9E4',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
  ink: '#242A33',
  inkSoft: '#6F7684',
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
        backgroundColor: C.slate,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(223, 228, 238, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.gold}, ${C.teal}, ${C.brick})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(223, 228, 238, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.slateMid, borderLeft: `8px solid ${C.gold}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.slatePale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.slatePale}}>{title}</h1>
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

export const Panel = ({children, marker, tone = C.slateMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(36, 42, 51, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.slateMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.slateMid, borderLeft: `6px solid ${tone}`, color: C.slatePale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
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

export const RecourseForkScene = () => {
  /* data-final-knowledge="factoring-definition" data-final-knowledge="recourse-contrast" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="保理 · 有追索 × 无追索" title="保理的双桌对比">
      <div
        data-layout="recourse-double-desk"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="factoring-transfers-present-or-future-receivables-for-funding-management-or-guarantee-in-writing,recourse-factoring-can-demand-refund-or-buyback-from-the-creditor-and-returns-surplus-so-only-interest-is-earned,non-recourse-factoring-cannot-touch-the-creditor-and-keeps-surplus-beyond-interest,sued-creditor-who-pays-the-factor-can-turn-to-the-debtor-for-the-receivable"
        data-focal-rule="receivable-coins-run-to-the-factor-while-the-recourse-ribbon-either-returns-to-the-creditor-or-not"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="factoring-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 170}}>
          <Panel tone={C.gold} watermark={<Coins size={110} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.gold} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>保理合同 · 概述</PanelTab>
            <span style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>应收账款<Soft color={C.gold}>债权人</Soft>将现有或将有的<Soft color={C.indigoLike}>应收账款</Soft>转让给<Soft color={C.teal}>保理人</Soft>·由其提供<Soft color={C.teal}>资金融通</Soft>·账款管理或催收·付款<Soft color={C.gold}>担保</Soft>等服务</span>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 19, fontWeight: 900, color: C.inkSoft}}>
              <Chip tone={C.indigoLike} toneBg={C.billowLike}><ScrollText size={17} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>法定书面形式</span></Chip>
              <span>除特别规则外 → 适用<Soft color={C.indigoLike}>债权让与</Soft>的一般规则</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="recourse-contrast" style={{position: 'absolute', left: 0, top: 186, width: 1776, height: 566}}>
          <div style={{display: 'flex', gap: 44, height: '100%'}}>
            <Panel tone={C.teal} watermark={<Undo2 size={130} color={C.teal} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
              <PanelTab tone={C.teal} icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />}>有追索权的保理</PanelTab>
              <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 108, overflow: 'hidden'}}>
                <div style={{position: 'absolute', left: 20, right: 20, top: 78, height: 4, backgroundColor: C.edge}} />
                <div style={{position: 'absolute', left: 400, top: 14, width: 9, height: 74, borderRadius: 4, backgroundColor: frame > 160 ? C.teal : C.edge}} />
                <span style={{position: 'absolute', left: 344, top: 0, fontSize: 14, fontWeight: 900, color: frame > 160 ? C.teal : C.inkSoft}}>债务人不履行 → 追索 ✓</span>
                <Mover delay={90} span={52} fromX={20} toX={330} style={{position: 'absolute', top: 46, left: 0}}>
                  <Chip tone={C.teal} toneBg={C.tealPale}><Coins size={17} color={C.teal} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.teal}}>账款催收无果</span></Chip>
                </Mover>
                <span style={{position: 'absolute', left: 440, top: 46, fontSize: 15, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 170, 12)}}>→ 反向<Soft color={C.teal}>追索债权人</Soft></span>
              </div>
              <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="追索内容：">请求债权人<Soft color={C.teal}>返还融资款本息</Soft>·或请求其<Soft color={C.teal}>回购</Soft>应收账款债权</IconChip>
              <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="剩余款项：">扣除本息费用后有剩余 → <Soft color={C.gold}>返还债权人</Soft> → 保理人只取得<Soft color={C.gold}>利息收益</Soft></IconChip>
              <div style={{marginTop: 'auto', border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                诉讼规则：起诉债权人<Soft color={C.teal}>或</Soft>债务人 → 法院<Soft color={C.teal}>应予受理</Soft>；一并起诉 → <Soft color={C.gold}>可以受理</Soft>；债权人被追索后 → 有权请求债务人<Soft color={C.teal}>向其履行</Soft>
              </div>
            </Panel>
            <Panel tone={C.brick} watermark={<Ban size={130} color={C.brick} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
              <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>无追索权的保理</PanelTab>
              <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 108, overflow: 'hidden'}}>
                <div style={{position: 'absolute', left: 20, right: 20, top: 78, height: 4, backgroundColor: C.edge}} />
                <div style={{position: 'absolute', left: 400, top: 14, width: 9, height: 74, borderRadius: 4, backgroundColor: C.brick}} />
                <span style={{position: 'absolute', left: 330, top: 0, fontSize: 14, fontWeight: 900, color: C.brick}}>反向追索之路 ✗ 封死</span>
                <Mover delay={140} span={52} fromX={20} toX={330} style={{position: 'absolute', top: 46, left: 0}}>
                  <Chip tone={C.brick} toneBg={C.brickPale}><Coins size={17} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.brick}}>账款催收无果</span></Chip>
                </Mover>
                <span style={{position: 'absolute', left: 440, top: 46, fontSize: 15, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 220, 12)}}>→ 只能<Soft color={C.brick}>找债务人</Soft></span>
              </div>
              <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="权限边界：">只有权请求<Soft color={C.indigoLike}>债务人</Soft>履行账款债务·<Soft color={C.brick}>不得</Soft>请求债权人返还本息或回购</IconChip>
              <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="剩余款项：">扣除本息费用后有剩余 → <Soft color={C.brick}>无需返还</Soft> → 保理人可取得利息<Soft color={C.gold}>以外</Soft>的收益（买断式）</IconChip>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.brick} size={20}>有追索只赚利息·无追索赚超额</Seal></div>
            </Panel>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const FictionalCreditScene = () => {
  /* data-final-knowledge="confirmed-fictional-rule" data-final-knowledge="notice-moment-rule" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="虚构应收 · 通知时点" title="假账与通知时刻的裁判">
      <div
        data-layout="confirmation-board-with-notice-moment"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="debtor-confirmation-binds-payment-even-if-the-receivable-was-fictional-unless-the-factor-knew,unconfirmed-receivables-are-judged-at-the-moment-the-notice-reaches-the-debtor,existing-at-notice-means-pay-while-absent-at-notice-means-no-payment,bank-case-confirmation-defeats-the-no-underlying-contract-defence"
        data-focal-rule="confirmation-stamps-bind-the-debtor-while-the-notice-clock-freezes-whether-the-receivable-exists"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="confirmed-fictional-rule" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 752}}>
          <Panel tone={C.gold} watermark={<Gavel size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>债务人确认 · 管到底</PanelTab>
            <IconChip icon={<ScrollText size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="虚构应收账款：">债权人谎称有应收账款并保理 → 债务人<Soft color={C.gold}>确认存在</Soft>的 → 应负<Soft color={C.gold}>付款责任</Soft></IconChip>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 160, 14)}}>
              <span style={{fontSize: 19, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={19} color={C.brick} strokeWidth={2.4} />唯一例外</span>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>保理人<Soft color={C.brick}>明知</Soft>应收账款虚构（三方做戏）→ 债务人<Soft color={C.teal}>无需</Soft>承担付款责任</span>
            </div>
            <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '8px 12px', fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.55, flex: 1}}>
              甲乙丙银行案：甲谎称对乙有买卖合同债权·保理给丙银行·<Soft color={C.gold}>乙予以确认</Soft> → 乙以不存在基础关系拒付 → <Seal delay={260} tone={C.brick} size={16}>于法无据</Seal>·确认即管到底
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={320} tone={C.gold} size={20}>确认管到底·恶意除外</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="notice-moment-rule" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 752}}>
          <Panel tone={C.indigoLike} watermark={<Hourglass size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>未确认 · 看通知到达时刻</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 130, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 98, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 400, top: 22, width: 10, height: 86, borderRadius: 5, backgroundColor: frame > 180 ? C.indigoLike : C.edge}} />
              <span style={{position: 'absolute', left: 340, top: 0, fontSize: 14, fontWeight: 900, color: frame > 180 ? C.indigoLike : C.inkSoft}}>保理通知到达 ⏱ 定格</span>
              <Mover delay={90} span={54} fromX={20} toX={330} style={{position: 'absolute', top: 60, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><ScrollText size={17} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>保理通知</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 450, top: 60, fontSize: 15, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 190, 12)}}>→ 此刻在不存在·看这一瞬</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
              <div style={{border: `2px solid ${C.teal}`, backgroundColor: C.tealPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 220, 14)}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.teal}}>到达时·应收账款存在</span>
                <span style={{fontSize: 16, fontWeight: 900, color: C.ink}}>→ 债务人<Soft color={C.teal}>应承担</Soft>付款责任（通知后免除·不免）</span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 260, 14)}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>到达时·应收账款不存在</span>
                <span style={{fontSize: 16, fontWeight: 900, color: C.ink}}>→ 债务人<Soft color={C.brick}>不承担</Soft>付款责任（原本无·通知前免除）</span>
              </div>
            </div>
            <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '8px 12px', fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.55, flex: 1}}>
              三问案：甲对乙100万应收·保理给丙并通知——①本无应收 → <Soft color={C.brick}>不付</Soft> ②通知<Soft color={C.gold}>前</Soft>免除 → <Soft color={C.brick}>不付</Soft> ③通知<Soft color={C.teal}>后</Soft>免除 → <Soft color={C.teal}>要付</Soft>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={330} tone={C.indigoLike} size={20}>通知时刻定生死·确认例外面</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PriorityRaceScene = () => {
  /* data-final-knowledge="multi-factoring-priority" data-final-knowledge="multi-transfer-rules" */
  const frame = useCurrentFrame();
  return (
    <Shell code="03" kicker="多重保理 · 受偿顺位" title="登记通知比例三连赛">
      <div
        data-layout="priority-racetrack-with-transfer-ladder"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="registered-factoring-beats-unregistered-and-double-registration-ranks-by-time,unregistered-claims-rank-by-earliest-notice-and-none-notice-ranks-by-proportion,multiple-assignments-are-performed-to-the-earliest-notified-assignee-and-wrong-payment-never-discharges,earliest-assignee-cannot-take-from-later-assignee-unless-the-later-one-knew"
        data-focal-rule="priority-tokens-sprint-the-racetrack-from-registration-through-notice-down-to-proportion"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="multi-factoring-priority" style={{position: 'absolute', left: 0, top: 0, width: 1030, height: 752}}>
          <Panel tone={C.gold} watermark={<Scale size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>多重保理 · 受偿顺位四层</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 9, flex: 1, justifyContent: 'center'}}>
              {[
                {n: '①', tone: C.gold, text: '已登记的 先于 未登记的受偿', op: 80},
                {n: '②', tone: C.teal, text: '均已登记 → 按 登记的先后顺序', op: 140},
                {n: '③', tone: C.indigoLike, text: '均未登记 → 按 最先到达债务人的转让通知', op: 200},
                {n: '④', tone: C.brick, text: '既未登记也未通知 → 按 应收账款比例清偿', op: 260},
              ].map((row) => (
                <div key={row.n} style={{border: `2px solid ${row.tone}`, backgroundColor: `${row.tone}1a`, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 12, opacity: prog(frame, row.op, 14)}}>
                  <span style={{fontSize: 24, fontWeight: 950, color: row.tone}}>{row.n}</span>
                  <span style={{fontSize: 18, fontWeight: 900, color: C.ink}}>{row.text}</span>
                </div>
              ))}
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={320} tone={C.gold} size={21}>口诀：登记 &gt; 通知 &gt; 比例</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="multi-transfer-rules" style={{position: 'absolute', left: 1060, top: 0, width: 716, height: 752}}>
          <Panel tone={C.indigoLike} watermark={<Users size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>一债多转 · 履行与救济</PanelTab>
            <IconChip icon={<ScrollText size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="履行对象：">债务人向<Soft color={C.indigoLike}>通知最先到达</Soft>的受让人履行——丙先通知 → 乙还丙·债务<Soft color={C.teal}>消灭</Soft></IconChip>
            <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="还错人：">向通知后到达者（丁）履行 → 债务<Soft color={C.brick}>不消灭</Soft> → 丙可请求乙<Soft color={C.brick}>再次履行</Soft></IconChip>
            <IconChip icon={<Undo2 size={22} color={C.cream} strokeWidth={2.2} />} tone={C.gold} title="丙请求丁返还：">原则上<Soft color={C.brick}>不可以</Soft>；但丁<Soft color={C.gold}>知道或应当知道</Soft>丙的通知在先 → <Soft color={C.teal}>除外</Soft></IconChip>
            <div style={{marginTop: 'auto', border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              <Coins size={17} color={C.gold} strokeWidth={2.4} style={{verticalAlign: '-3px'}} /> 落选的受让人（丁）→ 有权请求<Soft color={C.brick}>原债权人甲</Soft>承担<Soft color={C.brick}>违约责任</Soft>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}><Seal delay={330} tone={C.indigoLike} size={19}>还错不销账·恶意才返还</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
