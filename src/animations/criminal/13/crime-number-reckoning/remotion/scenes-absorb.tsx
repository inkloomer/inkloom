import {BrickWall, CirclePlay, FileText, Gavel, KeyRound, Stamp, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, Ticket} from './kit';

export const AbsorbPostActsScene = () => (
  <Shell code="04" title="吸收犯·不可罚的事后行为">
    <div data-layout="absorb-post-duo-yard" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="heavy-absorbs-light,post-act-boundary" data-focal-rule="absorb-only-what-leaves-no-assessment-gap-post-acts-die-without-new-harm" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Zap size={130} color={C.ink} style={{position: 'absolute', right: 30, bottom: 340, opacity: 0.08}} />
      <div data-final-knowledge="absorb-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 700, backgroundColor: C.white, border: `4px solid ${C.screen}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={26} color={C.screen} />
          <LabelBlock size={24} color={C.screen}>吸收犯 · 重行为吸收轻行为·只定重罪</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>非法律规定；前提＝不遗漏评价法益·否则并罚</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="absorb-row-1"><Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}><KeyRound size={20} color={C.screen} style={{flexShrink: 0}} /><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>制造枪支后持有 / 制造毒品后持有 → 只定制造罪</Chip></Enter></div>
          <div data-final-knowledge="absorb-row-2"><Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 10}}><FileText size={20} color={C.screen} style={{flexShrink: 0}} /><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>伪造货币后出售 → 只定伪造货币罪</Chip></Enter></div>
          <div data-final-knowledge="absorb-row-3"><Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10}}><Gavel size={20} color={C.screen} style={{flexShrink: 0}} /><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>先敲诈不成改用暴力取财 → 抢劫既遂吸收敲诈未遂</Chip></Enter></div>
          <div data-final-knowledge="absorb-row-4"><Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 10}}><Stamp size={20} color={C.screen} style={{flexShrink: 0}} /><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>偷手机又「退货」换现金 → 一份好处一份损失·定盗窃罪</Chip></Enter></div>
          <div data-final-knowledge="absorb-row-5"><Enter delay={82} style={{display: 'flex', alignItems: 'center', gap: 10}}><CirclePlay size={20} color={C.screen} style={{flexShrink: 0}} /><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>入户抢劫无人·拿走财物 → 实行（盗窃既遂）吸收预备 → 定盗窃既遂</Chip></Enter></div>
        </div>
      </div>

      <div data-final-knowledge="postact-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 700, backgroundColor: C.white, border: `4px solid ${C.cone}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BrickWall size={26} color={C.cone} />
          <LabelBlock size={24} color={C.cone}>不可罚的事后行为 · 吸收犯的特殊情形</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={28} style={{border: `3px solid ${C.screen}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.screen }}>根据① 无期待可能性</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>盗车后正常销赃（买家知情）→ 不定掩饰隐瞒犯罪所得罪</div>
          </Enter>
          <Enter delay={42} style={{border: `3px solid ${C.screen}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.screen }}>根据② 未侵犯新法益</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>偷名画误当赝品毁坏 → 仍只一个财产法益·只定盗窃罪</div>
          </Enter>
          <Enter delay={56} style={{border: `3px solid ${C.cone}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.cone }}>例外：侵犯新法益 → 数罪并罚</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>偷到普通财物发现是枪支继续持有；骗他人买赝品</div>
          </Enter>
          <Enter delay={70} style={{backgroundColor: C.scaleYellowSoft, border: `3px solid ${C.scaleYellow}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 20, fontWeight: 950 }}>销赃口诀：<SoftHi style={{fontSize: 18}}>正常销赃不可罚 · 欺骗销赃数罪并罚</SoftHi></div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>名画赝品骗卖1万 → 盗窃＋诈骗并罚</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
