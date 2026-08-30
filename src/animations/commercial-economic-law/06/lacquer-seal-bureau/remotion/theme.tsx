import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  field: '#17140E',
  lacquer: '#242017',
  lacquerLine: '#3A3425',
  bone: '#F2EAD8',
  boneDim: 'rgba(242,234,216,0.62)',
  ink: '#0D0B07',
  gold: '#D4AF5E',
  goldSoft: 'rgba(212,175,94,0.18)',
  cinnabar: '#C8452E',
  cinnabarDark: '#8F2F1E',
  cinnabarLight: '#FFA48C',
  jade: '#58A483',
  jadeSoft: 'rgba(88,164,131,0.16)',
  shadow: 'rgba(0,0,0,0.6)',
  panel: 'rgba(242,234,216,0.05)',
  panelLine: 'rgba(242,234,216,0.26)',
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

export const Chip = ({children, tone = 'gold', style}: {children: ReactNode; tone?: 'gold' | 'cinnabar' | 'jade' | 'ink' | 'panel'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : C[tone as 'gold' | 'cinnabar' | 'jade' | 'ink'];
  const color = tone === 'cinnabar' || tone === 'jade' || tone === 'ink' ? C.bone : C.ink;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.gold, light = false, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.bone : C.ink, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, light = false, style}: {children: ReactNode; light?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.goldSoft, padding: '4px 12px', borderRadius: 8, color: light ? C.bone : C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, light = false, size = 26}: {children: ReactNode; light?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: light ? C.cinnabarLight : C.cinnabarDark, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'gold'}: {children: ReactNode; delay?: number; tone?: 'gold' | 'jade' | 'cinnabar' | 'bone'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const border = tone === 'gold' ? C.gold : tone === 'jade' ? C.jade : tone === 'cinnabar' ? C.cinnabar : C.bone;
  const bg = tone === 'bone' ? C.bone : 'transparent';
  const color = tone === 'bone' ? C.ink : border;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${border}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Watermark = ({children}: {children: ReactNode}) => (
  <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.12, pointerEvents: 'none'}}>{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {children: ReactNode; icon: ReactNode; tone: string; title: string}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.35)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 800, color: C.bone, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.bone, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(242,234,216,0.03) 0 2px, transparent 2px 180px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.gold}}>COMMERCIAL LAW · LACQUER SEAL BUREAU / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.bone}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.gold}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.boneDim}}>
      <span>商经知 · 真金题 考点4 汇票行为</span>
      <span>2015-3-32 · 2024金题</span>
    </div>
  </AbsoluteFill>
);
