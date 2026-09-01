import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AgencyForkScene, MultiSaleScene, UnauthorizedFrameScene} from './SaleCounterScenes';

export const SaleCounterHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-unauthorized-frame" {...SCENES['unauthorized-frame']}>
      <UnauthorizedFrameScene />
    </TimelineSequence>
    <TimelineSequence name="02-agency-coexist-fork" {...SCENES['agency-coexist-fork']}>
      <AgencyForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-multi-sale-lanes" {...SCENES['multi-sale-lanes']}>
      <MultiSaleScene />
    </TimelineSequence>
  </AbsoluteFill>
);
