import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, DoorClosed, Leaf, Sprout, Sun, XCircle} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Observatory Greenhouse — 观护温室 · 附条件不起诉
const C = {
  glass: '#1F2D24',
  glassDeep: '#17231C',
  pane: '#EDEDE0',
  paneAlt: '#E1E2D2',
  ink: '#262E28',
  inkSoft: '#676F68',
  sprout: '#4E8F5C',
  sproutInk: '#31603C',
  sproutSoft: '#DDEEE1',
  flower: '#C96A5A',
  flowerInk: '#8A4136',
  flowerSoft: '#F2DDD6',
  water: '#4E8FB0',
  waterInk: '#31627A',
  waterSoft: '#DCEAF1',
  sun: '#D9A13B',
  sunInk: '#83631B',
  sunSoft: '#F2E6C8',
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

const GreenhouseShell = ({
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
      backgroundColor: C.glass,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(237,237,224,0.04) 0 2px, transparent 2px 60px),' +
        'repeating-linear-gradient(0deg, rgba(237,237,224,0.03) 0 2px, transparent 2px 90px),' +
        'radial-gradient(circle at 20% 14%, rgba(78,143,92,0.18), transparent 32%),' +
        'radial-gradient(circle at 82% 88%, rgba(217,161,59,0.12), transparent 32%)',
      backgroundSize: 'auto, auto, auto, auto',
      color: C.pane,
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
          backgroundColor: C.glassDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.sprout,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        室号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.pane}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(237,237,224,0.66)',
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

const PaneCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.pane,
      border: `3px solid ${C.sprout}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(6,10,7,0.5), inset 0 0 0 2px rgba(78,143,92,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 入室条件
// ---------------------------------------------------------------

export const EntryConditionsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <GreenhouseShell accent={C.sprout} code="20-1" subtitle="考点2 附条件不起诉 · 五项入室条件" title="入室条件温室">
      <div
        data-layout="condition-pane-wall-with-trap-strip"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="five-conditions-open-the-greenhouse-door,one-year-cap-replaces-three-year-misread,single-side-remorse-suffices-without-settlement,decision-hears-police-victim-and-agents-first"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="未成年、四五六、一起悔，附不诉" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="condition-panes" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 18}}>
              {[
                {title: '未成年', body: '犯时已满 12 不满 18 周岁', accent: C.sproutInk, delay: 0},
                {title: '四五六', body: '侵犯人身、财产权利，妨害社会管理秩序犯罪（四章至六章）', accent: C.waterInk, delay: 40},
                {title: '一起悔', body: '可能判处 1 年有期徒刑以下＋符合起诉条件＋有悔罪表现', accent: C.sunInk, delay: 80},
              ].map((pane) => (
                <PaneCard key={pane.title} style={{flex: 1, height: 230, padding: '20px 24px', borderColor: pane.accent, ...enter(frame, pane.delay, 24)}}>
                  <div style={{fontSize: 27, fontWeight: 950, color: pane.accent, marginBottom: 10}}>{pane.title}</div>
                  <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>{pane.body}</div>
                </PaneCard>
              ))}
            </div>
          </div>

          <div data-final-knowledge="may-note" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 274, width: MAIN_WIDTH, display: 'flex', gap: 18}}>
              <PaneCard style={{flex: 1, padding: '14px 22px', borderColor: C.sprout, ...enter(frame, 130, 18)}}>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <Chip color={C.sprout} label="可以" /> 不诉而非应当；决定前听取<ThinUnderline color={C.sproutInk}>公安、被害人、法定代理人、辩护人</ThinUnderline>意见并附卷
                </span>
              </PaneCard>
            </div>
          </div>

          <div data-final-knowledge="trap-strip" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 372, width: MAIN_WIDTH, display: 'flex', gap: 18}}>
              <PaneCard style={{flex: 1, padding: '14px 22px', borderColor: C.flower, ...enter(frame, 180, 20)}}>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <XCircle size={22} strokeWidth={2.6} style={{color: C.flowerInk, marginRight: 8, verticalAlign: -3}} />
                  是<SoftHighlight color={C.flowerInk}>1 年以下</SoftHighlight>，不是 3 年以下
                </span>
              </PaneCard>
              <PaneCard style={{flex: 1.6, padding: '14px 22px', borderColor: C.flower, ...enter(frame, 210, 20)}}>
                <span style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <CheckCircle2 size={22} strokeWidth={2.6} style={{color: C.sproutInk, marginRight: 8, verticalAlign: -3}} />
                  只需<SoftHighlight color={C.sproutInk}>嫌疑人单方悔罪</SoftHighlight>——不以双方和解为前提，也不以签认罪认罚具结书为前提
                </span>
              </PaneCard>
            </div>
          </div>
        </div>
      </div>
    </GreenhouseShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 异议处理与考验期
// ---------------------------------------------------------------

export const ObjectionTunnelScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <GreenhouseShell accent={C.water} code="20-2" subtitle="三方异议的分流与 6 个月—1 年考验期" title="异议分流与考验">
      <div
        data-layout="three-way-objection-split-with-obligation-band"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="suspect-objection-splits-prosecution-or-adjustment,victim-objection-only-appeals-never-self-suits,police-objection-climbs-review-then-recheck,obligation-band-chains-approved-moves-to-procuratorate"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="嫌疑人异议可能起诉；被害人只能申诉；公安先复议再复核" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="suspect-split" style={{position: 'absolute', inset: 0}}>
            <PaneCard style={{position: 'absolute', left: 0, top: 24, width: 700, height: 400, padding: '20px 24px', borderColor: C.water, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 27, fontWeight: 950, color: C.waterInk, marginBottom: 12}}>嫌疑人有异议</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>
                  对<ThinUnderline color={C.waterInk}>作附条件不起诉</ThinUnderline>有异议 → 检院应<Chip color={C.flower} label="提起公诉" solid />
                </div>
                <div>系无罪辩解且理由成立 → 应作<Chip color={C.sprout} label="法定不起诉" /></div>
                <div>仅对<ThinUnderline color={C.waterInk}>条件、考验期</ThinUnderline>有异议 → 可采纳合理意见调整；不利帮教的不采纳并释法说理，<SoftHighlight color={C.flowerInk}>不能因此提起公诉</SoftHighlight></div>
                <div style={{fontSize: 20, color: C.inkSoft}}>起诉前撤回异议的 → 可依法作出附条件不起诉</div>
              </div>
            </PaneCard>
          </div>

          <div data-final-knowledge="victim-police-split" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 740, top: 24, width: 1060, display: 'flex', flexDirection: 'column', gap: 18}}>
              <PaneCard style={{height: 150, padding: '18px 24px', borderColor: C.flower, ...enter(frame, 80, 24)}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.flowerInk, marginBottom: 8}}>被害人有异议</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  只能向<ThinUnderline color={C.flowerInk}>上一级检院申诉</ThinUnderline>；
                  <ExternalNegation color={C.flowerInk} iconSize={20}>不能自诉</ExternalNegation>
                </div>
              </PaneCard>
              <PaneCard style={{height: 150, padding: '18px 24px', borderColor: C.sprout, ...enter(frame, 130, 24)}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.sproutInk, marginBottom: 8}}>公安机关有异议</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  向<ThinUnderline color={C.sproutInk}>同级检院复议</ThinUnderline> → 不服再向<ThinUnderline color={C.sproutInk}>上一级复核</ThinUnderline>（规律：先复议、再复核）
                </div>
              </PaneCard>
              <PaneCard style={{height: 152, padding: '18px 24px', borderColor: C.sun, ...enter(frame, 180, 24)}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.sunInk, marginBottom: 8}}>考验期</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <Chip color={C.sun} label="6 个月—1 年" /> 自作出决定之日起算，<ThinUnderline color={C.sunInk}>不计入审查起诉期限</ThinUnderline>（其间中止计算）；可在法定范围内适当缩短或延长；检院为考察机关；在押的应释放或变更强制措施
                </div>
              </PaneCard>
            </div>
          </div>

          <div
            data-final-knowledge="obligation-band"
            style={{
              position: 'absolute',
              left: 0,
              top: 452,
              width: 700,
              ...enter(frame, 240, 22),
            }}
          >
            <PaneCard style={{padding: '16px 22px', borderColor: C.water}}>
              <div style={{fontSize: 21, lineHeight: 1.6, color: C.ink, fontWeight: 700}}>
                应守义务：守法服监督 · 报告活动 · 离市县迁居<ThinUnderline color={C.waterInk}>报经批准</ThinUnderline> · 接受矫治教育（戒瘾、心理、公益；禁特定场所人员活动；赔偿道歉）
              </div>
            </PaneCard>
          </div>
        </div>
      </div>
    </GreenhouseShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 出室结果
// ---------------------------------------------------------------

export const ExitDoorsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <GreenhouseShell accent={C.flower} code="20-3" subtitle="考验期满的两种出室结果" title="出室的两扇门">
      <div
        data-layout="exit-door-pair-with-relocation-banner"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="new-or-omitted-crimes-revoke-and-prosecute,serious-violations-revoke-and-prosecute,clean-term-ends-with-procuratorate-approval,term-end-nonprosecution-counts-as-statutory"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="违规严重 → 撤销并公诉；期满无违规 → 法定不起诉" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="revoke-door" style={{position: 'absolute', inset: 0}}>
            <PaneCard style={{position: 'absolute', left: 0, top: 30, width: 880, height: 360, padding: '22px 26px', borderColor: C.flower, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <DoorClosed size={30} strokeWidth={2.5} style={{color: C.flowerInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.flowerInk, lineHeight: 1.2}}>关闭门 · 撤销并公诉</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>考验期内犯<ThinUnderline color={C.flowerInk}>新罪</ThinUnderline>，或发现<ThinUnderline color={C.flowerInk}>漏罪</ThinUnderline></div>
                <div><SoftHighlight color={C.flowerInk}>违反规定情节严重</SoftHighlight></div>
                <div>→ 撤销附条件不起诉，提起公诉</div>
              </div>
            </PaneCard>
          </div>

          <div data-final-knowledge="release-door" style={{position: 'absolute', inset: 0}}>
            <PaneCard style={{position: 'absolute', left: 920, top: 30, width: 880, height: 360, padding: '22px 26px', borderColor: C.sprout, borderWidth: 4, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Sprout size={30} strokeWidth={2.5} style={{color: C.sproutInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.sproutInk, lineHeight: 1.2}}>出室门 · 不起诉</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>考验期内无上述情形，考验期满</div>
                <div>经<ThinUnderline color={C.sproutInk}>检察长批准</ThinUnderline>作出不起诉决定；决定前应<ThinUnderline color={C.sproutInk}>听取被害人意见</ThinUnderline></div>
                <div>
                  性质：属于<Chip color={C.sprout} label="法定不起诉" solid />，不等于附条件不起诉本身
                </div>
              </div>
            </PaneCard>
          </div>

          <div
            data-final-knowledge="relocation-banner"
            style={{
              position: 'absolute',
              left: 0,
              top: 430,
              width: MAIN_WIDTH,
              ...enter(frame, 160, 22),
            }}
          >
            <PaneCard style={{padding: '16px 26px', borderColor: C.sun}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <Sun size={28} strokeWidth={2.5} style={{color: C.sunInk, flexShrink: 0}} />
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  迁居口诀：<SoftHighlight color={C.sunInk}>经批准、离市县、家可搬、检不变</SoftHighlight>——可要求迁入地检察院协助考察，结果函告
                </div>
              </div>
            </PaneCard>
          </div>

          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 536,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 200, 16),
            }}
          >
            <Leaf size={24} strokeWidth={2.5} style={{color: C.sprout, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(237,237,224,0.88)', fontWeight: 700}}>
              附条件不起诉是给他一次在温室里改过的机会——门是留着，不是关死
            </span>
          </div>
        </div>
      </div>
    </GreenhouseShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const JuvenileObservatoryGreenhouse: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.glass, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['entry-conditions-panes'].start} duration={SCENES['entry-conditions-panes'].duration}>
      <EntryConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['objection-tunnel-split'].start} duration={SCENES['objection-tunnel-split'].duration}>
      <ObjectionTunnelScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['exit-doors-verdict'].start} duration={SCENES['exit-doors-verdict'].duration}>
      <ExitDoorsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
