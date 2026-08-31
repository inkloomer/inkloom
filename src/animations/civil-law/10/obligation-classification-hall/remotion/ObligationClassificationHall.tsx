import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BasisObjectPairsScene, JointShareForkScene, SimpleChoiceLoomScene} from './ObligationScenes';

export const ObligationClassificationHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-basis-object-pairs" {...SCENES['basis-object-pairs']}>
      <BasisObjectPairsScene />
    </TimelineSequence>
    <TimelineSequence name="02-joint-share-fork" {...SCENES['joint-share-fork']}>
      <JointShareForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-simple-choice-loom" {...SCENES['simple-choice-loom']}>
      <SimpleChoiceLoomScene />
    </TimelineSequence>
  </AbsoluteFill>
);
