import {AbsoluteFill} from 'remotion';
import {AlertTriangle, Ban, CalendarDays, CornerUpLeft, FileCheck, FileWarning, FileX, GraduationCap, Handshake, Scale, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as SealStamp, ThinU, Watermark} from './theme';

export const GuarantyFeaturesScene = () => (
  <Shell code="01" title="票据保证三特征">
    <div data-layout="bill-guaranty-seal-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="guaranty-independence-joint-several-rule,guaranty-date-default-rule" data-focal-rule="bill-guarantees-are-independent-joint-and-subrogated-with-no-conditions-and-issuance-date-defaulting-as-guarantee-date" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="bf-features-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Handshake size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={25}>票据保证三特征</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<FileCheck size={28} color={C.ink} strokeWidth={2.2} />} tone={C.gold} title="独立性">——不受主合同干扰</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Users size={28} color={C.bone} strokeWidth={2.2} />} tone={C.jade} title="连带性">——与被保证人连带，<Neg light size={20}>无先诉抗辩</Neg>（C ✗ 戊可直接向丁追索）</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<CornerUpLeft size={28} color={C.bone} strokeWidth={2.2} />} tone={C.cinnabar} title="代位性">——丁付款后成<SoftHi light style={{fontSize: 20}}>新权利人</SoftHi>，向甲乙丙<ThinU color={C.gold}>全部前手再追索</ThinU>（D ✗ 不限丙）</IconChip></Enter>
        <Watermark><Handshake size={170} color={C.gold} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="bf-details-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.jade}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <CalendarDays size={28} color={C.jade} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={25}>记载规则</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Ban size={28} color={C.bone} strokeWidth={2.2} />} tone={C.cinnabar} title="A ✗ 保证不得附条件">——附条件不生效，不影响保证责任</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<CalendarDays size={28} color={C.bone} strokeWidth={2.2} />} tone={C.gold} title="B ✓ 未记载保证日期">——以<SoftHi light style={{fontSize: 20}}>出票日期</SoftHi>为保证日期</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<AlertTriangle size={28} color={C.bone} strokeWidth={2.2} />} tone={C.cinnabar} title="绝对化表述">——「只有…才…」「只能」几乎可判死刑</IconChip></Enter>
        <Watermark><CalendarDays size={150} color={C.jade} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="bf-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>2015-3-32 · 正确答案 B</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(242,234,216,0.72)', lineHeight: 1.8}}>背诵三连：独立性 · 连带性 · 代位性——附条件不生效，未记日期推出票日</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(242,234,216,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><SealStamp delay={170} tone="jade">连带 · 无先诉抗辩</SealStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AgencyNontransferScene = () => (
  <Shell code="02" title="越权代理与记载不得转让">
    <div data-layout="exceeding-agency-endorsement-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="exceeding-agency-validity-rule,nontransfer-endorsement-scope-rule" data-focal-rule="exceeding-agency-issuance-stays-valid-under-bona-fide-protection-and-endorser-nontransfer-notes-only-shield-the-endorser-from-remote-parties" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ea-agency-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.cinnabar}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileWarning size={28} color={C.cinnabar} style={{flexShrink: 0}} />
          <LabelBlock color={C.cinnabar} size={25}>D ✗ · 越权代理出票：330 写成 660 万</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<FileCheck size={28} color={C.bone} strokeWidth={2.2} />} tone={C.gold} title="善意相对人保护＋票据文义性">——票据<SoftHi light style={{fontSize: 20}}>有效</SoftHi></IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Scale size={28} color={C.bone} strokeWidth={2.2} />} tone={C.jade} title="甲公司按票面金额担责">——660 万担责后向张某追偿</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<FileX size={28} color={C.bone} strokeWidth={2.2} />} tone={C.cinnabar} title="A ✗ 张某非票据当事人">——丁不能直接向张某主张</IconChip></Enter>
        <Watermark><FileWarning size={170} color={C.cinnabar} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="ea-nontransfer-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Ban size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={25}>记载「不得转让」两副笔墨</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Ban size={28} color={C.bone} strokeWidth={2.2} />} tone={C.gold} title="背书人记载（乙）">——<ThinU color={C.gold}>不影响流转</ThinU>，B ✓ 乙不被间接后手追索</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<FileX size={28} color={C.bone} strokeWidth={2.2} />} tone={C.cinnabar} title="出票人记载">——<Neg light size={20}>阻断票据流转</Neg>，仅收款人一人</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<CornerUpLeft size={28} color={C.bone} strokeWidth={2.2} />} tone={C.jade} title="C ✗ 出票人未记载">——丁可向丙或甲追索</IconChip></Enter>
        <Watermark><Ban size={150} color={C.gold} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="ea-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>2024金题 · 正确答案 B</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(242,234,216,0.72)', lineHeight: 1.8}}>背诵三连：越权代理票有效 · 背书人记载不挡流转 · 出票人记载阻断流转</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(242,234,216,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><SealStamp delay={170} tone="cinnabar">不被间接后手追索</SealStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const LacquerSealBureau = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-guaranty-features" {...SCENES.guarantyFeatures}><GuarantyFeaturesScene /></TimelineSequence>
    <TimelineSequence name="02-agency-nontransfer" {...SCENES.agencyNontransfer}><AgencyNontransferScene /></TimelineSequence>
  </AbsoluteFill>
);
