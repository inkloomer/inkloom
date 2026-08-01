import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const INK = {
  paper: '#f3f0e7',
  black: '#111111',
  cobalt: '#1556d8',
  red: '#e43b2f',
  yellow: '#f2cf32',
  green: '#158765',
  gray: '#7a7972',
  white: '#fffdf8',
};

export const CutIn = ({children, delay = 0, direction = 'left', style}: {children: ReactNode; delay?: number; direction?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 14], [0, 1], CLAMP);
  const offset = direction === 'up' ? `0 ${44 * (1 - progress)}px` : `${(direction === 'left' ? -1 : 1) * 70 * (1 - progress)}px 0`;
  return <div style={{opacity: progress, translate: offset, ...style}}>{children}</div>;
};

export const Treatment = ({children, kind, color = INK.yellow, delay = 0}: {children: ReactNode; kind: 'highlight' | 'underline' | 'label' | 'stamp' | 'negation'; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  if (kind === 'label') return <span style={{display: 'inline-block', padding: '5px 12px 6px', backgroundColor: color, color: color === INK.yellow || color === INK.paper ? INK.black : INK.white, fontWeight: 950}}>{children}</span>;
  if (kind === 'stamp') return <span style={{display: 'inline-block', border: `4px solid ${color}`, padding: '5px 14px 6px', color, fontWeight: 950, rotate: '-2deg', opacity: progress}}>{children}</span>;
  if (kind === 'negation') return <span style={{position: 'relative', display: 'inline-block', paddingLeft: 28}}><span style={{position: 'absolute', left: 0, top: '50%', width: 17, height: 17, border: `3px solid ${color}`, borderRadius: '50%', translate: '0 -50%', opacity: progress}} /><span style={{position: 'absolute', left: 1, top: '50%', width: 17, height: 3, backgroundColor: color, rotate: '-38deg', translate: '0 -50%', opacity: progress}} />{children}</span>;
  if (kind === 'underline') return <span style={{position: 'relative', display: 'inline-block'}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -5, height: 5, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}} /></span>;
  return <span style={{position: 'relative', display: 'inline-block', zIndex: 0}}><span style={{position: 'absolute', left: -5, right: -5, bottom: 1, height: '52%', backgroundColor: color, opacity: 0.82, scale: `${progress} 1`, transformOrigin: 'left center', zIndex: -1}} />{children}</span>;
};

export const ConstructivistCanvas = ({code, title, children}: {code: string; title: string; children: ReactNode}) => {
  const frame = useCurrentFrame();
  const slash = interpolate(frame, [0, 20], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: INK.paper, color: INK.black, fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', left: -100, top: -80, width: 620, height: 150, backgroundColor: INK.red, rotate: '-8deg', scale: `${slash} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', right: -180, top: 0, width: 620, height: 96, backgroundColor: INK.cobalt, clipPath: 'polygon(20% 0,100% 0,100% 100%,0 100%)'}} />
      <div style={{position: 'absolute', left: 68, top: 56, fontSize: 19, fontWeight: 900, letterSpacing: 0, color: INK.white}}>PROOF / ALLOCATION</div>
      <div style={{position: 'absolute', left: 68, top: 118, right: 190, display: 'flex', alignItems: 'baseline', gap: 28}}>
        <span style={{fontSize: 76, lineHeight: 1, fontWeight: 950}}>{code}</span>
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 52, lineHeight: 1.15, fontWeight: 950, letterSpacing: 0}}>{title}</h1>
      </div>
      <div style={{position: 'absolute', left: 68, right: 68, top: 194, height: 7, backgroundColor: INK.black}} />
      {children}
      <div style={{position: 'absolute', left: 68, right: 68, bottom: 48, height: 4, backgroundColor: INK.black}} />
      <div style={{position: 'absolute', right: 68, bottom: 16, fontSize: 18, fontWeight: 900}}>CIVIL PROCEDURE / 09</div>
    </div>
  );
};

export const ArrowLine = ({left, top, width, color = INK.black, delay = 0, reverse = false}: {left: number; top: number; width: number; color?: string; delay?: number; reverse?: boolean}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 18], [0, 1], CLAMP);
  return <div style={{position: 'absolute', left, top, width, height: 8, backgroundColor: color, scale: `${progress} 1`, transformOrigin: reverse ? 'right center' : 'left center'}}><div style={{position: 'absolute', [reverse ? 'left' : 'right']: -2, top: -8, width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', ...(reverse ? {borderRight: `20px solid ${color}`} : {borderLeft: `20px solid ${color}`})}} /></div>;
};
