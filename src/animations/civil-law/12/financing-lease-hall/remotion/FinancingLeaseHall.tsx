import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {FinancingOverviewScene, LiabilityAllocationScene, RentProtectionScene} from './FinancingLeaseScenes';

export const FinancingLeaseHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-financing-overview" {...SCENES['financing-overview']}>
      <FinancingOverviewScene />
    </TimelineSequence>
    <TimelineSequence name="02-liability-allocation" {...SCENES['liability-allocation']}>
      <LiabilityAllocationScene />
    </TimelineSequence>
    <TimelineSequence name="03-rent-protection" {...SCENES['rent-protection']}>
      <RentProtectionScene />
    </TimelineSequence>
  </AbsoluteFill>
);
