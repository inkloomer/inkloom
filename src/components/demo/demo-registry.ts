import type {ComponentType} from 'react';
import {ArchivalDossierDemo} from '../../animations/demo/demo-archival-dossier/remotion/ArchivalDossierDemo';
import {ConstructivistGeometryDemo} from '../../animations/demo/demo-constructivist-geometry/remotion/ConstructivistGeometryDemo';
import {CourtroomBlueprintDemo} from '../../animations/demo/demo-courtroom-blueprint/remotion/CourtroomBlueprintDemo';
import {DecisionTreeDemo} from '../../animations/demo/demo-decision-tree/remotion/DecisionTreeDemo';
import {EvidenceBoardDemo} from '../../animations/demo/demo-evidence-board/remotion/EvidenceBoardDemo';
import {InkAnnotationDemo} from '../../animations/demo/demo-ink-annotation/remotion/InkAnnotationDemo';
import {IsometricMechanismDemo} from '../../animations/demo/demo-isometric-mechanism/remotion/IsometricMechanismDemo';
import {RightsMatrixDemo} from '../../animations/demo/demo-rights-matrix/remotion/RightsMatrixDemo';
import {StatuteCommentaryDemo} from '../../animations/demo/demo-statute-commentary/remotion/StatuteCommentaryDemo';
import {TimelineChronicleDemo} from '../../animations/demo/demo-timeline-chronicle/remotion/TimelineChronicleDemo';
import {ThirdPartyRevocation} from '../../animations/civil-procedure/07/third-party-revocation/remotion/ThirdPartyRevocation';
import {ThirdPartyTypes} from '../../animations/civil-procedure/07/third-party-types/remotion/ThirdPartyTypes';
import {DelegatedAgent} from '../../animations/civil-procedure/08/delegated-agent/remotion/DelegatedAgent';
import {StatutoryAgent} from '../../animations/civil-procedure/08/statutory-agent/remotion/StatutoryAgent';
import {DURATION_FRAMES as DELEGATED_DURATION_FRAMES, FPS as DELEGATED_FPS} from '../../animations/civil-procedure/08/delegated-agent/remotion/storyboard';
import {DURATION_FRAMES as REVOCATION_DURATION_FRAMES, FPS as REVOCATION_FPS} from '../../animations/civil-procedure/07/third-party-revocation/remotion/storyboard';
import {DURATION_FRAMES as STATUTORY_DURATION_FRAMES, FPS as STATUTORY_FPS} from '../../animations/civil-procedure/08/statutory-agent/remotion/storyboard';
import {DURATION_FRAMES as TYPES_DURATION_FRAMES, FPS as TYPES_FPS} from '../../animations/civil-procedure/07/third-party-types/remotion/storyboard';
// import {KineticTypographyDemo} from '../../animations/demo/demo-kinetic-typography/remotion/KineticTypographyDemo';
import {NewspaperEditorialDemo} from '../../animations/demo/demo-newspaper-editorial/remotion/NewspaperEditorialDemo';
// import {SplitScreenComparisonDemo} from '../../animations/demo/demo-split-screen-comparison/remotion/SplitScreenComparisonDemo';
// import {TransitMapDemo} from '../../animations/demo/demo-transit-map/remotion/TransitMapDemo';

export interface DemoDefinition {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly direction: string;
  readonly component: ComponentType<Record<string, never>>;
  readonly href: string;
  readonly durationInFrames: number;
  readonly fps: number;
}

export const STYLE_DEMOS = [
  {id: 'demo-courtroom-blueprint', slug: 'courtroom-blueprint', title: '法庭蓝图', direction: 'Courtroom Blueprint', component: CourtroomBlueprintDemo, href: '/inkloom/demo/courtroom-blueprint/', durationInFrames: 240, fps: 60},
  {id: 'demo-archival-dossier', slug: 'archival-dossier', title: '档案卷宗', direction: 'Archival Dossier', component: ArchivalDossierDemo, href: '/inkloom/demo/archival-dossier/', durationInFrames: 240, fps: 60},
  {id: 'demo-newspaper-editorial', slug: 'newspaper-editorial', title: '报刊编辑', direction: 'Newspaper Editorial', component: NewspaperEditorialDemo, href: '/inkloom/demo/newspaper-editorial/', durationInFrames: 240, fps: 60},
  {id: 'demo-constructivist-geometry', slug: 'constructivist-geometry', title: '构成主义几何', direction: 'Constructivist Geometry', component: ConstructivistGeometryDemo, href: '/inkloom/demo/constructivist-geometry/', durationInFrames: 240, fps: 60},
  {id: 'demo-ink-annotation', slug: 'ink-annotation', title: '墨迹批注', direction: 'Ink Annotation', component: InkAnnotationDemo, href: '/inkloom/demo/ink-annotation/', durationInFrames: 240, fps: 60},
  {id: 'demo-evidence-board', slug: 'evidence-board', title: '证据板', direction: 'Evidence Board', component: EvidenceBoardDemo, href: '/inkloom/demo/evidence-board/', durationInFrames: 240, fps: 60},
  {id: 'demo-isometric-mechanism', slug: 'isometric-mechanism', title: '等距机械', direction: 'Isometric Mechanism', component: IsometricMechanismDemo, href: '/inkloom/demo/isometric-mechanism/', durationInFrames: 240, fps: 60},
  {id: 'demo-timeline-chronicle', slug: 'timeline-chronicle', title: '时间轴编年体', direction: 'Timeline Chronicle', component: TimelineChronicleDemo, href: '/inkloom/demo/timeline-chronicle/', durationInFrames: 240, fps: 60},
  {id: 'demo-statute-commentary', slug: 'statute-commentary', title: '法条注释', direction: 'Statute Commentary', component: StatuteCommentaryDemo, href: '/inkloom/demo/statute-commentary/', durationInFrames: 240, fps: 60},
  {id: 'demo-decision-tree', slug: 'decision-tree', title: '决策树', direction: 'Decision Tree', component: DecisionTreeDemo, href: '/inkloom/demo/decision-tree/', durationInFrames: 240, fps: 60},
  {id: 'demo-rights-matrix', slug: 'rights-matrix', title: '权利矩阵', direction: 'Rights Matrix', component: RightsMatrixDemo, href: '/inkloom/demo/rights-matrix/', durationInFrames: 240, fps: 60},
  {id: 'civil-procedure-07-third-party-types', slug: 'third-party-types', title: '关系定位图', direction: 'Legal Relation Map', component: ThirdPartyTypes, href: '/inkloom/objective/civil-procedure/07/third-party-types/', durationInFrames: TYPES_DURATION_FRAMES, fps: TYPES_FPS},
  {id: 'civil-procedure-07-third-party-revocation', slug: 'third-party-revocation', title: '套色印版', direction: 'Procedural Screenprint', component: ThirdPartyRevocation, href: '/inkloom/objective/civil-procedure/07/third-party-revocation/', durationInFrames: REVOCATION_DURATION_FRAMES, fps: REVOCATION_FPS},
  {id: 'civil-procedure-08-statutory-agent', slug: 'statutory-agent', title: '法定代理人', direction: 'Guardian Identity Ledger', component: StatutoryAgent, href: '/inkloom/objective/civil-procedure/08/statutory-agent/', durationInFrames: STATUTORY_DURATION_FRAMES, fps: STATUTORY_FPS},
  {id: 'civil-procedure-08-delegated-agent', slug: 'delegated-agent', title: '委托代理人', direction: 'Power-of-Attorney Contract', component: DelegatedAgent, href: '/inkloom/objective/civil-procedure/08/delegated-agent/', durationInFrames: DELEGATED_DURATION_FRAMES, fps: DELEGATED_FPS},
] as const satisfies readonly DemoDefinition[];

export const demoById = (id: string) => STYLE_DEMOS.find((demo) => demo.id === id);
