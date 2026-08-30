import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#EEF0F5',
  indigo: '#3B4A8C',
  indigoSoft: 'rgba(59,74,140,0.13)',
  ink: '#20263E',
  inkLine: 'rgba(32,38,62,0.28)',
  paper: '#FAFBFE',
  paperDim: '#D8DDEA',
  gold: '#A9812E',
  goldSoft: 'rgba(169,129,46,0.20)',
  seal: '#B23A2E',
  sealSoft: 'rgba(178,58,46,0.13)',
  jade: '#3F7D5E',
  jadeSoft: 'rgba(63,125,94,0.16)',
  slate: '#5E6B8C',
  danger: '#8C2F1F',
  shadow: 'rgba(32,38,62,0.24)',
  panel: 'rgba(32,38,62,0.05)',
  panelLine: 'rgba(32,38,62,0.28)',
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

export const Chip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'indigo' | 'ink' | 'seal' | 'gold' | 'jade' | 'panel' | 'slate'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.paper : tone === 'panel' ? C.panel : C[tone as 'indigo' | 'ink' | 'seal' | 'gold' | 'jade' | 'slate'];
  const color = tone === 'paper' || tone === 'panel' || tone === 'gold' || tone === 'jade' ? C.ink : C.paper;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.indigo, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = false, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: dark ? C.goldSoft : C.indigoSoft, padding: '4px 12px', borderRadius: 8, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'indigo'}: {children: ReactNode; delay?: number; tone?: 'indigo' | 'jade' | 'seal' | 'gold' | 'paper'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'indigo' ? C.indigo : tone === 'jade' ? C.jade : tone === 'seal' ? C.seal : tone === 'gold' ? C.gold : C.ink;
  const bg = tone === 'paper' ? C.paper : 'transparent';
  const color = tone === 'paper' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(32,38,62,0.04) 0 3px, transparent 3px 190px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.indigo}}>COMMERCIAL LAW · LP LOUNGE / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.indigo}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.ink, opacity: 0.62}}>
      <span>商经知 · 真金题 考点7 有限合伙企业及有限合伙人</span>
      <span>SILENT MONEY — LOUD RIGHTS</span>
    </div>
  </AbsoluteFill>
);
