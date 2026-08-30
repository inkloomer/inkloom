import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CauseGateThreeUsesScene, EffectGateThreeChecksScene} from './scenes-checks';
import {IntervenerCaseRowsScene, IntervenerTwoStepScene} from './scenes-steps';
import {UnascertainableFogScene} from './scenes-fog';

export const CausationAttributionFlow = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-cause-gate-three-uses" {...SCENES.causeGateThreeUses}><CauseGateThreeUsesScene /></TimelineSequence>
    <TimelineSequence name="02-effect-gate-three-checks" {...SCENES.effectGateThreeChecks}><EffectGateThreeChecksScene /></TimelineSequence>
    <TimelineSequence name="03-intervener-two-step" {...SCENES.intervenerTwoStep}><IntervenerTwoStepScene /></TimelineSequence>
    <TimelineSequence name="04-intervener-case-rows" {...SCENES.intervenerCaseRows}><IntervenerCaseRowsScene /></TimelineSequence>
    <TimelineSequence name="05-unascertainable-fog" {...SCENES.unascertainableFog}><UnascertainableFogScene /></TimelineSequence>
  </AbsoluteFill>
);
