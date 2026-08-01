/**
 * @deprecated Legacy compatibility for existing animation nodes.
 * New nodes must own their background, typography, palette, surfaces, headings,
 * and transitions locally. Use remotion-runtime.tsx only for style-neutral mechanics.
 *
 * Shared legal-explainer visual primitives (remotion-markup + bits patterns).
 * - Enter / StaggerEnter: staggered card motion without per-scene phase math
 * - Inline interpolate on style (scale/translate, no transform strings)
 * - perceptual-scale for scale animations
 * - Keyword + optional rough-notation underline for focal rules
 * - SceneMotion / Background / FilmRail / SceneSequence for multi-scene decks
 */
import type {CSSProperties, ReactElement, ReactNode} from 'react';
import {Children, cloneElement, isValidElement} from 'react';
import {ArrowRight, type LucideIcon} from 'lucide-react';
import {Underline} from '@remotion/rough-notation';
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const FONT_FAMILY = 'var(--inkloom-animation-body)';
export const ENTER_EASING = Easing.bezier(0.16, 1, 0.3, 1);
export const EXIT_EASING = Easing.bezier(0.7, 0, 0.84, 0);

export type LegalPalette = {
  background: string;
  paper: string;
  ink: string;
  muted: string;
  line: string;
  red: string;
  redSoft: string;
  teal: string;
  tealSoft: string;
  gold: string;
  goldSoft: string;
  blue: string;
  blueSoft: string;
  purple?: string;
  purpleSoft?: string;
};

export type LegalVisualDeps<Accent extends string> = {
  readonly PALETTE: LegalPalette;
  readonly accentColor: (accent: Accent) => string;
  readonly accentSoftColor: (accent: Accent) => string;
  readonly toSourceFrame: (playbackFrame: number) => number;
  /** e.g. "CIVIL PROCEDURE / 01" */
  readonly chapterLabel: string;
  readonly defaultAccent?: Accent;
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export function createLegalVisualSystem<Accent extends string>(deps: LegalVisualDeps<Accent>) {
  const {PALETTE, accentColor, accentSoftColor, toSourceFrame, chapterLabel} = deps;
  const defaultAccent = (deps.defaultAccent ?? ('red' as Accent)) as Accent;

  const baseTextStyle: CSSProperties = {
    color: PALETTE.ink,
    fontFamily: 'var(--inkloom-animation-body)',
    letterSpacing: 0,
  };

  /** Bits-style enter: opacity + translate + perceptual scale, all inline in style */
  const Enter = ({
    children,
    delay = 0,
    duration = 28,
    distance = 28,
    from = 'up',
    style,
  }: {
    readonly children: ReactNode;
    readonly delay?: number;
    readonly duration?: number;
    readonly distance?: number;
    readonly from?: 'up' | 'left' | 'right' | 'none';
    readonly style?: CSSProperties;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const start = delay;
    const end = delay + duration;
    const fromTranslate =
      from === 'up'
        ? `0px ${distance}px`
        : from === 'left'
          ? `-${distance}px 0px`
          : from === 'right'
            ? `${distance}px 0px`
            : '0px 0px';

    return (
      <div
        style={{
          ...style,
          opacity: interpolate(frame, [start, end], [0, 1], {...clamp, easing: ENTER_EASING}),
          translate: interpolate(frame, [start, end], [fromTranslate, '0px 0px'], {
            ...clamp,
            easing: ENTER_EASING,
          }),
          scale: interpolate(frame, [start, end], [0.94, 1], {
            ...clamp,
            easing: ENTER_EASING,
            output: 'perceptual-scale',
          }),
        }}
      >
        {children}
      </div>
    );
  };

  /** Stagger children by injecting delay into Enter wrappers, or wrapping each child */
  const StaggerEnter = ({
    children,
    baseDelay = 16,
    step = 22,
    duration = 28,
    distance = 24,
    from = 'up',
    style,
    gap,
    direction = 'row',
  }: {
    readonly children: ReactNode;
    readonly baseDelay?: number;
    readonly step?: number;
    readonly duration?: number;
    readonly distance?: number;
    readonly from?: 'up' | 'left' | 'right' | 'none';
    readonly style?: CSSProperties;
    readonly gap?: number;
    readonly direction?: 'row' | 'column';
  }) => {
    const items = Children.toArray(children);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: direction,
          gap: gap ?? 24,
          ...style,
        }}
      >
        {items.map((child, index) => {
          const delay = baseDelay + index * step;
          if (isValidElement(child) && child.type === Enter) {
            return cloneElement(child as ReactElement<{delay?: number}>, {
              key: index,
              delay: (child.props as {delay?: number}).delay ?? delay,
            });
          }
          return (
            <Enter key={index} delay={delay} duration={duration} distance={distance} from={from}>
              {child}
            </Enter>
          );
        })}
      </div>
    );
  };

  const MaskedReveal = ({
    children,
    delay = 0,
    duration = 28,
    distance = 36,
    style,
  }: {
    readonly children: ReactNode;
    readonly delay?: number;
    readonly duration?: number;
    readonly distance?: number;
    readonly style?: CSSProperties;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    return (
      <div
        style={{
          ...style,
          clipPath: `inset(0 ${interpolate(frame, [delay, delay + duration], [100, 0], {
            ...clamp,
            easing: ENTER_EASING,
          })}% 0 0)`,
        }}
      >
        <div
          style={{
            translate: interpolate(frame, [delay, delay + duration], [`-${distance}px 0px`, '0px 0px'], {
              ...clamp,
              easing: ENTER_EASING,
            }),
          }}
        >
          {children}
        </div>
      </div>
    );
  };

  const FadeIn = ({
    children,
    delay = 0,
    duration = 24,
    distance = 24,
    style,
  }: {
    readonly children: ReactNode;
    readonly delay?: number;
    readonly duration?: number;
    readonly distance?: number;
    readonly style?: CSSProperties;
  }) => (
    <Enter delay={delay} duration={duration} distance={distance} from="up" style={style}>
      {children}
    </Enter>
  );

  const ImpactReveal = ({
    children,
    delay,
    style,
  }: {
    readonly children: ReactNode;
    readonly delay: number;
    readonly style?: CSSProperties;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const {fps} = useVideoConfig();
    return (
      <div
        style={{
          ...style,
          opacity: interpolate(frame, [delay, delay + 3], [0, 1], clamp),
          scale: spring({
            frame: frame - delay,
            fps,
            config: {damping: 16, mass: 0.65, stiffness: 180},
            durationInFrames: 30,
          }),
        }}
      >
        {children}
      </div>
    );
  };

  /** Static keyword chip (always on) */
  const Keyword = ({
    children,
    accent = defaultAccent,
  }: {
    readonly children: ReactNode;
    readonly accent?: Accent;
  }) => (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px 5px',
        color: accentColor(accent),
        backgroundColor: accentSoftColor(accent),
        borderBottom: `4px solid ${accentColor(accent)}`,
        fontWeight: 800,
      }}
    >
      {children}
    </span>
  );

  /**
   * Focal rule with rough-notation underline (markup text-highlights).
   * Use for one primary conclusion per scene only.
   */
  const KeywordFocus = ({
    children,
    accent = defaultAccent,
    delay = 40,
    duration = 28,
  }: {
    readonly children: ReactNode;
    readonly accent?: Accent;
    readonly delay?: number;
    readonly duration?: number;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
      ...clamp,
      easing: ENTER_EASING,
    });
    return (
      <Underline color={accentColor(accent)} strokeWidth={3} padding={{top: 6}} progress={progress}>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 8px 4px',
            color: accentColor(accent),
            backgroundColor: accentSoftColor(accent),
            fontWeight: 900,
          }}
        >
          {children}
        </span>
      </Underline>
    );
  };

  const SceneHeading = ({
    index,
    eyebrow,
    title,
    accent,
  }: {
    readonly index: string;
    readonly eyebrow: string;
    readonly title: string;
    readonly accent: Accent;
  }) => (
    <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: 92, top: 56}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'grid',
            width: 58,
            height: 58,
            placeItems: 'center',
            color: accentColor(accent),
            border: `2px solid ${accentColor(accent)}`,
            fontSize: 22,
            fontWeight: 800,
          }}
        >
          {index}
        </div>
        <div>
          <div style={{...baseTextStyle, color: accentColor(accent), fontSize: 22, fontWeight: 800}}>{eyebrow}</div>
          {/* video-layout: larger main headline for 1920 canvas, dense legal diagrams */}
          <div style={{...baseTextStyle, marginTop: 6, fontSize: 64, fontWeight: 900, lineHeight: 1.05}}>{title}</div>
        </div>
      </div>
    </MaskedReveal>
  );

  const IconNode = ({
    icon: Icon,
    label,
    detail,
    accent,
    style,
    compact = false,
  }: {
    readonly icon: LucideIcon;
    readonly label: string;
    readonly detail?: string;
    readonly accent: Accent;
    readonly style?: CSSProperties;
    readonly compact?: boolean;
  }) => (
    <div
      style={{
        ...baseTextStyle,
        ...style,
        display: 'flex',
        width: compact ? 260 : 310,
        minHeight: compact ? 94 : 122,
        alignItems: 'center',
        gap: compact ? 16 : 22,
        boxSizing: 'border-box',
        padding: compact ? '16px 18px' : '20px 24px',
        backgroundColor: PALETTE.paper,
        border: `2px solid ${accentColor(accent)}`,
        borderRadius: 8,
        boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
      }}
    >
      <div
        style={{
          display: 'grid',
          width: compact ? 54 : 66,
          height: compact ? 54 : 66,
          flex: '0 0 auto',
          placeItems: 'center',
          color: accentColor(accent),
          backgroundColor: accentSoftColor(accent),
          borderRadius: 6,
        }}
      >
        <Icon size={compact ? 32 : 40} strokeWidth={2.2} />
      </div>
      <div>
        <div style={{fontSize: compact ? 24 : 30, fontWeight: 850, lineHeight: 1.15}}>{label}</div>
        {detail ? (
          <div style={{marginTop: 7, color: PALETTE.muted, fontSize: compact ? 18 : 20, fontWeight: 650}}>{detail}</div>
        ) : null}
      </div>
    </div>
  );

  const FlowArrow = ({
    left,
    top,
    width,
    progress,
    accent,
    label,
    thickness = 5,
    labelPosition = 'top',
  }: {
    readonly left: number;
    readonly top: number;
    readonly width: number;
    readonly progress: number;
    readonly accent: Accent | 'ink';
    readonly label?: string;
    readonly thickness?: number;
    readonly labelPosition?: 'top' | 'bottom';
  }) => {
    const color = accent === 'ink' ? PALETTE.ink : accentColor(accent as Accent);
    return (
      <div style={{position: 'absolute', left, top, width, height: 70}}>
        {label ? (
          <div
            style={{
              ...baseTextStyle,
              position: 'absolute',
              left: 0,
              top: labelPosition === 'top' ? -34 : 42,
              color,
              fontSize: 20,
              fontWeight: 800,
              opacity: progress,
            }}
          >
            {label}
          </div>
        ) : null}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 24,
            width,
            height: thickness,
            backgroundColor: color,
            scale: `${progress} 1`,
            transformOrigin: 'left center',
          }}
        />
        <ArrowRight
          size={42}
          strokeWidth={2.5}
          style={{
            position: 'absolute',
            right: -13,
            top: 4,
            color,
            opacity: interpolate(progress, [0.82, 1], [0, 1], clamp),
          }}
        />
      </div>
    );
  };

  const VerticalArrow = ({
    left,
    top,
    height,
    progress,
    accent,
    label,
    thickness = 5,
  }: {
    readonly left: number;
    readonly top: number;
    readonly height: number;
    readonly progress: number;
    readonly accent: Accent | 'ink';
    readonly label?: string;
    readonly thickness?: number;
  }) => {
    const color = accent === 'ink' ? PALETTE.ink : accentColor(accent as Accent);
    return (
      <div style={{position: 'absolute', left, top, width: 70, height}}>
        {label ? (
          <div
            style={{
              ...baseTextStyle,
              position: 'absolute',
              left: 34,
              top: height / 2,
              translate: '0px -50%',
              color,
              fontSize: 20,
              fontWeight: 800,
              opacity: progress,
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </div>
        ) : null}
        <div
          style={{
            position: 'absolute',
            left: 24,
            top: 0,
            width: thickness,
            height,
            backgroundColor: color,
            scale: `1 ${progress}`,
            transformOrigin: 'center top',
          }}
        />
        <ArrowRight
          size={42}
          strokeWidth={2.5}
          style={{
            position: 'absolute',
            left: 5,
            bottom: -13,
            color,
            rotate: '90deg',
            opacity: interpolate(progress, [0.82, 1], [0, 1], clamp),
          }}
        />
      </div>
    );
  };

  const BranchConnector = ({
    fromX,
    fromY,
    toX,
    toY,
    progress,
    accent,
  }: {
    readonly fromX: number;
    readonly fromY: number;
    readonly toX: number;
    readonly toY: number;
    readonly progress: number;
    readonly accent: Accent;
  }) => {
    const length = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2);
    const angle = (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI;
    return (
      <div
        style={{
          position: 'absolute',
          left: fromX,
          top: fromY,
          width: length,
          height: 4,
          backgroundColor: accentColor(accent),
          transformOrigin: 'left center',
          rotate: `${angle}deg`,
          scale: `${progress} 1`,
          opacity: progress,
        }}
      />
    );
  };

  const FilmRail = ({frame, totalFrames}: {readonly frame: number; readonly totalFrames: number}) => (
    <>
      <div
        style={{
          position: 'absolute',
          right: 92,
          top: 84,
          ...baseTextStyle,
          color: PALETTE.muted,
          fontSize: 18,
          fontWeight: 800,
        }}
      >
        {chapterLabel}
      </div>
      <div style={{position: 'absolute', left: 92, right: 92, bottom: 50, height: 3, backgroundColor: PALETTE.line}}>
        <div
          style={{
            width: `${interpolate(frame, [0, totalFrames - 1], [0, 100], clamp)}%`,
            height: '100%',
            backgroundColor: PALETTE.ink,
          }}
        />
      </div>
    </>
  );

  const GateChip = ({
    label,
    accent,
    style,
  }: {
    readonly label: string;
    readonly accent: Accent;
    readonly style?: CSSProperties;
  }) => (
    <div
      style={{
        ...baseTextStyle,
        ...style,
        display: 'grid',
        placeItems: 'center',
        minWidth: 88,
        height: 48,
        padding: '0 16px',
        borderRadius: 8,
        backgroundColor: accentSoftColor(accent),
        color: accentColor(accent),
        border: `2px solid ${accentColor(accent)}`,
        fontSize: 22,
        fontWeight: 900,
      }}
    >
      {label}
    </div>
  );

  /** Causal slide between scenes (prefer over fade for legal continuity) */
  const SceneMotion = ({
    children,
    duration,
    cut = false,
  }: {
    readonly children: ReactNode;
    readonly duration: number;
    /** intentional conceptual cut: no slide */
    readonly cut?: boolean;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const sourceDuration = toSourceFrame(duration);
    if (cut) {
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: interpolate(frame, [0, 10, sourceDuration - 10, sourceDuration], [0, 1, 1, 0], clamp),
          }}
        >
          {children}
        </div>
      );
    }
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          translate: interpolate(
            frame,
            [0, 18, sourceDuration - 14, sourceDuration],
            ['-86px 0px', '0px 0px', '0px 0px', '86px 0px'],
            {
              ...clamp,
              easing: [ENTER_EASING, Easing.linear, EXIT_EASING],
            },
          ),
        }}
      >
        {children}
      </div>
    );
  };

  const BackgroundStructure = () => (
    <>
      {[320, 640, 960, 1280, 1600].map((left) => (
        <div
          key={left}
          style={{
            position: 'absolute',
            left,
            top: 0,
            width: 1,
            height: 1080,
            backgroundColor: 'rgba(203, 210, 206, 0.26)',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 206,
          width: 1920,
          height: 1,
          backgroundColor: 'rgba(203, 210, 206, 0.55)',
        }}
      />
    </>
  );

  const SceneSequence = ({
    start,
    duration,
    name,
    children,
    cut = false,
  }: {
    readonly start: number;
    readonly duration: number;
    readonly name: string;
    readonly children: ReactNode;
    readonly cut?: boolean;
  }) => (
    <Sequence from={start} durationInFrames={duration} name={name} layout="none">
      <SceneMotion duration={duration} cut={cut}>
        {children}
      </SceneMotion>
    </Sequence>
  );

  const DeckShell = ({
    children,
    frame,
    totalFrames,
  }: {
    readonly children: ReactNode;
    readonly frame: number;
    readonly totalFrames: number;
  }) => (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <BackgroundStructure />
      {children}
      <FilmRail frame={frame} totalFrames={totalFrames} />
    </AbsoluteFill>
  );

  return {
    FONT_FAMILY,
    ENTER_EASING,
    EXIT_EASING,
    baseTextStyle,
    Enter,
    StaggerEnter,
    MaskedReveal,
    FadeIn,
    ImpactReveal,
    Keyword,
    KeywordFocus,
    SceneHeading,
    IconNode,
    FlowArrow,
    VerticalArrow,
    BranchConnector,
    FilmRail,
    GateChip,
    SceneMotion,
    BackgroundStructure,
    SceneSequence,
    DeckShell,
  };
}

export type LegalVisualSystem<Accent extends string> = ReturnType<typeof createLegalVisualSystem<Accent>>;
