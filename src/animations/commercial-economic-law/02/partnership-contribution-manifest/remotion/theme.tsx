import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#2A1F1D',
  wood: '#3E2A26',
  woodLine: '#573B34',
  manifest: '#F5ECD8',
  manifestDim: 'rgba(245,236,216,0.62)',
  ink: '#241811',
  banner: '#D8A24B',
  bannerSoft: 'rgba(216,162,75,0.24)',
  seal: '#B23A2E',
  sealSoft: 'rgba(178,58,46,0.24)',
  jade: '#4E7C5B',
  steel: '#9AA5B0',
  danger: '#8C2F1F',
  negLight: '#FFB4A0',
  shadow: 'rgba(10,5,3,0.5)',
  panel: 'rgba(245,236,216,0.07)',
  panelLine: 'rgba(245,236,216,0.30)',
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

export const Chip = ({children, tone = 'manifest', style}: {children: ReactNode; tone?: 'manifest' | 'banner' | 'wood' | 'seal' | 'jade' | 'ink' | 'panel' | 'steel'; style?: CSSProperties}) => {
  const bg = tone === 'manifest' ? C.manifest : tone === 'panel' ? C.panel : C[tone as 'banner' | 'wood' | 'seal' | 'jade' | 'ink' | 'steel'];
  const color = tone === 'manifest' || tone === 'panel' || tone === 'banner' || tone === 'steel' ? C.ink : C.manifest;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.banner, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.manifest : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.bannerSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.manifest : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'banner'}: {children: ReactNode; delay?: number; tone?: 'banner' | 'jade' | 'seal' | 'manifest'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'banner' ? C.banner : tone === 'jade' ? C.jade : tone === 'seal' ? C.seal : C.manifest;
  const bg = tone === 'manifest' ? C.manifest : 'transparent';
  const color = tone === 'manifest' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.manifest, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(245,236,216,0.035) 0 2px, transparent 2px 178px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.banner}}>COMMERCIAL LAW · CONTRIBUTION MANIFEST / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.manifest}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.banner}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.manifestDim}}>
      <span>商经知 · 真金题 考点2 合伙企业的出资</span>
      <span>ANY GIFT ON THE LIST — DEBTS STAY OUTSIDE</span>
    </div>
  </AbsoluteFill>
);
