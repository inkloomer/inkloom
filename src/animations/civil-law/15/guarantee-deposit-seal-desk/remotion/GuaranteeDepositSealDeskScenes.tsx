import type {CSSProperties, ReactNode} from 'react';
import {
  Ban,
  Coins,
  Gavel,
  Link,
  Shield,
  ShieldCheck,
  Undo2,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  teapaper: '#C0AE8C',
  teapaperDeep: '#A6936F',
  teapaperMid: '#CEBEA0',
  xuan: '#F8F3E6',
  xuanDim: '#EFE8D6',
  roast: '#2F2A22',
  roastSoft: '#7E7562',
  vermilion: '#B3402E',
  vermilionPale: '#F4DCD5',
  patina: '#4F7A6A',
  patinaPale: '#DEEAE4',
  navy: '#37517A',
  navyPale: '#DFE6F0',
  ochre: '#B08D3F',
  ochrePale: '#F1E7C9',
  edge: '#C4B494',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 20,
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

export const LineH = ({
  delay = 0,
  tone,
  thickness = 4,
  span = 20,
  head = true,
  style,
}: {
  readonly delay?: number;
  readonly tone: string;
  readonly thickness?: number;
  readonly span?: number;
  readonly head?: boolean;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <span style={{position: 'absolute', ...style}}>
      <span style={{position: 'absolute', inset: 0, backgroundColor: tone, borderRadius: thickness / 2, transformOrigin: 'left center', scaleX: p}} />
      {head ? (
        <span
          style={{
            position: 'absolute',
            right: -9,
            top: '50%',
            translate: '0 -50%',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: `10px solid ${tone}`,
            opacity: p,
          }}
        />
      ) : null}
    </span>
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.teapaper,
        color: C.xuan,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle at 20% 15%, rgba(248, 243, 230, 0.14) 0%, transparent 40%), repeating-linear-gradient(90deg, transparent 0 142px, rgba(0, 0, 0, 0.05) 142px 144px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.vermilion}, ${C.ochre}, ${C.patina})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: `3px double rgba(47, 42, 34, 0.35)`}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.roast, borderLeft: `8px solid ${C.vermilion}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.xuan, letterSpacing: 2}}>民法 · 第15讲 · {code}</span>
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
          borderBottom: `2px solid ${C.vermilion}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.roast}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.roast, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.vermilion : 'transparent',
              border: `2px solid ${C.vermilion}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.vermilion, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.xuan, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.roast, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(166, 147, 111, 0.55)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.vermilion, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.roast, borderLeft: `6px solid ${tone}`, color: C.xuan, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.xuanDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.xuan}`, boxShadow: '0 0 0 2px rgba(179, 64, 46, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.roast, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.vermilion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.xuanDim, ink = C.roast}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const GuaranteeConceptScene = () => {
  /* data-final-knowledge="guarantee-structure" data-final-knowledge="guarantee-versus-join-and-transfer" data-final-knowledge="personal-versus-property-guarantee" */
  return (
    <Shell code="01" kicker="保证 · 概念三分辨" title="保证的概念与三分辨">
      <div
        data-layout="concept-fork-with-three-way-distinction"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="guarantee-is-a-third-party-promising-performance-when-the-principal-debtor-defaults,he-will-pay-if-he-defaults-joins-the-guarantee-while-we-both-owe-joins-the-debt-and-doubt-resolves-to-guarantee,debt-transfer-needs-creditor-consent-and-extinguishes-the-debt-while-guarantee-keeps-it-alive,specific-property-makes-a-property-guarantee-and-nonspecific-property-makes-a-personal-guarantee"
        data-focal-rule="guarantee-chains-a-third-party-behind-the-debtor-and-its-words-join-or-transfer-tests-turn-on-consent-extinction-and-property-specificity"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="guarantee-structure" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 176}}>
          <Panel tone={C.vermilion} watermark={<ShieldCheck size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<ShieldCheck size={24} color={C.xuan} strokeWidth={2.2} />}>保证（人保） · 三方两债</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>主债务人不<Soft color={C.vermilion}>履行</Soft>时，由<Soft color={C.vermilion}>保证人</Soft>（主债务人之外的第三人）履行主债务；基础＝保证人与债权人之间的<Soft color={C.vermilion}>保证合同</Soft></div>
            <div style={{display: 'flex', gap: 12}}>
              <Chip tone={C.navy} toneBg={C.navyPale} ink={C.navy}>主债：债权人 ↔ 债务人</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>从债（保证之债）：债权人 ↔ 保证人</Chip>
              <Chip tone={C.ochre} toneBg={C.ochrePale} ink={C.ochre}>债权人既享主债权，也享保证权</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={44} from="left" marker="guarantee-versus-join-and-transfer" style={{position: 'absolute', left: 0, top: 190, width: 1080, height: 436}}>
          <Panel tone={C.navy} watermark={<Gavel size={120} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.navy} icon={<Gavel size={24} color={C.xuan} strokeWidth={2.2} />}>保证 vs 债务加入 vs 债务转让</PanelTab>
            <IconChip icon={<ShieldCheck size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.navy} title="「他不还，我来还」：" style={{flex: 1}}>
              意思表示为债务人到期不履行时由第三人履行 → 属于<Soft color={C.navy}>保证</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.patina} title="「我和债务人一起还」：" style={{flex: 1}}>
              第三人与债务人<Soft color={C.patina}>均负履行义务</Soft> → 属于<Soft color={C.patina}>债务加入</Soft>（并存的债务承担）
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.vermilion} title="难以确定是保证还是债务加入：" style={{flex: 0.9}}>
              依法推定为<Seal delay={200} size={20}>保证</Seal>
            </IconChip>
            <IconChip icon={<Link size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.ochre} title="债务转让（免责的债务承担）：" style={{flex: 1.2}}>
              依据＝债务人与受让人的转让意思＋<Soft color={C.ochre}>债权人同意</Soft>；后果＝受让范围内债务人债务<Soft color={C.ochre}>消灭</Soft>——而保证责任<Soft color={C.navy}>不导致</Soft>债务人债务消灭
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="right" marker="personal-versus-property-guarantee" style={{position: 'absolute', left: 1094, top: 190, width: 682, height: 436}}>
          <Panel tone={C.patina} watermark={<Coins size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />}>人保 与 物保</PanelTab>
            <IconChip icon={<Users size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.patina} title="相同：" style={{flex: 0.9}}>
              第三人均作出<Soft color={C.patina}>担保的意思表示</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.navy} title="物保：" style={{flex: 1.1}}>
              担保人以<Soft color={C.navy}>特定财产</Soft>提供担保
            </IconChip>
            <IconChip icon={<UserRound size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.vermilion} title="人保：" style={{flex: 1.1}}>
              担保人以<Soft color={C.vermilion}>非特定财产</Soft>（全部责任财产）提供担保
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const GuaranteeLiabilityScene = () => {
  /* data-final-knowledge="full-versus-limited-sum" data-final-knowledge="joint-versus-general-lanes" data-final-knowledge="first-suit-defense-exceptions" data-final-knowledge="neglected-asset-relief" */
  return (
    <Shell code="02" kicker="保证责任 · 双重推定" title="保证责任的承担方式">
      <div
        data-layout="liability-lanes-with-pair-presumptions"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="full-amount-is-presumed-when-silence-covers-the-sum-while-limited-guarantees-cover-the-unpaid-rest,joint-guarantee-runs-parallel-and-general-guarantee-runs-sequential-with-silence-presuming-general,the-first-suit-defense-yields-to-missing-debtor-bankruptcy-insolvency-proof-and-written-waiver,lazy-creditors-free-the-general-guarantor-within-the-value-of-the-neglected-lead"
        data-focal-rule="two-silent-presumptions-shape-liability-silence-on-sum-means-full-amount-and-silence-on-order-means-general-with-first-suit-defense-and-its-four-exceptions"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="full-versus-limited-sum" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 220}}>
          <Panel tone={C.navy} watermark={<Coins size={110} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.navy} icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />}>全额保证 与 限额保证</PanelTab>
            <IconChip icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.navy} title="全额保证：" style={{flex: 0.9}}>
              责任额与主债务额<Soft color={C.navy}>相等</Soft>；未约定数额 → <Seal delay={150} size={20}>推定全额保证</Seal>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.patina} title="限额保证：" style={{flex: 1}}>
              责任额<Soft color={C.patina}>小于</Soft>主债务额；债务人部分清偿 → 保证人对<Soft color={C.patina}>未清偿部分</Soft>担责
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="joint-versus-general-lanes" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 220}}>
          <Panel tone={C.vermilion} watermark={<Link size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Link size={24} color={C.xuan} strokeWidth={2.2} />}>连带责任保证 与 一般保证</PanelTab>
            <IconChip icon={<Link size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.vermilion} title="连带责任保证：" style={{flex: 0.9}}>
              履行与担责<Soft color={C.vermilion}>并排</Soft>——无顺序性；合同有「债务人应当先承担责任」意思表示的 → <Soft color={C.navy}>一般保证</Soft>
            </IconChip>
            <IconChip icon={<Shield size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.navy} title="一般保证：" style={{flex: 1.1}}>
              债权人对债务人<Soft color={C.navy}>穷尽法律手段</Soft>后，保证人才对<Soft color={C.navy}>不能履行部分</Soft>担责；<Seal delay={200} size={20}>未约定方式 → 推定一般保证</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="first-suit-defense-exceptions" style={{position: 'absolute', left: 0, top: 234, width: 1080, height: 360}}>
          <Panel tone={C.patina} watermark={<Shield size={120} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Shield size={24} color={C.xuan} strokeWidth={2.2} />}>一般保证人的先诉抗辩权 · 四例外</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>未对债务人穷尽法律手段即请求一般保证人担责 → 保证人有权<Under color={C.patina} delay={140}>拒绝</Under>（先诉抗辩权）。例外——保证人<Soft color={C.warn}>不得主张</Soft>：</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 22, fontWeight: 880}}>① 债务人<Soft color={C.vermilion}>下落不明</Soft>且<Soft color={C.vermilion}>无财产</Soft>可供执行（人财两空）</span>
              <span style={{fontSize: 22, fontWeight: 880}}>② 法院已受理债务人<Soft color={C.vermilion}>破产案件</Soft>（宣告破产）</span>
              <span style={{fontSize: 22, fontWeight: 880}}>③ 有证据证明债务人财产<Soft color={C.vermilion}>不足以</Soft>履行全部债务或丧失<Soft color={C.vermilion}>履行能力</Soft>（告了白告）</span>
              <span style={{fontSize: 22, fontWeight: 880}}>④ 保证人以<Soft color={C.vermilion}>书面形式</Soft>向债权人明确<Soft color={C.vermilion}>放弃</Soft>先诉抗辩权（向无关人员作出不算）</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="neglected-asset-relief" style={{position: 'absolute', left: 1094, top: 234, width: 682, height: 360}}>
          <Panel tone={C.ochre} watermark={<Undo2 size={110} color={C.ochre} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.ochre} icon={<Undo2 size={24} color={C.xuan} strokeWidth={2.2} />}>债权人怠于执行财产线索</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>一般保证人在主债务届满后，向债权人提供债务人<Soft color={C.ochre}>可供执行财产的真实情况</Soft>；债权人<Soft color={C.warn}>放弃或怠于行使</Soft>致该财产不能被执行的</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900}}>→ 保证人在该<Under color={C.ochre} delay={220}>财产价值范围内</Under>可<Seal delay={250} size={20} tone={C.patina}>不再承担保证责任</Seal>（保护积极性）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const GuaranteePeriodScene = () => {
  /* data-final-knowledge="period-start-and-length" data-final-knowledge="exercise-method-split" data-final-knowledge="expired-signature-rule" data-final-knowledge="limitation-start-split" */
  return (
    <Shell code="03" kicker="保证期间 · 行使与时效" title="保证期间与保证诉讼时效">
      <div
        data-layout="period-clock-bank-with-exercise-methods"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="guarantee-periods-start-at-principal-maturity-and-highest-amount-starts-at-the-later-date,silence-or-nonsense-terms-settle-into-the-statutory-six-months-and-changed-terms-need-written-consent,joint-guarantee-needs-a-demand-on-the-guarantor-while-general-guarantee-needs-suit-on-the-debtor,expired-guarantees-revive-only-into-a-new-contract-when-the-guarantor-agrees-in-writing"
        data-focal-rule="periods-clock-from-maturity-settle-at-six-months-on-silence-and-demand-exercise-methods-then-limitations-run-from-demand-or-execution-completion"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="period-start-and-length" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 330}}>
          <Panel tone={C.vermilion} watermark={<Undo2 size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Undo2 size={24} color={C.xuan} strokeWidth={2.2} />}>保证期间 · 起算与长度</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>起算：自<Soft color={C.vermilion}>主债务履行期届满</Soft>之日；最高额保证 → 「债权确定期间届满日」与「最后到期债权履行期届满日」<Soft color={C.navy}>取后者</Soft></div>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone={C.navy} toneBg={C.navyPale} ink={C.navy}>有约定从其约定</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>未约定 → <span style={{fontSize: 30, fontWeight: 950}}>6个月</span></Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>早于/等于主债期、约定「本息还清为止」→ 视为没有约定 → 6个月</Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>主债期延长/缩短未经保证人<Soft color={C.warn}>书面同意</Soft> → 按<Under color={C.vermilion} delay={200}>原债期</Under>起算（丙书面同意才按新债期）</div>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="exercise-method-split" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 330}}>
          <Panel tone={C.navy} watermark={<Link size={110} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.navy} icon={<Link size={24} color={C.xuan} strokeWidth={2.2} />}>期间内行使保证权 · 方式两分</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.vermilion}>连带责任保证</Soft>：向<Soft color={C.vermilion}>保证人</Soft><Under color={C.vermilion} delay={140}>请求</Under>；起诉/仲裁后又撤诉，但副本<Soft color={C.pine}>已送达</Soft>保证人 → <Soft color={C.pine}>已行使</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.navy}>一般保证</Soft>：对<Soft color={C.navy}>债务人</Soft>提起<Under color={C.navy} delay={190}>诉讼或仲裁</Under>；撤回起诉/仲裁 → <Soft color={C.warn}>未行使</Soft>，期间继续计算</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>共同保证：须请求<Soft color={C.warn}>各个</Soft>保证人；漏请求部分 → 该保证人<Soft color={C.warn}>免责</Soft>，其他保证人丧失的分担请求权在<Soft color={C.warn}>不能追偿范围</Soft>内免责</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="expired-signature-rule" style={{position: 'absolute', left: 0, top: 344, width: 1080, height: 200}}>
          <Panel tone={C.patina} watermark={<Gavel size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Gavel size={24} color={C.xuan} strokeWidth={2.2} />}>期间届满后的签字 · 新合同？</PanelTab>
            <IconChip icon={<Ban size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.roastSoft} title="签字但未同意承担：" style={{flex: 1}}>
              仍认定保证责任<Soft color={C.roastSoft}>已经消灭</Soft>
            </IconChip>
            <IconChip icon={<ShieldCheck size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.patina} title="签字并同意承担：" style={{flex: 1}}>
              达成<Soft color={C.patina}>新保证合同</Soft>，保证人应当承担责任
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={140} from="right" marker="limitation-start-split" style={{position: 'absolute', left: 1094, top: 344, width: 682, height: 200}}>
          <Panel tone={C.ochre} watermark={<Coins size={100} color={C.ochre} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 4, padding: '12px 18px'}}>
            <PanelTab tone={C.ochre} icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />}>保证诉讼时效 · 起算（3年）</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>连带保证：自<Soft color={C.ochre}>请求保证人</Soft>之日起算</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>一般保证：自对债务人<Soft color={C.ochre}>执行完毕</Soft>之日；<Soft color={C.ochre}>终结裁定送达</Soft>之日；收到申请执行书<Soft color={C.ochre}>满1年</Soft>（债务人仍有财产可执行除外）；先诉抗辩例外情形自<Soft color={C.ochre}>知道或应当知道</Soft>之日</div>
          </Panel>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 0, top: 558, width: 1776, height: 210}}>
          <Panel tone={C.vermilion} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<ShieldCheck size={24} color={C.xuan} strokeWidth={2.2} />}>期间届满 · 功成身退表</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Link size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.vermilion} title="连带责任保证：" style={{flex: 1.2}}>
                请求保证人 → 期间不再计算；起诉副本已送达 → <Soft color={C.vermilion}>已行使</Soft>；共同保证漏请求 → 分担范围内免责
              </IconChip>
              <IconChip icon={<Shield size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.navy} title="一般保证：" style={{flex: 1.2}}>
                起诉/仲裁债务人；撤回 → <Soft color={C.navy}>未行使</Soft>，期间继续计算
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const DepositPenaltyScene = () => {
  /* data-final-knowledge="deposit-formation-and-identification" data-final-knowledge="deposit-sum-rules" data-final-knowledge="deposit-types-triple" data-final-knowledge="penalty-application-rules" */
  return (
    <Shell code="04" kicker="定金 · 罚则" title="定金与定金罚则">
      <div
        data-layout="deposit-counter-with-penalty-ratio-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="deposit-contracts-form-on-delivery-and-only-deposit-words-or-the-earnest-rule-name-it,delivery-controls-the-sum-which-caps-at-twenty-percent-of-the-principal-debt,breach-deposits-default-to-punishment-while-escape-deposits-buy-termination-and-forming-deposits-build-the-contract,the-penalty-doubles-or-forfeits-by-default-breaches-split-ratio-wise-and-mutual-breaches-mute-it"
        data-focal-rule="deposit-coins-form-on-delivery-identify-by-words-or-earnest-context-cap-at-twenty-percent-and-the-penalty-doubles-forfeits-or-splits-by-breach-shape"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="deposit-formation-and-identification" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 266}}>
          <Panel tone={C.vermilion} watermark={<Coins size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />}>定金 · 实践合同与识别</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>定金合同＝<Soft color={C.vermilion}>实践合同</Soft>，以<Under color={C.vermilion} delay={130}>定金的交付</Under>为生效条件；当事人即主债权债务双方</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>识别：有约定从其约定（<Soft color={C.vermilion}>「定金」字样</Soft>或明确<Soft color={C.vermilion}>定金罚则</Soft>内容）；以<Soft color={C.navy}>预约</Soft>为主合同、担保本约订立而支付的 → <Seal delay={200} size={20} tone={C.navy}>视为定金</Seal>；否则<Soft color={C.warn}>不是定金</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="deposit-sum-rules" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 266}}>
          <Panel tone={C.navy} watermark={<Gavel size={110} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.navy} icon={<Gavel size={24} color={C.xuan} strokeWidth={2.2} />}>定金数额 · 交付为准＋20%上限</PanelTab>
            <IconChip icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.navy} title="实际交付为准：" style={{flex: 0.9}}>
              多交或少交视为<Soft color={C.navy}>变更</Soft>定金合同，以<Soft color={C.navy}>交付额</Soft>为准
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.vermilion} title="强制比例：" style={{flex: 1.2}}>
              不得超过主债务标的额的<span style={{fontSize: 30, fontWeight: 950, color: C.vermilion}}>20%</span>；<Soft color={C.vermilion}>超出部分</Soft>不具有定金效力
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="deposit-types-triple" style={{position: 'absolute', left: 0, top: 280, width: 866, height: 266}}>
          <Panel tone={C.patina} watermark={<ShieldCheck size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<ShieldCheck size={24} color={C.xuan} strokeWidth={2.2} />}>定金三分类</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.patina}>违约定金</Soft>：以违约作为罚则条件；<Under color={C.patina} delay={140}>约定不明 → 推定违约定金</Under></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.navy}>解约定金</Soft>：以行使解除权为条件——以承受罚则为代价换取<Soft color={C.navy}>任意解除</Soft>权</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.ochre}>成约定金</Soft>：交付＝主合同成立要件；不交付 → 主合同不成立，但主要义务<Soft color={C.pine}>已履行且对方接受</Soft>的除外</div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="penalty-application-rules" style={{position: 'absolute', left: 910, top: 280, width: 866, height: 266}}>
          <Panel tone={C.ochre} watermark={<Coins size={110} color={C.ochre} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.ochre} icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />}>定金罚则 · 适用与限制</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.ochre}>守约方</Soft>有权请求；<Soft color={C.warn}>双方均违约</Soft> → 任何一方不得主张；一方<Soft color={C.pine}>轻微</Soft>另一方<Soft color={C.warn}>严重</Soft> → 轻微方有权主张；<Soft color={C.navy}>不可抗力</Soft> → 不构成违约不得主张</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>全部违约 → 按<span style={{fontSize: 30, fontWeight: 950, color: C.vermilion}}>100%</span>适用：接受定金方违约 → <Soft color={C.vermilion}>双倍返还</Soft>；支付定金方违约 → <Soft color={C.vermilion}>丧失定金</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>部分违约 → 按<Soft color={C.ochre}>违约比例</Soft>适用定金罚则</div>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 0, top: 560, width: 1776, height: 208}}>
          <Panel tone={C.vermilion} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Coins size={24} color={C.xuan} strokeWidth={2.2} />}>定金速记</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center', flexWrap: 'wrap'}}>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>实践合同 · 交付生效</Chip>
              <Chip tone={C.navy} toneBg={C.navyPale} ink={C.navy}>20% 上限 · 超出无定金效力</Chip>
              <Chip tone={C.patina} toneBg={C.patinaPale} ink={C.patina}>不明推定违约定金</Chip>
              <Chip tone={C.ochre} toneBg={C.ochrePale} ink={C.ochre}>成约定金：已履行且接受 → 主合同成立</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>罚则：双倍返还 / 丧失 / 按比例</Chip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

/* __APPEND__ */
