import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PAPER = '#f4efe3';
export const WHITE = '#fffaf0';
export const INK = '#172433';
export const NAVY = '#1d344a';
export const CYAN = '#1ca6a8';
export const AMBER = '#e9b74a';
export const CORAL = '#cf5b4e';
export const MIST = '#dfe8e6';
export const MUTED = '#687585';
export const PLAYER_CONTROL_SAFE_BOTTOM = 170;

type Direction = 'left' | 'right' | 'up' | 'down' | 'none';

export const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 20,
  style,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    ...CLAMP,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const offset = {
    down: `0px -${36 * (1 - progress)}px`,
    left: `${46 * (1 - progress)}px 0px`,
    none: '0px 0px',
    right: `-${46 * (1 - progress)}px 0px`,
    up: `0px ${36 * (1 - progress)}px`,
  }[direction];
  return <div style={{...style, opacity: progress, translate: offset}}>{children}</div>;
};

export const Stamp = ({children, color = AMBER, delay = 0, style}: {children: ReactNode; color?: string; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], {
    ...CLAMP,
    easing: Easing.bezier(0.2, 0.9, 0.25, 1),
  });
  return <div style={{...style, opacity: progress, scale: `${0.82 + 0.18 * progress}`, rotate: `${-2 + 2 * progress}deg`}}><span style={{display: 'inline-block', border: `4px solid ${color}`, color, padding: '8px 14px 9px', fontWeight: 950}}>{children}</span></div>;
};

export const Marker = ({children, color = AMBER, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      <span style={{position: 'absolute', left: -5, right: -5, bottom: 1, height: '45%', backgroundColor: color, opacity: 0.6, scale: `${progress} 1`, transformOrigin: 'left center', zIndex: 0}} />
      <span style={{position: 'relative', zIndex: 1}}>{children}</span>
    </span>
  );
};

export const Underline = ({children, color = CYAN, delay = 0}: {children: ReactNode; color?: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], CLAMP);
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -6, height: 5, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

export const Label = ({children, color = INK, inverse = false}: {children: ReactNode; color?: string; inverse?: boolean}) => (
  <span style={{display: 'inline-block', padding: '6px 12px 7px', backgroundColor: color, color: inverse ? PAPER : WHITE, fontSize: 18, fontWeight: 950, letterSpacing: 1}}>{children}</span>
);

export const ArrowRail = ({color = CYAN, delay = 0, left, top, width}: {color?: string; delay?: number; left: number; top: number; width: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 16], [0, 1], CLAMP);
  return (
    <div style={{position: 'absolute', left, top, width, height: 46}}>
      <div style={{position: 'absolute', left: 0, top: 20, width, height: 5, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', right: -3, top: 8, width: 25, height: 25, borderTop: `5px solid ${color}`, borderRight: `5px solid ${color}`, rotate: '45deg', opacity: progress}} />
    </div>
  );
};

export const IconNode = ({
  color = CYAN,
  delay = 0,
  detail,
  icon: Icon,
  label,
  style,
}: {
  color?: string;
  delay?: number;
  detail: string;
  icon: LucideIcon;
  label: string;
  style?: CSSProperties;
}) => (
  <Reveal delay={delay} style={{...style, border: `5px solid ${color}`, backgroundColor: WHITE, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
    <Icon size={54} strokeWidth={3} color={color} />
    <div>
      <div style={{fontSize: 31, fontWeight: 950, color: INK}}>{label}</div>
      <div style={{marginTop: 7, fontSize: 22, lineHeight: 1.35, fontWeight: 850, color: MUTED}}>{detail}</div>
    </div>
  </Reveal>
);

export const DocketCanvas = ({code, kicker, title, children}: {code: string; kicker: string; title: string; children: ReactNode}) => {
  const frame = useCurrentFrame();
  const mark = interpolate(frame, [0, 12], [0, 1], CLAMP);
  const titleIn = interpolate(frame, [6, 24], [0, 1], {...CLAMP, easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const rule = interpolate(frame, [16, 30], [0, 1], CLAMP);
  return (
    <div data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: PAPER, color: INK, fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', left: 68, top: 34, width: 118, height: 118, backgroundColor: NAVY, color: AMBER, border: `6px solid ${INK}`, display: 'grid', placeItems: 'center', fontSize: 32, fontWeight: 950, opacity: mark, scale: `${0.82 + 0.18 * mark}`, rotate: '-3deg'}}>PROOF<br />09</div>
      <div style={{position: 'absolute', left: 218, top: 40, color: CORAL, fontSize: 18, fontWeight: 950, letterSpacing: 2}}>{kicker}</div>
      <h1 style={{position: 'absolute', left: 218, right: 170, top: 74, margin: 0, fontFamily: 'var(--inkloom-animation-title)', fontSize: 52, lineHeight: 1.1, fontWeight: 950, letterSpacing: 0, opacity: titleIn, translate: `0px ${20 * (1 - titleIn)}px`}}>{title}</h1>
      <div style={{position: 'absolute', right: 68, top: 44, width: 86, height: 86, border: `5px solid ${CORAL}`, color: CORAL, display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 950, opacity: mark, rotate: '2deg'}}>{code}</div>
      <div style={{position: 'absolute', left: 68, right: 68, top: 182, height: 6, backgroundColor: INK, scale: `${rule} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 68, right: 68, top: 210, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
      <div style={{position: 'absolute', left: 68, right: 68, bottom: 48, height: 4, backgroundColor: INK}} />
      <div style={{position: 'absolute', right: 68, bottom: 16, color: MUTED, fontSize: 17, fontWeight: 900, letterSpacing: 1}}>CIVIL PROCEDURE / 09 / PROOF</div>
    </div>
  );
};
