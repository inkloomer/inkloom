import {AbsoluteFill} from 'remotion';
import {Award, Ban, Coins, FileSignature, Gavel, GraduationCap, HardHat, Landmark, PackageOpen, Truck, Undo2} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as VaultStamp, ThinU} from './theme';

export const FourForkScene = () => (
  <Shell code="01" title="受理后的四岔路口：谁能动、谁不能动">
    <div data-layout="four-fork-intersection" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="security-claim-deferred-rule,possessor-owns-money-rule,bad-faith-offset-ban-rule" data-focal-rule="after-acceptance-secured-claims-must-be-declared-the-administrator-controls-executory-contracts-money-becomes-estate-property-and-bad-faith-offsets-are-banned" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="fq-mortgage-desk" style={{position: 'absolute', left: 0, top: 0, width: 888, height: 280, backgroundColor: C.panel, border: `3px solid ${C.coral}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={28} color={C.coral} style={{flexShrink: 0}} />
          <LabelBlock color={C.coral} size={25}>A ✗ · 抵押权不能受理后就动手</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>房产抵押债权也<ThinU color={C.coral}>须申报</ThinU>→ 分配时方可行使<SoftHi style={{fontSize: 21}}>别除权</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>「受理后行使抵押权」错</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="fq-contract-desk" style={{position: 'absolute', left: 0, top: 306, width: 888, height: 230, backgroundColor: C.panel, border: `3px solid ${C.mint}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileSignature size={28} color={C.mint} style={{flexShrink: 0}} />
          <LabelBlock color={C.mint} size={25}>B ✓ · 待履行合同管理人说了算</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8}}>双方均未履行完毕 → 管理人<SoftHi style={{fontSize: 21}}>可解除</SoftHi>，代表全体债权人利益</Enter>
      </div>
      <div data-final-knowledge="fq-money-desk" style={{position: 'absolute', left: 920, top: 0, width: 856, height: 280, backgroundColor: C.panel, border: `3px solid ${C.mint}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.mint} style={{flexShrink: 0}} />
          <LabelBlock color={C.mint} size={25}>C ✓ · 货币占有即所有</LabelBlock>
        </Enter>
        <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>赔偿金入账即融合为<ThinU color={C.lapis}>债务人财产</ThinU>——<Neg size={20}>不能取回</Neg></span>
          <span>毁损受理前→普通债权；受理后→<Chip tone="mint" style={{fontSize: 19}}>共益债务</Chip></span>
        </Enter>
      </div>
      <div data-final-knowledge="fq-offset-desk" style={{position: 'absolute', left: 920, top: 306, width: 856, height: 230, backgroundColor: C.panel, border: `3px solid ${C.coral}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Ban size={28} color={C.coral} style={{flexShrink: 0}} />
          <LabelBlock color={C.coral} size={25}>D ✗ · 恶意受让债权禁止抵销</LabelBlock>
        </Enter>
        <Enter delay={152} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8}}>受理后低价受让为抵销<ThinU color={C.coral}>创造条件</ThinU>→ 茹洁仍须<SoftHi style={{fontSize: 21}}>全额履行</SoftHi></Enter>
      </div>
      <div data-final-knowledge="fq-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 562, height: 182, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={174} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.scroll}}>2016-3-73 · 正确答案 BC</span>
          </Enter>
          <Enter delay={192} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(240,237,226,0.7)', lineHeight: 1.8}}>背诵三连：抵押先申报 · 合同管理人断 · 货币占有即所有</Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed rgba(240,237,226,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={204}><VaultStamp delay={210} tone="coral">为抵销造条件＝禁止</VaultStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const WorkerClaimsScene = () => (
  <Shell code="02" title="职工债权：无需申报的三连错">
    <div data-layout="worker-claims-noticeboard" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="staff-claim-no-declaration-rule,human-injury-payment-protected-rule" data-focal-rule="staff-claims-need-no-declaration-and-human-injury-payments-within-six-months-are-never-avoided-while-pre-acceptance-lawsuits-are-stayed" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="wc-noscript-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.lapis}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HardHat size={30} color={C.lapis} style={{flexShrink: 0}} />
          <LabelBlock color={C.lapis} size={26}>A 错误当选 · 职工债权无需申报</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="lapis" style={{fontSize: 20}}>管理人公示</Chip>→<Chip tone="lapis" style={{fontSize: 20}}>职工核对</Chip>→<Chip tone="lapis" style={{fontSize: 20}}>异议更正</Chip>→<Chip tone="mint" style={{fontSize: 20}}>登记</Chip></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>「经过申报债权后参加会议」错</Neg><span>——无需职工单独申报</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="wc-humanedesk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HardHat size={28} color={C.coral} style={{flexShrink: 0}} />
          <LabelBlock color={C.coral} size={25}>B、C 错误当选 · 工伤钱动不得</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>人身损害赔偿＝运营基本成本</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>B 撤销 10 万赔偿金</Neg></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C 追回已付医疗费</Neg><span>——均不成立</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="wc-lawsuit-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 210, backgroundColor: C.panel, border: `3px solid ${C.mint}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={28} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={25}>D 正确 · 受理前已开的诉讼应当中止</LabelBlock>
          </Enter>
          <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8}}>受理后法律关系<ThinU color={C.mint}>冻结</ThinU>——中止审理，管理人接管后<SoftHi style={{fontSize: 21}}>继续审理</SoftHi></Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132} style={{fontSize: 20, fontWeight: 750, color: C.scrollDim, lineHeight: 1.7}}>周某 20 万工伤之诉 → 停一停，换管理人接着审</Enter>
        </div>
      </div>
      <div data-final-knowledge="wc-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 562, height: 182, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.scroll}}>2018金题 · 题问「错误的是」→ ABC</span>
          </Enter>
          <Enter delay={174} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(240,237,226,0.7)', lineHeight: 1.8}}>背诵三连：职工债权免申报 · 工伤清偿不撤销 · 在审诉讼要中止</Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed rgba(240,237,226,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={194}><VaultStamp delay={200} tone="scroll">勿忽略「申报」二字</VaultStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TransitGateScene = () => (
  <Shell code="03" title="特殊取回权：路上＋未付清双要件">
    <div data-layout="transit-gate-inspection" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="transit-retrieval-two-gates-rule,restore-original-state-rule" data-focal-rule="special-retrieval-requires-goods-in-transit-and-unpaid-price-here-both-fail-so-rescission-lets-the-seller-take-the-machine-back" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="tg-gate-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 250, backgroundColor: C.panel, border: `3px solid ${C.lapis}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Truck size={30} color={C.lapis} style={{flexShrink: 0}} />
          <LabelBlock color={C.lapis} size={26}>特殊取回权 · 双闸门验票</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.9, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="lapis" style={{fontSize: 20}}>货在路上</Chip>＋<Chip tone="lapis" style={{fontSize: 20}}>未付清价款</Chip>＋<Chip tone="lapis" style={{fontSize: 20}}>拒付或拒收</Chip>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>本案已到货 ✗</Neg><Neg size={20}>已付 60% ✗</Neg><span>——两闸全不过</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="tg-recover-desk" style={{position: 'absolute', left: 0, right: 0, top: 276, height: 230, backgroundColor: C.panel, border: `3px solid ${C.mint}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <PackageOpen size={28} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={25}>A ✓ · 出路在「解除」不在「取回」</LabelBlock>
          </Enter>
          <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8}}>管理人<ThinU color={C.mint}>无权要求交付</ThinU>；解除待履行合同后恒通<SoftHi style={{fontSize: 21}}>收回设备</SoftHi>＝恢复原状</Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={90} style={{fontSize: 20, fontWeight: 750, color: C.scrollDim, lineHeight: 1.7}}>定金担保的汽车跟着合同一起算，C、D 两项全排除</Enter>
        </div>
      </div>
      <div data-final-knowledge="tg-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 532, height: 212, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.scroll}}>2022金题 · 正确答案 A</span>
          </Enter>
          <Enter delay={132} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(240,237,226,0.7)', lineHeight: 1.8}}>背诵三连：路上＋未付清双要件 · 已到货走解除 · 恢复原状收回设备</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(240,237,226,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={154} style={{fontSize: 20, fontWeight: 750, color: 'rgba(240,237,226,0.72)', lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Coins size={20} color={C.gold} style={{flexShrink: 0}} /><span>已付 60% 部分系不当得利 → 共益债务随时清偿</span></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ClawbackScene = () => (
  <Shell code="04" title="追回双刃：董事奖金与抽逃出资">
    <div data-layout="clawback-twin-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="abnormal-income-clawback-rule,capital-withdrawal-no-limitation-rule" data-focal-rule="abnormal-bonuses-are-clawed-back-while-withdrawn-capital-contributions-return-without-any-limitation-period" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cb-bonus-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Award size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={26}>A ✓ · 奖金 100 万＝非正常收入</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>月薪 2 万 → 年薪 24 万，奖金 <ThinU color={C.gold}>100 万</ThinU>明显超常——管理人<SoftHi style={{fontSize: 21}}>有权追回</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>B「属工资收入」错</Neg><span>——正常工资保留，超常部分追回</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="cb-offset-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Ban size={28} color={C.coral} style={{flexShrink: 0}} />
          <LabelBlock color={C.coral} size={25}>C ✗ 不能抵销 · D ✓ 被告是债务人</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>追回后返还原债权＝<ThinU color={C.coral}>普通债权</ThinU>，与奖金<SoftHi style={{fontSize: 20}}>非同一笔资金</SoftHi></span>
          <span>确认之诉以<Chip tone="mint" style={{fontSize: 19}}>债务人</Chip>为被告，管理人为诉讼代表人</span>
        </Enter>
      </div>
      <div data-final-knowledge="cb-shares-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 210, backgroundColor: C.panel, border: `3px solid ${C.lapis}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Undo2 size={28} color={C.lapis} style={{flexShrink: 0}} />
            <LabelBlock color={C.lapis} size={25}>抽逃出资 · 三个「不受」</LabelBlock>
          </Enter>
          <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.scroll, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="lapis" style={{fontSize: 19}}>不受 1 年撤销期间</Chip><Chip tone="lapis" style={{fontSize: 19}}>不受诉讼时效</Chip><Chip tone="lapis" style={{fontSize: 19}}>非债权申报</Chip></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132} style={{fontSize: 20, fontWeight: 750, color: C.scrollDim, lineHeight: 1.7}}>撤销权管债务人行为，抽逃系股东行为；出资＝资本维持义务，直接追回</Enter>
        </div>
      </div>
      <div data-final-knowledge="cb-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 562, height: 182, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.scroll}}>2023金题 AD · 2025金题 D</span>
          </Enter>
          <Enter delay={174} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(240,237,226,0.7)', lineHeight: 1.8}}>背诵三连：超常奖金必追回 · 追回债权不抵销 · 抽逃出资无时效</Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed rgba(240,237,226,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={194}><VaultStamp delay={200} tone="gold">正常保留 · 超常追回</VaultStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const IndigoEstateVault = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-four-fork" {...SCENES.fourFork}><FourForkScene /></TimelineSequence>
    <TimelineSequence name="02-worker-claims" {...SCENES.workerClaims}><WorkerClaimsScene /></TimelineSequence>
    <TimelineSequence name="03-transit-gate" {...SCENES.transitGate}><TransitGateScene /></TimelineSequence>
    <TimelineSequence name="04-clawback" {...SCENES.clawback}><ClawbackScene /></TimelineSequence>
  </AbsoluteFill>
);
