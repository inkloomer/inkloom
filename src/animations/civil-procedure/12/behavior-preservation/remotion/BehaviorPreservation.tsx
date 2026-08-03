import type {CSSProperties, ReactNode} from 'react';
import {Ban, CircleSlash2, Gavel, Hand, RefreshCcw, ShieldAlert, ShieldCheck, UserRound} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {
  ink: '#15131b',
  paper: '#f7f4ec',
  panel: '#24202e',
  violet: '#8168d8',
  mint: '#58c994',
  red: '#e44d55',
  amber: '#e7b750',
  muted: '#a7a0b6',
  white: '#fffdf8',
};

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Reveal = ({children, delay, from = 'up', style}: {children: ReactNode; delay: number; from?: 'down' | 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const start = {down: '0px -30px', left: '34px 0px', right: '-34px 0px', up: '0px 30px'}[from];
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 18], [0, 1], CLAMP), translate: interpolate(frame, [delay, delay + 18], [start, '0px 0px'], CLAMP)}}>{children}</div>;
};

const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.ink, color: C.paper, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 32, border: `2px solid ${C.panel}`}} />
    <div style={{position: 'absolute', left: 72, top: 54, color: C.violet, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 18, fontWeight: 900, letterSpacing: 0}}>INJUNCTION COMMAND BOARD / {code}</div>
    <h1 style={{position: 'absolute', left: 72, top: 88, margin: 0, fontSize: 58, fontWeight: 900, letterSpacing: 0}}>{title}</h1>
    <div style={{position: 'absolute', left: 72, right: 72, top: 170, height: 3, backgroundColor: C.panel}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ContentDistinctionScene = () => {
  const frame = useCurrentFrame();
  const leftProgress = interpolate(frame, [44, 92], [0, 1], CLAMP);
  const rightProgress = interpolate(frame, [74, 122], [0, 1], CLAMP);
  return <Shell code="01" title="保全财产，还是控制行为？">
    <div data-layout="paired-preservation-command-axis" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="comparison,authority,effect" data-focal-rule="behavior-preservation-controls-conduct-not-assets" data-focal-channels="icon,contrast,connector,enclosure" style={{position: 'absolute', left: 80, right: 80, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 35, top: 78, width: 625, height: 475, border: `5px solid ${C.amber}`, backgroundColor: C.panel, padding: '38px 42px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><ShieldCheck size={66} color={C.amber}/><div><div style={{fontSize: 25, color: C.amber, fontWeight: 850}}>财产保全</div><div style={{fontSize: 42, fontWeight: 950}}>锁住财产</div></div></div>
        <div style={{position: 'absolute', left: 42, right: 42, top: 184, display: 'flex', gap: 16}}>{['查封', '扣押', '冻结'].map((label, index) => <div key={label} style={{width: 160, height: 114, display: 'grid', placeItems: 'center', backgroundColor: index === 1 ? '#3a3447' : '#302a3a', fontSize: 31, fontWeight: 900}}>{label}</div>)}</div>
        <div style={{position: 'absolute', left: 42, right: 42, bottom: 38, borderTop: `3px solid ${C.amber}`, paddingTop: 20, fontSize: 27, lineHeight: 1.35}}>防止转移、处分，避免判决难以执行</div>
      </Reveal>
      <div style={{position: 'absolute', left: 670, top: 286, width: 215, height: 6, backgroundColor: C.amber, scale: `${leftProgress} 1`, transformOrigin: 'left center'}} />
      <Gavel size={76} color={C.paper} style={{position: 'absolute', left: 845, top: 249, opacity: interpolate(frame, [34, 56], [0, 1], CLAMP)}} />
      <div style={{position: 'absolute', left: 905, top: 286, width: 220, height: 6, backgroundColor: C.violet, scale: `${rightProgress} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={24} from="right" style={{position: 'absolute', right: 35, top: 78, width: 625, height: 475, border: `5px solid ${C.violet}`, backgroundColor: C.paper, color: C.ink, padding: '38px 42px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Hand size={66} color={C.violet}/><div><div style={{fontSize: 25, color: C.violet, fontWeight: 850}}>行为保全</div><div style={{fontSize: 42, fontWeight: 950}}>命令行为</div></div></div>
        <div style={{position: 'absolute', left: 42, right: 42, top: 184, display: 'flex', gap: 24}}>
          <div style={{width: 248, height: 134, display: 'grid', placeItems: 'center', border: `4px solid ${C.mint}`, fontSize: 35, fontWeight: 950, color: C.mint}}>责令作为</div>
          <div style={{width: 248, height: 134, display: 'grid', placeItems: 'center', backgroundColor: C.red, color: C.white, fontSize: 35, fontWeight: 950}}><Ban size={42} style={{marginRight: 10}}/>禁止作为</div>
        </div>
        <div style={{position: 'absolute', left: 42, right: 42, bottom: 38, borderTop: `3px solid ${C.violet}`, paddingTop: 20, fontSize: 27, lineHeight: 1.35}}>阻止正在或将要实施的行为造成不可弥补损害</div>
      </Reveal>
      <Reveal delay={114} style={{position: 'absolute', left: 535, top: 590, width: 770, height: 88, display: 'grid', placeItems: 'center', border: `3px solid ${C.mint}`, backgroundColor: C.panel, color: C.paper, fontSize: 31, fontWeight: 900}}>
        同是保全，行为保全的对象是“人怎么做”
      </Reveal>
    </div>
  </Shell>;
};

export const ProtectiveOrdersScene = () => {
  const frame = useCurrentFrame();
  const trunk = interpolate(frame, [20, 62], [0, 1], CLAMP);
  return <Shell code="02" title="两类禁令：止住正在发生的侵害">
    <div data-layout="two-order-protection-branches" data-visual-anchor="document-fork" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="threat,order,prevention" data-focal-rule="court-orders-stop-imminent-or-ongoing-harm" data-focal-channels="icon,connector,enclosure,contrast" style={{position: 'absolute', left: 80, right: 80, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 35, top: 232, width: 420, height: 250, backgroundColor: C.red, color: C.white, padding: '34px 38px'}}>
        <ShieldAlert size={62}/><div style={{marginTop: 20, fontSize: 35, fontWeight: 950}}>正在或即将侵害</div><div style={{marginTop: 18, fontSize: 25, lineHeight: 1.4}}>不及时制止<br/>将造成难以弥补损害</div>
      </Reveal>
      <div style={{position: 'absolute', left: 455, top: 354, width: 310, height: 8, backgroundColor: C.red, scale: `${trunk} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={34} style={{position: 'absolute', left: 770, top: 178, width: 350, height: 360, border: `6px double ${C.amber}`, backgroundColor: C.paper, color: C.ink, display: 'grid', placeItems: 'center', textAlign: 'center', padding: '30px'}}>
        <Gavel size={78} color={C.violet}/><div style={{fontSize: 35, fontWeight: 950}}>法院裁定</div><div style={{fontSize: 25, lineHeight: 1.4, color: C.violet}}>发出停止或禁止的行为命令</div>
      </Reveal>
      <div style={{position: 'absolute', left: 1120, top: 274, width: 120, height: 5, backgroundColor: C.mint, rotate: '-23deg', transformOrigin: 'left center', scale: `${trunk} 1`}} />
      <div style={{position: 'absolute', left: 1120, top: 440, width: 120, height: 5, backgroundColor: C.violet, rotate: '23deg', transformOrigin: 'left center', scale: `${trunk} 1`}} />
      <Reveal delay={62} from="right" style={{position: 'absolute', right: 35, top: 52, width: 565, height: 270, borderLeft: `18px solid ${C.mint}`, backgroundColor: C.panel, padding: '32px 38px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><UserRound size={58} color={C.mint}/><div><div style={{fontSize: 24, color: C.mint, fontWeight: 850}}>人身安全保护令</div><div style={{fontSize: 37, fontWeight: 950}}>停止家庭暴力</div></div></div>
        <div style={{marginTop: 28, borderBottom: `3px solid ${C.mint}`, paddingBottom: 14, fontSize: 26}}>典型的行为保全</div>
      </Reveal>
      <Reveal delay={82} from="right" style={{position: 'absolute', right: 35, bottom: 52, width: 565, height: 270, borderLeft: `18px solid ${C.violet}`, backgroundColor: C.paper, color: C.ink, padding: '32px 38px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><CircleSlash2 size={58} color={C.violet}/><div><div style={{fontSize: 24, color: C.violet, fontWeight: 850}}>人格权禁令</div><div style={{fontSize: 37, fontWeight: 950}}>停止侵害人格权</div></div></div>
        <div style={{marginTop: 28, borderBottom: `3px solid ${C.violet}`, paddingBottom: 14, fontSize: 26}}>以停止有关行为来防止损害扩大</div>
      </Reveal>
    </div>
  </Shell>;
};

export const SameCourtReviewScene = () => {
  const frame = useCurrentFrame();
  const rail = interpolate(frame, [46, 118], [0, 1], CLAMP);
  return <Shell code="03" title="对行为保全不服：同级复议一次">
    <div data-layout="same-court-review-parallel-rail" data-visual-anchor="boundary" data-text-treatments="label-block,stamp,external-negation" data-visual-grammar="remedy,parallelism,limit" data-focal-rule="review-is-once-at-the-rendering-court-without-staying-enforcement" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', left: 80, right: 80, top: 0, bottom: 0}}>
      <Reveal delay={4} style={{position: 'absolute', left: 40, top: 155, width: 410, height: 330, backgroundColor: C.paper, color: C.ink, padding: '36px'}}>
        <Gavel size={70} color={C.violet}/><div style={{marginTop: 28, fontSize: 38, fontWeight: 950}}>行为保全裁定</div><div style={{marginTop: 20, fontSize: 26}}>停止或禁止某项行为</div>
      </Reveal>
      <div style={{position: 'absolute', left: 450, top: 314, width: 270, height: 8, backgroundColor: C.violet, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={28} style={{position: 'absolute', left: 730, top: 105, width: 470, height: 430, border: `6px solid ${C.violet}`, padding: '38px'}}>
        <RefreshCcw size={78} color={C.violet}/><div style={{marginTop: 30, fontSize: 39, fontWeight: 950}}>作出裁定的法院</div><div style={{marginTop: 22, padding: '14px 18px', backgroundColor: C.violet, color: C.white, fontSize: 31, fontWeight: 900}}>同级复议 · 仅一次</div><div style={{marginTop: 30, fontSize: 25, lineHeight: 1.45, color: C.muted}}>人身安全保护令不服的，5日内申请复议。</div>
      </Reveal>
      <div style={{position: 'absolute', left: 1200, top: 222, width: 250, height: 6, backgroundColor: C.amber, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 1200, top: 424, width: 250, height: 6, backgroundColor: C.mint, scale: `${rail} 1`, transformOrigin: 'left center'}} />
      <Reveal delay={62} from="right" style={{position: 'absolute', right: 40, top: 90, width: 360, height: 230, backgroundColor: C.paper, color: C.ink, padding: '30px 32px'}}>
        <CircleSlash2 size={58} color={C.red}/><div style={{marginTop: 22, fontSize: 33, fontWeight: 950}}>不是上诉</div><div style={{marginTop: 16, fontSize: 24}}>不能跳到上级法院</div>
      </Reveal>
      <Reveal delay={84} from="right" style={{position: 'absolute', right: 40, bottom: 90, width: 360, height: 230, backgroundColor: C.mint, color: C.ink, padding: '30px 32px'}}>
        <ShieldCheck size={58} color={C.ink}/><div style={{marginTop: 22, fontSize: 33, fontWeight: 950}}>执行不中断</div><div style={{marginTop: 16, fontSize: 24}}>复议不停止原裁定执行</div>
      </Reveal>
    </div>
  </Shell>;
};

export const BehaviorPreservation = () => <AbsoluteFill>
  <TimelineSequence name="01-content-distinction" {...SCENES.contentDistinction}><ContentDistinctionScene /></TimelineSequence>
  <TimelineSequence name="02-protective-orders" {...SCENES.protectiveOrders}><ProtectiveOrdersScene /></TimelineSequence>
  <TimelineSequence name="03-same-court-review" {...SCENES.sameCourtReview}><SameCourtReviewScene /></TimelineSequence>
</AbsoluteFill>;
