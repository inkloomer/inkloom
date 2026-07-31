import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {ArrowRight, Check, CircleAlert, Stamp, X} from 'lucide-react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {accentColor, accentSoftColor, PALETTE, toSourceFrame, type Accent} from './storyboard';

export const FONT_FAMILY = '"Arial Narrow", "Microsoft YaHei", sans-serif';
export const MONO = '"Consolas", "SFMono-Regular", monospace';
export const ENTER_EASING = Easing.bezier(0.16, 1, 0.3, 1);

export const baseTextStyle: CSSProperties = {color: PALETTE.ink, fontFamily: FONT_FAMILY, letterSpacing: 0};

export const PrintBackdrop = ({frame}: {readonly frame: number}) => {
  const registration = interpolate(frame, [0, 240], [-120, 2040], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.linear});
  return <>
    <div style={{position: 'absolute', inset: 42, backgroundColor: PALETTE.background, border: `1px solid ${PALETTE.line}`}} />
    <div style={{position: 'absolute', left: registration, top: 42, width: 2, height: 996, backgroundColor: PALETTE.cyan, opacity: 0.25}} />
    {[[70, 70], [1810, 70], [70, 990], [1810, 990]].map(([left, top]) => <div key={`${left}-${top}`} style={{position: 'absolute', left, top, width: 42, height: 42, border: `2px solid ${PALETTE.line}`}}><div style={{position: 'absolute', left: 19, top: -2, width: 2, height: 42, backgroundColor: PALETTE.line}} /><div style={{position: 'absolute', left: -2, top: 19, width: 42, height: 2, backgroundColor: PALETTE.line}} /></div>)}
    <div style={{position: 'absolute', left: 96, top: 76, color: PALETTE.violet, fontFamily: MONO, fontSize: 18, letterSpacing: 2}}>PRINT SHOP / REMEDY 07</div>
    <div style={{position: 'absolute', right: 96, top: 76, color: PALETTE.vermilion, fontFamily: MONO, fontSize: 17}}>PLATE REGISTERED</div>
  </>;
};

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

export const Keyword = ({children, accent = 'vermilion'}: {readonly children: ReactNode; readonly accent?: Accent}) => <span style={{display: 'inline-block', padding: '2px 9px 4px', color: accentColor(accent), backgroundColor: accentSoftColor(accent), borderBottom: `3px solid ${accentColor(accent)}`, fontWeight: 900}}>{children}</span>;

export const PrintHeading = ({index, eyebrow, title, accent, placement = 'top-left'}: {readonly index: string; readonly eyebrow: string; readonly title: string; readonly accent: Accent; readonly placement?: 'left-rail' | 'right-rail' | 'top-left' | 'top-right'}) => {
  if (placement === 'left-rail' || placement === 'right-rail') { const right = placement === 'right-rail'; return <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: right ? undefined : 58, right: right ? 58 : undefined, top: 250}}><div style={{width: 98, height: 545, boxSizing: 'border-box', padding: '18px 14px', border: `3px solid ${accentColor(accent)}`, backgroundColor: PALETTE.sheet}}><div style={{color: accentColor(accent), fontFamily: MONO, fontSize: 24, fontWeight: 900, textAlign: 'center'}}>{index}</div><div style={{margin: '18px auto', width: 36, height: 3, backgroundColor: accentColor(accent)}} /><div style={{color: PALETTE.muted, fontFamily: MONO, fontSize: 14, writingMode: 'vertical-rl'}}>{eyebrow.toUpperCase()}</div><div style={{margin: '22px auto 0', color: PALETTE.ink, fontSize: 35, fontWeight: 900, lineHeight: 1.12, writingMode: 'vertical-rl'}}>{title}</div></div></MaskedReveal>; }
  const right = placement === 'top-right';
  return <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: right ? undefined : 108, right: right ? 108 : undefined, top: 116}}><div style={{display: 'flex', flexDirection: right ? 'row-reverse' : 'row', alignItems: 'center', gap: 20, textAlign: right ? 'right' : 'left'}}><div style={{display: 'grid', width: 70, height: 70, placeItems: 'center', border: `3px solid ${accentColor(accent)}`, color: accentColor(accent), fontFamily: MONO, fontSize: 23, fontWeight: 900}}>{index}</div><div><div style={{color: accentColor(accent), fontFamily: MONO, fontSize: 17, letterSpacing: 2}}>{eyebrow.toUpperCase()}</div><div style={{marginTop: 7, color: PALETTE.ink, fontSize: 52, fontWeight: 900, lineHeight: 1}}>{title}</div></div></div></MaskedReveal>;
};

export const Plate = ({icon: Icon, label, detail, accent, left, top, opacity = 1, rotate = '0deg', flow = false}: {readonly icon: LucideIcon; readonly label: string; readonly detail?: string; readonly accent: Accent; readonly left: number; readonly top: number; readonly opacity?: number; readonly rotate?: string; readonly flow?: boolean}) => (
  <div style={{position: flow ? 'relative' : 'absolute', left: flow ? undefined : left, top: flow ? undefined : top, width: 430, minHeight: 220, boxSizing: 'border-box', padding: '28px 30px', opacity, rotate, backgroundColor: PALETTE.sheet, border: `2px solid ${accentColor(accent)}`, boxShadow: '8px 10px 0 rgba(42, 37, 31, 0.11)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 14, color: accentColor(accent)}}><Icon size={34} strokeWidth={1.8} /><span style={{fontFamily: MONO, fontSize: 15, letterSpacing: 1}}>PLATE / {label}</span></div>
    {detail ? <div style={{marginTop: 26, color: PALETTE.ink, fontSize: 34, fontWeight: 900, lineHeight: 1.15}}>{detail}</div> : null}
    <div style={{position: 'absolute', left: 30, right: 30, bottom: 22, height: 3, backgroundColor: accentColor(accent), opacity: 0.6}} />
  </div>
);

export const PrintArrow = ({left, top, width, progress, accent, label}: {readonly left: number; readonly top: number; readonly width: number; readonly progress: number; readonly accent: Accent; readonly label?: string}) => <div style={{position: 'absolute', left, top, width, height: 64}}>{label ? <div style={{position: 'absolute', left: 0, top: -32, color: accentColor(accent), fontFamily: MONO, fontSize: 22, fontWeight: 700, opacity: progress}}>{label}</div> : null}<div style={{position: 'absolute', left: 0, top: 28, width, height: 4, backgroundColor: accentColor(accent), scale: `${progress} 1`, transformOrigin: 'left center'}} /><ArrowRight size={34} strokeWidth={2} style={{position: 'absolute', right: -10, top: 11, color: accentColor(accent), opacity: interpolate(progress, [0.8, 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} /></div>;

export const InkStamp = ({left, top, label, accent, progress, icon = 'check'}: {readonly left: number; readonly top: number; readonly label: string; readonly accent: Accent; readonly progress: number; readonly icon?: 'check' | 'x' | 'alert'}) => <div style={{position: 'absolute', left, top, width: 220, height: 92, display: 'grid', placeItems: 'center', border: `7px double ${accentColor(accent)}`, color: accentColor(accent), fontSize: 28, fontWeight: 900, opacity: progress, scale: interpolate(progress, [0, 1], [1.35, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING}), rotate: '-5deg'}}>{icon === 'check' ? <Check size={27} /> : icon === 'x' ? <X size={27} /> : <CircleAlert size={27} />}<span style={{marginLeft: 7}}>{label}</span></div>;

export const CropText = ({children, accent = 'violet'}: {readonly children: ReactNode; readonly accent?: Accent}) => <div style={{color: accentColor(accent), fontFamily: MONO, fontSize: 16, letterSpacing: 1}}>{children}</div>;

export const PaperDocument = ({left, top, progress, title, subtitle, width = 620, height = 450}: {readonly left: number; readonly top: number; readonly progress: number; readonly title: string; readonly subtitle: string; readonly width?: number; readonly height?: number}) => <div style={{position: 'absolute', left, top, width, height, padding: 42, boxSizing: 'border-box', backgroundColor: PALETTE.sheet, border: `2px solid ${PALETTE.ink}`, boxShadow: '13px 16px 0 rgba(42, 37, 31, 0.16)', opacity: progress, translate: interpolate(progress, [0, 1], ['0px 50px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}}><CropText>COURT DOCUMENT / FINAL</CropText><div style={{marginTop: 30, color: PALETTE.ink, fontSize: 48, fontWeight: 900}}>{title}</div><div style={{marginTop: 16, color: PALETTE.muted, fontSize: 25}}>{subtitle}</div>{[0, 1, 2, 3].map((line) => <div key={line} style={{marginTop: 25, width: `${90 - line * 12}%`, height: 4, backgroundColor: PALETTE.line}} />)}</div>;

export const PersistentTrack = ({frame, totalFrames}: {readonly frame: number; readonly totalFrames: number}) => <div style={{position: 'absolute', left: 108, right: 108, bottom: 72, height: 4, backgroundColor: PALETTE.line}}><div style={{width: `${interpolate(frame, [0, totalFrames - 1], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, height: '100%', backgroundColor: PALETTE.vermilion}} /></div>;
