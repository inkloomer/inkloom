import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {ArrowRight, MapPin} from 'lucide-react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {accentColor, accentSoftColor, PALETTE, toSourceFrame, type Accent} from './storyboard';

export const FONT_FAMILY = 'var(--inkloom-animation-body)';
export const MONO = 'var(--inkloom-animation-mono)';
export const ENTER_EASING = Easing.bezier(0.16, 1, 0.3, 1);

export const baseTextStyle: CSSProperties = {
  color: PALETTE.bone,
  fontFamily: 'var(--inkloom-animation-body)',
  letterSpacing: 0,
};

export const RelationBackdrop = () => (
  <>
    <div style={{position: 'absolute', inset: 42, border: `1px solid ${PALETTE.grid}`, backgroundColor: PALETTE.background}} />
    {[206, 536, 866].map((top) => (
      <div key={top} style={{position: 'absolute', left: 42, right: 42, top, height: 1, backgroundColor: PALETTE.grid, opacity: 0.62}} />
    ))}
    {[320, 640, 960, 1280, 1600].map((left) => (
      <div key={left} style={{position: 'absolute', left, top: 42, width: 1, height: 28, backgroundColor: PALETTE.muted, opacity: 0.65}} />
    ))}
    {[
      {left: 58, top: 58, borderWidth: '2px 0 0 2px'},
      {right: 58, top: 58, borderWidth: '2px 2px 0 0'},
      {left: 58, bottom: 58, borderWidth: '0 0 2px 2px'},
      {right: 58, bottom: 58, borderWidth: '0 2px 2px 0'},
    ].map((style, index) => (
      <div key={index} style={{position: 'absolute', width: 30, height: 30, borderColor: PALETTE.mint, borderStyle: 'solid', ...style}} />
    ))}
    <div style={{position: 'absolute', left: 76, top: 70, color: PALETTE.muted, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 18, letterSpacing: 2}}>CASE 07 / PARTY POSITIONING</div>
    <div style={{position: 'absolute', right: 76, top: 70, color: PALETTE.yellow, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 17}}>RELATION MAP / CIVIL PROCEDURE</div>
  </>
);

export const MaskedReveal = ({children, delay = 0, duration = 28, style}: {readonly children: ReactNode; readonly delay?: number; readonly duration?: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const hidden = interpolate(frame, [delay, delay + duration], [100, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{...style, clipPath: `inset(0 ${hidden}% 0 0)`}}>{children}</div>;
};

export const ImpactReveal = ({children, delay, style}: {readonly children: ReactNode; readonly delay: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const {fps} = useVideoConfig();
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 4], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), scale: spring({frame: frame - delay, fps, config: {damping: 18, mass: 0.7, stiffness: 160}, durationInFrames: 28})}}>{children}</div>;
};

export const Keyword = ({children, accent = 'coral'}: {readonly children: ReactNode; readonly accent?: Accent}) => (
  <span style={{display: 'inline-block', padding: '2px 9px 4px', color: accentColor(accent), backgroundColor: accentSoftColor(accent), borderBottom: `3px solid ${accentColor(accent)}`, fontWeight: 900}}>{children}</span>
);

export const RelationHeading = ({index, eyebrow, title, accent, placement = 'top-left'}: {readonly index: string; readonly eyebrow: string; readonly title: string; readonly accent: Accent; readonly placement?: 'left-rail' | 'top-left' | 'top-right'}) => {
  if (placement === 'left-rail') return <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: 58, top: 250}}><div style={{width: 96, height: 540, boxSizing: 'border-box', padding: '18px 14px', border: `2px solid ${accentColor(accent)}`, backgroundColor: PALETTE.panel}}><div style={{color: accentColor(accent), fontFamily: 'var(--inkloom-animation-mono)', fontSize: 25, fontWeight: 900, textAlign: 'center'}}>{index}</div><div style={{margin: '18px auto', width: 34, height: 2, backgroundColor: accentColor(accent)}} /><div style={{color: PALETTE.muted, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 14, textAlign: 'center', writingMode: 'vertical-rl'}}>{eyebrow.toUpperCase()}</div><div style={{...baseTextStyle, margin: '22px auto 0', fontSize: 35, fontWeight: 900, lineHeight: 1.12, writingMode: 'vertical-rl'}}>{title}</div></div></MaskedReveal>;
  const right = placement === 'top-right';
  return <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: right ? undefined : 94, right: right ? 94 : undefined, top: 108}}><div style={{display: 'flex', flexDirection: right ? 'row-reverse' : 'row', alignItems: 'center', gap: 22, textAlign: right ? 'right' : 'left'}}><div style={{display: 'grid', width: 74, height: 74, placeItems: 'center', border: `2px solid ${accentColor(accent)}`, color: accentColor(accent), fontFamily: 'var(--inkloom-animation-mono)', fontSize: 25, fontWeight: 800}}>{index}</div><div><div style={{...baseTextStyle, color: accentColor(accent), fontFamily: 'var(--inkloom-animation-mono)', fontSize: 17, letterSpacing: 2}}>{eyebrow.toUpperCase()}</div><div style={{...baseTextStyle, marginTop: 8, fontSize: 52, fontWeight: 900, lineHeight: 1}}>{title}</div></div></div></MaskedReveal>;
};

export const PartyNode = ({icon: Icon, label, note, accent, style, active = false}: {readonly icon: LucideIcon; readonly label: string; readonly note?: string; readonly accent: Accent; readonly style?: CSSProperties; readonly active?: boolean}) => (
  <div style={{...style, position: 'absolute', width: 460, minHeight: 176, boxSizing: 'border-box', padding: '25px 30px', display: 'flex', alignItems: 'center', gap: 25, backgroundColor: active ? accentSoftColor(accent) : PALETTE.panel, border: `1px solid ${accentColor(accent)}`, boxShadow: active ? `0 0 0 5px ${accentColor(accent)}33` : 'none'}}>
    <div style={{display: 'grid', width: 78, height: 78, flex: '0 0 auto', placeItems: 'center', color: accentColor(accent), border: `1px solid ${accentColor(accent)}`}}><Icon size={44} strokeWidth={1.8} /></div>
    <div>
      <div style={{...baseTextStyle, fontSize: 40, fontWeight: 900}}>{label}</div>
      {note ? <div style={{marginTop: 8, color: PALETTE.muted, fontSize: 24, lineHeight: 1.25}}>{note}</div> : null}
    </div>
  </div>
);

export const Pin = ({left, top, color = PALETTE.coral, label, fontSize = 22}: {readonly left: number; readonly top: number; readonly color?: string; readonly label?: string; readonly fontSize?: number}) => (
  <div style={{position: 'absolute', left, top, display: 'flex', alignItems: 'center', gap: 8, color, fontFamily: 'var(--inkloom-animation-mono)', fontSize}}><div style={{width: 14, height: 14, borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 0 5px ${color}33`}} />{label ? <span>{label}</span> : null}</div>
);

export const RelationArrow = ({left, top, width, progress, accent, label}: {readonly left: number; readonly top: number; readonly width: number; readonly progress: number; readonly accent: Accent; readonly label?: string}) => (
  <div style={{position: 'absolute', left, top, width, height: 60}}>
    {label ? <div style={{position: 'absolute', left: 0, top: -31, color: accentColor(accent), fontFamily: 'var(--inkloom-animation-meta)', fontSize: 22, opacity: progress}}>{label}</div> : null}
    <div style={{position: 'absolute', left: 0, top: 25, width, height: 3, backgroundColor: accentColor(accent), scale: `${progress} 1`, transformOrigin: 'left center'}} />
    <ArrowRight size={32} strokeWidth={2} style={{position: 'absolute', right: -10, top: 10, color: accentColor(accent), opacity: interpolate(progress, [0.82, 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
  </div>
);

export const RelationAnchor = ({left, top, label, accent}: {readonly left: number; readonly top: number; readonly label: string; readonly accent: Accent}) => (
  <div style={{position: 'absolute', left, top, display: 'flex', alignItems: 'center', gap: 9, color: accentColor(accent), fontFamily: 'var(--inkloom-animation-meta)', fontSize: 23, fontWeight: 700}}><MapPin size={25} strokeWidth={1.8} /><span>{label}</span></div>
);
