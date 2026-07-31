import type {CSSProperties, ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import {ArrowRight, ShieldCheck, UserRound} from 'lucide-react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {accentColor, accentSoftColor, PALETTE, toSourceFrame, type Accent} from './storyboard';

export const FONT_FAMILY = '"Georgia", "Microsoft YaHei", serif';
export const MONO = '"Consolas", "SFMono-Regular", monospace';
export const ENTER_EASING = Easing.bezier(0.16, 1, 0.3, 1);

export const baseTextStyle: CSSProperties = {
  color: PALETTE.ink,
  fontFamily: FONT_FAMILY,
  letterSpacing: 0,
};

export const CustodyBackdrop = ({frame}: {readonly frame: number}) => {
  const rule = interpolate(frame, [0, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.linear});
  return (
    <>
      <div style={{position: 'absolute', inset: 42, border: `1px solid ${PALETTE.line}`, borderRadius: 26, backgroundColor: PALETTE.background}} />
      <div style={{position: 'absolute', inset: 52, borderRadius: 18, border: `2px dashed ${PALETTE.line}`, opacity: 0.55}} />
      {[150, 260, 370, 480, 590, 700, 810, 920].map((top) => (
        <div key={top} style={{position: 'absolute', left: 68, right: 68, top, height: 1, borderTop: `1px dotted ${PALETTE.line}`, opacity: 0.5}} />
      ))}
      <div style={{position: 'absolute', left: 88, top: 78, color: PALETTE.muted, fontFamily: MONO, fontSize: 17, letterSpacing: 2}}>CUSTODY CHART / CASE 08-A</div>
      <div style={{position: 'absolute', right: 88, top: 78, color: PALETTE.teal, fontFamily: MONO, fontSize: 16}}>GUARDIAN · 法定代理</div>
      <div style={{position: 'absolute', left: 88, right: 88, bottom: 66, height: 4, borderRadius: 2, backgroundColor: PALETTE.line, scale: `${rule} 1`, transformOrigin: 'left center'}} />
    </>
  );
};

export const MaskedReveal = ({children, delay = 0, duration = 26, style}: {readonly children: ReactNode; readonly delay?: number; readonly duration?: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const hidden = interpolate(frame, [delay, delay + duration], [100, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{...style, clipPath: `inset(0 ${hidden}% 0 0)`}}>{children}</div>;
};

export const ImpactReveal = ({children, delay, style}: {readonly children: ReactNode; readonly delay: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const {fps} = useVideoConfig();
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 4], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), scale: spring({frame: frame - delay, fps, config: {damping: 18, mass: 0.7, stiffness: 170}, durationInFrames: 30})}}>{children}</div>;
};

export const SoftReveal = ({children, delay, duration = 26, distance = 26, style}: {readonly children: ReactNode; readonly delay: number; readonly duration?: number; readonly distance?: number; readonly style?: CSSProperties}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [delay, delay + duration], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{...style, opacity: p, translate: `0px ${(1 - p) * distance}px`}}>{children}</div>;
};

export const CustodyHeading = ({index, eyebrow, title, accent}: {readonly index: string; readonly eyebrow: string; readonly title: string; readonly accent: Accent}) => (
  <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: 104, top: 118}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
      <div style={{display: 'grid', width: 74, height: 74, placeItems: 'center', border: `2px solid ${accentColor(accent)}`, borderRadius: 18, color: accentColor(accent), fontFamily: MONO, fontSize: 25, fontWeight: 800}}>{index}</div>
      <div>
        <div style={{...baseTextStyle, color: accentColor(accent), fontFamily: MONO, fontSize: 17, letterSpacing: 2}}>{eyebrow.toUpperCase()}</div>
        <div style={{...baseTextStyle, marginTop: 8, fontSize: 56, fontWeight: 800, lineHeight: 1}}>{title}</div>
      </div>
    </div>
  </MaskedReveal>
);

export const LawBadge = ({icon: Icon, label, note, style}: {readonly icon: LucideIcon; readonly label: string; readonly note: string; readonly style?: CSSProperties}) => (
  <div style={{...style, position: 'absolute', display: 'flex', alignItems: 'center', gap: 20, padding: '20px 26px', borderRadius: 22, backgroundColor: PALETTE.panel, border: `2px solid ${PALETTE.teal}`}}>
    <div style={{display: 'grid', width: 62, height: 62, flex: '0 0 auto', placeItems: 'center', borderRadius: '50%', color: PALETTE.teal, backgroundColor: PALETTE.tealSoft}}><Icon size={34} strokeWidth={1.8} /></div>
    <div>
      <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>{label}</div>
      <div style={{marginTop: 4, color: PALETTE.muted, fontSize: 18}}>{note}</div>
    </div>
  </div>
);

export const WardNode = ({icon: Icon, label, note, style, accent = 'amber'}: {readonly icon: LucideIcon; readonly label: string; readonly note: string; readonly style?: CSSProperties; readonly accent?: Accent}) => (
  <div style={{...style, position: 'absolute', display: 'flex', alignItems: 'center', gap: 22, padding: '22px 26px', borderRadius: 24, backgroundColor: accentSoftColor(accent), border: `2px solid ${accentColor(accent)}`, boxShadow: `0 0 0 6px ${accentSoftColor(accent)}`}}>
    <div style={{display: 'grid', width: 66, height: 66, flex: '0 0 auto', placeItems: 'center', borderRadius: '50%', color: accentColor(accent), border: `2px solid ${accentColor(accent)}`}}><Icon size={36} strokeWidth={1.8} /></div>
    <div>
      <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>{label}</div>
      <div style={{marginTop: 5, color: PALETTE.muted, fontSize: 19, lineHeight: 1.3}}>{note}</div>
    </div>
  </div>
);

export const GuardianNode = ({label, note, style}: {readonly label: string; readonly note: string; readonly style?: CSSProperties}) => (
  <div style={{...style, position: 'absolute', display: 'flex', alignItems: 'center', gap: 22, padding: '22px 26px', borderRadius: 24, backgroundColor: PALETTE.tealSoft, border: `2px solid ${PALETTE.teal}`}}>
    <div style={{display: 'grid', width: 66, height: 66, flex: '0 0 auto', placeItems: 'center', borderRadius: '50%', color: PALETTE.teal, backgroundColor: PALETTE.panel}}><ShieldCheck size={36} strokeWidth={1.8} /></div>
    <div>
      <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, color: PALETTE.teal}}>{label}</div>
      <div style={{marginTop: 5, color: PALETTE.muted, fontSize: 19, lineHeight: 1.3}}>{note}</div>
    </div>
  </div>
);

export const AuthorityCord = ({left, top, width, progress, accent, label}: {readonly left: number; readonly top: number; readonly width: number; readonly progress: number; readonly accent: Accent; readonly label?: string}) => (
  <div style={{position: 'absolute', left, top, width, height: 70}}>
    {label ? <div style={{position: 'absolute', left: 0, top: -30, color: accentColor(accent), fontFamily: MONO, fontSize: 17, opacity: progress}}>{label}</div> : null}
    <div style={{position: 'absolute', left: 0, top: 30, width, height: 4, borderRadius: 2, backgroundColor: accentColor(accent), scale: `${progress} 1`, transformOrigin: 'left center'}} />
    <ArrowRight size={30} strokeWidth={2.4} style={{position: 'absolute', right: -9, top: 17, color: accentColor(accent), opacity: interpolate(progress, [0.8, 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
  </div>
);

export const DifferenceRow = ({index, icon: Icon, title, note, left, top, width, delay, accent = 'red'}: {readonly index: string; readonly icon: LucideIcon; readonly title: string; readonly note: string; readonly left: number; readonly top: number; readonly width: number; readonly delay: number; readonly accent?: Accent}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [delay, delay + 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', left, top, width, height: 118, opacity: p, translate: `0px ${(1 - p) * 28}px`}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 118, height: 118, display: 'grid', placeItems: 'center', borderRadius: 20, color: accentColor(accent), backgroundColor: accentSoftColor(accent), border: `2px solid ${accentColor(accent)}`}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
          <Icon size={34} strokeWidth={1.8} />
          <span style={{fontFamily: MONO, fontSize: 15, fontWeight: 700}}>{index}</span>
        </div>
      </div>
      <div style={{position: 'absolute', left: 142, top: 10, right: 0}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: accentColor(accent)}}>{title}</div>
        <div style={{marginTop: 8, color: PALETTE.muted, fontSize: 20, lineHeight: 1.35}}>{note}</div>
      </div>
    </div>
  );
};

export const DeathBranch = ({left, top, width, delay, accent, icon: Icon, title, chips, chipColor}: {readonly left: number; readonly top: number; readonly width: number; readonly delay: number; readonly accent: Accent; readonly icon: LucideIcon; readonly title: string; readonly chips: readonly string[]; readonly chipColor: string}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [delay, delay + 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', left, top, width, height: 132, opacity: p, translate: `0px ${(1 - p) * 30}px`}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 250, height: 132, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px', borderRadius: 22, backgroundColor: accentSoftColor(accent), border: `2px solid ${accentColor(accent)}`}}>
        <Icon size={40} strokeWidth={1.8} color={accentColor(accent)} />
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 800, lineHeight: 1.25}}>{title}</div>
      </div>
      <div style={{position: 'absolute', left: 288, top: 58, width: 60, height: 3, backgroundColor: accentColor(accent)}} />
      <ArrowRight size={26} strokeWidth={2.4} color={accentColor(accent)} style={{position: 'absolute', left: 338, top: 46}} />
      <div style={{position: 'absolute', left: 380, top: 12, right: 0, display: 'flex', flexDirection: 'column', gap: 14}}>
        {chips.map((chip) => (
          <div key={chip} style={{display: 'inline-flex', alignSelf: 'flex-start', padding: '10px 20px', borderRadius: 14, backgroundColor: PALETTE.panel, border: `2px solid ${chipColor}`, color: chipColor, fontSize: 23, fontWeight: 800, fontFamily: FONT_FAMILY}}>{chip}</div>
        ))}
      </div>
    </div>
  );
};

export const Keyword = ({children, accent = 'teal'}: {readonly children: ReactNode; readonly accent?: Accent}) => (
  <span style={{display: 'inline-block', padding: '3px 12px 5px', color: accentColor(accent), backgroundColor: accentSoftColor(accent), borderRadius: 12, borderBottom: `3px solid ${accentColor(accent)}`, fontWeight: 800}}>{children}</span>
);

export const PartyCarrier = ({label, note, style}: {readonly label: string; readonly note: string; readonly style?: CSSProperties}) => (
  <div style={{...style, position: 'absolute', display: 'flex', alignItems: 'center', gap: 18, padding: '20px 24px', borderRadius: 24, backgroundColor: PALETTE.amberSoft, border: `2px solid ${PALETTE.amber}`}}>
    <div style={{display: 'grid', width: 62, height: 62, flex: '0 0 auto', placeItems: 'center', borderRadius: '50%', color: PALETTE.amber, border: `2px solid ${PALETTE.amber}`}}><UserRound size={34} strokeWidth={1.8} /></div>
    <div>
      <div style={{...baseTextStyle, fontSize: 29, fontWeight: 800, color: PALETTE.amber}}>{label}</div>
      <div style={{marginTop: 4, color: PALETTE.muted, fontSize: 18}}>{note}</div>
    </div>
  </div>
);

export const VerdictBand = ({children, delay, style}: {readonly children: ReactNode; readonly delay: number; readonly style?: CSSProperties}) => (
  <ImpactReveal delay={delay} style={{position: 'absolute', left: 400, right: 400, ...style}}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '18px 30px', borderRadius: 20, backgroundColor: PALETTE.ink, color: PALETTE.background, fontSize: 27, fontWeight: 800, textAlign: 'center'}}>{children}</div>
  </ImpactReveal>
);
