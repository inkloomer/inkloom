import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, Handshake, Home, Hourglass, Scale, Timer} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  oak: '#2E2A22',
  oakMid: '#454035',
  dial: '#C79A2E',
  dialPale: '#EFDFB4',
  cream: '#F3EFE2',
  creamDim: '#E5E0CF',
  creamEdge: '#B6B1A0',
  oxblood: '#8E3049',
  oxbloodPale: '#EDD0D8',
  pine: '#3E7D5E',
  pinePale: '#D6E7DC',
  slate: '#4E6086',
  slatePale: '#D7DEE8',
  ink: '#262420',
  inkSoft: '#6F6B60',
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
      backgroundColor: C.oak,
      color: C.cream,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 164px, rgba(0, 0, 0, 0.13) 164px 167px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.dial}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.dialPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.oakMid, borderLeft: `8px solid ${C.dial}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第4讲 · {code}</span>
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
        borderBottom: `2px solid ${C.dial}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.dialPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.dial, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.creamEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.dial, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', backgroundColor: C.oakMid, borderLeft: `6px solid ${tone}`, color: C.cream, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.oxblood}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.oxblood, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.creamEdge, toneBg = C.creamDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 21, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const ConceptScopeScene = () => {
  /* data-final-knowledge="limitation-concept" data-final-knowledge="mandatory-nature" data-final-knowledge="claim-scope-rule" data-final-knowledge="exception-wall" */
  return (
    <Shell code="01" kicker="概念 · 性质 · 适用范围" title="诉讼时效的概念与适用范围">
      <div
        data-layout="claim-scope-gate-with-exception-wall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="limitation-gives-defences-after-statutory-idleness,ordinary-limitation-runs-three-years-and-is-mandatory-law,limitation-fits-claims-while-formation-rights-take-exclusion-periods,registered-and-personal-claims-never-age"
        data-focal-rule="three-years-of-idleness-hands-the-defence-to-the-debtor"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="limitation-concept" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 220}}>
          <Panel tone={C.dial} watermark={<Hourglass size={150} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.dial} icon={<Hourglass size={24} color={C.dialPale} strokeWidth={2.2} />}>概念</PanelTab>
            <IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="诉讼时效：">
              请求权人不行使权利的状态超过<Under color={C.dial} delay={70}>法定期间</Under> → 义务人享有<Soft color={C.oxblood}>抗辩权</Soft>
            </IconChip>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="普通诉讼时效：">
              <Seal delay={130} size={19}>3 年</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="mandatory-nature" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 220}}>
          <Panel tone={C.oxblood} watermark={<Scale size={150} color={C.oxblood} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.oxblood} icon={<Scale size={24} color={C.dialPale} strokeWidth={2.2} />}>性质 · 强行法</PanelTab>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="约定无效：">
              不得约定<Under color={C.oxblood} delay={80}>延长·缩短</Under>时效期间 · 不得预先<Soft color={C.oxblood}>放弃</Soft>时效利益
            </IconChip>
            <IconChip icon={<Handshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="例外：">
              期间<Soft color={C.pine}>届满后</Soft>放弃时效利益 → <Seal delay={150} size={16} tone={C.pine}>不为法律禁止 ✓</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" marker="claim-scope-rule" style={{position: 'absolute', left: 40, top: 236, width: 832, height: 220}}>
          <Panel tone={C.pine} watermark={<Scale size={150} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Scale size={24} color={C.dialPale} strokeWidth={2.2} />}>适用对象 · 仅限请求权</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="诉讼时效：">
              适用于<Soft color={C.pine}>请求权</Soft>——存在<Soft color={C.pine}>中止·中断</Soft>问题
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="形成权：">
              适用<Soft color={C.oxblood}>除斥期间</Soft>——<Under color={C.oxblood} delay={140}>不存在</Under>中止·中断
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="right" marker="exception-wall" style={{position: 'absolute', left: 904, top: 236, width: 832, height: 220}}>
          <Panel tone={C.slate} watermark={<Home size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<Home size={24} color={C.dialPale} strokeWidth={2.2} />}>物权请求权 · 谁适用</PanelTab>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="不适用：">
              <Soft color={C.pine}>不动产</Soft>返还 · <Soft color={C.pine}>已登记</Soft>动产返还 · 停止侵害·排除妨碍·消除危险
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="适用（仅此一项）：">
              <Soft color={C.oxblood}>未经登记</Soft>的动产物权人的<Soft color={C.oxblood}>返还原物</Soft>请求权
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 472, width: 1696, height: 296}}>
          <Panel tone={C.dial} watermark={<Coins size={150} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.dial} icon={<Coins size={22} color={C.dialPale} strokeWidth={2.2} />}>不适用诉讼时效的其他请求权 · 房屋汽车电脑案</PanelTab>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="债权请求权：">
              <Soft color={C.pine}>抚养·赡养·扶养费</Soft> · 存款<Soft color={C.pine}>本息</Soft> · 国债金融债券<Soft color={C.pine}>本息</Soft> · 公司<Soft color={C.pine}>缴付出资</Soft> · 业主<Soft color={C.pine}>维修资金</Soft>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="人格权：">
              <Soft color={C.slate}>消除影响 · 恢复名誉 · 赔礼道歉</Soft>请求权
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="房屋A·汽车B·电脑C 案：">
              房屋＝不动产<Seal delay={210} size={16} tone={C.pine}>不适用 ✓</Seal>·汽车＝已登记动产<Seal delay={240} size={16} tone={C.pine}>不适用 ✓</Seal>·电脑＝未登记动产<Seal delay={270} size={16}>适用 ✗ 4 年已过</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
