import {Ban, Gavel, GraduationCap, Landmark, Ruler, Scissors} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, RingTitle, Shell, SoftHi, ThinU} from './kit';

export const CommutationGradeRulerScene = () => (
  <Shell code="01" title="减刑·锯圈留底线">
    <div data-layout="commutation-ruler-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="cut-floor-ruler,court-tier-lane" data-focal-rule="rings-may-be-sawn-but-a-minimum-radius-always-stays" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Scissors size={130} color={C.ink} style={{position: 'absolute', right: 28, bottom: 330, opacity: 0.08}} />
      <div style={{position: 'absolute', left: 0, top: 0, width: 876}}>
        <div data-final-knowledge="cut-object"><Enter delay={6} style={{border: `3px solid ${C.moss}`, borderRadius: 8, backgroundColor: C.white, padding: '10px 14px', marginBottom: 10}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Ruler size={20} color={C.moss} style={{flexShrink: 0}} />
            <Chip tone="moss" style={{fontSize: 20}}>对象</Chip>
            <span style={{fontSize: 19, fontWeight: 800, color: C.inkSoft }}>管制·拘役·有期徒刑·无期徒刑（故意过失·轻重罪在所不问）</span>
          </div>
          <div style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>缓刑：一般不减·<SoftHi style={{fontSize: 17}}>重大立功可减</SoftHi>（同步缩短考验期）；死缓减无期有期＝刑种变更·不属于第78条减刑</div>
        </Enter></div>
        <div data-final-knowledge="cut-ruler" style={{border: `3px solid ${C.saw}`, borderRadius: 8, backgroundColor: C.white, padding: '12px 16px'}}>
          <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
            <Gavel size={22} color={C.bark} style={{flexShrink: 0}} />
            <LabelBlock size={23} color={C.bark}>实际执行底线 · 锯多深都不能锯穿</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <div data-final-knowledge="cut-floor-half"><Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="moss" style={{fontSize: 19, width: 150, justifyContent: 'center'}}>管·拘·有期</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>不少于原判刑期 <ThinU>1/2</ThinU></span>
            </Enter></div>
            <div data-final-knowledge="cut-floor-life"><Enter delay={42} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="moss" style={{fontSize: 19, width: 150, justifyContent: 'center'}}>无期</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>不能少于 <ThinU>13 年</ThinU></span>
            </Enter></div>
            <div data-final-knowledge="cut-floor-ordinary-death"><Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="brand" style={{fontSize: 19, width: 150, justifyContent: 'center'}}>普通死缓</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>减为无期/有期 → <ThinU>15 年</ThinU></span>
            </Enter></div>
            <div data-final-knowledge="cut-floor-restricted-death"><Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="brand" style={{fontSize: 19, width: 150, justifyContent: 'center'}}>限制减刑死缓</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>减为25年 → <ThinU>20 年</ThinU>·减为无期 → <ThinU>25 年</ThinU></span>
            </Enter></div>
          </div>
          <Enter delay={74} style={{marginTop: 10, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>死缓类起算＝从死缓<ThinU>二年期满之日</ThinU>（15·20·25）</Enter>
        </div>
      </div>

      <div data-final-knowledge="cut-procedure-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 380, backgroundColor: C.white, border: `4px solid ${C.bark}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={24} color={C.bark} style={{flexShrink: 0}} />
          <LabelBlock size={23} color={C.bark}>减刑·假释 程序分层</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <div data-final-knowledge="proc-mid"><Enter delay={40} style={{border: `3px solid ${C.moss}`, borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="moss" style={{fontSize: 19, width: 170, justifyContent: 'center'}}>一般减刑·假释</Chip>
            <span style={{fontSize: 19, fontWeight: 800 }}>执行机关建议 → <ThinU>中级</ThinU>法院裁定</span>
          </Enter></div>
          <div data-final-knowledge="proc-high"><Enter delay={52} style={{border: `3px solid ${C.brand}`, borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="brand" style={{fontSize: 19, width: 170, justifyContent: 'center'}}>无期减刑·假释／死缓减刑</Chip>
            <span style={{fontSize: 19, fontWeight: 800 }}>→ <ThinU>高级</ThinU>法院裁定</span>
          </Enter></div>
        </div>
      </div>

      <div data-final-knowledge="cut-note-floor" style={{position: 'absolute', left: 900, top: 404, width: 876, height: 340, backgroundColor: C.barkSoft, border: `3px double ${C.bark}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={22} color={C.brand} style={{flexShrink: 0}} />
          <LabelBlock size={22}>要点快记</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={76} style={{fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}><Ban size={18} color={C.brand} style={{flexShrink: 0}} />次数不限·只卡底线；底线＝最小保留半径</Enter>
          <Enter delay={88} style={{fontSize: 19, fontWeight: 700 }}>减刑自由刑刑期·死缓转档另算（见第14讲死缓四岔）</Enter>
          <Enter delay={100} style={{fontSize: 19, fontWeight: 700 }}>减刑由执行机关提建议书·法院裁定（非判决）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
