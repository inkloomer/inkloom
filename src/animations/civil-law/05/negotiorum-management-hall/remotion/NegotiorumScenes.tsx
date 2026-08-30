import type {CSSProperties, ReactNode} from 'react';
import {Ban, Baby, Brain, Coins, FileSignature, Flame, Gavel, HeartHandshake, Hourglass, PauseCircle, Phone, Pill, Repeat, RotateCcw, Scale, Search, Shield, Snowflake, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  sea: '#1F4448',
  seaMid: '#2C5C62',
  vest: '#C96A2E',
  vestPale: '#F0DAC2',
  sand: '#F4F0E3',
  sandDim: '#E6E1CC',
  sandEdge: '#B8B2A0',
  grape: '#6B4E6E',
  grapePale: '#E2D3E2',
  moss: '#5E7D54',
  mossPale: '#DCE5D2',
  ink: '#242826',
  inkSoft: '#6D7370',
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
      backgroundColor: C.sea,
      color: C.sand,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 132px, rgba(0, 0, 0, 0.13) 132px 135px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.vest}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.vestPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.seaMid, borderLeft: `8px solid ${C.vest}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.sand, letterSpacing: 2}}>民法 · 第5讲 · {code}</span>
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
        borderBottom: `2px solid ${C.vest}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.sand}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.vestPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.vest, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.sand, border: `2px solid ${C.sandEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.vest, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', backgroundColor: C.seaMid, borderLeft: `6px solid ${tone}`, color: C.sand, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.sandDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.grape}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.vest, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.sandEdge, toneBg = C.sandDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 21, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const ConceptLegalScene = () => {
  /* data-final-knowledge="negotiorum-definition" data-final-knowledge="legal-fact-nature" data-final-knowledge="no-duty-gate" data-final-knowledge="consent-mandate-switch" */
  return (
    <Shell code="01" kicker="概念 · 法律要件" title="无因管理的概念与法律要件">
      <div
        data-layout="definition-dais-with-no-duty-gate"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="negotiorum-manages-anothers-affairs-for-his-benefit-without-duty,the-deed-is-a-legal-fact-breeding-a-debt-relation,no-legal-duty-covers-statutory-and-agreed-duties,prior-consent-turns-management-into-mandate"
        data-focal-rule="for-his-benefit-without-duty-over-his-affair-makes-the-manager-creditor"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="negotiorum-definition" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 214}}>
          <Panel tone={C.vest} watermark={<HeartHandshake size={150} color={C.vest} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vest} icon={<HeartHandshake size={24} color={C.sand} strokeWidth={2.2} />}>核心定义</PanelTab>
            <IconChip icon={<HeartHandshake size={26} color={C.sand} strokeWidth={2.2} />} tone={C.vest} title="无因管理：">
              为<Soft color={C.vest}>被管理人的利益</Soft>·在没有<Under color={C.vest} delay={80}>法律义务</Under>的情况下·管理被管理人<Soft color={C.vest}>事务</Soft>的行为
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="legal-fact-nature" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 214}}>
          <Panel tone={C.grape} watermark={<Scale size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<Scale size={24} color={C.sand} strokeWidth={2.2} />}>法律性质 · 产生后果</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="法律事实：">
              民法上能够引起法律后果的<Soft color={C.grape}>法律事实</Soft>
            </IconChip>
            <IconChip icon={<Repeat size={26} color={C.paper} strokeWidth={2.2} />} tone={C.seaMid} title="产生后果：">
              管理人与被管理人之间引起<Soft color={C.grape}>债权债务</Soft>——称<Under color={C.grape} delay={140}>无因管理之债</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" marker="no-duty-gate" style={{position: 'absolute', left: 40, top: 230, width: 832, height: 240}}>
          <Panel tone={C.moss} watermark={<Ban size={150} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Ban size={24} color={C.sand} strokeWidth={2.2} />}>法律要件 · 没有法律上的义务</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="义务范围：">
              既包括<Soft color={C.moss}>法定义务</Soft>，也包括<Soft color={C.moss}>约定义务</Soft>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="构成前提：">
              只有在<Soft color={C.vest}>没有</Soft>法律上义务时管理 → 方才构成无因管理
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={84} from="right" marker="consent-mandate-switch" style={{position: 'absolute', left: 904, top: 230, width: 832, height: 240}}>
          <Panel tone={C.seaMid} watermark={<FileSignature size={150} color={C.seaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.seaMid} icon={<FileSignature size={24} color={C.sand} strokeWidth={2.2} />}>无因管理与委托 · 转化逻辑</PanelTab>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="事先未同意：">
              行为性质方可构成<Soft color={C.moss}>无因管理</Soft>
            </IconChip>
            <IconChip icon={<FileSignature size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="事先已同意：">
              不构成无因管理 → 构成<Under color={C.vest} delay={130}>委托</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 486, width: 1696, height: 282}}>
          <Panel tone={C.grape} watermark={<Repeat size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.grape} icon={<Repeat size={22} color={C.sand} strokeWidth={2.2} />}>三方角色 · 记忆锚</PanelTab>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.seaMid} title="管理人：">
              没有义务却出手的人 —— 事后成为<Soft color={C.seaMid}>债权人</Soft>
            </IconChip>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="被管理人：">
              事务被管理·利益被照顾的人 —— 事后成为<Soft color={C.grape}>债务人</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>记忆锚：为他的利益 · 管他的事 · 欠我的账 —— 三句齐备才是无因管理</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SubjectiveObjectiveScene = () => {
  /* data-final-knowledge="mind-limb-rules" data-final-knowledge="contrary-wish-exceptions" data-final-knowledge="object-limb-rule" data-final-knowledge="sheep-triptych-verdicts" */
  return (
    <Shell code="02" kicker="主观 · 客观要件" title="主观要件与客观要件">
      <div
        data-layout="mind-matter-bench-with-sheep-forks"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="the-mind-must-carry-management-for-another,mistaken-self-belief-and-borrowed-duty-both-fail,mixed-motive-still-counts-and-contrary-wishes-have-three-exceptions,mistaking-own-affair-for-another-fails-the-object-limb"
        data-focal-rule="a-mind-for-another-over-his-affair-and-the-sheep-triptych-sorts-the-edges"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="mind-limb-rules" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 268}}>
          <Panel tone={C.vest} watermark={<Brain size={150} color={C.vest} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vest} icon={<Brain size={24} color={C.sand} strokeWidth={2.2} />}>主观要件 · 为他人之利益</PanelTab>
            <IconChip icon={<Brain size={26} color={C.sand} strokeWidth={2.2} />} tone={C.vest} title="核心：">
              管理人具有「<Soft color={C.vest}>无因管理的意思</Soft>」——为被管理人的利益
            </IconChip>
            <IconChip icon={<Baby size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="误信（养子案）：">
              误信他人事务为<Soft color={C.plum}>自己事务</Soft>（养了 5 岁才知非亲生）→ <Seal delay={140} size={16}>不构成 ✗</Seal>
            </IconChip>
            <IconChip icon={<Flame size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="兼顾（救火案）：">
              同时也为<Soft color={C.moss}>自己利益</Soft>考量（恐火势蔓延）→ <Seal delay={170} size={16} tone={C.moss}>可以构成 ✓</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="contrary-wish-exceptions" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 250}}>
          <Panel tone={C.grape} watermark={<Repeat size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<Repeat size={24} color={C.sand} strokeWidth={2.2} />}>与意思不符 · 仍构成的三例外</PanelTab>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="① 意见违法：">
              被管理人的意思<Soft color={C.grape}>违法</Soft>
            </IconChip>
            <IconChip icon={<HeartHandshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="② 违背公序良俗：">
              如<Soft color={C.grape}>救自杀者</Soft>
            </IconChip>
            <IconChip icon={<Repeat size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="③ 获得管理利益：">
              被管理人获得<Soft color={C.moss}>管理利益</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" marker="object-limb-rule" style={{position: 'absolute', left: 40, top: 284, width: 832, height: 160}}>
          <Panel tone={C.seaMid} watermark={<Users size={140} color={C.seaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.seaMid} icon={<Users size={24} color={C.sand} strokeWidth={2.2} />}>客观要件 · 他人事务</PanelTab>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="误信方向相反：">
              误信<Soft color={C.vest}>自己事务</Soft>为<Soft color={C.vest}>他人事务</Soft>而管理 → 管的是自己事务 → <Seal delay={130} size={16}>不构成 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="right" style={{position: 'absolute', left: 904, top: 284, width: 832, height: 160}}>
          <Panel tone={C.moss} watermark={<RotateCcw size={140} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<RotateCcw size={24} color={C.sand} strokeWidth={2.2} />}>交电费案 · 误交丙的电费</PanelTab>
            <IconChip icon={<Brain size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="结论：">
              乙交的是甲委托的<Soft color={C.vest}>自己的事</Soft>——没有<Soft color={C.vest}>无因管理的意思</Soft> → <Seal delay={140} size={16}>否 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="sheep-triptych-verdicts" style={{position: 'absolute', left: 40, top: 460, width: 1696, height: 308}}>
          <Panel tone={C.grape} watermark={<RotateCcw size={160} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.grape} icon={<RotateCcw size={22} color={C.sand} strokeWidth={2.2} />}>羊三连 · 判断题</PanelTab>
            <IconChip icon={<RotateCcw size={24} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="① 捡羊寻得失主丙：">
              有<Soft color={C.moss}>无因管理的意思</Soft> → <Seal delay={150} size={16} tone={C.moss}>构成 ✓</Seal>
            </IconChip>
            <IconChip icon={<RotateCcw size={24} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="② 误以为是乙的羊·还时方知是丙的：">
              认错了人但仍有<Soft color={C.grape}>为他人利益</Soft>管理的意思 → <Seal delay={180} size={16} tone={C.grape}>对丙构成 ✓</Seal>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="③ 受乙之托寻羊·还时方知是丙的：">
              基于<Soft color={C.vest}>委托关系</Soft>·对丙没有管理意思 → <Seal delay={210} size={16}>不构成 ✗</Seal>但可对乙主张<Soft color={C.grape}>不当得利</Soft>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SpecialThreeScene = () => {
  /* data-final-knowledge="lost-property-rule" data-final-knowledge="agency-conversion-rule" data-final-knowledge="compound-interest-rule" data-final-knowledge="fire-compound-verdicts" */
  return (
    <Shell code="03" kicker="三种特殊情况" title="三种特殊情况下的无因管理">
      <div
        data-layout="triple-special-case-hall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="lost-property-keeper-needs-a-return-intent-in-the-best-way,unauthorised-agency-turns-management-only-with-public-recognition,life-and-health-urgency-is-recognised-while-taste-is-not,compound-interests-look-to-mind-then-to-appearance"
        data-focal-rule="return-intent-public-recognition-and-the-managerial-mind-sort-the-three-specials"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="lost-property-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 250}}>
          <Panel tone={C.seaMid} watermark={<Phone size={150} color={C.seaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.seaMid} icon={<Phone size={24} color={C.sand} strokeWidth={2.2} />}>① 拾得遗失物</PanelTab>
            <IconChip icon={<RotateCcw size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="原则：">
              有<Soft color={C.moss}>返还意思</Soft>（到处寻找失主）→ <Seal delay={130} size={16} tone={C.moss}>构成 ✓</Seal>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="商场案（交失物招领处）：">
              未采取<Under color={C.vest} delay={150}>最有利于失主</Under>的方式返还 → <Seal delay={180} size={16}>不构成 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="agency-conversion-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 250}}>
          <Panel tone={C.grape} watermark={<Snowflake size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<Snowflake size={24} color={C.sand} strokeWidth={2.2} />}>② 无权代理 · 公认性转化</PanelTab>
            <IconChip icon={<Snowflake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="买羽绒服（大雪天）：">
              是否需要属<Soft color={C.vest}>私人偏好</Soft>·只能本人决定 → 不具公认性 → <Seal delay={150} size={16}>不构成 ✗</Seal>
            </IconChip>
            <IconChip icon={<Pill size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="买降压药（高血压忘带药）：">
              <Soft color={C.moss}>生命健康</Soft>的急迫事务·可判断确需 → <Seal delay={190} size={16} tone={C.moss}>构成 ✓</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" marker="compound-interest-rule" style={{position: 'absolute', left: 40, top: 266, width: 1696, height: 130}}>
          <Panel tone={C.vest} watermark={<Users size={130} color={C.vest} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.vest} icon={<Users size={22} color={C.sand} strokeWidth={2.2} />}>③ 复合利益主体 · 被管理人的确定</PanelTab>
            <IconChip icon={<Brain size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="确定方法：">
              立足管理人<Under color={C.vest} delay={90}>心态</Under>（为谁的利益）——主观明确→<Soft color={C.vest}>按案情</Soft>；主观不明→按<Soft color={C.grape}>外观</Soft>推定<Soft color={C.grape}>所有人·占有人</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="fire-compound-verdicts" style={{position: 'absolute', left: 40, top: 412, width: 1696, height: 356}}>
          <Panel tone={C.grape} watermark={<Flame size={160} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.grape} icon={<Flame size={22} color={C.sand} strokeWidth={2.2} />}>综合案例 · 房屋失火乙救火受伤</PanelTab>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="案情：">
              甲将房屋<Soft color={C.seaMid}>出租给张三</Soft>·<Soft color={C.vest}>出卖给李四</Soft>·<Soft color={C.grape}>抵押给王五</Soft>·并<Soft color={C.slate}>已投保</Soft>——一日失火，乙救火受伤
            </IconChip>
            <IconChip icon={<Brain size={24} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="问① 乙只知房屋由张三居住：">
              主观明确 → 按案情确定 → 被管理人＝<Seal delay={200} size={17} tone={C.moss}>张三 ✓</Seal>
            </IconChip>
            <IconChip icon={<Search size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="问② 无法察知乙的主观心态：">
              按外观推定 → 被管理人＝所有人<Seal delay={240} size={17} tone={C.vest}>甲</Seal>＋占有人<Seal delay={270} size={17} tone={C.vest}>张三</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>口诀：复合主体看<Soft color={C.vest}>心态</Soft>，主观不明看<Soft color={C.grape}>外观</Soft>——推定给<Soft color={C.vest}>主</Soft>与<Soft color={C.grape}>占</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const EffectsSamaritanScene = () => {
  /* data-final-knowledge="manager-duties" data-final-knowledge="managed-ledger" data-final-knowledge="ratification-rule" data-final-knowledge="samaritan-paths" */
  return (
    <Shell code="04" kicker="效力 · 见义勇为" title="无因管理的效力与见义勇为">
      <div
        data-layout="duty-ledger-with-samaritan-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="managers-answer-for-intent-gross-negligence-and-may-pause,the-managed-owes-reimbursement-compensation-and-no-fee,ratification-applies-mandate-rules-from-the-start,good-samaritans-ride-management-plus-third-layer-compensation"
        data-focal-rule="fees-repaid-losses-compensated-no-fee-and-samaritans-double-protected"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="manager-duties" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 250}}>
          <Panel tone={C.vest} watermark={<Scale size={150} color={C.vest} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vest} icon={<Scale size={24} color={C.sand} strokeWidth={2.2} />}>管理人的义务</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="赔偿责任：">
              具有<Soft color={C.vest}>故意或重大过失</Soft>致被管理人损害 → 负赔偿责任 · 情况<Soft color={C.grape}>紧急</Soft>→<Under color={C.grape} delay={130}>排除重大过失</Under>
            </IconChip>
            <IconChip icon={<PauseCircle size={26} color={C.paper} strokeWidth={2.2} />} tone={C.seaMid} title="中断管理：">
              原则<Soft color={C.seaMid}>可以</Soft>中断 · 但中断对被管理人<Soft color={C.oxblood}>更为不利</Soft>且无正当理由 → <Seal delay={180} size={16}>不得中断</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="managed-ledger" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 250}}>
          <Panel tone={C.grape} watermark={<Coins size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<Coins size={24} color={C.sand} strokeWidth={2.2} />}>被管理人的义务 · 利益对价表</PanelTab>
            <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="必要费用·债务：">
              有权请求<Seal delay={110} size={16} tone={C.moss}>偿还</Seal>
            </IconChip>
            <IconChip icon={<HeartHandshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.seaMid} title="实际损失：">
              有权请求<Seal delay={150} size={16} tone={C.seaMid}>适当补偿</Seal>（而非赔偿）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vest} title="辛苦劳务：">
              <Seal delay={190} size={16}>无报酬 ✗</Seal>——无权请求劳务费
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="ratification-rule" style={{position: 'absolute', left: 40, top: 266, width: 832, height: 200}}>
          <Panel tone={C.moss} watermark={<FileSignature size={140} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<FileSignature size={24} color={C.sand} strokeWidth={2.2} />}>被管理人事后追认</PanelTab>
            <IconChip icon={<FileSignature size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="法律适用：">
              从管理事务<Under color={C.moss} delay={100}>开始时</Under>起 → 适用<Soft color={C.moss}>委托合同</Soft>的有关规定
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="例外：">
              管理人<Soft color={C.grape}>另有意思表示</Soft>的除外
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={98} from="right" style={{position: 'absolute', left: 904, top: 266, width: 832, height: 200}}>
          <Panel tone={C.seaMid} watermark={<HeartHandshake size={140} color={C.seaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.seaMid} icon={<HeartHandshake size={24} color={C.sand} strokeWidth={2.2} />}>落水抓脸案 · 双向对照</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="① 甲赔乙的脸？">
              情况<Soft color={C.grape}>紧急</Soft>·甲无<Soft color={C.grape}>重大过失</Soft> → <Seal delay={150} size={16}>否 ✗</Seal>
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="② 乙赔甲的脸？">
              属无因管理<Soft color={C.moss}>遭受的损害</Soft> → 乙<Under color={C.moss} delay={190}>适当补偿</Under>（而非赔偿）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" marker="samaritan-paths" style={{position: 'absolute', left: 40, top: 482, width: 1696, height: 286}}>
          <Panel tone={C.grape} watermark={<Shield size={160} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.grape} icon={<Shield size={22} color={C.sand} strokeWidth={2.2} />}>见义勇为 ＝ 特殊的无因管理（民法典第 183 条·总则编解释第 34 条）</PanelTab>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="路径一 · 无因管理规则：">
              由<Soft color={C.moss}>受益人</Soft>支付见义勇为者支出的<Soft color={C.moss}>必要费用</Soft>和遭受的<Soft color={C.moss}>实际损失</Soft>
            </IconChip>
            <IconChip icon={<Shield size={24} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="路径二 · 侵权缺失的补充规则：">
              受益人<Soft color={C.grape}>适当补偿</Soft>——条件：① <Soft color={C.grape}>没有</Soft>侵权人 ② 侵权人<Soft color={C.grape}>逃逸</Soft> ③ 侵权人<Soft color={C.grape}>无力</Soft>承担
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>补偿数额考量：受害人所受损失与已获赔偿 · 受益人受益多少 · 受益人经济条件</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
