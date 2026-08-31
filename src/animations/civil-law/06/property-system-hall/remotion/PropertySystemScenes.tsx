import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, FileSignature, Home, Key, Link, Network, Scale, Shield, Sparkles, Sprout, Tractor, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  bamboo: '#3E5C47',
  bambooMid: '#51755C',
  celadon: '#BFD4C4',
  celadonPale: '#E4EEE6',
  walnut: '#6B4A2F',
  walnutPale: '#E8D9C6',
  ivory: '#F5F2E6',
  ivoryDim: '#EBE6D4',
  edge: '#C9C2AC',
  rust: '#A5573E',
  gold: '#8C6D2F',
  ink: '#2C2E28',
  inkSoft: '#6E7266',
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
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.bamboo,
        color: C.ivory,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 158px, rgba(255, 255, 255, 0.045) 158px 161px), repeating-linear-gradient(90deg, transparent 0 158px, rgba(0, 0, 0, 0.10) 158px 161px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.walnut}, ${C.gold}, ${C.celadon})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(191, 212, 196, 0.35)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.bambooMid, borderLeft: `8px solid ${C.walnut}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.celadonPale, letterSpacing: 2}}>民法 · 第6讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.celadonPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.walnutPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.celadon : 'transparent',
              border: `2px solid ${C.celadon}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.walnut, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.ivory, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(44, 46, 40, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.walnut, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.bambooMid, borderLeft: `6px solid ${tone}`, color: C.celadonPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.ivoryDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.ivory}`, boxShadow: `0 0 0 2px rgba(140, 109, 47, 0.55)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
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

export const Under = ({children, color = C.gold, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.ivoryDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const SystemTreeScene = () => {
  /* data-final-knowledge="property-definition" data-final-knowledge="self-property-limb" data-final-knowledge="use-franchise-limb" data-final-knowledge="security-limb" */
  return (
    <Shell code="01" kicker="物权概念 · 权利体系" title="物权的概念和体系">
      <div
        data-layout="property-root-tree-with-twin-branches"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="property-is-direct-dominion-over-a-thing-excluding-unlawful-interference,self-property-is-ownership-on-ones-own-thing,other-property-splits-into-use-franchises-and-security-interests,five-use-franchises-and-three-security-interests-complete-the-system"
        data-focal-rule="other-property-splits-into-five-use-franchises-and-three-security-interests"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="property-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128}}>
          <Panel tone={C.walnut} watermark={<Network size={130} color={C.walnut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.walnut} icon={<Network size={24} color={C.celadonPale} strokeWidth={2.2} />}>核心概念</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingRight: 12}}>
              <div style={{fontSize: 24, fontWeight: 880, lineHeight: 1.5}}>
                <Chip tone={C.bambooMid} toneBg={C.celadonPale} ink={C.bamboo}>物权</Chip>
                ＝ 权利人直接<Soft color={C.rust}>支配于物</Soft>，并排除他人<Soft color={C.rust}>非法干预</Soft>的权利
              </div>
              <Chip tone={C.gold} toneBg={C.walnutPale}>我国民法物权体系 · 两大分支</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="left" marker="self-property-limb" style={{position: 'absolute', left: 260, top: 144, width: 1516, height: 118}}>
          <Panel tone={C.gold} watermark={<Home size={120} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <span style={{display: 'inline-flex', flexDirection: 'column', gap: 4}}>
              <Chip tone={C.bambooMid} toneBg={C.celadonPale} ink={C.bamboo}>第一大分支 · 自物权</Chip>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>对自己的物享有的物权</span>
            </span>
            <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>＝</span>
            <Chip tone={C.gold} toneBg={C.walnutPale}><Home size={26} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 28, fontWeight: 950, color: C.gold}}>所有权</span></Chip>
            <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>体系中最完整·最充分的物权</span>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 186, top: 200, width: 3, height: 252, backgroundColor: C.celadon}} />
        <div style={{position: 'absolute', left: 186, top: 203, width: 74, height: 3, backgroundColor: C.celadon}} />
        <div style={{position: 'absolute', left: 186, top: 450, width: 74, height: 3, backgroundColor: C.celadon}} />
        <Enter delay={60} from="left" style={{position: 'absolute', left: 40, top: 320, width: 146, height: 130}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.bambooMid, border: `3px solid ${C.walnut}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6}}>
            <Network size={34} color={C.celadonPale} strokeWidth={2.2} />
            <span style={{fontSize: 30, fontWeight: 950, color: C.celadonPale, letterSpacing: 4}}>物权</span>
          </div>
        </Enter>
        <Enter delay={60} from="left" style={{position: 'absolute', left: 260, top: 278, width: 1516, height: 352}}>
          <Panel tone={C.bambooMid} watermark={<Key size={150} color={C.bambooMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Chip tone={C.bambooMid} toneBg={C.celadonPale} ink={C.bamboo}>第二大分支 · 他物权</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>对他人之物享有的物权 · 按权利性质分两路</span>
            </div>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div data-final-knowledge="use-franchise-limb" style={{flex: '1.55', display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.ivoryDim, border: `2px solid ${C.edge}`, borderLeft: `8px solid ${C.gold}`, padding: '10px 14px'}}>
                <PanelTab tone={C.gold} icon={<Key size={24} color={C.celadonPale} strokeWidth={2.2} />}>用益物权 · 使用收益 · 五项</PanelTab>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                  <Chip tone={C.gold} toneBg={C.walnutPale}>① 建设用地使用权</Chip>
                  <Chip tone={C.gold} toneBg={C.walnutPale}>② 土地承包经营权</Chip>
                  <Chip tone={C.gold} toneBg={C.walnutPale}>③ 宅基地使用权</Chip>
                  <Chip tone={C.gold} toneBg={C.walnutPale}>④ 居住权</Chip>
                  <Chip tone={C.gold} toneBg={C.walnutPale}>⑤ 地役权</Chip>
                </div>
                <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>对物进行<Soft color={C.gold}>使用·收益</Soft>的物权</div>
              </div>
              <div data-final-knowledge="security-limb" style={{flex: '1', display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.ivoryDim, border: `2px solid ${C.edge}`, borderLeft: `8px solid ${C.rust}`, padding: '10px 14px'}}>
                <PanelTab tone={C.rust} icon={<Shield size={24} color={C.celadonPale} strokeWidth={2.2} />}>担保物权 · 担保债务 · 三项</PanelTab>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                  <Chip tone={C.rust} toneBg={C.celadonPale}>① 抵押权</Chip>
                  <Chip tone={C.rust} toneBg={C.celadonPale}>② 质权</Chip>
                  <Chip tone={C.rust} toneBg={C.celadonPale}>③ 留置权</Chip>
                </div>
                <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>以物的<Soft color={C.rust}>交换价值</Soft>担保债权受偿</div>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 646, width: 1776, height: 122}}>
          <Panel tone={C.walnut} watermark={<Scale size={110} color={C.walnut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '10px 18px'}}>
            <Chip tone={C.bambooMid} toneBg={C.celadonPale} ink={C.bamboo}>体系记忆锚</Chip>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>自物权只有一个——<Home size={24} color={C.gold} strokeWidth={2.4} /> 所有权；他物权分两路——用益<Under color={C.gold} delay={140}>五项</Under>·担保<Under color={C.rust} delay={170}>三项</Under></span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PrincipalAccessoryScene = () => {
  /* data-final-knowledge="principal-meaning" data-final-knowledge="accessory-meaning" data-final-knowledge="disposition-extension" data-final-knowledge="agreement-exception" */
  return (
    <Shell code="02" kicker="物的分类 · 主物与从物" title="主物与从物">
      <div
        data-layout="twin-specimen-cards-with-effect-extension"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="principal-and-accessory-serve-together-for-maximum-benefit,the-principal-plays-the-main-role-while-the-accessory-assists,disposition-of-the-principal-extends-to-the-accessory,parties-may-agree-otherwise-and-defeat-the-extension"
        data-focal-rule="disposition-of-the-principal-extends-to-the-accessory-unless-agreed-otherwise"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="principal-meaning" style={{position: 'absolute', left: 0, top: 0, width: 830, height: 280}}>
          <Panel tone={C.gold} watermark={<Home size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.gold} icon={<Home size={24} color={C.celadonPale} strokeWidth={2.2} />}>主物 · 起主要作用</PanelTab>
            <IconChip icon={<Home size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.gold} title="含义：">
              两物<Soft color={C.gold}>配合使用</Soft>能达到效益最大化时，起<Under color={C.gold} delay={110}>主要作用</Under>的物
            </IconChip>
            <IconChip icon={<Sparkles size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bambooMid} title="例子：">
              电视机 · 汽车
            </IconChip>
            </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="accessory-meaning" style={{position: 'absolute', left: 946, top: 0, width: 830, height: 280}}>
          <Panel tone={C.bambooMid} watermark={<Link size={140} color={C.bambooMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.bambooMid} icon={<Link size={24} color={C.celadonPale} strokeWidth={2.2} />}>从物 · 起次要作用</PanelTab>
            <IconChip icon={<Link size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bambooMid} title="含义：">
              同样配合使用，但起<Under color={C.bambooMid} delay={140}>次要作用</Under>的物
            </IconChip>
            <IconChip icon={<Key size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.gold} title="例子：">
              电视机的遥控器 · 汽车的备胎
            </IconChip>
            </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 838, top: 108, width: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, zIndex: 2}}>
          <span style={{fontSize: 20, fontWeight: 950, color: C.celadon}}>配合使用</span>
          <Link size={30} color={C.celadon} strokeWidth={2.6} />
        </div>
        <Enter delay={70} from="up" marker="disposition-extension" style={{position: 'absolute', left: 0, top: 296, width: 1776, height: 210}}>
          <Panel tone={C.walnut} watermark={<FileSignature size={140} color={C.walnut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.walnut} icon={<FileSignature size={24} color={C.celadonPale} strokeWidth={2.2} />}>区分意义 · 主从物区分的法律意义</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap'}}>
              <Chip tone={C.gold} toneBg={C.walnutPale}><span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>对<Soft color={C.gold}>主物</Soft>的处分</span></Chip>
              <span style={{fontSize: 30, fontWeight: 950, color: C.walnut}}>→</span>
              <Chip tone={C.rust} toneBg={C.celadonPale}><span style={{fontSize: 25, fontWeight: 950, color: C.rust}}>效力及于<Soft color={C.rust}>从物</Soft></span></Chip>
              <Seal delay={150} size={22} tone={C.bambooMid}>处分主物 · 从物随往</Seal>
            </div>
            <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rust} title="但书：">
              <Seal delay={190} size={20}>当事人另有约定</Seal>的，从物<Under color={C.rust} delay={210}>不随</Under>处分效力
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 522, width: 1776, height: 246}}>
          <Panel tone={C.bambooMid} watermark={<Scale size={140} color={C.bambooMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.bambooMid} icon={<Scale size={24} color={C.celadonPale} strokeWidth={2.2} />}>试一试 · 判断</PanelTab>
            <IconChip icon={<Home size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.gold} title="卖电视机未提遥控器：">
              处分效力<Soft color={C.gold}>及于遥控器</Soft>——遥控器作为从物一并处分 → <Seal delay={180} size={20} tone={C.gold}>一并转移 ✓</Seal>
            </IconChip>
            <IconChip icon={<Link size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bambooMid} title="约定「不含备胎」卖汽车：">
              当事人<Soft color={C.rust}>另有约定</Soft>——处分效力<Under color={C.rust} delay={210}>不及于</Under>备胎 → <Seal delay={210} size={20}>备胎不随 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const OriginalFruitScene = () => {
  /* data-final-knowledge="original-fruit-meaning" data-final-knowledge="natural-fruit-separation" data-final-knowledge="legal-fruit-relations" data-final-knowledge="fruit-attribution-rules" */
  return (
    <Shell code="03" kicker="物的分类 · 原物与孳息" title="原物与孳息">
      <div
        data-layout="original-fruit-flow-with-attribution-rules"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-original-creates-the-fruit-as-a-new-thing,natural-fruits-follow-nature-and-must-first-separate,legal-fruits-follow-legal-relations-like-interest-rent-and-prize,fruits-belong-to-the-original-owner-unless-law-or-agreement-says-otherwise"
        data-focal-rule="fruits-belong-to-the-original-owner-at-creation-unless-a-use-franchise-or-delivery-rule-says-otherwise"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="original-fruit-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 150}}>
          <Panel tone={C.walnut} watermark={<Sprout size={130} color={C.walnut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.walnut} icon={<Sprout size={24} color={C.celadonPale} strokeWidth={2.2} />}>含义 · 产生新物的物 → 新物</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22}}>
              <Chip tone={C.gold} toneBg={C.walnutPale}><span style={{fontSize: 26, fontWeight: 950, color: C.gold}}>原物</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.walnut}}>产生</span>
              <span style={{fontSize: 34, fontWeight: 950, color: C.bambooMid}}>→</span>
              <Chip tone={C.bambooMid} toneBg={C.celadonPale}><Sprout size={26} color={C.bambooMid} strokeWidth={2.4} /><span style={{fontSize: 26, fontWeight: 950, color: C.bambooMid}}>孳息（新物）</span></Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>原物：土地 · 母羊 · 本金 · 彩票 · 资本</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="natural-fruit-separation" style={{position: 'absolute', left: 0, top: 166, width: 866, height: 250}}>
          <Panel tone={C.bambooMid} watermark={<Sprout size={140} color={C.bambooMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.bambooMid} icon={<Sprout size={24} color={C.celadonPale} strokeWidth={2.2} />}>① 天然孳息 · 自然规律</PanelTab>
            <IconChip icon={<Sprout size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bambooMid} title="定义：">
              根据<Soft color={C.bambooMid}>自然规律</Soft>，由原物所产生的新物——土地上收获的<Soft color={C.bambooMid}>农作物</Soft> · 母羊所生的<Soft color={C.bambooMid}>小羊</Soft>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rust} title="独立性前提：">
              必须与原物<Under color={C.rust} delay={150}>相分离</Under>，方能成为孳息物 → <Seal delay={170} size={20}>未分离不算孳息</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="legal-fruit-relations" style={{position: 'absolute', left: 910, top: 166, width: 866, height: 250}}>
          <Panel tone={C.gold} watermark={<Coins size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.gold} icon={<Coins size={24} color={C.celadonPale} strokeWidth={2.2} />}>② 法定孳息 · 法律关系</PanelTab>
            <IconChip icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.gold} title="定义：">
              根据<Soft color={C.gold}>法律关系</Soft>，由原物所产生的新物
            </IconChip>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 9}}>
              <Chip tone={C.gold} toneBg={C.walnutPale}>储蓄 → 利息</Chip>
              <Chip tone={C.gold} toneBg={C.walnutPale}>租赁 → 租金</Chip>
              <Chip tone={C.gold} toneBg={C.walnutPale}>彩票 → 奖金</Chip>
              <Chip tone={C.gold} toneBg={C.walnutPale}>投资 → 利润</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="fruit-attribution-rules" style={{position: 'absolute', left: 0, top: 432, width: 1776, height: 336}}>
          <Panel tone={C.rust} watermark={<Users size={150} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Users size={24} color={C.celadonPale} strokeWidth={2.2} />}>区分意义 · 孳息的归属</PanelTab>
            <IconChip icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.walnut} title="原则：">
              孳息归属于其产生时的<Soft color={C.walnut}>原物所有权人</Soft>
            </IconChip>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Key size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.gold} title="例外① 用益物权人：">
                土地上有建设用地使用权·承包经营权·宅基地使用权的，孳息归<Soft color={C.gold}>用益物权人</Soft>（承包地农作物归<Under color={C.gold} delay={170}>承包经营权人</Under>）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rust} title="例外② 地役权人：">
                对供役地上的孳息<Soft color={C.rust}>不能取得</Soft>
              </IconChip>
            </div>
            <IconChip icon={<Tractor size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bambooMid} title="例外③ 买卖交付后：">
              买卖标的物<Under color={C.bambooMid} delay={200}>交付后</Under>所生的孳息，归属于<Soft color={C.bambooMid}>买受人</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：孳息随<Soft color={C.walnut}>原主</Soft>，用益物权人<Soft color={C.gold}>收取</Soft>，地役权人<Soft color={C.rust}>无份</Soft>，交付之后<Soft color={C.bambooMid}>归买受人</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

