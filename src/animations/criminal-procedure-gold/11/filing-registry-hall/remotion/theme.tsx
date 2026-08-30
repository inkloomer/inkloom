import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  hall: '#173634',
  hallLine: 'rgba(237,239,230,0.15)',
  parchment: '#EDEFE6',
  parchmentDim: 'rgba(237,239,230,0.64)',
  registry: '#D0685A',
  registrySoft: 'rgba(208,104,90,0.17)',
  gold: '#D9B45C',
  goldSoft: 'rgba(217,180,92,0.17)',
  sky: '#7FB6C9',
  skySoft: 'rgba(127,182,201,0.15)',
  mint: '#8FC9A8',
  mintSoft: 'rgba(143,201,168,0.15)',
  panel: 'rgba(237,239,230,0.06)',
  panelLine: 'rgba(237,239,230,0.28)',
  shadow: 'rgba(4,14,13,0.5)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'registry' | 'gold' | 'sky' | 'mint'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? 'rgba(237,239,230,0.85)' : tone === 'registry' ? C.registrySoft : tone === 'gold' ? C.goldSoft : tone === 'sky' ? C.skySoft : C.mintSoft;
  const color = tone === 'panel' ? C.parchment : tone === 'paper' ? C.hall : tone === 'registry' ? C.registry : tone === 'gold' ? C.gold : tone === 'sky' ? C.sky : C.mint;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.gold, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.parchment : C.hall, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'gold', style}: {children: ReactNode; tone?: 'gold' | 'mint' | 'registry' | 'sky'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'gold' ? C.goldSoft : tone === 'mint' ? C.mintSoft : tone === 'registry' ? C.registrySoft : C.skySoft, padding: '4px 12px', borderRadius: 8, color: tone === 'gold' ? C.gold : tone === 'mint' ? C.mint : tone === 'registry' ? C.registry : C.sky, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.parchment}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.registry, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'mint'}: {children: ReactNode; delay?: number; tone?: 'mint' | 'registry' | 'gold' | 'sky'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'mint' ? C.mint : tone === 'registry' ? C.registry : tone === 'gold' ? C.gold : C.sky;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.hall, color: C.parchment, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(237,239,230,0.035) 0 2px, transparent 2px 120px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.gold}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.parchment}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.gold}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.parchmentDim}}>
      <span>刑诉 · 真金题 专题一 立案</span>
      <span>DARK-TEAL REGISTRY HALL</span>
    </div>
  </AbsoluteFill>
);
