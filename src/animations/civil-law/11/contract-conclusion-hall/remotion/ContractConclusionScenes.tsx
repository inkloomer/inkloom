import type {CSSProperties, ReactNode} from 'react';
import {ArrowRightLeft, Ban, Coins, Crown, FileStack, Gavel, Home, Replace, Scale, ScrollText, Stamp} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  indigo: '#253A6E',
  indigoMid: '#31498A',
  jadeLike2: '#3E7A64',
  slateInk2: '#48525C',
  sky: '#C9D8F0',
  skyPale: '#E1EAF8',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  brass: '#B08D3E',
  brassPale: '#F0E5C9',
  coral: '#C05B4A',
  coralPale: '#F2DDD8',
  ink: '#232838',
  inkSoft: '#70788C',
  slateInk2: '#48525C',
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

export const Path = ({color = C.brass, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.indigo,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 130px, rgba(201, 216, 240, 0.05) 130px 133px), repeating-linear-gradient(90deg, transparent 0 130px, rgba(0, 0, 0, 0.13) 130px 133px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.coral}, ${C.brass}, ${C.sky})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(201, 216, 240, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.indigoMid, borderLeft: `8px solid ${C.brass}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.skyPale, letterSpacing: 2}}>民法 · 第11讲 · {code}</span>
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
          borderBottom: `2px solid ${C.brass}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.skyPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
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

export const Panel = ({children, marker, tone = C.indigoMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 40, 56, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.indigoMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.indigoMid, borderLeft: `6px solid ${tone}`, color: C.skyPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(176, 141, 62, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
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

export const Under = ({children, color = C.brass, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const OfferAcceptanceScene = () => {
  /* data-final-knowledge="three-step-chain" data-final-knowledge="sort-rules" data-final-knowledge="statutory-invitations" data-final-knowledge="lapse-causes" */
  return (
    <Shell code="01" kicker="要约邀请 · 要约 · 承诺" title="要约邀请、要约、承诺">
      <div
        data-layout="invitation-offer-acceptance-chain-with-lapse"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="invitation-lures-offers-while-offer-proposes-and-acceptance-consents,content-specificity-and-no-disclaimer-sort-offer-from-invitation,four-statutory-invitations-are-price-list-auction-tender-and-prospectus,rejection-revocation-lapse-and-material-change-kill-the-offer"
        data-focal-rule="the-proposal-chip-rides-invitation-offer-acceptance-gates-with-rejection-bouncing-it-into-a-new-offer"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="three-step-chain" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 150}}>
          <Panel tone={C.indigoMid} watermark={<ScrollText size={110} color={C.indigoMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.indigoMid} icon={<ScrollText size={24} color={C.skyPale} strokeWidth={2.2} />}>缔约三连 · 定义</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.slateInk2} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.slateInk2 }}>要约邀请：诱使对方向自己发出要约</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.brass }}>→</span>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>要约：愿意与之订立合同</span></Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.brass }}>→</span>
              <Chip tone={C.coral} toneBg={C.coralPale}><Stamp size={20} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 20, fontWeight: 950, color: C.coral }}>承诺：对要约表示同意</span></Chip>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.inkSoft }}>邀请＝内容空洞的广告·不构成合同内容｜要约＝实质报价｜承诺生效＝<Soft color={C.coral}>合意达成</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="sort-rules" style={{position: 'absolute', left: 0, top: 166, width: 866, height: 232}}>
          <Panel tone={C.brass} watermark={<Scale size={130} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>区分两则 · 水果店案</PanelTab>
            <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoMid} title="① 内容明确具体者：">
              <Soft color={C.indigoMid}>要约</Soft>；否则为邀请——「水果便宜要不？」＝邀请；「<Soft color={C.indigoMid}>西瓜 1 块 1 斤</Soft>要不？」＝要约
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.coral} title="② 未表示不愿受约束者：">
              <Soft color={C.indigoMid}>要约</Soft>；表示了不受约束 → 邀请
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={66} from="right" marker="statutory-invitations" style={{position: 'absolute', left: 910, top: 166, width: 866, height: 232}}>
          <Panel tone={C.indigoMid} watermark={<ScrollText size={130} color={C.indigoMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoMid} icon={<ScrollText size={24} color={C.skyPale} strokeWidth={2.2} />}>法定要约邀请 · 四件套</PanelTab>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>寄送的价目表</span></Chip>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>拍卖公告</span></Chip>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>招标公告</span></Chip>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>招股/募集说明书</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>债券募集办法（10 亿·8%）＝要约邀请——认购合同才是要约承诺，按<Under color={C.seal} delay={160}>合同约定 10%</Under>履行</div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="lapse-causes" style={{position: 'absolute', left: 0, top: 414, width: 1776, height: 254}}>
          <Panel tone={C.coral} watermark={<Ban size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Ban size={24} color={C.skyPale} strokeWidth={2.2} />}>要约失效 · 四事由（撤回≠失效——撤回是阻止生效）</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>① 拒绝要约的通知到达</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>② 要约人依法撤销</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>③ 承诺期限届满未承诺</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>④ 实质性变更（＝拒绝）</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>机器案：9/15 回「不要」→ 原要约失效；9/20 再愿成交 → <Seal delay={200} size={18} tone={C.coral}>新要约</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const BidAuctionAdsScene = () => {
  /* data-final-knowledge="tender-auction-lanes" data-final-knowledge="contract-book-rule" data-final-knowledge="ad-offer-road" data-final-knowledge="big-tree-two-roads" */
  return (
    <Shell code="02" kicker="招标 · 拍卖 · 商业广告" title="招标、拍卖、商业广告">
      <div
        data-layout="parallel-bid-auction-lanes-with-ad-road"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="tender-deals-close-when-the-award-notice-reaches-the-winner,auction-deals-close-at-the-gavel-or-system-confirmation,commercial-ads-become-offers-when-specific-and-binding,offer-ads-act-as-standard-clauses-breach-fraud-and-rescission"
        data-focal-rule="tender-and-auction-chips-race-parallel-lanes-to-their-own-gavel-moments"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="tender-auction-lanes" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 250}}>
          <Panel tone={C.indigoMid} watermark={<Gavel size={130} color={C.indigoMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoMid} icon={<Gavel size={24} color={C.skyPale} strokeWidth={2.2} />}>招标 vs 拍卖 · 三环节对照</PanelTab>
            {(
              [
                {name: '招标方式', cells: ['要约邀请＝招标公告', '要约＝递交投标书', '承诺（Stamp 到达）＝中标通知书送达'], tone: C.indigoMid},
                {name: '拍卖方式', cells: ['要约邀请＝拍卖公告', '要约＝举牌', '承诺＝落槌·系统确认成交'], tone: C.brass},
              ] as const
            ).map((lane) => (
              <div key={lane.name} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Chip tone={lane.tone} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: lane.tone }}>{lane.name}</span></Chip>
                {lane.cells.map((cell, idx) => (
                  <div key={cell} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <Chip tone={lane.tone} toneBg={C.creamDim}><span style={{fontSize: 19, fontWeight: 900, color: lane.tone }}>{cell}</span></Chip>
                    {idx < 2 ? <span style={{fontSize: 22, fontWeight: 950, color: C.brass }}>→</span> : null}
                  </div>
                ))}
              </div>
            ))}
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>拒绝订立合同书 → 原则上<Soft color={C.coral}>不影响</Soft>合同成立；公告·规则事先明定「订立合同书成立」的<Soft color={C.seal}>除外</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="ad-offer-road" style={{position: 'absolute', left: 0, top: 266, width: 866, height: 216}}>
          <Panel tone={C.brass} watermark={<Coins size={130} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.brass} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>商业广告 · 双重身份</PanelTab>
            <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoMid} title="性质区分：">
              既可能＝要约、也可能＝要约邀请——适用<Soft color={C.indigoMid}>一般区分规则</Soft>（内容明确具体＋不排斥约束）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>30 万进口车广告案：内容明确具体＋有效期 → <Seal delay={160} size={17} tone={C.indigoMid}>要约</Seal>；乙买车＝承诺 → 售罄不交付＝<Soft color={C.seal}>违约</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={74} from="left" marker="big-tree-two-roads" style={{position: 'absolute', left: 910, top: 266, width: 866, height: 216}}>
          <Panel tone={C.coral} watermark={<Home size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.coral} icon={<Home size={24} color={C.skyPale} strokeWidth={2.2} />}>构成要约的广告 ＝ 格式条款</PanelTab>
            <IconChip icon={<FileStack size={24} color={C.skyPale} strokeWidth={2.2} />} tone={C.indigoMid} title="效力（公开就算）：">
              广告内容<Soft color={C.indigoMid}>自动构成</Soft>合同条款；未兑现允诺＝违约
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>虚假广告 → 欺诈 → 相对人有权<Soft color={C.seal}>撤销</Soft>（百棵大树案两条路）</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="big-tree-two-roads" style={{position: 'absolute', left: 0, top: 498, width: 1776, height: 270}}>
          <Panel tone={C.coral} watermark={<Home size={140} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.coral} icon={<Home size={24} color={C.skyPale} strokeWidth={2.2} />}>百棵大树案 · 退房的两条路</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<FileStack size={24} color={C.skyPale} strokeWidth={2.2} />} tone={C.indigoMid} title="路① 解除（违约路径）：">
                百棵大树写入广告＝格式条款自动构成合同内容 → 不存在＝<Soft color={C.jadeLike2}>根本违约</Soft> → 乙有权<Seal delay={180} size={18} tone={C.jadeLike2}>解除</Seal>·退房退钱·追<Soft color={C.jadeLike2}>违约责任</Soft>
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.skyPale} strokeWidth={2.2} />} tone={C.seal} title="路② 撤销（欺诈路径）：">
                虚假广告构成<Soft color={C.seal}>欺诈</Soft> → 乙有权<Seal delay={210} size={18}>撤销</Seal>合同·退房退钱·追<Soft color={C.seal}>缔约过失责任</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：广告<Soft color={C.indigoLike}>公开就算</Soft>·食言<Soft color={C.indigoLike}>违约可解除</Soft>·造假<Soft color={C.seal}>欺诈可撤销</Soft>——退房两条路随你选</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const StandardClauseScene = () => {
  /* data-final-knowledge="clause-formula" data-final-knowledge="public-merger-rule" data-final-knowledge="improper-proper-split" data-final-knowledge="interpretation-order" */
  return (
    <Shell code="03" kicker="格式条款 · 效力法庭" title="格式条款">
      <div
        data-layout="clause-court-of-validity-cards"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="unilateral-drafting-plus-reuse-intent-forms-standard-clauses,public-disclosure-alone-merges-them-into-the-contract,improper-exemption-clauses-bind-the-provider-but-not-the-consumer,proper-exemption-needs-real-notice-beyond-ticks-and-popups"
        data-focal-rule="clause-cards-flip-valid-or-invalid-by-whose-side-they-bind-and-whether-notice-was-real"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="clause-formula" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 152}}>
          <Panel tone={C.indigoMid} watermark={<FileStack size={120} color={C.indigoMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.indigoMid} icon={<FileStack size={24} color={C.skyPale} strokeWidth={2.2} />}>格式条款 · 核心公式</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>单方拟制</span></Chip>
              <span style={{fontSize: 22, fontWeight: 950, color: C.brass }}>＋</span>
              <Chip tone={C.indigoMid} toneBg={C.skyPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoMid }}>以重复使用为目的</span></Chip>
              <span style={{fontSize: 22, fontWeight: 950, color: C.brass }}>＝</span>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 20, fontWeight: 950, color: C.coral }}>格式条款</span></Chip>
              <span>约定「其不是格式条款」→ 该约定<Soft color={C.seal}>无效</Soft>，依然是格式条款；实际未重复使用也不影响</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="public-merger-rule" style={{position: 'absolute', left: 0, top: 168, width: 866, height: 188}}>
          <Panel tone={C.brass} watermark={<FileStack size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.brass} icon={<FileStack size={24} color={C.cream} strokeWidth={2.2} />}>公开就算 · 自动构成合同内容</PanelTab>
            <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>店堂告示·标价单·保修卡皆是格式条款——只要<Soft color={C.brass}>公开</Soft>，相对人<Soft color={C.seal}>看没看到</Soft>均自动成为合同内容</span>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>餐厅「10 分钟上菜否则免单」允诺案：乙就餐完才看到 → <Seal delay={170} size={17} tone={C.seal}>仍有权不付款</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={66} from="right" style={{position: 'absolute', left: 910, top: 168, width: 866, height: 188}}>
          <Panel tone={C.slateInk2} watermark={<Scale size={120} color={C.slateInk2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.slateInk2} icon={<Gavel size={24} color={C.skyPale} strokeWidth={2.2} />}>解释顺序 · 三步</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, fontSize: 20, fontWeight: 900, color: C.ink }}>
              <span>① <Soft color={C.slateInk2}>通常解释</Soft>（一般社会通常理解）</span>
              <span>② 通常不能 → <Soft color={C.coral}>不利提供方</Soft>解释</span>
              <span>③ 格式与非格式不一致 → 采用<Soft color={C.indigoMid}>非格式条款</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="improper-proper-split" style={{position: 'absolute', left: 0, top: 372, width: 1776, height: 396}}>
          <Panel tone={C.coral} watermark={<Scale size={150} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.coral} icon={<Scale size={24} color={C.skyPale} strokeWidth={2.2} />}>效力法庭 · 不当 vs 正当免责条款（健身房顺延案·套餐三问）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.coral}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.coral }}><Ban size={20} color={C.coral} strokeWidth={2.6} /> 不当免责条款 → 对相对人无效</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>不合理免除减轻自身责任·加重对方责任·限制排除对方主要权利（「不得变更套餐」→ 无效；「30 年不得变更」→ 期限过长失衡 → 无效）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft }}>但该条款<Soft color={C.coral}>也约束提供方</Soft>的 → 对提供方<Soft color={C.indigoMid}>有效</Soft>（健身房装修顺延 → 仍需付 1000 元）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.jadeLike2}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.jadeLike2 }}>正当免责条款（未严重失衡）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>原则上<Soft color={C.jadeLike2}>有效</Soft>——「1 年内不得变更套餐」属正当免责；但提供方未履行<Soft color={C.seal}>提示·说明义务</Soft>的 → <Seal delay={220} size={16}>不构成合同内容</Seal></span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft }}>电子合同仅「勾选」「弹窗」→ <Soft color={C.seal}>不算</Soft>尽到提示说明义务</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const FutureContractScene = () => {
  /* data-final-knowledge="reservation-limb" data-final-knowledge="blame-liability-rule" data-final-knowledge="form-limb" data-final-knowledge="comparison-strip" */
  return (
    <Shell code="04" kicker="未来订立合同的约定 · 两分" title="预约本约与要式形式">
      <div
        data-layout="reservation-form-fork-with-comparison-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="reservation-pairs-a-skeleton-agreement-with-a-future-main-contract,blame-for-failing-the-main-contract-triggers-reservation-liability,form-pairs-a-complete-agreement-with-a-mere-formal-requirement,performance-accepted-cures-the-missing-form-and-closes-the-deal"
        data-focal-rule="skeleton-papers-fork-into-reservation-contracts-while-complete-papers-fork-into-form-requirement-deals"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="reservation-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 300}}>
          <Panel tone={C.indigoMid} watermark={<FileStack size={140} color={C.indigoMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoMid} icon={<FileStack size={24} color={C.skyPale} strokeWidth={2.2} />}>① 预约 → 本约（A 不健全·无基本要素）</PanelTab>
            <IconChip icon={<FileStack size={24} color={C.skyPale} strokeWidth={2.2} />} tone={C.indigoMid} title="条件：">
              A 合同<Soft color={C.indigoMid}>不具备交易基本要素</Soft>＋采取<Soft color={C.indigoMid}>书面形式</Soft>或支付<Soft color={C.indigoMid}>定金</Soft>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.skyPale} strokeWidth={2.2} />} tone={C.coral} title="关系：">
              两<Soft color={C.seal}>独立</Soft>合同；本约订立＝预约<Soft color={C.coral}>履行</Soft>；可归责一方致本约未订立 → 承担预约上的<Under color={C.seal} delay={160}>违约责任</Under>（认购书半价案 → 乙担责）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="form-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 300}}>
          <Panel tone={C.brass} watermark={<ScrollText size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>② 要式合同 → 形式要件（A 健全·有基本要素）</PanelTab>
            <IconChip icon={<FileStack size={24} color={C.cream} strokeWidth={2.2} />} tone={C.brass} title="关系：">
              A、B 是<Soft color={C.brass}>一个合同</Soft>——A＝要式合同·B＝A 的<Soft color={C.brass}>形式要件</Soft>（1801 房认购书案）
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.coral} title="B 未订立：">
              A 形式要件不具备 → <Soft color={C.coral}>不成立</Soft>——<Under color={C.indigoMid} delay={150}>例外</Under>：主要义务一方<Soft color={C.jadeLike2}>已履行</Soft>且对方<Soft color={C.jadeLike2}>接受</Soft> → A<Seal delay={190} size={17} tone={C.jadeLike2}>成立</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="comparison-strip" style={{position: 'absolute', left: 0, top: 316, width: 1776, height: 452}}>
          <Panel tone={C.slateInk2} watermark={<Scale size={150} color={C.slateInk2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.slateInk2} icon={<Scale size={24} color={C.skyPale} strokeWidth={2.2} />}>对照总表 · 一眼定关系</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.indigoMid}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.indigoMid }}>A 不健全 → 预约·本约（两合同）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>B 未订立且可归责 → 承担 A 合同上的<Soft color={C.indigoMid}>违约责任</Soft></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.brass}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.brass }}>A 健全 → 要式合同·形式要件（一合同）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>B 未订立 → A<Soft color={C.coral}>不成立</Soft>；主要义务已履行且对方接受 → <Soft color={C.jadeLike2}>成立</Soft></span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：看<Soft color={C.goldWire}>基本要素</Soft>——没有＝<Soft color={C.indigoMid}>预约</Soft>（归责才赔）·有＝<Soft color={C.brass}>要式</Soft>（履行可补）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
