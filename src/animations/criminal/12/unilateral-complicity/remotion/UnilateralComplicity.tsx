import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {UnilateralOverviewScene, UnilateralHelpCaseScene} from './scenes-lens';
import {UnilateralLookoutDebateScene, UnilateralInstigationCaseScene} from './scenes-photo';
import {UnilateralExecutionCaseScene, ExamTwoCasesScene} from './scenes-exam';

export const UnilateralComplicity = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-unilateral-overview" {...SCENES.unilateralOverview}><UnilateralOverviewScene /></TimelineSequence>
    <TimelineSequence name="02-unilateral-help-case" {...SCENES.unilateralHelpCase}><UnilateralHelpCaseScene /></TimelineSequence>
    <TimelineSequence name="03-unilateral-lookout-debate" {...SCENES.unilateralLookoutDebate}><UnilateralLookoutDebateScene /></TimelineSequence>
    <TimelineSequence name="04-unilateral-instigation-case" {...SCENES.unilateralInstigationCase}><UnilateralInstigationCaseScene /></TimelineSequence>
    <TimelineSequence name="05-unilateral-execution-case" {...SCENES.unilateralExecutionCase}><UnilateralExecutionCaseScene /></TimelineSequence>
    <TimelineSequence name="06-exam-two-cases" {...SCENES.examTwoCases}><ExamTwoCasesScene /></TimelineSequence>
  </AbsoluteFill>
);
