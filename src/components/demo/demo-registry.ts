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
import {DocumentaryEvidenceRules} from '../../animations/civil-procedure/10/documentary-evidence-rules/remotion/DocumentaryEvidenceRules';
import {EvidenceClassification} from '../../animations/civil-procedure/10/evidence-classification/remotion/EvidenceClassification';
import {DURATION_FRAMES as DELEGATED_DURATION_FRAMES, FPS as DELEGATED_FPS} from '../../animations/civil-procedure/08/delegated-agent/remotion/storyboard';
import {DURATION_FRAMES as JOINT_DURATION_FRAMES, FPS as JOINT_FPS} from '../../animations/civil-procedure/06/joint-litigation/remotion/storyboard';
import {DURATION_FRAMES as REPRESENTATIVE_DURATION_FRAMES, FPS as REPRESENTATIVE_FPS} from '../../animations/civil-procedure/06/representative-litigation/remotion/storyboard';
import {DURATION_FRAMES as REVOCATION_DURATION_FRAMES, FPS as REVOCATION_FPS} from '../../animations/civil-procedure/07/third-party-revocation/remotion/storyboard';
import {DURATION_FRAMES as STATUTORY_DURATION_FRAMES, FPS as STATUTORY_FPS} from '../../animations/civil-procedure/08/statutory-agent/remotion/storyboard';
import {DURATION_FRAMES as ADMISSION_DURATION_FRAMES, FPS as ADMISSION_FPS} from '../../animations/civil-procedure/09/admission-court-record/remotion/storyboard';
import {DURATION_FRAMES as BURDEN_DURATION_FRAMES, FPS as BURDEN_FPS} from '../../animations/civil-procedure/09/burden-of-proof-steps/remotion/storyboard';
import {DURATION_FRAMES as TYPES_DURATION_FRAMES, FPS as TYPES_FPS} from '../../animations/civil-procedure/07/third-party-types/remotion/storyboard';
import {DURATION_FRAMES as DOCUMENTARY_DURATION_FRAMES, FPS as DOCUMENTARY_FPS} from '../../animations/civil-procedure/10/documentary-evidence-rules/remotion/storyboard';
import {DURATION_FRAMES as EVIDENCE_DURATION_FRAMES, FPS as EVIDENCE_FPS} from '../../animations/civil-procedure/10/evidence-classification/remotion/storyboard';

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
  {id: 'civil-procedure-10-evidence-classification', slug: 'evidence-classification', title: '检材透视台', direction: 'Forensic Light Table', component: EvidenceClassification, href: '/inkloom/objective/civil-procedure/10/evidence-classification/', durationInFrames: EVIDENCE_DURATION_FRAMES, fps: EVIDENCE_FPS},
  {id: 'civil-procedure-10-documentary-evidence-rules', slug: 'documentary-evidence-rules', title: '文书验印所', direction: 'Civic Seal Registry', component: DocumentaryEvidenceRules, href: '/inkloom/objective/civil-procedure/10/documentary-evidence-rules/', durationInFrames: DOCUMENTARY_DURATION_FRAMES, fps: DOCUMENTARY_FPS},
] as const satisfies readonly DemoDefinition[];

export const demoById = (id: string) => STYLE_DEMOS.find((demo) => demo.id === id);
