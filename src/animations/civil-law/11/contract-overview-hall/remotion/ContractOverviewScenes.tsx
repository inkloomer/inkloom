import type {CSSProperties, ReactNode} from 'react';
import {Ban, Car, CircleHelp, Coins, Gavel, GitFork, Handshake, HeartHandshake, Megaphone, Scale, ScanSearch, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  mauve: '#54425C',
  mauveMid: '#685372',
  silk: '#E3D3E0',
  silkPale: '#F0E6ED',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  gilt: '#C9A13B',
  giltPale: '#F0E7C9',
  jade: '#4E7A6E',
  jadePale: '#DDEBE8',
  seal: '#B04A38',
  sealPale: '#F0DEDA',
  ink: '#2B2430',
  inkSoft: '#7A6F80',
  indigoLike: '#3A5578',
  billowPaleLike: '#E3EEF7',
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

export const Path = ({color = C.gilt, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.mauve,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 136px, rgba(227, 211, 224, 0.05) 136px 139px), repeating-linear-gradient(90deg, transparent 0 136px, rgba(0, 0, 0, 0.12) 136px 139px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.seal}, ${C.gilt}, ${C.jade})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(227, 211, 224, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.mauveMid, borderLeft: `8px solid ${C.gilt}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.silkPale, letterSpacing: 2}}>民法 · 第11讲 · {code}</span>
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
          borderBottom: `2px solid ${C.gilt}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.silkPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.giltPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.gilt : 'transparent',
              border: `2px solid ${C.gilt}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.mauveMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(43, 36, 48, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.mauveMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.mauveMid, borderLeft: `6px solid ${tone}`, color: C.silkPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(201, 161, 59, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.gilt, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const RewardNoticeScene = () => {
  /* data-final-knowledge="reward-definition" data-final-knowledge="nature-splits" data-final-knowledge="claim-conditions" data-final-knowledge="table-recap" */
  return (
    <Shell code="01" kicker="悬赏广告 · 单方允诺" title="悬赏广告">
      <div
        data-layout="reward-dais-with-twin-nature-splits"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-reward-notice-is-a-unilateral-promise-never-an-offer,completing-the-act-is-a-fact-act-never-an-acceptance,the-coin-flies-regardless-of-capacity-or-prior-knowledge,the-finished-act-itself-earns-the-claimed-reward"
        data-focal-rule="the-coin-flies-to-any-finisher-regardless-of-capacity-or-prior-knowledge"
        data-focal-channels="contrast,icon,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="reward-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.mauveMid} watermark={<Megaphone size={110} color={C.mauveMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.mauveMid} icon={<Megaphone size={24} color={C.silkPale} strokeWidth={2.2} />}>悬赏广告 · 定义</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>悬赏人对外作出的、向完成<Soft color={C.gilt}>指定行为</Soft>的人支付<Soft color={C.gilt}>赏金</Soft>的意思表示——如载明赏金的<Under color={C.gilt} delay={120}>寻物启事</Under></span>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="nature-splits" style={{position: 'absolute', left: 0, top: 128, width: 1776, height: 224}}>
          <Panel tone={C.jade} watermark={<Gavel size={130} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.jade} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>两个性质切分 · 不是你想的那样</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.gilt}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.ink }}>悬赏广告的法律性质</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}><Seal delay={150} size={18} tone={C.jade}>单方允诺</Seal> 而不是 <span style={{textDecoration: 'line-through', color: C.seal}}>要约</span></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.seal}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.ink }}>完成指定行为的性质</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}><Seal delay={180} size={18}>事实行为</Seal> 而不是 <span style={{textDecoration: 'line-through', color: C.seal}}>承诺</span></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 368, width: 1776, height: 180}}>
          <Enter delay={70} from="none" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.gilt} watermark={<Coins size={130} color={C.gilt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '11px 18px'}}>
              <PanelTab tone={C.gilt} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>赏金请求权 · 完成即有权请求支付</PanelTab>
              <div style={{position: 'relative', height: 84}}>
                <div style={{position: 'absolute', left: 0, top: 24}}>
                  <Chip tone={C.gilt} toneBg={C.giltPale}><Megaphone size={22} color={C.gilt} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.gilt }}>悬赏广告</span></Chip>
                </div>
                <Path color={C.gilt} delay={110} span={20} style={{position: 'absolute', left: 230, top: 56, width: 320, height: 4}} />
                <Mover delay={116} span={22} fromX={0} toX={320} fadeAt={180} style={{position: 'absolute', left: 16, top: 24, zIndex: 2}}>
                  <Chip tone={C.gilt} toneBg={C.giltPale}><Coins size={20} color={C.gilt} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.gilt }}>赏金</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 566, top: 18}}>
                  <Chip tone={C.jade} toneBg={C.jadePale}><Gavel size={22} color={C.jade} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.jade }}>完成指定行为的人（事实行为）</span></Chip>
                </div>
                <div style={{position: 'absolute', right: 0, top: 4, display: 'flex', flexDirection: 'column', gap: 5, fontSize: 20, fontWeight: 900, color: C.ink }}>
                  <span><Ban size={19} color={C.jade} strokeWidth={2.6} /> 无需具备<Soft color={C.jade}>民事行为能力</Soft></span>
                  <span><Ban size={19} color={C.jade} strokeWidth={2.6} /> 无需<Soft color={C.jade}>事先知道</Soft>悬赏广告存在</span>
                </div>
              </div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={120} from="up" marker="table-recap" style={{position: 'absolute', left: 0, top: 564, width: 1776, height: 204}}>
          <Panel tone={C.seal} watermark={<Megaphone size={120} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.seal} icon={<Megaphone size={24} color={C.blossomPale} strokeWidth={2.2} />}>总览表 · 三行记牢</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.gilt} toneBg={C.giltPale}><span style={{fontSize: 20, fontWeight: 950, color: C.gilt }}>悬赏广告性质＝单方允诺（非要约）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.billowPaleLike}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>指定行为＝事实行为（非承诺）</span></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 20, fontWeight: 950, color: C.jade }}>赏金请求权：完成即可请求——不问行为能力·不问事先知晓</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：悬赏是<Soft color={C.gilt}>允诺</Soft>·完成是<Soft color={C.jade}>事实</Soft>——两不问（能力·知晓），做了就<Soft color={C.seal}>给钱</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const NamelessKindnessScene = () => {
  /* data-final-knowledge="nameless-limb" data-final-knowledge="kindness-limb" data-final-knowledge="ride-four-verdicts" data-final-knowledge="reduction-rule" */
  return (
    <Shell code="02" kicker="无名合同 · 好意施惠" title="无名合同与好意施惠">
      <div
        data-layout="kindness-ride-lane-with-tort-wall"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="nameless-contracts-stay-valid-under-freedom-and-borrow-nearest-rules,courtesy-promises-bear-no-contract-liability-at-all,the-free-ride-still-meets-third-party-contracts-on-the-road,gross-negligence-removes-the-good-samaritan-reduction"
        data-focal-rule="the-courtesy-ride-drives-through-four-verdict-gates-past-the-tort-wall"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="nameless-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 288}}>
          <Panel tone={C.indigoLike} watermark={<CircleHelp size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<CircleHelp size={24} color={C.billowPaleLike} strokeWidth={2.2} />}>无名合同 · 四不像也有效</PanelTab>
            <IconChip icon={<CircleHelp size={24} color={C.billowPaleLike} strokeWidth={2.2} />} tone={C.indigoLike} title="含义与效力：">
              法律中没有<Soft color={C.indigoLike}>明确规定</Soft>的合同——依<Soft color={C.jadeLike2}>合同自由</Soft>原则，不因未规定而<Soft color={C.seal}>无效</Soft>
            </IconChip>
            <IconChip icon={<ScrollText size={24} color={C.billowPaleLike} strokeWidth={2.2} />} tone={C.slateInk} title="法律适用：">
              ① 合同编第一分编「通则」的<Soft color={C.slateInk}>一般性规定</Soft> ② 参照适用最相类似的<Soft color={C.indigoLike}>有名合同</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>手机换电脑案：无名合同 → 有效；适用通则＋参照买卖合同规则</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="kindness-limb" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 288}}>
          <Panel tone={C.seal} watermark={<HeartHandshake size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.seal} icon={<HeartHandshake size={24} color={C.blossomPale} strokeWidth={2.2} />}>好意施惠（情谊行为）</PanelTab>
            <IconChip icon={<HeartHandshake size={24} color={C.blossomPale} strokeWidth={2.2} />} tone={C.seal} title="含义：">
              无产生<Soft color={C.seal}>合同法律关系</Soft>意思的前提下一方施予<Soft color={C.seal}>好处·便利</Soft>
            </IconChip>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>搭便车</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>请客</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>陪同</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>无偿帮工</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>约定<Soft color={C.seal}>没有法律意义</Soft>——违反不产生合同责任；但履行中构成<Soft color={C.indigoLike}>法律关系</Soft>的则有意义</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="ride-four-verdicts" style={{position: 'absolute', left: 0, top: 304, width: 1776, height: 348}}>
          <Panel tone={C.gilt} watermark={<Car size={150} color={C.gilt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.gilt} icon={<Car size={24} color={C.cream} strokeWidth={2.2} />}>搭便车四问 · 乙搭甲的便车去机场</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="① 甲忘搭载乙：">
                <Seal delay={170} size={18}>不能追违约</Seal>——好意施惠约定不是法律事实·无法律意义
              </IconChip>
              <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.gilt} title="② 高速过路费谁交：">
                <Seal delay={200} size={18} tone={C.gilt}>乙要交</Seal>——履行中施惠人·受惠人仍可与第三人成立合同关系
              </IconChip>
            </div>
            <div data-final-knowledge="reduction-rule" style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.jadeLike2} title="③ 撞栏杆致乙损害：">
                <Seal delay={230} size={18} tone={C.jadeLike2}>担侵权责任</Seal>——好意施惠依法<Soft color={C.jadeLike2}>减轻</Soft>甲的责任
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="④ 边开车边刷抖音：">
                <Seal delay={260} size={18}>不能减轻</Seal>——刷抖音属<Soft color={C.seal}>重大过失</Soft>，除外情形
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：好意施惠<Soft color={C.seal}>不担合同责</Soft>·侵权仍担但<Soft color={C.jadeLike2}>可减</Soft>——故意重大过失<Soft color={C.seal}>不减</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const InterpretationLoomScene = () => {
  /* data-final-knowledge="literal-loom" data-final-knowledge="system-purpose-usage-loom" data-final-knowledge="good-faith-loom" data-final-knowledge="contrary-valid-loom" */
  return (
    <Shell code="03" kicker="合同的解释 · 七种方法" title="合同的解释">
      <div
        data-layout="seven-loom-sequence-with-precedence"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="literal-meaning-reads-the-usual-social-understanding-first,system-purpose-and-usage-loom-undrafted-terms-from-context-aim-and-trade,good-faith-excuses-trivial-breach-from-agreed-penalties,contrary-and-valid-interpretations-rescue-format-portrait-and-gratuitous-terms"
        data-focal-rule="seven-interpretation-looms-each-thread-one-case-cloth-from-word-to-validity"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="up" marker="literal-loom" style={{position: 'absolute', left: 0, top: 0, width: 572, height: 216}}>
          <Panel tone={C.gilt} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 16px'}}>
            <PanelTab tone={C.gilt} icon={<ScanSearch size={22} color={C.cream} strokeWidth={2.2} />}>① 文义解释</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.gilt }}>按一般社会观念的最通常理解</span>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft }}>加油站爆炸≠「地震」→ 修缮费甲全担</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="up" style={{position: 'absolute', left: 602, top: 0, width: 572, height: 216}}>
          <Panel tone={C.indigoLike} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<GitFork size={22} color={C.billowPaleLike} strokeWidth={2.2} />}>② 体系解释（整体）</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>靠条款间逻辑联系推导未约定内容</span>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft }}>月租 2000·总租 4.8 万 → 租期 24 个月</div>
          </Panel>
        </Enter>
        <Enter delay={64} from="up" style={{position: 'absolute', left: 1204, top: 0, width: 572, height: 216}}>
          <Panel tone={C.jadeLike2} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 16px'}}>
            <PanelTab tone={C.jadeLike2} icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />}>③ 目的解释</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.jadeLike2 }}>按订约所欲追求的目的定未约条款</span>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft }}>「二本线」＝今年高考线 → 退费</div>
          </Panel>
        </Enter>
        <Enter delay={94} from="up" style={{position: 'absolute', left: 0, top: 232, width: 572, height: 216}}>
          <Panel tone={C.seal} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 16px'}}>
            <PanelTab tone={C.seal} icon={<Handshake size={22} color={C.blossomPale} strokeWidth={2.2} />}>④ 习惯·惯例解释</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>以交易习惯·惯例界定权利义务</span>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft }}>多次先钱后货 → 本次照旧</div>
          </Panel>
        </Enter>
        <Enter delay={124} from="up" style={{position: 'absolute', left: 602, top: 232, width: 572, height: 216}}>
          <Panel tone={C.seal} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 16px'}}>
            <PanelTab tone={C.seal} icon={<HeartHandshake size={22} color={C.blossomPale} strokeWidth={2.2} />}>⑤ 诚信原则解释</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>从诚实守信·与人为善出发</span>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft }}>短少 10 公斤 → 10 万违约金不适用</div>
          </Panel>
        </Enter>
        <Enter delay={154} from="up" style={{position: 'absolute', left: 1204, top: 232, width: 572, height: 216}}>
          <Panel tone={C.slateInk} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 16px'}}>
            <PanelTab tone={C.slateInk} icon={<Ban size={22} color={C.bone} strokeWidth={2.2} />}>⑥ 不利解释（通常不能时）</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.slateInk }}>作不利于特定一方的解释</span>
            <div style={{marginTop: 'auto', fontSize: 19, fontWeight: 900, color: C.inkSoft }}>格式→提供方·肖像→使用方·无偿→债权人</div>
          </Panel>
        </Enter>
        <Enter delay={184} from="up" marker="contrary-valid-loom" style={{position: 'absolute', left: 0, top: 464, width: 1776, height: 304}}>
          <Panel tone={C.mauveMid} watermark={<ScrollText size={140} color={C.mauveMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.mauveMid} icon={<ScrollText size={24} color={C.silkPale} strokeWidth={2.2} />}>⑦ 有效解释 · 最后的安全网</PanelTab>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink }}>当不同的解释会<Soft color={C.indigoLike}>影响合同效力</Soft>时 → 应当作导致合同<Seal delay={160} size={20} tone={C.jadeLike2}>有效</Seal>的解释</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：文义<Soft color={C.gilt}>先</Soft>·体系目的习惯<Soft color={C.indigoLike}>跟</Soft>·诚信<Soft color={C.seal}>恕小过</Soft>·不利<Soft color={C.slateInk}>护弱方</Soft>·有疑<Soft color={C.jadeLike2}>从有效</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
