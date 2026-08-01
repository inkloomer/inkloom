import type {CSSProperties, ReactNode} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const COLORS = {
  black: '#111514',
  steel: '#252B29',
  ivory: '#F5E9D6',
  cyan: '#4EC8C0',
  pink: '#F06A91',
  yellow: '#F2CE55',
  rust: '#D85A40',
  muted: '#9BA39E',
} as const;

export const Canvas = ({children, code, title}: {children: ReactNode; code: string; title: string}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: COLORS.black, color: COLORS.ivory, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', left: 22, top: 22, bottom: 22, width: 110, backgroundColor: COLORS.yellow, color: COLORS.black}}>
      <div style={{position: 'absolute', left: 22, top: 32, fontSize: 22, fontWeight: 900, writingMode: 'vertical-rl'}}>AUTHORIZATION</div>
      <div style={{position: 'absolute', left: 22, bottom: 32, fontSize: 36, fontWeight: 900}}>{code}</div>
    </div>
    <div style={{position: 'absolute', left: 164, right: 42, top: 44, height: 3, backgroundColor: COLORS.ivory}} />
    <h1 style={{fontFamily: 'var(--inkloom-animation-title)', position: 'absolute', left: 164, top: 82, margin: 0, fontSize: 60, lineHeight: 1.1, letterSpacing: 0}}>{title}</h1>
    <div style={{position: 'absolute', right: 54, top: 120, color: COLORS.cyan, fontSize: 22, fontWeight: 900}}>PERMISSION INSPECTION</div>
    {children}
  </div>
);

export const Reveal = ({children, delay = 0, from = 'up', style}: {children: ReactNode; delay?: number; from?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const origin = from === 'left' ? '-48px 0px' : from === 'right' ? '48px 0px' : '0px 42px';
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 15], [0, 1], {...CLAMP, easing: Easing.bezier(.16, 1, .3, 1)}), translate: interpolate(frame, [delay, delay + 20], [origin, '0px 0px'], {...CLAMP, easing: Easing.bezier(.16, 1, .3, 1)})}}>{children}</div>;
};

export const AuditNote = ({accent, children}: {accent: string; children: ReactNode}) => (
  <div style={{position: 'absolute', right: 58, bottom: 48, maxWidth: 820, padding: '18px 24px', borderTop: `7px solid ${accent}`, backgroundColor: COLORS.ivory, color: COLORS.black, fontSize: 28, lineHeight: 1.35, fontWeight: 900}}>{children}</div>
);

export const Mark = ({children, color, delay = 0, kind}: {children: ReactNode; color: string; delay?: number; kind: 'highlight' | 'negation' | 'underline'}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 18], [0, 1], CLAMP);
  if (kind === 'negation') return <span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><span style={{display: 'inline-grid', width: 30, height: 30, placeItems: 'center', border: `2px solid ${color}`, color, fontSize: 24, lineHeight: 1, opacity: progress}}>×</span><span>{children}</span></span>;
  if (kind === 'highlight') return <span style={{display: 'inline-block', padding: '2px 10px 5px', backgroundColor: color, borderBottom: `4px solid currentColor`, fontWeight: 900}}>{children}</span>;
  return <span style={{position: 'relative', display: 'inline-block'}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -5, height: 3, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}} /></span>;
};
