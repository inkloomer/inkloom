import {AbsoluteFill} from 'remotion';
import {AlertTriangle, CornerUpLeft, Gift, GraduationCap, Handshake, Scale, Shield, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as ShieldStamp, ThinU, Watermark} from './theme';

export const GuarantyDefenceScene = () => (
  <Shell code="01" title="保证成立与有因抗辩的边界">
    <div data-layout="guaranty-defence-forging-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="guarantor-presumption-rule,proximate-defence-only-rule" data-focal-rule="an-unrecorded-guarantee-presumes-the-acceptor-or-drawer-and-cause-based-defence-reaches-only-proximate-parties" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="gd-presume-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Handshake size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} size={25}>C ✗ · 未记载被保证人不影响保证成立</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<Handshake size={28} color={C.bone} strokeWidth={2.2} />} tone={C.brass} title="保证成立并生效">——甲公司为梓公司的背书提供担保</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Users size={28} color={C.bone} strokeWidth={2.2} />} tone={C.verdigris} title="已承兑推定承兑人">——为被保证人</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Users size={28} color={C.bone} strokeWidth={2.2} />} tone={C.verdigris} title="未承兑推定出票人">——汇票未获承兑，推定万公司为被保证人，甲<SoftHi style={{fontSize: 20}}>连带担责</SoftHi></IconChip></Enter>
        <Watermark><Handshake size={170} color={C.brass} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="gd-cause-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.rust}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <AlertTriangle size={28} color={C.rust} style={{flexShrink: 0}} />
          <LabelBlock color={C.rust} size={25}>B ✗ · 有因抗辩仅限直接前后手</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<AlertTriangle size={28} color={C.bone} strokeWidth={2.2} />} tone={C.rust} title="直接前后手有因可抗辩">——万可拒付梓：钢材质量不达标</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Shield size={28} color={C.bone} strokeWidth={2.2} />} tone={C.verdigris} title="间接前后手无因不可抗">——基于<SoftHi style={{fontSize: 20}}>票据无因性</SoftHi>，不可抗辩宏公司</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Scale size={28} color={C.bone} strokeWidth={2.2} />} tone={C.brass} title="对人抗辩切断例外">——税收、继承、赠与无偿取得，权利不得优于前手</IconChip></Enter>
        <Watermark><AlertTriangle size={150} color={C.rust} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="gd-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>背诵三连：未记载不影响保证成立 · 直接有因可抗 · 间接无因不可抗</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="verdigris" style={{fontSize: 19}}>推定出票人</Chip><Chip tone="rust" style={{fontSize: 19}}>B ✗ 越手抗辩无效</Chip></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(240,230,214,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><ShieldStamp delay={170} tone="bone">票据无因性</ShieldStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const RecourseChainScene = () => (
  <Shell code="02" title="追索对象与代位再追索">
    <div data-layout="recourse-subrogation-chain-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="recourse-all-prior-endorsers-rule,subrogation-re-recourse-rule" data-focal-rule="recourse-reaches-all-or-part-prior-parties-jointly-and-the-recurser-steps-into-rights-for-re-recourse-after-payment" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rc-chain-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.verdigris}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <CornerUpLeft size={28} color={C.verdigris} style={{flexShrink: 0}} />
          <LabelBlock color={C.verdigris} size={25}>D ✓ · 追索权有代位性</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<Users size={28} color={C.bone} strokeWidth={2.2} />} tone={C.rust} title="A ✗ 追索对象不限于直接前手">——可向<SoftHi style={{fontSize: 20}}>全部或部分前手</SoftHi>主张连带责任</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<CornerUpLeft size={28} color={C.bone} strokeWidth={2.2} />} tone={C.verdigris} title="梓公司清偿后取得代位权">——可向甲公司<ThinU color={C.verdigris}>行使追索权</ThinU>（再追索）</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Handshake size={28} color={C.bone} strokeWidth={2.2} />} tone={C.brass} title="甲系前手义务人">——保证人连带，逃不掉</IconChip></Enter>
        <Watermark><CornerUpLeft size={170} color={C.verdigris} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="rc-gratuitous-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gift size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} size={25}>角度拓展 · 无偿取得的切断例外</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Gift size={28} color={C.bone} strokeWidth={2.2} />} tone={C.brass} title="税收、继承、赠与">——无偿取得票据的三种方式</IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Shield size={28} color={C.bone} strokeWidth={2.2} />} tone={C.rust} title="权利不得优于前手">——前手的抗辩理由可用于该持票人</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<AlertTriangle size={28} color={C.bone} strokeWidth={2.2} />} tone={C.rust} title="例">——梓赠与仟，万可因质量不达标拒绝仟</IconChip></Enter>
        <Watermark><Gift size={150} color={C.brass} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="rc-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>2019金题-2-6-20 · 正确答案 D</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(240,230,214,0.72)', lineHeight: 1.8}}>背诵三连：追索可及全部前手 · 清偿后代位再追索 · 无偿取得不优于前手</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(240,230,214,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><ShieldStamp delay={170} tone="verdigris">清偿后代位再追索</ShieldStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const OxbloodShieldWorkshop = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-guaranty-defence" {...SCENES.guarantyDefence}><GuarantyDefenceScene /></TimelineSequence>
    <TimelineSequence name="02-recourse-chain" {...SCENES.recourseChain}><RecourseChainScene /></TimelineSequence>
  </AbsoluteFill>
);
