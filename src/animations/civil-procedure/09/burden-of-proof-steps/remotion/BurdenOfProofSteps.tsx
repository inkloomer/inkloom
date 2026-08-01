import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AffirmativeBurdenScene, BurdenRiskScene, ThreeStepsScene, TwoInversionsScene} from './scenes/BurdenScenes';

export const BurdenOfProofSteps = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-burden-risk" {...SCENES.burdenRisk}><BurdenRiskScene /></TimelineSequence>
    <TimelineSequence name="02-affirmative-burden" {...SCENES.affirmativeBurden}><AffirmativeBurdenScene /></TimelineSequence>
    <TimelineSequence name="03-two-inversions" {...SCENES.twoInversions}><TwoInversionsScene /></TimelineSequence>
    <TimelineSequence name="04-three-steps" {...SCENES.threeSteps}><ThreeStepsScene /></TimelineSequence>
  </AbsoluteFill>
);
