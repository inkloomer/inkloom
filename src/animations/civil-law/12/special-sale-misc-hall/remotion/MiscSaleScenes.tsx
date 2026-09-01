import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Bell, Coins, Gavel, House, Hourglass, Scale, ScanSearch, ScrollText, Wrench, Zap} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  celadon: '#5F7D78',
  celadonMid: '#75938D',
  celadonPale: '#DDE9E5',
  cream: '#F5F2E8',
  creamDim: '#E9E6D7',
  edge: '#C9C6B2',
  pine: '#3F6B54',
  pinePale: '#DCEAE0',
  amber: '#A8792E',
  amberPale: '#F1E2C4',
  brick: '#A5502F',
  brickPale: '#F2DCD1',
  ink: '#262B24',
  inkSoft: '#6F7A6E',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
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
        backgroundColor: C.celadon,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(221, 233, 229, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.pine}, ${C.amber}, ${C.brick})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(221, 233, 229, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.celadonMid, borderLeft: `8px solid ${C.amber}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.celadonPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.amber}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.celadonPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.amberPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.amber : 'transparent',
              border: `2px solid ${C.amber}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.celadonMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(38, 43, 36, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.celadonMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.celadonMid, borderLeft: `6px solid ${tone}`, color: C.celadonPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(168, 121, 46, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
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

export const SampleClauseScene = () => {
  /* data-final-knowledge="sample-definition" data-final-knowledge="sample-mismatch-rule" data-final-knowledge="sample-hidden-defect" */
  const frame = useCurrentFrame();
  const tilt = frame < 240 ? -5 : 5;
  return (
    <Shell code="01" kicker="凭样品买卖 · 质量条款" title="样品与文字说明之争">
      <div
        data-layout="sample-balance-versus-description"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="quality-clause-combines-the-sealed-sample-and-its-written-description,unchanged-sample-governs-while-changed-or-disputed-sample-yields-to-description,unknown-latent-defect-disqualifies-the-sample-as-quality-clause,disqualified-sample-falls-back-to-the-usual-standard"
        data-focal-rule="the-balance-tips-toward-whichever-source-governs-and-a-latent-defect-knocks-the-sample-off-entirely"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="sample-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 130}}>
          <Panel tone={C.pine} watermark={<ScanSearch size={104} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '8px 18px'}}>
            <PanelTab tone={C.pine} icon={<ScanSearch size={24} color={C.cream} strokeWidth={2.2} />}>凭样品买卖 · 质量条款的构成</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 20, fontWeight: 900, color: C.ink, flexWrap: 'wrap'}}>
              <Chip tone={C.pine} toneBg={C.pinePale}><span style={{fontSize: 19, fontWeight: 950, color: C.pine}}>① 约定封存的样品</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft}}>＋</span>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 19, fontWeight: 950, color: C.amber}}>② 对样品的文字说明</span></Chip>
              <ArrowRight size={24} color={C.pine} strokeWidth={2.6} />
              <span>两者共同构成合同的<Soft color={C.pine}>质量条款</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="sample-mismatch-rule" style={{position: 'absolute', left: 0, top: 146, width: 1776, height: 290}}>
          <Panel tone={C.amber} watermark={<Scale size={140} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>样品与文字说明不一致 · 谁作质量条款</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, flex: 1}}>
              <div style={{width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                <div style={{width: 210, height: 10, backgroundColor: C.inkSoft, borderRadius: 5, rotate: `${tilt}deg`, transition: 'rotate 0.6s'}} />
                <div style={{display: 'flex', gap: 14}}>
                  <Chip tone={C.pine} toneBg={C.pinePale}><ScanSearch size={18} color={C.pine} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.pine}}>样品</span></Chip>
                  <Chip tone={C.amber} toneBg={C.amberPale}><ScrollText size={18} color={C.amber} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.amber}}>文字说明</span></Chip>
                </div>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{border: `2px solid ${C.pine}`, backgroundColor: C.pinePale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 100, 14)}}>
                  <span style={{fontSize: 20, fontWeight: 950, color: C.pine}}>状态① 封存后外观与内在品质没有变化</span>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 以<Seal delay={140} tone={C.pine} size={17}>样品</Seal>作为合同质量条款</span>
                </div>
                <div style={{border: `2px solid ${C.amber}`, backgroundColor: C.amberPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 240, 14)}}>
                  <span style={{fontSize: 20, fontWeight: 950, color: C.amber}}>状态② 样品已变化·或是否变化有争议无法查明</span>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 以<Seal delay={280} tone={C.amber} size={17}>文字说明</Seal>作为合同质量条款</span>
                </div>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="sample-hidden-defect" style={{position: 'absolute', left: 0, top: 452, width: 1776, height: 316}}>
          <Panel tone={C.brick} watermark={<Ban size={130} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>样品具有隐蔽瑕疵 · 排除适用</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 104, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 76, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 330, top: 18, width: 10, height: 74, borderRadius: 5, backgroundColor: frame > 150 ? C.brick : C.edge}} />
              <span style={{position: 'absolute', left: 284, top: 0, fontSize: 14, fontWeight: 900, color: frame > 150 ? C.brick : C.inkSoft}}>检出隐蔽瑕疵 ✗</span>
              <Mover delay={60} span={46} fromX={20} toX={220} style={{position: 'absolute', top: 44, left: 0}}>
                <Chip tone={C.pine} toneBg={C.pinePale}><ScanSearch size={18} color={C.pine} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.pine}}>封存样品</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 380, top: 46, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 160, 12)}}>买受人不知情 → 样品出局</span>
              <div style={{position: 'absolute', right: 20, top: 30, opacity: prog(frame, 220, 14)}}><Seal delay={240} tone={C.brick} size={19}>不得作为质量条款</Seal></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink, opacity: prog(frame, 280, 14)}}>
              <span>质量条款转为</span>
              <Seal delay={320} tone={C.pine} size={21}>通常标准</Seal>
              <span style={{color: C.inkSoft}}>——凭样品买卖·买受人不知道样品有隐蔽瑕疵的，不再按样品定质</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const HousingPermitScene = () => {
  /* data-final-knowledge="housing-scope" data-final-knowledge="housing-permit-rule" data-final-knowledge="housing-registration-consumer" */
  const frame = useCurrentFrame();
  const licensed = frame > 260;
  return (
    <Shell code="02" kicker="商品房买卖 · 效力控制" title="商品房的许可与备案">
      <div
        data-layout="housing-permit-gate-with-registration-desk"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="commodity-housing-sales-are-developer-contracts-excluding-second-hand-homes,missing-pre-sale-licence-voids-the-contract-unless-obtained-before-suit,registration-filing-default-does-not-affect-validity-unless-agreed-as-condition,consumer-law-triple-punitive-damages-never-apply-to-housing-sales"
        data-focal-rule="the-pre-sale-contract-passes-the-licence-gate-only-when-the-permit-precedes-suit"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="housing-scope" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 130}}>
          <Panel tone={C.celadonMid} watermark={<House size={104} color={C.celadonMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '8px 18px'}}>
            <PanelTab tone={C.celadonMid} icon={<House size={24} color={C.cream} strokeWidth={2.2} />}>商品房买卖 · 主体界定</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 20, fontWeight: 900, color: C.ink, flexWrap: 'wrap'}}>
              <Chip tone={C.pine} toneBg={C.pinePale}><span style={{fontSize: 19, fontWeight: 950, color: C.pine}}>出卖人 = 房地产开发企业</span></Chip>
              <span>开发企业以外的人（如<Soft color={C.brick}>二手房交易</Soft>）→ <Soft color={C.brick}>并非</Soft>商品房买卖·<Soft color={C.brick}>不适用</Soft>其法律规则</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="housing-permit-rule" style={{position: 'absolute', left: 0, top: 146, width: 1776, height: 330}}>
          <Panel tone={C.amber} watermark={<ScrollText size={130} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>预售许可证 · 效力三分支</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 108, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 78, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 400, top: 20, width: 10, height: 78, borderRadius: 5, backgroundColor: licensed ? C.pine : C.brick}} />
              <span style={{position: 'absolute', left: 348, top: 0, fontSize: 14, fontWeight: 900, color: licensed ? C.pine : C.brick}}>{licensed ? '起诉前已取得 ✓' : '未取得预售许可证 ✗'}</span>
              <Mover delay={60} span={52} fromX={20} toX={290} style={{position: 'absolute', top: 46, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><House size={18} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.indigoLike}}>预售合同</span></Chip>
              </Mover>
              <Mover delay={280} span={52} fromX={290} toX={620} fadeAt={350} style={{position: 'absolute', top: 46, left: 0}}>
                <Chip tone={C.pine} toneBg={C.pinePale}><ScrollText size={18} color={C.pine} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.pine}}>补证过门</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 440, top: 48, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: licensed ? 1 : 0.35}}>门色随取证时点而变</span>
              <div style={{position: 'absolute', right: 24, top: 36, opacity: prog(frame, 180, 14)}}><Seal delay={200} tone={C.brick} size={18}>未取得 → 合同无效</Seal></div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.pine}`, backgroundColor: C.pinePale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 300, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.pine, display: 'flex', alignItems: 'center', gap: 8}}><Gavel size={19} color={C.pine} strokeWidth={2.4} />起诉前取得许可证明</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 可以认定合同<Seal delay={360} tone={C.pine} size={17}>有效</Seal>（无效被治愈）</span>
              </div>
              <div style={{border: `2px solid ${C.amber}`, backgroundColor: C.amberPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 340, 14)}}>
                <span style={{fontSize: 19, fontWeight: 950, color: C.amber, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={19} color={C.amber} strokeWidth={2.4} />能够办理却未办理</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 又以无证主张无效：法院<Seal delay={400} tone={C.amber} size={17}>不予支持</Seal></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="housing-registration-consumer" style={{position: 'absolute', left: 0, top: 492, width: 1776, height: 276}}>
          <div style={{display: 'flex', gap: 44, height: '100%'}}>
            <Panel tone={C.pine} watermark={<ScrollText size={110} color={C.pine} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 16px'}}>
              <PanelTab tone={C.pine} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>预售备案登记 · 效力</PanelTab>
              <IconChip icon={<Gavel size={22} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="原则：">是否办理备案登记<Soft color={C.pine}>不影响</Soft>合同效力</IconChip>
              <IconChip icon={<Hourglass size={22} color={C.cream} strokeWidth={2.2} />} tone={C.amber} title="约定转化：">约定以备案为<Soft color={C.amber}>生效条件</Soft> → 转化为<Soft color={C.amber}>要式合同</Soft>；但一方已履行<Soft color={C.pine}>主要义务</Soft>且对方接受的除外</IconChip>
            </Panel>
            <Panel tone={C.brick} watermark={<Ban size={110} color={C.brick} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 16px'}}>
              <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>消费者权益保护法 · 排除适用</PanelTab>
              <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.brick} title="不适用消法：">商品房买卖<Soft color={C.brick}>不适用</Soft>《消费者权益保护法》</IconChip>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={200} tone={C.brick} size={20}>纵然欺诈·也无房款3倍惩罚性赔偿</Seal></div>
            </Panel>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const PowerSupplyScene = () => {
  /* data-final-knowledge="power-delivery-place" data-final-knowledge="power-interruption-duties" data-final-knowledge="power-suspension-rule" */
  const frame = useCurrentFrame();
  const suspended = frame > 300;
  return (
    <Shell code="03" kicker="供用电 · 中断与中止" title="供用电的责任与自助">
      <div
        data-layout="power-board-cause-duty-branches"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="delivery-place-defaults-to-the-property-boundary-of-the-supply-facility,active-interruption-owes-advance-notice-while-passive-outage-owes-prompt-repair,suspension-for-unpaid-fees-exercises-the-prior-performance-defence-after-notice,fee-delay-never-grounds-rescission-and-water-gas-heat-follow-by-reference"
        data-focal-rule="power-tokens-branch-by-cause-into-notice-or-repair-duties-and-the-suspension-gate-refuses-rescission"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="power-delivery-place" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 120}}>
          <Panel tone={C.amber} watermark={<Zap size={100} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '8px 18px'}}>
            <PanelTab tone={C.amber} icon={<Zap size={24} color={C.cream} strokeWidth={2.2} />}>供用电合同 · 履行地点</PanelTab>
            <span style={{fontSize: 20, fontWeight: 900, color: C.ink}}>当事人没有约定 → 以供电设施的<Soft color={C.amber}>产权分界处</Soft>为履行地点（分界处两侧各管各的）</span>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="power-interruption-duties" style={{position: 'absolute', left: 0, top: 136, width: 1776, height: 300}}>
          <Panel tone={C.pine} watermark={<Bell size={120} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.pine} icon={<Bell size={24} color={C.cream} strokeWidth={2.2} />}>中断供电 · 两事由对两义务</PanelTab>
            <div style={{display: 'flex', alignItems: 'stretch', gap: 0, flex: 1}}>
              <div style={{width: 230, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6}}>
                <Chip tone={C.pine} toneBg={C.pinePale}><Zap size={18} color={C.pine} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.pine}}>临时断电·事后恢复</span></Chip>
                <span style={{fontSize: 16, fontWeight: 900, color: C.inkSoft}}>按事由分派义务</span>
              </div>
              <ArrowRight size={24} color={C.pine} strokeWidth={2.6} style={{alignSelf: 'center'}} />
              <div style={{flex: 1, border: `2px solid ${C.pine}`, backgroundColor: C.pinePale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 90, 14)}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.pine}}>主动中断（检修·限电·违法用电）</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 供电人负<Seal delay={140} tone={C.pine} size={17}>事先通知义务</Seal>·未通知致损 → <Soft color={C.brick}>损害赔偿</Soft></span>
              </div>
              <ArrowRight size={24} color={C.amber} strokeWidth={2.6} style={{alignSelf: 'center'}} />
              <div style={{flex: 1, border: `2px solid ${C.amber}`, backgroundColor: C.amberPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5, opacity: prog(frame, 160, 14)}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.amber}}>被动中断（自然灾害等）</span>
                <span style={{fontSize: 18, fontWeight: 880, color: C.ink}}>→ 供电人负<Seal delay={210} tone={C.amber} size={17}>及时抢修义务</Seal>·未及时抢修致损 → <Soft color={C.brick}>损害赔偿</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="power-suspension-rule" style={{position: 'absolute', left: 0, top: 452, width: 1776, height: 316}}>
          <Panel tone={C.brick} watermark={<Ban size={120} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>中止供电 · 迟付电费的自助</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 92, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 66, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 320, top: 14, width: 9, height: 62, borderRadius: 4, backgroundColor: suspended ? C.amber : C.edge}} />
              <span style={{position: 'absolute', left: 258, top: 0, fontSize: 14, fontWeight: 900, color: suspended ? C.amber : C.inkSoft}}>催告+合理期限仍不付</span>
              <Mover delay={80} span={48} fromX={20} toX={250} style={{position: 'absolute', top: 40, left: 0}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><Coins size={18} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.brick}}>迟延交付电费</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 370, top: 40, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: suspended ? 1 : 0.35}}>→ 中止供电（本质 = <Soft color={C.amber}>先履行抗辩权</Soft>）</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.amber}`, backgroundColor: C.amberPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.amber}}>违约金</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>逾期不付电费 → 按约定支付<Soft color={C.amber}>违约金</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 6}}><Ban size={17} color={C.brick} strokeWidth={2.4} />不得解除合同</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>迟付电费经催告仍不付：供电人只能<Soft color={C.amber}>中止</Soft>·<Soft color={C.brick}>不得解除</Soft>（其他合同则有解除权）</span>
              </div>
              <div style={{border: `2px solid ${C.pine}`, backgroundColor: C.pinePale, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.pine}}>参照适用</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>供<Soft color={C.pine}>水·气·热力</Soft>合同 → 均参照供用电规定</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
