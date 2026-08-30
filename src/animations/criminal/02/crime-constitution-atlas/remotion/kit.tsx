import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  plate: '#EFE7D0',
  plateDeep: '#E3D6B5',
  ink: '#3B3226',
  inkSoft: 'rgba(59,50,38,0.75)',
  label: '#F8F1DD',
  arterial: '#A93B2A',
  arterialSoft: 'rgba(169,59,42,0.10)',
  venous: '#31567D',
  venousSoft: 'rgba(49,86,125,0.12)',
  brass: '#8C6A2F',
  brassSoft: 'rgba(140,106,47,0.18)',
  white: '#FAF5E4',
  ghost: 'rgba(59,50,38,0.30)',
  hatch: 'rgba(59,50,38,0.06)',
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

export const Chip = ({children, tone = 'label', style}: {children: ReactNode; tone?: 'label' | 'ink' | 'arterial' | 'venous' | 'brass'; style?: CSSProperties}) => {
  const bg = tone === 'label' ? C.label : C[tone];
  const color = tone === 'label' || tone === 'brass' ? C.ink : C.white;
  const border = tone === 'label' ? `2px solid ${C.ink}` : '2px solid rgba(59,50,38,0.3)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 4, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.brass, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px double ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.brassSoft, padding: '4px 12px', borderRadius: 4, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 2, backgroundColor: color, opacity: 0.85}} /><span style={{position: 'absolute', left: 0, right: 0, bottom: -7, height: 1, backgroundColor: color, opacity: 0.5}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.arterial, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const Seal = ({children, delay = 0, tone = 'arterial'}: {children: ReactNode; delay?: number; tone?: 'arterial' | 'brass' | 'venous'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'arterial' ? C.arterial : tone === 'brass' ? C.brass : C.venous;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap', backgroundColor: 'rgba(250,245,228,0.6)'}}>{children}</span>;
};

export const PlateTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 30, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.plate, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(59,50,38,0.045) 0 1px, transparent 1px 10px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.brass}}>CRIMINAL LAW · CONSTITUTION OF CRIME / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 136, height: 3, backgroundColor: C.ink}} />
    <div style={{position: 'absolute', left: 72, right: 72, top: 142, height: 1, backgroundColor: C.ink}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.brass}}>
      <span>刑法 · 第02讲 犯罪构成</span>
      <span>PLATE ATLAS · ACT · MENS REA</span>
    </div>
  </AbsoluteFill>
);
