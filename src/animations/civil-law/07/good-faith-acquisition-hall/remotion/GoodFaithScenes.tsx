import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, Ban, Car, Coins, FileSignature, Fingerprint, Gavel, Hand, Hourglass, Scale, ScrollText, Search, Send, Shield, Truck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  charcoal: '#2E3338',
  slateMid: '#48525C',
  fog: '#C9D2D6',
  fogPale: '#E5EAEC',
  paper: '#F4F1E8',
  paperDim: '#E9E5D7',
  edge: '#C6BFAE',
  amber: '#B58528',
  amberPale: '#F1E6C8',
  plum: '#7D4A66',
  plumPale: '#EADDE4',
  ink: '#272B2F',
  inkSoft: '#6C747C',
  brick: '#A04A32',
  brickPale: '#F0DEDA',
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
  const t = interpolate(frame, [delay, delay + span], [0, 1], CLAMP);
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

export const Path = ({color = C.amber, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.charcoal,
        color: C.paper,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(255, 255, 255, 0.035) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.plum}, ${C.amber}, ${C.fog})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(201, 210, 214, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.slateMid, borderLeft: `8px solid ${C.amber}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.fogPale, letterSpacing: 2}}>民法 · 第7讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.fogPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.amberPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3, 4].map((dot) => (
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

export const Panel = ({children, marker, tone = C.slateMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.paper, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(39, 43, 47, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.slateMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.slateMid, borderLeft: `6px solid ${tone}`, color: C.fogPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.paper}`, boxShadow: `0 0 0 2px rgba(181, 133, 40, 0.5)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.amber}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.amber, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const OriginalVsDerivativeScene = () => {
  /* data-final-knowledge="original-meaning" data-final-knowledge="derivative-meaning" data-final-knowledge="sorting-rule" data-final-knowledge="acquisition-definition" */
  return (
    <Shell code="01" kicker="取得分类 · 善意取得定义" title="原始取得与继受取得">
      <div
        data-layout="twin-acquisition-cards-with-definition-dais"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="original-acquisition-never-depends-on-the-previous-holders-will,derivative-acquisition-follows-the-previous-holders-will,transfer-and-inheritance-are-derivative-while-other-ways-are-original,good-faith-acquisition-lets-an-innocent-buyer-take-from-an-unauthorised-disposer"
        data-focal-rule="good-faith-acquisition-is-an-original-acquisition-that-ignores-the-disposers-lack-of-title"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="original-meaning" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 232}}>
          <Panel tone={C.amber} watermark={<BadgeCheck size={140} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.amber} icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />}>原始取得</PanelTab>
            <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="核心特征：">
              <Soft color={C.amber}>不以</Soft>前手的意志为条件——基于法律的<Under color={C.amber} delay={110}>直接规定</Under>而取得所有权
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="例：">
              善意取得 · 先占 · 添附 · 抛物拾得
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="derivative-meaning" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 232}}>
          <Panel tone={C.plum} watermark={<Users size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>继受取得</PanelTab>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="核心特征：">
              基于<Soft color={C.plum}>前手</Soft>的意志——从前手那里<Under color={C.plum} delay={140}>取得</Under>所有权
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="例：">
              买卖转让 · 继承 · 赠与
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" marker="sorting-rule" style={{position: 'absolute', left: 0, top: 248, width: 1776, height: 150}}>
          <Panel tone={C.slateMid} watermark={<Scale size={130} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />}>区分标准</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
              <Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 23, fontWeight: 950, color: C.plum}}>转让 · 继承 → 继受取得</span></Chip>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 23, fontWeight: 950, color: C.amber}}>转让·继承以外的方式 → 原始取得</span></Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>红纸窗花案：甲购得红纸＝<Soft color={C.plum}>继受</Soft>；剪成窗花＝<Soft color={C.amber}>原始</Soft>（劳动添附出新物）</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="acquisition-definition" style={{position: 'absolute', left: 0, top: 414, width: 1776, height: 354}}>
          <Panel tone={C.amber} watermark={<BadgeCheck size={150} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 20px'}}>
            <PanelTab tone={C.amber} icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />}>善意取得 · 定义</PanelTab>
            <div style={{fontSize: 25, fontWeight: 900, lineHeight: 1.6}}>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 26, fontWeight: 950, color: C.amber}}>善意取得</span></Chip>
              ＝ <Soft color={C.plum}>无权处分人</Soft>将<Soft color={C.plum}>他人之物</Soft>处分予<Soft color={C.amber}>善意受让人</Soft>的，善意受让人仍可依法取得该物<Under color={C.amber} delay={150}>物权</Under>的法律制度
            </div>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="当事人三角：">
                原所有权人 ← <Soft color={C.plum}>无权处分人</Soft> → <Soft color={C.amber}>善意受让人</Soft>
              </IconChip>
              <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="制度定位：">
                所有权的<Soft color={C.slateMid}>原始取得</Soft>之一——不依赖前手意志，依法律规定取得
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：无权处分<Soft color={C.plum}>卖他物</Soft>·善意之人<Soft color={C.amber}>依法得</Soft>——原主权利<Soft color={C.brick}>让位</Soft>，交易安全优先</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConditionsAppearanceScene = () => {
  /* data-final-knowledge="appearance-limb" data-final-knowledge="unauthorised-limb" data-final-knowledge="abnormal-contracts" data-final-knowledge="authorised-case" */
  return (
    <Shell code="02" kicker="一般条件 · 外观与无权处分" title="善意取得的条件①②">
      <div
        data-layout="gate-flow-with-bounce-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="the-disposer-needs-the-owners-appearance-by-registration-or-possession,unauthorised-disposal-by-contract-is-the-basic-precondition,pick-up-and-inheritance-never-trigger-good-faith-acquisition,gratuitous-or-void-or-rescinded-contracts-block-acquisition"
        data-focal-rule="the-token-first-weighs-on-appearance-then-on-unauthorised-disposal-by-contract"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 190}}>
          <Enter delay={4} from="none" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.slateMid} watermark={<Fingerprint size={130} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.slateMid} icon={<Fingerprint size={24} color={C.fogPale} strokeWidth={2.2} />}>条件闸门 · 处分人侧</PanelTab>
              <div style={{position: 'relative', height: 96}}>
                <div style={{position: 'absolute', left: 0, top: 26}}>
                  <Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 23, fontWeight: 950, color: C.plum}}>处分人</span></Chip>
                </div>
                <Path color={C.amber} delay={54} span={18} style={{position: 'absolute', left: 130, top: 55, width: 130, height: 4}} />
                <Mover delay={60} span={22} fromX={0} toX={130} fadeAt={130} style={{position: 'absolute', left: 20, top: 26, zIndex: 2}}>
                  <Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 23, fontWeight: 950, color: C.plum}}>处分人</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 262, top: 8, border: `3px solid ${C.amber}`, borderRadius: 12, padding: '10px 18px', backgroundColor: C.paper, boxShadow: '0 0 18px rgba(181, 133, 40, 0.35)'}}>
                  <span style={{fontSize: 24, fontWeight: 950, color: C.amber}}>闸① 具有所有权人的外观</span>
                </div>
                <Path color={C.amber} delay={124} span={18} style={{position: 'absolute', left: 600, top: 55, width: 120, height: 4}} />
                <Mover delay={130} span={22} fromX={0} toX={120} fadeAt={196} style={{position: 'absolute', left: 500, top: 26, zIndex: 2}}>
                  <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 22, fontWeight: 950, color: C.amber}}>通过 ✓</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 722, top: 8, border: `3px solid ${C.plum}`, borderRadius: 12, padding: '10px 18px', backgroundColor: C.paper, boxShadow: '0 0 18px rgba(125, 74, 102, 0.3)'}}>
                  <span style={{fontSize: 24, fontWeight: 950, color: C.plum}}>闸② 向第三人实施无权处分</span>
                </div>
                <Path color={C.fog} delay={190} span={18} style={{position: 'absolute', left: 1080, top: 55, width: 200, height: 4}} />
                <span style={{position: 'absolute', left: 1296, top: 28, fontSize: 22, fontWeight: 900, color: C.inkSoft}}>→ 通往「善意·交付」（下页闸③④）</span>
              </div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={40} from="left" marker="appearance-limb" style={{position: 'absolute', left: 0, top: 206, width: 866, height: 252}}>
          <Panel tone={C.amber} watermark={<Fingerprint size={140} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.amber} icon={<Fingerprint size={24} color={C.paper} strokeWidth={2.2} />}>闸① 权利外观 · 三种物</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="不动产：">
              所有权人的不动产，<Soft color={C.plum}>登记</Soft>在处分人名下
            </IconChip>
            <IconChip icon={<Hand size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="普通动产：">
              在处分人的<Soft color={C.slateMid}>占有</Soft>之下——包括<Under color={C.slateMid} delay={130}>直接占有</Under>和<Under color={C.slateMid} delay={160}>间接占有</Under>
            </IconChip>
            <IconChip icon={<Car size={24} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="交通工具：">
              所有权人的交通运输工具，<Soft color={C.amber}>登记</Soft>在处分人名下
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="unauthorised-limb" style={{position: 'absolute', left: 910, top: 206, width: 866, height: 252}}>
          <Panel tone={C.plum} watermark={<Gavel size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />}>闸② 无权处分 · 基本前提</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="形式要求：">
              向第三人实施的无权处分，形式必须表现为<Soft color={C.plum}>合同</Soft>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="有权处分则无关：">
              受让人取得为<Soft color={C.slateMid}>继受取得</Soft>——出租房抵押案：甲抵押<Soft color={C.slateMid}>自己的</Soft>房屋给丙 → 丙继受取得抵押权
            </IconChip>
            <div data-final-knowledge="authorised-case" style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft}}>名画案五连：继承<Seal delay={150} size={17}>不发生</Seal>·未撤销时丙<Seal delay={180} size={17} tone={C.amber}>善意取得</Seal>·撤销后<Seal delay={210} size={17}>不能</Seal>·丁拾得<Seal delay={240} size={17}>不发生</Seal>·刘芬芳受赠<Seal delay={270} size={17}>不能</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="abnormal-contracts" style={{position: 'absolute', left: 0, top: 474, width: 1776, height: 294}}>
          <Panel tone={C.brick} watermark={<Ban size={150} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />}>不能发生善意取得的异常合同或情形 · 三连否决</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brick} title="① 行为性质：">
                <Soft color={C.brick}>拾得·继承</Soft>行为——不发生善意取得
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="② 对价要求：">
                <Soft color={C.plum}>无偿转让</Soft>或<Soft color={C.plum}>显著低价</Soft>转让——受让人不能善意取得（赠送）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="③ 效力要求：">
                合同<Soft color={C.slateMid}>无效</Soft>或被<Soft color={C.slateMid}>撤销</Soft>——受让人不能善意取得
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：外观<Soft color={C.amber}>登记占有</Soft>·处分须<Soft color={C.plum}>无权</Soft>且以<Soft color={C.slateMid}>合同</Soft>为形——拾得继承·无偿贱卖·无效可撤销，三路全封</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConditionsGoodFaithScene = () => {
  /* data-final-knowledge="good-faith-limb" data-final-knowledge="possession-trust-rule" data-final-knowledge="delivery-limb" data-final-knowledge="computer-verdicts" */
  return (
    <Shell code="03" kicker="一般条件 · 善意与交付" title="善意取得的条件③④">
      <div
        data-layout="twin-condition-panels-with-computer-lane"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="good-faith-means-trusting-the-registration-or-possession-appearance,direct-and-indirect-possession-are-both-trustworthy,knowing-the-truth-or-the-co-ownership-defeats-good-faith,possession-assignment-is-absolutely-barred-while-other-deliveries-work"
        data-focal-rule="good-faith-trusts-only-the-appearance-and-the-pledge-never-rides-possession-assignment"
        data-focal-channels="contrast,connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="good-faith-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 456}}>
          <Panel tone={C.amber} watermark={<BadgeCheck size={150} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.amber} icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />}>闸③ 受让人为善意</PanelTab>
            <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="两层含义：">
              <Soft color={C.amber}>消极善意</Soft>＝不知道且不应当知道 · <Soft color={C.amber}>积极善意</Soft>＝基于<Under color={C.amber} delay={130}>所有权人外观</Under>相信其处分自己的财产
            </IconChip>
            <div data-final-knowledge="possession-trust-rule" style={{display: 'flex', flexDirection: 'column', gap: 7}}>
              <IconChip icon={<Hand size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="占有信赖规则：">
                <Soft color={C.slateMid}>直接占有</Soft>可信赖 · <Soft color={C.slateMid}>间接占有</Soft>也可信赖（玉镯连环出借案：信丙·信乙均构成善意取得）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="恶意排除：">
                知道并非处分人所有·或知道是<Soft color={C.plum}>共有</Soft>→ 不能善意取得
              </IconChip>
              <IconChip icon={<Fingerprint size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brick} title="授权书案：">
                善意是相信<Soft color={C.brick}>占有·登记</Soft>——伪造授权书不构成表见事由 → <Seal delay={200} size={18}>不能善意取得</Seal>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="delivery-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 456}}>
          <Panel tone={C.slateMid} watermark={<Truck size={150} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<Truck size={24} color={C.paper} strokeWidth={2.2} />}>闸④ 交付 · 登记</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="区分标准：">
              不动产→办<Soft color={C.plum}>登记</Soft>（过户·抵押）· 普通动产·交通工具→完成<Soft color={C.slateMid}>交付</Soft>
            </IconChip>
            <div style={{display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap'}}>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 21, fontWeight: 950, color: C.amber }}>✓ 现实交付</span></Chip>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 21, fontWeight: 950, color: C.amber }}>✓ 简易交付</span></Chip>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 21, fontWeight: 950, color: C.amber }}>✓ 指示交付</span></Chip>
              <Chip tone={C.brick} toneBg={C.brickPale}><Ban size={20} color={C.brick} strokeWidth={2.6} /><span style={{fontSize: 21, fontWeight: 950, color: C.brick }}>占有改定 绝对禁止</span></Chip>
            </div>
            <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="时间点双重意义：">
              ① 善意取得的<Under color={C.amber} delay={140}>取得时间点</Under> ② 判断<Under color={C.amber} delay={170}>善意</Under>的时间点——抵押登记次日才知情 → 仍<Seal delay={200} size={18} tone={C.amber}>能取得</Seal>（善意是取得要件·非维持要件）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>房屋抵押案：登记时善意取得抵押权 · 登记前一日知情<Seal delay={230} size={17}>不能</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="computer-verdicts" style={{position: 'absolute', left: 0, top: 472, width: 1776, height: 296}}>
          <Panel tone={C.plum} watermark={<Truck size={150} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.plum} icon={<Truck size={24} color={C.paper} strokeWidth={2.2} />}>综合应用 · 甲的电脑交乙保管，乙擅自处分</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Truck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.amber} title="问① 出租丙后又卖丙（丙已占有）：">
                  <Seal delay={180} size={19} tone={C.amber}>能</Seal>——<Soft color={C.amber}>简易交付</Soft>善意取得
                </IconChip>
                <IconChip icon={<Send size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="问② 卖丁·约定租期届满丙返丁：">
                  <Seal delay={210} size={19} tone={C.slateMid}>能</Seal>——<Soft color={C.slateMid}>指示交付</Soft>善意取得
                </IconChip>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brick} title="问③ 约定乙再用1个月后交付丙：">
                  <Seal delay={240} size={19}>不能</Seal>——<Soft color={C.brick}>占有改定</Soft>不得完成善意取得
                </IconChip>
                <div style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>动产质权同理：占有改定设立质权 → 视为未交付·质权不设立</div>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：善意<Soft color={C.amber}>信外观</Soft>·交付<Soft color={C.slateMid}>三式可</Soft>——占有改定<Soft color={C.brick}>一票否决</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LostPropertyScene = () => {
  /* data-final-knowledge="two-year-claim" data-final-knowledge="payment-exceptions" data-final-knowledge="expiry-consequence" data-final-knowledge="special-property-notes" */
  return (
    <Shell code="04" kicker="遗失物 · 2年能要" title="遗失物的善意取得">
      <div
        data-layout="two-year-window-timeline-with-payment-strip"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-owner-may-claim-return-within-two-years-of-knowing-the-transferee,during-the-window-title-stays-with-the-owner,auction-or-registered-trader-purchases-force-the-owner-to-pay,after-the-window-the-transferee-acquires-and-the-claim-dies"
        data-focal-rule="the-claim-arrow-stretches-only-inside-the-two-year-window-then-acquisition-falls"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="two-year-claim" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118}}>
          <Panel tone={C.amber} watermark={<Search size={120} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<Search size={24} color={C.paper} strokeWidth={2.2} />}>2年能要</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>失主有权自<Soft color={C.amber}>知道或应当知道受让人之日</Soft>起 <Chip tone={C.brick} toneBg={C.brickPale}><Hourglass size={20} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 26, fontWeight: 950, color: C.brick }}>2 年内</span></Chip> 请求<Under color={C.amber} delay={120}>返还</Under>遗失物——期间内所有权归<Soft color={C.amber}>失主</Soft>，受让人<Soft color={C.brick}>不能</Soft>善意取得</span>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 134, width: 1776, height: 268}}>
          <Panel tone={C.slateMid} watermark={<Hourglass size={150} color={C.slateMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.slateMid} icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />}>时间轴 · 请求权只活在窗口内</PanelTab>
            <div style={{position: 'relative', height: 120}}>
              <div style={{position: 'absolute', left: 0, top: 44, display: 'flex', alignItems: 'center', gap: 10}}>
                <Chip tone={C.plum} toneBg={C.plumPale}><span style={{fontSize: 22, fontWeight: 950, color: C.plum }}>失主</span></Chip>
              </div>
              <Path color={C.amber} delay={80} span={30} style={{position: 'absolute', left: 110, top: 74, width: 900, height: 6}} />
              <span style={{position: 'absolute', left: 420, top: 40, fontSize: 22, fontWeight: 950, color: C.amber }}>← 2 年期间 · 可请求返还 →</span>
              <Mover delay={86} span={28} fromX={0} toX={900} fadeAt={160} style={{position: 'absolute', left: 116, top: 46, zIndex: 2}}>
                <Chip tone={C.amber} toneBg={C.amberPale}><Search size={22} color={C.amber} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.amber }}>返还请求权</span></Chip>
              </Mover>
              <div style={{position: 'absolute', right: 220, top: 30, border: `3px solid ${C.brick}`, borderRadius: 12, padding: '8px 16px', backgroundColor: C.paper}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.brick }}>2年期满</span>
              </div>
              <div style={{position: 'absolute', right: 0, top: 22, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end'}}>
                <Seal delay={170} size={19} tone={C.brick}>期满未请求 → 受让人善意取得</Seal>
                <Seal delay={200} size={19}>失主返还原物请求权消灭</Seal>
              </div>
              <div style={{position: 'absolute', left: 110, top: 92, fontSize: 21, fontWeight: 900, color: C.inkSoft }}>连环处分：受让人又卖给次受让人 → 自知道次受让人之日起<Under color={C.slateMid} delay={200}>重新起算 2 年</Under></div>
            </div>
            <IconChip icon={<Shield size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="留置权例外：">
              遗失物上的<Soft color={C.plum}>留置权人</Soft>，可<Seal delay={220} size={18} tone={C.plum}>拒绝返还</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="payment-exceptions" style={{position: 'absolute', left: 0, top: 418, width: 1776, height: 200}}>
          <Panel tone={C.brick} watermark={<Coins size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.brick} icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />}>原则无偿 · 两种例外要付费</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slateMid} title="原则：">
                失主请求返还时<Soft color={C.slateMid}>无需支付</Soft>受让人所付费用
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brick} title="例外① 拍卖购得：">
                应当<Soft color={C.brick}>支付</Soft>取得时的费用
              </IconChip>
              <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="例外② 向有经营资格的经营者购得：">
                应当<Soft color={C.plum}>支付</Soft>费用
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>电脑案：甲的电脑→乙拾得→卖给电脑销售商→丙 4000 元购得——甲<Soft color={C.amber}>2年内</Soft>可请求丙返还，且<Soft color={C.brick}>须支付 4000 元</Soft>（丙向经营者购得）</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" marker="special-property-notes" style={{position: 'absolute', left: 0, top: 634, width: 1776, height: 134}}>
          <Panel tone={C.plum} watermark={<Search size={110} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.plum} icon={<Search size={24} color={C.paper} strokeWidth={2.2} />}>特殊动产速记</PanelTab>
            <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 22, fontWeight: 950, color: C.amber }}>遗失物 · 受 2 年期间限制</span></Chip>
            <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 22, fontWeight: 950, color: C.brick }}>盗赃物 · 不得善意取得</span></Chip>
            <Chip tone={C.slateMid} toneBg={C.fogPale} ink={C.slateMid}><span style={{fontSize: 22, fontWeight: 950 }}>埋藏物·漂流物·失散动物 · 适用遗失物规则</span></Chip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConsequencesScene = () => {
  /* data-final-knowledge="ownership-outcome" data-final-knowledge="security-outcome" data-final-knowledge="three-remedy-lanes" data-final-knowledge="pick-one-rule" */
  return (
    <Shell code="05" kicker="后果 · 救济" title="善意取得的后果与救济">
      <div
        data-layout="two-outcome-cards-with-remedy-lanes"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="good-faith-acquisition-of-ownership-extinguishes-the-original-title,acquisition-of-a-security-right-leaves-the-title-with-a-burden,the-owner-charges-the-disposer-along-tort-breach-or-unjust-enrichment,the-three-claims-compete-and-the-owner-picks-exactly-one"
        data-focal-rule="three-remedy-chips-travel-from-the-disposer-to-the-owner-and-only-one-lane-may-be-picked"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 264}}>
          <Enter delay={4} from="left" marker="ownership-outcome" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 264}}>
            <Panel tone={C.brick} watermark={<BadgeCheck size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.brick} icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />}>善意取得所有权 →</PanelTab>
              <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brick} title="原所有权：">
                <Seal delay={140} size={20}>归于消灭</Seal>——电脑 A 案：丙善意取得所有权，甲的所有权消灭
              </IconChip>
            </Panel>
          </Enter>
          <Enter delay={30} from="right" marker="security-outcome" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 264}}>
            <Panel tone={C.plum} watermark={<Scale size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.plum} icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />}>善意取得他物权（质权）→</PanelTab>
              <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="原所有权：">
                <Soft color={C.plum}>不消灭</Soft>——善意取得的他物权成为原所有权上的<Under color={C.plum} delay={160}>负担</Under>（乙未还款·丙可对甲的电脑行使质权）
              </IconChip>
            </Panel>
          </Enter>
        </div>
        <Enter delay={70} from="up" marker="three-remedy-lanes" style={{position: 'absolute', left: 0, top: 280, width: 1776, height: 488}}>
          <Panel tone={C.amber} watermark={<Scale size={150} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.amber} icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />}>对原所有权人的救济 · 三条路径（5000 元电脑以 1 万卖出）</PanelTab>
            {(
              [
                {tone: C.brick, icon: <Gavel size={24} color={C.paper} strokeWidth={2.2} />, name: '① 侵权路径', rule: '追究无权处分人的侵权责任——请求赔偿损失', amount: '5000 元', delay: 130},
                {tone: C.slateMid, icon: <FileSignature size={24} color={C.paper} strokeWidth={2.2} />, name: '② 违约路径', rule: '有保管·借用·租赁等合同关系的，追究违约责任', amount: '5000 元', delay: 170},
                {tone: C.plum, icon: <Coins size={24} color={C.paper} strokeWidth={2.2} />, name: '③ 不当得利路径', rule: '无权处分人获得价金的，请求返还不当得利', amount: '1 万元', delay: 210},
              ] as const
            ).map((lane) => (
              <div key={lane.name} style={{position: 'relative', height: 88, backgroundColor: C.paperDim, borderLeft: `6px solid ${lane.tone}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 14px'}}>
                <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: lane.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{lane.icon}</span>
                <span style={{fontSize: 23, fontWeight: 950, color: lane.tone, width: 220}}>{lane.name}</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink, width: 560}}>{lane.rule}</span>
                <Path color={lane.tone} delay={lane.delay} span={20} style={{position: 'absolute', left: 960, top: 42, width: 380, height: 4}} />
                <Mover delay={lane.delay + 6} span={24} fromX={0} toX={380} fadeAt={lane.delay + 70} style={{position: 'absolute', left: 966, top: 22, zIndex: 2}}>
                  <Chip tone={lane.tone} toneBg={C.paper}><Coins size={20} color={lane.tone} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: lane.tone }}>{lane.amount}</span></Chip>
                </Mover>
                <span style={{position: 'absolute', right: 16, fontSize: 26, fontWeight: 950, color: lane.tone }}>{lane.amount}</span>
              </div>
            ))}
            <div data-final-knowledge="pick-one-rule" style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.amber} toneBg={C.amberPale}><Scale size={22} color={C.amber} strokeWidth={2.4} /><span style={{fontSize: 23, fontWeight: 950, color: C.amber }}>请求权竞合 · 择一主张</span></Chip>
              <span>三条路通向同一个乙——甲只能<Under color={C.amber} delay={260}>选一条</Under>走</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
