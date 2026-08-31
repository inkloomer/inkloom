import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowDown,
  ArrowRightLeft,
  Armchair,
  Ban,
  Boxes,
  Baby,
  Coins,
  FileSignature,
  FileText,
  Gavel,
  HandCoins,
  HeartHandshake,
  Hourglass,
  Landmark,
  Megaphone,
  Printer,
  Undo2,
  Video,
  PenLine,
  ScrollText,
  ShieldAlert,
  Stamp,
  Unlink,
  UserCheck,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  night: '#2C3A4A',
  nightDeep: '#232E3B',
  nightMid: '#3B4D61',
  paper: '#F8F3E6',
  paperDim: '#EFE7D3',
  sepia: '#3B362C',
  sepiaSoft: '#726B58',
  indigo: '#3E5C8C',
  indigoPale: '#DFE7F3',
  carmine: '#A5384E',
  carminePale: '#F4DDE1',
  bronze: '#A9822F',
  bronzePale: '#F2E7C6',
  jade: '#4E7F72',
  jadePale: '#DDEBE5',
  edge: '#CFC5A9',
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
  const sceneIndex = Math.max(0, Math.min(5, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.night,
        color: C.paper,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 132px, rgba(255, 255, 255, 0.05) 132px 134px), repeating-linear-gradient(90deg, transparent 0 132px, rgba(0, 0, 0, 0.14) 132px 134px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.indigo}, ${C.bronze}, ${C.jade})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(248, 243, 230, 0.3)'}} />
      <div style={{position: 'absolute', left: 24, top: 30, bottom: 30, width: 6, backgroundColor: C.nightDeep, border: `2px solid rgba(169, 130, 47, 0.55)`}} />
      <div style={{position: 'absolute', left: 56, top: 44, padding: '10px 16px', backgroundColor: C.nightDeep, borderLeft: `8px solid ${C.bronze}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.paper, letterSpacing: 2}}>民法 · 第21讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.bronzePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 9, opacity: 0.85}}>
        {[0, 1, 2, 3, 4, 5].map((ring) => (
          <span
            key={ring}
            style={{
              width: 13,
              height: 13,
              borderRadius: 7,
              backgroundColor: ring === sceneIndex ? C.bronze : 'transparent',
              border: `2px solid ${C.bronze}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.bronze, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.paper, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.sepia, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 46, 59, 0.4)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.bronze, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.nightDeep, borderLeft: `6px solid ${tone}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.paper}`, boxShadow: '0 0 0 2px rgba(62, 92, 140, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.sepia, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.carmine}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.paperDim, ink = C.sepia}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const HeirSequenceLanesScene = () => {
  /* data-final-knowledge="first-order-heirs" data-final-knowledge="second-order-heirs" data-final-knowledge="adoption-succession-effect" data-final-knowledge="step-succession-effect" */
  return (
    <Shell code="01" kicker="继承权 · 继承人顺序" title="继承权与继承人顺序">
      <div
        data-layout="two-order-lanes-with-kinship-effect-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="first-order-heirs-are-parents-spouse-children-and-devoted-widowed-in-laws,second-order-heirs-inherit-only-when-no-first-order-heir-exists,established-adoption-grants-mutual-succession-and-extinguishes-birth-family-succession,step-relations-with-support-bonds-succeed-mutually-while-birth-succession-persists"
        data-focal-rule="first-order-heirs-take-first-and-second-order-heirs-inherit-only-when-the-first-order-is-absent-while-adoption-extinguishes-and-support-preserves-birth-succession"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104}}>
          <Panel tone={C.jade} watermark={<ScrollText size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.jade} icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2} />}>继承权</PanelTab>
            <div style={{fontSize: 24, fontWeight: 880, lineHeight: 1.5}}>
              继承人所享有的、在<Soft color={C.carmine}>被继承人死亡后</Soft>，取得被继承人<Under color={C.carmine} delay={90}>遗产</Under>的权利
            </div>
            <Chip tone={C.jade} toneBg={C.jadePale}>权利人 · 放弃 · 消灭</Chip>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="first-order-heirs" style={{position: 'absolute', left: 0, top: 118, width: 830, height: 296}}>
          <Panel tone={C.indigo} watermark={<Users size={120} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>第一顺序继承人</PanelTab>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="法定范围：" style={{flex: 1}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}><UserRound size={22} color={C.indigo} strokeWidth={2.2} />父母</Chip>
              <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}><HeartHandshake size={22} color={C.bronze} strokeWidth={2.2} />配偶</Chip>
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}><Baby size={22} color={C.jade} strokeWidth={2.2} />子女</Chip>
            </IconChip>
            <IconChip icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="拟制范围：" style={{flex: 1}}>
              对公婆、岳父母尽了<Soft color={C.bronze}>主要赡养义务</Soft>的<Soft color={C.bronze}>丧偶儿媳、丧偶女婿</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>第一顺序继承人在位时，第二顺序不参与继承</div>
          </Panel>
        </Enter>
        <Enter delay={64} from="right" marker="second-order-heirs" style={{position: 'absolute', left: 946, top: 118, width: 830, height: 296}}>
          <Panel tone={C.sepiaSoft} watermark={<Users size={120} color={C.sepiaSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.sepiaSoft} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>第二顺序继承人</PanelTab>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.sepiaSoft} title="法定范围：" style={{flex: 1}}>
              <span style={{fontSize: 26, fontWeight: 950, color: C.sepia}}>祖父母、外祖父母、兄弟姐妹</span>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="顺序门槛：" style={{flex: 1}}>
              <Seal delay={140} size={21}>没有第一顺序继承人</Seal>，第二顺序继承人才有权<Soft color={C.carmine}>继承</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <LineH delay={96} tone={C.bronze} thickness={5} span={20} style={{left: 834, top: 264, width: 108, height: 5}} />
        <div style={{position: 'absolute', left: 822, top: 224, width: 134, textAlign: 'center', fontSize: 22, fontWeight: 950, color: C.bronze, opacity: prog(useCurrentFrame(), 100, 16)}}>无第一顺序</div>
        <Enter delay={110} from="up" marker="adoption-succession-effect" style={{position: 'absolute', left: 0, top: 428, width: 866, height: 340}}>
          <Panel tone={C.jade} watermark={<Unlink size={120} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<UserRound size={24} color={C.paper} strokeWidth={2.2} />}>「养」· 收养关系成立的后果</PanelTab>
            <IconChip icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="养家一侧：" style={{flex: 1}}>
              养父母子女、兄弟姐妹间<Soft color={C.jade}>相互享有</Soft>继承权
            </IconChip>
            <IconChip icon={<Unlink size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="生家一侧：" style={{flex: 1}}>
              生父母子女、兄弟姐妹间的继承权<Seal delay={170} size={21}>消灭</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>收养成立 → 养家取得、生家消灭，二者不并存</div>
          </Panel>
        </Enter>
        <Enter delay={136} from="up" marker="step-succession-effect" style={{position: 'absolute', left: 910, top: 428, width: 866, height: 340}}>
          <Panel tone={C.bronze} watermark={<Users size={120} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>「继」· 继父母子女</PanelTab>
            <IconChip icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="形成扶养关系：" style={{flex: 1}}>
              继父母子女、兄弟姐妹间<Soft color={C.bronze}>相互享有</Soft>继承权；生父母子女间的继承关系<Soft color={C.jade}>继续存在</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.sepiaSoft} title="生父母、继父母离婚（原则）：" style={{flex: 1}}>
              继父母子女关系<Soft color={C.carmine}>解除</Soft>；继父母没有劳动能力、生活来源，并曾对继子女抚养、教育，且无虐待、遗弃的，有权请求继子女给付<Soft color={C.bronze}>生活费</Soft>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="例外存续：" style={{flex: 1}}>
              继父母子女形成<Soft color={C.jade}>收养关系</Soft>；离婚后依然<Soft color={C.jade}>共同生活</Soft>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ForfeitureRenunciationScene = () => {
  /* data-final-knowledge="absolute-forfeiture" data-final-knowledge="relative-forfeiture" data-final-knowledge="forfeiture-consequences" data-final-knowledge="renunciation-rules" */
  return (
    <Shell code="02" kicker="继承权 · 丧失与放弃" title="丧失继承权与放弃继承权">
      <div
        data-layout="absolute-relative-forfeiture-columns-with-renunciation-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,stamp,external-negation,chip"
        data-visual-grammar="intentional-killing-of-the-decedent-and-killing-fellow-heirs-for-the-estate-absolutely-forfeit,severe-abandonment-mistreatment-will-fraud-and-coercion-relatively-forfeit,absolute-forfeiture-survives-forgiveness-while-remorse-with-forgiveness-saves-relative-cases,renunciation-needs-written-statement-to-the-estate-manager-or-fellow-heirs-before-division"
        data-focal-rule="absolute-forfeiture-survives-forgiveness-while-relative-forfeiture-yields-to-remorse-and-forgiveness-and-renunciation-runs-from-succession-start-to-division"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="absolute-forfeiture" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 252}}>
          <Panel tone={C.carmine} watermark={<ShieldAlert size={120} color={C.carmine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.carmine} icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />}>绝对事由 · 必然丧失</PanelTab>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="① 故意杀害被继承人：">
              主观系<Soft color={C.carmine}>故意为之</Soft>，<Under color={C.carmine} delay={130}>不问动机</Under>；客观<Under color={C.carmine} delay={150}>不问既遂还是未遂</Under>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="② 为争夺遗产杀害其他继承人：">
              故意为之，且具有<Soft color={C.carmine}>争夺遗产</Soft>的目的<Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}>问动机</Chip>；客观<Under color={C.carmine} delay={170}>不问既遂还是未遂</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="left" marker="relative-forfeiture" style={{position: 'absolute', left: 0, top: 266, width: 1050, height: 292}}>
          <Panel tone={C.bronze} watermark={<Hourglass size={110} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />}>相对事由 · 情节严重方可丧失</PanelTab>
            <IconChip icon={<ShieldAlert size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="① 遗弃被继承人，或者虐待被继承人：">
              程度要求是<Soft color={C.carmine}>情节严重</Soft>
            </IconChip>
            <IconChip icon={<FileText size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="② 伪造、篡改、隐匿或者销毁遗嘱：">
              <Soft color={C.carmine}>情节严重</Soft>——如侵害缺乏劳动能力又无生活来源的继承人的利益，并造成其生活困难
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.sepiaSoft} title="③ 以欺诈、胁迫手段迫使或者妨碍设立、变更、撤回遗嘱：">
              <Soft color={C.carmine}>情节严重</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="forfeiture-consequences" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 558}}>
          <Panel tone={C.indigo} watermark={<Gavel size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />}>法律后果</PanelTab>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="绝对事由：">
              绝对<Soft color={C.carmine}>丧失</Soft>继承权——纵然被继承人表示<Soft color={C.jade}>宽宥</Soft>，或以遗嘱将遗产指定由该继承人继承，也<Seal delay={190} size={20}>不得享有</Seal>
            </IconChip>
            <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="相对事由：">
              原则上<Soft color={C.carmine}>丧失</Soft>；同时具备下述条件时，<Seal delay={220} size={20} tone={C.jade}>可不丧失</Seal>
            </IconChip>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.jadePale, border: `2px dashed ${C.jade}`, padding: '10px 14px', marginTop: 4}}>
              <span style={{fontSize: 22, fontWeight: 950, color: C.jade}}><HeartHandshake size={24} color={C.jade} strokeWidth={2.2} /> 宽宥恢复 · 两条同时具备</span>
              <span style={{fontSize: 22, fontWeight: 880}}>第一，继承人确有<Soft color={C.jade}>悔改表现</Soft>；</span>
              <span style={{fontSize: 22, fontWeight: 880}}>第二，被继承人表示<Soft color={C.jade}>宽宥</Soft>或者事后在遗嘱中将其列为<Soft color={C.jade}>继承人</Soft>。</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>受遗赠人有上述行为的，<Seal delay={280} size={20}>均绝对丧失受遗赠权</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={300} from="up" marker="renunciation-rules" style={{position: 'absolute', left: 0, top: 578, width: 1776, height: 190}}>
          <Panel tone={C.sepiaSoft} watermark={<FileSignature size={110} color={C.sepiaSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.sepiaSoft} icon={<FileSignature size={24} color={C.paper} strokeWidth={2.2} />}>放弃继承权</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<FileSignature size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="方式：">
                以<Soft color={C.indigo}>书面</Soft>形式，向<Soft color={C.indigo}>遗产管理人</Soft>或者<Soft color={C.indigo}>其他继承人</Soft>表示
              </IconChip>
              <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="时间节点：">
                继承<Soft color={C.bronze}>开始后</Soft>、遗产<Soft color={C.bronze}>分割前</Soft>；分割后表示放弃的，涉及的是<Soft color={C.sepia}>所有权</Soft>
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="限制：">
                因放弃致其不能履行<Soft color={C.carmine}>法定义务</Soft>的，放弃行为<Seal delay={360} size={20}>无效</Seal>
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RepresentationTransferScene = () => {
  /* data-final-knowledge="representation-structure" data-final-knowledge="direct-line-representation" data-final-knowledge="sibling-children-representation" data-final-knowledge="succession-transfer" */
  const frame = useCurrentFrame();
  const sitP = prog(frame, 150, 30);
  return (
    <Shell code="03" kicker="代位继承 · 转继承" title="代位继承与转继承">
      <div
        data-layout="chair-slots-fork-with-transfer-chain-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-visual-grammar="empty-chair-representation-sits-the-lineal-descendants-of-the-predeceased-child,sibling-children-represent-only-through-children-of-the-deceased-sibling,stepchildren-and-remarried-descendants-never-represent-the-widowed-in-law-seat,transfer-succession-passes-the-inheritance-right-to-the-heirs-heir-before-division"
        data-focal-rule="the-empty-statutory-seat-is-filled-only-by-lineal-descendants-or-sibling-children-while-transfer-succession-hands-the-inheritance-right-to-the-heirs-heir"
        data-focal-channels="connector,icon,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="representation-structure" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 184}}>
          <Panel tone={C.indigo} watermark={<Armchair size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Armchair size={24} color={C.paper} strokeWidth={2.2} />}>代位继承 · 结构（椅子与椅子上的人）</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1, justifyContent: 'center'}}>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>①</Chip> 被继承人死亡，遗产需要<Soft color={C.indigo}>法定继承</Soft></span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>②</Chip> 法定继承人<Soft color={C.bronze}>先于</Soft>被继承人死亡，但有「后人」</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}>③</Chip> 后人<Soft color={C.carmine}>代位行使</Soft>其法定继承权</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="direct-line-representation" style={{position: 'absolute', left: 0, top: 198, width: 1080, height: 270}}>
          <Panel tone={C.jade} watermark={<Baby size={120} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Baby size={24} color={C.paper} strokeWidth={2.2} />}>被继承人子女的直系晚辈血亲代位</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, padding: '4px 0'}}>
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}><UserRound size={26} color={C.jade} strokeWidth={2.2} />老甲 · 被继承人</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>死亡 → 法定继承</span>
              <span style={{position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 92, height: 92, borderRadius: 46, border: `3px dashed ${C.bronze}`, backgroundColor: C.bronzePale}}>
                <Armchair size={40} color={C.bronze} strokeWidth={2} opacity={1} />
                <span style={{position: 'absolute', translate: interpolate(frame, [130, 170], ['64px 0px', '0px 0px'], CLAMP), display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', backgroundColor: C.jade, color: C.paper, fontSize: 22, fontWeight: 950, opacity: sitP}}>小甲</span>
              </span>
              <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>椅子在、空着 → 小甲坐上</Chip>
            </div>
            <IconChip icon={<Baby size={24} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="范围：">
              直系晚辈血亲，<Soft color={C.jade}>不受辈数限制</Soft>；小甲是<Under color={C.jade} delay={200}>老甲的继承人</Under>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="不得代位：">
              <Ban size={20} color={C.carmine} strokeWidth={2.6} /> 继子女；<Ban size={20} color={C.carmine} strokeWidth={2.6} /> 尽主要赡养义务的儿媳、女婿再婚后所生子女
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="sibling-children-representation" style={{position: 'absolute', left: 0, top: 482, width: 1080, height: 186}}>
          <Panel tone={C.bronze} watermark={<Users size={110} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>被继承人兄弟姐妹的子女代位</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>甲、乙为兄弟姐妹；乙已死亡</Chip>
              <ArrowRightLeft size={26} color={C.bronze} strokeWidth={2.4} />
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}><Baby size={24} color={C.jade} strokeWidth={2.2} />小乙（乙的子女）坐上乙的椅子</Chip>
            </div>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="限度：">
              只限于<Soft color={C.carmine}>子女</Soft>——不管是生养继；小乙是甲的继承人
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={330} from="up" style={{position: 'absolute', left: 0, top: 682, width: 1080, height: 86}}>
          <Panel tone={C.sepiaSoft} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '10px 18px'}}>
            <PanelTab tone={C.sepiaSoft} icon={<Gavel size={22} color={C.paper} strokeWidth={2.2} />}>结论</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900}}>直系晚辈血亲代位 → <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>小甲是老甲的继承人</Chip></span>
            <span style={{fontSize: 23, fontWeight: 900}}>兄弟姐妹的子女代位 → <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>小乙是甲的继承人</Chip></span>
          </Panel>
        </Enter>
        <Enter delay={120} from="right" marker="succession-transfer" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 768}}>
          <Panel tone={C.carmine} watermark={<ArrowRightLeft size={130} color={C.carmine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <PanelTab tone={C.carmine} icon={<ArrowRightLeft size={24} color={C.paper} strokeWidth={2.2} />}>转继承 · 继承开始后分割前</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center'}}>
              <Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}><UserRound size={26} color={C.carmine} strokeWidth={2.2} />甲</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>先死亡</span>
              <ArrowDown size={26} color={C.carmine} strokeWidth={2.6} />
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}><Users size={26} color={C.indigo} strokeWidth={2.2} />乙</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>取得遗产前也死亡</span>
              <ArrowDown size={26} color={C.carmine} strokeWidth={2.6} opacity={prog(frame, 300, 16)} />
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}><Users size={26} color={C.jade} strokeWidth={2.2} />丙</Chip>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.indigo}`, padding: '8px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                <ScrollText size={26} color={C.indigo} strokeWidth={2.2} />
                <span>① 甲死亡 → 乙对甲享有<Soft color={C.indigo}>继承权</Soft></span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.bronze}`, padding: '8px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                <Hourglass size={26} color={C.bronze} strokeWidth={2.2} />
                <span>② 乙在<Soft color={C.bronze}>取得甲的遗产前</Soft>也死亡</span>
              </div>
              <Enter delay={310} from="down" distance={44}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.jadePale, borderLeft: `5px solid ${C.jade}`, padding: '8px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                  <ScrollText size={26} color={C.jade} strokeWidth={2.2} />
                  <span>③ 乙对甲的<Soft color={C.jade}>继承权</Soft>由<Soft color={C.jade}>丙继承</Soft>——丙是乙的继承人</span>
                </div>
              </Enter>
            </div>
            <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="习题 · 房屋A：" style={{flex: 1}}>
              甲、乙为夫妻，甲有个人财产房屋A。甲死亡后、遗产<Soft color={C.bronze}>分割前</Soft>乙也死亡 → 乙母继承乙已享有的房屋A<Soft color={C.bronze}>继承权</Soft>，即<Soft color={C.carmine}>转继承</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="综合 · 代位＋转继承：" style={{flex: 1}}>
              老甲死亡时小甲已死亡 → 小甲之子A<Soft color={C.jade}>代位继承</Soft>；A在取得遗产前也死亡 → 由小甲之妻小丫<Soft color={C.carmine}>转继承</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 23, fontWeight: 900, color: C.sepiaSoft}}>核心本质：<Seal delay={380} size={22}>丙继承了乙对甲的继承权</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const WillFormsValidityScene = () => {
  /* data-final-knowledge="will-forms" data-final-knowledge="witness-disqualification" data-final-knowledge="will-void-rules" data-final-knowledge="will-revocation" */
  const frame = useCurrentFrame();
  const formCards: ReadonlyArray<{readonly icon: ReactNode; readonly title: string; readonly tone: string; readonly rows: ReadonlyArray<string>}> = [
    {icon: <PenLine size={24} color={C.paper} strokeWidth={2.2} />, title: '自书遗嘱', tone: C.indigo, rows: ['立遗嘱人亲笔书写', '签名＋注明立遗嘱时间', '唯一不要求见证人']},
    {icon: <FileText size={24} color={C.paper} strokeWidth={2.2} />, title: '代书遗嘱', tone: C.jade, rows: ['口述，代书人记录', '2个以上见证人，其中一人代书', '遗嘱人、代书人、见证人签名＋时间']},
    {icon: <Printer size={24} color={C.paper} strokeWidth={2.2} />, title: '打印遗嘱', tone: C.bronze, rows: ['2个以上见证人在场见证', '遗嘱人和见证人在每一页签名', '注明立遗嘱时间']},
    {icon: <Video size={24} color={C.paper} strokeWidth={2.2} />, title: '录音录像遗嘱', tone: C.sepiaSoft, rows: ['2个以上见证人在场见证', '记录姓名或者肖像', '注明立遗嘱时间']},
    {icon: <Megaphone size={24} color={C.paper} strokeWidth={2.2} />, title: '口头遗嘱', tone: C.carmine, rows: ['生命危急情况下订立', '2个以上见证人在场见证', '危急解除后能立书面或录音录像的→无效']},
  ];
  return (
    <Shell code="04" kicker="遗嘱 · 形式与效力" title="遗嘱的形式与效力">
      <div
        data-layout="five-form-rack-with-void-fork-lanes"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,thin-underline"
        data-visual-grammar="five-will-forms-carry-distinct-signature-witness-and-recording-requirements,heirs-legatees-and-interested-persons-cannot-witness-a-will,missing-form-requirements-leave-the-will-unformed-while-defects-render-it-void,a-later-will-or-contrary-lifetime-disposition-revokes-the-earlier-will"
        data-focal-rule="five-forms-gate-the-will-onto-a-rack-disqualified-hands-may-not-witness-and-unformed-vs-void-split-into-statutory-inheritance"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        {formCards.map((card, idx) => (
          <Enter key={card.title} delay={4 + idx * 26} from="down" marker={idx === 0 ? 'will-forms' : undefined} style={{position: 'absolute', left: idx * 358, top: 0, width: 344, height: 286}}>
            <Panel tone={card.tone} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 14px'}}>
              <PanelTab tone={card.tone} icon={card.icon}>{card.title}</PanelTab>
              {card.rows.map((row) => (
                <div key={row} style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.paperDim, borderLeft: `4px solid ${card.tone}`, padding: '5px 10px', fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>{row}</div>
              ))}
            </Panel>
          </Enter>
        ))}
        <Enter delay={150} from="left" marker="witness-disqualification" style={{position: 'absolute', left: 0, top: 300, width: 640, height: 240}}>
          <Panel tone={C.carmine} watermark={<Ban size={110} color={C.carmine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 16px'}}>
            <PanelTab tone={C.carmine} icon={<Users size={24} color={C.paper} strokeWidth={2.2} />}>见证人的消极条件</PanelTab>
            <IconChip icon={<UserRound size={24} color={C.paper} strokeWidth={2.2} />} tone={C.sepiaSoft} title="① ">无民事行为能力人、限制民事行为能力人及其他不具有见证能力的人</IconChip>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="② "><Soft color={C.carmine}>继承人、受遗赠人</Soft></IconChip>
            <IconChip icon={<HandCoins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="③ ">与继承人、受遗赠人有<Soft color={C.bronze}>财产上</Soft>或者<Soft color={C.bronze}>身份上</Soft>利害关系的人</IconChip>
          </Panel>
        </Enter>
        <Enter delay={180} from="right" marker="will-revocation" style={{position: 'absolute', left: 654, top: 300, width: 1122, height: 240}}>
          <Panel tone={C.indigo} watermark={<Stamp size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 16px'}}>
            <PanelTab tone={C.indigo} icon={<FileSignature size={24} color={C.paper} strokeWidth={2.2} />}>遗嘱的变更与撤回</PanelTab>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.sepiaSoft} title="生前处分行为：">
              与遗嘱的意思表示<Soft color={C.indigo}>相反</Soft>，使遗嘱处分的财产在继承开始前灭失或所有权转移的，视为遗嘱<Soft color={C.indigo}>被撤回</Soft>或部分被撤回
            </IconChip>
            <IconChip icon={<FileSignature size={24} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="另行订立：">
              通过另行订立遗嘱，变更、撤回以前的遗嘱
            </IconChip>
            <IconChip icon={<Stamp size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="数份遗嘱相抵触：">
              以<span style={{fontSize: 30, fontWeight: 950, color: C.carmine}}>最后</span>的遗嘱为准
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={280} from="up" marker="will-void-rules" style={{position: 'absolute', left: 0, top: 554, width: 1776, height: 214}}>
          <Panel tone={C.bronze} watermark={<Gavel size={120} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />}>效力区分 · 不成立 ≠ 无效</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div style={{flex: 0.85, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.sepiaSoft}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.sepia}}>不成立</span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Under color={C.sepiaSoft} delay={340}>不具备法定形式要件</Under> → 视为<Soft color={C.sepia}>没有遗嘱</Soft>，适用<Soft color={C.sepia}>法定继承</Soft></span>
              </div>
              <div style={{flex: 1.3, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.carmine}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.carmine}}>全部无效</span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>主体瑕疵 · 受胁迫欺诈 · 危急情况解除 · 伪造篡改 · 与遗赠扶养协议抵触 · 恶性犯罪指定 → 视为没有遗嘱，适用<Soft color={C.carmine}>法定继承</Soft></span>
              </div>
              <div style={{flex: 1.15, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.bronze}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.bronze}}>部分无效</span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>未为<Soft color={C.bronze}>缺乏劳动能力又没有生活来源</Soft>的继承人保留必要份额；处分了国家、集体或他人财产 → 视为<Soft color={C.bronze}>存在遗嘱</Soft>，不适用法定继承</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const LegacyAgreementScene = () => {
  /* data-final-knowledge="will-versus-legacy" data-final-knowledge="acceptance-renunciation-mirror" data-final-knowledge="legacy-agreement-priority" data-final-knowledge="agreement-eligibility" */
  return (
    <Shell code="05" kicker="遗赠 · 遗赠扶养协议" title="遗赠与遗赠扶养协议">
      <div
        data-layout="legacy-fork-with-mirror-acceptance-and-priority-stack"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="a-will-naming-statutory-heirs-causes-testamentary-succession-and-others-take-by-legacy,heirs-accept-by-silence-and-renounce-explicitly-while-legatees-accept-explicitly-within-60-days,the-support-and-legacy-agreement-creditor-takes-after-death-priority-over-succession,statutory-support-obligors-cannot-conclude-a-support-and-legacy-agreement"
        data-focal-rule="the-will-forks-into-testamentary-succession-or-legacy-the-acceptance-mirrors-invert-and-the-agreement-creditor-takes-priority-over-succession"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="will-versus-legacy" style={{position: 'absolute', left: 0, top: 0, width: 1010, height: 300}}>
          <Panel tone={C.indigo} watermark={<FileText size={120} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<FileText size={24} color={C.paper} strokeWidth={2.2} />}>遗嘱 → 遗嘱继承 与 遗赠</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flex: 1}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}><FileText size={26} color={C.indigo} strokeWidth={2.2} />遗嘱</Chip>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.jade}`, padding: '6px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                  指定给<Soft color={C.jade}>法定继承人</Soft> → <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>遗嘱继承</Chip>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.bronze}`, padding: '6px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                  指定给法定继承人<Soft color={C.bronze}>以外</Soft>的<Users size={22} color={C.bronze} strokeWidth={2.2} /> 自然人、组织 → <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>遗赠</Chip>
                </div>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>遗嘱在<Under color={C.indigo} delay={130}>订立行为完成时成立</Under>，在<Under color={C.carmine} delay={160}>立遗嘱人死亡时生效</Under></div>
          </Panel>
        </Enter>
        <Enter delay={36} from="right" marker="acceptance-renunciation-mirror" style={{position: 'absolute', left: 1024, top: 0, width: 752, height: 300}}>
          <Panel tone={C.jade} watermark={<Hourglass size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />}>接受与放弃 · 方式相反</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.indigo}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.indigo}}><ScrollText size={24} color={C.indigo} strokeWidth={2.2} /> 继承权</span>
                <span style={{fontSize: 22, fontWeight: 880}}>接受：<Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>默示</Chip></span>
                <span style={{fontSize: 22, fontWeight: 880}}>放弃：<Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}>明示</Chip>（开始后分割前）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.bronze}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.bronze}}><HandCoins size={24} color={C.bronze} strokeWidth={2.2} /> 受遗赠权</span>
                <span style={{fontSize: 22, fontWeight: 880}}>接受：<Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}>明示</Chip></span>
                <span style={{fontSize: 22, fontWeight: 880}}>（知道后<span style={{fontSize: 30, fontWeight: 950, color: C.carmine}}>60日</span>内）</span>
                <span style={{fontSize: 22, fontWeight: 880}}>放弃：<Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>默示</Chip></span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>接受遗赠后、遗产分割前死亡的 → 该权利转移给他的<Soft color={C.bronze}>继承人</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="agreement-eligibility" style={{position: 'absolute', left: 0, top: 314, width: 1010, height: 454}}>
          <Panel tone={C.bronze} watermark={<HeartHandshake size={130} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />}>遗赠扶养协议</PanelTab>
            <IconChip icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="概念：" style={{flex: 1}}>
              扶养人与遗赠人订立，约定扶养人对遗赠人<Soft color={C.bronze}>生养死葬</Soft>，并在遗赠人<Soft color={C.carmine}>死亡后</Soft>取得遗赠人特定财产的协议
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.carmine} title="扶养人资格：" style={{flex: 1}}>
              对遗赠人负有<Soft color={C.carmine}>法定扶养义务</Soft>的人（法定继承人范围内的近亲属），<Seal delay={190} size={20}>不得</Seal>订立遗赠扶养协议
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.sepiaSoft} title="辨析 · 附义务的赠与：" style={{flex: 1}}>
              约定乙将房屋A赠与甲后，甲对乙承担生养死葬义务 → 是<Soft color={C.sepia}>附义务的赠与</Soft>，<Seal delay={230} size={20} tone={C.sepiaSoft}>不是遗赠扶养协议</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>只有在遗赠人<Soft color={C.carmine}>死亡后</Soft>，扶养人方能取得约定的遗赠人财产</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="right" marker="legacy-agreement-priority" style={{position: 'absolute', left: 1024, top: 314, width: 752, height: 454}}>
          <Panel tone={C.carmine} watermark={<Coins size={120} color={C.carmine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <PanelTab tone={C.carmine} icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />}>取得顺序 · 债权优先</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
              <Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}><HeartHandshake size={26} color={C.carmine} strokeWidth={2.2} />遗赠扶养协议债权</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>生前所欠<Under color={C.carmine} delay={180}>债务</Under></span>
            </div>
            <div style={{textAlign: 'center', fontSize: 26, fontWeight: 950, color: C.carmine, opacity: prog(useCurrentFrame(), 170, 18)}}>↓ 优先于 ↓</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.indigo}`, padding: '8px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                <ScrollText size={26} color={C.indigo} strokeWidth={2.2} />
                <span>丙的<Soft color={C.indigo}>遗嘱继承权</Soft>（房屋A指定给丙）</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.bronze}`, padding: '8px 12px', fontSize: 22, fontWeight: 880, flex: 1}}>
                <HandCoins size={26} color={C.bronze} strokeWidth={2.2} />
                <span>丁的<Soft color={C.bronze}>受遗赠权</Soft>（汽车B遗赠给丁）</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 23, fontWeight: 900, color: C.sepiaSoft}}>习题结论：乙死亡后，<Seal delay={280} size={21}>甲取得房屋A、汽车B</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const EstateSettlementScene = () => {
  /* data-final-knowledge="death-presumption" data-final-knowledge="estate-determination" data-final-knowledge="estate-manager-ladder" data-final-knowledge="debt-payment-order" data-final-knowledge="no-heir-estate" */
  return (
    <Shell code="06" kicker="遗产的处理 · 推定与清偿" title="遗产的处理">
      <div
        data-layout="presumption-fork-with-settlement-ladder-and-debt-order"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,thin-underline"
        data-visual-grammar="death-order-presumes-the-childless-first-then-elders-then-simultaneous-peers,compensation-for-destroyed-estate-substitutes-its-value-while-death-compensation-never-inherits,estate-managers-run-from-executor-to-election-to-joint-holding-to-civil-affairs-backstop,debts-are-paid-within-the-estate-value-first-by-statutory-heirs-then-will-and-legacy-takers"
        data-focal-rule="death-order-is-presumed-childless-first-elders-next-peers-simultaneously-then-the-estate-determines-managers-and-debt-payment-in-statutory-order"
        data-focal-channels="connector,icon,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="death-presumption" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 224}}>
          <Panel tone={C.sepiaSoft} watermark={<Hourglass size={120} color={C.sepiaSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.sepiaSoft} icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />}>死亡时间的推定 · 相互有继承关系的数人在同一事件中死亡，不能确定先后时间</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.carmine}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.carmine}}>① 推定没有「活着的」继承人的人先死亡</span>
                <span style={{fontSize: 22, fontWeight: 880}}>其遗产由自己继承人继承，<Soft color={C.carmine}>往外流</Soft></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.bronze}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.bronze}}>② 各自都有活着的继承人：辈分不同</span>
                <span style={{fontSize: 22, fontWeight: 880}}>推定<Soft color={C.bronze}>长辈先死亡</Soft></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.indigo}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.indigo}}>③ 辈分相同</span>
                <span style={{fontSize: 22, fontWeight: 880}}>推定<Soft color={C.indigo}>同时死亡</Soft>，彼此<Soft color={C.carmine}>不发生继承</Soft>，由各自的继承人分别继承</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" marker="estate-determination" style={{position: 'absolute', left: 0, top: 238, width: 1776, height: 186}}>
          <Panel tone={C.jade} watermark={<Boxes size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Boxes size={24} color={C.paper} strokeWidth={2.2} />}>遗产的确定</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.jade}`, padding: '6px 12px', fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.jade}}>个人承包收益</span>
                <span>个人承包应得的<Soft color={C.jade}>个人收益</Soft>可以作为遗产继承；承包经营权按<Soft color={C.jade}>承包合同</Soft>办理；投入资金、劳动及其增值和孳息折价补偿，其<Under color={C.jade} delay={150}>价额作为遗产</Under></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.bronze}`, padding: '6px 12px', fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.bronze}}>价值代位物 · 具有遗产性质</span>
                <span>遗产在分割前受侵害、毁损、灭失、被征收时，遗产原物价值的再现：<Soft color={C.bronze}>赔偿金、保险金、补偿金</Soft>；与遗产价值无关的其他赔偿<Soft color={C.sepia}>不具有</Soft></span>
              </div>
              <div style={{flex: 0.85, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.carmine}`, padding: '6px 12px', fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.carmine}}>不属于遗产</span>
                <span><Ban size={20} color={C.carmine} strokeWidth={2.6} /> 侵害致死、死后侵害的<Soft color={C.carmine}>精神损害赔偿金</Soft></span>
                <span><Ban size={20} color={C.carmine} strokeWidth={2.6} /> <Soft color={C.carmine}>死亡赔偿金</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="estate-manager-ladder" style={{position: 'absolute', left: 0, top: 438, width: 1776, height: 150}}>
          <Panel tone={C.indigo} watermark={<UserCheck size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<UserCheck size={24} color={C.paper} strokeWidth={2.2} />}>遗产管理人的确定 · 顺位递补</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flex: 1}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>① 遗嘱执行人</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>没有 →</span>
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>② 继承人及时推选</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>未推选 →</span>
              <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>③ 继承人共同担任</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>没有继承人或均放弃 →</span>
              <Chip tone={C.carmine} toneBg={C.carminePale} ink={C.carmine}><Landmark size={24} color={C.carmine} strokeWidth={2.2} />④ 民政部门、村民委员会</Chip>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft}}>有争议 → 利害关系人向<Gavel size={22} color={C.sepia} strokeWidth={2.2} /> 法院申请<Under color={C.indigo} delay={200}>指定</Under>；可依约定获得<Soft color={C.bronze}>报酬</Soft>；因<Soft color={C.carmine}>故意或重大过失</Soft>造成损害的，承担<Soft color={C.carmine}>民事责任</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" marker="debt-payment-order" style={{position: 'absolute', left: 0, top: 602, width: 1100, height: 166}}>
          <Panel tone={C.carmine} watermark={<Coins size={110} color={C.carmine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.carmine} icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />}>生前债务的清偿</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>
              <Soft color={C.carmine}>概括继承</Soft>（放弃继承的可不负偿还责任）；<Soft color={C.bronze}>限定继承</Soft>——以所继承遗产的<Under color={C.bronze} delay={240}>实际价值为限</Under>；为<Soft color={C.carmine}>缺乏劳动能力又没有生活来源</Soft>的继承人保留适当遗产后再清偿
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto'}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>① 法定继承人按比例先清偿</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.carmine}}>不足以清偿 →</span>
              <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}>② 遗嘱继承人、受遗赠人按比例偿还</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={210} from="up" marker="no-heir-estate" style={{position: 'absolute', left: 1114, top: 602, width: 662, height: 166}}>
          <Panel tone={C.sepiaSoft} watermark={<Landmark size={100} color={C.sepiaSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.sepiaSoft} icon={<Landmark size={24} color={C.paper} strokeWidth={2.2} />}>无人继承又无人受遗赠</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>
              归<Soft color={C.sepia}>国家所有</Soft>，用于<Soft color={C.jade}>公益事业</Soft>；死者生前是集体所有制组织成员的，归所在<Soft color={C.jade}>集体所有制组织</Soft>所有
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.sepiaSoft, marginTop: 'auto'}}>有<Under color={C.sepiaSoft} delay={300}>适当分予权</Under>的先满足</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


