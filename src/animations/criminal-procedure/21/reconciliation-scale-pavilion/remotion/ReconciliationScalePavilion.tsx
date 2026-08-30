import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  Ban,
  BookOpen,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  FileX,
  FolderSearch,
  Gavel,
  HandCoins,
  Handshake,
  HeartHandshake,
  HeartPulse,
  History,
  Hourglass,
  Landmark,
  Megaphone,
  MessageSquareCheck,
  Network,
  Scale,
  ScrollText,
  Search,
  ShieldCheck,
  Signature,
  Siren,
  Stamp,
  Swords,
  TrendingDown,
  UserRound,
  UserRoundPen,
  Users,
  UsersRound,
  Wallet,
  XCircle,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Reconciliation Scale Pavilion — 和解秤亭 · 当事人和解的公诉案件诉讼程序
const C = {
  lacquer: '#14100E',
  lacquerDeep: '#0B0807',
  gold: '#C9A227',
  goldInk: '#8A6C14',
  goldSoft: '#EADDA6',
  bone: '#F3EEE3',
  ink: '#241C16',
  inkSoft: '#6E6153',
  cinnabar: '#C0392B',
  cinnabarInk: '#8C2A20',
  cinnabarSoft: '#F3DAD4',
  jade: '#3F8F7A',
  jadeInk: '#2C6555',
  jadeSoft: '#D8EBE4',
  indigo: '#3D5A80',
  indigoInk: '#2A3E59',
  indigoSoft: '#DCE4EF',
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

const PavilionShell = ({
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
      backgroundColor: C.lacquer,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(201,162,39,0.05) 0 1px, transparent 1px 72px),' +
        'repeating-linear-gradient(0deg, rgba(201,162,39,0.04) 0 1px, transparent 1px 96px),' +
        'radial-gradient(circle at 18% 12%, rgba(201,162,39,0.16), transparent 34%),' +
        'radial-gradient(circle at 84% 90%, rgba(192,57,43,0.14), transparent 34%)',
      backgroundSize: 'auto, auto, auto, auto',
      color: C.bone,
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
          backgroundColor: C.lacquerDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.gold,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        UNIT {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.bone}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(243,238,227,0.68)',
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

const LabelBlock = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span
    style={{
      display: 'inline-block',
      backgroundColor: color,
      color: '#FFFFFF',
      fontSize: 22,
      fontWeight: 950,
      letterSpacing: 2,
      fontFamily: 'var(--inkloom-animation-label)',
      padding: '3px 12px',
      borderRadius: 4,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
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
      backgroundColor: `${color}2E`,
      borderRadius: 6,
      padding: '2px 8px',
      boxShadow: `inset 0 -3px 0 ${color}60`,
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

const StampMark = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span
    style={{
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 6,
      color,
      fontSize: 22,
      fontWeight: 950,
      letterSpacing: 3,
      fontFamily: 'var(--inkloom-animation-label)',
      padding: '4px 14px',
      rotate: '-4deg',
      backgroundColor: `${color}14`,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const PlateCard = ({
  accent = C.gold,
  children,
  style,
}: {
  readonly accent?: string;
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.bone,
      border: `3px solid ${accent}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: `0 6px 16px rgba(0,0,0,0.5), inset 0 0 0 2px ${accent}30`,
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const PlateTitle = ({
  children,
  color,
  icon,
  size = 27,
}: {
  readonly children: React.ReactNode;
  readonly color: string;
  readonly icon: React.ReactNode;
  readonly size?: number;
}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 11, marginBottom: 10, fontSize: size, fontWeight: 950, color, lineHeight: 1.2}}>
    {icon}
    <span>{children}</span>
  </div>
);

const Watermark = ({icon, left, top}: {readonly icon: React.ReactNode; readonly left: number; readonly top: number}) => (
  <div style={{position: 'absolute', left, top, opacity: 0.09, pointerEvents: 'none'}}>{icon}</div>
);

// ---------------------------------------------------------------
// Scene 01 — 准入条件：四砝码 · 两秤星 · 七不予过秤
// ---------------------------------------------------------------

export const AdmissionScalesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const prerequisites = [
    {icon: <Gavel size={30} strokeWidth={2.5} />, label: '公诉案件', note: '本特别程序只接公诉案件的和解', color: C.indigoInk},
    {icon: <HeartHandshake size={30} strokeWidth={2.5} />, label: '真诚悔罪', note: '犯罪嫌疑人、被告人真诚悔罪', color: C.jadeInk},
    {icon: <HandCoins size={30} strokeWidth={2.5} />, label: '赔偿并道歉', note: '赔偿损失、赔礼道歉等方式获得被害人谅解', color: C.jadeInk},
    {icon: <UserRound size={30} strokeWidth={2.5} />, label: '被害人自愿', note: '被害人自愿和解', color: C.jadeInk},
  ];

  const prohibited = [
    {icon: <Swords size={22} strokeWidth={2.5} />, label: '雇凶伤害'},
    {icon: <Network size={22} strokeWidth={2.5} />, label: '涉黑社会性质组织犯罪'},
    {icon: <Megaphone size={22} strokeWidth={2.5} />, label: '涉寻衅滋事'},
    {icon: <Landmark size={22} strokeWidth={2.5} />, label: '利用职权实施职务犯罪'},
    {icon: <UsersRound size={22} strokeWidth={2.5} />, label: '涉聚众斗殴'},
    {icon: <HeartPulse size={22} strokeWidth={2.5} />, label: '多次故意伤害他人身体'},
    {icon: <History size={22} strokeWidth={2.5} />, label: '5 年以内曾经故意犯罪'},
  ];

  return (
    <PavilionShell accent={C.gold} code="21-1" subtitle="和解前提条件 · 实质条件 · 七类不予和解" title="准入条件 · 谁能和解">
      <div
        data-layout="admission-weight-pan-with-prohibition-strip"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline"
        data-visual-grammar="four-preconditions-must-all-sit-on-the-pan,two-substantive-tracks-open-the-gate,seven-excluded-cases-never-weighed,public-prosecution-only-scope-marker"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Watermark icon={<Scale size={190} strokeWidth={1.6} color={C.gold} />} left={210} top={40} />

        <div data-focal-rule="四件前提全部具备，且落入两档实质条件之一，才进入和解程序" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="prerequisite-pan" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.gold} style={{position: 'absolute', left: 0, top: 0, width: 830, height: 400, padding: '18px 22px', ...enter(frame, 0, 24)}}>
              <PlateTitle color={C.goldInk} icon={<Scale size={28} strokeWidth={2.5} color={C.goldInk} />}>
                和解前提条件 · 四件需齐备
              </PlateTitle>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {prerequisites.map((row, index) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '8px 12px',
                      borderRadius: 8,
                      backgroundColor: index === 0 ? C.indigoSoft : C.jadeSoft,
                      border: `2px solid ${row.color}55`,
                      ...enter(frame, 30 + index * 30, 16),
                    }}
                  >
                    <span style={{color: row.color, flexShrink: 0, display: 'flex'}}>{row.icon}</span>
                    <LabelBlock color={row.color}>{row.label}</LabelBlock>
                    <span style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>{row.note}</span>
                  </div>
                ))}
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="scope-band" style={{position: 'absolute', inset: 0}}>
            <PlateCard
              accent={C.indigo}
              style={{position: 'absolute', left: 0, top: 420, width: 830, height: 140, padding: '16px 22px', ...enter(frame, 160, 18)}}
            >
              <PlateTitle color={C.indigoInk} icon={<ShieldCheck size={26} strokeWidth={2.5} color={C.indigoInk} />} size={25}>
                范围标签
              </PlateTitle>
              <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                自诉案件<ThinUnderline color={C.indigoInk}>可以</ThinUnderline>和解，但<ExternalNegation color={C.cinnabarInk} iconSize={20}>不属于本特别程序</ExternalNegation>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="substantive-tracks" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.jade} style={{position: 'absolute', left: 860, top: 0, width: 940, height: 140, padding: '14px 20px', ...enter(frame, 200, 20)}}>
              <PlateTitle color={C.jadeInk} icon={<Users size={26} strokeWidth={2.5} color={C.jadeInk} />} size={25}>
                实质条件一 · 民间纠纷
              </PlateTitle>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                因民间纠纷引起，涉嫌刑法分则<SoftHighlight color={C.jadeInk}>第四章、第五章</SoftHighlight>规定的犯罪案件，
                <Chip color={C.jade} label="3 年以下" solid />
              </div>
            </PlateCard>
            <PlateCard accent={C.jade} style={{position: 'absolute', left: 860, top: 160, width: 940, height: 140, padding: '14px 20px', ...enter(frame, 240, 20)}}>
              <PlateTitle color={C.jadeInk} icon={<Hourglass size={26} strokeWidth={2.5} color={C.jadeInk} />} size={25}>
                实质条件二 · 过失犯罪
              </PlateTitle>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                除<SoftHighlight color={C.cinnabarInk}>渎职犯罪</SoftHighlight>以外的可能判处
                <Chip color={C.jade} label="7 年以下" solid />
                的<SoftHighlight color={C.jadeInk}>过失犯罪案件</SoftHighlight>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="prohibition-strip" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.cinnabar} style={{position: 'absolute', left: 860, top: 320, width: 940, height: 250, padding: '16px 20px', ...enter(frame, 290, 20)}}>
              <PlateTitle color={C.cinnabarInk} icon={<Ban size={26} strokeWidth={2.6} color={C.cinnabarInk} />} size={26}>
                不予和解 · 七类禁止
              </PlateTitle>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 12}}>
                {prohibited.map((item, index) => (
                  <span
                    key={item.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 12px',
                      borderRadius: 8,
                      border: `2px solid ${C.cinnabarInk}`,
                      backgroundColor: C.cinnabarSoft,
                      color: C.cinnabarInk,
                      fontSize: 22,
                      fontWeight: 900,
                      fontFamily: 'var(--inkloom-animation-label)',
                      whiteSpace: 'nowrap',
                      ...enter(frame, 330 + index * 22, 14),
                    }}
                  >
                    <span style={{display: 'flex', flexShrink: 0}}>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="memory-band" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.gold} style={{position: 'absolute', left: 0, top: 590, width: MAIN_WIDTH, height: 172, padding: '16px 24px', ...enter(frame, 500, 18)}}>
              <div style={{display: 'flex', gap: 26, alignItems: 'stretch'}}>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 14}}>
                  <Users size={30} strokeWidth={2.5} color={C.goldInk} style={{flexShrink: 0}} />
                  <div>
                    <div style={{fontSize: 24, fontWeight: 950, color: C.goldInk, marginBottom: 4}}>民间三四五</div>
                    <div style={{fontSize: 22, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>民间纠纷 · 分则第四、五章 · 3 年以下</div>
                  </div>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 14, borderLeft: `2px dashed ${C.gold}66`, paddingLeft: 26}}>
                  <Hourglass size={30} strokeWidth={2.5} color={C.jadeInk} style={{flexShrink: 0}} />
                  <div>
                    <div style={{fontSize: 24, fontWeight: 950, color: C.jadeInk, marginBottom: 4}}>非渎七以下</div>
                    <div style={{fontSize: 22, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>除渎职外 · 过失犯罪 · 7 年以下</div>
                  </div>
                </div>
                <div style={{flex: 1.1, display: 'flex', alignItems: 'center', gap: 14, borderLeft: `2px dashed ${C.cinnabar}55`, paddingLeft: 26}}>
                  <Stamp size={30} strokeWidth={2.5} color={C.cinnabarInk} style={{flexShrink: 0}} />
                  <div>
                    <div style={{fontSize: 24, fontWeight: 950, color: C.cinnabarInk, marginBottom: 4}}>雇黑寻衅 · 公众多累</div>
                    <div style={{fontSize: 22, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>七类禁止和解</div>
                  </div>
                </div>
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </PavilionShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 三阶段从宽链
// ---------------------------------------------------------------

export const ThreeStageChainScene: React.FC = () => {
  const frame = useCurrentFrame();

  const stages = [
    {
      icon: <Siren size={30} strokeWidth={2.5} color={C.indigoInk} />,
      stage: '侦查阶段',
      organ: '公安机关',
      organIcon: <Siren size={24} strokeWidth={2.5} color={C.indigoInk} />,
      can: '可以向人民检察院提出从宽处理的建议',
      cannot: '不可撤销案件',
      tone: C.indigoInk,
      soft: C.indigoSoft,
      delay: 0,
    },
    {
      icon: <Landmark size={30} strokeWidth={2.5} color={C.jadeInk} />,
      stage: '审查起诉阶段',
      organ: '人民检察院',
      organIcon: <Landmark size={24} strokeWidth={2.5} color={C.jadeInk} />,
      can: '可以向人民法院提出从宽处罚的建议；犯罪情节轻微、不需要判处刑罚的，可以作出不起诉的决定',
      cannot: '从宽建议不是适用和解程序的前提',
      tone: C.jadeInk,
      soft: C.jadeSoft,
      delay: 90,
    },
    {
      icon: <Gavel size={30} strokeWidth={2.5} color={C.goldInk} />,
      stage: '审判阶段',
      organ: '人民法院',
      organIcon: <Gavel size={24} strokeWidth={2.5} color={C.goldInk} />,
      can: '应当对被告人从轻处罚（非监禁刑、减轻处罚、免予刑事处罚）',
      cannot: '不能宣告无罪',
      tone: C.goldInk,
      soft: C.goldSoft,
      delay: 180,
    },
  ];

  return (
    <PavilionShell accent={C.jade} code="21-2" subtitle="侦查 · 审查起诉 · 审判三阶段各自能做什么、不能做什么" title="三阶段从宽链">
      <div
        data-layout="three-stage-leniency-chain-with-terminus-banner"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,external-negation,soft-highlight,stamp"
        data-visual-grammar="police-may-only-recommend-never-withdraw,procuratorate-alone-can-end-the-prosecution,court-must-mitigate-never-acquit,partial-settlement-benefits-only-those-defendants"
        data-focal-channels="connector,contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <Watermark icon={<Scale size={190} strokeWidth={1.6} color={C.jade} />} left={60} top={70} />

        <div data-focal-rule="只有人民检察院可以在和解后以不起诉终结诉讼程序" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="stage-columns" style={{position: 'absolute', inset: 0}}>
            {stages.map((stage, index) => (
              <div key={stage.stage} style={{position: 'absolute', inset: 0}}>
                <PlateCard
                  accent={stage.tone}
                  style={{
                    position: 'absolute',
                    left: index * 615,
                    top: 0,
                    width: 570,
                    height: 440,
                    padding: '18px 22px',
                    borderWidth: 4,
                    ...enter(frame, stage.delay, 26),
                  }}
                >
                  <PlateTitle color={stage.tone} icon={stage.icon}>
                    {stage.stage}
                  </PlateTitle>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '5px 12px',
                      borderRadius: 7,
                      backgroundColor: stage.soft,
                      border: `2px solid ${stage.tone}`,
                      marginBottom: 12,
                    }}
                  >
                    <span style={{display: 'flex', flexShrink: 0}}>{stage.organIcon}</span>
                    <span style={{fontSize: 23, fontWeight: 950, color: stage.tone, fontFamily: 'var(--inkloom-animation-label)'}}>
                      {stage.organ}
                    </span>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10, ...enter(frame, stage.delay + 40, 14)}}>
                      <CheckCircle2 size={24} strokeWidth={2.6} color={C.jadeInk} style={{flexShrink: 0, marginTop: 3}} />
                      <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>{stage.can}</span>
                    </div>
                    <div style={{...enter(frame, stage.delay + 70, 14)}}>
                      <ExternalNegation color={C.cinnabarInk} iconSize={24}>
                        {stage.cannot}
                      </ExternalNegation>
                    </div>
                  </div>
                </PlateCard>
              </div>
            ))}
          </div>

          <div data-final-knowledge="joint-crime-band" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.gold} style={{position: 'absolute', left: 0, top: 470, width: MAIN_WIDTH, height: 130, padding: '14px 24px', ...enter(frame, 280, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <UsersRound size={30} strokeWidth={2.5} color={C.goldInk} style={{flexShrink: 0}} />
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  共同犯罪：部分<SoftHighlight color={C.goldInk}>被告人</SoftHighlight>与被害人达成和解协议的，可以依法对该部分被告人从宽处罚，
                  <ThinUnderline color={C.goldInk}>但应当注意全案的量刑平衡</ThinUnderline>；全案仍能适用本程序
                </div>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="terminus-banner" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.jade} style={{position: 'absolute', left: 0, top: 620, width: MAIN_WIDTH, height: 142, padding: '16px 24px', ...enter(frame, 340, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <FileX size={34} strokeWidth={2.5} color={C.jadeInk} style={{flexShrink: 0}} />
                <div style={{fontSize: 26, lineHeight: 1.45, color: C.ink, fontWeight: 900}}>
                  三阶段比较：<SoftHighlight color={C.jadeInk}>只有人民检察院</SoftHighlight>可以在当事人和解后终结诉讼程序
                </div>
                <StampMark color={C.jadeInk}>不起诉 · 终结诉讼</StampMark>
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </PavilionShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 可谈边界与履行
// ---------------------------------------------------------------

export const NegotiableBoundaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const negotiable = [
    {icon: <HandCoins size={24} strokeWidth={2.5} color={C.jadeInk} />, label: '民事责任', note: '赔偿损失等民事责任事项'},
    {icon: <MessageSquareCheck size={24} strokeWidth={2.5} color={C.jadeInk} />, label: '是否要求、同意从宽处理', note: '被害人一方对从宽的态度'},
  ];

  const offLimits = [
    {icon: <Search size={24} strokeWidth={2.5} color={C.cinnabarInk} />, label: '事实认定'},
    {icon: <FolderSearch size={24} strokeWidth={2.5} color={C.cinnabarInk} />, label: '证据采信'},
    {icon: <BookOpen size={24} strokeWidth={2.5} color={C.cinnabarInk} />, label: '法律适用'},
    {icon: <Scale size={24} strokeWidth={2.5} color={C.cinnabarInk} />, label: '定罪量刑'},
  ];

  return (
    <PavilionShell accent={C.gold} code="21-3" subtitle="能谈什么、不能谈什么，以及协议如何履行" title="可谈边界与履行">
      <div
        data-layout="negotiable-boundary-pair-with-performance-fork"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,external-negation,thin-underline"
        data-visual-grammar="civil-liability-and-leniency-are-negotiable,fact-finding-and-sentencing-stay-off-the-pan,voluntary-legality-review-precedes-the-agreement,immediate-performance-or-mediation-installments"
        data-focal-channels="enclosure,contrast,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Watermark icon={<Handshake size={190} strokeWidth={1.6} color={C.gold} />} left={1180} top={40} />

        <div data-focal-rule="和解只及于民事责任与从宽意愿；事实、证据、法律适用、定罪量刑不在和解之列" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="negotiable-pan" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.jade} style={{position: 'absolute', left: 0, top: 0, width: 620, height: 300, padding: '18px 22px', ...enter(frame, 0, 24)}}>
              <PlateTitle color={C.jadeInk} icon={<Handshake size={28} strokeWidth={2.5} color={C.jadeInk} />}>
                可以和解的内容
              </PlateTitle>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                {negotiable.map((item, index) => (
                  <div key={item.label} style={{display: 'flex', alignItems: 'flex-start', gap: 12, ...enter(frame, 40 + index * 45, 16)}}>
                    <span
                      style={{
                        display: 'flex',
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        borderRadius: 8,
                        backgroundColor: C.jadeSoft,
                        border: `2px solid ${C.jadeInk}55`,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <LabelBlock color={C.jadeInk}>{item.label}</LabelBlock>
                      <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700, marginTop: 5}}>{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="off-limits-pan" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.cinnabar} style={{position: 'absolute', left: 650, top: 0, width: 1150, height: 300, padding: '18px 22px', ...enter(frame, 130, 24)}}>
              <PlateTitle color={C.cinnabarInk} icon={<Ban size={28} strokeWidth={2.6} color={C.cinnabarInk} />}>
                不能和解的内容 · 属于职权范围
              </PlateTitle>
              <div style={{display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 14}}>
                {offLimits.map((item, index) => (
                  <span
                    key={item.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '9px 14px',
                      borderRadius: 8,
                      border: `2px solid ${C.cinnabarInk}`,
                      backgroundColor: C.cinnabarSoft,
                      color: C.cinnabarInk,
                      fontSize: 24,
                      fontWeight: 950,
                      fontFamily: 'var(--inkloom-animation-label)',
                      whiteSpace: 'nowrap',
                      ...enter(frame, 170 + index * 40, 16),
                    }}
                  >
                    <span style={{display: 'flex', flexShrink: 0}}>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
              <ExternalNegation color={C.cinnabarInk} iconSize={24}>
                事实认定、证据采信、法律适用和定罪量刑等，属于公安机关、人民检察院、人民法院的<ThinUnderline color={C.cinnabarInk}>职权范围</ThinUnderline>事宜
              </ExternalNegation>
            </PlateCard>
          </div>

          <div data-final-knowledge="review-band" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.indigo} style={{position: 'absolute', left: 0, top: 330, width: MAIN_WIDTH, height: 130, padding: '14px 24px', ...enter(frame, 330, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <ClipboardCheck size={30} strokeWidth={2.5} color={C.indigoInk} style={{flexShrink: 0}} />
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  公安司法机关：应当听取当事人和其他有关人员的意见，对和解的
                  <Chip color={C.indigo} label="自愿性" /> <Chip color={C.indigo} label="合法性" />
                  进行审查，并<ThinUnderline color={C.indigoInk}>主持制作和解协议书</ThinUnderline>
                </div>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="performance-fork" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.gold} style={{position: 'absolute', left: 0, top: 490, width: 880, height: 270, padding: '18px 24px', ...enter(frame, 400, 20)}}>
              <PlateTitle color={C.goldInk} icon={<Wallet size={28} strokeWidth={2.5} color={C.goldInk} />}>
                履行方式一 · 即时履行
              </PlateTitle>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                和解协议约定的赔偿损失内容，被告人应当在<SoftHighlight color={C.goldInk}>协议签署后即时履行</SoftHighlight>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.inkSoft, fontWeight: 700, marginTop: 10}}>
                简言之：和解的，应当即时履行完毕
              </div>
            </PlateCard>
            <PlateCard accent={C.gold} style={{position: 'absolute', left: 900, top: 490, width: 900, height: 270, padding: '18px 24px', ...enter(frame, 460, 20)}}>
              <PlateTitle color={C.goldInk} icon={<ScrollText size={28} strokeWidth={2.5} color={C.goldInk} />}>
                履行方式二 · 不能即时履行
              </PlateTitle>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                被告人不能即时履行全部赔偿义务的，人民法院应当制作<SoftHighlight color={C.goldInk}>附带民事调解书</SoftHighlight>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 12}}>
                <Signature size={26} strokeWidth={2.5} color={C.jadeInk} style={{flexShrink: 0}} />
                <span style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                  走<Chip color={C.jade} label="调解途径" solid />方<SoftHighlight color={C.jadeInk}>可以分期履行</SoftHighlight>
                </span>
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </PavilionShell>
  );
};

// ---------------------------------------------------------------
// Scene 04 — 代为和解与反悔
// ---------------------------------------------------------------

export const SubstituteRevocationScene: React.FC = () => {
  const frame = useCurrentFrame();

  const victimSide = [
    {icon: <UserRound size={26} strokeWidth={2.5} color={C.indigoInk} />, label: '被害人死亡', body: '其近亲属可以和解', note: '注意这不是“代为”和解'},
    {icon: <ShieldCheck size={26} strokeWidth={2.5} color={C.indigoInk} />, label: '被害人无、限制行为能力', body: '法定代理人、近亲属可以代为和解', note: '需要以被代理人名义进行'},
  ];

  const defendantSide = [
    {icon: <UserRoundPen size={26} strokeWidth={2.5} color={C.jadeInk} />, label: '被告人的近亲属', body: '经被告人同意的，可以代为和解', note: '在押的同样须经被告人本人同意'},
    {icon: <ShieldCheck size={26} strokeWidth={2.5} color={C.jadeInk} />, label: '被告人限制行为能力', body: '由法定代理人代为和解', note: '依代理规则处理'},
    {icon: <MessageSquareCheck size={26} strokeWidth={2.5} color={C.jadeInk} />, label: '赔礼道歉', body: '只能由被告人本人履行', note: '不得由他人代为完成'},
  ];

  return (
    <PavilionShell accent={C.cinnabar} code="21-4" subtitle="谁可以代为和解，以及履行后能否反悔" title="代为和解与反悔">
      <div
        data-layout="substitution-role-pair-with-revocation-stamps"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,external-negation,stamp,soft-highlight"
        data-visual-grammar="victim-death-shifts-settlement-to-close-relatives,defendant-side-substitution-needs-consent,apology-remains-personal-to-the-defendant,performed-agreement-blocks-reversal-with-one-exception"
        data-focal-channels="contrast,enclosure,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Watermark icon={<Handshake size={190} strokeWidth={1.6} color={C.cinnabar} />} left={80} top={30} />

        <div data-focal-rule="代为和解分被害人侧与被告人侧；已全部履行的和解协议原则上不得反悔" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="victim-side" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.indigo} style={{position: 'absolute', left: 0, top: 0, width: 880, height: 430, padding: '18px 22px', ...enter(frame, 0, 24)}}>
              <PlateTitle color={C.indigoInk} icon={<UserRound size={28} strokeWidth={2.5} color={C.indigoInk} />}>
                被害人一侧
              </PlateTitle>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                {victimSide.map((row, index) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      padding: '12px 14px',
                      borderRadius: 8,
                      backgroundColor: C.indigoSoft,
                      border: `2px solid ${C.indigoInk}44`,
                      ...enter(frame, 40 + index * 60, 16),
                    }}
                  >
                    <span style={{display: 'flex', flexShrink: 0, marginTop: 2}}>{row.icon}</span>
                    <div>
                      <LabelBlock color={C.indigoInk}>{row.label}</LabelBlock>
                      <div style={{fontSize: 23, lineHeight: 1.45, color: C.ink, fontWeight: 700, marginTop: 5}}>{row.body}</div>
                      <div style={{fontSize: 22, lineHeight: 1.4, color: C.inkSoft, fontWeight: 700, marginTop: 3}}>{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="defendant-side" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.jade} style={{position: 'absolute', left: 910, top: 0, width: 890, height: 430, padding: '18px 22px', ...enter(frame, 160, 24)}}>
              <PlateTitle color={C.jadeInk} icon={<UserRoundPen size={28} strokeWidth={2.5} color={C.jadeInk} />}>
                被告人一侧
              </PlateTitle>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                {defendantSide.map((row, index) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      padding: '8px 14px',
                      borderRadius: 8,
                      backgroundColor: C.jadeSoft,
                      border: `2px solid ${C.jadeInk}44`,
                      ...enter(frame, 200 + index * 55, 16),
                    }}
                  >
                    <span style={{display: 'flex', flexShrink: 0, marginTop: 2}}>{row.icon}</span>
                    <div>
                      <LabelBlock color={C.jadeInk}>{row.label}</LabelBlock>
                      <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700, marginTop: 3}}>{row.body}</div>
                      <div style={{fontSize: 22, lineHeight: 1.4, color: C.inkSoft, fontWeight: 700, marginTop: 2}}>{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="revocation-stamps" style={{position: 'absolute', inset: 0}}>
            <PlateCard accent={C.cinnabar} style={{position: 'absolute', left: 0, top: 460, width: MAIN_WIDTH, height: 300, padding: '16px 24px', ...enter(frame, 380, 20)}}>
              <PlateTitle color={C.cinnabarInk} icon={<CircleAlert size={28} strokeWidth={2.5} color={C.cinnabarInk} />}>
                和解反悔 · 两种情形与同一例外
              </PlateTitle>
              <div style={{display: 'flex', gap: 22}}>
                <div style={{flex: 1, ...enter(frame, 420, 16)}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                    <Ban size={26} strokeWidth={2.6} color={C.cinnabarInk} style={{flexShrink: 0}} />
                    <span style={{fontSize: 24, fontWeight: 950, color: C.cinnabarInk}}>协议已全部履行后反悔</span>
                  </div>
                  <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                    人民法院<StampMark color={C.cinnabarInk}>不予支持</StampMark>
                  </div>
                </div>
                <div style={{flex: 1, borderLeft: `2px dashed ${C.cinnabarInk}55`, paddingLeft: 22, ...enter(frame, 470, 16)}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                    <XCircle size={26} strokeWidth={2.6} color={C.cinnabarInk} style={{flexShrink: 0}} />
                    <span style={{fontSize: 24, fontWeight: 950, color: C.cinnabarInk}}>已履行又提附带民事诉讼</span>
                  </div>
                  <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                    人民法院<StampMark color={C.cinnabarInk}>不予受理</StampMark>
                  </div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 14, ...enter(frame, 520, 16)}}>
                <TrendingDown size={26} strokeWidth={2.5} color={C.goldInk} style={{flexShrink: 0, marginTop: 2}} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  唯一例外：有证据证明和解<SoftHighlight color={C.goldInk}>违反自愿、合法原则</SoftHighlight>的除外
                </span>
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </PavilionShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const ReconciliationScalePavilion: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.lacquer, width: 1920, height: 1080}}
  >
    <TimelineSequence
      name="01"
      start={SCENES['admission-conditions-scales'].start}
      duration={SCENES['admission-conditions-scales'].duration}
    >
      <AdmissionScalesScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES['three-stage-leniency-chain'].start}
      duration={SCENES['three-stage-leniency-chain'].duration}
    >
      <ThreeStageChainScene />
    </TimelineSequence>
    <TimelineSequence
      name="03"
      start={SCENES['negotiable-boundary-performance'].start}
      duration={SCENES['negotiable-boundary-performance'].duration}
    >
      <NegotiableBoundaryScene />
    </TimelineSequence>
    <TimelineSequence
      name="04"
      start={SCENES['substitute-settlement-withdrawal'].start}
      duration={SCENES['substitute-settlement-withdrawal'].duration}
    >
      <SubstituteRevocationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
