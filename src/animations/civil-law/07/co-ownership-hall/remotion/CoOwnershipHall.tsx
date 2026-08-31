import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CaseForkExternalScene, InternalRelationsScene, TwinOwnershipTypesScene} from './CoOwnershipScenes';

export const CoOwnershipHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-twin-ownership-types" {...SCENES['twin-ownership-types']}>
      <TwinOwnershipTypesScene />
    </TimelineSequence>
    <TimelineSequence name="02-internal-relations-chains" {...SCENES['internal-relations-chains']}>
      <InternalRelationsScene />
    </TimelineSequence>
    <TimelineSequence name="03-case-fork-and-external" {...SCENES['case-fork-and-external']}>
      <CaseForkExternalScene />
    </TimelineSequence>
  </AbsoluteFill>
);
