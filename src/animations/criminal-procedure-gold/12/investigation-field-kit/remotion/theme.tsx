import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  cart: '#262B23',
  cartLine: 'rgba(238,240,228,0.15)',
  parchment: '#EEF0E4',
  parchmentDim: 'rgba(238,240,228,0.62)',
  brass: '#C8A258',
  brassSoft: 'rgba(200,162,88,0.17)',
  tag: '#CE6A52',
  tagSoft: 'rgba(206,106,82,0.17)',
  steel: '#9FB6C4',
  steelSoft: 'rgba(159,182,196,0.15)',
  moss: '#93B877',
  mossSoft: 'rgba(147,184,119,0.16)',
  panel: 'rgba(238,240,228,0.06)',
  panelLine: 'rgba(238,240,228,0.28)',
  shadow: 'rgba(8,10,6,0.5)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'brass' | 'tag' | 'steel' | 'moss'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? 'rgba(238,240,228,0.85)' : tone === 'brass' ? C.brassSoft : tone === 'tag' ? C.tagSoft : tone === 'steel' ? C.steelSoft : C.mossSoft;
  const color = tone === 'panel' ? C.parchment : tone === 'paper' ? C.cart : tone === 'brass' ? C.brass : tone === 'tag' ? C.tag : tone === 'steel' ? C.steel : C.moss;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.brass, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.parchment : C.cart, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'brass', style}: {children: ReactNode; tone?: 'brass' | 'moss' | 'tag' | 'steel'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'brass' ? C.brassSoft : tone === 'moss' ? C.mossSoft : tone === 'tag' ? C.tagSoft : C.steelSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'brass' ? C.brass : tone === 'moss' ? C.moss : tone === 'tag' ? C.tag : C.steel, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.parchment}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.tag, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'moss'}: {children: ReactNode; delay?: number; tone?: 'moss' | 'tag' | 'brass' | 'steel'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'moss' ? C.moss : tone === 'tag' ? C.tag : tone === 'brass' ? C.brass : C.steel;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.cart, color: C.parchment, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(238,240,228,0.03) 0 10px, transparent 10px 34px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.brass}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.parchment}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.brass}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.parchmentDim}}>
      <span>刑诉 · 真金题 专题二 侦查</span>
      <span>讯问 · 鉴定 · 辨认 · 技术侦查 · 核准追诉</span>
    </div>
  </AbsoluteFill>
);
