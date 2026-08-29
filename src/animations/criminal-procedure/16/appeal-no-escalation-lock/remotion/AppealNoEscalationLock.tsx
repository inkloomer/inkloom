import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, DoorOpen, MoveRight, Scale, ShieldAlert, Undo2, XCircle} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: One-Way Lock Bridge — 单行闸桥 · 上诉不加刑
const C = {
  rust: '#2E2624',
  rustDeep: '#231D1B',
  deck: '#EFE8D8',
  deckAlt: '#E4DCC7',
  ink: '#2B2522',
  inkSoft: '#6C625A',
  girder: '#A6432E',
  girderInk: '#6D2A1B',
  girderSoft: '#F1DCD3',
  oneway: '#3F7F5F',
  onewayInk: '#2A5641',
  onewaySoft: '#DFEDE3',
  brass: '#C2A15B',
  brassInk: '#7A6330',
  brassSoft: '#EFE3C4',
  night: '#4E5A78',
  nightInk: '#333D57',
  nightSoft: '#DFE2EC',
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

const BridgeShell = ({
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
      backgroundColor: C.rust,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(239,232,216,0.03) 0 2px, transparent 2px 34px),' +
        'radial-gradient(circle at 16% 14%, rgba(166,67,46,0.16), transparent 30%),' +
        'radial-gradient(circle at 86% 86%, rgba(63,127,95,0.14), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.deck,
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
          backgroundColor: C.rustDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.brass,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        桥号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.deck}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(239,232,216,0.66)',
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

const DeckCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.deck,
      border: `3px solid ${C.girder}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,6,5,0.5), inset 0 0 0 2px rgba(166,67,46,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 一个原则：单行闸
// ---------------------------------------------------------------

export const OnePrincipleScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <BridgeShell accent={C.girder} code="16-1" subtitle="考点3 上诉不加刑 · 只有被告一方上诉，不得加刑" title="单行闸桥">
      <div
        data-layout="one-way-gate-with-anchor-bays"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="defendant-only-appeals-lock-the-sentencing-gate,principle-carries-no-exception,procuratorate-protest-unlocks-the-gate,unclear-facts-may-still-be-remanded"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="上诉不加刑没有例外；检方抗诉即可突破" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="one-way-gate" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 0, top: 30, width: MAIN_WIDTH, height: 220, padding: '22px 28px', borderColor: C.girder, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 14,
                    backgroundColor: C.onewaySoft,
                    border: `4px solid ${C.oneway}`,
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MoveRight size={56} strokeWidth={2.8} style={{color: C.onewayInk}} />
                </div>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 30, fontWeight: 950, color: C.onewayInk, lineHeight: 1.3, marginBottom: 8}}>
                    单行闸：仅有被告人一方上诉 → <ThinUnderline color={C.onewayInk}>不得改判重于原判的刑罚</ThinUnderline>
                  </div>
                  <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                    量刑只能原路通行或更轻；<SoftHighlight color={C.girderInk}>上诉不加刑原则没有例外</SoftHighlight>。事实不清、证据不足的，仍可撤销原判发回重审
                  </div>
                </div>
              </div>
            </DeckCard>
          </div>

          <div data-final-knowledge="memory-anchor-bay" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 282, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
              <DeckCard style={{flex: 1, height: 190, padding: '18px 24px', borderColor: C.brass, ...enter(frame, 80, 24)}}>
                <div style={{fontSize: 25, fontWeight: 950, color: C.brassInk, marginBottom: 8}}>记忆锚</div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  <Chip color={C.oneway} label="被告方上诉" /> 才受不加刑约束；<Chip color={C.girder} label="检方抗诉" solid /> 即可突破闸门
                </div>
              </DeckCard>
              <DeckCard style={{flex: 1, height: 190, padding: '18px 24px', borderColor: C.night, ...enter(frame, 130, 24)}}>
                <div style={{fontSize: 25, fontWeight: 950, color: C.nightInk, marginBottom: 8}}>附民赔偿不算「刑」</div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  上诉不加「刑」不含附带民事诉讼：赔款 10 万改判 20 万，<ThinUnderline color={C.nightInk}>不违反本原则</ThinUnderline>
                </div>
              </DeckCard>
            </div>
          </div>

          <div
            data-final-knowledge="second-protest-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 508,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 190, 16),
            }}
          >
            <ShieldAlert size={26} strokeWidth={2.5} style={{color: C.girder, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,232,216,0.88)', fontWeight: 700}}>
              陷阱：被告人上诉 → 发回重审改判 → <SoftHighlight color={C.girderInk}>之后检院才抗诉</SoftHighlight>的，二审仍不得重于第一次原判
            </span>
          </div>
        </div>
      </div>
    </BridgeShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 三个加重通道
// ---------------------------------------------------------------

export const EscalationLanesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <BridgeShell accent={C.night} code="16-2" subtitle="可能加刑的三条通道 · 检抗诉、自诉人上诉、新事实补诉" title="三条加重通道">
      <div
        data-layout="three-escalation-lanes-with-boundary-note"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="protest-opens-the-gate,private-prosecutor-appeal-opens-the-gate,remand-plus-new-crime-plus-supplementary-prosecution-opens-the-gate,first-original-sentence-remains-the-ceiling-later"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="原则 vs 例外：不加刑没有例外，加刑只走三条通道" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="escalation-lane-banks" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
              {[
                {tag: '通道 1', body: '检察院提出抗诉', note: '抗诉即解锁，二审可以加刑', accent: C.girderInk, delay: 0},
                {tag: '通道 2', body: '自诉人提出上诉', note: '自诉案件对方当事人上诉，同样解锁', accent: C.nightInk, delay: 60},
                {tag: '通道 3', body: '发回重审＋新犯罪事实＋检院补充起诉', note: '三要素缺一不可；只有新事实、无补诉的不算', accent: C.brassInk, delay: 120},
              ].map((lane) => (
                <DeckCard key={lane.tag} style={{flex: 1, height: 250, padding: '20px 24px', borderColor: lane.accent, borderWidth: 4, ...enter(frame, lane.delay, 26)}}>
                  <div style={{fontSize: 21, fontWeight: 950, color: C.inkSoft, fontFamily: 'var(--inkloom-animation-mono)', letterSpacing: 2, marginBottom: 8}}>{lane.tag}</div>
                  <div style={{fontSize: 25, fontWeight: 950, color: lane.accent, lineHeight: 1.35, marginBottom: 10}}>{lane.body}</div>
                  <div style={{fontSize: 20, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>{lane.note}</div>
                </DeckCard>
              ))}
            </div>
          </div>

          <div
            data-final-knowledge="principle-vs-exception-banner"
            style={{
              position: 'absolute',
              left: 0,
              top: 306,
              width: MAIN_WIDTH,
              ...enter(frame, 200, 24),
            }}
          >
            <DeckCard style={{padding: '16px 26px', borderColor: C.oneway}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <Scale size={28} strokeWidth={2.5} style={{color: C.onewayInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.onewayInk}}>原则 vs 例外</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  原则：<Chip color={C.oneway} label="上诉不加刑，没有例外" solid />　例外：仅上述三条加重通道
                </div>
              </div>
            </DeckCard>
          </div>

          <div
            data-final-knowledge="ceiling-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 428,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 260, 16),
            }}
          >
            <Undo2 size={26} strokeWidth={2.5} style={{color: C.brass, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,232,216,0.88)', fontWeight: 700}}>
              上诉 → 发回重审 → 改判 8 年 → 检院抗诉：二审可加重，但<SoftHighlight color={C.brassInk}>以第一次原判 12 年为限</SoftHighlight>，不能超过
            </span>
          </div>
        </div>
      </div>
    </BridgeShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 八个具体禁令
// ---------------------------------------------------------------

export const ConcreteBansScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <BridgeShell accent={C.oneway} code="16-3" subtitle="二审的八条具体禁令 · 只改内容不添重量" title="八个具体禁令">
      <div
        data-layout="eight-ban-grid-with-escalation-note"
        data-visual-anchor="boundary"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="co-defendants-and-partial-protest-protect-others,charges-and-counts-may-change-without-heavier-execution,probation-and-bans-cannot-grow,missing-accessory-punishment-goes-to-retrial-not-direct-addition"
        data-focal-channels="contrast,enclosure,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="罪名罪数可改，重量不可加；畸轻必须改判的走审判监督程序" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="eight-ban-grid" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 20, width: MAIN_WIDTH, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
              {[
                {title: '① 部分上诉', body: '不得加重上诉人，也不得加重其他同案被告人'},
                {title: '② 罪名不当', body: '可以改罪名（盗窃改抢劫），但不得加重刑罚或执行不利'},
                {title: '③ 罪数不当', body: '可以改罪数并调整刑罚，但决定执行的刑罚不得加重'},
                {title: '④ 缓刑', body: '不得撤销缓刑，不得延长缓刑考验期'},
                {title: '⑤ 禁止令', body: '原无不得增加宣告；原有不得增加内容、延长期限'},
                {title: '⑥ 死缓', body: '原未限制减刑、终身监禁的，不得限制减刑、决定终身监禁'},
                {title: '⑦ 附加刑漏用', body: '不得直接加重、补用；畸轻必须改判 → 生效后按审判监督程序重审'},
                {title: '⑧ 部分抗诉', body: '检院或自诉人只对部分被告人抗诉/上诉的，其他人不得加重'},
              ].map((ban, index) => (
                <DeckCard key={ban.title} style={{display: 'flex', gap: 14, alignItems: 'center', padding: '12px 18px', borderColor: C.girder, ...enter(frame, index * 24, 18)}}>
                  <span style={{fontSize: 23, fontWeight: 950, color: C.girderInk, whiteSpace: 'nowrap', flexShrink: 0}}>{ban.title}</span>
                  <span style={{fontSize: 20, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>{ban.body}</span>
                </DeckCard>
              ))}
            </div>
          </div>

          <div
            data-final-knowledge="retrial-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 500,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 240, 16),
            }}
          >
            <CheckCircle2 size={26} strokeWidth={2.5} style={{color: C.oneway, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,232,216,0.88)', fontWeight: 700}}>
              通道口诀：<SoftHighlight color={C.girderInk}>抗诉、自诉人上诉、新罪＋补诉</SoftHighlight>——闸门只由这三把钥匙打开
            </span>
          </div>
        </div>
      </div>
    </BridgeShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const AppealNoEscalationLock: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.rust, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['one-principle-gate'].start} duration={SCENES['one-principle-gate'].duration}>
      <OnePrincipleScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['escalation-lanes'].start} duration={SCENES['escalation-lanes'].duration}>
      <EscalationLanesScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['concrete-bans-grid'].start} duration={SCENES['concrete-bans-grid'].duration}>
      <ConcreteBansScene />
    </TimelineSequence>
  </AbsoluteFill>
);
