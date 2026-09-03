import {Handshake, MapPin, PlayCircle, Scale, Wrench} from 'lucide-react';
import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {Diagram, Knowledge, Shell} from './enforcement-shared';
import {SCENES} from './storyboard';
import {
  ApologyPublicationExecutionScene,
  CoOwnedPropertyPartitionScene,
  DelayedPerformanceMoneyScene,
  DistributionPlanObjectionSuitScene,
  MatureClaimNoticeForkScene,
  OutsideSettlementObjectionScene,
  PartyChangeAndAdditionScene,
  ParticipationDistributionGateScene,
  RetainedTitleExecutionScene,
  SettlementFormsConsequencesScene,
  SpecificThingSubstituteScene,
} from './EnforcementScenes';

export const EnforcementLaunchClockScene=()=> <Shell code="24.1" title="生效文书与 2 年申请执行时效"><div data-layout="enforcement-launch-clock-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="enforceable-title,clear-obligation,two-year-period,starting-points,suspension-interruption" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="enforcement-launch-clock-rule" data-focal-channels="motion,locator,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="enforceable-title" index={0} icon={<PlayCircle size={34}/>} label="执行依据" detail="生效法律文书"/>
        <Knowledge data-final-knowledge="clear-parties-performance" index={1} icon={<PlayCircle size={34}/>} label="可执行内容" detail="权利义务主体明确，给付内容明确"/>
        <Knowledge data-final-knowledge="two-year-limitation" index={2} icon={<PlayCircle size={34}/>} label="申请时效" detail="2 年"/>
        <Knowledge data-final-knowledge="limitation-starts" index={3} icon={<PlayCircle size={34}/>} label="分别起算" detail="履行期届满；分期最后一期；不作为义务违反时"/>
        <Knowledge data-final-knowledge="limitation-rules" index={4} icon={<PlayCircle size={34}/>} label="时效规则" detail="适用中止、中断"/>
      </Diagram>
    </div></Shell>;

export const StatutoryJurisdictionScene=()=> <Shell code="24.2" title="法定执行管辖与 10 日异议"><div data-layout="statutory-jurisdiction-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="litigation-title-forum,arbitration-notary-forum,no-agreement,ten-day-objection,review-remedy" data-text-treatments="external-negation,label-block,thin-underline" data-focal-rule="statutory-jurisdiction-rule" data-focal-channels="enclosure,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="litigation-title-jurisdiction" index={0} icon={<MapPin size={34}/>} label="诉讼文书" detail="一审法院或同级被执行财产所在地法院"/>
        <Knowledge data-final-knowledge="arbitration-notary-jurisdiction" index={1} icon={<MapPin size={34}/>} label="仲裁/公证文书" detail="被执行人住所地或财产所在地法院"/>
        <Knowledge data-final-knowledge="no-consensual-jurisdiction" index={2} icon={<MapPin size={34}/>} label="禁止协议扩张" detail="无协议管辖、应诉管辖"/>
        <Knowledge data-final-knowledge="ten-day-jurisdiction-objection" index={3} icon={<MapPin size={34}/>} label="异议期限" detail="收到执行通知书后 10 日内"/>
        <Knowledge data-final-knowledge="jurisdiction-review" index={4} icon={<MapPin size={34}/>} label="救济" detail="对异议裁定向上一级法院复议"/>
      </Diagram>
    </div></Shell>;

export const SecurityAndSettlementScene=()=> <Shell code="24.3" title="执行担保与执行和解不能混用"><div data-layout="security-and-settlement-direct-comparison-axis-diagram" data-visual-anchor="comparison-axis" data-visual-grammar="security-deferral,security-property,no-automatic-addition,settlement-completion,breach-election" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="security-and-settlement-rule" data-focal-channels="contrast,icon,spatial" style={{position:'absolute',inset:0}}>
      <Diagram anchor="comparison-axis" count={5}>
        <Knowledge data-final-knowledge="enforcement-security" index={0} icon={<Handshake size={34}/>} label="执行担保" detail="法院可决定暂缓执行"/>
        <Knowledge data-final-knowledge="security-property-direct" index={1} icon={<Handshake size={34}/>} label="担保财产" detail="期满后可直接执行担保财产"/>
        <Knowledge data-final-knowledge="no-guarantor-addition" index={2} icon={<Handshake size={34}/>} label="担保人身份" detail="不得当然追加为被执行人"/>
        <Knowledge data-final-knowledge="settlement-completed" index={3} icon={<Handshake size={34}/>} label="和解履行完毕" detail="执行程序终结"/>
        <Knowledge data-final-knowledge="settlement-breach-election" index={4} icon={<Handshake size={34}/>} label="和解不履行" detail="恢复原文书执行 或 就和解协议起诉，二选一"/>
      </Diagram>
    </div></Shell>;

export const ObjectionsAndActionsScene=()=> <Shell code="24.4" title="执行行为异议、案外人异议与异议之诉"><div data-layout="objections-and-actions-direct-document-fork-diagram" data-visual-anchor="document-fork" data-visual-grammar="conduct-legality,outsider-title,conduct-review,action-plaintiff-direction,third-party-status" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="objections-and-actions-rule" data-focal-channels="connector,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="document-fork" count={5}>
        <Knowledge data-final-knowledge="conduct-objection" index={0} icon={<Scale size={34}/>} label="执行行为异议" detail="审查执行行为是否合法"/>
        <Knowledge data-final-knowledge="outsider-objection" index={1} icon={<Scale size={34}/>} label="案外人异议" detail="审查执行标的权利归属并先作执行程序判断"/>
        <Knowledge data-final-knowledge="conduct-review-remedy" index={2} icon={<Scale size={34}/>} label="行为异议救济" detail="裁定后向上一级法院复议"/>
        <Knowledge data-final-knowledge="objection-action-direction" index={3} icon={<Scale size={34}/>} label="异议之诉原告方向" detail="案外人异议被驳回→案外人起诉；异议被支持→申请执行人起诉"/>
        <Knowledge data-final-knowledge="debtor-third-party" index={4} icon={<Scale size={34}/>} label="被执行人地位" detail="依其是否反对异议，列共同被告或无独立请求权第三人"/>
      </Diagram>
    </div></Shell>;

export const SpecialEnforcementMeasuresScene=()=> <Shell code="24.5" title="特殊执行措施的对象与边界"><div data-layout="special-enforcement-measures-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="party-change,distribution,mature-claim,co-owned-property,specific-property,personal-remedies,delay-liability" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="special-enforcement-measures-rule" data-focal-channels="icon,spatial,connector" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={6}>
        <Knowledge data-final-knowledge="party-change-addition" index={0} icon={<Wrench size={34}/>} label="主体变更追加" detail="仅依法定情形变更、追加当事人"/>
        <Knowledge data-final-knowledge="participation-distribution" index={1} icon={<Wrench size={34}/>} label="参与分配" detail="多个债权人依法进入同一财产分配"/>
        <Knowledge data-final-knowledge="mature-claim-execution" index={2} icon={<Wrench size={34}/>} label="到期债权" detail="向次债务人发出履行通知并处理异议"/>
        <Knowledge data-final-knowledge="coowned-specific-property" index={3} icon={<Wrench size={34}/>} label="共有/特定物" detail="依法分割或交付；不能交付时处理替代责任"/>
        <Knowledge data-final-knowledge="retained-title-property" index={4} icon={<Wrench size={34}/>} label="保留所有权标的" detail="按所有权与占有状态选择执行措施"/>
        <Knowledge data-final-knowledge="personal-and-delay-relief" index={5} icon={<Wrench size={34}/>} label="特殊履行责任" detail="赔礼道歉、恢复名誉；迟延履行利息或迟延履行金"/>
      </Diagram>
    </div></Shell>;

export const EnforcementControlNetwork=()=> <AbsoluteFill>    <TimelineSequence name="01-enforcement-launch-clock" start={SCENES.enforcementLaunchClock.start} duration={SCENES.enforcementLaunchClock.duration}><EnforcementLaunchClockScene/></TimelineSequence>
    <TimelineSequence name="02-statutory-jurisdiction" start={SCENES.statutoryJurisdiction.start} duration={SCENES.statutoryJurisdiction.duration}><StatutoryJurisdictionScene/></TimelineSequence>
    <TimelineSequence name="03-security-and-settlement" start={SCENES.securityAndSettlement.start} duration={SCENES.securityAndSettlement.duration}><SecurityAndSettlementScene/></TimelineSequence>
    <TimelineSequence name="04-objections-and-actions" start={SCENES.objectionsAndActions.start} duration={SCENES.objectionsAndActions.duration}><ObjectionsAndActionsScene/></TimelineSequence>
    <TimelineSequence name="05-special-enforcement-measures" start={SCENES.specialEnforcementMeasures.start} duration={SCENES.specialEnforcementMeasures.duration}><SpecialEnforcementMeasuresScene/></TimelineSequence>
    <TimelineSequence name="06-settlement-forms-consequences" start={SCENES.settlementFormsConsequences.start} duration={SCENES.settlementFormsConsequences.duration}><SettlementFormsConsequencesScene/></TimelineSequence>
    <TimelineSequence name="07-outside-settlement-objection" start={SCENES.outsideSettlementObjection.start} duration={SCENES.outsideSettlementObjection.duration}><OutsideSettlementObjectionScene/></TimelineSequence>
    <TimelineSequence name="08-party-change-and-addition" start={SCENES.partyChangeAndAddition.start} duration={SCENES.partyChangeAndAddition.duration}><PartyChangeAndAdditionScene/></TimelineSequence>
    <TimelineSequence name="09-participation-distribution-gate" start={SCENES.participationDistributionGate.start} duration={SCENES.participationDistributionGate.duration}><ParticipationDistributionGateScene/></TimelineSequence>
    <TimelineSequence name="10-distribution-plan-objection-suit" start={SCENES.distributionPlanObjectionSuit.start} duration={SCENES.distributionPlanObjectionSuit.duration}><DistributionPlanObjectionSuitScene/></TimelineSequence>
    <TimelineSequence name="11-mature-claim-notice-fork" start={SCENES.matureClaimNoticeFork.start} duration={SCENES.matureClaimNoticeFork.duration}><MatureClaimNoticeForkScene/></TimelineSequence>
    <TimelineSequence name="12-co-owned-property-partition" start={SCENES.coOwnedPropertyPartition.start} duration={SCENES.coOwnedPropertyPartition.duration}><CoOwnedPropertyPartitionScene/></TimelineSequence>
    <TimelineSequence name="13-specific-thing-substitute" start={SCENES.specificThingSubstitute.start} duration={SCENES.specificThingSubstitute.duration}><SpecificThingSubstituteScene/></TimelineSequence>
    <TimelineSequence name="14-retained-title-execution" start={SCENES.retainedTitleExecution.start} duration={SCENES.retainedTitleExecution.duration}><RetainedTitleExecutionScene/></TimelineSequence>
    <TimelineSequence name="15-apology-publication-execution" start={SCENES.apologyPublicationExecution.start} duration={SCENES.apologyPublicationExecution.duration}><ApologyPublicationExecutionScene/></TimelineSequence>
    <TimelineSequence name="16-delayed-performance-money" start={SCENES.delayedPerformanceMoney.start} duration={SCENES.delayedPerformanceMoney.duration}><DelayedPerformanceMoneyScene/></TimelineSequence>
  </AbsoluteFill>;
