import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {NoBreakLeaseScene, PriorityPurchaseScene, RenewalSuccessionScene} from './LeaseProtectScenes';

export const LeaseProtectHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-priority-purchase-renewal" {...SCENES['priority-purchase-renewal']}>
      <PriorityPurchaseScene />
    </TimelineSequence>
    <TimelineSequence name="02-renewal-succession" {...SCENES['renewal-succession']}>
      <RenewalSuccessionScene />
    </TimelineSequence>
    <TimelineSequence name="03-sale-no-break-lease" {...SCENES['sale-no-break-lease']}>
      <NoBreakLeaseScene />
    </TimelineSequence>
  </AbsoluteFill>
);
