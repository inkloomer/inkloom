import {ArrowLeftRight, BrickWall, Gavel, GraduationCap, Hourglass, Scale, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, Ticket} from './kit';

export const InvolvedPrincipleFloorScene = () => (
  <Shell code="05" title="牵连犯·罪数底层原理">
    <div data-layout="involved-principle-quadrant" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="usual-bond-test,double-principle-floor" data-focal-rule="no-double-punishment-no-missed-assessment-exceptions-need-a-basis" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Scale size={130} color={C.ink} style={{position: 'absolute', right: 26, bottom: 300, opacity: 0.08}} />
      <div data-final-knowledge="involved-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 420, backgroundColor: C.white, border: `4px solid ${C.screen}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ArrowLeftRight size={26} color={C.screen} />
          <LabelBlock size={24} color={C.screen}>牵连犯 · 手段⇄目的·原因⇄结果</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>核心＝牵连关系有<ThinU>通常性</ThinU>（实践中经常结合）；两行为（vs 想象竞合一行为）→ 择一重＋可从重</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={34}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>为诈骗伪造证件 ∈·为信用卡诈骗伪造卡 ∈ → 择一重</Chip></Enter>
          <Enter delay={46}><Chip tone="cone" style={{fontSize: 19, whiteSpace: 'normal'}}>盗制服冒充军人招摇撞骗 ∉·为杀人盗枪支 ∉ → 数罪并罚（无通常性）</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="principle-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 420, backgroundColor: C.white, border: `4px solid ${C.scaleYellow}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12}><LabelBlock size={24} color={C.booth}>底层原理 · 一罚不重复·一评不遗漏</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={26} style={{border: `3px solid ${C.screen}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Scale size={20} color={C.screen} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 900, color: C.screen }}>禁重复处罚「行为」→</span><span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}> 一行为触两罪·定一罪（想象竞合·法条竞合·加重犯）</span>
          </Enter>
          <Enter delay={38} style={{border: `3px solid ${C.screen}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Hourglass size={20} color={C.screen} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 900, color: C.screen }}>禁重复处罚「结果」→</span><span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}> 两行为一结果·重罪吸收轻罪（杀乙抛尸案定杀人既遂）</span>
          </Enter>
          <Enter delay={50} style={{border: `3px solid ${C.cone}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <BrickWall size={20} color={C.cone} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 900, color: C.cone }}>禁遗漏处罚 →</span><span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}> 数行为数法益原则并罚（抢劫未遂＋捡走钱包的侵占·并罚）</span>
          </Enter>
          <Enter delay={62} style={{border: `3px solid ${C.booth}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Gavel size={20} color={C.booth} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 900 }}>例外一罪 →</span><span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}> 要么有法条依据（结合犯）·要么有理论依据（吸收·牵连）</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="exam-floor" style={{position: 'absolute', left: 0, right: 0, top: 444, bottom: 0, backgroundColor: C.boothSoft, border: `3px double ${C.ink}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={26} color={C.cone} />
          <LabelBlock ink size={23}>2019 金题速判</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Enter delay={88}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>A 对：轮奸＝升格条件·非特别法条</Chip></Enter>
          <Enter delay={98}><Neg size={19}>B 错：冒充真品变卖骗新法益→诈骗·并罚</Neg></Enter>
          <Enter delay={108}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>C 对：多次抢劫＝升格条件·一罪</Chip></Enter>
          <Enter delay={118}><Neg size={19}>D 错：抢劫后灭口杀人·两行为两犯意→并罚</Neg></Enter>
        </div>
      </div>
    </div>
  </Shell>
);
