import type {ReactNode} from 'react';
import {ArrowDownRight, ArrowUpRight, ClipboardCheck, Gavel, Hand, Layers, Megaphone, Users} from 'lucide-react';
import {C, ConsultStamp, Enter, NoteHi, Neg, Shell, ThinU, TriageLabel, Totem, WardChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.specPurpleSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const ExcessThreeRolesScene = () => (
  <Shell code="05" title="过限责任：三种角色各自怎么算">
    <div data-layout="excess-role-columns" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-role-columns,negligent-quiz-strip" data-focal-rule="excess-stays-on-the-doer-not-the-backer" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Users size={250} color={C.chartBlue} strokeWidth={1.3} /></Totem>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 330, display: 'flex', gap: 14}}>
        <div data-final-knowledge="co-principal-column" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}><Users size={26} color={C.chartBlue} /><TriageLabel size={21}>共同正犯</TriageLabel></Enter>
          <Enter delay={14} style={{fontSize: 18, fontWeight: 700}}>过限行为<SoftHi>超出共同故意</SoftHi>范围 → 甲对此<Neg size={17}>不负责任</Neg></Enter>
          <Enter delay={24} style={{fontSize: 18, fontWeight: 700}}>即使甲对过限事实知情，若无犯罪故意 → 也<Neg size={17}>不用负责</Neg></Enter>
        </div>
        <div data-final-knowledge="instigator-column" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}><Megaphone size={26} color={C.specPurple} /><TriageLabel size={21} color={C.specPurple}>正犯 ＋ 教唆犯</TriageLabel></Enter>
          <Enter delay={20} style={{fontSize: 18, fontWeight: 700}}>乙超出教唆范围（教唆盗窃却实施抢劫）→ 甲对过限部分<Neg size={17}>不负责任</Neg></Enter>
          <Enter delay={30} style={{fontSize: 18, fontWeight: 700}}>甲仅对两人<SoftHi>共同故意</SoftHi>范围内的犯罪（既遂/未遂）负责</Enter>
        </div>
        <div data-final-knowledge="helper-column" style={{flex: 1.1, backgroundColor: C.panel, border: `3px solid ${C.lesionRed}`, borderRadius: 6, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={14} style={{display: 'flex', alignItems: 'center', gap: 10}}><Hand size={26} color={C.lesionRed} /><TriageLabel size={21} color={C.lesionRed}>正犯 ＋ 帮助犯</TriageLabel></Enter>
          <Enter delay={26} style={{fontSize: 18, fontWeight: 700}}>乙超出帮助故意的过限行为 → 甲对此<Neg size={17}>不用负责</Neg></Enter>
          <Enter delay={36} style={{fontSize: 18, fontWeight: 700}}>过限行为能<ThinU color={C.lesionRed}>包容评价</ThinU>为原轻罪（抢劫包容盗窃）→ 甲仍构成原轻罪的<SoftHi>帮助犯（既遂）</SoftHi></Enter>
          <Enter delay={44}><ConsultStamp delay={46} tone="red">兜回轻罪</ConsultStamp></Enter>
        </div>
      </div>

      <div data-final-knowledge="quiz-strip" style={{position: 'absolute', left: 0, top: 346, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.instrumentGray}`, borderRadius: 6, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ClipboardCheck size={24} color={C.instrumentGray} />
          <TriageLabel size={21} color={C.instrumentGray}>两道综合题 · 告诫「不要闹出人命」</TriageLabel>
        </Enter>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.chartBlue} />题1 雇佣伤害：乙杀死丙 → 甲<NoteHi style={{fontSize: 15}}>过于自信过失</NoteHi>，定<ThinU color={C.chartBlue}>故意伤害罪致人死亡</ThinU></span>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.specPurpleSoft, border: `2px solid ${C.specPurple}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Megaphone size={20} color={C.specPurple} />题2 教唆抢劫：乙杀死丙 → 甲定<ThinU color={C.specPurple}>抢劫罪致人死亡</ThinU></span>
        </Enter>
        <Enter delay={76} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>甲的告诫挡不住过限杀人，但过失仍在 → 落到「轻罪＋致人死亡」的秤上</Enter>
      </div>
    </div>
  </Shell>
);

export const ShortfallVsExcessScene = () => (
  <Shell code="06" title="实行不足 vs 实行过限">
    <div data-layout="shortfall-excess-mirror" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="shortfall-excess-track,inclusive-eval-strip" data-focal-rule="co-accomplices-always-anchor-to-the-lighter-crime" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Layers size={250} color={C.specPurple} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="mirror-track" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 210, display: 'flex', gap: 16}}>
        <div style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}><ArrowDownRight size={26} color={C.chartBlue} /><TriageLabel size={22}>实行不足</TriageLabel></Enter>
          <Enter delay={12} style={{fontSize: 19, fontWeight: 700}}>预定的共同犯罪是<ThinU color={C.chartBlue}>重罪</ThinU>，实行犯只实施了<ThinU color={C.chartBlue}>轻罪</ThinU></Enter>
          <Enter delay={22} style={{fontSize: 18, fontWeight: 800}}>约定重罪只实施轻罪 → 其他共犯人成立<SoftHi>轻罪</SoftHi>的教唆犯、帮助犯</Enter>
        </div>
        <div style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.lesionRed}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}><ArrowUpRight size={26} color={C.lesionRed} /><TriageLabel size={22} color={C.lesionRed}>实行过限</TriageLabel></Enter>
          <Enter delay={18} style={{fontSize: 19, fontWeight: 700}}>约定<ThinU color={C.lesionRed}>轻罪</ThinU>却实施<ThinU color={C.lesionRed}>重罪</ThinU></Enter>
          <Enter delay={28} style={{fontSize: 18, fontWeight: 800}}>其他共犯人仍成立<SoftHi>轻罪</SoftHi>的教唆犯、帮助犯（按包容评价关系处理）</Enter>
        </div>
      </div>

      <div data-final-knowledge="inclusive-strip" style={{position: 'absolute', left: 0, top: 226, width: 1776, height: 120, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={40}><Layers size={26} color={C.specPurple} /></Enter>
        <Enter delay={48} style={{fontSize: 20, fontWeight: 900}}>同一杆秤：共犯人永远锚在<NoteHi style={{fontSize: 18}}>轻罪</NoteHi>上——入户抢劫可包容评价为普通抢劫</Enter>
      </div>

      <div data-final-knowledge="quiz-strip" style={{position: 'absolute', left: 0, top: 362, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.instrumentGray}`, borderRadius: 6, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={24} color={C.instrumentGray} />
          <TriageLabel size={21} color={C.instrumentGray}>两道对偶题</TriageLabel>
        </Enter>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 4, padding: '7px 12px'}}>题1 甲教唆入户抢劫，乙仅普通抢劫 → 甲＝普通抢劫罪的<WardChip tone="blue" style={{fontSize: 16}}>教唆犯</WardChip></span>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.lesionRedSoft, border: `2px solid ${C.lesionRed}`, borderRadius: 4, padding: '7px 12px'}}>题2 甲教唆普通抢劫，乙入户抢劫 → 甲＝普通抢劫罪的教唆犯，<Neg size={16}>不能适用</Neg>入户抢劫的升格法定刑</span>
        </Enter>
      </div>
    </div>
  </Shell>
);
