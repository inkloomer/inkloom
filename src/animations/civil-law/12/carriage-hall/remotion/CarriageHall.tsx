import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CargoLiabilityScene, PassengerLiabilityScene, ShipperChangeScene} from './CarriageScenes';

export const CarriageHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-passenger-liability" {...SCENES['passenger-liability']}>
      <PassengerLiabilityScene />
    </TimelineSequence>
    <TimelineSequence name="02-cargo-liability-split" {...SCENES['cargo-liability-split']}>
      <CargoLiabilityScene />
    </TimelineSequence>
    <TimelineSequence name="03-shipper-free-change" {...SCENES['shipper-free-change']}>
      <ShipperChangeScene />
    </TimelineSequence>
  </AbsoluteFill>
);
