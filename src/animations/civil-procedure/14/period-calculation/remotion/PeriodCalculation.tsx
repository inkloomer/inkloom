import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, CalendarDays, CircleAlert, FileClock, Landmark, Plane, PartyPopper, Send} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {bg: '#14191c', field: '#20292d', mint: '#56d6b2', amber: '#f2bd54', red: '#e35a4c', ink: '#f3f5ef', muted: '#a8b2ad', line: '#455055'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Reveal = ({children, delay, from = 'up', style}: {children: ReactNode; delay: number; from?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const origin = {left: '32px 0px', right: '-32px 0px', up: '0px 28px'}[from];
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 18], [0, 1], {...CLAMP, easing: Easing.bezier(0.16, 1, 0.3, 1)}), translate: interpolate(frame, [delay, delay + 18], [origin, '0px 0px'], CLAMP)}}>{children}</div>;
};

const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.bg, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 30, border: `2px solid ${C.line}`}} />
    <div style={{position: 'absolute', left: 74, top: 48, color: C.mint, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 18, fontWeight: 700}}>TIME SIGNAL / {code}</div>
    <Reveal delay={0} style={{position: 'absolute', left: 74, top: 84, fontSize: 58, fontWeight: 900, letterSpacing: 0}}>{title}</Reveal>
    <div style={{position: 'absolute', left: 74, right: 74, top: 172, height: 2, backgroundColor: C.line}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 192, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const PeriodTypesScene = () => {
  const frame = useCurrentFrame();
  const connector = interpolate(frame, [44, 92], [0, 1], CLAMP);
  return <Shell code="01" title="期间先看：谁来定，能不能变？">
    <div data-layout="dual-source-time-axis" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight" data-visual-grammar="classification,authority,changeability" data-focal-rule="legal-and-designated-periods-have-different-sources-and-change-rules" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', left: 94, right: 94, top: 0, bottom: 0}}>
      <svg width="1732" height="700" style={{position: 'absolute', inset: 0}}><path d="M 650 350 H 1080" stroke={C.mint} strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - connector} /><path d="M 865 350 V 510" stroke={C.line} strokeWidth="6" /></svg>
      <Reveal delay={8} from="left" style={{position: 'absolute', left: 62, top: 110, width: 560, height: 320, border: `4px solid ${C.mint}`, padding: '38px 44px', backgroundColor: C.field}}>
        <BookOpen size={66} color={C.mint} /><div style={{marginTop: 22, fontSize: 48, fontWeight: 900}}>法定期间</div><div style={{marginTop: 18, fontSize: 28, color: C.muted}}>法律明文规定</div>
        <div style={{marginTop: 28, display: 'flex', gap: 16}}><span style={{padding: '8px 14px', border: `2px solid ${C.red}`, fontSize: 23}}>绝对不可变</span><span style={{padding: '8px 14px', borderBottom: `4px solid ${C.amber}`, fontSize: 23}}>特殊事由可依法变</span></div>
      </Reveal>
      <Reveal delay={44} from="right" style={{position: 'absolute', right: 62, top: 110, width: 560, height: 320, border: `4px solid ${C.amber}`, padding: '38px 44px'}}>
        <Landmark size={66} color={C.amber} /><div style={{marginTop: 22, fontSize: 48, fontWeight: 900}}>指定期间</div><div style={{marginTop: 18, fontSize: 28, color: C.muted}}>法院依职权指定</div>
        <div style={{marginTop: 34, display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 18px', backgroundColor: C.amber, color: C.bg, fontSize: 25, fontWeight: 900}}>特殊情况：法院可变更</div>
      </Reveal>
      <Reveal delay={94} style={{position: 'absolute', left: 620, top: 480, width: 490, padding: '22px 30px', textAlign: 'center', borderTop: `4px solid ${C.mint}`, fontSize: 30, fontWeight: 850}}><span style={{color: C.mint}}>先辨来源</span>，再判断变更边界</Reveal>
    </div>
  </Shell>;
};

export const CountingLineScene = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [24, 130], [0, 1], CLAMP);
  return <Shell code="02" title="收到文书当天，不计入期间">
    <div data-layout="receipt-to-deadline-rail" data-visual-anchor="timeline-gate" data-text-treatments="thin-underline,stamp" data-visual-grammar="sequence,exclusion,deadline" data-focal-rule="the-day-of-receipt-is-excluded-and-counting-starts-on-the-next-day" data-focal-channels="icon,locator,motion" style={{position: 'absolute', left: 96, right: 96, top: 0, bottom: 0}}>
      <div style={{position: 'absolute', left: 118, right: 118, top: 346, height: 12, backgroundColor: C.line}} />
      <div style={{position: 'absolute', left: 118, top: 346, width: 1496, height: 12, backgroundColor: C.mint, scale: `${progress} 1`, transformOrigin: 'left center'}} />
      {[{left: 100, label: '11月1日', detail: '收到判决书', icon: FileClock, color: C.red}, {left: 670, label: '11月2日', detail: '开始计算', icon: CalendarDays, color: C.mint}, {left: 1240, label: '届满日', detail: '上诉期终点', icon: Send, color: C.amber}].map(({left, label, detail, icon: Icon, color}, index) => <Reveal key={label} delay={12 + index * 38} style={{position: 'absolute', left, top: index === 1 ? 88 : 166, width: 390, height: 310, padding: '30px 34px', backgroundColor: index === 1 ? C.field : C.bg, border: `4px solid ${color}`}}>
        <Icon size={56} color={color} /><div style={{marginTop: 22, fontSize: 39, fontWeight: 900}}>{label}</div><div style={{marginTop: 14, fontSize: 27, color: index === 0 ? C.red : C.muted}}>{detail}</div>{index === 0 ? <div style={{marginTop: 22, fontSize: 23, color: C.red}}>不计入</div> : null}{index === 1 ? <div style={{marginTop: 16, paddingBottom: 6, borderBottom: `4px solid ${C.mint}`, fontSize: 25, fontWeight: 850}}>从次日开始</div> : null}
      </Reveal>)}
      <div style={{position: 'absolute', left: 705, top: 430, color: C.mint, fontSize: 25, fontWeight: 850}}>COUNT +1</div>
    </div>
  </Shell>;
};

export const HolidayAndMailScene = () => <Shell code="03" title="只在最后一日放假时，才顺延">
  <div data-layout="terminal-holiday-gate" data-visual-anchor="boundary" data-text-treatments="external-negation,soft-highlight" data-visual-grammar="condition,exception,release" data-focal-rule="only-a-holiday-on-the-final-day-shifts-the-deadline-and-mailing-before-expiry-protects-a-document" data-focal-channels="icon,enclosure,contrast" style={{position: 'absolute', left: 96, right: 96, top: 0, bottom: 0}}>
    <Reveal delay={8} style={{position: 'absolute', left: 86, top: 86, width: 620, height: 420, padding: '38px', backgroundColor: C.field, borderLeft: `14px solid ${C.amber}`}}><PartyPopper size={70} color={C.amber}/><div style={{marginTop: 28, fontSize: 42, fontWeight: 900}}>最后一日是法定休假日</div><div style={{marginTop: 22, fontSize: 30, color: C.muted}}>期限越过终点门，顺延到</div><div style={{marginTop: 20, fontSize: 36, fontWeight: 900, color: C.mint}}>休假日后的第一个工作日</div></Reveal>
    <Reveal delay={50} style={{position: 'absolute', right: 82, top: 86, width: 620, height: 420, padding: '38px', border: `4px solid ${C.red}`}}><div style={{position: 'absolute', right: 34, top: 28, color: C.red, fontSize: 24, fontWeight: 900}}>不触发顺延</div><CalendarDays size={70} color={C.red}/><div style={{marginTop: 28, fontSize: 36, fontWeight: 900}}>开始日 / 期间中的休假日</div><div style={{marginTop: 28, fontSize: 28, color: C.muted}}>不扣除，不改起算线</div><div style={{marginTop: 50, display: 'flex', alignItems: 'center', gap: 16, fontSize: 25}}><span style={{width: 68, height: 4, backgroundColor: C.red}} />只看最后一日</div></Reveal>
    <Reveal delay={88} style={{position: 'absolute', left: 480, top: 530, width: 770, height: 120, padding: '24px 32px', borderTop: `4px solid ${C.mint}`, display: 'flex', alignItems: 'center', gap: 24}}><Plane size={48} color={C.mint}/><div><strong style={{fontSize: 30}}>诉讼文书期满前交邮</strong><div style={{marginTop: 6, fontSize: 23, color: C.muted}}>在途不计，不算过期；参加诉讼在途时间仍计</div></div></Reveal>
  </div>
</Shell>;

export const ExtensionRequestScene = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [34, 126], [0, 1], CLAMP);
  return <Shell code="04" title="耽误期间：当事人申请，法院决定">
    <div data-layout="obstacle-relief-handoff" data-visual-anchor="flow-path" data-text-treatments="label-block,stamp" data-visual-grammar="cause,application,decision" data-focal-rule="a party applies within-ten-days-after-the-obstacle-is-removed-and-the-court-decides-extension" data-focal-channels="icon,connector,motion" style={{position: 'absolute', left: 100, right: 100, top: 0, bottom: 0}}>
      <svg width="1720" height="680" style={{position: 'absolute', inset: 0}}><path d="M 390 345 H 1325" stroke={C.line} strokeWidth="10"/><path d="M 390 345 H 1325" stroke={C.mint} strokeWidth="10" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - progress}/></svg>
      <Reveal delay={8} style={{position: 'absolute', left: 30, top: 130, width: 410, height: 330, padding: '36px', border: `4px solid ${C.red}`}}><CircleAlert size={70} color={C.red}/><div style={{marginTop: 24, fontSize: 37, fontWeight: 900}}>不可抗拒<br/>或正当理由</div><div style={{marginTop: 20, fontSize: 24, color: C.muted}}>障碍导致耽误</div></Reveal>
      <Reveal delay={50} style={{position: 'absolute', left: 650, top: 90, width: 460, height: 410, padding: '36px', backgroundColor: C.field, border: `4px solid ${C.amber}`}}><Send size={70} color={C.amber}/><div style={{marginTop: 24, fontSize: 38, fontWeight: 900}}>当事人申请</div><div style={{marginTop: 28, fontSize: 31, color: C.amber, fontWeight: 900}}>障碍消除后 10 日内</div><div style={{marginTop: 24, fontSize: 23, color: C.muted}}>法院不能依职权顺延</div></Reveal>
      <Reveal delay={92} style={{position: 'absolute', right: 30, top: 130, width: 410, height: 330, padding: '36px', border: `4px solid ${C.mint}`}}><Landmark size={70} color={C.mint}/><div style={{marginTop: 24, fontSize: 38, fontWeight: 900}}>法院决定</div><div style={{marginTop: 28, display: 'inline-block', padding: '12px 18px', backgroundColor: C.mint, color: C.bg, fontSize: 27, fontWeight: 900}}>准许或不准许</div></Reveal>
    </div>
  </Shell>;
};

export const PeriodCalculation = () => <AbsoluteFill>
  <TimelineSequence name="01-period-types" {...SCENES.periodTypes}><PeriodTypesScene /></TimelineSequence>
  <TimelineSequence name="02-counting-line" {...SCENES.countingLine}><CountingLineScene /></TimelineSequence>
  <TimelineSequence name="03-holiday-and-mail" {...SCENES.holidayAndMail}><HolidayAndMailScene /></TimelineSequence>
  <TimelineSequence name="04-extension-request" {...SCENES.extensionRequest}><ExtensionRequestScene /></TimelineSequence>
</AbsoluteFill>;
