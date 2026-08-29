import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#31241A',
  wood: '#4A382A',
  woodLine: '#634C38',
  paper: '#F3E8D2',
  paperDim: '#E0D2B6',
  ink: '#241A10',
  seal: '#B23A27',
  brass: '#C89B4B',
  brassSoft: 'rgba(200,155,75,0.30)',
  rice: '#F7F1E3',
  riceDim: 'rgba(247,241,227,0.66)',
  jade: '#4E7C5B',
  jadeSoft: 'rgba(78,124,91,0.26)',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(18,10,4,0.42)',
  panel: 'rgba(247,241,227,0.07)',
  panelLine: 'rgba(247,241,227,0.30)',
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

export const Chip = ({children, tone = 'rice', style}: {children: ReactNode; tone?: 'rice' | 'seal' | 'jade' | 'brass' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'rice' ? C.rice : tone === 'panel' ? C.panel : C[tone as 'seal' | 'jade' | 'brass' | 'ink'];
  const color = tone === 'rice' ? C.ink : tone === 'panel' ? C.rice : C.rice;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.brass, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.rice : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = false, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: dark ? C.brassSoft : C.brassSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.rice : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, dark = false, size = 26}: {children: ReactNode; dark?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: dark ? C.danger : C.negLight, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'seal'}: {children: ReactNode; delay?: number; tone?: 'seal' | 'jade' | 'brass' | 'rice'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'seal' ? C.seal : tone === 'jade' ? C.jade : tone === 'brass' ? C.brass : C.rice;
  const bg = tone === 'rice' ? C.rice : 'transparent';
  const color = tone === 'rice' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const GhostNumeral = ({n}: {n: string}) => <span style={{fontSize: 40, fontWeight: 950, color: C.brassSoft, width: 40, lineHeight: 1, textAlign: 'center'}}>{n}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.rice, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(247,241,227,0.045) 0 3px, transparent 3px 190px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.brass}}>COMMERCIAL LAW · BRANCH STATUS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.rice}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.brass}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.riceDim}}>
      <span>商经知 · 真金题 考点1 公司的分类</span>
      <span>ONE VAULT — DRAW IN ORDER</span>
    </div>
  </AbsoluteFill>
);
