import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, Gavel, RefreshCw, User, Users, XCircle} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Bench Assembly Atelier — 席位拼合台 · 审判组织
const C = {
  atelier: '#2E282E',
  atelierDeep: '#231F23',
  block: '#EFE6D2',
  blockAlt: '#E4D8BF',
  ink: '#2C262A',
  inkSoft: '#6E626A',
  plum: '#9C5570',
  plumInk: '#6B3549',
  plumSoft: '#EFDBE2',
  mint: '#5F9C8B',
  mintInk: '#3C6B5D',
  mintSoft: '#DDEBE6',
  brass2: '#C2A15B',
  brass2Ink: '#7A6330',
  brass2Soft: '#EFE3C4',
  steel: '#6E7B85',
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

const AtelierShell = ({
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
      backgroundColor: C.atelier,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(239,230,210,0.03) 0 2px, transparent 2px 30px),' +
        'radial-gradient(circle at 16% 14%, rgba(156,85,112,0.16), transparent 30%),' +
        'radial-gradient(circle at 84% 86%, rgba(95,156,139,0.16), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.block,
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
          backgroundColor: C.atelierDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.brass2,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        台号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.block}}>
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

const BlockCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.block,
      border: `3px solid ${C.plum}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,6,8,0.5), inset 0 0 0 2px rgba(156,85,112,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 三种组织形式
// ---------------------------------------------------------------

export const ThreeFormsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AtelierShell accent={C.plum} code="14-1" subtitle="考点4 审判组织 · 独任制、合议制与审委会" title="三种组织形式">
      <div
        data-layout="triple-form-cards-with-ladder-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="solo-bench-limits-base-court-summary-and-fast-trial,collegial-ladder-counts-by-instance-not-court-level,seven-judge-bench-fixes-three-judges-four-assessors,parties-never-choose-the-bench-size"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="做题看审级，不看层级；合议庭人数当事人无选择权" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="solo-form" style={{position: 'absolute', inset: 0}}>
            <BlockCard style={{position: 'absolute', left: 0, top: 24, width: 420, height: 400, padding: '20px 24px', borderColor: C.mint, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <User size={28} strokeWidth={2.5} style={{color: C.mintInk, flexShrink: 0}} />
                <span style={{fontSize: 29, fontWeight: 950, color: C.mintInk, lineHeight: 1.2}}>独任制</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>仅<ThinUnderline color={C.mintInk}>基层法院</ThinUnderline></div>
                <div>仅<ThinUnderline color={C.mintInk}>简易、速裁</ThinUnderline>程序一审</div>
                <div>由<Chip color={C.mint} label="1 名审判员" /> 独任</div>
                <ExternalNegation color={C.stopInk} iconSize={20}>陪审员不参加独任庭</ExternalNegation>
              </div>
            </BlockCard>
          </div>

          <div data-final-knowledge="collegial-form" style={{position: 'absolute', inset: 0}}>
            <BlockCard style={{position: 'absolute', left: 450, top: 24, width: 830, height: 400, padding: '20px 26px', borderColor: C.plum, borderWidth: 4, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Users size={28} strokeWidth={2.5} style={{color: C.plumInk, flexShrink: 0}} />
                <span style={{fontSize: 29, fontWeight: 950, color: C.plumInk, lineHeight: 1.2}}>合议制 · 一审人数阶梯</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.plum} label="基层 · 中级一审" /> 3 人，或 3 / 7 人（7 人庭＝法官 3＋陪审 4）
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.brass2Ink} label="高级一审" /> 3 / 5 / 7 人，5 人庭无陪审员
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.mintInk} label="最高一审" /> 3 / 5 / 7 人，无陪审员
                </div>
                <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                  <Chip color={C.plumInk} label="二审" /> 3 / 5 人，无陪审员
                  <Chip color={C.stopInk} label="死刑复核" /> 3 人，无陪审员
                </div>
              </div>
              <div style={{marginTop: 14, border: `3px solid ${C.brass2}`, borderRadius: 8, backgroundColor: C.brass2Soft, padding: '10px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.brass2Ink, lineHeight: 1.45}}>口诀：基中三三七 · 高级三五七 · 复三上三五</div>
              </div>
            </BlockCard>
          </div>

          <div data-final-knowledge="committee-form" style={{position: 'absolute', inset: 0}}>
            <BlockCard style={{position: 'absolute', left: 1310, top: 24, width: 490, height: 400, padding: '20px 24px', borderColor: C.brass2, ...enter(frame, 140, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Gavel size={28} strokeWidth={2.5} style={{color: C.brass2Ink, flexShrink: 0}} />
                <span style={{fontSize: 29, fontWeight: 950, color: C.brass2Ink, lineHeight: 1.2}}>审判委员会</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>合议庭分歧大，可<ThinUnderline color={C.brass2Ink}>提请院长</ThinUnderline>决定是否提交审委会讨论</div>
                <div style={{fontSize: 21, color: C.inkSoft}}>发回重审后，原合议庭成员不得再参与审委会讨论本案</div>
              </div>
            </BlockCard>
          </div>

          <div
            data-final-knowledge="no-choice-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 464,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 210, 16),
            }}
          >
            <CheckCircle2 size={26} strokeWidth={2.5} style={{color: C.plum, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,230,210,0.88)', fontWeight: 700}}>
              审判长由<SoftHighlight color={C.plumInk}>审判员</SoftHighlight>担任，院长庭长参审自任审判长；合议庭几人组成，<ThinUnderline color={C.plumInk}>当事人无选择权</ThinUnderline>
            </span>
          </div>
        </div>
      </div>
    </AtelierShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 陪审员任职与抽选
// ---------------------------------------------------------------

export const AssessorQualificationScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AtelierShell accent={C.brass2} code="14-2" subtitle="人民陪审员 · 任职条件、名额抽选与任期" title="陪审员的拼装规格">
      <div
        data-layout="qualification-fork-with-quota-bench"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="positive-and-negative-conditions-gate-eligibility,quota-runs-triple-the-judge-count,random-draw-seats-seven-days-before-trial,five-year-term-rarely-renewed"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="年满 28 周岁＋高中以上学历；司法行政机关会同抽选" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="positive-negative-conditions" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
              <BlockCard style={{flex: 1, height: 300, padding: '20px 24px', borderColor: C.mint, ...enter(frame, 0, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <CheckCircle2 size={28} strokeWidth={2.6} style={{color: C.mintInk, flexShrink: 0}} />
                  <span style={{fontSize: 26, fontWeight: 950, color: C.mintInk}}>积极条件</span>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                  {['拥护宪法', '年满 28 周岁', '品行良好', '身体正常', '高中以上学历'].map((item, index) => (
                    <Chip key={item} color={C.mint} label={item} style={{opacity: interpolate(frame, [30 + index * 10, 44 + index * 10], [0, 1], clamp)}} />
                  ))}
                </div>
              </BlockCard>
              <BlockCard style={{flex: 1.4, height: 300, padding: '20px 24px', borderColor: C.stop, ...enter(frame, 70, 26)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <XCircle size={28} strokeWidth={2.6} style={{color: C.stopInk, flexShrink: 0}} />
                  <span style={{fontSize: 26, fontWeight: 950, color: C.stopInk}}>消极条件</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>法律职业禁止：公检法司机关工作人员、律师公证仲裁员、基层法律服务者</div>
                  <div>违法违纪禁止：受过刑事处罚、开除公职、吊销执业证、失信名单、被免陪审员职务等</div>
                </div>
              </BlockCard>
            </div>
          </div>

          <div data-final-knowledge="quota-draw-bench" style={{position: 'absolute', inset: 0}}>
            <BlockCard style={{position: 'absolute', left: 0, top: 356, width: MAIN_WIDTH, height: 200, padding: '18px 26px', borderColor: C.brass2, ...enter(frame, 150, 24)}}>
              <div style={{display: 'flex', gap: 30, alignItems: 'center'}}>
                <div style={{flex: 1, fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  <Chip color={C.brass2Ink} label="名额 ≥ 法官数 3 倍" /> 基层法院提请同级人大常委会决定；随机抽选从常住居民中抽 5 倍以上候选人
                </div>
                <div style={{width: 3, backgroundColor: C.brass2, borderRadius: 2, opacity: 0.5, alignSelf: 'stretch'}} />
                <div style={{flex: 1, fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  个人申请或单位推荐产生的不超名额 <SoftHighlight color={C.brass2Ink}>1/5</SoftHighlight>；法院应在<ThinUnderline color={C.brass2Ink}>开庭 7 日前</ThinUnderline>随机抽取确定陪审员
                </div>
                <div style={{width: 3, backgroundColor: C.brass2, borderRadius: 2, opacity: 0.5, alignSelf: 'stretch'}} />
                <div style={{flex: 0.8, fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  任命后<ThinUnderline color={C.plumInk}>公开宣誓</ThinUnderline>；任期 5 年，一般不得连任
                </div>
              </div>
            </BlockCard>
          </div>
        </div>
      </div>
    </AtelierShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 7 人庭与权限
// ---------------------------------------------------------------

export const SevenBenchPowersScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AtelierShell accent={C.mint} code="14-3" subtitle="人民陪审员 · 应组 7 人庭与 3/7 人庭权限" title="陪审员与七人庭">
      <div
        data-layout="seven-bench-trigger-with-power-split"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="ten-year-death-major-cases-need-seven-bench,land-eco-food-safety-also-need-seven-bench,three-bench-votes-both-fact-and-law,seven-bench-votes-fact-only-voices-law"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="7 人庭只表决事实、法律只发表不表决" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="seven-bench-triggers" style={{position: 'absolute', inset: 0}}>
            <BlockCard style={{position: 'absolute', left: 0, top: 24, width: 820, height: 430, padding: '20px 26px', borderColor: C.mint, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <Users size={30} strokeWidth={2.5} style={{color: C.mintInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.mintInk, lineHeight: 1.2}}>应组 7 人庭（基层、中级、高级一审）</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.mint} label="十无死重" /> 可能判 10 年以上、无期、死刑且社会影响重大</div>
                <div><Chip color={C.mint} label="拆环食药" /> 征地拆迁、生态环境、食品药品安全，影响重大</div>
                <div><Chip color={C.mint} label="其他" /> 社会影响重大的案件（刑诉解释 213 条）</div>
              </div>
              <div style={{marginTop: 16, border: `3px solid ${C.brass2}`, borderRadius: 8, backgroundColor: C.brass2Soft, padding: '12px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.brass2Ink, lineHeight: 1.5}}>
                  7 人庭构成：只能法官 3 ＋ 陪审员 4
                </div>
              </div>
              <div style={{marginTop: 14, fontSize: 21, lineHeight: 1.5, color: C.inkSoft, fontWeight: 700}}>
                陪审员抽选：名额≥法官数 3 倍；法院开庭 7 日前随机抽取；任期 5 年一般不得连任
              </div>
            </BlockCard>
          </div>

          <div data-final-knowledge="power-split-cards" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 860, top: 24, width: 940, display: 'flex', flexDirection: 'column', gap: 20}}>
              <BlockCard style={{height: 200, padding: '18px 24px', borderColor: C.plum, ...enter(frame, 90, 24)}}>
                <div style={{fontSize: 26, fontWeight: 950, color: C.plumInk, marginBottom: 10}}>3 人庭 · 全权参审</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  审判长须法官，另 2 人可均为陪审员；陪审员对<SoftHighlight color={C.plumInk}>事实与法律都可独立发表意见并表决</SoftHighlight>
                </div>
              </BlockCard>
              <BlockCard style={{height: 210, padding: '18px 24px', borderColor: C.mint, ...enter(frame, 150, 24)}}>
                <div style={{fontSize: 26, fontWeight: 950, color: C.mintInk, marginBottom: 10}}>7 人庭 · 事实参审</div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  陪审员<Chip color={C.mint} label="表决事实 ✓" /> <Chip color={C.stopInk} label="表决法律 ✗" solid={false} /> 法律问题<ThinUnderline color={C.mintInk}>只发表意见不表决</ThinUnderline>；难区分的视为事实问题
                </div>
              </BlockCard>
            </div>
          </div>

          <div
            data-final-knowledge="assessor-scope-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 494,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 220, 16),
            }}
          >
            <RefreshCw size={26} strokeWidth={2.5} style={{color: C.mint, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(239,230,210,0.88)', fontWeight: 700}}>
              陪审员只参加一审：二审、死刑复核、最高院一审均无陪审员；被告人可申请陪审参加，但<ThinUnderline color={C.plumInk}>无决定权</ThinUnderline>
            </span>
          </div>
        </div>
      </div>
    </AtelierShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const TrialBenchComposition: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.atelier, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['three-forms-bench'].start} duration={SCENES['three-forms-bench'].duration}>
      <ThreeFormsScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES['assessor-qualification-desk'].start}
      duration={SCENES['assessor-qualification-desk'].duration}
    >
      <AssessorQualificationScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['seven-bench-powers'].start} duration={SCENES['seven-bench-powers'].duration}>
      <SevenBenchPowersScene />
    </TimelineSequence>
  </AbsoluteFill>
);
