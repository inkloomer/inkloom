import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ConfusionWaiverScene, DepositTallyScene, OffsetFulfilmentScene, OffsetPairScene} from './ExtinctionScenes';

export const ObligationExtinctionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-offset-fulfilment-ladder" {...SCENES['offset-fulfilment-ladder']}>
      <OffsetFulfilmentScene />
    </TimelineSequence>
    <TimelineSequence name="02-deposit-tally" {...SCENES['deposit-tally']}>
      <DepositTallyScene />
    </TimelineSequence>
    <TimelineSequence name="03-offset-pair" {...SCENES['offset-pair']}>
      <OffsetPairScene />
    </TimelineSequence>
    <TimelineSequence name="04-confusion-waiver-fork" {...SCENES['confusion-waiver-fork']}>
      <ConfusionWaiverScene />
    </TimelineSequence>
  </AbsoluteFill>
);
