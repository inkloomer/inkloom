import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  board: '#26231F',
  boardFrame: 'rgba(239,232,216,0.14)',
  chalk: '#EFE8D8',
  chalkDim: 'rgba(239,232,216,0.68)',
  sanguine: '#D07B5A',
  sanguineSoft: 'rgba(208,123,90,0.16)',
  sage: '#A9BE8E',
  sageSoft: 'rgba(169,190,142,0.15)',
  sky: '#8FB4C9',
  skySoft: 'rgba(143,180,201,0.15)',
  butter: '#D8B95E',
  butterSoft: 'rgba(216,185,94,0.18)',
  panel: 'rgba(239,232,216,0.07)',
  panelLine: 'rgba(239,232,216,0.30)',
  shadow: 'rgba(10,8,5,0.45)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'sage' | 'sanguine' | 'sky' | 'butter'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'sage' ? C.sageSoft : tone === 'sanguine' ? C.sanguineSoft : tone === 'sky' ? C.skySoft : C.butterSoft;
  const color = tone === 'panel' ? C.chalk : tone === 'sage' ? C.sage : tone === 'sanguine' ? C.sanguine : tone === 'sky' ? C.sky : C.butter;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.butter, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.chalk : C.board, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'butter', style}: {children: ReactNode; tone?: 'butter' | 'sky' | 'sage' | 'sanguine'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'butter' ? C.butterSoft : tone === 'sky' ? C.skySoft : tone === 'sage' ? C.sageSoft : C.sanguineSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'butter' ? C.butter : tone === 'sky' ? C.sky : tone === 'sage' ? C.sage : C.sanguine, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.chalk}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.sanguine, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'sage'}: {children: ReactNode; delay?: number; tone?: 'sage' | 'sanguine' | 'sky' | 'butter'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'sage' ? C.sage : tone === 'sanguine' ? C.sanguine : tone === 'sky' ? C.sky : C.butter;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.board, color: C.chalk, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 22% 18%, rgba(239,232,216,0.05) 0%, transparent 42%), radial-gradient(ellipse at 78% 82%, rgba(239,232,216,0.04) 0%, transparent 46%)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.butter}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.chalk}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.butter}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.chalkDim}}>
      <span>刑诉 · 真金题 专题二 刑事诉讼法的基本原则</span>
      <span>CHALKBOARD LECTURE HALL</span>
    </div>
  </AbsoluteFill>
);
