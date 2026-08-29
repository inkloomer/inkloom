import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Ban, BadgeCheck, CheckCircle2, FileText, Gavel, RefreshCw, Shield, ShieldAlert, UserX, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Sentry Rotation Post — 换防哨位 · 刑事回避
const C = {
  post: '#2A2E24',
  postDeep: '#20241C',
  sand: '#EFEAD8',
  sandAlt: '#E5DFC9',
  ink: '#2B2C22',
  inkSoft: '#676A57',
  olive: '#6B7A46',
  oliveInk: '#46522C',
  oliveSoft: '#E2E8D2',
  khaki: '#B99A5B',
  khakiInk: '#776032',
  khakiSoft: '#F0E7D2',
  alert: '#B5452F',
  alertInk: '#742D1E',
  alertSoft: '#F2DDD6',
  pine: '#4E7A5E',
  pineInk: '#33513F',
  pineSoft: '#DFEBE2',
  stone: '#8A8F84',
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

const SentryShell = ({
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
      backgroundColor: C.post,
      backgroundImage:
        'repeating-linear-gradient(135deg, rgba(185,154,91,0.05) 0 2px, transparent 2px 14px),' +
        'radial-gradient(circle at 16% 14%, rgba(107,122,70,0.22), transparent 32%),' +
        'radial-gradient(circle at 86% 86%, rgba(185,154,91,0.14), transparent 34%)',
      backgroundSize: 'auto, auto, auto',
      color: C.sand,
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
          backgroundColor: C.postDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.khaki,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        哨区 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.sand}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(239,234,216,0.66)',
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

const DutyCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.sand,
      border: `3px solid ${C.olive}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(10,12,8,0.45)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const NamePlate = ({
  accent,
  delay,
  frame,
  label,
  onDuty = true,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly frame: number;
  readonly label: string;
  readonly onDuty?: boolean;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      backgroundColor: onDuty ? C.sandAlt : 'transparent',
      border: `3px solid ${onDuty ? accent : C.stone}`,
      borderRadius: 8,
      color: onDuty ? C.ink : C.stone,
      fontSize: 22,
      fontWeight: 900,
      fontFamily: 'var(--inkloom-animation-label)',
      whiteSpace: 'nowrap',
      opacity: interpolate(frame, [delay, delay + 16], [0, 1], clamp),
      textDecoration: onDuty ? 'none' : 'line-through',
      textDecorationColor: `${C.alert}AA`,
    }}
  >
    {label}
  </span>
);

// ---------------------------------------------------------------
// Scene 01 — 谁在哨位上：回避的适用人员
// ---------------------------------------------------------------

export const DutyRosterScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SentryShell accent={C.olive} code="05-1" subtitle="考点1 回避的适用人员 · 谁要换防、谁不换" title="哨位名册">
      <div
        data-layout="dual-roster-wall-with-banner-note"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,external-negation"
        data-visual-grammar="investigation-prosecution-adjudication-staff-stand-duty,clerks-assistants-translators-appraisers-share-the-post,procuratorate-invited-experts-also-rotate,witness-defender-agent-never-rotate"
        data-focal-channels="contrast,enclosure,icon,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="回避适用＝侦查、检察、审判人员及书记员、法助、翻译、鉴定人；证人辩护人诉代不适用" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="on-duty-roster" style={{position: 'absolute', inset: 0}}>
            <DutyCard style={{position: 'absolute', left: 0, top: 60, width: 1080, height: 490, padding: '26px 28px', borderColor: C.olive, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22}}>
                <Shield size={34} strokeWidth={2.5} style={{color: C.oliveInk, flexShrink: 0}} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.oliveInk, lineHeight: 1.2}}>适用回避 · 在哨人员</span>
                <Chip color={C.olive} label="要换防" solid style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div style={{display: 'flex', gap: 12}}>
                  <NamePlate accent={C.olive} delay={20} frame={frame} label="侦查人员" />
                  <NamePlate accent={C.olive} delay={34} frame={frame} label="检察人员" />
                  <NamePlate accent={C.olive} delay={48} frame={frame} label="审判人员" />
                </div>
                <div style={{fontSize: 22, color: C.inkSoft, fontWeight: 700}}>办案主力 · 三大诉讼阶段</div>
                <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                  <NamePlate accent={C.khaki} delay={70} frame={frame} label="书记员" />
                  <NamePlate accent={C.khaki} delay={82} frame={frame} label="法官助理" />
                  <NamePlate accent={C.khaki} delay={94} frame={frame} label="翻译人员" />
                  <NamePlate accent={C.khaki} delay={106} frame={frame} label="鉴定人" />
                </div>
                <div style={{fontSize: 22, color: C.inkSoft, fontWeight: 700}}>同哨辅助 · 一并回避</div>
                <div style={{display: 'flex', gap: 12}}>
                  <NamePlate accent={C.pine} delay={126} frame={frame} label="检察院聘请的专门知识的人" />
                </div>
                <div style={{fontSize: 22, color: C.inkSoft, fontWeight: 700}}>有专门知识的人 · 同样适用</div>
              </div>
            </DutyCard>
          </div>

          <div data-final-knowledge="off-duty-roster" style={{position: 'absolute', inset: 0}}>
            <DutyCard style={{position: 'absolute', left: 1120, top: 60, width: 680, height: 490, padding: '26px 26px', borderColor: C.stone, ...enter(frame, 60, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22}}>
                <UserX size={32} strokeWidth={2.5} style={{color: C.stone, flexShrink: 0}} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.inkSoft, lineHeight: 1.2}}>不适用回避</span>
                <Chip color={C.stone} label="不换防" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20}}>
                <NamePlate accent={C.stone} delay={90} frame={frame} label="证人" onDuty={false} />
                <NamePlate accent={C.stone} delay={102} frame={frame} label="辩护人" onDuty={false} />
                <NamePlate accent={C.stone} delay={114} frame={frame} label="诉讼代理人" onDuty={false} />
              </div>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                三类角色的证言、辩护与代理本就是<ThinUnderline color={C.inkSoft}>单向职责</ThinUnderline>
                ，不存在换防问题。
              </div>
              <div style={{marginTop: 22}}>
                <ExternalNegation color={C.alertInk}>我国无整体回避制度：不能要求某法院法官全体回避</ExternalNegation>
              </div>
            </DutyCard>
          </div>

          <div
            data-final-knowledge="per-person-only-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 600,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 170, 16),
            }}
          >
            <BadgeCheck size={28} strokeWidth={2.5} style={{color: C.khaki, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,234,216,0.88)', fontWeight: 700}}>
              回避只能针对<SoftHighlight color={C.khakiInk}>特定司法人员</SoftHighlight>申请——只能换哨兵，不能换整座哨所
            </span>
          </div>
          <Users size={26} strokeWidth={2.4} style={{position: 'absolute', left: 1044, top: 612, color: 'rgba(239,234,216,0.4)'}} />
        </div>
      </div>
    </SentryShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 三大回避理由
// ---------------------------------------------------------------

export const ReasonBannersScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SentryShell accent={C.alert} code="05-2" subtitle="考点2 回避理由 · 身份不当、违法违规、跨越阶段" title="换防的三面令旗">
      <div
        data-layout="three-banner-columns-with-stage-flow"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="identity-conflict-flags-the-post,rule-breaking-flags-the-post,stage-crossing-flags-the-post,remand-swap-everyone-but-re-appeal-keeps-the-bench"
        data-focal-channels="contrast,enclosure,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="回避理由＝身份不当、违法违规、跨越阶段" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="identity-banner" style={{position: 'absolute', inset: 0}}>
            <DutyCard style={{position: 'absolute', left: 0, top: 24, width: 580, height: 470, padding: '20px 24px', borderColor: C.alert, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 30, fontWeight: 950, color: C.alertInk, marginBottom: 14}}>① 身份不当</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <div>本案<Chip color={C.alert} label="当事人 / 近亲属 / 利害关系" /></div>
                <div>担任过<Chip color={C.alert} label="证人 · 鉴定人 · 辩护人 · 诉代" /></div>
                <div>与辩护人、诉代是<ThinUnderline color={C.alertInk}>近亲属</ThinUnderline></div>
                <div>其他关系<SoftHighlight color={C.alertInk}>可能影响公正</SoftHighlight></div>
              </div>
              <div style={{marginTop: 16, border: `2px dashed ${C.stone}`, borderRadius: 8, padding: '10px 14px', fontSize: 21, lineHeight: 1.45, color: C.inkSoft, fontWeight: 700}}>
                近亲属从宽认定；粉丝、邻居、控制发言节奏都不算利害关系
              </div>
            </DutyCard>
          </div>

          <div data-final-knowledge="misconduct-banner" style={{position: 'absolute', inset: 0}}>
            <DutyCard style={{position: 'absolute', left: 610, top: 24, width: 560, height: 470, padding: '20px 24px', borderColor: C.khaki, ...enter(frame, 60, 26)}}>
              <div style={{fontSize: 30, fontWeight: 950, color: C.khakiInk, marginBottom: 14}}>② 违法违规</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{border: `2px solid ${C.khaki}`, borderRadius: 8, padding: '12px 16px', backgroundColor: C.khakiSoft}}>
                  接受当事人<ThinUnderline color={C.khakiInk}>请客送礼</ThinUnderline>
                </div>
                <div style={{border: `2px solid ${C.khaki}`, borderRadius: 8, padding: '12px 16px', backgroundColor: C.khakiSoft}}>
                  <ThinUnderline color={C.khakiInk}>违反规定会见</ThinUnderline>当事人及其代理人
                </div>
              </div>
              <div style={{marginTop: 16, fontSize: 21, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>
                两项行为一经查实，即应退出本案哨位。
              </div>
            </DutyCard>
          </div>

          <div data-final-knowledge="stage-crossing-banner" style={{position: 'absolute', inset: 0}}>
            <DutyCard style={{position: 'absolute', left: 1200, top: 24, width: 600, height: 470, padding: '20px 24px', borderColor: C.olive, ...enter(frame, 120, 26)}}>
              <div style={{fontSize: 30, fontWeight: 950, color: C.oliveInk, marginBottom: 14}}>③ 跨越阶段 · 程序一次</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                <Chip color={C.olive} label="侦" solid />
                <ArrowRight size={22} strokeWidth={2.6} style={{color: C.olive}} />
                <Chip color={C.olive} label="诉" solid />
                <ArrowRight size={22} strokeWidth={2.6} style={{color: C.olive}} />
                <Chip color={C.olive} label="审" solid />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <div><SoftHighlight color={C.oliveInk}>曾参前，不参后</SoftHighlight>：三阶段相互制约</div>
                <div><ThinUnderline color={C.alertInk}>若发回，人要换</ThinUnderline>：原合议庭全员＋书记员</div>
                <div>再上诉，人不变：二审合议庭无需更换</div>
              </div>
            </DutyCard>
          </div>

          <div
            data-final-knowledge="remand-swap-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 534,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 200, 16),
            }}
          >
            <RefreshCw size={26} strokeWidth={2.5} style={{color: C.alert, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,234,216,0.88)', fontWeight: 700}}>
              口诀：<SoftHighlight color={C.khakiInk}>身份不当、违法违规、跨越阶段</SoftHighlight>；两次二审同一合议庭不违反「曾参前」
            </span>
          </div>
        </div>
      </div>
    </SentryShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 申请、决定与复议
// ---------------------------------------------------------------

export const DecisionReviewScene: React.FC = () => {
  const frame = useCurrentFrame();
  const requestTravel = interpolate(frame, [0, 44], [0, 1], {...clamp, easing: ease});

  return (
    <SentryShell accent={C.khaki} code="05-3" subtitle="考点3·4·5 申请、决定主体与复议 · 组织决老大，老大决其他" title="换防的命令链">
      <div
        data-layout="decision-chain-board-with-review-strip"
        data-visual-anchor="flow-target"
        data-text-treatments="stamp,label-block,thin-underline"
        data-visual-grammar="three-ways-to-raise-recusal-including-orders,each-boss-decided-by-his-committee,pre-decision-investigation-never-pauses,unlawful-reason-claims-get-rejected-without-review"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="组织决老大，老大决其他；非法定理由当庭驳回且不得复议" style={{position: 'absolute', inset: 0}}>
          <div
            data-stateful-source="recusal-request"
            style={{
              position: 'absolute',
              left: interpolate(requestTravel, [0, 1], [20, 200]),
              top: 0,
              opacity: interpolate(frame, [0, 14], [0, 1], clamp),
            }}
          >
            <Chip color={C.khaki} label="回避申请" onDark />
          </div>

          <DutyCard style={{position: 'absolute', left: 0, top: 44, width: 1180, height: 380, padding: '20px 26px', borderColor: C.olive, ...enter(frame, 20, 24)}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
              <Gavel size={32} strokeWidth={2.5} style={{color: C.oliveInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.oliveInk, lineHeight: 1.2}}>谁决定换防</span>
              <Chip color={C.olive} label="组织决老大 · 老大决其他" style={{marginLeft: 'auto'}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 23, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.olive} label="公安负责人" />
                <ArrowRight size={22} strokeWidth={2.6} style={{color: C.olive}} />
                <Chip color={C.alert} label="同级检察院检委会" solid />
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.olive} label="法院院长" />
                <ArrowRight size={22} strokeWidth={2.6} style={{color: C.olive}} />
                <Chip color={C.alert} label="审判委员会" solid />
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.olive} label="检察长" />
                <ArrowRight size={22} strokeWidth={2.6} style={{color: C.olive}} />
                <Chip color={C.alert} label="检察委员会" solid />
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.khaki} label="其他办案人员" />
                <ArrowRight size={22} strokeWidth={2.6} style={{color: C.khaki}} />
                <Chip color={C.khaki} label="本机关负责人" solid />
              </div>
            </div>
          </DutyCard>

          <div data-final-knowledge="trial-prosecutor-split" style={{position: 'absolute', inset: 0}}>
            <DutyCard style={{position: 'absolute', left: 1220, top: 44, width: 580, height: 380, padding: '20px 24px', borderColor: C.alert, ...enter(frame, 80, 24)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.alertInk, marginBottom: 12}}>庭审中申请公诉人回避</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{border: `2px solid ${C.pine}`, backgroundColor: C.pineSoft, borderRadius: 8, padding: '12px 14px'}}>
                  属<ThinUnderline color={C.pineInk}>法定情形</ThinUnderline> → 休庭，通知检察院尽快决定
                </div>
                <div style={{border: `2px solid ${C.alert}`, backgroundColor: C.alertSoft, borderRadius: 8, padding: '12px 14px'}}>
                  <ThinUnderline color={C.alertInk}>非法定情形</ThinUnderline> → 当庭驳回，不得复议
                </div>
              </div>
              <div style={{marginTop: 14, fontSize: 21, color: C.inkSoft, fontWeight: 700}}>法官无权决定检察官回避</div>
            </DutyCard>
          </div>

          <DutyCard style={{position: 'absolute', left: 0, top: 464, width: 1180, height: 226, padding: '18px 26px', borderColor: C.khaki, ...enter(frame, 140, 24)}}>
            <div style={{display: 'flex', gap: 26, alignItems: 'stretch'}}>
              <div style={{flex: 1}}>
                <div style={{fontSize: 25, fontWeight: 950, color: C.khakiInk, marginBottom: 8}} data-final-knowledge="no-pause-rule">决定前 · 不停哨</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  回避决定作出前，侦查人员<SoftHighlight color={C.alertInk}>不停止侦办</SoftHighlight>；已进行活动的效力由决定机关判定
                </div>
              </div>
              <div style={{width: 3, backgroundColor: C.khaki, borderRadius: 2, opacity: 0.5}} />
              <div style={{flex: 1.2}} data-final-knowledge="review-once-rule">
                <div style={{fontSize: 25, fontWeight: 950, color: C.khakiInk, marginBottom: 8}}>驳回后 · 复议一次</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  驳回用「决定」；<ThinUnderline color={C.khakiInk}>当法辩诉</ThinUnderline>可向原决定机关复议一次，被换防的公检法人员无复议权
                </div>
              </div>
            </div>
          </DutyCard>

          <div
            data-stateful-terminal="recusal-request"
            style={{position: 'absolute', left: 1220, top: 464, opacity: interpolate(frame, [160, 190], [0, 1], clamp)}}
          >
            <DutyCard style={{width: 580, height: 226, padding: '18px 24px', borderColor: C.pine, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <CheckCircle2 size={28} strokeWidth={2.6} style={{color: C.pineInk, flexShrink: 0}} />
                <span style={{fontSize: 25, fontWeight: 950, color: C.pineInk}}>三种启动方式</span>
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                <Chip color={C.pine} label="自行回避" />
                <Chip color={C.pine} label="申请回避 · 当法辩诉" />
                <Chip color={C.pine} label="指令回避 · 负责人" />
              </div>
              <div style={{fontSize: 21, lineHeight: 1.45, color: C.inkSoft, fontWeight: 700}}>申请时间：立案后各诉讼阶段</div>
            </DutyCard>
          </div>
          <FileText size={26} strokeWidth={2.4} style={{position: 'absolute', left: 1196, top: 420, color: 'rgba(239,234,216,0.4)'}} />
          <ShieldAlert size={26} strokeWidth={2.4} style={{position: 'absolute', left: 1160, top: 130, color: 'rgba(239,234,216,0.4)'}} />
        </div>
      </div>
    </SentryShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const RecusalSentryRotation: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.post, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['duty-roster-scope'].start} duration={SCENES['duty-roster-scope'].duration}>
      <DutyRosterScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['three-reason-banners'].start} duration={SCENES['three-reason-banners'].duration}>
      <ReasonBannersScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['decision-review-board'].start} duration={SCENES['decision-review-board'].duration}>
      <DecisionReviewScene />
    </TimelineSequence>
  </AbsoluteFill>
);
