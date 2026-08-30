import {AbsoluteFill} from 'remotion';
import {ArrowLeftRight, ClipboardList, Gavel, GraduationCap, Handshake, Hourglass, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as PlumStamp, ThinU} from './theme';

export const GuarantorTriptychScene = () => (
  <Shell code="01" title="保证人的三条出路：不免责">
    <div data-layout="guarantor-triptych-wall" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="guarantor-no-discharge-rule,subrogation-full-payment-gate-rule" data-focal-rule="an-undeclared-unnotified-guarantor-is-not-discharged-may-declare-at-accepted-amount-may-be-sued-and-subrogates-only-after-full-payment" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ga-exempt-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.rust}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Handshake size={30} color={C.rust} style={{flexShrink: 0}} />
          <LabelBlock color={C.rust} size={26}>A ✗ · 债权人不申报不通知 ≠ 免责</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>乙银行<ThinU color={C.rust}>未申报未通知</ThinU>、丙未预清偿——保证人<SoftHi style={{fontSize: 21}}>不免责</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="rose" style={{fontSize: 20}}>仅「不再承担清偿责任」</Chip><span>——因债权人过错，非免责</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="ga-declare-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, border: `3px solid ${C.sage}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ClipboardList size={28} color={C.sage} style={{flexShrink: 0}} />
          <LabelBlock color={C.sage} size={25}>B ✓ · 保证债权这样申报</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>以<ThinU color={C.sage}>受理时债权额</ThinU>为限</span>
          <span>受理后<SoftHi style={{fontSize: 21}}>停止计息</SoftHi>——利息冻结在门口</span>
        </Enter>
      </div>
      <div data-final-knowledge="ga-sue-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 210, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={28} color={C.rose} style={{flexShrink: 0}} />
            <LabelBlock color={C.rose} size={25}>C ✓＋D ✓ · 申报之后的两条路</LabelBlock>
          </Enter>
          <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>债权人乙申报后 → 可<ThinU color={C.rose}>另行起诉</ThinU>丙承担保证责任</span>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><ArrowLeftRight size={22} color={C.sage} style={{flexShrink: 0}} /><span>丙清偿后 → <SoftHi style={{fontSize: 21}}>代位行使</SoftHi>乙的债权</span></span>
          </Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132} style={{fontSize: 20, fontWeight: 750, color: C.blushDim, lineHeight: 1.7}}>先诉抗辩打底：保证人先预清偿、再代位</Enter>
        </div>
      </div>
      <div data-final-knowledge="ga-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 562, height: 182, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.sand} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.blush}}>2021金题 · 正确答案 BCD</span>
          </Enter>
          <Enter delay={174} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(245,237,227,0.7)', lineHeight: 1.8}}>背诵三连：不申报不通知不免责 · 申报冻结在受理日 · 清偿完才能代位</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(245,237,227,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={194}><PlumStamp delay={200} tone="rust">未全部清偿＝不得代位</PlumStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const DefendantCompassScene = () => (
  <Shell code="02" title="确认之诉：被告永远是债务人">
    <div data-layout="defendant-compass-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="debtor-as-defendant-rule,judicial-review-denial-rule" data-focal-rule="a-denied-claim-is-sued-against-the-debtor-never-the-administrator-and-a-solvent-guarantor-does-not-cure-insolvency" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="df-cause-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 250, backgroundColor: C.panel, border: `3px solid ${C.rust}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Handshake size={28} color={C.rust} style={{flexShrink: 0}} />
          <LabelBlock color={C.rust} size={26}>A ✗ · 担保人有钱救不了破产原因</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.8}}>破产原因只看债务人自身——<Neg size={21}>「丙能清偿＝不具备破产原因」错</Neg>，撤回申请被拒合法</Enter>
      </div>
      <div data-final-knowledge="df-denial-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 250, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={28} color={C.rose} style={{flexShrink: 0}} />
          <LabelBlock color={C.rose} size={25}>B ✗ · 管理人不得直接否认</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.8}}>债权异议须<ThinU color={C.rose}>司法审查</ThinU>——<Neg size={20}>「管理人直接认定不予确认」错</Neg></Enter>
      </div>
      <div data-final-knowledge="df-suedesk" style={{position: 'absolute', left: 0, right: 0, top: 276, height: 260, backgroundColor: C.panel, border: `3px solid ${C.sage}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={28} color={C.sage} style={{flexShrink: 0}} />
            <LabelBlock color={C.sage} size={25}>C ✗／D ✓ · 罗盘只指一个被告</LabelBlock>
          </Enter>
          <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C 起诉管理人</Neg><span>——管理人只是<Chip tone="sage" style={{fontSize: 19}}>诉讼代表人</Chip></span></span>
            <span>D ✓ 丙申报后可<SoftHi style={{fontSize: 21}}>另行起诉甲公司</SoftHi>承担清偿责任</span>
          </Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={134} style={{fontSize: 20, fontWeight: 750, color: C.blushDim, lineHeight: 1.7}}>申报与起诉并行不悖——两条腿走路</Enter>
        </div>
      </div>
      <div data-final-knowledge="df-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 562, height: 182, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.sand} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.blush}}>2022金题 · 正确答案 D</span>
          </Enter>
          <Enter delay={176} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(245,237,227,0.7)', lineHeight: 1.8}}>背诵三连：担保人不救原因 · 异议走法院 · 被告是债务人</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(245,237,227,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={196}><PlumStamp delay={202} tone="blush">别把代表人当被告</PlumStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ClepsydraDeadlineScene = () => (
  <Shell code="03" title="15 日漏刻：除斥期间不开闸">
    <div data-layout="clepsydra-deadline-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="fifteen-day-peremptory-rule,debtor-defendant-repeat-rule" data-focal-rule="a-disallowed-claim-must-be-sued-within-fifteen-days-after-creditors-meeting-verification-against-the-debtor-at-the-accepting-court" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cl-clock-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 260, backgroundColor: C.panel, border: `3px solid ${C.sand}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Hourglass size={30} color={C.sand} style={{flexShrink: 0}} />
          <LabelBlock color={C.sand} size={26}>D ✓ · 乙公司的唯一正点</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.9, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="sage" style={{fontSize: 20}}>核查结束后 15 日内</Chip>→<Chip tone="sage" style={{fontSize: 20}}>向受理法院起诉</Chip>→<Chip tone="rose" style={{fontSize: 20}}>被告＝债务人甲</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="cl-trap-desk" style={{position: 'absolute', left: 0, right: 0, top: 286, height: 230, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={28} color={C.rust} style={{flexShrink: 0}} />
            <LabelBlock color={C.rust} size={25}>A ✗ B ✗ C ✗ · 三扇错门</LabelBlock>
          </Enter>
          <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.blush, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>A 向管理人异议</Neg><Neg size={20}>B「申请」确认之诉</Neg></span>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C 起诉管理人</Neg><span>——应直接<SoftHi style={{fontSize: 21}}>起诉</SoftHi>，非申请、非异议</span></span>
          </Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={90} style={{fontSize: 20, fontWeight: 750, color: C.blushDim, lineHeight: 1.7}}>受理前未决诉讼：中止，管理人接管后继续</Enter>
        </div>
      </div>
      <div data-final-knowledge="cl-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 542, height: 202, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.sand} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.blush}}>2024金题 · 正确答案 D</span>
          </Enter>
          <Enter delay={132} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(245,237,227,0.7)', lineHeight: 1.8}}>背诵三连：异议找法院不找管理人 · 直接起诉不申请 · 15日除斥</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(245,237,227,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={154}><PlumStamp delay={160} tone="sand">超时一滴不候＝失权</PlumStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const PlumAppealsClockhouse = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-guarantor-triptych" {...SCENES.guarantorTriptych}><GuarantorTriptychScene /></TimelineSequence>
    <TimelineSequence name="02-defendant-compass" {...SCENES.defendantCompass}><DefendantCompassScene /></TimelineSequence>
    <TimelineSequence name="03-clepsydra-deadline" {...SCENES.clepsydraDeadline}><ClepsydraDeadlineScene /></TimelineSequence>
  </AbsoluteFill>
);
