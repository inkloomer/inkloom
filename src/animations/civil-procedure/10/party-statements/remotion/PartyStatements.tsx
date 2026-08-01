import {AbsoluteFill} from 'remotion'; import {TimelineSequence} from '../../../../shared/remotion-runtime'; import {CorroborationScene, ProceduralBoundaryScene, RefusalConditionsScene} from './scenes/PartyStatementScenes'; import {SCENES} from './storyboard';
export const PartyStatements = () => <AbsoluteFill>
  <TimelineSequence name="01-corroboration" {...SCENES.corroboration}><CorroborationScene /></TimelineSequence>
  <TimelineSequence name="02-refusal-conditions" {...SCENES.refusalConditions}><RefusalConditionsScene /></TimelineSequence>
  <TimelineSequence name="03-procedural-boundary" {...SCENES.proceduralBoundary}><ProceduralBoundaryScene /></TimelineSequence>
</AbsoluteFill>;
