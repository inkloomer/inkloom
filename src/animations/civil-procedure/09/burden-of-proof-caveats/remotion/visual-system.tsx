import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PAPER = '#f2e8d5';
export const PLATE = '#fbf7ee';
export const TINT = '#e5efe8';
export const INK = '#262a30';
export const WRONG = '#6e675c';
export const DRAFT = '#9b958a';
export const RED = '#c9352b';
export const GREEN = '#1f7a5c';

export const PLAYER_CONTROL_SAFE_BOTTOM = 170;

export const CutIn = ({children, delay = 0, direction = 'left', style}: {children: ReactNode; delay?: number; direction?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  const offset = direction === 'up' ? `0 ${42 * (1 - progress)}px` : `${(direction === 'left' ? -1 : 1) * 64 * (1 - progress)}px 0`;
  return <div style={{opacity: progress, translate: offset, ...style}}>{children}</div>;
};

export const Slam = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 9], [0, 1], CLAMP);
  return <div style={{scale: `${2.3 - 1.3 * progress}`, opacity: progress, ...style}}>{children}</div>;
};

export const Sweep = ({children, color = GREEN, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 10], [0, 1], CLAMP);
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -5, height: 6, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

export const Highlight = ({children, color = GREEN, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  return (
    <span style={{position: 'relative', display: 'inline-block', zIndex: 0}}>
      <span style={{position: 'absolute', left: -5, right: -5, bottom: 1, height: '52%', backgroundColor: color, opacity: 0.82, scale: `${progress} 1`, transformOrigin: 'left center', zIndex: -1}} />
      {children}
    </span>
  );
};

export const Tag = ({children, color = RED, tone = 'paper'}: {children: ReactNode; color?: string; tone?: 'paper' | 'ink'}) => (
  <span style={{display: 'inline-block', padding: '6px 14px 7px', backgroundColor: color, color: tone === 'paper' ? PAPER : INK, fontWeight: 950}}>{children}</span>
);

export const ErrataCanvas = ({code, eyebrow, title, children}: {code: string; eyebrow: string; title: string; children: ReactNode}) => {
  const frame = useCurrentFrame();
  const seal = interpolate(frame, [0, 9], [0, 1], CLAMP);
  const titleIn = interpolate(frame, [8, 22], [0, 1], CLAMP);
  const rule = interpolate(frame, [16, 26], [0, 1], CLAMP);
  return (
    <div data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: PAPER, color: INK, fontFamily: 'var(--inkloom-animation-body)'}}>
      <Slam delay={0} style={{position: 'absolute', left: 68, top: 40, width: 128, height: 128, backgroundColor: RED, color: PAPER, border: `6px solid ${INK}`, rotate: '-4deg', display: 'grid', placeItems: 'center', fontSize: 42, fontWeight: 950, opacity: seal}}>
        勘误
      </Slam>
      <div style={{position: 'absolute', left: 228, top: 44, fontSize: 19, fontWeight: 900, letterSpacing: 2, color: RED}}>{eyebrow}</div>
      <h1 style={{position: 'absolute', left: 228, top: 84, right: 68, margin: 0, fontFamily: 'var(--inkloom-animation-title)', fontSize: 54, lineHeight: 1.1, fontWeight: 950, letterSpacing: 0, opacity: titleIn, translate: `0 ${18 * (1 - titleIn)}px`}}>{title}</h1>
      <Slam delay={2} style={{position: 'absolute', right: 68, top: 44, width: 92, height: 92, backgroundColor: RED, color: PAPER, border: `5px solid ${INK}`, rotate: '2deg', display: 'grid', placeItems: 'center', fontSize: 34, fontWeight: 950}}>{code}</Slam>
      <div style={{position: 'absolute', left: 68, right: 68, top: 200, height: 6, backgroundColor: INK, scale: `${rule} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 68, right: 68, top: 226, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>
        {children}
      </div>
      <div style={{position: 'absolute', left: 68, right: 68, bottom: 48, height: 4, backgroundColor: INK}} />
      <div style={{position: 'absolute', right: 68, bottom: 16, fontSize: 18, fontWeight: 900}}>CIVIL PROCEDURE / 09</div>
    </div>
  );
};
