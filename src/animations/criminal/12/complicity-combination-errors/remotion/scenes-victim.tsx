import type {ReactNode} from 'react';
import {Ban, Fish, HeartCrack, Split, Swords, Users} from 'lucide-react';
import {C, ConsultStamp, Enter, NoteHi, Neg, Shell, ThinU, TriageLabel, Totem, WardChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.specPurpleSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const VictimAmongOffendersScene = () => (
  <Shell code="09" title="乌龙案：犯罪人成了被害人">
    <div data-layout="victim-ward-three" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-ward-rows,no-crime-strips" data-focal-rule="hitting-your-own-side-still-counts-or-acquits" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><HeartCrack size={250} color={C.lesionRed} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="ward-one" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 236, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Fish size={24} color={C.chartBlue} />
          <TriageLabel size={21}>① 共犯人成为被害人 · 渔网案</TriageLabel>
          <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>甲欲偷丙的渔网，借乙的工具；误将乙的渔网当作丙的偷走</span>
        </Enter>
        <Enter delay={14} style={{display: 'flex', gap: 12, flex: 1}}>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 5, padding: '8px 12px'}}>甲：对丙（预定目标）未着手＝盗窃罪<ThinU color={C.chartBlue}>犯罪预备</ThinU>；对乙有对象错误但<Neg size={15}>不影响</Neg>盗窃罪既遂 → 想象竞合定盗窃罪既遂</span>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.specPurpleSoft, border: `2px solid ${C.specPurple}`, borderRadius: 5, padding: '8px 12px'}}>乙：从属于甲＝帮助犯（预备）；乙是被害人，对此<Neg size={15}>无需负责</Neg> → 仅构成盗窃罪帮助犯（犯罪预备）</span>
        </Enter>
      </div>

      <div data-final-knowledge="ward-two" style={{position: 'absolute', left: 0, top: 252, width: 1776, height: 228, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
        <Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Swords size={24} color={C.specPurple} />
          <TriageLabel size={21} color={C.specPurple}>② 正犯自己成为被害人 · 撬车案</TriageLabel>
          <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>甲帮乙撬车，最后乙撬的竟是甲的车</span>
        </Enter>
        <Enter delay={40} style={{display: 'flex', gap: 12, flex: 1}}>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.specPurpleSoft, border: `2px solid ${C.specPurple}`, borderRadius: 5, padding: '8px 12px'}}>针对实害对象：正犯乙是<Neg size={15}>被害人</Neg> → 不构成犯罪</span>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 5, padding: '8px 12px'}}>帮助者甲：按<SoftHi>共犯从属性</SoftHi>，正犯不犯罪 → 帮助者也<Neg size={15}>不构成</Neg>犯罪</span>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.instrumentGraySoft, border: `2px solid ${C.instrumentGray}`, borderRadius: 5, padding: '8px 12px'}}>针对原目标：两人仅在原目标进程内成立<WardChip tone="gray" style={{fontSize: 14}}>中止</WardChip>或<WardChip tone="gray" style={{fontSize: 14}}>未遂</WardChip></span>
        </Enter>
      </div>

      <div data-final-knowledge="ward-three" style={{position: 'absolute', left: 0, top: 496, width: 1776, height: 182, backgroundColor: C.panel, border: `3px solid ${C.lesionRed}`, borderRadius: 6, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={24} color={C.lesionRed} />
          <TriageLabel size={21} color={C.lesionRed}>③ 共同正犯误伤另一正犯</TriageLabel>
          <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>甲乙共同抢劫，甲误把逃跑的乙当成目标打伤</span>
        </Enter>
        <Enter delay={68} style={{display: 'flex', gap: 12, flex: 1}}>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.lesionRedSoft, border: `2px solid ${C.lesionRed}`, borderRadius: 5, padding: '8px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Split size={20} color={C.lesionRed} />甲：对原目标＝<ThinU color={C.lesionRed}>预备</ThinU>；对乙＝<ThinU color={C.lesionRed}>未遂</ThinU> → 想象竞合择一重罪</span>
          <span style={{flex: 1, fontSize: 17, fontWeight: 700, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 5, padding: '8px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.chartBlue} />乙：对原目标＝预备；对自己受害 → <ConsultStamp delay={78} tone="red">宣告无罪</ConsultStamp></span>
        </Enter>
      </div>
    </div>
  </Shell>
);
