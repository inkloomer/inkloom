import type {CSSProperties, ReactNode} from 'react';
import {ArrowRightLeft, Ban, Coins, Crown, FileSignature, Gavel, Home, Replace, Scale, ScrollText, UserPlus, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  lapis: '#1D3B66',
  lapisMid: '#2A5286',
  billow: '#C9DFF2',
  billowPale: '#E3EEF7',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  goldWire: '#C9A13B',
  goldPale: '#F0E7C9',
  seal: '#B04A38',
  sealPale: '#F0DEDA',
  ink: '#1E2833',
  inkSoft: '#6E7C8A',
  indigoLike: '#3A5578',
  slateLike: '#48525C',
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

export const Path = ({color = C.goldWire, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.lapis,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 126px, rgba(201, 223, 242, 0.05) 126px 129px), repeating-linear-gradient(90deg, transparent 0 126px, rgba(0, 0, 0, 0.13) 126px 129px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.seal}, ${C.goldWire}, ${C.billow})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(201, 223, 242, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.lapisMid, borderLeft: `8px solid ${C.goldWire}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.billowPale, letterSpacing: 2}}>民法 · 第10讲 · {code}</span>
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
          borderBottom: `2px solid ${C.goldWire}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.billowPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.seal : 'transparent',
              border: `2px solid ${C.seal}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.lapisMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(30, 40, 51, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.lapisMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.lapisMid, borderLeft: `6px solid ${tone}`, color: C.billowPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(201, 161, 59, 0.45)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.goldWire, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const CreditAssignmentScene = () => {
  /* data-final-knowledge="assignment-definition" data-final-knowledge="notice-gate-rule" data-final-knowledge="fabricated-credit-rule" data-final-knowledge="partial-consequence" */
  return (
    <Shell code="01" kicker="债权转让 · 一签合同二通知" title="债权转让">
      <div
        data-layout="one-sign-one-notice-gate-with-verdicts"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-assignment-contract-moves-the-credit-at-its-own-formation,notice-gates-the-contract-against-the-debtor-not-the-contract-itself,unrevoked-notice-keeps-payment-to-the-assignee-correct,partial-assignment-forms-quota-claims-and-debt-stays-put"
        data-focal-rule="the-credit-chip-rides-the-contract-at-once-but-touches-the-debtor-only-through-the-notice-gate"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="assignment-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.lapisMid} watermark={<ArrowRightLeft size={110} color={C.lapisMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.lapisMid} icon={<ArrowRightLeft size={24} color={C.billowPale} strokeWidth={2.2} />}>债权转让（债权让与）· 一签合同二通知</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>债权人与受让人订立<Soft color={C.lapisMid}>债权让与合同</Soft>，将其对债务人的债权<Soft color={C.seal}>转让</Soft>给受让人，并<Under color={C.seal} delay={120}>通知</Under>债务人</span>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="notice-gate-rule" style={{position: 'absolute', left: 0, top: 128, width: 1776, height: 238}}>
          <Panel tone={C.indigoLike} watermark={<ScrollText size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<ScrollText size={24} color={C.billowPale} strokeWidth={2.2} />}>两道节点 · 债权是否转让看合同</PanelTab>
            <div style={{position: 'relative', height: 112}}>
              <div style={{position: 'absolute', left: 0, top: 34}}>
                <Chip tone={C.lapisMid} toneBg={C.billowPale}><span style={{fontSize: 22, fontWeight: 950, color: C.lapisMid }}>债权转让合同·成立时生效</span></Chip>
              </div>
              <Path color={C.goldWire} delay={70} span={20} style={{position: 'absolute', left: 320, top: 66, width: 220, height: 4}} />
              <Mover delay={76} span={22} fromX={0} toX={220} fadeAt={136} style={{position: 'absolute', left: 20, top: 34, zIndex: 2}}>
                <Chip tone={C.lapisMid} toneBg={C.billowPale}><span style={{fontSize: 21, fontWeight: 950, color: C.lapisMid }}>债权即转移</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 548, top: 24, border: `3px solid ${C.goldWire}`, borderRadius: 12, padding: '8px 16px', backgroundColor: C.cream, boxShadow: '0 0 16px rgba(201, 161, 59, 0.35)'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.goldWire }}>通知闸门 · 到达债务人</span>
              </div>
              <div style={{position: 'absolute', left: 548, top: 72, fontSize: 20, fontWeight: 900, color: C.inkSoft }}>＝合同<Soft color={C.seal}>对债务人</Soft>生效的条件（非合同生效条件）；受让人即有权请求履行</div>
              <div style={{position: 'absolute', right: 0, top: 10, width: 430, display: 'flex', flexDirection: 'column', gap: 5, fontSize: 20, fontWeight: 900, color: C.ink }}>
                <span>方式：口头·书面；诉讼仲裁中送达起诉状·仲裁申请书副本</span>
                <span>未及时通知的损失 → 债务人有权从债权数额中<Soft color={C.seal}>扣除</Soft></span>
                <span>撤销通知：须经<Soft color={C.lapisMid}>受让人同意</Soft></span>
              </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 19, fontWeight: 950, color: C.seal }}>未通知案：丙仍享有债权 ✓·乙向甲还款＝对象正确·债务消灭</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.billowPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>丙只能向甲主张返还不当得利</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.billowPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>未撤销通知·仅主张合同不成立无效 → 债务人向受让人履行＝正确</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="fabricated-credit-rule" style={{position: 'absolute', left: 0, top: 382, width: 866, height: 204}}>
          <Panel tone={C.seal} watermark={<Ban size={130} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.seal} icon={<Ban size={24} color={C.billowPale} strokeWidth={2.2} />}>虚构的债权转让</PanelTab>
            <IconChip icon={<Ban size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="原则：">
              债务人<Soft color={C.seal}>不承担</Soft>履行责任
            </IconChip>
            <IconChip icon={<FileSignature size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.lapisMid} title="禁反言：">
              债务人向受让人<Soft color={C.lapisMid}>确认</Soft>债权存在后，不得以债权<Soft color={C.seal}>不存在</Soft>拒绝履行——<Under color={C.seal} delay={160}>除外</Under>：受让人知道或应当知道（虚假意思表示）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="right" marker="partial-consequence" style={{position: 'absolute', left: 910, top: 382, width: 866, height: 204}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.billowPale} strokeWidth={2.2} />}>转让后果 · 机器案（转 3000 价金）</PanelTab>
            <IconChip icon={<Users size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="部分转让：">
              甲丙对乙按 <Chip tone={C.indigoLike} toneBg={C.billowPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>7:3</span></Chip> 形成<Soft color={C.indigoLike}>按份债权</Soft>
            </IconChip>
            <IconChip icon={<Home size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="债务未转让：">
              双务合同中债权让与不导致债务转移——交付机器的债务仍由<Seal delay={170} size={17} tone={C.seal}>甲承担</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const JoinReleaseForkScene = () => {
  /* data-final-knowledge="join-limb" data-final-knowledge="release-limb" data-final-knowledge="wording-distinction" data-final-knowledge="three-party-nature" */
  return (
    <Shell code="02" kicker="债务加入 vs 债务转让" title="债务加入与债务转让">
      <div
        data-layout="join-release-fork-with-consent-gate"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="joining-walks-in-beside-the-debtor-and-shares-the-debt-jointly,release-replaces-the-debtor-only-after-the-creditor-consents,silence-after-cure-counts-as-refusal-on-the-release-fork,unclear-intent-defaults-to-suretyship-not-joining"
        data-focal-rule="the-joiner-walks-in-beside-the-debtor-while-the-release-chip-must-pass-the-creditor-consent-gate"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="join-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 380}}>
          <Panel tone={C.indigoLike} watermark={<UserPlus size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<UserPlus size={24} color={C.billowPale} strokeWidth={2.2} />}>债务加入 · 并存的债务承担</PanelTab>
            <IconChip icon={<UserPlus size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="概念与生效：">
              第三人加入债务·债务人债务<Soft color={C.indigoLike}>并不消灭</Soft>；生效＝通知<Under color={C.indigoLike} delay={130}>到达债权人</Under>（合理期间内债权人<Soft color={C.seal}>拒绝</Soft>的除外）
            </IconChip>
            <IconChip icon={<Users size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="后果：">
              加入人在加入范围内（全部·部分）对债权人承担<Soft color={C.seal}>连带债务</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.goldWire} title="追偿（刺猬）：">
              履行后有权向债务人<Soft color={C.goldWire}>追偿</Soft>——但债务人对债权人的<Soft color={C.indigoLike}>抗辩权</Soft>可对加入人<Soft color={C.seal}>主张</Soft>（30 万加入案：质量不符 → 乙可拒绝丙的追偿）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="release-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 380}}>
          <Panel tone={C.seal} watermark={<Replace size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.seal} icon={<Replace size={24} color={C.billowPale} strokeWidth={2.2} />}>债务转让 · 免责的债务承担</PanelTab>
            <IconChip icon={<Replace size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="概念与生效：">
              债务人与受让人订立转让合同（<Soft color={C.seal}>一签合同二同意</Soft>）；承担范围内原债务人债务<Soft color={C.seal}>消灭</Soft>
            </IconChip>
            <div style={{position: 'relative', height: 104}}>
              <div style={{position: 'absolute', left: 0, top: 8, fontSize: 20, fontWeight: 950, color: C.ink }}>转让合同成立 → <Soft color={C.seal}>效力待定</Soft></div>
              <div style={{position: 'absolute', left: 0, top: 40}}>
                <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>债权人同意 → 自始有效·受让人成新债务人</span></Chip>
              </div>
              <div style={{position: 'absolute', left: 0, top: 76}}>
                <Chip tone={C.indigoLike} toneBg={C.billowPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>拒绝 → 自始无效·催告后默示＝拒绝</span></Chip>
              </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoLike} toneBg={C.billowPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>部分转让 → 债务人·受让人按份债务（乙丙 7:3）</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 19, fontWeight: 950, color: C.seal }}>债权不转移——债权主体不变</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="wording-distinction" style={{position: 'absolute', left: 0, top: 396, width: 866, height: 372}}>
          <Panel tone={C.goldWire} watermark={<Scale size={140} color={C.goldWire} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.goldWire} icon={<Scale size={24} color={C.bone} strokeWidth={2.2} />}>债务加入 vs 保证 · 意思表示区分</PanelTab>
            <IconChip icon={<UserPlus size={24} color={C.bone} strokeWidth={2.2} />} tone={C.indigoLike} title="债务加入：">
              以<Soft color={C.indigoLike}>成为债务人</Soft>为内容——口诀「<Soft color={C.indigoLike}>我也是债务人</Soft>」
            </IconChip>
            <IconChip icon={<Crown size={24} color={C.bone} strokeWidth={2.2} />} tone={C.seal} title="保证：">
              以承担<Soft color={C.seal}>担保责任</Soft>为内容——口诀「<Soft color={C.seal}>他不还，我还</Soft>」
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>第三人意思表示<Soft color={C.seal}>不明确</Soft>时 → 视为<Under color={C.seal} delay={170}>保证</Under></div>
          </Panel>
        </Enter>
        <Enter delay={120} from="right" marker="three-party-nature" style={{position: 'absolute', left: 910, top: 396, width: 866, height: 372}}>
          <Panel tone={C.indigoLike} watermark={<Replace size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Replace size={24} color={C.billowPale} strokeWidth={2.2} />}>三方约定定性 · 乙欠甲 100 万·丙欠乙 100 万</PanelTab>
            <IconChip icon={<Replace size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="约定① 丙向甲还 100 万借款：">
              <Seal delay={170} size={18} tone={C.seal}>债务转让</Seal>——乙将对甲的借款债务转让给丙·甲表示同意
            </IconChip>
            <IconChip icon={<ArrowRightLeft size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="约定② 丙向甲还 100 万货款：">
              <Seal delay={200} size={18} tone={C.indigoLike}>债权转让</Seal>——乙将对丙的货款债权转让给甲·并通知甲
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>辨析锚：看「谁的方向」——<Soft color={C.seal}>还我欠的＝债务转让</Soft>·<Soft color={C.indigoLike}>还别人欠我的＝债权转让</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ContinuityScene = () => {
  /* data-final-knowledge="defence-rails" data-final-knowledge="offset-precondition" data-final-knowledge="offset-time-rules" data-final-knowledge="continuity-table" */
  return (
    <Shell code="03" kicker="抗辩权与抵销权 · 延续对照" title="抗辩权延续与抵销权延续">
      <div
        data-layout="continuity-rails-with-offset-block"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="defence-claims-ride-across-both-assignment-and-release,offset-claims-ride-assignment-only-and-die-on-release,assignment-offset-needs-maturity-before-notice-or-earlier-due,same-contract-offsets-survive-even-late-maturity"
        data-focal-rule="defence-rails-carry-across-both-transfers-while-the-offset-rail-breaks-on-debtor-swaps"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="defence-rails" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 300}}>
          <Panel tone={C.indigoLike} watermark={<FileSignature size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<FileSignature size={24} color={C.billowPale} strokeWidth={2.2} />}>抗辩权延续 · 前提＝原享有抗辩权</PanelTab>
            <IconChip icon={<ArrowRightLeft size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="债权转让＋通知：">
              债务人可继续对<Soft color={C.indigoLike}>受让人</Soft>主张抗辩权（机器瑕疵案：乙的先履行抗辩权 → 拒付丙）
            </IconChip>
            <IconChip icon={<Replace size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="债务转让＋同意：">
              受让人可继续对<Soft color={C.seal}>债权人</Soft>主张抗辩权（丙可对甲主张乙的先履行抗辩）
            </IconChip>
            <IconChip icon={<Users size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.goldWire} title="双转让：">
              债务受让人可继续对<Soft color={C.goldWire}>债权受让人</Soft>主张；诉讼中可列<Soft color={C.indigoLike}>原债权人/原债务人</Soft>为第三人
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="offset-precondition" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 300}}>
          <Panel tone={C.seal} watermark={<Ban size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.seal} icon={<Ban size={24} color={C.billowPale} strokeWidth={2.2} />}>抵销权前提 · 期限利益</PanelTab>
            <IconChip icon={<Coins size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="要件：">
              ① 债务人在另一法律关系中对债权人享有<Soft color={C.indigoLike}>债权</Soft> ② 该债权<Soft color={C.seal}>已经到期</Soft>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.goldWire} title="为何须到期：">
              强行抵销＝变相强迫对方<Soft color={C.seal}>提前还款</Soft>——剥夺其<Soft color={C.seal}>期限利益</Soft>；主动债权须到期即可（用未到期债务抵已到期＝自愿放弃期限利益·允许）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="offset-time-rules" style={{position: 'absolute', left: 0, top: 316, width: 1776, height: 266}}>
          <Panel tone={C.lapisMid} watermark={<ArrowRightLeft size={140} color={C.lapisMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.lapisMid} icon={<ArrowRightLeft size={24} color={C.billowPale} strokeWidth={2.2} />}>债权转让中的抵销权延续 · 时间比对（8/20 付价款·转让通知案）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.jadeLike}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.jadeLike }}>先到期 · 后通知（8/20 到期·8/30 通知）→ 绝对延续</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>通知前已实质取得对原债权人的抵销权 → 通知到达时<Seal delay={190} size={17} tone={C.jadeLike}>无条件延续</Seal>至受让人（乙自 8/30 可对丙抵销）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.seal}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>先通知 · 后到期（8/10 通知）→ 条件延续</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>通知时未到期 → 比两笔债权<Soft color={C.seal}>到期日</Soft>：己方 ≤ 转让债权 → <Seal delay={220} size={17} tone={C.jadeLike}>可抵销</Seal>（保护合理期待）；己方晚于 → 不可——<Soft color={C.indigoLike}>同一合同</Soft>所生例外仍可抵</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="continuity-table" style={{position: 'absolute', left: 0, top: 598, width: 1776, height: 170}}>
          <Panel tone={C.goldWire} watermark={<Scale size={120} color={C.goldWire} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.goldWire} icon={<Scale size={24} color={C.bone} strokeWidth={2.2} />}>延续对照 · 记忆口诀</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 6, fontSize: 21, fontWeight: 900, color: C.ink }}>
              <span>债权转让＋通知：抗辩权<Seal delay={170} size={17} tone={C.indigoLike}>延续</Seal>｜抵销权<Seal delay={200} size={17} tone={C.indigoLike}>延续</Seal></span>
              <span>债务转让＋同意：抗辩权<Seal delay={230} size={17} tone={C.indigoLike}>延续</Seal>｜抵销权<Seal delay={260} size={17}>不延续</Seal>——<Soft color={C.seal}>债权转让双延续，债务转让唯抗辩</Soft></span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const NonTransferableScene = () => {
  /* data-final-knowledge="nature-seal" data-final-knowledge="agreement-split" data-final-knowledge="money-liquidity-rule" data-final-knowledge="statute-seal" */
  return (
    <Shell code="04" kicker="不得转让的债权与债务" title="不得转让的三类封印">
      <div
        data-layout="sealed-stack-series-with-agreement-split"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="nature-seals-personal-and-waged-claims-to-their-holders,agreement-binds-internally-as-breach-and-guards-only-bona-fide-outsiders,money-claims-are-so-liquid-that-no-agreement-binds-anyone,statute-forbids-lone-security-assignment-and-unapproved-contracts"
        data-focal-rule="money-drafts-never-seal-while-nature-and-statute-papers-stay-sealed-shut"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="nature-seal" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 400}}>
          <Panel tone={C.seal} watermark={<Ban size={130} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.seal} icon={<Ban size={24} color={C.billowPale} strokeWidth={2.2} />}>壹 · 根据性质不得转让</PanelTab>
            <IconChip icon={<Users size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="特定人基础：">
              基于<Soft color={C.indigoLike}>人身信任</Soft>所生；<Soft color={C.indigoLike}>不作为</Soft>债务及对应债权
            </IconChip>
            <IconChip icon={<Crown size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="特定身份基础：">
              基于<Soft color={C.seal}>家庭身份</Soft>·<Soft color={C.seal}>社会身份</Soft>所生
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.goldWire} title="血汗基础：">
              基于<Soft color={C.goldWire}>人身损害</Soft>所生；<Soft color={C.goldWire}>劳动工资</Soft>债权债务
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>核心原因：<Soft color={C.seal}>人身专属性</Soft>——不得与债权人·债务人分离</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="up" marker="agreement-split" style={{position: 'absolute', left: 605, top: 0, width: 566, height: 400}}>
          <Panel tone={C.goldWire} watermark={<FileSignature size={130} color={C.goldWire} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.goldWire} icon={<FileSignature size={24} color={C.bone} strokeWidth={2.2} />}>贰 · 约定不得转让</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateLike} title="内部效力：">
              违反约定转让 → 向债务人承担<Soft color={C.slateLike}>违约责任</Soft>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.indigoLike} title="非金钱债权：">
              禁转约定<Soft color={C.indigoLike}>不得对抗善意第三人</Soft>——善意＝受让时不知道该约定
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.bone} strokeWidth={2.2} />} tone={C.seal} title="金钱债权：">
              <Seal delay={180} size={18} tone={C.seal}>不得对抗任何第三人</Seal>——<Soft color={C.seal}>流通性</Soft>极强
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>电脑案：交货债权（非金钱）→ 看丙善意与否；价金债权（金钱）→ 乙<Soft color={C.seal}>不能拒绝</Soft>向丙付款</div>
          </Panel>
        </Enter>
        <Enter delay={64} from="right" marker="statute-seal" style={{position: 'absolute', left: 1210, top: 0, width: 566, height: 400}}>
          <Panel tone={C.indigoLike} watermark={<Gavel size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Gavel size={24} color={C.billowPale} strokeWidth={2.2} />}>叁 · 依照法律规定不得转让</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="强制性规定：">
              法律<Soft color={C.seal}>禁止转让</Soft>的债权·债务，不得转让
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.seal} title="常见情形①：">
              主债权人在保留主债权的情况下，对外<Soft color={C.seal}>单独转让担保权</Soft>
            </IconChip>
            <IconChip icon={<FileSignature size={24} color={C.billowPale} strokeWidth={2.2} />} tone={C.indigoLike} title="常见情形②：">
              经批准生效的合同，一方<Soft color={C.indigoLike}>未经批准</Soft>即订立债权让与·债务承担合同
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" style={{position: 'absolute', left: 0, top: 416, width: 1776, height: 352}}>
          <Panel tone={C.lapisMid} watermark={<Coins size={140} color={C.lapisMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.lapisMid} icon={<Coins size={24} color={C.billowPale} strokeWidth={2.2} />}>封印总览 · 三枚印章</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.seal}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.seal }}>性质封印 · 天生不可离</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>人身信任·不作为·家庭社会身份·人身损害·劳动工资</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.goldWire}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.goldWire }}>约定封印 · 对内违约·对外看善意</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>非金钱护善意第三人·金钱谁都拦不住（流通性）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.indigoLike}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.indigoLike }}>法定封印 · 强制规定硬拦</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>担保权不得单独转让·批准生效合同未经批准不得让与</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：性质<Soft color={C.seal}>天生</Soft>·约定<Soft color={C.goldWire}>半拦</Soft>（金钱全不拦）·法定<Soft color={C.indigoLike}>硬拦</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
