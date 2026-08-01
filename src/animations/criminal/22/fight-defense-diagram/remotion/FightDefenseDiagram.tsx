import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {HeadcountReversalScene, MutualIntentScene, OneSidedAttackScene} from './scenes/FightDefenseScenes';
import {SCENES} from './storyboard';

export const FightDefenseDiagram = () => (
  <AbsoluteFill style={{backgroundColor: '#101114', overflow: 'hidden'}}>
    <TimelineSequence name="01-mutual-intent" {...SCENES.mutualIntent}><MutualIntentScene /></TimelineSequence>
    <TimelineSequence name="02-one-sided-attack" {...SCENES.oneSidedAttack}><OneSidedAttackScene /></TimelineSequence>
    <TimelineSequence name="03-headcount-reversal" {...SCENES.headcountReversal}><HeadcountReversalScene /></TimelineSequence>
  </AbsoluteFill>
);
