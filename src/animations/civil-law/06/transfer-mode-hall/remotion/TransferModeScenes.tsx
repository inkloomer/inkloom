import type {CSSProperties, ReactNode} from 'react';
import {Ban, Car, Coins, Eye, FileSignature, Gavel, Landmark, Scale, ScrollText, Shield, Stamp, Truck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  navy: '#28455E',
  navyMid: '#3A5F7D',
  powder: '#C3D6E0',
  powderPale: '#E2ECF1',
  sand: '#F4EFE1',
  sandDim: '#EAE3D0',
  edge: '#C6BFA9',
  vermilion: '#B04A38',
  vermilionPale: '#F2E0DB',
  olive: '#7A6C34',
  olivePale: '#EAE4CC',
  ink: '#262B33',
  inkSoft: '#68707C',
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.navy,
        color: C.sand,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 176px, rgba(255, 255, 255, 0.04) 176px 179px), repeating-linear-gradient(0deg, transparent 0 176px, rgba(0, 0, 0, 0.11) 176px 179px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.vermilion}, ${C.olive}, ${C.powder})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(195, 214, 224, 0.35)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.navyMid, borderLeft: `8px solid ${C.vermilion}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.powderPale, letterSpacing: 2}}>民法 · 第6讲 · {code}</span>
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
          borderBottom: `2px solid ${C.olive}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.powderPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.olivePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
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

export const Panel = ({children, marker, tone = C.navyMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.sand, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(38, 43, 51, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.navyMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.navyMid, borderLeft: `6px solid ${tone}`, color: C.powderPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.sandDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.sand}`, boxShadow: `0 0 0 2px rgba(122, 108, 52, 0.5)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
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
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.olive, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.sandDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const PublicityAppearanceScene = () => {
  /* data-final-knowledge="property-change-meaning" data-final-knowledge="publicity-methods" data-final-knowledge="appearance-limit" data-final-knowledge="looks-like-verdicts" */
  return (
    <Shell code="01" kicker="物权变动 · 公示方法" title="公示与权利外观">
      <div
        data-layout="appearance-reality-split-with-method-gate"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="property-change-covers-creation-alteration-and-extinction,contract-based-changes-demand-publicity-by-delivery-or-registration,delivery-and-registration-show-appearance-not-real-ownership,the-third-party-sees-that-it-looks-like-his-not-that-it-is-his"
        data-focal-rule="delivery-and-registration-show-the-appearance-of-property-not-its-real-belonging"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="property-change-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128}}>
          <Panel tone={C.navyMid} watermark={<FileSignature size={120} color={C.navyMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.navyMid} icon={<FileSignature size={24} color={C.powderPale} strokeWidth={2.2} />}>物权变动 · 基于合同</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
              <Chip tone={C.navyMid} toneBg={C.powderPale} ink={C.navy}>物权变动 ＝ 产生 · 变更 · 消灭</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>引起事实多样：</span>
              <Chip tone={C.olive} toneBg={C.olivePale}>民事法律行为</Chip>
              <Chip tone={C.olive} toneBg={C.olivePale}>事实行为</Chip>
              <Chip tone={C.olive} toneBg={C.olivePale}>事件</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>→ 合同引起变动（买卖·抵押）必须<Soft color={C.vermilion}>公示</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="publicity-methods" style={{position: 'absolute', left: 0, top: 144, width: 1776, height: 168}}>
          <Panel tone={C.olive} watermark={<Stamp size={130} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.olive} icon={<Stamp size={24} color={C.powderPale} strokeWidth={2.2} />}>公示方式 · 主要有二</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Truck size={26} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="交付（动产）：">
                动产<Soft color={C.navyMid}>所有权</Soft>的转移 · 动产<Soft color={C.navyMid}>质权</Soft>的设立
              </IconChip>
              <IconChip icon={<ScrollText size={26} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="登记（不动产）：">
                不动产物权变动的<Soft color={C.vermilion}>法定公示方式</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="appearance-limit" style={{position: 'absolute', left: 0, top: 328, width: 866, height: 440}}>
          <Panel tone={C.vermilion} watermark={<Eye size={150} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Eye size={24} color={C.powderPale} strokeWidth={2.2} />}>权利外观 · 第三人视角</PanelTab>
            <IconChip icon={<Truck size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="交付展现：">
              <Soft color={C.navyMid}>占有</Soft>的外观
            </IconChip>
            <IconChip icon={<ScrollText size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="登记展现：">
              <Soft color={C.vermilion}>登记</Soft>的外观
            </IconChip>
            <div data-final-knowledge="looks-like-verdicts" style={{display: 'flex', flexDirection: 'column', gap: 9, marginTop: 'auto'}}>
              <IconChip icon={<Landmark size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="房屋 A 登记在甲名下：">
                是甲的，还是<Under color={C.olive} delay={150}>看起来像是</Under>甲的？→ <Seal delay={170} size={19}>看起来像是甲的</Seal>
              </IconChip>
              <IconChip icon={<Coins size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="电脑 B 在甲占有之下：">
                是甲的，还是<Under color={C.olive} delay={190}>看起来像是</Under>甲的？→ <Seal delay={210} size={19}>看起来像是甲的</Seal>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="right" style={{position: 'absolute', left: 910, top: 328, width: 866, height: 440}}>
          <Panel tone={C.navyMid} watermark={<Ban size={150} color={C.navyMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.navyMid} icon={<Ban size={24} color={C.powderPale} strokeWidth={2.2} />}>外观的局限 · 不是真实归属</PanelTab>
            <IconChip icon={<Eye size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="从第三人角度以观：">
              交付、登记所展现的是<Soft color={C.vermilion}>物权的外观</Soft>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="而非：">
              真实的<Soft color={C.navyMid}>物权归属</Soft>——「看起来像」<Under color={C.navyMid} delay={160}>不等于</Under>「就是」
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '10px 0'}}>
              <Chip tone={C.navyMid} toneBg={C.powderPale} ink={C.navy}><span style={{fontSize: 26, fontWeight: 950}}>外观（占有·登记）</span></Chip>
              <span style={{fontSize: 30, fontWeight: 950, color: C.vermilion}}>≠</span>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale}><span style={{fontSize: 26, fontWeight: 950, color: C.vermilion}}>真实归属</span></Chip>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：第三人看<Soft color={C.vermilion}>外观</Soft>交易——是「<Soft color={C.vermilion}>看起来像</Soft>」，不是「<Soft color={C.navyMid}>确实是</Soft>」</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const FormationOppositionScene = () => {
  /* data-final-knowledge="formation-limb" data-final-knowledge="opposition-limb" data-final-knowledge="default-and-exceptions" data-final-knowledge="chattel-mortgage-verdict" */
  return (
    <Shell code="02" kicker="变动原则 · 成立与对抗" title="公示成立原则与公示对抗原则">
      <div
        data-layout="twin-formation-opposition-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="formation-makes-publicity-a-precondition-of-property-change,opposition-makes-the-contract-itself-change-the-property,formation-rule-defaults-while-opposition-covers-three-exceptions,mortgage-chattel-contract-grants-the-right-but-not-the-defence"
        data-focal-rule="formation-is-the-default-rule-while-opposition-applies-only-to-three-statutory-exceptions"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="formation-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 388}}>
          <Panel tone={C.navyMid} watermark={<Scale size={140} color={C.navyMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.navyMid} icon={<Scale size={24} color={C.powderPale} strokeWidth={2.2} />}>公示成立原则 · 原则</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="合同生效：">
              仅引起<Soft color={C.navyMid}>债权关系</Soft>的产生——受让人未取得物权，只享有<Soft color={C.navyMid}>债权请求权</Soft>
            </IconChip>
            <IconChip icon={<Stamp size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="如约交付·登记：">
              合同<Soft color={C.olive}>履行</Soft> ＋ 物权<Soft color={C.olive}>变动</Soft>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="未如约交付·登记：">
              合同<Soft color={C.vermilion}>未履行</Soft>＋物权<Soft color={C.vermilion}>未变动</Soft>→ 构成<Seal delay={160} size={19} tone={C.vermilion}>违约责任</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>案例：房屋 A 订约未过户 → 乙<Soft color={C.vermilion}>未取得</Soft>所有权 · <Soft color={C.navyMid}>有权</Soft>请求过户</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="opposition-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 388}}>
          <Panel tone={C.vermilion} watermark={<Shield size={140} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Shield size={24} color={C.powderPale} strokeWidth={2.2} />}>公示对抗原则 · 例外</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="合同生效：">
              物权<Soft color={C.vermilion}>即发生变动</Soft>——不以公示为变动要件
            </IconChip>
            <IconChip icon={<ScrollText size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="办理登记：">
              已变动的物权<Soft color={C.olive}>可以对抗</Soft>第三人
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="未办登记：">
              已变动的物权<Under color={C.navyMid} delay={150}>不得对抗</Under><Soft color={C.navyMid}>善意第三人</Soft>
            </IconChip>
            <div data-final-knowledge="chattel-mortgage-verdict" style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>案例：动产抵押未登记 → 乙<Soft color={C.vermilion}>享有</Soft>抵押权 · <Seal delay={190} size={19}>不具有对抗效力</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="default-and-exceptions" style={{position: 'absolute', left: 0, top: 404, width: 1776, height: 364}}>
          <Panel tone={C.olive} watermark={<ScrollText size={150} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.olive} icon={<ScrollText size={24} color={C.powderPale} strokeWidth={2.2} />}>适用逻辑 · 以公示成立为原则，以公示对抗为例外</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap'}}>
              <Chip tone={C.navyMid} toneBg={C.powderPale} ink={C.navy}><span style={{fontSize: 24, fontWeight: 950}}>原则 · 公示成立</span></Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>凡不属于例外与特殊情形的，均属公示成立</span>
            </div>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Stamp size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="例外① 动产抵押：">
                登记是<Soft color={C.vermilion}>对抗</Soft>要件
              </IconChip>
              <IconChip icon={<Users size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="例外② 土地承包经营权的流转：">
                与第三人交易时<Soft color={C.vermilion}>登记对抗</Soft>
              </IconChip>
              <IconChip icon={<Car size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="例外③ 地役权的设立：">
                未经登记<Under color={C.vermilion} delay={170}>不得对抗</Under>善意第三人
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 22, fontWeight: 900}}>
              <span style={{color: C.inkSoft}}>对照表：</span>
              <Chip tone={C.navyMid} toneBg={C.powderPale} ink={C.navy}>成立：合同生效 → 债权关系产生</Chip>
              <Chip tone={C.navyMid} toneBg={C.powderPale} ink={C.navy}>成立：公示完成 → 履行＋物权变动</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>对抗：合同生效 → 物权变动</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>对抗：登记 → 可对抗第三人</Chip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const TwoSpecialLanesScene = () => {
  /* data-final-knowledge="mnemonic-band" data-final-knowledge="contract-management-special" data-final-knowledge="vehicle-special" data-final-knowledge="car-three-verdicts" */
  return (
    <Shell code="03" kicker="两种特殊情形" title="不属于成立与对抗的两种特殊">
      <div
        data-layout="two-special-lanes-with-car-verdicts"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-mnemonic-is-one-principle-three-exceptions-two-specials,contract-effective-establishes-the-contract-management-right-with-defence,government-certification-is-pure-administration-not-a-requirement,vehicle-ownership-statically-reads-registration-and-dynamically-reads-delivery"
        data-focal-rule="the-two-specials-sit-outside-both-principles-contract-alone-or-delivery-alone-carries-the-change"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="mnemonic-band" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 122}}>
          <Panel tone={C.olive} watermark={<Scale size={120} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.olive} icon={<Scale size={24} color={C.powderPale} strokeWidth={2.2} />}>速记 · 一个原则，三个例外，两个特殊</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <Chip tone={C.navyMid} toneBg={C.powderPale} ink={C.navy}>原则 · 公示成立</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>例外 · 动产抵押 / 承包经营权流转 / 地役权设立</Chip>
              <Chip tone={C.olive} toneBg={C.olivePale}>特殊 · 承包经营权设立 / 交通运输工具所有权变动</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="contract-management-special" style={{position: 'absolute', left: 0, top: 138, width: 866, height: 320}}>
          <Panel tone={C.navyMid} watermark={<Users size={140} color={C.navyMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.navyMid} icon={<Users size={24} color={C.powderPale} strokeWidth={2.2} />}>特殊① 土地承包经营权的设立</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="合同生效（一个发包合同两个后果）：">
              ① 引起<Soft color={C.navyMid}>物权变动</Soft>（即设立）② 具备<Soft color={C.navyMid}>对抗第三人</Soft>效力
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="政府发证·登记造册：">
              纯粹的<Soft color={C.vermilion}>行政管理手段</Soft>——既非<Seal delay={160} size={18}>变动要件</Seal>也非<Seal delay={190} size={18}>对抗要件</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>既不按公示成立 · 也不按公示对抗——两不沾</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="vehicle-special" style={{position: 'absolute', left: 910, top: 138, width: 866, height: 320}}>
          <Panel tone={C.vermilion} watermark={<Car size={140} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Car size={24} color={C.powderPale} strokeWidth={2.2} />}>特殊② 交通运输工具的所有权变动</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="合同生效：">
              产生<Soft color={C.navyMid}>债权债务</Soft>关系
            </IconChip>
            <IconChip icon={<Truck size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="交付完成：">
              所有权转移——发生<Soft color={C.olive}>物权变动</Soft>
            </IconChip>
            <IconChip icon={<ScrollText size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="登记：">
              赋予变动的物权<Soft color={C.vermilion}>对抗第三人</Soft>的效力
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>二元视角：<Under color={C.navyMid} delay={150}>静态归属看登记</Under> · <Under color={C.olive} delay={180}>动态买卖看交付</Under></div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="car-three-verdicts" style={{position: 'absolute', left: 0, top: 474, width: 1776, height: 294}}>
          <Panel tone={C.olive} watermark={<Car size={150} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.olive} icon={<Car size={24} color={C.powderPale} strokeWidth={2.2} />}>综合辨析 · 汽车甲卖乙已交付未登记</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Car size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="问① 汽车归谁：">
                <Seal delay={160} size={19} tone={C.olive}>归乙</Seal>——交付即转移所有权
              </IconChip>
              <IconChip icon={<Users size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="问② 甲再卖不知情丙并指示交付：">
                乙<Seal delay={190} size={19}>不能对抗</Seal>丙——未经登记不得对抗善意第三人，丙可主张<Soft color={C.vermilion}>善意取得</Soft>
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="问③ 丙申请法院扣押：">
                乙<Seal delay={220} size={19} tone={C.navyMid}>可以对抗</Seal>——丙非交易中的第三人，乙可提<Soft color={C.navyMid}>执行异议</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：登记<Soft color={C.navyMid}>给人信</Soft>（凭什么相信）· 交付<Soft color={C.olive}>把物移</Soft>（何时取得）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ThirdPartyContextsScene = () => {
  /* data-final-knowledge="transaction-mode-limb" data-final-knowledge="execution-mode-limb" data-final-knowledge="computer-four-verdicts" data-final-knowledge="context-mnemonic" */
  return (
    <Shell code="04" kicker="对抗第三人 · 两种语境" title="交易模式与执行模式">
      <div
        data-layout="transaction-execution-role-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="transaction-mode-reads-appearance-and-grants-good-faith-acquisition,execution-mode-reads-substance-and-limits-seizure-to-debtor-assets,without-possession-or-registration-the-owner-cannot-beat-a-transaction-party,the-owner-can-still-beat-an-executing-creditor-of-the-bailee"
        data-focal-rule="transaction-reads-appearance-while-execution-reads-substance"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="transaction-mode-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 340}}>
          <Panel tone={C.vermilion} watermark={<Eye size={140} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Eye size={24} color={C.powderPale} strokeWidth={2.2} />}>交易模式 · 看外观</PanelTab>
            <IconChip icon={<Users size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="第三人：">
              受让标的物·接受担保的<Soft color={C.vermilion}>交易中</Soft>的第三人
            </IconChip>
            <IconChip icon={<Eye size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="交易依据：">
              依<Soft color={C.olive}>权利外观</Soft>（占有·登记）交易 → 受<Soft color={C.olive}>善意取得</Soft>保护
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="后果：">
              所有权人没有<Soft color={C.navyMid}>占有</Soft>或<Soft color={C.navyMid}>登记</Soft>的，<Seal delay={160} size={19}>不得对抗</Seal>交易中的第三人
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="execution-mode-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 340}}>
          <Panel tone={C.navyMid} watermark={<Gavel size={140} color={C.navyMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.navyMid} icon={<Gavel size={24} color={C.powderPale} strokeWidth={2.2} />}>执行模式 · 看实质</PanelTab>
            <IconChip icon={<Users size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="第三人：">
              申请法院执行的<Soft color={C.navyMid}>债权人</Soft>
            </IconChip>
            <IconChip icon={<Shield size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="执行边界：">
              只能执行<Soft color={C.olive}>债务人</Soft>的财产——纵有外观，不得执行<Soft color={C.olive}>他人</Soft>财产
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="后果：">
              所有权人即使没有占有·登记，依然<Seal delay={160} size={19} tone={C.navyMid}>可以对抗</Seal>执行中的第三人
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="computer-four-verdicts" style={{position: 'absolute', left: 0, top: 356, width: 1776, height: 412}}>
          <Panel tone={C.olive} watermark={<Coins size={150} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 20px'}}>
            <PanelTab tone={C.olive} icon={<Coins size={24} color={C.powderPale} strokeWidth={2.2} />}>综合应用 · 甲将电脑 A 出租给乙并交付</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 9}}>
                <IconChip icon={<Users size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="问① 乙租期内卖丙·丙不知情：">
                  丙<Seal delay={170} size={19} tone={C.olive}>能取得</Seal>所有权（善意取得）
                </IconChip>
                <IconChip icon={<Eye size={24} color={C.powder} strokeWidth={2.2} />} tone={C.vermilion} title="问② 甲的所有权能否对抗丙：">
                  <Seal delay={200} size={19}>不能对抗</Seal>——甲缺乏<Soft color={C.vermilion}>占有</Soft>外观，丙是交易中的第三人
                </IconChip>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 9}}>
                <IconChip icon={<Gavel size={24} color={C.powder} strokeWidth={2.2} />} tone={C.navyMid} title="问③ 丙可否申请强制措施：">
                  <Seal delay={230} size={19}>不能</Seal>——丙的债务人是乙，电脑 A 并非<Soft color={C.navyMid}>乙的财产</Soft>
                </IconChip>
                <IconChip icon={<Shield size={24} color={C.powder} strokeWidth={2.2} />} tone={C.olive} title="问④ 甲能否对抗丙：">
                  <Seal delay={260} size={19} tone={C.olive}>能对抗</Seal>——甲证明所有权后排除强制措施，执行模式看<Soft color={C.olive}>实质</Soft>
                </IconChip>
              </div>
            </div>
            <div data-final-knowledge="context-mnemonic" style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：交易模式看<Soft color={C.vermilion}>外观</Soft>（占有·登记）· 执行模式看<Soft color={C.navyMid}>实质</Soft>（财产归属）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
