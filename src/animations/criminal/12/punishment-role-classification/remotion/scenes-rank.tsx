import type {ReactNode} from 'react';
import {Ban, Castle, Crown, Feather, Gavel, Hand, Megaphone, Siren, Sword, Users} from 'lucide-react';
import {C, DaisStamp, Enter, HallLabel, LaurelHi, Neg, RankArrow, RankChip, Shell, ThinU, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.meritGoldSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const TwoClassificationMethodsScene = () => (
  <Shell code="01" title="两套分类法：分工定角色，作用定处罚">
    <div data-layout="method-split-columns" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="method-split-columns,overlay-concurrent-strip" data-focal-rule="division-names-the-role-function-sets-the-punishment" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Crown size={250} color={C.daisViolet} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="division-column" style={{position: 'absolute', left: 0, top: 0, width: 640, height: 744, backgroundColor: C.panel, border: `3px solid ${C.slateTeal}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Sword size={26} color={C.slateTeal} />
          <HallLabel size={23} color={C.slateTeal}>分工分类法 · 定性</HallLabel>
        </Enter>
        <Enter delay={14} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.slateTealSoft, border: `2px solid ${C.slateTeal}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Sword size={24} color={C.slateTeal} /><span style={{fontSize: 21, fontWeight: 900}}>实行犯</span>
        </Enter>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.slateTealSoft, border: `2px solid ${C.slateTeal}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Megaphone size={24} color={C.slateTeal} /><span style={{fontSize: 21, fontWeight: 900}}>教唆犯</span>
        </Enter>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.slateTealSoft, border: `2px solid ${C.slateTeal}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Hand size={24} color={C.slateTeal} /><span style={{fontSize: 21, fontWeight: 900}}>帮助犯</span>
        </Enter>
      </div>

      <div data-final-knowledge="function-column" style={{position: 'absolute', left: 664, top: 0, width: 640, height: 744, backgroundColor: C.panel, border: `3px solid ${C.daisViolet}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Crown size={26} color={C.daisViolet} />
          <HallLabel size={23}>作用分类法 · 处罚</HallLabel>
        </Enter>
        <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.daisVioletSoft, border: `2px solid ${C.daisViolet}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Crown size={24} color={C.daisViolet} /><span style={{fontSize: 21, fontWeight: 900}}>主犯</span>
        </Enter>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.daisVioletSoft, border: `2px solid ${C.daisViolet}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Feather size={24} color={C.daisViolet} /><span style={{fontSize: 21, fontWeight: 900}}>从犯</span>
        </Enter>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.daisVioletSoft, border: `2px solid ${C.daisViolet}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Siren size={24} color={C.daisViolet} /><span style={{fontSize: 21, fontWeight: 900}}>胁从犯</span>
        </Enter>
      </div>

      <div data-final-knowledge="overlay-strip" style={{position: 'absolute', left: 1328, top: 0, width: 448, height: 744, backgroundColor: C.panel, border: `3px solid ${C.meritGold}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={16}><HallLabel size={22} color={C.meritGold}>两列怎么对上</HallLabel></Enter>
        <Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 800}}><Sword size={20} color={C.slateTeal} />实行犯 → 主犯 · 从犯 · 胁从犯</Enter>
        <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 800}}><Megaphone size={20} color={C.slateTeal} />教唆犯 → 主犯 · 从犯 · 胁从犯</Enter>
        <Enter delay={48} style={{display: 'flex', flexDirection: 'column', gap: 6, fontSize: 18, fontWeight: 800}}>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Hand size={20} color={C.slateTeal} />帮助犯 → 从犯 · 胁从犯</span>
          <RankChip tone="red" style={{fontSize: 16}}>不可能主犯</RankChip>
        </Enter>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 800}}><Ban size={20} color={C.verdictRed} />例：黑社会老大教唆小弟盗窃 → 老大＝教唆犯＋主犯</Enter>
        <Enter delay={70} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>胁从犯案例：甲胁迫乙「教唆丙盗窃，否则曝光丑闻」→ 乙＝教唆犯＋胁从犯；甲＝间接教唆者，也是教唆犯</Enter>
      </div>
    </div>
  </Shell>
);

export const RingleaderRelationsScene = () => (
  <Shell code="02" title="主犯 × 首要分子：交叉而不重合">
    <div data-layout="ringleader-vine-chart" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="chief-main-cross-strip,crowd-two-mode-bay" data-focal-rule="chief-molecule-and-ringleader-only-lock-in-crime-groups" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Castle size={250} color={C.daisViolet} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="clause-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108, backgroundColor: C.panel, border: `3px solid ${C.daisViolet}`, borderRadius: 6, padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'center'}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <HallLabel size={21}>刑法第26条第1款</HallLabel>
          <span style={{fontSize: 19, fontWeight: 800}}><SoftHi>主犯</SoftHi>＝组织、领导犯罪集团进行犯罪活动的，或在共同犯罪中起<ThinU color={C.daisViolet}>主要作用</ThinU>的</span>
        </Enter>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <HallLabel size={21} color={C.slateTeal}>刑法第97条</HallLabel>
          <span style={{fontSize: 19, fontWeight: 800}}><SoftHi>首要分子</SoftHi>＝在犯罪集团或聚众犯罪中起组织、策划、指挥作用的</span>
        </Enter>
      </div>

      <div data-final-knowledge="cross-strips" style={{position: 'absolute', left: 0, top: 124, width: 1776, height: 172, backgroundColor: C.panel, border: `3px solid ${C.meritGold}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={24} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 10}}><Crown size={24} color={C.meritGold} />犯罪集团的首要分子 <RankArrow delay={30} color={C.meritGold} /> <LaurelHi style={{fontSize: 18}}>一定</LaurelHi>是主犯</span>
          <span style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 10}}><Crown size={24} color={C.daisViolet} />犯罪集团的主犯 <RankArrow delay={40} color={C.daisViolet} /> <Neg size={19}>不一定</Neg>是首要分子（还有其他起主要作用者）</span>
        </Enter>
      </div>

      <div data-final-knowledge="crowd-bay" style={{position: 'absolute', left: 0, top: 312, width: 1776, height: 268, backgroundColor: C.panel, border: `3px solid ${C.slateTeal}`, borderRadius: 6, padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={24} color={C.slateTeal} />
          <HallLabel size={21} color={C.slateTeal}>聚众犯罪 · 两种情形</HallLabel>
        </Enter>
        <Enter delay={62} style={{display: 'flex', gap: 14, flex: 1}}>
          <span style={{flex: 1, fontSize: 18, fontWeight: 700, backgroundColor: C.slateTealSoft, border: `2px solid ${C.slateTeal}`, borderRadius: 5, padding: '8px 12px'}}>只处罚首要分子（如聚众扰乱公共场所秩序、交通秩序罪）：首要分子只有一人时<Neg size={16}>无共同犯罪</Neg>可言 → 聚众犯罪不一定都是共同犯罪</span>
          <span style={{flex: 1, fontSize: 18, fontWeight: 700, backgroundColor: C.slateTealSoft, border: `2px solid ${C.slateTeal}`, borderRadius: 5, padding: '8px 12px'}}>既处罚首要分子也处罚积极参与者（如聚众扰乱社会秩序罪）→ <SoftHi>属于共同犯罪</SoftHi></span>
        </Enter>
        <Enter delay={74} style={{fontSize: 18, fontWeight: 800}}>首要分子有多人时：起主要作用的是主犯，起次要作用的是从犯 → 首要分子<Neg size={17}>不一定</Neg>都是主犯；主犯也<Neg size={17}>不一定</Neg>都是首要分子</Enter>
      </div>

      <div data-final-knowledge="conclusion-strip" style={{position: 'absolute', left: 0, top: 596, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.daisViolet}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={24} color={C.daisViolet} />
          <DaisStamp delay={90} tone="violet">结论</DaisStamp>
          <span style={{fontSize: 20, fontWeight: 900}}>除了犯罪集团的首要分子一定是主犯外，其他情形下的首要分子和主犯<Neg size={19}>没有必然的一一对应关系</Neg></span>
        </Enter>
      </div>
    </div>
  </Shell>
);
