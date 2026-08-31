import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {InterpretationLoomScene, NamelessKindnessScene, RewardNoticeScene} from './ContractOverviewScenes';

export const ContractOverviewHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-reward-notice-dais" {...SCENES['reward-notice-dais']}>
      <RewardNoticeScene />
    </TimelineSequence>
    <TimelineSequence name="02-nameless-kindness-pair" {...SCENES['nameless-kindness-pair']}>
      <NamelessKindnessScene />
    </TimelineSequence>
    <TimelineSequence name="03-interpretation-seven-loom" {...SCENES['interpretation-seven-loom']}>
      <InterpretationLoomScene />
    </TimelineSequence>
  </AbsoluteFill>
);
