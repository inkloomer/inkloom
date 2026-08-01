import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const LAB = {
  white: '#f7faf9',
  mist: '#dce8e7',
  ink: '#172424',
  steel: '#526665',
  cyan: '#0b7d86',
  amber: '#f2b544',
  coral: '#e35b4f',
  glass: '#ffffff',
};

export const Reveal = ({children, delay = 0, from = 'down', style}: {
  children: ReactNode;
  delay?: number;
  from?: 'down' | 'left' | 'right' | 'none';
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 14], [0, 1], CLAMP);
  const x = from === 'left' ? -42 : from === 'right' ? 42 : 0;
  const y = from === 'down' ? 30 : 0;
  return (
    <div style={{
      opacity: progress,
      translate: `${x * (1 - progress)}px ${y * (1 - progress)}px`,
      ...style,
    }}>
      {children}
    </div>
  );
};

export const Trace = ({left, top, width, height = 4, color = LAB.cyan, delay = 0, vertical = false, dashed = false}: {
  left: number;
  top: number;
  width: number;
  height?: number;
  color?: string;
  delay?: number;
  vertical?: boolean;
  dashed?: boolean;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 18], [0, 1], CLAMP);
  return (
    <div style={{
      position: 'absolute',
      left,
      top,
      width: vertical ? height : width,
      height: vertical ? width : height,
      overflow: 'hidden',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: dashed ? 'transparent' : color,
        borderTop: dashed && !vertical ? `4px dashed ${color}` : undefined,
        borderLeft: dashed && vertical ? `4px dashed ${color}` : undefined,
        scale: vertical ? `1 ${progress}` : `${progress} 1`,
        transformOrigin: vertical ? 'center top' : 'left center',
      }} />
    </div>
  );
};

export const ArrowHead = ({left, top, color = LAB.cyan, delay = 0, direction = 'right'}: {
  left: number;
  top: number;
  color?: string;
  delay?: number;
  direction?: 'right' | 'left' | 'down';
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 10], [0, 1], CLAMP);
  return (
    <div style={{
      position: 'absolute',
      left,
      top,
      width: 0,
      height: 0,
      opacity: progress,
      scale: progress,
      ...(direction === 'right'
        ? {borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: `16px solid ${color}`}
        : direction === 'left'
          ? {borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: `16px solid ${color}`}
          : {borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: `16px solid ${color}`}),
    }} />
  );
};

export const Label = ({children, tone = 'cyan'}: {children: ReactNode; tone?: 'cyan' | 'amber' | 'coral' | 'ink'}) => (
  <span style={{
    display: 'inline-block',
    padding: '6px 12px 7px',
    backgroundColor: LAB[tone],
    color: tone === 'amber' ? LAB.ink : LAB.white,
    fontSize: 22,
    lineHeight: 1,
    fontWeight: 850,
    letterSpacing: 0,
  }}>
    {children}
  </span>
);

export const Highlight = ({children, color = LAB.amber, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block', zIndex: 0}}>
      <span style={{
        position: 'absolute',
        left: -4,
        right: -4,
        bottom: 2,
        height: '44%',
        backgroundColor: color,
        opacity: 0.55,
        scale: `${interpolate(frame, [delay, delay + 14], [0, 1], CLAMP)} 1`,
        transformOrigin: 'left center',
        zIndex: -1,
      }} />
      {children}
    </span>
  );
};

export const Underline = ({children, color = LAB.cyan, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -7,
        height: 4,
        backgroundColor: color,
        scale: `${interpolate(frame, [delay, delay + 14], [0, 1], CLAMP)} 1`,
        transformOrigin: 'left center',
      }} />
    </span>
  );
};

export const Stamp = ({children, color = LAB.coral, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 10], [0, 1], CLAMP);
  return (
    <span style={{
      display: 'inline-block',
      padding: '7px 14px 8px',
      border: `3px solid ${color}`,
      color,
      fontWeight: 900,
      opacity: progress,
      scale: progress,
      rotate: '-1deg',
    }}>
      {children}
    </span>
  );
};

export const LabCanvas = ({code, title, cue, children}: {code: string; title: string; cue: string; children: ReactNode}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: LAB.white, color: LAB.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
      {Array.from({length: 11}, (_, index) => (
        <div key={`v-${index}`} style={{position: 'absolute', left: 96 + index * 174, top: 0, bottom: 0, width: 1, backgroundColor: LAB.mist, opacity: 0.55}} />
      ))}
      {Array.from({length: 6}, (_, index) => (
        <div key={`h-${index}`} style={{position: 'absolute', left: 0, right: 0, top: 190 + index * 154, height: 1, backgroundColor: LAB.mist, opacity: 0.55}} />
      ))}
      <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 28, backgroundColor: LAB.ink}} />
      <div style={{position: 'absolute', left: 66, top: 48, fontSize: 18, fontWeight: 850, color: LAB.cyan}}>EVIDENCE LAB / {code}</div>
      <div style={{position: 'absolute', left: 66, top: 82, right: 66, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, maxWidth: 1320, fontSize: 54, lineHeight: 1.08, fontWeight: 780, letterSpacing: 0}}>{title}</h1>
        <div style={{fontSize: 22, fontWeight: 700, color: LAB.steel, paddingBottom: 5}}>{cue}</div>
      </div>
      <div style={{position: 'absolute', left: 66, right: 66, top: 164, height: 4, backgroundColor: LAB.ink, scale: `${interpolate(frame, [0, 18], [0, 1], CLAMP)} 1`, transformOrigin: 'left center'}} />
      {children}
      <div style={{position: 'absolute', left: 66, right: 66, bottom: 32, display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 750, color: LAB.steel}}>
        <span>民事诉讼法 · 专题十</span><span>READ THE RELATION, NOT THE LABEL</span>
      </div>
    </div>
  );
};
