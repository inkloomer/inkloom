import {Ban, DoorClosed, GraduationCap, Hourglass, Scale, Search, Users, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, RingTitle, Shell, SoftHi, ThinU} from './kit';

export const ParoleProbationCompareScene = () => (
  <Shell code="03" title="失败的假释 vs 失败的缓刑">
    <div data-layout="parole-probation-compare-table" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="success-effect-split,revocation-matrix-rows" data-focal-rule="parole-success-completes-penalty-probation-success-only-stops-it" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Scale size={130} color={C.ink} style={{position: 'absolute', right: 26, bottom: 330, opacity: 0.08}} />
      <div data-final-knowledge="success-effect-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 104, display: 'flex', gap: 16}}>
        <div style={{flex: 1, backgroundColor: C.mossSoft, border: `3px solid ${C.moss}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Users size={22} color={C.moss} style={{flexShrink: 0}} />
            <LabelBlock size={23} color={C.moss}>缓刑期满</LabelBlock>
          </Enter>
          <Enter delay={16} style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>原判刑罚<ThinU>不再执行</ThinU>（≠执行完毕→不构成累犯）</Enter>
        </div>
        <div style={{flex: 1, backgroundColor: C.barkSoft, border: `3px solid ${C.bark}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px'}}>
          <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <DoorClosed size={22} color={C.bark} style={{flexShrink: 0}} />
            <LabelBlock size={23} color={C.bark}>假释期满</LabelBlock>
          </Enter>
          <Enter delay={22} style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>原判刑罚已经执行完毕（→可构成累犯）</Enter>
        </div>
      </div>

      <div data-final-knowledge="compare-matrix" style={{position: 'absolute', left: 0, right: 0, top: 124, height: 430, backgroundColor: C.white, border: `3px solid ${C.ink}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={28}><LabelBlock ink size={23}>撤销处理对照表</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="row-missed"><Enter delay={40} style={{border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Search size={18} color={C.moss} style={{flexShrink: 0}} /><Chip tone="moss" style={{fontSize: 18, width: 200, justifyContent: 'center'}}>考验期内发现漏罪</Chip>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>缓刑：并罚·无「减」｜假释：并罚·<ThinU>先并后减</ThinU>；都可再次适用</span>
          </Enter></div>
          <div data-final-knowledge="row-missed-late"><Enter delay={50} style={{border: `3px solid ${C.bark}`, borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Hourglass size={18} color={C.bark} style={{flexShrink: 0}} /><Chip tone="bark" style={{fontSize: 18, width: 200, justifyContent: 'center'}}>期满后发现漏罪</Chip>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>两者都<Neg size={17}>不能撤销</Neg>·另行起诉</span>
          </Enter></div>
          <div data-final-knowledge="row-new"><Enter delay={60} style={{border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Zap size={18} color={C.brand} style={{flexShrink: 0}} /><Chip tone="brand" style={{fontSize: 18, width: 200, justifyContent: 'center'}}>考验期内犯新罪</Chip>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>缓刑：并罚·无「减」｜假释：并罚·<ThinU>先减后并</ThinU></span>
          </Enter></div>
          <div data-final-knowledge="row-new-late"><Enter delay={70} style={{border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Users size={18} color={C.brand} style={{flexShrink: 0}} /><Chip tone="brand" style={{fontSize: 18, width: 200, justifyContent: 'center'}}>期满后犯新罪</Chip>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>缓刑：不撤·<Neg size={17}>不构成累犯</Neg>｜假释：不撤·<SoftHi style={{fontSize: 17}}>可能构成累犯</SoftHi></span>
          </Enter></div>
          <div data-final-knowledge="row-violation"><Enter delay={80} style={{border: `3px solid ${C.bark}`, borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Ban size={18} color={C.bark} style={{flexShrink: 0}} /><Chip tone="bark" style={{fontSize: 18, width: 200, justifyContent: 'center'}}>考验期内违反规定</Chip>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>都撤销·缓刑直接执行原判｜假释收监执行余刑</span>
          </Enter></div>
        </div>
      </div>

      <div data-final-knowledge="reapply-floor" style={{position: 'absolute', left: 0, right: 0, top: 578, bottom: 0, backgroundColor: C.mossSoft, border: `3px double ${C.ink}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={22} color={C.moss} style={{flexShrink: 0}} />
          <span style={{fontSize: 19, fontWeight: 900 }}>再次适用口诀：</span>
        </Enter>
        <Enter delay={106} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft, flexWrap: 'wrap', display: 'flex', gap: 12 }}>
          <span>漏罪并罚后 → 缓刑可再·假释可再</span>
          <span>缓刑犯新罪并罚后 → <Neg size={17}>不能再缓刑</Neg>·可假释</span>
          <span>假释犯新罪并罚后 → <Neg size={17}>不能再假释</Neg></span>
        </Enter>
      </div>
    </div>
  </Shell>
);
