import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CalendarDays, CheckCircle2, Clock, Mail, MapPin, RefreshCw, Stamp, UserCheck, XCircle} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Escapement Works — 机械日历坊 · 期间与送达
const C = {
  walnut: '#2B221B',
  walnutDeep: '#201914',
  dial: '#F1E9D6',
  dialAlt: '#E7DDC6',
  ink: '#2E2620',
  inkSoft: '#6E6154',
  brass: '#C49B4C',
  brassInk: '#7A5F26',
  brassSoft: '#EFE2C4',
  stamp: '#B3402C',
  stampInk: '#732718',
  stampSoft: '#F1DCD4',
  sage: '#7C8A5E',
  sageInk: '#4F5B39',
  sageSoft: '#E4E9D5',
  dusk: '#5C7185',
  duskInk: '#3A4A59',
  duskSoft: '#DEE5EB',
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

const WorksShell = ({
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
      backgroundColor: C.walnut,
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(196,155,76,0.05) 0 2px, transparent 2px 18px),' +
        'radial-gradient(circle at 16% 16%, rgba(196,155,76,0.16), transparent 30%),' +
        'radial-gradient(circle at 84% 86%, rgba(124,138,94,0.14), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.dial,
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
          backgroundColor: C.walnutDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.brass,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        坊号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.dial}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(241,233,214,0.66)',
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

const DialCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.dial,
      border: `3px solid ${C.brass}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(10,8,5,0.5), inset 0 0 0 2px rgba(196,155,76,0.25)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 三枚计算齿轮：时、日、月
// ---------------------------------------------------------------

export const CountingGearsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <WorksShell accent={C.brass} code="10-1" subtitle="考点2 期间的计算 · 从下一档起算" title="三枚计算齿轮">
      <div
        data-layout="three-dial-gears-with-mnemonic-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="hours-tick-from-the-next-hour,days-tick-from-the-next-day,months-run-same-day-to-same-day,half-month-always-fifteen-days"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="起算的时、日不计入；半个月一律按 15 日" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="hour-gear" style={{position: 'absolute', inset: 0}}>
            <DialCard style={{position: 'absolute', left: 0, top: 120, width: 560, height: 380, padding: '24px 26px', borderColor: C.dusk, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Clock size={32} strokeWidth={2.5} style={{color: C.duskInk, flexShrink: 0}} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.duskInk, lineHeight: 1.2}}>以时计</span>
              </div>
              <div style={{fontSize: 23, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                从期间开始的<SoftHighlight color={C.duskInk}>下一时</SoftHighlight>起算，开始之时不计入
              </div>
            </DialCard>
          </div>

          <div data-final-knowledge="day-gear" style={{position: 'absolute', inset: 0}}>
            <DialCard style={{position: 'absolute', left: 620, top: 120, width: 560, height: 380, padding: '24px 26px', borderColor: C.brass, ...enter(frame, 60, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <CalendarDays size={32} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0}} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.brassInk, lineHeight: 1.2}}>以日计</span>
              </div>
              <div style={{fontSize: 23, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                从期间开始的<SoftHighlight color={C.brassInk}>次日</SoftHighlight>起算，开始之日不计入
              </div>
            </DialCard>
          </div>

          <div data-final-knowledge="month-gear" style={{position: 'absolute', inset: 0}}>
            <DialCard style={{position: 'absolute', left: 1240, top: 120, width: 560, height: 380, padding: '24px 26px', borderColor: C.sage, ...enter(frame, 120, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <RefreshCw size={32} strokeWidth={2.5} style={{color: C.sageInk, flexShrink: 0}} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.sageInk, lineHeight: 1.2}}>以月计</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>本月某日 → 下月<ThinUnderline color={C.sageInk}>同日</ThinUnderline>为一个月</div>
                <div>起算日为月末 → 至下月<ThinUnderline color={C.sageInk}>最后一日</ThinUnderline></div>
                <div>下月无同日 → 至下月最后一日</div>
                <div><Chip color={C.sage} label="半个月 = 15 日" solid /></div>
              </div>
            </DialCard>
          </div>

          <div
            data-final-knowledge="start-exclusion-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 556,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 190, 16),
            }}
          >
            <Stamp size={26} strokeWidth={2.5} style={{color: C.stamp, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(241,233,214,0.88)', fontWeight: 700}}>
              总则：<SoftHighlight color={C.stampInk}>起算的时、日一律不计入</SoftHighlight>，从下一档起算
            </span>
          </div>
        </div>
      </div>
    </WorksShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 重算与特殊情形
// ---------------------------------------------------------------

export const RecalcSpecialScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <WorksShell accent={C.stamp} code="10-2" subtitle="期限重推三情形与节假日、交邮、路途规则" title="重算与特殊情形">
      <div
        data-layout="recalc-mnemonic-with-special-case-grid"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="new-crime-supplement-remand-and-venue-change-restart-clocks,holiday-ends-extend-except-custody,posting-before-deadline-counts-as-filed,travel-time-between-organs-is-deducted"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="另有重罪、补侦发回、改变管辖 → 期限重新计算" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="recalc-mnemonic" style={{position: 'absolute', inset: 0}}>
            <DialCard style={{position: 'absolute', left: 0, top: 24, width: 700, height: 300, padding: '20px 26px', borderColor: C.stamp, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <RefreshCw size={30} strokeWidth={2.5} style={{color: C.stampInk, flexShrink: 0}} />
                <span style={{fontSize: 29, fontWeight: 950, color: C.stampInk, lineHeight: 1.2}}>期限重推三情形</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.stamp} label="另有重罪" /> 发现重要罪行，重新计算侦查羁押期限</div>
                <div><Chip color={C.stamp} label="补侦发回" /> 补侦完毕移送 / 发回重审，重新计算审限</div>
                <div><Chip color={C.stamp} label="改变管辖" /> 改变后的机关收到案件之日重算</div>
              </div>
            </DialCard>
          </div>

          <div data-final-knowledge="special-case-grid" style={{position: 'absolute', inset: 0}}>
            <DialCard style={{position: 'absolute', left: 740, top: 24, width: 1060, height: 300, padding: '20px 26px', borderColor: C.brass, ...enter(frame, 70, 26)}}>
              <div style={{fontSize: 27, fontWeight: 950, color: C.brassInk, marginBottom: 12}}>特殊规则四枚齿轮</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 9, fontSize: 21, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <div>最后 1 日逢节假日 → 顺延；但<ThinUnderline color={C.brassInk}>在押期间</ThinUnderline>不得因节假日延长</div>
                <div>期满前<ThinUnderline color={C.brassInk}>交邮</ThinUnderline>不算过期，以邮戳为准</div>
                <div><ThinUnderline color={C.brassInk}>路途时间</ThinUnderline>不计入：机关间传递文书的时间一并扣除</div>
                <div>精神病鉴定期间不计入审限，<SoftHighlight color={C.stampInk}>其他鉴定计入</SoftHighlight>；身份不明自查清之日起算</div>
              </div>
            </DialCard>
          </div>

          <div
            data-final-knowledge="restoration-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 366,
              width: MAIN_WIDTH,
              ...enter(frame, 150, 24),
            }}
          >
            <DialCard style={{width: MAIN_WIDTH, padding: '18px 26px', borderColor: C.sage}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <CheckCircle2 size={28} strokeWidth={2.6} style={{color: C.sageInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.sageInk}}>耽误与恢复</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  因<ThinUnderline color={C.sageInk}>不能抗拒的原因或正当理由</ThinUnderline>耽误 → 障碍消除后 <Chip color={C.sage} label="5 日内" /> 申请继续进行；法院查证属实<SoftHighlight color={C.sageInk}>裁定准许</SoftHighlight>。个人原因错过，不能恢复
                </div>
              </div>
            </DialCard>
          </div>
          <Mail size={24} strokeWidth={2.4} style={{position: 'absolute', left: 712, top: 200, color: 'rgba(241,233,214,0.4)'}} />
        </div>
      </div>
    </WorksShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 送达方式板
// ---------------------------------------------------------------

export const ServiceModesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <WorksShell accent={C.dusk} code="10-3" subtitle="考点3 送达的程序 · 五种方式与刑诉例外" title="送达方式板">
      <div
        data-layout="five-mode-rows-with-exception-banner"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="every-service-carries-a-receipt,retained-service-needs-witness-or-recording,no-notice-or-electronic-service-except-absentia-trial,military-and-inmate-serve-by-transfer"
        data-focal-channels="contrast,enclosure,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="送达必有回证；刑诉无公告、电子送达，缺席审判为例外" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="five-mode-board" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 20, width: MAIN_WIDTH, display: 'flex', flexDirection: 'column', gap: 14}}>
              {[
                {icon: <UserCheck size={24} strokeWidth={2.5} style={{color: C.sageInk, flexShrink: 0}} />, mode: '直接送达', note: '出示送达回证签收；本人不在可交成年家属或单位负责人代收', accent: C.sage, delay: 0},
                {icon: <Ban size={24} strokeWidth={2.5} style={{color: C.stampInk, flexShrink: 0}} />, mode: '留置送达', note: '邀请见证人到场，或拍照录像记录；回证注明拒收事由与日期', accent: C.stamp, delay: 24},
                {icon: <MapPin size={24} strokeWidth={2.5} style={{color: C.duskInk, flexShrink: 0}} />, mode: '委托送达', note: '委托收件人所在地公安司法机关代为送达', accent: C.dusk, delay: 48},
                {icon: <Mail size={24} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0}} />, mode: '邮寄送达', note: '挂号邮寄给收件人', accent: C.brass, delay: 72},
                {icon: <CalendarDays size={24} strokeWidth={2.5} style={{color: C.sageInk, flexShrink: 0}} />, mode: '转交送达', note: '军人、正在服刑犯人、专门矫治教育人员由所在部门转交', accent: C.sage, delay: 96},
              ].map((row) => (
                <DialCard
                  key={row.mode}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                    padding: '14px 22px',
                    borderColor: row.accent,
                    ...enter(frame, row.delay, 18),
                  }}
                >
                  {row.icon}
                  <span style={{fontSize: 25, fontWeight: 950, color: row.accent, whiteSpace: 'nowrap'}}>{row.mode}</span>
                  <span style={{fontSize: 21, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>{row.note}</span>
                </DialCard>
              ))}
            </div>
          </div>

          <div
            data-final-knowledge="no-electronic-service-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 468,
              width: MAIN_WIDTH,
              ...enter(frame, 160, 24),
            }}
          >
            <DialCard style={{width: MAIN_WIDTH, padding: '18px 26px', borderColor: C.stamp}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <XCircle size={28} strokeWidth={2.6} style={{color: C.stampInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.stampInk}}>刑诉没有</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  公告送达、电子送达。例外：<ThinUnderline color={C.stampInk}>缺席审判</ThinUnderline>中，法院可采用所在国法律允许的方式（含邮寄、公告、电子）送达<SoftHighlight color={C.stampInk}>传票与起诉书副本</SoftHighlight>
                </div>
              </div>
            </DialCard>
          </div>
        </div>
      </div>
    </WorksShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const PeriodEscapementWorks: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.walnut, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['counting-units-gears'].start} duration={SCENES['counting-units-gears'].duration}>
      <CountingGearsScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['recalc-special-cases'].start} duration={SCENES['recalc-special-cases'].duration}>
      <RecalcSpecialScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['service-modes-board'].start} duration={SCENES['service-modes-board'].duration}>
      <ServiceModesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
