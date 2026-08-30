import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#EFEBE6',
  marble: '#E2DCD3',
  paper: '#FFFFFF',
  ink: '#26221C',
  inkDim: 'rgba(38,34,28,0.6)',
  inkStrip: '#26221C',
  bronze: '#8C6A3F',
  bronzeSoft: 'rgba(140,106,63,0.16)',
  slate: '#4A6B8A',
  slateSoft: 'rgba(74,107,138,0.14)',
  oxblood: '#7E2F28',
  oxbloodDark: '#6E241D',
  oxbloodLight: '#FFA48C',
  moss: '#3F7A52',
  gold: '#B8912E',
  shadow: 'rgba(40,35,25,0.22)',
  panel: 'rgba(255,255,255,0.65)',
  panelLine: 'rgba(38,34,28,0.24)',
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

export const Chip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'marble' | 'bronze' | 'slate' | 'oxblood' | 'moss' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.paper : tone === 'panel' ? C.panel : C[tone as 'marble' | 'bronze' | 'slate' | 'oxblood' | 'moss' | 'ink'];
  const color = tone === 'bronze' || tone === 'slate' || tone === 'oxblood' || tone === 'moss' || tone === 'ink' ? C.paper : C.ink;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.bronze, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.paper : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, light = false, style}: {children: ReactNode; light?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.bronzeSoft, padding: '4px 12px', borderRadius: 8, color: light ? C.paper : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 26}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? C.oxbloodLight : C.oxbloodDark, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'bronze'}: {children: ReactNode; delay?: number; tone?: 'bronze' | 'slate' | 'oxblood' | 'paper'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'bronze' ? C.bronze : tone === 'slate' ? C.slate : tone === 'oxblood' ? C.oxblood : C.gold;
  const bg = tone === 'paper' ? C.paper : 'transparent';
  const color = tone === 'paper' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Watermark = ({children}: {children: ReactNode}) => (
  <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {children: ReactNode; icon: ReactNode; tone: string; title: string}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.16)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(38,34,28,0.04) 0 2px, transparent 2px 180px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.bronze}}>COMMERCIAL LAW · MARBLE LISTING GATE / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ink}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.bronze}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.inkDim}}>
      <span>商经知 · 真金题 考点2 证券上市</span>
      <span>2025金题-2-6-22</span>
    </div>
  </AbsoluteFill>
);
