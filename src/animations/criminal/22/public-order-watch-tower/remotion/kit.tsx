import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  mist: '#E9EAE2',
  panel: '#E7DABB',
  mistDeep: '#D8DBD0',
  ink: '#23261F',
  inkSoft: 'rgba(35,38,31,0.76)',
  navy: '#33415C',
  navySoft: 'rgba(51,65,92,0.12)',
  pine: '#46604A',
  pineSoft: 'rgba(70,96,74,0.12)',
  torch: '#B45A2C',
  torchSoft: 'rgba(180,90,44,0.12)',
  crimson: '#A03040',
  crimsonSoft: 'rgba(160,48,64,0.10)',
  gold: '#97742C',
  goldSoft: 'rgba(151,116,44,0.16)',
  night: '#252823',
  white: '#FAFAF4',
  ghost: 'rgba(35,38,31,0.30)',
  amber: '#A8842C',
  ward: '#52677F',
  pulse: '#B04A32',
} as const;

export const PLAYER_CONTROL_SAFE_BOTTOM = 168;

export const reveal = (frame: number, delay: number, span = 16) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const easeRide = Easing.bezier(0.16, 1, 0.3, 1);

/** Token that slides along a connector and rests at its terminal (or fades into the node it merges with). */
export const Mover = ({children, delay = 0, span = 28, fromX = 0, toX = 0, fromY = 0, toY = 0, fadeAt, style}: {
  children: ReactNode;
  delay?: number;
  fadeAt?: number;
  fromX?: number;
  fromY?: number;
  span?: number;
  toX?: number;
  toY?: number;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [delay, delay + span], [0, 1], {easing: easeRide, ...CLAMP});
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], {easing: easeRide, ...CLAMP})}px ${interpolate(frame, [delay, delay + span], [fromY, toY], {easing: easeRide, ...CLAMP})}px`,
      }}
    >
      {children}
    </div>
  );
};

/** Connector line that draws itself in the wake of the token. */
export const Path = ({color, delay = 0, span = 20, thickness = 4, vertical = false, style}: {
  color: string;
  delay?: number;
  span?: number;
  style?: CSSProperties;
  thickness?: number;
  vertical?: boolean;
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [delay, delay + span], [0, 1], CLAMP);
  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        opacity: 0.55,
        ...(vertical ? {width: thickness, scale: `1 ${p}`, transformOrigin: 'center top'} : {height: thickness, scale: `${p} 1`, transformOrigin: 'left center'}),
      }}
    />
  );
};

/** Gate box: lights up (border + glow flash) when the token passes through. */
export const GateFlash = ({children, delay = 0, tone, style}: {children: ReactNode; delay?: number; tone: string; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const lit = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  const glow = lit * (1 - Math.max(0, Math.min(1, (frame - delay - 12) / 18)) * 0.35);
  return (
    <div
      style={{
        ...style,
        borderColor: tone,
        boxShadow: `0 0 ${glow * 26}px ${tone}${glow > 0.5 ? '55' : '00'}, inset 0 0 ${glow * 16}px ${tone}22`,
      }}
    >
      {children}
    </div>
  );
};

export const Enter = ({children, delay = 0, y = 22, marker, style}: {children: ReactNode; delay?: number; y?: number; marker?: string; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div data-final-knowledge={marker} style={{opacity: p, translate: `0 ${(1 - p) * y}px`, ...style}}>{children}</div>;
};

export const Chip = ({children, tone = 'white', style}: {children: ReactNode; tone?: 'white' | 'ink' | 'navy' | 'torch' | 'gold' | 'night'; style?: CSSProperties}) => {
  const bg = tone === 'white' ? C.white : C[tone];
  const color = tone === 'white' || tone === 'gold' ? C.ink : C.white;
  const border = tone === 'white' ? `2px solid ${C.ink}` : '2px solid rgba(35,38,31,0.25)';
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 4, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.navy, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.goldSoft, padding: '4px 12px', borderRadius: 4, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.crimson, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size + 6, height: size + 6, borderRadius: 999, border: `3px solid ${C.crimson}`, color: C.crimson, fontSize: size - 4, fontWeight: 950, flexShrink: 0}}>×</span>
    <span>{children}</span>
  </span>
);

export const PatrolStamp = ({children, delay = 0, tone = 'crimson'}: {children: ReactNode; delay?: number; tone?: 'crimson' | 'navy' | 'gold'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'crimson' ? C.crimson : tone === 'navy' ? C.navy : C.gold;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap', backgroundColor: 'rgba(250,250,244,0.65)'}}>{children}</span>;
};

export const DeskTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 26, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const Panel = ({children, marker, tone, watermark, style}: {children: ReactNode; marker?: string; tone?: string; watermark?: ReactNode; style?: CSSProperties}) => (
  <div data-final-knowledge={marker} style={{backgroundColor: C.panel, border: `3px solid ${C.night}`, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}>
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const TabChip = ({children, tone, icon}: {children: ReactNode; tone: string; icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.night, borderLeft: `6px solid ${tone}`, color: C.white, fontSize: 22, fontWeight: 900, letterSpacing: 1}}>{icon}{children}</span>
);

export const Mark = ({children, color = C.navy}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {icon: ReactNode; tone: string; title: string; children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.mistDeep, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Shell = ({code, kicker, title, children}: {code: string; kicker: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.mist, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.night, borderLeft: `8px solid ${C.torch}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.white, letterSpacing: 2}}>第22讲 · {code}</span>
    </div>
    <div style={{position: 'absolute', left: 250, right: 72, top: 34, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 22, borderBottom: `3px solid ${C.ink}`, paddingBottom: 10}}>
      <h1 style={{margin: 0, fontSize: 42, lineHeight: 1.1, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 20, fontWeight: 850, color: C.navy, textAlign: 'right', whiteSpace: 'nowrap'}}>{kicker}</span>
    </div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 150, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 800, color: C.inkSoft}}>
      <span>刑法分则 · 第22讲 社会秩序犯罪</span>
      <span>{kicker}</span>
    </div>
  </AbsoluteFill>
);
