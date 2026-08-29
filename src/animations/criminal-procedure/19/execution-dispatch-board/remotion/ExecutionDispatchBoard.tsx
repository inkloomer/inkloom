import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {AlertTriangle, Ban, Building, CheckCircle2, Gavel, Mail, ShieldCheck, Truck} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Dispatch Board — 交付调度台 · 执行机关分工
const C = {
  depot: '#26262B',
  depotDeep: '#1D1D22',
  waybill: '#EEEDE4',
  waybillAlt: '#E3E2D6',
  ink: '#28272C',
  inkSoft: '#696871',
  court: '#B8763A',
  courtInk: '#7A4A1E',
  courtSoft: '#F2E2CE',
  prison: '#8A5AA6',
  prisonInk: '#5C3A70',
  prisonSoft: '#E9DEF2',
  correct: '#3F8F6C',
  correctInk: '#2A5F49',
  correctSoft: '#DEEEE6',
  police: '#4E7C99',
  policeInk: '#31536A',
  policeSoft: '#DBE7EE',
  alert: '#B2472F',
  alertInk: '#742D1A',
  alertSoft: '#F2DCD4',
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

const DepotShell = ({
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
      backgroundColor: C.depot,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(238,237,228,0.03) 0 1px, transparent 1px 13px),' +
        'radial-gradient(circle at 16% 14%, rgba(184,118,58,0.14), transparent 30%),' +
        'radial-gradient(circle at 86% 86%, rgba(78,124,153,0.16), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.waybill,
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
          backgroundColor: C.depotDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.court,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        台号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.waybill}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(238,237,228,0.66)',
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

const WaybillCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.waybill,
      border: `3px solid ${C.court}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,8,9,0.5), inset 0 0 0 2px rgba(184,118,58,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 四类分流台
// ---------------------------------------------------------------

export const FourBerthScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <DepotShell accent={C.court} code="19-1" subtitle="考点1 执行机关分工 · 生死钱、长住户、非监禁、给公安" title="四类分流台">
      <div
        data-layout="four-lane-dispatch-board-with-mnemonic-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="court-takes-life-money-and-acquittal,prison-takes-long-custody-with-detention-center-gap,community-correction-takes-non-custodial,police-takes-the-rest-with-station-detail"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="法院生死钱，监狱长住户，矫正非监禁，其他给公安" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="court-lane" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 24, width: 420, height: 330, padding: '20px 24px', borderColor: C.court, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Gavel size={28} strokeWidth={2.5} style={{color: C.courtInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.courtInk, lineHeight: 1.2}}>法院</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                <Chip color={C.court} label="无罪、免刑" />
                <Chip color={C.court} label="死刑立即执行" />
                <Chip color={C.court} label="罚金" />
                <Chip color={C.court} label="没收财产" />
              </div>
              <div style={{marginTop: 14, fontSize: 21, color: C.inkSoft, fontWeight: 700}}>口诀：生 · 死 · 钱</div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="prison-lane" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 460, top: 24, width: 420, height: 330, padding: '20px 24px', borderColor: C.prison, borderWidth: 4, ...enter(frame, 60, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Building size={28} strokeWidth={2.5} style={{color: C.prisonInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.prisonInk, lineHeight: 1.2}}>监狱</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12}}>
                <Chip color={C.prison} label="死缓" />
                <Chip color={C.prison} label="无期" />
                <Chip color={C.prison} label="有期" />
              </div>
              <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                余刑<ThinUnderline color={C.prisonInk}>3 个月以下</ThinUnderline>由<SoftHighlight color={C.prisonInk}>看守所</SoftHighlight>代为执行
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="correction-lane" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 920, top: 24, width: 420, height: 330, padding: '20px 24px', borderColor: C.correct, borderWidth: 4, ...enter(frame, 120, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <ShieldCheck size={28} strokeWidth={2.5} style={{color: C.correctInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.correctInk, lineHeight: 1.2}}>社区矫正机构</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                <Chip color={C.correct} label="管制" />
                <Chip color={C.correct} label="缓刑" />
                <Chip color={C.correct} label="假释" />
                <Chip color={C.correct} label="暂予监外执行" />
              </div>
              <div style={{marginTop: 14, fontSize: 21, color: C.inkSoft, fontWeight: 700}}>口诀：非监禁刑四件套</div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="police-lane" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 1380, top: 24, width: 420, height: 330, padding: '20px 24px', borderColor: C.police, borderWidth: 4, ...enter(frame, 180, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Truck size={28} strokeWidth={2.5} style={{color: C.policeInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.policeInk, lineHeight: 1.2}}>公安机关</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <div>拘役（<ThinUnderline color={C.policeInk}>看守所</ThinUnderline>执行）</div>
                <div>剥夺政治权利 → 居住地<ThinUnderline color={C.policeInk}>派出所</ThinUnderline></div>
                <div>驱逐出境等</div>
              </div>
            </WaybillCard>
          </div>

          <div
            data-final-knowledge="mnemonic-strip"
            style={{
              position: 'absolute',
              left: 0,
              top: 396,
              width: MAIN_WIDTH,
              ...enter(frame, 240, 22),
            }}
          >
            <WaybillCard style={{padding: '16px 26px', borderColor: C.court}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.courtInk, lineHeight: 1.5, textAlign: 'center'}}>
                口诀：<SoftHighlight color={C.courtInk}>法院生死钱</SoftHighlight>，<SoftHighlight color={C.prisonInk}>监狱长住户</SoftHighlight>，<SoftHighlight color={C.correctInk}>矫正非监禁</SoftHighlight>，其他给<SoftHighlight color={C.policeInk}>公安</SoftHighlight>
              </div>
            </WaybillCard>
          </div>
        </div>
      </div>
    </DepotShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 十日文书传送带
// ---------------------------------------------------------------

export const DocumentBeltScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <DepotShell accent={C.police} code="19-2" subtitle="一审法院生效后 10 日内送达六种文书" title="十日文书传送带">
      <div
        data-layout="document-belt-with-trap-banks"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="first-instance-court-delivers-within-ten-days,six-documents-tell-the-case-story,second-instance-court-never-delivers-the-package,arrest-warrant-is-not-on-the-list"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="一审法院负责交付；逮捕证不在文书之列" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="delivery-belt" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, height: 250, padding: '20px 26px', borderColor: C.police, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Mail size={30} strokeWidth={2.5} style={{color: C.policeInk, flexShrink: 0}} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.policeInk, lineHeight: 1.2}}>死缓 · 无期 · 有期 · 拘役</span>
                <Chip color={C.police} label="一审法院 · 生效后 10 日内" solid style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 12}}>
                {['判决书', '裁定书', '起诉书副本', '自诉状复印件', '执行通知书', '结案登记表'].map((doc, index) => (
                  <Chip key={doc} color={C.police} label={doc} style={{opacity: interpolate(frame, [40 + index * 12, 56 + index * 12], [0, 1], clamp)}} />
                ))}
              </div>
              <div style={{marginTop: 16, fontSize: 21, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>
                收件方：公安机关、监狱或其他执行机关——六份文书串起「起诉 → 审判 → 执行」的来龙去脉
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="trap-banks" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 306, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
              <WaybillCard style={{flex: 1, height: 210, padding: '18px 24px', borderColor: C.alert, ...enter(frame, 120, 24)}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.alertInk, marginBottom: 8}}>易错 1 · 谁交付</div>
                <div style={{fontSize: 21, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  二审维持原判 → 仍由<ThinUnderline color={C.alertInk}>一审法院</ThinUnderline>在生效后 10 日内交付执行，不是二审法院
                </div>
              </WaybillCard>
              <WaybillCard style={{flex: 1, height: 210, padding: '18px 24px', borderColor: C.alert, ...enter(frame, 170, 24)}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.alertInk, marginBottom: 8}}>易错 2 · 送什么</div>
                <ExternalNegation color={C.alertInk}>逮捕证不在送达文书之列</ExternalNegation>
              </WaybillCard>
            </div>
          </div>
        </div>
      </div>
    </DepotShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 易错警示板
// ---------------------------------------------------------------

export const TrapBoardScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <DepotShell accent={C.alert} code="19-3" subtitle="余刑计算、缓刑去向与剥权执行" title="易错警示板">
      <div
        data-layout="three-warning-cards-with-verdict-stamps"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="residual-term-over-three-months-goes-to-prison,suspended-sentence-runs-in-community-correction,political-rights-run-at-local-police-station"
        data-focal-channels="contrast,enclosure,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="余刑超 3 个月进监狱；缓刑走社区矫正；剥权归派出所" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="residual-term-card" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
              <WaybillCard style={{flex: 1, height: 320, padding: '20px 24px', borderColor: C.alert, ...enter(frame, 0, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <AlertTriangle size={26} strokeWidth={2.5} style={{color: C.alertInk, flexShrink: 0}} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.alertInk}}>余刑怎么算</span>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.55, color: C.ink, fontWeight: 700, marginBottom: 10}}>
                  判 1 年，已羁押 8 个月 → 余刑 <Chip color={C.alert} label="4 个月" />，超过 3 个月
                </div>
                <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                  <Chip color={C.prison} label="→ 监狱执行" solid />
                  <Chip color={C.correct} label="✗ 看守所代执行" />
                </div>
              </WaybillCard>
              <WaybillCard style={{flex: 1, height: 320, padding: '20px 24px', borderColor: C.correct, ...enter(frame, 70, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <CheckCircle2 size={26} strokeWidth={2.5} style={{color: C.correctInk, flexShrink: 0}} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.correctInk}}>缓刑去哪</span>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.55, color: C.ink, fontWeight: 700, marginBottom: 10}}>
                  有期徒刑 2 年缓期 2 年 → <ThinUnderline color={C.correctInk}>社区矫正机构</ThinUnderline>执行
                </div>
                <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                  <Chip color={C.correct} label="→ 社区矫正" solid />
                  <Chip color={C.prison} label="✗ 不进监狱" />
                </div>
              </WaybillCard>
              <WaybillCard style={{flex: 1, height: 320, padding: '20px 24px', borderColor: C.police, ...enter(frame, 140, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <Ban size={26} strokeWidth={2.5} style={{color: C.policeInk, flexShrink: 0}} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.policeInk}}>剥夺政治权利</span>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.55, color: C.ink, fontWeight: 700, marginBottom: 10}}>
                  由罪犯居住地<ThinUnderline color={C.policeInk}>派出所</ThinUnderline>执行
                </div>
                <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                  <Chip color={C.police} label="→ 派出所" solid />
                  <Chip color={C.correct} label="✗ 非社区矫正" />
                </div>
              </WaybillCard>
            </div>
          </div>

          <div
            data-final-knowledge="grounding-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 396,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 210, 16),
            }}
          >
            <CheckCircle2 size={24} strokeWidth={2.5} style={{color: C.court, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(238,237,228,0.88)', fontWeight: 700}}>
              一切以<SoftHighlight color={C.courtInk}>生效判决、裁定</SoftHighlight>为执行依据——判决和裁定在发生法律效力后执行
            </span>
          </div>
        </div>
      </div>
    </DepotShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const ExecutionDispatchBoard: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.depot, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['four-berth-dispatch'].start} duration={SCENES['four-berth-dispatch'].duration}>
      <FourBerthScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['document-belt'].start} duration={SCENES['document-belt'].duration}>
      <DocumentBeltScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['trap-board'].start} duration={SCENES['trap-board'].duration}>
      <TrapBoardScene />
    </TimelineSequence>
  </AbsoluteFill>
);
