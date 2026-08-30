import {GraduationCap} from 'lucide-react';
import {Chip, C, Dash, Enter, DialTitle, LabelBlock, Neg, Shell, SoftHi, ThinU, Tuner} from './kit';

export const DeferAdvanceAbsorbScene = () => (
  <Shell code="05" title="推迟·提前·抽象错误">
    <div data-layout="defer-advance-absorb-triptych" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="defer-crossroad-steps,absorb-inclusion-pairs" data-focal-rule="count-the-acts-then-count-the-crossroads-before-attributing" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="defer-board" style={{position: 'absolute', left: 0, top: 0, width: 700, height: 470, backgroundColor: C.white, border: `4px solid ${C.red}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={6}><LabelBlock size={24} color={C.red}>结果的推迟发生（事前故意）</LabelBlock></Enter>
        <Enter delay={18} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>前行为（杀·致昏迷）＋后行为（抛“尸”溺死）——死亡归谁？</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={32} style={{border: `3px solid ${C.teal}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.teal}}>第1步 异常？ 多数说＝异常（活人当尸体）</div>
          </Enter>
          <Enter delay={46} style={{border: `3px solid ${C.red}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.red}}>第2步 比推力：多数说＝一样大 → 二因一果</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>故意杀人既遂 吸收 过失致人死亡 → 定既遂</div>
          </Enter>
          <Enter delay={62} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>少数说①不异常→既遂吸收；②后行为大→未遂＋过失·并罚（递进式观点展示·走两个十字路口）</Enter>
          <Enter delay={76}><Chip tone="cream" style={{fontSize: 18, whiteSpace: 'normal'}}>水库溺亡案：前行为＝抢劫致重伤 → 多数说定抢劫致人死亡</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="advance-board" style={{position: 'absolute', left: 724, top: 0, width: 700, height: 470, backgroundColor: C.white, border: `4px solid ${C.tube}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={12}><LabelBlock size={24} color={C.tube}>结果的提前发生（构成要件提前实现）</LabelBlock></Enter>
        <Enter delay={24} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>前行为（预备）＋后行为（计划实行）——实际前行为致死</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={38} style={{border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>毒酒案：放毒酒＝预备（无紧迫危险）</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>杀人预备＋过失致死 → 想象竞合择一重</div>
          </Enter>
          <Enter delay={52} style={{border: `3px solid ${C.red}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>掐晕案：掐＝已着手（现实直接危险）</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>多数说＝杀人既遂；少数说＝未遂竞合定未遂</div>
          </Enter>
          <Enter delay={66}><Chip tone="cream" style={{fontSize: 18, whiteSpace: 'normal'}}>安眠药过量·分两次投毒致死 → 已着手 → 多数说既遂</Chip></Enter>
          <Enter delay={80} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>三错误区分：狭义＝一个行为；推迟＝两个行为；提前＝计划两个行为·第一个只想准备</Enter>
        </div>
      </div>

      <div data-final-knowledge="absorb-board" style={{position: 'absolute', left: 1448, top: 0, width: 328, height: 470, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 8, padding: '14px 16px'}}>
        <Enter delay={18}><LabelBlock size={22} color={C.teal}>抽象错误·包容评价</LabelBlock></Enter>
        <Enter delay={32} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>不同构成要件间：分别分析→想象竞合（花瓶案：毁坏财物未遂＋过失致死）</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={46}><Chip tone="cream" style={{fontSize: 17, whiteSpace: 'normal'}}>杀人＞伤害</Chip></Enter>
          <Enter delay={52}><Chip tone="cream" style={{fontSize: 17, whiteSpace: 'normal'}}>强奸＞强制猥亵</Chip></Enter>
          <Enter delay={58}><Chip tone="cream" style={{fontSize: 17, whiteSpace: 'normal'}}>绑架＞非法拘禁</Chip></Enter>
          <Enter delay={64}><Chip tone="cream" style={{fontSize: 17, whiteSpace: 'normal'}}>拐卖儿童＞拐骗儿童</Chip></Enter>
        </div>
        <Enter delay={72} style={{marginTop: 10, fontSize: 18, fontWeight: 900}}>重罪故意·行为 → 可评轻罪 → 在轻罪范围主客观一致＝<SoftHi style={{fontSize: 17}}>轻罪既遂</SoftHi></Enter>
        <Enter delay={86} style={{marginTop: 8}}><Chip tone="teal" style={{fontSize: 17, whiteSpace: 'normal'}}>偷枪支案 → 盗窃罪既遂</Chip></Enter>
      </div>

      <div data-final-knowledge="tri-floor" style={{position: 'absolute', left: 0, right: 0, top: 494, bottom: 0, backgroundColor: C.tubeSoft, border: `3px solid ${C.tube}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.cabinet} />
          <LabelBlock ink size={23}>公交侵占案</LabelBlock>
        </Enter>
        <Enter delay={110} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>想侵占·实盗窃 → 盗窃可评侵占 → 定侵占罪；入户抢劫案：想抢劫·实盗窃＋伤害路人 → 盗窃罪＋故意伤害罪·并罚</Enter>
        <span style={{flex: 1}} />
        <Enter delay={122}><Chip tone="red" style={{fontSize: 18, whiteSpace: 'normal'}}>盗窃罪不要求秘密性（否则无法包容）</Chip></Enter>
      </div>
    </div>
  </Shell>
);
