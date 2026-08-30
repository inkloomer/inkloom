import {Ban, Compass, Crosshair, FileText, Gavel, GraduationCap, LockOpen, ScrollText, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, PlateTitle, Seal, Shell, SoftHi, ThinU} from './kit';

export const ObjectiveFirstSyllogismScene = () => (
  <Shell code="03" title="先客观后主观 · 三段论推理">
    <div data-layout="dual-doctrine-boards" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="objective-first-review,premise-conclusion-stack" data-focal-rule="review-conduct-first-then-fit-facts-into-the-statute" data-focal-channels="icon,enclosure,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="doctrine-objective-first" style={{position: 'absolute', left: 0, top: 0, width: 860, height: 470, backgroundColor: C.label, border: `3px solid ${C.venous}`, borderRadius: 4, padding: '16px 20px'}}>
        <Enter delay={6}><LabelBlock size={27} color={C.venous}>客观主义（多数说）· 审查顺序</LabelBlock></Enter>
        <Enter delay={18} style={{marginTop: 16, fontSize: 24, fontWeight: 900}}>首要判断：<SoftHi style={{fontSize: 24}}><Zap size={26} color={C.ink} /> 客观要件——有无危害行为</SoftHi></Enter>
        <div data-final-knowledge="doctrine-harm-essence" style={{marginTop: 16, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '10px 14px'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Crosshair size={24} color={C.brass} />
            <span style={{fontSize: 22, fontWeight: 900}}>行为实质：必须对法益产生</span>
            <Chip tone="brass" style={{fontSize: 21}}>实害</Chip>
            <span style={{fontSize: 22, fontWeight: 900}}>或</span>
            <Chip tone="brass" style={{fontSize: 21}}>危险</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="doctrine-desert-case" style={{marginTop: 14, backgroundColor: C.arterialSoft, border: `3px dashed ${C.arterial}`, borderRadius: 4, padding: '10px 14px'}}>
          <Enter delay={44}><Neg size={23}>沙漠枪击稻草人——对法益无任何危险</Neg></Enter>
          <Enter delay={54} style={{marginTop: 8, fontSize: 21, fontWeight: 700}}>→ 属于日常生活行为 → 直接得出<ThinU>不构成犯罪</ThinU></Enter>
        </div>
        <Enter delay={64} style={{marginTop: 14, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>对照：主观主义（少数说）——先判故意·后判行为</Enter>
      </div>

      <div data-final-knowledge="doctrine-thought-bar" style={{position: 'absolute', left: 0, top: 494, width: 860, height: 250, backgroundColor: C.arterialSoft, border: `3px solid ${C.arterial}`, borderRadius: 4, padding: '16px 20px'}}>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={28} color={C.arterial} />
          <LabelBlock size={27} color={C.arterial}>理论铁律</LabelBlock>
        </Enter>
        <Enter delay={88} style={{marginTop: 14, fontSize: 26, fontWeight: 950}}>犯罪是<ThinU>行为</ThinU>，绝不是<ThinU>思想</ThinU>！</Enter>
        <Enter delay={98} style={{marginTop: 12, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>只有杀人故意而无杀人的危害行为 → 绝不构成犯罪；刑法惩罚的是危害行为，而非思想</Enter>
      </div>

      <div data-final-knowledge="syll-major-premise" style={{position: 'absolute', left: 884, top: 0, width: 892, height: 178, backgroundColor: C.venousSoft, border: `3px solid ${C.venous}`, borderRadius: 4, padding: '14px 20px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={28} color={C.venous} />
          <LabelBlock size={26} color={C.venous}>大前提 · 法律规定</LabelBlock>
          <Chip tone="venous" style={{fontSize: 20}}>刑法条文规定的犯罪构成要件</Chip>
        </Enter>
        <Enter delay={106} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>唯一判断标准——除此以外（如道德）再无别的标准</Enter>
      </div>
      <Dash delay={112} style={{position: 'absolute', left: 1310, top: 178, width: 4, height: 30, backgroundColor: C.ink}} />

      <div data-final-knowledge="syll-minor-premise" style={{position: 'absolute', left: 884, top: 208, width: 892, height: 178, backgroundColor: C.label, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '14px 20px'}}>
        <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileText size={28} color={C.brass} />
          <LabelBlock ink size={26}>小前提 · 案件事实</LabelBlock>
          <Chip style={{fontSize: 20}}>刑事诉讼法及证据法的任务</Chip>
        </Enter>
        <Enter delay={126} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>对案件事实从不同角度提炼归纳——孤儿院拐卖案：单位无罪·但须提炼出自然人拐卖的事实</Enter>
      </div>
      <Dash delay={132} style={{position: 'absolute', left: 1310, top: 386, width: 4, height: 30, backgroundColor: C.ink}} />

      <div data-final-knowledge="syll-conclusion" style={{position: 'absolute', left: 884, top: 416, width: 892, height: 152, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '14px 20px'}}>
        <Enter delay={136} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={28} color={C.brass} />
          <LabelBlock size={26} color={C.brass}>结论 · 有罪 / 无罪</LabelBlock>
          <Seal delay={144} tone="brass">小前提是否符合大前提</Seal>
        </Enter>
        <Enter delay={150} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>道德绝不能成为判断标准——大义灭亲仍构成犯罪·仅量刑从宽</Enter>
      </div>

      <div data-final-knowledge="syll-two-tasks" style={{position: 'absolute', left: 884, top: 592, width: 892, height: 152, backgroundColor: C.plate, border: `3px double ${C.ink}`, borderRadius: 4, padding: '14px 20px'}}>
        <Enter delay={160}><LabelBlock ink size={25}>刑法学两大任务</LabelBlock></Enter>
        <Enter delay={170} style={{marginTop: 10, display: 'flex', gap: 12}}>
          <Chip tone="venous" style={{fontSize: 22}}>如何解释大前提</Chip>
          <Chip tone="brass" style={{fontSize: 22}}>如何认定小前提</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const ElementTypeMatrixScene = () => (
  <Shell code="04" title="构成要件要素·四对分类">
    <div data-layout="four-contrast-lane-grid" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="paired-term-contrast,exam-verdict-strip" data-focal-rule="each-element-pair-splits-by-how-the-judge-locates-it" data-focal-channels="icon,contrast,enclosure,annotation" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pair-descriptive-normative" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 150, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 22px', gap: 24}}>
        <Enter delay={6} style={{width: 420}}>
          <Chip tone="venous" style={{fontSize: 26, fontWeight: 900}}>记述的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>客观<span style={{fontWeight: 950, color: C.ink}}>事实判断</span>即可确定·可判<span style={{fontWeight: 950, color: C.ink}}>真假</span></div>
          <div style={{marginTop: 6}}><Chip style={{fontSize: 19}}>「伪造」「护照」</Chip></div>
        </Enter>
        <Dash delay={14} style={{width: 3, alignSelf: 'stretch', margin: '14px 0', backgroundColor: 'rgba(59,50,38,0.3)'}} />
        <Enter delay={18} style={{flex: 1}}>
          <Chip tone="arterial" style={{fontSize: 26, fontWeight: 900}}>规范的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>需法官<span style={{fontWeight: 950, color: C.ink}}>价值判断</span>·无法判真假</div>
          <div style={{marginTop: 6}}><Chip style={{fontSize: 19}}>「猥亵」「侮辱」</Chip></div>
        </Enter>
        <span style={{fontSize: 30, fontWeight: 950, color: C.ghost}}>第一对</span>
      </div>

      <div data-final-knowledge="pair-written-unwritten" style={{position: 'absolute', left: 0, top: 164, width: 1776, height: 150, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 22px', gap: 24}}>
        <Enter delay={26} style={{width: 420}}>
          <Chip tone="venous" style={{fontSize: 26, fontWeight: 900}}><ScrollText size={24} color={C.white} style={{flexShrink: 0}} /> 成文的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>刑法条文<span style={{fontWeight: 950, color: C.ink}}>明文规定</span></div>
        </Enter>
        <Dash delay={34} style={{width: 3, alignSelf: 'stretch', margin: '14px 0', backgroundColor: 'rgba(59,50,38,0.3)'}} />
        <Enter delay={38} style={{flex: 1}}>
          <Chip tone="arterial" style={{fontSize: 26, fontWeight: 900}}><LockOpen size={24} color={C.white} style={{flexShrink: 0}} /> 不成文的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>条文未写·<span style={{fontWeight: 950, color: C.ink}}>实质必备</span></div>
          <div style={{marginTop: 6}}><Chip style={{fontSize: 19}}>财产犯罪「以非法占有为目的」</Chip></div>
        </Enter>
        <span style={{fontSize: 30, fontWeight: 950, color: C.ghost}}>第二对</span>
      </div>

      <div data-final-knowledge="pair-positive-negative" style={{position: 'absolute', left: 0, top: 328, width: 1776, height: 150, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 22px', gap: 24}}>
        <Enter delay={46} style={{width: 420}}>
          <Chip tone="venous" style={{fontSize: 26, fontWeight: 900}}>积极的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>正面<span style={{fontWeight: 950, color: C.ink}}>表明</span>犯罪成立</div>
        </Enter>
        <Dash delay={54} style={{width: 3, alignSelf: 'stretch', margin: '14px 0', backgroundColor: 'rgba(59,50,38,0.3)'}} />
        <Enter delay={58} style={{flex: 1}}>
          <Chip tone="arterial" style={{fontSize: 26, fontWeight: 900}}><Ban size={24} color={C.white} style={{flexShrink: 0}} /> 消极的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>反面<span style={{fontWeight: 950, color: C.ink}}>否定</span>犯罪成立</div>
          <div style={{marginTop: 6}}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>行贿罪：被勒索给财物·且没获得不正当利益</Chip></div>
        </Enter>
        <span style={{fontSize: 30, fontWeight: 950, color: C.ghost}}>第三对</span>
      </div>

      <div data-final-knowledge="pair-objective-subjective" style={{position: 'absolute', left: 0, top: 492, width: 1776, height: 150, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 22px', gap: 24}}>
        <Enter delay={66} style={{width: 420}}>
          <Chip tone="venous" style={{fontSize: 26, fontWeight: 900}}><Zap size={24} color={C.white} style={{flexShrink: 0}} /> 客观的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>行为外在·<span style={{fontWeight: 950, color: C.ink}}>客观方面</span></div>
          <div style={{marginTop: 6}}><Chip style={{fontSize: 19}}>行为 · 结果</Chip></div>
        </Enter>
        <Dash delay={74} style={{width: 3, alignSelf: 'stretch', margin: '14px 0', backgroundColor: 'rgba(59,50,38,0.3)'}} />
        <Enter delay={78} style={{flex: 1}}>
          <Chip tone="arterial" style={{fontSize: 26, fontWeight: 900}}><Compass size={24} color={C.white} style={{flexShrink: 0}} /> 主观的要素</Chip>
          <div style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>行为人内心·<span style={{fontWeight: 950, color: C.ink}}>主观方面</span></div>
          <div style={{marginTop: 6}}><Chip style={{fontSize: 19}}>故意 · 目的</Chip></div>
        </Enter>
        <span style={{fontSize: 30, fontWeight: 950, color: C.ghost}}>第四对</span>
      </div>

      <div data-final-knowledge="exam-element-verdict" style={{position: 'absolute', left: 0, right: 0, top: 656, bottom: 0, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={28} color={C.arterial} />
          <span style={{fontSize: 23, fontWeight: 950}}>2014·卷二 · D 项错在：</span>
        </Enter>
        <Enter delay={108} style={{fontSize: 22, fontWeight: 800}}>「国家工作人员」＝ 记述的 · 客观的——<Neg size={21}>并非规范的·主观的</Neg></Enter>
        <span style={{flex: 1}} />
        <Enter delay={118}><Seal delay={118} tone="arterial">身份按客观事实即可判断</Seal></Enter>
      </div>
    </div>
  </Shell>
);
