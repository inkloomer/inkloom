import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  levee: '#E8DFC8',
  leveeDeep: '#D9CDAC',
  water: '#3E6470',
  waterDim: 'rgba(62,100,112,0.35)',
  ink: '#2A2A20',
  inkSoft: 'rgba(42,42,32,0.74)',
  sand: '#C9A96A',
  sandSoft: 'rgba(201,169,106,0.20)',
  wood: '#7A5A38',
  rescue: '#D9722F',
  rescueSoft: 'rgba(217,114,47,0.14)',
  warn: '#B0402C',
  warnSoft: 'rgba(176,64,44,0.10)',
  permit: '#3D6E4F',
  permitSoft: 'rgba(61,110,79,0.12)',
  white: '#FAF6E8',
  ghost: 'rgba(42,42,32,0.30)',
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

export const Chip = ({children, tone = 'white', style}: {children: ReactNode; tone?: 'white' | 'ink' | 'warn' | 'permit' | 'rescue' | 'wood'; style?: CSSProperties}) => {
  const bg = tone === 'white' ? C.white : C[tone];
  const color = tone === 'white' || tone === 'sand' || tone === 'rescue' ? C.ink : C.white;
  const border = tone === 'white' ? `2px solid ${C.ink}` : '2px solid rgba(42,42,32,0.25)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 6, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.rescue, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.sandSoft, padding: '4px 12px', borderRadius: 6, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.warn, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const Flag = ({children, delay = 0, tone = 'warn'}: {children: ReactNode; delay?: number; tone?: 'warn' | 'rescue' | 'permit'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'warn' ? C.warn : tone === 'rescue' ? C.rescue : C.permit;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap', backgroundColor: 'rgba(250,246,232,0.6)'}}>{children}</span>;
};

export const PatrolTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 30, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.levee, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(42,42,32,0.04) 0 2px, transparent 2px 88px), repeating-linear-gradient(0deg, rgba(42,42,32,0.04) 0 2px, transparent 2px 64px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.water}}>CRIMINAL LAW · CONDUCT & OMISSION / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.ink}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.water}}>
      <span>刑法 · 第05讲 客观要件一 行为</span>
      <span>LEVEE — FLOW — DUTY GATE</span>
    </div>
  </AbsoluteFill>
);
