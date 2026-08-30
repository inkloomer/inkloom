import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#F2E9E3',
  shell: '#E7D8D0',
  shellLine: '#D5BFB4',
  paper: '#FFFBF7',
  ink: '#33252E',
  cocoa: '#6E5560',
  cocoaDim: 'rgba(110,85,96,0.66)',
  moss: '#4E7A50',
  mossSoft: 'rgba(78,122,80,0.16)',
  terra: '#B45535',
  terraDark: '#8F3F24',
  terraLight: '#F2A486',
  berry: '#8E4A6E',
  berrySoft: 'rgba(142,74,110,0.16)',
  gold: '#B98A2E',
  shadow: 'rgba(51,37,46,0.26)',
  panel: 'rgba(255,251,248,0.75)',
  panelLine: 'rgba(51,37,46,0.28)',
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

export const Chip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'shell' | 'moss' | 'terra' | 'berry' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.paper : tone === 'panel' ? C.panel : C[tone as 'shell' | 'moss' | 'terra' | 'berry' | 'ink'];
  const color = tone === 'moss' || tone === 'terra' || tone === 'berry' || tone === 'ink' ? C.paper : C.ink;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.berry, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, light = false, style}: {children: ReactNode; light?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.berrySoft, padding: '4px 12px', borderRadius: 8, color: light ? C.paper : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 26}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? C.terraLight : C.terraDark, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'berry'}: {children: ReactNode; delay?: number; tone?: 'berry' | 'moss' | 'terra' | 'paper'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'berry' ? C.berry : tone === 'moss' ? C.moss : tone === 'terra' ? C.terra : C.gold;
  const bg = tone === 'paper' ? C.paper : 'transparent';
  const color = tone === 'paper' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(51,37,46,0.04) 0 2px, transparent 2px 180px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.berry}}>COMMERCIAL LAW · QUARTZ SPROUT GREENHOUSE / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.berry}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.cocoaDim}}>
      <span>商经知 · 真金题 考点5 重整</span>
      <span>REVIVE — VOTE — CONVERT</span>
    </div>
  </AbsoluteFill>
);
