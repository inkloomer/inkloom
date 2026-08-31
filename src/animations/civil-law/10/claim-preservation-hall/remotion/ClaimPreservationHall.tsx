import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {RevocationConditionsScene, RevocationLadderScene, SubrogationScene} from './PreservationScenes';

export const ClaimPreservationHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-subrogation-gate" {...SCENES['subrogation-gate']}>
      <SubrogationScene />
    </TimelineSequence>
    <TimelineSequence name="02-revocation-conditions" {...SCENES['revocation-conditions']}>
      <RevocationConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="03-revocation-exercise-ladder" {...SCENES['revocation-exercise-ladder']}>
      <RevocationLadderScene />
    </TimelineSequence>
  </AbsoluteFill>
);
