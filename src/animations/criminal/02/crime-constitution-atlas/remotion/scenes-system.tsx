import {Ban, Compass, Crosshair, Gavel, GraduationCap, KeyRound, Scroll, ShieldCheck, Users, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, PlateTitle, Seal, Shell, SoftHi, ThinU} from './kit';

export const ElementsPipelineScene = () => (
  <Shell code="01" title="四要件·审查流水线">
    <div data-layout="review-pipeline-plate" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="station-sequence-review,dual-appeal-gates" data-focal-rule="four-elements-build-unlawful-fact-then-two-appeal-gates-review-it" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="st-object" style={{position: 'absolute', left: 0, top: 0, width: 426, height: 212, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, padding: '14px 16px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Crosshair size={28} color={C.arterial} />
          <PlateTitle>① 犯罪客体</PlateTitle>
        </Enter>
        <Enter delay={16} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>犯罪行为侵害的、法律<ThinU>保护的利益</ThinU>＝法益</Enter>
        <Enter delay={26} style={{marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 20}}>对象＝载体·手机</Chip>
          <Chip tone="arterial" style={{fontSize: 20}}>客体＝利益·财产权</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="st-subject" style={{position: 'absolute', left: 450, top: 0, width: 426, height: 212, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, padding: '14px 16px'}}>
        <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.venous} />
          <PlateTitle>② 犯罪主体</PlateTitle>
        </Enter>
        <Enter delay={30} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>具有<span style={{fontWeight: 950, color: C.ink}}>侵害法益能力</span>的行为主体</Enter>
        <Enter delay={40} style={{marginTop: 12, display: 'flex', gap: 8}}>
          <Chip tone="venous" style={{fontSize: 20}}>自然人</Chip>
          <Chip tone="venous" style={{fontSize: 20}}>单位</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="st-objective" style={{position: 'absolute', left: 900, top: 0, width: 426, height: 212, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, padding: '14px 16px'}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={28} color={C.brass} />
          <PlateTitle>③ 客观要件</PlateTitle>
        </Enter>
        <Enter delay={44} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>行为外在的<span style={{fontWeight: 950, color: C.ink}}>违法事实</span>要素</Enter>
        <Enter delay={54} style={{marginTop: 12, display: 'flex', gap: 8}}>
          <Chip style={{fontSize: 20}}>行为</Chip>
          <Chip style={{fontSize: 20}}>结果</Chip>
          <Chip style={{fontSize: 20}}>因果关系</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="st-subjective" style={{position: 'absolute', left: 1350, top: 0, width: 426, height: 212, backgroundColor: C.label, border: `3px solid ${C.ink}`, borderRadius: 4, padding: '14px 16px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Compass size={28} color={C.brass} />
          <PlateTitle>④ 主观要件</PlateTitle>
        </Enter>
        <Enter delay={58} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>行为人内心的<span style={{fontWeight: 950, color: C.ink}}>罪过</span>要素</Enter>
        <Enter delay={68} style={{marginTop: 12, display: 'flex', gap: 8}}>
          <Chip style={{fontSize: 20}}>故意</Chip>
          <Chip style={{fontSize: 20}}>过失</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="result-unlawful-fact" style={{position: 'absolute', left: 0, right: 0, top: 236, height: 96, backgroundColor: C.venousSoft, border: `3px solid ${C.venous}`, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scroll size={28} color={C.venous} />
          <LabelBlock size={27} color={C.venous}>违法事实</LabelBlock>
        </Enter>
        <Enter delay={86} style={{fontSize: 23, fontWeight: 800}}>四要件齐备 → 制造法益侵害事实＝<SoftHi style={{fontSize: 22}}>违法性</SoftHi>（法益侵害性＋应被禁止性）</Enter>
      </div>

      <div data-final-knowledge="gate-justification" style={{position: 'absolute', left: 0, top: 356, width: 876, height: 260, backgroundColor: C.plate, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '16px 20px'}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ShieldCheck size={28} color={C.brass} />
          <LabelBlock size={27} color={C.brass}>排除违法事由（正当化事由）</LabelBlock>
        </Enter>
        <Enter delay={102} style={{marginTop: 12, fontSize: 23, fontWeight: 900}}>复审一问：干的事到底是不是<ThinU>坏事</ThinU>？有没有可能<ThinU>正当</ThinU>？</Enter>
        <Enter delay={114} style={{marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="brass" style={{fontSize: 22}}>正当防卫</Chip>
          <Chip tone="brass" style={{fontSize: 22}}>紧急避险</Chip>
          <Chip tone="brass" style={{fontSize: 22}}>被害人承诺</Chip>
        </Enter>
        <Enter delay={124} style={{marginTop: 14, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>功能：排除行为的违法性（法益侵害性）</Enter>
      </div>

      <div data-final-knowledge="gate-exculpation" style={{position: 'absolute', left: 900, top: 356, width: 876, height: 260, backgroundColor: C.plate, border: `3px solid ${C.arterial}`, borderRadius: 4, padding: '16px 20px'}}>
        <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <KeyRound size={28} color={C.arterial} />
          <LabelBlock size={27} color={C.arterial}>排除责任事由（宽恕事由）</LabelBlock>
        </Enter>
        <Enter delay={122} style={{marginTop: 12, fontSize: 23, fontWeight: 900}}>复审二问：这个人是不是<ThinU>坏人</ThinU>？能否<ThinU>谴责</ThinU>·<ThinU>宽恕</ThinU>？</Enter>
        <Enter delay={134} style={{marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="arterial" style={{fontSize: 22}}>责任年龄</Chip>
          <Chip tone="arterial" style={{fontSize: 22}}>责任能力</Chip>
          <Chip tone="arterial" style={{fontSize: 22}}>认识可能性</Chip>
          <Chip tone="arterial" style={{fontSize: 22}}>期待可能性</Chip>
        </Enter>
        <Enter delay={144} style={{marginTop: 14, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>机制：先判断有没有人干坏事·后判断该否谴责</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 640, bottom: 0, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={152}><LabelBlock ink size={25}>三问定罪</LabelBlock></Enter>
        <Enter delay={162} style={{display: 'flex', gap: 10}}>
          <Chip style={{fontSize: 21}}>四要件 → 干坏事了吗</Chip>
          <Chip tone="brass" style={{fontSize: 21}}>排除违法 → 是坏事吗</Chip>
          <Chip tone="arterial" style={{fontSize: 21}}>排除责任 → 是坏人吗</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const StagedCrimeLadderScene = () => (
  <Shell code="02" title="犯罪概念的阶段化·15岁抢夺案">
    <div data-layout="stage-ladder-exam-board" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="stage-ladder-progression,exam-verdict-columns" data-focal-rule="crime-is-staged-unlawful-fact-first-liability-second" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="stage-one-unlawful" style={{position: 'absolute', left: 0, top: 0, width: 780, height: 200, backgroundColor: C.label, border: `3px solid ${C.venous}`, borderRadius: 4, padding: '14px 18px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scroll size={28} color={C.venous} />
          <LabelBlock size={26} color={C.venous}>阶段一 · 制造违法事实意义上的「犯罪」</LabelBlock>
        </Enter>
        <Enter delay={16} style={{marginTop: 12, fontSize: 22, fontWeight: 700}}>评价：<Chip tone="venous" style={{fontSize: 21}}>干了坏事 · 对事不对人</Chip></Enter>
        <Enter delay={26} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>标准：客观＋主观要件齐备，且不具有排除违法事由</Enter>
      </div>
      <Dash delay={30} style={{position: 'absolute', left: 380, top: 200, width: 4, height: 36, backgroundColor: C.ink}} />

      <div data-final-knowledge="stage-two-responsible" style={{position: 'absolute', left: 0, top: 236, width: 780, height: 200, backgroundColor: C.label, border: `3px solid ${C.arterial}`, borderRadius: 4, padding: '14px 18px'}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={28} color={C.arterial} />
          <LabelBlock size={26} color={C.arterial}>阶段二 · 最终负刑事责任的「犯罪」</LabelBlock>
        </Enter>
        <Enter delay={44} style={{marginTop: 12, fontSize: 22, fontWeight: 700}}>评价：<Chip tone="arterial" style={{fontSize: 21}}>干了坏事＋是坏人 · 对事又对人</Chip></Enter>
        <Enter delay={54} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>标准：又不具有排除责任事由</Enter>
      </div>
      <Dash delay={58} style={{position: 'absolute', left: 380, top: 436, width: 4, height: 32, backgroundColor: C.ink}} />

      <div data-final-knowledge="stage-no-duty-consequence" style={{position: 'absolute', left: 0, top: 468, width: 780, height: 276, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 4, padding: '14px 18px'}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <KeyRound size={28} color={C.brass} />
          <LabelBlock ink size={25}>有排除责任事由 → 不负刑责</LabelBlock>
        </Enter>
        <Enter delay={72} style={{marginTop: 12, fontSize: 22, fontWeight: 700}}>但<ThinU>不能否定</ThinU>其制造了违法事实意义上的犯罪行为</Enter>
        <Enter delay={82} style={{marginTop: 12}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>赃物依然是犯罪所得——他人代为保管 → 掩饰·隐瞒犯罪所得罪</Chip></Enter>
      </div>

      <div data-final-knowledge="exam-case-board" style={{position: 'absolute', left: 804, top: 0, width: 972, height: 744, backgroundColor: C.plate, border: `3px double ${C.ink}`, borderRadius: 4, padding: '16px 22px'}}>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={30} color={C.arterial} />
          <LabelBlock size={26}>2012·卷二 · 15岁抢夺案</LabelBlock>
        </Enter>
        <Enter delay={80} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>甲（15周岁）求乙（16周岁）为其抢夺接应；甲抢得手提包（1万元）扔给乙后引开被害人；乙害怕，将包扔进草丛离去</Enter>
        <div data-final-knowledge="exam-co-conclusion" style={{marginTop: 14, border: `3px solid ${C.venous}`, borderRadius: 4, padding: '10px 14px'}}>
          <Enter delay={92} style={{fontSize: 22, fontWeight: 900}}>定性：甲乙构成<SoftHi style={{fontSize: 21}}>制造违法事实意义上的共同犯罪</SoftHi></Enter>
          <Enter delay={102} style={{marginTop: 8, display: 'flex', gap: 10}}>
            <Chip tone="venous" style={{fontSize: 20}}>甲 · 实行犯</Chip>
            <Chip tone="venous" style={{fontSize: 20}}>乙 · 帮助犯</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="exam-duty-conclusion" style={{marginTop: 12, border: `3px solid ${C.arterial}`, borderRadius: 4, padding: '10px 14px'}}>
          <Enter delay={112} style={{fontSize: 22, fontWeight: 900}}>责任：进入排除责任阶段分头处理</Enter>
          <Enter delay={122} style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="arterial" style={{fontSize: 20}}>甲 15岁·未达责任年龄 → 不负刑责</Chip>
            <Chip tone="arterial" style={{fontSize: 20}}>乙 满16 → 负帮助犯责任</Chip>
          </Enter>
          <Enter delay={132} style={{marginTop: 10}}><Neg size={22}>D 项「乙成立中止犯」——错误（本题选 D）</Neg></Enter>
        </div>
        <div data-final-knowledge="exam-soviet-flaw" style={{marginTop: 12, backgroundColor: C.arterialSoft, border: `3px dashed ${C.arterial}`, borderRadius: 4, padding: '10px 14px'}}>
          <Enter delay={144} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={26} color={C.arterial} />
            <span style={{fontSize: 22, fontWeight: 950, color: C.arterial}}>苏联版四要件的缺陷</span>
          </Enter>
          <Enter delay={154} style={{marginTop: 8, fontSize: 21, fontWeight: 700}}>主体须有责任年龄·能力 → 甲直接无罪 → 乙无法定帮助犯·间接正犯 → <span style={{fontWeight: 950, color: C.arterial}}>处罚漏洞</span></Enter>
        </div>
      </div>
    </div>
  </Shell>
);
