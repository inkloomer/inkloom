import type {ReactNode} from 'react';
import {Scale, ShieldCheck, Swords, UserRound, Users, X} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

const C = {bg: '#101114', ink: '#F6F2E8', muted: '#9A9CA3', lime: '#C8F135', magenta: '#FF4D8D', cyan: '#4FD9E8', line: '#34363D'} as const;
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const reveal = (frame: number, delay: number, duration = 22) => interpolate(frame, [delay, delay + duration], [0, 1], {...clamp, easing: ease});

const Arena = ({children, scene, kicker, title}: {readonly children: ReactNode; readonly scene: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill style={{background: `linear-gradient(90deg, transparent 49.8%, ${C.line} 49.9%, ${C.line} 50.1%, transparent 50.2%), ${C.bg}`, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 42, border: `2px solid ${C.line}`}} />
    <div style={{position: 'absolute', left: 86, top: 58, fontSize: 18, color: C.cyan, fontWeight: 800}}>{scene} / INTENT REVIEW</div>
    <div style={{position: 'absolute', left: 86, top: 102, fontSize: 25, color: C.muted}}>{kicker}</div>
    <div style={{position: 'absolute', left: 86, top: 143, fontSize: 58, fontWeight: 900}}>{title}</div>
    {children}
  </AbsoluteFill>
);

const People = ({count, color, label}: {readonly count: number; readonly color: string; readonly label: string}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
    <div style={{display: 'flex', gap: 10}}>{Array.from({length: count}, (_, index) => <UserRound key={index} size={index === 0 ? 84 : 62} strokeWidth={2.2} color={color} />)}</div>
    <div style={{fontSize: 25, color, fontWeight: 800}}>{label}</div>
  </div>
);

const Verdict = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <div style={{border: `3px solid ${color}`, color, padding: '18px 28px', fontSize: 34, fontWeight: 900, minWidth: 280, textAlign: 'center', backgroundColor: `${color}12`}}>{children}</div>
);

export const MutualIntentScene = () => {
  const frame = useCurrentFrame();
  const beam = reveal(frame, 36, 38);
  return <Arena scene="01" kicker="先看双方主观意图，再看聚众形式" title="相互侵害意图锁定">
    <div data-layout="opposed-intent-ring" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="opposition,reciprocity,classification" data-focal-channels="icon,connector,contrast,spatial" data-focal-rule="双方都出于侵害意图相互攻击" style={{position: 'absolute', left: 118, right: 118, top: 284, bottom: 98}}>
      <div style={{position: 'absolute', left: 40, top: 100, opacity: reveal(frame, 8), translate: `${interpolate(frame, [8, 30], [-60, 0], {...clamp, easing: ease})}px 0px`}}><People count={4} color={C.magenta} label="甲方 · 4 人" /></div>
      <div style={{position: 'absolute', right: 115, top: 112, opacity: reveal(frame, 16), translate: `${interpolate(frame, [16, 38], [60, 0], {...clamp, easing: ease})}px 0px`}}><People count={1} color={C.cyan} label="乙方 · 1 人" /></div>
      <div style={{position: 'absolute', left: 480, top: 130, width: 640, height: 150}}>
        <div style={{height: 8, marginTop: 54, backgroundColor: C.lime, scale: `${beam} 1`, transformOrigin: 'center'}} />
        <Swords size={86} color={C.lime} strokeWidth={2.4} style={{position: 'absolute', left: 276, top: 12, opacity: beam}} />
        <div style={{position: 'absolute', left: 178, top: 105, fontSize: 29, fontWeight: 900, color: C.lime, backgroundColor: C.bg, padding: '4px 18px'}}>双方均有侵害意图</div>
      </div>
      <div style={{position: 'absolute', left: 474, bottom: 48, opacity: reveal(frame, 86), scale: reveal(frame, 86)}}>
        <Users size={52} color={C.lime} style={{position: 'absolute', left: -70, top: 13}} />
        <Verdict color={C.lime}>聚众斗殴</Verdict>
        <div style={{fontSize: 24, color: C.muted, marginTop: 15, textAlign: 'center'}}>不要求双方都达到 3 人以上</div>
      </div>
    </div>
  </Arena>;
};

export const OneSidedAttackScene = () => {
  const frame = useCurrentFrame();
  const attack = reveal(frame, 30, 42);
  return <Arena scene="02" kicker="只有一方侵害，防卫方向不会被人数改写" title="单方攻击，结论分流">
    <div data-layout="attack-shield-verdict-fork" data-visual-anchor="flow-path" data-text-treatments="thin-underline,external-negation,stamp" data-visual-grammar="direction,exclusion,split-outcome" data-focal-channels="icon,connector,enclosure,annotation" data-focal-rule="攻击方故意伤害，抵御方正当防卫" style={{position: 'absolute', left: 118, right: 118, top: 286, bottom: 90}}>
      <div style={{position: 'absolute', left: 48, top: 40, opacity: reveal(frame, 8)}}><People count={4} color={C.magenta} label="甲方 · 有侵害意图" /></div>
      <div style={{position: 'absolute', left: 555, top: 82, width: 435, height: 140}}>
        <div style={{position: 'absolute', top: 62, width: 390, height: 7, backgroundColor: C.magenta, scale: `${attack} 1`, transformOrigin: 'left'}} />
        <Swords size={72} color={C.magenta} style={{position: 'absolute', left: 158, top: 22, opacity: attack}} />
        <div style={{position: 'absolute', left: 112, top: 104, fontSize: 24, color: C.magenta, fontWeight: 800}}>主动侵害</div>
      </div>
      <div style={{position: 'absolute', right: 118, top: 54, opacity: reveal(frame, 56)}}>
        <ShieldCheck size={138} color={C.cyan} strokeWidth={1.8} />
        <div style={{fontSize: 28, color: C.cyan, fontWeight: 900, marginTop: 10}}>乙方 · 无侵害意图</div>
      </div>
      <div style={{position: 'absolute', right: 414, top: 82, opacity: reveal(frame, 56)}}><X size={58} color={C.ink} style={{backgroundColor: C.magenta, padding: 8}} /></div>
      <div style={{position: 'absolute', left: 180, bottom: 36, opacity: reveal(frame, 88), translate: `0px ${interpolate(frame, [88, 112], [28, 0], {...clamp, easing: ease})}px`}}><Verdict color={C.magenta}>甲：故意伤害</Verdict></div>
      <div style={{position: 'absolute', right: 180, bottom: 36, opacity: reveal(frame, 106), translate: `0px ${interpolate(frame, [106, 130], [28, 0], {...clamp, easing: ease})}px`}}><Verdict color={C.cyan}>乙：正当防卫</Verdict></div>
      <div style={{position: 'absolute', left: 720, bottom: 64, width: 170, height: 3, backgroundColor: C.ink, opacity: reveal(frame, 100)}} />
    </div>
  </Arena>;
};

export const HeadcountReversalScene = () => {
  const frame = useCurrentFrame();
  return <Arena scene="03" kicker="把人数对调，检验真正决定结论的变量" title="人数反转，性质不反转">
    <div data-layout="headcount-referee-axis" data-visual-anchor="comparison-axis" data-text-treatments="label-block,thin-underline,external-negation" data-visual-grammar="comparison,invariance,priority" data-focal-channels="icon,contrast,annotation,spatial" data-focal-rule="人数多寡不影响防卫性质" style={{position: 'absolute', left: 116, right: 116, top: 290, bottom: 88}}>
      <div style={{position: 'absolute', left: 90, top: 45, opacity: reveal(frame, 8)}}><People count={1} color={C.magenta} label="甲 · 1 人 · 侵害" /></div>
      <div style={{position: 'absolute', right: 64, top: 34, opacity: reveal(frame, 20)}}><People count={4} color={C.cyan} label="乙 · 4 人 · 抵御" /></div>
      <div style={{position: 'absolute', left: 654, top: 15, width: 300, height: 300, opacity: reveal(frame, 44)}}>
        <Scale size={172} color={C.ink} strokeWidth={1.5} style={{position: 'absolute', left: 64, top: 10}} />
        <div style={{position: 'absolute', top: 190, left: 26, right: 0, fontSize: 29, textAlign: 'center', color: C.muted}}>人数不是定性标准</div>
        <div style={{position: 'absolute', top: 234, left: 18, right: 18, height: 6, backgroundColor: C.magenta, scale: `${reveal(frame, 64, 34)} 1`, transformOrigin: 'left'}} />
      </div>
      <div style={{position: 'absolute', left: 350, right: 350, bottom: 24, height: 154, borderTop: `2px solid ${C.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: reveal(frame, 86)}}>
        <div style={{fontSize: 31, color: C.magenta, fontWeight: 900}}>侵害意图 → 故意伤害</div>
        <ShieldCheck size={72} color={C.cyan} />
        <div style={{fontSize: 31, color: C.cyan, fontWeight: 900}}>抵御侵害 → 正当防卫</div>
      </div>
    </div>
  </Arena>;
};
