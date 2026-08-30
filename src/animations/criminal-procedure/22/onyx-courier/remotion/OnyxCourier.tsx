import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  Ban,
  BookOpen,
  CheckCircle2,
  CircleAlert,
  FileDigit,
  Gavel,
  Globe,
  HandMetal,
  HeartPulse,
  Hourglass,
  Landmark,
  MessageSquareText,
  Plane,
  Scale,
  ScrollText,
  Send,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Swords,
  UserRoundCheck,
  UserRoundX,
  Users,
  XCircle,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Onyx Courier — 缟玛瑙信使 · 缺席审判程序
const C = {
  onyx: '#1A1A1D',
  onyxDeep: '#0F0F11',
  ridge: '#2D2D33',
  silver: '#C8CED6',
  silverSoft: '#E8ECF2',
  silverInk: '#8A919E',
  amber: '#D4A017',
  amberInk: '#9A7309',
  amberSoft: '#F5EDD3',
  azure: '#2E6B8A',
  azureInk: '#1E4A5E',
  azureSoft: '#D4E8F2',
  bone: '#F0EBE3',
  ink: '#2A2524',
  inkSoft: '#6B6370',
  cinnabar: '#B83B3B',
  cinnabarInk: '#8A2828',
  cinnabarSoft: '#F2D6D6',
  jade: '#3A8F72',
  jadeInk: '#26634D',
  jadeSoft: '#D4EDE4',
};

const MAIN_WIDTH = 1800;

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);

const enter = (frame: number, delay: number, dy = 24, dx = 0) => ({
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

const rimBoxStyle = (color: string): React.CSSProperties => ({
  width: 42,
  height: 42,
  borderRadius: 7,
  backgroundColor: `${color}26`,
  border: `2px solid ${color}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const CourierShell = ({
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
      backgroundColor: C.onyxDeep,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(200,206,214,0.05) 0 1px, transparent 1px 150px),' +
        'repeating-linear-gradient(0deg, rgba(200,206,214,0.04) 0 1px, transparent 1px 132px),' +
        'radial-gradient(ellipse at 50% 24%, rgba(46,107,138,0.2), transparent 62%)',
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
          backgroundColor: C.onyx,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.amber,
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
          color: 'rgba(200,206,214,0.66)',
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

const RimChip = ({
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
      backgroundColor: solid ? color : `${color}26`,
      border: `2px solid ${color}`,
      borderRadius: 8,
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

const BoneHighlight = ({
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
      backgroundColor: `${color}33`,
      borderRadius: 4,
      padding: '2px 8px',
      color: C.bone,
      ...style,
    }}
  >
    {children}
  </span>
);

const SilverUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span style={{borderBottom: `2px solid ${color}`, paddingBottom: 2}}>{children}</span>
);

const ExternalNegation = ({
  children,
  color = C.cinnabar,
  iconSize = 22,
}: {
  readonly children: React.ReactNode;
  readonly color?: string;
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

const PlateCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: `${C.onyx}F2`,
      border: `3px solid ${C.ridge}`,
      borderRadius: 8,
      color: C.bone,
      boxShadow: '0 6px 16px rgba(4,5,7,0.55), inset 0 0 0 2px rgba(200,206,214,0.06)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const StampMark = ({text, delay = 0}: {readonly text: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const rot = interpolate(frame, [delay, delay + 12], [-7, -3], {...clamp, easing: ease});
  return (
    <span
      style={{
        ...enter(frame, delay, 8),
        rotate: `${rot}deg`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 14px',
        borderRadius: 3,
        border: `3px solid ${C.cinnabar}`,
        color: C.cinnabar,
        fontSize: 22,
        fontWeight: 900,
        letterSpacing: 3,
        whiteSpace: 'nowrap',
        opacity: 0.9,
      }}
    >
      {text}
    </span>
  );
};

// ---------------------------------------------------------------
// Scene 01 — 适用对象全景
// ---------------------------------------------------------------

export const EligibilityPanoramaScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CourierShell accent={C.amber} code="22-1" subtitle="国恐贪 · 病半年 · 死无罪 · 死再审" title="适用对象全景">
      <div
        data-layout="four-case-quadrant-with-principle-and-mnemonic-bands"
        data-visual-anchor="boundary"
        data-text-treatments="chip,thin-underline,soft-highlight,external-negation"
        data-visual-grammar="four-case-quadrant-splits-absence-eligibility,presence-at-trial-is-the-principle-absence-the-exception,mnemonic-guo-ke-bing-si-si-names-the-four,intermediate-court-for-gkt-basic-court-for-the-rest"
        data-focal-channels="contrast,enclosure,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="被告人到场受审是原则，缺席审判仅是四类例外" style={{position: 'absolute', inset: 0}}>
          <Send
            size={164}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 26, top: 30, color: C.silver, opacity: 0.09}}
          />
          <div data-final-knowledge="case-quadrant" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
              <PlateCard style={{height: 258, padding: '16px 22px', borderColor: `${C.cinnabar}66`, ...enter(frame, 0, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <span style={rimBoxStyle(C.cinnabar)}><Siren size={24} strokeWidth={2.5} color={C.cinnabar} /></span>
                  <RimChip color={C.cinnabar} label="国恐贪" solid />
                  <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 900, color: C.cinnabar}}>中院一审</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 6}}>
                  <SilverUnderline color={C.cinnabar}>重国恐 · 在境外 · 及时审 · 高检核</SilverUnderline>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.silverInk, fontWeight: 700, marginBottom: 6}}>
                  最高人民检察院核准（非最高法）
                </div>
                <ExternalNegation iconSize={20}>只限贪污贿赂，不含渎职</ExternalNegation>
              </PlateCard>
              <PlateCard style={{height: 258, padding: '16px 22px', borderColor: `${C.jade}66`, ...enter(frame, 40, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <span style={rimBoxStyle(C.jade)}><HeartPulse size={24} strokeWidth={2.5} color={C.jade} /></span>
                  <RimChip color={C.jade} label="病半年" solid />
                  <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 900, color: C.jade}}>基层也可审</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 6}}>
                  因病无法出庭 <SilverUnderline color={C.jade}>连续六个月以上</SilverUnderline>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.silverInk, fontWeight: 700, marginBottom: 6}}>
                  审理中康复 → 终止缺席，转普通程序
                </div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.silverInk, fontWeight: 700}}>
                  生效后康复提异议 → 撤销原判重新审理
                </div>
              </PlateCard>
              <PlateCard style={{height: 258, padding: '16px 22px', borderColor: `${C.azure}66`, ...enter(frame, 80, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <span style={rimBoxStyle(C.azure)}><UserRoundX size={24} strokeWidth={2.5} color={C.azure} /></span>
                  <RimChip color={C.azure} label="死无罪" solid />
                  <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 900, color: C.azure}}>基层也可审</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 6}}>
                  审理过程中被告人死亡，法院应当裁定终止审理
                </div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.silverInk, fontWeight: 700}}>
                  根据已查明的事实证据能确认无罪的，应当<BoneHighlight color={C.jade}>判决宣告无罪</BoneHighlight>
                </div>
              </PlateCard>
              <PlateCard style={{height: 258, padding: '16px 22px', borderColor: `${C.amber}66`, ...enter(frame, 120, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                  <span style={rimBoxStyle(C.amber)}><ScrollText size={24} strokeWidth={2.5} color={C.amber} /></span>
                  <RimChip color={C.amber} label="死再审" solid />
                  <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 900, color: C.amber}}>基层也可审</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 6}}>
                  审判监督程序重新审判 + 被告人死亡
                </div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.silverInk, fontWeight: 700}}>
                  由原审法院按再审程序缺席审理
                </div>
              </PlateCard>
            </div>
          </div>

          <div data-final-knowledge="principle-banner" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 0, top: 540, width: MAIN_WIDTH, height: 92, padding: '14px 24px', borderLeft: `5px solid ${C.amber}`, ...enter(frame, 190, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <CircleAlert size={26} strokeWidth={2.5} color={C.amber} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700}}>
                  原则：<BoneHighlight color={C.amber}>被告人到场受审</BoneHighlight>；缺席审判仅是<ExternalNegation iconSize={20}>例外</ExternalNegation>
                </span>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="mnemonic-band" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 0, top: 652, width: MAIN_WIDTH, height: 92, padding: '14px 24px', ...enter(frame, 250, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <BookOpen size={26} strokeWidth={2.5} color={C.amberInk} />
                <span style={{fontSize: 22, color: C.silverInk, fontWeight: 900}}>口诀记忆</span>
                <span style={{fontSize: 23, color: C.bone, fontWeight: 700}}>
                  <SilverUnderline color={C.cinnabar}>国恐贪</SilverUnderline> ；<SilverUnderline color={C.jade}>病半年</SilverUnderline> ；<SilverUnderline color={C.azure}>死无罪</SilverUnderline> ；<SilverUnderline color={C.amber}>死再审</SilverUnderline>
                </span>
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </CourierShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 国恐贪四条件详解
// ---------------------------------------------------------------

export const StateTerrorCorruptionScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CourierShell accent={C.cinnabar} code="22-2" subtitle="重国恐 · 在境外 · 及时审 · 高检核" title="国恐贪四条件详解">
      <div
        data-layout="four-condition-row-with-scope-panels-and-approval-stamp"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,label-block,external-negation,soft-highlight"
        data-visual-grammar="four-conditions-need-grave-crime-abroad-timely-trial-and-procuratorate-approval,scope-limits-confession-cases-only-never-misconduct,partial-crimes-and-abroad-accomplices-may-still-apply,approval-rests-with-supreme-procuratorate-not-court"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="国恐贪四条件缺一不可；核准机关是最高人民检察院，不是最高人民法院" style={{position: 'absolute', inset: 0}}>
          <Landmark
            size={162}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 30, top: 26, color: C.silver, opacity: 0.09}}
          />
          <div data-final-knowledge="condition-row" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 14}}>
              {[
                {icon: ShieldAlert, label: '重国恐', desc: '重大国家安全犯罪、恐怖活动犯罪案件', color: C.cinnabar, delay: 0},
                {icon: Globe, label: '在境外', desc: '犯罪嫌疑人、被告人在境外', color: C.azure, delay: 40},
                {icon: Hourglass, label: '及时审', desc: '需要及时进行审判', color: C.amber, delay: 80},
                {icon: Landmark, label: '高检核', desc: '最高人民检察院核准', color: C.jade, delay: 120},
              ].map((cond) => (
                <PlateCard key={cond.label} style={{flex: 1, height: 208, padding: '16px 18px', borderColor: `${cond.color}55`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, ...enter(frame, cond.delay, 22)}}>
                  <span style={rimBoxStyle(cond.color)}><cond.icon size={26} strokeWidth={2.5} color={cond.color} /></span>
                  <RimChip color={cond.color} label={cond.label} solid />
                  <span style={{fontSize: 22, lineHeight: 1.45, color: C.silverInk, textAlign: 'center', fontWeight: 700}}>{cond.desc}</span>
                </PlateCard>
              ))}
            </div>
          </div>

          <div data-final-knowledge="scope-panels" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 236, width: MAIN_WIDTH, display: 'flex', gap: 20}}>
              <PlateCard style={{flex: 1, height: 236, padding: '16px 24px', borderColor: `${C.cinnabar}44`, ...enter(frame, 180, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <Ban size={24} strokeWidth={2.5} color={C.cinnabar} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.cinnabar}}>范围限制</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.jade)}><FileDigit size={22} strokeWidth={2.5} color={C.jade} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 5}}>
                      <SilverUnderline color={C.jade}>贪污贿赂</SilverUnderline>可缺席——含刑法分则第八章及依照第八章定罪处罚的犯罪
                    </span>
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.cinnabar)}><XCircle size={22} strokeWidth={2.5} color={C.cinnabar} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 5}}>
                      <ExternalNegation iconSize={20}>渎职不可缺席</ExternalNegation>——不得适用缺席审判程序
                    </span>
                  </div>
                </div>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 236, padding: '16px 24px', borderColor: `${C.azure}44`, ...enter(frame, 240, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <Users size={24} strokeWidth={2.5} color={C.azure} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.azure}}>数罪 / 共犯规则</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.jade)}><ScrollText size={22} strokeWidth={2.5} color={C.jade} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 5}}>
                      数罪部分符合 → 可<BoneHighlight color={C.jade}>就该部分</BoneHighlight>适用缺席审判
                    </span>
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.amber)}><Plane size={22} strokeWidth={2.5} color={C.amber} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 5}}>
                      共犯部分人在境外 → 可对该部分人适用，<BoneHighlight color={C.cinnabar}>境内者不可</BoneHighlight>
                    </span>
                  </div>
                </div>
              </PlateCard>
            </div>
          </div>

          <div data-final-knowledge="approval-stamp" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 0, top: 496, width: MAIN_WIDTH, height: 108, padding: '14px 24px', borderColor: `${C.jade}55`, ...enter(frame, 330, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18}}>
                <StampMark text="高检核 ≠ 最高法" delay={350} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700}}>
                  核准机关是<BoneHighlight color={C.jade}>最高人民检察院</BoneHighlight>，不是最高人民法院
                </span>
              </div>
            </PlateCard>
            <div style={{position: 'absolute', left: 0, top: 624, width: MAIN_WIDTH, display: 'flex', gap: 20, ...enter(frame, 420, 18)}}>
              <PlateCard style={{flex: 1, height: 84, padding: '12px 22px', borderColor: `${C.cinnabar}55`, display: 'flex', alignItems: 'center', gap: 12}}>
                <RimChip color={C.cinnabar} label="国恐贪" />
                <span style={{fontSize: 22, color: C.bone, fontWeight: 700}}>→ 中级人民法院一审</span>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 84, padding: '12px 22px', borderColor: `${C.jade}55`, display: 'flex', alignItems: 'center', gap: 12}}>
                <RimChip color={C.jade} label="病半年 / 死无罪 / 死再审" />
                <span style={{fontSize: 22, color: C.bone, fontWeight: 700}}>→ 基层法院也可以审理</span>
              </PlateCard>
            </div>
          </div>
        </div>
      </div>
    </CourierShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 程序保障链
// ---------------------------------------------------------------

export const ProceduralSafeguardsChainScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CourierShell accent={C.azure} code="22-3" subtitle="送达 → 辩护 → 近亲属 → 一审 → 上诉" title="程序保障链">
      <div
        data-layout="five-step-flow-with-restriction-panels"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,external-negation,thin-underline"
        data-visual-grammar="service-reaches-the-defendant-abroad-before-the-hearing,defense-counsel-notice-and-legal-aid-protect-the-defense,close-kin-participate-without-becoming-defense-counsel,trial-and-appeal-follow-the-first-instance-pattern"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="缺席不等于减损权利：送达、辩护、近亲属参加、上诉一样不少" style={{position: 'absolute', inset: 0}}>
          <ScrollText
            size={160}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 28, top: 300, color: C.silver, opacity: 0.09}}
          />
          <div data-final-knowledge="flow-chain" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 12}}>
              <PlateCard style={{flex: 1, height: 330, padding: '14px 16px', borderColor: `${C.azure}55`, ...enter(frame, 0, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10}}>
                  <Send size={22} strokeWidth={2.5} color={C.azure} />
                  <span style={{fontSize: 22, fontWeight: 950, color: C.azure}}>送达</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 8}}>
                  <SilverUnderline color={C.azure}>司法协助</SilverUnderline>或所在地法律允许方式
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.silverInk, fontWeight: 700}}>
                  传票、起诉书副本未按要求到案 → 不来也审
                </div>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 330, padding: '14px 16px', borderColor: `${C.jade}55`, ...enter(frame, 40, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10}}>
                  <ShieldCheck size={22} strokeWidth={2.5} color={C.jade} />
                  <span style={{fontSize: 22, fontWeight: 950, color: C.jade}}>辩护权保障</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 8}}>
                  检察院<BoneHighlight color={C.jade}>应当及时告知</BoneHighlight>委托辩护权
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.silverInk, fontWeight: 700}}>
                  未委托 → 应当通知法律援助机构指派律师
                </div>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 330, padding: '14px 16px', borderColor: `${C.amber}55`, ...enter(frame, 80, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10}}>
                  <Users size={22} strokeWidth={2.5} color={C.amber} />
                  <span style={{fontSize: 22, fontWeight: 950, color: C.amber}}>近亲属参加</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 8}}>
                  收到起诉书副本后、一审开庭前提出
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.silverInk, fontWeight: 700}}>
                  推选一至二人参加；开庭后无权参加
                </div>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 330, padding: '14px 16px', borderColor: `${C.silver}55`, ...enter(frame, 120, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10}}>
                  <Gavel size={22} strokeWidth={2.5} color={C.silver} />
                  <span style={{fontSize: 22, fontWeight: 950, color: C.silver}}>一审程序</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 8}}>
                  参照第一审普通程序；有罪判决须证据确实充分
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.silverInk, fontWeight: 700}}>
                  罪名不符 → 终止审理；财产可一并处理
                </div>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 330, padding: '14px 16px', borderColor: `${C.cinnabar}55`, ...enter(frame, 160, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10}}>
                  <Scale size={22} strokeWidth={2.5} color={C.cinnabar} />
                  <span style={{fontSize: 22, fontWeight: 950, color: C.cinnabar}}>上诉抗诉</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, marginBottom: 8}}>
                  被告人、近亲属<BoneHighlight color={C.cinnabar}>有权上诉</BoneHighlight>；检察院应当抗诉
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.silverInk, fontWeight: 700}}>
                  辩护人经被告人同意可以提出上诉
                </div>
              </PlateCard>
            </div>
          </div>

          <div data-final-knowledge="kin-limits-panel" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 0, top: 360, width: 880, height: 300, padding: '16px 24px', borderColor: `${C.cinnabar}44`, ...enter(frame, 220, 22)}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.cinnabar, marginBottom: 12}}>近亲属权利边界</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={rimBoxStyle(C.jade)}><CheckCircle2 size={22} strokeWidth={2.5} color={C.jade} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                    可以发表意见、出示证据，申请通知证人鉴定人出庭
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={rimBoxStyle(C.cinnabar)}><Ban size={22} strokeWidth={2.5} color={C.cinnabar} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                    <ExternalNegation iconSize={20}>不是自行辩护</ExternalNegation>——只是代为维护被告人合法权益
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={rimBoxStyle(C.cinnabar)}><XCircle size={22} strokeWidth={2.5} color={C.cinnabar} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                    <ExternalNegation iconSize={20}>无最后陈述环节</ExternalNegation>——最后陈述权专属被告人本人
                  </span>
                </div>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="trial-anyway-panel" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 920, top: 360, width: 880, height: 300, padding: '16px 24px', borderColor: `${C.azure}44`, ...enter(frame, 290, 22)}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.azure, marginBottom: 12}}>不来也审原则</div>
              <div style={{fontSize: 22, lineHeight: 1.7, color: C.bone, fontWeight: 700}}>
                传票和起诉书副本送达后，被告人<BoneHighlight color={C.azure}>未按要求到案</BoneHighlight>的，
                人民法院<SilverUnderline color={C.jade}>应当开庭审理</SilverUnderline>，
                依法作出判决，并对违法所得及其他涉案财产一并作出处理。
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </CourierShell>
  );
};

// ---------------------------------------------------------------
// Scene 04 — 到案后与没收衔接
// ---------------------------------------------------------------

export const AppearanceConfiscationLinkScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <CourierShell accent={C.jade} code="22-4" subtitle="审理中到案 · 生效后到案 · 没收程序衔接" title="到案后与没收衔接">
      <div
        data-layout="appearance-split-with-confiscation-bridge-and-terminus-banner"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,soft-highlight,external-negation"
        data-visual-grammar="mid-trial-appearance-terminates-and-retries,post-effective-appearance-executes-then-objection,confiscation-and-absence-are-independent-special-procedures,two-way-bridging-without-prerequisite"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="两个独立特别程序：互不前置，但可双向衔接" style={{position: 'absolute', inset: 0}}>
          <Swords
            size={162}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 28, top: 24, color: C.silver, opacity: 0.09}}
          />
          <div data-final-knowledge="appearance-split" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 20}}>
              <PlateCard style={{flex: 1, height: 302, padding: '16px 24px', borderColor: `${C.jade}66`, ...enter(frame, 0, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <span style={rimBoxStyle(C.jade)}><UserRoundCheck size={24} strokeWidth={2.5} color={C.jade} /></span>
                  <RimChip color={C.jade} label="审理中到案" solid />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.silver)}><Siren size={22} strokeWidth={2.5} color={C.silver} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                      <SilverUnderline color={C.jade}>公安机关</SilverUnderline>应当立即通知人民检察院、人民法院
                    </span>
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.azure)}><Landmark size={22} strokeWidth={2.5} color={C.azure} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                      裁定<BoneHighlight color={C.cinnabar}>终止审理</BoneHighlight>——检察院依法提起公诉的，人民法院应当重新审理
                    </span>
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.amber)}><Gavel size={22} strokeWidth={2.5} color={C.amber} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                      管辖：一般由同一人民法院审理；指定管辖的应重新指定
                    </span>
                  </div>
                </div>
              </PlateCard>
              <PlateCard style={{flex: 1, height: 302, padding: '16px 24px', borderColor: `${C.cinnabar}66`, ...enter(frame, 60, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <span style={rimBoxStyle(C.cinnabar)}><HandMetal size={24} strokeWidth={2.5} color={C.cinnabar} /></span>
                  <RimChip color={C.cinnabar} label="生效后到案" solid />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.silver)}><Gavel size={22} strokeWidth={2.5} color={C.silver} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                      判决裁定生效后到案 → 先<BoneHighlight color={C.jade}>交付执行刑罚</BoneHighlight>
                    </span>
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.azure)}><MessageSquareText size={22} strokeWidth={2.5} color={C.azure} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                      告知异议权：收到异议告知后<SilverUnderline color={C.azure}>十日以内</SilverUnderline>可提出异议
                    </span>
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                    <span style={rimBoxStyle(C.cinnabar)}><ScrollText size={22} strokeWidth={2.5} color={C.cinnabar} /></span>
                    <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700, paddingTop: 4}}>
                      异议后果：撤销原判裁定 → 检察院公诉 → 重新审理；财产处理错误的应返还赔偿
                    </span>
                  </div>
                </div>
              </PlateCard>
            </div>
          </div>

          <div data-final-knowledge="confiscation-bridge" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 0, top: 330, width: MAIN_WIDTH, height: 226, padding: '16px 24px', borderColor: `${C.amber}55`, ...enter(frame, 150, 22)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Swords size={24} strokeWidth={2.5} color={C.amber} />
                <span style={{fontSize: 24, fontWeight: 950, color: C.amber}}>与没收程序的衔接</span>
              </div>
              <div style={{display: 'flex', gap: 14}}>
                <div style={{flex: 1, padding: '12px 16px', borderRadius: 6, background: `${C.ridge}88`, ...enter(frame, 190, 14)}}>
                  <div style={{marginBottom: 6}}>
                    <ExternalNegation iconSize={20}>不是前置程序</ExternalNegation>
                  </div>
                  <div style={{fontSize: 22, lineHeight: 1.55, color: C.silverInk, fontWeight: 700}}>
                    没收不是缺席的前置程序——事实清楚、证据充分的，可直接提起缺席公诉
                  </div>
                </div>
                <div style={{flex: 1, padding: '12px 16px', borderRadius: 6, background: `${C.jade}14`, ...enter(frame, 230, 14)}}>
                  <div style={{fontSize: 22, fontWeight: 950, color: C.jade, marginBottom: 6}}>缺席 → 可启动没收</div>
                  <div style={{fontSize: 22, lineHeight: 1.55, color: C.bone, fontWeight: 700}}>
                    缺席撤诉或死亡 → 检察院可<BoneHighlight color={C.jade}>另行提出没收违法所得申请</BoneHighlight>
                  </div>
                </div>
                <div style={{flex: 1, padding: '12px 16px', borderRadius: 6, background: `${C.azure}14`, ...enter(frame, 270, 14)}}>
                  <div style={{fontSize: 22, fontWeight: 950, color: C.azure, marginBottom: 6}}>没收 → 可启动缺席</div>
                  <div style={{fontSize: 22, lineHeight: 1.55, color: C.bone, fontWeight: 700}}>
                    没收裁定后认为仍有必要的，可另行依照刑诉法提起公诉进行缺席审判
                  </div>
                </div>
              </div>
            </PlateCard>
          </div>

          <div data-final-knowledge="terminus-banner" style={{position: 'absolute', inset: 0}}>
            <PlateCard style={{position: 'absolute', left: 0, top: 580, width: MAIN_WIDTH, height: 100, padding: '14px 24px', backgroundImage: `linear-gradient(90deg, ${C.ridge}, ${C.onyx})`, ...enter(frame, 340, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18}}>
                <StampMark text="双向独立" delay={370} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.bone, fontWeight: 700}}>
                  缺席审判与违法所得没收程序是<BoneHighlight color={C.amber}>两个独立的特别程序</BoneHighlight>，互不前置但可双向衔接
                </span>
              </div>
            </PlateCard>
          </div>
        </div>
      </div>
    </CourierShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------

export const OnyxCourier: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.onyxDeep, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['eligibility-panorama'].start} duration={SCENES['eligibility-panorama'].duration}>
      <EligibilityPanoramaScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['state-terror-corruption-deep-dive'].start} duration={SCENES['state-terror-corruption-deep-dive'].duration}>
      <StateTerrorCorruptionScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['procedural-safeguards-chain'].start} duration={SCENES['procedural-safeguards-chain'].duration}>
      <ProceduralSafeguardsChainScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES['appearance-confiscation-link'].start} duration={SCENES['appearance-confiscation-link'].duration}>
      <AppearanceConfiscationLinkScene />
    </TimelineSequence>
  </AbsoluteFill>
);