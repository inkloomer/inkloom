import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Signal Tower — 四向信号塔 · 不起诉
const C = {
  tower: '#1F2E2B',
  towerDeep: '#182422',
  enamel: '#F0EBDB',
  enamelAlt: '#E5DFCC',
  ink: '#262E2B',
  inkSoft: '#656E69',
  arm: '#D9A13B',
  armInk: '#83631B',
  armSoft: '#F2E6C8',
  stop: '#B2472F',
  stopInk: '#742D1A',
  stopSoft: '#F2DCD4',
  go: '#3F7F5F',
  goInk: '#2A5641',
  goSoft: '#DFEDE3',
  signalBlue: '#4E7C99',
  blueInk: '#31536A',
  blueSoft: '#DBE7EE',
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

const TowerShell = ({
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
      backgroundColor: C.tower,
      backgroundImage:
        'repeating-linear-gradient(135deg, rgba(217,161,59,0.04) 0 2px, transparent 2px 22px),' +
        'radial-gradient(circle at 16% 14%, rgba(217,161,59,0.12), transparent 30%),' +
        'radial-gradient(circle at 86% 86%, rgba(78,124,153,0.16), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.enamel,
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
          backgroundColor: C.towerDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.arm,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        塔号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.enamel}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(240,235,219,0.66)',
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

const EnamelCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.enamel,
      border: `3px solid ${C.arm}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(5,9,8,0.5), inset 0 0 0 2px rgba(217,161,59,0.22)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 三类不起诉的信号臂
// ---------------------------------------------------------------

export const ThreeKindsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <TowerShell accent={C.arm} code="13-1" subtitle="考点4 不起诉种类 · 法定、酌定与存疑" title="三面信号臂">
      <div
        data-layout="three-signal-arms-with-special-note"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="statutory-nonprosecution-must-follow-sixteen-circumstances,discretionary-needs-minor-crime-and-exempt-punishment,insufficient-evidence-splits-natural-and-excluded-lanes,new-evidence-can-reopen-prosecution"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="情节轻微＝酌定；情节显著轻微＝法定" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="statutory-arm" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 0, top: 24, width: 560, height: 400, padding: '20px 24px', borderColor: C.stop, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.stopInk, marginBottom: 12}}>法定不起诉 · 绝对</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>没有犯罪事实，或符合刑诉法第 16 条情形</div>
                <div>口诀：<ThinUnderline color={C.stopInk}>显时特告死，他坏不追责</ThinUnderline></div>
                <div>检察长批准 → <Chip color={C.stop} label="应当不诉" solid /></div>
              </div>
              <div style={{marginTop: 14, fontSize: 20, color: C.inkSoft, fontWeight: 700, lineHeight: 1.5}}>
                「没有犯罪事实」与「第 16 条」是并列关系，不是一个制度
              </div>
            </EnamelCard>
          </div>

          <div data-final-knowledge="discretionary-arm" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 620, top: 24, width: 560, height: 400, padding: '20px 24px', borderColor: C.arm, ...enter(frame, 60, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.armInk, marginBottom: 12}}>酌定不起诉 · 相对</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><ThinUnderline color={C.armInk}>犯罪情节轻微</ThinUnderline>，依刑法不需要判处刑罚或免除刑罚</div>
                <div>检察长批准 → <Chip color={C.arm} label="可以不诉" /></div>
              </div>
              <div style={{marginTop: 14, border: `2px dashed ${C.stop}`, borderRadius: 8, backgroundColor: C.stopSoft, padding: '10px 14px'}}>
                <div style={{fontSize: 20, lineHeight: 1.5, color: C.stopInk, fontWeight: 700}}>
                  易混辨析：「犯罪情节轻微」→ 酌定不诉；「情节<SoftHighlight color={C.stopInk}>显著</SoftHighlight>轻微」→ 法定不诉
                </div>
              </div>
            </EnamelCard>
          </div>

          <div data-final-knowledge="insufficient-arm" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 1240, top: 24, width: 560, height: 400, padding: '20px 24px', borderColor: C.signalBlue, ...enter(frame, 120, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.blueInk, marginBottom: 12}}>存疑不起诉 · 证据不足</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.signalBlue} label="先天不足" /> 二次补侦仍不足 → <Chip color={C.stop} label="应当不诉" solid /></div>
                <div style={{paddingLeft: 96}}>一次补侦无必要再补 → 可以不诉</div>
                <div><Chip color={C.signalBlue} label="后天不足" /> 排除非法证据后不能证明犯罪 → 不批捕 / 不起诉</div>
              </div>
              <div style={{marginTop: 14, fontSize: 20, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>
                存疑不诉后发现新证据、符合起诉条件的，可以再提起公诉
              </div>
            </EnamelCard>
          </div>

          <div
            data-final-knowledge="special-nonprosecution-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 462,
              width: MAIN_WIDTH,
              ...enter(frame, 200, 22),
            }}
          >
            <EnamelCard style={{padding: '14px 24px', borderColor: C.stop}}>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <Chip color={C.stop} label="特别不追责" /> 自愿如实供述＋重大立功或涉及国家重大利益，经<ThinUnderline color={C.stopInk}>最高检核准</ThinUnderline>：公安层报公安部商最高检 → 特别撤案；检院层报最高检 → 特别不诉
              </div>
            </EnamelCard>
          </div>
        </div>
      </div>
    </TowerShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 程序六道闸
// ---------------------------------------------------------------

export const ProcedureGatesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <TowerShell accent={C.signalBlue} code="13-2" subtitle="不起诉的程序 · 批准、生效、撤销、倒流、处置与意见" title="程序六道闸">
      <div
        data-layout="six-gate-grid-with-refile-banner"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="public-official-crimes-need-higher-approval,decision-takes-effect-on-public-announcement,wrong-decisions-are-revoked-never-auto-expire,refile-flows-back-to-investigation-with-property-handled"
        data-focal-channels="contrast,enclosure,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="不起诉自公开宣布之日起生效；可以撤销，没有自动撤销" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="six-gate-grid" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 20, width: MAIN_WIDTH, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20}}>
              {[
                {title: '① 上级批准', body: '检院自侦案件、监委移送案件拟不诉的，报请上一级检察院批准', accent: C.stopInk, delay: 0},
                {title: '② 宣布生效', body: '不起诉决定书自公开宣布之日起生效', accent: C.goInk, delay: 50},
                {title: '③ 撤销不诉', body: '确有错误符合起诉条件的，撤销后提起公诉；没有自动撤销', accent: C.stopInk, delay: 100},
                {title: '④ 程序倒流', body: '犯罪事实并非其所为：书面说明理由，退回监委 / 公安建议重新调查侦查；自侦案件发现法定情形 → 退回本院侦查部门建议撤案', accent: C.blueInk, delay: 150},
                {title: '⑤ 财产处置', body: '解除查冻扣；被害人合法财产及时返还附清单；无权没收——提出检察意见移送主管机关', accent: C.goInk, delay: 200},
                {title: '⑥ 检察意见', body: '需要行政处罚、政务处分的，经检察长批准向相关部门提出检察意见', accent: C.armInk, delay: 250},
              ].map((gate) => (
                <EnamelCard key={gate.title} style={{height: 190, padding: '16px 20px', borderColor: gate.accent, ...enter(frame, gate.delay, 22)}}>
                  <div style={{fontSize: 24, fontWeight: 950, color: gate.accent, marginBottom: 8}}>{gate.title}</div>
                  <div style={{fontSize: 20, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>{gate.body}</div>
                </EnamelCard>
              ))}
            </div>
          </div>

          <div
            data-final-knowledge="refile-banner"
            style={{
              position: 'absolute',
              left: 0,
              top: 462,
              width: MAIN_WIDTH,
              ...enter(frame, 300, 22),
            }}
          >
            <EnamelCard style={{padding: '14px 24px', borderColor: C.signalBlue}}>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <Chip color={C.signalBlue} label="记忆锚" /> 公职犯罪要<SoftHighlight color={C.blueInk}>上级点头</SoftHighlight>；宣布才生效；错了<SoftHighlight color={C.stopInk}>人工撤销</SoftHighlight>，不存在自动失效
              </div>
            </EnamelCard>
          </div>
        </div>
      </div>
    </TowerShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 救济四向
// ---------------------------------------------------------------

export const ReliefForkScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <TowerShell accent={C.go} code="13-3" subtitle="不起诉的救济 · 四类主体四个方向" title="救济四向">
      <div
        data-layout="four-relief-columns-with-standing-banner"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="police-climb-review-then-recheck,victim-picks-appeal-or-direct-suit,court-filing-stops-procuratorate-review,only-discretionary-released-get-appeal"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="被害人可以不经申诉直接向法院起诉" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="police-relief" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 0, top: 24, width: 420, height: 380, padding: '18px 22px', borderColor: C.signalBlue, ...enter(frame, 0, 24)}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.blueInk, marginBottom: 10}}>公安机关不服</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.signalBlue} label="同级检院" /> 复议</div>
                <div>不服 → <Chip color={C.signalBlue} label="上一级检院" /> 复核</div>
              </div>
            </EnamelCard>
          </div>

          <div data-final-knowledge="victim-relief" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 460, top: 24, width: 440, height: 380, padding: '18px 22px', borderColor: C.stop, ...enter(frame, 60, 24)}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.stopInk, marginBottom: 10}}>被害人不服</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>收到决定书 <Chip color={C.stop} label="7 日内" /> 向<ThinUnderline color={C.stopInk}>上一级检院</ThinUnderline>申诉</div>
                <div>或<SoftHighlight color={C.stopInk}>不经申诉</SoftHighlight>，直接向法院起诉</div>
                <div style={{fontSize: 20, color: C.inkSoft}}>法院受理后：检院终止复查，移送案卷材料</div>
              </div>
            </EnamelCard>
          </div>

          <div data-final-knowledge="released-relief" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 940, top: 24, width: 420, height: 380, padding: '18px 22px', borderColor: C.arm, ...enter(frame, 120, 24)}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.armInk, marginBottom: 10}}>被酌定不诉人</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>7 日内向<ThinUnderline color={C.armInk}>作出决定的检院</ThinUnderline>申诉</div>
                <ExternalNegation color={C.stopInk} iconSize={20}>法定不诉、存疑不诉的被不起诉人没有救济途径</ExternalNegation>
              </div>
            </EnamelCard>
          </div>

          <div data-final-knowledge="commission-relief" style={{position: 'absolute', inset: 0}}>
            <EnamelCard style={{position: 'absolute', left: 1400, top: 24, width: 400, height: 380, padding: '18px 22px', borderColor: C.go, ...enter(frame, 180, 24)}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.goInk, marginBottom: 10}}>监委会不服</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>认为不起诉决定有错误</div>
                <div>向<ThinUnderline color={C.goInk}>上一级检院</ThinUnderline>提请复议</div>
              </div>
            </EnamelCard>
          </div>

          <div
            data-final-knowledge="standing-banner"
            style={{
              position: 'absolute',
              left: 0,
              top: 442,
              width: MAIN_WIDTH,
              ...enter(frame, 250, 22),
            }}
          >
            <EnamelCard style={{padding: '14px 24px', borderColor: C.go}}>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <Chip color={C.go} label="口诀" /> 公安复议复核、被害人申诉或自诉、酌定被不诉人向原院申诉、监委向上一级提请复议——被害人的申诉与自诉<SoftHighlight color={C.stopInk}>没有顺序限制</SoftHighlight>
              </div>
            </EnamelCard>
          </div>
        </div>
      </div>
    </TowerShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const NonprosecutionSignalTower: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.tower, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['three-kinds-arms'].start} duration={SCENES['three-kinds-arms'].duration}>
      <ThreeKindsScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['procedure-gates'].start} duration={SCENES['procedure-gates'].duration}>
      <ProcedureGatesScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['relief-fork-tower'].start} duration={SCENES['relief-fork-tower'].duration}>
      <ReliefForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
