import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  ledger: '#ECEFEA',
  ink: '#263238',
  vermilion: '#C14B3C',
  vermilionSoft: 'rgba(193,75,60,0.13)',
  jade: '#3F7F6A',
  jadeSoft: 'rgba(63,127,106,0.14)',
  indigoInk: '#3A5A78',
  indigoSoft: 'rgba(58,90,120,0.13)',
  amber: '#B98D3A',
  amberSoft: 'rgba(185,141,58,0.17)',
  paper: '#F7F9F6',
  mist: 'rgba(38,50,56,0.62)',
  panel: 'rgba(255,255,255,0.55)',
  panelLine: 'rgba(38,50,56,0.25)',
  shadow: 'rgba(30,42,48,0.16)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'vermilion' | 'jade' | 'indigo' | 'amber'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? C.paper : tone === 'vermilion' ? C.vermilionSoft : tone === 'jade' ? C.jadeSoft : tone === 'indigo' ? C.indigoSoft : C.amberSoft;
  const color = tone === 'panel' || tone === 'paper' ? C.ink : tone === 'vermilion' ? C.vermilion : tone === 'jade' ? C.jade : tone === 'indigo' ? C.indigoInk : '#8A681F';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.vermilion, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'amber', style}: {children: ReactNode; tone?: 'amber' | 'jade' | 'vermilion' | 'indigo'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'amber' ? C.amberSoft : tone === 'jade' ? C.jadeSoft : tone === 'vermilion' ? C.vermilionSoft : C.indigoSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'amber' ? '#8A681F' : tone === 'jade' ? C.jade : tone === 'vermilion' ? C.vermilion : C.indigoInk, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.vermilion}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color: C.ink}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 25}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? '#F0A99B' : C.vermilion, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'jade'}: {children: ReactNode; delay?: number; tone?: 'jade' | 'vermilion' | 'amber' | 'indigo'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'jade' ? C.jade : tone === 'vermilion' ? C.vermilion : tone === 'amber' ? '#8A681F' : C.indigoInk;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, backgroundColor: 'rgba(255,255,255,0.7)', color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.ledger, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(38,50,56,0.05) 0 2px, transparent 2px 110px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.vermilion}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.vermilion}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mist}}>
      <span>刑诉 · 真金题 专题五 刑事证据与证明 · 下</span>
      <span>PALE VERMILION LEDGER DESK</span>
    </div>
  </AbsoluteFill>
);
