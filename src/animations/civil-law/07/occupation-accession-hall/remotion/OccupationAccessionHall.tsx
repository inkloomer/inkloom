import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AccessionForkScene, AccessionVerdictsScene, OccupationLaneScene} from './OccupationAccessionScenes';

export const OccupationAccessionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-occupation-lane" {...SCENES['occupation-lane']}>
      <OccupationLaneScene />
    </TimelineSequence>
    <TimelineSequence name="02-accession-fork" {...SCENES['accession-fork']}>
      <AccessionForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-accession-verdicts" {...SCENES['accession-verdicts']}>
      <AccessionVerdictsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
