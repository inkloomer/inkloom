import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  stage: '#2B2130',
  stageLine: 'rgba(242,234,216,0.16)',
  plaque: '#E8C97A',
  plaqueDeep: '#B99548',
  ivory: '#F2EAD8',
  ivoryDim: 'rgba(242,234,216,0.66)',
  rouge: '#D97E6E',
  rougeSoft: 'rgba(217,126,110,0.16)',
  moon: '#9FC4CE',
  moonSoft: 'rgba(159,196,206,0.16)',
  willow: '#A8BD8A',
  willowSoft: 'rgba(168,189,138,0.16)',
  panel: 'rgba(242,234,216,0.06)',
  panelLine: 'rgba(242,234,216,0.28)',
  shadow: 'rgba(12,8,14,0.5)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'plaque' | 'rouge' | 'moon' | 'willow'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'plaque' ? C.plaque : tone === 'rouge' ? C.rougeSoft : tone === 'moon' ? C.moonSoft : C.willowSoft;
  const color = tone === 'panel' ? C.ivory : tone === 'plaque' ? '#3A2C10' : tone === 'rouge' ? C.rouge : tone === 'moon' ? C.moon : C.willow;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.plaque, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.ivory : '#3A2C10', fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'plaque', style}: {children: ReactNode; tone?: 'plaque' | 'moon' | 'willow' | 'rouge'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'plaque' ? 'rgba(232,201,122,0.20)' : tone === 'moon' ? C.moonSoft : tone === 'willow' ? C.willowSoft : C.rougeSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'plaque' ? C.plaque : tone === 'moon' ? C.moon : tone === 'willow' ? C.willow : C.rouge, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ivory}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.rouge, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'moon'}: {children: ReactNode; delay?: number; tone?: 'moon' | 'rouge' | 'willow' | 'plaque'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'moon' ? C.moon : tone === 'rouge' ? C.rouge : tone === 'willow' ? C.willow : C.plaque;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.stage, color: C.ivory, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(232,201,122,0.07) 0%, transparent 55%)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.plaque}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ivory}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.plaque}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.ivoryDim}}>
      <span>刑诉 · 真金题 专题三 回避</span>
      <span>GILDED BACKSTAGE SWAP</span>
    </div>
  </AbsoluteFill>
);
