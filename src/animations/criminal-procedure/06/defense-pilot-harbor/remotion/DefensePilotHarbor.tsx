import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, BookOpenCheck, CheckCircle2, FileText, LifeBuoy, Lightbulb, Siren, UserCheck, Users, XCircle} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Pilot Harbor — 灯塔引航港 · 辩护与代理
const C = {
  night: '#1B2733',
  nightDeep: '#141D26',
  sea: '#3E8E7E',
  seaInk: '#26635A',
  seaSoft: '#D9EBE4',
  beam: '#E5B54B',
  beamInk: '#8A6A22',
  beamSoft: '#F2E7C9',
  chart: '#F3EFE2',
  chartAlt: '#E9E4D2',
  ink: '#252E33',
  inkSoft: '#5E6B71',
  buoyRed: '#C0492F',
  buoyRedInk: '#7C2C1A',
  buoyRedSoft: '#F4DED6',
  buoyGreen: '#3F7F5F',
  buoyGreenInk: '#2A5641',
  buoyGreenSoft: '#DFEDE3',
  fog: '#7E8B92',
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

const HarborShell = ({
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
      backgroundColor: C.night,
      backgroundImage:
        'radial-gradient(circle at 78% 10%, rgba(229,181,75,0.14), transparent 26%),' +
        'radial-gradient(circle at 12% 88%, rgba(62,142,126,0.16), transparent 32%),' +
        'radial-gradient(1.2px 1.2px at 22% 24%, rgba(243,239,226,0.4), transparent),' +
        'radial-gradient(1px 1px at 52% 12%, rgba(243,239,226,0.34), transparent)',
      backgroundSize: 'auto, auto, 680px 680px, 680px 680px',
      color: C.chart,
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
          backgroundColor: C.nightDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.beam,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        泊位 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.chart}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(243,239,226,0.66)',
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

const ChartCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.chart,
      border: `3px solid ${C.sea}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(4,10,14,0.5)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 辩护的三条泊道
// ---------------------------------------------------------------

export const DefenseLanesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <HarborShell accent={C.sea} code="06-1" subtitle="考点2 辩护的种类 · 自行、委托与法援" title="辩护的三条泊道">
      <div
        data-layout="three-berth-lanes-with-notice-bay"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,thin-underline"
        data-visual-grammar="self-defense-runs-through-every-stage,commissioned-defense-splits-suspect-and-defendant-timing,legal-aid-requires-no-commission-and-lawyers-only,must-notify-list-covers-six-vulnerable-tracks"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="法援以无委托为前提，贯穿全程且只能律师" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="self-defense-lane" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 70, width: 420, height: 372, padding: '22px 24px', ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 30, fontWeight: 950, color: C.seaInk, marginBottom: 12}}>自行辩护</div>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                犯罪嫌疑人、被告人<SoftHighlight color={C.seaInk}>自我辩解</SoftHighlight>
              </div>
              <div style={{marginTop: 14}}>
                <Chip color={C.sea} label="贯穿各阶段" />
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="commissioned-defense-lane" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 450, top: 70, width: 620, height: 372, padding: '22px 24px', borderColor: C.beam, ...enter(frame, 60, 26)}}>
              <div style={{fontSize: 30, fontWeight: 950, color: C.beamInk, marginBottom: 12}}>委托辩护</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.beam} label="嫌疑人" />
                  <span>初次讯问或<ThinUnderline color={C.beamInk}>强制措施之日</ThinUnderline>起</span>
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.beam} label="被告人" />
                  <span>随时</span>
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.buoyRed} label="侦查期间" />
                  <span>只能委托<ThinUnderline color={C.buoyRedInk}>律师</ThinUnderline></span>
                </div>
                <div style={{fontSize: 21, color: C.inkSoft}}>在押的可由监护人、近亲属代委托；接受委托后 3 日内提交手续</div>
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="legal-aid-lane" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 1100, top: 70, width: 700, height: 372, padding: '22px 24px', borderColor: C.buoyGreen, borderWidth: 4, ...enter(frame, 120, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <LifeBuoy size={30} strokeWidth={2.5} style={{color: C.buoyGreenInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.buoyGreenInk, lineHeight: 1.2}}>法律援助辩护</span>
                <Chip color={C.buoyGreen} label="无委托为前提" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, marginBottom: 10}}>
                贯穿侦诉审全程，<ThinUnderline color={C.buoyGreenInk}>只能律师</ThinUnderline>担任
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
                <div>
                  <Chip color={C.buoyRed} label="应当通知" /> 盲聋哑 · 精神病 · 无期死刑 · 未成年 · 缺席审判 · 排非无辩
                </div>
                <div>
                  <Chip color={C.sea} label="可以通知" /> 同案已有人任 · 重大影响 · 抗诉 · 可能无罪
                </div>
              </div>
            </ChartCard>
          </div>

          <div
            data-final-knowledge="notice-timing-bay"
            style={{
              position: 'absolute',
              left: 0,
              top: 500,
              width: MAIN_WIDTH,
              ...enter(frame, 180, 24),
            }}
          >
            <ChartCard style={{width: MAIN_WIDTH, padding: '22px 26px', borderColor: C.fog}}>
              <div style={{display: 'flex', gap: 30, alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <Siren size={28} strokeWidth={2.5} style={{color: C.inkSoft, flexShrink: 0}} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>告知委托的时点</span>
                </div>
                <div style={{display: 'flex', gap: 26, fontSize: 22, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
                  <span>侦查机关：初次讯问 / 强制措施之日</span>
                  <span>检察院：收到案卷 <SoftHighlight color={C.beamInk}>3 日内</SoftHighlight></span>
                  <span>法院：受理案件 <SoftHighlight color={C.beamInk}>3 日内</SoftHighlight></span>
                </div>
              </div>
            </ChartCard>
          </div>
          <Users size={26} strokeWidth={2.4} style={{position: 'absolute', left: 380, top: 226, color: 'rgba(243,239,226,0.4)'}} />
        </div>
      </div>
    </HarborShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 值班律师：灯塔与航道边界
// ---------------------------------------------------------------

export const DutyLawyerLighthouseScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <HarborShell accent={C.beam} code="06-2" subtitle="考点2·四 值班律师制度 · 非辩护人的最低限帮助" title="值班律师灯塔">
      <div
        data-layout="lighthouse-status-with-permission-banks"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,soft-highlight,external-negation"
        data-visual-grammar="duty-lawyer-is-no-defender-and-no-procedural-subject,help-list-covers-counseling-advice-and-witnessing,ban-list-blocks-court-visit-investigation-and-commission,scope-covers-all-cases-and-all-stages"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="值班律师非辩护人、非诉讼主体；所有案件、所有阶段" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="duty-lawyer-status" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 24, width: 620, height: 380, padding: '22px 26px', borderColor: C.beam, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16}}>
                <Lightbulb size={40} strokeWidth={2.4} style={{color: C.beamInk, flexShrink: 0}} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.beamInk, lineHeight: 1.2}}>值班律师</span>
                <Chip color={C.beam} label="驻法院 · 看守所 · 检察院" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <ExternalNegation color={C.buoyRedInk}>不是辩护人，也不是刑事诉讼主体</ExternalNegation>
                <div>
                  仅提供<SoftHighlight color={C.beamInk}>最低限度的法律帮助</SoftHighlight>；不帮被害人
                </div>
                <div>
                  适用范围：<Chip color={C.sea} label="所有案件 · 所有阶段" />（不限认罪认罚）
                </div>
                <div style={{fontSize: 21, color: C.inkSoft}}>
                  会见：经办案机关允许可主动会见；可为同案多名嫌疑人服务
                </div>
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="duty-lawyer-may-list" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 660, top: 24, width: 560, height: 380, padding: '20px 24px', borderColor: C.buoyGreen, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                <CheckCircle2 size={30} strokeWidth={2.6} style={{color: C.buoyGreenInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.buoyGreenInk}}>可以</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 9}}>
                {['法律咨询', '程序建议', '申请变更强制措施', '对办案提意见', '申请法援', '释明认罪认罚', '对量刑提意见', '见证具结'].map((item, index) => (
                  <Chip key={item} color={C.buoyGreen} label={item} style={{opacity: interpolate(frame, [90 + index * 10, 104 + index * 10], [0, 1], clamp)}} />
                ))}
              </div>
              <div style={{marginTop: 16, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                审查起诉阶段起<ThinUnderline color={C.buoyGreenInk}>可以阅卷</ThinUnderline>
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="duty-lawyer-ban-list" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 1250, top: 24, width: 550, height: 380, padding: '20px 24px', borderColor: C.buoyRed, ...enter(frame, 130, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                <XCircle size={30} strokeWidth={2.6} style={{color: C.buoyRedInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.buoyRedInk}}>不可</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 9}}>
                {['出庭辩护', '上门服务', '调查取证', '帮被害人', '带助理', '收取财物', '受托转委托'].map((item, index) => (
                  <Chip key={item} color={C.buoyRed} label={item} style={{opacity: interpolate(frame, [150 + index * 10, 164 + index * 10], [0, 1], clamp)}} />
                ))}
              </div>
              <div style={{marginTop: 16, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                唯一出口：可转介<SoftHighlight color={C.seaInk}>法律援助</SoftHighlight>
              </div>
            </ChartCard>
          </div>

          <div
            data-final-knowledge="witness-nature-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 448,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 220, 16),
            }}
          >
            <BookOpenCheck size={26} strokeWidth={2.5} style={{color: C.beam, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(243,239,226,0.88)', fontWeight: 700}}>
              见证具结只证明<SoftHighlight color={C.beamInk}>自愿性</SoftHighlight>：自愿签署后不因嗣后委托辩护人而失效；公诉前反悔则具结书失效
            </span>
          </div>
        </div>
      </div>
    </HarborShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 法援的六项内容与身份边界
// ---------------------------------------------------------------

export const AidBoundariesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <HarborShell accent={C.buoyGreen} code="06-3" subtitle="法援申请要点 · 值班律师与辩护人的界碑" title="界碑：身份与转化">
      <div
        data-layout="aid-facts-grid-with-boundary-buoys"
        data-visual-anchor="boundary"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="aid-applications-go-to-the-organ-running-the-case,vulnerable-applicants-skip-means-testing,duty-lawyer-cannot-convert-into-commissioned-defender,earlier-aid-yields-to-defendant-choice"
        data-focal-channels="enclosure,contrast,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="向办案机关所在地申请；特定群体免查经济；值班律师不得当场转委托" style={{position: 'absolute', inset: 0}}>
          <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 22}}>
            <div data-final-knowledge="aid-application-facts" style={{flex: 1}}>
              <ChartCard style={{height: 300, padding: '20px 24px', borderColor: C.buoyGreen, ...enter(frame, 0, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <FileText size={28} strokeWidth={2.5} style={{color: C.buoyGreenInk, flexShrink: 0}} />
                  <span style={{fontSize: 27, fontWeight: 950, color: C.buoyGreenInk}}>申请法援的三个事实点</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                  <div>向<ThinUnderline color={C.buoyGreenInk}>办案机关所在地</ThinUnderline>的司法行政部门申请</div>
                  <div>县级司法行政部门<SoftHighlight color={C.buoyGreenInk}>应当</SoftHighlight>设立法援机构</div>
                  <div>无固定生活来源的残疾人等<ThinUnderline color={C.buoyGreenInk}>免予核查经济</ThinUnderline></div>
                </div>
              </ChartCard>
            </div>

            <div data-final-knowledge="aid-six-commitments" style={{flex: 1}}>
              <ChartCard style={{height: 300, padding: '20px 24px', borderColor: C.sea, ...enter(frame, 60, 26)}}>
                <div style={{fontSize: 27, fontWeight: 950, color: C.seaInk, marginBottom: 12}}>法援服务六项内容</div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 9}}>
                  {['经济核查', '免予核查', '最低县级', '减免收费', '办案地带', '当日转交'].map((item, index) => (
                    <Chip key={item} color={C.sea} label={item} style={{opacity: interpolate(frame, [90 + index * 10, 104 + index * 10], [0, 1], clamp)}} />
                  ))}
                </div>
                <div style={{marginTop: 14, fontSize: 21, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>
                  口诀：一入天转交——收到申请当日转交办案机关所属法援机构
                </div>
              </ChartCard>
            </div>

            <div data-final-knowledge="conversion-boundary" style={{flex: 1}}>
              <ChartCard style={{height: 300, padding: '20px 24px', borderColor: C.buoyRed, ...enter(frame, 120, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <UserCheck size={28} strokeWidth={2.5} style={{color: C.buoyRedInk, flexShrink: 0}} />
                  <span style={{fontSize: 27, fontWeight: 950, color: C.buoyRedInk}}>身份界碑</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                  <ExternalNegation color={C.buoyRedInk} iconSize={20}>不能当场委托值班律师为辩护人</ExternalNegation>
                  <div>可转介<ThinUnderline color={C.buoyGreenInk}>法律援助</ThinUnderline>继续帮助</div>
                  <div>法援在先又有人代委托：听<SoftHighlight color={C.beamInk}>被告人意见</SoftHighlight>定人选</div>
                </div>
              </ChartCard>
            </div>
          </div>

          <div
            data-final-knowledge="effective-plea-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 372,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 200, 16),
            }}
          >
            <Siren size={26} strokeWidth={2.5} style={{color: C.beam, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(243,239,226,0.88)', fontWeight: 700}}>
              具结书效力：自愿签署后，审判阶段另行委托辩护人<SoftHighlight color={C.beamInk}>不影响其效力</SoftHighlight>；但对程序有异议的，值班律师不得拒绝见证
            </span>
          </div>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 452,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 230, 16),
            }}
          >
            <LifeBuoy size={26} strokeWidth={2.5} style={{color: C.sea, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(243,239,226,0.88)', fontWeight: 700}}>
              记忆锚点：值班律师管<SoftHighlight color={C.seaInk}>当下帮助</SoftHighlight>，辩护人管<SoftHighlight color={C.beamInk}>全程辩护</SoftHighlight>，法援管<SoftHighlight color={C.buoyGreenInk}>兜底指派</SoftHighlight>
            </span>
          </div>
        </div>
      </div>
    </HarborShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const DefensePilotHarbor: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.night, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['defense-kinds-lanes'].start} duration={SCENES['defense-kinds-lanes'].duration}>
      <DefenseLanesScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['duty-lawyer-lighthouse'].start} duration={SCENES['duty-lawyer-lighthouse'].duration}>
      <DutyLawyerLighthouseScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['aid-boundaries-scene'].start} duration={SCENES['aid-boundaries-scene'].duration}>
      <AidBoundariesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
