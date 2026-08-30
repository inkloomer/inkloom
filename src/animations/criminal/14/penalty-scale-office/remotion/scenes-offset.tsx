import {ArrowLeftRight, Ban, Crosshair, GraduationCap, Hourglass} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, StaveTitle, ThinU} from './kit';

export const CreditOffsetDialScene = () => (
  <Shell code="02" title="折抵规则·死刑三类禁区">
    <div data-layout="offset-limit-dual-dial" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="offset-ratio-tables,death-ban-trio" data-focal-rule="pretrial-custody-converts-at-fixed-ratios-death-spares-three-groups" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <ArrowLeftRight size={130} color={C.ink} style={{position: 'absolute', left: 26, bottom: 330, opacity: 0.08}} />
      <div data-final-knowledge="offset-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 500, backgroundColor: C.white, border: `4px solid ${C.indigo}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ArrowLeftRight size={26} color={C.indigo} />
          <LabelBlock size={24} color={C.indigo}>先行羁押折抵 · 三种情形</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="offset-row-arrest"><Enter delay={20} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Hourglass size={20} color={C.calm} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 800}}>刑拘·逮捕：1日 → 抵管制 2日·抵拘役有期 1日</span>
          </Enter></div>
          <div data-final-knowledge="offset-row-surveillance"><Enter delay={32} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Hourglass size={20} color={C.calm} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 800}}>指定居所监视居住：2日 → 抵拘役有期 1日·1日抵管制 1日</span>
          </Enter></div>
          <div data-final-knowledge="offset-row-admin"><Enter delay={44} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Hourglass size={20} color={C.calm} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 800}}>行政拘留·海关扣留：同刑拘逮捕比例</span>
          </Enter></div>
        </div>
        <div data-final-knowledge="offset-negatives" style={{marginTop: 12, backgroundColor: C.accentSoft, border: `3px dashed ${C.accent}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={58}><Neg size={20}>取保候审·非指定居所监视居住：未剥夺自由·不折抵</Neg></Enter>
          <Enter delay={70} style={{marginTop: 4}}><Neg size={20}>两个独立违法行为：不存在折抵</Neg></Enter>
          <Enter delay={82} style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>许可外出期间计入管制执行期</Enter>
        </div>
      </div>

      <div data-final-knowledge="death-ban-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 500, backgroundColor: C.white, border: `4px solid ${C.accent}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.accent} />
          <LabelBlock size={24} color={C.accent}>死刑禁区 · 三类人不适用（含死缓）</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="ban-minor"><Enter delay={26} style={{border: `3px solid ${C.accent}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>犯罪时不满 18 周岁</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>看犯罪时·审判时已满也不行</div>
          </Enter></div>
          <div data-final-knowledge="ban-pregnant"><Enter delay={38} style={{border: `3px solid ${C.accent}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>审判时怀孕的妇女（扩大解释＝整个羁押期间）</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>羁押期间怀孕过即可·流产也算；羁押前怀孕流产∉</div>
          </Enter></div>
          <div data-final-knowledge="ban-elderly"><Enter delay={50} style={{border: `3px solid ${C.clef}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>审判时已满 75 周岁</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>例外：以特别残忍手段致人死亡 → 可以死刑</div>
          </Enter></div>
        </div>
        <div data-final-knowledge="torture-case" style={{marginTop: 12, backgroundColor: C.clefSoft, border: `3px double ${C.clef}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={22} color={C.accent} />
            <span style={{fontSize: 19, fontWeight: 900}}>酷刑案：76 周岁「人彘」致死 → 属特别残忍手段 → <SoftHi style={{fontSize: 18}}>可以适用死刑</SoftHi></span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
