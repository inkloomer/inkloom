import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#262A44',
  vault: '#323757',
  vaultLine: '#474D75',
  scroll: '#F0EDE2',
  scrollDim: 'rgba(240,237,226,0.62)',
  ink: '#171A2C',
  lapis: '#6C8FF5',
  lapisSoft: 'rgba(108,143,245,0.22)',
  mint: '#63B98D',
  mintSoft: 'rgba(99,185,141,0.20)',
  coral: '#E06A50',
  coralSoft: 'rgba(224,106,80,0.24)',
  danger: '#A33A28',
  negLight: '#FFA793',
  gold: '#D8B25C',
  shadow: 'rgba(8,10,22,0.55)',
  panel: 'rgba(240,237,226,0.06)',
  panelLine: 'rgba(240,237,226,0.28)',
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

export const Chip = ({children, tone = 'scroll', style}: {children: ReactNode; tone?: 'scroll' | 'vault' | 'lapis' | 'mint' | 'coral' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'scroll' ? C.scroll : tone === 'panel' ? C.panel : C[tone as 'vault' | 'lapis' | 'mint' | 'coral' | 'ink'];
  const color = tone === 'scroll' || tone === 'panel' || tone === 'lapis' ? C.ink : C.scroll;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.gold, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.scroll : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, dark = true, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.lapisSoft, padding: '4px 12px', borderRadius: 8, color: dark ? C.scroll : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
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

export const Stamp = ({children, delay = 0, tone = 'gold'}: {children: ReactNode; delay?: number; tone?: 'gold' | 'mint' | 'coral' | 'scroll'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'gold' ? C.gold : tone === 'mint' ? C.mint : tone === 'coral' ? C.coral : C.scroll;
  const bg = tone === 'scroll' ? C.scroll : 'transparent';
  const color = tone === 'scroll' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.scroll, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(240,237,226,0.035) 0 2px, transparent 2px 180px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.gold}}>COMMERCIAL LAW · INDIGO ESTATE VAULT / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.scroll}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.gold}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.scrollDim}}>
      <span>商经知 · 真金题 考点3 债务人财产</span>
      <span>FREEZE — SORT — CLAW BACK</span>
    </div>
  </AbsoluteFill>
);
