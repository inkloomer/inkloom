import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  Activity,
  AlertOctagon,
  Armchair,
  Ban,
  Bell,
  Building2,
  DoorOpen,
  Eye,
  FileSignature,
  FileText,
  FileX,
  Gavel,
  HeartPulse,
  Landmark,
  LifeBuoy,
  ListChecks,
  LockOpen,
  RefreshCcw,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  ShieldPlus,
  Split,
  Stethoscope,
  Timer,
  User,
  Users,
  VideoOff,
  Zap,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Mandatory Care Gate — 疗监护闸 · 强制医疗程序
const C = {
  ward: '#1C2B26',
  wardDeep: '#142019',
  chart: '#EAF2EA',
  chartAlt: '#DFEBE0',
  ink: '#23302A',
  inkSoft: '#64756C',
  gate: '#4E7FA0',
  gateInk: '#2E5670',
  gateSoft: '#DCE9F0',
  caution: '#C99A3F',
  cautionInk: '#7C5F1D',
  vitals: '#BF5F52',
  vitalsInk: '#7D3830',
  heal: '#4F9182',
  healInk: '#2F5D51',
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

const badgeStyle = (color: string): React.CSSProperties => ({
  width: 42,
  height: 42,
  borderRadius: 999,
  backgroundColor: `${color}24`,
  border: `2px solid ${color}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const CareShell = ({
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
      backgroundColor: C.ward,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(234,242,234,0.035) 0 2px, transparent 2px 72px),' +
        'repeating-linear-gradient(0deg, rgba(234,242,234,0.028) 0 2px, transparent 2px 88px),' +
        'radial-gradient(circle at 14% 16%, rgba(79,145,130,0.16), transparent 34%),' +
        'radial-gradient(circle at 88% 86%, rgba(201,154,63,0.12), transparent 34%)',
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
          backgroundColor: C.wardDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.heal,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        UNIT {code}
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
          color: 'rgba(234,242,234,0.66)',
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

const GateChip = ({
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
      padding: '3px 14px',
      backgroundColor: solid ? color : `${color}26`,
      border: `2px solid ${color}`,
      borderRadius: 999,
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

const VitalsHighlight = ({
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
      backgroundColor: `${color}2B`,
      borderLeft: `3px solid ${color}`,
      borderRadius: 3,
      padding: '2px 9px',
      ...style,
    }}
  >
    {children}
  </span>
);

const ObserveUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span style={{borderBottom: `2px dotted ${color}`, paddingBottom: 2}}>{children}</span>
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
      borderTop: `3px solid ${color}`,
      paddingTop: 5,
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
      border: `3px solid ${C.gate}`,
      borderRadius: 12,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(6,12,10,0.5), inset 0 0 0 2px rgba(78,127,160,0.18)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const TagBlock = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 14px',
      backgroundColor: 'transparent',
      border: `3px solid ${color}`,
      color,
      borderRadius: 6,
      fontSize: 22,
      fontWeight: 950,
      letterSpacing: 3,
      fontFamily: 'var(--inkloom-animation-label)',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

// ---------------------------------------------------------------
// Scene 01 — 适用条件与主体
// ---------------------------------------------------------------

export const EntryConditionsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const gates = [
    {mark: '暴', icon: Zap, body: '实施暴力行为（前提条件）', accent: C.vitals, ink: C.vitalsInk, delay: 0},
    {mark: '公', icon: AlertOctagon, body: '危害公共安全或者严重危害公民人身安全（前提条件）', accent: C.caution, ink: C.cautionInk, delay: 45},
    {mark: '定', icon: Stethoscope, body: '经法定程序鉴定依法不负刑事责任的精神病人（医学条件）', accent: C.gate, ink: C.gateInk, delay: 90},
    {mark: '继', icon: Activity, body: '有继续危害社会可能（社会危险性条件）', accent: C.heal, ink: C.healInk, delay: 135},
  ];

  return (
    <CareShell accent={C.heal} code="24-1" subtitle="公暴继定四条件 · 五类主体" title="适用条件与主体">
      <div
        data-layout="four-condition-gate-row-with-organs-band"
        data-visual-anchor="boundary"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="four-gate-conditions-open-violence-danger-appraisal-and-continuing-risk,five-organs-chain-launch-apply-decide-execute-and-supervise,police-may-impose-temporary-protective-restraint-before-decision,mnemonic-gong-bao-ji-ding-names-the-four-gates"
        data-focal-channels="contrast,enclosure,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="公暴继定，强制医疗——四条件缺一不可" style={{position: 'absolute', inset: 0}}>
          <ShieldPlus
            size={172}
            strokeWidth={1.4}
            style={{position: 'absolute', left: 810, top: 40, color: C.heal, opacity: 0.11}}
          />
          <div data-final-knowledge="condition-gates" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 16}}>
              {gates.map((gate) => (
                <ChartCard key={gate.mark} style={{flex: 1, height: 300, padding: '16px 20px', borderColor: gate.accent, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, ...enter(frame, gate.delay, 24)}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <GateChip color={gate.ink} label={gate.mark} solid />
                    <gate.icon size={26} strokeWidth={2.5} color={gate.ink} />
                  </div>
                  <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                    <ObserveUnderline color={gate.ink}>{gate.body}</ObserveUnderline>
                  </div>
                </ChartCard>
              ))}
            </div>
          </div>

          <div data-final-knowledge="organs-band" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 330, width: MAIN_WIDTH, height: 176, padding: '16px 22px', borderColor: C.gate, ...enter(frame, 200, 22)}}>
              <div style={{fontSize: 23, fontWeight: 950, color: C.gateInk, marginBottom: 12}}>适用主体链</div>
              <div style={{display: 'flex', gap: 12, alignItems: 'stretch'}}>
                {[
                  {role: '启动主体', who: '检、法', icon: Building2, ink: C.gateInk},
                  {role: '申请主体', who: '检察院', icon: FileSignature, ink: C.vitalsInk},
                  {role: '决定主体', who: '法院', icon: Gavel, ink: C.cautionInk},
                  {role: '送交执行', who: '公安机关', icon: Shield, ink: C.healInk},
                  {role: '监督主体', who: '检察院', icon: Eye, ink: C.vitalsInk},
                ].map((organ) => (
                  <div
                    key={organ.role}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                      border: `2px solid ${organ.ink}44`,
                      borderRadius: 10,
                      padding: '12px 8px',
                      backgroundColor: `${organ.ink}12`,
                    }}
                  >
                    <span style={badgeStyle(organ.ink)}><organ.icon size={24} strokeWidth={2.5} color={organ.ink} /></span>
                    <span style={{fontSize: 20, fontWeight: 950, color: organ.ink}}>{organ.role}</span>
                    <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>{organ.who}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="restraint-note" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 530, width: MAIN_WIDTH, height: 118, padding: '14px 24px', borderColor: C.caution, ...enter(frame, 280, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <ShieldAlert size={30} strokeWidth={2.5} style={{color: C.cautionInk, flexShrink: 0}} />
                <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  法院决定强制医疗前，公安机关<GateChip color={C.cautionInk} label="可以" />采取
                  <VitalsHighlight color={C.cautionInk}>临时的保护性约束措施</VitalsHighlight>——必要时送精神病医院接受治疗
                </span>
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </CareShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 一词定身份
// ---------------------------------------------------------------

export const IdentityLaunchScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CareShell accent={C.gate} code="24-2" subtitle="有申请 → 被申请人 · 无申请 → 被告人" title="一词定身份">
      <div
        data-layout="identity-fork-with-jurisdiction-lane"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,thin-underline"
        data-visual-grammar="application-word-makes-the-patient-a-respondent,prosecution-route-keeps-defendant-status-with-ex-officio-launch,application-launch-stays-basic-court-only,prosecution-launch-may-rise-to-intermediate-or-high-court"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="先审检察院有没有提出申请——身份决定后续处理" style={{position: 'absolute', inset: 0}}>
          <Split
            size={170}
            strokeWidth={1.4}
            style={{position: 'absolute', left: 825, top: 26, color: C.gate, opacity: 0.11}}
          />
          <div data-final-knowledge="identity-fork" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 40}}>
              <ChartCard style={{flex: 1, height: 276, padding: '18px 24px', borderColor: C.vitals, borderWidth: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, ...enter(frame, 0, 26)}}>
                <div><TagBlock color={C.vitalsInk}>检察院申请</TagBlock></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.vitals)}><FileSignature size={24} strokeWidth={2.5} color={C.vitalsInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    检察院向法院提出<ObserveUnderline color={C.vitalsInk}>申请</ObserveUnderline>，启动审理程序
                  </span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  精神病人被称为<GateChip color={C.vitals} label="被申请人" solid />
                </div>
              </ChartCard>
              <ChartCard style={{flex: 1, height: 276, padding: '18px 24px', borderColor: C.gate, borderWidth: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, ...enter(frame, 70, 26)}}>
                <div><TagBlock color={C.gateInk}>检察院公诉</TagBlock></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.gate)}><User size={24} strokeWidth={2.5} color={C.gateInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    检院未申请只提起公诉，法院审理中<ObserveUnderline color={C.gateInk}>依职权启动</ObserveUnderline>
                  </span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  精神病人被称为<GateChip color={C.gate} label="被告人" solid />
                </div>
              </ChartCard>
            </div>
          </div>

          <div data-final-knowledge="word-note" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 306, width: MAIN_WIDTH, height: 84, padding: '12px 24px', borderColor: C.caution, ...enter(frame, 150, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Search size={28} strokeWidth={2.5} style={{color: C.cautionInk, flexShrink: 0}} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  一词定身份：做题先审检察院有没有向法院提出<VitalsHighlight color={C.vitalsInk}>申请</VitalsHighlight>——两者必居其一，处理结果相应不同
                </span>
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="jurisdiction-lane" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 414, width: MAIN_WIDTH, display: 'flex', gap: 40}}>
              <ChartCard style={{flex: 1, height: 226, padding: '18px 24px', borderColor: C.heal, ...enter(frame, 220, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                  <Landmark size={28} strokeWidth={2.5} style={{color: C.healInk, flexShrink: 0}} />
                  <span style={{fontSize: 26, fontWeight: 950, color: C.healInk}}>依申请启动 · 只能基层</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                  由<ObserveUnderline color={C.healInk}>暴力行为地基层检察院</ObserveUnderline>申请；居住地更适宜的，可以由居住地基层检院提出——对应基层法院审理
                </div>
              </ChartCard>
              <ChartCard style={{flex: 1, height: 226, padding: '18px 24px', borderColor: C.caution, ...enter(frame, 290, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                  <Building2 size={28} strokeWidth={2.5} style={{color: C.cautionInk, flexShrink: 0}} />
                  <span style={{fontSize: 26, fontWeight: 950, color: C.cautionInk}}>依公诉启动 · 不限基层</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                  一般在基层法院审理，但<VitalsHighlight color={C.cautionInk}>中级、高级法院</VitalsHighlight>在审理中也可决定强制医疗
                </div>
              </ChartCard>
            </div>
          </div>
        </div>
      </div>
    </CareShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 审理规则
// ---------------------------------------------------------------

export const TrialRuleScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CareShell accent={C.caution} code="24-3" subtitle="合议庭 · 开庭与出庭 · 法定代理人到场" title="审理规则">
      <div
        data-layout="trial-rule-stack-with-aid-column-and-decision-band"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="panel-is-mandatory-while-hearing-may-be-waived-by-guardian-request,respondent-appearance-is-optional-but-requested-appearance-must-be-allowed,statutory-agent-must-be-summoned-with-near-kin-backup,legal-aid-counsel-within-three-days-and-appraisal-read-first,one-month-decision-uses-decision-not-judgment-or-ruling"
        data-focal-channels="contrast,enclosure,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="应当组成合议庭开庭审理；1 个月内用决定——不是判决也不是裁定" style={{position: 'absolute', inset: 0}}>
          <HeartPulse
            size={162}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 40, top: 330, color: C.vitals, opacity: 0.12}}
          />
          <div data-final-knowledge="trial-rules" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 6, width: 1180, height: 546, padding: '20px 26px', borderColor: C.gate, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 27, fontWeight: 950, color: C.gateInk, marginBottom: 14}}>审理程序五要点</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.gate)}><Users size={24} strokeWidth={2.5} color={C.gateInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    <ObserveUnderline color={C.gateInk}>应当组成合议庭</ObserveUnderline>，开庭进行审理
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.caution)}><VideoOff size={24} strokeWidth={2.5} color={C.cautionInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    例外：法定代理人请求不开庭＋法院审查同意 <GateChip color={C.cautionInk} label="可不开庭" />
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.vitals)}><Armchair size={24} strokeWidth={2.5} color={C.vitalsInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    被申请人<ObserveUnderline color={C.vitalsInk}>可不出庭</ObserveUnderline>；要求出庭的，法院审查身体和精神状态认为可以 → 应当准许，可在调查、辩论阶段发表意见
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.heal)}><ListChecks size={24} strokeWidth={2.5} color={C.healInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    庭审遵循<ObserveUnderline color={C.healInk}>法庭调查、法庭辩论</ObserveUnderline>程序进行
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={badgeStyle(C.gate)}><Bell size={24} strokeWidth={2.5} color={C.gateInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    应当通知<ObserveUnderline color={C.gateInk}>法定代理人到场</ObserveUnderline>；经通知未到场的，可以通知其他近亲属到场
                  </span>
                </div>
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="aid-column" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 1220, top: 6, width: 580, height: 264, padding: '18px 24px', borderColor: C.heal, ...enter(frame, 130, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <LifeBuoy size={28} strokeWidth={2.5} style={{color: C.healInk, flexShrink: 0}} />
                <span style={{fontSize: 25, fontWeight: 950, color: C.healInk}}>法律帮助 · 3 日</span>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                没有委托诉讼代理人的，应当自受理申请或发现符合条件之日起 <GateChip color={C.healInk} label="3 日以内" solid /> 通知法律援助机构指派律师担任诉讼代理人
              </div>
            </ChartCard>
            <ChartCard style={{position: 'absolute', left: 1220, top: 288, width: 580, height: 264, padding: '18px 24px', borderColor: C.caution, ...enter(frame, 200, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <FileText size={28} strokeWidth={2.5} style={{color: C.cautionInk, flexShrink: 0}} />
                <span style={{fontSize: 25, fontWeight: 950, color: C.cautionInk}}>先宣读鉴定意见</span>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                开庭审理的，先由合议庭宣读<ObserveUnderline color={C.cautionInk}>法医精神病鉴定意见</ObserveUnderline>，后由公诉人、法定代理人、诉讼代理人依次发表意见
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="decision-band" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 572, width: MAIN_WIDTH, height: 102, padding: '14px 24px', borderColor: C.vitals, ...enter(frame, 300, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <Timer size={28} strokeWidth={2.5} style={{color: C.vitalsInk, flexShrink: 0}} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  审理期限：应当在 <GateChip color={C.vitals} label="1 个月" solid /> 以内作出强制医疗的<VitalsHighlight color={C.vitalsInk}>决定</VitalsHighlight>
                </span>
                <ExternalNegation color={C.vitalsInk} iconSize={20}>不是判决，也不是裁定</ExternalNegation>
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </CareShell>
  );
};

// ---------------------------------------------------------------
// Scene 04 — 结果、救济与解除
// ---------------------------------------------------------------

export const OutcomeReliefScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CareShell accent={C.vitals} code="24-4" subtitle="三种结果 · 复议与纠正 · 解除批准制" title="结果、救济与解除">
      <div
        data-layout="outcome-triptych-with-relief-and-release-bands"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,soft-highlight,external-negation"
        data-visual-grammar="fit-cases-decide-treatment-or-acquit-then-decide,unfit-psychosis-rejects-with-strict-care-or-innocence,criminal-liability-rejects-and-returns-or-continues-trial,five-day-review-and-twenty-day-correction-never-second-instance,release-needs-court-approval-with-six-month-reapplication-gap"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="无二审：复议 5 日、纠正 20 日；解除必须报法院批准" style={{position: 'absolute', inset: 0}}>
          <DoorOpen
            size={168}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 30, top: 10, color: C.heal, opacity: 0.12}}
          />
          <div data-final-knowledge="outcome-triptych" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 20}}>
              <ChartCard style={{flex: 1, height: 316, padding: '16px 22px', borderColor: C.heal, borderWidth: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, ...enter(frame, 0, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <HeartPulse size={28} strokeWidth={2.5} color={C.healInk} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.healInk}}>符合强疗条件</span>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700, marginBottom: 8}}>
                  <GateChip color={C.vitalsInk} label="被申请人" /> → 决定强制医疗
                </div>
                <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                  <GateChip color={C.gateInk} label="被告人" /> → 判决<VitalsHighlight color={C.healInk}>不负刑事责任</VitalsHighlight>，同时决定强疗
                </div>
              </ChartCard>
              <ChartCard style={{flex: 1, height: 316, padding: '16px 22px', borderColor: C.caution, borderWidth: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, ...enter(frame, 60, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <FileX size={28} strokeWidth={2.5} color={C.cautionInk} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.cautionInk}}>是精神病、不符合强疗条件</span>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700, marginBottom: 8}}>
                  <GateChip color={C.vitalsInk} label="被申请人" /> → 决定驳回＋<ObserveUnderline color={C.cautionInk}>严加管护</ObserveUnderline>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                  <GateChip color={C.gateInk} label="被告人" /> → 判决无罪或不负刑事责任＋严加管护
                </div>
              </ChartCard>
              <ChartCard style={{flex: 1, height: 316, padding: '16px 22px', borderColor: C.vitals, borderWidth: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, ...enter(frame, 120, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <Scale size={28} strokeWidth={2.5} color={C.vitalsInk} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.vitalsInk}}>需要承担刑事责任</span>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700, marginBottom: 8}}>
                  <GateChip color={C.vitalsInk} label="被申请人" /> → 决定驳回＋<ObserveUnderline color={C.vitalsInk}>退回检院</ObserveUnderline>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                  <GateChip color={C.gateInk} label="被告人" /> → 继续审理作出判决
                </div>
              </ChartCard>
            </div>
          </div>

          <div data-final-knowledge="relief-band" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 344, width: MAIN_WIDTH, height: 150, padding: '14px 24px', borderColor: C.gate, ...enter(frame, 200, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                <RefreshCcw size={26} strokeWidth={2.5} style={{color: C.gateInk, flexShrink: 0}} />
                <span style={{fontSize: 24, fontWeight: 950, color: C.gateInk}}>不服救济 · 强疗无二审</span>
                <ExternalNegation color={C.vitalsInk} iconSize={20}>对决定不能上诉、抗诉</ExternalNegation>
              </div>
              <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                被决定人、被害人、近亲属及法定代理人：<GateChip color={C.gateInk} label="5 日内" solid /> 向<VitalsHighlight color={C.gateInk}>上一级法院</VitalsHighlight>申请复议，复议期间不停止执行，上一级合议庭 1 个月内复议；
                检察院：<GateChip color={C.vitalsInk} label="20 日内" solid /> 向决定法院提出书面纠正意见，另行组成合议庭 1 个月内决定
              </div>
            </ChartCard>
          </div>

          <div data-final-knowledge="release-band" style={{position: 'absolute', inset: 0}}>
            <ChartCard style={{position: 'absolute', left: 0, top: 516, width: MAIN_WIDTH, height: 150, padding: '14px 24px', borderColor: C.heal, ...enter(frame, 280, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                <LockOpen size={26} strokeWidth={2.5} style={{color: C.healInk, flexShrink: 0}} />
                <span style={{fontSize: 24, fontWeight: 950, color: C.healInk}}>解除强制医疗 · 批准制</span>
                <GateChip color={C.healInk} label="机构无权解除" />
              </div>
              <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                强制医疗机构定期诊断评估，已不具有人身危险性不需要继续强疗 → 及时提出解除意见<VitalsHighlight color={C.healInk}>报法院批准</VitalsHighlight>；本人及近亲属有权向决定法院申请解除；驳回后再申请隔 <GateChip color={C.cautionInk} label="6 个月" solid /> 应当受理；解除审查 1 个月内处理，必要时开庭
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </CareShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------

export const MandatoryCareGate: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.ward, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['entry-conditions-organs'].start} duration={SCENES['entry-conditions-organs'].duration}>
      <EntryConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['identity-launch-fork'].start} duration={SCENES['identity-launch-fork'].duration}>
      <IdentityLaunchScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['trial-rule-rows'].start} duration={SCENES['trial-rule-rows'].duration}>
      <TrialRuleScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES['outcome-relief-release'].start} duration={SCENES['outcome-relief-release'].duration}>
      <OutcomeReliefScene />
    </TimelineSequence>
  </AbsoluteFill>
);
