import {AbsoluteFill} from 'remotion';
import {FileX, Fingerprint, GraduationCap, HandCoins, PenLine, Percent, ShieldOff, University} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as AzureStamp, ThinU} from './theme';

export const PostHonourScene = () => (
  <Shell code="01" title="拒付之后：期后背书变了味">
    <div data-layout="post-honour-endorsement-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="first-payer-unconditional-rule,post-honour-endorsement-ban-rule" data-focal-rule="the-acceptor-pays-unconditionally-a-verbal-refusal-bears-liability-and-post-deadline-endorsement-binds-only-the-endorser" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pe-refuse-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.rust}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <University size={30} color={C.rust} style={{flexShrink: 0}} />
          <LabelBlock color={C.rust} size={26}>承兑银行 · 第一顺位无条件付款</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><FileX size={22} color={C.rust} style={{flexShrink: 0}} /><Neg size={20}>「余额不足」不是拒付理由</Neg><span>——承兑后必须付</span></span>
          <span>B ✓ 拒付须出<ThinU color={C.rust}>拒绝证明／退票理由书</ThinU>——<SoftHi style={{fontSize: 21}}>口头拒付仍担民事责任</SoftHi></span>
        </Enter>
      </div>
      <div data-final-knowledge="pe-endorse-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, border: `3px solid ${C.azure}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <PenLine size={28} color={C.azure} style={{flexShrink: 0}} />
          <LabelBlock color={C.azure} size={25}>C ✓ 期后背书＝禁止行为</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>被拒付后再背书给 C →<SoftHi style={{fontSize: 21}}>无票据效力</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>A 交付票据≠清偿</Neg><Neg size={20}>D 出票人承兑人都不担责</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="pe-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2020金题 · 正确答案 BC</span>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8}}>背诵三连：承兑人无条件付 · 口头拒付担民责 · 期后背书仅背书人担责</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,255,255,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132}><AzureStamp delay={138} tone="paper">期后背书不灭基础债务</AzureStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const DiscountCounterScene = () => (
  <Shell code="02" title="贴现被拒：票还是好票">
    <div data-layout="discount-vs-honour-counter" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="discount-is-endorsement-rule,early-recourse-three-cases-rule" data-focal-rule="refused-discount-is-a-free-choice-not-touching-the-bill-and-early-recourse-needs-refused-acceptance-death-or-bankruptcy" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="dv-essence-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 280, backgroundColor: C.panel, border: `3px solid ${C.azure}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Percent size={30} color={C.azure} style={{flexShrink: 0}} />
          <LabelBlock color={C.azure} size={26}>A ✗ · 贴现本质＝背书转让</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>你情我愿的买卖——丁银行<SoftHi style={{fontSize: 21}}>拒绝贴现</SoftHi>只是商业判断，<ThinU color={C.azure}>不影响票据效力</ThinU></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>「甲账户冻结＝不得再背书」错</Neg><span>——冻结不影响流转</span></span>
        </Enter>
      </div>
      <div data-final-knowledge="dv-early-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 280, backgroundColor: C.panel, border: `3px solid ${C.rust}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.rust} style={{flexShrink: 0}} />
          <LabelBlock color={C.rust} size={25}>B ✗ D ✗ · 提前追索三情形</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="rust" style={{fontSize: 19}}>被拒绝承兑</Chip><Chip tone="rust" style={{fontSize: 19}}>死亡逃匿</Chip><Chip tone="rust" style={{fontSize: 19}}>破产责停</Chip></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>被拒「贴现」不算</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="dv-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 306, height: 260, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2021金题 · 正确答案 C</span>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8}}>C ✓ 到期后向承兑人丁银行行使<SoftHi light style={{fontSize: 20}}>付款请求权</SoftHi>——承兑义务不受拒贴影响</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,255,255,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132} style={{fontSize: 20, fontWeight: 750, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7}}>若被拒的是「承兑」→ 票据失去付款效力 → 才可提前追索</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ForgedSealScene = () => (
  <Shell code="03" title="伪造的章，有效的票">
    <div data-layout="forged-seal-verdict-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="forgery-voids-seal-only-rule,forged-party-no-liability-rule" data-focal-rule="forgery-keeps-the-bill-valid-voids-only-the-forged-seal-and-neither-the-forged-party-nor-the-forger-bears-bill-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="fs-valid-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 280, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Fingerprint size={30} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={26}>C ✗ · 票据依然有效</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9}}>伪造的<ThinU color={C.moss}>签章无效</ThinU>，但不影响其他<SoftHi style={{fontSize: 21}}>真实签章</SoftHi>的效力——票照旧运转</Enter>
      </div>
      <div data-final-knowledge="fs-who-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 280, backgroundColor: C.panel, border: `3px solid ${C.rust}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldOff size={28} color={C.rust} style={{flexShrink: 0}} />
          <LabelBlock color={C.rust} size={25}>A ✓＋B ✗ · 责任两不沾</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>A ✓ 被伪造人乙：<Neg size={20}>不承担票据责任</Neg></span>
          <span>B ✗ 伪造人陈某：未真实签章 →<Neg size={20}>非票据当事人</Neg>，只担法律责任</span>
        </Enter>
      </div>
      <div data-final-knowledge="fs-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 306, height: 260, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2025金题 · 正确答案 A</span>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><University size={20} color={C.gold} style={{flexShrink: 0}} /><span>D ✗ 丙提示承兑被拒 → 票据失去付款效力 → 银行不再担付款责任</span></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,255,255,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132}><AzureStamp delay={138} tone="rust">章伪造 · 票有效</AzureStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AzureDraftHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-post-honour" {...SCENES.postHonour}><PostHonourScene /></TimelineSequence>
    <TimelineSequence name="02-discount-counter" {...SCENES.discountCounter}><DiscountCounterScene /></TimelineSequence>
    <TimelineSequence name="03-forged-seal" {...SCENES.forgedSeal}><ForgedSealScene /></TimelineSequence>
  </AbsoluteFill>
);
