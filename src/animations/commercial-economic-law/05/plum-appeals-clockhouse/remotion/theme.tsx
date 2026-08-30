import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#2B2136',
  plum: '#3A2D4A',
  plumLine: '#52406B',
  blush: '#F5EDE3',
  blushDim: 'rgba(245,237,227,0.62)',
  ink: '#201827',
  rose: '#D4677E',
  roseSoft: 'rgba(212,103,126,0.22)',
  sage: '#8FAF7E',
  sageSoft: 'rgba(143,175,126,0.20)',
  rust: '#C25A3A',
  rustDark: '#9E3F24',
  rustLight: '#FFA98C',
  sand: '#D8AE62',
  shadow: 'rgba(10,6,16,0.55)',
  panel: 'rgba(245,237,227,0.06)',
  panelLine: 'rgba(245,237,227,0.28)',
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

export const Chip = ({children, tone = 'blush', style}: {children: ReactNode; tone?: 'blush' | 'plum' | 'rose' | 'sage' | 'rust' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'blush' ? C.blush : tone === 'panel' ? C.panel : C[tone as 'plum' | 'rose' | 'sage' | 'rust' | 'ink'];
  const color = tone === 'sage' || tone === 'rust' || tone === 'ink' ? C.blush : C.ink;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.sand, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.blush : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.roseSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.blush : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, dark = false, size = 26}: {children: ReactNode; dark?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: dark ? C.rustDark : C.rustLight, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'sand'}: {children: ReactNode; delay?: number; tone?: 'sand' | 'sage' | 'rust' | 'blush'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'sand' ? C.sand : tone === 'sage' ? C.sage : tone === 'rust' ? C.rust : C.blush;
  const bg = tone === 'blush' ? C.blush : 'transparent';
  const color = tone === 'blush' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.blush, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(245,237,227,0.035) 0 2px, transparent 2px 180px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.sand}}>COMMERCIAL LAW · PLUM APPEALS CLOCKHOUSE / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.blush}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.sand}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.blushDim}}>
      <span>商经知 · 真金题 考点4 破产债权</span>
      <span>DECLARE — SUE — SUBROGATE</span>
    </div>
  </AbsoluteFill>
);
