import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, Check, ClipboardCheck, FileSignature, Gavel, Ruler, Scale, ShieldCheck, Stamp, X} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Sentencing Caliper Workshop — 认罪认罚量尺工坊
const C = {
  maple: '#E8D9BD',
  mapleDeep: '#D9C5A0',
  card: '#FAF3E3',
  cardAlt: '#F1E6CC',
  ink: '#33291A',
  inkSoft: '#6E5F45',
  line: '#B49B6E',
  brass: '#8C6B2F',
  brassSoft: '#F0E4C6',
  vermilion: '#B5432F',
  vermilionInk: '#7C2A1C',
  vermilionSoft: '#F5DFD7',
  indigo: '#33567E',
  indigoInk: '#213A58',
  indigoSoft: '#DEE8F2',
  jade: '#2F7A5D',
  jadeInk: '#1E503C',
  jadeSoft: '#DCEEE4',
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);

const enter = (frame: number, delay: number, dy = 26, dx = 0) => ({
  opacity: interpolate(frame, [delay, delay + 18], [0, 1], {...clamp, easing: ease}),
  translate: `${interpolate(frame, [delay, delay + 26], [dx, 0], {...clamp, easing: ease})}px ${interpolate(
    frame,
    [delay, delay + 26],
    [dy, 0],
    {...clamp, easing: ease},
  )}px`,
});

// ---------------------------------------------------------------
// Shared surface primitives
// ---------------------------------------------------------------

const WorkshopShell = ({
  accent,
  children,
  code,
  subtitle,
  title,
}: {
  readonly accent: string;
  readonly children: React.ReactNode;
  readonly code: string;
  readonly subtitle: string;
  readonly title: string;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      backgroundColor: C.maple,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(120,90,40,0.055) 0px, rgba(120,90,40,0.055) 2px, transparent 2px, transparent 92px),' +
        'repeating-linear-gradient(0deg, rgba(120,90,40,0.045) 0px, rgba(120,90,40,0.045) 1px, transparent 1px, transparent 26px),' +
        'radial-gradient(circle at 16% 8%, rgba(255,250,235,0.7), transparent 32%),' +
        'radial-gradient(circle at 88% 94%, rgba(110,80,30,0.16), transparent 38%)',
      color: C.ink,
      overflow: 'hidden',
    }}
  >
    <header
      style={{
        position: 'absolute',
        left: 60,
        right: 60,
        top: 34,
        height: 104,
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        borderBottom: `4px solid ${accent}`,
      }}
    >
      <div
        style={{
          width: 172,
          height: 74,
          border: `4px solid ${accent}`,
          backgroundColor: C.card,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: accent,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        量尺 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: C.inkSoft,
          fontFamily: 'var(--inkloom-animation-label)',
          textAlign: 'right',
          maxWidth: 520,
          lineHeight: 1.35,
        }}
      >
        {subtitle}
      </div>
    </header>
    <main style={{position: 'absolute', left: 60, right: 60, top: 158, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>
      {children}
    </main>
  </AbsoluteFill>
);

const Chip = ({
  color,
  label,
  solid = false,
  style,
}: {
  readonly color: string;
  readonly label: string;
  readonly solid?: boolean;
  readonly style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 12px',
      backgroundColor: solid ? color : `${color}22`,
      border: `2px solid ${color}`,
      borderRadius: 7,
      color: solid ? '#FFFFFF' : color,
      fontSize: 22,
      fontWeight: 900,
      fontFamily: 'var(--inkloom-animation-label)',
      letterSpacing: 1,
      whiteSpace: 'nowrap',
      lineHeight: 1.3,
      ...style,
    }}
  >
    {label}
  </span>
);

const SoftHighlight = ({
  children,
  color,
  style,
}: {
  readonly children: React.ReactNode;
  readonly color: string;
  readonly style?: React.CSSProperties;
}) => (
  <span
    style={{
      backgroundColor: `${color}26`,
      borderRadius: 6,
      padding: '2px 8px',
      boxShadow: `inset 0 -3px 0 ${color}59`,
      ...style,
    }}
  >
    {children}
  </span>
);

const ThinUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span style={{borderBottom: `2px solid ${color}`, paddingBottom: 2}}>{children}</span>
);

const ExternalNegation = ({
  children,
  color,
}: {
  readonly children: React.ReactNode;
  readonly color: string;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 9,
      color,
      borderLeft: `3px solid ${color}`,
      paddingLeft: 11,
    }}
  >
    <Ban size={22} strokeWidth={2.6} style={{flexShrink: 0, marginTop: 3}} />
    <span>{children}</span>
  </span>
);

const BenchCard = ({
  accent,
  children,
  delay,
  frame,
  height,
  icon: Icon,
  style,
  title,
  width,
  x,
  y,
}: {
  readonly accent: string;
  readonly children: React.ReactNode;
  readonly delay: number;
  readonly frame: number;
  readonly height?: number;
  readonly icon: typeof Ruler;
  readonly style?: React.CSSProperties;
  readonly title: string;
  readonly width?: number;
  readonly x: number;
  readonly y: number;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      backgroundColor: C.card,
      border: `3px solid ${accent}`,
      borderTop: `8px solid ${accent}`,
      borderRadius: 10,
      padding: '18px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      overflow: 'hidden',
      ...enter(frame, delay, 30),
      ...style,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <Icon size={34} strokeWidth={2.5} style={{color: accent, flexShrink: 0}} />
      <span style={{fontSize: 32, fontWeight: 950, color: accent, lineHeight: 1.2}}>{title}</span>
    </div>
    {children}
  </div>
);

const MarkRow = ({
  color,
  children,
  good = true,
  style,
}: {
  readonly color: string;
  readonly children: React.ReactNode;
  readonly good?: boolean;
  readonly style?: React.CSSProperties;
}) => (
  <div style={{display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 23, lineHeight: 1.42, color: C.ink, fontWeight: 700, ...style}}>
    <span
      style={{
        flexShrink: 0,
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: `2.5px solid ${color}`,
        color,
        display: 'grid',
        placeItems: 'center',
        marginTop: 2,
        backgroundColor: good ? 'transparent' : `${color}14`,
      }}
    >
      {good ? <Check size={18} strokeWidth={3.2} /> : <X size={18} strokeWidth={3.2} />}
    </span>
    <span>{children}</span>
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 全程适用的阶段卷尺
// ---------------------------------------------------------------

const StageStation = ({
  accent,
  delay,
  frame,
  label,
  x,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly frame: number;
  readonly label: string;
  readonly x: number;
}) => (
  <div style={{position: 'absolute', left: x, top: 60, ...enter(frame, delay, 0, -18)}}>
    <div
      style={{
        width: 190,
        height: 96,
        borderRadius: 10,
        backgroundColor: C.card,
        border: `3px solid ${accent}`,
        display: 'grid',
        placeItems: 'center',
        fontSize: 36,
        fontWeight: 950,
        color: accent,
        boxShadow: `0 4px 14px rgba(90,60,20,0.18)`,
      }}
    >
      {label}
    </div>
    <div style={{width: 6, height: 34, backgroundColor: accent, marginLeft: 92, opacity: interpolate(frame, [delay + 14, delay + 30], [0, 1], clamp)}} />
    <div style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: accent, marginLeft: 85, opacity: interpolate(frame, [delay + 18, delay + 34], [0, 1], clamp)}} />
  </div>
);

export const StageScopeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <WorkshopShell accent={C.brass} code="01" subtitle="考点7 认罪认罚从宽 · 适用阶段与范围" title="全程适用的卷尺">
      <div
        data-layout="stage-tape-with-scope-bay"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,external-negation,thin-underline"
        data-visual-grammar="tape-measures-investigation-prosecution-trial-as-one-continuous-scale,reversed-attitude-still-qualifies,withdrawn-guilt-exits-the-scope,no-case-type-limit-and-both-statutes-apply"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="侦查、起诉、审判全程均可认罪认罚" style={{position: 'absolute', inset: 0}}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 172,
              width: 1800,
              height: 14,
              backgroundColor: C.brassSoft,
              borderTop: `4px solid ${C.brass}`,
              borderBottom: `4px solid ${C.brass}`,
              opacity: interpolate(frame, [10, 40], [0, 1], clamp),
            }}
          />
          {[
            {label: '侦查', x: 160, accent: C.indigo, delay: 20},
            {label: '起诉', x: 800, accent: C.brass, delay: 44},
            {label: '审判', x: 1440, accent: C.jade, delay: 68},
          ].map((station) => (
            <StageStation key={station.label} accent={station.accent} delay={station.delay} frame={frame} label={station.label} x={station.x} />
          ))}
          <div style={{position: 'absolute', left: 0, top: 262, width: 1800, display: 'flex', justifyContent: 'center', ...enter(frame, 96, 0)}}>
            <Chip color={C.brass} label="全程适用 · 案件范围不限" solid />
          </div>

          <div
            data-final-knowledge="reversed-attitude-rule"
            style={{position: 'absolute', left: 0, top: 344, width: 880, ...enter(frame, 140, 28)}}
          >
            <BenchCard accent={C.jade} delay={140} frame={frame} height={210} icon={ShieldCheck} title="态度反转" x={0} y={0}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 24, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <MarkRow color={C.jade}>审前<ThinUnderline color={C.jade}>拒绝</ThinUnderline> → 审判阶段认罪：仍可适用</MarkRow>
                <MarkRow color={C.vermilion} good={false}>
                  审前认罪 → 审判阶段<ThinUnderline color={C.vermilion}>拒绝</ThinUnderline>：<ExternalNegation color={C.vermilionInk}>不再适用</ExternalNegation>
                </MarkRow>
              </div>
            </BenchCard>
          </div>

          <div
            data-final-knowledge="statute-scope-rule"
            style={{position: 'absolute', left: 920, top: 344, width: 880, height: 210, ...enter(frame, 180, 28)}}
          >
            <BenchCard accent={C.indigo} delay={180} frame={frame} height={210} icon={Scale} title="两个法域都算" x={0} y={0}>
              <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
                <Chip color={C.indigo} label="刑事诉讼法" />
                <Chip color={C.indigo} label="监察法" />
              </div>
              <div style={{fontSize: 23, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                监察委员会调查案件认罪认罚的，同样<SoftHighlight color={C.indigo}>可以从宽</SoftHighlight>
              </div>
            </BenchCard>
          </div>
        </div>
      </div>
    </WorkshopShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 认罪 · 认罚 · 从宽 三工作台
// ---------------------------------------------------------------

type BenchSpec = {
  readonly accent: string;
  readonly good: readonly string[];
  readonly bad: readonly string[];
  readonly icon: typeof Ruler;
  readonly title: string;
};

const BENCHES: readonly BenchSpec[] = [
  {
    accent: C.indigo,
    good: ['认事实，不必然认罪名', '对性质辩解但接受认定，不影响认罪', '可对认罪部分酌情从宽'],
    bad: ['一人数罪只供一罪：全案不作认罪'],
    icon: ClipboardCheck,
    title: '认罪',
  },
  {
    accent: C.brass,
    good: ['未退赃、未调解：仍可适用，从宽酌减', '不同意速裁程序：不影响认罚'],
    bad: ['串供、转移财产、能赔不赔：不算认罚', '表面认罪但拒不悔罪：不能适用'],
    icon: Gavel,
    title: '认罚',
  },
  {
    accent: C.jade,
    good: ['可以从宽（而非“应当”）', '尽量非羁押、非监禁'],
    bad: ['不因认罪认罚宣告无罪、不降证明标准', '与自首、坦白不重复评价'],
    icon: Scale,
    title: '从宽',
  },
];

export const TripleBenchScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <WorkshopShell accent={C.indigo} code="02" subtitle="考点7 认罪认罚从宽 · 认罪、认罚、从宽的边界" title="三张工作台">
      <div
        data-layout="triple-bench-row-with-note-band"
        data-visual-anchor="comparison-axis"
        data-text-treatments="soft-highlight,thin-underline,label-block"
        data-visual-grammar="each-bench-separates-qualifying-marks-from-disqualifying-marks,guilt-bench-tolerates-nature-defense-but-not-partial-confession,punishment-bench-tolerates-unrestored-gains-but-not-bad-faith,leniency-bench-rewards-without-lowering-proof"
        data-focal-channels="contrast,enclosure,icon,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="每台都分“仍成立”与“不成立”两栏" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="guilt-bench" style={{position: 'absolute', left: 0, top: 0, width: 580, height: 560, ...enter(frame, 30, 30)}}>
            <BenchCard accent={BENCHES[0].accent} delay={30} frame={frame} height={560} icon={BENCHES[0].icon} title={BENCHES[0].title} width={580} x={0} y={0}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {BENCHES[0].good.map((row) => (
                  <MarkRow key={row} color={C.jade}>
                    {row}
                  </MarkRow>
                ))}
              </div>
              <div style={{borderTop: `2px dashed ${C.line}`, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
                {BENCHES[0].bad.map((row) => (
                  <MarkRow key={row} color={C.vermilion} good={false}>
                    {row}
                  </MarkRow>
                ))}
              </div>
            </BenchCard>
          </div>

          <div data-final-knowledge="punishment-bench" style={{position: 'absolute', left: 600, top: 0, width: 580, height: 560, ...enter(frame, 90, 30)}}>
            <BenchCard accent={BENCHES[1].accent} delay={90} frame={frame} height={560} icon={BENCHES[1].icon} title={BENCHES[1].title} width={580} x={0} y={0}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {BENCHES[1].good.map((row) => (
                  <MarkRow key={row} color={C.jade}>
                    {row}
                  </MarkRow>
                ))}
              </div>
              <div style={{borderTop: `2px dashed ${C.line}`, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
                {BENCHES[1].bad.map((row) => (
                  <MarkRow key={row} color={C.vermilion} good={false}>
                    {row}
                  </MarkRow>
                ))}
              </div>
            </BenchCard>
          </div>

          <div data-final-knowledge="leniency-bench" style={{position: 'absolute', left: 1200, top: 0, width: 580, height: 560, ...enter(frame, 150, 30)}}>
            <BenchCard accent={BENCHES[2].accent} delay={150} frame={frame} height={560} icon={BENCHES[2].icon} title={BENCHES[2].title} width={580} x={0} y={0}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {BENCHES[2].good.map((row) => (
                  <MarkRow key={row} color={C.jade}>
                    {row}
                  </MarkRow>
                ))}
              </div>
              <div style={{borderTop: `2px dashed ${C.line}`, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
                {BENCHES[2].bad.map((row) => (
                  <MarkRow key={row} color={C.vermilion} good={false}>
                    {row}
                  </MarkRow>
                ))}
              </div>
            </BenchCard>
          </div>

          <div
            data-final-knowledge="victim-investigation-band"
            style={{
              position: 'absolute',
              left: 0,
              top: 592,
              width: 1800,
              height: 118,
              backgroundColor: C.cardAlt,
              border: `3px dashed ${C.indigo}`,
              borderRadius: 10,
              padding: '16px 24px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              ...enter(frame, 240, 24),
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0}}>
              <Stamp size={30} strokeWidth={2.5} style={{color: C.indigoInk}} />
              <span style={{fontSize: 26, fontWeight: 950, color: C.indigoInk}}>两条配套规则</span>
            </div>
            <div style={{fontSize: 23, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
              ① 被害方<SoftHighlight color={C.vermilion}>不同意从宽</SoftHighlight>：听取意见，但<ThinUnderline color={C.indigoInk}>不影响制度适用</ThinUnderline>
            </div>
            <div style={{fontSize: 23, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
              ② 社会调查评估：判处<SoftHighlight color={C.jade}>管制、缓刑</SoftHighlight>的重要参考，未经调查符合条件也可直接判处
            </div>
          </div>
        </div>
      </div>
    </WorkshopShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 具结书签署台
// ---------------------------------------------------------------

const EXEMPTIONS = ['盲、聋、哑人', '尚未完全丧失辨认能力的精神病人', '未成年人的法定代理人对认罪认罚有异议'];

export const DeedSigningScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <WorkshopShell accent={C.vermilion} code="03" subtitle="考点7 认罪认罚从宽 · 认罪认罚具结书" title="具结书签署台">
      <div
        data-layout="signing-desk-fork-into-exemption-bay"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,external-negation"
        data-visual-grammar="signed-deed-requires-voluntariness-consent-and-counsel-presence,three-exempt-profiles-bypass-the-deed,recantation-voids-the-deed,absence-of-deed-does-not-block-the-system"
        data-focal-channels="enclosure,contrast,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="只在审查起诉阶段签署；盲聋哑、精神病、大人不干不具结" style={{position: 'absolute', inset: 0}}>
          <div
            data-stateful-source="plea-deed-sheet"
            data-final-knowledge="signing-conditions"
            style={{
              position: 'absolute',
              left: 0,
              top: 60,
              width: 700,
              height: 420,
              ...enter(frame, 0, 30),
            }}
          >
            <BenchCard accent={C.jade} delay={0} frame={frame} height={420} icon={FileSignature} title="签署条件" width={700} x={0} y={0}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 24, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <MarkRow color={C.jade}>自愿认罪认罚，同意<ThinUnderline color={C.jade}>量刑建议</ThinUnderline>和程序适用</MarkRow>
                <MarkRow color={C.jade}>在<SoftHighlight color={C.indigo}>辩护人或值班律师</SoftHighlight>在场时签署</MarkRow>
              </div>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}>
                <Chip color={C.vermilion} label="仅审查起诉阶段签署" solid />
              </div>
            </BenchCard>
          </div>

          <div style={{position: 'absolute', left: 716, top: 240, width: 130, height: 5, backgroundColor: C.brass, opacity: interpolate(frame, [70, 96], [0, 1], clamp)}} />
          <FileSignature size={30} strokeWidth={2.4} style={{position: 'absolute', left: 764, top: 196, color: C.brass, opacity: interpolate(frame, [76, 100], [0, 1], clamp)}} />

          <div
            data-final-knowledge="exemption-bay"
            style={{position: 'absolute', left: 860, top: 20, width: 940, height: 460, ...enter(frame, 110, 30)}}
          >
            <BenchCard accent={C.vermilion} delay={110} frame={frame} height={460} icon={Ban} title="无需签署具结书" width={940} x={0} y={0}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                {EXEMPTIONS.map((item, index) => (
                  <div
                    key={item}
                    style={{
                      backgroundColor: C.vermilionSoft,
                      border: `2.5px solid ${C.vermilion}`,
                      borderRadius: 9,
                      padding: '12px 18px',
                      fontSize: 25,
                      fontWeight: 900,
                      color: C.vermilionInk,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      opacity: interpolate(frame, [140 + index * 22, 158 + index * 22], [0, 1], clamp),
                    }}
                  >
                    <span style={{fontFamily: 'var(--inkloom-animation-mono)', fontSize: 20, color: C.vermilion}}>{`0${index + 1}`}</span>
                    {item}
                  </div>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: C.brassSoft,
                  border: `2.5px dashed ${C.brass}`,
                  borderRadius: 9,
                  padding: '12px 18px',
                  fontSize: 24,
                  fontWeight: 900,
                  color: C.brass,
                  textAlign: 'center',
                  letterSpacing: 2,
                  opacity: interpolate(frame, [220, 246], [0, 1], clamp),
                }}
              >
                口诀：盲聋哑 · 精神病 · 大人不干不具结
              </div>
            </BenchCard>
          </div>

          <div
            data-final-knowledge="recant-void-rule"
            style={{
              position: 'absolute',
              left: 0,
              top: 520,
              width: 1800,
              height: 190,
              backgroundColor: C.card,
              border: `3px solid ${C.indigo}`,
              borderRadius: 10,
              padding: '20px 26px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              gap: 26,
              ...enter(frame, 270, 26),
            }}
          >
            <div data-stateful-terminal="plea-deed-sheet" style={{flexShrink: 0}}>
              <div
                style={{
                  width: 150,
                  height: 106,
                  backgroundColor: C.indigoSoft,
                  border: `3px solid ${C.indigo}`,
                  borderRadius: 8,
                  rotate: `${interpolate(frame, [300, 330], [-7, -3], clamp)}deg`,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 22,
                  fontWeight: 950,
                  color: C.indigoInk,
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                具结书
                <br />
                归档
              </div>
            </div>
            <div style={{fontSize: 25, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
              提起公诉前<SoftHighlight color={C.vermilion}>反悔</SoftHighlight>的，具结书<ThinUnderline color={C.vermilion}>失效</ThinUnderline>；
              <ExternalNegation color={C.indigoInk}>未签署具结书，不影响认罪认罚从宽制度的适用</ExternalNegation>
            </div>
          </div>
        </div>
      </div>
    </WorkshopShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const PleaLeniencyCaliper: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.maple, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['stage-scope-tape'].start} duration={SCENES['stage-scope-tape'].duration}>
      <StageScopeScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['triple-bench-boundaries'].start} duration={SCENES['triple-bench-boundaries'].duration}>
      <TripleBenchScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['deed-signing-desk'].start} duration={SCENES['deed-signing-desk'].duration}>
      <DeedSigningScene />
    </TimelineSequence>
  </AbsoluteFill>
);
