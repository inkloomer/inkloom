import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#F1EEE6',
  ink: '#24291F',
  inkLine: 'rgba(36,41,31,0.30)',
  dai: '#2C5A66',
  daiSoft: 'rgba(44,90,102,0.14)',
  seal: '#B23A2E',
  sealSoft: 'rgba(178,58,46,0.12)',
  jade: '#5E7C4E',
  jadeSoft: 'rgba(94,124,78,0.20)',
  gold: '#C9963F',
  goldSoft: 'rgba(201,150,63,0.26)',
  paper: '#FAF8F1',
  paperDim: '#DFDACB',
  danger: '#8C2F1F',
  shadow: 'rgba(36,41,31,0.28)',
  panel: 'rgba(36,41,31,0.05)',
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

export const Chip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'dai' | 'seal' | 'jade' | 'gold' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.paper : tone === 'panel' ? C.panel : C[tone as 'dai' | 'seal' | 'jade' | 'gold' | 'ink'];
  const color = tone === 'paper' || tone === 'panel' ? C.ink : C.paper;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.dai, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = false, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: dark ? C.goldSoft : C.daiSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.paper : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 26}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.danger, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'dai'}: {children: ReactNode; delay?: number; tone?: 'dai' | 'jade' | 'seal' | 'ink'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'dai' ? C.dai : tone === 'jade' ? C.jade : tone === 'seal' ? C.seal : C.ink;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, color: border, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(36,41,31,0.045) 0 3px, transparent 3px 190px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.dai}}>COMMERCIAL LAW · CONTRIBUTION AUDIT / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.ink}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.ink, opacity: 0.62}}>
      <span>商经知 · 真金题 考点8 股东出资及出资瑕疵的法律责任</span>
      <span>Snap THE LINE — STAMP THE VERDICT</span>
    </div>
  </AbsoluteFill>
);
