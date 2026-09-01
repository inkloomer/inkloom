import type {ReactNode} from 'react';
import {Ban, Castle, Crown, Feather, Files, Gavel, LifeBuoy, Megaphone, Plane, Siren, Sword} from 'lucide-react';
import {C, DaisStamp, Enter, HallLabel, LaurelHi, Neg, RankArrow, RankChip, Shell, ThinU, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.meritGoldSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const RingleaderPunishmentScene = () => (
  <Shell code="03" title="主犯的处罚：两条条文分工">
    <div data-layout="punishment-two-clauses" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="clause-26-3-lane,clause-26-4-lane" data-focal-rule="group-chief-answers-for-the-group-others-for-their-own-part" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Files size={250} color={C.meritGold} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="clause-3-lane" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 470, backgroundColor: C.panel, border: `3px solid ${C.daisViolet}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Castle size={28} color={C.daisViolet} />
          <HallLabel size={23}>第26条第3款 · 犯罪集团的首要分子</HallLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 21, fontWeight: 900}}>按照<LaurelHi style={{fontSize: 19}}>集团</LaurelHi>所犯的<LaurelHi style={{fontSize: 19}}>全部罪行</LaurelHi>处罚</Enter>
        <Enter delay={26} style={{fontSize: 19, fontWeight: 800, backgroundColor: C.verdictRedSoft, border: `2px dashed ${C.verdictRed}`, borderRadius: 5, padding: '9px 13px', display: 'flex', flexDirection: 'column', gap: 5}}>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Neg size={18}>是「集团」所犯的全部罪行</Neg></span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Neg size={18}>不是「全体成员」所犯的全部罪行</Neg></span>
        </Enter>
        <Enter delay={38} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8}}><Files size={20} color={C.inkSoft} />成员个人干的集团计划外的私活，不记到首要分子头上</Enter>
      </div>

      <div data-final-knowledge="clause-4-lane" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 470, backgroundColor: C.panel, border: `3px solid ${C.meritGold}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Crown size={28} color={C.meritGold} />
          <HallLabel size={23} color={C.meritGold}>第26条第4款 · 其他主犯<RankChip tone="paper" style={{fontSize: 15, marginLeft: 8, borderColor: C.meritGold}}>2019年试题</RankChip></HallLabel>
        </Enter>
        <Enter delay={20} style={{fontSize: 21, fontWeight: 900}}>应当按照其所<ThinU color={C.meritGold}>参与</ThinU>的或者<ThinU color={C.meritGold}>组织、指挥</ThinU>的<LaurelHi style={{fontSize: 19}}>全部犯罪</LaurelHi>处罚</Enter>
        <Enter delay={32} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8}}><Gavel size={20} color={C.inkSoft} />不掌全局的主犯，只背自己踩过的那部分账</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 486, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.daisViolet}`, borderRadius: 6, padding: '12px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
        <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={24} color={C.daisViolet} />
          <span style={{fontSize: 19, fontWeight: 800}}>记忆轴：首要分子对「集团」负责；其他主犯对「自己参与/组织/指挥」负责</span>
        </Enter>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Files size={22} color={C.meritGold} />
          <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>从犯同款规则：对从犯也按其所参与的<ThinU color={C.meritGold}>全部犯罪</ThinU>处罚——这一点和主犯相同</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const AccessoryCoercedRolesScene = () => (
  <Shell code="04" title="从犯与胁从犯：第27条 · 第28条">
    <div data-layout="accessory-coerced-tier" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="clause-27-28-tiers,pilot-case-strip" data-focal-rule="coerced-then-active-becomes-ringleader" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Feather size={250} color={C.slateTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="accessory-tier" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744, backgroundColor: C.panel, border: `3px solid ${C.slateTeal}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Feather size={28} color={C.slateTeal} />
          <HallLabel size={23} color={C.slateTeal}>从犯 · 刑法第27条</HallLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>在共同犯罪中起<SoftHi>次要</SoftHi>或者<SoftHi>辅助</SoftHi>作用的</Enter>
        <Enter delay={24} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}>处罚：应当<ThinU color={C.slateTeal}>从轻、减轻</ThinU>处罚或者<ThinU color={C.slateTeal}>免除</ThinU>处罚</Enter>
        <Enter delay={36} style={{display: 'flex', flexDirection: 'column', gap: 7, fontSize: 18, fontWeight: 700}}>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Crown size={20} color={C.slateTeal} />可以只有主犯（须两个主犯），没有从犯</span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Neg size={17}>不可能只有从犯，没有主犯</Neg></span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Megaphone size={20} color={C.slateTeal} />刑法未规定对从犯「比照」主犯处罚 → 力度<SoftHi>可以</SoftHi>（不是应当）轻于主犯</span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Sword size={20} color={C.slateTeal} />对从犯也按其所参与的全部犯罪处罚——与主犯相同</span>
        </Enter>
      </div>

      <div data-final-knowledge="coerced-tier" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744, backgroundColor: C.panel, border: `3px solid ${C.verdictRed}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Siren size={28} color={C.verdictRed} />
          <HallLabel size={23} color={C.verdictRed}>胁从犯 · 刑法第28条</HallLabel>
        </Enter>
        <Enter delay={20} style={{fontSize: 20, fontWeight: 800}}>被<ThinU color={C.verdictRed}>胁迫</ThinU>参加犯罪的人；应当按照犯罪情节<ThinU color={C.verdictRed}>减轻</ThinU>处罚或者<ThinU color={C.verdictRed}>免除</ThinU>处罚</Enter>
        <Enter delay={32} style={{display: 'flex', flexDirection: 'column', gap: 7, fontSize: 18, fontWeight: 700}}>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Crown size={20} color={C.verdictRed} />一开始被胁迫参加，着手实行后变得<SoftHi>积极主动</SoftHi>起主要作用 → 认定为<RankChip tone="violet" style={{fontSize: 15}}>主犯</RankChip></span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Neg size={17}>身体完全被强制 / 意志自由完全被剥夺</Neg> → 不构成胁从犯</span>
        </Enter>
        <div style={{marginTop: 'auto', backgroundColor: C.verdictRedSoft, border: `2px solid ${C.verdictRed}`, borderRadius: 5, padding: '9px 13px', display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={48} style={{fontSize: 17, fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: 8}}><Plane size={20} color={C.verdictRed} />机长案<RankChip tone="paper" style={{fontSize: 14, marginLeft: 6, borderColor: C.verdictRed}}>2022年试题</RankChip></Enter>
          <Enter delay={56} style={{fontSize: 17, fontWeight: 700}}>劫机分子持枪胁迫机长将飞机开往指定地点，机长被迫照办 → 机长意志自由完全被剥夺，不构成胁从犯；符合紧急避险条件的，成立<LifeBuoy size={19} color={C.verdictRed} />紧急避险</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
