import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {DURATION_FRAMES, PALETTE, SCENES} from './storyboard';
import {BinderyCanvas} from './visual-system';
import {
  ComparisonScene,
  DefinitionScene,
  ExamplesScene,
  NecessaryScene,
  OrdinaryScene,
  RecapScene,
  RelationsScene,
} from './scenes/JointLitigationScenes';

export const JointLitigation = () => (
  <AbsoluteFill style={{backgroundColor: PALETTE.canvas}}>
    <BinderyCanvas>
      <TimelineSequence name="01-definition" {...SCENES.definition}><DefinitionScene /></TimelineSequence>
      <TimelineSequence name="02-ordinary" {...SCENES.ordinary}><OrdinaryScene /></TimelineSequence>
      <TimelineSequence name="03-necessary" {...SCENES.necessary}><NecessaryScene /></TimelineSequence>
      <TimelineSequence name="04-comparison" {...SCENES.comparison}><ComparisonScene /></TimelineSequence>
      <TimelineSequence name="05-examples" {...SCENES.examples}><ExamplesScene /></TimelineSequence>
      <TimelineSequence name="06-recap" {...SCENES.recap}><RecapScene /></TimelineSequence>
      <TimelineSequence name="07-relations" {...SCENES.relations}><RelationsScene /></TimelineSequence>
      <div style={{position: 'absolute', left: 116, right: 82, bottom: 54, display: 'flex', alignItems: 'center', gap: 18}}>
        <div style={{fontSize: 16, fontWeight: 900, color: PALETTE.muted}}>CASE BINDERY / 06</div>
        <div style={{height: 1, flex: 1, background: PALETTE.rule}} />
        <div style={{fontSize: 16, fontWeight: 800, color: PALETTE.muted}}>共同诉讼</div>
      </div>
    </BinderyCanvas>
  </AbsoluteFill>
);

export const JOINT_LITIGATION_DURATION_FRAMES = DURATION_FRAMES;
