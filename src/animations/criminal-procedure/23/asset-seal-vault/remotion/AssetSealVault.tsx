import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  Ban,
  ChevronRight,
  CircleAlert,
  Coins,
  FilePen,
  Footprints,
  Gavel,
  Landmark,
  Layers,
  LockOpen,
  Megaphone,
  MessageSquareText,
  Package,
  RotateCcw,
  Scale,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  Skull,
  Stamp,
  Timer,
  UserCheck,
  UserPlus,
  UserX,
  Users,
  Vault,
  Wrench,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Asset Seal Vault — 资产封存库 · 违法所得没收程序
const C = {
  vault: '#232B35',
  vaultDeep: '#1A212A',
  crate: '#EFE6D2',
  crateAlt: '#E4DAC4',
  ink: '#2A313B',
  inkSoft: '#6B7280',
  brass: '#C29A4B',
  brassInk: '#7A5E20',
  brassSoft: '#F0E6CC',
  seal: '#B0524A',
  sealInk: '#7E3730',
  sealSoft: '#F2DEDA',
  verdigris: '#5E8C7A',
  verdigrisInk: '#3A5F51',
  verdigrisSoft: '#DFECE5',
  dispatch: '#4E7FA6',
  dispatchInk: '#2F5673',
  dispatchSoft: '#DCE8F0',
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

const iconBoxStyle = (color: string): React.CSSProperties => ({
  width: 40,
  height: 40,
  borderRadius: 8,
  backgroundColor: `${color}24`,
  border: `2px solid ${color}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const VaultShell = ({
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
      backgroundColor: C.vault,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(239,230,210,0.035) 0 2px, transparent 2px 64px),' +
        'repeating-linear-gradient(0deg, rgba(239,230,210,0.028) 0 2px, transparent 2px 96px),' +
        'radial-gradient(circle at 16% 12%, rgba(194,154,75,0.16), transparent 34%),' +
        'radial-gradient(circle at 86% 90%, rgba(94,140,122,0.12), transparent 34%)',
      color: C.crate,
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
          backgroundColor: C.vaultDeep,
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
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.crate}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(239,230,210,0.66)',
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

const SealChip = ({
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
      borderRadius: 4,
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
      backgroundColor: `${color}2B`,
      borderRadius: 3,
      padding: '2px 8px',
      boxShadow: `inset 0 -2px 0 ${color}59`,
      ...style,
    }}
  >
    {children}
  </span>
);

const TicketUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span style={{borderBottom: `2px dashed ${color}`, paddingBottom: 2}}>{children}</span>
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

const TagCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.crate,
      border: `3px solid ${C.brass}`,
      borderRadius: 6,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,12,16,0.5), inset 0 0 0 2px rgba(194,154,75,0.22)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const LabelBlock = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 14px',
      backgroundColor: color,
      color: '#FFFFFF',
      borderRadius: 4,
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
// Scene 01 — 适用条件
// ---------------------------------------------------------------

export const EntryConditionsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <VaultShell accent={C.brass} code="23-1" subtitle="逃匿型与死亡型 · 依刑法应追缴" title="适用条件">
      <div
        data-layout="dual-entry-vault-fork-with-property-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="fugitive-type-needs-grave-crime-year-manhunt-and-forfeiture-clause,death-type-needs-only-death-and-forfeiture-clause,illicit-gains-span-booty-fruits-and-own-tools,red-notice-counts-toward-the-one-year-manhunt"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="贪恐重大逃一年，或死亡可没收" style={{position: 'absolute', inset: 0}}>
          <Vault
            size={170}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 640, top: 96, color: C.brass, opacity: 0.12}}
          />
          <div data-final-knowledge="fugitive-branch" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 0, top: 6, width: 880, height: 408, padding: '20px 24px', borderColor: C.brass, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.brassInk, marginBottom: 14}}>逃匿型 · 三项条件</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.brass)}><Scale size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    <TicketUnderline color={C.brassInk}>贪污贿赂、恐怖活动</TicketUnderline>等重大犯罪
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.brass)}><Footprints size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    逃匿，通缉<TicketUnderline color={C.sealInk}>1 年后不能到案</TicketUnderline>（含红色国际通报）
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.brass)}><Coins size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    依刑法应<SoftHighlight color={C.sealInk}>追缴</SoftHighlight>违法所得及其他涉案财产
                  </span>
                </div>
              </div>
            </TagCard>
          </div>

          <div data-final-knowledge="death-branch" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 920, top: 6, width: 880, height: 408, padding: '20px 24px', borderColor: C.seal, borderWidth: 4, ...enter(frame, 70, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.sealInk, marginBottom: 14}}>死亡型</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.seal)}><Skull size={24} strokeWidth={2.5} color={C.sealInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    犯罪嫌疑人、<TicketUnderline color={C.sealInk}>被告人是死亡型唯一门槛</TicketUnderline>
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.seal)}><Coins size={24} strokeWidth={2.5} color={C.sealInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    同样依刑法应<SoftHighlight color={C.sealInk}>追缴</SoftHighlight>违法所得及其他涉案财产
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.verdigris)}><CircleAlert size={24} strokeWidth={2.5} color={C.verdigrisInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    与逃匿型不同：只需死亡，<SoftHighlight color={C.verdigrisInk}>不要求通缉一年不能到案</SoftHighlight>
                  </span>
                </div>
              </div>
            </TagCard>
          </div>

          <div data-final-knowledge="property-strip" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 0, top: 436, width: MAIN_WIDTH, height: 118, padding: '16px 24px', borderColor: C.dispatch, ...enter(frame, 150, 20)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.dispatchInk}}>违法所得及其他涉案财产</span>
                <SealChip color={C.dispatchInk} label="赃物" />
                <SealChip color={C.dispatchInk} label="孳息" />
                <SealChip color={C.dispatchInk} label="本人工具" />
                <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 21, color: C.ink, fontWeight: 700}}>
                  <Package size={22} strokeWidth={2.5} color={C.dispatchInk} />
                  抢劫所用汽车属犯罪工具，应予没收
                </span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 21, color: C.ink, fontWeight: 700}}>
                  <Layers size={22} strokeWidth={2.5} color={C.dispatchInk} />
                  孳息一并追缴
                </span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 21, color: C.ink, fontWeight: 700}}>
                  <Wrench size={22} strokeWidth={2.5} color={C.dispatchInk} />
                  工具归属本人方可没收
                </span>
              </div>
            </TagCard>
          </div>

          <div data-final-knowledge="mnemonic-band" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 0, top: 574, width: MAIN_WIDTH, height: 92, padding: '14px 24px', borderColor: C.seal, ...enter(frame, 230, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <Gavel size={28} strokeWidth={2.5} style={{color: C.sealInk, flexShrink: 0}} />
                <span style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  通关口诀：<SoftHighlight color={C.sealInk}>贪恐重大逃一年</SoftHighlight>，或<SoftHighlight color={C.sealInk}>死亡可没收</SoftHighlight>——两类案件都走特别程序
                </span>
              </div>
            </TagCard>
          </div>
        </div>
      </div>
    </VaultShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 申请、管辖与公告
// ---------------------------------------------------------------

export const ApplicationNoticeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <VaultShell accent={C.dispatch} code="23-2" subtitle="检察院申请 · 中院合议庭 · 公告期 6 个月" title="申请、管辖与公告">
      <div
        data-layout="application-flow-with-notice-participation-band"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,thin-underline"
        data-visual-grammar="procuratorate-files-a-written-forfeiture-application,intermediate-court-panel-at-crime-or-residence-place-accepts,fifteen-day-notice-opens-an-irreducible-six-month-period,late-claimants-enter-with-reasonable-explanation-or-second-instance-remedy"
        data-focal-channels="connector,spatial,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="检察院申请 → 犯罪地或居住地中院合议庭 → 15 日内公告、公告期 6 个月" style={{position: 'absolute', inset: 0}}>
          <ScrollText
            size={160}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 30, top: 320, color: C.dispatch, opacity: 0.12}}
          />
          <div data-final-knowledge="application-flow" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 6, width: MAIN_WIDTH, display: 'flex', alignItems: 'stretch', gap: 10}}>
              <TagCard style={{flex: 1, height: 296, padding: '18px 22px', borderColor: C.brass, ...enter(frame, 0, 24)}}>
                <div style={{marginBottom: 12}}><LabelBlock color={C.brass}>检察院申请</LabelBlock></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12}}>
                  <span style={iconBoxStyle(C.brass)}><FilePen size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    <TicketUnderline color={C.brassInk}>负责捕诉的部门</TicketUnderline>提出
                  </span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, marginBottom: 12}}>
                  应制作<TicketUnderline color={C.sealInk}>没收违法所得申请书</TicketUnderline>
                </div>
                <div><SealChip color={C.brassInk} label="书面提出" /></div>
              </TagCard>
              <div style={{display: 'flex', alignItems: 'center', flexShrink: 0, ...enter(frame, 40, 0)}}>
                <ChevronRight size={34} strokeWidth={3} color={C.brass} />
              </div>
              <TagCard style={{flex: 1, height: 296, padding: '18px 22px', borderColor: C.dispatch, ...enter(frame, 60, 24)}}>
                <div style={{marginBottom: 12}}><LabelBlock color={C.dispatch}>中院合议庭</LabelBlock></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12}}>
                  <span style={iconBoxStyle(C.dispatch)}><Landmark size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    <TicketUnderline color={C.dispatchInk}>犯罪地或居住地</TicketUnderline>的中级法院
                  </span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, marginBottom: 12}}>
                  由合议庭受理并审理
                </div>
                <div style={{fontSize: 21, lineHeight: 1.5, color: C.sealInk, fontWeight: 900}}>
                  ⚠ 管辖看犯罪地/居住地，不是受审法院
                </div>
              </TagCard>
              <div style={{display: 'flex', alignItems: 'center', flexShrink: 0, ...enter(frame, 100, 0)}}>
                <ChevronRight size={34} strokeWidth={3} color={C.brass} />
              </div>
              <TagCard style={{flex: 1, height: 296, padding: '18px 22px', borderColor: C.seal, ...enter(frame, 120, 24)}}>
                <div style={{marginBottom: 12}}><LabelBlock color={C.seal}>公告</LabelBlock></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12}}>
                  <span style={iconBoxStyle(C.seal)}><Megaphone size={24} strokeWidth={2.5} color={C.sealInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    受理后 <TicketUnderline color={C.sealInk}>15 日内公告</TicketUnderline>
                  </span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700, marginBottom: 12}}>
                  公告期 <SoftHighlight color={C.sealInk}>6 个月</SoftHighlight>
                </div>
                <div style={{fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  不适用中止、中断、延长
                </div>
              </TagCard>
            </div>
          </div>

          <div data-final-knowledge="claimant-cards" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 330, width: MAIN_WIDTH, display: 'flex', gap: 20}}>
              <TagCard style={{flex: 1, height: 214, padding: '18px 24px', borderColor: C.verdigris, ...enter(frame, 190, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                  <UserPlus size={28} strokeWidth={2.5} style={{color: C.verdigrisInk, flexShrink: 0}} />
                  <span style={{fontSize: 26, fontWeight: 950, color: C.verdigrisInk}}>利害关系人参加</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>公告期内申请，提供关系或权利证据</div>
                  <div>
                    期满后申请 → 能<SoftHighlight color={C.verdigrisInk}>合理说明理由</SoftHighlight>的<SealChip color={C.verdigrisInk} label="应准许" />
                  </div>
                </div>
              </TagCard>
              <TagCard style={{flex: 1, height: 214, padding: '18px 24px', borderColor: C.brass, ...enter(frame, 250, 22)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                  <RotateCcw size={28} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0}} />
                  <span style={{fontSize: 26, fontWeight: 950, color: C.brassInk}}>二审补救</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>非因故意或重大过失<TicketUnderline color={C.brassInk}>一审未参加</TicketUnderline></div>
                  <div>二审申请参加 → 应准许 → 撤销<SoftHighlight color={C.sealInk}>原裁定</SoftHighlight>，发回<SoftHighlight color={C.sealInk}>重新审判</SoftHighlight></div>
                </div>
              </TagCard>
            </div>
          </div>

          <div data-final-knowledge="burden-note" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 0, top: 572, width: MAIN_WIDTH, height: 92, padding: '14px 24px', borderColor: C.dispatch, ...enter(frame, 320, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <Scale size={28} strokeWidth={2.5} style={{color: C.dispatchInk, flexShrink: 0}} />
                <span style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  举证责任：由<SoftHighlight color={C.dispatchInk}>检察院</SoftHighlight>承担
                </span>
                <MessageSquareText size={24} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0, marginLeft: 'auto'}} />
                <span style={{fontSize: 21, color: C.inkSoft, fontWeight: 700}}>没收违法所得申请书书面提出，检院负举证</span>
              </div>
            </TagCard>
          </div>
        </div>
      </div>
    </VaultShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 审理、裁定与救济
// ---------------------------------------------------------------

export const TrialVerdictScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <VaultShell accent={C.verdigris} code="23-3" subtitle="开庭规则 · 证明责任 · 上诉抗诉 5 日" title="审理、裁定与救济">
      <div
        data-layout="trial-rule-stack-with-verdict-pair-and-relief-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,soft-highlight,external-negation"
        data-visual-grammar="attendance-decides-open-or-closed-hearing,near-kin-claims-need-no-proof-while-others-must-prove,surrender-or-capture-terminates-not-suspends,high-likelihood-brings-forfeiture-ruling-otherwise-dismissal-and-unseal"
        data-focal-channels="contrast,enclosure,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="有人来开庭、无人可不开；属或高度可能属违法所得 → 裁定没收" style={{position: 'absolute', inset: 0}}>
          <Gavel
            size={168}
            strokeWidth={1.4}
            style={{position: 'absolute', right: 24, top: 8, color: C.verdigris, opacity: 0.12}}
          />
          <div data-final-knowledge="trial-rule-stack" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 0, top: 6, width: 880, height: 540, padding: '20px 24px', borderColor: C.brass, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 27, fontWeight: 950, color: C.brassInk, marginBottom: 14}}>审理规则</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.brass)}><Users size={24} strokeWidth={2.5} color={C.brassInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    利害关系人申请参加或委托诉讼代理人 → <SealChip color={C.brassInk} label="应开庭" />；检院应派员出席并宣读申请书
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.seal)}><UserX size={24} strokeWidth={2.5} color={C.sealInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    均无正当理由<TicketUnderline color={C.sealInk}>拒不到庭</TicketUnderline>且无他人 → 可不开庭
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.verdigris)}><ShieldCheck size={24} strokeWidth={2.5} color={C.verdigrisInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    近亲属对其财产主张 <SoftHighlight color={C.verdigrisInk}>无需证明</SoftHighlight>
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.seal)}><ShieldAlert size={24} strokeWidth={2.5} color={C.sealInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    其他利害关系人对其财产主张 <SoftHighlight color={C.sealInk}>需证明</SoftHighlight>
                  </span>
                </div>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <span style={iconBoxStyle(C.dispatch)}><UserCheck size={24} strokeWidth={2.5} color={C.dispatchInk} /></span>
                  <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700, paddingTop: 4}}>
                    在逃者<SoftHighlight color={C.dispatchInk}>投案或被抓获</SoftHighlight> → 应终止审理
                    <ExternalNegation color={C.sealInk} iconSize={20}>是终止，不是中止</ExternalNegation>
                  </span>
                </div>
              </div>
            </TagCard>
          </div>

          <div data-final-knowledge="verdict-pair" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 920, top: 6, width: 880, height: 254, padding: '18px 24px', borderColor: C.seal, borderWidth: 4, ...enter(frame, 120, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <Stamp size={30} strokeWidth={2.5} style={{color: C.sealInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.sealInk}}>裁定没收</span>
                <SealChip color={C.sealInk} label="用裁定非判决" />
              </div>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                属或<SoftHighlight color={C.sealInk}>高度可能</SoftHighlight>属违法所得 → 裁定没收；除应<SoftHighlight color={C.verdigrisInk}>返还被害人</SoftHighlight>的以外
              </div>
            </TagCard>
            <TagCard style={{position: 'absolute', left: 920, top: 276, width: 880, height: 270, padding: '18px 24px', borderColor: C.verdigris, borderWidth: 4, ...enter(frame, 190, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <LockOpen size={30} strokeWidth={2.5} style={{color: C.verdigrisInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.verdigrisInk}}>裁定驳回</span>
                <SealChip color={C.verdigrisInk} label="解除查封扣押冻结" />
              </div>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700, marginBottom: 10}}>
                不属应追缴的 → 裁定驳回申请，解除查封、扣押、冻结
              </div>
              <div style={{fontSize: 21, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>
                两条出路都由中院合议庭以裁定作出，救济相同
              </div>
            </TagCard>
          </div>

          <div data-final-knowledge="relief-strip" style={{position: 'absolute', inset: 0}}>
            <TagCard style={{position: 'absolute', left: 0, top: 566, width: MAIN_WIDTH, height: 104, padding: '14px 24px', borderColor: C.dispatch, ...enter(frame, 280, 18)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <Timer size={28} strokeWidth={2.5} style={{color: C.dispatchInk, flexShrink: 0}} />
                <span style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  上诉抗诉：近亲属、利害关系人可<SoftHighlight color={C.dispatchInk}>自行上诉</SoftHighlight>（非申请抗诉），检察院可抗诉；期限
                  <SealChip color={C.sealInk} label="5 日" />；公告期间、刑事司法协助时间<TicketUnderline color={C.sealInk}>不计入审限</TicketUnderline>
                </span>
              </div>
            </TagCard>
          </div>
        </div>
      </div>
    </VaultShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------

export const AssetSealVault: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.vault, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['entry-conditions-fork'].start} duration={SCENES['entry-conditions-fork'].duration}>
      <EntryConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['application-notice-lane'].start} duration={SCENES['application-notice-lane'].duration}>
      <ApplicationNoticeScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['trial-verdict-outcome'].start} duration={SCENES['trial-verdict-outcome'].duration}>
      <TrialVerdictScene />
    </TimelineSequence>
  </AbsoluteFill>
);
