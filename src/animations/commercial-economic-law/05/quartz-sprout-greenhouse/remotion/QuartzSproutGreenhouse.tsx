import {AbsoluteFill} from 'remotion';
import {ArrowRightLeft, BellOff, GraduationCap, HandCoins, PackageCheck, Sprout, Stamp, Users, Vote} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as GreenStamp, ThinU} from './theme';

export const FreezeGateScene = () => (
  <Shell code="01" title="未申报债权：冻结门与三句诀">
    <div data-layout="undeclared-freeze-gate" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="undeclared-claim-freeze-rule,same-class-settlement-rule" data-focal-rule="an-undeclared-claim-cannot-be-exercised-during-execution-binds-to-the-plan-and-settles-by-the-same-class-conditions-after-completion" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ud-freeze-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.terra}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BellOff size={30} color={C.terra} style={{flexShrink: 0}} />
          <LabelBlock color={C.terra} size={26}>A ✓＋C ✓ · 执行期内门是锁着的</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>乙公司<ThinU color={C.terra}>未申报</ThinU>→ 执行期间<Neg size={21}>不得向甲公司行使权利</Neg>（A ✓）</span>
          <span>法院批准的重整计划对<SoftHi light style={{fontSize: 21}}>全体债权人</SoftHi>有约束力——含未申报者（C ✓）</span>
        </Enter>
      </div>
      <div data-final-knowledge="ud-after-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Sprout size={28} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={25}>B ✗ D ✗ · 门后会开，但票要换</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>实体权利<ThinU color={C.moss}>不消灭</ThinU>——执行完毕后<Neg size={20}>「不再清偿」错</Neg></span>
          <span>按<SoftHi light style={{fontSize: 21}}>同类债权清偿条件</SoftHi>行使，<Neg size={20}>非按原额直接要</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="ud-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2018金题 · 正确答案 AC</span>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,248,0.72)', lineHeight: 1.8}}>三句诀：执行期间不能行使 · 实体权利不消灭 · 完毕后按同类条件行使</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,251,248,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132}><GreenStamp delay={138} tone="paper">申报与否不灭实体权</GreenStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const InvestorGroupScene = () => (
  <Shell code="02" title="出资人组：双钥匙才能过">
    <div data-layout="investor-group-vote-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="investor-group-vote-rule,shareholder-meeting-replaced-rule" data-focal-rule="equity-adjustment-needs-an-investor-group-passed-by-headcount-majority-plus-two-thirds-of-equity-never-the-shareholders-meeting" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ig-setup-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 250, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={26}>A ✓ · 涉权益调整必须设出资人组</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8}}>重整计划草案涉及<ThinU color={C.moss}>出资人权益调整</ThinU>的，应当<SoftHi light style={{fontSize: 21}}>设出资人组</SoftHi>对该事项表决</Enter>
      </div>
      <div data-final-knowledge="ig-rule-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 250, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Vote size={28} color={C.berry} style={{flexShrink: 0}} />
          <LabelBlock color={C.berry} size={25}>B ✗ C ✗ · 组内双钥匙</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="berry" style={{fontSize: 19}}>人数过半数</Chip>＋<Chip tone="berry" style={{fontSize: 19}}>股权额 2/3 以上</Chip></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>单一 2/3 ✗</Neg><Neg size={20}>全体一致 ✗</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="ig-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 276, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2020金题 · 正确答案 A</span>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,248,0.72)', lineHeight: 1.8}}>D ✗：重整程序中股东会被债权人会议取代——<Neg light size={20}>股东会决议不生效</Neg></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,251,248,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132}><GreenStamp delay={138} tone="moss">照抄债权人组双钥匙</GreenStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const WorkbenchScene = () => (
  <Shell code="03" title="重整期间：借钱与取回质物">
    <div data-layout="restructuring-workbench" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="new-loan-common-benefit-limited-rule,pledge-retrieval-market-cap-rule" data-focal-rule="restructuring-new-loans-pay-anytime-but-rank-behind-earlier-mortgages-and-pledge-retrieval-caps-at-market-value-with-substitute-collateral-allowed" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rw-loan-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={30} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={26}>Q84 · B ✓ 新借款随时清偿，但有天花板</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>2000 万借款＋登记抵押 → 参照<SoftHi light style={{fontSize: 21}}>共益债务随时清偿</SoftHi></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="terra" style={{fontSize: 20}}>次于在先抵押</Chip><Neg size={20}>「全部优先」「优先于普通」表述过绝对</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="rw-pledge-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, border: `3px solid ${C.berry}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <PackageCheck size={28} color={C.berry} style={{flexShrink: 0}} />
          <LabelBlock color={C.berry} size={25}>Q85 · ABC 取回质物三要点</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>重大处分：报<ThinU color={C.berry}>债权人会议</ThinU>或法院</span>
          <span>清偿以<SoftHi light style={{fontSize: 21}}>质物市场价值为限</SoftHi>；可协商<ThinU color={C.moss}>替代担保</ThinU></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>D「乙不同意法院必不批」错</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="rw-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2020金题 B · 2022金题 ABC</span>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,248,0.72)', lineHeight: 1.8}}>虚构债权 800 万须经<ThinU color={C.gold}>审判监督程序</ThinU>消灭——管理人<Neg light size={20}>不能直接不予确认</Neg></Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,251,248,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={132}><GreenStamp delay={138} tone="paper">共益优先有天花板</GreenStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const EquityGateScene = () => (
  <Shell code="04" title="强制批准与债转股：终点站">
    <div data-layout="cramdown-equity-gate" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="cramdown-negotiate-first-rule,fair-value-conversion-rule" data-focal-rule="cramdown-needs-negotiation-then-court-approval-under-statutory-conditions-and-debt-for-equity-converts-at-fair-value-extinguishing-the-claim" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ce-ladder-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 250, backgroundColor: C.panel, border: `3px solid ${C.moss}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={30} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={26}>Q86 · A ✓ B ✓ 强制批准两步梯</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="moss" style={{fontSize: 20}}>协商修改</Chip>→<Chip tone="moss" style={{fontSize: 20}}>再次表决</Chip>→<Chip tone="moss" style={{fontSize: 20}}>申请法院强制批准</Chip>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C「必转清算」D「无须审合法性」错</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="ce-conditions-desk" style={{position: 'absolute', left: 0, right: 0, top: 276, height: 200, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={26} color={C.berry} style={{flexShrink: 0}} />
            <LabelBlock color={C.berry} size={24}>强制批准的法定条件</LabelBlock>
          </Enter>
          <Enter delay={68} style={{marginTop: 10, fontSize: 21, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>
            <Chip tone="berry" style={{fontSize: 19}}>公平对待</Chip><Chip tone="berry" style={{fontSize: 19}}>不低于清算所得</Chip><Chip tone="berry" style={{fontSize: 19}}>经营方案可行</Chip><Chip tone="berry" style={{fontSize: 19}}>担保不受实质损害</Chip>
          </Enter>
        </div>
        <div style={{width: 380, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={88} style={{fontSize: 20, fontWeight: 750, color: C.cocoaDim, lineHeight: 1.7}}>缺一条，法院就不盖这枚章</Enter>
        </div>
      </div>
      <div data-final-knowledge="ce-swap-desk" style={{position: 'absolute', left: 0, right: 0, top: 502, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ArrowRightLeft size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>Q87 · B ✓ 债转股按市场公允价值</span>
          </Enter>
          <Enter delay={130} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(255,251,248,0.72)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6}}>
            <span>转股后<Neg light size={20}>原债权消灭不得再追索</Neg>；公司<Neg light size={20}>不得拒绝转股</Neg>——批准的计划绑住全体</span>
            <span>2025金题 · 正确答案 B；2025金题86 · 正确答案 AB</span>
          </Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(255,251,248,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={152}><GreenStamp delay={158} tone="moss">未受偿不影响转股</GreenStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const QuartzSproutGreenhouse = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-freeze-gate" {...SCENES.freezeGate}><FreezeGateScene /></TimelineSequence>
    <TimelineSequence name="02-investor-group" {...SCENES.investorGroup}><InvestorGroupScene /></TimelineSequence>
    <TimelineSequence name="03-workbench" {...SCENES.workbench}><WorkbenchScene /></TimelineSequence>
    <TimelineSequence name="04-equity-gate" {...SCENES.equityGate}><EquityGateScene /></TimelineSequence>
  </AbsoluteFill>
);
