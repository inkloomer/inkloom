import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  wire: '#3F4A36',
  wireSoft: 'rgba(63,74,54,0.12)',
  brass: '#8F7430',
  brassSoft: 'rgba(143,116,48,0.16)',
  paper: '#F4F0E4',
  paperDeep: '#E7E1CF',
  ink: '#23271E',
  inkSoft: 'rgba(35,39,30,0.75)',
  alert: '#8E3B2E',
  night: '#2B2E24',
  steel: '#46607A',
  steelSoft: 'rgba(70,96,122,0.12)',
  white: '#FAF8F0',
  ghost: 'rgba(35,39,30,0.30)',
  amber: '#A08234',
  ward: '#54708A',
  pulse: '#A34A38',
} as const;

export const PLAYER_CONTROL_SAFE_BOTTOM = 168;

export const reveal = (frame: number, delay: number, span = 16) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({children, delay = 0, y = 22, marker, style}: {children: ReactNode; delay?: number; y?: number; marker?: string; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div data-final-knowledge={marker} style={{opacity: p, translate: `0 ${(1 - p) * y}px`, ...style}}>{children}</div>;
};

export const Chip = ({children, tone = 'white', style}: {children: ReactNode; tone?: 'white' | 'ink' | 'steel' | 'alert' | 'brass' | 'night'; style?: CSSProperties}) => {
  const bg = tone === 'white' ? C.white : C[tone];
  const color = tone === 'white' || tone === 'brass' ? C.ink : C.white;
  const border = tone === 'white' ? `2px solid ${C.ink}` : '2px solid rgba(35,39,30,0.25)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 4, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.steel, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.brassSoft, padding: '4px 12px', borderRadius: 4, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.alert, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size + 6, height: size + 6, borderRadius: 999, border: `3px solid ${C.alert}`, color: C.alert, fontSize: size - 4, fontWeight: 950, flexShrink: 0}}>×</span>
    <span>{children}</span>
  </span>
);

export const WireStamp = ({children, delay = 0, tone = 'alert'}: {children: ReactNode; delay?: number; tone?: 'alert' | 'steel' | 'brass'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'alert' ? C.alert : tone === 'steel' ? C.steel : C.brass;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap', backgroundColor: 'rgba(250,248,240,0.65)'}}>{children}</span>;
};

export const DeskTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 26, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const Panel = ({children, marker, tone, watermark, style}: {children: ReactNode; marker?: string; tone?: string; watermark?: ReactNode; style?: CSSProperties}) => (
  <div data-final-knowledge={marker} style={{backgroundColor: C.white, border: `3px solid ${C.night}`, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}>
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const TabChip = ({children, tone, icon}: {children: ReactNode; tone: string; icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.night, borderLeft: `6px solid ${tone}`, color: C.white, fontSize: 22, fontWeight: 900, letterSpacing: 1}}>{icon}{children}</span>
);

export const Mark = ({children, color = C.steel}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {icon: ReactNode; tone: string; title: string; children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDeep, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Shell = ({code, kicker, title, children}: {code: string; kicker: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.night, borderLeft: `8px solid ${C.alert}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.white, letterSpacing: 2}}>第25讲 · {code}</span>
    </div>
    <div style={{position: 'absolute', left: 250, right: 72, top: 34, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 22, borderBottom: `3px solid ${C.ink}`, paddingBottom: 10}}>
      <h1 style={{margin: 0, fontSize: 42, lineHeight: 1.1, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 20, fontWeight: 850, color: C.steel, textAlign: 'right', whiteSpace: 'nowrap'}}>{kicker}</span>
    </div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 150, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 800, color: C.inkSoft}}>
      <span>刑法分则 · 第25讲 危害国家安全罪</span>
      <span>{kicker}</span>
    </div>
  </AbsoluteFill>
);
