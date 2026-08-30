import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  paper: '#F1E8D2',
  paperDeep: '#E6DABC',
  frame: '#6B4A2F',
  frameDark: '#4A3421',
  bead: '#332A22',
  beadBrass: '#B08D3E',
  vermilion: '#B5432E',
  vermilionSoft: 'rgba(181,67,46,0.10)',
  indigo: '#2F5A78',
  indigoSoft: 'rgba(47,90,120,0.12)',
  brass: '#97702B',
  brassSoft: 'rgba(151,112,43,0.16)',
  ink: '#2B241A',
  inkSoft: 'rgba(43,36,26,0.74)',
  label: '#F9F2DF',
  white: '#FBF5E3',
  ghost: 'rgba(43,36,26,0.30)',
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

export const Chip = ({children, tone = 'label', style}: {children: ReactNode; tone?: 'label' | 'ink' | 'vermilion' | 'indigo' | 'brass'; style?: CSSProperties}) => {
  const bg = tone === 'label' ? C.label : C[tone];
  const color = tone === 'label' || tone === 'brass' ? C.ink : C.white;
  const border = tone === 'label' ? `2px solid ${C.ink}` : '2px solid rgba(43,36,26,0.28)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 999, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.brass, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.brassSoft, padding: '4px 12px', borderRadius: 999, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.vermilion, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const Seal = ({children, delay = 0, tone = 'brass'}: {children: ReactNode; delay?: number; tone?: 'brass' | 'vermilion' | 'indigo'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'brass' ? C.brass : tone === 'vermilion' ? C.vermilion : C.indigo;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap', backgroundColor: 'rgba(251,245,227,0.6)'}}>{children}</span>;
};

export const CounterTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 30, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(107,74,47,0.05) 0 2px, transparent 2px 64px), repeating-linear-gradient(90deg, rgba(107,74,47,0.05) 0 2px, transparent 2px 96px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.frame}}>CRIMINAL LAW · LEGAL INTEREST / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.frameDark}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.frame}}>
      <span>刑法 · 第03讲 犯罪客体</span>
      <span>TWIN BEAM — COUNTER — CHARTER</span>
    </div>
  </AbsoluteFill>
);
