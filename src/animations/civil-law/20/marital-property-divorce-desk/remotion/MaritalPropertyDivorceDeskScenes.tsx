import type {CSSProperties, ReactNode} from 'react';
import {
  Baby,
  Ban,
  Coins,
  FileSignature,
  Gavel,
  HandCoins,
  Heart,
  HeartHandshake,
  Home,
  Hourglass,
  Scale,
  ScrollText,
  Shield,
  Sprout,
  Split,
  TrendingUp,
  Undo2,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  walnut: '#43332A',
  walnutDeep: '#342620',
  walnutMid: '#57453A',
  linen: '#F6EFE0',
  linenDim: '#EBE2CE',
  sepia: '#3D332A',
  sepiaSoft: '#837663',
  persimmon: '#C75B2E',
  persimmonPale: '#F8E1D3',
  moss: '#6B7C4F',
  mossPale: '#E6EBD8',
  plum: '#9E3E52',
  plumPale: '#F4DDE2',
  brass: '#A9853C',
  brassPale: '#F1E6C8',
  edge: '#D3C5A9',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 20,
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

export const LineH = ({
  delay = 0,
  tone,
  thickness = 4,
  span = 20,
  head = true,
  style,
}: {
  readonly delay?: number;
  readonly tone: string;
  readonly thickness?: number;
  readonly span?: number;
  readonly head?: boolean;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <span style={{position: 'absolute', ...style}}>
      <span style={{position: 'absolute', inset: 0, backgroundColor: tone, borderRadius: thickness / 2, transformOrigin: 'left center', scaleX: p}} />
      {head ? (
        <span
          style={{
            position: 'absolute',
            right: -9,
            top: '50%',
            translate: '0 -50%',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: `10px solid ${tone}`,
            opacity: p,
          }}
        />
      ) : null}
    </span>
  );
};

export const LineV = ({
  delay = 0,
  tone,
  thickness = 4,
  span = 20,
  head = true,
  origin = 'top',
  style,
}: {
  readonly delay?: number;
  readonly tone: string;
  readonly thickness?: number;
  readonly span?: number;
  readonly head?: boolean;
  readonly origin?: 'bottom' | 'top';
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <span style={{position: 'absolute', ...style}}>
      <span style={{position: 'absolute', inset: 0, backgroundColor: tone, borderRadius: thickness / 2, transformOrigin: origin === 'top' ? 'center top' : 'center bottom', scaleY: p}} />
      {head ? (
        <span
          style={{
            position: 'absolute',
            ...(origin === 'top'
              ? {bottom: -9, left: '50%', translate: '-50% 0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: `10px solid ${tone}`}
              : {top: -9, left: '50%', translate: '-50% 0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `10px solid ${tone}`}),
            opacity: p,
          }}
        />
      ) : null}
    </span>
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(4, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.walnut,
        color: C.linen,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 118px, rgba(255, 255, 255, 0.04) 118px 121px), repeating-linear-gradient(0deg, transparent 0 30px, rgba(0, 0, 0, 0.12) 30px 32px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.persimmon}, ${C.brass}, ${C.moss})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(246, 239, 224, 0.28)'}} />
      <span style={{position: 'absolute', left: 34, top: 34, width: 14, height: 14, backgroundColor: C.brass, opacity: 0.85}} />
      <span style={{position: 'absolute', right: 34, top: 34, width: 14, height: 14, backgroundColor: C.brass, opacity: 0.85}} />
      <span style={{position: 'absolute', left: 34, bottom: 34, width: 14, height: 14, backgroundColor: C.brass, opacity: 0.85}} />
      <span style={{position: 'absolute', right: 34, bottom: 34, width: 14, height: 14, backgroundColor: C.brass, opacity: 0.85}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.walnutDeep, borderLeft: `8px solid ${C.brass}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.linen, letterSpacing: 2}}>民法 · 第20讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.linen}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 9, opacity: 0.9}}>
        {[0, 1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.persimmon : 'transparent',
              border: `2px solid ${C.brass}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.brass, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.linen, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.sepia, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(52, 38, 32, 0.42)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.brass, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.walnutDeep, borderLeft: `6px solid ${tone}`, color: C.linen, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.linenDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.linen}`, boxShadow: '0 0 0 2px rgba(169, 133, 60, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.sepia, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.plum}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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
        rotate: '-3deg',
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

export const Chip = ({children, tone = C.edge, toneBg = C.linenDim, ink = C.sepia}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const PropertyOwnershipGatesScene = () => {
  /* data-final-knowledge="ownership-principle" data-final-knowledge="ownership-exceptions" data-final-knowledge="inheritance-property-rules" data-final-knowledge="cohabitation-property" */
  return (
    <Shell code="01" kicker="夫妻财产关系 · 归属总则" title="夫妻财产的归属">
      <div
        data-layout="ownership-gates-with-inheritance-lanes"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="premarital-acquisitions-stay-personal-and-postmarital-acquisitions-become-common,bodily-injury-awards-dedicated-items-and-agreements-stay-personal-despite-marriage,premarital-inheritance-is-personal-unless-both-are-named-while-postmarital-is-common-unless-one-is-named,cohabitation-property-follows-agreements-else-personal-ownership-with-proportional-co-purchase"
        data-focal-rule="acquisition-time-opens-the-ownership-gate-premarital-personal-postmarital-common-unless-an-exception-or-an-explicit-naming-diverts-it"
        data-focal-channels="icon,contrast,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="ownership-principle" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128}}>
          <Panel tone={C.brass} watermark={<Users size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.brass} icon={<Split size={24} color={C.linen} strokeWidth={2.2} />}>归属之门 · 以取得时间分流</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, flex: 1}}>
              <Chip tone={C.moss} toneBg={C.mossPale} ink={C.moss}><UserRound size={24} color={C.moss} strokeWidth={2.2} />婚前取得 → 归个人所有</Chip>
              <span style={{fontSize: 26, fontWeight: 950, color: C.sepiaSoft}}>·</span>
              <Chip tone={C.persimmon} toneBg={C.persimmonPale} ink={C.persimmon}><Users size={24} color={C.persimmon} strokeWidth={2.2} />婚后取得 → 归共同共有</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>不动产登记「加名字」→ 构成归属的<Under color={C.brass} delay={130}>另行约定</Under></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="ownership-exceptions" style={{position: 'absolute', left: 0, top: 142, width: 866, height: 288}}>
          <Panel tone={C.moss} watermark={<UserRound size={120} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />}>婚内仍归个人的三项例外</PanelTab>
            <IconChip icon={<Heart size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="① 身体伤害所得：" style={{flex: 1}}>
              因身体伤害取得的财产，纵然婚内取得，也为<Soft color={C.plum}>个人财产</Soft>
            </IconChip>
            <IconChip icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="② 一方专用物品：" style={{flex: 1}}>
              为一方专用之物品，纵然婚内取得，也为<Soft color={C.moss}>个人财产</Soft>
            </IconChip>
            <IconChip icon={<FileSignature size={24} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="③ 财产协议：" style={{flex: 1}}>
              夫妻双方可以通过<Soft color={C.brass}>财产协议</Soft>约定财产的归属
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="inheritance-property-rules" style={{position: 'absolute', left: 910, top: 142, width: 866, height: 288}}>
          <Panel tone={C.persimmon} watermark={<ScrollText size={120} color={C.persimmon} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.persimmon} icon={<ScrollText size={24} color={C.linen} strokeWidth={2.2} />}>一方继承、受遗赠的财产</PanelTab>
            <IconChip icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="婚前继承、受遗赠：" style={{flex: 1.1}}>
              原则归<Soft color={C.moss}>个人所有</Soft>；被继承人、遗赠人<Under color={C.persimmon} delay={140}>明示</Under>归双方的，<Soft color={C.persimmon}>从其明示</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="婚后继承、受遗赠：" style={{flex: 1.1}}>
              原则归<Soft color={C.persimmon}>夫妻共有</Soft>；明示归<Under color={C.moss} delay={180}>一方</Under>的，<Soft color={C.moss}>从其明示</Soft>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>记忆：婚前看「归双方」的明示；婚后看「归一方」的明示——明示一律优先</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="cohabitation-property" style={{position: 'absolute', left: 0, top: 444, width: 1776, height: 168}}>
          <Panel tone={C.plum} watermark={<Coins size={110} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />}>同居期间取得的财产</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<FileSignature size={24} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="有约定：" style={{flex: 0.9}}>
                <Soft color={C.brass}>从其约定</Soft>
              </IconChip>
              <IconChip icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="无约定·原则：" style={{flex: 1}}>
                归<Soft color={C.moss}>个人所有</Soft>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="无约定·共同购买：" style={{flex: 1.2}}>
                按照<Soft color={C.persimmon}>出资比例</Soft>确认为<Soft color={C.persimmon}>按份共有</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 0, top: 626, width: 1776, height: 142}}>
          <Panel tone={C.brass} watermark={<FileSignature size={100} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<FileSignature size={22} color={C.linen} strokeWidth={2.2} />}>婚内分割的共同财产 · 重大理由除外</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>婚姻存续期间原则上<Under color={C.brass} delay={220}>不得请求分割</Under>；但一方<Soft color={C.plum}>隐藏、转移、变卖、毁损、挥霍</Soft>共同财产或伪造共同债务的（为重婚、同居目的赠与他人或以<Soft color={C.plum}>明显不合理</Soft>价格处分＝转移；直播打赏超出家庭一般消费水平＝<Soft color={C.plum}>挥霍</Soft>），或一方患<Soft color={C.persimmon}>重大疾病</Soft>另一方不同意支付医疗费的，可请求<Soft color={C.persimmon}>婚内分割</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const HouseAndFruitScene = () => {
  /* data-final-knowledge="premarital-house-rule" data-final-knowledge="common-house-rules" data-final-knowledge="fruit-classification" data-final-knowledge="obtainable-vs-actual" */
  return (
    <Shell code="02" kicker="房屋 · 收益孳息增值" title="房屋归属与孳息增值">
      <div
        data-layout="house-lanes-with-fruit-arrows-and-timing-rule"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-visual-grammar="the-premarital-house-stays-with-its-buyer-who-compensates-joint-repayments-and-value-growth,common-fund-purchases-are-common-even-in-one-name-while-parent-titled-reform-flats-stay-with-parents,operating-gains-are-common-while-fruits-and-appreciation-stay-with-the-principal-owner,any-of-obtainable-or-actual-acquisition-falling-in-marriage-makes-the-benefit-common"
        data-focal-rule="houses-follow-the-funding-source-and-registration-while-fruits-split-by-nature-and-timing-runs-on-either-obtainable-or-actual-acquisition"
        data-focal-channels="contrast,connector,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="premarital-house-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 218}}>
          <Panel tone={C.brass} watermark={<Home size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Home size={24} color={C.linen} strokeWidth={2.2} />}>一方婚前购买的房屋</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880}}>婚前签约＋个人财产付首付（或个人名义贷款）＋登记于首付方名下 → 无约定时视为<Soft color={C.moss}>婚前财产</Soft>，归<Soft color={C.moss}>登记人</Soft></div>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="尚未归还的贷款：" style={{flex: 1}}>
                为产权登记一方的<Soft color={C.plum}>个人债务</Soft>
              </IconChip>
              <IconChip icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="共同还贷的补偿：" style={{flex: 1.6}}>
                婚后<Soft color={C.persimmon}>共同还贷</Soft>支付的款项及其对应<Soft color={C.persimmon}>财产增值</Soft>部分，离婚时由登记方对另一方<Under color={C.persimmon} delay={150}>补偿</Under>（乙还10万占房价10% → 20万增值补偿乙2万）
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={50} from="right" marker="common-house-rules" style={{position: 'absolute', left: 0, top: 232, width: 1776, height: 218}}>
          <Panel tone={C.moss} watermark={<Users size={120} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Users size={24} color={C.linen} strokeWidth={2.2} />}>婚后购房的三种情形</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="个人财产购买：" style={{flex: 1}}>
                以<Soft color={C.moss}>婚前个人财产</Soft>购买、登记在购房人名下 → 归<Soft color={C.moss}>购房人</Soft>一方
              </IconChip>
              <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="共同财产购买：" style={{flex: 1.1}}>
                纵然登记在<Under color={C.persimmon} delay={170}>一方名下</Under>，也认定为<Soft color={C.persimmon}>夫妻共同财产</Soft>——出资优先于登记
              </IconChip>
              <IconChip icon={<Home size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="以一方父母名义房改：" style={{flex: 1.3}}>
                共同财产出资、产权登记在<Soft color={C.plum}>一方父母</Soft>名下 → 归<Soft color={C.plum}>父母所有</Soft>；另一方出资作为<Soft color={C.moss}>债权</Soft>请求<Under color={C.moss} delay={200}>返还</Under>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="fruit-classification" style={{position: 'absolute', left: 0, top: 464, width: 1080, height: 196}}>
          <Panel tone={C.persimmon} watermark={<TrendingUp size={110} color={C.persimmon} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.persimmon} icon={<TrendingUp size={24} color={C.linen} strokeWidth={2.2} />}>个人财产婚后的三类衍生</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<TrendingUp size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="收益（经营、投资回报）：" style={{flex: 1}}>
                归<Soft color={C.persimmon}>双方共有</Soft>
              </IconChip>
              <div style={{flex: 1.15, display: 'flex', flexDirection: 'column', gap: 6}}>
                <IconChip icon={<Sprout size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="孳息（天然、租金、利息、中奖）：">
                  归<Soft color={C.moss}>原物一方</Soft>
                </IconChip>
                <IconChip icon={<TrendingUp size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="增值：">
                  仍归<Soft color={C.moss}>原物一方</Soft>
                </IconChip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" marker="obtainable-vs-actual" style={{position: 'absolute', left: 1094, top: 464, width: 682, height: 196}}>
          <Panel tone={C.plum} watermark={<Hourglass size={110} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Hourglass size={24} color={C.linen} strokeWidth={2.2} />}>「可以取得」与「实际取得」</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>适用于<Soft color={C.plum}>知识产权收益</Soft>、住房补贴、<Soft color={C.plum}>住房公积金</Soft>、基本养老金、破产安置补偿费</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900}}>任一项发生于<Under color={C.plum} delay={220}>婚姻存续期间</Under> → 即为<Seal delay={240} size={20}>夫妻共有</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 0, top: 674, width: 1776, height: 94}}>
          <Panel tone={C.brass} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.brass} icon={<Home size={22} color={C.linen} strokeWidth={2.2} />}>速记</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900}}>房子看出资与登记 · 收益共有 · 孳息增值随原物 · 知识产权收益看「可以/实际取得」时点</span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};



export const DebtAndGiftScene = () => {
  /* data-final-knowledge="marital-debt-rules" data-final-knowledge="household-agency-rule" data-final-knowledge="spousal-gift-registration" data-final-knowledge="child-gift-and-parent-funding" */
  return (
    <Shell code="03" kicker="夫妻负债 · 家庭赠与" title="夫妻负债与家庭赠与">
      <div
        data-layout="signature-gate-with-gift-lanes"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,stamp,chip,soft-highlight"
        data-visual-grammar="premarital-debts-stay-personal-unless-used-for-common-life,co-signature-ratification-and-known-internal-agreements-shape-postmarital-debts-else-household-agency-applies,unregistered-spousal-gifts-are-weighed-while-registered-gifts-belong-to-the-donee-unwrap-short-marriages,full-parent-funding-benefits-their-child-and-partial-funding-creates-proportional-co-ownership"
        data-focal-rule="debts-pass-the-signature-gate-into-personal-or-common-and-gifts-turn-on-registration-with-short-marriage-and-parent-funding-exceptions"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 108}}>
          <Panel tone={C.moss} watermark={<Coins size={100} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '10px 18px'}}>
            <PanelTab tone={C.moss} icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />}>婚前负债</PanelTab>
            <span style={{fontSize: 22, fontWeight: 880}}>原则为<Soft color={C.moss}>个人债务</Soft>；用于<Under color={C.persimmon} delay={130}>婚后共同生活</Under>的，为<Soft color={C.persimmon}>共同债务</Soft></span>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="marital-debt-rules" style={{position: 'absolute', left: 0, top: 122, width: 900, height: 330}}>
          <Panel tone={C.brass} watermark={<FileSignature size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<FileSignature size={24} color={C.linen} strokeWidth={2.2} />}>婚后负债 · 外部约定四情形</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="① 共同签字 / ② 事后追认：" style={{flex: 1}}>
              为<Soft color={C.persimmon}>共同债务</Soft>——追认＝同意该债务为共同债务；<Ban size={20} color={C.plum} strokeWidth={2.6} /> 事后<Soft color={C.plum}>代为履行</Soft>不构成追认；<Ban size={20} color={C.plum} strokeWidth={2.6} /> <Soft color={C.plum}>提供担保</Soft>不构成追认
            </IconChip>
            <IconChip icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="③ 与债权人明确约定个人债务：" style={{flex: 0.9}}>
              为<Soft color={C.moss}>个人债务</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="④ 内部约定＋债权人知道或应当知道：" style={{flex: 1}}>
              为<Soft color={C.moss}>个人债务</Soft>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>共同债务承担<Under color={C.brass} delay={220}>连带偿还</Under>责任，不以婚姻存续为条件；承担后可向另一方<Soft color={C.persimmon}>追偿</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="household-agency-rule" style={{position: 'absolute', left: 0, top: 466, width: 900, height: 122}}>
          <Panel tone={C.persimmon} watermark={<HandCoins size={100} color={C.persimmon} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '10px 18px'}}>
            <PanelTab tone={C.persimmon} icon={<HandCoins size={22} color={C.linen} strokeWidth={2.2} />}>无外部约定 → 家事代理权</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880}}>一方以个人名义为<Soft color={C.persimmon}>家庭日常生活需要</Soft>或<Soft color={C.persimmon}>夫妻共同经营需要</Soft>所负债务 → <Seal delay={180} size={20}>共同债务</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="spousal-gift-registration" style={{position: 'absolute', left: 914, top: 0, width: 862, height: 366}}>
          <Panel tone={C.plum} watermark={<Home size={120} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Home size={24} color={C.linen} strokeWidth={2.2} />}>夫妻间的赠与 · 房屋登记分水岭</PanelTab>
            <IconChip icon={<Hourglass size={24} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="离婚诉讼时尚未转移登记：" style={{flex: 1}}>
              法院<Under color={C.brass} delay={150}>酌情确定</Under>房屋归属以及取得方是否需向对方<Soft color={C.brass}>补偿</Soft>
            </IconChip>
            <IconChip icon={<Home size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="已经转移登记·原则：" style={{flex: 0.9}}>
              房屋归属于<Soft color={C.moss}>受赠人</Soft>
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="已登记·例外：" style={{flex: 1.3}}>
              婚姻关系存续时间<Soft color={C.plum}>较短</Soft>且赠与人对离婚<Soft color={C.plum}>无重大过错</Soft> → 法院可判房屋归<Soft color={C.plum}>赠与人</Soft>；是否补偿仍由法院<Under color={C.brass} delay={230}>酌定</Under>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.sepiaSoft}}>受欺诈胁迫可行使<Soft color={C.plum}>意思表示不真实</Soft>的撤销权；受赠人严重侵害赠与人或近亲属、有扶养义务不履行 → <Soft color={C.plum}>法定撤销权</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={120} from="right" marker="child-gift-and-parent-funding" style={{position: 'absolute', left: 914, top: 380, width: 862, height: 388}}>
          <Panel tone={C.moss} watermark={<HandCoins size={120} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Baby size={24} color={C.linen} strokeWidth={2.2} />}>对子女的赠与 与 父母出资购房</PanelTab>
            <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="赠与子女·双方均同意撤销：" style={{flex: 0.9}}>
              <Soft color={C.moss}>可以撤销</Soft>；一方<Soft color={C.plum}>单方不履行</Soft> → 另一方可请求<Under color={C.brass} delay={200}>继续履行</Under>；约定为利他合同的，<Soft color={C.moss}>子女</Soft>有权请求继续履行
            </IconChip>
            <IconChip icon={<Home size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="婚内一方父母全额出资：" style={{flex: 0.9}}>
              无约定 → 房屋归<Soft color={C.persimmon}>出资人子女</Soft>一方；离婚时是否补偿，法院<Under color={C.brass} delay={240}>酌定</Under>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="部分出资或双方父母共同出资：" style={{flex: 1}}>
              无约定 → 以出资为基础<Soft color={C.plum}>按份共有</Soft>；离婚时房屋可判归一方，取得方向对方<Soft color={C.persimmon}>财产补偿</Soft>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const DivorcePathsScene = () => {
  /* data-final-knowledge="agreement-divorce-cooling" data-final-knowledge="litigation-grounds" data-final-knowledge="women-protection" data-final-knowledge="soldier-protection" */
  const frame = useCurrentFrame();
  return (
    <Shell code="04" kicker="离婚的途径" title="协议离婚与诉讼离婚">
      <div
        data-layout="cooling-clock-with-ground-forks-and-protection-gates"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-registered-divorce-runs-a-30-day-withdrawal-window-and-a-30-day-certificate-window,court-divorce-requires-broken-affection-after-mediation-through-five-statutory-grounds,men-cannot-sue-during-pregnancy-within-one-year-of-birth-and-six-months-after-termination,servicemen-spouses-cannot-obtain-divorce-without-consent-unless-major-fault-exists"
        data-focal-rule="registered-divorce-runs-two-30-day-windows-while-court-divorce-needs-broken-affection-through-five-grounds-guarded-by-women-and-soldier-protection-gates"
        data-focal-channels="connector,icon,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="agreement-divorce-cooling" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 388}}>
          <Panel tone={C.brass} watermark={<Hourglass size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Hourglass size={24} color={C.linen} strokeWidth={2.2} />}>协议离婚 · 30日＋30日双窗</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 4, backgroundColor: C.linenDim, border: `2px solid ${C.brass}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.brass}}>第一个30日</span>
                <span style={{fontSize: 22, fontWeight: 880}}>登记机关收到申请之日起30日内，任何一方不愿意离婚的，可<Soft color={C.plum}>撤回</Soft>申请</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 4, backgroundColor: C.linenDim, border: `2px solid ${C.brass}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.brass}}>第二个30日</span>
                <span style={{fontSize: 22, fontWeight: 880}}>届满后30日内双方未<Soft color={C.plum}>亲自</Soft>申请发证的，视为<Soft color={C.plum}>撤回</Soft></span>
              </div>
            </div>
            <IconChip icon={<FileSignature size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="财产分割协议：" style={{flex: 1}}>
              <Soft color={C.moss}>附延缓条件</Soft>——以「离婚」事实成就为<Under color={C.moss} delay={180}>生效要件</Under>；反悔撤销的，未发现<Soft color={C.plum}>欺诈、胁迫</Soft>的应驳回；协议未成后一方在离婚诉讼中反悔 → 按实际情况依法分割共同财产
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}><Heart size={22} color={C.plum} strokeWidth={2.4} /> 「同意离婚」不考虑虚假意思表示——假离婚也是真离婚</div>
          </Panel>
        </Enter>
        <Enter delay={50} from="right" marker="litigation-grounds" style={{position: 'absolute', left: 914, top: 0, width: 862, height: 388}}>
          <Panel tone={C.persimmon} watermark={<Gavel size={120} color={C.persimmon} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.persimmon} icon={<Gavel size={24} color={C.linen} strokeWidth={2.2} />}>诉讼离婚 · 感情确已破裂</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880}}>应当进行<Soft color={C.persimmon}>调解</Soft>；如<Under color={C.persimmon} delay={130}>感情确已破裂</Under>，调解无效，应准予离婚</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, flex: 1}}>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.persimmon} toneBg={C.persimmonPale} ink={C.persimmon}>①</Chip> 重婚或与他人<Soft color={C.persimmon}>同居</Soft>（严重过错）</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.persimmon} toneBg={C.persimmonPale} ink={C.persimmon}>②</Chip> 实施<Soft color={C.persimmon}>家庭暴力</Soft>或虐待、遗弃家庭成员（侵犯人身）</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.persimmon} toneBg={C.persimmonPale} ink={C.persimmon}>③</Chip> 赌博、吸毒等恶习<Soft color={C.persimmon}>屡教不改</Soft>（不良恶习）</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.persimmon} toneBg={C.persimmonPale} ink={C.persimmon}>④</Chip> 分居：因感情不和<Soft color={C.persimmon}>分居满2年</Soft>；判决不准离婚后又<Soft color={C.persimmon}>分居满1年</Soft>再次起诉</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.persimmon} toneBg={C.persimmonPale} ink={C.persimmon}>⑤</Chip> 一方被<Soft color={C.persimmon}>宣告失踪</Soft>；⑥ 其他导致感情破裂的情形（兜底）</span>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>符合法定事由的，法院不应当因原告有过错而判决不准离婚</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="left" marker="women-protection" style={{position: 'absolute', left: 0, top: 402, width: 900, height: 260}}>
          <Panel tone={C.plum} watermark={<Shield size={110} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />}>对女方的特殊保护 · 男方不得起诉</PanelTab>
            <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
              <Chip tone={C.plum} toneBg={C.plumPale} ink={C.plum}>怀孕期间</Chip>
              <Chip tone={C.plum} toneBg={C.plumPale} ink={C.plum}>分娩后<span style={{fontSize: 30, fontWeight: 950}}>1年</span>内</Chip>
              <Chip tone={C.plum} toneBg={C.plumPale} ink={C.plum}>终止妊娠后<span style={{fontSize: 30, fontWeight: 950}}>6个月</span>内</Chip>
            </div>
            <IconChip icon={<Undo2 size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="例外：" style={{flex: 1}}>
              <Soft color={C.moss}>女方提出</Soft>离婚的；法院认为<Soft color={C.moss}>确有必要</Soft>受理男方请求的
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={150} from="right" marker="soldier-protection" style={{position: 'absolute', left: 914, top: 402, width: 862, height: 260}}>
          <Panel tone={C.moss} watermark={<Shield size={110} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />}>对现役军人的特殊保护 · 不判离</PanelTab>
            <IconChip icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="原则：" style={{flex: 0.9}}>
              现役军人的配偶起诉离婚，未经<Soft color={C.moss}>军人同意</Soft>，法院<Seal delay={200} size={20}>不得判决离婚</Seal>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="例外·军人重大过错（前三项）：" style={{flex: 1.2}}>
              ① 重婚或与他人<Soft color={C.plum}>同居</Soft>；② 实施<Soft color={C.plum}>家暴</Soft>、虐待或遗弃；③ <Soft color={C.plum}>赌博、吸毒</Soft>等恶习屡教不改
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={220} from="up" style={{position: 'absolute', left: 0, top: 676, width: 1776, height: 92}}>
          <Panel tone={C.brass} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.brass} icon={<Split size={22} color={C.linen} strokeWidth={2.2} />}>速记</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900}}>协议离婚：30日撤回窗＋30日领证窗 · 诉讼离婚：调解＋五事由 · 两个保护闸：女方三期不告 / 军人无同意不判离</span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const DivorceAftermathScene = () => {
  /* data-final-knowledge="child-custody-rules" data-final-knowledge="support-fee-rules" data-final-knowledge="division-principles" data-final-knowledge="compensation-help-damages" */
  return (
    <Shell code="05" kicker="离婚后果 · 抚养分割赔偿" title="离婚后的抚养、分割与赔偿">
      <div
        data-layout="custody-bench-with-division-and-damages-rows"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="children-under-two-follow-the-mother-while-older-children-follow-the-best-interest-and-eight-year-wishes,the-non-custodial-parent-owes-support-and-cannot-withhold-it-over-surname-changes,courts-divide-favoring-children-women-and-the-innocent-and-hiders-receive-less-or-nothing,housework-compensation-hardship-help-and-fault-damages-require-the-divorce-itself"
        data-focal-rule="custody-follows-age-lanes-support-follows-the-non-custodial-parent-division-favors-the-protected-and-damages-require-the-divorce-itself"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="child-custody-rules" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 340}}>
          <Panel tone={C.moss} watermark={<Baby size={120} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Baby size={24} color={C.linen} strokeWidth={2.2} />}>离婚后的子女抚养</PanelTab>
            <IconChip icon={<Baby size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="不满2周岁：" style={{flex: 1.1}}>
              以由<Soft color={C.moss}>母亲直接抚养</Soft>为原则；另有约定且对子女健康成长<Soft color={C.brass}>无不利影响</Soft>的，从其约定
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="已满2周岁：" style={{flex: 1.1}}>
              协议不成 → 按照<Soft color={C.persimmon}>最有利于</Soft>未成年子女的原则处理；双方协议<Soft color={C.moss}>轮流直接抚养</Soft>且无不利影响的，从其约定
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="抚养权变更：" style={{flex: 1.2}}>
              共同生活方<Soft color={C.plum}>无力</Soft>抚养或对子女身心健康<Soft color={C.plum}>确有不利影响</Soft>；已满<Soft color={C.plum}>8周岁</Soft>子女愿随另一方且有抚养能力；其他正当理由 → <Soft color={C.plum}>应予支持</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="support-fee-rules" style={{position: 'absolute', left: 914, top: 0, width: 862, height: 340}}>
          <Panel tone={C.brass} watermark={<Coins size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />}>抚养费</PanelTab>
            <IconChip icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="义务人：" style={{flex: 0.9}}>
              原则上<Soft color={C.brass}>不直接抚养</Soft>子女的一方；可协议由一方负担<Soft color={C.brass}>全部</Soft>费用——直接抚养方能力<Soft color={C.plum}>明显不能保障</Soft>子女所需的，不予支持
            </IconChip>
            <IconChip icon={<TrendingUp size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="增加：" style={{flex: 0.7}}>
              原协议或判决<Soft color={C.moss}>不妨碍</Soft>子女在必要时提出<Under color={C.moss} delay={170}>超过原定数额</Under>的合理要求
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="欠付：" style={{flex: 0.9}}>
              纵然子女<Soft color={C.plum}>已经成年</Soft>，直接抚养子女一方仍有权请求支付；抚养费<Under color={C.brass} delay={230}>不适用诉讼时效</Under>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="姓氏：" style={{flex: 0.7}}>
              <Ban size={20} color={C.plum} strokeWidth={2.6} /> 不得因子女<Soft color={C.plum}>变更姓氏</Soft>而拒付抚养费；擅自改为继父母姓氏的，责令<Soft color={C.moss}>恢复原姓氏</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="division-principles" style={{position: 'absolute', left: 0, top: 354, width: 900, height: 414}}>
          <Panel tone={C.persimmon} watermark={<Split size={120} color={C.persimmon} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.persimmon} icon={<Split size={24} color={C.linen} strokeWidth={2.2} />}>共有财产的分割</PanelTab>
            <IconChip icon={<Scale size={24} color={C.linen} strokeWidth={2.2} />} tone={C.persimmon} title="原则：" style={{flex: 0.9}}>
              协商不成 → 法院按照照顾<Soft color={C.persimmon}>子女、女方和无过错方</Soft>权益的原则判决；持股比例<Soft color={C.plum}>不构成</Soft>分割比例的约定
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="少分或不分：" style={{flex: 1.3}}>
              一方<Soft color={C.plum}>隐藏、转移、变卖、毁损、挥霍</Soft>夫妻共同财产或<Soft color={C.plum}>伪造债务</Soft>企图侵占的，分割时对该方可以<Seal delay={240} size={20}>少分或者不分</Seal>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.sepiaSoft}}>有限责任公司出资：其他股东行使<Under color={C.persimmon} delay={280}>优先购买权</Under> → 配偶分割转让所得；不行使 → 配偶取得<Soft color={C.persimmon}>股权</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.sepiaSoft}}>合伙份额：一致同意 → 配偶入伙；有人购买或同意退伙 → 配偶分钱；全不同意 → <Soft color={C.persimmon}>视为全体同意</Soft>，配偶取得合伙人地位</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="right" marker="compensation-help-damages" style={{position: 'absolute', left: 914, top: 354, width: 862, height: 414}}>
          <Panel tone={C.plum} watermark={<HeartHandshake size={120} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<HeartHandshake size={24} color={C.linen} strokeWidth={2.2} />}>补偿 · 帮助 · 损害赔偿</PanelTab>
            <IconChip icon={<HandCoins size={24} color={C.linen} strokeWidth={2.2} />} tone={C.moss} title="离婚财产补偿：" style={{flex: 0.8}}>
              因<Soft color={C.moss}>抚育子女、照料老人、协助工作</Soft>负担较多义务的一方，离婚时有权请求<Soft color={C.moss}>补偿</Soft>
            </IconChip>
            <IconChip icon={<Home size={24} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="离婚财产帮助：" style={{flex: 0.8}}>
              一方<Soft color={C.brass}>生活困难</Soft>且另一方有<Soft color={C.brass}>负担能力</Soft> → 从其<Soft color={C.brass}>住房</Soft>等个人财产中给予适当帮助
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.linen} strokeWidth={2.2} />} tone={C.plum} title="损害赔偿·以离婚为依归·五事由：" style={{flex: 1.3}}>
              <Soft color={C.plum}>重婚</Soft>、与他人<Soft color={C.plum}>同居</Soft>、<Soft color={C.plum}>家庭暴力</Soft>、虐待遗弃家庭成员、其他<Soft color={C.plum}>重大过错</Soft>；含财产与<Soft color={C.plum}>精神</Soft>损害赔偿；双方均有过错 → <Seal delay={280} size={20}>不予支持</Seal>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.sepiaSoft}}>无过错方原告应<Soft color={C.plum}>同时提出</Soft>；协议离婚后仍可请求（<Under color={C.plum} delay={320}>放弃</Under>的除外）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


