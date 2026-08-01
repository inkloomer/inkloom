import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {ConcurrenceChoiceScene, IntentExclusionScene, SeriousnessGateScene, VerticalDirectionScene} from './scenes/HighAltitudeScenes';
import {SCENES} from './storyboard';

export const HighAltitudeThrowingDiagram = () => (
  <AbsoluteFill style={{backgroundColor: '#F3F0E9', overflow: 'hidden'}}>
    <TimelineSequence name="01-vertical-direction" {...SCENES.verticalDirection}><VerticalDirectionScene /></TimelineSequence>
    <TimelineSequence name="02-seriousness-gate" {...SCENES.seriousnessGate}><SeriousnessGateScene /></TimelineSequence>
    <TimelineSequence name="03-intent-exclusion" {...SCENES.intentExclusion}><IntentExclusionScene /></TimelineSequence>
    <TimelineSequence name="04-concurrence-choice" {...SCENES.concurrenceChoice}><ConcurrenceChoiceScene /></TimelineSequence>
  </AbsoluteFill>
);
