import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, Car, Coins, Crown, Gavel, Hammer, Home, Hourglass, House, Link2, ScrollText, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  slate: '#454F58',
  slateMid: '#57636E',
  mist: '#D5DDE2',
  mistPale: '#E7ECEF',
  paper: '#F4F1E8',
  paperDim: '#E9E5D7',
  edge: '#C6BFAE',
  coral: '#C4624E',
  coralPale: '#F2DFDA',
  pine: '#4F7058',
  pinePale: '#E1EBE3',
  ink: '#262B30',
  inkSoft: '#6B737B',
  indigoLike: '#3A5578',
  goldLike: '#8C6D2F',
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

export const Path = ({color = C.coral, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
  const sceneIndex = Math.max(0, Math.min(4, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.slate,
        color: C.paper,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 170px, rgba(255, 255, 255, 0.04) 170px 173px), repeating-linear-gradient(0deg, transparent 0 170px, rgba(0, 0, 0, 0.11) 170px 173px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.coral}, ${C.pine}, ${C.mist})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(213, 221, 226, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.slateMid, borderLeft: `8px solid ${C.coral}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.mistPale, letterSpacing: 2}}>民法 · 第7讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.mistPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.paper, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.coral : 'transparent',
              border: `2px solid ${C.coral}`,
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
    style={{backgroundColor: C.paper, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(38, 43, 48, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.slateMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.slateMid, borderLeft: `6px solid ${tone}`, color: C.mistPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.paper}`, boxShadow: `0 0 0 2px rgba(196, 98, 78, 0.45)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.coral}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.paperDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const LandHouseScene = () => {
  /* data-final-knowledge="integration-meaning" data-final-knowledge="static-dynamic-limbs" data-final-knowledge="exception-conditions" data-final-knowledge="coop-verdict" */
  return (
    <Shell code="01" kicker="房地一体化原则" title="房地一体化原则">
      <div
        data-layout="bound-pair-gates-with-exception-panel"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="land-use-right-and-house-title-belong-to-the-same-holder,statically-house-title-presupposes-land-title,dynamically-house-title-follows-land-transfer-and-mortgage-and-vice-versa,building-with-consent-on-shared-land-keeps-house-with-the-builder"
        data-focal-rule="land-and-house-chips-move-as-one-bound-pair-through-transfer-and-mortgage-gates"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="integration-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 106}}>
          <Panel tone={C.slateMid} watermark={<Link2 size={110} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<Link2 size={24} color={C.mistPale} strokeWidth={2.2} />}>核心内涵</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>土地使用权与土地上房屋的所有权应当归属于<Soft color={C.coral}>同一</Soft>权利人</span>
          </Panel>
        </Enter>
        <Enter delay={30} from="left" marker="static-dynamic-limbs" style={{position: 'absolute', left: 0, top: 122, width: 866, height: 250}}>
          <Panel tone={C.pine} watermark={<Home size={140} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Home size={24} color={C.paper} strokeWidth={2.2} />}>两个维度</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="静态表现：">
              要拥有土地上房屋的所有权，需以拥有<Soft color={C.slateMid}>土地所有权或使用权</Soft>为前提
            </IconChip>
            <IconChip icon={<Link2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="动态表现：">
              土地使用权<Soft color={C.coral}>转让·抵押</Soft>的，房屋所有权<Under color={C.coral} delay={140}>随之</Under>转让·抵押；反之亦然
            </IconChip>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 910, top: 122, width: 866, height: 250}}>
          <Enter delay={60} from="none" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.coral} watermark={<Link2 size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
              <PanelTab tone={C.coral} icon={<Link2 size={24} color={C.paper} strokeWidth={2.2} />}>绑定行进 · 地与房同进同退</PanelTab>
              <div style={{position: 'relative', height: 100}}>
                <div style={{position: 'absolute', left: 0, top: 14}}>
                  <Chip tone={C.pine} toneBg={C.pinePale}><span style={{fontSize: 22, fontWeight: 950, color: C.pine }}>土地使用权</span></Chip>
                </div>
                <div style={{position: 'absolute', left: 0, top: 62}}>
                  <Chip tone={C.coral} toneBg={C.coralPale}><Home size={20} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.coral }}>房屋所有权</span></Chip>
                </div>
                <Path color={C.slateMid} delay={80} span={20} style={{position: 'absolute', left: 220, top: 44, width: 260, height: 4}} />
                <Mover delay={86} span={26} fromX={0} toX={260} fadeAt={150} style={{position: 'absolute', left: 6, top: 14, zIndex: 2}}>
                  <Chip tone={C.pine} toneBg={C.pinePale}><span style={{fontSize: 22, fontWeight: 950, color: C.pine }}>土地使用权</span></Chip>
                </Mover>
                <Mover delay={86} span={26} fromX={0} toX={260} fadeAt={150} style={{position: 'absolute', left: 6, top: 62, zIndex: 2}}>
                  <Chip tone={C.coral} toneBg={C.coralPale}><Home size={20} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.coral }}>房屋所有权</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 490, top: 26}}><Seal delay={150} size={21} tone={C.pine}>同归一人 · 房随地走 · 地随房走</Seal></div>
              </div>
              <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>两枚芯片用<Soft color={C.coral}>同一根链</Soft>拴住——转一起转、押一起押</div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={100} from="up" marker="exception-conditions" style={{position: 'absolute', left: 0, top: 388, width: 1776, height: 380}}>
          <Panel tone={C.coral} watermark={<Hammer size={150} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.coral} icon={<Hammer size={24} color={C.paper} strokeWidth={2.2} />}>静态例外的两个条件 · 房屋所有权归属速记</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Hammer size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="积极条件：">
                实施了<Soft color={C.pine}>出资修建</Soft>的物理行为
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="消极条件：">
                <Soft color={C.coral}>未构成</Soft>对他人土地的<Soft color={C.coral}>侵占</Soft>——征得地权人<Soft color={C.pine}>同意</Soft>·或在<Soft color={C.pine}>共有土地</Soft>上建造
              </IconChip>
            </div>
            <div data-final-knowledge="coop-verdict" style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Home size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="速记（未侵占时）：">
                一方盖，归<Seal delay={200} size={19} tone={C.slateMid}>一方</Seal>；双方盖，归<Seal delay={230} size={19} tone={C.pine}>双方</Seal>
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigoLike} title="合作开发案：">
                甲出地·乙出钱＝两方出资；甲<Soft color={C.pine}>同意</Soft>不构成侵占 → 商品房归甲乙<Seal delay={260} size={19} tone={C.pine}>共有</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：房地<Soft color={C.coral}>一根链</Soft>·静态看<Soft color={C.slateMid}>前提</Soft>·动态看<Soft color={C.pine}>跟随</Soft>——未侵占的建造者<Soft color={C.goldLike}>照常拿房</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CondominiumScene = () => {
  /* data-final-knowledge="three-rights-board" data-final-knowledge="shared-parts-scope" data-final-knowledge="dependence-chain" data-final-knowledge="unit-1808-verdicts" */
  return (
    <Shell code="02" kicker="建筑物区分所有权" title="业主的建筑物区分所有权">
      <div
        data-layout="three-right-board-with-dependence-chain"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="the-condominium-right-combines-unit-title-shared-part-ownership-and-management,shared-parts-are-the-shell-like-roof-and-wall-and-the-passage-like-corridor-and-lift,the-shared-right-rides-its-unit-title-and-never-stands-alone,transfer-carries-it-while-independent-waiver-and-priority-claims-fail"
        data-focal-rule="the-shared-right-ribbon-is-tied-to-the-unit-title-chip-and-travels-only-with-it"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="three-rights-board" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 216}}>
          <Panel tone={C.slateMid} watermark={<Building2 size={140} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<Building2 size={24} color={C.mistPale} strokeWidth={2.2} />}>权利综合体 · 三个维度</PanelTab>
            <IconChip icon={<Home size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="① 专有部分：">
              享有<Soft color={C.pine}>所有权</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="② 共有部分：">
              享有<Soft color={C.coral}>共有权</Soft>
            </IconChip>
            <IconChip icon={<Vote size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigoLike} title="③ 共同事务：">
              享有<Soft color={C.indigoLike}>共同管理权</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="shared-parts-scope" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 216}}>
          <Panel tone={C.pine} watermark={<Users size={140} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.pine} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>建筑物共有部分 · 两类（本楼）</PanelTab>
            <IconChip icon={<Home size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="外壳：">
              <Soft color={C.pine}>楼顶</Soft>·<Soft color={C.pine}>外墙面</Soft>
            </IconChip>
            <IconChip icon={<Building2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="通道：">
              <Soft color={C.slateMid}>走廊</Soft>·<Soft color={C.slateMid}>电梯</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>归属：有约定<Soft color={C.indigoLike}>从约定</Soft>·无约定归业主<Soft color={C.coral}>共有</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="dependence-chain" style={{position: 'absolute', left: 0, top: 232, width: 1776, height: 220}}>
          <Panel tone={C.coral} watermark={<Link2 size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.coral} icon={<Link2 size={24} color={C.paper} strokeWidth={2.2} />}>依附性原则 · 共有权拴在专有权上</PanelTab>
            <div style={{position: 'relative', height: 88}}>
              <div style={{position: 'absolute', left: 0, top: 14}}>
                <Chip tone={C.pine} toneBg={C.pinePale}><Home size={20} color={C.pine} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.pine }}>1808 专有权</span></Chip>
              </div>
              <div style={{position: 'absolute', left: 0, top: 52}}>
                <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 22, fontWeight: 950, color: C.coral }}>电梯共有权</span></Chip>
              </div>
              <Path color={C.slateMid} delay={120} span={20} style={{position: 'absolute', left: 230, top: 42, width: 300, height: 4}} />
              <Mover delay={126} span={24} fromX={0} toX={300} fadeAt={196} style={{position: 'absolute', left: 6, top: 14, zIndex: 2}}>
                <Chip tone={C.pine} toneBg={C.pinePale}><Home size={20} color={C.pine} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.pine }}>1808 专有权</span></Chip>
              </Mover>
              <Mover delay={126} span={24} fromX={0} toX={300} fadeAt={196} style={{position: 'absolute', left: 6, top: 52, zIndex: 2}}>
                <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 22, fontWeight: 950, color: C.coral }}>电梯共有权</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 548, top: 14}}><Seal delay={196} size={20}>乙随之取得共有权 ✓</Seal></div>
              <div style={{position: 'absolute', right: 0, top: 6, display: 'flex', flexDirection: 'column', gap: 5, fontSize: 21, fontWeight: 900, color: C.ink }}>
                <span><Ban size={20} color={C.coral} strokeWidth={2.6} /> 不得<Under color={C.coral} delay={200}>独立取得·独立转让·独立抛弃</Under></span>
                <span><Ban size={20} color={C.coral} strokeWidth={2.6} /> 其他业主<Seal delay={230} size={17}>不享有</Seal>共有人的优先购买权</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="unit-1808-verdicts" style={{position: 'absolute', left: 0, top: 468, width: 1776, height: 300}}>
          <Panel tone={C.indigoLike} watermark={<Building2 size={150} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.indigoLike} icon={<Building2 size={24} color={C.paper} strokeWidth={2.2} />}>1808 案三连 · 物业用房案</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Home size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="买 1808 号房 → 本楼电梯：">
                享有共有权（<Soft color={C.pine}>依附于专有部分</Soft>）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="保留房屋·单独放弃电梯共有权：">
                <Seal delay={180} size={18}>不能</Seal>——共有权不得脱离专有部分独立抛弃
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="物业公司擅自出租业主共有物业用房：">
                侵害<Soft color={C.coral}>共有权</Soft>＝侵害<Soft color={C.slateMid}>建筑物区分所有权</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：三维一体<Soft color={C.pine}>专有·共有·管理</Soft>——共有权是<Soft color={C.coral}>跟班</Soft>，专有权走到哪它跟到哪</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CommunityParkingScene = () => {
  /* data-final-knowledge="road-green-lanes" data-final-knowledge="parking-split" data-final-knowledge="rezoning-consent" data-final-knowledge="property-room-verdict" */
  return (
    <Shell code="03" kicker="小区共有 · 车位 · 住改商" title="物业小区共有与车位">
      <div
        data-layout="community-lanes-with-parking-split"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="roads-and-greens-belong-to-owners-unless-public-or-personal,other-facilities-and-property-rooms-absolutely-belong-to-owners,planned-parking-is-negotiated-separately-and-may-be-let-outward,occupying-shared-land-for-parking-returns-benefit-to-owner-welfare"
        data-focal-rule="parking-chips-split-into-negotiated-planned-lots-and-shared-land-welfare-lots"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="road-green-lanes" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 250}}>
          <Panel tone={C.pine} watermark={<Car size={140} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.pine} icon={<Car size={24} color={C.paper} strokeWidth={2.2} />}>小区法定共有 · 道路绿地设施</PanelTab>
            <IconChip icon={<Car size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="道路：">
              属于业主共有——<Soft color={C.coral}>城镇公共道路</Soft>除外
            </IconChip>
            <IconChip icon={<Car size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="绿地：">
              属于业主共有——<Soft color={C.coral}>城镇公共绿地</Soft>或<Soft color={C.coral}>明示属于个人</Soft>的除外
            </IconChip>
            <IconChip icon={<Building2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="其他场所·公用设施·物业用房：">
              <Seal delay={150} size={18} tone={C.slateMid}>绝对属于业主共有</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="parking-split" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 250}}>
          <Panel tone={C.coral} watermark={<Coins size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.coral} icon={<Car size={24} color={C.paper} strokeWidth={2.2} />}>车位车库 · 两种命运</PanelTab>
            <IconChip icon={<Car size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="规划车位车库：">
              业主与开发商<Soft color={C.slateMid}>另行协商</Soft>（第二个合同）；满足业主<Soft color={C.indigoLike}>需要</Soft>前提下可<Soft color={C.indigoLike}>对外租售</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="占用共有场地车位：">
              属于<Soft color={C.pine}>业主共有</Soft>；收益扣除合理成本后用于<Under color={C.pine} delay={150}>业主共有福利</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="rezoning-consent" style={{position: 'absolute', left: 0, top: 266, width: 1776, height: 334}}>
          <Panel tone={C.indigoLike} watermark={<Home size={150} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.indigoLike} icon={<Home size={24} color={C.paper} strokeWidth={2.2} />}>住改商 · 住宅用房改经营用房的条件</PanelTab>
            <IconChip icon={<Home size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigoLike} title="核心条件：">
              需经「<Soft color={C.indigoLike}>有利害关系的业主</Soft>」的<Seal delay={160} size={20}>一致同意</Seal>
            </IconChip>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Building2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="绝对认定：">
                本栋建筑物内的<Soft color={C.coral}>所有</Soft>其他业主
              </IconChip>
              <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="相对认定：">
                本栋之外，能证明<Soft color={C.pine}>房屋价值</Soft>或<Soft color={C.pine}>生活质量</Soft>受到或可能受到<Soft color={C.pine}>不利影响</Soft>的业主
              </IconChip>
            </div>
            <div data-final-knowledge="property-room-verdict" style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>物业用房案回看：乙物业擅自出租业主共有的物业服务用房 → 侵害业主<Soft color={C.coral}>共有权</Soft>＝侵害<Soft color={C.indigoLike}>建筑物区分所有权</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const VotingLadderScene = () => {
  /* data-final-knowledge="participation-rung" data-final-knowledge="ordinary-rung" data-final-knowledge="special-rung" data-final-knowledge="revoke-window" */
  return (
    <Shell code="04" kicker="业主大会表决 · 门槛递进" title="业主团体的表决规则">
      <div
        data-layout="voting-ladder-with-special-rung"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="participation-needs-double-two-thirds-of-area-and-headcount,ordinary-matters-pass-by-double-half-of-the-participants,special-matters-funding-rebuilding-repurposing-pass-by-double-three-quarters,aggrieved-owners-may-sue-to-revoke-within-one-year"
        data-focal-rule="vote-chips-climb-from-double-two-thirds-participation-to-double-half-or-double-three-quarters-passage"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100}}>
          <Panel tone={C.slateMid} watermark={<Users size={110} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<Users size={24} color={C.mistPale} strokeWidth={2.2} />}>业主团体 · 两机构</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}><Soft color={C.slateMid}>业主大会</Soft>＝全体业主组成 → <Soft color={C.indigoLike}>业主委员会</Soft>＝大会选举产生——决定对业主有<Soft color={C.indigoLike}>法律约束力</Soft></span>
          </Panel>
        </Enter>
        {(
          [
            {top: 116, tone: C.pine, name: '第一阶 · 开会门槛', chip: '全体业主「双 2/3」', detail: '专有面积占比 2/3 以上 且 人数占比 2/3 以上 参与', delay: 30},
            {top: 240, tone: C.indigoLike, name: '第二阶 · 一般事项', chip: '参与业主「双 1/2」', detail: '规约规则·选举业委·选聘物业·使用维修资金·其他重大事项 → 面积过半＋人数过半', delay: 80},
            {top: 364, tone: C.coral, name: '第三阶 · 特别事项「收花赚」', chip: '参与业主「双 3/4」', detail: '筹集维修资金 · 改建重建 · 改变共有部分用途或经营 → 面积 3/4＋人数 3/4', delay: 130},
          ] as const
        ).map((rung) => (
          <Enter key={rung.name} delay={rung.delay} from="left" style={{position: 'absolute', left: 0, top: rung.top, width: 1776, height: 112}}>
            <Panel tone={rung.tone} watermark={<Vote size={110} color={rung.tone} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '9px 18px'}}>
              <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: rung.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Vote size={26} color={C.paper} strokeWidth={2.2} /></span>
              <span style={{fontSize: 23, fontWeight: 950, color: rung.tone, width: 300}}>{rung.name}</span>
              <Chip tone={rung.tone} toneBg={rung.tone === C.coral ? C.coralPale : C.mistPale}><span style={{fontSize: 24, fontWeight: 950, color: rung.tone }}>{rung.chip}</span></Chip>
              <Path color={rung.tone} delay={rung.delay + 26} span={20} style={{position: 'absolute', left: 760, top: 54, width: 90, height: 4}} />
              <Mover delay={rung.delay + 32} span={22} fromX={0} toX={90} fadeAt={rung.delay + 80} style={{position: 'absolute', left: 700, top: 30, zIndex: 2}}>
                <Chip tone={rung.tone} toneBg={C.paper}><Vote size={20} color={rung.tone} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: rung.tone }}>表决通过</span></Chip>
              </Mover>
              <span style={{marginLeft: 'auto', maxWidth: 620, fontSize: 21, fontWeight: 900, color: C.ink }}>{rung.detail}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={160} from="up" marker="revoke-window" style={{position: 'absolute', left: 0, top: 492, width: 1776, height: 276}}>
          <Panel tone={C.coral} watermark={<Gavel size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />}>救济 · 决定侵害业主合法权益</PanelTab>
            <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="撤销窗口：">
              受侵害业主可在知道或应当知道决定作出之日起 <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 24, fontWeight: 950, color: C.coral }}>1 年内</span></Chip> 请求法院<Under color={C.coral} delay={160}>予以撤销</Under>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：参会<Soft color={C.pine}>双 2/3</Soft>·一般<Soft color={C.indigoLike}>双 1/2</Soft>·特别<Soft color={C.coral}>双 3/4</Soft>——特别只认「<Soft color={C.coral}>收花赚</Soft>」</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const NeighboringForkScene = () => {
  /* data-final-knowledge="neighbouring-definition" data-final-knowledge="reasonable-use-mode" data-final-knowledge="status-quo-mode" data-final-knowledge="nuisance-mode" */
  return (
    <Shell code="05" kicker="相邻关系 · 三型" title="相邻关系">
      <div
        data-layout="three-mode-fork-with-flowerpot-verdict"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="neighbouring-relations-are-statutory-extension-and-tolerance-of-land-domination,reasonable-use-passes-without-consent-but-by-the-least-impact,status-quo-is-respected-unless-a-more-reasonable-plan-appears,nuisance-modes-demand-removal-of-hindrance-and-danger"
        data-focal-rule="three-neighbouring-modes-fork-into-free-use-status-quo-respect-and-nuisance-removal"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="neighbouring-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 132}}>
          <Panel tone={C.slateMid} watermark={<House size={120} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<House size={24} color={C.mistPale} strokeWidth={2.2} />}>法定界定 · 四要点</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.slateMid} toneBg={C.mistPale}><span style={{fontSize: 20, fontWeight: 950, color: C.slateMid }}>主体：不动产相邻的物权人</span></Chip>
              <Chip tone={C.slateMid} toneBg={C.mistPale}><span style={{fontSize: 20, fontWeight: 950, color: C.slateMid }}>性质：支配效力的扩张或受限</span></Chip>
              <Chip tone={C.slateMid} toneBg={C.mistPale}><span style={{fontSize: 20, fontWeight: 950, color: C.slateMid }}>依据：法律直接规定·无需约定</span></Chip>
              <Chip tone={C.slateMid} toneBg={C.mistPale}><span style={{fontSize: 20, fontWeight: 950, color: C.slateMid }}>目的：满足不动产支配的基本需求</span></Chip>
            </div>
          </Panel>
        </Enter>
        {(
          [
            {left: 0, tone: C.pine, name: '① 合理使用型', cases: '土地通行·用水排水·建造修缮·铺设管线——不利用邻人土地就过不去', rule: '无需经邻人同意，可直接利用；但应采取影响最小的方式', delay: 30},
            {left: 605, tone: C.indigoLike, name: '② 现状维持型', cases: '相邻建筑物之间的通行关系', rule: '历史格局是既成事实，原则上尊重·不得擅自改变；例外：基于更合理的方案', delay: 70},
            {left: 1210, tone: C.coral, name: '③ 妨害排除型', cases: '截堵水流·房屋滴水·防险·环保', rule: '造成妨碍或危险时，对方有权请求排除妨害·消除危险', delay: 110},
          ] as const
        ).map((mode) => (
          <Enter key={mode.name} delay={mode.delay} from="up" style={{position: 'absolute', left: mode.left, top: 148, width: 566, height: 330}}>
            <Panel tone={mode.tone} watermark={<House size={130} color={mode.tone} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={mode.tone} icon={<House size={24} color={C.paper} strokeWidth={2.2} />}>{mode.name}</PanelTab>
              <IconChip icon={<House size={24} color={C.paper} strokeWidth={2.2} />} tone={mode.tone} title="情形：">
                {mode.cases}
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>{mode.rule}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 494, width: 1776, height: 274}}>
          <Panel tone={C.coral} watermark={<Ban size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />}>辨析 · 花盆案</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="二楼甲家花盆掉落砸坏一楼乙的汽车：">
              甲乙之间<Seal delay={170} size={20}>不是</Seal>相邻关系——属于<Soft color={C.coral}>侵权关系</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>点拨：相邻关系解决不动产正常支配的<Soft color={C.pine}>延伸与容忍</Soft>；花盆掉落砸坏他物是典型的<Soft color={C.coral}>侵权损害</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
