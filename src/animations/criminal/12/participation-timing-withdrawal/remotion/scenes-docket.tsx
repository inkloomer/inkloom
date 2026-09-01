import type {ReactNode} from 'react';
import {CircleCheck, Eye, EyeOff, Key, Megaphone, Swords, Users} from 'lucide-react';
import {C, Enter, Neg, Punch, RouteHi, Shell, StopLabel, ThinU, TicketChip, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.signalGreenSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const WithdrawalFourCasesScene = () => (
  <Shell code="07" title="脱离四案例：贡献没消除，中止不成立">
    <div data-layout="case-docket-four" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="four-case-docket,verdict-stamp-rows" data-focal-rule="half-erasure-fails-withdrawal" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Eye size={250} color={C.nightIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="docket-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 88, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={2}><StopLabel size={22}>四份卷宗 · 逐份验「贡献是否清零」</StopLabel></Enter>
        <Enter delay={12} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>每案均以乙既遂收场——只看甲能不能成立中止</Enter>
      </div>

      <div data-final-knowledge="case-rows" style={{position: 'absolute', left: 0, top: 104, width: 1776, height: 574, backgroundColor: C.panel, border: `3px solid ${C.signalGreen}`, borderRadius: 6, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.nightIndigoSoft, border: `2px solid ${C.nightIndigo}`, borderRadius: 5, padding: '8px 12px', flex: 1}}>
          <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}><Megaphone size={22} color={C.nightIndigo} /><TicketChip tone="indigo" style={{fontSize: 16}}>① 教唆犯未打消犯意</TicketChip></Enter>
          <Enter delay={30} style={{fontSize: 18, fontWeight: 700, flex: 1.3}}>甲教唆乙入室盗窃，乙路上甲反悔让其回，乙不答应并既遂</Enter>
          <Enter delay={40} style={{fontSize: 18, fontWeight: 800, flex: 1}}>犯意仍在烧 → <Punch delay={46} tone="alert">不成立中止 → 既遂</Punch></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.ticketApricotSoft, border: `2px solid ${C.ticketApricot}`, borderRadius: 5, padding: '8px 12px', flex: 1.15}}>
          <Enter delay={50} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}><Key size={22} color={C.ticketApricot} /><TicketChip tone="paper" style={{fontSize: 16, borderColor: C.ticketApricot}}>② 帮助犯未除物理贡献</TicketChip></Enter>
          <Enter delay={60} style={{fontSize: 18, fontWeight: 700, flex: 1.3}}>甲提供钥匙后反悔要回，乙暗自配过一把并既遂</Enter>
          <Enter delay={70} style={{fontSize: 18, fontWeight: 800, flex: 1}}>钥匙回收但帮力仍在 → 不成立中止；若乙用<RouteHi style={{fontSize: 16}}>其他方法</RouteHi>既遂，甲才成立中止</Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.ticketApricotSoft, border: `2px solid ${C.ticketApricot}`, borderRadius: 5, padding: '8px 12px', flex: 1}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}><EyeOff size={22} color={C.ticketApricot} /><TicketChip tone="paper" style={{fontSize: 16, borderColor: C.ticketApricot}}>③ 帮助犯未除心理贡献</TicketChip></Enter>
          <Enter delay={90} style={{fontSize: 18, fontWeight: 700, flex: 1.3}}>甲答应望风却害怕悄悄溜走，乙不知情并既遂</Enter>
          <Enter delay={100} style={{fontSize: 18, fontWeight: 800, flex: 1}}>未<Neg size={17}>明确告知</Neg> → 心理贡献未消 → 甲<Neg size={17}>也既遂</Neg></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.alertRedSoft, border: `2px solid ${C.alertRed}`, borderRadius: 5, padding: '8px 12px', flex: 1.15}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}><Users size={22} color={C.alertRed} /><TicketChip tone="paper" style={{fontSize: 16, borderColor: C.alertRed}}>④ 共同正犯仅谎称退出</TicketChip></Enter>
          <Enter delay={120} style={{fontSize: 18, fontWeight: 700, flex: 1.3}}>甲乙共谋次日盗窃，甲谎称胃疼不去，乙独自去并既遂</Enter>
          <Enter delay={130} style={{fontSize: 18, fontWeight: 800, flex: 1}}>未明确告知退出意思 → 不成立中止；预备阶段<RouteHi style={{fontSize: 16}}>明确告知</RouteHi>即可中止（不要求有效阻止乙）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const Exam2024OptionsScene = () => (
  <Shell code="08" title="2024金题：甲构成既遂的有？">
    <div data-layout="option-grid-verdicts" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="four-option-grid,rule-recap-strip" data-focal-rule="notice-early-stop-late-fail-keeps-liability" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Swords size={250} color={C.alertRed} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="quiz-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 88, backgroundColor: C.panel, border: `3px solid ${C.alertRed}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Swords size={24} color={C.alertRed} />
          <StopLabel size={21} color={C.alertRed}>真题辨析 · 甲乙约定去丙家抢劫，甲构成抢劫罪既遂的有？<TicketChip tone="alert" style={{fontSize: 15}}>2024年回忆版金题</TicketChip></StopLabel>
        </Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 104, width: 1776, height: 480, display: 'flex', flexDirection: 'column', gap: 10}}>
        <div data-final-knowledge="option-a" style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${C.alertRed}`, borderRadius: 5, padding: '9px 14px', flex: 1}}>
          <Enter delay={22}><TicketChip tone="alert" style={{fontSize: 18}}>A 途中被父母强行拉回家，乙既遂</TicketChip></Enter>
          <Enter delay={32} style={{fontSize: 18, fontWeight: 700, flex: 1}}>未明确告知退出 → 未消除心理性贡献 → 部分实行全部负责</Enter>
          <Enter delay={42}><Punch delay={42} tone="alert">甲 既遂</Punch></Enter>
        </div>
        <div data-final-knowledge="option-b" style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${C.signalGreen}`, borderRadius: 5, padding: '9px 14px', flex: 1}}>
          <Enter delay={52}><TicketChip tone="green" style={{fontSize: 18}}>B 途中自行回家并告知乙，乙既遂</TicketChip></Enter>
          <Enter delay={62} style={{fontSize: 18, fontWeight: 700, flex: 1}}>预备阶段明确告知 → 消除心理性贡献 → 成立中止</Enter>
          <Enter delay={72}><Punch delay={72} tone="green">甲 中止</Punch></Enter>
        </div>
        <div data-final-knowledge="option-c" style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${C.alertRed}`, borderRadius: 5, padding: '9px 14px', flex: 1}}>
          <Enter delay={82}><TicketChip tone="alert" style={{fontSize: 18}}>C 压制反抗后自行离去，乙既遂</TicketChip></Enter>
          <Enter delay={92} style={{fontSize: 18, fontWeight: 700, flex: 1}}>已进实行阶段 → 要求有效阻止，仅离去不行 → 脱离失败</Enter>
          <Enter delay={102}><Punch delay={102} tone="alert">甲 既遂</Punch></Enter>
        </div>
        <div data-final-knowledge="option-d" style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${C.alertRed}`, borderRadius: 5, padding: '9px 14px', flex: 1}}>
          <Enter delay={112}><TicketChip tone="alert" style={{fontSize: 18}}>D 阻止乙却被乙打晕，乙既遂</TicketChip></Enter>
          <Enter delay={122} style={{fontSize: 18, fontWeight: 700, flex: 1}}>实行阶段阻止失败 → 未有效阻止犯罪 → 脱离失败</Enter>
          <Enter delay={132}><Punch delay={132} tone="alert">甲 既遂</Punch></Enter>
        </div>
      </div>

      <div data-final-knowledge="rule-recap-strip" style={{position: 'absolute', left: 0, top: 600, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.nightIndigo}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={144}><CircleCheck size={26} color={C.signalGreen} /></Enter>
        <Enter delay={152} style={{fontSize: 21, fontWeight: 950}}>既遂的有 <ThinU color={C.alertRed}>A、C、D</ThinU>；只有 B 成立中止</Enter>
        <Enter delay={162} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>预备阶段告知即可走人；进了实行阶段，拦不住就得一起背既遂</Enter>
      </div>
    </div>
  </Shell>
);
