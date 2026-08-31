import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ActualDeliveryScene, ConstructiveDeliveryScene, RegistryRulesScene} from './DeliveryRegistryScenes';

export const DeliveryRegistryHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-registry-rules" {...SCENES['registry-rules']}>
      <RegistryRulesScene />
    </TimelineSequence>
    <TimelineSequence name="02-actual-delivery" {...SCENES['actual-delivery']}>
      <ActualDeliveryScene />
    </TimelineSequence>
    <TimelineSequence name="03-constructive-delivery" {...SCENES['constructive-delivery']}>
      <ConstructiveDeliveryScene />
    </TimelineSequence>
  </AbsoluteFill>
);
