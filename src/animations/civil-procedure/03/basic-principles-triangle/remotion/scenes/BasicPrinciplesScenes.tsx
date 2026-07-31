import {
  Building2,
  Gavel,
  Landmark,
  Laptop,
  MapPin,
  Scale,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE} from '../storyboard';
import {ENTER_EASING, MaskedReveal, SceneHeading, baseTextStyle} from '../visual-system';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const enter = (frame: number, start: number, end = start + 30) => interpolate(frame, [start, end], [0, 1], {...clamp, easing: ENTER_EASING});

const CircleNode = ({icon: Icon, label, left, top, color, progress}: {icon: LucideIcon; label: string; left: number; top: number; color: string; progress: number}) => (
  <div style={{position: 'absolute', left, top, width: 150, height: 150, boxSizing: 'border-box', border: `4px solid ${color}`, borderRadius: '50%', background: PALETTE.paper, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: progress, scale: 0.88 + progress * 0.12, boxShadow: '0 18px 32px rgba(23, 32, 29, 0.12)', ...baseTextStyle}}>
    <Icon size={32} color={color} strokeWidth={2.2} />
    <span style={{fontSize: label.length > 3 ? 23 : 28, fontWeight: 900}}>{label}</span>
  </div>
);

const Note = ({number, title, children, top, progress}: {number: string; title: string; children: React.ReactNode; top: number; progress: number}) => (
  <div style={{position: 'absolute', left: 1260, top, width: 540, boxSizing: 'border-box', padding: '24px 28px', borderLeft: `5px solid ${PALETTE.teal}`, borderRadius: 12, background: 'rgba(255, 255, 255, 0.64)', opacity: progress, translate: `${interpolate(progress, [0, 1], [66, 0])}px 0px`, scale: 0.94 + progress * 0.06, transformOrigin: 'left top', clipPath: `inset(0 0 ${(1 - progress) * 100}% 0)`, ...baseTextStyle}}>
    <div style={{fontSize: 26, fontWeight: 900, color: PALETTE.teal}}>{number}. {title}</div>
    <div style={{marginTop: 13, fontSize: 25, fontWeight: 750, lineHeight: 1.48, color: PALETTE.ink, opacity: interpolate(progress, [0.52, 1], [0, 1], clamp), translate: `${interpolate(progress, [0.52, 1], [14, 0], clamp)}px 0px`}}>{children}</div>
  </div>
);

export const BasicPrinciplesTriangleScene = () => {
  const frame = useCurrentFrame();
  const court = enter(frame, 12);
  const parties = enter(frame, 46);
  const lowerPrinciples = enter(frame, 108);
  const equality = enter(frame, 82);
  const debate = enter(frame, 96);
  const notes = enter(frame, 158);
  const supervision = enter(frame, 202);
  const line = (start: number, end = start + 34) => interpolate(frame, [start, end], [1, 0], {...clamp, easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="基本原则关系图" title="一张图看清民诉基本原则" accent="teal" />
      <MaskedReveal delay={8} duration={22} style={{position: 'absolute', left: 120, top: 236}}><div style={{...baseTextStyle, fontSize: 37, fontWeight: 850, color: PALETTE.muted}}>三方关系是骨架，原则与制度在同一诉讼结构中定位。</div></MaskedReveal>
      <svg viewBox="0 0 1200 1080" style={{position: 'absolute', left: 0, top: 0, width: 1200, height: 1080, overflow: 'visible'}} aria-hidden="true">
        <g fill="none" stroke={PALETTE.line} strokeWidth="4" strokeLinecap="round">
          <path d="M 555 485 L 255 705" pathLength="1" strokeDasharray="1" strokeDashoffset={line(38)} /><path d="M 555 485 L 855 705" pathLength="1" strokeDasharray="1" strokeDashoffset={line(48)} /><path d="M 255 705 L 255 920" pathLength="1" strokeDasharray="1" strokeDashoffset={line(112)} /><path d="M 855 705 L 855 920" pathLength="1" strokeDasharray="1" strokeDashoffset={line(122)} /><path d="M 255 920 L 855 920" pathLength="1" strokeDasharray="1" strokeDashoffset={line(132)} />
        </g>
        <g fill="none" strokeWidth="4" strokeLinecap="round">
          <path d="M 325 695 Q 555 610 785 695" stroke={PALETTE.teal} pathLength="1" strokeDasharray="1" strokeDashoffset={line(78)} /><path d="M 325 730 Q 555 815 785 730" stroke={PALETTE.purple} pathLength="1" strokeDasharray="1" strokeDashoffset={line(92)} /><path d="M 1175 340 L 640 430" stroke={PALETTE.teal} pathLength="1" strokeDasharray="1" strokeDashoffset={line(198)} /><path d="M 640 430 l 30 -20 M 640 430 l 32 12" stroke={PALETTE.teal} opacity={supervision} />
        </g>
      </svg>
      <CircleNode icon={Building2} label="法院" left={480} top={340} color={PALETTE.blue} progress={court} />
      <CircleNode icon={UserRound} label="原告" left={180} top={630} color={PALETTE.teal} progress={parties} />
      <CircleNode icon={Users} label="被告" left={780} top={630} color={PALETTE.purple} progress={parties} />
      <CircleNode icon={Gavel} label="处分原则" left={180} top={845} color={PALETTE.gold} progress={lowerPrinciples} />
      <CircleNode icon={ShieldCheck} label="诚信原则" left={780} top={845} color={PALETTE.red} progress={lowerPrinciples} />
      <div style={{position: 'absolute', left: 470, top: 620, width: 170, textAlign: 'center', opacity: equality, ...baseTextStyle}}><div style={{display: 'inline-block', padding: '8px 14px', borderRadius: 9, background: PALETTE.tealSoft, color: PALETTE.teal, fontSize: 25, fontWeight: 900}}>平等原则</div><div style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: PALETTE.muted}}>权利义务相同或相对应</div></div>
      <div style={{position: 'absolute', left: 470, top: 746, width: 170, textAlign: 'center', opacity: debate, ...baseTextStyle}}><div style={{display: 'inline-block', padding: '8px 14px', borderRadius: 9, background: PALETTE.purpleSoft, color: PALETTE.purple, fontSize: 25, fontWeight: 900}}>辩论原则</div><div style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: PALETTE.muted}}>仅适用于诉讼程序</div></div>
      <Note number="1" title="国际视野" top={340} progress={notes}>同等原则、对等原则仅适用于外国人、无国籍人、外国企业和组织。</Note>
      <Note number="2" title="与时俱进" top={550} progress={enter(frame, 174)}><span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><Laptop size={26} color={PALETTE.teal} /> 在线诉讼与线下诉讼具有同等法律效力。</span></Note>
      <Note number="3" title="底线原则" top={760} progress={enter(frame, 190)}><span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><Scale size={26} color={PALETTE.gold} /> 处分原则</span><br /><span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><ShieldCheck size={26} color={PALETTE.red} /> 诚信原则</span></Note>
      <div style={{position: 'absolute', left: 885, top: 318, width: 270, opacity: supervision, ...baseTextStyle, color: PALETTE.teal, fontSize: 24, fontWeight: 900}}><span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><Landmark size={27} /> 检察监督</span></div>
      <div style={{position: 'absolute', left: 1260, top: 970, opacity: enter(frame, 216), ...baseTextStyle, display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 700, color: PALETTE.muted}}><MapPin size={23} color={PALETTE.blue} /> 同一结构中定位，不把概念混在一起。</div>
    </div>
  );
};
