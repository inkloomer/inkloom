import type {CSSProperties, ReactNode} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const COLORS = {
  paper: '#F2EEE3',
  paperDeep: '#DDD5C5',
  ink: '#17252B',
  navy: '#244B61',
  teal: '#0B8F78',
  coral: '#D95A3C',
  yellow: '#D8B53F',
  graphite: '#827D73',
  white: '#FFFCF4',
} as const;

export const Canvas = ({children, scene, title}: {children: ReactNode; scene: string; title: string}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', color: COLORS.ink, backgroundColor: COLORS.paper, backgroundImage: 'linear-gradient(rgba(23,37,43,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(23,37,43,.055) 1px, transparent 1px)', backgroundSize: '48px 48px', fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', left: 72, top: 48, fontSize: 20, fontWeight: 900, color: COLORS.navy}}>LEGAL IDENTITY / {scene}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 96, height: 3, backgroundColor: COLORS.ink}} />
    <h1 style={{fontFamily: 'var(--inkloom-animation-title)', position: 'absolute', left: 72, top: 122, margin: 0, fontSize: 58, lineHeight: 1.1, letterSpacing: 0}}>{title}</h1>
    {children}
  </div>
);

export const Reveal = ({children, delay = 0, from = 'up', style}: {children: ReactNode; delay?: number; from?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const origin = from === 'left' ? '-52px 0px' : from === 'right' ? '52px 0px' : '0px 42px';
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 16], [0, 1], {...CLAMP, easing: Easing.bezier(.16, 1, .3, 1)}), translate: interpolate(frame, [delay, delay + 20], [origin, '0px 0px'], {...CLAMP, easing: Easing.bezier(.16, 1, .3, 1)})}}>{children}</div>;
};

export const CaptionRail = ({accent, children}: {accent: string; children: ReactNode}) => (
  <div style={{position: 'absolute', left: 72, bottom: 54, width: 1250, minHeight: 82, display: 'flex', alignItems: 'center', padding: '0 28px', borderLeft: `18px solid ${accent}`, backgroundColor: COLORS.ink, color: COLORS.white, fontSize: 29, lineHeight: 1.35, fontWeight: 900}}>{children}</div>
);

export const TokenLabel = ({accent, children, icon}: {accent: string; children: ReactNode; icon: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 14, color: accent, fontSize: 28, fontWeight: 900}}>{icon}<span>{children}</span></div>
);

export const Mark = ({children, color, delay = 0, kind}: {children: ReactNode; color: string; delay?: number; kind: 'highlight' | 'negation' | 'underline'}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 18], [0, 1], CLAMP);
  if (kind === 'negation') return <span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><span style={{display: 'inline-grid', width: 30, height: 30, placeItems: 'center', border: `2px solid ${color}`, color, fontSize: 24, lineHeight: 1, opacity: progress}}>×</span><span>{children}</span></span>;
  if (kind === 'highlight') return <span style={{display: 'inline-block', padding: '2px 10px 5px', backgroundColor: color, borderBottom: `4px solid currentColor`, fontWeight: 900}}>{children}</span>;
  return <span style={{position: 'relative', display: 'inline-block'}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -5, height: 3, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}} /></span>;
};
