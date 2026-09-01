import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {FictionalCreditScene, PriorityRaceScene, RecourseForkScene} from './FactoringScenes';

export const FactoringHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-recourse-fork" {...SCENES['recourse-fork']}>
      <RecourseForkScene />
    </TimelineSequence>
    <TimelineSequence name="02-fictional-credit-notice" {...SCENES['fictional-credit-notice']}>
      <FictionalCreditScene />
    </TimelineSequence>
    <TimelineSequence name="03-priority-race" {...SCENES['priority-race']}>
      <PriorityRaceScene />
    </TimelineSequence>
  </AbsoluteFill>
);
