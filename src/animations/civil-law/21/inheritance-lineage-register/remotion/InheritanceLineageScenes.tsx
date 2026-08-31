import type {CSSProperties, ReactNode} from 'react';
import {
  Armchair,
  Baby,
  Ban,
  FileSignature,
  FileWarning,
  FileX,
  GitBranch,
  HandCoins,
  HeartHandshake,
  Hourglass,
  Key,
  Landmark,
  Link2,
  Mic,
  Package,
  PenLine,
  PenTool,
  Printer,
  Repeat,
  Scale,
  Skull,
  Undo2,
  Unlink,
  UserPlus,
  UserRound,
  UserX,
  Users,
  Video,
  ScrollText,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  ground: '#F2E7CF',
  groundDeep: '#E9DBBC',
  paper: '#FBF6E9',
  paperDim: '#F3ECDA',
  ink: '#2E291E',
  inkSoft: '#6E6450',
  vermilion: '#B23A2B',
  vermilionPale: '#F4E0D6',
  indigo: '#3A5580',
  indigoPale: '#E0E7F2',
  olive: '#6E7434',
  olivePale: '#E8EAD1',
  brass: '#9E7B25',
  brassPale: '#F1E5C3',
  edge: '#D8CBA8',
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
        backgroundColor: C.ground,
        color: C.ink,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 222px, rgba(46, 41, 30, 0.07) 222px 224px), repeating-linear-gradient(0deg, transparent 0 128px, rgba(46, 41, 30, 0.05) 128px 130px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 10, background: `linear-gradient(90deg, ${C.ink} 0%, ${C.vermilion} 32%, ${C.brass} 62%, ${C.ink} 100%)`}} />
      <div style={{position: 'absolute', left: 24, top: 18, right: 24, bottom: 18, border: `3px double rgba(46, 41, 30, 0.72)`}} />
      <div style={{position: 'absolute', left: 14, top: 8, width: 36, height: 36, borderTop: `7px solid ${C.vermilion}`, borderLeft: `7px solid ${C.vermilion}`}} />
      <div style={{position: 'absolute', right: 14, bottom: 8, width: 36, height: 36, borderBottom: `7px solid ${C.vermilion}`, borderRight: `7px solid ${C.vermilion}`}} />
      <div style={{position: 'absolute', left: 50, top: 42, padding: '9px 16px', backgroundColor: C.ink, borderLeft: `8px solid ${C.vermilion}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.ground, letterSpacing: 2}}>民法 · 第21讲 · {code}</span>
      </div>
      <header
        style={{
          position: 'absolute',
          left: 292,
          right: 66,
          top: 30,
          height: 92,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 22,
          borderBottom: `3px double ${C.inkSoft}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.brass, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 62, bottom: 44, display: 'flex', alignItems: 'center', gap: 9, opacity: 0.9}}>
        {[0, 1, 2, 3, 4].map((ring) => (
          <span
            key={ring}
            style={{
              width: 13,
              height: 13,
              borderRadius: 7,
              backgroundColor: ring === sceneIndex ? C.vermilion : 'transparent',
              border: `2px solid ${C.vermilion}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 64, right: 64, top: 148, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.brass, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.paper, border: `3px double ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(46, 41, 30, 0.25)', ...style}}
  >
    <span style={{position: 'absolute', right: 9, top: 9, width: 24, height: 24, borderTop: `4px solid ${tone}`, borderRight: `4px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 15, bottom: 9, width: 24, height: 24, borderBottom: `4px solid ${tone}`, borderLeft: `4px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.brass, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.ink, borderLeft: `6px solid ${tone}`, color: C.ground, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const Row = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.paper}`, boxShadow: '0 0 0 2px rgba(46, 41, 30, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 21, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '5px 13px',
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

export const No = ({children}: {readonly children: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, color: C.vermilion, fontWeight: 950}}>
    <Ban size={22} color={C.vermilion} strokeWidth={2.4} />
    <span style={{borderBottom: `3px solid ${C.vermilion}`, paddingBottom: 1}}>{children}</span>
  </span>
);

export const HeirOrderKinshipScene = () => {
  /* data-final-knowledge="inheritance-right-definition" data-final-knowledge="first-order-heirs" data-final-knowledge="second-order-heirs" data-final-knowledge="adoptive-kin-effect" data-final-knowledge="step-kin-effect" */
  return (
    <Shell code="01" kicker="继承权 · 继承人与养继效果" title="继承权、继承人顺序与养继效果">
      <div
        data-layout="two-order-columns-over-kin-effect-pair"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="first-order-heirs-are-parents-spouse-children-plus-devoted-widowed-in-laws,second-order-heirs-inherit-only-when-no-first-order-heir-exists,adoption-extinguishes-birth-family-inheritance-and-grants-adoptive-kin-inheritance,step-kin-with-support-bonds-inherit-while-birth-kin-bonds-persist-and-divorce-releases-unless-adopted-or-living-together"
        data-focal-rule="first-order-heirs-inherit-while-second-order-heirs-only-inherit-without-first-order-heirs-and-adoption-extinguishes-birth-family-inheritance-while-support-bonds-keep-step-kin-and-birth-kin-alike"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="inheritance-right-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100}}>
          <Panel tone={C.brass} watermark={<Key size={100} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.brass} icon={<Key size={24} color={C.ground} strokeWidth={2.2} />}>继承权的定义</PanelTab>
            <div style={{fontSize: 24, fontWeight: 880, lineHeight: 1.5}}>
              继承人所享有的、在<Soft color={C.vermilion}>被继承人死亡后</Soft>，取得被继承人<Under color={C.vermilion} delay={90}>遗产</Under>的权利
            </div>
            <Chip tone={C.brass} toneBg={C.brassPale} ink={C.brass}>权利人 · 放弃 · 消灭</Chip>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="first-order-heirs" style={{position: 'absolute', left: 0, top: 116, width: 866, height: 310}}>
          <Panel tone={C.indigo} watermark={<Users size={116} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Users size={24} color={C.ground} strokeWidth={2.2} />}>第一顺序继承人</PanelTab>
            <Row icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="法定范围：" style={{flex: 1}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}><UserRound size={22} color={C.indigo} strokeWidth={2.2} />父母</Chip>
              <Chip tone={C.brass} toneBg={C.brassPale} ink={C.brass}><HeartHandshake size={22} color={C.brass} strokeWidth={2.2} />配偶</Chip>
              <Chip tone={C.olive} toneBg={C.olivePale} ink={C.olive}><Baby size={22} color={C.olive} strokeWidth={2.2} />子女</Chip>
            </Row>
            <Row icon={<UserPlus size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="拟制范围：" style={{flex: 1}}>
              对公婆、岳父母尽了<Soft color={C.olive}>主要赡养义务</Soft>的<Soft color={C.olive}>丧偶儿媳、丧偶女婿</Soft>
            </Row>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>第一顺序在位时，第二顺序不参与继承</div>
          </Panel>
        </Enter>
        <Enter delay={64} from="right" marker="second-order-heirs" style={{position: 'absolute', left: 910, top: 116, width: 866, height: 310}}>
          <Panel tone={C.olive} watermark={<Users size={116} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.olive} icon={<Users size={24} color={C.ground} strokeWidth={2.2} />}>第二顺序继承人</PanelTab>
            <Row icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.inkSoft} title="法定范围：" style={{flex: 1}}>
              <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>祖父母、外祖父母、兄弟姐妹</span>
            </Row>
            <Row icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="顺序门槛：" style={{flex: 1}}>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>没有第一顺序继承人</Chip>
              时，第二顺序继承人才有权<Soft color={C.vermilion}>继承</Soft>
            </Row>
          </Panel>
        </Enter>
        <LineH delay={96} tone={C.brass} thickness={5} span={18} style={{left: 870, top: 268, width: 36, height: 5}} />
        <Enter delay={110} from="up" marker="adoptive-kin-effect" style={{position: 'absolute', left: 0, top: 442, width: 872, height: 330}}>
          <Panel tone={C.olive} watermark={<Link2 size={120} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.olive} icon={<Link2 size={24} color={C.ground} strokeWidth={2.2} />}>「养」收养关系成立的后果</PanelTab>
            <Row icon={<Link2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="养家一侧：" style={{flex: 1}}>
              养父母子女、兄弟姐妹间<Soft color={C.olive}>相互享有</Soft>继承权
            </Row>
            <Row icon={<Unlink size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="生家一侧：" style={{flex: 1}}>
              生父母子女、兄弟姐妹间的继承权<Soft color={C.vermilion}>消灭</Soft>
            </Row>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>收养成立 → 养家相互享有、生家消灭，二者不并存</div>
          </Panel>
        </Enter>
        <Enter delay={136} from="up" marker="step-kin-effect" style={{position: 'absolute', left: 904, top: 442, width: 872, height: 330}}>
          <Panel tone={C.indigo} watermark={<Users size={120} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<HeartHandshake size={24} color={C.ground} strokeWidth={2.2} />}>「继」继父母子女、兄弟姐妹</PanelTab>
            <Row icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="形成扶养关系：" style={{flex: 1}}>
              <Soft color={C.indigo}>相互享有</Soft>继承权；生父母子女间的继承关系<Soft color={C.olive}>继续存在</Soft>
            </Row>
            <Row icon={<Unlink size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="离婚 · 原则解除：" style={{flex: 1}}>
              继父母子女关系解除；继父母没有劳动能力、生活来源，并曾对继子女抚养、教育，且无虐待、遗弃的，有权请求给付<Under color={C.indigo}>生活费</Under>
            </Row>
            <Row icon={<UserRound size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="例外存续：" style={{flex: 1}}>
              继父母子女形成<Soft color={C.olive}>收养关系</Soft>；离婚后依然<Soft color={C.olive}>共同生活</Soft>
            </Row>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LossWaiverRightsScene = () => {
  /* data-final-knowledge="absolute-grounds" data-final-knowledge="relative-grounds" data-final-knowledge="heir-consequence" data-final-knowledge="devisee-loss" data-final-knowledge="waiver-rules" */
  return (
    <Shell code="02" kicker="继承权 · 丧失与放弃" title="丧失继承权、受遗赠权与放弃继承权">
      <div
        data-layout="loss-fork-with-consequence-strip-and-waiver-ledger"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,stamp,external-negation,soft-highlight"
        data-visual-grammar="intentional-killing-grounds-absolutely-void-inheritance-regardless-of-attempt-or-motive,relative-grounds-require-severe-circumstances-and-allow-remorse-forgiveness-recovery,absolute-grounds-never-regain-despite-forgiveness-or-later-will-designation,devisees-lose-absolutely-for-any-of-the-five-acts,waiver-needs-writing-to-the-estate-manager-or-coheirs-before-division"
        data-focal-rule="absolute-grounds-never-regain-despite-forgiveness-or-will-designation-while-relative-grounds-recover-through-remorse-and-forgiveness-and-waiver-needs-written-statement-before-division"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92}}>
          <Panel tone={C.vermilion} watermark={<Key size={96} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '8px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Key size={24} color={C.ground} strokeWidth={2.2} />}>丧失继承权、受遗赠权的法定事由</PanelTab>
            <div style={{fontSize: 24, fontWeight: 880, lineHeight: 1.45}}>
              <Soft color={C.vermilion}>绝对事由</Soft>与<Soft color={C.brass}>相对事由</Soft>的分野，决定继承权<Soft color={C.vermilion}>能否恢复</Soft>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="absolute-grounds" style={{position: 'absolute', left: 0, top: 108, width: 880, height: 336}}>
          <Panel tone={C.vermilion} watermark={<FileX size={120} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<FileX size={24} color={C.ground} strokeWidth={2.2} />}>绝对事由 · 杀害行为</PanelTab>
            <Row icon={<FileX size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="① 故意杀害被继承人：" style={{flex: 1}}>
              主观上<Soft color={C.vermilion}>故意为之</Soft>、不问动机为何；客观上不问既遂还是未遂 <Seal delay={120}>丧失继承权</Seal>
            </Row>
            <Row icon={<FileX size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="② 为争夺遗产杀害其他继承人：" style={{flex: 1}}>
              故意且具有<Soft color={C.vermilion}>争夺遗产的目的</Soft>；不问既遂还是未遂 <Seal delay={150}>丧失继承权</Seal>
            </Row>
          </Panel>
        </Enter>
        <Enter delay={64} from="right" marker="relative-grounds" style={{position: 'absolute', left: 908, top: 108, width: 868, height: 336}}>
          <Panel tone={C.brass} watermark={<FileWarning size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<FileWarning size={24} color={C.ground} strokeWidth={2.2} />}>相对事由 · 情节严重门槛</PanelTab>
            <Row icon={<FileWarning size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="① 遗弃、虐待被继承人：" style={{flex: 1}}>
              程度要求 <Seal delay={110}>情节严重</Seal>
            </Row>
            <Row icon={<FileWarning size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="② 伪造、篡改、隐匿或者销毁遗嘱：" style={{flex: 1}}>
              程度要求 <Seal delay={130}>情节严重</Seal>
            </Row>
            <Row icon={<FileWarning size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="③ 欺诈、胁迫迫使或妨碍设立、变更、撤回遗嘱：" style={{flex: 1}}>
              程度要求 <Seal delay={150}>情节严重</Seal>
            </Row>
          </Panel>
        </Enter>
        <LineV delay={92} tone={C.brass} thickness={4} span={16} head={false} style={{left: 892, top: 200, width: 4, height: 120}} />
        <Enter delay={110} from="up" marker="heir-consequence" style={{position: 'absolute', left: 0, top: 460, width: 1090, height: 312}}>
          <Panel tone={C.indigo} watermark={<UserX size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<UserX size={24} color={C.ground} strokeWidth={2.2} />}>法律后果 · 对继承人</PanelTab>
            <Row icon={<FileX size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="绝对事由 → 绝对丧失：" style={{flex: 1}}>
              纵然被继承人表示<Soft color={C.indigo}>宽宥</Soft>，或以遗嘱将遗产指定由该继承人继承，也<No>不得享有继承权</No>
            </Row>
            <Row icon={<HeartHandshake size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="相对事由 → 原则上丧失：" style={{flex: 1}}>
              确有<Soft color={C.olive}>悔改表现</Soft>，且被继承人表示<Soft color={C.olive}>宽宥</Soft>或事后在遗嘱中将其列为继承人 → <Seal delay={150} tone={C.olive}>不丧失继承权</Seal>
            </Row>
            <Enter delay={170} from="none" marker="devisee-loss" style={{marginTop: 'auto'}}>
              <Row icon={<UserX size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="对受遗赠人：">
                受遗赠人有上述 5 种行为的，<No>均绝对丧失受遗赠权</No>
              </Row>
            </Enter>
          </Panel>
        </Enter>
        <Enter delay={136} from="up" marker="waiver-rules" style={{position: 'absolute', left: 1106, top: 460, width: 670, height: 312}}>
          <Panel tone={C.olive} watermark={<FileSignature size={110} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.olive} icon={<FileSignature size={24} color={C.ground} strokeWidth={2.2} />}>放弃继承权</PanelTab>
            <Row icon={<PenLine size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="形式要求：" style={{flex: 1}}>
              应当以<Soft color={C.olive}>书面</Soft>形式，向遗产管理人或者其他继承人表示
            </Row>
            <Row icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="时间节点：" style={{flex: 1}}>
              继承开始后、遗产<Soft color={C.brass}>分割前</Soft>作出；分割后表示放弃的，是<No>所有权</No>而非继承权
            </Row>
            <Row icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="限制：" style={{flex: 1}}>
              因放弃致其不能履行法定义务的，放弃行为<No>无效</No>
            </Row>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RepresentationTransmissionScene = () => {
  /* data-final-knowledge="death-presumption" data-final-knowledge="descendant-representation" data-final-knowledge="sibling-representation" data-final-knowledge="transmission-succession" */
  return (
    <Shell code="03" kicker="代位继承 · 转继承" title="代位继承与转继承">
      <div
        data-layout="succession-timeline-with-representation-seats-and-transmission-chain"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,thin-underline"
        data-visual-grammar="simultaneous-deaths-presume-no-heir-first-then-elder-then-equal-simultaneity,descendant-representation-sits-into-the-empty-seat-without-generation-limit,sibling-representation-only-admits-the-siblings-children,transmission-passes-the-inheritance-right-to-the-heirs-heir-before-division"
        data-focal-rule="the-empty-statutory-seat-is-filled-only-by-lineal-descendants-or-sibling-children-while-transmission-hands-the-inheritance-right-to-the-heirs-heir-before-division"
        data-focal-channels="icon,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="death-presumption" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 196}}>
          <Panel tone={C.brass} watermark={<Skull size={104} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <PanelTab tone={C.brass} icon={<Skull size={24} color={C.ground} strokeWidth={2.2} />}>死亡时间的推定</PanelTab>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>相互有继承关系的数人在同一事件中死亡，不能确定死亡先后时间</span>
            </div>
            <div style={{display: 'flex', gap: 56, flex: 1}}>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px', fontSize: 22, fontWeight: 880}}>
                <Skull size={26} color={C.brass} strokeWidth={2.2} />
                <span>① 推定<Under color={C.brass}>没有</Under>"活着的"继承人的人先死亡</span>
              </div>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px', fontSize: 22, fontWeight: 880}}>
                <Users size={26} color={C.brass} strokeWidth={2.2} />
                <span>② 各有活着继承人的，辈分不同 → 推定<Under color={C.brass}>长辈</Under>先死亡</span>
              </div>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderLeft: `5px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px', fontSize: 22, fontWeight: 880}}>
                <Users size={26} color={C.brass} strokeWidth={2.2} />
                <span>③ 辈分相同 → 推定<Under color={C.brass}>同时死亡</Under>，彼此不发生继承</span>
              </div>
            </div>
            <LineH delay={100} tone={C.brass} thickness={5} span={16} style={{left: 576, top: 122, width: 40, height: 5}} />
            <LineH delay={116} tone={C.brass} thickness={5} span={16} style={{left: 1174, top: 122, width: 40, height: 5}} />
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="descendant-representation" style={{position: 'absolute', left: 0, top: 212, width: 900, height: 560}}>
          <Panel tone={C.indigo} watermark={<Armchair size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Armchair size={24} color={C.ground} strokeWidth={2.2} />}>代位继承 · 「椅子」与「椅子上的人」</PanelTab>
            <Row icon={<Armchair size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="椅子在、但空着：" style={{flex: 1}}>
              法定继承人<Under color={C.indigo}>先于</Under>被继承人死亡，其"后人"<Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>代位行使</Chip>其法定继承权
            </Row>
            <Row icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="直系晚辈血亲：" style={{flex: 1}}>
              有第一代的由第一代代位，没有的由下一代代位，以此类推，<Under color={C.indigo} delay={120}>不受辈数限制</Under>
            </Row>
            <Enter delay={110} from="none" marker="sibling-representation" style={{flex: 1}}>
              <Row icon={<GitBranch size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="兄弟姐妹的代位：" style={{flex: 1}}>
                仅限于由兄弟姐妹的<Under color={C.olive}>子女</Under>代位——小乙坐上乙的"椅子"，小乙是甲的继承人
              </Row>
            </Enter>
            <Row icon={<UserX size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="不得代位：" style={{flex: 1}}>
              <span style={{color: C.vermilion, fontWeight: 950}}><Under color={C.vermilion}>继子女</Under></span>；对公婆、岳父母尽主要赡养义务的儿媳、女婿再婚后所生子女
            </Row>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="transmission-succession" style={{position: 'absolute', left: 932, top: 212, width: 844, height: 560}}>
          <Panel tone={C.olive} watermark={<Repeat size={130} color={C.olive} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.olive} icon={<Repeat size={24} color={C.ground} strokeWidth={2.2} />}>转继承 · 继承开始后、分割前</PanelTab>
            <Row icon={<Key size={24} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="① 甲先死亡：" style={{flex: 1}}>
              乙对甲享有<Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}><Key size={22} color={C.indigo} strokeWidth={2.2} />继承权</Chip>
            </Row>
            <Row icon={<Skull size={24} color={C.paper} strokeWidth={2.2} />} tone={C.inkSoft} title="② 乙在取得遗产前也死亡：" style={{flex: 1}}>
              遗产尚未分割，乙的继承权<Under color={C.olive}>尚未转化为所有权</Under>
            </Row>
            <Row icon={<Repeat size={24} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="③ 转继承：" style={{flex: 1}}>
              乙对甲的继承权，由<Under color={C.olive}>乙的继承人</Under>丙继承——丙是乙的继承人
            </Row>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 22, fontWeight: 950, color: C.inkSoft}}>核心本质：</span>
              <Seal delay={170} size={22} tone={C.olive}>丙继承了乙对甲的继承权</Seal>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const WillFormsValidityScene = () => {
  /* data-final-knowledge="will-forms" data-final-knowledge="witness-disqualification" data-final-knowledge="nonexistent-vs-invalid" data-final-knowledge="part-invalid-reserve" data-final-knowledge="last-will-prevails" */
  const formCards: readonly {readonly key: string; readonly icon: ReactNode; readonly name: string; readonly tone: string; readonly lines: readonly ReactNode[]}[] = [
    {
      key: 'self',
      icon: <PenLine size={24} color={C.ground} strokeWidth={2.2} />,
      name: '自书遗嘱',
      tone: C.indigo,
      lines: [
        <span key="a">立遗嘱人<Soft color={C.indigo}>亲笔书写</Soft></span>,
        <span key="b">签名＋注明立遗嘱时间</span>,
        <span key="c"><Soft color={C.olive}>唯一不要求见证人</Soft></span>,
      ],
    },
    {
      key: 'ghost',
      icon: <PenTool size={24} color={C.ground} strokeWidth={2.2} />,
      name: '代书遗嘱',
      tone: C.brass,
      lines: [
        <span key="a">口述，代书人记录</span>,
        <span key="b"><Soft color={C.brass}>2个以上</Soft>见证人，其中一人代书</span>,
        <span key="c">遗嘱人、代书人、其他见证人签名＋时间</span>,
      ],
    },
    {
      key: 'print',
      icon: <Printer size={24} color={C.ground} strokeWidth={2.2} />,
      name: '打印遗嘱',
      tone: C.olive,
      lines: [
        <span key="a"><Soft color={C.olive}>2个以上</Soft>见证人在场见证</span>,
        <span key="b">遗嘱人和见证人在<Soft color={C.olive}>每一页</Soft>签名</span>,
        <span key="c">注明立遗嘱时间</span>,
      ],
    },
    {
      key: 'video',
      icon: <Video size={24} color={C.ground} strokeWidth={2.2} />,
      name: '录音录像遗嘱',
      tone: C.indigo,
      lines: [
        <span key="a"><Soft color={C.indigo}>2个以上</Soft>见证人在场见证</span>,
        <span key="b">记录其<Soft color={C.indigo}>姓名或者肖像</Soft></span>,
        <span key="c">及立遗嘱时间</span>,
      ],
    },
    {
      key: 'oral',
      icon: <Mic size={24} color={C.ground} strokeWidth={2.2} />,
      name: '口头遗嘱',
      tone: C.vermilion,
      lines: [
        <span key="a">只有在<Soft color={C.vermilion}>生命危急</Soft>情况下</span>,
        <span key="b">应当有2个以上见证人见证</span>,
        <span key="c">危急解除后能以书面或录音录像立遗嘱的 <Seal delay={150} size={21}>口头遗嘱无效</Seal></span>,
      ],
    },
    {
      key: 'notary',
      icon: <Landmark size={24} color={C.ground} strokeWidth={2.2} />,
      name: '公证遗嘱',
      tone: C.inkSoft,
      lines: [<span key="a">由遗嘱人经<Soft color={C.inkSoft}>公证机构</Soft>办理</span>],
    },
  ];
  return (
    <Shell code="04" kicker="遗嘱 · 形式与效力" title="遗嘱的形式与效力">
      <div
        data-layout="six-form-typographic-row-with-validity-triptych"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="six-statutory-will-forms-carry-witness-and-signature-requirements,disqualified-witnesses-include-heirs-devisees-and-interested-persons,missing-form-requirements-make-the-will-nonexistent-while-defects-make-it-invalid,reserved-share-for-heirs-lacking-labor-and-income-makes-part-of-the-will-invalid,conflicting-wills-take-the-latest-one"
        data-focal-rule="missing-form-requirements-leave-the-will-nonexistent-while-defects-render-it-void-and-the-latest-of-conflicting-wills-prevails"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        {formCards.map((card, idx) => (
          <Enter key={card.key} delay={4 + idx * 18} from="down" marker={idx === 0 ? 'will-forms' : undefined} style={{position: 'absolute', left: idx * 298, top: 0, width: 284, height: 296}}>
            <Panel tone={card.tone} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '8px 12px'}}>
              <PanelTab tone={card.tone} icon={card.icon}>{card.name}</PanelTab>
              {card.lines.map((line, lineIdx) => (
                <div key={lineIdx} style={{backgroundColor: C.paperDim, borderLeft: `4px solid ${card.tone}`, padding: '4px 8px', fontSize: 22, fontWeight: 860, lineHeight: 1.3}}>
                  {line}
                </div>
              ))}
            </Panel>
          </Enter>
        ))}
        <Enter delay={112} from="left" marker="witness-disqualification" style={{position: 'absolute', left: 0, top: 312, width: 880, height: 180}}>
          <Panel tone={C.vermilion} watermark={<UserX size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '10px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<UserX size={24} color={C.ground} strokeWidth={2.2} />}>遗嘱见证人的消极条件</PanelTab>
            <Row icon={<UserX size={22} color={C.paper} strokeWidth={2.2} />} tone={C.inkSoft} title="① " style={{flex: 1}}>
              无民事行为能力人、限制民事行为能力人及其他不具有见证能力的人
            </Row>
            <Row icon={<UserX size={22} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="② " style={{flex: 1}}>
              <Soft color={C.vermilion}>继承人、受遗赠人</Soft>
            </Row>
            <Row icon={<UserX size={22} color={C.paper} strokeWidth={2.2} />} tone={C.brass} title="③ " style={{flex: 1}}>
              与继承人、受遗赠人有<Soft color={C.brass}>财产上</Soft>或者<Soft color={C.brass}>身份上</Soft>的利害关系的人
            </Row>
          </Panel>
        </Enter>
        <Enter delay={134} from="right" marker="last-will-prevails" style={{position: 'absolute', left: 896, top: 312, width: 880, height: 180}}>
          <Panel tone={C.brass} watermark={<ScrollText size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.brass} icon={<ScrollText size={24} color={C.ground} strokeWidth={2.2} />}>多份遗嘱的效力认定</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 25, fontWeight: 950}}>
              立有数份内容相抵触的遗嘱的，以<Seal delay={140} size={23}>最后的遗嘱</Seal>为准
            </div>
            <Row icon={<Undo2 size={22} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="撤回路径：" style={{flex: 1}}>
              生前处分行为与遗嘱的意思表示相反 → 视为撤回（部分撤回）；另行订立遗嘱变更、撤回
            </Row>
          </Panel>
        </Enter>
        <Enter delay={156} from="up" marker="nonexistent-vs-invalid" style={{position: 'absolute', left: 0, top: 508, width: 576, height: 264}}>
          <Panel tone={C.inkSoft} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '10px 16px'}}>
            <PanelTab tone={C.inkSoft}>遗嘱不成立</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4, flex: 1}}>
              不具备法定形式要件的，遗嘱<Seal delay={160} size={21}>不成立</Seal>——视为<Soft color={C.inkSoft}>没有遗嘱</Soft>，适用法定继承
            </div>
            <Chip tone={C.inkSoft} toneBg={C.paperDim} ink={C.ink}>是"不成立"，而非"无效"</Chip>
          </Panel>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 600, top: 508, width: 576, height: 264}}>
          <Panel tone={C.vermilion} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 16px'}}>
            <PanelTab tone={C.vermilion}>遗嘱全部无效</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, flex: 1}}>
              {[
                '主体瑕疵：订立时不具备完全民事行为能力',
                '受胁迫、欺诈所立',
                '危急解除后的口头遗嘱',
                '伪造、篡改的遗嘱',
                '与遗赠扶养协议抵触',
                '恶性犯罪后的遗嘱指定',
              ].map((cause) => (
                <div key={cause} style={{backgroundColor: C.vermilionPale, borderLeft: `4px solid ${C.vermilion}`, padding: '3px 8px', fontSize: 22, fontWeight: 860, lineHeight: 1.28}}>
                  {cause}
                </div>
              ))}
            </div>
            <div style={{fontSize: 22, fontWeight: 950, color: C.vermilion}}>视为没有遗嘱，适用法定继承</div>
          </Panel>
        </Enter>
        <Enter delay={184} from="up" marker="part-invalid-reserve" style={{position: 'absolute', left: 1200, top: 508, width: 576, height: 264}}>
          <Panel tone={C.olive} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 16px'}}>
            <PanelTab tone={C.olive}>遗嘱部分无效</PanelTab>
            <div style={{backgroundColor: C.olivePale, borderLeft: `4px solid ${C.olive}`, padding: '4px 10px', fontSize: 22, fontWeight: 860, lineHeight: 1.35, flex: 1}}>
              未为<Soft color={C.olive}>缺乏劳动能力又没有生活来源</Soft>的继承人保留必要的遗产份额
            </div>
            <div style={{backgroundColor: C.olivePale, borderLeft: `4px solid ${C.olive}`, padding: '4px 10px', fontSize: 22, fontWeight: 860, lineHeight: 1.35}}>
              处分了<Soft color={C.olive}>国家、集体或者他人</Soft>所有的财产
            </div>
            <div style={{fontSize: 22, fontWeight: 950, color: C.olive}}>视为存在遗嘱，不适用法定继承</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const BequestAgreementDebtsScene = () => {
  /* data-final-knowledge="will-inheritance-vs-bequest" data-final-knowledge="acceptance-waiver-mirror" data-final-knowledge="agreement-priority" data-final-knowledge="debt-repayment-order" */
  return (
    <Shell code="05" kicker="遗赠 · 遗赠扶养协议 · 债务清偿" title="遗嘱继承、遗赠与遗赠扶养协议">
      <div
        data-layout="bequest-mirror-over-agreement-priority-and-debt-lanes"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,thin-underline,external-negation"
        data-visual-grammar="wills-naming-statutory-heirs-cause-will-inheritance-while-others-cause-bequest,inheritance-accepts-by-silence-while-bequest-needs-explicit-acceptance-within-60-days,support-agreement-creditor-ranks-ahead-of-will-inheritance-and-bequest,debts-are-repaid-first-by-statutory-heirs-then-by-will-heirs-and-devisees-pro-rata"
        data-focal-rule="the-will-forks-into-will-inheritance-for-statutory-heirs-or-bequest-for-others-the-acceptance-modes-invert-and-the-agreement-creditor-ranks-ahead-while-debts-run-statutory-first-then-will-and-legacy-takers"
        data-focal-channels="icon,contrast,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="will-inheritance-vs-bequest" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 196}}>
          <Panel tone={C.brass} watermark={<ScrollText size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <PanelTab tone={C.brass} icon={<ScrollText size={24} color={C.ground} strokeWidth={2.2} />}>遗嘱 · 遗嘱继承与遗赠的共同前提</PanelTab>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>遗嘱在订立行为完成时成立，在立遗嘱人死亡时生效</span>
            </div>
            <div style={{display: 'flex', gap: 56, flex: 1}}>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.indigo}`, display: 'flex', alignItems: 'center', gap: 12, padding: '6px 14px'}}>
                <Users size={28} color={C.indigo} strokeWidth={2.2} />
                <span style={{fontSize: 23, fontWeight: 880}}>指定给<Under color={C.indigo}>法定继承人</Under>继承的 → <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>遗嘱继承</Chip></span>
              </div>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderLeft: `6px solid ${C.olive}`, display: 'flex', alignItems: 'center', gap: 12, padding: '6px 14px'}}>
                <UserRound size={28} color={C.olive} strokeWidth={2.2} />
                <span style={{fontSize: 23, fontWeight: 880}}>指定给法定继承人<Under color={C.olive}>以外</Under>的自然人、组织的 → <Chip tone={C.olive} toneBg={C.olivePale} ink={C.olive}>遗赠</Chip></span>
              </div>
            </div>
            <LineH delay={90} tone={C.brass} thickness={5} span={16} style={{left: 576, top: 130, width: 40, height: 5}} />
            <LineH delay={104} tone={C.brass} thickness={5} span={16} style={{left: 1174, top: 130, width: 40, height: 5}} />
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="acceptance-waiver-mirror" style={{position: 'absolute', left: 0, top: 212, width: 880, height: 300}}>
          <Panel tone={C.indigo} watermark={<Hourglass size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Hourglass size={24} color={C.ground} strokeWidth={2.2} />}>接受与放弃 · 方式对比</PanelTab>
            <Row icon={<Key size={22} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="继承权 · 接受：" style={{flex: 1}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale} ink={C.indigo}>默示</Chip>即接受
            </Row>
            <Row icon={<Ban size={22} color={C.paper} strokeWidth={2.2} />} tone={C.inkSoft} title="继承权 · 放弃：" style={{flex: 1}}>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>明示</Chip>（继承开始后，遗产分割前）
            </Row>
            <Row icon={<HandCoins size={22} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="受遗赠权 · 接受：" style={{flex: 1}}>
              <Chip tone={C.olive} toneBg={C.olivePale} ink={C.olive}>明示</Chip>（知道受遗赠后<Under color={C.olive}>60日</Under>内）
            </Row>
            <Row icon={<Ban size={22} color={C.paper} strokeWidth={2.2} />} tone={C.inkSoft} title="受遗赠权 · 放弃：" style={{flex: 1}}>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>默示</Chip>——期满未明示，视为放弃
            </Row>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="agreement-priority" style={{position: 'absolute', left: 896, top: 212, width: 880, height: 300}}>
          <Panel tone={C.vermilion} watermark={<HeartHandshake size={120} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '10px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<HeartHandshake size={24} color={C.ground} strokeWidth={2.2} />}>遗赠扶养协议</PanelTab>
            <Row icon={<HeartHandshake size={22} color={C.paper} strokeWidth={2.2} />} tone={C.olive} title="内容：" style={{flex: 1}}>
              扶养人对遗赠人<Under color={C.olive}>生养死葬</Under>；遗赠人<Under color={C.olive}>死亡后</Under>，扶养人方取得约定的遗赠人财产
            </Row>
            <Row icon={<Scale size={22} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="债权优先：" style={{flex: 1}}>
              遗赠义务是生前所欠的债务；扶养人取得遗赠财产的债权，<Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}><Scale size={22} color={C.vermilion} strokeWidth={2.2} />优先于</Chip>继承权、受遗赠权
            </Row>
            <Row icon={<Ban size={22} color={C.paper} strokeWidth={2.2} />} tone={C.inkSoft} title="扶养人资格：" style={{flex: 1}}>
              对遗赠人负有法定扶养义务的近亲属，<No>不得</No>订立遗赠扶养协议
            </Row>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="debt-repayment-order" style={{position: 'absolute', left: 0, top: 528, width: 1776, height: 244}}>
          <Panel tone={C.inkSoft} watermark={<Package size={120} color={C.inkSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <PanelTab tone={C.inkSoft} icon={<Package size={24} color={C.ground} strokeWidth={2.2} />}>被继承人生前债务的清偿</PanelTab>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>限定继承：以所继承的遗产<Under color={C.inkSoft}>实际价值</Under>为限；放弃继承的，可不负偿还责任</span>
            </div>
            <div style={{display: 'flex', alignItems: 'stretch', gap: 46, flex: 1}}>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderTop: `6px solid ${C.indigo}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, padding: '6px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.indigo}}>首先 · 法定继承人</span>
                <span style={{fontSize: 22, fontWeight: 860}}>以其所得遗产清偿；数人的按各自所得<Under color={C.indigo}>比例</Under>偿还</span>
              </div>
              <div style={{flex: 1, backgroundColor: C.paperDim, borderTop: `6px solid ${C.olive}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, padding: '6px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.olive}}>不足部分 · 遗嘱继承人和受遗赠人</span>
                <span style={{fontSize: 22, fontWeight: 860}}>按<Under color={C.olive}>比例</Under>以所得遗产偿还</span>
              </div>
            </div>
            <LineH delay={140} tone={C.inkSoft} thickness={5} span={16} style={{left: 869, top: 158, width: 40, height: 5}} />
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
