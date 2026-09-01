import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, Handshake, Scale, Users, Zap} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  oxblood: '#4A1E22',
  oxbloodMid: '#5E2A30',
  rose: '#E0C9CB',
  rosePale: '#EFE2E3',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  bronze: '#B08D4E',
  bronzePale: '#EFE4CE',
  jade: '#4E7A64',
  jadePale: '#DDEBE4',
  slateLike: '#48525C',
  coral: '#C05B4A',
  coralPale: '#F2DDD8',
  ink: '#2E2022',
  inkSoft: '#7A6B6E',
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

export const Path = ({color = C.bronze, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.oxblood,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(224, 201, 203, 0.04) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.13) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.bronze}, ${C.jade}, ${C.rose})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(224, 201, 203, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.oxbloodMid, borderLeft: `8px solid ${C.bronze}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.rosePale, letterSpacing: 2}}>民法 · 第11讲 · {code}</span>
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
          borderBottom: `2px solid ${C.bronze}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.rosePale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.bronzePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.bronze : 'transparent',
              border: `2px solid ${C.bronze}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.oxbloodMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(46, 32, 34, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.oxbloodMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.oxbloodMid, borderLeft: `6px solid ${tone}`, color: C.rosePale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(176, 141, 78, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.bronze}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.bronze, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const CulpaFormulaScene = () => {
  /* data-final-knowledge="culpa-formula" data-final-knowledge="time-actor-elements" data-final-knowledge="five-type-cards" data-final-knowledge="toy-maker-verdicts" */
  return (
    <Shell code="01" kicker="缔约过失责任" title="缔约过失责任">
      <div
        data-layout="culpa-formula-gates-with-five-type-cards"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="pre-contract-duty-roots-in-good-faith-covering-care-notice-and-secrecy,the-window-runs-from-offer-effective-to-contract-effective,relative-binds-only-the-negotiating-pair-never-the-outsider,five-statutory-breaches-span-sham-negotiation-fraud-secrecy-void-and-good-faith"
        data-focal-rule="culpa-formula-gates-check-timing-actor-and-duty-before-the-five-statutory-breaches-enter"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="culpa-formula" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 130}}>
          <Panel tone={C.oxbloodMid} watermark={<Handshake size={110} color={C.oxbloodMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.oxbloodMid} icon={<Handshake size={24} color={C.rosePale} strokeWidth={2.2} />}>核心公式</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 22, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 21, fontWeight: 950, color: C.jade }}>缔约中</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.bronze }}>＋</span>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 21, fontWeight: 950, color: C.coral }}>不诚信</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.bronze }}>＝</span>
              <Chip tone={C.bronze} toneBg={C.bronzePale}><span style={{fontSize: 21, fontWeight: 950, color: C.bronze }}>违反先合同义务</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.bronze }}>＝</span>
              <Chip tone={C.slateLike} toneBg={C.creamDim}><span style={{fontSize: 21, fontWeight: 950, color: C.slateLike }}>缔约过失责任</span></Chip>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>先合同义务法理依据＝<Soft color={C.jade}>诚信原则</Soft>——照顾·通知·协助·保护·保密·不加害（法定义务）</div>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="time-actor-elements" style={{position: 'absolute', left: 0, top: 146, width: 866, height: 250}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />}>要件 · 时间与主体</PanelTab>
            <IconChip icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.indigoLike} title="时间要件：">
              <Soft color={C.indigoLike}>要约生效</Soft>之后·<Soft color={C.indigoLike}>合同生效</Soft>之前＝缔约阶段
            </IconChip>
            <IconChip icon={<Users size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.jade} title="主体要件：">
              仅限<Soft color={C.jade}>缔约双方</Soft>之间——受相对性原理约束
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>责任形式：<Soft color={C.bronze}>赔偿损失</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="toy-maker-verdicts" style={{position: 'absolute', left: 910, top: 146, width: 866, height: 250}}>
          <Panel tone={C.coral} watermark={<Gavel size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Gavel size={24} color={C.rosePale} strokeWidth={2.2} />}>玩具商三问 · 谁能被追责</PanelTab>
            <IconChip icon={<Ban size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.slateLike} title="① 甲对乙：">
              <Seal delay={160} size={17}>不能</Seal>——甲乙之间不存在缔约关系
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.slateLike} title="② 甲对丙：">
              <Seal delay={190} size={17}>不能</Seal>——有缔约关系但丙未违背先合同义务
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.coral} title="③ 甲对丁：">
              <Seal delay={220} size={17} tone={C.coral}>能</Seal>——丁假借订立合同·<Soft color={C.coral}>恶意磋商</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="five-type-cards" style={{position: 'absolute', left: 0, top: 412, width: 1776, height: 356}}>
          <Panel tone={C.bronze} watermark={<Handshake size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.bronze} icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />}>违反先合同义务 · 五种法定类型</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.bronze} toneBg={C.bronzePale}><span style={{fontSize: 19, fontWeight: 950, color: C.bronze }}>① 假借订立合同·恶意磋商</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>② 欺诈（故意隐瞒·虚假情况）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.creamDim}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>③ 泄露·不正当使用商业秘密</span></Chip>
              <Chip tone={C.slateLike} toneBg={C.creamDim}><span style={{fontSize: 19, fontWeight: 950, color: C.slateLike }}>④ 合同无效·过错方赔偿</span></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 19, fontWeight: 950, color: C.jade }}>⑤ 其他违反诚信原则</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：恶意<Soft color={C.bronze}>磋商</Soft>·<Soft color={C.coral}>欺诈</Soft>·泄<Soft color={C.indigoLike}>秘密</Soft>·<Soft color={C.slateLike}>无效</Soft>有过错·违反<Soft color={C.jade}>诚信</Soft>——五路全走缔约过失</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const StrictLiabilityScene = () => {
  /* data-final-knowledge="strict-principle" data-final-knowledge="five-exceptions" data-final-knowledge="direct-expectancy-split" data-final-knowledge="price-gap-rules" */
  return (
    <Shell code="02" kicker="归责原则 · 赔偿范围" title="归责原则与赔偿范围">
      <div
        data-layout="strict-liability-scales-with-five-exception-cards"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="strict-liability-ignores-fault-and-even-third-party-causes-bind,gratuitous-contracts-need-intent-or-gross-negligence,five-named-contracts-need-fault-as-the-condition,direct-loss-always-pays-while-expectancy-needs-foreseeability"
        data-focal-rule="strict-liability-scales-tip-heavy-on-no-fault-but-flip-light-for-five-named-contracts"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="strict-principle" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 228}}>
          <Panel tone={C.oxbloodMid} watermark={<Scale size={130} color={C.oxbloodMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.oxbloodMid} icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />}>严格责任 · 原则</PanelTab>
            <IconChip icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.oxbloodMid} title="原则：">
              违约即<Soft color={C.oxbloodMid}>承担违约责任</Soft>——<Soft color={C.coral}>不问过错</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.indigoLike} title="第三人原因：">
              债务人仍向债权人<Soft color={C.indigoLike}>承担违约责任</Soft>——与第三人另行解决
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="five-exceptions" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 228}}>
          <Panel tone={C.seal} watermark={<Ban size={130} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.seal} icon={<Ban size={24} color={C.rosePale} strokeWidth={2.2} />}>严格责任的例外 · 需过错</PanelTab>
            <IconChip icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.seal} title="无偿合同：">
              <Soft color={C.seal}>故意</Soft>或<Soft color={C.seal}>重大过失</Soft>才担责
            </IconChip>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.indigoLike} toneBg={C.creamDim}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>有偿保管·委托</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.creamDim}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>客运随身物品</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.creamDim}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>不动产抵押未登记</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.creamDim}><span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike }}>预约未订本约</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="direct-expectancy-split" style={{position: 'absolute', left: 0, top: 244, width: 1776, height: 168}}>
          <Panel tone={C.bronze} watermark={<Coins size={120} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>赔偿范围 · 直接 vs 可得</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="直接利益损失：">
                已造成的<Soft color={C.indigoLike}>实际损失</Soft>（违约金·信赖利益）→ 应予赔偿
              </IconChip>
              <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.coral} title="可得利益损失（违约专有）：">
                <Soft color={C.coral}>本可得到却未得到</Soft>——以订立合同时<Under color={C.coral} delay={140}>合理预见</Under>为前提
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="price-gap-rules" style={{position: 'absolute', left: 0, top: 428, width: 1776, height: 340}}>
          <Panel tone={C.slateLike} watermark={<Coins size={140} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.slateLike} icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />}>差价损失 · 市场变化不利时可主张</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.bronze}`, padding: '9px 13px'}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.bronze }}>替代交易差价</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>解约＋替代交易 → 按<Soft color={C.bronze}>差价</Soft>主张·不以合理预见为条件；明显偏离正常价格的除外</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.indigoLike}`, padding: '9px 13px'}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>市场差价</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>解约＋未替代交易 → 按<Soft color={C.indigoLike}>合同价 vs 市场价</Soft>差价主张</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>迟延受领：债务人可请求赔偿<Soft color={C.coral}>增加的费用</Soft>·受领迟延期间<Soft color={C.coral}>无须支付利息</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const HarmfulPerformanceScene = () => {
  /* data-final-knowledge="concise-definition" data-final-knowledge="tort-contract-shelves" data-final-knowledge="emotional-unlock" data-final-knowledge="carrier-block-rule" */
  return (
    <Shell code="03" kicker="加害给付 · 责任竞合" title="加害给付">
      <div
        data-layout="harmful-fork-with-tort-contract-shelves"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="harmful-performance-merges-breach-and-tort-for-the-same-harm,tort-shelf-omits-expectancy-while-contract-shelf-adds-it-plus-penalties,personality-injury-unlocks-emotional-damages-on-either-shelf,carrier-without-harmful-performance-blocks-emotional-damages"
        data-focal-rule="the-harmful-fork-routes-to-tort-shelf-without-expectancy-or-contract-shelf-with-expectancy-plus-penalties"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="concise-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.coral} watermark={<Zap size={110} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.coral} icon={<Zap size={24} color={C.rosePale} strokeWidth={2.2} />}>加害给付 · 定义</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>违约行为造成债权人<Soft color={C.coral}>人身·财产损失</Soft>→ <Soft color={C.indigoLike}>侵权</Soft>与<Soft color={C.bronze}>违约</Soft>责任<Under color={C.coral} delay={120}>竞合</Under>·<Seal delay={140} size={18} tone={C.coral}>择一主张</Seal></span>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="tort-contract-shelves" style={{position: 'absolute', left: 0, top: 128, width: 866, height: 280}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />}>两条货架 · 各有什么</PanelTab>
            <IconChip icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.slateLike} title="侵权货架：">
              财产损失 ✓——<Seal delay={160} size={16}>不含</Seal>可得利益
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.bronze} title="违约货架：">
              财产损失＋可得利益＋违约金＋重作·更换·降价（<Soft color={C.bronze}>违约独有</Soft>）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>违约货架比侵权货架<Soft color={C.bronze}>多出</Soft>：可得利益·违约金·重作·更换·降价</div>
          </Panel>
        </Enter>
        <Enter delay={66} from="right" marker="emotional-unlock" style={{position: 'absolute', left: 910, top: 128, width: 866, height: 280}}>
          <Panel tone={C.coral} watermark={<Zap size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Zap size={24} color={C.rosePale} strokeWidth={2.2} />}>精神损害赔偿竞合</PanelTab>
            <IconChip icon={<Zap size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.coral} title="损害人格权+严重精神损害：">
              走侵权<Soft color={C.coral}>可以主张</Soft>·走违约<Soft color={C.coral}>也可以主张</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>公式：违约精神损害＝<Soft color={C.coral}>加害给付</Soft>＋走侵权也可以（排除纯违约）</div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="carrier-block-rule" style={{position: 'absolute', left: 0, top: 424, width: 1776, height: 344}}>
          <Panel tone={C.slateLike} watermark={<Ban size={140} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.slateLike} icon={<Ban size={24} color={C.rosePale} strokeWidth={2.2} />}>双案对照 · 加害给付的边界</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.bronze}`, padding: '9px 13px'}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.bronze }}>电热水壶案（漏电灼伤）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>违约✓·侵权✓·医疗费＝直接利益<Soft color={C.bronze}>能赔</Soft>·截肢严重→违约也<Soft color={C.jade}>能主张精神损害</Soft>（加害给付成立）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.slateLike}`, padding: '9px 13px'}}>
                <span style={{fontSize: 20, fontWeight: 950, color: C.slateLike }}>出租车案（小牛砸伤乘客）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>违约✓（承运人义务）·侵权<Seal delay={210} size={16}>✗</Seal>·医疗费能赔·但<Soft color={C.slateLike}>非加害给付</Soft>→<Seal delay={240} size={16}>不能主张精神损害</Seal></span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：加害给付＝<Soft color={C.coral}>违约又伤人</Soft>——走侵权<Soft color={C.slateLike}>少了可得</Soft>·走违约<Soft color={C.bronze}>多套救济</Soft>·伤人格<Soft color={C.jade}>均可主张精神</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PenaltyDepositScene = () => {
  /* data-final-knowledge="absorb-adjust-ledger" data-final-knowledge="thirty-percent-window" data-final-knowledge="deposit-either-or" data-final-knowledge="continuation-principle" */
  return (
    <Shell code="04" kicker="违约金 · 定金 · 两金择一" title="违约金与定金">
      <div
        data-layout="penalty-deposit-ledgers-with-adjustment-window"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="penalty-absorbs-damages-when-not-excessively-high,creditor-raises-and-debtor-reduces-across-the-30-percent-line,malicious-defaulters-lose-the-reduction-right,penalty-versus-deposit-is-either-or-while-deposit-plus-damage-continues"
        data-focal-rule="penalty-coins-slide-across-the-30-percent-line-to-trigger-adjustment-windows-in-both-directions"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="absorb-adjust-ledger" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 272}}>
          <Panel tone={C.oxbloodMid} watermark={<Coins size={130} color={C.oxbloodMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.oxbloodMid} icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />}>违约金 vs 赔偿损失 · 吸收与调整</PanelTab>
            <IconChip icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.indigoLike} title="吸收：">
              违约金<Soft color={C.indigoLike}>吸收</Soft>赔偿损失——主张违约金后<Soft color={C.seal}>不再享有</Soft>赔偿请求权
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.bronze} title="债权人申请：">
              违约金<Soft color={C.bronze}>低于</Soft>损失 → 可申请<Under color={C.bronze} delay={150}>增加</Under>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.coral} title="债务人申请：">
              违约金<Soft color={C.coral}>过分高于</Soft>损失 → 可申请<Under color={C.coral} delay={190}>适当减少</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="thirty-percent-window" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 272}}>
          <Panel tone={C.coral} watermark={<Scale size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Scale size={24} color={C.rosePale} strokeWidth={2.2} />}>30% 窗口 · 过分高于标准</PanelTab>
            <IconChip icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.coral} title="标准① 较之于损失：">
              违约金超过损失的<Soft color={C.coral}>30%</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />} tone={C.indigoLike} title="标准② 较之于标的额：">
              违约金<Soft color={C.indigoLike}>明显过高</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>15 万违约金 vs 10 万损失 → 超 30% → 可请求减少；标的 100 万·违约金 40 万 → 明显过高 → 可减少</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="deposit-either-or" style={{position: 'absolute', left: 0, top: 288, width: 1776, height: 172}}>
          <Panel tone={C.seal} watermark={<Coins size={120} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.seal} icon={<Coins size={24} color={C.rosePale} strokeWidth={2.2} />}>违约金与定金 · 两金并存择一主张</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoLike} toneBg={C.bronzePale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>选定金 → 适用定金罚则·违约金不再适用</span></Chip>
              <Chip tone={C.bronze} toneBg={C.bronzePale}><span style={{fontSize: 19, fontWeight: 950, color: C.bronze }}>选违约金 → 定金单倍返还</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 19, fontWeight: 950, color: C.seal }}>定金不得超过主合同标的额 20%</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="continuation-principle" style={{position: 'absolute', left: 0, top: 476, width: 1776, height: 292}}>
          <Panel tone={C.jade} watermark={<Gavel size={140} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>定金与赔偿损失 · 继续履行原则</PanelTab>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.bronze} title="定金罚则＋赔偿：">
              主张定金罚则后仍未弥补 → 就<Soft color={C.bronze}>未弥补的损害</Soft>请求赔偿损失
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 20, fontWeight: 950, color: C.coral }}>🌟 继续履行原则</span></Chip>
              <span>赔偿损失·违约金·定金罚则<Soft color={C.seal}>不能</Soft>作为无需<Soft color={C.indigoLike}>继续履行</Soft>的理由</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：违约金<Soft color={C.indigoLike}>吸收赔偿</Soft>·30%<Soft color={C.coral}>开窗调</Soft>·两金<Soft color={C.bronze}>择一</Soft>·赔完<Soft color={C.seal}>还得继续履行</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
