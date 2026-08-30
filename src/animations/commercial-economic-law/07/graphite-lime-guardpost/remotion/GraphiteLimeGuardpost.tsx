import {AbsoluteFill} from 'remotion';
import {Coins, FileWarning, Gavel, GraduationCap, Handshake, Scale, ScrollText, ShieldCheck, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as GuardStamp, ThinU, Watermark} from './theme';

export const TrusteeSueScene = () => (
  <Shell code="01" title="债券受托管理人与募集资金">
    <div data-layout="trustee-representative-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="trustee-representative-litigation-rule,raised-funds-purpose-rule" data-focal-rule="the-trustee-may-sue-in-its-own-name-on-holders-behalf-upon-default-and-raised-funds-must-not-cover-losses" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="tr-sue-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.lime}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ScrollText size={28} color={C.lime} style={{flexShrink: 0}} />
          <LabelBlock color={C.lime} size={25}>B ✓ · 到期不能兑付债券本息</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<ScrollText size={28} color={C.ink} strokeWidth={2.2} />} tone={C.lime} title="受托管理人可受委托">——全体或部分债券持有人委托均可</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Gavel size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.pine} title="以自己名义代表起诉">——<SoftHi light style={{fontSize: 20}}>代表诉讼</SoftHi></IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Users size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.pine} title="A ✗ 持有人会议可决议变更">——受托管理人未尽忠实勤勉义务可被更换</IconChip></Enter>
        <Watermark><ScrollText size={170} color={C.lime} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="tr-funds-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.coral}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.coral} style={{flexShrink: 0}} />
          <LabelBlock color={C.coral} size={25}>募集资金用途</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Coins size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.coral} title="C ✗ 改变用途须经持有人会议决议">——擅自改变→责令改正＋罚款</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Gavel size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.coral} title="D ✗ 不得用于弥补亏损">——和非生产性支出</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Coins size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.lime} title="拆东墙补西墙">——易诱发系统性风险</IconChip></Enter>
        <Watermark><Coins size={150} color={C.coral} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="tr-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.lime} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>2020金题 · 正确答案 B</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(237,241,234,0.72)', lineHeight: 1.8}}>背诵三连：不称职可变更 · 兑付不能可代诉 · 募资不得补亏损</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(237,241,234,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><GuardStamp delay={170} tone="lime">代表诉讼</GuardStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SuitabilityScene = () => (
  <Shell code="02" title="卖者尽责 · 买者自负">
    <div data-layout="suitability-warning-counter" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="special-written-warning-rule,minimal-tier-sales-ban-rule" data-focal-rule="a-special-written-warning-precedes-above-tier-sales-while-the-lowest-tier-may-not-buy-high-risk-and-mediation-requests-cannot-be-refused" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="sw-warn-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.lime}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.lime} style={{flexShrink: 0}} />
          <LabelBlock color={C.lime} size={25}>适当性管理 · A ✗ 无需赔偿</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<FileWarning size={28} color={C.ink} strokeWidth={2.2} />} tone={C.lime} title="B ✓ 特别书面风险警示">——产品风险高于承受能力的应当作警示</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Scale size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.pine} title="卖者尽责·买者自负">——已尽适当性管理与告知警示，坚持购买<SoftHi light style={{fontSize: 20}}>风险自担</SoftHi></IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Scale size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.lime} title="C2 不属最低类别">——可以销售超风险产品</IconChip></Enter>
        <Watermark><Scale size={170} color={C.lime} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="sw-protect-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.pine}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={28} color={C.pine} style={{flexShrink: 0}} />
          <LabelBlock color={C.pine} size={25}>倾斜保护</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<ShieldCheck size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.coral} title="C ✓ 最低类别投资者">——<Neg light size={20}>不得销售高风险产品</Neg></IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Handshake size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.lime} title="D ✓ 普通投资者提调解请求">——证券公司不得拒绝</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Scale size={28} color={C.chalk} strokeWidth={2.2} />} tone={C.pine} title="举证责任倒置">——证券公司自证合规，不能证明应赔偿</IconChip></Enter>
        <Watermark><ShieldCheck size={150} color={C.pine} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="sw-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.lime} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>2021金题 · 正确答案 BCD</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(237,241,234,0.72)', lineHeight: 1.8}}>背诵三连：超风险先书面警示 · 最低类别禁售高风险 · 调解请求不得拒</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(237,241,234,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><GuardStamp delay={170} tone="chalk">买者自负</GuardStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const GraphiteLimeGuardpost = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-trustee-sue" {...SCENES.trusteeSue}><TrusteeSueScene /></TimelineSequence>
    <TimelineSequence name="02-suitability" {...SCENES.suitability}><SuitabilityScene /></TimelineSequence>
  </AbsoluteFill>
);
