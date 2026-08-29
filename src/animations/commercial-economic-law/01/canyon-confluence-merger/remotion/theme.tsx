import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#262E2C',
  rock: '#33403C',
  rockLine: '#46564F',
  river: '#3E8E7E',
  riverSoft: 'rgba(62,142,126,0.30)',
  survey: '#D9B36C',
  surveySoft: 'rgba(217,179,108,0.26)',
  buoy: '#C0522F',
  buoySoft: 'rgba(192,82,47,0.28)',
  ivory: '#F1EBDC',
  ivoryDim: 'rgba(241,235,220,0.62)',
  ink: '#1D2422',
  jade: '#4E9A6A',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(8,12,11,0.5)',
  panel: 'rgba(241,235,220,0.07)',
  panelLine: 'rgba(241,235,220,0.30)',
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

export const Chip = ({children, tone = 'ivory', style}: {children: ReactNode; tone?: 'ivory' | 'river' | 'rock' | 'buoy' | 'jade' | 'ink' | 'panel' | 'survey'; style?: CSSProperties}) => {
  const bg = tone === 'ivory' ? C.ivory : tone === 'panel' ? C.panel : C[tone as 'river' | 'rock' | 'buoy' | 'jade' | 'ink' | 'survey'];
  const color = tone === 'ivory' || tone === 'panel' ? C.ink : tone === 'survey' ? C.ink : C.ivory;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.river, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.ivory : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: dark ? C.riverSoft : C.surveySoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.ivory : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'river'}: {children: ReactNode; delay?: number; tone?: 'river' | 'jade' | 'buoy' | 'ivory'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'river' ? C.river : tone === 'jade' ? C.jade : tone === 'buoy' ? C.buoy : C.ivory;
  const bg = tone === 'ivory' ? C.ivory : 'transparent';
  const color = tone === 'ivory' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.ivory, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(241,235,220,0.035) 0 2px, transparent 2px 182px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.survey}}>COMMERCIAL LAW · CONFLUENCE SURVEY / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ivory}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.survey}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.ivoryDim}}>
      <span>商经知 · 真金题 考点10 公司合并、分立</span>
      <span>TWO RIVERS — ONE BED</span>
    </div>
  </AbsoluteFill>
);
