import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  daisViolet: '#5C4470',
  daisVioletSoft: 'rgba(92,68,112,0.11)',
  meritGold: '#96702C',
  meritGoldSoft: 'rgba(150,112,44,0.15)',
  verdictRed: '#9E4434',
  verdictRedSoft: 'rgba(158,68,52,0.11)',
  slateTeal: '#3E6470',
  slateTealSoft: 'rgba(62,100,112,0.12)',
  hallPaper: '#F3F0EA',
  cardPaper: '#FCFAF5',
  panel: '#CFC9D4',
  ink: '#272321',
  inkSoft: 'rgba(39,35,33,0.72)',
  ghost: 'rgba(39,35,33,0.28)',
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

export const RankChip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'ink' | 'violet' | 'gold' | 'red' | 'teal'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.cardPaper : tone === 'violet' ? C.daisViolet : tone === 'gold' ? C.meritGold : tone === 'red' ? C.verdictRed : tone === 'teal' ? C.slateTeal : C.ink;
  const color = tone === 'paper' || tone === 'gold' ? C.ink : C.cardPaper;
  const border = tone === 'paper' ? `2px solid ${C.daisViolet}` : `2px solid ${C.ghost}`;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 5, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const HallLabel = ({children, color = C.daisViolet, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderBottom: `4px double ${color}`, padding: '2px 12px 4px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const LaurelHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.meritGoldSoft, padding: '4px 12px', borderRadius: 4, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.verdictRed, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const DaisStamp = ({children, delay = 0, tone = 'violet', style}: {children: ReactNode; delay?: number; tone?: 'violet' | 'red' | 'gold'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'violet' ? C.daisViolet : tone === 'red' ? C.verdictRed : C.meritGold;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 14px', border: `4px double ${color}`, borderRadius: 5, color, fontSize: 24, fontWeight: 950, rotate: '2deg', opacity: p, scale: 0.88 + p * 0.12, whiteSpace: 'nowrap', backgroundColor: 'rgba(252,250,245,0.72)', ...style}}>{children}</span>;
};

export const RankArrow = ({delay, color}: {delay: number; color?: string}) => {
  const line = color ?? C.daisViolet;
  return (
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0}}>
      <Dash delay={delay} style={{width: 20, height: 0, borderTop: `5px solid ${line}`}} />
      <span style={{width: 0, height: 0, borderLeft: `11px solid ${line}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
    </Enter>
  );
};

export const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -34, bottom: -52, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.hallPaper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(105deg, rgba(92,68,112,0.045) 0 2px, transparent 2px 94px), repeating-linear-gradient(0deg, rgba(150,112,44,0.04) 0 2px, transparent 2px 76px)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 130, height: 6, backgroundColor: C.daisViolet}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.meritGold}}>CRIMINAL LAW · JOINT CRIME / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 66, fontSize: 44, fontWeight: 950}}>{title}</div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.daisViolet}}>
      <span>刑法 · 第12讲 共同犯罪（十一）共同犯罪的处罚规定</span>
      <span>JOINT CRIME · GENERAL PART</span>
    </div>
  </AbsoluteFill>
);
