import type {CSSProperties, ReactNode} from 'react';
import {BellOff, Brain, Gavel, Hand, MessageSquare, PenLine, Scale, Split, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  lacquer: '#26221B',
  lacquerMid: '#3B362C',
  rattan: '#C9A227',
  rattanPale: '#EFDFAC',
  xuan: '#F5F1E6',
  xuanDim: '#E8E2D0',
  xuanEdge: '#B9B29E',
  indigo: '#3F568C',
  indigoPale: '#D8DfEA',
  moss: '#5E7D54',
  mossPale: '#DCE5D2',
  wine: '#8E3049',
  winePale: '#EDD0D8',
  ink: '#292520',
  inkSoft: '#756E60',
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
      backgroundColor: C.lacquer,
      color: C.xuan,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 158px, rgba(0, 0, 0, 0.13) 158px 161px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.rattan}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.rattanPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.lacquerMid, borderLeft: `8px solid ${C.rattan}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.xuan, letterSpacing: 2}}>民法 · 第3讲 · {code}</span>
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
        borderBottom: `2px solid ${C.rattan}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.xuan}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.rattanPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.rattan, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.xuan, border: `2px solid ${C.xuanEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.rattan, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', backgroundColor: C.lacquerMid, borderLeft: `6px solid ${tone}`, color: C.xuan, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.xuanDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.wine}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.wine, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.xuanEdge, toneBg = C.xuanDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 21, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const IntentionExpressionScene = () => {
  /* data-final-knowledge="intention-definition" data-final-knowledge="effect-meaning-element" data-final-knowledge="expression-element" data-final-knowledge="formation-rule" */
  return (
    <Shell code="01" kicker="含义 · 构成要件" title="意思表示">
      <div
        data-layout="twin-element-anatomy-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="intention-is-the-outward-expression-of-civil-effect-meaning,effect-meaning-targets-civil-consequences-not-mere-social-talk,expression-comes-openly-by-words-or-impliedly-by-conduct,silence-counts-only-where-law-presumes-it-as-declaration"
        data-focal-rule="civil-effect-meaning-plus-outward-expression-form-one-declaration"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="intention-definition" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 190}}>
          <Panel tone={C.rattan} watermark={<Brain size={150} color={C.rattan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.rattan} icon={<Brain size={24} color={C.rattanPale} strokeWidth={2.2} />}>含义</PanelTab>
            <IconChip icon={<Brain size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.rattan} title="意思表示：">
              行为人<Under color={C.rattan} delay={60}>民法效果意思</Under>的<Under color={C.rattan} delay={90}>对外表达</Under>
            </IconChip>
            <IconChip icon={<Split size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="构成要件＝两要素：">
              民法效果意思 ＋ 表示
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={24} from="right" marker="effect-meaning-element" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 190}}>
          <Panel tone={C.indigo} watermark={<MessageSquare size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<MessageSquare size={24} color={C.rattanPale} strokeWidth={2.2} />}>要素① 民法效果意思</PanelTab>
            <IconChip icon={<Hand size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="是：">
              追求民法上法律后果的主观意愿——买卖 · 赠与 · 遗嘱 · 抛弃权利
            </IconChip>
            <IconChip icon={<BellOff size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="否：">
              报名春游——没有民法意义 → <Soft color={C.wine}>不构成意思表示</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={50} from="left" marker="expression-element" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 254}}>
          <Panel tone={C.moss} watermark={<Hand size={160} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Hand size={24} color={C.rattanPale} strokeWidth={2.2} />}>要素② 表示 · 表达于外的三种方式</PanelTab>
            <IconChip icon={<MessageSquare size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="明示：">
              以<Soft color={C.indigo}>口头 · 书面</Soft>等方式表达民法效果意思
            </IconChip>
            <IconChip icon={<Hand size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="默示：">
              以<Soft color={C.moss}>积极的行为</Soft>表达民法效果意思
            </IconChip>
            <IconChip icon={<BellOff size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="推定：">
              有<Soft color={C.wine}>法律明文规定</Soft>时，以<Soft color={C.wine}>纯粹的不作为</Soft>表达
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={74} from="right" marker="formation-rule" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 254}}>
          <Panel tone={C.wine} watermark={<Scale size={160} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wine} icon={<Scale size={24} color={C.rattanPale} strokeWidth={2.2} />}>法律意义</PanelTab>
            <IconChip icon={<Scale size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="地位：">
              意思表示是民事法律行为的<Soft color={C.indigo}>一般成立要件</Soft>
            </IconChip>
            <IconChip icon={<BellOff size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="后果：">
              不构成意思表示 → 民事法律行为<Seal delay={130} size={19}>不成立</Seal>（不是无效）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>成立与生效分层：先问成不成立，再问有效无效</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 40, top: 476, width: 1696, height: 130}}>
          <Panel tone={C.rattan} watermark={<Brain size={130} color={C.rattan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.rattan} icon={<Brain size={22} color={C.rattanPale} strokeWidth={2.2} />}>总结</PanelTab>
            <IconChip icon={<Split size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="口诀：">
              效果意思管<Soft color={C.indigo}>内心</Soft> · 表示管<Soft color={C.indigo}>表达于外</Soft> —— 二者齐备才是意思表示，缺一则民事法律行为不成立
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="对照：">
              买卖·赠与·遗嘱·抛弃权利＝有法效意思；报名春游＝无
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AgreementForkScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="agreement-definition" data-final-knowledge="declaration-gate" data-final-knowledge="settled-look-rule" data-final-knowledge="notebook-case-verdicts"
     data-stateful-source="signature-ticket" data-stateful-terminal="signature-ticket" */
  const ticketTravel = prog(frame, 260, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [480, 1130], CLAMP);
  return (
    <Shell code="02" kicker="构成要件 · 法律意义" title="合意">
      <div
        data-layout="duo-desk-agreement-fork"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,stamp,external-negation,thin-underline"
        data-visual-grammar="agreement-is-unanimous-intentions-of-all-actors,every-actor-must-declare-or-no-agreement-forms,the-look-of-settling-decides-formation-not-inner-truth,defective-intent-leaves-agreement-formed-but-voidable"
        data-focal-rule="every-desk-must-declare-and-the-settled-look-not-inner-truth-forms-agreement"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="agreement-definition" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 190}}>
          <Panel tone={C.rattan} watermark={<Users size={130} color={C.rattan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.rattan} icon={<Users size={22} color={C.rattanPale} strokeWidth={2.2} />}>含义 · 法律意义</PanelTab>
            <IconChip icon={<Users size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.rattan} title="合意：">
              各行为人<Under color={C.rattan} delay={50}>意思表示</Under>达成<Under color={C.rattan} delay={80}>一致</Under>（＝各意思表示＋达成一致）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="地位：">
              双方 · 多方民事法律行为的<Soft color={C.indigo}>成立要件</Soft>——未达成合意 → 合同不成立
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="declaration-gate" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 290}}>
          <Panel tone={C.indigo} watermark={<PenLine size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<PenLine size={24} color={C.rattanPale} strokeWidth={2.2} />}>要件① 各行为人均需作出意思表示</PanelTab>
            <IconChip icon={<PenLine size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="规则：">
              任何一方<Soft color={C.wine}>未作出</Soft>意思表示 → 合意<Under color={C.wine} delay={80}>不成立</Under>
            </IconChip>
            <IconChip icon={<Users size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="签字案 · 甲：">
              出卖意愿的表达 → 有民法法效意思 → <Seal delay={140} size={18} tone={C.moss}>是意思表示 ✓</Seal>
            </IconChip>
            <IconChip icon={<BellOff size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="签字案 · 乙：">
              误以为报名春游 → 无法效意思 → <Seal delay={170} size={18}>不是 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="settled-look-rule" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 290}}>
          <Panel tone={C.moss} watermark={<Scale size={150} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Scale size={24} color={C.rattanPale} strokeWidth={2.2} />}>要件② 达成一致</PanelTab>
            <IconChip icon={<Split size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="判断标准：">
              具备各行为人<Soft color={C.indigo}>「说好了」的外观</Soft>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="意思表示不真实：">
              <Under color={C.wine} delay={100}>不影响</Under>合意的成立 → 只导致<Soft color={C.wine}>可撤销</Soft>
            </IconChip>
            <IconChip icon={<PenLine size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="签字案 · 赠书误会：">
              甲出卖·乙受赠均是意思表示 → 签字＝<Seal delay={150} size={18} tone={C.moss}>合意成立 ✓ 重大误解可撤销</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <div data-stateful-source="signature-ticket" style={{position: 'absolute', left: ticketX, top: 504, opacity: prog(frame, 210, 14) * (1 - prog(frame, 286, 14)), visibility: frame >= 304 ? 'hidden' : 'visible'}}>
          <Chip tone={C.rattan} toneBg={C.xuan}>乙在笔记本上签字</Chip>
        </div>
        <span data-stateful-terminal="signature-ticket" style={{position: 'absolute', left: 1130, top: 504, display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '5px 10px', fontSize: 19, fontWeight: 950, color: C.ink, opacity: prog(frame, 290, 14)}}>
          合意外观达成 ✓
        </span>
        <Enter delay={110} from="up" marker="notebook-case-verdicts" style={{position: 'absolute', left: 40, top: 552, width: 1696, height: 212}}>
          <Panel tone={C.wine} watermark={<Gavel size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.wine} icon={<Gavel size={22} color={C.rattanPale} strokeWidth={2.2} />}>案例分析 · 教授甲推销新书</PanelTab>
            <IconChip icon={<PenLine size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="案一（乙误以为报名春游）：">
              甲＝意思表示 ✓ · 乙＝不是 ✗ → <Seal delay={180} size={17} tone={C.wine}>合意不成立</Seal>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="案二（乙误以为甲赠书）：">
              均是意思表示 · 签字＝合意外观 → <Seal delay={210} size={17} tone={C.moss}>合意成立 ✓ 重大误解→可撤销</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>效力瑕疵不影响成立——先定成立，再定可撤销</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
