import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ContinuityScene, CreditAssignmentScene, JoinReleaseForkScene, NonTransferableScene} from './DebtTransferScenes';

export const DebtTransferHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-credit-assignment-flow" {...SCENES['credit-assignment-flow']}>
      <CreditAssignmentScene />
    </TimelineSequence>
    <TimelineSequence name="02-join-release-fork" {...SCENES['join-release-fork']}>
      <JoinReleaseForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-defence-offset-continuity" {...SCENES['defence-offset-continuity']}>
      <ContinuityScene />
    </TimelineSequence>
    <TimelineSequence name="04-non-transferable-series" {...SCENES['non-transferable-series']}>
      <NonTransferableScene />
    </TimelineSequence>
  </AbsoluteFill>
);
