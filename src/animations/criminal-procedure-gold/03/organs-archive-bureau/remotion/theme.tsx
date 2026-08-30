import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  bureau: '#1E2F27',
  bureauLine: 'rgba(244,238,221,0.16)',
  manila: '#EFE6CE',
  ink: '#2A2418',
  cream: '#F4EEDD',
  creamDim: 'rgba(244,238,221,0.66)',
  oxblood: '#C96A55',
  oxbloodSoft: 'rgba(156,66,52,0.20)',
  brass: '#C4A25E',
  brassSoft: 'rgba(196,162,94,0.18)',
  steel: '#8FB4CC',
  steelSoft: 'rgba(110,147,172,0.18)',
  moss: '#9DBE93',
  mossSoft: 'rgba(127,163,122,0.18)',
  panel: 'rgba(244,238,221,0.06)',
  panelLine: 'rgba(244,238,221,0.28)',
  shadow: 'rgba(8,14,10,0.5)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'manila' | 'oxblood' | 'brass' | 'steel' | 'moss'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'manila' ? C.manila : tone === 'oxblood' ? C.oxbloodSoft : tone === 'brass' ? C.brassSoft : tone === 'steel' ? C.steelSoft : C.mossSoft;
  const color = tone === 'panel' ? C.cream : tone === 'manila' ? C.ink : tone === 'oxblood' ? C.oxblood : tone === 'brass' ? C.brass : tone === 'steel' ? C.steel : C.moss;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.brass, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.cream : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'brass', style}: {children: ReactNode; tone?: 'brass' | 'steel' | 'moss' | 'oxblood'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'brass' ? C.brassSoft : tone === 'steel' ? C.steelSoft : tone === 'moss' ? C.mossSoft : C.oxbloodSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'brass' ? C.brass : tone === 'steel' ? C.steel : tone === 'moss' ? C.moss : C.oxblood, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.cream}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.oxblood, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'moss'}: {children: ReactNode; delay?: number; tone?: 'moss' | 'oxblood' | 'steel' | 'brass'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'moss' ? C.moss : tone === 'oxblood' ? C.oxblood : tone === 'steel' ? C.steel : C.brass;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.bureau, color: C.cream, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(244,238,221,0.035) 0 2px, transparent 2px 150px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.brass}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.cream}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.brass}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.creamDim}}>
      <span>刑诉 · 真金题 专题一 专门机关和诉讼参与人</span>
      <span>DARK-GREEN ARCHIVE BUREAU</span>
    </div>
  </AbsoluteFill>
);
