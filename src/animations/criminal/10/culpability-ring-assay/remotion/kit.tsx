import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  bark: '#46382B',
  barkDeep: '#31271C',
  heartwood: '#8A5B2E',
  heartwoodDeep: '#6B421F',
  sapwood: '#F2E6C9',
  ringLine: 'rgba(70,56,43,0.30)',
  wax: '#E4B95B',
  waxSoft: 'rgba(228,185,91,0.22)',
  vermilion: '#B5432E',
  vermilionSoft: 'rgba(181,67,46,0.10)',
  pine: '#3F6F4E',
  pineSoft: 'rgba(63,111,78,0.12)',
  steel: '#54718A',
  steelSoft: 'rgba(84,113,138,0.12)',
  white: '#FBF6E8',
  ink: '#2C2115',
  inkSoft: 'rgba(44,33,21,0.74)',
  ghost: 'rgba(44,33,21,0.30)',
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

export const Chip = ({children, tone = 'white', style}: {children: ReactNode; tone?: 'white' | 'ink' | 'wax' | 'vermilion' | 'pine' | 'steel'; style?: CSSProperties}) => {
  const bg = tone === 'white' ? C.white : C[tone];
  const color = tone === 'white' || tone === 'wax' ? C.ink : C.white;
  const border = tone === 'white' ? `2px solid ${C.bark}` : '2px solid rgba(44,33,21,0.25)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 4, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.heartwood, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.waxSoft, padding: '4px 12px', borderRadius: 4, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Seal = ({children, delay = 0, tone = 'vermilion', style}: {children: ReactNode; delay?: number; tone?: 'vermilion' | 'pine'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'vermilion' ? C.vermilion : C.pine;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 14px', border: `4px solid ${color}`, borderRadius: 6, color, fontSize: 24, fontWeight: 950, rotate: '-3deg', opacity: p, scale: 0.88 + p * 0.12, whiteSpace: 'nowrap', backgroundColor: 'rgba(251,246,232,0.7)', ...style}}>{children}</span>;
};

export const RingTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 30, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const RingDisc = ({size = 34, tone = 'heartwood'}: {size?: number; tone?: 'heartwood' | 'pine' | 'steel' | 'vermilion'}) => {
  const color = C[tone];
  return (
    <span style={{position: 'relative', display: 'inline-block', width: size, height: size, flexShrink: 0}}>
      <span style={{position: 'absolute', inset: 0, border: `3px solid ${color}`, borderRadius: '50%', opacity: 0.45}} />
      <span style={{position: 'absolute', inset: size * 0.2, border: `3px solid ${color}`, borderRadius: '50%', opacity: 0.7}} />
      <span style={{position: 'absolute', inset: size * 0.4, backgroundColor: color, borderRadius: '50%'}} />
    </span>
  );
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.sapwood, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-radial-gradient(circle at 92% -12%, transparent 0 96px, rgba(70,56,43,0.05) 96px 100px), repeating-linear-gradient(0deg, rgba(70,56,43,0.04) 0 2px, transparent 2px 64px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.bark}}>CRIMINAL LAW · CULPABILITY RING ASSAY / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.bark}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.bark}}>
      <span>刑法 · 第10讲 排除犯罪事由Ⅱ：排除责任事由</span>
      <span>COUNT RINGS — ASSAY WOOD — SEAL VERDICT</span>
    </div>
  </AbsoluteFill>
);
