import type {ComponentType} from 'react';
import {ADMINISTRATIVE_LAW_DEMO_ADDED_AT, ADMINISTRATIVE_LAW_STYLE_DEMOS} from './administrative-law-demo-registry';
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
import {EvidenceExclusionLattice} from '../../animations/criminal-procedure/07/evidence-exclusion-lattice/remotion/EvidenceExclusionLattice';
import {DURATION_FRAMES as EVIDENCE_EXCLUSION_DURATION_FRAMES, FPS as EVIDENCE_EXCLUSION_FPS} from '../../animations/criminal-procedure/07/evidence-exclusion-lattice/remotion/storyboard';
import {ProcedureStructureOrrery} from '../../animations/criminal-procedure/01/procedure-structure-orrery/remotion/ProcedureStructureOrrery';
import {DURATION_FRAMES as PROCEDURE_STRUCTURE_DURATION_FRAMES, FPS as PROCEDURE_STRUCTURE_FPS} from '../../animations/criminal-procedure/01/procedure-structure-orrery/remotion/storyboard';
import {JurisdictionSluiceTerrace} from '../../animations/criminal-procedure/04/jurisdiction-sluice-terrace/remotion/JurisdictionSluiceTerrace';
import {DURATION_FRAMES as JURISDICTION_SLUICE_DURATION_FRAMES, FPS as JURISDICTION_SLUICE_FPS} from '../../animations/criminal-procedure/04/jurisdiction-sluice-terrace/remotion/storyboard';
import {RecusalSentryRotation} from '../../animations/criminal-procedure/05/recusal-sentry-rotation/remotion/RecusalSentryRotation';
import {DURATION_FRAMES as RECUSAL_SENTRY_DURATION_FRAMES, FPS as RECUSAL_SENTRY_FPS} from '../../animations/criminal-procedure/05/recusal-sentry-rotation/remotion/storyboard';
import {DefensePilotHarbor} from '../../animations/criminal-procedure/06/defense-pilot-harbor/remotion/DefensePilotHarbor';
import {DURATION_FRAMES as DEFENSE_PILOT_DURATION_FRAMES, FPS as DEFENSE_PILOT_FPS} from '../../animations/criminal-procedure/06/defense-pilot-harbor/remotion/storyboard';
import {CoercionPressureLadder} from '../../animations/criminal-procedure/08/coercion-pressure-ladder/remotion/CoercionPressureLadder';
import {DURATION_FRAMES as COERCION_LADDER_DURATION_FRAMES, FPS as COERCION_LADDER_FPS} from '../../animations/criminal-procedure/08/coercion-pressure-ladder/remotion/storyboard';
import {AttachedSuitViaduct} from '../../animations/criminal-procedure/09/attached-suit-viaduct/remotion/AttachedSuitViaduct';
import {DURATION_FRAMES as ATTACHED_SUIT_DURATION_FRAMES, FPS as ATTACHED_SUIT_FPS} from '../../animations/criminal-procedure/09/attached-suit-viaduct/remotion/storyboard';
import {PeriodEscapementWorks} from '../../animations/criminal-procedure/10/period-escapement-works/remotion/PeriodEscapementWorks';
import {DURATION_FRAMES as PERIOD_ESCAPEMENT_DURATION_FRAMES, FPS as PERIOD_ESCAPEMENT_FPS} from '../../animations/criminal-procedure/10/period-escapement-works/remotion/storyboard';
import {CaseFilingGatehouse} from '../../animations/criminal-procedure/11/case-filing-gatehouse/remotion/CaseFilingGatehouse';
import {DURATION_FRAMES as FILING_GATEHOUSE_DURATION_FRAMES, FPS as FILING_GATEHOUSE_FPS} from '../../animations/criminal-procedure/11/case-filing-gatehouse/remotion/storyboard';
import {PleaLeniencyCaliper} from '../../animations/criminal-procedure/02/plea-leniency-caliper/remotion/PleaLeniencyCaliper';
import {DURATION_FRAMES as PLEA_LENIENTY_DURATION_FRAMES, FPS as PLEA_LENIENTY_FPS} from '../../animations/criminal-procedure/02/plea-leniency-caliper/remotion/storyboard';
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
import {BehaviorPreservation} from '../../animations/civil-procedure/12/behavior-preservation/remotion/BehaviorPreservation';
import {PeriodCalculation} from '../../animations/civil-procedure/14/period-calculation/remotion/PeriodCalculation';
import {ServiceDeliveryNetwork} from '../../animations/civil-procedure/14/service-delivery-network/remotion/ServiceDeliveryNetwork';
import {SummaryProcedureSwitchyard} from '../../animations/civil-procedure/17/summary-procedure-switchyard/remotion/SummaryProcedureSwitchyard';
import {PublicInterestLitigationNetwork} from '../../animations/civil-procedure/18/public-interest-litigation-network/remotion/PublicInterestLitigationNetwork';
import {ThirdPartyRevocationRemedyMap} from '../../animations/civil-procedure/19/third-party-revocation-remedy-map/remotion/ThirdPartyRevocationRemedyMap';
import {AppealReviewDecisionMap} from '../../animations/civil-procedure/20/appeal-review-decision-map/remotion/AppealReviewDecisionMap';
import {PenaltyAdjustmentProcedure} from '../../animations/civil-procedure/32/penalty-adjustment-procedure/remotion/PenaltyAdjustmentProcedure';
import {ContractBookAtlas} from '../../animations/civil-law/contracts/contract-book-atlas/remotion/ContractBookAtlas';
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
import {DURATION_FRAMES as BEHAVIOR_PRESERVATION_DURATION_FRAMES, FPS as BEHAVIOR_PRESERVATION_FPS} from '../../animations/civil-procedure/12/behavior-preservation/remotion/storyboard';
import {DURATION_FRAMES as PERIOD_DURATION_FRAMES, FPS as PERIOD_FPS} from '../../animations/civil-procedure/14/period-calculation/remotion/storyboard';
import {DURATION_FRAMES as SERVICE_DURATION_FRAMES, FPS as SERVICE_FPS} from '../../animations/civil-procedure/14/service-delivery-network/remotion/storyboard';
import {DURATION_FRAMES as SUMMARY_PROCEDURE_DURATION_FRAMES, FPS as SUMMARY_PROCEDURE_FPS} from '../../animations/civil-procedure/17/summary-procedure-switchyard/remotion/storyboard';
import {DURATION_FRAMES as PUBLIC_INTEREST_DURATION_FRAMES, FPS as PUBLIC_INTEREST_FPS} from '../../animations/civil-procedure/18/public-interest-litigation-network/remotion/storyboard';
import {DURATION_FRAMES as THIRD_PARTY_REMEDY_DURATION_FRAMES, FPS as THIRD_PARTY_REMEDY_FPS} from '../../animations/civil-procedure/19/third-party-revocation-remedy-map/remotion/storyboard';
import {DURATION_FRAMES as APPEAL_REVIEW_DURATION_FRAMES, FPS as APPEAL_REVIEW_FPS} from '../../animations/civil-procedure/20/appeal-review-decision-map/remotion/storyboard';
import {DURATION_FRAMES as PENALTY_ADJUSTMENT_DURATION_FRAMES, FPS as PENALTY_ADJUSTMENT_FPS} from '../../animations/civil-procedure/32/penalty-adjustment-procedure/remotion/storyboard';
import {DURATION_FRAMES as CONTRACT_BOOK_DURATION_FRAMES, FPS as CONTRACT_BOOK_FPS} from '../../animations/civil-law/contracts/contract-book-atlas/remotion/storyboard';
import {LegalInterpretation} from '../../animations/theoretical-law/17/legal-interpretation/remotion/LegalInterpretation';
import {DURATION_FRAMES as LEGAL_INTERPRETATION_DURATION_FRAMES, FPS as LEGAL_INTERPRETATION_FPS} from '../../animations/theoretical-law/17/legal-interpretation/remotion/storyboard';
import {MarxistLawEssence} from '../../animations/theoretical-law/01/marxist-law-essence/remotion/MarxistLawEssence';
import {DURATION_FRAMES as MARXIST_LAW_DURATION_FRAMES, FPS as MARXIST_LAW_FPS} from '../../animations/theoretical-law/01/marxist-law-essence/remotion/storyboard';
import {FeaturesOfLaw} from '../../animations/theoretical-law/01/features-of-law/remotion/FeaturesOfLaw';
import {DURATION_FRAMES as FEATURES_OF_LAW_DURATION_FRAMES, FPS as FEATURES_OF_LAW_FPS} from '../../animations/theoretical-law/01/features-of-law/remotion/storyboard';
import {FunctionsOfLaw} from '../../animations/theoretical-law/01/functions-of-law/remotion/FunctionsOfLaw';
import {DURATION_FRAMES as FUNCTIONS_OF_LAW_DURATION_FRAMES, FPS as FUNCTIONS_OF_LAW_FPS} from '../../animations/theoretical-law/01/functions-of-law/remotion/storyboard';
import {LimitationsOfLaw} from '../../animations/theoretical-law/01/limitations-of-law/remotion/LimitationsOfLaw';
import {DURATION_FRAMES as LIMITATIONS_OF_LAW_DURATION_FRAMES, FPS as LIMITATIONS_OF_LAW_FPS} from '../../animations/theoretical-law/01/limitations-of-law/remotion/storyboard';
import {ValueConflict} from '../../animations/theoretical-law/01/value-conflict/remotion/ValueConflict';
import {DURATION_FRAMES as VALUE_CONFLICT_DURATION_FRAMES, FPS as VALUE_CONFLICT_FPS} from '../../animations/theoretical-law/01/value-conflict/remotion/storyboard';
import {LegalRules} from '../../animations/theoretical-law/01/legal-rules/remotion/LegalRules';
import {DURATION_FRAMES as LEGAL_RULES_DURATION_FRAMES, FPS as LEGAL_RULES_FPS} from '../../animations/theoretical-law/01/legal-rules/remotion/storyboard';
import {OrgansRelayMap} from '../../animations/criminal-procedure/03/organs-relay-map/remotion/OrgansRelayMap';
import {DURATION_FRAMES as ORGANS_RELAY_DURATION_FRAMES, FPS as ORGANS_RELAY_FPS} from '../../animations/criminal-procedure/03/organs-relay-map/remotion/storyboard';
import {ConceptOfLawDispute} from '../../animations/theoretical-law/01/concept-of-law-dispute/remotion/ConceptOfLawDispute';
import {DURATION_FRAMES as CONCEPT_OF_LAW_DURATION_FRAMES, FPS as CONCEPT_OF_LAW_FPS} from '../../animations/theoretical-law/01/concept-of-law-dispute/remotion/storyboard';
import {SourcesOfInternationalLaw} from '../../animations/international-law/01/sources-of-international-law/remotion/SourcesOfInternationalLaw';
import {DURATION_FRAMES as SOURCES_INTERNATIONAL_LAW_DURATION_FRAMES, FPS as SOURCES_INTERNATIONAL_LAW_FPS} from '../../animations/international-law/01/sources-of-international-law/remotion/storyboard';
import {SubjectsResponsibility} from '../../animations/international-law/02/subjects-responsibility/remotion/SubjectsResponsibility';
import {DURATION_FRAMES as SUBJECTS_RESPONSIBILITY_DURATION_FRAMES, FPS as SUBJECTS_RESPONSIBILITY_FPS} from '../../animations/international-law/02/subjects-responsibility/remotion/storyboard';
import {SpatialRegimes} from '../../animations/international-law/03/spatial-regimes/remotion/SpatialRegimes';
import {DURATION_FRAMES as SPATIAL_REGIMES_DURATION_FRAMES, FPS as SPATIAL_REGIMES_FPS} from '../../animations/international-law/03/spatial-regimes/remotion/storyboard';
import {IndividualsRegimes} from '../../animations/international-law/04/individuals-regimes/remotion/IndividualsRegimes';
import {DURATION_FRAMES as INDIVIDUALS_REGIMES_DURATION_FRAMES, FPS as INDIVIDUALS_REGIMES_FPS} from '../../animations/international-law/04/individuals-regimes/remotion/storyboard';
import {DiplomaticConsular} from '../../animations/international-law/05/diplomatic-consular/remotion/DiplomaticConsular';
import {DURATION_FRAMES as DIPLOMATIC_CONSULAR_DURATION_FRAMES, FPS as DIPLOMATIC_CONSULAR_FPS} from '../../animations/international-law/05/diplomatic-consular/remotion/storyboard';
import {getAnimationTypographyConfiguration} from '../../typography/animation-registry';
import {withAnimationTypography} from '../../typography/animation-provider';
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
  ...ADMINISTRATIVE_LAW_STYLE_DEMOS,
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
  {id: 'civil-procedure-09-burden-of-proof-caveats', slug: 'burden-of-proof-caveats', title: '证明边界簿', direction: 'Proof Boundary Ledger', component: BurdenOfProofCaveats, href: '/inkloom/objective/civil-procedure/09/burden-of-proof-caveats/', durationInFrames: CAVEATS_DURATION_FRAMES, fps: CAVEATS_FPS},
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
  {id: 'civil-procedure-12-behavior-preservation', slug: 'behavior-preservation', title: '禁令指令台', direction: 'Injunction Command Board', component: BehaviorPreservation, href: '/inkloom/objective/civil-procedure/12/behavior-preservation/', durationInFrames: BEHAVIOR_PRESERVATION_DURATION_FRAMES, fps: BEHAVIOR_PRESERVATION_FPS},
  {id: 'civil-procedure-14-period-calculation', slug: 'period-calculation', title: '期限信号台', direction: 'Deadline Signal Board', component: PeriodCalculation, href: '/inkloom/objective/civil-procedure/14/period-calculation/', durationInFrames: PERIOD_DURATION_FRAMES, fps: PERIOD_FPS},
  {id: 'civil-procedure-14-service-delivery-network', slug: 'service-delivery-network', title: '送达卷宗流', direction: 'Service Dossier Flow', component: ServiceDeliveryNetwork, href: '/inkloom/objective/civil-procedure/14/service-delivery-network/', durationInFrames: SERVICE_DURATION_FRAMES, fps: SERVICE_FPS},
  {id: 'criminal-22-fight-defense-diagram', slug: 'fight-defense-diagram', title: '意图对抗场', direction: 'Intent Combat Field', component: FightDefenseDiagram, href: '/inkloom/objective/criminal/22/fight-defense-diagram/', durationInFrames: FIGHT_DURATION_FRAMES, fps: FIGHT_FPS},
  {id: 'criminal-22-high-altitude-throwing-diagram', slug: 'high-altitude-throwing-diagram', title: '垂直危险剖面', direction: 'Vertical Risk Section', component: HighAltitudeThrowingDiagram, href: '/inkloom/objective/criminal/22/high-altitude-throwing-diagram/', durationInFrames: ALTITUDE_DURATION_FRAMES, fps: ALTITUDE_FPS},
  {id: 'criminal-19-theft-mistake-analysis', slug: 'theft-mistake-analysis', title: '双焦校准台', direction: 'Dual-Focus Calibration', component: TheftMistakeAnalysis, href: '/inkloom/objective/criminal/19/theft-mistake-analysis/', durationInFrames: THEFT_DURATION_FRAMES, fps: THEFT_FPS},
  {id: 'criminal-19-occupational-embezzlement-flowchart', slug: 'occupational-embezzlement-flowchart', title: '要件质检线', direction: 'Industrial Elements Inspection', component: OccupationalEmbezzlementFlowchart, href: '/inkloom/objective/criminal/19/occupational-embezzlement-flowchart/', durationInFrames: OCCUPATIONAL_DURATION_FRAMES, fps: OCCUPATIONAL_FPS},
  {id: 'criminal-19-card-selling-funds-viewpoint', slug: 'card-selling-funds-viewpoint', title: '账户信号台', direction: 'Account Signal Router', component: CardSellingFundsViewpoint, href: '/inkloom/objective/criminal/19/card-selling-funds-viewpoint/', durationInFrames: CARD_FUNDS_DURATION_FRAMES, fps: CARD_FUNDS_FPS},
  {id: 'criminal-19-property-interests-keypoints', slug: 'property-interests-keypoints', title: '价值拓扑图册', direction: 'Value Topology Atlas', component: PropertyInterestsKeypoints, href: '/inkloom/objective/criminal/19/property-interests-keypoints/', durationInFrames: PROPERTY_INTERESTS_DURATION_FRAMES, fps: PROPERTY_INTERESTS_FPS},
  {id: 'criminal-23-official-intermediary', slug: 'official-intermediary', title: '财政稽核分流台', direction: 'Fiscal Audit Ledger', component: OfficialIntermediary, href: '/inkloom/objective/criminal/23/joint-crime/', durationInFrames: OFFICIAL_INTERMEDIARY_DURATION_FRAMES, fps: OFFICIAL_INTERMEDIARY_FPS},
  {id: 'criminal-23-influence-intermediary', slug: 'influence-intermediary', title: '关系引力图谱', direction: 'Private Influence Network', component: InfluenceIntermediary, href: '/inkloom/objective/criminal/23/joint-crime/', durationInFrames: INFLUENCE_INTERMEDIARY_DURATION_FRAMES, fps: INFLUENCE_INTERMEDIARY_FPS},
  {id: 'civil-procedure-17-summary-procedure-switchyard', slug: 'summary-procedure-switchyard', title: '程序转辙珐琅', direction: 'Enamel Procedure Switchyard', component: SummaryProcedureSwitchyard, href: '/inkloom/objective/civil-procedure/17/summary-procedure-switchyard/', durationInFrames: SUMMARY_PROCEDURE_DURATION_FRAMES, fps: SUMMARY_PROCEDURE_FPS},
  {id: 'civil-procedure-18-public-interest-litigation-network', slug: 'public-interest-litigation-network', title: '公共公告网络', direction: 'Civic Notice Network', component: PublicInterestLitigationNetwork, href: '/inkloom/objective/civil-procedure/18/public-interest-litigation-network/', durationInFrames: PUBLIC_INTEREST_DURATION_FRAMES, fps: PUBLIC_INTEREST_FPS},
  {id: 'civil-procedure-19-third-party-revocation-remedy-map', slug: 'third-party-revocation-remedy-map', title: '裁判叠层剖面', direction: 'Judgment Palimpsest Cutaway', component: ThirdPartyRevocationRemedyMap, href: '/inkloom/objective/civil-procedure/19/third-party-revocation-remedy-map/', durationInFrames: THIRD_PARTY_REMEDY_DURATION_FRAMES, fps: THIRD_PARTY_REMEDY_FPS},
  {id: 'civil-procedure-20-appeal-review-decision-map', slug: 'appeal-review-decision-map', title: '上诉棱镜编排', direction: 'Appellate Editorial Prism', component: AppealReviewDecisionMap, href: '/inkloom/objective/civil-procedure/20/appeal-review-decision-map/', durationInFrames: APPEAL_REVIEW_DURATION_FRAMES, fps: APPEAL_REVIEW_FPS},
  {id: 'civil-law-contract-book-atlas', slug: 'contract-book-atlas', title: '条文折页', direction: 'Statute Folio', component: ContractBookAtlas, href: '/inkloom/objective/civil-law/contracts/contract-book-atlas/', durationInFrames: CONTRACT_BOOK_DURATION_FRAMES, fps: CONTRACT_BOOK_FPS},
  {id: 'civil-procedure-32-penalty-adjustment-procedure', slug: 'penalty-adjustment-procedure', title: '裁判控制台', direction: 'Judicial Control Desk', component: PenaltyAdjustmentProcedure, href: '/inkloom/objective/civil-procedure/32/penalty-adjustment-procedure/', durationInFrames: PENALTY_ADJUSTMENT_DURATION_FRAMES, fps: PENALTY_ADJUSTMENT_FPS},
  {id: 'theoretical-law-17-legal-interpretation', slug: 'legal-interpretation', title: '宋式藻井图', direction: 'Song Caisson Paintwork', component: LegalInterpretation, href: '/inkloom/objective/theoretical-law/17/legal-interpretation/', durationInFrames: LEGAL_INTERPRETATION_DURATION_FRAMES, fps: LEGAL_INTERPRETATION_FPS},
  {id: 'criminal-procedure-07-evidence-exclusion-lattice', slug: 'evidence-exclusion-lattice', title: '证物分级检验柜', direction: 'Exclusion Grading Lattice', component: EvidenceExclusionLattice, href: '/inkloom/objective/criminal-procedure/07/evidence-exclusion-lattice/', durationInFrames: EVIDENCE_EXCLUSION_DURATION_FRAMES, fps: EVIDENCE_EXCLUSION_FPS},
  {id: 'criminal-procedure-01-procedure-structure-orrery', slug: 'procedure-structure-orrery', title: '黄铜构造星盘', direction: 'Brass Orrery Structure', component: ProcedureStructureOrrery, href: '/inkloom/objective/criminal-procedure/01/procedure-structure-orrery/', durationInFrames: PROCEDURE_STRUCTURE_DURATION_FRAMES, fps: PROCEDURE_STRUCTURE_FPS},
  {id: 'criminal-procedure-04-jurisdiction-sluice-terrace', slug: 'jurisdiction-sluice-terrace', title: '水闸分级渠', direction: 'Sluice Terrace Jurisdiction', component: JurisdictionSluiceTerrace, href: '/inkloom/objective/criminal-procedure/04/jurisdiction-sluice-terrace/', durationInFrames: JURISDICTION_SLUICE_DURATION_FRAMES, fps: JURISDICTION_SLUICE_FPS},
  {id: 'criminal-procedure-05-recusal-sentry-rotation', slug: 'recusal-sentry-rotation', title: '换防哨位', direction: 'Sentry Rotation Post', component: RecusalSentryRotation, href: '/inkloom/objective/criminal-procedure/05/recusal-sentry-rotation/', durationInFrames: RECUSAL_SENTRY_DURATION_FRAMES, fps: RECUSAL_SENTRY_FPS},
  {id: 'criminal-procedure-06-defense-pilot-harbor', slug: 'defense-pilot-harbor', title: '灯塔引航港', direction: 'Pilot Harbor Defense', component: DefensePilotHarbor, href: '/inkloom/objective/criminal-procedure/06/defense-pilot-harbor/', durationInFrames: DEFENSE_PILOT_DURATION_FRAMES, fps: DEFENSE_PILOT_FPS},
  {id: 'criminal-procedure-08-coercion-pressure-ladder', slug: 'coercion-pressure-ladder', title: '锅炉压力梯', direction: 'Boiler Pressure Coercion', component: CoercionPressureLadder, href: '/inkloom/objective/criminal-procedure/08/coercion-pressure-ladder/', durationInFrames: COERCION_LADDER_DURATION_FRAMES, fps: COERCION_LADDER_FPS},
  {id: 'criminal-procedure-09-attached-suit-viaduct', slug: 'attached-suit-viaduct', title: '双轨合流桥', direction: 'Viaduct Merge Attached Suit', component: AttachedSuitViaduct, href: '/inkloom/objective/criminal-procedure/09/attached-suit-viaduct/', durationInFrames: ATTACHED_SUIT_DURATION_FRAMES, fps: ATTACHED_SUIT_FPS},
  {id: 'criminal-procedure-10-period-escapement-works', slug: 'period-escapement-works', title: '机械日历坊', direction: 'Escapement Works Periods', component: PeriodEscapementWorks, href: '/inkloom/objective/criminal-procedure/10/period-escapement-works/', durationInFrames: PERIOD_ESCAPEMENT_DURATION_FRAMES, fps: PERIOD_ESCAPEMENT_FPS},
  {id: 'criminal-procedure-11-case-filing-gatehouse', slug: 'case-filing-gatehouse', title: '闸门登记所', direction: 'Gatehouse Registry Filing', component: CaseFilingGatehouse, href: '/inkloom/objective/criminal-procedure/11/case-filing-gatehouse/', durationInFrames: FILING_GATEHOUSE_DURATION_FRAMES, fps: FILING_GATEHOUSE_FPS},
  {id: 'criminal-procedure-03-organs-relay-map', slug: 'organs-relay-map', title: '青砖驿路图', direction: 'Slate Courier Relay', component: OrgansRelayMap, href: '/inkloom/objective/criminal-procedure/03/organs-relay-map/', durationInFrames: ORGANS_RELAY_DURATION_FRAMES, fps: ORGANS_RELAY_FPS},
  {id: 'criminal-procedure-02-plea-leniency-caliper', slug: 'plea-leniency-caliper', title: '认罚量尺工坊', direction: 'Maple Caliper Workshop', component: PleaLeniencyCaliper, href: '/inkloom/objective/criminal-procedure/02/plea-leniency-caliper/', durationInFrames: PLEA_LENIENTY_DURATION_FRAMES, fps: PLEA_LENIENTY_FPS},
  {id: 'theoretical-law-01-concept-of-law-dispute', slug: 'concept-of-law-dispute', title: '漆屏对峙', direction: 'Lacquer Twin-Screen', component: ConceptOfLawDispute, href: '/inkloom/objective/theoretical-law/01/concept-of-law-dispute/', durationInFrames: CONCEPT_OF_LAW_DURATION_FRAMES, fps: CONCEPT_OF_LAW_FPS},
  {id: 'international-law-01-sources-of-international-law', slug: 'sources-of-international-law', title: '外交条约卷册', direction: 'Diplomatic Treaty Folio', component: withAnimationTypography(SourcesOfInternationalLaw, getAnimationTypographyConfiguration('sources-of-international-law')), href: '/inkloom/objective/international-law/01/sources-of-international-law/', durationInFrames: SOURCES_INTERNATIONAL_LAW_DURATION_FRAMES, fps: SOURCES_INTERNATIONAL_LAW_FPS},
  {id: 'international-law-02-subjects-responsibility', slug: 'subjects-responsibility', title: '外交议事厅', direction: 'Envoy Assembly Chamber', component: withAnimationTypography(SubjectsResponsibility, getAnimationTypographyConfiguration('subjects-responsibility')), href: '/inkloom/objective/international-law/02/subjects-responsibility/', durationInFrames: SUBJECTS_RESPONSIBILITY_DURATION_FRAMES, fps: SUBJECTS_RESPONSIBILITY_FPS},
  {id: 'international-law-03-spatial-regimes', slug: 'spatial-regimes', title: '海图测绘室', direction: 'Nautical Survey Chart', component: withAnimationTypography(SpatialRegimes, getAnimationTypographyConfiguration('spatial-regimes')), href: '/inkloom/objective/international-law/03/spatial-regimes/', durationInFrames: SPATIAL_REGIMES_DURATION_FRAMES, fps: SPATIAL_REGIMES_FPS},
  {id: 'international-law-04-individuals-regimes', slug: 'individuals-regimes', title: '户籍登记所', direction: 'Civil Registry Ledger', component: withAnimationTypography(IndividualsRegimes, getAnimationTypographyConfiguration('individuals-regimes')), href: '/inkloom/objective/international-law/04/individuals-regimes/', durationInFrames: INDIVIDUALS_REGIMES_DURATION_FRAMES, fps: INDIVIDUALS_REGIMES_FPS},
  {id: 'international-law-05-diplomatic-consular', slug: 'diplomatic-consular', title: '鸢尾紫章', direction: 'Iris Violet Chancery', component: withAnimationTypography(DiplomaticConsular, getAnimationTypographyConfiguration('diplomatic-consular')), href: '/inkloom/objective/international-law/05/diplomatic-consular/', durationInFrames: DIPLOMATIC_CONSULAR_DURATION_FRAMES, fps: DIPLOMATIC_CONSULAR_FPS},
  {id: 'theoretical-law-01-marxist-law-essence', slug: 'marxist-law-essence', title: '蓝晒制图', direction: 'Cyanotype Drafting', component: MarxistLawEssence, href: '/inkloom/objective/theoretical-law/01/marxist-law-essence/', durationInFrames: MARXIST_LAW_DURATION_FRAMES, fps: MARXIST_LAW_FPS},
  {id: 'theoretical-law-01-features-of-law', slug: 'features-of-law', title: '标本陈列柜', direction: 'Specimen Gallery Cabinet', component: FeaturesOfLaw, href: '/inkloom/objective/theoretical-law/01/features-of-law/', durationInFrames: FEATURES_OF_LAW_DURATION_FRAMES, fps: FEATURES_OF_LAW_FPS},
  {id: 'theoretical-law-01-functions-of-law', slug: 'functions-of-law', title: '灯塔信号站', direction: 'Night Beacon Station', component: FunctionsOfLaw, href: '/inkloom/objective/theoretical-law/01/functions-of-law/', durationInFrames: FUNCTIONS_OF_LAW_DURATION_FRAMES, fps: FUNCTIONS_OF_LAW_FPS},
  {id: 'theoretical-law-01-limitations-of-law', slug: 'limitations-of-law', title: '警戒界桩', direction: 'Hazard Boundary Post', component: LimitationsOfLaw, href: '/inkloom/objective/theoretical-law/01/limitations-of-law/', durationInFrames: LIMITATIONS_OF_LAW_DURATION_FRAMES, fps: LIMITATIONS_OF_LAW_FPS},
  {id: 'theoretical-law-01-value-conflict', slug: 'value-conflict', title: '金底嵌画', direction: 'Gold-Ground Mosaic', component: ValueConflict, href: '/inkloom/objective/theoretical-law/01/value-conflict/', durationInFrames: VALUE_CONFLICT_DURATION_FRAMES, fps: VALUE_CONFLICT_FPS},
  {id: 'theoretical-law-01-legal-rules', slug: 'legal-rules', title: '红蓝账本', direction: 'Red-Blue Ledger', component: LegalRules, href: '/inkloom/objective/theoretical-law/01/legal-rules/', durationInFrames: LEGAL_RULES_DURATION_FRAMES, fps: LEGAL_RULES_FPS},
  ...COMMERCIAL_LAW_STYLE_DEMOS,
] as const satisfies readonly DemoDefinition[];

const DEMO_ADDED_AT: Record<(typeof STYLE_DEMOS)[number]['id'], string> = {
  ...ADMINISTRATIVE_LAW_DEMO_ADDED_AT,
  'demo-courtroom-blueprint': '2026-08-01T21:16:23+08:00',
  'demo-archival-dossier': '2026-08-01T21:16:23+08:00',
  'demo-newspaper-editorial': '2026-08-01T21:16:23+08:00',
  'demo-constructivist-geometry': '2026-08-01T21:16:23+08:00',
  'demo-ink-annotation': '2026-08-01T21:16:23+08:00',
  'demo-evidence-board': '2026-08-01T21:16:23+08:00',
  'demo-isometric-mechanism': '2026-08-01T21:16:23+08:00',
  'demo-timeline-chronicle': '2026-08-01T21:16:23+08:00',
  'demo-statute-commentary': '2026-08-01T21:16:23+08:00',
  'demo-decision-tree': '2026-08-01T21:16:23+08:00',
  'demo-rights-matrix': '2026-08-01T21:16:23+08:00',
  'demo-kinetic-typography': '2026-08-01T21:16:23+08:00',
  'demo-split-screen-comparison': '2026-08-01T21:16:23+08:00',
  'demo-transit-map': '2026-08-01T21:16:23+08:00',
  'civil-procedure-06-joint-litigation': '2026-08-01T16:28:59+08:00',
  'civil-procedure-06-representative-litigation': '2026-08-01T16:28:59+08:00',
  'civil-procedure-07-third-party-types': '2026-08-01T01:33:30+08:00',
  'civil-procedure-07-third-party-revocation': '2026-08-01T01:33:30+08:00',
  'civil-procedure-08-statutory-agent': '2026-08-01T15:50:28+08:00',
  'civil-procedure-08-delegated-agent': '2026-08-01T01:33:30+08:00',
  'civil-procedure-09-admission-court-record': '2026-08-01T18:28:17+08:00',
  'civil-procedure-09-burden-of-proof-steps': '2026-08-01T18:28:17+08:00',
  'civil-procedure-09-burden-of-proof-caveats': '2026-08-03T16:35:43+08:00',
  'civil-procedure-10-evidence-classification': '2026-08-01T21:35:59+08:00',
  'civil-procedure-10-documentary-evidence-rules': '2026-08-01T21:35:59+08:00',
  'civil-procedure-11-evidence-preservation': '2026-08-01T22:16:39+08:00',
  'civil-procedure-11-proof-filing-investigation': '2026-08-01T22:16:39+08:00',
  'civil-procedure-11-surprise-judgment-focus': '2026-08-01T22:16:39+08:00',
  'civil-procedure-11-evidence-review': '2026-08-01T22:16:39+08:00',
  'civil-procedure-12-preservation-stage-map': '2026-08-02T14:19:56+08:00',
  'civil-procedure-12-pre-suit-preservation-transfer': '2026-08-02T14:19:56+08:00',
  'civil-procedure-12-preservation-asset-measures': '2026-08-02T14:19:56+08:00',
  'civil-procedure-12-preservation-remedy-switchboard': '2026-08-02T14:19:56+08:00',
  'civil-procedure-12-provisional-execution-gates': '2026-08-02T14:19:56+08:00',
  'civil-procedure-12-provisional-execution-resolution': '2026-08-02T14:19:56+08:00',
  'civil-procedure-12-behavior-preservation': '2026-08-03T19:18:55+08:00',
  'civil-procedure-14-period-calculation': '2026-08-03T19:18:55+08:00',
  'civil-procedure-14-service-delivery-network': '2026-08-03T19:18:55+08:00',
  'criminal-22-fight-defense-diagram': '2026-08-01T22:16:39+08:00',
  'criminal-22-high-altitude-throwing-diagram': '2026-08-01T22:16:39+08:00',
  'criminal-19-theft-mistake-analysis': '2026-08-01T22:16:39+08:00',
  'criminal-19-occupational-embezzlement-flowchart': '2026-08-01T22:16:39+08:00',
  'criminal-19-card-selling-funds-viewpoint': '2026-08-01T22:16:39+08:00',
  'criminal-19-property-interests-keypoints': '2026-08-01T22:16:39+08:00',
  'criminal-23-official-intermediary': '2026-08-01T22:16:39+08:00',
  'criminal-23-influence-intermediary': '2026-08-01T22:16:39+08:00',
  'civil-procedure-17-summary-procedure-switchyard': '2026-08-05T21:15:25+08:00',
  'civil-procedure-18-public-interest-litigation-network': '2026-08-05T21:15:25+08:00',
  'civil-procedure-19-third-party-revocation-remedy-map': '2026-08-05T21:15:25+08:00',
  'civil-procedure-20-appeal-review-decision-map': '2026-08-05T21:15:25+08:00',
  'civil-law-contract-book-atlas': '2026-08-08T18:17:31+08:00',
  'civil-procedure-32-penalty-adjustment-procedure': '2026-08-08T18:17:31+08:00',
  'theoretical-law-17-legal-interpretation': '2026-08-28T19:56:14+08:00',
  'criminal-procedure-07-evidence-exclusion-lattice': '2026-08-28T20:10:00+08:00',
  'criminal-procedure-01-procedure-structure-orrery': '2026-08-28T22:30:00+08:00',
  'criminal-procedure-04-jurisdiction-sluice-terrace': '2026-08-29T14:50:00+08:00',
  'criminal-procedure-05-recusal-sentry-rotation': '2026-08-29T15:40:00+08:00',
  'criminal-procedure-06-defense-pilot-harbor': '2026-08-29T16:20:00+08:00',
  'criminal-procedure-08-coercion-pressure-ladder': '2026-08-29T16:50:00+08:00',
  'criminal-procedure-09-attached-suit-viaduct': '2026-08-29T17:20:00+08:00',
  'criminal-procedure-10-period-escapement-works': '2026-08-29T17:50:00+08:00',
  'criminal-procedure-11-case-filing-gatehouse': '2026-08-29T18:20:00+08:00',
  'criminal-procedure-03-organs-relay-map': '2026-08-29T01:30:00+08:00',
  'criminal-procedure-02-plea-leniency-caliper': '2026-08-29T01:05:00+08:00',
  'theoretical-law-01-concept-of-law-dispute': '2026-08-28T23:30:00+08:00',
  'international-law-01-sources-of-international-law': '2026-08-29T10:00:00+08:00',
  'international-law-02-subjects-responsibility': '2026-08-29T11:00:00+08:00',
  'international-law-03-spatial-regimes': '2026-08-29T12:00:00+08:00',
  'international-law-04-individuals-regimes': '2026-08-29T13:00:00+08:00',
  'international-law-05-diplomatic-consular': '2026-08-29T14:00:00+08:00',
  'theoretical-law-01-marxist-law-essence': '2026-08-29T13:40:00+08:00',
  'theoretical-law-01-features-of-law': '2026-08-29T15:10:00+08:00',
  'theoretical-law-01-functions-of-law': '2026-08-29T16:40:00+08:00',
  'theoretical-law-01-limitations-of-law': '2026-08-29T18:00:00+08:00',
  'theoretical-law-01-value-conflict': '2026-08-29T19:20:00+08:00',
  'theoretical-law-01-legal-rules': '2026-08-29T20:40:00+08:00',
  ...COMMERCIAL_LAW_DEMO_ADDED_AT,
};

export const SORTED_STYLE_DEMOS = [...STYLE_DEMOS].sort((a, b) => DEMO_ADDED_AT[b.id].localeCompare(DEMO_ADDED_AT[a.id]));

export const demoById = (id: string) => STYLE_DEMOS.find((demo) => demo.id === id);

import {COMMERCIAL_LAW_DEMO_ADDED_AT, COMMERCIAL_LAW_STYLE_DEMOS} from './commercial-law-demo-registry';
