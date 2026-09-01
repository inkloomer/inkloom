import type {ReactNode} from 'react';
import {Ban, CarFront, Clock, History, Milestone, PackageSearch, Swords, Trash2, TrendingUp, Unlink, Users} from 'lucide-react';
import {C, Enter, Neg, Punch, RouteHi, Shell, StopLabel, ThinU, TicketChip, Totem, TrackArrow} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.signalGreenSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

const TrackRow = ({chip, chipColor, icon, delay, children, grow = 1}: {chip: string; chipColor: string; icon: ReactNode; delay: number; children: ReactNode; grow?: number}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${chipColor}`, borderRadius: 6, padding: '10px 14px', flex: grow}}>
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
      {icon}
      <TicketChip tone="paper" style={{fontSize: 18, borderColor: chipColor}}>{chip}</TicketChip>
    </Enter>
    <Enter delay={delay + 12} style={{fontSize: 19, fontWeight: 800, flexWrap: 'wrap'}}>{children}</Enter>
  </div>
);

export const TimingThreePhasesScene = () => (
  <Shell code="01" title="参与时间：事前 · 中途 · 事后">
    <div data-layout="timetable-three-tracks" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-track-timetable,aftermath-help-triptych" data-focal-rule="joining-time-decides-complicity-type" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Clock size={250} color={C.nightIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="timing-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Milestone size={26} color={C.signalGreen} />
          <StopLabel size={23} color={C.signalGreen}>承继的共同犯罪</StopLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 21, fontWeight: 800}}>＝<ThinU color={C.signalGreen}>中途参与</ThinU>他人犯罪；与之相对的是事前参与与事后参与</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 112, width: 1776, height: 566, display: 'flex', flexDirection: 'column', gap: 12}}>
        <div data-final-knowledge="pre-track-row" style={{display: 'flex'}}>
          <TrackRow chip="事前共谋 · 临时迟到" chipColor={C.signalGreen} icon={<Users size={24} color={C.signalGreen} />} delay={24} grow={1}>
            成立<SoftHi>共同犯罪</SoftHi>：甲乙共谋明晚抢劫丙，甲先到重伤丙，乙赶到拿走财物 → 二人构成抢劫罪（致人重伤）的共同犯罪<TicketChip tone="paper" style={{fontSize: 15, borderColor: C.signalGreen}}>2018年试题</TicketChip>
          </TrackRow>
        </div>
        <div data-final-knowledge="mid-track-row" style={{display: 'flex'}}>
          <TrackRow chip="中途参与" chipColor={C.ticketApricot} icon={<Milestone size={24} color={C.ticketApricot} />} delay={44} grow={1.2}>
            成立<SoftHi>承继的共同犯罪</SoftHi>：甲抢劫重伤丙后乙才参与，拿走财物交给甲 → 甲=抢劫罪（致人重伤）；乙=承继共犯，但对重伤<ThinU color={C.alertRed}>不负责</ThinU>——重伤是乙参与之前甲制造的<TicketChip tone="paper" style={{fontSize: 15, borderColor: C.ticketApricot}}>2007年53题</TicketChip>
          </TrackRow>
        </div>
        <div data-final-knowledge="post-track-row" style={{flex: 1.15, display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.panel, border: `2.5px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 14px'}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <History size={24} color={C.nightIndigo} />
            <TicketChip tone="indigo" style={{fontSize: 18}}>事后参与（事后帮助）</TicketChip>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>甲抢劫到丙的财物后——看乙帮的是「人 · 赃物 · 证据」哪一样</span>
          </Enter>
          <Enter delay={76} style={{display: 'flex', gap: 12}}>
            <span style={{flex: 1, display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.nightIndigoSoft, borderRadius: 5, padding: '8px 12px', fontSize: 18, fontWeight: 800}}><CarFront size={22} color={C.nightIndigo} />帮犯罪人<TrackArrow delay={84} color={C.nightIndigo} /><ThinU color={C.nightIndigo}>窝藏、包庇罪</ThinU>（载甲离去）</span>
            <span style={{flex: 1, display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.nightIndigoSoft, borderRadius: 5, padding: '8px 12px', fontSize: 18, fontWeight: 800}}><PackageSearch size={22} color={C.nightIndigo} />帮赃物<TrackArrow delay={90} color={C.nightIndigo} /><ThinU color={C.nightIndigo}>掩饰、隐瞒犯罪所得罪</ThinU>（销赃）</span>
            <span style={{flex: 1, display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.nightIndigoSoft, borderRadius: 5, padding: '8px 12px', fontSize: 18, fontWeight: 800}}><Trash2 size={22} color={C.nightIndigo} />帮证据<TrackArrow delay={96} color={C.nightIndigo} /><ThinU color={C.nightIndigo}>帮助毁灭、伪造证据罪</ThinU>（毁工具）</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SuccessiveLiabilityRuleScene = () => (
  <Shell code="02" title="承继共犯：只对参与后的事负责">
    <div data-layout="successive-gate-strip" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="succession-gate-row,causation-cut-strip" data-focal-rule="successive-accomplice-answers-only-for-post-joining-part" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Milestone size={250} color={C.ticketApricot} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="rule-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Milestone size={26} color={C.signalGreen} />
          <StopLabel size={24} color={C.signalGreen}>中途参与者的归责原则</StopLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 23, fontWeight: 900}}>只需对<SealInline>参与后</SealInline>的事情负责；对<SealInline tone="alert">参与前</SealInline>的事情<NegInline>不负责</NegInline></Enter>
      </div>

      <div data-final-knowledge="case-one-board" style={{position: 'absolute', left: 0, top: 124, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Swords size={26} color={C.nightIndigo} />
          <StopLabel size={22}>例1 · 抢劫致死与承继共犯</StopLabel>
          <TicketChip tone="paper" style={{fontSize: 17, borderColor: C.nightIndigo}}>甲抢劫丙致其倒地 → 乙随后参与帮捡财物 → 丙死亡（查明系甲的暴力造成）</TicketChip>
        </Enter>
        <div style={{display: 'flex', gap: 14, flex: 1}}>
          <Enter delay={42} style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.signalGreenSoft, border: `2px solid ${C.signalGreen}`, borderRadius: 5, padding: '10px 12px', fontSize: 19, fontWeight: 800}}><Users size={22} color={C.signalGreen} />① 甲乙：抢劫罪的<RouteHi style={{fontSize: 17}}>承继共犯</RouteHi></span>
            <span style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.signalGreenSoft, border: `2px solid ${C.signalGreen}`, borderRadius: 5, padding: '10px 12px', fontSize: 19, fontWeight: 800}}><TrendingUp size={22} color={C.alertRed} />② 甲：抢劫罪<RouteHi style={{fontSize: 17}}>致人死亡</RouteHi></span>
          </Enter>
          <Enter delay={56} style={{flex: 1.3, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.nightIndigoSoft, border: `2px solid ${C.nightIndigo}`, borderRadius: 5, padding: '10px 12px', fontSize: 19, fontWeight: 800}}><Ban size={22} color={C.alertRed} />③ 乙：只构成抢劫罪，对死亡结果<Neg size={18}>不担责</Neg></span>
            <span style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.alertRedSoft, border: `2px solid ${C.alertRed}`, borderRadius: 5, padding: '10px 12px', fontSize: 19, fontWeight: 800}}><Unlink size={22} color={C.alertRed} />④ 不担死责的原因：乙的参与行为与死亡结果<ThinU color={C.alertRed}>无因果联系</ThinU><Punch delay={68} tone="alert">因果切断</Punch></span>
          </Enter>
        </div>
        <Enter delay={80} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>前半段的暴力账，记不到后上车的乙头上——除非乙参与后亲手制造</Enter>
      </div>
    </div>
  </Shell>
);

const SealInline = ({children, tone = 'green'}: {children: ReactNode; tone?: 'green' | 'alert'}) => (
  <span style={{border: `3px solid ${tone === 'green' ? C.signalGreen : C.alertRed}`, borderRadius: 8, padding: '1px 10px', color: tone === 'green' ? C.signalGreen : C.alertRed, fontWeight: 950}}>{children}</span>
);

const NegInline = ({children}: {children: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 4, color: C.alertRed, fontWeight: 950}}><Neg size={19}>{children}</Neg></span>
);
