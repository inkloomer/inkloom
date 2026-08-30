import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  chart: '#F1EAD6',
  chartLine: 'rgba(31,58,74,0.13)',
  navy: '#274B63',
  navyDeep: '#183246',
  coral: '#C05A47',
  coralSoft: 'rgba(192,90,71,0.15)',
  teal: '#3F7F74',
  tealSoft: 'rgba(63,127,116,0.16)',
  sand: '#C9A457',
  sandSoft: 'rgba(201,164,87,0.22)',
  ink: '#22323E',
  mist: 'rgba(34,50,62,0.62)',
  panel: 'rgba(255,255,255,0.55)',
  panelLine: 'rgba(39,75,99,0.30)',
  shadow: 'rgba(24,50,70,0.18)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'coral' | 'teal' | 'sand' | 'navy'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? '#FBF7EC' : tone === 'coral' ? C.coralSoft : tone === 'teal' ? C.tealSoft : tone === 'sand' ? C.sandSoft : C.navy;
  const color = tone === 'panel' || tone === 'paper' ? C.ink : tone === 'coral' ? C.coral : tone === 'teal' ? C.teal : tone === 'sand' ? '#8F7020' : '#F3F7FA';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.navy, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? '#F3F7FA' : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'sand', style}: {children: ReactNode; tone?: 'sand' | 'teal' | 'coral' | 'navy'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'sand' ? C.sandSoft : tone === 'teal' ? C.tealSoft : tone === 'coral' ? C.coralSoft : 'rgba(39,75,99,0.14)', padding: '4px 12px', borderRadius: 8, color: tone === 'sand' ? '#8F7020' : tone === 'teal' ? C.teal : tone === 'coral' ? C.coral : C.navy, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.navy}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 25}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? '#F0A996' : C.coral, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'teal'}: {children: ReactNode; delay?: number; tone?: 'teal' | 'coral' | 'sand' | 'navy'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'teal' ? C.teal : tone === 'coral' ? C.coral : tone === 'sand' ? '#A9862F' : C.navy;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, backgroundColor: 'rgba(255,255,255,0.65)', color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.chart, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(31,58,74,0.05) 0 2px, transparent 2px 120px), repeating-linear-gradient(90deg, rgba(31,58,74,0.05) 0 2px, transparent 2px 120px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.navy}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.navyDeep}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.navy}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mist}}>
      <span>刑诉 · 真金题 专题二 管辖</span>
      <span>VINTAGE SEA-CHART DISPATCH</span>
    </div>
  </AbsoluteFill>
);
