import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  chestnut: '#3A241C',
  chestnutLine: 'rgba(243,233,220,0.16)',
  parchment: '#F3E9DC',
  parchmentDim: 'rgba(243,233,220,0.64)',
  stamp: '#D2604F',
  stampSoft: 'rgba(210,96,79,0.18)',
  jade: '#7FB08A',
  jadeSoft: 'rgba(127,176,138,0.16)',
  copper: '#D9A05B',
  copperSoft: 'rgba(217,160,91,0.18)',
  paper: '#F8F1E6',
  panel: 'rgba(243,233,220,0.06)',
  panelLine: 'rgba(243,233,220,0.28)',
  shadow: 'rgba(20,10,6,0.5)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'stamp' | 'jade' | 'copper'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? C.paper : tone === 'stamp' ? C.stampSoft : tone === 'jade' ? C.jadeSoft : C.copperSoft;
  const color = tone === 'panel' ? C.parchment : tone === 'paper' ? C.chestnut : tone === 'stamp' ? C.stamp : tone === 'jade' ? C.jade : C.copper;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.copper, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.parchment : C.chestnut, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'copper', style}: {children: ReactNode; tone?: 'copper' | 'jade' | 'stamp'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'copper' ? C.copperSoft : tone === 'jade' ? C.jadeSoft : C.stampSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'copper' ? C.copper : tone === 'jade' ? C.jade : C.stamp, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.parchment}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.stamp, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'jade'}: {children: ReactNode; delay?: number; tone?: 'jade' | 'stamp' | 'copper' | 'paper'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'jade' ? C.jade : tone === 'stamp' ? C.stamp : tone === 'copper' ? C.copper : C.paper;
  const color = tone === 'paper' ? C.chestnut : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${border}`, backgroundColor: tone === 'paper' ? C.paper : 'transparent', color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.chestnut, color: C.parchment, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(243,233,220,0.04) 0 2px, transparent 2px 160px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.copper}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.parchment}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.copper}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.parchmentDim}}>
      <span>刑诉 · 真金题 专题八 期间、送达</span>
      <span>CHESTNUT RELAY STATION</span>
    </div>
  </AbsoluteFill>
);
