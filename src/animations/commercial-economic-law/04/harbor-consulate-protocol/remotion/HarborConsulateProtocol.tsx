import {AbsoluteFill} from 'remotion';
import {Ban, FileText, GraduationCap, HandCoins, Landmark, Scale, ShieldCheck, Stamp, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as PortStamp, ThinU} from './theme';

export const RequisitionScene = () => (
  <Shell code="01" title="征用不是征收：方舱改仓库案">
    <div data-layout="requisition-case-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="expropriation-vs-requisition-split,compensation-liability-fork" data-focal-rule="requisition-for-public-interest-is-lawful-and-earns-compensation-never-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rq-case-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 268, backgroundColor: C.panel, border: `3px solid ${C.sky}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={30} color={C.sky} style={{flexShrink: 0}} />
          <LabelBlock size={26}>美星公司（美资）· 仓库改建方舱医院</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>不实行<SoftHi style={{fontSize: 21}}>国有化征收</SoftHi>——外商投资保护的基本面</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="sky" style={{fontSize: 20}}>但</Chip>不实行征收 ≠ <ThinU color={C.sky}>不得征收征用</ThinU>（A ✗）</span>
        </Enter>
      </div>
      <div data-final-knowledge="rq-fork-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 268, backgroundColor: C.manifest, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>开闸条件 · 两钥匙</LabelBlock>
        </Enter>
        <Enter delay={62} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>特殊情况</Chip>＋<Chip tone="seal" style={{fontSize: 20}}>公共利益</Chip></span>
          <span>→ 抗击疫情正符合 → <SoftHi dark={false} style={{fontSize: 21}}>可依法征用</SoftHi>（B ✓）</span>
        </Enter>
      </div>
      <div data-final-knowledge="rq-compensation-desk" style={{position: 'absolute', left: 0, top: 294, width: 1032, height: 240, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HandCoins size={28} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock size={25}>征用后给什么 · 一字定音</LabelBlock>
          </Enter>
          <Enter delay={102} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>依<ThinU color={C.brass}>法定程序</ThinU>＋及时<SoftHi style={{fontSize: 21}}>公平合理补偿</SoftHi>（D ✓）</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={120} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>C ✗ 赔偿</Chip><span>＝违法担责；国家无违法</span></Enter>
          <Enter delay={140} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>D ✓ 补偿</Chip><span>＝合法给付的公平对价</span></Enter>
        </div>
      </div>
      <div data-final-knowledge="rq-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 560, height: 184, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={160} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.manifest}}>2020金题 · 正确答案 BD</span>
          </Enter>
          <Enter delay={178} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(242,236,218,0.7)', lineHeight: 1.8}}>背诵三连：不国有化 · 特殊+公益可征用 · 法定程序＋补偿</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={198} style={{fontSize: 20, fontWeight: 750, color: 'rgba(242,236,218,0.66)', lineHeight: 1.7}}>一字诀：<ThinU color={C.brass}>合法给「补」，违法给「赔」</ThinU>——考场一字杀</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const NegativeListScene = () => (
  <Shell code="02" title="负面清单之外：国民待遇＋备案制">
    <div data-layout="negative-list-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,external-negation" data-visual-grammar="national-treatment-rule,list-outside-inside-split" data-focal-rule="outside-the-negative-list-foreign-investment-gets-national-treatment-and-contracts-do-not-need-approval-to-take-effect" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="nl-outside-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.jade}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={30} color={C.jade} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={26}>清单外＝白名单 · 达丽 v. 揽月案</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>股权转让合同在负面清单之外 → 实行<SoftHi style={{fontSize: 21}}>国民待遇</SoftHi>＋备案制</span>
          <span>以「未经批准」主张无效 → 法院<Neg size={21}>不予支持</Neg>（A ✓）——合同<ThinU color={C.jade}>不以审批生效</ThinU></span>
        </Enter>
      </div>
      <div data-final-knowledge="nl-inside-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Ban size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>清单之内 · 限制或禁止</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>负面清单内限制或禁止准入</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C「最惠国待遇」——清单外给的是国民待遇</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="nl-summary-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 200, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileText size={28} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock size={25}>B ✗ · 新法有一定溯及力</LabelBlock>
          </Enter>
          <Enter delay={106} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.8}}>施行前签订、施行时<ThinU color={C.brass}>尚未审结</ThinU>的合同效力纠纷 → <SoftHi style={{fontSize: 20}}>适用新法</SoftHi>认定（详见 03 场景）</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={126} style={{fontSize: 21, fontWeight: 800, color: C.manifest, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>D ✓ 内外资一致原则管理</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const RetroactiveScene = () => (
  <Shell code="03" title="溯及力与全题收束">
    <div data-layout="retroactive-summary-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="retroactive-application-rule,answer-summary-rule" data-focal-rule="the-new-law-applies-to-pre-enactment-contracts-unadjudicated-at-effective-date-and-the-answer-is-ad" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="nl-retroactive-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 200, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileText size={28} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock size={25}>B ✗ · 新法有一定溯及力</LabelBlock>
          </Enter>
          <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.8}}>施行前签订、施行时<ThinU color={C.brass}>尚未审结</ThinU>的合同效力纠纷 → <SoftHi style={{fontSize: 21}}>适用新法</SoftHi>认定</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={44} style={{fontSize: 21, fontWeight: 800, color: C.manifest, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>D ✓ 内外资一致原则管理</Chip></Enter>
        </div>
      </div>
      <div data-final-knowledge="nl-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 226, height: 200, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.manifest}}>2020金题 · 正确答案 AD</span>
          </Enter>
          <Enter delay={78} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(242,236,218,0.7)', lineHeight: 1.8}}>背诵三连：清单外国民待遇 · 合同不以审批生效 · 新法有限溯及</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={100}><PortStamp delay={106} tone="jade">白名单＝内外资一致</PortStamp></Enter>
        </div>
      </div>
      <div data-final-knowledge="nl-bridge-strip" style={{position: 'absolute', left: 0, right: 0, top: 452, height: 292, backgroundColor: C.panel, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Stamp size={28} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock size={25}>场景联动 · 01 的征用规则还在生效</LabelBlock>
          </Enter>
          <Enter delay={140} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 征用合法＋补偿——不因走完负面清单而消失</span>
            <span>· 两题共用一条主线：<SoftHi style={{fontSize: 20}}>内外资一致保护</SoftHi></span>
          </Enter>
        </div>
        <div style={{width: 380, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={162} style={{fontSize: 20, fontWeight: 750, color: 'rgba(242,236,218,0.66)', lineHeight: 1.7}}>AD 收卷 · 口岸通关</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const HarborConsulateProtocol = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-requisition" {...SCENES.requisition}><RequisitionScene /></TimelineSequence>
    <TimelineSequence name="02-negative-list" {...SCENES.negativeList}><NegativeListScene /></TimelineSequence>
    <TimelineSequence name="03-retroactive" {...SCENES.retroactive}><RetroactiveScene /></TimelineSequence>
  </AbsoluteFill>
);
