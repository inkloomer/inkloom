import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  DebtAndGiftScene,
  DivorceAftermathScene,
  DivorcePathsScene,
  HouseAndFruitScene,
  PropertyOwnershipGatesScene,
} from './MaritalPropertyDivorceDeskScenes';

export const MaritalPropertyDivorceDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-property-ownership-gates" {...SCENES['property-ownership-gates']}>
      <PropertyOwnershipGatesScene />
    </TimelineSequence>
    <TimelineSequence name="02-house-and-fruit-sorter" {...SCENES['house-and-fruit-sorter']}>
      <HouseAndFruitScene />
    </TimelineSequence>
    <TimelineSequence name="03-debt-and-gift-lane" {...SCENES['debt-and-gift-lane']}>
      <DebtAndGiftScene />
    </TimelineSequence>
    <TimelineSequence name="04-divorce-paths-lane" {...SCENES['divorce-paths-lane']}>
      <DivorcePathsScene />
    </TimelineSequence>
    <TimelineSequence name="05-divorce-aftermath-bench" {...SCENES['divorce-aftermath-bench']}>
      <DivorceAftermathScene />
    </TimelineSequence>
  </AbsoluteFill>
);
