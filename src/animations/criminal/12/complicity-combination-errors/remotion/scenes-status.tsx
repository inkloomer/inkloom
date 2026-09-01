import type {ReactNode} from 'react';
import {Ban, Hand, IdCard, Landmark, Megaphone, Split, Swords, Users} from 'lucide-react';
import {C, ConsultStamp, Enter, NoteHi, Neg, ReferralArrow, Shell, ThinU, TriageLabel, Totem, WardChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.specPurpleSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

const RoleRow = ({chip, chipColor, icon, delay, children, grow = 1}: {chip: string; chipColor: string; icon: ReactNode; delay: number; children: ReactNode; grow?: number}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${chipColor}`, borderRadius: 6, padding: '10px 14px', flex: grow}}>
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
      {icon}
      <WardChip tone="paper" style={{fontSize: 18, borderColor: chipColor}}>{chip}</WardChip>
    </Enter>
    <Enter delay={delay + 12} style={{fontSize: 19, fontWeight: 800, flexWrap: 'wrap'}}>{children}</Enter>
  </div>
);

export const StatusCrimeRolesScene = () => (
  <Shell code="01" title="身份犯结合：谁有资格坐哪把交椅">
    <div data-layout="status-role-split" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="status-role-counter,separate-analysis-strip" data-focal-rule="status-crime-reserves-perpetrator-seat-for-status-holder" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><IdCard size={250} color={C.chartBlue} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="status-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <IdCard size={26} color={C.chartBlue} />
          <TriageLabel size={23}>真正身份犯 · 角色担当资格</TriageLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 20, fontWeight: 800}}>有<ThinU color={C.chartBlue}>定罪身份</ThinU>的犯罪，先分配座位，再看谁坐了哪把</Enter>
      </div>

      <div data-final-knowledge="role-rows" style={{position: 'absolute', left: 0, top: 112, width: 1150, height: 396, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <RoleRow chip="有身份者" chipColor={C.chartBlue} icon={<IdCard size={24} color={C.chartBlue} />} delay={26}>
          才有资格构成<SoftHi>正犯</SoftHi>（包括直接正犯和间接正犯）
        </RoleRow>
        <RoleRow chip="无身份者 · 正犯资格" chipColor={C.lesionRed} icon={<Ban size={24} color={C.lesionRed} />} delay={40}>
          <Neg size={19}>不能构成正犯</Neg>
        </RoleRow>
        <RoleRow chip="无身份者 · 共犯资格" chipColor={C.specPurple} icon={<Hand size={24} color={C.specPurple} />} delay={54} grow={1.15}>
          <SoftHi>可以构成共犯</SoftHi>（教唆犯、帮助犯）
        </RoleRow>
        <Enter delay={66} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>无身份者站不到「正犯」席上，但可以递刀递话</Enter>
      </div>

      <div data-final-knowledge="analysis-strip" style={{position: 'absolute', left: 1172, top: 112, width: 604, height: 396, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Split size={26} color={C.chartBlue} />
          <TriageLabel size={22}>分析路径</TriageLabel>
        </Enter>
        <Enter delay={48} style={{fontSize: 20, fontWeight: 800}}>① <SoftHi>分别分析</SoftHi>每个人</Enter>
        <Enter delay={58} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}>② 若同时触犯两个罪 → 想象竞合</Enter>
        <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 8}}><ReferralArrow delay={70} color={C.specPurple} /><span style={{fontSize: 20, fontWeight: 900}}>择一重罪论处</span></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 524, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.instrumentGray}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={82}><Users size={24} color={C.instrumentGray} /></Enter>
        <Enter delay={90} style={{fontSize: 19, fontWeight: 800}}>各看各的身份证与席位——「身份」只拦正犯席，不拦共犯席；冲突时想象竞合收拾残局</Enter>
      </div>
    </div>
  </Shell>
);

export const StatusCombinationTableScene = () => (
  <Shell code="02" title="三种结合类型 ＋ 司法解释特规">
    <div data-layout="combination-lane-rows" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-lane-rows,judicial-interpretation-strip" data-focal-rule="conviction-follows-the-perpetrator" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Swords size={250} color={C.chartBlue} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="combination-rows" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 330, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={2}><TriageLabel size={22}>结合类型 → 处理结论</TriageLabel></Enter>
        <RoleRow chip="① 有身份者＝身份犯的实行犯 ＋ 无身份者＝共犯" chipColor={C.chartBlue} icon={<IdCard size={24} color={C.chartBlue} />} delay={14} grow={1.1}>
          按<SoftHi>实行犯</SoftHi>来定罪（即按<ThinU color={C.chartBlue}>有身份者</ThinU>定罪）
        </RoleRow>
        <RoleRow chip="② 无身份者＝非身份犯的实行犯 ＋ 有身份者＝共犯" chipColor={C.specPurple} icon={<Swords size={24} color={C.specPurple} />} delay={28} grow={1.1}>
          按<SoftHi>实行犯</SoftHi>来定罪（即按<ThinU color={C.specPurple}>无身份者</ThinU>定罪）
        </RoleRow>
        <RoleRow chip="③ A身份者＝A身份犯的实行犯 ＋ B身份者＝B身份犯的实行犯" chipColor={C.lesionRed} icon={<Split size={24} color={C.lesionRed} />} delay={42} grow={1.2}>
          按<SoftHi>实行犯</SoftHi>来定罪；存在想象竞合，<ThinU color={C.lesionRed}>择一重罪</ThinU>论处
        </RoleRow>
      </div>

      <div data-final-knowledge="judicial-strip" style={{position: 'absolute', left: 0, top: 346, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.instrumentGray}`, borderRadius: 6, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={26} color={C.instrumentGray} />
          <TriageLabel size={22} color={C.instrumentGray}>司法解释的特殊规定</TriageLabel>
        </Enter>
        <Enter delay={66} style={{fontSize: 19, fontWeight: 700}}>公司企业中，<SoftHi>非国家工作人员</SoftHi>与<SoftHi>国家工作人员</SoftHi>勾结：分别利用各自的职务便利，共同将本单位财物非法占为己有</Enter>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <span style={{fontSize: 20, fontWeight: 900}}>→ 按照<WardChip tone="blue" style={{fontSize: 18}}>主犯</WardChip>的犯罪性质定罪；二人只能定<ThinU color={C.chartBlue}>同一个</ThinU>罪名</span>
          <ConsultStamp delay={84} tone="blue">仅针对贪污罪＋职务侵占罪情形</ConsultStamp>
        </Enter>
      </div>
    </div>
  </Shell>
);
