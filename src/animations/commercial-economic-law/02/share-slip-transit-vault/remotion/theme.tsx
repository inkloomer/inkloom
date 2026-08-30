import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#1C2624',
  jade: '#2E4A42',
  jadeLine: '#3E5F54',
  slab: '#DFF2EA',
  slabDim: 'rgba(223,242,234,0.62)',
  ink: '#12211C',
  gold: '#D9B36C',
  goldSoft: 'rgba(217,179,108,0.24)',
  seal: '#C24A34',
  sealSoft: 'rgba(194,74,52,0.24)',
  sky: '#7FB6D9',
  skySoft: 'rgba(127,182,217,0.22)',
  jade2: '#4E9A6A',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(5,10,8,0.5)',
  panel: 'rgba(223,242,234,0.07)',
  panelLine: 'rgba(223,242,234,0.30)',
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

export const Chip = ({children, tone = 'slab', style}: {children: ReactNode; tone?: 'slab' | 'jade' | 'gold' | 'seal' | 'sky' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'slab' ? C.slab : tone === 'panel' ? C.panel : C[tone as 'jade' | 'gold' | 'seal' | 'sky' | 'ink'];
  const color = tone === 'slab' || tone === 'panel' || tone === 'gold' || tone === 'sky' ? C.ink : C.slab;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.gold, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.slab : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.goldSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.slab : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'gold'}: {children: ReactNode; delay?: number; tone?: 'gold' | 'jade2' | 'seal' | 'slab'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'gold' ? C.gold : tone === 'jade2' ? C.jade2 : tone === 'seal' ? C.seal : C.slab;
  const bg = tone === 'slab' ? C.slab : 'transparent';
  const color = tone === 'slab' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.slab, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(223,242,234,0.035) 0 2px, transparent 2px 180px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.gold}}>COMMERCIAL LAW · SHARE SLIP TRANSIT / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.slab}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.gold}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.slabDim}}>
      <span>商经知 · 真金题 考点5 合伙份额流转</span>
      <span>THREE TRACKS — WHO HOLDS THE SLIP</span>
    </div>
  </AbsoluteFill>
);
