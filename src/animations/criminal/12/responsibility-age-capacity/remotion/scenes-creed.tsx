import type {ReactNode} from 'react';
import {AlertTriangle, Ban, Baby, Brain, Crosshair, EyeOff, Hand, Megaphone, Swords, Users} from 'lucide-react';
import {C, Enter, Neg, PillarLabel, Seal, Shell, ThinU, Totem, WeighChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.benchTealSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

const CreedRow = ({chip, chipColor, icon, delay, children, grow = 1}: {chip: string; chipColor: string; icon: ReactNode; delay: number; children: ReactNode; grow?: number}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 14, backgroundColor: C.panel, border: `2.5px solid ${chipColor}`, borderRadius: 5, padding: '12px 18px', flex: grow}}>
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
      {icon}
      <WeighChip tone="paper" style={{fontSize: 19, borderColor: chipColor}}>{chip}</WeighChip>
    </Enter>
    <Enter delay={delay + 12} style={{fontSize: 20, fontWeight: 800, flexWrap: 'wrap'}}>{children}</Enter>
  </div>
);

export const MinorAdultRoleCreedScene = () => (
  <Shell code="07" title="总结口诀：小孩犯罪，大人角色">
    <div data-layout="role-creed-scroll" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-role-creed-rows,omission-extra-verdict" data-focal-rule="adult-role-follows-dominion-not-age" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Baby size={250} color={C.bronze} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="creed-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Baby size={26} color={C.bronze} />
          <PillarLabel size={24} color={C.bronze}>一句话定角色</PillarLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 21, fontWeight: 900}}>看谁<ThinU color={C.benchTeal}>主导</ThinU>、大人<ThinU color={C.benchTeal}>作为还是不作为</ThinU></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 108, width: 1776, height: 470, display: 'flex', flexDirection: 'column', gap: 12}}>
        <div data-final-knowledge="creed-lookout-row" style={{display: 'flex'}}>
          <CreedRow chip="① 小孩主导 · 大人作为" chipColor={C.bronze} icon={<Hand size={26} color={C.bronze} />} delay={22}>
            10 岁小孩盗窃，指使大爷望风，大爷照办 → 大爷构成<SoftHi>作为的帮助犯</SoftHi><Seal delay={36} tone="bronze">帮助犯</Seal>
          </CreedRow>
        </div>
        <div data-final-knowledge="creed-dominion-row" style={{display: 'flex'}}>
          <CreedRow chip="② 大人主导 · 好小孩" chipColor={C.benchTeal} icon={<Crosshair size={26} color={C.benchTeal} />} delay={48}>
            大爷指使无犯意的小孩盗窃，小孩照办 → 大爷构成<SoftHi>作为的间接正犯</SoftHi><Seal delay={62} tone="teal">间接正犯</Seal>
          </CreedRow>
        </div>
        <div data-final-knowledge="creed-omission-row" style={{display: 'flex', flex: 1.15}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: C.panel, border: `2.5px solid ${C.vermilion}`, borderRadius: 5, padding: '12px 18px', flex: 1}}>
            <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <EyeOff size={26} color={C.vermilion} />
              <WeighChip tone="paper" style={{fontSize: 19, borderColor: C.vermilion}}>③ 大人不作为</WeighChip>
              <span style={{fontSize: 20, fontWeight: 800}}>10 岁小孩盗窃，父亲发现且能轻易阻止却<ThinU color={C.vermilion}>不阻止</ThinU><WeighChip tone="vermilion" style={{fontSize: 16, marginLeft: 6}}>2021年考点</WeighChip></span>
            </Enter>
            <Enter delay={88} style={{display: 'flex', gap: 12}}>
              <span style={{flex: 1.25, fontSize: 19, fontWeight: 800, backgroundColor: C.bronzeSoft, border: `2px solid ${C.bronze}`, borderRadius: 4, padding: '8px 12px'}}>父亲构成<SoftHi>不作为的帮助犯</SoftHi>；作用超出普通帮助程度 → 在帮助犯基础上构成<ThinU color={C.bronze}>共同正犯</ThinU></span>
              <span style={{flex: 1, fontSize: 19, fontWeight: 800, backgroundColor: C.benchTealSoft, border: `2px solid ${C.benchTeal}`, borderRadius: 4, padding: '8px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.benchTeal} />多数说：<Neg size={18}>不构成间接正犯</Neg>——缺<ThinU color={C.benchTeal}>指使</ThinU>与<ThinU color={C.benchTeal}>支配</ThinU></span>
            </Enter>
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, top: 594, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={104}><PillarLabel size={21} color={C.benchTeal}>记忆轴</PillarLabel></Enter>
        <Enter delay={112} style={{fontSize: 20, fontWeight: 800}}>主导权在大人手里 → 间接正犯；大人只帮忙 → 帮助犯；站着不动 → 不作为的帮助犯</Enter>
      </div>
    </div>
  </Shell>
);

export const InstigatorCapacityCaseScene = () => (
  <Shell code="08" title="教唆犯（有责）＋ 正犯（无责）">
    <div data-layout="instigator-capacity-verdict" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="capable-instigator-case,legacy-view-rebuttal-strip" data-focal-rule="capable-instigator-behind-incapable-principal-stays-instigator" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Megaphone size={250} color={C.benchTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="case-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Megaphone size={26} color={C.benchTeal} />
          <PillarLabel size={23}>案例</PillarLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 21, fontWeight: 800}}>教唆<SoftHi>不知情的精神病患者</SoftHi>伤害他人</Enter>
        <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto'}}>
          <Brain size={24} color={C.benchTeal} />
          <WeighChip tone="paper" style={{fontSize: 18}}>教唆犯有责任能力 · 正犯无责任能力</WeighChip>
        </Enter>
      </div>

      <div data-final-knowledge="disposition-board" style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 356, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.benchTeal} />
          <PillarLabel size={23}>定性与角色</PillarLabel>
        </Enter>
        <Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{fontSize: 20, fontWeight: 800, backgroundColor: C.benchTealSoft, border: `2px solid ${C.benchTeal}`, borderRadius: 4, padding: '8px 14px'}}>双方构成故意伤害罪的<SoftHi>共同犯罪</SoftHi>；无责任能力者是<ThinU color={C.benchTeal}>正犯</ThinU></span>
          <Swords size={24} color={C.benchTeal} />
        </Enter>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{fontSize: 20, fontWeight: 800, backgroundColor: C.bronzeSoft, border: `2px solid ${C.bronze}`, borderRadius: 4, padding: '8px 14px'}}>有责任能力者<Neg size={19}>不构成间接正犯</Neg>，构成<Seal delay={68} tone="bronze">教唆犯</Seal></span>
          <Crosshair size={24} color={C.vermilion} />
          <span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>有支配力才升格间接正犯；此处仅引起犯意</span>
        </Enter>
        <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{fontSize: 20, fontWeight: 800, backgroundColor: C.vermilionSoft, border: `2px solid ${C.vermilion}`, borderRadius: 4, padding: '8px 14px'}}>最终处理：患者<Seal delay={84} tone="vermilion">无罪</Seal>；教唆者定对应犯罪的<ThinU color={C.bronze}>教唆犯</ThinU></span>
          <Ban size={24} color={C.vermilion} />
        </Enter>
      </div>

      <div data-final-knowledge="rebuttal-strip" style={{position: 'absolute', left: 0, top: 492, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px dashed ${C.vermilion}`, borderRadius: 6, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}>
          <AlertTriangle size={26} color={C.vermilion} />
          <PillarLabel size={22} color={C.vermilion}>传统理论误区<WeighChip tone="vermilion" style={{fontSize: 16, marginLeft: 8}}>2014年考点</WeighChip></PillarLabel>
        </Enter>
        <Enter delay={102} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
          <span style={{fontSize: 19, fontWeight: 700}}>传统理论：有能力者与无能力者共同犯罪 → <ThinU color={C.vermilion}>一律构成间接正犯</ThinU></span>
          <Neg size={19}>真题专门批判过：这种看法不正确</Neg>
        </Enter>
      </div>
    </div>
  </Shell>
);
