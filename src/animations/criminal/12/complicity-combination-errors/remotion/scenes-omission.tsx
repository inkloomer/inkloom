import type {ReactNode} from 'react';
import {AlertTriangle, ArrowUpRight, Ban, EyeOff, Hand, PauseCircle, ShieldAlert, Swords, Users} from 'lucide-react';import {C, ConsultStamp, Enter, NoteHi, Neg, Shell, ThinU, TriageLabel, Totem, WardChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.specPurpleSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const OmissionCombinationScene = () => (
  <Shell code="03" title="共同犯罪 × 不作为犯：三间病房">
    <div data-layout="omission-ward-bays" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-ward-bays,prior-conduct-note" data-focal-rule="omission-duty-splits-perpetrator-and-helper" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><PauseCircle size={250} color={C.specPurple} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="bay-duty" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 224, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
          <PauseCircle size={28} color={C.chartBlue} />
          <TriageLabel size={22}>病房① 义务人实行</TriageLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 19, fontWeight: 700, flex: 1}}>甲不想履行扶养义务欲遗弃父亲，让乙帮忙或教唆</Enter>
        <Enter delay={24} style={{fontSize: 19, fontWeight: 800, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.chartBlue} />甲＝不作为犯的<SoftHi>实行犯</SoftHi></span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Hand size={20} color={C.specPurple} />乙＝<ThinU color={C.specPurple}>帮助犯</ThinU>或<ThinU color={C.specPurple}>教唆犯</ThinU>（乙无身份不能成正犯）</span>
        </Enter>
      </div>

      <div data-final-knowledge="bay-help" style={{position: 'absolute', left: 0, top: 240, width: 1776, height: 224, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
          <EyeOff size={28} color={C.specPurple} />
          <TriageLabel size={22} color={C.specPurple}>病房② 义务人帮助</TriageLabel>
        </Enter>
        <Enter delay={48} style={{fontSize: 19, fontWeight: 700, flex: 1}}>乙用合同诈骗，法务甲睁一只眼闭一只眼</Enter>
        <Enter delay={58} style={{fontSize: 19, fontWeight: 800, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <span>乙＝诈骗罪的<SoftHi>实行犯</SoftHi></span>
          <span>甲＝<ThinU color={C.specPurple}>不作为的帮助犯</ThinU></span>
        </Enter>
      </div>

      <div data-final-knowledge="bay-prior" style={{position: 'absolute', left: 0, top: 480, width: 1776, height: 198, backgroundColor: C.panel, border: `3px solid ${C.lesionRed}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ShieldAlert size={28} color={C.lesionRed} />
          <TriageLabel size={22} color={C.lesionRed}>病房③ 先行行为制造危险</TriageLabel>
        </Enter>
        <Enter delay={80} style={{fontSize: 19, fontWeight: 700}}>甲乙打晕丙后，乙单方犯强奸或盗窃，甲不阻止</Enter>
        <Enter delay={90} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <span>甲＝强奸/盗窃的<ThinU color={C.lesionRed}>不作为帮助犯</ThinU></span>
          <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}><WardChip tone="red" style={{fontSize: 16}}>原因</WardChip>甲有<SoftHi>先行行为</SoftHi>引发的<ThinU color={C.lesionRed}>保护义务</ThinU></span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const ExcessConceptStandardScene = () => (
  <Shell code="04" title="实行过限：多干的部分谁背">
    <div data-layout="excess-gate-standard" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="excess-gate-row,knowledge-trap-strip" data-focal-rule="excess-liability-turns-on-intent-not-knowledge" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><ArrowUpRight size={250} color={C.lesionRed} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="excess-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.panel, border: `3px solid ${C.lesionRed}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ArrowUpRight size={26} color={C.lesionRed} />
          <TriageLabel size={23} color={C.lesionRed}>实行过限</TriageLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>甲乙共同实施 A 罪时，实行犯乙<ThinU color={C.lesionRed}>多实施了 B 行为</ThinU></Enter>
      </div>

      <div data-final-knowledge="standard-rows" style={{position: 'absolute', left: 0, top: 112, width: 1776, height: 168, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 800}}><Ban size={22} color={C.chartBlue} />过限行为<SoftHi>超出共同故意</SoftHi>范围 → 对过限部分<Neg size={18}>不负故意责任</Neg></Enter>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 800}}><AlertTriangle size={22} color={C.specPurple} />但有可能负<NoteHi style={{fontSize: 17}}>过失责任</NoteHi></Enter>
      </div>

      <div data-final-knowledge="trap-board" style={{position: 'absolute', left: 0, top: 296, width: 1776, height: 236, backgroundColor: C.panel, border: `3px dashed ${C.lesionRed}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <AlertTriangle size={26} color={C.lesionRed} />
          <TriageLabel size={22} color={C.lesionRed}>认识错误误区：别拿「知情」当归责标准</TriageLabel>
        </Enter>
        <Enter delay={58} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <WardChip tone="red" style={{fontSize: 17}}>不知情</WardChip>肯定不用负责
          <WardChip tone="paper" style={{fontSize: 17, borderColor: C.specPurple}}>知情</WardChip><ThinU color={C.specPurple}>不一定</ThinU>负责 → 还要看有无<SoftHi>犯罪故意</SoftHi>
        </Enter>
      </div>

      <div data-final-knowledge="classify-strip" style={{position: 'absolute', left: 0, top: 548, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.instrumentGray}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={24} color={C.instrumentGray} />
          <TriageLabel size={21} color={C.instrumentGray}>共同犯罪的分类</TriageLabel>
        </Enter>
        <Enter delay={82} style={{fontSize: 18, fontWeight: 800}}>简单共同犯罪＝只有共同正犯，没有教唆犯帮助犯；复杂共同犯罪＝正犯＋教唆犯或帮助犯 → 两种都<Swords size={20} color={C.instrumentGray} /><ThinU color={C.instrumentGray}>可能存在实行过限</ThinU></Enter>
      </div>
    </div>
  </Shell>
);
