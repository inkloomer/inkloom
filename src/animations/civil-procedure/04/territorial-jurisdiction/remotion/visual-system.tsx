import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {PALETTE, accentColor, accentSoftColor, type Accent} from './storyboard';

export const baseTextStyle: CSSProperties = {
  color: PALETTE.ink,
  fontFamily: '"Microsoft YaHei", "Noto Sans SC", sans-serif',
  letterSpacing: 0,
};

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
  <div style={{position: 'absolute', left: 116, top: 92, display: 'flex', alignItems: 'baseline', gap: 20}}>
    <span style={{...baseTextStyle, color: accentColor(accent), fontSize: 24, fontWeight: 900, letterSpacing: 1}}>{index}</span>
    <div>
      <div style={{...baseTextStyle, color: PALETTE.muted, fontSize: 18, fontWeight: 800, letterSpacing: 2}}>{eyebrow}</div>
      <div style={{...baseTextStyle, marginTop: 7, fontSize: 45, fontWeight: 900, lineHeight: 1.1}}>{title}</div>
    </div>
  </div>
);

export const Keyword = ({children, accent}: {readonly children: ReactNode; readonly accent: Accent}) => (
  <span style={{color: accentColor(accent), fontWeight: 950}}>{children}</span>
);

export const NodeCard = ({
  icon: Icon,
  label,
  detail,
  accent,
  compact = false,
  style,
}: {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly detail?: string;
  readonly accent: Accent;
  readonly compact?: boolean;
  readonly style?: CSSProperties;
}) => (
  <div
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      gap: compact ? 12 : 16,
      boxSizing: 'border-box',
      minWidth: compact ? 210 : 264,
      minHeight: compact ? 76 : 104,
      padding: compact ? '12px 16px' : '16px 20px',
      border: `2px solid ${accentColor(accent)}`,
      borderRadius: 10,
      backgroundColor: accentSoftColor(accent),
      boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
    }}
  >
    <Icon size={compact ? 30 : 40} color={accentColor(accent)} strokeWidth={2.1} />
    <div style={{...baseTextStyle, minWidth: 0}}>
      <div style={{fontSize: compact ? 23 : 28, fontWeight: 900, lineHeight: 1.15}}>{label}</div>
      {detail ? <div style={{marginTop: 6, color: PALETTE.muted, fontSize: compact ? 16 : 18, fontWeight: 700}}>{detail}</div> : null}
    </div>
  </div>
);

export const RouteLine = ({
  left,
  top,
  width,
  progress,
  accent,
  label,
}: {
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly progress: number;
  readonly accent: Accent;
  readonly label?: string;
}) => (
  <div style={{position: 'absolute', left, top, width, height: 4}}>
    <div style={{position: 'absolute', inset: 0, borderRadius: 999, backgroundColor: PALETTE.line}} />
    <div style={{position: 'absolute', left: 0, top: 0, width: `${Math.max(0, Math.min(1, progress)) * 100}%`, height: 4, borderRadius: 999, backgroundColor: accentColor(accent)}} />
    <div
      style={{
        position: 'absolute',
        left: `${Math.max(0, Math.min(1, progress)) * 100}%`,
        top: -7,
        width: 18,
        height: 18,
        borderRadius: '50%',
        backgroundColor: accentColor(accent),
        boxShadow: `0 0 0 6px ${accentSoftColor(accent)}`,
        transform: 'translateX(-50%)',
      }}
    />
    {label ? <div style={{...baseTextStyle, position: 'absolute', left: 0, top: -38, color: PALETTE.muted, fontSize: 17, fontWeight: 800}}>{label}</div> : null}
  </div>
);

export const RuleChip = ({children, accent}: {readonly children: ReactNode; readonly accent: Accent}) => (
  <div style={{...baseTextStyle, display: 'inline-flex', alignItems: 'center', padding: '9px 16px', borderRadius: 999, color: accentColor(accent), backgroundColor: accentSoftColor(accent), fontSize: 19, fontWeight: 900}}>
    {children}
  </div>
);

export const TimelineRail = ({frame, totalFrames}: {readonly frame: number; readonly totalFrames: number}) => {
  const progress = Math.max(0, Math.min(1, frame / Math.max(totalFrames, 1)));
  return (
    <div style={{position: 'absolute', left: 116, right: 116, bottom: 30, height: 3, backgroundColor: PALETTE.line}}>
      <div style={{width: `${progress * 100}%`, height: 3, backgroundColor: PALETTE.red}} />
      <div style={{position: 'absolute', left: `${progress * 100}%`, top: -5, width: 13, height: 13, borderRadius: '50%', backgroundColor: PALETTE.red, transform: 'translateX(-50%)'}} />
    </div>
  );
};
