import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  CombinationAxisScene,
  FiveCaseTreeScene,
  JointTortThreeTypesScene,
} from './JointTortChainForkScenes';

export const JointTortChainFork = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-joint-tort-three-types" {...SCENES['joint-tort-three-types']}>
      <JointTortThreeTypesScene />
    </TimelineSequence>
    <TimelineSequence name="02-combination-axis-split" {...SCENES['combination-axis-split']}>
      <CombinationAxisScene />
    </TimelineSequence>
    <TimelineSequence name="03-five-case-decision-tree" {...SCENES['five-case-decision-tree']}>
      <FiveCaseTreeScene />
    </TimelineSequence>
  </AbsoluteFill>
);
