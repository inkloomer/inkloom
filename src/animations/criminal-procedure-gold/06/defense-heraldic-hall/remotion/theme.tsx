import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  hall: '#F3EFE2',
  grain: 'rgba(124,47,62,0.10)',
  ink: '#3A2B2E',
  burgundy: '#7C2F3E',
  burgundySoft: 'rgba(124,47,62,0.13)',
  forest: '#3E6B4F',
  forestSoft: 'rgba(62,107,79,0.14)',
  ochre: '#B58A2E',
  ochreSoft: 'rgba(181,138,46,0.18)',
  steel2: '#4A6D8C',
  steel2Soft: 'rgba(74,109,140,0.14)',
  paper: '#FBF9F1',
  mist: 'rgba(58,43,46,0.62)',
  panel: 'rgba(255,255,255,0.55)',
  panelLine: 'rgba(124,47,62,0.26)',
  shadow: 'rgba(58,32,38,0.16)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'burgundy' | 'forest' | 'ochre' | 'steel'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? C.paper : tone === 'burgundy' ? C.burgundySoft : tone === 'forest' ? C.forestSoft : tone === 'ochre' ? C.ochreSoft : C.steel2Soft;
  const color = tone === 'panel' || tone === 'paper' ? C.ink : tone === 'burgundy' ? C.burgundy : tone === 'forest' ? C.forest : tone === 'ochre' ? '#8A681A' : C.steel2;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.burgundy, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'ochre', style}: {children: ReactNode; tone?: 'ochre' | 'forest' | 'burgundy' | 'steel'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'ochre' ? C.ochreSoft : tone === 'forest' ? C.forestSoft : tone === 'burgundy' ? C.burgundySoft : C.steel2Soft, padding: '4px 12px', borderRadius: 8, color: tone === 'ochre' ? '#8A681A' : tone === 'forest' ? C.forest : tone === 'burgundy' ? C.burgundy : C.steel2, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.burgundy}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color: C.ink}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 25}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? '#E8A99B' : C.burgundy, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'forest'}: {children: ReactNode; delay?: number; tone?: 'forest' | 'burgundy' | 'ochre' | 'steel'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'forest' ? C.forest : tone === 'burgundy' ? C.burgundy : tone === 'ochre' ? '#8A681A' : C.steel2;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, backgroundColor: 'rgba(255,255,255,0.7)', color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.hall, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg, rgba(124,47,62,0.04) 0 3px, transparent 3px 170px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.burgundy}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.burgundy}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mist}}>
      <span>刑诉 · 真金题 专题四 辩护与代理</span>
      <span>PALE-WHEAT HERALDIC HALL</span>
    </div>
  </AbsoluteFill>
);
