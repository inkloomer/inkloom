import type {ComponentType} from 'react';
import {ArchivalDossierDemo} from '../../animations/demo/demo-archival-dossier/remotion/ArchivalDossierDemo';
import {ConstructivistGeometryDemo} from '../../animations/demo/demo-constructivist-geometry/remotion/ConstructivistGeometryDemo';
import {CourtroomBlueprintDemo} from '../../animations/demo/demo-courtroom-blueprint/remotion/CourtroomBlueprintDemo';
import {EvidenceBoardDemo} from '../../animations/demo/demo-evidence-board/remotion/EvidenceBoardDemo';
import {InkAnnotationDemo} from '../../animations/demo/demo-ink-annotation/remotion/InkAnnotationDemo';
import {IsometricMechanismDemo} from '../../animations/demo/demo-isometric-mechanism/remotion/IsometricMechanismDemo';
import {KineticTypographyDemo} from '../../animations/demo/demo-kinetic-typography/remotion/KineticTypographyDemo';
import {NewspaperEditorialDemo} from '../../animations/demo/demo-newspaper-editorial/remotion/NewspaperEditorialDemo';
// import {SplitScreenComparisonDemo} from '../../animations/demo/demo-split-screen-comparison/remotion/SplitScreenComparisonDemo';
// import {TransitMapDemo} from '../../animations/demo/demo-transit-map/remotion/TransitMapDemo';

export interface DemoDefinition {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly direction: string;
  readonly component: ComponentType<Record<string, never>>;
}

export const STYLE_DEMOS = [
  {id: 'demo-courtroom-blueprint', slug: 'courtroom-blueprint', title: '法庭蓝图', direction: 'Courtroom Blueprint', component: CourtroomBlueprintDemo},
  {id: 'demo-archival-dossier', slug: 'archival-dossier', title: '档案卷宗', direction: 'Archival Dossier', component: ArchivalDossierDemo},
  {id: 'demo-newspaper-editorial', slug: 'newspaper-editorial', title: '报刊编辑', direction: 'Newspaper Editorial', component: NewspaperEditorialDemo},
  {id: 'demo-constructivist-geometry', slug: 'constructivist-geometry', title: '构成主义几何', direction: 'Constructivist Geometry', component: ConstructivistGeometryDemo},
  {id: 'demo-ink-annotation', slug: 'ink-annotation', title: '墨迹批注', direction: 'Ink Annotation', component: InkAnnotationDemo},
  {id: 'demo-evidence-board', slug: 'evidence-board', title: '证据板', direction: 'Evidence Board', component: EvidenceBoardDemo},
  // {id: 'demo-transit-map', slug: 'transit-map', title: '线路图', direction: 'Transit Map', component: TransitMapDemo},
  {id: 'demo-kinetic-typography', slug: 'kinetic-typography', title: '动态排版', direction: 'Kinetic Typography', component: KineticTypographyDemo},
  {id: 'demo-isometric-mechanism', slug: 'isometric-mechanism', title: '等距机械', direction: 'Isometric Mechanism', component: IsometricMechanismDemo},
  // {id: 'demo-split-screen-comparison', slug: 'split-screen-comparison', title: '分屏对照', direction: 'Split-screen Comparison', component: SplitScreenComparisonDemo},
] as const satisfies readonly DemoDefinition[];

export const demoById = (id: string) => STYLE_DEMOS.find((demo) => demo.id === id);
