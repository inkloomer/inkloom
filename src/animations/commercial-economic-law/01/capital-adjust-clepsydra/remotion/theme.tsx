import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#20262E',
  bronze: '#33403A',
  bronzeLine: '#49584F',
  patina: '#6E8F7B',
  patinaSoft: 'rgba(110,143,123,0.28)',
  water: '#4E8FA8',
  waterSoft: 'rgba(78,143,168,0.26)',
  arrow: '#F0E8D2',
  arrowDim: 'rgba(240,232,210,0.62)',
  ink: '#171E1B',
  vermilion: '#C24A34',
  vermilionSoft: 'rgba(194,74,52,0.26)',
  jade: '#4E9A6A',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(6,10,9,0.5)',
  panel: 'rgba(240,232,210,0.07)',
  panelLine: 'rgba(240,232,210,0.30)',
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

export const Chip = ({children, tone = 'arrow', style}: {children: ReactNode; tone?: 'arrow' | 'patina' | 'bronze' | 'vermilion' | 'jade' | 'ink' | 'panel' | 'water'; style?: CSSProperties}) => {
  const bg = tone === 'arrow' ? C.arrow : tone === 'panel' ? C.panel : C[tone as 'patina' | 'bronze' | 'vermilion' | 'jade' | 'ink' | 'water'];
  const color = tone === 'arrow' || tone === 'panel' || tone === 'water' ? C.ink : C.arrow;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.patina, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.arrow : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: dark ? C.patinaSoft : C.waterSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.arrow : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'patina'}: {children: ReactNode; delay?: number; tone?: 'patina' | 'jade' | 'vermilion' | 'arrow'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'patina' ? C.patina : tone === 'jade' ? C.jade : tone === 'vermilion' ? C.vermilion : C.arrow;
  const bg = tone === 'arrow' ? C.arrow : 'transparent';
  const color = tone === 'arrow' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.arrow, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(240,232,210,0.035) 0 2px, transparent 2px 178px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.patina}}>COMMERCIAL LAW · CAPITAL WATER CLOCK / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.arrow}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.patina}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.arrowDim}}>
      <span>商经知 · 真金题 考点12 公司的增资、减资</span>
      <span>POUR — MARK — ANNOUNCE</span>
    </div>
  </AbsoluteFill>
);
