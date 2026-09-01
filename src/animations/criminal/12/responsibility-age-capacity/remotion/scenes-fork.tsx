import type {ReactNode} from 'react';
import {AlertTriangle, Baby, Ban, Brain, Crosshair, Gavel, Grab, Hourglass, Megaphone, Swords, TrendingUp, Users} from 'lucide-react';
import {C, Enter, Neg, PillarLabel, Seal, Shell, ThinU, Totem, WeighChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.benchTealSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

const BranchRow = ({tone, chip, chipColor, icon, delay, children, grow = 1}: {tone: string; chip: string; chipColor: string; icon: ReactNode; delay: number; children: ReactNode; grow?: number}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panel, border: `2.5px solid ${tone}`, borderRadius: 5, padding: '10px 14px', flex: grow}}>
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}>
      {icon}
      <WeighChip tone="paper" style={{fontSize: 18, borderColor: chipColor}}>{chip}</WeighChip>
    </Enter>
    <Enter delay={delay + 10} style={{fontSize: 19, fontWeight: 800, flexWrap: 'wrap'}}>{children}</Enter>
  </div>
);

export const InstigatorThreeBranchesScene = () => (
  <Shell code="05" title="教唆犯 ＋ 正犯：实行者状态三分支">
    <div data-layout="instigation-fork-trident" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="trident-fork,inclusive-promotion-strip" data-focal-rule="dominion-presence-promotes-instigator-to-indirect-perpetrator" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Megaphone size={250} color={C.benchTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="fork-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Megaphone size={26} color={C.benchTeal} />
          <PillarLabel size={23}>教唆犯（有责任年龄）＋ 正犯（责任年龄分情况）</PillarLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 20, fontWeight: 800, marginLeft: 'auto'}}>看实行者的<ThinU color={C.vermilion}>责任年龄 · 规范意识 · 独立作案能力</ThinU></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 112, width: 1776, height: 434, display: 'flex', flexDirection: 'column', gap: 11}}>
        <div data-final-knowledge="branch-qualified-teen" style={{display: 'flex', flex: 1}}>
          <BranchRow tone={C.benchTeal} chip="① 实行者已达责任年龄" chipColor={C.benchTeal} icon={<Users size={24} color={C.benchTeal} />} delay={24} grow={1}>
            教唆 16 周岁者盗窃：实行者有规范意识、能独立作案 → 教唆者对其<SoftHi>缺乏支配力</SoftHi> → 仅构成<Seal delay={38} tone="teal">教唆犯</Seal>
          </BranchRow>
        </div>
        <div data-final-knowledge="branch-unqualified-child" style={{display: 'flex', flex: 1.35}}>
          <BranchRow tone={C.vermilion} chip="② 实行者未达责任年龄" chipColor={C.vermilion} icon={<Baby size={24} color={C.vermilion} />} delay={44} grow={1.35}>
            教唆 8 周岁者盗窃：无规范意识、无独立能力 → 教唆者既引起犯罪（教唆犯），又对其有支配力（间接正犯）→ 二者<ThinU color={C.vermilion}>包容评价</ThinU>，按<ThinU color={C.vermilion}>就高不就低</ThinU>以<Seal delay={62} tone="vermilion">间接正犯</Seal>论处
          </BranchRow>
        </div>
        <div data-final-knowledge="branch-mature-teen" style={{display: 'flex', flex: 1.2}}>
          <BranchRow tone={C.bronze} chip="③ 未达年龄但已成熟" chipColor={C.bronze} icon={<Hourglass size={24} color={C.bronze} />} delay={72} grow={1.2}>
            教唆有盗窃惯性的 15 岁者：已有规范意识与独立能力 → 教唆者<SoftHi>难以形成支配力</SoftHi> → 不构成间接正犯，仅构成<Seal delay={88} tone="bronze">教唆犯</Seal>；实行者是客观阶段的实行犯，责任阶段最终无罪
          </BranchRow>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, top: 562, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '12px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingUp size={26} color={C.bronze} />
          <span style={{fontSize: 21, fontWeight: 900}}>分支②的竞合处理：教唆犯 ＜ 间接正犯（位阶） → <Seal delay={108} tone="vermilion">就高不就低</Seal></span>
        </Enter>
        <Enter delay={112} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}><Baby size={20} color={C.inkSoft} />三分支一句话：看实行者能不能被支配——能则间接正犯，不能则只当教唆犯</Enter>
      </div>
    </div>
  </Shell>
);

export const DominionRealStandardScene = () => (
  <Shell code="06" title="区分标准：不看年龄，看支配力">
    <div data-layout="dominion-scale-contrast" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="formal-vs-real-track,inclusive-eval-chain,false-age-case-bay" data-focal-rule="substantive-dominion-test-replaces-formal-age-test" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Crosshair size={250} color={C.benchTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="formal-track" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 250, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 6, padding: '12px 18px'}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Hourglass size={24} color={C.vermilion} />
          <PillarLabel size={22} color={C.vermilion}>传统理论 · 形式标准</PillarLabel>
        </Enter>
        <Enter delay={14} style={{marginTop: 10, fontSize: 20, fontWeight: 800}}>区分标准＝被利用人是否具有<ThinU color={C.vermilion}>责任年龄</ThinU></Enter>
        <Enter delay={26} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{fontSize: 19, fontWeight: 700}}>教唆犯与间接正犯被视为<SoftHi>对立排斥</SoftHi>关系</span>
          <Neg size={19}>指使无责任年龄者犯罪 → 一律构成间接正犯</Neg>
        </Enter>
      </div>

      <div data-final-knowledge="real-track" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 250, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '12px 18px'}}>
        <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Crosshair size={24} color={C.benchTeal} />
          <PillarLabel size={22}>正确观点 · 实质标准</PillarLabel>
        </Enter>
        <Enter delay={20} style={{marginTop: 10, fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Grab size={22} color={C.benchTeal} />区分标准＝教唆者有无<ThinU color={C.benchTeal}>支配力</ThinU></Enter>
        <Enter delay={32} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{fontSize: 19, fontWeight: 700}}>二者实际是<SoftHi>包容评价</SoftHi>（位阶）关系</span>
          <span style={{fontSize: 19, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8}}><Swords size={20} color={C.benchTeal} />间接正犯 ⊃ 教唆犯 → 竞合时就高</span>
        </Enter>
      </div>

      <div data-final-knowledge="false-age-bay" style={{position: 'absolute', left: 0, top: 266, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '14px 20px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={26} color={C.bronze} />
          <PillarLabel size={23} color={C.bronze}>适用案例 · 虚报年龄案</PillarLabel>
          <Enter delay={52}><WeighChip tone="paper" style={{fontSize: 18, borderColor: C.bronze}}>父亲为 15 岁儿子虚报公务员年龄，教唆其刑讯逼供</WeighChip></Enter>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', gap: 14}}>
          <Enter delay={64} style={{flex: 1, backgroundColor: C.vermilionSoft, border: `2px solid ${C.vermilion}`, borderRadius: 4, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 19, fontWeight: 800}}><Ban size={20} color={C.vermilion} />按传统理论</span>
            <span style={{fontSize: 19, fontWeight: 700}}>父亲无司法人员身份 → <Neg size={18}>不构成间接正犯，无法处理</Neg></span>
          </Enter>
          <Enter delay={76} style={{flex: 1.2, backgroundColor: C.benchTealSoft, border: `2px solid ${C.benchTeal}`, borderRadius: 4, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 19, fontWeight: 800}}><Users size={20} color={C.benchTeal} />按实质标准</span>
            <span style={{fontSize: 19, fontWeight: 700}}>实行犯是儿子 → 父亲构成刑讯逼供罪的<Seal delay={84} tone="teal">教唆犯</Seal></span>
          </Enter>
        </div>
        <Enter delay={92} style={{marginTop: 12, fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}>
          <AlertTriangle size={20} color={C.bronze} />实质标准让「无身份教唆」也有落点：只审查有无<ThinU color={C.vermilion}>支配力</ThinU>
        </Enter>
      </div>
    </div>
  </Shell>
);
