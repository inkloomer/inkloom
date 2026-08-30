import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  night: '#0F1621',
  nightLine: 'rgba(214,226,240,0.15)',
  ivory: '#E9EEF4',
  ivoryDim: 'rgba(233,238,244,0.62)',
  runway: '#E4B54F',
  runwaySoft: 'rgba(228,181,79,0.16)',
  radar: '#57B877',
  radarSoft: 'rgba(87,184,119,0.15)',
  alert: '#D4614E',
  alertSoft: 'rgba(212,97,78,0.17)',
  sky: '#6FA3C8',
  skySoft: 'rgba(111,163,200,0.16)',
  panel: 'rgba(233,238,244,0.05)',
  panelLine: 'rgba(233,238,244,0.26)',
  shadow: 'rgba(3,7,12,0.55)',
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

export const Chip = ({children, tone = 'panel', style}: {children: ReactNode; tone?: 'panel' | 'ivory' | 'runway' | 'radar' | 'alert' | 'sky'; style?: CSSProperties}) => {
  const bg = tone === 'panel' ? C.panel : tone === 'ivory' ? 'rgba(233,238,244,0.85)' : tone === 'runway' ? C.runwaySoft : tone === 'radar' ? C.radarSoft : tone === 'alert' ? C.alertSoft : C.skySoft;
  const color = tone === 'panel' ? C.ivory : tone === 'ivory' ? C.night : tone === 'runway' ? C.runway : tone === 'radar' ? C.radar : tone === 'alert' ? C.alert : C.sky;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 850, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const LabelBlock = ({children, color = C.runway, light = true, size = 28, style}: {children: ReactNode; color?: string; light?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: light ? C.ivory : C.night, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const SoftHi = ({children, tone = 'runway', style}: {children: ReactNode; tone?: 'runway' | 'radar' | 'alert' | 'sky'; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: tone === 'runway' ? C.runwaySoft : tone === 'radar' ? C.radarSoft : tone === 'alert' ? C.alertSoft : C.skySoft, padding: '4px 12px', borderRadius: 8, color: tone === 'runway' ? C.runway : tone === 'radar' ? C.radar : tone === 'alert' ? C.alert : C.sky, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ivory}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.75}} /></span>
);

export const Neg = ({children, size = 25}: {children: ReactNode; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.alert, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <span style={{display: 'inline-flex', fontSize: size + 4, fontWeight: 950}}>×</span>
    <span>{children}</span>
  </span>
);

export const Stamp = ({children, delay = 0, tone = 'radar'}: {children: ReactNode; delay?: number; tone?: 'radar' | 'alert' | 'runway' | 'sky'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'radar' ? C.radar : tone === 'alert' ? C.alert : tone === 'runway' ? C.runway : C.sky;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px double ${color}`, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.night, color: C.ivory, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 120%, rgba(228,181,79,0.07) 0%, transparent 55%)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.runway}}>CRIMINAL PROCEDURE · GOLD QUESTIONS / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950, color: C.ivory}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.runway}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.ivoryDim}}>
      <span>刑诉 · 真金题 专题六 强制措施</span>
      <span>NIGHT TOWER FOR MEASURES</span>
    </div>
  </AbsoluteFill>
);
