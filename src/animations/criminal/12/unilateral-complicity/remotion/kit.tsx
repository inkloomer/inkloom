import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  mirrorSilver: '#52616F',
  mirrorSilverSoft: 'rgba(82,97,111,0.12)',
  safelightAmber: '#B27A30',
  safelightAmberSoft: 'rgba(178,122,48,0.15)',
  developRed: '#A5402D',
  developRedSoft: 'rgba(165,64,45,0.11)',
  fixerGreen: '#2E6B52',
  fixerGreenSoft: 'rgba(46,107,82,0.13)',
  photoPaper: '#F2EEE6',
  cardPaper: '#FBF9F4',
  panel: '#BFC7CE',
  ink: '#26221C',
  inkSoft: 'rgba(38,34,28,0.72)',
  ghost: 'rgba(38,34,28,0.28)',
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

export const PlateChip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'ink' | 'silver' | 'amber' | 'red' | 'green'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.cardPaper : tone === 'silver' ? C.mirrorSilver : tone === 'amber' ? C.safelightAmber : tone === 'red' ? C.developRed : tone === 'green' ? C.fixerGreen : C.ink;
  const color = tone === 'paper' || tone === 'amber' ? C.ink : C.cardPaper;
  const border = tone === 'paper' ? `2px solid ${C.mirrorSilver}` : `2px solid ${C.ghost}`;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 3, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const FrameLabel = ({children, color = C.mirrorSilver, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderTop: `3px solid ${color}`, borderBottom: `3px solid ${color}`, padding: '3px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const GlowHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.safelightAmberSoft, padding: '4px 12px', borderRadius: 3, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.developRed, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const FixStamp = ({children, delay = 0, tone = 'green', style}: {children: ReactNode; delay?: number; tone?: 'green' | 'red' | 'silver'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'green' ? C.fixerGreen : tone === 'red' ? C.developRed : C.mirrorSilver;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 14px', border: `4px solid ${color}`, borderRadius: 3, color, fontSize: 24, fontWeight: 950, rotate: '-3deg', opacity: p, scale: 0.88 + p * 0.12, whiteSpace: 'nowrap', backgroundColor: 'rgba(251,249,244,0.72)', ...style}}>{children}</span>;
};

export const ExposureArrow = ({delay, color}: {delay: number; color?: string}) => {
  const line = color ?? C.mirrorSilver;
  return (
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0}}>
      <Dash delay={delay} style={{width: 20, height: 0, borderTop: `5px solid ${line}`}} />
      <span style={{width: 0, height: 0, borderLeft: `11px solid ${line}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
    </Enter>
  );
};

export const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -56, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.photoPaper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(82,97,111,0.05) 0 2px, transparent 2px 96px), repeating-linear-gradient(0deg, rgba(178,122,48,0.04) 0 2px, transparent 2px 74px)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 130, height: 6, backgroundColor: C.safelightAmber}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.fixerGreen}}>CRIMINAL LAW · JOINT CRIME / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 66, fontSize: 44, fontWeight: 950}}>{title}</div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.mirrorSilver}}>
      <span>刑法 · 第12讲 共同犯罪（九）片面的共同犯罪</span>
      <span>JOINT CRIME · GENERAL PART</span>
    </div>
  </AbsoluteFill>
);
