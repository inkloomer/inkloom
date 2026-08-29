import {AbsoluteFill} from 'remotion';
import {Coins, FileText, GraduationCap, HandCoins, Percent, Scale, ShieldCheck, Stamp, TrendingDown, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as EscortStamp, ThinU} from './theme';

export const IntentSlipScene = () => (
  <Shell code="01" title="预订单不是镖单：预约可退">
    <div data-layout="intent-slip-dual-exit" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="preliminary-contract-dual-exit,deposit-liability-rule" data-focal-rule="an-intent-letter-is-a-preliminary-contract-where-either-side-may-walk-away-paying-only-the-agreed-deposit-consequence" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="int-slip-nature" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 236, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>《股权转让意向书》＝ 预约合同</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>约定定金规则：丙不履行→<ThinU color={C.seal}>双倍返还</ThinU>；丁不履行→定金<ThinU color={C.seal}>没收</ThinU></Enter>
        <Enter delay={40} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>预订单不是镖单——<SoftHi dark style={{fontSize: 21}}>双方都留了退单的门</SoftHi></Enter>
      </div>
      <div data-final-knowledge="int-exit-both" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 236, backgroundColor: C.panel, border: `3px solid ${C.banner}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.banner} style={{flexShrink: 0}} />
          <LabelBlock size={25}>两扇退单门</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={68} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>丙退单</Chip>双倍返还定金了事</Enter>
          <Enter delay={82} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>丁退单</Chip>定金被没收</Enter>
        </div>
        <Enter delay={96} style={{marginTop: 8}}><Neg size={21}>D 强求丙继续履行把股权过给丁——门被焊死？没有</Neg></Enter>
      </div>
      <div data-final-knowledge="int-verdict-desk" style={{position: 'absolute', left: 0, right: 0, top: 262, height: 482, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2023金题 · D 项落点</span>
          </Enter>
          <Enter delay={128} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 10}}>
            <span>· 丁不能要求<SoftHi style={{fontSize: 21}}>继续履行</SoftHi>意向书强买股权</span>
            <span>· 丙退出＝赔定金责任即可，股权处分权在丙手里</span>
          </Enter>
          <Enter delay={150} style={{marginTop: 12}}><EscortStamp delay={156} tone="banner">预约无强制履行</EscortStamp></Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={168} style={{fontSize: 23, fontWeight: 900, color: C.banner}}>为什么这么设计？</Enter>
          <Enter delay={182} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>股权归属于股东——<ThinU color={C.banner}>卖不卖，股东说了算</ThinU>；预约只能锁住「谈的诚意」，锁不住「卖的决意」</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const PreemptionPreconditionScene = () => (
  <Shell code="02" title="同路保票的前提：船真的开了">
    <div data-layout="preemption-precondition-line" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="preemption-precondition-rule,proration-negotiation-rule" data-focal-rule="preemption-rights-exist-only-upon-an-actual-outward-transfer-and-丙s-retraction-dissolves-the-premise-while-preparation-costs-become-culpa-in-contrahendo" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pre-precondition-gate" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 262, backgroundColor: C.panel, border: `3px solid ${C.steel}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={30} color={C.steel} style={{flexShrink: 0}} />
          <LabelBlock size={27}>优先购买权的门槛 · 实际对外转让</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.paper, lineHeight: 1.8}}>丙通知了甲乙，但随后<ThinU color={C.seal}>反悔不转让</ThinU>——门槛这边的船根本没开</Enter>
        <Enter delay={42} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={48} tone="seal">前提消灭 · 优先购买权不成立（A ✗）</Stamp>
          <Neg size={21}>章程或全体股东另有约定的除外</Neg>
        </Enter>
      </div>
      <div data-final-knowledge="pre-proration-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 262, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>即便成立 · 比例也不是想当然</LabelBlock>
        </Enter>
        <Enter delay={76} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>先<SoftHi dark style={{fontSize: 21}}>协商</SoftHi> → 协商不成按<ThinU color={C.seal}>出资比例</ThinU></Enter>
        <Enter delay={92} style={{marginTop: 6}}><Neg dark size={21}>C 「按同等比例享有」——两处都错</Neg></Enter>
      </div>
      <div data-final-knowledge="pre-culpa-verdict" style={{position: 'absolute', left: 0, right: 0, top: 288, height: 456, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HandCoins size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>甲乙能拿到什么？</span>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={124} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="banner" style={{fontSize: 21, color: C.ink}}>为行使优先购买权的准备费用</Chip>
            </Enter>
            <Enter delay={140} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.7, marginLeft: 6}}>请律师、筹资金……系<ThinU color={C.banner}>缔约过失损失</ThinU></Enter>
            <Enter delay={156} style={{marginTop: 4, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <Stamp delay={162} tone="jade">B ✓ 丙应赔偿合理损失</Stamp>
              <Stamp delay={170} tone="seal">2023金题 正确答案 B</Stamp>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={184} style={{fontSize: 23, fontWeight: 900, color: C.banner}}>损失从哪来？</Enter>
          <Enter delay={198} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>丙先发通知把甲乙<ThinU color={C.banner}>引上桌</ThinU>，再掀桌走人——为谈判支出的合理代价，由掀桌人埋单</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const FinancialAidScene = () => (
  <Shell code="03" title="借镖两道闸：员工道宽，公司道严">
    <div data-layout="dual-gate-aid-counter" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="aid-prohibition-exceptions,quorum-absence-rule" data-focal-rule="financial-aid-is-banned-by-default-with-a-free-employee-plan-lane-and-a-company-benefit-lane-needing-two-thirds-and-ten-percent-cap" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="aid-default-ban" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 104, backgroundColor: C.seal, borderRadius: 14, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <Coins size={28} color={C.paper} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 950, color: C.paper, whiteSpace: 'nowrap'}}>原则禁止：不得为他人取得本公司股份提供赠与 · 借款 · 担保</span>
          <span style={{flex: 1}} />
          <Stamp delay={18} tone="paper">但有两道例外闸</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="aid-employee-lane" style={{position: 'absolute', left: 0, top: 128, width: 864, height: 396, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={27}>例外一 · 员工持股计划</LabelBlock>
          <Stamp delay={40} tone="jade">绿色通道</Stamp>
        </Enter>
        <Enter delay={56} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>· <SoftHi dark style={{fontSize: 21}}>无程序、无数额限制</SoftHi>——不得附加条件</span>
          <span>· 决议按一般事项：全体董事<ThinU color={C.jade}>过半数</ThinU>即可</span>
        </Enter>
        <Enter delay={74} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="jade" style={{fontSize: 21}}>本案 9 人出席 7 人，过半 ✓ → 员工部分合法有效（B ✓）</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="aid-company-lane" style={{position: 'absolute', left: 896, top: 128, width: 880, height: 396, backgroundColor: C.panel, border: `3px solid ${C.banner}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={28} color={C.banner} style={{flexShrink: 0}} />
          <LabelBlock size={26}>例外二 · 为公司利益</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={104} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>董事 2/3 以上通过</Chip>本案 6/9 恰好达标</Enter>
          <Enter delay={120} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>累计 ≤ 已发行股本 10%</Chip>1 亿 × 10% = <ThinU color={C.banner}>1000 万</ThinU></Enter>
          <Enter delay={136} style={{marginTop: 4, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Neg size={21}>C 说不能超 2000 万——线画错了</Neg>
          </Enter>
          <Enter delay={152} style={{marginTop: 2}}><Neg size={21}>D 两名缺席 → 决议不成立——出席过半即举行，缺席不误</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="aid-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 548, height: 196, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={168} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2025金题 · 正确答案 B</span>
          </Enter>
          <Enter delay={184} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(243,236,218,0.68)', lineHeight: 1.7}}>为董事借款不违法（三条件齐）；违法资助致损的董监高要赔，故意或重大过失还可能对债权人赔偿</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={200}><Chip tone="banner" style={{fontSize: 21, color: C.ink}}>员工道：只看过半数</Chip></Enter>
          <Enter delay={212}><Chip tone="banner" style={{fontSize: 21, color: C.ink}}>公司道：2/3 ＋ 10% 封顶</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const EscortBannerTransferHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-intent-slip" {...SCENES.intentSlip}><IntentSlipScene /></TimelineSequence>
    <TimelineSequence name="02-preemption-precondition" {...SCENES.preemptionPrecondition}><PreemptionPreconditionScene /></TimelineSequence>
    <TimelineSequence name="03-financial-aid" {...SCENES.financialAid}><FinancialAidScene /></TimelineSequence>
  </AbsoluteFill>
);
