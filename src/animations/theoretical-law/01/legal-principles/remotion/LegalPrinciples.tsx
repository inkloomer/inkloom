import type {CSSProperties, ReactNode} from 'react';
import {
  DoorClosed,
  FileText,
  Gavel,
  Key,
  Landmark,
  Scale,
  ShieldAlert,
  ToggleLeft,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  board: '#2E4038',
  boardDeep: '#24332C',
  chalk: '#F2F0E6',
  chalkDim: '#C9CDBF',
  chalkYellow: '#E8D06F',
  chalkPink: '#E8A0A0',
  chalkBlue: '#A8C6E8',
  wood: '#8A6B4A',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
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

const ChalkTab = ({children, tone = C.chalkYellow, text = C.board}: {readonly children: ReactNode; readonly tone?: string; readonly text?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 15px', backgroundColor: tone, color: text, fontSize: 22, fontWeight: 900, letterSpacing: 2, border: `2px dashed ${C.chalk}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}30`, padding: '2px 9px'}}>{children}</span>
);

const ChalkChip = ({accent = C.chalkYellow, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 13px',
      border: `2px dashed ${accent}`,
      backgroundColor: solid ? accent : `${accent}1c`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.board : C.chalk,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.chalkPink, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        border: `5px solid ${color}`,
        color,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 3,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

const ChalkUnderline = ({children, color = C.chalkYellow, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -7,
          height: 4,
          borderTop: `3px solid ${color}`,
          borderBottom: `3px solid ${color}`,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.board,
      color: C.chalk,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(60px 24px at 20% 85%, ${C.chalk}08 50%, transparent 51%), radial-gradient(80px 20px at 70% 90%, ${C.chalk}0a 50%, transparent 51%)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, right: 30, bottom: 30, height: 26, backgroundColor: C.wood}} />
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 62, border: `10px solid ${C.wood}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 18px', backgroundColor: C.chalkYellow, border: `2px dashed ${C.chalk}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.board, letterSpacing: 2}}>考点 08 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `3px dashed ${C.chalkDim}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.chalk}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.chalkYellow, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const DimRow = ({
  delay,
  icon,
  marker,
  dimension,
  rule,
  principle,
}: {
  readonly delay: number;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly dimension: string;
  readonly rule: ReactNode;
  readonly principle: ReactNode;
}) => (
  <Enter delay={delay} from="left" marker={marker} style={{marginTop: 30}}>
    <div style={{border: `2px dashed ${C.chalkDim}`, padding: '24px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
      {icon}
      <span style={{fontSize: 27, fontWeight: 950, color: C.chalk, width: 160}}>{dimension}</span>
      <span style={{display: 'inline-flex', alignItems: 'center', gap: 12, flex: 1}}>
        <ChalkChip accent={C.chalkBlue} solid>
          规则
        </ChalkChip>
        <span style={{fontSize: 24, fontWeight: 870, color: C.chalk}}>{rule}</span>
      </span>
      <span style={{width: 2, height: 56, backgroundColor: C.chalkDim}} />
      <span style={{display: 'inline-flex', alignItems: 'center', gap: 12, flex: 1}}>
        <ChalkChip accent={C.chalkYellow} solid>
          原则
        </ChalkChip>
        <span style={{fontSize: 24, fontWeight: 870, color: C.chalk}}>{principle}</span>
      </span>
    </div>
  </Enter>
);

export const DimensionCompareScene = () => {
  /* data-final-knowledge="compare-heading" data-final-knowledge="content-row" data-final-knowledge="scope-row" data-final-knowledge="method-row" data-final-knowledge="compare-summary" */
  return (
    <Shell code="01" kicker="三维之别" title="规则与原则对照表">
      <div
        data-layout="three-dimension-chalk-table"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="content-dimension,scope-dimension,method-dimension"
        data-focal-rule="rules-are-specific-principles-are-broad-and-weighted"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="compare-heading" style={{position: 'absolute', left: 430, top: 0, width: 920}}>
          <div style={{border: `2px dashed ${C.chalkDim}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.chalk}}>
              三个维度，两种笔迹：<ChalkUnderline delay={26}>蓝记规则，黄记原则</ChalkUnderline>
            </span>
          </div>
        </Enter>
        <div style={{marginTop: 92}}>
        <DimRow
          delay={30}
          icon={<FileText size={38} color={C.chalkBlue} strokeWidth={2.3} />}
          marker="content-row"
          dimension="内容上"
          rule={<>明确具体，防「自由裁量」</>}
          principle={<>兼顾共性 + <Soft color={C.chalkYellow}>个别性</Soft></>}
        />
        <DimRow
          delay={62}
          icon={<Landmark size={38} color={C.chalkYellow} strokeWidth={2.3} />}
          marker="scope-row"
          dimension="适用范围"
          rule={<>仅覆盖某一类型行为</>}
          principle={<>覆盖面广 · <Soft color={C.chalkYellow}>宏观指导性</Soft></>}
        />
        <DimRow
          delay={94}
          icon={<Gavel size={38} color={C.chalkPink} strokeWidth={2.3} />}
          marker="method-row"
          dimension="适用方法"
          rule={<><Soft color={C.chalkBlue}>全有或全无</Soft></>}
          principle={<>权衡<Soft color={C.chalkYellow}>强度或分量</Soft></>}
        />
        </div>
        <Enter delay={150} from="up" marker="compare-summary" style={{position: 'absolute', left: 150, top: 640, width: 1476}}>
          <div style={{border: `3px dashed ${C.chalkDim}`, padding: '13px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.chalk}}>
              规则防裁量、原则管覆盖、方法见真章——先背颜色，再背内容
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const AllOrWeighingScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="method-heading" data-final-knowledge="all-or-nothing-card" data-final-knowledge="weighing-card" data-final-knowledge="lighter-principles-note" data-final-knowledge="rivalry-note" */
  const flip = interpolate(frame, [64, 96], [-14, 0], CLAMP);
  const tilt = interpolate(frame, [140, 190], [-10, 7], CLAMP);
  return (
    <Shell code="02" kicker="方法聚焦" title="闸刀与天平">
      <div
        data-layout="switch-versus-balance-stage"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp,external-negation"
        data-visual-grammar="all-or-nothing-switch,strength-weighing,rivalry-contrast"
        data-focal-rule="rules-switch-principles-weigh"
        data-focal-channels="icon,motion,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="method-heading" style={{position: 'absolute', left: 470, top: 0, width: 840}}>
          <div style={{border: `2px dashed ${C.chalkDim}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.chalk}}>
              规则按<ChalkUnderline color={C.chalkBlue} delay={26}>开关</ChalkUnderline>，原则按<ChalkUnderline delay={38}>天平</ChalkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} from="left" marker="all-or-nothing-card" style={{position: 'absolute', left: 80, top: 130, width: 800, height: 380}}>
          <div style={{border: `4px dashed ${C.chalkBlue}`, height: '100%', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <ToggleLeft size={46} color={C.chalkBlue} strokeWidth={2.3} style={{rotate: `${flip}deg`}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.chalk}}>规则 · 全有或全无</span>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.chalk, lineHeight: 1.6}}>
              被选择的规则<ChalkChip accent={C.chalkBlue} solid>有效</ChalkChip>，其余一律
              <span style={{color: C.chalkPink, fontWeight: 950, margin: '0 4px'}}>无效</span>，不再适用于待决案件
            </div>
            <div style={{marginTop: 'auto'}}>
              <span data-final-knowledge="rivalry-note">
                <ChalkChip accent={C.chalkPink}>规则间竞争＝互斥关系</ChalkChip>
              </span>
            </div>
          </div>
        </Enter>
        <Enter delay={58} from="right" marker="weighing-card" style={{position: 'absolute', left: 920, top: 130, width: 816, height: 380}}>
          <div style={{border: `4px dashed ${C.chalkYellow}`, height: '100%', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Scale size={46} color={C.chalkYellow} strokeWidth={2.3} style={{rotate: `${tilt}deg`}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.chalk}}>原则 · 权衡强度分量</span>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.chalk, lineHeight: 1.6}}>
              分量最重者优先适用于待决案件；<Soft color={C.chalkYellow}>分量较轻者</Soft>仍可影响裁判
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <Users size={34} color={C.chalkYellow} strokeWidth={2.3} />
              <span style={{fontSize: 23, fontWeight: 900, color: C.chalk}}>
                原则间竞争＝<ChalkChip accent={C.chalkYellow} solid>兼顾关系</ChalkChip>
              </span>
            </div>
          </div>
        </Enter>
        <Enter delay={130} style={{position: 'absolute', left: 300, top: 546, width: 1180}}>
          <div data-final-knowledge="lighter-principles-note" style={{border: `3px dashed ${C.chalkDim}`, padding: '12px 22px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 910, color: C.chalk}}>
              一句话：规则之间你死我活，原则之间可以共存
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ThresholdConditionsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="threshold-heading" data-final-knowledge="exhaustion-gate-note" data-final-knowledge="gap-filling-chip" data-final-knowledge="double-key-note" data-final-knowledge="no-shortcut-warning" */
  const keyIn = interpolate(frame, [120, 168], [0, 1], CLAMP);
  return (
    <Shell code="03" kicker="适用门槛" title="两把钥匙，一道门">
      <div
        data-layout="guarded-gate-with-double-key"
        data-visual-anchor="flow-target"
        data-text-treatments="label-block,chip,soft-highlight,external-negation,stamp"
        data-visual-grammar="exhaustion-gate,double-key-replace,no-shortcut-warning"
        data-focal-rule="principles-enter-only-through-guarded-gates"
        data-focal-channels="icon,motion,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="threshold-heading" style={{position: 'absolute', left: 430, top: 0, width: 920}}>
          <div style={{border: `2px dashed ${C.chalkDim}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.chalk}}>
              穷尽规则，方得适用<ChalkUnderline delay={26}>法律原则</ChalkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} from="left" marker="exhaustion-gate-note" style={{position: 'absolute', left: 90, top: 130, width: 760}}>
          <div style={{border: `4px dashed ${C.chalkBlue}`, padding: '20px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <DoorClosed size={44} color={C.chalkBlue} strokeWidth={2.3} />
              <span style={{fontSize: 28, fontWeight: 950, color: C.chalk}}>第一道门 · 弥补漏洞</span>
            </div>
            <div style={{marginTop: 12, fontSize: 23, fontWeight: 880, color: C.chalk, lineHeight: 1.6}}>
              法律规则<Soft color={C.chalkBlue}>穷尽</Soft>仍不能处理时，才轮到原则出场
            </div>
            <div data-final-knowledge="gap-filling-chip" style={{marginTop: 14}}>
              <ChalkChip accent={C.chalkBlue} solid>
                规则不在 → 原则补位
              </ChalkChip>
            </div>
          </div>
        </Enter>
        <Enter delay={62} from="right" marker="double-key-note" style={{position: 'absolute', left: 910, top: 130, width: 826}}>
          <div style={{border: `4px dashed ${C.chalkYellow}`, padding: '20px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Key size={44} color={C.chalkYellow} strokeWidth={2.3} style={{translate: `${interpolate(frame, [120, 168], [-60, 0], CLAMP)}px 0px`, opacity: keyIn}} />
              <span style={{fontSize: 28, fontWeight: 950, color: C.chalk}}>第二道门 · 取代规则</span>
            </div>
            <div style={{marginTop: 12, fontSize: 23, fontWeight: 880, color: C.chalk, lineHeight: 1.6}}>
              必须<Soft color={C.chalkYellow}>实现个案正义</Soft>＋具备<Soft color={C.chalkYellow}>更强理由</Soft>，双钥齐转
            </div>
            <div style={{marginTop: 14, fontSize: 22, fontWeight: 900, color: C.chalkDim}}>缺一把，门都不开</div>
          </div>
        </Enter>
        <Enter delay={130} style={{position: 'absolute', left: 240, top: 520, width: 1300}}>
          <div data-final-knowledge="no-shortcut-warning" style={{border: `4px dashed ${C.chalkPink}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
            <ShieldAlert size={38} color={C.chalkPink} strokeWidth={2.4} />
            <span style={{fontSize: 25, fontWeight: 930, color: C.chalk}}>
              没有更强理由，<span style={{color: C.chalkPink, fontWeight: 950}}>不得径行适用</span>法律原则
            </span>
            <span style={{marginLeft: 6}}>
              <Stamp delay={150} size={26}>考试红线</Stamp>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalPrinciples = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-dimension-compare" {...SCENES.dimensionCompare}>
      <DimensionCompareScene />
    </TimelineSequence>
    <TimelineSequence name="02-all-or-weighing" {...SCENES.allOrWeighing}>
      <AllOrWeighingScene />
    </TimelineSequence>
    <TimelineSequence name="03-threshold-conditions" {...SCENES.thresholdConditions}>
      <ThresholdConditionsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
