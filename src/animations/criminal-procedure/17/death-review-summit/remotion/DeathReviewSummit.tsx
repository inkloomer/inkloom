import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Ban, CheckCircle2, Flag, RefreshCw, ShieldCheck, Snowflake, Timer, Undo2} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Summit Camp — 峰顶复审营 · 死刑复核
const C = {
  alpine: '#232B36',
  alpineDeep: '#1A212B',
  snow: '#F0F2F5',
  snowAlt: '#E2E6EC',
  ink: '#262C33',
  inkSoft: '#666F7A',
  rope: '#C0492F',
  ropeInk: '#7C2D1B',
  ropeSoft: '#F2DBD3',
  flag: '#D9A13B',
  flagInk: '#83631B',
  flagSoft: '#F2E6C8',
  pine: '#3F7F5F',
  pineInk: '#2A5641',
  pineSoft: '#DFEDE3',
  glacier: '#5E8FA3',
  glacierInk: '#3A6172',
  glacierSoft: '#DCE9EE',
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

const SummitShell = ({
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
      backgroundColor: C.alpine,
      backgroundImage:
        'repeating-linear-gradient(160deg, rgba(240,242,245,0.03) 0 2px, transparent 2px 30px),' +
        'radial-gradient(circle at 18% 12%, rgba(94,143,163,0.16), transparent 30%),' +
        'radial-gradient(circle at 84% 86%, rgba(192,73,47,0.14), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.snow,
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
          backgroundColor: C.alpineDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.flag,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        营号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.snow}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(240,242,245,0.66)',
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

const TentCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.snow,
      border: `3px solid ${C.glacier}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(6,9,12,0.5), inset 0 0 0 2px rgba(94,143,163,0.22)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 处理要诀：三发回、两核准、一可改可回
// ---------------------------------------------------------------

export const DispositionCampScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SummitShell accent={C.glacier} code="17-1" subtitle="考点2 复核后的处理 · 处理要诀一览" title="处理要诀营地">
      <div
        data-layout="summit-disposition-banks-with-slogan"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="unclear-facts-new-facts-and-procedural-defects-send-it-back,direct-approval-and-corrected-approval-both-ratify,right-facts-wrong-death-allows-either-change-or-remand,partial-lighter-co-defendant-can-be-changed-alone"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="三发回、两核准、一可改可回" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="three-remand-bank" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 0, top: 24, width: 580, height: 340, padding: '20px 26px', borderColor: C.rope, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                <Undo2 size={28} strokeWidth={2.6} style={{color: C.ropeInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.ropeInk, lineHeight: 1.2}}>三个发回</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.rope} label="事实不清" /> → 发回</div>
                <div><Chip color={C.rope} label="新的事实" /> → 发回</div>
                <div><Chip color={C.rope} label="违反程序" /> → 发回</div>
              </div>
            </TentCard>
          </div>

          <div data-final-knowledge="two-approval-bank" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 610, top: 24, width: 580, height: 340, padding: '20px 26px', borderColor: C.pine, borderWidth: 4, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                <CheckCircle2 size={28} strokeWidth={2.6} style={{color: C.pineInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.pineInk, lineHeight: 1.2}}>两个核准</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.pine} label="直接核准" /> 全部正确</div>
                <div><Chip color={C.pine} label="纠正核准" /> 纠正瑕疵后<SoftHighlight color={C.pineInk}>裁定核准</SoftHighlight></div>
              </div>
            </TentCard>
          </div>

          <div data-final-knowledge="flexible-bank" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 1220, top: 24, width: 580, height: 340, padding: '20px 26px', borderColor: C.flag, borderWidth: 4, ...enter(frame, 140, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                <Flag size={28} strokeWidth={2.5} style={{color: C.flagInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.flagInk, lineHeight: 1.2}}>一个可改可回</span>
              </div>
              <div style={{fontSize: 23, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                事实对、<ThinUnderline color={C.flagInk}>不该死</ThinUnderline> → 可<SoftHighlight color={C.flagInk}>改判</SoftHighlight>、可<SoftHighlight color={C.ropeInk}>发回</SoftHighlight>（如共犯中一人情节较轻不需死刑，可改判其人、其余核准）
              </div>
            </TentCard>
          </div>

          <div
            data-final-knowledge="mnemonic-banner"
            style={{
              position: 'absolute',
              left: 0,
              top: 404,
              width: MAIN_WIDTH,
              ...enter(frame, 210, 22),
            }}
          >
            <TentCard style={{padding: '16px 26px', borderColor: C.flag}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.flagInk, lineHeight: 1.5, textAlign: 'center'}}>
                处理要诀：<Chip color={C.rope} label="三发回" solid /> <Chip color={C.pine} label="两核准" solid /> <Chip color={C.flag} label="一可改可回" solid />
              </div>
            </TentCard>
          </div>
          <Snowflake size={22} strokeWidth={2.3} style={{position: 'absolute', left: 880, top: 20, color: 'rgba(240,242,245,0.4)'}} />
        </div>
      </div>
    </SummitShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 发回路线与合议庭
// ---------------------------------------------------------------

export const RemandRoutesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SummitShell accent={C.rope} code="17-2" subtitle="发回二审还是一审 · 开庭要求与合议庭更换" title="发回的两条下山路">
      <div
        data-layout="dual-remand-routes-with-composition-note"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="supreme-court-may-remand-either-instance,first-instance-remand-must-open-trial,second-instance-remand-may-directly-change-sentence,remand-panels-are-re-composed-unless-new-facts-or-sentencing"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="最高法可发回二审或一审；另行组成合议庭为例外所限" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="first-instance-route" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 0, top: 24, width: 880, height: 360, padding: '22px 26px', borderColor: C.rope, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.ropeInk, marginBottom: 14}}>发回一审</div>
              <div style={{fontSize: 24, lineHeight: 1.6, color: C.ink, fontWeight: 700, marginBottom: 14}}>
                一审法院应当<SoftHighlight color={C.ropeInk}>开庭审理</SoftHighlight>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.inkSoft, fontWeight: 700}}>
                例：最高法认为「不该死」发回省高院重审 → 省高院另行组成合议庭开庭审理
              </div>
            </TentCard>
          </div>

          <div data-final-knowledge="second-instance-route" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 920, top: 24, width: 880, height: 360, padding: '22px 26px', borderColor: C.glacier, ...enter(frame, 70, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.glacierInk, marginBottom: 14}}>发回二审</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 24, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                <div>二审法院可<ThinUnderline color={C.glacierInk}>直接改判</ThinUnderline></div>
                <div>需开庭查清的，<SoftHighlight color={C.glacierInk}>应当开庭</SoftHighlight></div>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.inkSoft, fontWeight: 700, marginTop: 12}}>
                可发回二审或一审，并非只能发回二审
              </div>
            </TentCard>
          </div>

          <div
            data-final-knowledge="composition-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 424,
              width: MAIN_WIDTH,
              ...enter(frame, 160, 22),
            }}
          >
            <TentCard style={{padding: '16px 26px', borderColor: C.flag}}>
              <div style={{fontSize: 23, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                发回重审应<ThinUnderline color={C.flagInk}>另行组成合议庭</ThinUnderline>；但因<SoftHighlight color={C.ropeInk}>新的事实</SoftHighlight>或<SoftHighlight color={C.ropeInk}>量刑不当</SoftHighlight>发回的除外
              </div>
            </TentCard>
          </div>
          <ArrowRight size={22} strokeWidth={2.5} style={{position: 'absolute', left: 890, top: 190, color: 'rgba(240,242,245,0.35)', rotate: '90deg'}} />
        </div>
      </div>
    </SummitShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 特殊生效点
// ---------------------------------------------------------------

export const SpecialEffectScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SummitShell accent={C.pine} code="17-3" subtitle="附民上诉、共同犯罪与部分死刑的生效时点" title="特殊生效点">
      <div
        data-layout="effect-timeline-cards-with-pause-note"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="civil-appeal-alone-frees-criminal-part-after-deadline,joint-crime-appeal-sends-whole-case-to-second-instance,non-death-co-defendants-finalize-by-two-instances,second-review-supervision-corrects-fellow-judgments"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="共同犯罪部分上诉全案进二审，服判者不生效" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="civil-appeal-point" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 0, top: 24, width: 560, height: 250, padding: '18px 24px', borderColor: C.pine, ...enter(frame, 0, 24)}}>
              <div style={{fontSize: 25, fontWeight: 950, color: C.pineInk, marginBottom: 10}}>仅附民上诉</div>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                期满后<ThinUnderline color={C.pineInk}>刑事部分生效</ThinUnderline>
              </div>
            </TentCard>
          </div>

          <div data-final-knowledge="joint-crime-point" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 620, top: 24, width: 560, height: 250, padding: '18px 24px', borderColor: C.rope, ...enter(frame, 60, 24)}}>
              <div style={{fontSize: 25, fontWeight: 950, color: C.ropeInk, marginBottom: 10}}>共同犯罪部分上诉</div>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <Chip color={C.rope} label="全案进二审" /> 服判者<ThinUnderline color={C.ropeInk}>不生效</ThinUnderline>
              </div>
            </TentCard>
          </div>

          <div data-final-knowledge="partial-death-point" style={{position: 'absolute', inset: 0}}>
            <TentCard style={{position: 'absolute', left: 1240, top: 24, width: 560, height: 250, padding: '18px 24px', borderColor: C.flag, ...enter(frame, 120, 24)}}>
              <div style={{fontSize: 25, fontWeight: 950, color: C.flagInk, marginBottom: 10}}>部分死刑</div>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                未判死者 → <ThinUnderline color={C.flagInk}>两审终审生效</ThinUnderline>；判死者 → 仍需<SoftHighlight color={C.flagInk}>复核生效</SoftHighlight>
              </div>
            </TentCard>
          </div>

          <div
            data-final-knowledge="pause-and-supervision-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 314,
              width: MAIN_WIDTH,
              ...enter(frame, 190, 22),
            }}
          >
            <TentCard style={{padding: '18px 26px', borderColor: C.glacier}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <Timer size={26} strokeWidth={2.5} style={{color: C.glacierInk, flexShrink: 0}} />
                  <span>暂缓交付：同案未判死且参与死刑之罪者 → 复核<ThinUnderline color={C.glacierInk}>讯问后</ThinUnderline>再交付执行</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <ShieldCheck size={26} strokeWidth={2.5} style={{color: C.glacierInk, flexShrink: 0}} />
                  <span>最高法对死 / 未死者案卷<ThinUnderline color={C.glacierInk}>全面审查</ThinUnderline>；发现未判死者的生效裁判有误 → 走<SoftHighlight color={C.glacierInk}>审判监督</SoftHighlight>纠正，不在复核中改判</span>
                </div>
              </div>
            </TentCard>
          </div>

          <div
            data-final-knowledge="no-change-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 520,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 240, 16),
            }}
          >
            <Ban size={24} strokeWidth={2.6} style={{color: C.rope, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(240,242,245,0.88)', fontWeight: 700}}>
              陷阱：复核中发现同案乙应判 10 年 → 不能直接改判乙，应走审判监督程序
            </span>
          </div>
        </div>
      </div>
    </SummitShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const DeathReviewSummit: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.alpine, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['disposition-camp'].start} duration={SCENES['disposition-camp'].duration}>
      <DispositionCampScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['remand-routes'].start} duration={SCENES['remand-routes'].duration}>
      <RemandRoutesScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['special-effect-points'].start} duration={SCENES['special-effect-points'].duration}>
      <SpecialEffectScene />
    </TimelineSequence>
  </AbsoluteFill>
);
