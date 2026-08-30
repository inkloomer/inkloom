import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ElementsPipelineScene, StagedCrimeLadderScene} from './scenes-system';
import {ElementTypeMatrixScene, ObjectiveFirstSyllogismScene} from './scenes-method';
import {DoubtConcurrenceForkScene} from './scenes-inference';

export const CrimeConstitutionAtlas = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-elements-pipeline" {...SCENES.elementsPipeline}><ElementsPipelineScene /></TimelineSequence>
    <TimelineSequence name="02-staged-crime-ladder" {...SCENES.stagedCrimeLadder}><StagedCrimeLadderScene /></TimelineSequence>
    <TimelineSequence name="03-objective-first-syllogism" {...SCENES.objectiveFirstSyllogism}><ObjectiveFirstSyllogismScene /></TimelineSequence>
    <TimelineSequence name="04-element-type-matrix" {...SCENES.elementTypeMatrix}><ElementTypeMatrixScene /></TimelineSequence>
    <TimelineSequence name="05-doubt-concurrence-fork" {...SCENES.doubtConcurrenceFork}><DoubtConcurrenceForkScene /></TimelineSequence>
  </AbsoluteFill>
);
