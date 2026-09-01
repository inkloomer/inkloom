import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {InvalidSubleaseScene, LeaseFormScene, OneHouseLeasesScene} from './LeaseFormScenes';

export const LeaseFormHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-lease-form-indefinite" {...SCENES['lease-form-indefinite']}>
      <LeaseFormScene />
    </TimelineSequence>
    <TimelineSequence name="02-one-house-leases" {...SCENES['one-house-leases']}>
      <OneHouseLeasesScene />
    </TimelineSequence>
    <TimelineSequence name="03-invalid-sublease" {...SCENES['invalid-sublease']}>
      <InvalidSubleaseScene />
    </TimelineSequence>
  </AbsoluteFill>
);
