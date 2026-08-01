import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const SIGNAL = {
  mist: '#eef7f3',
  white: '#fbfffd',
  graphite: '#16332f',
  teal: '#00a99a',
  magenta: '#d63d78',
  yellow: '#f4d93e',
  blue: '#3566d6',
  muted: '#66817b',
  line: '#b9d5ce',
};

export const SignalIn = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 16], [0, 1], CLAMP);
  return <div style={{opacity: progress, translate: `${36 * (1 - progress)}px 0`, ...style}}>{children}</div>;
};

export const SignalText = ({children, kind, color = SIGNAL.teal, delay = 0}: {children: ReactNode; kind: 'wave' | 'highlight' | 'label' | 'stamp' | 'negation'; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  if (kind === 'label') return <span style={{display: 'inline-flex', alignItems: 'center', minHeight: 40, padding: '4px 14px', borderRadius: 999, backgroundColor: color, color: SIGNAL.white, fontWeight: 900}}>{children}</span>;
  if (kind === 'stamp') return <span style={{display: 'inline-block', padding: '6px 15px', border: `3px double ${color}`, color, fontWeight: 950, opacity: progress}}>{children}</span>;
  if (kind === 'negation') return <span style={{position: 'relative', display: 'inline-block', paddingRight: 30}}>{children}<span style={{position: 'absolute', right: 0, top: '50%', width: 21, height: 3, backgroundColor: color, rotate: '45deg', opacity: progress}} /><span style={{position: 'absolute', right: 0, top: '50%', width: 21, height: 3, backgroundColor: color, rotate: '-45deg', opacity: progress}} /></span>;
  if (kind === 'wave') return <span style={{position: 'relative', display: 'inline-block'}}>{children}<svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{position: 'absolute', left: 0, right: 0, bottom: -8, width: '100%', height: 9, overflow: 'visible'}}><path d="M0 5 C10 0 20 10 30 5 S50 0 60 5 S80 10 100 5" fill="none" stroke={color} strokeWidth="3" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - progress} /></svg></span>;
  return <span style={{position: 'relative', display: 'inline-block', zIndex: 0}}><span style={{position: 'absolute', left: -5, right: -5, bottom: 0, height: '54%', backgroundColor: color, opacity: 0.28, borderRadius: 5, scale: `${progress} 1`, transformOrigin: 'left center', zIndex: -1}} />{children}</span>;
};

export const SignalCanvas = ({code, title, children}: {code: string; title: string; children: ReactNode}) => {
  const frame = useCurrentFrame();
  const trace = interpolate(frame, [0, 28], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: SIGNAL.mist, color: SIGNAL.graphite, fontFamily: 'var(--inkloom-animation-body)'}}>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35}}>
        {Array.from({length: 9}).map((_, index) => <path key={index} d={`M0 ${270 + index * 72} C260 ${220 + index * 78}, 520 ${330 + index * 56}, 780 ${270 + index * 72} S1300 ${220 + index * 78}, 1920 ${270 + index * 72}`} fill="none" stroke={SIGNAL.line} strokeWidth="2" />)}
      </svg>
      <div style={{position: 'absolute', left: 62, top: 54, width: 94, height: 94, borderRadius: '50%', border: `5px solid ${SIGNAL.graphite}`, display: 'grid', placeItems: 'center', backgroundColor: SIGNAL.white, fontSize: 40, fontWeight: 950}}>{code}</div>
      <div style={{position: 'absolute', left: 184, top: 48, fontSize: 18, fontWeight: 900, color: SIGNAL.magenta}}>COURT SIGNAL / ADMISSION</div>
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', position: 'absolute', left: 184, right: 80, top: 82, margin: 0, fontSize: 50, lineHeight: 1.18, fontWeight: 950, letterSpacing: 0}}>{title}</h1>
      <div style={{position: 'absolute', left: 184, top: 154, width: 1540, height: 4, backgroundColor: SIGNAL.graphite, scale: `${trace} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 1730, top: 143, display: 'flex', gap: 8}}>{[0, 1, 2].map((item) => <span key={item} style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: [SIGNAL.teal, SIGNAL.yellow, SIGNAL.magenta][item]}} />)}</div>
      {children}
      <div style={{position: 'absolute', left: 184, bottom: 30, fontSize: 18, fontWeight: 900, color: SIGNAL.muted}}>RECORDING CHANNEL 09</div>
    </div>
  );
};

export const SignalPath = ({d, color = SIGNAL.teal, delay = 0, width = 8}: {d: string; color?: string; delay?: number; width?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 22], [0, 1], CLAMP);
  return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - progress} />;
};
