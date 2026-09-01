import type {ReactNode} from 'react';
import {AlertTriangle, Ban, Brain, Eye, Gavel, Hand, Hourglass, Swords, Users, Weight} from 'lucide-react';
import {C, Enter, Neg, PillarLabel, Seal, Shell, ThinU, Totem, WeighChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.benchTealSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

const RowCard = ({icon, color, chip, children, delay, grow = 1}: {icon: ReactNode; color: string; chip: string; children: ReactNode; delay: number; grow?: number}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 10, border: `2px solid ${color}`, borderRadius: 4, padding: '8px 12px', flex: grow}}>
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', flexShrink: 0}}>{icon}</Enter>
    <Enter delay={delay + 4}><WeighChip tone="paper" style={{fontSize: 18, borderColor: color}}>{chip}</WeighChip></Enter>
    <Enter delay={delay + 10} style={{fontSize: 19, fontWeight: 800, flexWrap: 'wrap'}}>{children}</Enter>
  </div>
);

export const CapacityGapCoPrincipalsScene = () => (
  <Shell code="03" title="共同正犯：有责任能力 ＋ 无责任能力">
    <div data-layout="capacity-mirror-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="illness-mirror-pair,joint-liability-transfer,four-element-defect-note" data-focal-rule="joint-perpetration-transfers-result-to-capable-actor" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Brain size={250} color={C.benchTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="capacity-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Brain size={26} color={C.benchTeal} />
          <PillarLabel size={23}>共同正犯·责任能力差异</PillarLabel>
        </Enter>
        <Enter delay={12}><WeighChip tone="teal" style={{fontSize: 19}}>甲 有责任能力</WeighChip></Enter>
        <Enter delay={20}><WeighChip tone="paper" style={{fontSize: 19}}>乙 无责任能力（精神病）</WeighChip></Enter>
        <Enter delay={30} style={{fontSize: 20, fontWeight: 800, marginLeft: 'auto'}}>案例：有精神病与无精神病<SoftHi>共同伤害</SoftHi></Enter>
      </div>

      <div data-final-knowledge="liability-board" style={{position: 'absolute', left: 0, top: 116, width: 1050, height: 300, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={36}><PillarLabel size={23}>违法与归责（二人均过）</PillarLabel></Enter>
        <RowCard icon={<Users size={24} color={C.benchTeal} />} color={C.benchTeal} chip="客观行为" delay={44}>
          违法具有一起性 → 构成该阶段的<SoftHi>共同正犯</SoftHi>
        </RowCard>
        <RowCard icon={<Weight size={24} color={C.bronze} />} color={C.bronze} chip="结果归责" delay={58} grow={1.15}>
          按<ThinU color={C.bronze}>部分实行 · 全部负责</ThinU>原则，双方均对危害结果（重伤）负责
        </RowCard>
      </div>

      <div data-final-knowledge="acquittal-board" style={{position: 'absolute', left: 1072, top: 116, width: 704, height: 300, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={42} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={26} color={C.vermilion} />
          <PillarLabel size={23} color={C.vermilion}>排除责任（各自评价）</PillarLabel>
        </Enter>
        <RowCard icon={<Ban size={24} color={C.vermilion} />} color={C.vermilion} chip="无责任能力者" delay={54}>
          最终判定为<Seal delay={60} tone="vermilion">无罪</Seal>
        </RowCard>
        <RowCard icon={<Swords size={24} color={C.benchTeal} />} color={C.benchTeal} chip="有责任能力者" delay={68} grow={1.15}>
          最终定该罪（重伤）<Seal delay={74} tone="teal">既遂</Seal>
        </RowCard>
      </div>

      <div data-final-knowledge="defect-strip" style={{position: 'absolute', left: 0, right: 0, top: 434, bottom: 0, backgroundColor: C.panel, border: `3px dashed ${C.vermilion}`, borderRadius: 6, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}>
          <AlertTriangle size={26} color={C.vermilion} />
          <PillarLabel size={22} color={C.vermilion}>四要件缺陷</PillarLabel>
        </Enter>
        <Enter delay={90} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
          <span style={{fontSize: 19, fontWeight: 700}}>若按四要件：精神病患者<ThinU color={C.vermilion}>不是合格主体</ThinU> → 直接无罪，只能单独处理有责任能力者</span>
          <Neg size={19}>再按存疑时有利于被告 → 其对重伤结果不负责 —— 显然不合理</Neg>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const HelperPrincipalPairsScene = () => (
  <Shell code="04" title="帮助犯 ＋ 正犯：两种落差组合">
    <div data-layout="helper-pair-cabinets" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="dual-cabinet-role-analysis,verdict-row-sets" data-focal-rule="capable-helper-behind-incapable-principal-stays-helper" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Hand size={250} color={C.bronze} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="cabinet-age" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Hourglass size={26} color={C.bronze} />
          <PillarLabel size={23} color={C.bronze}>组合一 · 责任年龄落差</PillarLabel>
        </Enter>
        <RowCard icon={<Eye size={24} color={C.bronze} />} color={C.bronze} chip="案例" delay={12}>大爷为 10 岁小孩<SoftHi>望风杀人</SoftHi></RowCard>
        <RowCard icon={<Users size={24} color={C.benchTeal} />} color={C.benchTeal} chip="定性" delay={24}>二人构成故意犯罪的<SoftHi>共同犯罪</SoftHi></RowCard>
        <RowCard icon={<Swords size={24} color={C.benchTeal} />} color={C.benchTeal} chip="角色" delay={36} grow={1.2}>无责任年龄者是<ThinU color={C.benchTeal}>正犯</ThinU>，有责任年龄者是<ThinU color={C.bronze}>帮助犯</ThinU></RowCard>
        <RowCard icon={<Ban size={24} color={C.vermilion} />} color={C.vermilion} chip="责任" delay={48}>无责任年龄的正犯未达年龄 → 最终<Seal delay={54} tone="vermilion">无罪</Seal></RowCard>
        <Enter delay={60} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>小孩主导 · 大人只加一把力 → 大人落在帮助犯位置</Enter>
      </div>

      <div data-final-knowledge="cabinet-capacity" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
        <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Brain size={26} color={C.benchTeal} />
          <PillarLabel size={23}>组合二 · 责任能力落差<WeighChip tone="vermilion" style={{fontSize: 16, marginLeft: 8}}>2018年考点</WeighChip></PillarLabel>
        </Enter>
        <RowCard icon={<Hand size={24} color={C.benchTeal} />} color={C.benchTeal} chip="案例" delay={20}>给精神病患者<SoftHi>递木棒打人</SoftHi></RowCard>
        <RowCard icon={<Users size={24} color={C.benchTeal} />} color={C.benchTeal} chip="定性" delay={32}>二人构成故意伤害罪的<SoftHi>共同犯罪</SoftHi></RowCard>
        <RowCard icon={<Swords size={24} color={C.benchTeal} />} color={C.benchTeal} chip="角色" delay={44} grow={1.2}>无责任能力者是<ThinU color={C.benchTeal}>正犯</ThinU>，有责任能力者是<ThinU color={C.bronze}>帮助犯</ThinU></RowCard>
        <RowCard icon={<Gavel size={24} color={C.vermilion} />} color={C.vermilion} chip="结果" delay={56} grow={1.2}>患者最终<Seal delay={62} tone="vermilion">无罪</Seal>；帮助犯定对应犯罪的<ThinU color={C.bronze}>帮助犯</ThinU></RowCard>
        <Enter delay={66} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>有责者躲在无责者身后 → 仍按自己出手的部分定帮助犯</Enter>
      </div>
    </div>
  </Shell>
);

