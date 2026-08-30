import {AbsoluteFill} from 'remotion';
import {GraduationCap, HandCoins, Landmark, Percent, Scale, ShieldBan, Stamp, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as TellerStamp, ThinU} from './theme';

export const TwoPermitsScene = () => (
  <Shell code="01" title="两扇允许的窗：收益与份额">
    <div data-layout="dual-permit-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="permit-cleanup-rule,whole-pool-protection" data-focal-rule="a-personal-creditor-reaches-only-the-partners-own-slice-profit-share-and-executable-share-never-the-whole-pool" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="per-profit-window" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.panel, border: `3px solid ${C.glass}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Percent size={30} color={C.glass} style={{flexShrink: 0}} />
          <LabelBlock size={26}>允许① · 分取收益清偿</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>甲应分取的 38.5% 利润＝<ThinU color={C.glass}>个人责任财产</ThinU></span>
          <span>可用于清偿丁的 150 万借款（B ✓）</span>
        </Enter>
        <Enter delay={44} style={{marginTop: 10, border: `3px dashed ${C.seal}`, borderRadius: 10, padding: '12px 16px'}}>
          <span style={{fontSize: 21, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'block'}}>但全部利润归<SoftHi dark style={{fontSize: 20}}>全体合伙人共有</SoftHi></span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.paperDim, display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, flexWrap: 'wrap'}}><Neg size={20}>A 执行全部利润——只能切甲自己的那一角</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="per-share-window" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>允许② · 强制执行份额</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>合伙份额同属<SoftHi dark style={{fontSize: 21}}>个人责任财产</SoftHi></span>
          <span>丁可申请法院<ThinU color={C.seal}>强制执行甲的份额</ThinU>（C ✓）</span>
        </Enter>
        <div style={{marginTop: 14, backgroundColor: C.panel, borderRadius: 10, padding: '12px 16px', border: `2px solid ${C.panelLine}`}}>
          <Enter delay={100} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>份额被执行 ≠ 甲立刻出局：其他合伙人可受让，受让人经全体认可入伙；改名单前甲照旧担责</Enter>
        </div>
      </div>
      <div data-final-knowledge="per-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.coin} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2022金题 · 正确答案 BC</span>
          </Enter>
          <Enter delay={136} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(241,235,220,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 两扇窗都只开甲自己的份额与收益</span>
            <span>· A、D 的错误在 02/03 场景展开</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={156} style={{fontSize: 23, fontWeight: 900, color: C.glass}}>一个比喻</Enter>
          <Enter delay={202} style={{fontSize: 21, fontWeight: 750, color: 'rgba(241,235,220,0.66)', lineHeight: 1.7}}>被执行的份额会引出「谁来接手」——见 03 场景优先购买线</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const PreemptionScene = () => (
  <Shell code="03" title="接手优先权：给合伙人，不给债权人">
    <div data-layout="preemption-line-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="preemption-partners-only,share-execution-flow" data-focal-rule="when-a-share-is-executed-fellow-partners-hold-the-equal-condition-preemption-and-the-creditor-has-none" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pre-flow-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`, border: `3px solid ${C.glass}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock size={25}>法院执行甲的份额 · 流程四步</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="glass" style={{fontSize: 20, color: C.paper}}>① 通知全体合伙人</Chip><Chip tone="glass" style={{fontSize: 20, color: C.paper}}>② 乙丙同等条件优先购买</Chip></Enter>
          <Enter delay={44} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>③ 无人购买 → 份额变现清偿丁</Chip><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>④ 受让人经全体认可办理入伙</Chip></Enter>
        </div>
        <Enter delay={64} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>优先购买权基于<ThinU color={C.glass}>人合性</ThinU>——认人不认钱</Enter>
      </div>
      <div data-final-knowledge="pre-verdict-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.coin} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2022金题 · D 项落点</span>
        </Enter>
        <Enter delay={98} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>· 优先购买权属<SoftHi style={{fontSize: 21}}>其他合伙人乙、丙</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={21}>D 债权人丁享优先购买——没有人合性，不享有</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="pre-recap-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 418, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HandCoins size={28} color={C.coin} style={{flexShrink: 0}} />
            <LabelBlock color={C.glass} light size={26}>全题复盘 · 一张桌牌</LabelBlock>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={138} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="bill" style={{fontSize: 20}}>两允许</Chip><span>分收益抵债 · 执行份额</span>
            </Enter>
            <Enter delay={158} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="seal" style={{fontSize: 20}}>两禁止</Chip><span>抵销 · 代位</span>
            </Enter>
            <Enter delay={178} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="coin" style={{fontSize: 20}}>一归属</Chip><span>优先购买权＝其他合伙人</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={198} style={{fontSize: 23, fontWeight: 900, color: C.glass}}>为什么这样设计？</Enter>
          <Enter delay={214} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>既要让<ThinU color={C.glass}>个人债权人得到公平清偿</ThinU>，又要保住合伙的<ThinU color={C.glass}>人合性</ThinU>——两允许给钱，两禁止保人，优先权守门</Enter>
          <Enter delay={236}><TellerStamp delay={242} tone="jade">正确答案 BC</TellerStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TellerWindowPersonalDebt = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-two-permits" {...SCENES.twoPermits}><TwoPermitsScene /></TimelineSequence>
    <TimelineSequence name="02-two-bans" {...SCENES.twoBans}><TwoBansScene /></TimelineSequence>
    <TimelineSequence name="03-preemption" {...SCENES.preemption}><PreemptionScene /></TimelineSequence>
  </AbsoluteFill>
);

export const TwoBansScene = () => (
  <Shell code="02" title="两扇锁死的门：抵销与代位">
    <div data-layout="ban-gate-board" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="offset-subrogation-ban,creditor-boundary-rule" data-focal-rule="personal-creditors-may-neither-offset-their-own-debt-to-the-firm-nor-step-into-the-partners-shoes" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ban-offset-gate" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 500, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldBan size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>锁门① · 禁止抵销</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10}}>
          <span>设例：甲个人欠丁 150 万，同时丁对合伙企业负有 30 万债务</span>
          <span>丁不能拿「甲欠我的」去抵「我欠合伙的」——两笔债主体不同</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>个人债 ≠ 合伙债</Chip><Stamp delay={44} tone="seal">抵销禁止</Stamp></span>
        </Enter>
      </div>
      <div data-final-knowledge="ban-subrogation-gate" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 500, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>锁门② · 禁止代位</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10}}>
          <span>丁不能代甲行使合伙人在合伙中的权利——查账、表决、执行事务……</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>人合性不容外人顶替</Chip><Stamp delay={98} tone="seal">代位禁止</Stamp></span>
        </Enter>
        <Enter delay={120} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, backgroundColor: C.panel, borderRadius: 10, padding: '12px 16px'}}>原理：合伙的人合性——债权人不是合伙人，进不了这扇门；法律只给他开了 01 场景那两扇窗</Enter>
      </div>
      <div data-final-knowledge="ban-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 526, height: 218, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={138} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.coin} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>背诵卡 · 两允许两禁止</span>
          </Enter>
          <Enter delay={156} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(241,235,220,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 允许：分收益抵债 · 执行份额</span>
            <span>· 禁止：抵销 · 代位</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={176}><TellerStamp delay={182} tone="glass">口诀：两开两锁</TellerStamp></Enter>
          <Enter delay={202} style={{fontSize: 21, fontWeight: 750, color: 'rgba(241,235,220,0.66)', lineHeight: 1.7}}>被执行的份额会引出「谁来接手」——见 03 场景优先购买线</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
