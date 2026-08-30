import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  wall: '#F2EDE3',
  ink: '#33261B',
  angelica: '#A8442F',
  angelicaSoft: 'rgba(168,68,47,0.13)',
  tangerine: '#C07A2C',
  tangerineSoft: 'rgba(192,122,44,0.16)',
  mint: '#4E8A6A',
  mintSoft: 'rgba(78,138,106,0.15)',
  licorice: '#B9973B',
  licoriceSoft: 'rgba(185,151,59,0.18)',
  paper: '#FBF8F0',
  mist: 'rgba(51,38,27,0.62)',
  panel: 'rgba(255,255,255,0.55)',
  panelLine: 'rgba(51,38,27,0.25)',
  shadow: 'rgba(40,28,18,0.18)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'angelica' | 'tangerine' | 'mint' | 'licorice'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? C.paper : tone === 'angelica' ? C.angelicaSoft : tone === 'tangerine' ? C.tangerineSoft : tone === 'mint' ? C.mintSoft : C.licoriceSoft;
  const color = tone === 'panel' || tone === 'paper' ? C.ink : tone === 'angelica' ? C.angelica : tone === 'tangerine' ? '#96591A' : tone === 'mint' ? C.mint : '#8A6E22';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.angelica, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'licorice', style}: {children: ReactNode; tone?: 'licorice' | 'mint' | 'angelica' | 'tangerine'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'licorice' ? C.licoriceSoft : tone === 'mint' ? C.mintSoft : tone === 'angelica' ? C.angelicaSoft : C.tangerineSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'licorice' ? '#8A6E22' : tone === 'mint' ? C.mint : tone === 'angelica' ? C.angelica : '#96591A', fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.angelica}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color: C.ink}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 25}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? '#EBA48F' : C.angelica, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'mint'}: {children: ReactNode; delay?: number; tone?: 'mint' | 'angelica' | 'licorice' | 'tangerine'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'mint' ? C.mint : tone === 'angelica' ? C.angelica : tone === 'licorice' ? '#8A6E22' : '#96591A';
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, backgroundColor: 'rgba(255,255,255,0.7)', color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.wall, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(51,38,27,0.045) 0 2px, transparent 2px 130px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.angelica}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.angelica}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mist}}>
      <span>刑诉 · 真金题 专题五 刑事证据与证明 · 上</span>
      <span>HERBAL APOTHECARY CABINET</span>
    </div>
  </AbsoluteFill>
);
