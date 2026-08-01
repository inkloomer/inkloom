import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {ChevronRight} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {PALETTE, toSourceFrame} from './storyboard';

export const DISPLAY_FONT = '"Songti SC", "Noto Serif SC", SimSun, serif';
export const BODY_FONT = '"Microsoft YaHei", "PingFang SC", sans-serif';
export const {Enter, MaskedReveal, StaggerEnter} = createMotionPrimitives(toSourceFrame);

export const BinderyCanvas = ({children}: {readonly children: ReactNode}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      color: PALETTE.ink,
      fontFamily: BODY_FONT,
      backgroundColor: PALETTE.canvas,
      backgroundImage:
        'linear-gradient(rgba(23,24,19,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,24,19,.035) 1px, transparent 1px)',
      backgroundSize: '48px 48px, 48px 48px',
    }}
  >
    <div style={{position: 'absolute', inset: '32px 34px 106px', border: `1px solid ${PALETTE.rule}`}} />
    <div style={{position: 'absolute', left: 72, top: 32, bottom: 106, width: 2, background: PALETTE.thread}} />
    <div style={{position: 'absolute', left: 82, top: 32, bottom: 106, width: 1, background: PALETTE.rule}} />
    {children}
  </div>
);

export const SceneHeader = ({
  index,
  kicker,
  title,
}: {
  readonly index: string;
  readonly kicker: string;
  readonly title: ReactNode;
}) => (
  <header style={{position: 'absolute', left: 118, right: 88, top: 70, display: 'flex', alignItems: 'flex-start'}}>
    <div style={{width: 84, fontSize: 20, fontWeight: 800, color: PALETTE.thread, letterSpacing: 0}}>{index}</div>
    <div>
      <div style={{fontSize: 18, fontWeight: 800, color: PALETTE.muted, letterSpacing: 0}}>{kicker}</div>
      <div style={{fontFamily: DISPLAY_FONT, fontSize: 54, lineHeight: 1.12, fontWeight: 800, marginTop: 8}}>{title}</div>
    </div>
  </header>
);

export const SoftHighlight = ({children, color = PALETTE.mustardSoft}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{padding: '0 8px 3px', background: `linear-gradient(transparent 44%, ${color} 44%)`}}>{children}</span>
);

export const ThinUnderline = ({children, color = PALETTE.cobalt}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', paddingBottom: 4, borderBottom: `3px solid ${color}`}}>{children}</span>
);

export const LabelBlock = ({children, color = PALETTE.ink}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', padding: '7px 12px', color: PALETTE.paper, background: color, fontSize: 22, lineHeight: 1, fontWeight: 800}}>{children}</span>
);

export const Stamp = ({children, color = PALETTE.thread}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 86, padding: '7px 10px', border: `2px solid ${color}`, color, fontSize: 22, fontWeight: 900, rotate: '-2deg'}}>{children}</span>
);

export const PaperSlip = ({
  accent = PALETTE.cobalt,
  children,
  style,
}: {
  readonly accent?: string;
  readonly children: ReactNode;
  readonly style?: CSSProperties;
}) => (
  <div
    style={{
      position: 'relative',
      background: PALETTE.paper,
      border: `1px solid ${PALETTE.rule}`,
      boxShadow: '7px 8px 0 rgba(23,24,19,.08)',
      padding: '24px 28px',
      ...style,
    }}
  >
    <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, background: accent}} />
    {children}
  </div>
);

export const IconLabel = ({
  color = PALETTE.cobalt,
  icon: Icon,
  label,
  note,
  style,
}: {
  readonly color?: string;
  readonly icon: LucideIcon;
  readonly label: string;
  readonly note?: string;
  readonly style?: CSSProperties;
}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 16, ...style}}>
    <div style={{width: 64, height: 64, display: 'grid', placeItems: 'center', background: color, color: PALETTE.paper}}>
      <Icon size={36} strokeWidth={2.2} />
    </div>
    <div>
      <div style={{fontSize: 30, lineHeight: 1.15, fontWeight: 900}}>{label}</div>
      {note ? <div style={{fontSize: 22, lineHeight: 1.3, color: PALETTE.muted, marginTop: 5}}>{note}</div> : null}
    </div>
  </div>
);

export const ThreadConnector = ({
  color = PALETTE.thread,
  delay = 40,
  label,
  left,
  top,
  width,
}: {
  readonly color?: string;
  readonly delay?: number;
  readonly label?: string;
  readonly left: number;
  readonly top: number;
  readonly width: number;
}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [delay, delay + 46], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', left, top, width, height: 66}}>
      {label ? <div style={{position: 'absolute', top: -31, left: 6, color, fontSize: 20, fontWeight: 800, opacity: progress}}>{label}</div> : null}
      <div style={{position: 'absolute', top: 28, left: 0, width, height: 3, background: color, scale: `${progress} 1`, transformOrigin: 'left center'}} />
      <ChevronRight size={34} strokeWidth={2.2} style={{position: 'absolute', right: -11, top: 12, color, opacity: progress}} />
    </div>
  );
};

export const StitchSpine = ({
  color = PALETTE.thread,
  height,
  left,
  top,
}: {
  readonly color?: string;
  readonly height: number;
  readonly left: number;
  readonly top: number;
}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [58, 112], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', left, top, width: 38, height}}>
      <div style={{position: 'absolute', left: 17, top: 0, width: 4, height, background: color, scale: `1 ${progress}`, transformOrigin: 'center top'}} />
      {[22, 88, 154, 220, 286, 352].filter((value) => value < height).map((value) => (
        <div key={value} style={{position: 'absolute', left: 3, top: value, width: 32, height: 2, background: color, opacity: progress}} />
      ))}
    </div>
  );
};
