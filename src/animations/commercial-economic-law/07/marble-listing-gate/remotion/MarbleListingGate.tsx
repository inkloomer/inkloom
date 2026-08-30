import {AbsoluteFill} from 'remotion';
import {Building2, FileX, Gavel, GraduationCap, Landmark, Stamp, University} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as MarbleStamp, ThinU, Watermark} from './theme';

export const DelistingDecisionScene = () => (
  <Shell code="01" title="终止上市由交易所决定">
    <div data-layout="delisting-decision-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="exchange-decision-filing-rule" data-focal-rule="the-exchange-decids-delisting-announces-it-and-files-with-the-commission-for-record-never-for-approval" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="dd-exchange-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <University size={28} color={C.bronze} style={{flexShrink: 0}} />
          <LabelBlock color={C.bronze} size={25}>B ✓ · 决定权在证券交易所</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<Building2 size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="存在终止上市情形">——由证券交易所按业务规则决定终止上市交易</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Stamp size={28} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="及时公告">——决定后向社会公告</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="报证监会备案">——A ✗ 是「备案」<Neg light size={20}>不是「批准」</Neg></IconChip></Enter>
        <Watermark><University size={170} color={C.bronze} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="dd-trap-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.oxblood}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileX size={28} color={C.oxblood} style={{flexShrink: 0}} />
          <LabelBlock color={C.oxblood} size={25}>A ✗ · 「批准」偷换程序</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="证监会不批准终止上市">——备案制而非审批制</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="公司亏损不符合上市条件">——交易所即可决定终止</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Stamp size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="扭亏许诺不改变程序">——新投资人说法与决定权无关</IconChip></Enter>
        <Watermark><FileX size={150} color={C.oxblood} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="dd-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.inkStrip, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>背诵三连：交易所决定 · 及时公告 · 报证监会备案</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="slate" style={{fontSize: 19}}>B ✓ 交易所决定</Chip><Chip tone="oxblood" style={{fontSize: 19}}>A ✗ 非证监会批准</Chip></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,255,255,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><MarbleStamp delay={170} tone="bronze">备案 ≠ 批准</MarbleStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ReviewRemedyScene = () => (
  <Shell code="02" title="不服终止上市：复核救济">
    <div data-layout="review-remedy-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="internal-review-remedy-rule" data-focal-rule="an-untidy-company-seeks-review-before-the-exchange-review-body-not-an-appeal-to-the-commission" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rr-review-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={28} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={25}>D ✓ · 向复核机构申请复核</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<University size={28} color={C.paper} strokeWidth={2.2} />} tone={C.moss} title="证券交易所设立的复核机构">——法定救济途径</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="保障申辩权利">——不服终止上市决定的救济</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Building2 size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronze} title="公司已找到新投资人">——不影响复核程序的提起</IconChip></Enter>
        <Watermark><Stamp size={170} color={C.moss} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="rr-appeal-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.oxblood}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileX size={28} color={C.oxblood} style={{flexShrink: 0}} />
          <LabelBlock color={C.oxblood} size={25}>C ✗ · 无「向证监会申诉」途径</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="法律未设该救济">——证监会对终止上市只收备案</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="救济走交易所内设复核机构">——不走证监会</IconChip></Enter>
        <Watermark><Landmark size={150} color={C.oxblood} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="rr-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.inkStrip, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2025金题-2-6-22 · 正确答案 BD</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8}}>背诵三连：交易所决定终止 · 备案不批准 · 复核机构救济</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,255,255,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><MarbleStamp delay={170} tone="slate">复核不走申诉</MarbleStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const MarbleListingGate = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-delisting-decision" {...SCENES.delistingDecision}><DelistingDecisionScene /></TimelineSequence>
    <TimelineSequence name="02-review-remedy" {...SCENES.reviewRemedy}><ReviewRemedyScene /></TimelineSequence>
  </AbsoluteFill>
);
