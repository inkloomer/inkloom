import type {CSSProperties, ReactNode} from 'react';
import {ArrowRightLeft, Ban, Coins, Gavel, Home, ShieldCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  terra: '#7A3B2E',
  terraMid: '#8B4C3A',
  sand: '#F0E6D8',
  sandDim: '#E4D8C6',
  edge: '#C4B8A4',
  sage: '#5E7E6A',
  sagePale: '#DEEBE4',
  coral: '#C05B4A',
  coralPale: '#F2DDD8',
  bone: '#F4F1E6',
  boneDim: '#E9E4D3',
  ink: '#2E2022',
  inkSoft: '#7A6B60',
  goldWire: '#8C6D2F',
  goldPale: '#EFE3C2',
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
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.terra,
        color: C.sand,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 142px, rgba(240, 230, 216, 0.04) 142px 145px), repeating-linear-gradient(90deg, transparent 0 142px, rgba(0, 0, 0, 0.12) 142px 145px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.coral}, ${C.sage}, ${C.sand})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(240, 230, 216, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.terraMid, borderLeft: `8px solid ${C.sage}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.sand, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.sage}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.sand}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.sandDim, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.sage : 'transparent',
              border: `2px solid ${C.sage}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.terraMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.bone, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(46, 32, 34, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.terraMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.terraMid, borderLeft: `6px solid ${tone}`, color: C.sand, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.boneDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.bone}`, boxShadow: `0 0 0 2px rgba(94, 126, 106, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
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

export const Under = ({children, color = C.sage, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.boneDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const UnauthorizedFrameScene = () => {
  /* data-final-knowledge="sale-definition" data-final-knowledge="unauthorized-valid" data-final-knowledge="acquisition-fork" data-final-knowledge="extend-scope" */
  return (
    <Shell code="01" kicker="买卖合同 · 无权处分" title="买卖中的无权处分">
      <div
        data-layout="always-valid-gate-with-acquisition-fork"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="unauthorized-disposition-contracts-remain-valid-with-creditor-effect,ratification-leads-to-derivative-acquisition-by-the-buyer,good-faith-acquisition-conditions-lead-to-original-acquisition,the-rules-extend-to-chattel-pledge-and-real-property-mortgage"
        data-focal-rule="the-always-valid-gate-never-stops-the-contract-but-forks-into-two-acquisition-paths"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="sale-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.terraMid} watermark={<Coins size={110} color={C.terraMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.terraMid} icon={<Coins size={24} color={C.sand} strokeWidth={2.2} />}>买卖合同 · 界定</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>一方<Soft color={C.sage}>支付价款</Soft>交换对方标的物<Soft color={C.sage}>所有权</Soft>——标的物含<Soft color={C.coral}>动产·不动产·无形的物</Soft>（电·水·气·热力）</span>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="unauthorized-valid" style={{position: 'absolute', left: 0, top: 128, width: 866, height: 224}}>
          <Panel tone={C.coral} watermark={<Ban size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.coral} icon={<Ban size={24} color={C.sand} strokeWidth={2.2} />}>无权处分 · 定义</PanelTab>
            <IconChip icon={<Ban size={24} color={C.sand} strokeWidth={2.2} />} tone={C.coral} title="含义：">
              出卖人<Soft color={C.coral}>没有</Soft>标的物所有权·履行时也<Soft color={C.coral}>未获得</Soft>所有权而出卖
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center'}}>
              <Chip tone={C.sage} toneBg={C.sagePale}><span style={{fontSize: 21, fontWeight: 950, color: C.sage }}>合同效力＝有效 ✓（债权效力）</span></Chip>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft }}>无权处分≠合同无效</span>
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 910, top: 128, width: 866, height: 224}}>
          <Enter delay={66} from="right" marker="acquisition-fork" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.sage} watermark={<ShieldCheck size={130} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.sage} icon={<ShieldCheck size={24} color={C.sand} strokeWidth={2.2} />}>买受人取得的两条路</PanelTab>
              <div style={{position: 'relative', height: 92}}>
                <div style={{position: 'absolute', left: 0, top: 28}}>
                  <Chip tone={C.terraMid} toneBg={C.boneDim}><span style={{fontSize: 21, fontWeight: 950, color: C.terraMid }}>买受人</span></Chip>
                </div>
                <Path color={C.sage} delay={90} span={18} style={{position: 'absolute', left: 140, top: 58, width: 100, height: 4}} />
                <Mover delay={96} span={20} fromX={0} toX={100} fadeAt={160} style={{position: 'absolute', left: 16, top: 28, zIndex: 2}}>
                  <Chip tone={C.terraMid} toneBg={C.boneDim}><span style={{fontSize: 21, fontWeight: 950, color: C.terraMid }}>买受人</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 250, top: 0, display: 'flex', flexDirection: 'column', gap: 8}}>
                  <Chip tone={C.sage} toneBg={C.sagePale}><ShieldCheck size={20} color={C.sage} strokeWidth={2.4} /><span style={{fontSize: 20, fontWeight: 950, color: C.sage }}>追认 → 继受取得</span></Chip>
                  <Chip tone={C.seal} toneBg={C.goldPale}><ShieldCheck size={20} color={C.seal} strokeWidth={2.4} /><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>善意取得条件 → 善意取得</span></Chip>
                </div>
              </div>
              <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>扩充适用：<Soft color={C.coral}>动产质押</Soft>·<Soft color={C.coral}>不动产抵押</Soft></div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={110} from="up" marker="extend-scope" style={{position: 'absolute', left: 0, top: 368, width: 1776, height: 400}}>
          <Panel tone={C.sage} watermark={<ShieldCheck size={150} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.sage} icon={<ShieldCheck size={24} color={C.sand} strokeWidth={2.2} />}>总览 · 三种情形同一规则</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.boneDim, borderLeft: `6px solid ${C.coral}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.coral }}>出卖他人之物</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>合同有效（债权效力）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.boneDim, borderLeft: `6px solid ${C.sage}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.sage }}>出质他人之动产</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>合同有效（债权效力）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.boneDim, borderLeft: `6px solid ${C.seal}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>抵押他人之不动产</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>合同有效（债权效力）</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.sage} toneBg={C.sagePale}><span style={{fontSize: 20, fontWeight: 950, color: C.sage }}>权利人追认 → 继受取得</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 20, fontWeight: 950, color: C.coral }}>善意取得条件 → 善意取得</span></Chip>
              <span style={{color: C.inkSoft }}>三种情形 · 同一规则</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AgencyForkScene = () => {
  /* data-final-knowledge="narrow-agency-limb" data-final-knowledge="ratify-refuse-split" data-final-knowledge="apparent-limb" data-final-knowledge="comparison-table" */
  return (
    <Shell code="02" kicker="无权处分 × 代理并存" title="无权处分与无权代理的并存">
      <div
        data-layout="narrow-versus-apparent-agency-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="narrow-agency-binds-the-agent-until-principal-ratifies-or-refuses,ratification-binds-principal-and-buyer-gains-derivative-title,refusal-blocks-good-faith-acquisition-but-leaves-breach-liability,apparent-agency-binds-the-principal-and-buyer-always-gains-derivative-title"
        data-focal-rule="narrow-fork-splits-on-principal-consent-while-apparent-fork-always-binds-the-principal"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="narrow-agency-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 316}}>
          <Panel tone={C.slateLike} watermark={<Ban size={130} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slateLike} icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />}>① 无权处分 ＋ 狭义无权代理</PanelTab>
            <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateLike} title="合同效力：">
              乙丙合同<Soft color={C.slateLike}>有效</Soft>·有债权约束力
            </IconChip>
            <IconChip icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />} tone={C.jadeLike2} title="甲追认：">
              合同约束<Soft color={C.jadeLike2}>甲·丙</Soft>；乙构成有权代理·有权处分 → 丙<Seal delay={170} size={17} tone={C.jadeLike2}>继受取得</Seal>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.coralRed} title="甲拒绝：">
              合同约束<Soft color={C.coralRed}>乙·丙</Soft>；以甲名义处分 → 丙<Soft color={C.coralRed}>不可善意取得</Soft>·可追乙<Under color={C.coralRed} delay={200}>违约责任</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="apparent-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 316}}>
          <Panel tone={C.sage} watermark={<ShieldCheck size={130} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.sage} icon={<ShieldCheck size={24} color={C.sand} strokeWidth={2.2} />}>② 无权处分 ＋ 表见代理</PanelTab>
            <IconChip icon={<ShieldCheck size={24} color={C.sand} strokeWidth={2.2} />} tone={C.sage} title="合同效力：">
              <Soft color={C.sage}>有效</Soft>·有债权约束力
            </IconChip>
            <IconChip icon={<Users size={24} color={C.sand} strokeWidth={2.2} />} tone={C.sage} title="约束：">
              因构成表见代理 → 合同约束<Soft color={C.sage}>甲·丙</Soft>（被代理人承受）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>丙一律<Seal delay={180} size={17} tone={C.sage}>继受取得</Seal>物权——乙多次受托售电脑案</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="comparison-table" style={{position: 'absolute', left: 0, top: 332, width: 1776, height: 436}}>
          <Panel tone={C.coral} watermark={<Users size={150} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.coral} icon={<Users size={24} color={C.sand} strokeWidth={2.2} />}>对照表 · 电脑保管案</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.boneDim, borderLeft: `6px solid ${C.slateLike}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.slateLike }}>＋ 狭义无权代理</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>合同有约束力</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>追认 → 约束甲丙·继受取得</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>拒绝 → 约束乙丙·不可善意取得·追违约</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.boneDim, borderLeft: `6px solid ${C.sage}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.sage }}>＋ 表见代理</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>合同有约束力</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>约束甲丙（被代理人承受）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>丙一律继受取得</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：狭义看<Soft color={C.slateLike}>追认</Soft>·表见<Soft color={C.sage}>直接绑</Soft>——合同永远有效·差别只在<Soft color={C.coral}>谁能取得物权</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const MultiSaleScene = () => {
  /* data-final-knowledge="ordinary-lane" data-final-knowledge="vehicle-lane" data-final-knowledge="possession-beats-registration" data-final-knowledge="remedy-strip" */
  return (
    <Shell code="03" kicker="动产多重买卖 · 履行顺序" title="动产多重买卖的履行顺序">
      <div
        data-layout="parallel-multi-sale-lanes-with-remedy-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="ordinary-goods-rank-possession-then-payment-then-earlier-contract,vehicle-goods-rank-possession-then-registration-then-earlier-contract,possession-always-beats-registration-for-vehicles,losing-buyers-rescind-and-claim-breach"
        data-focal-rule="two-multi-sale-lanes-race-parallel-to-different-finish-lines-with-possession-always-first"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="ordinary-lane" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 200}}>
          <Panel tone={C.sage} watermark={<Coins size={120} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.sage} icon={<Coins size={24} color={C.sand} strokeWidth={2.2} />}>普通动产多重买卖（挖掘机算普通）</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '0 6px'}}>
              <Chip tone={C.sage} toneBg={C.sagePale}><span style={{fontSize: 23, fontWeight: 950, color: C.sage }}>首先 · 合法占有者</span></Chip>
              <Path color={C.sage} delay={90} span={18} style={{width: 50, height: 4}} />
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 23, fontWeight: 950, color: C.coral }}>其次 · 先支付价款者</span></Chip>
              <Path color={C.sage} delay={120} span={18} style={{width: 50, height: 4}} />
              <Chip tone={C.terraMid} toneBg={C.boneDim}><span style={{fontSize: 23, fontWeight: 950, color: C.terraMid }}>最后 · 合同成立在先者</span></Chip>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.inkSoft }}>先支付＞后支付·已支付＞未支付</div>
          </Panel>
        </Enter>
        <Enter delay={44} from="down" marker="vehicle-lane" style={{position: 'absolute', left: 0, top: 216, width: 1776, height: 200}}>
          <Panel tone={C.coral} watermark={<ArrowRightLeft size={120} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.coral} icon={<ArrowRightLeft size={24} color={C.sand} strokeWidth={2.2} />}>交通运输工具多重买卖（车辆·船舶·航空器）</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '0 6px'}}>
              <Chip tone={C.sage} toneBg={C.sagePale}><span style={{fontSize: 23, fontWeight: 950, color: C.sage }}>首先 · 合法占有者</span></Chip>
              <Path color={C.coral} delay={110} span={18} style={{width: 50, height: 4}} />
              <Chip tone={C.sage} toneBg={C.boneDim}><span style={{fontSize: 23, fontWeight: 950, color: C.sage }}>其次 · 过户登记者</span></Chip>
              <Path color={C.coral} delay={140} span={18} style={{width: 50, height: 4}} />
              <Chip tone={C.terraMid} toneBg={C.boneDim}><span style={{fontSize: 23, fontWeight: 950, color: C.terraMid }}>最后 · 合同成立在先者</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.coral }}>⚠ 占有<Soft color={C.seal}>优先于</Soft>登记——已受领交付的买受人有权请求登记在自己名下</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="possession-beats-registration" style={{position: 'absolute', left: 0, top: 432, width: 1776, height: 130}}>
          <Panel tone={C.sage} watermark={<Gavel size={110} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.sage} icon={<Gavel size={24} color={C.sand} strokeWidth={2.2} />}>关键对照</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>交付（占有）＞ 登记大于合同成立先后——占有与登记冲突时，<Soft color={C.seal}>占有赢</Soft></span>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="remedy-strip" style={{position: 'absolute', left: 0, top: 578, width: 1776, height: 190}}>
          <Panel tone={C.coral} watermark={<Gavel size={120} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.coral} icon={<Gavel size={24} color={C.sand} strokeWidth={2.2} />}>违约救济兜底</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>不能取得买卖物的买受人 → <Soft color={C.coral}>解除</Soft>买卖合同＋追究出卖人<Under color={C.coral} delay={150}>违约责任</Under></span>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：<Soft color={C.sage}>占有</Soft>永远第一·普通看<Soft color={C.coral}>付款</Soft>·交通看<Soft color={C.sage}>登记</Soft>——垫底<Soft color={C.terraMid}>先合同</Soft>·输家<Soft color={C.coral}>解除＋违约</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
