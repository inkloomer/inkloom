import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, BadgeCheck, Ban, CircleDollarSign, Coins, Eye, EyeClosed, EyeOff, Flame, Gavel, Gift, HandCoins, Heart, HeartHandshake, Hourglass, Landmark, Replace, Scale, Split, TrendingDown, Undo2, Unlink, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  violet: '#3B3158',
  violetMid: '#54487A',
  lilac: '#CBC3E9',
  lilacPale: '#EDE9F8',
  rose: '#B25D7A',
  rosePale: '#F3E1E8',
  brass: '#96762F',
  brassPale: '#F1E7C9',
  pine: '#4F7058',
  pinePale: '#E1EBE3',
  paper: '#F8F5EC',
  paperDim: '#ECE7D9',
  edge: '#C9C1B1',
  ink: '#2E2A3A',
  inkSoft: '#716B85',
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.violet,
        color: C.paper,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(48deg, transparent 0 118px, rgba(255, 255, 255, 0.05) 118px 121px), repeating-linear-gradient(-48deg, transparent 0 118px, rgba(0, 0, 0, 0.12) 118px 121px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.rose}, ${C.brass}, ${C.lilac})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(203, 195, 233, 0.38)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.violetMid, borderLeft: `8px solid ${C.brass}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.lilacPale, letterSpacing: 2}}>民法 · 第5讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.lilacPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((coin) => (
          <span
            key={coin}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: coin === sceneIndex ? C.brass : 'transparent',
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
    style={{backgroundColor: C.paper, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(46, 42, 58, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.brass, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.violetMid, borderLeft: `6px solid ${tone}`, color: C.lilacPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.paper}`, boxShadow: `0 0 0 2px rgba(150, 118, 47, 0.55)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.rose}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.paperDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const ElementsGateScene = () => {
  /* data-final-knowledge="enrichment-definition" data-final-knowledge="positive-four-gate" data-final-knowledge="negative-three-gate" data-final-knowledge="personal-claim-nature" */
  return (
    <Shell code="01" kicker="构成要件 · 债权性质" title="不当得利的构成要件">
      <div
        data-layout="positive-negative-gate-with-nature-lane"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="enrichment-is-gain-without-legal-basis-at-anothers-loss,gain-covers-legal-ownership-and-factual-benefit,moral-due-early-and-knowing-payments-are-never-enrichment,claiming-his-gain-is-a-personal-claim-claiming-own-thing-is-property"
        data-focal-rule="gain-without-legal-basis-at-anothers-loss-passes-four-positive-gates-unless-a-negative-gate-vetoes"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="enrichment-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 132}}>
          <Panel tone={C.violet} watermark={<Coins size={130} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.violet} icon={<Coins size={24} color={C.lilacPale} strokeWidth={2.2} />}>核心定义</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingRight: 12}}>
              <div style={{fontSize: 24, fontWeight: 880, lineHeight: 1.5}}>
                <Chip tone={C.violet} toneBg={C.lilacPale} ink={C.violet}>不当得利</Chip>
                ＝ 得利人在<Soft color={C.rose}>没有法律依据</Soft>的情况下，以<Soft color={C.rose}>他人遭受损失</Soft>为代价，获得利益的<Under color={C.violet} delay={90}>法律事实</Under>
              </div>
              <Chip tone={C.pine} toneBg={C.pinePale}>债之关系的发生根据</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="left" marker="positive-four-gate" style={{position: 'absolute', left: 0, top: 148, width: 866, height: 368}}>
          <Panel tone={C.pine} watermark={<CircleDollarSign size={130} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<CircleDollarSign size={24} color={C.paper} strokeWidth={2.2} />}>积极要件 · 四项</PanelTab>
            <IconChip icon={<Unlink size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="① 均无法律依据：">
              获得利益与遭受损失<Soft color={C.rose}>均没有</Soft>法律依据
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="② 得利人获得利益：">
              <span style={{display: 'block', fontSize: 22}}>法律上获得＝取得<Soft color={C.brass}>所有权</Soft>（捡到 100 元钞票 → 构成）</span>
              <span style={{display: 'block', fontSize: 22}}>事实上获得＝现实取得<Soft color={C.brass}>利益</Soft>（做成羊肉泡馍·消费 → 构成）</span>
            </IconChip>
            <IconChip icon={<TrendingDown size={24} color={C.paper} strokeWidth={2.2} />} tone={C.violet} title="③ 遭受损失：">
              受损人<Soft color={C.violet}>遭受损失</Soft>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="④ 因果关系：">
              获得利益与遭受损失之间有<Under color={C.pine} delay={120}>因果关系</Under>（乙偷丙 1000 元还甲 → 乙对丙构成）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="negative-three-gate" style={{position: 'absolute', left: 910, top: 148, width: 866, height: 368}}>
          <Panel tone={C.rose} watermark={<Ban size={130} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />}>消极要件 · 三项否决</PanelTab>
            <IconChip icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="① 道德义务给付：">
              为履行<Soft color={C.pine}>道德义务</Soft>而进行的给付（甲赡养生父母）→ <Seal delay={140} size={20}>不构成</Seal>
            </IconChip>
            <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="② 期前清偿：">
              债务<Soft color={C.brass}>到期之前</Soft>的清偿 → 债权人<Seal delay={170} size={20}>不构成</Seal>
            </IconChip>
            <IconChip icon={<EyeClosed size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="③ 明知无义务清偿：">
              <Soft color={C.rose}>明知</Soft>无给付义务仍清偿 → 受领人<Seal delay={200} size={20}>不构成</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="personal-claim-nature" style={{position: 'absolute', left: 0, top: 532, width: 1776, height: 236}}>
          <Panel tone={C.brass} watermark={<Gavel size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />}>返还请求权的性质 · 债权请求权</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="要「得利人」的东西 → 债权请求权：">
                捡羊案：乙请求甲返还<Soft color={C.brass}>价金 1000 元</Soft>——甲对该价金<Seal delay={210} size={19} tone={C.pine}>构成不当得利</Seal>
              </IconChip>
              <IconChip icon={<Landmark size={24} color={C.paper} strokeWidth={2.2} />} tone={C.violet} title="要「自己」的东西 → 物权请求权：">
                乙请求甲返还<Soft color={C.violet}>该羊</Soft>——甲对该羊构成<Chip tone={C.violet} toneBg={C.lilacPale} ink={C.violet}>无权占有</Chip><Seal delay={240} size={19}>而非不当得利</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>判断标准：看「<Soft color={C.brass}>谁占了我的便宜</Soft>」——而非「我的东西在<Soft color={C.violet}>谁那儿</Soft>」</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ReturnScopeScene = () => {
  /* data-final-knowledge="new-thing-rule" data-final-knowledge="benefit-count-rule" data-final-knowledge="good-faith-limb" data-final-knowledge="bad-faith-limb" */
  return (
    <Shell code="02" kicker="返还范围 · 善意与恶意" title="不当得利的返还规则">
      <div
        data-layout="new-thing-lane-with-good-evil-split"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="original-and-new-things-are-returned-together,only-the-enrichers-benefit-counts-never-the-victims-loss,the-good-faith-enricher-refunds-what-still-exists,the-bad-faith-enricher-refunds-what-he-received"
        data-focal-rule="good-faith-refunds-what-remains-at-return-time-while-bad-faith-refunds-everything-received"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="new-thing-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 240}}>
          <Panel tone={C.brass} watermark={<Replace size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Replace size={24} color={C.paper} strokeWidth={2.2} />}>① 新物的返还 · 原物＋新物一并返还</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, padding: '0 6px'}}>
              <Chip tone={C.brass} toneBg={C.brassPale}>得利时　<span style={{fontSize: 30, fontWeight: 950, color: C.brass}}>A</span></Chip>
              <ArrowRight size={28} color={C.brass} strokeWidth={2.4} />
              <Chip tone={C.brass} toneBg={C.brassPale}>返还时　<span style={{fontSize: 30, fontWeight: 950, color: C.brass}}>A＋a</span></Chip>
              <ArrowRight size={28} color={C.brass} strokeWidth={2.4} />
              <Chip tone={C.pine} toneBg={C.pinePale}><Undo2 size={22} color={C.pine} strokeWidth={2.4} />原物 A · 返还</Chip>
              <Chip tone={C.pine} toneBg={C.pinePale}><Undo2 size={22} color={C.pine} strokeWidth={2.4} />新物 a · 返还</Chip>
            </div>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="水杯案：">
              价值 100 元水杯交乙保管，乙以 150 元卖予丙得价金 → 甲可请求返还<Under color={C.brass} delay={160}>150 元</Under>（原物已灭失，返还价金）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" marker="benefit-count-rule" style={{position: 'absolute', left: 0, top: 256, width: 1776, height: 108}}>
          <Panel tone={C.violet} watermark={<Scale size={120} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.violet} icon={<Scale size={22} color={C.paper} strokeWidth={2.2} />}>② 计算原则</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Eye size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="只考虑：">
                <Soft color={C.pine}>得利人</Soft>的利益额
              </IconChip>
              <IconChip icon={<EyeOff size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="不考虑：">
                <Soft color={C.rose}>受损人</Soft>的损失额
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="left" marker="good-faith-limb" style={{position: 'absolute', left: 0, top: 380, width: 866, height: 388}}>
          <Panel tone={C.pine} watermark={<Heart size={140} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Heart size={24} color={C.paper} strokeWidth={2.2} />}>善意得利人 · 毁损灭失时</PanelTab>
            <IconChip icon={<Heart size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="定义：">
              <Soft color={C.pine}>不知道</Soft>也不应当知道自己已获得不当得利
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="返还范围：">
              以<Under color={C.pine} delay={150}>返还时</Under>的现存利益为限（得利时 A → 返还时 <Chip tone={C.pine} toneBg={C.pinePale}>A－a</Chip>）
            </IconChip>
            <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="责任：">
              <Seal delay={200} size={21} tone={C.pine}>不负赔偿责任</Seal>——返还以现存者即为足
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：善意看「<Soft color={C.pine}>返还时</Soft>」——剩多少、还多少</div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="bad-faith-limb" style={{position: 'absolute', left: 910, top: 380, width: 866, height: 388}}>
          <Panel tone={C.rose} watermark={<Flame size={140} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Flame size={24} color={C.paper} strokeWidth={2.2} />}>恶意得利人 · 毁损灭失时</PanelTab>
            <IconChip icon={<Flame size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="定义：">
              <Soft color={C.rose}>知道</Soft>或应当知道自己已获得不当得利
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="返还范围：">
              以<Under color={C.rose} delay={180}>得利时</Under>的利益为限（得利时 A → 纵已毁损 → 返还 <Chip tone={C.rose} toneBg={C.rosePale}>A</Chip> 全额）
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="责任：">
              <Seal delay={230} size={21}>应负赔偿责任</Seal>——不得以毁损灭失推诿
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：恶意看「<Soft color={C.rose}>得利时</Soft>」——拿多少、还多少</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ReturnTargetScene = () => {
  /* data-final-knowledge="default-target-rule" data-final-knowledge="gratuitous-shift-rule" data-final-knowledge="painting-case-verdicts" data-final-knowledge="gift-spares-giver" */
  return (
    <Shell code="03" kicker="返还对象 · 无偿转让例外" title="不当得利返还请求权的对象">
      <div
        data-layout="target-fork-with-gratuitous-lane"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="the-enricher-is-the-default-target-of-restitution,gratuitous-transfers-shift-the-duty-to-the-third-donee,debt-repayment-gains-count-but-creditor-takes-nothing,the-gift-scenario-marks-the-donee-and-spares-the-giver"
        data-focal-rule="gratuitous-transfer-to-a-third-donee-shifts-the-restitution-duty-in-the-corresponding-scope"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="default-target-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96}}>
          <Panel tone={C.violet} watermark={<Users size={120} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '8px 18px'}}>
            <PanelTab tone={C.violet} icon={<Users size={22} color={C.paper} strokeWidth={2.2} />}>原则</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingRight: 12}}>
              <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.violet} title="原则：">
                受损人有权请求<Soft color={C.violet}>得利人</Soft>返还利益
              </IconChip>
              <Chip tone={C.rose} toneBg={C.rosePale}>例外 ↓ 利益已无偿转让给第三人</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="gratuitous-shift-rule" style={{position: 'absolute', left: 0, top: 112, width: 1776, height: 252}}>
          <Panel tone={C.brass} watermark={<Gift size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Gift size={24} color={C.paper} strokeWidth={2.2} />}>特殊例外 · 得利人已将利益无偿转让给第三人</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26, padding: '6px 0'}}>
              <Chip tone={C.violet} toneBg={C.lilacPale}>得利人（让与人）</Chip>
              <span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.brass}}>无偿转让</span>
                <ArrowRight size={30} color={C.brass} strokeWidth={2.6} />
              </span>
              <Chip tone={C.brass} toneBg={C.brassPale}>第三人（受赠人）</Chip>
            </div>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="后果：">
              受损人可以请求<Soft color={C.rose}>第三人</Soft>在<Under color={C.rose} delay={150}>相应范围内</Under>承担<Seal delay={170} size={20} tone={C.rose}>返还义务</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="painting-case-verdicts" style={{position: 'absolute', left: 0, top: 380, width: 1776, height: 388}}>
          <Panel tone={C.pine} watermark={<Gavel size={150} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.pine} icon={<Gavel size={22} color={C.paper} strokeWidth={2.2} />}>名画案 · 老赵托老刘保管名画</PanelTab>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="案情：">
              老刘死后小刘继承，以 100 万卖予王贵；小刘将 100 万交<Soft color={C.brass}>李香香</Soft>，1 周后小刘<Soft color={C.violet}>得知真相</Soft>（善意）
            </IconChip>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.violet} title="问① 100 万向李香香还债 → 请求小刘：">
                李香香基于<Soft color={C.violet}>债权</Soft>受让，不构成不当得利；小刘获得「<Soft color={C.violet}>债务清偿</Soft>」利益 → <Seal delay={190} size={19} tone={C.violet}>小刘承担</Seal>
              </IconChip>
              <IconChip icon={<Gift size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="问② 作为生日礼物赠送 → 请求李香香：">
                李香香<Soft color={C.rose}>无偿受让</Soft>，应负<Soft color={C.rose}>返还义务</Soft> → <Seal delay={220} size={19}>李香香承担</Seal>
              </IconChip>
            </div>
            <div data-final-knowledge="gift-spares-giver" style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>让与人小刘：原得利已<Soft color={C.pine}>消灭</Soft>且为<Soft color={C.pine}>善意</Soft> → <Seal delay={250} size={19} tone={C.pine}>不承担赔偿责任</Seal>——无偿受让让赠与人免责</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CumulationScene = () => {
  /* data-final-knowledge="cumulation-premise" data-final-knowledge="enrichment-leg" data-final-knowledge="management-leg" data-final-knowledge="offset-strips" */
  return (
    <Shell code="04" kicker="竞合 · 两相冲抵" title="既构成不当得利又构成无因管理">
      <div
        data-layout="two-way-ledger-with-offset-strip"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="one-party-can-owe-enrichment-and-hold-management-at-once,enrichment-orders-the-managed-claim-back,management-orders-the-manager-fees-and-compensation,the-two-accounts-offset-into-one-net-payment"
        data-focal-rule="the-enrichment-claim-and-the-management-claim-offset-into-one-net-payment"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="cumulation-premise" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104}}>
          <Panel tone={C.violet} watermark={<Split size={120} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.violet} icon={<Split size={22} color={C.paper} strokeWidth={2.2} />}>竞合处理原则</PanelTab>
            <div style={{fontSize: 23, fontWeight: 900}}>
              当<Chip tone={C.violet} toneBg={C.lilacPale} ink={C.violet}>一方（甲）</Chip>对<Chip tone={C.pine} toneBg={C.pinePale} ink={C.pine}>另一方（乙）</Chip>既构成不当得利、又构成无因管理 → 按两条规则各自算账，最终<Soft color={C.rose}>两相冲抵</Soft>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="enrichment-leg" style={{position: 'absolute', left: 0, top: 120, width: 866, height: 292}}>
          <Panel tone={C.violet} watermark={<Undo2 size={130} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.violet} icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />}>不当得利之账 · 甲的返还义务</PanelTab>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.violet} title="规则：">
              甲应向<Soft color={C.violet}>乙</Soft><Under color={C.violet} delay={120}>返还利益</Under>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="台风案对应：">
              甲将乙的<Soft color={C.brass}>置换建材</Soft>出卖，获得 <Chip tone={C.brass} toneBg={C.brassPale}>2000 元</Chip> → 甲对乙构成不当得利
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>账向：<Chip tone={C.violet} toneBg={C.lilacPale} ink={C.violet}>甲 → 乙 返还 2000 元</Chip></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="management-leg" style={{position: 'absolute', left: 910, top: 120, width: 866, height: 292}}>
          <Panel tone={C.pine} watermark={<HandCoins size={130} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<HandCoins size={24} color={C.paper} strokeWidth={2.2} />}>无因管理之账 · 乙的偿付义务</PanelTab>
            <IconChip icon={<HandCoins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="规则：">
              乙应向<Soft color={C.pine}>甲</Soft>偿付<Soft color={C.pine}>必要费用</Soft>、<Soft color={C.pine}>债务</Soft>，或适当<Soft color={C.pine}>补偿损失</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="台风案对应：">
              台风将至，甲加固乙的房屋，花费 <Chip tone={C.brass} toneBg={C.brassPale}>1 万元</Chip> → 乙应偿付必要费用
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>账向：<Chip tone={C.pine} toneBg={C.pinePale} ink={C.pine}>乙 → 甲 偿付 1 万元</Chip></div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="offset-strips" style={{position: 'absolute', left: 0, top: 428, width: 1776, height: 340}}>
          <Panel tone={C.rose} watermark={<Scale size={150} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10, padding: '13px 20px'}}>
            <PanelTab tone={C.rose} icon={<Scale size={22} color={C.paper} strokeWidth={2.2} />}>最终处理 · 两相冲抵</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, padding: '6px 0'}}>
              <Chip tone={C.pine} toneBg={C.pinePale}><span style={{fontSize: 24, fontWeight: 900, color: C.pine}}>乙 → 甲　偿付 10000 元</span></Chip>
              <span style={{fontSize: 40, fontWeight: 950, color: C.rose}}>－</span>
              <Chip tone={C.violet} toneBg={C.lilacPale} ink={C.violet}><span style={{fontSize: 24, fontWeight: 900}}>甲 → 乙　返还 2000 元</span></Chip>
              <span style={{fontSize: 40, fontWeight: 950, color: C.rose}}>＝</span>
              <Chip tone={C.rose} toneBg={C.rosePale}><span style={{fontSize: 34, fontWeight: 950, color: C.rose}}>8000 元</span></Chip>
            </div>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.rose} title="结论：">
              甲可请求乙返还 <Chip tone={C.rose} toneBg={C.rosePale}><span style={{fontSize: 26, fontWeight: 950, color: C.rose}}>8000 元</span></Chip>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：一条<Soft color={C.violet}>不当得利账</Soft>＋一条<Soft color={C.pine}>无因管理账</Soft>——各自算清、<Soft color={C.rose}>两相冲抵</Soft>、只付差额</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
