import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Crown, FileSignature, Gavel, Handshake, PenLine, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  petrol: '#1C3A3F',
  petrolMid: '#2B545C',
  wave: '#4E8A8C',
  wavePale: '#D2E5E4',
  oat: '#F2EFE4',
  oatDim: '#E4E0CE',
  oatEdge: '#B5B1A0',
  coral: '#B45338',
  coralPale: '#EFD5C8',
  grape: '#6B4E6E',
  grapePale: '#E2D3E2',
  ink: '#252B2C',
  inkSoft: '#6C7472',
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.petrol,
      color: C.oat,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 136px, rgba(0, 0, 0, 0.13) 136px 139px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.coral}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.coralPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.petrolMid, borderLeft: `8px solid ${C.coral}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.oat, letterSpacing: 2}}>民法 · 第4讲 · {code}</span>
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
        borderBottom: `2px solid ${C.coral}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.oat}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.coralPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.coral, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.oat, border: `2px solid ${C.oatEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.coral, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', backgroundColor: C.petrolMid, borderLeft: `6px solid ${tone}`, color: C.oat, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.oatDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.coral}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '7px 15px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.coral, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.oatEdge, toneBg = C.oatDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 21, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const AgencyPowerOriginScene = () => {
  /* data-final-knowledge="agency-structure" data-final-knowledge="statutory-origins" data-final-knowledge="delegation-steps" data-final-knowledge="tailors-case-verdicts" */
  return (
    <Shell code="01" kicker="代理 · 代理权" title="代理与代理权的产生">
      <div
        data-layout="tri-party-structure-with-delegation-steps"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="agency-acts-in-the-principals-name-with-consequences-borne-by-principal,statutory-powers-come-from-guardian-and-spouse-status,delegation-runs-from-bilateral-basis-to-unilateral-authorization,coerced-basis-contracts-are-rescindable-but-unilateral-authorizations-are-not"
        data-focal-rule="one-name-one-effect-and-two-steps-from-contract-to-authorisation"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="agency-structure" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 130}}>
          <Panel tone={C.coral} watermark={<Users size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.coral} icon={<Users size={22} color={C.coralPale} strokeWidth={2.2} />}>代理的含义 · 三方结构</PanelTab>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="代理：">
              代理人以<Under color={C.wave} delay={60}>被代理人的名义</Under>与相对人实施民事法律行为 → 法律后果直接由被代理人<Under color={C.coral} delay={90}>承受</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="statutory-origins" style={{position: 'absolute', left: 40, top: 146, width: 832, height: 240}}>
          <Panel tone={C.wave} watermark={<Crown size={150} color={C.wave} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wave} icon={<Crown size={24} color={C.coralPale} strokeWidth={2.2} />}>法定代理权 · 来自身份</PanelTab>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="监护人的法定代理权：">
              源自<Soft color={C.wave}>监护人</Soft>的<Soft color={C.wave}>身份</Soft>
            </IconChip>
            <IconChip icon={<Crown size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="家事代理权：">
              源自<Soft color={C.grape}>配偶</Soft>的<Soft color={C.grape}>身份</Soft>——一方行为·两方后果
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="delegation-steps" style={{position: 'absolute', left: 904, top: 146, width: 832, height: 240}}>
          <Panel tone={C.grape} watermark={<PenLine size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<PenLine size={24} color={C.coralPale} strokeWidth={2.2} />}>委托代理权 · 两步产生</PanelTab>
            <IconChip icon={<FileSignature size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="① 基础行为（一签合同）：">
              <Soft color={C.wave}>双方</Soft>法律行为——委托合同·雇佣合同·以<Soft color={C.wave}>合意</Soft>为条件
            </IconChip>
            <IconChip icon={<PenLine size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="② 授权行为（二授权）：">
              <Soft color={C.coral}>单方</Soft>法律行为——只需被代理人单方意思表示·<Under color={C.coral} delay={140}>无需代理人同意</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="tailors-case-verdicts" style={{position: 'absolute', left: 40, top: 402, width: 1696, height: 366}}>
          <Panel tone={C.grape} watermark={<Scale size={160} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.grape} icon={<Scale size={22} color={C.coralPale} strokeWidth={2.2} />}>案例分析 · 胁迫卖服装</PanelTab>
            <IconChip icon={<FileSignature size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="① 撤销雇佣合同：">
              <Soft color={C.wave}>双方</Soft>法律行为·存在乙<Soft color={C.coral}>不真实</Soft>的意思表示 → <Seal delay={150} size={17} tone={C.wave}>可以撤销 ✓</Seal>
            </IconChip>
            <IconChip icon={<PenLine size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="② 撤销授权行为：">
              <Soft color={C.coral}>单方</Soft>法律行为·不存在乙不真实的意思表示 → <Seal delay={190} size={17}>不可撤销 ✗</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center'}}>
              <Chip tone={C.wave} toneBg={C.wavePale}>签合同＝双方·基础</Chip>
              <Chip tone={C.coral} toneBg={C.coralPale} ink={C.coral}>授权＝单方·产生</Chip>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>口诀：一签合同二授权——合同被胁迫可撤·授权单方不可撤</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CollusionAgencyScene = () => {
  /* data-final-knowledge="collusion-premise" data-final-knowledge="recognition-forks" data-final-knowledge="joint-liability-rule" data-final-knowledge="void-contract-rule" */
  return (
    <Shell code="02" kicker="恶意串通的代理" title="恶意串通的代理">
      <div
        data-layout="collusion-desk-with-double-kill-verdict"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="colluding-agency-presumes-authorised-agency,recognition-reads-obvious-detriment-plus-agent-gain,agent-and-counterparty-bear-joint-damages,the-colluded-contract-is-void"
        data-focal-rule="two-signs convict-and-two-punishments strike-the-deal-and-the-wallet"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="collusion-premise" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 220}}>
          <Panel tone={C.grape} watermark={<Handshake size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<Handshake size={24} color={C.coralPale} strokeWidth={2.2} />}>含义 · 前提</PanelTab>
            <IconChip icon={<Handshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="含义：">
              代理人与相对人<Under color={C.grape} delay={80}>通谋</Under>，损害<Soft color={C.grape}>被代理人</Soft>利益的代理
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="适用前提：">
              以存在<Under color={C.coral} delay={130}>有权代理</Under>为前提——恶意串通的代理是<Soft color={C.coral}>有权代理</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="recognition-forks" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 220}}>
          <Panel tone={C.wave} watermark={<Coins size={150} color={C.wave} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wave} icon={<Coins size={24} color={C.coralPale} strokeWidth={2.2} />}>认定标准 · 看两头</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="① 被代理人：">
              造成<Under color={C.coral} delay={100}>明显不利</Under>
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="② 代理人：">
              从中<Under color={C.grape} delay={130}>获得利益</Under>（吃回扣·接受贿赂）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" style={{position: 'absolute', left: 40, top: 236, width: 1696, height: 532}}>
          <Panel tone={C.coral} watermark={<Gavel size={170} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '14px 20px'}}>
            <PanelTab tone={C.coral} icon={<Gavel size={24} color={C.coralPale} strokeWidth={2.2} />}>法律后果 · 双杀</PanelTab>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="杀一 · 合同效力：">
              恶意串通的代理人·相对人订立的合同 → <Seal delay={140} size={20}>无效</Seal>
            </IconChip>
            <IconChip icon={<Coins size={28} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="杀二 · 赔偿责任：">
              代理人·相对人对被代理人的损失承担<Under color={C.grape} delay={200}>连带</Under>的<Soft color={C.grape}>赔偿责任</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 16, backgroundColor: C.oatDim, border: `2px solid ${C.coral}`, padding: '10px 16px'}}>
              <span style={{padding: '5px 13px', backgroundColor: C.coral, color: C.oat, fontSize: 21, fontWeight: 900, letterSpacing: 2, flexShrink: 0}}>速记口诀</span>
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>认定看<Soft color={C.coral}>两头</Soft>：明显不利＋获得利益 · 后果记<Soft color={C.grape}>双杀</Soft>：合同无效＋连带赔偿</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
