import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#20232A',
  iron: '#3A3F49',
  ironLine: '#4E5461',
  ember: '#E06A2B',
  emberSoft: 'rgba(224,106,43,0.26)',
  brass: '#C9A24B',
  chalk: '#F2EFE6',
  chalkDim: 'rgba(242,239,230,0.62)',
  paper: '#F1E9D6',
  paperDim: '#DCD2BA',
  ink: '#221E17',
  chain: '#8E939E',
  seal: '#B03A2E',
  jade: '#4E7C5B',
  jadeSoft: 'rgba(78,124,91,0.26)',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(8,8,10,0.5)',
  panel: 'rgba(242,239,230,0.07)',
  panelLine: 'rgba(242,239,230,0.30)',
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

export const Chip = ({children, tone = 'chalk', style}: {children: ReactNode; tone?: 'chalk' | 'seal' | 'jade' | 'brass' | 'ink' | 'panel' | 'ember'; style?: CSSProperties}) => {
  const bg = tone === 'chalk' ? C.chalk : tone === 'panel' ? C.panel : C[tone as 'seal' | 'jade' | 'brass' | 'ink' | 'ember'];
  const color = tone === 'chalk' ? C.ink : C.chalk;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.ember, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.chalk : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.emberSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.chalk : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'ember'}: {children: ReactNode; delay?: number; tone?: 'ember' | 'jade' | 'brass' | 'chalk' | 'seal'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'ember' ? C.ember : tone === 'jade' ? C.jade : tone === 'brass' ? C.brass : tone === 'seal' ? C.seal : C.chalk;
  const bg = tone === 'chalk' ? C.chalk : 'transparent';
  const color = tone === 'chalk' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const GhostNumeral = ({n}: {n: string}) => <span style={{fontSize: 40, fontWeight: 950, color: C.emberSoft, width: 40, lineHeight: 1, textAlign: 'center'}}>{n}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.chalk, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(242,239,230,0.04) 0 2px, transparent 2px 170px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.ember}}>COMMERCIAL LAW · PIERCING THE VEIL / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.chalk}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.ember}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.chalkDim}}>
      <span>商经知 · 真金题 考点2 法人人格否认</span>
      <span>HAMMER — PIERCE — LINK</span>
    </div>
  </AbsoluteFill>
);
