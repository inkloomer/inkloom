import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  gate: '#232A3F',
  gateLine: 'rgba(226,232,240,0.16)',
  ivory: '#EEF1F6',
  ivoryDim: 'rgba(238,241,246,0.66)',
  seizure: '#D46A57',
  seizureSoft: 'rgba(212,106,87,0.18)',
  clearance: '#6FA97E',
  clearanceSoft: 'rgba(111,169,126,0.16)',
  brass: '#C9A45C',
  brassSoft: 'rgba(201,164,92,0.18)',
  slate: '#8FA3C4',
  slateSoft: 'rgba(143,163,196,0.16)',
  panel: 'rgba(238,241,246,0.06)',
  panelLine: 'rgba(238,241,246,0.28)',
  shadow: 'rgba(6,10,18,0.5)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'ivory' | 'seizure' | 'clearance' | 'brass' | 'slate'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'ivory' ? 'rgba(238,241,246,0.85)' : tone === 'seizure' ? C.seizureSoft : tone === 'clearance' ? C.clearanceSoft : tone === 'brass' ? C.brassSoft : C.slateSoft;
  const color = tone === 'panel' ? C.ivory : tone === 'ivory' ? '#232A3F' : tone === 'seizure' ? C.seizure : tone === 'clearance' ? C.clearance : tone === 'brass' ? C.brass : C.slate;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.brass, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.ivory : C.gate, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'brass', style}: {children: ReactNode; tone?: 'brass' | 'clearance' | 'seizure' | 'slate'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'brass' ? C.brassSoft : tone === 'clearance' ? C.clearanceSoft : tone === 'seizure' ? C.seizureSoft : C.slateSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'brass' ? C.brass : tone === 'clearance' ? C.clearance : tone === 'seizure' ? C.seizure : C.slate, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ivory}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.seizure, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'clearance'}: {children: ReactNode; delay?: number; tone?: 'clearance' | 'seizure' | 'brass' | 'slate'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'clearance' ? C.clearance : tone === 'seizure' ? C.seizure : tone === 'brass' ? C.brass : C.slate;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.gate, color: C.ivory, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(238,241,246,0.03) 0 14px, transparent 14px 44px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.brass}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ivory}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.brass}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.ivoryDim}}>
      <span>刑诉 · 真金题 专题五 刑事证据与证明 · 中</span>
      <span>INDIGO CUSTOMS INSPECTION GATE</span>
    </div>
  </AbsoluteFill>
);
