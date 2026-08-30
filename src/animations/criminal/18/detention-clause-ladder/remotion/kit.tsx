import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  silk: '#F5F0E3',
  ground: '#DCCFB4',
  warp: '#2F4F7A',
  weft: '#B03A2E',
  heddle: '#B98A34',
  moss: '#4C6B4F',
  alert: '#8E2F22',
  wood: '#6B4F35',
  ink: '#2C2A26',
  inkSoft: 'rgba(44,42,38,0.74)',
  warpSoft: 'rgba(47,79,122,0.13)',
  weftSoft: 'rgba(176,58,46,0.12)',
  mossSoft: 'rgba(76,107,79,0.13)',
  heddleSoft: 'rgba(185,138,52,0.22)',
} as const;

export const PLAYER_CONTROL_SAFE_BOTTOM = 168;

export const reveal = (frame: number, delay: number, span = 16) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({children, delay = 0, y = 22, style}: {children: ReactNode; delay?: number; y?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{opacity: p, translate: `0 ${(1 - p) * y}px`, ...style}}>{children}</div>;
};

export const Weft = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay, 22);
  return <div style={{scale: `${p} 1`, transformOrigin: 'left center', ...style}}>{children}</div>;
};

export const Chip = ({children, tone = 'warp', size = 22, style}: {children: ReactNode; tone?: 'warp' | 'weft' | 'moss' | 'heddle' | 'ink' | 'silk'; size?: number; style?: CSSProperties}) => {
  const bg = tone === 'warp' ? C.warp : tone === 'weft' ? C.weft : tone === 'moss' ? C.moss : tone === 'heddle' ? C.heddle : tone === 'ink' ? C.ink : C.silk;
  const color = tone === 'silk' ? C.ink : C.silk;
  const border = tone === 'silk' ? `2px solid ${C.wood}` : '2px solid rgba(44,42,38,0.24)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', backgroundColor: bg, color, border, fontSize: size, fontWeight: 850, borderRadius: 3, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.warp, ink = false, size = 26, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `7px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 950, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'heddle', size = 24, style}: {children: ReactNode; tone?: 'heddle' | 'warp' | 'weft' | 'moss'; size?: number; style?: CSSProperties}) => {
  const bg = tone === 'warp' ? C.warpSoft : tone === 'weft' ? C.weftSoft : tone === 'moss' ? C.mossSoft : C.heddleSoft;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: bg, padding: '3px 12px', borderRadius: 3, color: C.ink, fontSize: size, fontWeight: 950, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.78}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.alert, fontSize: size, fontWeight: 950, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'weft', style}: {children: ReactNode; delay?: number; tone?: 'weft' | 'warp' | 'moss'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay, 14);
  const color = tone === 'weft' ? C.weft : tone === 'warp' ? C.warp : C.moss;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 16px', border: `4px solid ${color}`, borderRadius: 4, color, fontSize: 24, fontWeight: 950, rotate: '-2.5deg', opacity: p, scale: 0.86 + p * 0.14, whiteSpace: 'nowrap', backgroundColor: 'rgba(245,240,227,0.78)', ...style}}>{children}</span>;
};

export const Mark = ({children, color = C.weft}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

export const RowChip = ({icon, tone = C.warp, title, children, size = 22, style}: {icon: ReactNode; tone?: string; title?: string; children?: ReactNode; size?: number; style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, backgroundColor: C.silk, border: '2px solid rgba(44,42,38,0.16)', borderLeft: `6px solid ${tone}`, padding: '9px 12px', ...style}}>
    <span style={{flexShrink: 0, marginTop: 1, width: 44, height: 44, borderRadius: 8, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: size, fontWeight: 700, color: C.ink, lineHeight: 1.5}}>
      {title ? <span style={{fontWeight: 950, color: tone}}>{title}</span> : null}
      {children}
    </span>
  </div>
);

export const Panel = ({children, watermark, tone = C.warp, marker, style}: {children: ReactNode; watermark?: ReactNode; tone?: string; marker?: string; style?: CSSProperties}) => (
  <div data-final-knowledge={marker} style={{backgroundColor: C.silk, border: `3px solid ${C.wood}`, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}>
    <span style={{position: 'absolute', left: 8, top: 16, width: 9, height: 9, borderRadius: 5, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 8, top: 16, width: 9, height: 9, borderRadius: 5, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.ground, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(47,79,122,0.07) 0 2px, transparent 2px 46px)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 130, height: 8, backgroundColor: C.wood}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.wood}}>CRIMINAL LAW · OFFENCES AGAINST THE PERSON / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 62, fontSize: 44, fontWeight: 950, color: C.ink}}>{title}</div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.wood}}>
      <span>刑法 · 第18讲 人身犯罪 · 非法拘禁罪</span>
      <span>CRIMINAL LAW · SPECIFIC PART</span>
    </div>
  </AbsoluteFill>
);
