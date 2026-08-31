import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowRightLeft,
  Ban,
  Gavel,
  Handshake,
  Hourglass,
  Link,
  Megaphone,
  Scale,
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
  iron: '#2F3A42',
  ironDeep: '#232C33',
  ironMid: '#43525C',
  steel: '#D7DEE3',
  steelDim: '#C2CBD2',
  slate: '#262B31',
  slateSoft: '#7E8A93',
  rust: '#C05A2E',
  rustPale: '#F5DFD2',
  amber: '#D9A62E',
  amberPale: '#F5E8C6',
  teal: '#4E6E73',
  tealPale: '#DCE7E5',
  edge: '#8D9AA3',
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
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.iron,
        color: C.steel,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 34px, rgba(0, 0, 0, 0.1) 34px 38px), radial-gradient(circle at 80% 18%, rgba(215, 222, 227, 0.07) 0%, transparent 40%)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.rust}, ${C.amber}, ${C.teal})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(215, 222, 227, 0.28)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.ironDeep, borderLeft: `8px solid ${C.amber}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.steel, letterSpacing: 2}}>民法 · 第19讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.steel}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.amberPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.rust : 'transparent',
              border: `2px solid ${C.amber}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.amber, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.steel, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.slate, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 44, 51, 0.45)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.amber, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.ironDeep, borderLeft: `6px solid ${tone}`, color: C.steel, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.steelDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.steel}`, boxShadow: '0 0 0 2px rgba(217, 166, 46, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.slate, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.rust}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.steelDim, ink = C.slate}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const JointTortThreeTypesScene = () => {
  /* data-final-knowledge="joint-harm-definition" data-final-knowledge="instigation-helper-rules" data-final-knowledge="dangerous-act-rules" data-final-knowledge="capacity-requalification" */
  return (
    <Shell code="01" kicker="共同侵权 · 三种类型" title="共同侵权的三种类型">
      <div
        data-layout="three-type-rack-with-guardian-split"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="joint-harm-requires-intentional-contact-of-two-or-more-tortfeasors-causing-one-harm,instigators-and-helpers-jointly-owe-with-capacitous-actors-while-guardians-join-within-their-fault,non-capacitous-instigation-requalifies-as-joint-harm,dangerous-acts-with-untraceable-causation-bind-everyone-who-cannot-exclude-himself"
        data-focal-rule="intentional-contact-and-one-harm-define-joint-tort-and-its-three-types-all-chain-into-joint-liability-except-guardians-who-join-only-within-their-fault"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="joint-harm-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 116}}>
          <Panel tone={C.amber} watermark={<Users size={110} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<Users size={24} color={C.iron} strokeWidth={2.2} />}>共同侵权 · 定义</PanelTab>
            <span style={{fontSize: 23, fontWeight: 880}}>具有<Soft color={C.rust}>意思联络</Soft>的2个或以上致害人，<Under color={C.amber} delay={120}>共同实施</Under>，导致<Soft color={C.rust}>一个损害后果</Soft>的侵权行为</span>
            <Chip tone={C.teal} toneBg={C.tealPale} ink={C.teal}>三类型：共同加害 · 教唆帮助 · 共同危险</Chip>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 130, width: 866, height: 300}}>
          <Panel tone={C.rust} watermark={<Megaphone size={120} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Megaphone size={24} color={C.steel} strokeWidth={2.2} />}>① 共同加害 + ② 教唆帮助</PanelTab>
            <IconChip icon={<Handshake size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="共同加害：" style={{flex: 0.9}}>
              有意思联络＋共同过错＋共同实施＋一个损害 → <Seal delay={150} size={20}>连带赔偿责任</Seal>
            </IconChip>
            <IconChip icon={<Megaphone size={24} color={C.steel} strokeWidth={2.2} />} tone={C.teal} title="教唆、帮助完全行为能力人：" style={{flex: 0.9}}>
              教唆、帮助者与行为人承担<Soft color={C.teal}>连带责任</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.steel} strokeWidth={2.2} />} tone={C.amber} title="教唆、帮助无/限制行为能力人：" style={{flex: 1.3}}>
              教唆帮助者承担<Soft color={C.amber}>侵权责任</Soft>（是否明知对方能力<Under color={C.amber} delay={200}>在所不问</Under>）；监护人未尽职责 → 在<Soft color={C.amber}>过错范围</Soft>内<Soft color={C.rust}>连带</Soft>，先行赔付后超额部分可向教唆帮助者<Soft color={C.teal}>追偿</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="capacity-requalification" style={{position: 'absolute', left: 910, top: 130, width: 866, height: 300}}>
          <Panel tone={C.teal} watermark={<Ban size={120} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<Ban size={24} color={C.steel} strokeWidth={2.2} />}>行为主体能力限制 · 关键辨析</PanelTab>
            <IconChip icon={<Ban size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="非完全行为能力人教唆帮助：" style={{flex: 1.1}}>
              法律性质认定为<Seal delay={170} size={20}>共同加害</Seal>，而<Soft color={C.rust}>非</Soft>教唆、帮助
            </IconChip>
            <IconChip icon={<Users size={24} color={C.steel} strokeWidth={2.2} />} tone={C.teal} title="案例对照：" style={{flex: 1.3}}>
              甲递弹弓让未成年人乙打丙玻璃，乙母在场含笑不语（应赔400元）→ 丙可请求甲赔<Chip tone={C.teal} toneBg={C.tealPale} ink={C.teal}>1000元</Chip>，并请求乙母在<Chip tone={C.amber} toneBg={C.amberPale} ink={C.amber}>400元</Chip>范围内连带；乙母赔付后可向甲追偿<Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>600元</Chip>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.slateSoft}}>15岁的丙递螺丝刀教唆12岁的乙划车 → 丙非完全行为能力人 → 构成共同加害而非教唆</div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="dangerous-act-rules" style={{position: 'absolute', left: 0, top: 444, width: 1776, height: 240}}>
          <Panel tone={C.slateSoft} watermark={<Link size={120} color={C.slateSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.slateSoft} icon={<Link size={24} color={C.steel} strokeWidth={2.2} />}>③ 共同危险侵权 · 多个危险行为＋一个不明的因果关系</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Link size={24} color={C.steel} strokeWidth={2.2} />} tone={C.teal} title="要件：" style={{flex: 1.2}}>
                2人以上均实施<Soft color={C.teal}>可能致损的危险行为</Soft>；只有部分行为致害，且<Under color={C.rust} delay={200}>因果关系不明</Under>（不能查明具体致害人）
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="后果：" style={{flex: 1}}>
                不能<Soft color={C.rust}>证明</Soft>损害不是自己的行为造成 → 承担<Seal delay={260} size={20}>连带赔偿责任</Seal>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.steel} strokeWidth={2.2} />} tone={C.amber} title="案例：" style={{flex: 0.9}}>
                甲乙丙共殴李四，不知谁的致命一脚 → 共同危险，<Soft color={C.rust}>连带</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 0, top: 698, width: 1776, height: 70}}>
          <Panel tone={C.amber} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '8px 18px'}}>
            <PanelTab tone={C.amber} icon={<Megaphone size={22} color={C.iron} strokeWidth={2.2} />}>速记</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900}}>教唆帮助者需为完全行为能力人；共同侵权三类型默认连带，监护人只在过错范围内跟着连带</span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const CombinationAxisScene = () => {
  /* data-final-knowledge="combination-concept" data-final-knowledge="direct-combination-rule" data-final-knowledge="indirect-combination-rule" data-final-knowledge="removal-test" */
  return (
    <Shell code="02" kicker="行为结合 · 直接与间接" title="无意思联络的行为结合">
      <div
        data-layout="direct-indirect-combination-axis"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-visual-grammar="combination-without-intentional-contact-still-points-many-actors-at-one-harm,direct-combination-lets-each-act-alone-cause-the-whole-harm-and-chains-everyone,indirect-combination-needs-the-acts-to-merge-before-any-harm-and-splits-by-fault,removing-one-act-decides-the-test-unavoidable-harm-is-direct-and-avoidable-is-indirect"
        data-focal-rule="without-intentional-contact-the-removal-test-splits-combination-direct-unavoidable-harm-chains-everyone-while-indirect-avoidable-harm-splits-by-fault"
        data-focal-channels="contrast,connector,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="combination-concept" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.teal} watermark={<Split size={110} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '10px 18px'}}>
            <PanelTab tone={C.teal} icon={<Split size={24} color={C.steel} strokeWidth={2.2} />}>行为结合（无意思联络的行为结合）</PanelTab>
            <span style={{fontSize: 23, fontWeight: 880}}>2人以上<Soft color={C.teal}>没有意思联络</Soft>，各自实施侵害，导致<Soft color={C.rust}>一个损害后果</Soft></span>
            <Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>与共同加害的根本区别：无意思联络</Chip>
          </Panel>
        </Enter>
        <Enter delay={44} from="left" marker="direct-combination-rule" style={{position: 'absolute', left: 0, top: 126, width: 866, height: 436}}>
          <Panel tone={C.rust} watermark={<Link size={130} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Link size={24} color={C.steel} strokeWidth={2.2} />}>直接结合 · 每个行为都足以单独致命</PanelTab>
            <IconChip icon={<TrendingUp size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="原因力认定：" style={{flex: 1}}>
              每一个侵害行为都<Soft color={C.rust}>可以单独导致</Soft>该后果发生
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.steel} strokeWidth={2.2} />} tone={C.amber} title="特征（剔除测试）：" style={{flex: 1}}>
              假设部分行为未曾实施，该损害后果<Seal delay={190} size={20}>依然无法避免</Seal>
            </IconChip>
            <IconChip icon={<Link size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="责任承担：" style={{flex: 0.9}}>
              各行为人承担<Seal delay={230} size={21}>连带赔偿责任</Seal>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.slateSoft}}>猎人互不知晓、同时射中要害 → 任一枪即致命 → 直接结合</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="indirect-combination-rule" style={{position: 'absolute', left: 910, top: 126, width: 866, height: 436}}>
          <Panel tone={C.teal} watermark={<ArrowRightLeft size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<ArrowRightLeft size={24} color={C.steel} strokeWidth={2.2} />}>间接结合 · 行为必须汇流才致害</PanelTab>
            <IconChip icon={<TrendingUp size={24} color={C.steel} strokeWidth={2.2} />} tone={C.teal} title="原因力认定：" style={{flex: 1}}>
              每一个侵害行为均<Soft color={C.teal}>不可能单独导致</Soft>损害，必须<Under color={C.teal} delay={160}>结合起来</Under>才能引起
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.steel} strokeWidth={2.2} />} tone={C.amber} title="特征（剔除测试）：" style={{flex: 1}}>
              假设部分行为未曾实施，该损害后果<Seal delay={210} size={20} tone={C.teal}>即可避免</Seal>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="责任承担：" style={{flex: 0.9}}>
              根据各自<Soft color={C.rust}>过错大小</Soft>承担<Seal delay={250} size={21} tone={C.teal}>按份赔偿责任</Seal>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.slateSoft}}>打猎误伤丙 + 医院手术消毒不当感染致死 → 任一行为单独都不致死 → 间接结合</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" marker="removal-test" style={{position: 'absolute', left: 0, top: 576, width: 1776, height: 192}}>
          <Panel tone={C.amber} watermark={<Scale size={110} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.amber} icon={<Scale size={24} color={C.iron} strokeWidth={2.2} />}>一秒判定 · 剔除测试</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Ban size={24} color={C.steel} strokeWidth={2.2} />} tone={C.rust} title="抽掉一个行为，损害照样发生：" style={{flex: 1.2}}>
                每个行为都足以致命 → <Soft color={C.rust}>直接结合 → 连带</Soft>
              </IconChip>
              <IconChip icon={<Undo2 size={24} color={C.steel} strokeWidth={2.2} />} tone={C.teal} title="抽掉一个行为，损害就不会发生：" style={{flex: 1.2}}>
                行为须汇流 → <Soft color={C.teal}>间接结合 → 按份</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const FiveCaseTreeScene = () => {
  /* data-final-knowledge="case-planned-lure" data-final-knowledge="case-handed-gun" data-final-knowledge="case-untraceable-bullet" data-final-knowledge="case-strangers-vitals" data-final-knowledge="case-hunt-then-hospital" */
  const rows: ReadonlyArray<{readonly icon: ReactNode; readonly bigIcon: ReactNode; readonly tone: string; readonly caseText: ReactNode; readonly verdict: ReactNode; readonly marker?: string}> = [
    {
      icon: <Handshake size={24} color={C.steel} strokeWidth={2.2} />,
      bigIcon: <Handshake size={96} color={C.rust} strokeWidth={1.6} />,
      tone: C.rust,
      marker: 'case-planned-lure',
      caseText: <span>甲乙<Soft color={C.rust}>商量好</Soft>：甲把丙骗到树林，乙举枪射击致死</span>,
      verdict: <span><Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>共同加害</Chip> → <Soft color={C.rust}>连带赔偿</Soft></span>,
    },
    {
      icon: <Megaphone size={24} color={C.steel} strokeWidth={2.2} />,
      bigIcon: <Megaphone size={96} color={C.teal} strokeWidth={1.6} />,
      tone: C.teal,
      marker: 'case-handed-gun',
      caseText: <span>甲把枪交给乙：「此仇不报，何以为人」，乙射击致死（<Under color={C.teal} delay={180}>教唆</Under>）</span>,
      verdict: <span><Chip tone={C.teal} toneBg={C.tealPale} ink={C.teal}>教唆、帮助</Chip> → 原则连带；乙为无/限制行为能力人则甲全赔，监护人过错范围内连带</span>,
    },
    {
      icon: <Link size={24} color={C.steel} strokeWidth={2.2} />,
      bigIcon: <Link size={96} color={C.slateSoft} strokeWidth={1.6} />,
      tone: C.slateSoft,
      marker: 'case-untraceable-bullet',
      caseText: <span>甲乙共同对丙射击，只有<Soft color={C.rust}>一颗子弹</Soft>致死，无法查明谁开枪</span>,
      verdict: <span><Chip tone={C.slateSoft} toneBg={C.steelDim} ink={C.slate}>共同危险</Chip> → <Soft color={C.rust}>连带赔偿</Soft></span>,
    },
    {
      icon: <Link size={24} color={C.steel} strokeWidth={2.2} />,
      bigIcon: <Link size={96} color={C.rust} strokeWidth={1.6} />,
      tone: C.rust,
      marker: 'case-strangers-vitals',
      caseText: <span>甲乙在山中<Soft color={C.rust}>互不知晓</Soft>，同时误判「猎物」开枪，均打中要害致死</span>,
      verdict: <span><Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>直接结合</Chip> → 任一枪即致命 → <Soft color={C.rust}>连带赔偿</Soft></span>,
    },
    {
      icon: <ArrowRightLeft size={24} color={C.steel} strokeWidth={2.2} />,
      bigIcon: <ArrowRightLeft size={96} color={C.teal} strokeWidth={1.6} />,
      tone: C.teal,
      marker: 'case-hunt-then-hospital',
      caseText: <span>甲打猎误伤丙，送乙医院急救，<Soft color={C.teal}>手术消毒不当</Soft>感染死亡</span>,
      verdict: <span><Chip tone={C.teal} toneBg={C.tealPale} ink={C.teal}>间接结合</Chip> → 按各自过错<Soft color={C.teal}>按份赔偿</Soft></span>,
    },
  ];
  return (
    <Shell code="03" kicker="五情形 · 判定树" title="五情形判定：从共同加害到间接结合">
      <div
        data-layout="five-case-fork-with-verdict-stops"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="a-planned-lure-and-shot-lands-on-joint-harm-with-joint-liability,a-handed-gun-with-incitement-lands-on-instigation-and-liability-rules,one-untraceable-bullet-lands-on-dangerous-acts-with-joint-liability,strangers-both-hitting-vitals-land-on-direct-combination-and-joint-liability-while-a-wound-then-infection-lands-on-indirect-combination-with-shares"
        data-focal-rule="five-hunting-range-facts-travel-the-fork-to-joint-harm-instigation-dangerous-acts-direct-combination-and-indirect-combination-verdicts"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        {rows.map((row, idx) => (
          <Enter key={idx} delay={idx * 55} from="left" marker={row.marker} style={{position: 'absolute', left: 0, top: idx * 128, width: 1776, height: 118}}>
            <Panel tone={row.tone} watermark={row.bigIcon} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '10px 18px'}}>
              <PanelTab tone={row.tone} icon={row.icon}>情形{idx + 1}</PanelTab>
              <span style={{flex: 1.6, fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>{row.caseText}</span>
              <LineH delay={idx * 55 + 40} tone={C.amber} thickness={4} span={16} style={{width: 42, height: 4, position: 'relative', flexShrink: 0}} />
              <span style={{flex: 1.25, fontSize: 22, fontWeight: 900, lineHeight: 1.4}}>{row.verdict}</span>
            </Panel>
          </Enter>
        ))}
      </div>
    </Shell>
  );
};


