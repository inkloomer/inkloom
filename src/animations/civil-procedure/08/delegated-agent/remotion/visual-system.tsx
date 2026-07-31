import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {ArrowRight, Ban} from 'lucide-react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {accentColor, accentSoftColor, PALETTE, toSourceFrame, type Accent} from './storyboard';

export const FONT_FAMILY = '"Arial Narrow", "Microsoft YaHei", sans-serif';
export const MONO = '"Consolas", "SFMono-Regular", monospace';
export const ENTER_EASING = Easing.bezier(0.16, 1, 0.3, 1);

export const baseTextStyle: CSSProperties = {
  color: PALETTE.ink,
  fontFamily: FONT_FAMILY,
  letterSpacing: 0,
};

export const ContractBackdrop = ({frame}: {readonly frame: number}) => {
  const rule = interpolate(frame, [0, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.linear});
  return (
    <>
      <div style={{position: 'absolute', inset: 42, border: `1px solid ${PALETTE.line}`, backgroundColor: PALETTE.background}} />
      {[164, 300, 436, 572, 708, 844, 980].map((left) => (
        <div key={left} style={{position: 'absolute', left, top: 58, width: 1, height: 964, backgroundColor: PALETTE.line, opacity: 0.4}} />
      ))}
      {[200, 340, 480, 620, 760, 900].map((top) => (
        <div key={top} style={{position: 'absolute', left: 58, right: 58, top, height: 1, backgroundColor: PALETTE.line, opacity: 0.4}} />
      ))}
      {[
        {left: 58, top: 58, borderLeft: `3px solid ${PALETTE.seal}`, borderTop: `3px solid ${PALETTE.seal}`},
        {left: 1856, top: 58, borderRight: `3px solid ${PALETTE.seal}`, borderTop: `3px solid ${PALETTE.seal}`},
        {left: 58, top: 1000, borderLeft: `3px solid ${PALETTE.seal}`, borderBottom: `3px solid ${PALETTE.seal}`},
        {left: 1856, top: 1000, borderRight: `3px solid ${PALETTE.seal}`, borderBottom: `3px solid ${PALETTE.seal}`},
      ].map((corner, index) => (
        <div key={index} style={{position: 'absolute', width: 26, height: 26, ...corner}} />
      ))}
      <div style={{position: 'absolute', left: 88, top: 78, color: PALETTE.muted, fontFamily: MONO, fontSize: 17, letterSpacing: 2}}>POWER OF ATTORNEY / CASE 08-B</div>
      <div style={{position: 'absolute', right: 88, top: 78, color: PALETTE.mint, fontFamily: MONO, fontSize: 16}}>委托代理 · 授权范围</div>
      <div style={{position: 'absolute', left: 88, right: 88, bottom: 66, height: 4, backgroundColor: PALETTE.line, scale: `${rule} 1`, transformOrigin: 'left center'}} />
    </>
  );
};

export const InkReveal = ({children, delay = 0, duration = 26, style}: {readonly children: ReactNode; readonly delay?: number; readonly duration?: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const hidden = interpolate(frame, [delay, delay + duration], [100, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{...style, clipPath: `inset(0 ${hidden}% 0 0)`}}>{children}</div>;
};

export const SoftReveal = ({children, delay, duration = 26, distance = 26, style}: {readonly children: ReactNode; readonly delay: number; readonly duration?: number; readonly distance?: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [delay, delay + duration], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{...style, opacity: p, translate: `0px ${(1 - p) * distance}px`}}>{children}</div>;
};

export const ImpactReveal = ({children, delay, style}: {readonly children: ReactNode; readonly delay: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const {fps} = useVideoConfig();
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 4], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), scale: spring({frame: frame - delay, fps, config: {damping: 15, mass: 0.8, stiffness: 200}, durationInFrames: 26})}}>{children}</div>;
};

export const ContractHeading = ({index, eyebrow, title, accent}: {readonly index: string; readonly eyebrow: string; readonly title: string; readonly accent: Accent}) => (
  <InkReveal delay={4} duration={22} style={{position: 'absolute', left: 104, top: 118}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
      <div style={{display: 'grid', width: 72, height: 72, placeItems: 'center', color: accentColor(accent), border: `2px solid ${accentColor(accent)}`, fontFamily: MONO, fontSize: 24, fontWeight: 800}}>{index}</div>
      <div>
        <div style={{...baseTextStyle, color: accentColor(accent), fontFamily: MONO, fontSize: 17, letterSpacing: 2}}>{eyebrow.toUpperCase()}</div>
        <div style={{...baseTextStyle, marginTop: 8, fontSize: 56, fontWeight: 800, lineHeight: 1}}>{title}</div>
      </div>
    </div>
  </InkReveal>
);

export const ClausePanel = ({icon: Icon, header, headerAccent, children, style}: {readonly icon: LucideIcon; readonly header: string; readonly headerAccent: Accent; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{...style, position: 'absolute', backgroundColor: PALETTE.paper, border: `1px solid ${PALETTE.line}`}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '16px 24px', backgroundColor: accentSoftColor(headerAccent), borderBottom: `3px solid ${accentColor(headerAccent)}`}}>
      <Icon size={30} strokeWidth={1.9} color={accentColor(headerAccent)} />
      <div style={{...baseTextStyle, fontSize: 27, fontWeight: 800, color: accentColor(headerAccent)}}>{header}</div>
    </div>
    <div style={{padding: '22px 24px'}}>{children}</div>
  </div>
);

export const ClauseChip = ({children, accent, delay}: {readonly children: ReactNode; readonly accent: Accent; readonly delay: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [delay, delay + 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{display: 'inline-flex', alignItems: 'center', gap: 10, padding: '11px 20px', borderRadius: 12, backgroundColor: accentSoftColor(accent), border: `2px solid ${accentColor(accent)}`, color: accentColor(accent), fontSize: 23, fontWeight: 800, opacity: p, translate: `0px ${(1 - p) * 22}px`}}>{children}</div>
  );
};

export const SealStamp = ({children, delay, left, top, size = 190, rotateTo = -8}: {readonly children: ReactNode; readonly delay: number; readonly left: number; readonly top: number; readonly size?: number; readonly rotateTo?: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const {fps} = useVideoConfig();
  const stamp = spring({frame: frame - delay, fps, config: {damping: 13, mass: 0.9, stiffness: 210}, durationInFrames: 22});
  const visible = interpolate(frame, [delay - 2, delay + 2], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', left, top, width: size, height: size, display: 'grid', placeItems: 'center', borderRadius: '50%', border: `6px solid ${PALETTE.seal}`, color: PALETTE.seal, backgroundColor: `${PALETTE.seal}14`, opacity: visible, scale: `${0.3 + 0.7 * stamp}`, rotate: `${rotateTo * stamp}deg`, boxShadow: `0 0 0 8px ${PALETTE.seal}22`}}>
      <div style={{textAlign: 'center', fontSize: 30, fontWeight: 900, lineHeight: 1.25, fontFamily: FONT_FAMILY}}>{children}</div>
    </div>
  );
};

export const DocBadge = ({icon: Icon, label, note, accent, style}: {readonly icon: LucideIcon; readonly label: string; readonly note: string; readonly accent: Accent; readonly style?: CSSProperties}) => (
  <div style={{...style, position: 'absolute', display: 'flex', alignItems: 'center', gap: 20, padding: '20px 26px', backgroundColor: PALETTE.paper, border: `2px solid ${accentColor(accent)}`}}>
    <div style={{display: 'grid', width: 62, height: 62, flex: '0 0 auto', placeItems: 'center', color: accentColor(accent), border: `1px solid ${accentColor(accent)}`}}><Icon size={34} strokeWidth={1.8} /></div>
    <div>
      <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: accentColor(accent)}}>{label}</div>
      <div style={{marginTop: 4, color: PALETTE.muted, fontSize: 18}}>{note}</div>
    </div>
  </div>
);

export const GateBar = ({left, top, height, progress, label, accent = 'red'}: {readonly left: number; readonly top: number; readonly height: number; readonly progress: number; readonly label: string; readonly accent?: Accent}) => (
  <div style={{position: 'absolute', left, top, width: 96, height, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: accentSoftColor(accent), border: `3px solid ${accentColor(accent)}`, opacity: progress}}>
    <Ban size={40} strokeWidth={2} color={accentColor(accent)} />
    <div style={{color: accentColor(accent), fontSize: 20, fontWeight: 800, textAlign: 'center', lineHeight: 1.2, writingMode: 'vertical-rl', letterSpacing: 2, fontFamily: FONT_FAMILY}}>{label}</div>
  </div>
);

export const ContractArrow = ({left, top, width, progress, accent, label}: {readonly left: number; readonly top: number; readonly width: number; readonly progress: number; readonly accent: Accent; readonly label?: string}) => (
  <div style={{position: 'absolute', left, top, width, height: 70}}>
    {label ? <div style={{position: 'absolute', left: 0, top: -28, color: accentColor(accent), fontFamily: MONO, fontSize: 16, opacity: progress}}>{label}</div> : null}
    <div style={{position: 'absolute', left: 0, top: 30, width, height: 4, backgroundColor: accentColor(accent), scale: `${progress} 1`, transformOrigin: 'left center'}} />
    <ArrowRight size={30} strokeWidth={2.4} style={{position: 'absolute', right: -9, top: 17, color: accentColor(accent), opacity: interpolate(progress, [0.8, 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
  </div>
);

export const VerdictBar = ({children, delay, style}: {readonly children: ReactNode; readonly delay: number; readonly style?: CSSProperties}) => (
  <ImpactReveal delay={delay} style={{position: 'absolute', left: 400, right: 400, ...style}}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '18px 30px', backgroundColor: PALETTE.ink, color: PALETTE.paper, fontSize: 26, fontWeight: 800, textAlign: 'center'}}>{children}</div>
  </ImpactReveal>
);

export const Keyword = ({children, accent = 'mint'}: {readonly children: ReactNode; readonly accent?: Accent}) => (
  <span style={{display: 'inline-block', padding: '3px 12px 5px', color: accentColor(accent), backgroundColor: accentSoftColor(accent), borderBottom: `3px solid ${accentColor(accent)}`, fontWeight: 800}}>{children}</span>
);
