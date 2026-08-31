import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowRightLeft,
  Ban,
  Coins,
  Eye,
  Gavel,
  Heart,
  Landmark,
  Layers,
  Scale,
  Search,
  Undo2,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  plum: '#3A2340',
  plumDeep: '#2C1A31',
  plumMid: '#4E3157',
  ivory: '#F6EFE2',
  ivoryDim: '#EBE1D0',
  aubergine: '#322B38',
  aubergineSoft: '#7C7086',
  bronze: '#C0933F',
  bronzePale: '#F2E6C8',
  rose: '#B56576',
  rosePale: '#F2DCE0',
  slate: '#5F7A8C',
  slatePale: '#DEE7EC',
  moss: '#6E8F62',
  mossPale: '#E2EBDB',
  edge: '#CDBFAE',
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
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.plum,
        color: C.ivory,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle at 22% 18%, rgba(246, 239, 226, 0.07) 0%, transparent 44%), repeating-linear-gradient(0deg, transparent 0 128px, rgba(255, 255, 255, 0.04) 128px 130px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.rose}, ${C.bronze}, ${C.slate})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(246, 239, 226, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.plumDeep, borderLeft: `8px solid ${C.bronze}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.ivory, letterSpacing: 2}}>民法 · 第18讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ivory}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.bronzePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.rose : 'transparent',
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
    style={{backgroundColor: C.ivory, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.aubergine, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(44, 26, 49, 0.42)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.bronze, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.plumDeep, borderLeft: `6px solid ${tone}`, color: C.ivory, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.ivoryDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.ivory}`, boxShadow: '0 0 0 2px rgba(192, 147, 63, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.aubergine, lineHeight: 1.42}}>
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

export const Chip = ({children, tone = C.edge, toneBg = C.ivoryDim, ink = C.aubergine}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const TortDefinitionScene = () => {
  /* data-final-knowledge="tort-concept" data-final-knowledge="justified-acts-strip" data-final-knowledge="eight-remedies" data-final-knowledge="four-elements" */
  return (
    <Shell code="01" kicker="侵权责任 · 概念与形态" title="侵权责任的概念与形态">
      <div
        data-layout="definition-bench-with-remedy-tags"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="torts-violate-legal-duties-against-absolute-rights-or-protected-interests-as-factual-acts,justified-acts-like-defense-necessity-self-help-and-official-duty-are-no-torts,eight-remedy-forms-reach-far-beyond-damages-alone,four-elements-build-the-damages-claim-act-harm-causation-and-fault"
        data-focal-rule="torts-are-unjustified-violations-of-absolute-rights-or-interests-and-liability-reaches-eight-forms-built-on-four-elements"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="tort-concept" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 236}}>
          <Panel tone={C.bronze} watermark={<Gavel size={120} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Gavel size={24} color={C.ivory} strokeWidth={2.2} />}>侵权行为 · 定义与性质</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>致害人违反<Soft color={C.rose}>法定义务</Soft>，侵害他人的<Soft color={C.rose}>绝对权</Soft>或受法律保护的<Soft color={C.rose}>利益</Soft>的行为</div>
            <IconChip icon={<Eye size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="事实行为：" style={{flex: 0.9}}>
              成立不以行为人具有<Soft color={C.slate}>民事行为能力</Soft>为条件
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 880}}>对象：① 绝对权（人格权、物权、知识产权）② 受保护的<Under color={C.bronze} delay={150}>法益</Under>（如占有）</div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="justified-acts-strip" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 236}}>
          <Panel tone={C.moss} watermark={<Ban size={110} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />}>正当性排除 · 不构成侵权</PanelTab>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.moss} toneBg={C.mossPale} ink={C.moss}>正当防卫</Chip>
              <Chip tone={C.moss} toneBg={C.mossPale} ink={C.moss}>紧急避险</Chip>
              <Chip tone={C.moss} toneBg={C.mossPale} ink={C.moss}>私力救济</Chip>
              <Chip tone={C.moss} toneBg={C.mossPale} ink={C.moss}>执行公务</Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>纵然侵害绝对权或法益，具有正当性即<Soft color={C.moss}>不构成侵权</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="eight-remedies" style={{position: 'absolute', left: 0, top: 250, width: 1776, height: 180}}>
          <Panel tone={C.rose} watermark={<Scale size={120} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />}>侵权责任 · 八种形态（不以损害赔偿为限）</PanelTab>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1, alignContent: 'center'}}>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>停止侵害</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>排除妨碍</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>消除危险</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>返还财产</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>恢复原状</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>赔偿损失</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>赔礼道歉</Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>消除影响、恢复名誉</Chip>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>台风垮墙案：无过错 → 不赔损失，但仍须<Soft color={C.rose}>排除妨碍</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="four-elements" style={{position: 'absolute', left: 0, top: 444, width: 1776, height: 324}}>
          <Panel tone={C.slate} watermark={<ArrowRightLeft size={120} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<ArrowRightLeft size={24} color={C.ivory} strokeWidth={2.2} />}>侵权损害赔偿责任 · 四构成要件</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flex: 1, justifyContent: 'center'}}>
              <Chip tone={C.slate} toneBg={C.slatePale} ink={C.slate}><span style={{fontSize: 30, fontWeight: 950}}>①</span> 侵权行为</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.slate}}>＋</span>
              <Chip tone={C.slate} toneBg={C.slatePale} ink={C.slate}><span style={{fontSize: 30, fontWeight: 950}}>②</span> 侵权后果</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.slate}}>＋</span>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}><span style={{fontSize: 30, fontWeight: 950}}>③</span> 因果关系</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.slate}}>＋</span>
              <Chip tone={C.bronze} toneBg={C.bronzePale} ink={C.bronze}><span style={{fontSize: 30, fontWeight: 950}}>④</span> 过错</Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>四要件齐备 → 最完整的侵权损害赔偿责任；缺一即不成立</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const PrincipleSwitchboardScene = () => {
  /* data-final-knowledge="foreseeability-standard" data-final-knowledge="fault-and-presumption-lanes" data-final-knowledge="no-fault-lane" data-final-knowledge="equity-lane" */
  return (
    <Shell code="02" kicker="归责原则 · 四线总机" title="归责原则体系">
      <div
        data-layout="four-lane-principle-switchboard"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="foreseeability-splits-fault-from-accident,fault-liability-lets-the-victim-prove-while-presumption-lets-the-defendant-rebut,no-fault-liability-ignores-fault-and-answers-only-statutory-defenses,equity-liability-splits-losses-when-both-sides-are-blameless-but-causation-exists"
        data-focal-rule="four-principle-lanes-differ-only-in-who-proves-what-victim-proves-fault-defendant-rebuts-presumption-no-fault-answers-defenses-and-equity-splits-without-fault"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="foreseeability-standard" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 152}}>
          <Panel tone={C.bronze} watermark={<Eye size={110} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Eye size={24} color={C.ivory} strokeWidth={2.2} />}>过错 与 意外 · 可预见标准</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Eye size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="过错：" style={{flex: 1}}>
                <Soft color={C.rose}>可以预见</Soft>其行为会致人损害或遭受损害——过错的内涵是「可预见」而非「做错了」
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="意外：" style={{flex: 1}}>
                <Soft color={C.slate}>不能预见</Soft>——过错的反义词是意外，不是无过错
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={44} from="left" marker="fault-and-presumption-lanes" style={{position: 'absolute', left: 0, top: 166, width: 866, height: 302}}>
          <Panel tone={C.slate} watermark={<Search size={120} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<Search size={24} color={C.ivory} strokeWidth={2.2} />}>过错责任 · 举证责任两条道</PanelTab>
            <IconChip icon={<UserRound size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="过错认定原则：" style={{flex: 1}}>
              <Soft color={C.slate}>受害人</Soft>举证证明被告有过错；不能证明 → 被告<Soft color={C.pine}>无需承担</Soft>
            </IconChip>
            <IconChip icon={<Search size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="过错推定原则：" style={{flex: 1}}>
              受害人<Soft color={C.pine}>无需证明</Soft>；致害人须举反证自证<Soft color={C.pine}>没有过错</Soft>，否则<Seal delay={200} size={20}>推定有过错</Seal>并担责
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>占用道停车案：甲丙均无法预见 → 均无过错 → 无赔偿责任</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="no-fault-lane" style={{position: 'absolute', left: 910, top: 166, width: 866, height: 302}}>
          <Panel tone={C.rose} watermark={<Scale size={120} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />}>无过错责任 · 不问过错</PanelTab>
            <IconChip icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="含义：" style={{flex: 0.9}}>
              无论有无<Soft color={C.rose}>过错</Soft>均应赔偿——是<Under color={C.rose} delay={150}>「不问过错」</Under>而非「没有过错的责任」
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="自证无过错：" style={{flex: 1.1}}>
              <Ban size={20} color={C.rose} strokeWidth={2.6} /> 不能免责——只有证明存在法定<Soft color={C.rose}>减免事由</Soft>（如不可抗力、受害人故意、受害人重大过失）才能减免；烟花案自证储存无不当<Seal delay={220} size={20} tone={C.rose}>仍不能免责</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="equity-lane" style={{position: 'absolute', left: 0, top: 482, width: 1776, height: 286}}>
          <Panel tone={C.moss} watermark={<Users size={120} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>公平责任 · 双方均无过错＋有因果关系</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="要件①：" style={{flex: 1}}>
                双方对损害的发生均<Soft color={C.slate}>无过错</Soft>（过错责任无法救济）
              </IconChip>
              <IconChip icon={<ArrowRightLeft size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="要件②：" style={{flex: 1}}>
                损害由致害人造成，存在<Soft color={C.rose}>因果关系</Soft>
              </IconChip>
              <IconChip icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.moss} title="后果：" style={{flex: 1}}>
                根据实际情况，由双方<Soft color={C.moss}>酌情、适当分担</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>丙犯病撞乙：丙无过错但有因果关系 → 公平责任；甲占道与损害<Soft color={C.warn}>无因果关系</Soft> → 连公平责任也不担</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const DamagesTwinScene = () => {
  /* data-final-knowledge="property-loss-methods" data-final-knowledge="punitive-damages-gates" data-final-knowledge="fatal-compensation-rule" data-final-knowledge="spiritual-damages-rule" */
  return (
    <Shell code="03" kicker="损害赔偿 · 财产与精神" title="财产损害与精神损害赔偿">
      <div
        data-layout="property-spirit-bench-with-dials"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="property-loss-follows-market-price-while-personal-harm-with-gain-follows-the-gain,punitive-damages-need-intent-plus-severity-across-products-ip-and-environment,fatal-compensation-runs-twenty-years-aging-down-to-five-and-equal-sums-for-same-acts,spiritual-damages-belong-to-natural-persons-and-generally-to-intentional-harm-to-personal-objects"
        data-focal-rule="compensation-dials-set-by-market-price-or-gain-ratchet-up-for-punitive-gates-and-run-age-dials-for-death-while-spiritual-damages-stay-human-only"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="property-loss-methods" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 250}}>
          <Panel tone={C.bronze} watermark={<Coins size={110} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />}>财产损害数额 · 两种算法</PanelTab>
            <IconChip icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bronze} title="侵害财产：" style={{flex: 0.9}}>
              按<Soft color={C.bronze}>损失发生时</Soft>的<Under color={C.bronze} delay={130}>市场价格</Under>计算——玉镯现价20万 → 赔20万
            </IconChip>
            <IconChip icon={<UserRound size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="侵害人身权益致财产损失：" style={{flex: 1.1}}>
              损失难以确定且侵权人<Soft color={C.rose}>因此获利</Soft>的 → 按<Soft color={C.rose}>获得的利益</Soft>赔偿——假冒名师出书获利100万 → 赔100万
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="punitive-damages-gates" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 250}}>
          <Panel tone={C.rose} watermark={<Ban size={110} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />}>惩罚性赔偿 · 三道闸</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>知识产权</Chip> 故意＋情节严重</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>产品</Chip> 明知缺陷仍产销或未有效补救 → 致<Soft color={C.warn}>死亡或健康严重损害</Soft></span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>环境</Chip> 故意污染破坏生态＋后果严重</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="fatal-compensation-rule" style={{position: 'absolute', left: 0, top: 264, width: 866, height: 250}}>
          <Panel tone={C.slate} watermark={<Users size={110} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>死亡赔偿金 · 年龄转盘</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880}}>基准＝受诉法院所在地上一年度<Soft color={C.slate}>城镇居民</Soft>人均可支配收入</div>
            <div style={{display: 'flex', gap: 10, flex: 1, alignItems: 'center', flexWrap: 'wrap'}}>
              <Chip tone={C.slate} toneBg={C.slatePale} ink={C.slate}>一般按<span style={{fontSize: 30, fontWeight: 950}}>20年</span></Chip>
              <Chip tone={C.slate} toneBg={C.slatePale} ink={C.slate}>60岁以上每增1岁<span style={{fontSize: 30, fontWeight: 950}}>减1年</span></Chip>
              <Chip tone={C.slate} toneBg={C.slatePale} ink={C.slate}>75岁以上按<span style={{fontSize: 30, fontWeight: 950}}>5年</span></Chip>
              <Chip tone={C.rose} toneBg={C.rosePale} ink={C.rose}>同一侵权行为致多人死亡 → 相同数额（同命同价）</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={140} from="right" marker="spiritual-damages-rule" style={{position: 'absolute', left: 910, top: 264, width: 866, height: 250}}>
          <Panel tone={C.moss} watermark={<Heart size={110} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Heart size={24} color={C.ivory} strokeWidth={2.2} />}>精神损害赔偿 · 主体与情形</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>专属<Soft color={C.moss}>自然人</Soft>——<Soft color={C.warn}>法人不得主张</Soft>（诽谤公司案只有法定代表人丙可主张）</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>情形：① 侵害<Soft color={C.moss}>人身权益</Soft>（人格权/身份权）造成严重精神损害；② <Soft color={C.warn}>故意或重大过失</Soft>侵害具有<Soft color={C.moss}>人身意义的特定物</Soft>（人格物）造成严重精神损害——不慎摔碎玉镯可赔财产损失但<Soft color={C.warn}>不能</Soft>主张精神损害赔偿</div>
          </Panel>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 0, top: 528, width: 1776, height: 240}}>
          <Panel tone={C.rose} watermark={<Heart size={110} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Heart size={24} color={C.ivory} strokeWidth={2.2} />}>死者近亲属 · 精神损害赔偿的两个顺位</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>触发：自然人侵权致死，或死亡后其<Soft color={C.rose}>人格、遗体</Soft>遭受侵害</div>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="第一顺位：" style={{flex: 1}}>
                死者的<Soft color={C.rose}>配偶、父母、子女</Soft>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="第二顺位：" style={{flex: 1}}>
                没有第一顺位亲属的 → <Soft color={C.slate}>其他近亲属</Soft>（祖孙、兄弟姐妹）诉请
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const ClaimForkScene = () => {
  /* data-final-knowledge="own-versus-inherited-claims" data-final-knowledge="liability-piling" data-final-knowledge="civil-priority-rule" data-final-knowledge="immunity-gates" */
  return (
    <Shell code="04" kicker="请求权性质 · 免责事由" title="请求权的性质与免责事由">
      <div
        data-layout="claim-nature-fork-with-immunity-gates"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,stamp,chip,soft-highlight"
        data-visual-grammar="own-claims-like-fatal-compensation-and-spiritual-damages-are-not-estate,inherited-claims-follow-succession-rules-inside-the-estate,criminal-or-administrative-liability-piles-on-and-civil-damages-come-first,comparative-fault-special-physique-victim-intent-third-party-cause-and-assumed-risk-open-the-immunity-gates"
        data-focal-rule="claims-fork-by-birth-own-claims-skip-the-estate-while-liability-piles-on-with-civil-priority-and-immunity-gates-open-for-fault-sharing-intent-and-assumed-risk"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="own-versus-inherited-claims" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 330}}>
          <Panel tone={C.bronze} watermark={<Users size={120} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>死者近亲属的请求权 · 自己的 vs 继承的</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.ivoryDim, borderLeft: `6px solid ${C.rose}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.rose}}>「自己的」请求权</span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>死亡赔偿金请求权、致死或死后遗体人格受侵害的精神损害赔偿——生前<Soft color={C.rose}>并不存在</Soft></span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>→ 所得<Seal delay={200} size={19} tone={C.rose}>并非死者遗产</Seal>，不适用继承编（不受遗嘱约束、<Soft color={C.rose}>无需偿还死者债务</Soft>）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.ivoryDim, borderLeft: `6px solid ${C.slate}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.slate}}>「继承的」请求权</span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>死者生前<Soft color={C.slate}>已享有</Soft>的损害赔偿请求权，因死亡成为<Soft color={C.slate}>遗产</Soft>，由近亲属继承</span>
                <span style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>→ 所得为死者遗产，<Seal delay={230} size={19} tone={C.slate}>适用继承编规则</Seal></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="liability-piling" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 330}}>
          <Panel tone={C.rose} watermark={<Gavel size={110} color={C.rose} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.rose} icon={<Gavel size={24} color={C.ivory} strokeWidth={2.2} />}>责任竞合 · 并处与优先</PanelTab>
            <IconChip icon={<Layers size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="责任并处：" style={{flex: 1}}>
              承担行政责任、刑事责任的，<Soft color={C.slate}>不影响</Soft>承担侵权损害赔偿责任
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="民事优先：" style={{flex: 1.2}}>
              财产不足以同时承担三种责任 → <Seal delay={200} size={20}>优先承担侵权责任</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="civil-priority-rule" style={{position: 'absolute', left: 0, top: 344, width: 1776, height: 100}}>
          <Panel tone={C.slate} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.slate} icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />}>口诀</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900}}>「自己的」不进遗产袋，「继承的」走继承编；三责并处，民事优先</span>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="immunity-gates" style={{position: 'absolute', left: 0, top: 458, width: 1776, height: 310}}>
          <Panel tone={C.moss} watermark={<Ban size={120} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />}>免责与减责事由 · 四道门</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.slate} title="过失相抵：" style={{flex: 1.3}}>
                受害人对同一损害的发生、扩大也有<Soft color={C.slate}>过错</Soft>的，承担部分损失；但<Soft color={C.warn}>特殊体质</Soft>导致损害扩大<Soft color={C.warn}>不能减免</Soft>致害人责任
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.rose} title="受害人故意：" style={{flex: 0.9}}>
                损害因受害人<Soft color={C.rose}>故意</Soft>造成 → 行为人<Soft color={C.rose}>不承担责任</Soft>
              </IconChip>
            </div>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<ArrowRightLeft size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.pine} title="第三人致损：" style={{flex: 0.9}}>
                应当由<Soft color={C.pine}>第三人</Soft>承担侵权责任
              </IconChip>
              <IconChip icon={<Undo2 size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.bronze} title="自甘冒险：" style={{flex: 1.6}}>
                自愿参加<Soft color={C.bronze}>有一定风险的文体活动</Soft>因其他参加者受损 → <Soft color={C.pine}>不得请求</Soft>其他参加者担责（<Soft color={C.warn}>故意或重大过失除外</Soft>）；组织者未尽<Soft color={C.indigo}>安保义务</Soft>的照样担责
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

/* __APPEND__ */
