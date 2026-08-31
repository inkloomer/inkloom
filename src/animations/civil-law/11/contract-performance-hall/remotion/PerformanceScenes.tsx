import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Coins, Gavel, Handshake, HeartHandshake, Scale, ShieldAlert, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  mist: '#3D5654',
  mistMid: '#4E6A66',
  pair: '#DCE8E4',
  pairPale: '#EBF2EF',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  apricot: '#D99A4E',
  apricotPale: '#F4E7D2',
  coralRed: '#C05B4A',
  coralPale: '#F2DDD8',
  ink: '#22302D',
  inkSoft: '#6E807B',
  tealLike: '#3E7A64',
  indigoLike: '#3A5578',
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

export const Path = ({color = C.apricot, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.mist,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 138px, rgba(220, 232, 228, 0.05) 138px 141px), repeating-linear-gradient(90deg, transparent 0 138px, rgba(0, 0, 0, 0.13) 138px 141px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.coralRed}, ${C.apricot}, ${C.pair})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(220, 232, 228, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.mistMid, borderLeft: `8px solid ${C.apricot}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.pairPale, letterSpacing: 2}}>民法 · 第11讲 · {code}</span>
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
          borderBottom: `2px solid ${C.apricot}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.pairPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.apricotPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.apricot : 'transparent',
              border: `2px solid ${C.apricot}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.mistMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(34, 48, 45, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.mistMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.mistMid, borderLeft: `6px solid ${tone}`, color: C.pairPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(217, 154, 78, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.apricot}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.apricot, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const DefenceTriadScene = () => {
  /* data-final-knowledge="pair-requirement" data-final-knowledge="equivalence-rule" data-final-knowledge="triad-table" data-final-knowledge="combined-case" */
  return (
    <Shell code="01" kicker="双务合同履行抗辩权" title="双务合同履行抗辩权">
      <div
        data-layout="three-defence-court-with-equivalence-scales"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="one-genuine-bilateral-pair-of-duties-is-required-for-any-defence,divisible-debts-defend-in-proportion-while-indivisible-defend-wholly,simultaneous-defenders-owe-no-breach-late-defenders-sue-breach,anxious-first-performers-may-rescue-by-proving-insecurity"
        data-focal-rule="three-defence-ranks-rise-in-order-simultaneous-then-late-then-anxious-first-performer"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="pair-requirement" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 168}}>
          <Panel tone={C.mistMid} watermark={<Scale size={110} color={C.mistMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.mistMid} icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />}>前提 · 一组「双务」认定</PanelTab>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink }}>双务合同具有<Soft color={C.apricot}>对待给付</Soft>关系——双方互负义务须构成<Under color={C.apricot} delay={120}>一组「双务」</Under>方有抗辩关系</div>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.coralRed} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coralRed }}>手机案：两个独立借用合同 → 并非一组双务 → 不能抗辩 ✗</span></Chip>
              <Chip tone={C.apricot} toneBg={C.apricotPale}><span style={{fontSize: 19, fontWeight: 950, color: C.apricot }}>时间要件：抗辩权人的债务已到期</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="equivalence-rule" style={{position: 'absolute', left: 0, top: 184, width: 1776, height: 160}}>
          <Panel tone={C.tealLike} watermark={<Scale size={120} color={C.tealLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.tealLike} icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />}>等价抗辩 · 可分与不可分（付 60 万案）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.tealLike} title="可分债务（100 箱货）：">
                抗辩数额与违约数额<Soft color={C.tealLike}>相适应</Soft>——只能拒绝交付 <Chip tone={C.tealLike} toneBg={C.pairPale}><span style={{fontSize: 20, fontWeight: 950, color: C.tealLike }}>40 箱</span></Chip>
              </IconChip>
              <IconChip icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.coralRed} title="不可分债务（一辆汽车）：">
                <Soft color={C.coralRed}>不适用</Soft>等价抗辩——可拒绝交付<Seal delay={160} size={17} tone={C.coralRed}>整辆车</Seal>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="triad-table" style={{position: 'absolute', left: 0, top: 360, width: 1776, height: 250}}>
          <Panel tone={C.indigoLike} watermark={<ShieldAlert size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<ShieldAlert size={24} color={C.pairPale} strokeWidth={2.2} />}>三件套对照 · 抗辩权人·条件·违约责任</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.tealLike} title="同时履行抗辩权（双方）：">
                双方债务到期·对方未履行 → 拒绝自己到期债务；<Seal delay={170} size={17} tone={C.tealLike}>均无</Seal>违约责任
              </IconChip>
              <IconChip icon={<ArrowRight size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.apricot} title="先履行抗辩权（后履行方）：">
                先履行方到期未履行 → 拒绝自己到期债务＋追究<Soft color={C.apricot}>现实违约</Soft>责任
              </IconChip>
              <IconChip icon={<ShieldAlert size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.coralRed} title="不安抗辩权（先履行方）：">
                能证明<Soft color={C.coralRed}>不安事由</Soft> → 拒绝自己到期债务；不恢复能力不提供担保 → <Soft color={C.coralRed}>解除</Soft>＋<Soft color={C.coralRed}>预期违约</Soft>责任
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="combined-case" style={{position: 'absolute', left: 0, top: 626, width: 1776, height: 142}}>
          <Panel tone={C.tealLike} watermark={<ArrowRight size={110} color={C.tealLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.tealLike} icon={<ArrowRight size={24} color={C.pairPale} strokeWidth={2.2} />}>两两结合案 · 预付款已付·余款未付</PanelTab>
            <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>乙交货日届至：预付款已付 → <Soft color={C.apricot}>不得依先履行抗辩权</Soft>拒绝；余款无力支付 → <Seal delay={160} size={19} tone={C.coralRed}>有权依不安抗辩权拒绝交货</Seal></span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ThirdPartyLanesScene = () => {
  /* data-final-knowledge="receiver-lane" data-final-knowledge="beneficiary-lane" data-final-knowledge="formative-power-rule" data-final-knowledge="cake-verdicts" */
  return (
    <Shell code="02" kicker="向第三人履行的合同" title="向第三人履行的合同">
      <div
        data-layout="receiver-beneficiary-lanes-with-tort-wall"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="mere-receivers-hold-no-claim-so-only-parties-sue-and-rescind,beneficiaries-claim-and-sue-directly-against-the-debtor,formative-powers-stay-with-the-original-creditor,refusal-flips-the-beneficiary-contract-back-to-own-contract"
        data-focal-rule="receiver-lanes-end-at-delivery-while-beneficiary-lanes-carry-real-claims-to-the-debtor"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="receiver-lane" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 250}}>
          <Panel tone={C.mistMid} watermark={<Users size={130} color={C.mistMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.mistMid} icon={<Users size={24} color={C.pairPale} strokeWidth={2.2} />}>代为受领 · 未约定第三人请求权</PanelTab>
            <IconChip icon={<Ban size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.coralRed} title="第三人地位：">
              第三人与债务人之间<Soft color={C.coralRed}>不存在</Soft>任何权利义务关系
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>蛋糕案：发霉变质 → 只有<Soft color={C.indigoLike}>甲</Soft>能追违约·<Soft color={C.indigoLike}>甲</Soft>能解除（解除权归合同当事人）</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="beneficiary-lane" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 250}}>
          <Panel tone={C.indigoLike} watermark={<Handshake size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Handshake size={24} color={C.pairPale} strokeWidth={2.2} />}>利他合同 · 第三人享有债权</PanelTab>
            <IconChip icon={<Handshake size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.indigoLike} title="乙丙之间：">
              第三人<Soft color={C.indigoLike}>直接</Soft>向债务人主张债权·追违约责任；债务人的<Soft color={C.tealLike2}>抗辩</Soft>可向第三人主张
            </IconChip>
            <IconChip icon={<Users size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.tealLike2} title="甲丙·甲乙之间：">
              无需第三人同意；拒绝受领 → 转为<Soft color={C.tealLike2}>束己合同</Soft>；解除权·撤销权·返还·赔偿均归<Soft color={C.indigoLike}>债权人甲</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="formative-power-rule" style={{position: 'absolute', left: 0, top: 266, width: 1776, height: 128}}>
          <Panel tone={C.tealLike} watermark={<Scale size={110} color={C.tealLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.tealLike} icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />}>核心逻辑 · 十万汽车案六问</PanelTab>
            <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>除「请求履行＋追违约责任」在<Soft color={C.indigoLike}>债务人×第三人</Soft>之间展开外——解除·撤销·返还·赔偿仍在<Soft color={C.tealLike}>债权人×债务人</Soft>之间</span>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="cake-verdicts" style={{position: 'absolute', left: 0, top: 410, width: 1776, height: 358}}>
          <Panel tone={C.apricot} watermark={<Handshake size={150} color={C.apricot} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.apricot} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>汽车案六连 · 甲乙卖车·价款债权设定给丙</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 19, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoLike} toneBg={C.pairPale}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>① 谁请求付款？→ 丙（直接主张）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.pairPale}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>② 谁解除？→ 甲（丙不享有解除权）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.pairPale}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>③ 谁撤销（乙胁迫）？→ 甲</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.pairPale}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>④ 撤销解除后向谁返还？→ 向甲</span></Chip>
            </div>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 19, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.coralRed} toneBg={C.coralPale}><span style={{fontSize: 18, fontWeight: 950, color: C.coralRed }}>⑤ 丙拒绝受领 → 利他转束己·甲请求向自己付款</span></Chip>
              <Chip tone={C.coralRed} toneBg={C.coralPale}><span style={{fontSize: 18, fontWeight: 950, color: C.coralRed }}>⑥ 丙迟延致乙损失 → 乙请求甲赔偿</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：代为受领<Soft color={C.coralRed}>两头空</Soft>·利他合同<Soft color={C.indigoLike}>真请求</Soft>——形成权<Soft color={C.tealLike}>永远留在债权人手里</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SurrogateScene = () => {
  /* data-final-knowledge="lawful-interest-fork" data-final-knowledge="surrogate-rights" data-final-knowledge="security-priority" data-final-knowledge="guarantor-exception" */
  return (
    <Shell code="03" kicker="第三人代为履行" title="第三人代为履行">
      <div
        data-layout="surrogate-rails-with-security-priority"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="lawful-interest-third-parties-may-perform-and-creditors-cannot-refuse,surrogates-gain-creditor-rights-without-harming-the-creditor,creditor-security-always-ranks-ahead-of-surrogate-security,guarantor-surrogates-follow-securing-liability-instead"
        data-focal-rule="surrogate-coins-roll-back-through-gold-rails-that-always-lose-to-the-creditors-own-security"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="lawful-interest-fork" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 286}}>
          <Panel tone={C.tealLike} watermark={<Handshake size={130} color={C.tealLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.tealLike} icon={<Handshake size={24} color={C.pairPale} strokeWidth={2.2} />}>合法利益第三人 · 债权人不得拒绝</PanelTab>
            <IconChip icon={<Coins size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.indigoLike} title="对债务人财产有利益：">
              财产权利将因强制执行<Soft color={C.indigoLike}>受损</Soft>者；债务人的<Soft color={C.indigoLike}>出资人·设立人·近亲属</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.tealLike} title="对第三担保人财产有利益：">
              担保人财产权利将受损者；<Soft color={C.tealLike}>第三担保人</Soft>自己
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="surrogate-rights" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 286}}>
          <Panel tone={C.indigoLike} watermark={<Coins size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Coins size={24} color={C.pairPale} strokeWidth={2.2} />}>代为履行的后果 · 赶走恶龙成为恶龙</PanelTab>
            <IconChip icon={<Coins size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.indigoLike} title="追偿权：">
              享有<Soft color={C.indigoLike}>债权人权利</Soft>——对债务人追偿，但<Soft color={C.seal}>不得损害</Soft>债权人利益
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.pairPale} strokeWidth={2.2} />} tone={C.tealLike} title="担保转移：">
              追偿权受债权人的<Soft color={C.tealLike}>担保权</Soft>担保
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>马小芸代偿 100 万案：甲的债权与两抵押权<Soft color={C.coralRed}>全部消灭</Soft>；小芸取得 100 万追偿权＋承受<Soft color={C.indigoLike}>两抵押权</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="security-priority" style={{position: 'absolute', left: 0, top: 302, width: 1776, height: 184}}>
          <Panel tone={C.seal} watermark={<Scale size={120} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.seal} icon={<Scale size={24} color={C.pairPale} strokeWidth={2.2} />}>担保竞存 · 债权人优先（代偿 80 万案）</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoLike} toneBg={C.pairPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>甲：剩 20 万债权·两抵押权</span></Chip>
              <Chip tone={C.tealLike} toneBg={C.pairPale}><span style={{fontSize: 19, fontWeight: 950, color: C.tealLike }}>小芸：80 万追偿权·两抵押权</span></Chip>
              <span>竞存时 → <Seal delay={190} size={18} tone={C.seal}>债权人的担保权先受偿</Seal>·小芸的<Soft color={C.seal}>后受偿</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="guarantor-exception" style={{position: 'absolute', left: 0, top: 502, width: 1776, height: 266}}>
          <Panel tone={C.apricot} watermark={<Gavel size={130} color={C.apricot} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.apricot} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>特殊例外 · 第三担保人代为履行</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.coralRed} title="直接适用：">
              「第三担保人<Soft color={C.coralRed}>承担担保责任</Soft>」的法定后果——不再走代为履行的追偿路线
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.tealLike} toneBg={C.pairPale}><span style={{fontSize: 19, fontWeight: 950, color: C.tealLike }}>四主角案：张三·李四·王五·赵六均为合法利益第三人 → 甲银行不得拒绝</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：合法利益<Soft color={C.tealLike}>不许拒</Soft>·代偿穿上<Soft color={C.indigoLike}>债权人甲胄</Soft>·担保竞存<Soft color={C.seal}>债权人先</Soft>·担保人代偿<Soft color={C.apricot}>走担保</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
