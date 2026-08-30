import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CommutationGradeRulerScene} from './scenes-commutation';
import {ExtensionInterruptionTrackScene} from './scenes-extension';
import {LimitationPeriodLadderScene} from './scenes-limitation';
import {ParoleGateQuadsScene} from './scenes-parole';
import {ParoleProbationCompareScene} from './scenes-compare';

export const ExecutionExpiryStation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-commutation-grade-ruler" {...SCENES.commutationGradeRuler}><CommutationGradeRulerScene /></TimelineSequence>
    <TimelineSequence name="02-parole-gate-quads" {...SCENES.paroleGateQuads}><ParoleGateQuadsScene /></TimelineSequence>
    <TimelineSequence name="03-parole-probation-compare" {...SCENES.paroleProbationCompare}><ParoleProbationCompareScene /></TimelineSequence>
    <TimelineSequence name="04-limitation-period-ladder" {...SCENES.limitationPeriodLadder}><LimitationPeriodLadderScene /></TimelineSequence>
    <TimelineSequence name="05-extension-interruption-track" {...SCENES.extensionInterruptionTrack}><ExtensionInterruptionTrackScene /></TimelineSequence>
  </AbsoluteFill>
);
