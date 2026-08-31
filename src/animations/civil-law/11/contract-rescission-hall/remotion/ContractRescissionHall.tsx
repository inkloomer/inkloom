import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BreachTrioScene, ExerciseTimeScene, RescissionFamilyScene, SituationForceScene} from './RescissionScenes';

export const ContractRescissionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-rescission-family-fork" {...SCENES['rescission-family-fork']}>
      <RescissionFamilyScene />
    </TimelineSequence>
    <TimelineSequence name="02-situation-force-compare" {...SCENES['situation-force-compare']}>
      <SituationForceScene />
    </TimelineSequence>
    <TimelineSequence name="03-breach-trio-march" {...SCENES['breach-trio-march']}>
      <BreachTrioScene />
    </TimelineSequence>
    <TimelineSequence name="04-exercise-time-consequence" {...SCENES['exercise-time-consequence']}>
      <ExerciseTimeScene />
    </TimelineSequence>
  </AbsoluteFill>
);
