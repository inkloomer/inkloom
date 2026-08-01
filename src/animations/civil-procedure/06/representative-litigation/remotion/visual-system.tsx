import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {ChevronRight} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {PALETTE, toSourceFrame} from './storyboard';

export const DISPLAY_FONT = '"Arial Narrow", "Microsoft YaHei", sans-serif';
export const BODY_FONT = '"Microsoft YaHei", "PingFang SC", sans-serif';
export const MONO_FONT = 'Consolas, "Microsoft YaHei", monospace';
export const {Enter, MaskedReveal, StaggerEnter} = createMotionPrimitives(toSourceFrame);

export const ConsoleCanvas = ({children}: {readonly children: ReactNode}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      color: PALETTE.ink,
      fontFamily: BODY_FONT,
      backgroundColor: PALETTE.panel,
      backgroundImage: 'radial-gradient(rgba(20,25,20,.12) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
    }}
  >
    <div style={{position: 'absolute', inset: '36px 42px 108px', background: 'rgba(252,255,248,.86)', border: `2px solid ${PALETTE.ink}`}} />
    <div style={{position: 'absolute', left: 42, right: 42, top: 166, height: 10, background: PALETTE.ink}} />
    {children}
  </div>
);

export const ConsoleHeader = ({
  index,
  title,
  topic,
}: {
  readonly index: string;
  readonly title: ReactNode;
  readonly topic: string;
}) => (
  <header style={{position: 'absolute', left: 82, right: 82, top: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', alignItems: 'baseline', gap: 24}}>
      <span style={{fontFamily: MONO_FONT, fontSize: 22, fontWeight: 900, color: PALETTE.signal}}>CH {index}</span>
      <div style={{fontFamily: DISPLAY_FONT, fontSize: 50, lineHeight: 1.08, fontWeight: 900}}>{title}</div>
    </div>
    <div style={{fontFamily: MONO_FONT, fontSize: 18, fontWeight: 800, padding: '9px 12px', border: `2px solid ${PALETTE.ink}`, background: PALETTE.surface}}>{topic}</div>
  </header>
);

export const SignalHighlight = ({children, color = PALETTE.signalSoft}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', padding: '1px 9px 4px', background: color}}>
    <span style={{position: 'absolute', left: -4, top: -4, width: 11, height: 11, borderLeft: `2px solid ${PALETTE.ink}`, borderTop: `2px solid ${PALETTE.ink}`}} />
    {children}
  </span>
);

export const FrequencyUnderline = ({children, color = PALETTE.magenta}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', paddingBottom: 5, borderBottom: `3px dashed ${color}`}}>{children}</span>
);

export const Callsign = ({children, color = PALETTE.ink}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', padding: '7px 11px', background: color, color: PALETTE.surface, fontFamily: MONO_FONT, fontSize: 21, fontWeight: 900}}>{children}</span>
);

export const ConsentSeal = ({children, color = PALETTE.magenta}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-grid', placeItems: 'center', padding: '8px 12px', color, border: `3px double ${color}`, fontSize: 22, fontWeight: 900}}>{children}</span>
);

export const Module = ({
  accent = PALETTE.signal,
  children,
  style,
}: {
  readonly accent?: string;
  readonly children: ReactNode;
  readonly style?: CSSProperties;
}) => (
  <div style={{position: 'relative', background: PALETTE.surface, border: `2px solid ${PALETTE.ink}`, padding: '22px 24px', boxShadow: `9px 9px 0 ${accent}`, ...style}}>
    <div style={{position: 'absolute', left: 12, top: 10, width: 10, height: 10, background: accent, borderRadius: '50%'}} />
    {children}
  </div>
);

export const IconPort = ({
  color = PALETTE.signal,
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
  <div style={{display: 'flex', alignItems: 'center', gap: 15, ...style}}>
    <div style={{width: 66, height: 66, display: 'grid', placeItems: 'center', borderRadius: '50%', color: PALETTE.surface, background: color, border: `3px solid ${PALETTE.ink}`}}>
      <Icon size={36} strokeWidth={2.2} />
    </div>
    <div>
      <div style={{fontSize: 29, lineHeight: 1.15, fontWeight: 900}}>{label}</div>
      {note ? <div style={{fontSize: 22, lineHeight: 1.25, color: PALETTE.muted, marginTop: 4}}>{note}</div> : null}
    </div>
  </div>
);

export const SignalCable = ({
  color = PALETTE.signal,
  delay = 30,
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
  const progress = interpolate(frame, [delay, delay + 54], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', left, top, width, height: 72}}>
      {label ? <div style={{position: 'absolute', top: -30, left: 0, fontFamily: MONO_FONT, fontSize: 19, fontWeight: 900, color, opacity: progress}}>{label}</div> : null}
      <div style={{position: 'absolute', top: 30, left: 0, width, height: 5, background: color, scale: `${progress} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', top: 22, left: Math.max(0, width * progress - 9), width: 18, height: 18, borderRadius: '50%', background: PALETTE.surface, border: `4px solid ${color}`}} />
      <ChevronRight size={38} strokeWidth={2.5} style={{position: 'absolute', right: -12, top: 12, color, opacity: progress}} />
    </div>
  );
};

export const TickRail = ({left, top, width}: {readonly left: number; readonly top: number; readonly width: number}) => (
  <div style={{position: 'absolute', left, top, width, height: 28, borderTop: `3px solid ${PALETTE.ink}`}}>
    {Array.from({length: 11}, (_, index) => (
      <div key={index} style={{position: 'absolute', left: `${index * 10}%`, top: -3, width: 2, height: index % 5 === 0 ? 22 : 12, background: PALETTE.ink}} />
    ))}
  </div>
);
