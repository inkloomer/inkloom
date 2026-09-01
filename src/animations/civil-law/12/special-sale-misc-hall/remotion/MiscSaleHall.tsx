import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {HousingPermitScene, PowerSupplyScene, SampleClauseScene} from './MiscSaleScenes';

export const MiscSaleHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-sample-quality-clause" {...SCENES['sample-quality-clause']}>
      <SampleClauseScene />
    </TimelineSequence>
    <TimelineSequence name="02-housing-permit-gate" {...SCENES['housing-permit-gate']}>
      <HousingPermitScene />
    </TimelineSequence>
    <TimelineSequence name="03-power-supply-duties" {...SCENES['power-supply-duties']}>
      <PowerSupplyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
