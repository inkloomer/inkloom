import type {CSSProperties, ReactNode} from 'react';
import {
  Ban,
  Check,
  Cog,
  Equal,
  Feather,
  FileText,
  Footprints,
  Gavel,
  Globe,
  Scale,
  ScrollText,
  Shield,
  Stamp,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  wall: '#9FAE9C',
  wallDeep: '#8A9A87',
  wood: '#C89B5A',
  woodDeep: '#9E7738',
  cream: '#F4EDDD',
  creamDim: '#EAE1CC',
  soot: '#232019',
  ink: '#2E2A22',
  oxblood: '#8E3B2E',
  brass: '#8C7A45',
  line: '#6E7266',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 18,
  style,
}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left'
      ? `-${distance}px 0px`
      : from === 'right'
        ? `${distance}px 0px`
        : from === 'down'
          ? `0px -${distance}px`
          : from === 'none'
            ? '0px 0px'
            : `0px ${distance}px`;
  return (
    <div
      data-final-knowledge={marker}
      style={{
        ...style,
        opacity: p,
        translate: interpolate(frame, [delay, delay + span], [origin, '0px 0px'], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

const Nameplate = ({children, tone = C.brass}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', backgroundColor: tone, color: C.cream, fontSize: 22, fontWeight: 900, letterSpacing: 2, border: `2px solid ${C.soot}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}29`, padding: '2px 9px'}}>{children}</span>
);

const Seal = ({accent = C.oxblood, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 13px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}12`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.cream : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.oxblood, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        border: `5px solid ${color}`,
        color,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 3,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

const Underline = ({children, color = C.oxblood, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -6,
          height: 5,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Case = ({
  children,
  marker,
  tone = C.woodDeep,
  style,
}: {
  readonly children: ReactNode;
  readonly marker?: string;
  readonly tone?: string;
  readonly style?: CSSProperties;
}) => (
  <div
    data-final-knowledge={marker}
    style={{
      position: 'absolute',
      backgroundColor: C.cream,
      border: `10px solid ${C.wood}`,
      outline: `2px solid ${C.woodDeep}`,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: -10, top: -10, width: 14, height: 14, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', right: -10, top: -10, width: 14, height: 14, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', left: -10, bottom: -10, width: 14, height: 14, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', right: -10, bottom: -10, width: 14, height: 14, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 4, backgroundColor: tone}} />
    {children}
  </div>
);

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.wall, color: C.ink, fontFamily: 'var(--inkloom-animation-body)', overflow: 'hidden'}}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 30, right: 30, bottom: 120, height: 6, backgroundColor: C.wallDeep}} />
    <div style={{position: 'absolute', left: 30, right: 30, bottom: 132, height: 3, backgroundColor: C.brass}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 18px', backgroundColor: C.soot, border: `3px solid ${C.wood}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.cream, letterSpacing: 2}}>考点 03 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `3px double ${C.soot}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.soot}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.oxblood, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Lead = ({d, delay, tone = C.soot, dashed = false}: {readonly d: string; readonly delay: number; readonly tone?: string; readonly dashed?: boolean}) => {
  const frame = useCurrentFrame();
  return (
    <path
      d={d}
      fill="none"
      stroke={tone}
      strokeDasharray={dashed ? '12 9' : undefined}
      strokeDashoffset={dashed ? 0 : undefined}
      opacity={prog(frame, delay, 18)}
      strokeLinecap="round"
      strokeWidth={4}
    />
  );
};

export const NormativityScopeScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="normativity-heading" data-final-knowledge="social-norm-note" data-final-knowledge="action-not-thought" data-final-knowledge="other-directed-gate" data-final-knowledge="self-directed-negation" data-final-knowledge="narrower-scope-note" data-final-knowledge="minimum-moral-chip" */
  return (
    <Shell code="01" kicker="特征一" title="规范性：只调整行为">
      <div
        data-layout="action-fork-with-scope-verdict"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,soft-highlight,chip,external-negation"
        data-visual-grammar="behavior-not-thought,other-directed-gate,scope-verdict"
        data-focal-rule="law-reaches-only-other-directed-conduct"
        data-focal-channels="icon,enclosure,contrast,annotation,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="normativity-heading" style={{position: 'absolute', left: 350, top: 0, width: 1080}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '14px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 36, fontWeight: 950, color: C.soot}}>
              法是<Underline delay={30}>调整人的行为</Underline>的社会规范
            </span>
          </div>
        </Enter>
        <svg style={{position: 'absolute', inset: 0, width: 1776, height: 752}} viewBox="0 0 1776 752">
          <Lead d="M 890 182 V 252 H 500 V 292" delay={40} />
          <Lead d="M 890 182 V 252 H 1265 V 292" delay={40} dashed />
          <Lead d="M 355 386 V 428 H 260 V 462" delay={92} />
          <Lead d="M 355 386 V 428 H 545 V 462" delay={92} dashed />
        </svg>
        <Enter delay={20} from="none" style={{position: 'absolute', left: 700, top: 116, width: 380}}>
          <div style={{backgroundColor: C.wood, border: `3px solid ${C.soot}`, padding: '12px 18px', textAlign: 'center'}}>
            <span style={{fontSize: 28, fontWeight: 950, color: C.cream}}>法的调整范围</span>
          </div>
        </Enter>
        <Enter delay={30} marker="social-norm-note" style={{position: 'absolute', left: 1150, top: 118, width: 586}}>
          <div style={{backgroundColor: C.creamDim, border: `2px solid ${C.line}`, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={32} color={C.soot} strokeWidth={2.3} />
            <span style={{fontSize: 22, fontWeight: 870, color: C.ink}}>
              调整人与人之间的<Soft color={C.oxblood}>关系</Soft>，有别于自然规范与技术规范
            </span>
          </div>
        </Enter>
        <Enter delay={48} from="up" marker="action-not-thought" style={{position: 'absolute', left: 185, top: 292, width: 340}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.woodDeep}`, padding: '14px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Footprints size={36} color={C.oxblood} strokeWidth={2.4} />
              <span style={{fontSize: 28, fontWeight: 950, color: C.soot}}>行动 ✓</span>
            </div>
            <div style={{marginTop: 7, fontSize: 22, fontWeight: 850, color: C.ink}}>只针对行动，不针对思想</div>
          </div>
        </Enter>
        <Enter delay={60} from="up" style={{position: 'absolute', left: 1095, top: 292, width: 340}}>
          <div style={{backgroundColor: C.creamDim, border: `4px solid ${C.line}`, padding: '14px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Ban size={36} color={C.line} strokeWidth={2.4} />
              <span style={{fontSize: 28, fontWeight: 950, color: C.line}}>思想 ✗</span>
            </div>
            <div style={{marginTop: 7, fontSize: 22, fontWeight: 850, color: C.line}}>内心领域不归法管</div>
          </div>
        </Enter>
        <Enter delay={100} from="up" marker="other-directed-gate" style={{position: 'absolute', left: 100, top: 462, width: 320}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.oxblood}`, padding: '14px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Check size={34} color={C.oxblood} strokeWidth={3} />
              <span style={{fontSize: 26, fontWeight: 950, color: C.soot}}>涉他（关系）行动</span>
            </div>
            <div style={{marginTop: 7, fontSize: 22, fontWeight: 870, color: C.ink}}>原则上只调整这一类</div>
          </div>
        </Enter>
        <Enter delay={114} from="up" marker="self-directed-negation" style={{position: 'absolute', left: 465, top: 462, width: 320}}>
          <div style={{backgroundColor: C.creamDim, border: `4px solid ${C.line}`, padding: '14px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Ban size={34} color={C.line} strokeWidth={2.6} />
              <span style={{fontSize: 26, fontWeight: 950, color: C.line}}>自我指向行动</span>
            </div>
            <div style={{marginTop: 7, fontSize: 22, fontWeight: 850, color: C.line}}>仅个人意义，不调整</div>
          </div>
        </Enter>
        <Enter delay={150} from="up" marker="narrower-scope-note" style={{position: 'absolute', left: 150, top: 610, width: 1476}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '16px 26px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <span style={{fontSize: 27, fontWeight: 920, color: C.ink}}>
              调整范围比其他社会规范<Underline delay={176}>更小</Underline>、要求<Underline delay={186}>更低</Underline>
            </span>
            <span data-final-knowledge="minimum-moral-chip">
              <Seal accent={C.oxblood} solid>
                故有「最低限度道德」之说
              </Seal>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const StateWillPathsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="state-will-heading" data-final-knowledge="creation-path" data-final-knowledge="recognition-path" data-final-knowledge="expressed-recognition-card" data-final-knowledge="implied-recognition-card" data-final-knowledge="public-power-note" data-final-knowledge="state-will-mnemonic" */
  const travel = interpolate(frame, [66, 120], [0, 1], CLAMP);
  return (
    <Shell code="02" kicker="特征二" title="国家意志性：制定或认可">
      <div
        data-layout="creation-recognition-paths"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,soft-highlight,chip,stamp"
        data-visual-grammar="creation-path,recognition-path,expressed-implied-pair"
        data-focal-rule="state-will-enters-law-by-creation-or-recognition"
        data-focal-channels="icon,motion,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="state-will-heading" style={{position: 'absolute', left: 330, top: 0, width: 1120}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '14px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 36, fontWeight: 950, color: C.soot}}>
              公共权力机构<Underline delay={30}>制定</Underline>或<Underline delay={40}>认可</Underline>，具特定形式
            </span>
          </div>
        </Enter>
        <svg style={{position: 'absolute', inset: 0, width: 1776, height: 752}} viewBox="0 0 1776 752">
          <Lead d="M 470 290 H 515 V 170 H 560" delay={44} />
          <Lead d="M 470 330 V 420 H 560" delay={52} />
          <Lead d="M 1100 380 H 1130 V 280 H 1160" delay={110} />
          <Lead d="M 1100 430 V 500 H 1160" delay={122} />
        </svg>
        <Enter delay={20} from="left" style={{position: 'absolute', left: 60, top: 250, width: 410}}>
          <div data-final-knowledge="public-power-note" style={{backgroundColor: C.woodDeep, border: `3px solid ${C.soot}`, padding: '18px 22px', textAlign: 'center'}}>
            <Users size={44} color={C.cream} strokeWidth={2.3} />
            <div style={{marginTop: 8, fontSize: 28, fontWeight: 950, color: C.cream}}>公共权力机构</div>
            <div style={{marginTop: 6, fontSize: 22, fontWeight: 850, color: C.cream}}>法律出自国家，非民间自发</div>
          </div>
        </Enter>
        <div
          data-stateful-source="custom-rule-into-law"
          style={{
            position: 'absolute',
            left: interpolate(frame, [60, 116], [150, 600], CLAMP),
            top: interpolate(frame, [60, 116], [352, 396], CLAMP),
            opacity: prog(frame, 56, 12) * (1 - prog(frame, 118, 16)),
          }}
        >
          <span style={{fontSize: 23, fontWeight: 900, color: C.cream, backgroundColor: C.soot, border: `2px solid ${C.brass}`, padding: '5px 14px'}}>习惯规则</span>
        </div>
        <Enter delay={48} from="none" marker="creation-path" style={{position: 'absolute', left: 560, top: 130, width: 540}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.woodDeep}`, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
            <FileText size={46} color={C.oxblood} strokeWidth={2.3} />
            <div>
              <div style={{fontSize: 30, fontWeight: 950, color: C.soot}}>制定</div>
              <div style={{marginTop: 6, fontSize: 22, fontWeight: 870, color: C.ink}}>
                内容<Soft color={C.oxblood}>从无到有</Soft>＝<Seal accent={C.oxblood} solid>创造</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={62} from="none" marker="recognition-path" style={{position: 'absolute', left: 560, top: 330, width: 540}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.woodDeep}`, padding: '16px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <Stamp size={46} color={C.oxblood} strokeWidth={2.3} />
              <div>
                <div style={{fontSize: 30, fontWeight: 950, color: C.soot}}>认可</div>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 870, color: C.ink}}>
                  效力<Soft color={C.oxblood}>从无效到有效</Soft>＝<Seal accent={C.oxblood} solid>转化</Seal>
                </div>
              </div>
            </div>
            <div
              data-stateful-terminal="custom-rule-into-law"
              style={{
                marginTop: 10,
                display: 'inline-flex',
                opacity: prog(frame, 120, 14),
                fontSize: 22,
                fontWeight: 900,
                color: C.cream,
                backgroundColor: C.soot,
                border: `2px solid ${C.brass}`,
                padding: '5px 14px',
              }}
            >
              习惯规则 已被承认为法律
            </div>
          </div>
        </Enter>
        <Enter delay={118} from="right" marker="expressed-recognition-card" style={{position: 'absolute', left: 1160, top: 240, width: 576}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.woodDeep}`, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <ScrollText size={42} color={C.soot} strokeWidth={2.3} />
            <div>
              <div style={{fontSize: 27, fontWeight: 950, color: C.soot}}>明示认可</div>
              <div style={{marginTop: 6, fontSize: 22, fontWeight: 860, color: C.ink}}>
                立法机关认可 · <Seal accent={C.oxblood} solid>具普遍约束力</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={134} from="right" marker="implied-recognition-card" style={{position: 'absolute', left: 1160, top: 450, width: 576}}>
          <div style={{backgroundColor: C.creamDim, border: `4px solid ${C.line}`, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <Gavel size={42} color={C.line} strokeWidth={2.3} />
            <div>
              <div style={{fontSize: 27, fontWeight: 950, color: C.ink}}>默示认可</div>
              <div style={{marginTop: 6, fontSize: 22, fontWeight: 860, color: C.ink}}>
                司法机关认可 · <Seal accent={C.line}>不具普遍约束力</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={170} from="up" marker="state-will-mnemonic" style={{position: 'absolute', left: 200, top: 636, width: 1376}}>
          <div style={{backgroundColor: C.soot, border: `3px solid ${C.brass}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.cream}}>制定＝创造（从无到有）</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.brass}}>·</span>
            <span style={{fontSize: 25, fontWeight: 920, color: C.cream}}>认可＝转化（无效到有效）</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const UniversalityEqualScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="universality-heading" data-final-knowledge="power-range-ring" data-final-knowledge="equal-treatment-band" data-final-knowledge="equality-motto" data-final-knowledge="national-traits-note" data-final-knowledge="universal-consistency-chip" */
  const ring = prog(frame, 40, 26);
  return (
    <Shell code="03" kicker="特征三" title="普遍性：权力所及，平等约束">
      <div
        data-layout="power-boundary-with-equality-band"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,soft-highlight,chip,thin-underline"
        data-visual-grammar="power-range-boundary,equality-demand,universal-consistency"
        data-focal-rule="law-binds-universally-where-state-power-reaches"
        data-focal-channels="icon,enclosure,spatial,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="universality-heading" style={{position: 'absolute', left: 380, top: 0, width: 1020}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '14px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 36, fontWeight: 950, color: C.soot}}>
              国家权力所及范围内，法具<Underline delay={30}>普遍效力与约束力</Underline>
            </span>
          </div>
        </Enter>
        <svg style={{position: 'absolute', left: 40, top: 120, width: 700, height: 470}} viewBox="0 0 700 470">
          <circle cx="350" cy="235" r={200 * ring} fill="none" stroke={C.soot} strokeWidth={5} strokeDasharray="16 10" />
          <circle cx="350" cy="235" r={148 * ring} fill="none" stroke={C.oxblood} strokeWidth={4} />
        </svg>
        <div style={{position: 'absolute', left: 40, top: 120, width: 700, height: 470, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, opacity: ring}}>
          <Globe size={54} color={C.soot} strokeWidth={2.2} />
          <div data-final-knowledge="power-range-ring" style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '10px 20px', textAlign: 'center'}}>
            <div style={{fontSize: 27, fontWeight: 950, color: C.soot}}>国家权力所及范围</div>
            <div style={{marginTop: 5, fontSize: 22, fontWeight: 860, color: C.ink}}>圈内一律适用 · 圈外不及</div>
          </div>
        </div>
        <Enter delay={100} marker="equal-treatment-band" style={{position: 'absolute', left: 60, top: 610, width: 1656}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Equal size={40} color={C.oxblood} strokeWidth={2.6} />
            <span style={{fontSize: 26, fontWeight: 900, color: C.ink}}>近代以来：平等对待一切人</span>
            <span data-final-knowledge="equality-motto" style={{marginLeft: 'auto'}}>
              <Stamp delay={128} size={30}>法律面前 人人平等</Stamp>
            </span>
          </div>
        </Enter>
        <Enter delay={130} from="right" marker="national-traits-note" style={{position: 'absolute', left: 1130, top: 190, width: 606}}>
          <div style={{backgroundColor: C.creamDim, border: `2px solid ${C.line}`, padding: '16px 22px'}}>
            <div style={{fontSize: 24, fontWeight: 890, color: C.ink}}>
              虽具<Soft color={C.line}>民族性</Soft>、<Soft color={C.line}>地域性</Soft>……
            </div>
          </div>
        </Enter>
        <Enter delay={158} from="right" marker="universal-consistency-chip" style={{position: 'absolute', left: 1130, top: 350, width: 606}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.woodDeep}`, padding: '18px 22px'}}>
            <span style={{fontSize: 26, fontWeight: 930, color: C.soot}}>
              但内容始终与<Underline delay={184}>人类普遍要求</Underline>相一致
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const DutyLane = ({
  accent,
  delay,
  icon,
  marker,
  name,
  note,
  status,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly name: string;
  readonly note: ReactNode;
  readonly status: ReactNode;
}) => (
  <Enter delay={delay} from="left" marker={marker} style={{marginTop: 18}}>
    <div style={{backgroundColor: C.cream, border: `6px solid ${accent}`, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
      {icon}
      <span style={{fontSize: 29, fontWeight: 950, color: C.soot, width: 340}}>{name}</span>
      <span style={{fontSize: 24, fontWeight: 870, color: C.ink, flex: 1}}>{note}</span>
      {status}
    </div>
  </Enter>
);

export const RightsDutiesMatrixScene = () => {
  /* data-final-knowledge="matrix-heading" data-final-knowledge="nature-tech-lane" data-final-knowledge="other-norms-lane" data-final-knowledge="law-lane" data-final-knowledge="rights-basis-chip" data-final-knowledge="modern-rule-note" */
  return (
    <Shell code="04" kicker="特征四" title="权利义务性：内容之别">
      <div
        data-layout="three-norm-comparison-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,external-negation"
        data-visual-grammar="content-comparison,obligation-only-contrast,rights-basis-verdict"
        data-focal-rule="law-alone-takes-rights-and-duties-as-its-content"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="matrix-heading" style={{position: 'absolute', left: 400, top: 0, width: 980}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.soot}`, padding: '14px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 36, fontWeight: 950, color: C.soot}}>
              以<Underline delay={30}>权利与义务</Underline>为内容的社会规范
            </span>
          </div>
        </Enter>
        <div style={{marginTop: 24}}>
          <DutyLane
            accent={C.line}
            delay={36}
            icon={<Cog size={44} color={C.line} strokeWidth={2.3} />}
            marker="nature-tech-lane"
            name="自然规范 · 技术规范"
            note={
              <>
                <Ban size={24} color={C.line} strokeWidth={2.8} style={{verticalAlign: '-4px', marginRight: 8}} />
                不以权利和义务为内容
              </>
            }
            status={<Seal accent={C.line}>人与物 / 技术过程</Seal>}
          />
          <DutyLane
            accent={C.brass}
            delay={64}
            icon={<ScrollText size={44} color={C.brass} strokeWidth={2.3} />}
            marker="other-norms-lane"
            name="法律之外的社会规范"
            note={<>通常<Soft color={C.oxblood}>只以义务为内容</Soft>（如道德强化义务）</>}
            status={<Seal accent={C.brass} solid>义务单轨</Seal>}
          />
          <DutyLane
            accent={C.oxblood}
            delay={96}
            icon={<Scale size={44} color={C.oxblood} strokeWidth={2.3} />}
            marker="law-lane"
            name="法律"
            note={
              <>
                除强调义务外，还
                <Feather size={26} color={C.oxblood} strokeWidth={2.5} style={{verticalAlign: '-4px', margin: '0 6px'}} />
                <Soft color={C.oxblood}>规定和保障法律权利</Soft>
              </>
            }
            status={
              <span data-final-knowledge="rights-basis-chip">
                <Stamp delay={140} size={28}>权利本位</Stamp>
              </span>
            }
          />
        </div>
        <Enter delay={170} from="up" marker="modern-rule-note" style={{position: 'absolute', left: 150, top: 640, width: 1476}}>
          <div style={{backgroundColor: C.soot, border: `3px solid ${C.brass}`, padding: '14px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.cream}}>现代法治奉行<Seal accent={C.brass} solid>权利本位</Seal>——权利是法律的要旨，义务是权利的边界</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const CoercionJusticiabilityScene = () => {
  /* data-final-knowledge="coercion-heading" data-final-knowledge="general-coercion-step" data-final-knowledge="state-coercion-step" data-final-knowledge="final-guarantee-note" data-final-knowledge="litigable-door" data-final-knowledge="adjudicable-door" data-final-knowledge="constitution-note" data-final-knowledge="commonality-verdict" */
  return (
    <Shell code="05" kicker="特征五 · 特征六" title="国家强制性 与 可诉性">
      <div
        data-layout="coercion-ladder-with-court-doors"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,external-negation"
        data-visual-grammar="coercion-ladder,court-door-pair,commonality-verdict"
        data-focal-rule="state-coercion-and-justiciability-belong-to-law-alone"
        data-focal-channels="icon,contrast,enclosure,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="coercion-heading" style={{position: 'absolute', left: 40, top: 0}}>
          <Nameplate tone={C.soot}>国家强制性 · 可诉性</Nameplate>
        </Enter>
        <div style={{position: 'absolute', left: 40, top: 80, width: 800, height: 500}}>
          <Enter delay={30} from="left" marker="general-coercion-step" style={{position: 'absolute', left: 0, top: 340, width: 520}}>
            <div style={{backgroundColor: C.creamDim, border: `4px solid ${C.line}`, padding: '14px 20px'}}>
              <span style={{fontSize: 25, fontWeight: 920, color: C.ink}}>任何社会规范都有<Soft color={C.line}>强制性</Soft></span>
            </div>
          </Enter>
          <Enter delay={58} from="left" marker="state-coercion-step" style={{position: 'absolute', left: 60, top: 210, width: 580}}>
            <div style={{backgroundColor: C.cream, border: `5px solid ${C.oxblood}`, padding: '16px 22px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Shield size={38} color={C.oxblood} strokeWidth={2.4} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.soot}}>法律：国家强制力（国家暴力）</span>
              </div>
              <div style={{marginTop: 8, fontSize: 22, fontWeight: 870, color: C.ink}}>其他规范只有一般强制性</div>
            </div>
          </Enter>
          <Enter delay={90} from="left" marker="final-guarantee-note" style={{position: 'absolute', left: 120, top: 60, width: 640}}>
            <div style={{backgroundColor: C.woodDeep, border: `5px solid ${C.soot}`, padding: '16px 22px'}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.cream}}>国家强制力是最终保障</div>
              <div style={{marginTop: 8, fontSize: 22, fontWeight: 870, color: C.creamDim}}>
                自觉遵守则可不介入 · 现代运作须符合<Seal accent={C.soot} solid>正当程序</Seal>
              </div>
            </div>
          </Enter>
        </div>
        <div style={{position: 'absolute', left: 920, top: 80, width: 816}}>
          <Enter delay={126} from="right" marker="litigable-door" style={{}}>
            <div style={{backgroundColor: C.cream, border: `5px solid ${C.woodDeep}`, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
              <Users size={40} color={C.oxblood} strokeWidth={2.3} />
              <div>
                <div style={{fontSize: 27, fontWeight: 950, color: C.soot}}>可争讼性</div>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 860, color: C.ink}}>当事人依据法律起诉或应诉</div>
              </div>
            </div>
          </Enter>
          <Enter delay={148} from="right" marker="adjudicable-door" style={{marginTop: 16}}>
            <div style={{backgroundColor: C.cream, border: `5px solid ${C.woodDeep}`, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
              <Gavel size={40} color={C.oxblood} strokeWidth={2.3} />
              <div>
                <div style={{fontSize: 27, fontWeight: 950, color: C.soot}}>可裁判性</div>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 860, color: C.ink}}>法官将法律作为案件裁判依据</div>
              </div>
            </div>
          </Enter>
          <Enter delay={172} marker="constitution-note" style={{marginTop: 16}}>
            <div style={{border: `3px solid ${C.oxblood}`, backgroundColor: '#8E3B2E12', padding: '12px 20px'}}>
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>
                <Ban size={26} color={C.oxblood} strokeWidth={2.8} style={{verticalAlign: '-5px', marginRight: 8}} />
                唯有法律有可诉性。宪法无可诉性（未司法化），但仍属法律
              </span>
            </div>
          </Enter>
        </div>
        <Enter delay={210} from="up" marker="commonality-verdict" style={{position: 'absolute', left: 40, top: 636, width: 1696}}>
          <div style={{backgroundColor: C.soot, border: `3px solid ${C.brass}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
            <span style={{fontSize: 25, fontWeight: 930, color: C.cream}}>
              特征＝与道德、习惯、宗教比较的产物 —— 构成<Seal accent={C.brass} solid>共性</Seal>的均不是特征，切不可望文生义
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const FeaturesOfLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-normativity-scope" {...SCENES.normativityScope}>
      <NormativityScopeScene />
    </TimelineSequence>
    <TimelineSequence name="02-state-will-paths" {...SCENES.stateWillPaths}>
      <StateWillPathsScene />
    </TimelineSequence>
    <TimelineSequence name="03-universality-equal" {...SCENES.universalityEqual}>
      <UniversalityEqualScene />
    </TimelineSequence>
    <TimelineSequence name="04-rights-duties-matrix" {...SCENES.rightsDutiesMatrix}>
      <RightsDutiesMatrixScene />
    </TimelineSequence>
    <TimelineSequence name="05-coercion-justiciability" {...SCENES.coercionJusticiability}>
      <CoercionJusticiabilityScene />
    </TimelineSequence>
  </AbsoluteFill>
);
