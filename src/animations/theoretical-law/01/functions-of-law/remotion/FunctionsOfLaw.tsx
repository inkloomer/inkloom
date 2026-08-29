import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowRight,
  Compass,
  Crown,
  FileText,
  Gavel,
  HeartHandshake,
  Landmark,
  Megaphone,
  Scale,
  Search,
  Telescope,
  User,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  night: '#202B3A',
  nightDeep: '#17202C',
  panel: '#2B3A4C',
  panelEdge: '#7C8FA6',
  chart: '#E9E4D6',
  chartDim: '#B9BFC4',
  beam: '#E8B84B',
  teal: '#3E8E7E',
  coral: '#C4534A',
  brass: '#9C8A55',
  mist: '#57697D',
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

const BeaconTab = ({children, tone = C.beam, text = C.nightDeep}: {readonly children: ReactNode; readonly tone?: string; readonly text?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 15px', backgroundColor: tone, color: text, fontSize: 22, fontWeight: 900, letterSpacing: 2, border: `2px solid ${C.nightDeep}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}33`, padding: '2px 9px'}}>{children}</span>
);

const SignalChip = ({accent = C.teal, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 13px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}1f`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.nightDeep : C.chart,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.coral, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
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

const BeamUnderline = ({children, delay = 0}: {readonly children: ReactNode; readonly delay?: number}) => {
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
          height: 5,
          backgroundColor: C.beam,
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
      backgroundColor: C.night,
      color: C.chart,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1.5px 1.5px at 8% 12%, ${C.chart}44 50%, transparent 51%), radial-gradient(1.5px 1.5px at 22% 6%, ${C.chart}33 50%, transparent 51%), radial-gradient(2px 2px at 78% 9%, ${C.chart}3d 50%, transparent 51%), radial-gradient(1.5px 1.5px at 92% 16%, ${C.chart}33 50%, transparent 51%), linear-gradient(0deg, ${C.nightDeep} 0 120px, transparent 120px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 18px', backgroundColor: C.beam, border: `3px solid ${C.nightDeep}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.nightDeep, letterSpacing: 2}}>考点 04 · {code}</span>
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
        borderBottom: `2px solid ${C.brass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.chart}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.beam, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const TwoLayerStructureScene = () => {
  /* data-final-knowledge="two-layer-heading" data-final-knowledge="normative-panel" data-final-knowledge="social-panel" data-final-knowledge="premise-note" data-final-knowledge="purpose-note" data-final-knowledge="order-relation-chip" */
  return (
    <Shell code="01" kicker="总览" title="法律的作用＝法律的影响">
      <div
        data-layout="twin-scope-panels-with-order-relation"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,soft-highlight,chip,thin-underline"
        data-visual-grammar="scope-split,premise-purpose-order"
        data-focal-rule="normative-function-precedes-social-purpose"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="two-layer-heading" style={{position: 'absolute', left: 440, top: 10, width: 900}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '14px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 35, fontWeight: 950, color: C.chart}}>
              影响分两层面：<BeamUnderline delay={30}>规范作用</BeamUnderline> 与 <BeamUnderline delay={42}>社会作用</BeamUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="left" marker="normative-panel" style={{position: 'absolute', left: 80, top: 150, width: 780, height: 330}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.beam}`, height: '100%', padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <User size={48} color={C.beam} strokeWidth={2.3} />
              <span style={{fontSize: 34, fontWeight: 950, color: C.chart}}>规范作用</span>
              <span style={{marginLeft: 'auto'}}>
                <BeaconTab>前提</BeaconTab>
              </span>
            </div>
            <div style={{fontSize: 25, fontWeight: 870, color: C.chart}}>对具体行为人的影响</div>
            <div style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 9}}>
              <SignalChip>指引</SignalChip>
              <SignalChip>评价</SignalChip>
              <SignalChip>教育</SignalChip>
              <SignalChip>预测</SignalChip>
              <SignalChip accent={C.coral} solid>
                强制
              </SignalChip>
            </div>
          </div>
        </Enter>
        <Enter delay={56} from="right" marker="social-panel" style={{position: 'absolute', left: 920, top: 150, width: 780, height: 330}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.teal}`, height: '100%', padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Users size={48} color={C.teal} strokeWidth={2.3} />
              <span style={{fontSize: 34, fontWeight: 950, color: C.chart}}>社会作用</span>
              <span style={{marginLeft: 'auto'}}>
                <BeaconTab tone={C.teal}>目的</BeaconTab>
              </span>
            </div>
            <div style={{fontSize: 25, fontWeight: 870, color: C.chart}}>对整个社会的影响</div>
            <div style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 9}}>
              <SignalChip accent={C.teal} solid>
                维护阶级统治
              </SignalChip>
              <SignalChip accent={C.teal} solid>
                执行社会公共事务
              </SignalChip>
            </div>
          </div>
        </Enter>
        <Enter delay={110} marker="premise-note" style={{position: 'absolute', left: 240, top: 560, width: 560}}>
          <div style={{border: `3px solid ${C.beam}`, backgroundColor: '#E8B84B14', padding: '14px 20px', textAlign: 'center'}}>
            <span style={{fontSize: 26, fontWeight: 930, color: C.chart}}>规范作用是<Soft color={C.beam}>前提</Soft></span>
          </div>
        </Enter>
        <Enter delay={126} style={{position: 'absolute', left: 820, top: 566}}>
          <ArrowRight size={46} color={C.brass} strokeWidth={3} data-final-knowledge="order-relation-chip" />
        </Enter>
        <Enter delay={142} marker="purpose-note" style={{position: 'absolute', left: 980, top: 560, width: 560}}>
          <div style={{border: `3px solid ${C.teal}`, backgroundColor: '#3E8E7E14', padding: '14px 20px', textAlign: 'center'}}>
            <span style={{fontSize: 26, fontWeight: 930, color: C.chart}}>社会作用是<Soft color={C.teal}>目的</Soft></span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const BeamLane = ({
  accent,
  delay,
  icon,
  marker,
  name,
  gloss,
  who,
  when,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly name: string;
  readonly gloss: ReactNode;
  readonly who: string;
  readonly when: string;
}) => (
  <Enter delay={delay} from="left" marker={marker} style={{marginTop: 14}}>
    <div style={{backgroundColor: C.panel, border: `2px solid ${C.panelEdge}`, borderLeft: `12px solid ${accent}`, padding: '13px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
      {icon}
      <span style={{fontSize: 29, fontWeight: 950, color: C.chart, width: 130}}>{name}</span>
      <span style={{fontSize: 23, fontWeight: 850, color: C.chartDim, flex: 1}}>{gloss}</span>
      <SignalChip accent={C.beam} solid>
        {who}
      </SignalChip>
      <SignalChip accent={C.teal} solid>
        {when}
      </SignalChip>
    </div>
  </Enter>
);

export const FiveGuidingFunctionsScene = () => {
  /* data-final-knowledge="functions-heading" data-final-knowledge="guidance-lane" data-final-knowledge="evaluation-lane" data-final-knowledge="education-lane" data-final-knowledge="prediction-lane" data-final-knowledge="coercion-lane" data-final-knowledge="who-when-mnemonic" */
  return (
    <Shell code="02" kicker="规范作用 · 五束光" title="五作用的判断标志">
      <div
        data-layout="five-beam-function-lanes"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="who-when-matrix,beam-lane-series,mnemonic-strip"
        data-focal-rule="each-function-is-keyed-by-its-target-and-timing"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="functions-heading" style={{position: 'absolute', left: 470, top: 0, width: 840}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.chart}}>
              看<BeamUnderline delay={26}>对谁</BeamUnderline>、看<BeamUnderline delay={36}>何时</BeamUnderline>，一眼定作用
            </span>
          </div>
        </Enter>
        <div style={{marginTop: 84}}>
          <BeamLane
            accent={C.beam}
            delay={30}
            icon={<Compass size={40} color={C.beam} strokeWidth={2.3} />}
            gloss="确立行为标准，为行动提供方向"
            marker="guidance-lane"
            name="指引"
            when="未发生"
            who="本人"
          />
          <BeamLane
            accent={C.chart}
            delay={56}
            icon={<Search size={40} color={C.chart} strokeWidth={2.3} />}
            gloss="判断衡量他人行为合法与否"
            marker="evaluation-lane"
            name="评价"
            when="已发生"
            who="他人"
          />
          <BeamLane
            accent={C.teal}
            delay={82}
            icon={<Megaphone size={40} color={C.teal} strokeWidth={2.3} />}
            gloss={
              <>
                树立正反典型：示警 + 示范（执法司法守法实例）
              </>
            }
            marker="education-lane"
            name="教育"
            when="已发生"
            who="一般人"
          />
          <BeamLane
            accent={C.beam}
            delay={108}
            icon={<Telescope size={40} color={C.beam} strokeWidth={2.3} />}
            gloss="预先估计人们相互间如何行为（相互性）"
            marker="prediction-lane"
            name="预测"
            when="未发生"
            who="相互"
          />
          <BeamLane
            accent={C.coral}
            delay={134}
            icon={<Gavel size={40} color={C.coral} strokeWidth={2.3} />}
            gloss="制裁违法犯罪行为，强制人们遵守法律"
            marker="coercion-lane"
            name="强制"
            when="已发生"
            who="违法犯罪分子"
          />
        </div>
        <Enter delay={190} from="up" marker="who-when-mnemonic" style={{position: 'absolute', left: 60, top: 664, width: 1656}}>
          <div style={{backgroundColor: C.nightDeep, border: `3px solid ${C.beam}`, padding: '13px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <span style={{fontSize: 23, fontWeight: 920, color: C.chart}}>
              指引<SignalChip accent={C.beam} solid>本人</SignalChip>未发生，评价<SignalChip accent={C.beam} solid>他人</SignalChip>已发生；教育示范举例子，预测关系未发生，强制违法犯罪后
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const EvaluationVerdictFlowScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="evaluation-heading" data-final-knowledge="scale-standard-note" data-final-knowledge="lawful-unlawful-chip" data-final-knowledge="moral-scale-negation" data-final-knowledge="verdict-evaluation-note" data-final-knowledge="loss-coercion-chip" */
  const travel = interpolate(frame, [128, 178], [0, 1], CLAMP);
  return (
    <Shell code="03" kicker="评价作用 · 深挖" title="判的是合法违法，不是对错">
      <div
        data-layout="verdict-flow-with-attached-coercion"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,soft-highlight,chip,external-negation,stamp"
        data-visual-grammar="legal-not-moral-scale,verdict-implies-evaluation,loss-attaches-coercion"
        data-focal-rule="evaluation-measures-by-law-and-yields-lawful-or-unlawful"
        data-focal-channels="icon,motion,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="evaluation-heading" style={{position: 'absolute', left: 380, top: 0, width: 1020}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '14px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 35, fontWeight: 950, color: C.chart}}>
              以法律为尺度，结论是<BeamUnderline delay={30}>合法 / 违法</BeamUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} marker="scale-standard-note" style={{position: 'absolute', left: 80, top: 150, width: 760}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.beam}`, padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Scale size={52} color={C.beam} strokeWidth={2.3} />
            <div>
              <div style={{fontSize: 30, fontWeight: 950, color: C.chart}}>判断标准：法律</div>
              <div style={{marginTop: 8, fontSize: 23, fontWeight: 870, color: C.chartDim}}>衡量他人已发生的行为</div>
            </div>
          </div>
        </Enter>
        <Enter delay={60} style={{position: 'absolute', left: 900, top: 150, width: 836}}>
          <div data-final-knowledge="lawful-unlawful-chip" style={{display: 'flex', gap: 16}}>
            <div style={{flex: 1, backgroundColor: C.panel, border: `4px solid ${C.teal}`, padding: '16px 20px', textAlign: 'center'}}>
              <SignalChip accent={C.teal} solid>
                合法
              </SignalChip>
            </div>
            <div style={{flex: 1, backgroundColor: C.panel, border: `4px solid ${C.coral}`, padding: '16px 20px', textAlign: 'center'}}>
              <SignalChip accent={C.coral} solid>
                违法
              </SignalChip>
            </div>
          </div>
          <div data-final-knowledge="moral-scale-negation" style={{marginTop: 14, border: `3px solid ${C.coral}`, backgroundColor: '#C4534A14', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 26, fontWeight: 950, color: C.coral}}>✕</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.chart}}>
              而不是<Soft color={C.coral}>「对 / 错」</Soft>的道德评判
            </span>
          </div>
        </Enter>
        <svg style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 752}} viewBox="0 0 1776 752">
          <line x1="120" y1="620" x2={120 + 1180 * prog(frame, 96, 30)} y2="620" stroke={C.brass} strokeWidth={4} strokeDasharray="14 10" />
          <polygon points={`${120 + 1180 * prog(frame, 96, 30)},620 ${120 + 1180 * prog(frame, 96, 30) - 26},606 ${120 + 1180 * prog(frame, 96, 30) - 26},634`} fill={C.brass} />
        </svg>
        <Enter delay={96} marker="verdict-evaluation-note" style={{position: 'absolute', left: 80, top: 430, width: 700}}>
          <div style={{backgroundColor: C.panel, border: `4px solid ${C.panelEdge}`, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <FileText size={42} color={C.chart} strokeWidth={2.3} />
            <span style={{fontSize: 25, fontWeight: 910, color: C.chart}}>
              涉及<Soft color={C.beam}>司法判决</Soft>，必然体现评价作用
            </span>
          </div>
        </Enter>
        <div
          data-stateful-source="losing-verdict-into-coercion"
          style={{
            position: 'absolute',
            left: interpolate(frame, [124, 174], [320, 1300], CLAMP),
            top: interpolate(frame, [124, 174], [536, 560], CLAMP),
            opacity: prog(frame, 120, 12) * (1 - prog(frame, 172, 14)),
          }}
        >
          <span style={{fontSize: 24, fontWeight: 950, color: C.nightDeep, backgroundColor: C.beam, border: `2px solid ${C.nightDeep}`, padding: '6px 16px'}}>败诉判决</span>
        </div>
        <Enter delay={176} style={{position: 'absolute', left: 1340, top: 500, width: 396}}>
          <div data-stateful-terminal="losing-verdict-into-coercion" data-final-knowledge="loss-coercion-chip" style={{opacity: prog(frame, 174, 14)}}>
            <div style={{backgroundColor: C.panel, border: `5px solid ${C.coral}`, padding: '16px 20px', textAlign: 'center'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
                <Gavel size={30} color={C.coral} strokeWidth={2.4} />
                <span style={{fontSize: 24, fontWeight: 930, color: C.chart}}>败诉判决附带</span>
              </div>
              <div style={{marginTop: 8}}>
                <Stamp delay={186} size={28}>强制作用</Stamp>
              </div>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SocialRolePillarsScene = () => {
  /* data-final-knowledge="social-heading" data-final-knowledge="class-rule-pillar" data-final-knowledge="public-affairs-pillar" data-final-knowledge="normal-existence-chip" data-final-knowledge="foundation-note" */
  return (
    <Shell code="04" kicker="社会作用 · 两大支柱" title="统治与公共事务同基">
      <div
        data-layout="twin-pillars-on-common-base"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="class-rule-pillar,public-affairs-pillar,base-foundation-relation"
        data-focal-rule="normal-social-existence-is-the-base-of-class-rule"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="social-heading" style={{position: 'absolute', left: 470, top: 0, width: 840}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.chart}}>
              社会作用的两<BeamUnderline delay={26}>大支柱</BeamUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} from="left" marker="class-rule-pillar" style={{position: 'absolute', left: 130, top: 110, width: 700, height: 400}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.coral}`, height: '100%', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Crown size={46} color={C.coral} strokeWidth={2.3} />
              <span style={{fontSize: 32, fontWeight: 950, color: C.chart}}>维护阶级统治</span>
            </div>
            <div style={{marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 10}}>
              <SignalChip accent={C.coral}>维护政治特权</SignalChip>
              <SignalChip accent={C.coral}>镇压反抗</SignalChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 23, fontWeight: 880, color: C.chartDim}}>直接有利于统治阶级</div>
          </div>
        </Enter>
        <Enter delay={56} from="right" marker="public-affairs-pillar" style={{position: 'absolute', left: 950, top: 110, width: 700, height: 400}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.teal}`, height: '100%', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <HeartHandshake size={46} color={C.teal} strokeWidth={2.3} />
              <span style={{fontSize: 32, fontWeight: 950, color: C.chart}}>执行社会公共事务</span>
            </div>
            <div style={{marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 10}}>
              <SignalChip accent={C.teal}>维护治安</SignalChip>
              <SignalChip accent={C.teal}>保护环境</SignalChip>
              <SignalChip accent={C.teal}>发展科技文化</SignalChip>
              <SignalChip accent={C.teal}>繁荣市场经济</SignalChip>
            </div>
            <div style={{marginTop: 'auto'}}>
              <span data-final-knowledge="normal-existence-chip">
                <Stamp color={C.teal} delay={110} size={26}>保证社会正常存在</Stamp>
              </span>
            </div>
          </div>
        </Enter>
        <Enter delay={150} from="up" marker="foundation-note" style={{position: 'absolute', left: 130, top: 560, width: 1520}}>
          <div style={{backgroundColor: C.nightDeep, border: `4px solid ${C.brass}`, padding: '18px 26px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
            <Landmark size={40} color={C.brass} strokeWidth={2.3} />
            <span style={{fontSize: 27, fontWeight: 930, color: C.chart}}>
              二者关系：社会的<Soft color={C.beam}>正常存在</Soft>是<Soft color={C.teal}>统治基础</Soft>——执行公共事务正是在夯实统治的地基
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const FunctionsOfLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-two-layer-structure" {...SCENES.twoLayerStructure}>
      <TwoLayerStructureScene />
    </TimelineSequence>
    <TimelineSequence name="02-five-guiding-functions" {...SCENES.fiveGuidingFunctions}>
      <FiveGuidingFunctionsScene />
    </TimelineSequence>
    <TimelineSequence name="03-evaluation-verdict-flow" {...SCENES.evaluationVerdictFlow}>
      <EvaluationVerdictFlowScene />
    </TimelineSequence>
    <TimelineSequence name="04-social-role-pillars" {...SCENES.socialRolePillars}>
      <SocialRolePillarsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
