import {Crosshair, FileText, Gavel, Scale, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, PlateTitle, Seal, Shell, SoftHi, ThinU} from './kit';

export const DoubtConcurrenceForkScene = () => (
  <Shell code="05" title="存疑利于被告 · 想象竞合">
    <div data-layout="doubt-fork-concurrence-split" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="in-doubt-favor-accused,one-act-many-names" data-focal-rule="doubt-favors-the-accused-one-act-chooses-the-heaviest-name" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="doubt-rule" style={{position: 'absolute', left: 0, top: 0, width: 850, height: 560, backgroundColor: C.label, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '16px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={30} color={C.brass} />
          <LabelBlock size={27} color={C.brass}>存疑时有利于被告</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <div data-final-knowledge="doubt-case-innocent">
            <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 12, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '10px 14px'}}>
              <Chip style={{fontSize: 21}}>要么有罪 · 要么无罪</Chip>
              <span style={{fontSize: 22, fontWeight: 950, color: C.brass}}>⇒</span>
              <Seal delay={30} tone="brass">认定为无罪</Seal>
            </Enter>
          </div>
          <div data-final-knowledge="doubt-case-lighter">
            <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12, border: `3px solid ${C.venous}`, borderRadius: 4, padding: '10px 14px'}}>
              <Chip style={{fontSize: 21}}>要么重罪 · 要么轻罪</Chip>
              <span style={{fontSize: 22, fontWeight: 950, color: C.venous}}>⇒</span>
              <Chip tone="venous" style={{fontSize: 21, fontWeight: 900}}>认定为轻罪</Chip>
            </Enter>
          </div>
          <div data-final-knowledge="doubt-case-three">
            <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '10px 14px'}}>
              <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>重罪 · 轻罪 · 无罪三可能</Chip>
              <span style={{fontSize: 22, fontWeight: 950, color: C.brass}}>⇒</span>
              <Seal delay={66} tone="brass">认定为无罪</Seal>
            </Enter>
          </div>
        </div>
        <div data-final-knowledge="doubt-scope-note" style={{marginTop: 18, backgroundColor: C.arterialSoft, border: `3px dashed ${C.arterial}`, borderRadius: 4, padding: '10px 14px'}}>
          <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <FileText size={24} color={C.arterial} />
            <span style={{fontSize: 22, fontWeight: 900}}>原则边界：只解决<ThinU>小前提</ThinU>（悬疑事实）</span>
          </Enter>
          <Enter delay={86} style={{marginTop: 8}}><Neg size={22}>绝不是解释大前提的工具</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="concurrence-act" style={{position: 'absolute', left: 874, top: 0, width: 902, height: 330, backgroundColor: C.venousSoft, border: `3px solid ${C.venous}`, borderRadius: 4, padding: '16px 20px'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Zap size={28} color={C.venous} />
          <LabelBlock size={27} color={C.venous}>想象竞合</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}>＝ 循环往复使用三段论的现象</span>
        </Enter>
        <Enter delay={112} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="ink" style={{fontSize: 23}}>一个行为</Chip>
          <span style={{fontSize: 24, fontWeight: 950, color: C.venous}}>×</span>
          <Chip tone="venous" style={{fontSize: 22}}>触犯罪名甲</Chip>
          <Chip tone="venous" style={{fontSize: 22}}>触犯罪名乙</Chip>
          <Chip style={{fontSize: 22}}>…</Chip>
        </Enter>
        <Enter delay={126} style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={26} color={C.brass} />
          <Seal delay={132} tone="brass">处理：择一重罪论处</Seal>
          <span style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>只有一个行为·数罪并罚＝重复处罚</span>
        </Enter>
      </div>

      <div data-final-knowledge="concurrence-disclosure" style={{position: 'absolute', left: 874, top: 354, width: 902, height: 180, backgroundColor: C.label, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '14px 20px'}}>
        <Enter delay={146}><LabelBlock ink size={25}>明示功能</LabelBlock></Enter>
        <Enter delay={156} style={{marginTop: 10, fontSize: 22, fontWeight: 800}}>判决必须逐一指明该行为制造的全部<SoftHi style={{fontSize: 21}}><Crosshair size={22} color={C.ink} /> 法益侵害</SoftHi>事实</Enter>
        <Enter delay={166} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>这是保护法益与保障人权之间的平衡做法</Enter>
      </div>

      <div data-final-knowledge="concurrence-floor" style={{position: 'absolute', left: 0, right: 0, top: 584, bottom: 0, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={178}><LabelBlock ink size={25}>禁止重复评价原则</LabelBlock></Enter>
        <Enter delay={188} style={{fontSize: 23, fontWeight: 800}}>实质＝禁止<ThinU>重复处罚</ThinU>——想象竞合对一行为<SoftHi style={{fontSize: 22}}>重复评价</SoftHi>·但未重复处罚</Enter>
      </div>
    </div>
  </Shell>
);
