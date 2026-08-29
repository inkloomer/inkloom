import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Ban, CheckCircle2, ClipboardCheck, Hourglass, RefreshCw, Repeat, Search, UserCheck} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Inspection Loop — 回旋检验环 · 补充侦查
const C = {
  lab: '#252B2E',
  labDeep: '#1C2124',
  bench: '#EFEBDE',
  benchAlt: '#E4DFCE',
  ink: '#272B2C',
  inkSoft: '#666D6E',
  loop: '#D07C2E',
  loopInk: '#834A15',
  loopSoft: '#F3E3D0',
  pass: '#3F7F5F',
  passInk: '#2A5641',
  passSoft: '#DFEDE3',
  fail: '#B2472F',
  failInk: '#742D1A',
  failSoft: '#F2DCD4',
  lab_blue: '#4E7C99',
  blueInk: '#31536A',
  blueSoft: '#DBE7EE',
};

const MAIN_WIDTH = 1800;

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

const LoopShell = ({
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
      backgroundColor: C.lab,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(208,124,46,0.045) 0 2px, transparent 2px 26px),' +
        'radial-gradient(circle at 16% 14%, rgba(208,124,46,0.14), transparent 30%),' +
        'radial-gradient(circle at 86% 86%, rgba(78,124,153,0.16), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.bench,
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
          backgroundColor: C.labDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.loop,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        环号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.bench}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(239,235,222,0.66)',
          fontFamily: 'var(--inkloom-animation-label)',
          textAlign: 'right',
          maxWidth: 560,
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
  onDark = false,
  style,
}: {
  readonly color: string;
  readonly label: string;
  readonly solid?: boolean;
  readonly onDark?: boolean;
  readonly style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 12px',
      backgroundColor: solid ? color : onDark ? 'rgba(0,0,0,0.26)' : `${color}24`,
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
      backgroundColor: `${color}30`,
      borderRadius: 6,
      padding: '2px 8px',
      boxShadow: `inset 0 -3px 0 ${color}66`,
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
  iconSize = 22,
}: {
  readonly children: React.ReactNode;
  readonly color: string;
  readonly iconSize?: number;
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
    <Ban size={iconSize} strokeWidth={2.6} style={{flexShrink: 0, marginTop: 3}} />
    <span>{children}</span>
  </span>
);

const BenchCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.bench,
      border: `3px solid ${C.loop}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(6,8,9,0.5), inset 0 0 0 2px rgba(208,124,46,0.22)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 三阶段回旋环
// ---------------------------------------------------------------

export const ThreeStageLoopScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <LoopShell accent={C.loop} code="12-1" subtitle="考点5 补充侦查 · 三个阶段的回旋检验环" title="三阶段回旋环">
      <div
        data-layout="stage-loop-with-return-lanes"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="investigation-flows-into-prosecution-then-trial,charged-facts-return-from-trial-to-prosecution,omitted-persons-or-crimes-return-from-trial-to-investigation,each-stage-knows-who-supplements"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="谁查谁补；退补或检补；指控事实检院补、漏人漏罪公安补" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="stage-flow-belt" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 60, width: MAIN_WIDTH, display: 'flex', alignItems: 'center', gap: 18}}>
              {[
                {label: '侦查 / 调查', note: '谁查谁补', accent: C.blueInk, delay: 0},
                {label: '审查起诉', note: '退补或检补', accent: C.loopInk, delay: 40},
                {label: '审判', note: '终站', accent: C.passInk, delay: 80},
              ].map((stage) => (
                <React.Fragment key={stage.label}>
                  <BenchCard style={{flex: 1, height: 150, padding: '18px 24px', borderColor: stage.accent, ...enter(frame, stage.delay, 24)}}>
                    <div style={{fontSize: 30, fontWeight: 950, color: stage.accent, lineHeight: 1.2}}>{stage.label}</div>
                    <div style={{fontSize: 21, color: C.inkSoft, marginTop: 8, fontWeight: 700}}>{stage.note}</div>
                  </BenchCard>
                  {stage.label !== '审判' && (
                    <ArrowRight size={34} strokeWidth={2.8} style={{color: C.loop, flexShrink: 0, opacity: interpolate(frame, [stage.delay + 24, stage.delay + 44], [0, 1], clamp)}} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div data-final-knowledge="charged-facts-return" style={{position: 'absolute', inset: 0}}>
            <BenchCard style={{position: 'absolute', left: 340, top: 262, width: 1120, height: 128, padding: '16px 24px', borderColor: C.pass, ...enter(frame, 140, 22)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Repeat size={28} strokeWidth={2.5} style={{color: C.passInk, flexShrink: 0}} />
                <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  审判 → 审查起诉回环：指控犯罪事实需补侦，<ThinUnderline color={C.passInk}>只能检察院补充侦查</ThinUnderline>（建议延期审理）
                </div>
              </div>
            </BenchCard>
          </div>

          <div data-final-knowledge="omitted-return" style={{position: 'absolute', inset: 0}}>
            <BenchCard style={{position: 'absolute', left: 120, top: 412, width: 1120, height: 128, padding: '16px 24px', borderColor: C.fail, ...enter(frame, 190, 22)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Search size={28} strokeWidth={2.5} style={{color: C.failInk, flexShrink: 0}} />
                <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  审判 → 侦查回环：发现<ThinUnderline color={C.failInk}>漏人漏罪</ThinUnderline>，应当要求公安机关补充侦查、补充移送起诉
                </div>
              </div>
            </BenchCard>
          </div>

          <div
            style={{
              position: 'absolute',
              left: 620,
              top: 394,
              opacity: interpolate(frame, [230, 250], [0, 1], clamp),
            }}
          >
            <ArrowRight size={30} strokeWidth={2.8} style={{color: C.pass, rotate: '148deg'}} />
          </div>
          <div
            style={{
              position: 'absolute',
              left: 420,
              top: 540,
              opacity: interpolate(frame, [260, 280], [0, 1], clamp),
            }}
          >
            <ArrowRight size={30} strokeWidth={2.8} style={{color: C.fail, rotate: '-160deg'}} />
          </div>
        </div>
      </div>
    </LoopShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 次数与时限盘
// ---------------------------------------------------------------

export const CountTimeDialsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <LoopShell accent={C.lab_blue} code="12-2" subtitle="补侦的次数、时限与期限重算" title="次数与时限盘">
      <div
        data-layout="triple-stage-dials-with-self-supplement-note"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="investigation-stage-has-no-count-cap,prosecution-and-trial-caps-run-two-times-one-month-each,review-stage-clock-restarts-after-each-return,self-supplement-stays-inside-prosecution-deadline"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="起诉与审判各 2 次为限、每次 1 个月；期限重算" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="stage-dials" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
              {[
                {title: '侦查 / 调查阶段', count: '不限次', time: '不限时', extra: '期限不重算', accent: C.blueInk, delay: 0},
                {title: '审查起诉阶段', count: '2 次为限', time: '每次 1 个月', extra: '重新计算审查起诉期限', accent: C.loopInk, delay: 60},
                {title: '审判阶段', count: '2 次为限', time: '每次 1 个月', extra: '重新计算审判期限', accent: C.passInk, delay: 120},
              ].map((dial) => (
                <BenchCard key={dial.title} style={{flex: 1, height: 280, padding: '22px 26px', borderColor: dial.accent, ...enter(frame, dial.delay, 26)}}>
                  <div style={{fontSize: 27, fontWeight: 950, color: dial.accent, marginBottom: 16}}>{dial.title}</div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10}}><Hourglass size={24} strokeWidth={2.5} style={{color: dial.accent, flexShrink: 0}} />次数：<Chip color={dial.accent} label={dial.count} /></div>
                    <div>时间：<ThinUnderline color={dial.accent}>{dial.time}</ThinUnderline></div>
                    <div style={{fontSize: 21, color: C.inkSoft}}>{dial.extra}</div>
                  </div>
                </BenchCard>
              ))}
            </div>
          </div>

          <div data-final-knowledge="self-supplement-note" style={{position: 'absolute', inset: 0}}>
            <BenchCard style={{position: 'absolute', left: 0, top: 336, width: MAIN_WIDTH, padding: '18px 26px', borderColor: C.lab_blue, ...enter(frame, 200, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <UserCheck size={28} strokeWidth={2.5} style={{color: C.blueInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.blueInk}}>检院自行补侦</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  应当在审查起诉期限内侦查完毕：一般最长<SoftHighlight color={C.blueInk}>一个半月</SoftHighlight>、速裁案件最长<SoftHighlight color={C.loopInk}>15 天</SoftHighlight>；<ThinUnderline color={C.blueInk}>无需计算补侦次数</ThinUnderline>
                </div>
              </div>
            </BenchCard>
          </div>

          <div
            data-final-knowledge="pre-arrest-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 452,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 240, 16),
            }}
          >
            <ClipboardCheck size={26} strokeWidth={2.5} style={{color: C.pass, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,235,222,0.88)', fontWeight: 700}}>
              审查批捕阶段：<SoftHighlight color={C.passInk}>只有不批准逮捕</SoftHighlight>才涉及补侦，且次数无限制（批捕要件只要求「有证据证明有犯罪事实」）
            </span>
          </div>
        </div>
      </div>
    </LoopShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 退案不退人
// ---------------------------------------------------------------

export const CustodyStaysScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <LoopShell accent={C.pass} code="12-3" subtitle="监察机关移送案件的补调特殊规则" title="退案不退人">
      <div
        data-layout="dual-dossier-lanes-with-slogan-stamp"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="supervision-cases-return-files-only-for-further-investigation,procuratorate-keeps-custody-of-the-transferred-suspect,self-supplement-remains-available-when-necessary,examination-approval-needs-no-replacement-of-investigators"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="退案不退人：案卷退回监察机关，人由检察院继续掌握" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="file-return-lane" style={{position: 'absolute', inset: 0}}>
            <BenchCard style={{position: 'absolute', left: 0, top: 40, width: 870, height: 380, padding: '22px 26px', borderColor: C.pass, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Repeat size={30} strokeWidth={2.5} style={{color: C.passInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.passInk, lineHeight: 1.2}}>退回补充调查 · 只退货</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <div>监察机关调查终结移送起诉的案件，检院认为需要<ThinUnderline color={C.passInk}>补充核实</ThinUnderline>的，应当退回监察机关补充调查</div>
                <div style={{fontSize: 21, color: C.inkSoft}}>必要时，检察院也可以自行补充侦查</div>
              </div>
              <div style={{marginTop: 16}}>
                <Chip color={C.pass} label="案卷退回" solid />
              </div>
            </BenchCard>
          </div>

          <div data-final-knowledge="custody-keep-lane" style={{position: 'absolute', inset: 0}}>
            <BenchCard style={{position: 'absolute', left: 930, top: 40, width: 870, height: 380, padding: '22px 26px', borderColor: C.fail, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <UserCheck size={30} strokeWidth={2.5} style={{color: C.failInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.failInk, lineHeight: 1.2}}>嫌疑人 · 不退回</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <div>已由监察机关移送过来的犯罪嫌疑人，应由<ThinUnderline color={C.failInk}>检察院继续掌握</ThinUnderline></div>
                <ExternalNegation color={C.failInk}>不能再退回监察机关</ExternalNegation>
                <div style={{fontSize: 21, color: C.inkSoft}}>保障办案顺利与嫌疑人合法权益</div>
              </div>
            </BenchCard>
          </div>

          <div
            data-final-knowledge="custody-slogan-stamp"
            style={{
              position: 'absolute',
              left: 0,
              top: 466,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
              ...enter(frame, 160, 18),
            }}
          >
            <Chip color={C.pass} label="退案不退人" solid style={{fontSize: 28, padding: '8px 22px'}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,235,222,0.88)', fontWeight: 700}}>
              审判阶段要求公安补侦的，也<SoftHighlight color={C.loopInk}>没有更换侦查人员</SoftHighlight>的规定
            </span>
          </div>
        </div>
      </div>
    </LoopShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const SupplementInvestLoop: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.lab, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['three-stage-loop'].start} duration={SCENES['three-stage-loop'].duration}>
      <ThreeStageLoopScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['count-time-dials'].start} duration={SCENES['count-time-dials'].duration}>
      <CountTimeDialsScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['custody-stays-note'].start} duration={SCENES['custody-stays-note'].duration}>
      <CustodyStaysScene />
    </TimelineSequence>
  </AbsoluteFill>
);
