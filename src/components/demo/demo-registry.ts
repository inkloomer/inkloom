import type {ComponentType} from 'react';
import {ArchivalDossierDemo} from '../../animations/demo/demo-archival-dossier/remotion/ArchivalDossierDemo';
import {ConstructivistGeometryDemo} from '../../animations/demo/demo-constructivist-geometry/remotion/ConstructivistGeometryDemo';
import {CourtroomBlueprintDemo} from '../../animations/demo/demo-courtroom-blueprint/remotion/CourtroomBlueprintDemo';
import {DecisionTreeDemo} from '../../animations/demo/demo-decision-tree/remotion/DecisionTreeDemo';
import {EvidenceBoardDemo} from '../../animations/demo/demo-evidence-board/remotion/EvidenceBoardDemo';
import {InkAnnotationDemo} from '../../animations/demo/demo-ink-annotation/remotion/InkAnnotationDemo';
import {IsometricMechanismDemo} from '../../animations/demo/demo-isometric-mechanism/remotion/IsometricMechanismDemo';
import {KineticTypographyDemo} from '../../animations/demo/demo-kinetic-typography/remotion/KineticTypographyDemo';
import {NewspaperEditorialDemo} from '../../animations/demo/demo-newspaper-editorial/remotion/NewspaperEditorialDemo';
import {RightsMatrixDemo} from '../../animations/demo/demo-rights-matrix/remotion/RightsMatrixDemo';
import {SplitScreenComparisonDemo} from '../../animations/demo/demo-split-screen-comparison/remotion/SplitScreenComparisonDemo';
import {StatuteCommentaryDemo} from '../../animations/demo/demo-statute-commentary/remotion/StatuteCommentaryDemo';
import {TimelineChronicleDemo} from '../../animations/demo/demo-timeline-chronicle/remotion/TimelineChronicleDemo';
import {TransitMapDemo} from '../../animations/demo/demo-transit-map/remotion/TransitMapDemo';
import {ThirdPartyRevocation} from '../../animations/civil-procedure/07/third-party-revocation/remotion/ThirdPartyRevocation';
import {ThirdPartyTypes} from '../../animations/civil-procedure/07/third-party-types/remotion/ThirdPartyTypes';
import {JointLitigation} from '../../animations/civil-procedure/06/joint-litigation/remotion/JointLitigation';
import {RepresentativeLitigation} from '../../animations/civil-procedure/06/representative-litigation/remotion/RepresentativeLitigation';
import {DelegatedAgent} from '../../animations/civil-procedure/08/delegated-agent/remotion/DelegatedAgent';
import {StatutoryAgent} from '../../animations/civil-procedure/08/statutory-agent/remotion/StatutoryAgent';
import {AdmissionCourtRecord} from '../../animations/civil-procedure/09/admission-court-record/remotion/AdmissionCourtRecord';
import {BurdenOfProofSteps} from '../../animations/civil-procedure/09/burden-of-proof-steps/remotion/BurdenOfProofSteps';
import {BurdenOfProofCaveats} from '../../animations/civil-procedure/09/burden-of-proof-caveats/remotion/BurdenOfProofCaveats';
import {DocumentaryEvidenceRules} from '../../animations/civil-procedure/10/documentary-evidence-rules/remotion/DocumentaryEvidenceRules';
import {EvidenceClassification} from '../../animations/civil-procedure/10/evidence-classification/remotion/EvidenceClassification';
import {OfficialIntermediary} from '../../animations/criminal/23/official-intermediary/remotion/OfficialIntermediary';
import {InfluenceIntermediary} from '../../animations/criminal/23/influence-intermediary/remotion/InfluenceIntermediary';
import {FightDefenseDiagram} from '../../animations/criminal/22/fight-defense-diagram/remotion/FightDefenseDiagram';
import {HighAltitudeThrowingDiagram} from '../../animations/criminal/22/high-altitude-throwing-diagram/remotion/HighAltitudeThrowingDiagram';
import {TheftMistakeAnalysis} from '../../animations/criminal/19/theft-mistake-analysis/remotion/TheftMistakeAnalysis';
import {OccupationalEmbezzlementFlowchart} from '../../animations/criminal/19/occupational-embezzlement-flowchart/remotion/OccupationalEmbezzlementFlowchart';
import {CardSellingFundsViewpoint} from '../../animations/criminal/19/card-selling-funds-viewpoint/remotion/CardSellingFundsViewpoint';
import {PropertyInterestsKeypoints} from '../../animations/criminal/19/property-interests-keypoints/remotion/PropertyInterestsKeypoints';
import {EvidencePreservation} from '../../animations/civil-procedure/11/evidence-preservation/remotion/EvidencePreservation';
import {EvidenceReview} from '../../animations/civil-procedure/11/evidence-review/remotion/EvidenceReview';
import {ProofFilingInvestigation} from '../../animations/civil-procedure/11/proof-filing-investigation/remotion/ProofFilingInvestigation';
import {SurpriseJudgmentFocus} from '../../animations/civil-procedure/11/surprise-judgment-focus/remotion/SurpriseJudgmentFocus';
import {PreSuitPreservationTransfer} from '../../animations/civil-procedure/12/pre-suit-preservation-transfer/remotion/PreSuitPreservationTransfer';
import {PreservationAssetMeasures} from '../../animations/civil-procedure/12/preservation-asset-measures/remotion/PreservationAssetMeasures';
import {PreservationRemedySwitchboard} from '../../animations/civil-procedure/12/preservation-remedy-switchboard/remotion/PreservationRemedySwitchboard';
import {PreservationStageMap} from '../../animations/civil-procedure/12/preservation-stage-map/remotion/PreservationStageMap';
import {ProvisionalExecutionGates} from '../../animations/civil-procedure/12/provisional-execution-gates/remotion/ProvisionalExecutionGates';
import {ProvisionalExecutionResolution} from '../../animations/civil-procedure/12/provisional-execution-resolution/remotion/ProvisionalExecutionResolution';
import {DURATION_FRAMES as DELEGATED_DURATION_FRAMES, FPS as DELEGATED_FPS} from '../../animations/civil-procedure/08/delegated-agent/remotion/storyboard';
import {DURATION_FRAMES as JOINT_DURATION_FRAMES, FPS as JOINT_FPS} from '../../animations/civil-procedure/06/joint-litigation/remotion/storyboard';
import {DURATION_FRAMES as REPRESENTATIVE_DURATION_FRAMES, FPS as REPRESENTATIVE_FPS} from '../../animations/civil-procedure/06/representative-litigation/remotion/storyboard';
import {DURATION_FRAMES as REVOCATION_DURATION_FRAMES, FPS as REVOCATION_FPS} from '../../animations/civil-procedure/07/third-party-revocation/remotion/storyboard';
import {DURATION_FRAMES as STATUTORY_DURATION_FRAMES, FPS as STATUTORY_FPS} from '../../animations/civil-procedure/08/statutory-agent/remotion/storyboard';
import {DURATION_FRAMES as ADMISSION_DURATION_FRAMES, FPS as ADMISSION_FPS} from '../../animations/civil-procedure/09/admission-court-record/remotion/storyboard';
import {DURATION_FRAMES as BURDEN_DURATION_FRAMES, FPS as BURDEN_FPS} from '../../animations/civil-procedure/09/burden-of-proof-steps/remotion/storyboard';
import {DURATION_FRAMES as CAVEATS_DURATION_FRAMES, FPS as CAVEATS_FPS} from '../../animations/civil-procedure/09/burden-of-proof-caveats/remotion/storyboard';
import {DURATION_FRAMES as TYPES_DURATION_FRAMES, FPS as TYPES_FPS} from '../../animations/civil-procedure/07/third-party-types/remotion/storyboard';
import {DURATION_FRAMES as DOCUMENTARY_DURATION_FRAMES, FPS as DOCUMENTARY_FPS} from '../../animations/civil-procedure/10/documentary-evidence-rules/remotion/storyboard';
import {DURATION_FRAMES as EVIDENCE_DURATION_FRAMES, FPS as EVIDENCE_FPS} from '../../animations/civil-procedure/10/evidence-classification/remotion/storyboard';
import {DURATION_FRAMES as OFFICIAL_INTERMEDIARY_DURATION_FRAMES, FPS as OFFICIAL_INTERMEDIARY_FPS} from '../../animations/criminal/23/official-intermediary/remotion/storyboard';
import {DURATION_FRAMES as INFLUENCE_INTERMEDIARY_DURATION_FRAMES, FPS as INFLUENCE_INTERMEDIARY_FPS} from '../../animations/criminal/23/influence-intermediary/remotion/storyboard';
import {DURATION_FRAMES as PRESERVATION_DURATION_FRAMES, FPS as PRESERVATION_FPS} from '../../animations/civil-procedure/11/evidence-preservation/remotion/storyboard';
import {DURATION_FRAMES as REVIEW_DURATION_FRAMES, FPS as REVIEW_FPS} from '../../animations/civil-procedure/11/evidence-review/remotion/storyboard';
import {DURATION_FRAMES as FILING_DURATION_FRAMES, FPS as FILING_FPS} from '../../animations/civil-procedure/11/proof-filing-investigation/remotion/storyboard';
import {DURATION_FRAMES as FOCUS_DURATION_FRAMES, FPS as FOCUS_FPS} from '../../animations/civil-procedure/11/surprise-judgment-focus/remotion/storyboard';
import {DURATION_FRAMES as TRANSFER_DURATION_FRAMES, FPS as TRANSFER_FPS} from '../../animations/civil-procedure/12/pre-suit-preservation-transfer/remotion/storyboard';
import {DURATION_FRAMES as ASSET_MEASURES_DURATION_FRAMES, FPS as ASSET_MEASURES_FPS} from '../../animations/civil-procedure/12/preservation-asset-measures/remotion/storyboard';
import {DURATION_FRAMES as REMEDY_DURATION_FRAMES, FPS as REMEDY_FPS} from '../../animations/civil-procedure/12/preservation-remedy-switchboard/remotion/storyboard';
import {DURATION_FRAMES as STAGE_MAP_DURATION_FRAMES, FPS as STAGE_MAP_FPS} from '../../animations/civil-procedure/12/preservation-stage-map/remotion/storyboard';
import {DURATION_FRAMES as EXECUTION_GATES_DURATION_FRAMES, FPS as EXECUTION_GATES_FPS} from '../../animations/civil-procedure/12/provisional-execution-gates/remotion/storyboard';
import {DURATION_FRAMES as EXECUTION_RESOLUTION_DURATION_FRAMES, FPS as EXECUTION_RESOLUTION_FPS} from '../../animations/civil-procedure/12/provisional-execution-resolution/remotion/storyboard';
import {DURATION_FRAMES as FIGHT_DURATION_FRAMES, FPS as FIGHT_FPS} from '../../animations/criminal/22/fight-defense-diagram/remotion/storyboard';
import {DURATION_FRAMES as ALTITUDE_DURATION_FRAMES, FPS as ALTITUDE_FPS} from '../../animations/criminal/22/high-altitude-throwing-diagram/remotion/storyboard';
import {DURATION_FRAMES as THEFT_DURATION_FRAMES, FPS as THEFT_FPS} from '../../animations/criminal/19/theft-mistake-analysis/remotion/storyboard';
import {DURATION_FRAMES as OCCUPATIONAL_DURATION_FRAMES, FPS as OCCUPATIONAL_FPS} from '../../animations/criminal/19/occupational-embezzlement-flowchart/remotion/storyboard';
import {DURATION_FRAMES as CARD_FUNDS_DURATION_FRAMES, FPS as CARD_FUNDS_FPS} from '../../animations/criminal/19/card-selling-funds-viewpoint/remotion/storyboard';
import {DURATION_FRAMES as PROPERTY_INTERESTS_DURATION_FRAMES, FPS as PROPERTY_INTERESTS_FPS} from '../../animations/criminal/19/property-interests-keypoints/remotion/storyboard';

export interface DemoDefinition {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly direction: string;
  readonly component: ComponentType<Record<string, never>>;
  readonly href?: string;
  readonly durationInFrames: number;
  readonly fps: number;
}

export const STYLE_DEMOS = [
  {id: 'demo-courtroom-blueprint', slug: 'courtroom-blueprint', title: '法庭蓝图', direction: 'Courtroom Blueprint', component: CourtroomBlueprintDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-archival-dossier', slug: 'archival-dossier', title: '档案卷宗', direction: 'Archival Dossier', component: ArchivalDossierDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-newspaper-editorial', slug: 'newspaper-editorial', title: '报刊编辑', direction: 'Newspaper Editorial', component: NewspaperEditorialDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-constructivist-geometry', slug: 'constructivist-geometry', title: '构成主义几何', direction: 'Constructivist Geometry', component: ConstructivistGeometryDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-ink-annotation', slug: 'ink-annotation', title: '墨迹批注', direction: 'Ink Annotation', component: InkAnnotationDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-evidence-board', slug: 'evidence-board', title: '证据板', direction: 'Evidence Board', component: EvidenceBoardDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-isometric-mechanism', slug: 'isometric-mechanism', title: '等距机械', direction: 'Isometric Mechanism', component: IsometricMechanismDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-timeline-chronicle', slug: 'timeline-chronicle', title: '时间轴编年体', direction: 'Timeline Chronicle', component: TimelineChronicleDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-statute-commentary', slug: 'statute-commentary', title: '法条注释', direction: 'Statute Commentary', component: StatuteCommentaryDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-decision-tree', slug: 'decision-tree', title: '决策树', direction: 'Decision Tree', component: DecisionTreeDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-rights-matrix', slug: 'rights-matrix', title: '权利矩阵', direction: 'Rights Matrix', component: RightsMatrixDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-kinetic-typography', slug: 'kinetic-typography', title: '动态字体', direction: 'Kinetic Typography', component: KineticTypographyDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-split-screen-comparison', slug: 'split-screen-comparison', title: '分屏比较', direction: 'Split-Screen Comparison', component: SplitScreenComparisonDemo, durationInFrames: 240, fps: 60},
  {id: 'demo-transit-map', slug: 'transit-map', title: '推理线路图', direction: 'Transit Map', component: TransitMapDemo, durationInFrames: 240, fps: 60},
  {id: 'civil-procedure-06-joint-litigation', slug: 'joint-litigation', title: '共同诉讼', direction: 'Case Bindery Workshop', component: JointLitigation, href: '/inkloom/objective/civil-procedure/06/joint-litigation/', durationInFrames: JOINT_DURATION_FRAMES, fps: JOINT_FPS},
  {id: 'civil-procedure-06-representative-litigation', slug: 'representative-litigation', title: '代表人诉讼', direction: 'Representative Signal Exchange', component: RepresentativeLitigation, href: '/inkloom/objective/civil-procedure/06/representative-litigation/', durationInFrames: REPRESENTATIVE_DURATION_FRAMES, fps: REPRESENTATIVE_FPS},
  {id: 'civil-procedure-07-third-party-types', slug: 'third-party-types', title: '关系定位图', direction: 'Legal Relation Map', component: ThirdPartyTypes, href: '/inkloom/objective/civil-procedure/07/third-party-types/', durationInFrames: TYPES_DURATION_FRAMES, fps: TYPES_FPS},
  {id: 'civil-procedure-07-third-party-revocation', slug: 'third-party-revocation', title: '套色印版', direction: 'Procedural Screenprint', component: ThirdPartyRevocation, href: '/inkloom/objective/civil-procedure/07/third-party-revocation/', durationInFrames: REVOCATION_DURATION_FRAMES, fps: REVOCATION_FPS},
  {id: 'civil-procedure-08-statutory-agent', slug: 'statutory-agent', title: '法定代理人', direction: 'Guardian Identity Ledger', component: StatutoryAgent, href: '/inkloom/objective/civil-procedure/08/statutory-agent/', durationInFrames: STATUTORY_DURATION_FRAMES, fps: STATUTORY_FPS},
  {id: 'civil-procedure-08-delegated-agent', slug: 'delegated-agent', title: '委托代理人', direction: 'Power-of-Attorney Contract', component: DelegatedAgent, href: '/inkloom/objective/civil-procedure/08/delegated-agent/', durationInFrames: DELEGATED_DURATION_FRAMES, fps: DELEGATED_FPS},
  {id: 'civil-procedure-09-admission-court-record', slug: 'admission-court-record', title: '法庭声纹图', direction: 'Court Signal Waveform', component: AdmissionCourtRecord, href: '/inkloom/objective/civil-procedure/09/admission-court-record/', durationInFrames: ADMISSION_DURATION_FRAMES, fps: ADMISSION_FPS},
  {id: 'civil-procedure-09-burden-of-proof-steps', slug: 'burden-of-proof-steps', title: '构成举证场', direction: 'Constructivist Proof Field', component: BurdenOfProofSteps, href: '/inkloom/objective/civil-procedure/09/burden-of-proof-steps/', durationInFrames: BURDEN_DURATION_FRAMES, fps: BURDEN_FPS},
  {id: 'civil-procedure-09-burden-of-proof-caveats', slug: 'burden-of-proof-caveats', title: '勘误批改板', direction: 'Errata Correction Board', component: BurdenOfProofCaveats, href: '/inkloom/objective/civil-procedure/09/burden-of-proof-caveats/', durationInFrames: CAVEATS_DURATION_FRAMES, fps: CAVEATS_FPS},
  {id: 'civil-procedure-10-evidence-classification', slug: 'evidence-classification', title: '检材透视台', direction: 'Forensic Light Table', component: EvidenceClassification, href: '/inkloom/objective/civil-procedure/10/evidence-classification/', durationInFrames: EVIDENCE_DURATION_FRAMES, fps: EVIDENCE_FPS},
  {id: 'civil-procedure-10-documentary-evidence-rules', slug: 'documentary-evidence-rules', title: '文书验印所', direction: 'Civic Seal Registry', component: DocumentaryEvidenceRules, href: '/inkloom/objective/civil-procedure/10/documentary-evidence-rules/', durationInFrames: DOCUMENTARY_DURATION_FRAMES, fps: DOCUMENTARY_FPS},
  {id: 'civil-procedure-11-evidence-preservation', slug: 'evidence-preservation', title: '证据保全舱', direction: 'Evidence Cold Storage', component: EvidencePreservation, href: '/inkloom/objective/civil-procedure/11/evidence-preservation/', durationInFrames: PRESERVATION_DURATION_FRAMES, fps: PRESERVATION_FPS},
  {id: 'civil-procedure-11-proof-filing-investigation', slug: 'proof-filing-investigation', title: '举证调度台', direction: 'Proof Dispatch Delta', component: ProofFilingInvestigation, href: '/inkloom/objective/civil-procedure/11/proof-filing-investigation/', durationInFrames: FILING_DURATION_FRAMES, fps: FILING_FPS},
  {id: 'civil-procedure-11-surprise-judgment-focus', slug: 'surprise-judgment-focus', title: '争点聚光场', direction: 'Argument Focus Theater', component: SurpriseJudgmentFocus, href: '/inkloom/objective/civil-procedure/11/surprise-judgment-focus/', durationInFrames: FOCUS_DURATION_FRAMES, fps: FOCUS_FPS},
  {id: 'civil-procedure-11-evidence-review', slug: 'evidence-review', title: '心证衡量室', direction: 'Evidence Weighing Chamber', component: EvidenceReview, href: '/inkloom/objective/civil-procedure/11/evidence-review/', durationInFrames: REVIEW_DURATION_FRAMES, fps: REVIEW_FPS},
  {id: 'civil-procedure-12-preservation-stage-map', slug: 'preservation-stage-map', title: '程序潮汐盘', direction: 'Procedural Tide Dial', component: PreservationStageMap, href: '/inkloom/objective/civil-procedure/12/preservation-stage-map/', durationInFrames: STAGE_MAP_DURATION_FRAMES, fps: STAGE_MAP_FPS},
  {id: 'civil-procedure-12-pre-suit-preservation-transfer', slug: 'pre-suit-preservation-transfer', title: '法院转运台', direction: 'Court Routing Table', component: PreSuitPreservationTransfer, href: '/inkloom/objective/civil-procedure/12/pre-suit-preservation-transfer/', durationInFrames: TRANSFER_DURATION_FRAMES, fps: TRANSFER_FPS},
  {id: 'civil-procedure-12-preservation-asset-measures', slug: 'preservation-asset-measures', title: '财产保鲜仓', direction: 'Asset Conservation Depot', component: PreservationAssetMeasures, href: '/inkloom/objective/civil-procedure/12/preservation-asset-measures/', durationInFrames: ASSET_MEASURES_DURATION_FRAMES, fps: ASSET_MEASURES_FPS},
  {id: 'civil-procedure-12-preservation-remedy-switchboard', slug: 'preservation-remedy-switchboard', title: '救济拨盘', direction: 'Remedy Switchboard', component: PreservationRemedySwitchboard, href: '/inkloom/objective/civil-procedure/12/preservation-remedy-switchboard/', durationInFrames: REMEDY_DURATION_FRAMES, fps: REMEDY_FPS},
  {id: 'civil-procedure-12-provisional-execution-gates', slug: 'provisional-execution-gates', title: '紧急救助分诊', direction: 'Emergency Relief Triage', component: ProvisionalExecutionGates, href: '/inkloom/objective/civil-procedure/12/provisional-execution-gates/', durationInFrames: EXECUTION_GATES_DURATION_FRAMES, fps: EXECUTION_GATES_FPS},
  {id: 'civil-procedure-12-provisional-execution-resolution', slug: 'provisional-execution-resolution', title: '裁判清算簿', direction: 'Judgment Settlement Ledger', component: ProvisionalExecutionResolution, href: '/inkloom/objective/civil-procedure/12/provisional-execution-resolution/', durationInFrames: EXECUTION_RESOLUTION_DURATION_FRAMES, fps: EXECUTION_RESOLUTION_FPS},
  {id: 'criminal-22-fight-defense-diagram', slug: 'fight-defense-diagram', title: '意图对抗场', direction: 'Intent Combat Field', component: FightDefenseDiagram, href: '/inkloom/objective/criminal/22/fight-defense-diagram/', durationInFrames: FIGHT_DURATION_FRAMES, fps: FIGHT_FPS},
  {id: 'criminal-22-high-altitude-throwing-diagram', slug: 'high-altitude-throwing-diagram', title: '垂直危险剖面', direction: 'Vertical Risk Section', component: HighAltitudeThrowingDiagram, href: '/inkloom/objective/criminal/22/high-altitude-throwing-diagram/', durationInFrames: ALTITUDE_DURATION_FRAMES, fps: ALTITUDE_FPS},
  {id: 'criminal-19-theft-mistake-analysis', slug: 'theft-mistake-analysis', title: '双焦校准台', direction: 'Dual-Focus Calibration', component: TheftMistakeAnalysis, href: '/inkloom/objective/criminal/19/theft-mistake-analysis/', durationInFrames: THEFT_DURATION_FRAMES, fps: THEFT_FPS},
  {id: 'criminal-19-occupational-embezzlement-flowchart', slug: 'occupational-embezzlement-flowchart', title: '要件质检线', direction: 'Industrial Elements Inspection', component: OccupationalEmbezzlementFlowchart, href: '/inkloom/objective/criminal/19/occupational-embezzlement-flowchart/', durationInFrames: OCCUPATIONAL_DURATION_FRAMES, fps: OCCUPATIONAL_FPS},
  {id: 'criminal-19-card-selling-funds-viewpoint', slug: 'card-selling-funds-viewpoint', title: '账户信号台', direction: 'Account Signal Router', component: CardSellingFundsViewpoint, href: '/inkloom/objective/criminal/19/card-selling-funds-viewpoint/', durationInFrames: CARD_FUNDS_DURATION_FRAMES, fps: CARD_FUNDS_FPS},
  {id: 'criminal-19-property-interests-keypoints', slug: 'property-interests-keypoints', title: '价值拓扑图册', direction: 'Value Topology Atlas', component: PropertyInterestsKeypoints, href: '/inkloom/objective/criminal/19/property-interests-keypoints/', durationInFrames: PROPERTY_INTERESTS_DURATION_FRAMES, fps: PROPERTY_INTERESTS_FPS},
  {id: 'criminal-23-official-intermediary', slug: 'official-intermediary', title: '财政稽核分流台', direction: 'Fiscal Audit Ledger', component: OfficialIntermediary, href: '/inkloom/objective/criminal/23/joint-crime/', durationInFrames: OFFICIAL_INTERMEDIARY_DURATION_FRAMES, fps: OFFICIAL_INTERMEDIARY_FPS},
  {id: 'criminal-23-influence-intermediary', slug: 'influence-intermediary', title: '关系引力图谱', direction: 'Private Influence Network', component: InfluenceIntermediary, href: '/inkloom/objective/criminal/23/joint-crime/', durationInFrames: INFLUENCE_INTERMEDIARY_DURATION_FRAMES, fps: INFLUENCE_INTERMEDIARY_FPS},
] as const satisfies readonly DemoDefinition[];

export const demoById = (id: string) => STYLE_DEMOS.find((demo) => demo.id === id);
