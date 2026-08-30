import {AbsoluteFill} from 'remotion';
import {CalendarDays, FileX, GraduationCap, Landmark, PenLine, ShieldCheck, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as JadeStamp, ThinU, Watermark} from './theme';

export const EntryTiersScene = () => (
  <Shell code="01" title="支票记载三层次">
    <div data-layout="entry-three-tier-counter" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="issuance-date-absolute-rule,void-entry-no-effect-rule" data-focal-rule="the-issuance-date-is-absolutely-required-while-amount-and-payee-may-be-authorized-for-later-completion-and-purpose-or-payment-date-entries-are-void-only" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="et-absolute-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.pine}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <CalendarDays size={28} color={C.pine} style={{flexShrink: 0}} />
          <LabelBlock color={C.pine} size={25}>绝对必要与可补记</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<CalendarDays size={28} color={C.paper} strokeWidth={2.2} />} tone={C.crimson} title="D ✓ 出票日期系绝对必要记载事项">——缺失则<SoftHi style={{fontSize: 20}}>支票无效</SoftHi></IconChip></Enter>
        <Enter delay={44}><IconChip icon={<PenLine size={28} color={C.paper} strokeWidth={2.2} />} tone={C.copper} title="A ✗ 金额可授权补记">——未补记不得使用，但不影响效力</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.copper} title="B ✗ 收款人名称系相对记载事项">——可授权补记</IconChip></Enter>
        <Watermark><CalendarDays size={170} color={C.pine} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="et-void-entry-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.crimson}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileX size={28} color={C.crimson} style={{flexShrink: 0}} />
          <LabelBlock color={C.crimson} size={25}>C ✗ · 记载无效但不影响效力</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.crimson} title="记载用途">——系签发原因，不产生票据法效力</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<CalendarDays size={28} color={C.paper} strokeWidth={2.2} />} tone={C.copper} title="另行记载付款日期">——「见票一月可兑付」该记载无效</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<ShieldCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="出票附条件才会导致票据无效">——记载用途并非附条件</IconChip></Enter>
        <Watermark><FileX size={150} color={C.crimson} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="et-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2021金题 · 正确答案 D</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(252,254,250,0.72)', lineHeight: 1.8}}>背诵三连：出票日期缺则无效 · 金额收款人可补记 · 用途付款日期记载无效</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(252,254,250,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><JadeStamp delay={170} tone="paper">支票只能见票即付</JadeStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SupplementForgeryScene = () => (
  <Shell code="02" title="补记有效与伪造签章">
    <div data-layout="supplement-forgery-counter" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="amount-completion-valid-rule,bank-formal-review-discharge-rule" data-focal-rule="amount-completed-before-use-keeps-the-check-valid-forgery-does-not-touch-validity-and-bank-discharges-by-formal-review" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="sf-supplement-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.copper}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <PenLine size={28} color={C.copper} style={{flexShrink: 0}} />
          <LabelBlock color={C.copper} size={25}>B ✓ · 金额使用前补齐——支票有效</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<PenLine size={28} color={C.paper} strokeWidth={2.2} />} tone={C.copper} title="A ✗ 补齐金额系合法补记">——月结惯例，甲公司对账后填写</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.crimson} title="伪造签章不影响票据效力">——支票依然有效</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<ShieldCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="D ✗ 丙不能善意取得">——无真实交易关系＋恶意伪造</IconChip></Enter>
        <Watermark><PenLine size={170} color={C.copper} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="sf-bank-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.pine}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={28} color={C.pine} style={{flexShrink: 0}} />
          <LabelBlock color={C.pine} size={25}>C ✗ · 银行形式审查</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="尽到形式审查义务">——付款系<SoftHi style={{fontSize: 20}}>有效付款</SoftHi></IconChip></Enter>
        <Enter delay={84}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.crimson} title="不再承担票据付款义务">——无需重复承担</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<ShieldCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.copper} title="付款义务以形式审查为限">——尽到审查即免责</IconChip></Enter>
        <Watermark><Landmark size={150} color={C.pine} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="sf-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2023金题 · 正确答案 B</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(252,254,250,0.72)', lineHeight: 1.8}}>背诵三连：补齐金额有效 · 伪造签章不影响效力 · 形式审查即免责</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(252,254,250,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><JadeStamp delay={170} tone="copper">形式审查免责</JadeStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const JadeCheckCounter = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-entry-tiers" {...SCENES.entryTiers}><EntryTiersScene /></TimelineSequence>
    <TimelineSequence name="02-supplement-forgery" {...SCENES.supplementForgery}><SupplementForgeryScene /></TimelineSequence>
  </AbsoluteFill>
);
