import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  hall: '#EAF1F5',
  hallLine: 'rgba(43,76,140,0.10)',
  wash: 'rgba(43,76,140,0.06)',
  washLine: 'rgba(43,76,140,0.30)',
  paper: '#FCFEFF',
  ink: '#1F3448',
  cobalt: '#2B4C8C',
  cobaltDeep: '#17304F',
  celadon: '#4E8776',
  celadonSoft: 'rgba(78,135,118,0.16)',
  seal: '#A93F32',
  sealSoft: 'rgba(169,63,50,0.12)',
  gilt: '#A9852F',
  giltSoft: 'rgba(169,133,47,0.20)',
  mist: 'rgba(31,52,72,0.62)',
  shadow: 'rgba(23,48,79,0.16)',
  panel: 'rgba(255,255,255,0.60)',
  panelLine: 'rgba(43,76,140,0.26)',
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

export const Chip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'cobalt' | 'celadon' | 'seal' | 'gilt' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.paper : tone === 'panel' ? C.panel : tone === 'cobalt' ? C.cobalt : tone === 'celadon' ? C.celadon : tone === 'seal' ? C.seal : C.gilt;
  const color = tone === 'paper' || tone === 'panel' ? C.ink : '#FDFEFF';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.cobalt, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? '#F4F8FB' : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'gilt', style}: {children: ReactNode; tone?: 'gilt' | 'cobalt' | 'celadon' | 'seal'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'gilt' ? C.giltSoft : tone === 'cobalt' ? 'rgba(43,76,140,0.14)' : tone === 'celadon' ? C.celadonSoft : C.sealSoft, padding: '4px 12px', borderRadius: 8, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.cobalt}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 25}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? '#FFA494' : C.seal, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'seal'}: {children: ReactNode; delay?: number; tone?: 'seal' | 'celadon' | 'cobalt' | 'gilt'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'seal' ? C.seal : tone === 'celadon' ? C.celadon : tone === 'cobalt' ? C.cobalt : C.gilt;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, color: border, backgroundColor: 'rgba(255,255,255,0.72)', fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.hall, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(43,76,140,0.045) 0 3px, transparent 3px 190px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.cobalt}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.cobaltDeep}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.cobalt}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mist}}>
      <span>刑诉 · 真金题 专题一 刑事诉讼法概述</span>
      <span>BLUE-WHITE PORCELAIN HALL</span>
    </div>
  </AbsoluteFill>
);
