import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame} from 'remotion';
import {
  ArrowDown,
  Ban,
  CheckCircle2,
  ClipboardList,
  ClipboardX,
  FileSearch,
  FileText,
  Mic,
  ShieldAlert,
  Users,
  Wrench,
} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Exclusion Grading Lattice — 证物分级检验柜
const C = {
  cabinet: '#D8DEE0',
  cabinetDeep: '#C3CDD0',
  card: '#FBFBF6',
  cardAlt: '#EFF3F2',
  ink: '#222A2C',
  inkSoft: '#5B6669',
  line: '#A5B2B5',
  vermilion: '#BE3A2F',
  vermilionInk: '#8A261E',
  vermilionSoft: '#F9E4E1',
  ochre: '#AB7A22',
  ochreInk: '#75520F',
  ochreSoft: '#F9EEDB',
  cobalt: '#2C5C9E',
  cobaltInk: '#1D3F70',
  cobaltSoft: '#E3EAF7',
  pine: '#2C7157',
  pineInk: '#1D4D3B',
  pineSoft: '#DFEDE5',
  slate: '#475155',
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

const rise = (frame: number, delay: number) =>
  spring({frame: frame - delay, fps: 60, config: {damping: 16, mass: 0.7, stiffness: 170}, durationInFrames: 26});

// ---------------------------------------------------------------
// Shared surface primitives
// ---------------------------------------------------------------

const CabinetShell = ({
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
      backgroundColor: C.cabinet,
      backgroundImage:
        'radial-gradient(circle at 12% 10%, rgba(255,255,255,0.85), transparent 26%),' +
        'radial-gradient(circle at 90% 94%, rgba(120,136,139,0.28), transparent 36%),' +
        'linear-gradient(rgba(34,42,44,0.05) 2px, transparent 2px),' +
        'linear-gradient(90deg, rgba(34,42,44,0.05) 2px, transparent 2px)',
      backgroundSize: 'auto,auto,60px 60px,60px 60px',
      color: C.ink,
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
          backgroundColor: C.card,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: accent,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        检材 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: C.inkSoft,
          fontFamily: 'var(--inkloom-animation-label)',
          textAlign: 'right',
          maxWidth: 520,
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
      backgroundColor: solid ? color : `${color}1E`,
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

const Stamp = ({
  color,
  ink,
  label,
  soft,
  style,
}: {
  readonly color: string;
  readonly ink: string;
  readonly label: string;
  readonly soft: string;
  readonly style?: React.CSSProperties;
}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 22px',
      border: `3px solid ${color}`,
      backgroundColor: soft,
      borderRadius: 10,
      color: ink,
      fontSize: 30,
      fontWeight: 950,
      letterSpacing: 3,
      lineHeight: 1.25,
      whiteSpace: 'nowrap',
      boxShadow: `inset 0 0 0 2px ${soft}`,
      ...style,
    }}
  >
    {label}
  </div>
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
      backgroundColor: `${color}24`,
      borderRadius: 6,
      padding: '2px 8px',
      boxShadow: `inset 0 -3px 0 ${color}55`,
      ...style,
    }}
  >
    {children}
  </span>
);

const ThinUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span style={{borderBottom: `2px solid ${color}`, paddingBottom: 2}}>{children}</span>
);

const ExternalNegation = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
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
    <Ban size={22} strokeWidth={2.6} style={{flexShrink: 0, marginTop: 3}} />
    <span>{children}</span>
  </span>
);

const DropArrow = ({
  color,
  height,
  left,
  progress,
  size = 34,
  top,
}: {
  readonly color: string;
  readonly height: number;
  readonly left: number;
  readonly progress: number;
  readonly size?: number;
  readonly top: number;
}) => (
  <div style={{position: 'absolute', left: left - size / 2, top, width: size, height, opacity: progress > 0 ? 1 : 0}}>
    <div
      style={{
        position: 'absolute',
        left: size / 2 - 2,
        top: 0,
        width: 4,
        height: Math.max(0, height - size + 6),
        backgroundColor: color,
        scale: `1 ${Math.max(0.001, progress)}`,
        transformOrigin: 'top center',
      }}
    />
    <ArrowDown
      size={size}
      strokeWidth={3.2}
      style={{position: 'absolute', left: 0, top: height - size, color, opacity: interpolate(progress, [0.75, 1], [0, 1], clamp)}}
    />
  </div>
);

const Panel = ({
  accent,
  children,
  height,
  left,
  style,
  top,
  width,
}: {
  readonly accent: string;
  readonly children: React.ReactNode;
  readonly height: number;
  readonly left: number;
  readonly style?: React.CSSProperties;
  readonly top: number;
  readonly width: number;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      position: 'absolute',
      left,
      top,
      width,
      height,
      backgroundColor: C.card,
      border: `3px solid ${accent}`,
      borderTop: `8px solid ${accent}`,
      borderRadius: 10,
      padding: 18,
      boxSizing: 'border-box',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

const SpecimenChip = ({
  color,
  icon: Icon,
  label,
  soft,
  style,
}: {
  readonly color: string;
  readonly icon: typeof FileText;
  readonly label: string;
  readonly soft: string;
  readonly style?: React.CSSProperties;
}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '6px 14px',
      backgroundColor: soft,
      border: `2px dashed ${color}`,
      borderRadius: 8,
      color,
      fontSize: 22,
      fontWeight: 900,
      fontFamily: 'var(--inkloom-animation-label)',
      whiteSpace: 'nowrap',
      lineHeight: 1.3,
      ...style,
    }}
  >
    <Icon size={22} strokeWidth={2.6} />
    {label}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 取证违法的三重筛格
// ---------------------------------------------------------------
type Grade = {
  readonly accent: string;
  readonly code: string;
  readonly grade: string;
  readonly ink: string;
  readonly items: readonly string[];
  readonly qualifier: string;
  readonly soft: string;
  readonly verdict: string;
};

const SHAFT_WIDTH = 573;
const SHAFT_HEIGHT = 612;

const GRADES: readonly Grade[] = [
  {
    accent: C.vermilion,
    code: 'I',
    grade: '故意非法',
    ink: C.vermilionInk,
    items: ['暴力方法 / 变相肉刑', '威胁损害本人及近亲属权益', '非法拘禁等限制人身自由'],
    qualifier: '主观：故意',
    soft: C.vermilionSoft,
    verdict: '应当予以排除',
  },
  {
    accent: C.ochre,
    code: 'II',
    grade: '严重程序失误',
    ink: C.ochreInk,
    items: ['物证书证未附笔录、来源不明', '证言未个别询问、未经核对', '讯问未成年人无合适成年人在场'],
    qualifier: '主观：过失',
    soft: C.ochreSoft,
    verdict: '不得作为定案根据',
  },
  {
    accent: C.cobalt,
    code: 'III',
    grade: '轻微错误',
    ink: C.cobaltInk,
    items: ['笔录仅一名侦查人员签名', '辨认未邀请见证人', '电子数据未封存移送'],
    qualifier: '瑕疵证据',
    soft: C.cobaltSoft,
    verdict: '允许补正或解释',
  },
];

export const UnlawfulGradingScene: React.FC = () => {
  const frame = useCurrentFrame();

  const renderShaft = (grade: Grade, shaftDelay: number, icon: React.ReactNode) => (
    <>
      <div
        data-audit-boundary="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: SHAFT_WIDTH,
          height: 88,
          backgroundColor: grade.soft,
          border: `3px solid ${grade.accent}`,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
      >
        {icon}
        <div style={{minWidth: 0}}>
          <div style={{fontSize: 34, fontWeight: 950, color: grade.ink, lineHeight: 1.15}}>{grade.grade}</div>
          <div style={{fontSize: 22, color: grade.ink, opacity: 0.82, lineHeight: 1.3}}>{grade.qualifier}</div>
        </div>
        <Chip color={grade.accent} label={`违法等级 ${grade.code}`} style={{marginLeft: 'auto'}} />
      </div>

      <div
        data-audit-boundary="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 96,
          width: SHAFT_WIDTH,
          height: 364,
          backgroundColor: C.card,
          border: `3px solid ${C.line}`,
          borderRadius: 10,
          padding: '18px 24px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 22,
        }}
      >
        {grade.items.map((item, itemIndex) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 23,
              lineHeight: 1.4,
              fontWeight: 700,
              color: C.ink,
              opacity: interpolate(frame, [shaftDelay + 30 + itemIndex * 16, shaftDelay + 48 + itemIndex * 16], [0, 1], clamp),
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 26,
                height: 26,
                borderRadius: 5,
                backgroundColor: grade.soft,
                border: `2px solid ${grade.accent}`,
                color: grade.ink,
                display: 'grid',
                placeItems: 'center',
                fontSize: 15,
                fontWeight: 900,
                fontFamily: 'var(--inkloom-animation-mono)',
              }}
            >
              {itemIndex + 1}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div
        data-audit-boundary="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 470,
          width: SHAFT_WIDTH,
          height: 142,
          backgroundColor: grade.soft,
          border: `3px solid ${grade.accent}`,
          borderRadius: 10,
          padding: '14px 18px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
          justifyContent: 'center',
          scale: `${interpolate(rise(frame, shaftDelay + 96), [0, 1], [0.9, 1])}`,
          opacity: interpolate(frame, [shaftDelay + 96, shaftDelay + 112], [0, 1], clamp),
        }}
      >
        <Stamp color={grade.accent} ink={grade.ink} label={grade.verdict} soft={C.card} />
        <div
          data-stateful-terminal="evidence-specimen-card"
          style={{transform: `rotate(${interpolate(frame, [shaftDelay + 112, shaftDelay + 140], [-4, 0], clamp)}deg)`}}
        >
          <SpecimenChip color={grade.accent} icon={FileText} label="检材已定级" soft={C.card} />
        </div>
      </div>
    </>
  );

  return (
    <CabinetShell
      accent={C.vermilion}
      code="06"
      subtitle="考点6 证据的排除 · 二分框架的三重筛格"
      title="取证违法的三重筛格"
    >
      <div
        data-layout="graded-intake-shaft-bay"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,stamp,thin-underline"
        data-visual-grammar="unlawfully-obtained-evidence-enters-one-intake-rail,three-culpability-grades-split-into-three-outcome-shafts,only-the-minor-defect-shaft-keeps-a-correction-branch-open"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-audit-boundary="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: MAIN_WIDTH,
            height: 92,
            backgroundColor: C.card,
            border: `3px solid ${C.slate}`,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            padding: '0 22px',
            boxSizing: 'border-box',
            ...enter(frame, 0, 0, -30),
          }}
        >
          <FileText size={40} strokeWidth={2.4} style={{color: C.slate, flexShrink: 0}} />
          <div
            data-stateful-source="evidence-specimen-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              transform: `translateX(${interpolate(frame, [10, 70], [0, 24], {...clamp, easing: ease})}px)`,
            }}
          >
            <div
              style={{
                fontSize: 15,
                letterSpacing: 3,
                color: C.inkSoft,
                fontFamily: 'var(--inkloom-animation-mono)',
                fontWeight: 800,
              }}
            >
              SPECIMEN
            </div>
            <SpecimenChip color={C.slate} icon={FileText} label="一份证据材料" soft={C.cardAlt} />
          </div>
          <div
            data-focal-rule="按违法的主观程度与严重程度分级，而不是一律排除"
            style={{display: 'flex', flexDirection: 'column', gap: 6, marginLeft: 40}}
          >
            <div style={{fontSize: 36, fontWeight: 950, lineHeight: 1.2}}>
              取证行为
              <SoftHighlight color={C.vermilion}>违反法定程序</SoftHighlight>
            </div>
            <div
              data-final-knowledge="unlawful-intake-rule"
              style={{fontSize: 22, color: C.inkSoft, lineHeight: 1.35}}
            >
              <ThinUnderline color={C.vermilion}>先定违法程度，再定证据命运</ThinUnderline>
            </div>
          </div>
        </div>

        <DropArrow
          color={C.vermilion}
          height={54}
          left={286.5}
          progress={interpolate(frame, [90, 120], [0, 1], {...clamp, easing: ease})}
          top={94}
        />
        <DropArrow
          color={C.ochre}
          height={54}
          left={899.5}
          progress={interpolate(frame, [116, 146], [0, 1], {...clamp, easing: ease})}
          top={94}
        />
        <DropArrow
          color={C.cobalt}
          height={54}
          left={1512.5}
          progress={interpolate(frame, [142, 172], [0, 1], {...clamp, easing: ease})}
          top={94}
        />

        <div
          data-final-knowledge="intentional-grade-track"
          style={{position: 'absolute', left: 0, top: 150, width: SHAFT_WIDTH, height: SHAFT_HEIGHT, ...enter(frame, 96, 34)}}
        >
          {renderShaft(GRADES[0], 96, <ShieldAlert size={44} strokeWidth={2.4} style={{color: C.vermilion, flexShrink: 0}} />)}
        </div>
        <div
          data-final-knowledge="negligent-grade-track"
          style={{position: 'absolute', left: 613, top: 150, width: SHAFT_WIDTH, height: SHAFT_HEIGHT, ...enter(frame, 122, 34)}}
        >
          {renderShaft(GRADES[1], 122, <ClipboardX size={44} strokeWidth={2.4} style={{color: C.ochre, flexShrink: 0}} />)}
        </div>
        <div
          data-final-knowledge="minor-defect-track"
          style={{position: 'absolute', left: 1226, top: 150, width: SHAFT_WIDTH, height: SHAFT_HEIGHT, ...enter(frame, 148, 34)}}
        >
          {renderShaft(GRADES[2], 148, <Wrench size={44} strokeWidth={2.4} style={{color: C.cobalt, flexShrink: 0}} />)}
        </div>
      </div>
    </CabinetShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 故意非法：供述四路与其余证据
// ---------------------------------------------------------------
type Lane = {
  readonly condition: string;
  readonly index: string;
  readonly method: string;
  readonly verdict: string;
};

const LANE_WIDTH = 429;
const LANE_HEIGHT = 360;

const LANES: readonly Lane[] = [
  {
    condition: '致难以忍受痛苦而违背意愿',
    index: '01',
    method: '暴力 / 变相肉刑',
    verdict: '应当排除',
  },
  {
    condition: '严重损害本人及近亲属合法权益',
    index: '02',
    method: '威胁',
    verdict: '应当排除',
  },
  {
    condition: '无需“痛苦”条件',
    index: '03',
    method: '非法拘禁等限制人身自由',
    verdict: '应当排除',
  },
  {
    condition: '受原刑讯影响 · 与原供述相同',
    index: '04',
    method: '重复性供述',
    verdict: '一并排除',
  },
];

export const IntentionalConfessionRoutesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const renderLane = (lane: Lane, delay: number, tip: React.ReactNode) => (
    <div
      data-audit-boundary="true"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: C.card,
        border: `3px solid ${C.vermilion}`,
        borderTop: `8px solid ${C.vermilion}`,
        borderRadius: 10,
        padding: '16px 18px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <span
          style={{
            fontSize: 18,
            fontWeight: 950,
            color: C.vermilionInk,
            fontFamily: 'var(--inkloom-animation-mono)',
            letterSpacing: 2,
          }}
        >
          {lane.index}
        </span>
        <span style={{fontSize: 30, fontWeight: 950, color: C.vermilionInk, lineHeight: 1.2}}>{lane.method}</span>
      </div>

      <div style={{fontSize: 23, lineHeight: 1.4, fontWeight: 700, color: C.ink, marginTop: 4}}>
        <ThinUnderline color={C.vermilion}>{lane.condition}</ThinUnderline>
      </div>

      <div style={{fontSize: 22, lineHeight: 1.45, marginTop: 4}}>{tip}</div>

      <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}>
        <div
          data-stateful-terminal="confession-specimen"
          style={{
            scale: `${interpolate(rise(frame, delay + 92), [0, 1], [0.88, 1])}`,
            opacity: interpolate(frame, [delay + 92, delay + 104], [0, 1], clamp),
          }}
        >
          <Stamp color={C.vermilion} ink={C.vermilionInk} label={lane.verdict} soft={C.vermilionSoft} />
        </div>
      </div>
    </div>
  );

  return (
    <CabinetShell
      accent={C.vermilion}
      code="06-A"
      subtitle="故意非法证据排除规则 · 供述四路与其余证据"
      title="故意非法的排除路径"
    >
      <div
        data-layout="four-lane-confession-bay-with-exhibit-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-visual-grammar="violence-or-cruel-treatment-plus-unbearable-pain-excludes-the-confession,threatening-lawful-rights-excludes-only-with-unbearable-pain,unlawful-detention-excludes-without-any-pain-requirement,repeated-confessions-fall-with-the-original-unless-voluntarily-re-made,witness-and-victim-statements-exclude-on-any-listed-illegal-method,enticement-deceit-and-self-invented-confessions-stay-outside-the-rule"
        data-focal-channels="enclosure,contrast,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-audit-boundary="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: MAIN_WIDTH,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            ...enter(frame, 0, 0, -24),
          }}
        >
          <Mic size={34} strokeWidth={2.6} style={{color: C.vermilion, flexShrink: 0}} />
          <span
            data-focal-rule="供述是否排除，先看取证手段，再看是否造成难以忍受的痛苦"
            style={{fontSize: 32, fontWeight: 950, lineHeight: 1.2}}
          >
            犯罪嫌疑人、被告人供述
          </span>
          <Chip color={C.vermilion} label="故意非法四路" />
          <div
            data-stateful-source="confession-specimen"
            style={{marginLeft: 'auto', transform: `translateX(${interpolate(frame, [8, 56], [0, -40], clamp)}px)`}}
          >
            <SpecimenChip color={C.vermilion} icon={Mic} label="一份供述" soft={C.vermilionSoft} />
          </div>
        </div>

        <div
          data-final-knowledge="violence-route"
          style={{position: 'absolute', left: 0, top: 48, width: LANE_WIDTH, height: LANE_HEIGHT, ...enter(frame, 40, 30)}}
        >
          {renderLane(LANES[0], 40, <SoftHighlight color={C.ochre}>未写“痛苦”仍应排除 · 不含辩解</SoftHighlight>)}
        </div>

        <div
          data-final-knowledge="threat-route"
          style={{position: 'absolute', left: 457, top: 48, width: LANE_WIDTH, height: LANE_HEIGHT, ...enter(frame, 80, 30)}}
        >
          {renderLane(
            LANES[1],
            80,
            <ExternalNegation color={C.vermilionInk}>未写“痛苦”则无需排除</ExternalNegation>,
          )}
        </div>

        <div
          data-final-knowledge="detention-route"
          style={{position: 'absolute', left: 914, top: 48, width: LANE_WIDTH, height: LANE_HEIGHT, ...enter(frame, 120, 30)}}
        >
          {renderLane(LANES[2], 120, <SoftHighlight color={C.ochre}>典型：法定讯问场所之外讯问</SoftHighlight>)}
        </div>

        <div
          data-final-knowledge="repetition-route"
          style={{position: 'absolute', left: 1371, top: 48, width: LANE_WIDTH, height: LANE_HEIGHT, ...enter(frame, 160, 30)}}
        >
          {renderLane(
            LANES[3],
            160,
            <div data-final-knowledge="repetition-exception">
              <SoftHighlight color={C.pine}>例外：更换侦查人员 / 告知权利后自愿供述</SoftHighlight>
            </div>,
          )}
        </div>

        <div
          data-final-knowledge="witness-victim-route"
          style={{position: 'absolute', left: 0, top: 424, width: 880, height: 220, ...enter(frame, 224, 30)}}
        >
          <Panel accent={C.ochre} height={220} left={0} top={0} width={880}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10}}>
              <Users size={34} strokeWidth={2.5} style={{color: C.ochreInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ochreInk, lineHeight: 1.2}}>证人证言、被害人陈述</span>
              <Chip color={C.ochre} label="无需痛苦" style={{marginLeft: 'auto'}} />
            </div>
            <div style={{display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 12}}>
              <Chip color={C.ochre} label="暴力" />
              <Chip color={C.ochre} label="威胁" />
              <Chip color={C.ochre} label="非法限制人身自由" />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Stamp color={C.ochre} ink={C.ochreInk} label="应当予以排除" soft={C.ochreSoft} />
            </div>
          </Panel>
        </div>

        <div
          data-final-knowledge="physical-evidence-route"
          style={{position: 'absolute', left: 920, top: 424, width: 880, height: 220, ...enter(frame, 248, 30)}}
        >
          <Panel accent={C.cobalt} height={220} left={0} top={0} width={880}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10}}>
              <FileSearch size={34} strokeWidth={2.5} style={{color: C.cobaltInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.cobaltInk, lineHeight: 1.2}}>物证、书证</span>
              <Chip color={C.cobalt} label="可补正" style={{marginLeft: 'auto'}} />
            </div>
            <div
              style={{
                display: 'flex',
                gap: 8,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                flexWrap: 'wrap',
              }}
            >
              <Chip color={C.cobalt} label="程序违法" />
              <span style={{fontSize: 22, fontWeight: 900, color: C.cobaltInk}}>＋</span>
              <Chip color={C.cobalt} label="严重影响司法公正" />
              <span style={{fontSize: 22, fontWeight: 900, color: C.cobaltInk}}>＋</span>
              <Chip color={C.cobalt} label="不能补正或解释" />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Stamp color={C.cobalt} ink={C.cobaltInk} label="应当予以排除" soft={C.cobaltSoft} />
            </div>
          </Panel>
        </div>

        <div
          data-final-knowledge="outside-exclusion-band"
          data-audit-boundary="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 660,
            width: MAIN_WIDTH,
            height: 102,
            backgroundColor: C.cardAlt,
            border: `3px dashed ${C.slate}`,
            borderRadius: 10,
            padding: '12px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            gap: 26,
            ...enter(frame, 292, 26),
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
            <Ban size={30} strokeWidth={2.6} style={{color: C.slate}} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.slate, lineHeight: 1.2}}>不适用排非规则</span>
          </div>
          <div style={{display: 'flex', gap: 22, fontSize: 22, lineHeight: 1.4, color: C.slate}}>
            <span>① 引诱、欺骗所得供述</span>
            <span>② 损害非法权益的威胁所得供述</span>
            <span>③ 自行编造的虚假供述</span>
          </div>
        </div>
      </div>
    </CabinetShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 补正岔路
// ---------------------------------------------------------------
export const CorrectionForkGateScene: React.FC = () => {
  const frame = useCurrentFrame();

  const benchProgress = interpolate(frame, [96, 132], [0, 1], {...clamp, easing: ease});
  const forkProgress = interpolate(frame, [196, 246], [0, 1], {...clamp, easing: ease});

  return (
    <CabinetShell accent={C.pine} code="06-B" subtitle="补正与合理解释 · 采信与排除的分岔" title="补正岔路">
      <div
        data-layout="correction-fork-and-terminal-bay"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,stamp,thin-underline"
        data-visual-grammar="defective-exhibits-and-minor-flaws-both-enter-the-correction-bench,a-corrected-flaw-returns-into-the-conviction-basis,an-uncorrectable-flaw-drops-into-the-exclusion-bay,intentional-and-grave-negligent-unlawfulness-have-no-correction-channel"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-audit-boundary="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 880,
            height: 76,
            backgroundColor: C.card,
            border: `3px solid ${C.cobalt}`,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '0 18px',
            boxSizing: 'border-box',
            ...enter(frame, 0, 0, -26),
          }}
        >
          <FileSearch size={34} strokeWidth={2.5} style={{color: C.cobaltInk, flexShrink: 0}} />
          <div style={{minWidth: 0}}>
            <div style={{fontSize: 26, fontWeight: 950, color: C.cobaltInk, lineHeight: 1.2}}>物证、书证</div>
            <div style={{fontSize: 22, color: C.ink, lineHeight: 1.3}}>收集程序不符合法定程序</div>
          </div>
          <Chip color={C.cobalt} label="程序违法" style={{marginLeft: 'auto'}} />
        </div>

        <div
          data-audit-boundary="true"
          style={{
            position: 'absolute',
            left: 920,
            top: 0,
            width: 880,
            height: 76,
            backgroundColor: C.card,
            border: `3px solid ${C.cobalt}`,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '0 18px',
            boxSizing: 'border-box',
            ...enter(frame, 22, 0, -26),
          }}
        >
          <ClipboardList size={34} strokeWidth={2.5} style={{color: C.cobaltInk, flexShrink: 0}} />
          <div data-stateful-source="defective-evidence-card" style={{minWidth: 0}}>
            <div style={{fontSize: 26, fontWeight: 950, color: C.cobaltInk, lineHeight: 1.2}}>瑕疵证据</div>
            <div style={{fontSize: 22, color: C.ink, lineHeight: 1.3}}>仅存在轻微程序瑕疵</div>
          </div>
          <Chip color={C.cobalt} label="轻微错误" style={{marginLeft: 'auto'}} />
        </div>

        <DropArrow color={C.cobalt} height={30} left={440} progress={benchProgress} size={30} top={78} />
        <DropArrow color={C.cobalt} height={30} left={1360} progress={benchProgress} size={30} top={78} />

        <div
          data-final-knowledge="correction-bench-rule"
          style={{position: 'absolute', left: 0, top: 108, width: 1180, height: 280, ...enter(frame, 116, 30)}}
        >
          <Panel accent={C.ochre} height={280} left={0} top={0} width={1180}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
              <Wrench
                size={36}
                strokeWidth={2.6}
                style={{
                  color: C.ochreInk,
                  flexShrink: 0,
                  transform: `rotate(${interpolate(frame, [140, 200, 260], [0, 26, 0], clamp)}deg)`,
                }}
              />
              <span
                data-focal-rule="能否补正或者作出合理解释，决定证据落入采信还是排除"
                style={{fontSize: 32, fontWeight: 950, color: C.ochreInk, lineHeight: 1.2}}
              >
                补正台
              </span>
              <Chip color={C.ochre} label="分流闸门" />
            </div>

            <div style={{fontSize: 23, lineHeight: 1.4, fontWeight: 700, color: C.ink, marginBottom: 10}}>
              分流标准：能否<SoftHighlight color={C.pine}>补正或者作出合理解释</SoftHighlight>
            </div>

            <div
              data-audit-boundary="true"
              style={{
                backgroundColor: C.cardAlt,
                border: `2px solid ${C.line}`,
                borderRadius: 8,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <SpecimenChip color={C.ochre} icon={ClipboardList} label="瑕疵检材" soft={C.ochreSoft} />
              <span style={{fontSize: 22, lineHeight: 1.4, color: C.ink}}>
                笔录仅一人签名 · 辨认未邀见证人 · 电子数据未封存
              </span>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.ochreInk,
                  fontFamily: 'var(--inkloom-animation-label)',
                  whiteSpace: 'nowrap',
                  opacity: benchProgress,
                }}
              >
                补正中…
              </span>
            </div>
          </Panel>
        </div>

        <div
          data-final-knowledge="no-correction-channel"
          style={{position: 'absolute', left: 1220, top: 108, width: 580, height: 280, ...enter(frame, 140, 30)}}
        >
          <Panel accent={C.vermilion} height={280} left={0} top={0} width={580}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14}}>
              <Ban size={32} strokeWidth={2.6} style={{color: C.vermilionInk, flexShrink: 0}} />
              <span style={{fontSize: 28, fontWeight: 950, color: C.vermilionInk, lineHeight: 1.2}}>没有补正通道</span>
            </div>
            <div style={{display: 'flex', gap: 10, marginBottom: 16}}>
              <Chip color={C.vermilion} label="故意非法" solid />
              <Chip color={C.vermilion} label="严重失误" solid />
            </div>
            <div style={{fontSize: 22, lineHeight: 1.5}}>
              <ExternalNegation color={C.vermilionInk}>直接排除，不存在补正机会</ExternalNegation>
            </div>
          </Panel>
        </div>

        <DropArrow color={C.pine} height={30} left={440} progress={forkProgress} size={30} top={390} />
        <DropArrow color={C.vermilion} height={30} left={1360} progress={forkProgress} size={30} top={390} />

        <div
          data-final-knowledge="admissible-terminal"
          style={{position: 'absolute', left: 0, top: 420, width: 880, height: 342, ...enter(frame, 210, 30)}}
        >
          <Panel accent={C.pine} height={342} left={0} top={0} width={880}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
              <CheckCircle2 size={36} strokeWidth={2.6} style={{color: C.pineInk, flexShrink: 0}} />
              <span style={{fontSize: 32, fontWeight: 950, color: C.pineInk, lineHeight: 1.2}}>可以作为定案根据</span>
            </div>
            <div style={{fontSize: 23, lineHeight: 1.4, fontWeight: 700, color: C.ink, marginBottom: 14}}>
              <ThinUnderline color={C.pine}>能补正或解释</ThinUnderline> → 瑕疵消除，仍作定案根据
            </div>
            <div
              data-stateful-terminal="defective-evidence-card"
              data-audit-boundary="true"
              style={{
                backgroundColor: C.pineSoft,
                border: `2px dashed ${C.pine}`,
                borderRadius: 8,
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                opacity: interpolate(frame, [250, 286], [0, 1], clamp),
                transform: `translateY(${interpolate(frame, [250, 286], [22, 0], {...clamp, easing: ease})}px)`,
              }}
            >
              <CheckCircle2 size={26} strokeWidth={2.6} style={{color: C.pineInk, flexShrink: 0}} />
              <SpecimenChip color={C.pine} icon={ClipboardList} label="瑕疵检材·已补正" soft={C.card} />
              <span style={{fontSize: 22, lineHeight: 1.4, color: C.pineInk}}>补正完成，瑕疵消除</span>
            </div>
          </Panel>
        </div>

        <div
          data-final-knowledge="excluded-terminal"
          style={{position: 'absolute', left: 920, top: 420, width: 880, height: 342, ...enter(frame, 232, 30)}}
        >
          <Panel accent={C.vermilion} height={342} left={0} top={0} width={880}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
              <Ban size={36} strokeWidth={2.6} style={{color: C.vermilionInk, flexShrink: 0}} />
              <span style={{fontSize: 32, fontWeight: 950, color: C.vermilionInk, lineHeight: 1.2}}>应当依法排除</span>
            </div>
            <div style={{fontSize: 23, lineHeight: 1.4, fontWeight: 700, color: C.ink, marginBottom: 14}}>
              <ThinUnderline color={C.vermilion}>不能补正或解释</ThinUnderline> → 不得作为定案根据
            </div>
            <div
              data-audit-boundary="true"
              style={{
                backgroundColor: C.vermilionSoft,
                border: `2px dashed ${C.vermilion}`,
                borderRadius: 8,
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                opacity: interpolate(frame, [268, 304], [0, 1], clamp),
                transform: `translateY(${interpolate(frame, [268, 304], [22, 0], {...clamp, easing: ease})}px)`,
              }}
            >
              <Ban size={26} strokeWidth={2.6} style={{color: C.vermilionInk, flexShrink: 0}} />
              <SpecimenChip color={C.vermilion} icon={FileSearch} label="物证书证·无法补正" soft={C.card} />
              <span style={{fontSize: 22, lineHeight: 1.4, color: C.vermilionInk}}>来源或程序无法解释</span>
            </div>
          </Panel>
        </div>
      </div>
    </CabinetShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const EvidenceExclusionLattice: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.cabinet, width: 1920, height: 1080}}
  >
    <TimelineSequence
      name="01"
      start={SCENES['unlawful-grading'].start}
      duration={SCENES['unlawful-grading'].duration}
    >
      <UnlawfulGradingScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES['intentional-confession-routes'].start}
      duration={SCENES['intentional-confession-routes'].duration}
    >
      <IntentionalConfessionRoutesScene />
    </TimelineSequence>
    <TimelineSequence
      name="03"
      start={SCENES['correction-fork-gate'].start}
      duration={SCENES['correction-fork-gate'].duration}
    >
      <CorrectionForkGateScene />
    </TimelineSequence>
  </AbsoluteFill>
);
