import type { CSSProperties } from 'react';
import { Easing, interpolate, useCurrentFrame } from 'remotion';
import { PALETTE } from './storyboard';

export const ENTER_EASING = Easing.bezier(0.22, 1, 0.36, 1);
export const EXIT_EASING = Easing.bezier(0.55, 0, 1, 0.45);

export const baseTextStyle: CSSProperties = {
  fontFamily:
    '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
  color: PALETTE.ink,
  letterSpacing: '0.02em',
};

export const SceneHeading = ({
  index,
  eyebrow,
  title,
  accent,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent: 'red' | 'teal' | 'blue' | 'gold';
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 80,
        opacity,
      }}
    >
      <div
        style={{
          ...baseTextStyle,
          fontSize: 22,
          fontWeight: 600,
          color: PALETTE.gray,
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          ...baseTextStyle,
          fontSize: 56,
          fontWeight: 900,
          color: PALETTE[accent],
        }}
      >
        {title}
      </div>
    </div>
  );
};

export const Keyword = ({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: 'red' | 'teal' | 'blue' | 'gold';
}) => (
  <span
    style={{
      color: PALETTE[accent],
      fontWeight: 900,
      padding: '0 4px',
    }}
  >
    {children}
  </span>
);

export const MaskedReveal = ({
  children,
  delay,
  duration,
  style,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + duration * 0.5], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const translateX = interpolate(frame, [delay, delay + duration], [-40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div
      style={{
        ...style,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      {children}
    </div>
  );
};

export const ImpactReveal = ({
  children,
  delay,
  style,
}: {
  children: React.ReactNode;
  delay: number;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [delay, delay + 10, delay + 20], [0.8, 1.05, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        ...style,
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {children}
    </div>
  );
};

export const FlowArrow = ({
  left,
  top,
  width,
  progress,
  accent,
  label,
}: {
  left: number;
  top: number;
  width: number;
  progress: number;
  accent: 'red' | 'teal' | 'blue' | 'gold';
  label?: string;
}) => {
  const arrowWidth = width * progress;
  const labelOpacity = interpolate(progress, [0.3, 0.6], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ position: 'absolute', left, top }}>
      {/* 箭头线 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: arrowWidth,
          height: 4,
          backgroundColor: PALETTE[accent],
        }}
      />
      {/* 箭头标签 - 独立定位，不依赖父容器宽度 */}
      {label && (
        <div
          style={{
            position: 'absolute',
            left: width / 2,
            top: -30,
            transform: 'translateX(-50%)',
            opacity: labelOpacity,
            ...baseTextStyle,
            fontSize: 22,
            fontWeight: 700,
            color: PALETTE[accent],
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export const IconNode = ({
  icon: Icon,
  label,
  accent,
  detail,
  compact,
}: {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  label: string;
  accent: 'red' | 'teal' | 'blue' | 'gold';
  detail?: string;
  compact?: boolean;
}) => {
  const size = compact ? 56 : 72;
  const padding = compact ? '12px 16px' : '16px 24px';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding,
        backgroundColor: PALETTE.paper,
        border: `3px solid ${PALETTE[accent]}`,
        borderRadius: 8,
        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.08)`,
      }}
    >
      <Icon size={size} color={PALETTE[accent]} strokeWidth={2.2} />
      <div>
        <div style={{ ...baseTextStyle, fontSize: compact ? 26 : 32, fontWeight: 900, color: PALETTE[accent] }}>
          {label}
        </div>
        {detail && (
          <div style={{ ...baseTextStyle, fontSize: compact ? 18 : 20, fontWeight: 600, color: PALETTE.gray, marginTop: 4 }}>
            {detail}
          </div>
        )}
      </div>
    </div>
  );
};

export const FilmRail = ({
  frame,
  totalFrames,
}: {
  frame: number;
  totalFrames: number;
}) => {
  const progress = (frame / totalFrames) * 100;

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 6,
        backgroundColor: 'rgba(203, 210, 206, 0.3)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${progress}%`,
          backgroundColor: PALETTE.red,
        }}
      />
    </div>
  );
};
