import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, type LucideIcon} from 'lucide-react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {accentColor, accentSoftColor, PALETTE, toSourceFrame, type Accent} from './storyboard';

export const FONT_FAMILY = 'var(--inkloom-animation-body)';
export const ENTER_EASING = Easing.bezier(0.16, 1, 0.3, 1);
export const EXIT_EASING = Easing.bezier(0.7, 0, 0.84, 0);

export const baseTextStyle: CSSProperties = {
  color: PALETTE.ink,
  fontFamily: 'var(--inkloom-animation-body)',
  letterSpacing: 0,
};

export const MaskedReveal = ({
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
  const hiddenRight = interpolate(frame, [delay, delay + duration], [100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{...style, clipPath: `inset(0 ${hiddenRight}% 0 0)`}}>
      <div
        style={{
          translate: interpolate(frame, [delay, delay + duration], [`-${distance}px 0px`, '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          }),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const ImpactReveal = ({
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
        opacity: interpolate(frame, [delay, delay + 3], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        }),
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

export const FadeSlide = ({
  children,
  delay,
  duration = 22,
  from = 'left',
  style,
}: {
  readonly children: ReactNode;
  readonly delay: number;
  readonly duration?: number;
  readonly from?: 'left' | 'right' | 'up' | 'down';
  readonly style?: CSSProperties;
}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const offset = (1 - progress) * 42;
  const translate =
    from === 'left'
      ? `${-offset}px 0px`
      : from === 'right'
        ? `${offset}px 0px`
        : from === 'up'
          ? `0px ${-offset}px`
          : `0px ${offset}px`;

  return (
    <div style={{...style, opacity: progress, translate}}>
      {children}
    </div>
  );
};

export const Keyword = ({children, accent = 'red'}: {readonly children: ReactNode; readonly accent?: Accent}) => (
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

export const SceneHeading = ({
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
  <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: 92, top: 68}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
      <div
        style={{
          ...baseTextStyle,
          display: 'grid',
          width: 54,
          height: 54,
          placeItems: 'center',
          color: accentColor(accent),
          border: `2px solid ${accentColor(accent)}`,
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        {index}
      </div>
      <div>
        <div style={{...baseTextStyle, color: accentColor(accent), fontSize: 20, fontWeight: 800}}>{eyebrow}</div>
        <div style={{...baseTextStyle, marginTop: 5, fontSize: 48, fontWeight: 900, lineHeight: 1.05}}>{title}</div>
      </div>
    </div>
  </MaskedReveal>
);

export const IconNode = ({
  icon: Icon,
  label,
  detail,
  accent,
  style,
  compact = false,
  wide = false,
}: {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly detail?: string;
  readonly accent: Accent;
  readonly style?: CSSProperties;
  readonly compact?: boolean;
  readonly wide?: boolean;
}) => (
  <div
    style={{
      ...baseTextStyle,
      ...style,
      display: 'flex',
      width: wide ? 360 : compact ? 250 : 300,
      minHeight: compact ? 90 : 118,
      alignItems: 'center',
      gap: compact ? 14 : 20,
      boxSizing: 'border-box',
      padding: compact ? '14px 16px' : '18px 22px',
      backgroundColor: PALETTE.paper,
      border: `2px solid ${accentColor(accent)}`,
      borderRadius: 8,
      boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
    }}
  >
    <div
      style={{
        display: 'grid',
        width: compact ? 50 : 62,
        height: compact ? 50 : 62,
        flex: '0 0 auto',
        placeItems: 'center',
        color: accentColor(accent),
        backgroundColor: accentSoftColor(accent),
        borderRadius: 6,
      }}
    >
      <Icon size={compact ? 30 : 38} strokeWidth={2.2} />
    </div>
    <div style={{minWidth: 0}}>
      <div style={{fontSize: compact ? 23 : 28, fontWeight: 850, lineHeight: 1.15}}>{label}</div>
      {detail ? <div style={{marginTop: 6, color: PALETTE.muted, fontSize: compact ? 16 : 18, fontWeight: 650, lineHeight: 1.25}}>{detail}</div> : null}
    </div>
  </div>
);

export const FlowArrow = ({
  left,
  top,
  width,
  progress,
  accent,
  label,
  thickness = 5,
}: {
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly progress: number;
  readonly accent: Accent;
  readonly label?: string;
  readonly thickness?: number;
}) => (
  <div style={{position: 'absolute', left, top, width, height: 70}}>
    {label ? (
      <div
        style={{
          ...baseTextStyle,
          position: 'absolute',
          left: 0,
          top: -34,
          color: accentColor(accent),
          fontSize: 19,
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
        backgroundColor: accentColor(accent),
        scale: `${progress} 1`,
        transformOrigin: 'left center',
      }}
    />
    <ArrowRight
      size={40}
      strokeWidth={2.5}
      style={{
        position: 'absolute',
        right: -12,
        top: 5,
        color: accentColor(accent),
        opacity: interpolate(progress, [0.82, 1], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        }),
      }}
    />
  </div>
);

export const VerticalFlow = ({
  left,
  top,
  height,
  progress,
  accent,
}: {
  readonly left: number;
  readonly top: number;
  readonly height: number;
  readonly progress: number;
  readonly accent: Accent;
}) => (
  <div style={{position: 'absolute', left, top, width: 5, height}}>
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 5,
        height,
        backgroundColor: accentColor(accent),
        scale: `1 ${progress}`,
        transformOrigin: 'top center',
        borderRadius: 999,
      }}
    />
  </div>
);

export const RuleChip = ({
  children,
  accent,
  style,
}: {
  readonly children: ReactNode;
  readonly accent: Accent;
  readonly style?: CSSProperties;
}) => (
  <div
    style={{
      ...baseTextStyle,
      ...style,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px 18px',
      borderRadius: 999,
      color: accentColor(accent),
      backgroundColor: accentSoftColor(accent),
      border: `1.5px solid ${accentColor(accent)}`,
      fontSize: 20,
      fontWeight: 850,
    }}
  >
    {children}
  </div>
);

export const StepBadge = ({
  number,
  accent,
}: {
  readonly number: string;
  readonly accent: Accent;
}) => (
  <div
    style={{
      ...baseTextStyle,
      display: 'grid',
      width: 48,
      height: 48,
      placeItems: 'center',
      color: PALETTE.paper,
      backgroundColor: accentColor(accent),
      borderRadius: 8,
      fontSize: 20,
      fontWeight: 900,
    }}
  >
    {number}
  </div>
);

export const FilmRail = ({frame, totalFrames}: {readonly frame: number; readonly totalFrames: number}) => (
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
      CIVIL PROCEDURE / 04
    </div>
    <div style={{position: 'absolute', left: 92, right: 92, bottom: 50, height: 3, backgroundColor: PALETTE.line}}>
      <div
        style={{
          width: `${interpolate(frame, [0, totalFrames - 1], [0, 100], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })}%`,
          height: '100%',
          backgroundColor: PALETTE.ink,
        }}
      />
    </div>
  </>
);
