import {AbsoluteFill} from 'remotion';
import {BadgeCheck, FileWarning, GraduationCap, HandCoins, Receipt, Scale, Sprout} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as AmberStamp, ThinU} from './theme';

export const TwinLoansScene = () => (
  <Shell code="01" title="两笔借款对局：未登记与新借款">
    <div data-layout="twin-loan-counter" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="unregistered-mortgage-void-rule,new-loan-common-benefit-rule" data-focal-rule="unregistered-mortgage-never-rises-and-restructuring-new-loans-are-common-benefit-debts-paid-anytime-before-ordinary-claims" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ts-jia-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 330, backgroundColor: C.panel, border: `3px solid ${C.brick}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileWarning size={30} color={C.brick} style={{flexShrink: 0}} />
          <LabelBlock color={C.brick} size={26}>甲 · 100 万借款 · 厂房抵押未登记</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>不动产抵押<ThinU color={C.brick}>未登记</ThinU>→ 抵押权<Neg size={21}>不成立</Neg>→ 只是<SoftHi style={{fontSize: 21}}>普通债权</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>A「有权拍卖厂房优先受偿」错</Neg><span>——就算成立，重整期间也暂停行使</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="ts-yi-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 330, backgroundColor: C.panel, border: `3px solid ${C.teal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.teal} style={{flexShrink: 0}} />
          <LabelBlock color={C.teal} size={25}>乙 · 200 万新借款 · 双保险</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="teal" style={{fontSize: 20}}>B ✓ 随时清偿</Chip><Chip tone="teal" style={{fontSize: 20}}>C ✓ 优先于甲</Chip></span>
          <span>管理人经<ThinU color={C.teal}>法院许可</ThinU>借款＋登记抵押 → 参照<SoftHi style={{fontSize: 21}}>共益债务</SoftHi></span>
        </Enter>
      </div>
      <div data-final-knowledge="ts-recall-desk" style={{position: 'absolute', left: 0, right: 0, top: 356, height: 230, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={28} color={C.amber} style={{flexShrink: 0}} />
            <LabelBlock size={25}>一杆双秤 · 同一厂房两种命运</LabelBlock>
          </Enter>
          <Enter delay={108} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>登记是抵押权的<ThinU color={C.amber}>出生证明</ThinU>——甲省了登记，丢了整个优先位</span>
            <span>乙的新借款给重整企业<SoftHi style={{fontSize: 21}}>输血</SoftHi>，法律给它超级优先待遇</span>
          </Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={130} style={{fontSize: 20, fontWeight: 750, color: C.coffeeDim, lineHeight: 1.7}}>D ✓：甲的普通债权按重整计划清偿——排队等方案</Enter>
        </div>
      </div>
      <div data-final-knowledge="ts-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 612, height: 132, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={26} color={C.amber} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>2024金题 · 正确答案 BCD</span>
          </Enter>
        </div>
        <div style={{width: 560, borderLeft: `3px dashed rgba(255,253,246,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6}}>
          <Enter delay={170} style={{fontSize: 20, fontWeight: 750, color: 'rgba(255,253,246,0.72)', lineHeight: 1.6}}>背诵三连：未登记不成立 · 新借款随时清偿 · 普通债权按计划</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const RenewalFeesScene = () => (
  <Shell code="02" title="5 万续期费：共益还是破产费用">
    <div data-layout="license-renewal-bench" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="operating-expense-common-benefit-rule,procedure-expense-split" data-focal-rule="license-renewal-for-continued-operation-is-a-common-benefit-debt-paid-prioritively-without-creditors-meeting-resolution" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="lr-fork-desk" style={{position: 'absolute', left: 0, top: 0, width: 620, height: 460, backgroundColor: C.panel, border: `3px solid ${C.teal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BadgeCheck size={30} color={C.teal} style={{flexShrink: 0}} />
          <LabelBlock color={C.teal} size={25}>危险品资质马上到期</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10}}>
          <span>过期<ThinU color={C.brick}>不能重新申请</ThinU>——无资质则寸步难行</span>
          <span>管理人续期花 5 万＝<SoftHi style={{fontSize: 21}}>继续营业的必要费用</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="teal" style={{fontSize: 20}}>A ✓ 共益债务</Chip><Chip tone="teal" style={{fontSize: 20}}>优先支付</Chip></span>
        </Enter>
      </div>
      <div data-final-knowledge="lr-trap-desk" style={{position: 'absolute', left: 652, top: 0, width: 1092, height: 460, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Receipt size={28} color={C.amber} style={{flexShrink: 0}} />
          <LabelBlock size={25}>B ✗ · 破产费用是另一张清单</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="amber" style={{fontSize: 20}}>程序性费用</Chip>诉讼费 · 管理变价分配费 · 管理人报酬</span>
          <span>本案是<ThinU color={C.teal}>营业性</ThinU>开支，不走程序费用清单</span>
        </Enter>
        <Enter delay={92} style={{marginTop: 16, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C「未经债权人会议决议要自担」错</Neg></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>D「管理人赔债权人」错</Neg><span>——专业判断无违规</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="lr-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 258, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.amber} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2024金题 · 正确答案 A</span>
          </Enter>
          <Enter delay={136} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,253,246,0.72)', lineHeight: 1.8}}>背诵三连：营业必要＝共益 · 程序开支＝破产费用 · 尽职管理人不担责</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,253,246,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={158}><AmberStamp delay={164} tone="paper">共益债务无需会议决议</AmberStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const PriorityRecapScene = () => (
  <Shell code="03" title="清偿顺位总收束：谁先谁后">
    <div data-layout="priority-recap-shelf" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="repayment-priority-ladder,answer-summary-rule" data-focal-rule="common-benefit-debts-are-paid-anytime-and-in-full-priority-while-ordinary-claims-follow-the-reorganization-plan" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pr-order-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 300, backgroundColor: C.panel, border: `3px solid ${C.amber}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Sprout size={30} color={C.sprout} style={{flexShrink: 0}} />
          <LabelBlock size={26}>重整重生 · 一架优先级天梯</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 16, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 2, display: 'flex', flexDirection: 'column', gap: 12}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="teal" style={{fontSize: 20}}>第一梯队</Chip>共益债务／新借款：<SoftHi style={{fontSize: 21}}>随时清偿 · 优先于普通债权</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="amber" style={{fontSize: 20}}>第二梯队</Chip>普通债权：按<ThinU color={C.amber}>重整计划</ThinU>排队受偿</span>
        </Enter>
      </div>
      <div data-final-knowledge="pr-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.amber} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>两题合卷 · BCD 与 A</span>
          </Enter>
          <Enter delay={68} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,253,246,0.72)', lineHeight: 1.8}}>新借款参照共益债务随时清偿；营业必要开支同样是共益债务——都要给重整让路</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,253,246,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={90}><AmberStamp delay={96} tone="amber">共益优先 · 普通排队</AmberStamp></Enter>
        </div>
      </div>
      <div data-final-knowledge="pr-bridge-strip" style={{position: 'absolute', left: 0, right: 0, top: 592, height: 152, backgroundColor: C.panel, borderRadius: 14, padding: '14px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={26} color={C.amber} style={{flexShrink: 0}} />
            <LabelBlock size={24}>场景联动 · 01 的未登记抵押教训还在生效</LabelBlock>
          </Enter>
          <Enter delay={132} style={{marginTop: 8, fontSize: 20, fontWeight: 750, color: C.coffee, lineHeight: 1.7}}>登记＝优先权的门票；重整期间担保暂停行使，但共益债务照付</Enter>
        </div>
        <div style={{width: 380, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={152} style={{fontSize: 20, fontWeight: 750, color: C.coffeeDim, lineHeight: 1.7}}>双秤收卷 · 天梯不忘</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AmberTwinScale = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-twin-loans" {...SCENES.twinLoans}><TwinLoansScene /></TimelineSequence>
    <TimelineSequence name="02-renewal-fees" {...SCENES.renewalFees}><RenewalFeesScene /></TimelineSequence>
    <TimelineSequence name="03-priority-recap" {...SCENES.priorityRecap}><PriorityRecapScene /></TimelineSequence>
  </AbsoluteFill>
);
