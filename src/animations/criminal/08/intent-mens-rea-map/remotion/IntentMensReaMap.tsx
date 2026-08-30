import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {FaultSpectrumScene, IntentConsistencyScene} from './scenes-intent';
import {HitErrorTwoTheoriesScene, MistakeTwoStepScene} from './scenes-mistake';
import {DeferAdvanceAbsorbScene} from './scenes-error';

export const IntentMensReaMap = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-intent-consistency" {...SCENES.intentConsistency}><IntentConsistencyScene /></TimelineSequence>
    <TimelineSequence name="02-fault-spectrum" {...SCENES.faultSpectrum}><FaultSpectrumScene /></TimelineSequence>
    <TimelineSequence name="03-mistake-two-step" {...SCENES.mistakeTwoStep}><MistakeTwoStepScene /></TimelineSequence>
    <TimelineSequence name="04-hit-error-two-theories" {...SCENES.hitErrorTwoTheories}><HitErrorTwoTheoriesScene /></TimelineSequence>
    <TimelineSequence name="05-defer-advance-absorb" {...SCENES.deferAdvanceAbsorb}><DeferAdvanceAbsorbScene /></TimelineSequence>
  </AbsoluteFill>
);
