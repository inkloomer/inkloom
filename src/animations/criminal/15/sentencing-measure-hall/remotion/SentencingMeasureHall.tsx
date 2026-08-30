import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {SentimentGradeScaleScene} from './scenes-grade';
import {RecidivistGateQuadsScene} from './scenes-recidivist';
import {SurrenderForkDeskScene} from './scenes-surrender';
import {MeritCaptureDeskScene} from './scenes-merit';
import {MergeProbationTrackScene} from './scenes-merge';

export const SentencingMeasureHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-sentiment-grade-scale" {...SCENES.sentimentGradeScale}><SentimentGradeScaleScene /></TimelineSequence>
    <TimelineSequence name="02-recidivist-gate-quads" {...SCENES.recidivistGateQuads}><RecidivistGateQuadsScene /></TimelineSequence>
    <TimelineSequence name="03-surrender-fork-desk" {...SCENES.surrenderForkDesk}><SurrenderForkDeskScene /></TimelineSequence>
    <TimelineSequence name="04-merit-capture-desk" {...SCENES.meritCaptureDesk}><MeritCaptureDeskScene /></TimelineSequence>
    <TimelineSequence name="05-merge-probation-track" {...SCENES.mergeProbationTrack}><MergeProbationTrackScene /></TimelineSequence>
  </AbsoluteFill>
);
