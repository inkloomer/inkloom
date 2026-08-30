import {AbsoluteFill} from 'remotion';
import {Fingerprint, FileX, Gavel, GraduationCap, HandCoins, Hourglass, Landmark, Megaphone, ShieldOff, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as NoticeStamp, ThinU, Watermark} from './theme';

export const FreezeGateScene = () => (
  <Shell code="01" title="公示催告：票据冻结但有效">
    <div data-layout="public-notice-freeze-gate" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="notice-freeze-not-void-rule,court-no-ex-officio-rule" data-focal-rule="during-public-notice-the-bill-is-frozen-but-valid-and-void-verdict-needs-no-claimant-plus-applicant-petition" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pn-freeze-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 400, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Megaphone size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock color={C.indigo} size={25}>公示催告期间</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="票据依然有效">——被冻结，暂停付款</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Hourglass size={28} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="权利暂停行使">——亿凡<SoftHi style={{fontSize: 20}}>仍享有票据权利</SoftHi>（C ✓）</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="银行仍担付款责任">——承兑义务照旧（A ✗）</IconChip></Enter>
        <Watermark><Megaphone size={170} color={C.indigo} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="pn-apply-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 400, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={28} color={C.vermilion} style={{flexShrink: 0}} />
          <LabelBlock color={C.vermilion} size={25}>除权判决的作出条件</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="公告期满无人申报">——第一道条件</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="申请人申请">——法院不作依职权判决（D ✗）</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<ShieldOff size={28} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="判决前申请人无票据权利">——B ✗</IconChip></Enter>
        <Watermark><Gavel size={150} color={C.vermilion} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="pn-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 426, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2017-3-32 · 正确答案 C</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,239,0.72)', lineHeight: 1.8}}>背诵三连：催告期间票据冻结但有效 · 权利暂停行使 · 除权判决须无人申报＋申请人申请</Enter>
          <Enter delay={164} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="moss" style={{fontSize: 19}}>C ✓ 亿凡仍享有票据权利</Chip><Chip tone="vermilion" style={{fontSize: 19}}>A ✗ 银行仍担付款责任</Chip></Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(255,251,239,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><NoticeStamp delay={170} tone="paper">除权判决＝恢复权利确认文件</NoticeStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const VoidVerdictScene = () => (
  <Shell code="02" title="除权判决后：票据无效">
    <div data-layout="void-verdict-paper-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="void-verdict-kills-bill-rule,all-parties-no-bill-liability-rule" data-focal-rule="after-the-void-verdict-the-bill-is-waste-paper-and-no-endorsement-or-transfer-has-any-bill-effect" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="vv-invalid-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 400, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileX size={28} color={C.vermilion} style={{flexShrink: 0}} />
          <LabelBlock color={C.vermilion} size={25}>除权判决后票据无效</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="一张废纸">——丙已<ThinU color={C.vermilion}>挂失止付＋公示催告＋除权判决</ThinU></IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="背书转让不发生票据效力">——其后一切流转无效</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Fingerprint size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="丁将丙的名字换成自己">——伪造签章背书给戊</IconChip></Enter>
        <Watermark><FileX size={170} color={C.vermilion} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="vv-abc-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 400, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock color={C.indigo} size={25}>不担票据责任</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="甲（出票人）">——A ✗</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="乙（背书人）">——B ✗</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="丙（持票人）">——C ✗，戊非票据权利人</IconChip></Enter>
        <Watermark><Users size={150} color={C.indigo} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="vv-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 426, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2024金题 · 哪一主体应对戊承担责任？</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,239,0.72)', lineHeight: 1.8}}>戊向银行主张付款被拒——票据已无效，<Neg light size={20}>甲乙丙均无票据责任</Neg></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,251,239,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><NoticeStamp delay={170} tone="vermilion">票据无效</NoticeStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ScrapPaymentScene = () => (
  <Shell code="03" title="丁承担民事付款义务">
    <div data-layout="scrap-paper-payment-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="civil-payment-duty-rule" data-focal-rule="the-forger-bears-no-bill-liability-but-owes-the-counterparty-a-civil-payment-duty" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="sp-civil-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 400, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={25}>D ✓ · 丁对戊承担民事付款义务</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<HandCoins size={28} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="民事法律关系">——丁戊之间以票据支付货款</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="丁未完成付款责任">——票据无效，交付不发生清偿效力</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.indigo} title="应以其他方式承担民事付款义务">——票据责任沾不上，民事义务照担</IconChip></Enter>
        <Watermark><HandCoins size={170} color={C.moss} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="sp-forger-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 400, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Fingerprint size={28} color={C.vermilion} style={{flexShrink: 0}} />
          <LabelBlock color={C.vermilion} size={25}>伪造签章者</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Fingerprint size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="未作真实签章">——非票据当事人</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<ShieldOff size={28} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="不承担票据责任">——仅承担法律责任</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<HandCoins size={28} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="对相对人承担民事付款义务">——戊可向丁主张</IconChip></Enter>
        <Watermark><Fingerprint size={150} color={C.vermilion} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="sp-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 426, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2024金题 · 正确答案 D</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,239,0.72)', lineHeight: 1.8}}>背诵三连：除权判决票据无效 · 甲乙丙不担票据责任 · 丁担民事付款义务</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,251,239,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><NoticeStamp delay={170} tone="moss">民事付款义务</NoticeStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const YellowNoticeBureau = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-freeze-gate" {...SCENES.freezeGate}><FreezeGateScene /></TimelineSequence>
    <TimelineSequence name="02-void-verdict" {...SCENES.voidVerdict}><VoidVerdictScene /></TimelineSequence>
    <TimelineSequence name="03-scrap-payment" {...SCENES.scrapPayment}><ScrapPaymentScene /></TimelineSequence>
  </AbsoluteFill>
);
