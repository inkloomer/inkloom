import type {CSSProperties, ReactNode} from 'react';
import {Anchor, ArrowRight, Ban, Coins, FlaskConical, Gavel, Hourglass, Repeat, RotateCcw, Scale, ScrollText, ShieldCheck, Wallet} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  umber: '#6E5F4B',
  umberMid: '#83735C',
  umberPale: '#E4DCCC',
  cream: '#F6F1E3',
  creamDim: '#ECE5D1',
  edge: '#CFC4A6',
  bronze: '#8C6A32',
  bronzePale: '#EFDFC0',
  teal: '#3E7268',
  tealPale: '#DBE9E3',
  rust: '#AE5433',
  rustPale: '#F3DCD0',
  ink: '#2A251B',
  inkSoft: '#7D7360',
  plumLike: '#6B4E6E',
  plumPale: '#EADFEA',
  sandLike: '#F0E8D3',
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

export const Path = ({color = C.rust, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.umber,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(228, 220, 204, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.bronze}, ${C.teal}, ${C.rust})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(228, 220, 204, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.umberMid, borderLeft: `8px solid ${C.bronze}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.umberPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.bronze}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.umberPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.bronzePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.bronze : 'transparent',
              border: `2px solid ${C.bronze}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.umberMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(42, 37, 27, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.umberMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.umberMid, borderLeft: `6px solid ${tone}`, color: C.umberPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(140, 106, 50, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.rust}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.rust, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const TrialPurchaseScene = () => {
  /* data-final-knowledge="trial-definition" data-final-knowledge="trial-expression-rules" data-final-knowledge="trial-purchase-effects" data-final-knowledge="trial-fee-risk" */
  const frame = useCurrentFrame();
  return (
    <Shell code="01" kicker="试用买卖 · 先用后付" title="试用买卖的三岔出口">
      <div
        data-layout="trial-three-exit-gates"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="trial-sale-is-try-first-pay-later-with-contract-unformed-during-trial,expression-table-silence-at-expiry-counts-as-purchase,purchase-means-promise-contract-forms-simple-delivery-passes-title-and-risk,no-agreement-fee-is-free-trial-and-trial-risk-stays-with-the-seller"
        data-focal-rule="trial-goods-sit-with-the-tester-until-one-of-three-exit-gates-decides-the-outcome"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="trial-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128}}>
          <Panel tone={C.bronze} watermark={<FlaskConical size={100} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '8px 18px'}}>
            <PanelTab tone={C.bronze} icon={<FlaskConical size={24} color={C.cream} strokeWidth={2.2} />}>试用买卖 · 界定与试用期</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 20, fontWeight: 900, color: C.ink, flexWrap: 'wrap'}}>
              <Chip tone={C.bronze} toneBg={C.bronzePale}><span style={{fontSize: 19, fontWeight: 950, color: C.bronze}}>先用后付</span></Chip>
              <span>试用期间买卖合同<Soft color={C.rust}>并未成立</Soft>（本质=附生效条件·<Soft color={C.rust}>不生效</Soft>）·是否购买全凭<Soft color={C.teal}>自愿</Soft></span>
              <span style={{color: C.inkSoft}}>试用期：有约定<Soft color={C.teal}>从约定</Soft>·无约定由<Soft color={C.bronze}>出卖人</Soft>确定</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="trial-expression-rules" style={{position: 'absolute', left: 0, top: 144, width: 1776, height: 300}}>
          <Panel tone={C.teal} watermark={<Hourglass size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.teal} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>是否购买 · 表示方法一览</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 0, flex: 1, border: `2px solid ${C.edge}`}}>
              <div style={{backgroundColor: C.umberMid, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.umberPale, borderBottom: `2px solid ${C.edge}`, borderRight: `2px solid ${C.edge}`}}>节点</div>
              <div style={{backgroundColor: C.umberMid, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.umberPale, borderBottom: `2px solid ${C.edge}`, borderRight: `2px solid ${C.edge}`}}>买</div>
              <div style={{backgroundColor: C.umberMid, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.umberPale, borderBottom: `2px solid ${C.edge}`}}>不买</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, borderBottom: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>试用期内</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.teal, borderRight: `2px solid ${C.edge}`, borderBottom: `2px solid ${C.edge}`}}><Soft color={C.teal}>积极表示</Soft>（明示或作为）</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.rust, borderBottom: `2px solid ${C.edge}`}}><Soft color={C.rust}>积极表示</Soft>（退还=拒绝）</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>试用期满时</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 20, fontWeight: 950, color: C.teal, borderRight: `2px solid ${C.edge}`}}>
                <span style={{opacity: prog(frame, 150, 14)}}><Soft color={C.teal}>无表示</Soft> →</span>
                <Seal delay={170} tone={C.teal} size={18}>视为购买</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.rust}}><Soft color={C.rust}>积极表示</Soft>方可拒绝</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 19, fontWeight: 900, color: C.inkSoft}}>
              <Gavel size={20} color={C.bronze} strokeWidth={2.4} />
              <span>机器人案：第8天出卖给王某 → <Soft color={C.teal}>视为购买</Soft>·简易交付已取得所有权 → 再卖系<Soft color={C.teal}>有权处分</Soft>·王某继受取得</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="trial-purchase-effects" style={{position: 'absolute', left: 0, top: 460, width: 866, height: 308}}>
          <Panel tone={C.teal} watermark={<Scale size={120} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 16px'}}>
            <PanelTab tone={C.teal} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>表示购买 · 三重后果</PanelTab>
            <IconChip icon={<ScrollText size={22} color={C.cream} strokeWidth={2.2} />} tone={C.bronze} title="承诺：">购买表示即构成<Soft color={C.bronze}>承诺</Soft> → 买卖合同<Soft color={C.teal}>成立</Soft></IconChip>
            <IconChip icon={<Anchor size={22} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="所有权：">事先已占有 → 基于<Soft color={C.teal}>简易交付</Soft>取得所有权（电脑案：再卖=有权处分）</IconChip>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.rust} title="风险：">自此时起标的物<Soft color={C.rust}>风险</Soft>归买受人承担</IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}><Under color={C.rust} delay={200}>拒绝购买</Under>：退还货物·<Soft color={C.teal}>无需支付使用费</Soft>（另有约定除外）</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="trial-fee-risk" style={{position: 'absolute', left: 910, top: 460, width: 866, height: 308}}>
          <Panel tone={C.rust} watermark={<Coins size={120} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 16px'}}>
            <PanelTab tone={C.rust} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>使用费 与 试用风险</PanelTab>
            <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.bronze} title="使用费（第639条）：">无约定或不明 → 出卖人<Soft color={C.rust}>无权请求</Soft>支付·<Soft color={C.teal}>免费试用</Soft>（第10天不买归还：无使用费折旧费）</IconChip>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.rust} title="风险（第640条）：">试用期内毁损灭失 → 由<Soft color={C.rust}>出卖人</Soft>承担</IconChip>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, padding: '6px 12px', fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>理由：试用期交付<Soft color={C.bronze}>非主要义务</Soft>之交付·买受人<Soft color={C.bronze}>未取得所有权</Soft>·只能试用不能收益——暴雨泡坏机器人：孟某<Soft color={C.teal}>不赔偿</Soft></div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>买或不买的选择权 = <Soft color={C.plumLike}>形成权</Soft>（单方意思表示即生私法效果）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const InstallmentForkScene = () => {
  /* data-final-knowledge="installment-trigger" data-final-knowledge="installment-pay-path" data-final-knowledge="installment-rescind-path" */
  const frame = useCurrentFrame();
  const tripped = frame > 150;
  return (
    <Shell code="02" kicker="分期付款 · 特殊保护" title="分期付款的双岔保护">
      <div
        data-layout="installment-gauge-double-fork"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="protection-triggers-when-arrears-reach-one-fifth-plus-notice-still-unpaid,pay-path-demands-lump-sum-and-strips-installment-timeline-benefit,rescind-path-takes-back-goods-and-refunds-paid-price-minus-usage-fee-and-damages,agreed-price-forfeiture-clauses-are-invalid-and-rescission-restores-status-quo"
        data-focal-rule="payment-gauge-fills-to-the-one-fifth-mark-then-forks-into-pay-and-rescind-lanes"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="installment-trigger" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 170}}>
          <Panel tone={C.rust} watermark={<Wallet size={120} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '9px 18px'}}>
            <PanelTab tone={C.rust} icon={<Wallet size={24} color={C.cream} strokeWidth={2.2} />}>出卖人价金债权特殊保护 · 触发要件</PanelTab>
            <div style={{position: 'relative', height: 54, border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 12, top: 12, bottom: 12, width: 1200, borderRadius: 4, overflow: 'hidden', border: `2px solid ${C.edge}`, backgroundColor: C.cream}}>
                <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: C.rust, width: `${Math.min(100, (frame / 140) * 100)}%`, opacity: 0.75}} />
                <div style={{position: 'absolute', left: '20%', top: 0, bottom: 0, width: 4, backgroundColor: tripped ? C.rust : C.edge}} />
                <span style={{position: 'absolute', left: '20.8%', top: 14, fontSize: 17, fontWeight: 950, color: tripped ? C.rust : C.inkSoft}}>总价款 1/5</span>
                <span style={{position: 'absolute', left: 16, top: 14, fontSize: 17, fontWeight: 950, color: C.ink}}>迟延支付进度</span>
              </div>
              <span style={{position: 'absolute', left: 1250, top: 14, fontSize: 19, fontWeight: 950, color: tripped ? C.rust : C.inkSoft}}>＋ <Hourglass size={18} color={C.rust} strokeWidth={2.4} style={{verticalAlign: '-3px'}} /> 催告后合理期限仍不付 → <Soft color={C.rust}>保护触发</Soft></span>
            </div>
            <div style={{fontSize: 19, fontWeight: 900, color: C.inkSoft, opacity: tripped ? 1 : 0.4}}>概念：出卖人交付动产或不动产·买受人<Soft color={C.bronze}>分期支付价款</Soft>——触发后出卖人可在两径中<Soft color={C.bronze}>择一</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={50} from="up" marker="installment-pay-path" style={{position: 'absolute', left: 0, top: 186, width: 866, height: 566}}>
          <Panel tone={C.teal} watermark={<ArrowRight size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<ArrowRight size={24} color={C.cream} strokeWidth={2.2} />}>路径① 请求一次性支付</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 96, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 70, height: 4, backgroundColor: C.edge}} />
              <Mover delay={180} span={60} fromX={20} toX={560} style={{position: 'absolute', top: 38, left: 0}}>
                <Chip tone={C.teal} toneBg={C.tealPale}><Coins size={18} color={C.teal} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.teal}}>剩余价款一次付清</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 24, top: 8, fontSize: 15, fontWeight: 900, color: C.teal}}>期限利益被剥夺</span>
            </div>
            <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="效力：">买受人<Soft color={C.teal}>丧失分期付款的期限利益</Soft>，须<Soft color={C.teal}>一次性支付</Soft>全部剩余价款</IconChip>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.bronze} title="性质：">仍是<Soft color={C.bronze}>继续履行</Soft>合同，合同关系<Soft color={C.bronze}>不消灭</Soft></IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={300} tone={C.teal} size={21}>选择支付：合同继续·钱一次到位</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="installment-rescind-path" style={{position: 'absolute', left: 910, top: 186, width: 866, height: 566}}>
          <Panel tone={C.rust} watermark={<Ban size={130} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>路径② 解除合同</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 96, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 70, height: 4, backgroundColor: C.edge}} />
              <Mover delay={220} span={60} fromX={560} toX={60} style={{position: 'absolute', top: 38, left: 0}}>
                <Chip tone={C.rust} toneBg={C.rustPale}><Wallet size={18} color={C.rust} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.rust}}>标的物退回出卖人</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 24, top: 8, fontSize: 15, fontWeight: 900, color: C.rust}}>解除 → 取回</span>
            </div>
            <IconChip icon={<Undo2 size={22} color={C.cream} strokeWidth={2.2} />} tone={C.rust} title="取回：">出卖人有权从买受人处<Soft color={C.rust}>取回标的物</Soft>（退货）</IconChip>
            <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.bronze} title="返还：">向买受人<Soft color={C.teal}>返还已付价款</Soft>，但可扣除<Soft color={C.rust}>使用费</Soft>·<Soft color={C.rust}>赔偿金</Soft>（还钱）</IconChip>
            <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.plumLike} title="扣款约定无效：">约定出卖人<Soft color={C.plumLike}>扣留价款不予返还</Soft>的条款<Soft color={C.rust}>无效</Soft></IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={340} tone={C.rust} size={21}>解除实质 = 恢复原状</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RetentionLoopScene = () => {
  /* data-final-knowledge="retention-definition" data-final-knowledge="retention-reclaim-grounds" data-final-knowledge="retention-redemption-resale" */
  const frame = useCurrentFrame();
  const breached = frame > 170;
  const redeemed = frame > 400;
  return (
    <Shell code="03" kicker="保留所有权 · 取回闭环" title="保留所有权的取回闭环">
      <div
        data-layout="retention-anchor-retrieval-loop"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="retained-title-sits-with-seller-as-security-like-a-registered-chattel-mortgage,three-grounds-open-retrieval-with-seventy-five-percent-and-good-faith-limits,retrieved-goods-can-be-redeemed-by-curing-the-default-within-the-redemption-window,unredeemed-goods-are-resold-and-proceeds-settle-with-refund-or-balance"
        data-focal-rule="title-anchor-stays-with-the-seller-while-goods-travel-back-through-retrieval-redemption-or-resale"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="retention-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 150}}>
          <Panel tone={C.bronze} watermark={<Anchor size={110} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Anchor size={24} color={C.cream} strokeWidth={2.2} />}>保留所有权买卖 · 概念与担保功能</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.bronze} toneBg={C.bronzePale}><span style={{fontSize: 19, fontWeight: 950, color: C.bronze}}>买受人占有 + 出卖人保留所有权</span></Chip>
              <ArrowRight size={22} color={C.bronze} strokeWidth={2.6} />
              <span>约定<Soft color={C.bronze}>特定条件成就</Soft>时买受人取得所有权——仅适用于<Soft color={C.rust}>动产</Soft></span>
            </div>
            <IconChip icon={<ShieldCheck size={22} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="担保功能：">保留所有权旨在<Soft color={C.teal}>担保价款债务履行</Soft> → 功能等同<Soft color={C.teal}>动产抵押权</Soft>：<Soft color={C.rust}>未经登记不得对抗善意第三人</Soft></IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="retention-reclaim-grounds" style={{position: 'absolute', left: 0, top: 166, width: 1776, height: 300}}>
          <Panel tone={C.rust} watermark={<Undo2 size={130} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.rust} icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />}>取回权 · 三事由与两例外</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, borderTop: `6px solid ${C.rust}`, backgroundColor: C.creamDim, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.rust}}>事由① 价金违约</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>未按约付款·经<Soft color={C.bronze}>催告</Soft>合理期间仍不履行</span>
                <span style={{fontSize: 18, fontWeight: 900, color: C.teal, marginTop: 'auto'}}>例外：已付价金达总额<Soft color={C.teal}>75%以上</Soft> → 不得取回</span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, borderTop: `6px solid ${C.rust}`, backgroundColor: C.creamDim, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.rust}}>事由② 未完成特定条件</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>约定条件（如付清·改造）<Soft color={C.rust}>未完成</Soft></span>
                <span style={{fontSize: 18, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>条件是取得所有权的前提</span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, borderTop: `6px solid ${C.rust}`, backgroundColor: C.creamDim, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.rust}}>事由③ 不当处分</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>将标的物<Soft color={C.rust}>出卖·出质</Soft>或作出其他不当处分</span>
                <span style={{fontSize: 18, fontWeight: 900, color: C.teal, marginTop: 'auto'}}>例外：<Soft color={C.teal}>善意第三人</Soft>已取得所有权 → 取回<Soft color={C.rust}>为时已晚</Soft></span>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 20, fontWeight: 950, color: C.ink}}>
              <span style={{opacity: breached ? 1 : 0.4}}>事由成就 → 凭<Soft color={C.bronze}>保留的所有权</Soft><Under color={C.rust} delay={200}>无需解除合同</Under>直接<Seal delay={220} tone={C.rust} size={18}>取回标的物</Seal></span>
              <span style={{fontSize: 18, fontWeight: 900, color: C.inkSoft}}>无需解约·直接取回——与分期付款的先解约不同</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="retention-redemption-resale" style={{position: 'absolute', left: 0, top: 482, width: 1776, height: 286}}>
          <Panel tone={C.teal} watermark={<RotateCcw size={120} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.teal} icon={<RotateCcw size={24} color={C.cream} strokeWidth={2.2} />}>取回之后 · 回赎 或 再卖</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 0, flex: 1}}>
              <div style={{width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
                <Chip tone={C.rust} toneBg={C.rustPale}><Undo2 size={18} color={C.rust} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.rust}}>出卖人已取回</span></Chip>
                <span style={{fontSize: 17, fontWeight: 900, color: C.inkSoft}}>买受人违约在先</span>
              </div>
              <ArrowRight size={24} color={C.bronze} strokeWidth={2.6} />
              <div style={{flex: 1, border: `2px solid ${C.teal}`, backgroundColor: C.tealPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: redeemed ? 1 : 0.55}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.teal}}>岔A 回赎权</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}><Soft color={C.teal}>回赎期限内</Soft>（无约定由出卖人指定）+ <Soft color={C.teal}>消除取回事由</Soft> → 买受人<Seal delay={320} tone={C.teal} size={17}>赎回标的物</Seal></span>
              </div>
              <ArrowRight size={24} color={C.rust} strokeWidth={2.6} />
              <div style={{flex: 1, border: `2px solid ${C.rust}`, backgroundColor: C.rustPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 360, 16)}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.rust}}>岔B 再卖权</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>未回赎 → 另行<Soft color={C.rust}>卖予他人</Soft>·价金扣除再卖费用利息后<Seal delay={420} tone={C.rust} size={17}>多退少补</Seal>（变价受偿）</span>
              </div>
            </div>
            <div style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>手机案：付5期欠3期·催告无果 → 已付50%未达75% → 甲商场<Soft color={C.rust}>能取回</Soft>；乙到期不赎 → 甲<Soft color={C.rust}>再卖</Soft>多退少补</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const TrilogyLedgerScene = () => {
  /* data-final-knowledge="trilogy-mode-contrast" data-final-knowledge="trilogy-ratio-contrast" data-final-knowledge="trilogy-consequence-contrast" data-final-knowledge="phone-case-verdict" */
  const frame = useCurrentFrame();
  return (
    <Shell code="04" kicker="保留所有权 × 分期付款 · 对比" title="三赊对比台账">
      <div
        data-layout="trilogy-parallel-ledger-with-phone-verdicts"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="retention-mode-needs-no-rescission-while-installment-mode-rescinds-first,ratio-contrast-seventy-five-percent-ceiling-versus-one-fifth-trigger,consequence-contrast-variable-price-settlement-versus-refund-minus-deductions,phone-case-both-claims-succeed-under-their-own-rules"
        data-focal-rule="two-regime-columns-light-row-by-row-then-the-phone-case-runs-both-ledgers-at-once"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="trilogy-ratio-contrast" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 430}}>
          <Panel tone={C.bronze} watermark={<Scale size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>保留所有权 × 分期付款 · 三点对比</PanelTab>
            <div style={{display: 'grid', gridTemplateRows: '46px 1fr 1fr 1fr', flex: 1, border: `2px solid ${C.edge}`}}>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', backgroundColor: C.umberMid}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.umberPale, borderRight: `2px solid ${C.edge}`}}>核心差异点</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 20, fontWeight: 950, color: C.umberPale, borderRight: `2px solid ${C.edge}`}}><Anchor size={19} color={C.umberPale} strokeWidth={2.4} />保留所有权买卖（仅动产）</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 20, fontWeight: 950, color: C.umberPale}}><Wallet size={19} color={C.umberPale} strokeWidth={2.4} />分期付款买卖（动产+不动产）</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 60, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>取回条件</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 19, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>价金违约+催告·但履约达<Soft color={C.teal}>75%</Soft>不得取回·不当处分遇善意第三人除外</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 19, fontWeight: 900, color: C.ink}}>欠付达总价款<Soft color={C.rust}>1/5</Soft>＋催告仍不付</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', borderTop: `2px solid ${C.edge}`, backgroundColor: C.creamDim, opacity: prog(frame, 110, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>取回方式</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>凭保留的所有权<Soft color={C.teal}>无需解约</Soft>·直接取回</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, color: C.ink}}><Soft color={C.rust}>先解除合同</Soft>·再取回</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 160, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`, backgroundColor: C.creamDim}}>取回后果</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>回赎期内可赎·不赎<Soft color={C.rust}>再卖变价受偿</Soft>多退少补</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, color: C.ink}}><Soft color={C.teal}>返还价款</Soft>扣除<Soft color={C.rust}>使用费·赔偿金</Soft>（恢复原状）</span>
              </div>
            </div>
            <div style={{fontSize: 20, fontWeight: 950, color: C.bronze}}>口诀：<Under color={C.rust} delay={220}>凭啥取回，按啥走</Under>——动产分期未必保留所有权·保留所有权未必分期</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="phone-case-verdict" style={{position: 'absolute', left: 0, top: 446, width: 1776, height: 322}}>
          <Panel tone={C.teal} watermark={<Gavel size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.teal} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>手机案 · 一部手机走两条账</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 19, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.bronze} toneBg={C.bronzePale}><span style={{fontSize: 18, fontWeight: 950, color: C.bronze}}>手机1万元·分10期·每期1000</span></Chip>
              <Chip tone={C.rust} toneBg={C.rustPale}><span style={{fontSize: 18, fontWeight: 950, color: C.rust}}>付清前甲保留所有权</span></Chip>
              <Chip tone={C.plumLike} toneBg={C.plumPale}><span style={{fontSize: 18, fontWeight: 950, color: C.plumLike}}>正常付5期·连欠3期·催要无果</span></Chip>
              <span>欠付3000 = 总价款的<Soft color={C.rust}>3/10 已超 1/5</Soft>；已付5000 = <Soft color={C.teal}>50% 未达 75%</Soft></span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.rust}`, backgroundColor: C.rustPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 200, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.rust, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.rust} strokeWidth={2.4} />按分期付款买卖问：能解除取回吗？</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}><Seal delay={260} tone={C.rust} size={17}>能</Seal> 欠付达<Soft color={C.rust}>1/5</Soft>·解除后取回手机·扣除使用费赔偿金后<Soft color={C.teal}>返还价款</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.teal}`, backgroundColor: C.tealPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 240, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.teal, display: 'flex', alignItems: 'center', gap: 8}}><Undo2 size={20} color={C.teal} strokeWidth={2.4} />按保留所有权买卖问：能行使取回权吗？</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink, lineHeight: 1.45}}><Seal delay={300} tone={C.teal} size={17}>能</Seal> 已付未达<Soft color={C.teal}>75%</Soft>·无需解约直接取回·乙不赎则<Soft color={C.rust}>再卖</Soft>多退少补</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
