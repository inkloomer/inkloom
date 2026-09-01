import type {ReactNode} from 'react';
import {Ban, Brain, DoorOpen, Flag, Hand, Megaphone, Scissors, Users} from 'lucide-react';
import {C, Enter, Neg, Punch, RouteHi, Shell, StopLabel, ThinU, TicketChip, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.signalGreenSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const WithdrawalConditionsScene = () => (
  <Shell code="05" title="中途退出：共犯关系的脱离">
    <div data-layout="withdrawal-checklist-desk" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="contribution-erasure-row,dual-contribution-chips" data-focal-rule="withdrawal-requires-erasing-both-contributions" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><DoorOpen size={250} color={C.signalGreen} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="withdrawal-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <DoorOpen size={28} color={C.signalGreen} />
          <StopLabel size={24} color={C.signalGreen}>共犯脱离的条件</StopLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 22, fontWeight: 900}}>想成立<RouteHi style={{fontSize: 19}}>犯罪中止</RouteHi> → 脱离共犯关系 → 彻底消除自己的贡献</Enter>
      </div>

      <div data-final-knowledge="contribution-chips" style={{position: 'absolute', left: 0, top: 128, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16}}>
        <div style={{display: 'flex', gap: 18, flex: 1}}>
          <Enter delay={26} style={{flex: 1, display: 'flex', alignItems: 'center', gap: 14, backgroundColor: C.panel, border: `3px solid ${C.ticketApricot}`, borderRadius: 6, padding: '16px 20px'}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 10, backgroundColor: C.panel, border: `3px solid ${C.ticketApricot}`}}><Hand size={34} color={C.ticketApricot} /></span>
            <span style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 26, fontWeight: 950, color: C.ticketApricot}}>物理性贡献</span>
              <span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>提供的工具 · 帮的行为留下的实害助力</span>
            </span>
          </Enter>
          <Enter delay={38} style={{flex: 1, display: 'flex', alignItems: 'center', gap: 14, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '16px 20px'}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 10, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`}}><Brain size={34} color={C.nightIndigo} /></span>
            <span style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 26, fontWeight: 950, color: C.nightIndigo}}>心理性贡献</span>
              <span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>引起犯意 · 强化他犯到底的信念</span>
            </span>
          </Enter>
        </div>
        <Enter delay={54} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '14px 20px'}}>
          <Scissors size={30} color={C.signalGreen} />
          <span style={{fontSize: 23, fontWeight: 950}}>两类贡献一并<ThinU color={C.signalGreen}>彻底消除</ThinU>，才可能成立中止</span>
          <Punch delay={64} tone="green">缺一不可</Punch>
        </Enter>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>
          <Ban size={20} color={C.alertRed} />只消除物理、留心理（没告知），或只打消犯意、工具还在——都<Neg size={18}>不成立</Neg>脱离
        </Enter>
      </div>
    </div>
  </Shell>
);

export const RoleWithdrawalRequirementsScene = () => (
  <Shell code="06" title="三种角色的脱离要求">
    <div data-layout="role-requirement-columns" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-role-requirement-columns,stage-split-strip" data-focal-rule="joint-principals-face-stricter-withdrawal-standard" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Users size={250} color={C.nightIndigo} strokeWidth={1.3} /></Totem>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 430, display: 'flex', gap: 16}}>
        <div data-final-knowledge="instigator-column" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Megaphone size={28} color={C.nightIndigo} />
            <StopLabel size={23}>教唆犯</StopLabel>
          </Enter>
          <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>消除<RouteHi style={{fontSize: 18}}>心理性</RouteHi>贡献</Enter>
          <Enter delay={24} style={{fontSize: 19, fontWeight: 700}}>= <ThinU color={C.signalGreen}>打消犯意</ThinU>（让对方的犯意熄火）</Enter>
          <Enter delay={34} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>犯意还在烧 → 脱离失败</Enter>
        </div>
        <div data-final-knowledge="helper-column" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.ticketApricot}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Hand size={28} color={C.ticketApricot} />
            <StopLabel size={23} color={C.ticketApricot}>帮助犯</StopLabel>
          </Enter>
          <Enter delay={20} style={{fontSize: 20, fontWeight: 800}}>消除<RouteHi style={{fontSize: 18}}>物理性</RouteHi>＋<RouteHi style={{fontSize: 18}}>心理性</RouteHi>贡献</Enter>
          <Enter delay={30} style={{fontSize: 19, fontWeight: 700}}>工具要收回，退出要<ThinU color={C.signalGreen}>明确告知</ThinU></Enter>
          <Enter delay={40} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>帮出去的力要一根根抽回来</Enter>
        </div>
        <div data-final-knowledge="co-principal-column" style={{flex: 1.15, backgroundColor: C.panel, border: `3px solid ${C.alertRed}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={14} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Users size={28} color={C.alertRed} />
            <StopLabel size={23} color={C.alertRed}>共同正犯</StopLabel>
          </Enter>
          <Enter delay={26} style={{fontSize: 20, fontWeight: 800}}>消除<RouteHi style={{fontSize: 18}}>物理性</RouteHi>＋<RouteHi style={{fontSize: 18}}>心理性</RouteHi>贡献</Enter>
          <Enter delay={36} style={{fontSize: 19, fontWeight: 700}}>预备阶段：需<ThinU color={C.signalGreen}>明确告知</ThinU>退出意思</Enter>
          <Enter delay={46} style={{fontSize: 19, fontWeight: 700}}>实行阶段：原则上要求<ThinU color={C.alertRed}>有效阻止</ThinU>犯罪</Enter>
        </div>
      </div>

      <div data-final-knowledge="stage-split-strip" style={{position: 'absolute', left: 0, top: 446, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Flag size={26} color={C.signalGreen} />
          <StopLabel size={22} color={C.signalGreen}>阶段分界</StopLabel>
        </Enter>
        <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 20, fontWeight: 800}}>
          <TicketChip tone="paper" style={{fontSize: 18, borderColor: C.signalGreen}}>预备阶段</TicketChip>明确告知即可脱离
          <span style={{fontSize: 22, color: C.ghost}}>｜</span>
          <TicketChip tone="paper" style={{fontSize: 18, borderColor: C.alertRed}}>实行阶段</TicketChip>必须有效阻止
          <Punch delay={80} tone="green">越晚越难走</Punch>
        </Enter>
      </div>
    </div>
  </Shell>
);
