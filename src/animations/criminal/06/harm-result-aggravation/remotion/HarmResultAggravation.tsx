import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AggravatedStructureScene, CausationSourceDialScene, HarmFactLadderScene} from './scenes';

export const HarmResultAggravation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-harm-fact-ladder" {...SCENES.harmFactLadder}><HarmFactLadderScene /></TimelineSequence>
    <TimelineSequence name="02-aggravated-structure" {...SCENES.aggravatedStructure}><AggravatedStructureScene /></TimelineSequence>
    <TimelineSequence name="03-causation-source-dial" {...SCENES.causationSourceDial}><CausationSourceDialScene /></TimelineSequence>
  </AbsoluteFill>
);
