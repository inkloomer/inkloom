import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, Eye, Gavel, Landmark, ScrollText, Split} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Brass Orrery — 黄铜太阳系仪 · 刑事诉讼构造
const C = {
  space: '#141B2E',
  spaceDeep: '#0D1322',
  brass: '#C9A24B',
  brassLight: '#E4C87E',
  brassInk: '#574312',
  brassSoft: 'rgba(201,162,75,0.14)',
  parchment: '#F4EAD5',
  parchmentAlt: '#EDE0C4',
  ink: '#2B2416',
  inkSoft: '#6B5F49',
  ember: '#C4553B',
  emberInk: '#7E2F1E',
  emberSoft: '#F6E0D8',
  cobalt: '#4A7FB5',
  cobaltInk: '#2C5178',
  cobaltSoft: '#DFE9F4',
  sun: '#E0A63C',
  jade: '#3E8A6E',
  jadeInk: '#275945',
  jadeSoft: '#DDEEE5',
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

const OrreryShell = ({
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
      backgroundColor: C.space,
      backgroundImage:
        'radial-gradient(circle at 18% 12%, rgba(228,200,126,0.10), transparent 30%),' +
        'radial-gradient(circle at 84% 88%, rgba(74,127,181,0.14), transparent 34%),' +
        'radial-gradient(1.2px 1.2px at 12% 30%, rgba(244,234,213,0.5), transparent),' +
        'radial-gradient(1.4px 1.4px at 70% 18%, rgba(244,234,213,0.42), transparent),' +
        'radial-gradient(1px 1px at 42% 74%, rgba(244,234,213,0.38), transparent),' +
        'radial-gradient(1.3px 1.3px at 88% 52%, rgba(244,234,213,0.34), transparent)',
      backgroundSize: 'auto,auto,640px 640px,640px 640px,640px 640px,640px 640px',
      color: C.parchment,
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
          backgroundColor: C.spaceDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.brassLight,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        星盘 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.parchment}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(244,234,213,0.66)',
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
      backgroundColor: solid ? color : onDark ? 'rgba(0,0,0,0.24)' : `${color}22`,
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
      backgroundColor: `${color}2E`,
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

const BrassPlate = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.parchment,
      border: `3px solid ${C.brass}`,
      boxShadow: `inset 0 0 0 2px rgba(201,162,75,0.35), 0 6px 18px rgba(6,10,20,0.5)`,
      borderRadius: 10,
      color: C.ink,
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const OrbitBody = ({
  color,
  inkColor,
  label,
  size,
  ring = false,
  glow = false,
  style,
}: {
  readonly color: string;
  readonly inkColor?: string;
  readonly label: string;
  readonly size: number;
  readonly ring?: boolean;
  readonly glow?: boolean;
  readonly style?: React.CSSProperties;
}) => (
  <div
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: glow ? color : `${color}22`,
      border: ring ? `3px dashed ${color}` : `3px solid ${color}`,
      display: 'grid',
      placeItems: 'center',
      color: inkColor ?? (glow ? '#FFFFFF' : color),
      fontSize: size >= 84 ? 30 : 22,
      fontWeight: 950,
      fontFamily: 'var(--inkloom-animation-label)',
      boxShadow: glow ? `0 0 26px ${color}88` : 'none',
      ...style,
    }}
  >
    {label}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 价值→目的→构造 因果齿轮 · 构造仅存于审判
// ---------------------------------------------------------------

const GearDial = ({
  color,
  diameter,
  label,
  caption,
  delay,
  frame,
  center,
}: {
  readonly color: string;
  readonly diameter: number;
  readonly label: string;
  readonly caption: string;
  readonly delay: number;
  readonly frame: number;
  readonly center: {readonly x: number; readonly y: number};
}) => {
  const spin = interpolate(frame, [delay, delay + 60], [-14, 0], {...clamp, easing: ease});
  return (
    <div
      data-final-knowledge={label === '构造' ? 'structure-driver-gear' : label === '目的' ? 'purpose-driver-gear' : 'value-driver-gear'}
      style={{
        position: 'absolute',
        left: center.x - diameter / 2,
        top: center.y - diameter / 2,
        width: diameter,
        height: diameter,
        borderRadius: '50%',
        backgroundColor: C.brassSoft,
        border: `5px dashed ${color}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        rotate: `${spin}deg`,
        opacity: interpolate(frame, [delay, delay + 18], [0, 1], clamp),
      }}
    >
      <div style={{rotate: `${-spin}deg`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
        <div style={{fontSize: 40, fontWeight: 950, color, lineHeight: 1.1}}>{label}</div>
        <div style={{fontSize: 22, color: 'rgba(244,234,213,0.72)', fontFamily: 'var(--inkloom-animation-label)'}}>{caption}</div>
      </div>
    </div>
  );
};

export const PurposeChainScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <OrreryShell accent={C.brass} code="01" subtitle="考点7 刑事诉讼构造 · 价值、目的与构造的传动" title="构造的因果齿轮">
      <div
        data-layout="gear-chain-with-stage-bay"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,external-negation,soft-highlight"
        data-visual-grammar="value-influences-purpose-through-a-meshed-gear,purpose-decides-structure-as-the-large-driver,no-direct-gear-couples-value-to-structure,full-triad-orbit-exists-only-at-the-trial-stage"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="价值影响目的，目的决定构造，价值不直接决定构造" style={{position: 'absolute', inset: 0}}>
          <GearDial color={C.brassLight} caption="深层动因" delay={0} diameter={250} frame={frame} label="价值" center={{x: 290, y: 390}} />
          <GearDial color={C.brassLight} caption="制度目标" delay={40} diameter={310} frame={frame} label="目的" center={{x: 690, y: 390}} />
          <div data-final-knowledge="structure-driver-gear" style={{position: 'absolute', inset: 0}}>
            <GearDial color={C.brass} caption="权力组织方式" delay={90} diameter={390} frame={frame} label="构造" center={{x: 1160, y: 390}} />
          </div>

          {[
            {label: '影 响', x1: 422, x2: 528, delay: 56},
            {label: '决 定', x1: 852, x2: 962, delay: 106},
          ].map((link) => (
            <div key={link.label} style={{position: 'absolute', left: link.x1, top: 330, width: link.x2 - link.x1, textAlign: 'center', ...enter(frame, link.delay, 0, 0)}}>
              <div style={{height: 4, backgroundColor: C.brass, borderRadius: 2, scale: `1 ${interpolate(frame, [link.delay, link.delay + 22], [0, 1], clamp)}`}} />
              <Chip color={C.brassLight} label={link.label} onDark style={{marginTop: 10}} />
            </div>
          ))}

          <div
            data-final-knowledge="no-direct-value-route"
            style={{
              position: 'absolute',
              left: 300,
              top: 636,
              width: 960,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 170, 18),
            }}
          >
            <div style={{flex: 1, borderTop: `3px dashed ${C.ember}`, opacity: 0.85}} />
            <ExternalNegation color={C.ember}>价值 ≠ 直接决定构造，必须经由目的间接作用</ExternalNegation>
            <div style={{flex: 1, borderTop: `3px dashed ${C.ember}`, opacity: 0.85}} />
          </div>
        </div>

        <BrassPlate style={{position: 'absolute', left: 1370, top: 70, width: 430, height: 590, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 18, ...enter(frame, 60, 30)}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Landmark size={34} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0}} />
            <span style={{fontSize: 30, fontWeight: 950, color: C.ink, lineHeight: 1.2}}>构造存在于哪个阶段</span>
          </div>

          <div data-final-knowledge="pre-trial-dual-relation" style={{border: `2px dashed ${C.ember}`, borderRadius: 10, padding: '16px 18px', backgroundColor: C.parchmentAlt}}>
            <div style={{fontSize: 24, fontWeight: 900, color: C.emberInk, marginBottom: 12}}>侦查 · 审查起诉</div>
            <div style={{position: 'relative', height: 110}}>
              <div style={{position: 'absolute', left: 12, top: 8, right: 12, height: 94, borderRadius: '50%', border: `3px dashed ${C.ember}88`}} />
              <OrbitBody color={C.ember} glow label="控" size={72} style={{left: 58, top: 19}} />
              <OrbitBody color={C.cobalt} label="辩" size={72} style={{right: 58, top: 19}} />
            </div>
            <div style={{fontSize: 22, color: C.ink, lineHeight: 1.4, marginTop: 10}}>
              <ThinUnderline color={C.emberInk}>只有控辩关系</ThinUnderline>，无完整三方构造
            </div>
          </div>

          <div data-final-knowledge="trial-full-triad" style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '16px 18px', backgroundColor: C.jadeSoft}}>
            <div style={{fontSize: 24, fontWeight: 900, color: C.jadeInk, marginBottom: 12}}>审判阶段</div>
            <div style={{position: 'relative', height: 110}}>
              <div style={{position: 'absolute', left: 6, top: 4, right: 6, height: 102, borderRadius: '50%', border: `4px solid ${C.jade}`}} />
              <OrbitBody color={C.ember} glow label="控" size={64} style={{left: 40, top: 23}} />
              <OrbitBody color={C.sun} glow label="审" size={72} style={{left: 155, top: 19}} />
              <OrbitBody color={C.cobalt} label="辩" size={64} style={{right: 40, top: 23}} />
            </div>
            <div style={{fontSize: 22, color: C.ink, lineHeight: 1.4, marginTop: 10}}>
              <SoftHighlight color={C.jade}>完整的控辩审构造</SoftHighlight>仅存于审判阶段
            </div>
          </div>
        </BrassPlate>
      </div>
    </OrreryShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 四种构造轨道对比
// ---------------------------------------------------------------

const QuadPanel = ({
  accent,
  badge,
  children,
  delay,
  frame,
  name,
  note,
  orbit,
  x,
  y,
}: {
  readonly accent: string;
  readonly badge: string;
  readonly children?: React.ReactNode;
  readonly delay: number;
  readonly frame: number;
  readonly name: string;
  readonly note: React.ReactNode;
  readonly orbit: React.ReactNode;
  readonly x: number;
  readonly y: number;
}) => (
  <BrassPlate style={{position: 'absolute', left: x, top: y, width: 885, height: 352, padding: '20px 26px', borderColor: accent, ...enter(frame, delay, 30)}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8}}>
      <span style={{fontSize: 32, fontWeight: 950, color: accent === C.brass ? C.brassInk : accent, lineHeight: 1.2}}>{name}</span>
      <Chip color={accent} label={badge} />
      <span style={{marginLeft: 'auto'}}>{children}</span>
    </div>
    <div style={{display: 'flex', gap: 22, alignItems: 'center'}}>
      <div style={{position: 'relative', width: 330, height: 218, flexShrink: 0}}>{orbit}</div>
      <div style={{fontSize: 24, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>{note}</div>
    </div>
  </BrassPlate>
);

export const ConstructionComparisonScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <OrreryShell accent={C.brassLight} code="02" subtitle="考点7 刑事诉讼构造 · 现代四大构造轨道对比" title="四种构造的轨道">
      <div
        data-layout="four-quadrant-orbit-bay"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="adversarial-system-lets-two-planets-lead-the-orbit,inquisitorial-system-centers-the-judge-sun,mixed-system-shifts-orbit-from-inquisitorial-to-adversarial,china-control-model-separates-prosecution-from-adjudication"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="构造之别 = 控辩审三方的轨道主导权之别" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="adversarial-quadrant" style={{position: 'absolute', inset: 0}}>
            <QuadPanel
              accent={C.ember}
              badge="英美法系"
              delay={0}
              frame={frame}
              name="当事人主义"
              orbit={
                <>
                  <div style={{position: 'absolute', inset: '10px 14px', borderRadius: '50%', border: `3px solid ${C.ember}77`}} />
                  <OrbitBody color={C.ember} glow label="控" size={78} style={{left: 26, top: 66}} />
                  <OrbitBody color={C.cobalt} glow label="辩" size={78} style={{right: 26, top: 66}} />
                  <OrbitBody color={C.sun} label="审" size={52} style={{left: 139, top: 79}} />
                </>
              }
              note={
                <>
                  <Chip color={C.ember} label="控辩主导" style={{marginBottom: 10}} />
                  <div>
                    追求<SoftHighlight color={C.ember}>程序公正</SoftHighlight>
                    ，当事人推进诉讼
                  </div>
                </>
              }
              x={0}
              y={0}
            />
          </div>

          <div data-final-knowledge="inquisitorial-quadrant" style={{position: 'absolute', inset: 0}}>
            <QuadPanel
              accent={C.sun}
              badge="大陆法系"
              delay={70}
              frame={frame}
              name="职权主义"
              orbit={
                <>
                  <div style={{position: 'absolute', inset: '10px 14px', borderRadius: '50%', border: `3px solid ${C.sun}88`}} />
                  <OrbitBody color={C.sun} glow label="审" size={96} style={{left: 117, top: 57}} />
                  <OrbitBody color={C.ember} label="控" size={54} style={{left: 34, top: 44}} />
                  <OrbitBody color={C.cobalt} label="辩" size={54} style={{right: 34, bottom: 40}} />
                </>
              }
              note={
                <>
                  <Chip color={C.brassInk} label="法官主导" style={{marginBottom: 10}} />
                  <div>
                    注重<ThinUnderline color={C.brassInk}>实体真实</ThinUnderline>
                    ，但不忽略人权
                  </div>
                </>
              }
              x={915}
              y={0}
            />
          </div>

          <div data-final-knowledge="mixed-quadrant" style={{position: 'absolute', inset: 0}}>
            <QuadPanel
              accent={C.cobalt}
              badge="日本 · 意大利"
              delay={140}
              frame={frame}
              name="混合式"
              orbit={
                <>
                  <div style={{position: 'absolute', inset: '10px 14px', borderRadius: '50%', border: `3px solid ${C.cobalt}77`}} />
                  <OrbitBody color={C.sun} label="职权" size={66} style={{left: 30, top: 24}} />
                  <div style={{position: 'absolute', left: 104, top: 47, width: 118, borderTop: `3px dashed ${C.cobalt}`, rotate: '18deg'}} />
                  <OrbitBody color={C.cobalt} label="当事人" size={72} style={{right: 26, bottom: 28}} />
                </>
              }
              note={
                <>
                  <Chip color={C.cobalt} label="先职权 → 后当事人" style={{marginBottom: 10}} />
                  <div>以<ThinUnderline color={C.cobaltInk}>当事人主义为主</ThinUnderline>的混合轨道</div>
                </>
              }
              x={0}
              y={372}
            />
          </div>

          <div data-final-knowledge="china-quadrant" style={{position: 'absolute', inset: 0}}>
            <QuadPanel
              accent={C.jade}
              badge="我国"
              delay={210}
              frame={frame}
              name="控辩式"
              orbit={
                <>
                  <div style={{position: 'absolute', left: 16, top: 34, width: 128, height: 128, borderRadius: '50%', border: `4px solid ${C.ember}`}} />
                  <OrbitBody color={C.ember} glow label="控" size={62} style={{left: 49, top: 67}} />
                  <div style={{position: 'absolute', left: 186, top: 34, width: 128, height: 128, borderRadius: '50%', border: `4px solid ${C.jade}`}} />
                  <OrbitBody color={C.jade} glow label="审" size={62} style={{left: 219, top: 67}} />
                  <OrbitBody color={C.cobalt} label="辩" size={54} style={{left: 153, top: 148}} />
                </>
              }
              note={
                <>
                  <div style={{marginBottom: 10}}>
                    <Chip color={C.jade} label="控审分离" solid />
                  </div>
                  <div>公诉自诉皆控辩，<SoftHighlight color={C.jade}>控不干涉审</SoftHighlight></div>
                </>
              }
              x={915}
              y={372}
            />
          </div>
        </div>
      </div>
    </OrreryShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 控审分离两步判
// ---------------------------------------------------------------

const GatePanel = ({
  accent,
  children,
  delay,
  frame,
  step,
  title,
  top,
}: {
  readonly accent: string;
  readonly children: React.ReactNode;
  readonly delay: number;
  readonly frame: number;
  readonly step: string;
  readonly title: string;
  readonly top: number;
}) => (
  <BrassPlate style={{position: 'absolute', left: 0, top, width: 950, padding: '20px 26px', borderColor: accent, ...enter(frame, delay, 28)}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10}}>
      <span
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: `3px solid ${accent}`,
          color: accent,
          display: 'grid',
          placeItems: 'center',
          fontSize: 22,
          fontWeight: 950,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        {step}
      </span>
      <span style={{fontSize: 32, fontWeight: 950, color: C.ink, lineHeight: 1.2}}>{title}</span>
    </div>
    {children}
  </BrassPlate>
);

export const SeparationTwoStepScene: React.FC = () => {
  const frame = useCurrentFrame();
  const dossierTravel = interpolate(frame, [0, 60], [0, 1], {...clamp, easing: ease});

  return (
    <OrreryShell accent={C.jade} code="03" subtitle="考点7 刑事诉讼构造 · 控审分离的解题两步" title="控审分离两步判">
      <div
        data-layout="two-step-gate-with-verdict-bay"
        data-visual-anchor="flow-target"
        data-text-treatments="chip,external-negation,label-block"
        data-visual-grammar="step-one-tests-prosecution-adjudication-relation,supervision-function-is-not-prosecution,step-two-tests-separation-in-both-directions,control-cannot-decide-trial-and-trial-cannot-decide-control"
        data-focal-channels="connector,annotation,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="先判是否控审关系，再判是否分离" style={{position: 'absolute', inset: 0}}>
          <div
            data-stateful-source="review-dossier"
            style={{
              position: 'absolute',
              left: interpolate(dossierTravel, [0, 1], [40, 240]),
              top: -8,
              opacity: interpolate(frame, [0, 16], [0, 1], clamp),
            }}
          >
            <Chip color={C.brassLight} label="题目行为" onDark />
          </div>

          <GatePanel accent={C.brass} delay={20} frame={frame} step="1" title="是否属于控审关系？" top={90}>
            <div data-final-knowledge="relation-test" style={{fontSize: 24, lineHeight: 1.5, color: C.ink, fontWeight: 700, display: 'flex', flexDirection: 'column', gap: 10}}>
              <div>只有「控诉 ↔ 审判」的关系才进入第二步</div>
              <ExternalNegation color={C.emberInk}>
                检察院建议变更强制措施是<SoftHighlight color={C.cobaltInk}>监督职能</SoftHighlight>，不是控诉
              </ExternalNegation>
            </div>
          </GatePanel>

          <GatePanel accent={C.ember} delay={120} frame={frame} step="2" title="是否相互分离？" top={360}>
            <div data-final-knowledge="separation-test" style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 24, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.ember} label="控 → 审" />
                <span>控方不能决定审判的成立与归属</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.jade} label="审 → 控" />
                <span>审判不能代行控诉、不能不控而审</span>
              </div>
              <ExternalNegation color={C.emberInk}>任一方向不分离，即违反控审分离</ExternalNegation>
            </div>
          </GatePanel>

          <BrassPlate style={{position: 'absolute', left: 990, top: 90, width: 810, height: 560, padding: '24px 28px', borderColor: C.jade, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22, ...enter(frame, 220, 30)}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Split size={34} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0}} />
              <span style={{fontSize: 32, fontWeight: 950, color: C.ink, lineHeight: 1.2}}>两步判的结论</span>
            </div>
            <div
              data-final-knowledge="lawful-separation-verdict"
              style={{
                border: `3px solid ${C.jade}`,
                backgroundColor: C.jadeSoft,
                borderRadius: 10,
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <CheckCircle2 size={34} strokeWidth={2.6} style={{color: C.jadeInk, flexShrink: 0}} />
              <div style={{fontSize: 25, lineHeight: 1.45, color: C.jadeInk, fontWeight: 900}}>
                属控审关系，且相互分离
                <div style={{fontSize: 22, fontWeight: 700, marginTop: 4}}>→ 符合控审分离，构造合法</div>
              </div>
            </div>
            <div
              data-final-knowledge="unlawful-separation-verdict"
              style={{
                border: `3px solid ${C.ember}`,
                backgroundColor: C.emberSoft,
                borderRadius: 10,
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <Ban size={34} strokeWidth={2.6} style={{color: C.emberInk, flexShrink: 0}} />
              <div style={{fontSize: 25, lineHeight: 1.45, color: C.emberInk, fontWeight: 900}}>
                非控审关系，或未分离
                <div style={{fontSize: 22, fontWeight: 700, marginTop: 4}}>→ 不符合控审分离</div>
              </div>
            </div>
            <div data-stateful-terminal="review-dossier" style={{display: 'flex', justifyContent: 'center', opacity: interpolate(frame, [250, 282], [0, 1], clamp)}}>
              <Chip color={C.brassInk} label="题目行为已判定" />
            </div>
          </BrassPlate>

          <div
            style={{
              position: 'absolute',
              left: 950,
              top: 330,
              width: 40,
              height: 4,
              backgroundColor: C.brass,
              opacity: interpolate(frame, [200, 224], [0, 1], clamp),
            }}
          />
          <Gavel size={30} strokeWidth={2.4} style={{position: 'absolute', left: 1006, top: 316, color: C.brassLight, opacity: interpolate(frame, [208, 232], [0, 1], clamp)}} />
          <Eye size={26} strokeWidth={2.4} style={{position: 'absolute', left: 906, top: 200, color: 'rgba(244,234,213,0.6)'}} />
          <ScrollText size={26} strokeWidth={2.4} style={{position: 'absolute', left: 906, top: 480, color: 'rgba(244,234,213,0.6)'}} />
        </div>
      </div>
    </OrreryShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const ProcedureStructureOrrery: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.space, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['purpose-chain-gears'].start} duration={SCENES['purpose-chain-gears'].duration}>
      <PurposeChainScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES['four-construction-quadrants'].start}
      duration={SCENES['four-construction-quadrants'].duration}
    >
      <ConstructionComparisonScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['separation-two-step-gate'].start} duration={SCENES['separation-two-step-gate'].duration}>
      <SeparationTwoStepScene />
    </TimelineSequence>
  </AbsoluteFill>
);
