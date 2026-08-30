import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#232820',
  moss: '#33402E',
  mossLine: '#4A5A40',
  stone: '#E8E4D4',
  stoneDim: 'rgba(232,228,212,0.62)',
  ink: '#1B2018',
  granite: '#8A8F82',
  graniteSoft: 'rgba(138,143,130,0.30)',
  banner: '#D8A24B',
  bannerSoft: 'rgba(216,162,75,0.24)',
  seal: '#B23A2E',
  sealSoft: 'rgba(178,58,46,0.24)',
  sky: '#8FB6C9',
  skySoft: 'rgba(143,182,201,0.20)',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(6,8,4,0.5)',
  panel: 'rgba(232,228,212,0.07)',
  panelLine: 'rgba(232,228,212,0.30)',
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

export const Chip = ({children, tone = 'stone', style}: {children: ReactNode; tone?: 'stone' | 'moss' | 'banner' | 'seal' | 'sky' | 'ink' | 'panel' | 'granite'; style?: CSSProperties}) => {
  const bg = tone === 'stone' ? C.stone : tone === 'panel' ? C.panel : C[tone as 'moss' | 'banner' | 'seal' | 'sky' | 'ink' | 'granite'];
  const color = tone === 'stone' || tone === 'panel' || tone === 'banner' || tone === 'sky' || tone === 'granite' ? C.ink : C.stone;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.banner, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.stone : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.bannerSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.stone : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'banner'}: {children: ReactNode; delay?: number; tone?: 'banner' | 'jade' | 'seal' | 'stone'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'banner' ? C.banner : tone === 'jade' ? C.sky : tone === 'seal' ? C.seal : C.stone;
  const bg = tone === 'stone' ? C.stone : 'transparent';
  const color = tone === 'stone' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.stone, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(232,228,212,0.035) 0 2px, transparent 2px 182px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.banner}}>COMMERCIAL LAW · BOUNDARY STONE GATE / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.stone}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.banner}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.stoneDim}}>
      <span>商经知 · 真金题 考点6 入伙、退伙</span>
      <span>RAISE THE STONE — PULL THE STONE</span>
    </div>
  </AbsoluteFill>
);
