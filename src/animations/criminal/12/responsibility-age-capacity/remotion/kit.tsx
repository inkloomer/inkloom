import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  benchTeal: '#2E5F63',
  benchTealSoft: 'rgba(46,95,99,0.12)',
  vermilion: '#A8402F',
  vermilionSoft: 'rgba(168,64,47,0.11)',
  bronze: '#9A742E',
  bronzeSoft: 'rgba(154,116,46,0.16)',
  parchment: '#F4EDDF',
  paper: '#FBF7EC',
  panel: '#CFD9D2',
  ink: '#26241E',
  inkSoft: 'rgba(38,36,30,0.72)',
  ghost: 'rgba(38,36,30,0.28)',
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

export const WeighChip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'ink' | 'teal' | 'bronze' | 'vermilion'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.paper : tone === 'teal' ? C.benchTeal : tone === 'bronze' ? C.bronze : tone === 'vermilion' ? C.vermilion : C.ink;
  const color = tone === 'paper' || tone === 'bronze' ? C.ink : C.paper;
  const border = tone === 'paper' ? `2px solid ${C.benchTeal}` : `2px solid ${C.ghost}`;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 3, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const PillarLabel = ({children, color = C.benchTeal, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `7px double ${color}`, padding: '2px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const RiceHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.bronzeSoft, padding: '4px 12px', borderRadius: 3, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.vermilion, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const Seal = ({children, delay = 0, tone = 'teal', style}: {children: ReactNode; delay?: number; tone?: 'teal' | 'vermilion' | 'bronze'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'teal' ? C.benchTeal : tone === 'vermilion' ? C.vermilion : C.bronze;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 14px', border: `4px double ${color}`, borderRadius: 3, color, fontSize: 24, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.88 + p * 0.12, whiteSpace: 'nowrap', backgroundColor: 'rgba(251,247,236,0.72)', ...style}}>{children}</span>;
};

export const BenchTitle = ({children}: {children: ReactNode}) => (
  <span style={{fontSize: 30, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const BeamArrow = ({delay, color}: {delay: number; color?: string}) => {
  const line = color ?? C.benchTeal;
  return (
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0}}>
      <Dash delay={delay} style={{width: 20, height: 0, borderTop: `5px solid ${line}`}} />
      <span style={{width: 0, height: 0, borderLeft: `11px solid ${line}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
    </Enter>
  );
};

export const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -34, bottom: -52, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.parchment, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(75deg, rgba(46,95,99,0.05) 0 2px, transparent 2px 92px), repeating-linear-gradient(0deg, rgba(154,116,46,0.035) 0 2px, transparent 2px 70px)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 130, height: 6, backgroundColor: C.benchTeal}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.benchTeal}}>CRIMINAL LAW · JOINT CRIME / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 66, fontSize: 44, fontWeight: 950}}>{title}</div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.benchTeal}}>
      <span>刑法 · 第12讲 共同犯罪（七）正犯的责任年龄和责任能力</span>
      <span>JOINT CRIME · GENERAL PART</span>
    </div>
  </AbsoluteFill>
);
