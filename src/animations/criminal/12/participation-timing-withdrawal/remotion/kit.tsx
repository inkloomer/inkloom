import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  nightIndigo: '#31456E',
  nightIndigoSoft: 'rgba(49,69,110,0.10)',
  signalGreen: '#2F7D4F',
  signalGreenSoft: 'rgba(47,125,79,0.13)',
  ticketApricot: '#B07A2C',
  ticketApricotSoft: 'rgba(176,122,44,0.15)',
  alertRed: '#A8452F',
  alertRedSoft: 'rgba(168,69,47,0.10)',
  timetablePaper: '#EDF1F5',
  cardPaper: '#FAFCFE',
  panel: '#C9D2DE',
  ink: '#22262E',
  inkSoft: 'rgba(34,38,46,0.72)',
  ghost: 'rgba(34,38,46,0.28)',
} as const;

export const PLAYER_CONTROL_SAFE_BOTTOM = 168;

export const reveal = (frame: number, delay: number, span = 16) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({children, delay = 0, y = 22, style}: {children: ReactNode; delay?: number; y?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{opacity: p, translate: `0 ${(1 - p) * y}px`, ...style}}>{children}</div>;
};

export const Dash = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{scale: `${p} 1`, transformOrigin: 'left', ...style}}>{children}</div>;
};

export const TicketChip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'ink' | 'green' | 'indigo' | 'apricot' | 'alert'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.cardPaper : tone === 'green' ? C.signalGreen : tone === 'indigo' ? C.nightIndigo : tone === 'apricot' ? C.ticketApricot : tone === 'alert' ? C.alertRed : C.ink;
  const color = tone === 'paper' || tone === 'apricot' ? C.ink : C.cardPaper;
  const border = tone === 'paper' ? `2px solid ${C.nightIndigo}` : `2px solid ${C.ghost}`;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 6, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const StopLabel = ({children, color = C.nightIndigo, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, borderTop: `2px solid ${color}`, padding: '3px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const RouteHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.signalGreenSoft, padding: '4px 12px', borderRadius: 5, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.alertRed, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const Punch = ({children, delay = 0, tone = 'green', style}: {children: ReactNode; delay?: number; tone?: 'green' | 'alert' | 'indigo'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'green' ? C.signalGreen : tone === 'alert' ? C.alertRed : C.nightIndigo;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 14px', border: `4px solid ${color}`, borderRadius: 10, color, fontSize: 24, fontWeight: 950, rotate: '2deg', opacity: p, scale: 0.88 + p * 0.12, whiteSpace: 'nowrap', backgroundColor: 'rgba(250,252,254,0.74)', ...style}}>{children}</span>;
};

export const TrackArrow = ({delay, color}: {delay: number; color?: string}) => {
  const line = color ?? C.nightIndigo;
  return (
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0}}>
      <Dash delay={delay} style={{width: 20, height: 0, borderTop: `5px solid ${line}`}} />
      <span style={{width: 0, height: 0, borderLeft: `11px solid ${line}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
    </Enter>
  );
};

export const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -36, bottom: -54, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.timetablePaper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(49,69,110,0.055) 0 2px, transparent 2px 64px), repeating-linear-gradient(90deg, rgba(49,69,110,0.04) 0 2px, transparent 2px 110px)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 130, height: 6, backgroundColor: C.nightIndigo}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.signalGreen}}>CRIMINAL LAW · JOINT CRIME / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 66, fontSize: 44, fontWeight: 950}}>{title}</div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.nightIndigo}}>
      <span>刑法 · 第12讲 共同犯罪（八）参与时间与共犯脱离</span>
      <span>JOINT CRIME · GENERAL PART</span>
    </div>
  </AbsoluteFill>
);
