import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  yard: '#EFEDE8',
  ink: '#33383B',
  teal: '#3D6B6B',
  tealSoft: 'rgba(61,107,107,0.13)',
  coral: '#B4574C',
  coralSoft: 'rgba(180,87,76,0.13)',
  sand: '#C7A96B',
  sandSoft: 'rgba(199,169,107,0.18)',
  olive: '#7A8450',
  oliveSoft: 'rgba(122,132,80,0.15)',
  paper: '#FAF9F5',
  mist: 'rgba(51,56,59,0.62)',
  panel: 'rgba(255,255,255,0.55)',
  panelLine: 'rgba(51,56,59,0.25)',
  shadow: 'rgba(35,40,43,0.16)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'paper' | 'teal' | 'coral' | 'sand' | 'olive'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'paper' ? C.paper : tone === 'teal' ? C.tealSoft : tone === 'coral' ? C.coralSoft : tone === 'sand' ? C.sandSoft : C.oliveSoft;
  const color = tone === 'panel' || tone === 'paper' ? C.ink : tone === 'teal' ? C.teal : tone === 'coral' ? C.coral : tone === 'sand' ? '#8F7434' : C.olive;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.teal, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'sand', style}: {children: ReactNode; tone?: 'sand' | 'teal' | 'coral' | 'olive'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'sand' ? C.sandSoft : tone === 'teal' ? C.tealSoft : tone === 'coral' ? C.coralSoft : C.oliveSoft, padding: '4px 12px', borderRadius: 8, color: tone === 'sand' ? '#8F7434' : tone === 'teal' ? C.teal : tone === 'coral' ? C.coral : C.olive, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.teal}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color: C.ink}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 25}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? '#EBA99E' : C.coral, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'olive'}: {children: ReactNode; delay?: number; tone?: 'olive' | 'coral' | 'sand' | 'teal'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'olive' ? C.olive : tone === 'coral' ? C.coral : tone === 'sand' ? '#8F7434' : C.teal;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${color}`, backgroundColor: 'rgba(255,255,255,0.7)', color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.yard, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(51,56,59,0.04) 0 2px, transparent 2px 46px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.teal}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.teal}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mist}}>
      <span>刑诉 · 真金题 专题七 附带民事诉讼</span>
      <span>GREY-BRICK COURTYARD TWIN HALL</span>
    </div>
  </AbsoluteFill>
);
