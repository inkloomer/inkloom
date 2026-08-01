import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const REGISTRY = {
  field: '#eef3ef',
  paper: '#fffef9',
  forest: '#173d35',
  ink: '#202a28',
  sage: '#78958a',
  brass: '#c5a24d',
  seal: '#c84037',
  navy: '#253c59',
  white: '#ffffff',
};

export const Reveal = ({children, delay = 0, from = 'down', style}: {
  children: ReactNode;
  delay?: number;
  from?: 'down' | 'left' | 'right' | 'none';
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 16], [0, 1], CLAMP);
  const x = from === 'left' ? -46 : from === 'right' ? 46 : 0;
  const y = from === 'down' ? 34 : 0;
  return (
    <div style={{opacity: progress, translate: `${x * (1 - progress)}px ${y * (1 - progress)}px`, ...style}}>
      {children}
    </div>
  );
};

export const RuleLine = ({left, top, width, color = REGISTRY.forest, delay = 0, vertical = false}: {
  left: number;
  top: number;
  width: number;
  color?: string;
  delay?: number;
  vertical?: boolean;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 18], [0, 1], CLAMP);
  return <div style={{position: 'absolute', left, top, width: vertical ? 4 : width, height: vertical ? width : 4, backgroundColor: color, scale: vertical ? `1 ${progress}` : `${progress} 1`, transformOrigin: vertical ? 'center top' : 'left center'}} />;
};

export const ArrowHead = ({left, top, color = REGISTRY.forest, delay = 0, direction = 'right'}: {
  left: number;
  top: number;
  color?: string;
  delay?: number;
  direction?: 'right' | 'down';
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 10], [0, 1], CLAMP);
  return <div style={{position: 'absolute', left, top, width: 0, height: 0, opacity: progress, scale: progress, ...(direction === 'right' ? {borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: `15px solid ${color}`} : {borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: `15px solid ${color}`})}} />;
};

export const RegistryLabel = ({children, tone = 'forest'}: {children: ReactNode; tone?: 'forest' | 'navy' | 'seal' | 'brass'}) => (
  <span style={{display: 'inline-block', padding: '7px 13px 8px', backgroundColor: REGISTRY[tone], color: tone === 'brass' ? REGISTRY.ink : REGISTRY.white, fontSize: 22, lineHeight: 1, fontWeight: 850}}>{children}</span>
);

export const Underline = ({children, color = REGISTRY.seal, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -6, height: 3, backgroundColor: color, scale: `${interpolate(frame, [delay, delay + 14], [0, 1], CLAMP)} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

export const Highlight = ({children, color = REGISTRY.brass, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block', zIndex: 0}}>
      <span style={{position: 'absolute', left: -4, right: -4, bottom: 2, height: '46%', backgroundColor: color, opacity: 0.5, scale: `${interpolate(frame, [delay, delay + 14], [0, 1], CLAMP)} 1`, transformOrigin: 'left center', zIndex: -1}} />
      {children}
    </span>
  );
};

export const Seal = ({children, color = REGISTRY.seal, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 10], [0, 1], CLAMP);
  return <span style={{display: 'inline-block', padding: '8px 14px 9px', border: `4px double ${color}`, color, fontWeight: 900, opacity: progress, scale: progress, rotate: '-1deg'}}>{children}</span>;
};

export const RegistryCanvas = ({code, title, folio, children}: {code: string; title: string; folio: string; children: ReactNode}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: REGISTRY.field, color: REGISTRY.ink, fontFamily: '"Noto Serif SC", "Microsoft YaHei", serif'}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 26, backgroundColor: REGISTRY.forest}} />
      <div style={{position: 'absolute', left: 54, top: 62, bottom: 54, width: 10, backgroundColor: REGISTRY.brass}} />
      <div style={{position: 'absolute', left: 94, top: 50, fontFamily: '"Segoe UI", sans-serif', fontSize: 18, fontWeight: 800, color: REGISTRY.forest}}>DOCUMENT REGISTRY · FOLIO {folio}</div>
      <div style={{position: 'absolute', left: 94, right: 80, top: 86, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <h1 style={{margin: 0, maxWidth: 1360, fontSize: 54, lineHeight: 1.1, fontWeight: 850, letterSpacing: 0}}>{title}</h1>
        <div style={{fontFamily: '"Segoe UI", sans-serif', fontSize: 22, fontWeight: 750, color: REGISTRY.sage}}>RULE {code} / 03</div>
      </div>
      <div style={{position: 'absolute', left: 94, right: 80, top: 166, height: 3, backgroundColor: REGISTRY.forest, scale: `${interpolate(frame, [0, 18], [0, 1], CLAMP)} 1`, transformOrigin: 'left center'}} />
      {children}
      <div style={{position: 'absolute', left: 94, right: 80, bottom: 30, display: 'flex', justifyContent: 'space-between', fontFamily: '"Segoe UI", sans-serif', fontSize: 17, fontWeight: 750, color: REGISTRY.sage}}>
        <span>民事诉讼法 · 专题十</span><span>ORIGINAL · AUTHENTICITY · PRODUCTION</span>
      </div>
    </div>
  );
};
