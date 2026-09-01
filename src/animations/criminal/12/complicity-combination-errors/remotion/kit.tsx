import type {CSSProperties, ReactNode} from 'react';
import {X} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const C = {
  chartBlue: '#33567D',
  chartBlueSoft: 'rgba(51,86,125,0.11)',
  specPurple: '#6C4E80',
  specPurpleSoft: 'rgba(108,78,128,0.12)',
  lesionRed: '#A03A30',
  lesionRedSoft: 'rgba(160,58,48,0.11)',
  instrumentGray: '#5B6670',
  instrumentGraySoft: 'rgba(91,102,112,0.12)',
  wardPaper: '#EFF2F4',
  cardPaper: '#FBFCFD',
  panel: '#C7D2DA',
  ink: '#232830',
  inkSoft: 'rgba(35,40,48,0.72)',
  ghost: 'rgba(35,40,48,0.28)',
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

export const WardChip = ({children, tone = 'paper', style}: {children: ReactNode; tone?: 'paper' | 'ink' | 'blue' | 'purple' | 'red' | 'gray'; style?: CSSProperties}) => {
  const bg = tone === 'paper' ? C.cardPaper : tone === 'blue' ? C.chartBlue : tone === 'purple' ? C.specPurple : tone === 'red' ? C.lesionRed : tone === 'gray' ? C.instrumentGray : C.ink;
  const color = tone === 'paper' ? C.ink : C.cardPaper;
  const border = tone === 'paper' ? `2px solid ${C.chartBlue}` : `2px solid ${C.ghost}`;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, border, fontSize: 22, fontWeight: 800, borderRadius: 7, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

export const TriageLabel = ({children, color = C.chartBlue, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, borderRight: `2px solid ${color}`, padding: '3px 12px', color: ink ? C.ink : color, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const NoteHi = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: C.specPurpleSoft, padding: '4px 12px', borderRadius: 5, color: C.ink, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

export const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

export const Neg = ({children, size = 24, style}: {children: ReactNode; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: C.lesionRed, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

export const ConsultStamp = ({children, delay = 0, tone = 'purple', style}: {children: ReactNode; delay?: number; tone?: 'purple' | 'red' | 'blue'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const color = tone === 'purple' ? C.specPurple : tone === 'red' ? C.lesionRed : C.chartBlue;
  return <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 14px', border: `4px solid ${color}`, borderRadius: 7, color, fontSize: 24, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.88 + p * 0.12, whiteSpace: 'nowrap', backgroundColor: 'rgba(251,252,253,0.72)', ...style}}>{children}</span>;
};

export const ReferralArrow = ({delay, color}: {delay: number; color?: string}) => {
  const line = color ?? C.chartBlue;
  return (
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0}}>
      <Dash delay={delay} style={{width: 20, height: 0, borderTop: `5px solid ${line}`}} />
      <span style={{width: 0, height: 0, borderLeft: `11px solid ${line}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
    </Enter>
  );
};

export const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -36, bottom: -56, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.wardPaper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(65deg, rgba(51,86,125,0.045) 0 2px, transparent 2px 90px), repeating-linear-gradient(0deg, rgba(108,78,128,0.035) 0 2px, transparent 2px 72px)'}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 130, height: 6, backgroundColor: C.chartBlue}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.specPurple}}>CRIMINAL LAW · JOINT CRIME / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 66, fontSize: 44, fontWeight: 950}}>{title}</div>
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.chartBlue}}>
      <span>刑法 · 第12讲 共同犯罪（十）共同犯罪的结合问题</span>
      <span>JOINT CRIME · GENERAL PART</span>
    </div>
  </AbsoluteFill>
);
