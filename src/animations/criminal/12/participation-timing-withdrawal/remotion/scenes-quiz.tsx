import type {ReactNode} from 'react';
import {Ban, Hourglass, Milestone, Swords, TrendingUp, Users, EyeOff, Hand, History} from 'lucide-react';
import {C, Enter, Neg, Punch, RouteHi, Shell, StopLabel, ThinU, TicketChip, Totem, TrackArrow} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.signalGreenSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const DeathTimeInferenceScene = () => (
  <Shell code="03" title="致死一脚存疑：归责倒推">
    <div data-layout="inference-rollback-path" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="rollback-inference-steps,early-death-benefit-strip" data-focal-rule="uncertain-death-time-loads-first-attacker" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Hourglass size={250} color={C.nightIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="quiz-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Swords size={26} color={C.nightIndigo} />
          <StopLabel size={22}>综合题</StopLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 20, fontWeight: 800}}>甲抢劫丙，向丙心脏踢一脚；乙参与进来，为压制反抗也向丙心脏踢一脚；后丙死亡，<ThinU color={C.alertRed}>无法查明致死一脚是谁踢的</ThinU></Enter>
      </div>

      <div data-final-knowledge="rollback-steps" style={{position: 'absolute', left: 0, top: 116, width: 1150, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={26}><StopLabel size={22} color={C.signalGreen}>存疑时的归责倒推逻辑</StopLabel></Enter>
        <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.signalGreenSoft, border: `2px solid ${C.signalGreen}`, borderRadius: 5, padding: '10px 12px'}}>
          <span style={{fontSize: 19, fontWeight: 900, color: C.signalGreen}}>查明甲致死</span>
          <TrackArrow delay={44} color={C.signalGreen} />
          <span style={{fontSize: 19, fontWeight: 800}}>甲<RouteHi style={{fontSize: 16}}>需负责</RouteHi>，乙<Neg size={18}>不负责</Neg></span>
        </Enter>
        <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.ticketApricotSoft, border: `2px solid ${C.ticketApricot}`, borderRadius: 5, padding: '10px 12px'}}>
          <span style={{fontSize: 19, fontWeight: 900, color: C.ticketApricot}}>查明乙致死</span>
          <TrackArrow delay={58} color={C.ticketApricot} />
          <span style={{fontSize: 19, fontWeight: 800}}>乙<RouteHi style={{fontSize: 16}}>需负责</RouteHi>，甲<RouteHi style={{fontSize: 16}}>也要负责</RouteHi>（二者此时构成共同正犯）</span>
        </Enter>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.nightIndigoSoft, border: `2px solid ${C.nightIndigo}`, borderRadius: 5, padding: '10px 12px'}}>
          <Users size={22} color={C.nightIndigo} />
          <span style={{fontSize: 19, fontWeight: 800}}>结论：无论何种情况，甲都<RouteHi style={{fontSize: 16}}>必定负责</RouteHi>——让甲负责<Punch delay={74} tone="green">不冤枉</Punch>；若让乙负责则可能<Neg size={18}>被冤枉</Neg></span>
        </Enter>
      </div>

      <div data-final-knowledge="benefit-strip" style={{position: 'absolute', left: 1172, top: 116, width: 604, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.ticketApricot}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Hourglass size={26} color={C.ticketApricot} />
          <StopLabel size={23} color={C.ticketApricot}>规律总结</StopLabel>
        </Enter>
        <Enter delay={92} style={{fontSize: 26, fontWeight: 950, lineHeight: 1.5}}>在死亡时间无法查明的承继共犯案中，<br />死得<RouteHi style={{fontSize: 24}}>越早</RouteHi>，对大家<RouteHi style={{fontSize: 24}}>越有利</RouteHi></Enter>
        <Enter delay={104} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>死亡点越早 → 落在「参与前」的部分越多 → 后参与者越可能摘出去</Enter>
      </div>
    </div>
  </Shell>
);

export const HouseEntrySuccessiveQuizScene = () => (
  <Shell code="04" title="入户抢劫：承继帮助犯不加重点">
    <div data-layout="entry-quiz-bay" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="entry-quiz-board,aggravation-exclusion-strip" data-focal-rule="late-lookout-does-not-share-entry-aggravation" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Hand size={250} color={C.nightIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="quiz-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Milestone size={26} color={C.ticketApricot} />
          <StopLabel size={22}>综合题 · 入户望风</StopLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 20, fontWeight: 800}}>甲入户抢劫，破门入户后<SoftHi>在户内</SoftHi>电话通知乙望风；乙赶到后<SoftHi>在户外</SoftHi>望风。甲乙如何定罪处罚？</Enter>
      </div>

      <div data-final-knowledge="disposition-rows" style={{position: 'absolute', left: 0, top: 116, width: 1776, height: 380, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={26}><StopLabel size={22} color={C.signalGreen}>整体定性</StopLabel></Enter>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.signalGreenSoft, border: `2px solid ${C.signalGreen}`, borderRadius: 5, padding: '9px 12px'}}>
          <Users size={22} color={C.signalGreen} />
          <span style={{fontSize: 19, fontWeight: 800}}>甲、乙构成抢劫罪的<RouteHi style={{fontSize: 16}}>共同犯罪</RouteHi></span>
        </Enter>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.signalGreenSoft, border: `2px solid ${C.signalGreen}`, borderRadius: 5, padding: '9px 12px'}}>
          <Swords size={22} color={C.signalGreen} />
          <span style={{fontSize: 19, fontWeight: 800}}>甲＝实行犯 → 适用「入户抢劫」的<RouteHi style={{fontSize: 16}}>加重法定刑</RouteHi></span>
          <TrendingUp size={22} color={C.alertRed} />
        </Enter>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.nightIndigoSoft, border: `2px solid ${C.nightIndigo}`, borderRadius: 5, padding: '9px 12px'}}>
          <Hand size={22} color={C.nightIndigo} />
          <span style={{fontSize: 19, fontWeight: 800}}>乙＝承继的<RouteHi style={{fontSize: 16}}>帮助犯</RouteHi> → 量刑<Neg size={18}>不适用</Neg>「入户抢劫」的加重法定刑</span>
          <Punch delay={70} tone="alert">不加重点</Punch>
        </Enter>
      </div>

      <div data-final-knowledge="aggravation-exclusion-strip" style={{position: 'absolute', left: 0, top: 512, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px dashed ${C.alertRed}`, borderRadius: 6, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={82} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
          <EyeOff size={26} color={C.alertRed} />
          <StopLabel size={22} color={C.alertRed}>乙不加重的原因</StopLabel>
        </Enter>
        <Enter delay={92} style={{fontSize: 20, fontWeight: 800}}>甲<ThinU color={C.alertRed}>入户时</ThinU>，乙<ThinU color={C.alertRed}>未参与</ThinU>且对入户<Neg size={19}>无帮助</Neg>——乙仅帮助了户内的抢劫行为；加重情节自始与他无关</Enter>
        <Enter delay={100}><History size={24} color={C.inkSoft} /></Enter>
      </div>
    </div>
  </Shell>
);
