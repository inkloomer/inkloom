import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, RefreshCw, Scale, Scissors, ShieldCheck, Undo2} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Rewind Loom — 织机回纬 · 审判监督
const C = {
  umber: '#302620',
  umberDeep: '#251D18',
  cloth: '#EFE7D4',
  clothAlt: '#E3D8C0',
  ink: '#2B231D',
  inkSoft: '#6D6156',
  madder: '#A64B3C',
  madderInk: '#6D2F24',
  madderSoft: '#F1DDD5',
  indigo: '#44617C',
  indigoInk: '#2C4154',
  indigoSoft: '#DEE5EC',
  reed: '#7C8A5E',
  reedInk: '#4F5B39',
  reedSoft: '#E4E9D5',
  gold: '#C2A15B',
  goldInk: '#7A6330',
  goldSoft: '#EFE3C4',
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

const LoomShell = ({
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
      backgroundColor: C.umber,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(239,231,212,0.035) 0 1px, transparent 1px 11px),' +
        'repeating-linear-gradient(90deg, rgba(166,75,60,0.05) 0 1px, transparent 1px 11px),' +
        'radial-gradient(circle at 16% 14%, rgba(68,97,124,0.16), transparent 30%),' +
        'radial-gradient(circle at 86% 86%, rgba(194,161,91,0.12), transparent 32%)',
      backgroundSize: 'auto, auto, auto, auto',
      color: C.cloth,
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
          backgroundColor: C.umberDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.gold,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        机号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.cloth}}>
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

const ClothCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.cloth,
      border: `3px solid ${C.indigo}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(9,7,5,0.5), inset 0 0 0 2px rgba(68,97,124,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 启动主体的两把梭
// ---------------------------------------------------------------

export const LauncherShuttlesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <LoomShell accent={C.indigo} code="18-1" subtitle="考点2 启动再审的主体 · 生效法及以上，上对下同级抗" title="两把启动梭">
      <div
        data-layout="dual-shuttle-banks-with-two-step-note"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="court-side-spins-from-effective-court-upward,procuratorate-side-spins-downward-and-appeals-at-same-level,two-step-solve-locks-effective-court-first,supreme-procuratorate-is-the-lone-exception"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="法院：生效法，及以上；检察院：上对下，同级抗" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="court-shuttle" style={{position: 'absolute', inset: 0}}>
            <ClothCard style={{position: 'absolute', left: 0, top: 24, width: 880, height: 360, padding: '22px 26px', borderColor: C.indigo, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.indigoInk, marginBottom: 14}}>法院梭 · 生效法，及以上</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.indigo} label="本院" /> 作出生效裁判的法院<ThinUnderline color={C.indigoInk}>院长＋审委会</ThinUnderline></div>
                <div><Chip color={C.indigo} label="上级" /> 最高法、上级法院：可<SoftHighlight color={C.indigoInk}>提审</SoftHighlight>或<SoftHighlight color={C.indigoInk}>指令下级再审</SoftHighlight></div>
              </div>
            </ClothCard>
          </div>

          <div data-final-knowledge="procuratorate-shuttle" style={{position: 'absolute', inset: 0}}>
            <ClothCard style={{position: 'absolute', left: 920, top: 24, width: 880, height: 360, padding: '22px 26px', borderColor: C.madder, borderWidth: 4, ...enter(frame, 70, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.madderInk, marginBottom: 14}}>检察院梭 · 上对下，同级抗</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.madder} label="最高检 / 上级检院" /> 向<ThinUnderline color={C.madderInk}>同级法院</ThinUnderline>抗诉启动再审</div>
                <ExternalNegation color={C.madderInk}>生效法院的同级检院无权抗诉——只能提请上一级检院抗诉</ExternalNegation>
              </div>
            </ClothCard>
          </div>

          <div
            data-final-knowledge="two-step-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 420,
              width: MAIN_WIDTH,
              ...enter(frame, 160, 24),
            }}
          >
            <ClothCard style={{padding: '16px 26px', borderColor: C.gold}}>
              <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                <Chip color={C.goldInk} label="两步走" /> 先锁定<ThinUnderline color={C.goldInk}>生效法院</ThinUnderline>（一审终审看一审 / 上诉抗诉看二审 / 死刑复核看核准法院），再套 12 字口诀。唯一例外：<SoftHighlight color={C.madderInk}>最高法一审终审，最高检可向最高法抗诉</SoftHighlight>
              </div>
            </ClothCard>
          </div>
        </div>
      </div>
    </LoomShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 再审程序纬线
// ---------------------------------------------------------------

export const ProcedureWeftScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <LoomShell accent={C.madder} code="18-2" subtitle="考点3 再审程序 · 恢复原状、不加刑与强制措施" title="再审程序纬线">
      <div
        data-layout="weft-rule-bands-with-no-escalation-card"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="retrial-restores-the-original-instance-track,starter-decides-coercive-measures,retrial-rarely-adds-punishment-unless-protested,three-to-six-month-clock-runs"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="法院再审恢复原状：原一还一，二提用二" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="instance-band" style={{position: 'absolute', inset: 0}}>
            <ClothCard style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, height: 170, padding: '18px 26px', borderColor: C.indigo, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.indigoInk, marginBottom: 10}}>适用审级 · 恢复原状</div>
              <div style={{display: 'flex', gap: 26, fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <div style={{flex: 1}}>
                  <Chip color={C.indigo} label="原一审案件" /> 依一审程序 → 裁判<ThinUnderline color={C.indigoInk}>可上诉、抗诉</ThinUnderline>
                </div>
                <div style={{flex: 1}}>
                  <Chip color={C.madder} label="原二审 / 提审案件" /> 依二审程序 → 裁判是<ThinUnderline color={C.madderInk}>终审</ThinUnderline>
                </div>
              </div>
            </ClothCard>
          </div>

          <div data-final-knowledge="no-escalation-card" style={{position: 'absolute', inset: 0}}>
            <ClothCard style={{position: 'absolute', left: 0, top: 214, width: 880, height: 220, padding: '18px 26px', borderColor: C.madder, ...enter(frame, 80, 24)}}>
              <div style={{fontSize: 25, fontWeight: 950, color: C.madderInk, marginBottom: 10}}>再审不加刑 · 有例外</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>除检院抗诉外，一般<ThinUnderline color={C.madderInk}>不得加重</ThinUnderline>原审被告人刑罚</div>
                <div>只针对部分被告人的，<ThinUnderline color={C.madderInk}>不得加重</ThinUnderline>其他同案被告人</div>
                <div style={{fontSize: 20, color: C.inkSoft}}>对照：再审不加刑有例外，上诉不加刑没有例外</div>
              </div>
            </ClothCard>
          </div>

          <div data-final-knowledge="measures-clock-card" style={{position: 'absolute', inset: 0}}>
            <ClothCard style={{position: 'absolute', left: 920, top: 214, width: 880, height: 220, padding: '18px 26px', borderColor: C.reed, ...enter(frame, 140, 24)}}>
              <div style={{fontSize: 25, fontWeight: 950, color: C.reedInk, marginBottom: 10}}>操作三则</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><SoftHighlight color={C.reedInk}>谁启动再审，谁决定</SoftHighlight>强制措施（法院决定 / 抗诉的检院决定）</div>
                <div>法院开庭再审的，<ThinUnderline color={C.reedInk}>同级检院应当派员出庭</ThinUnderline>；应制作再审决定书</div>
                <div>提审、再审决定之日起 <Chip color={C.reed} label="3 个月内" /> 审结，至多延长至 6 个月</div>
              </div>
            </ClothCard>
          </div>

          <div
            data-final-knowledge="composition-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 470,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 210, 16),
            }}
          >
            <Scissors size={24} strokeWidth={2.5} style={{color: C.madder, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(239,231,212,0.88)', fontWeight: 700}}>
              上级法院可提审也可指令下级再审；原审法院再审的，应当<SoftHighlight color={C.madderInk}>另行组成合议庭</SoftHighlight>
            </span>
          </div>
        </div>
      </div>
    </LoomShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 处理结果架
// ---------------------------------------------------------------

export const ResultShelfScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <LoomShell accent={C.gold} code="18-3" subtitle="再审处理结果 · 维持、改判、可改可回与宣告无罪" title="处理结果架">
      <div
        data-layout="four-shelf-cards-with-effect-band"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="correct-verdicts-keep-original-with-corrections,wrong-law-or-sentencing-must-change,second-instance-track-may-change-or-remand,unclear-facts-after-hearing-announce-innocence"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="申诉绝不停执行；再审仅可能改判无罪、刑期届满时中止" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="four-result-cards" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 20}}>
              {[
                {title: '维持原判', body: '事实、法律正确、量刑适当 → 驳回申诉/抗诉维持；有瑕疵的裁定纠正后维持；身份信息有误可裁定更正', accent: C.reedInk, delay: 0},
                {title: '应当改判', body: '事实无误，但适用法律错误或量刑不当 → 撤销原判依法改判', accent: C.madderInk, delay: 60},
                {title: '可改可回', body: '依二审程序审理、事实不清证据不足 → 可查清后改判，也可发回重审', accent: C.indigoInk, delay: 120},
                {title: '宣告无罪', body: '查清后依法裁判；仍无法查清、证据不足 → 撤销原判宣告无罪', accent: C.goldInk, delay: 180},
              ].map((shelf) => (
                <ClothCard key={shelf.title} style={{flex: 1, height: 300, padding: '18px 22px', borderColor: shelf.accent, ...enter(frame, shelf.delay, 24)}}>
                  <div style={{fontSize: 25, fontWeight: 950, color: shelf.accent, marginBottom: 10}}>{shelf.title}</div>
                  <div style={{fontSize: 20, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>{shelf.body}</div>
                </ClothCard>
              ))}
            </div>
          </div>

          <div
            data-final-knowledge="effect-band"
            style={{
              position: 'absolute',
              left: 0,
              top: 356,
              width: MAIN_WIDTH,
              ...enter(frame, 240, 24),
            }}
          >
            <ClothCard style={{padding: '18px 26px', borderColor: C.reed}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <Undo2 size={28} strokeWidth={2.5} style={{color: C.reedInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.reedInk}}>原判效力</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                  再审期间<ThinUnderline color={C.reedInk}>不停止</ThinUnderline>原裁判执行；但可能<SoftHighlight color={C.madderInk}>改判无罪</SoftHighlight>或减轻刑罚致<SoftHighlight color={C.madderInk}>刑期届满</SoftHighlight>的，可以中止执行，必要时可取保、监居
                </div>
              </div>
            </ClothCard>
          </div>

          <div
            data-final-knowledge="effect-mnemonic-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 494,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 290, 16),
            }}
          >
            <Scale size={24} strokeWidth={2.5} style={{color: C.gold, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(239,231,212,0.88)', fontWeight: 700}}>
              口诀：申诉绝不停执行，再审无罪届满停；再审全对应维持，纠正瑕疵也维持，法律量刑应改判，事实不清可改回
            </span>
          </div>
        </div>
      </div>
    </LoomShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const RetrialRewindLoom: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.umber, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['launcher-shuttles'].start} duration={SCENES['launcher-shuttles'].duration}>
      <LauncherShuttlesScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['procedure-weft'].start} duration={SCENES['procedure-weft'].duration}>
      <ProcedureWeftScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['result-shelf'].start} duration={SCENES['result-shelf'].duration}>
      <ResultShelfScene />
    </TimelineSequence>
  </AbsoluteFill>
);
