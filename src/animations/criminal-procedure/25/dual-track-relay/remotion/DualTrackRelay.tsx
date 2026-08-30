import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  ArrowLeftRight,
  ArrowUp,
  Ban,
  BellRing,
  Building2,
  CalendarCheck,
  CircleAlert,
  ClipboardList,
  Coins,
  FolderOpen,
  Landmark,
  Link2,
  Lock,
  LockKeyhole,
  Megaphone,
  Network,
  PlaneLanding,
  Radar,
  Repeat,
  Route,
  Search,
  Shield,
  Siren,
  Timer,
  UsersRound,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Dual Track Relay — 双轨联络站 · 监察法易考知识点
const C = {
  rail: '#1F2530',
  railDeep: '#171C26',
  waybill: '#EFE7D4',
  waybillAlt: '#E3DCC8',
  ink: '#262C36',
  inkSoft: '#6B7280',
  brass: '#C79A45',
  brassInk: '#7A5E22',
  signal: '#C25B4E',
  signalInk: '#7E352C',
  dispatch: '#4E8FA6',
  dispatchInk: '#2E5B6D',
  moss: '#6B8F4E',
  mossInk: '#44622E',
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

const stampBoxStyle = (color: string): React.CSSProperties => ({
  width: 42,
  height: 42,
  borderRadius: 4,
  backgroundColor: `${color}24`,
  border: `2px solid ${color}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const RelayShell = ({
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
      backgroundColor: C.rail,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(239,231,212,0.05) 0 3px, transparent 3px 118px),' +
        'repeating-linear-gradient(90deg, rgba(239,231,212,0.028) 0 2px, transparent 2px 92px),' +
        'radial-gradient(circle at 18% 14%, rgba(199,154,69,0.15), transparent 34%),' +
        'radial-gradient(circle at 84% 88%, rgba(78,143,166,0.14), transparent 34%)',
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
          backgroundColor: C.railDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.brass,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        UNIT {code}
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
          color: 'rgba(239,231,212,0.66)',
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

const RouteChip = ({
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
      borderLeft: `6px solid ${color}`,
      borderRadius: 2,
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

const BoxedMark = ({
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
      border: `1px solid ${color}88`,
      borderRadius: 3,
      padding: '2px 8px',
      ...style,
    }}
  >
    {children}
  </span>
);

const RouteUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
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
      borderRight: `3px solid ${color}`,
      paddingRight: 11,
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
      border: `3px solid ${C.brass}`,
      borderRadius: 3,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,11,16,0.5), inset 0 0 0 2px rgba(199,154,69,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const PostBlock = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 14px',
      backgroundColor: color,
      color: '#FFFFFF',
      borderRadius: 2,
      fontSize: 22,
      fontWeight: 950,
      letterSpacing: 4,
      fontFamily: 'var(--inkloom-animation-label)',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

// ---------------------------------------------------------------
// Scene 01 — 立案调查与从宽衔接
// ---------------------------------------------------------------

export const FilingLeniencyScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <RelayShell accent={C.brass} code="25-1" subtitle="立案无需上级批准 · 认罪认罚从宽 · 衔接审查起诉" title="立案调查与从宽衔接">
      <div
        data-layout="filing-desk-with-leniency-and-handover-bands"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight"
        data-visual-grammar="preliminary-verification-leads-to-filing-without-upper-approval,serious-duty-crime-announces-to-family-and-public,confession-leniency-needs-collective-study-and-upper-approval,detention-converts-to-custody-while-supplement-investigation-runs-twice"
        data-focal-channels="connector,spatial,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="立案无需批准；从宽需集体研究＋报上一级批准" style={{position: 'absolute', inset: 0}}>
          <Network
            size={172}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 40, top: 24, color: C.brass, opacity: 0.11}}
          />
          <div data-final-knowledge="filing-card" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 6, width: 880, height: 356, padding: '18px 24px', borderColor: C.brass, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{marginBottom: 12}}><PostBlock color={C.brassInk}>立案程序</PostBlock></div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.brass)}><FolderOpen size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    经<RouteUnderline color={C.brassInk}>初步核实</RouteUnderline>，涉嫌职务违法/犯罪需追责 → 监察机关办理立案
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.brass)}><Megaphone size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    严重职务违法或职务犯罪 → 通知家属＋向社会<BoxedMark color={C.mossInk}>公开发布</BoxedMark>
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.signal)}><Ban size={24} strokeWidth={2.5} color={C.signalInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    调查阶段无权委托辩护人、<BoxedMark color={C.signalInk}>无法律援助</BoxedMark>
                  </span>
                </div>
                <div><RouteChip color={C.signalInk} label="无需报上一级批准" /></div>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="leniency-card" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 920, top: 6, width: 880, height: 356, padding: '18px 24px', borderColor: C.moss, borderWidth: 4, ...enter(frame, 70, 26)}}>
              <div style={{marginBottom: 12}}><PostBlock color={C.mossInk}>认罪认罚从宽</PostBlock></div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12}}>
                <RouteChip color={C.mossInk} label="自动投案" />
                <RouteChip color={C.mossInk} label="积极配合" />
                <RouteChip color={C.mossInk} label="积极退赃" />
                <RouteChip color={C.mossInk} label="重大立功" />
              </div>
              <div style={{display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12}}>
                <span style={stampBoxStyle(C.moss)}><UsersRound size={24} strokeWidth={2.5} color={C.mossInk} /></span>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                  认罪认罚＋上述情形 → <BoxedMark color={C.signalInk}>领导集体研究</BoxedMark>＋<BoxedMark color={C.signalInk}>报上一级批准</BoxedMark>
                </span>
              </div>
              <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <span style={stampBoxStyle(C.moss)}><ArrowUp size={24} strokeWidth={2.5} color={C.mossInk} /></span>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                  移送检察院时可提<RouteUnderline color={C.mossInk}>从宽处罚建议</RouteUnderline>
                </span>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="handover-card" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 386, width: MAIN_WIDTH, height: 272, padding: '18px 24px', borderColor: C.dispatch, ...enter(frame, 180, 22)}}>
              <div style={{marginBottom: 12}}><PostBlock color={C.dispatchInk}>衔接处理</PostBlock></div>
              <div style={{display: 'flex', gap: 20}}>
                <div style={{flex: 1, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.dispatch)}><Landmark size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                    <RouteUnderline color={C.dispatchInk}>先行拘留</RouteUnderline>：移送起诉已留置 → 检察院作拘留，交公安机关执行，执行后自动解除
                  </span>
                </div>
                <div style={{flex: 1, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.dispatch)}><Repeat size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                    <RouteUnderline color={C.dispatchInk}>补充调查</RouteUnderline>：退回或自行侦查，<BoxedMark color={C.signalInk}>1 个月内</BoxedMark>、二次为限
                  </span>
                </div>
                <div style={{flex: 1, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.dispatch)}><Link2 size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                    <RouteUnderline color={C.dispatchInk}>不服救济</RouteUnderline>：不起诉有错 → 向上一级检察院提复议
                  </span>
                </div>
              </div>
            </WaybillCard>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 四项强制措施
// ---------------------------------------------------------------

export const FourMeasuresScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <RelayShell accent={C.dispatch} code="25-2" subtitle="强制到案 · 责令候查 · 管护 · 留置" title="四项监察强制措施">
      <div
        data-layout="four-measure-cards-with-approval-spine"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="compulsory-appearance-caps-twelve-or-twenty-four-hours,ordered-awaiting-investigation-lasts-up-to-twelve-months,custody-care-decides-within-seven-days-plus-three,liuzhi-detention-requires-collective-study-and-upper-approval"
        data-focal-channels="contrast,enclosure,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="到案/候查/管护仅需负责人批准；留置必须集体研究＋上一级批准" style={{position: 'absolute', inset: 0}}>
          <LockKeyhole
            size={170}
            strokeWidth={1.4}
            style={{position: 'absolute', left: 815, top: 330, color: C.dispatch, opacity: 0.1}}
          />
          <div data-final-knowledge="measure-cards" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', gap: 16}}>
              <WaybillCard style={{flex: 1, height: 470, padding: '18px 20px', borderColor: C.dispatch, borderWidth: 4, display: 'flex', flexDirection: 'column', ...enter(frame, 0, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                  <span style={stampBoxStyle(C.dispatchInk)}><Siren size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 26, fontWeight: 950, color: C.dispatchInk}}>强制到案</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center'}}>
                  <div><RouteChip color={C.dispatchInk} label="主要负责人批准" /></div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>≤12 小时；需管护/留置 → ≤24 小时</div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>不得以连续强制到案变相拘禁</div>
                </div>
              </WaybillCard>
              <WaybillCard style={{flex: 1, height: 470, padding: '18px 20px', borderColor: C.moss, borderWidth: 4, display: 'flex', flexDirection: 'column', ...enter(frame, 50, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                  <span style={stampBoxStyle(C.mossInk)}><CalendarCheck size={24} strokeWidth={2.5} color={C.mossInk} /></span>
                  <span style={{fontSize: 26, fontWeight: 950, color: C.mossInk}}>责令候查</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center'}}>
                  <div><RouteChip color={C.mossInk} label="主要负责人批准" /></div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>最长 <RouteUnderline color={C.mossInk}>12 个月</RouteUnderline></div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>违反义务情节严重 → 可留置</div>
                </div>
              </WaybillCard>
              <WaybillCard style={{flex: 1, height: 470, padding: '18px 20px', borderColor: C.brass, borderWidth: 4, display: 'flex', flexDirection: 'column', ...enter(frame, 100, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                  <span style={stampBoxStyle(C.brassInk)}><ClipboardList size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 26, fontWeight: 950, color: C.brassInk}}>管护</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center'}}>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>未被留置＋逃跑自杀等重大风险</div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>7 日内决定留置或解除，可延 1-3 日</div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>管护最长 <BoxedMark color={C.signalInk}>10 日</BoxedMark>（7+3），非 37 日</div>
                </div>
              </WaybillCard>
              <WaybillCard style={{flex: 1, height: 470, padding: '18px 20px', borderColor: C.signal, borderWidth: 4, display: 'flex', flexDirection: 'column', ...enter(frame, 150, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
                  <span style={stampBoxStyle(C.signalInk)}><Lock size={24} strokeWidth={2.5} color={C.signalInk} /></span>
                  <span style={{fontSize: 26, fontWeight: 950, color: C.signalInk}}>留置</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center'}}>
                  <div><RouteChip color={C.signalInk} label="集体研究＋报上一级批准" /></div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>一般 3 个月，可延 1 次 3 个月</div>
                  <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700, borderTop: '2px dashed rgba(38,44,54,0.18)', paddingTop: 10}}>留置 1 日折抵管制 2 日</div>
                </div>
              </WaybillCard>
            </div>
          </div>

          <div data-final-knowledge="approval-spine" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 502, width: MAIN_WIDTH, height: 132, padding: '16px 24px', borderColor: C.signal, ...enter(frame, 240, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8}}>
                <CircleAlert size={28} strokeWidth={2.5} style={{color: C.signalInk, flexShrink: 0}} />
                <span style={{fontSize: 24, fontWeight: 950, color: C.signalInk}}>批准对比</span>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  强制到案、责令候查、管护仅需<BoxedMark color={C.mossInk}>主要负责人批准</BoxedMark>
                </span>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <RouteUnderline color={C.signalInk}>留置独一档</RouteUnderline>：领导集体研究决定＋报上一级批准（省级报国家监委备案）
              </div>
            </WaybillCard>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 留置：批准与期限
// ---------------------------------------------------------------

export const DetentionDepthScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <RelayShell accent={C.signal} code="25-3" subtitle="双审核 · 3+3+2 期限 · 通知与折抵" title="留置：批准与期限">
      <div
        data-layout="detention-timeline-with-approval-gate-and-notice-note"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,label-block,thin-underline"
        data-visual-grammar="grave-duty-crime-with-evidence-and-aggravating-circumstance,collective-study-then-upper-approval-or-provincial-filing,three-plus-three-plus-two-months-caps-city-level-at-eight,recidivist-new-crime-restarts-once-reaching-fourteen-months"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="市级以下 3+3+2＝8 个月；省级漏罪重算一次为限＝14 个月" style={{position: 'absolute', inset: 0}}>
          <Timer
            size={168}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 34, top: 20, color: C.signal, opacity: 0.11}}
          />
          <div data-final-knowledge="scope-rows" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, height: 200, padding: '18px 24px', borderColor: C.signal, borderWidth: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, ...enter(frame, 0, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={stampBoxStyle(C.signal)}><Lock size={24} strokeWidth={2.5} color={C.signalInk} /></span>
                <span style={{fontSize: 25, fontWeight: 950, color: C.signalInk}}>适用</span>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  涉嫌<BoxedMark color={C.signalInk}>贪污贿赂、失职渎职</BoxedMark>等严重职务犯罪，已掌握部分事实证据仍需深入调查
                </span>
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.signalInk}}>情形之一：</span>
                <RouteChip color={C.signalInk} label="重大复杂" />
                <RouteChip color={C.signalInk} label="逃跑自杀" />
                <RouteChip color={C.signalInk} label="串供毁灭证据" />
                <RouteChip color={C.signalInk} label="其他妨碍" />
                <span style={{fontSize: 21, color: C.ink, fontWeight: 700}}>· 对行贿、共同职务犯罪涉案人员可留置</span>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="approval-gate" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 230, width: 880, height: 250, padding: '18px 24px', borderColor: C.brass, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, ...enter(frame, 90, 22)}}>
              <div><PostBlock color={C.brassInk}>批准 · 双审核</PostBlock></div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{display: 'flex', gap: 10, alignItems: 'flex-start'}}>
                  <UsersRound size={22} strokeWidth={2.5} color={C.brassInk} style={{flexShrink: 0, marginTop: 4}} />
                  领导集体研究决定
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'flex-start'}}>
                  <ArrowUp size={22} strokeWidth={2.5} color={C.brassInk} style={{flexShrink: 0, marginTop: 4}} />
                  设区市级以下 → <RouteUnderline color={C.brassInk}>报上一级批准</RouteUnderline>；省级 → <RouteUnderline color={C.brassInk}>报国家监委备案</RouteUnderline>
                </div>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="duration-timeline" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 920, top: 230, width: 880, height: 250, padding: '18px 24px', borderColor: C.dispatch, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, ...enter(frame, 160, 22)}}>
              <div><PostBlock color={C.dispatchInk}>期限</PostBlock></div>
              <div style={{display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 10}}>
                <RouteChip color={C.dispatchInk} label="一般 3 个月" />
                <RouteChip color={C.dispatchInk} label="可延 1 次 3 个月" />
                <RouteChip color={C.dispatchInk} label="重罪(10年+)再延 2 个月" />
              </div>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                市级以下 <BoxedMark color={C.signalInk}>3+3+2＝8 个月</BoxedMark>；省级以上漏罪重新计算，一次为限 <BoxedMark color={C.signalInk}>14 个月</BoxedMark>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="notice-offset-note" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 506, width: MAIN_WIDTH, height: 158, padding: '18px 24px', borderColor: C.moss, display: 'flex', flexDirection: 'column', justifyContent: 'center', ...enter(frame, 250, 20)}}>
              <div style={{display: 'flex', gap: 24, alignItems: 'flex-start'}}>
                <div style={{flex: 1, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.moss)}><BellRing size={24} strokeWidth={2.5} color={C.mossInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                    <RouteUnderline color={C.mossInk}>24 小时内</RouteUnderline>通知单位、家属（有碍调查除外）；申请变更 3 日内决定，不同意说明理由
                  </span>
                </div>
                <div style={{flex: 1, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.moss)}><ArrowLeftRight size={24} strokeWidth={2.5} color={C.mossInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                    <RouteUnderline color={C.mossInk}>折抵</RouteUnderline>：留置 1 日折抵管制 2 日，折抵拘役、有期徒刑 1 日
                  </span>
                </div>
              </div>
            </WaybillCard>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// Scene 04 — 调查措施：执行双轨
// ---------------------------------------------------------------

export const ExecutionTracksScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <RelayShell accent={C.moss} code="25-4" subtitle="谁执行：监察自行 · 公安执行 · 法院裁决" title="调查措施：执行双轨">
      <div
        data-layout="dual-track-dispatch-board-with-jurisdiction-note"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,soft-highlight,external-negation"
        data-visual-grammar="search-and-assets-stay-on-the-supervision-track,technical-investigation-warrants-three-month-terms-executed-by-police,manhunt-and-exit-ban-need-provincial-approval-via-police,supervision-organ-cannot-confiscate-courts-decide-after-transfer"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="仅技术调查、通缉、限制出境交公安执行；搜查由监察自行、公安配合" style={{position: 'absolute', inset: 0}}>
          <Route
            size={170}
            strokeWidth={1.4}
            style={{position: 'absolute', left: 815, top: 24, color: C.moss, opacity: 0.11}}
          />
          <div data-final-knowledge="supervision-track" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 6, width: 880, height: 500, padding: '18px 24px', borderColor: C.brass, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <span style={stampBoxStyle(C.brass)}><Building2 size={26} strokeWidth={2.5} color={C.brassInk} /></span>
                <span style={{fontSize: 27, fontWeight: 950, color: C.brassInk}}>监察机关 · 自行执行</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.brass)}><Search size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 3}}>
                    <RouteUnderline color={C.brassInk}>搜查</RouteUnderline>：监察机关执行，可请公安机关配合，公安依法协助
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.brass)}><Coins size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 3}}>
                    <RouteUnderline color={C.brassInk}>涉案财物</RouteUnderline>：涉嫌犯罪取得的财物随案移送检察院
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.signal)}><Ban size={24} strokeWidth={2.5} color={C.signalInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 3}}>
                    <ExternalNegation color={C.signalInk} iconSize={20}>监察机关无权没收</ExternalNegation>——移送起诉后由<BoxedMark color={C.mossInk}>法院裁决</BoxedMark>
                  </span>
                </div>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="police-track" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 920, top: 6, width: 880, height: 500, padding: '18px 24px', borderColor: C.dispatch, borderWidth: 4, ...enter(frame, 80, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <span style={stampBoxStyle(C.dispatch)}><Shield size={26} strokeWidth={2.5} color={C.dispatchInk} /></span>
                <span style={{fontSize: 27, fontWeight: 950, color: C.dispatchInk}}>公安机关 · 执行线</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.dispatch)}><Radar size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 3}}>
                    <RouteUnderline color={C.dispatchInk}>技术调查</RouteUnderline>：重大贪污贿赂等职务犯罪，严格批准；3 个月内有效，可延每次≤3 个月，交公安机关执行
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.dispatch)}><Megaphone size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 3}}>
                    <RouteUnderline color={C.dispatchInk}>通缉</RouteUnderline>：监察机关决定，公安机关发布通缉令、追捕；超出本区域报有权决定的上级
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={stampBoxStyle(C.dispatch)}><PlaneLanding size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, paddingTop: 3}}>
                    <RouteUnderline color={C.dispatchInk}>限制出境</RouteUnderline>：防逃匿境外，经<BoxedMark color={C.signalInk}>省级以上批准</BoxedMark>，公安机关执行
                  </span>
                </div>
              </div>
            </WaybillCard>
          </div>

          <div data-final-knowledge="jurisdiction-note" style={{position: 'absolute', inset: 0}}>
            <WaybillCard style={{position: 'absolute', left: 0, top: 530, width: MAIN_WIDTH, height: 104, padding: '14px 24px', borderColor: C.moss, ...enter(frame, 200, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <Route size={28} strokeWidth={2.5} style={{color: C.mossInk, flexShrink: 0}} />
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  分轨记忆：仅<RouteChip color={C.dispatchInk} label="技术调查" />、<RouteChip color={C.dispatchInk} label="通缉" />、<RouteChip color={C.dispatchInk} label="限制出境" />由公安执行，其余监察机关自行执行；县、市级无权决定限制出境
                </span>
              </div>
            </WaybillCard>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------

export const DualTrackRelay: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.rail, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['filing-leniency-desk'].start} duration={SCENES['filing-leniency-desk'].duration}>
      <FilingLeniencyScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['four-measures-panel'].start} duration={SCENES['four-measures-panel'].duration}>
      <FourMeasuresScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['detention-depth-gauge'].start} duration={SCENES['detention-depth-gauge'].duration}>
      <DetentionDepthScene />
    </TimelineSequence>
    <TimelineSequence name="04" start={SCENES['measure-execution-tracks'].start} duration={SCENES['measure-execution-tracks'].duration}>
      <ExecutionTracksScene />
    </TimelineSequence>
  </AbsoluteFill>
);
