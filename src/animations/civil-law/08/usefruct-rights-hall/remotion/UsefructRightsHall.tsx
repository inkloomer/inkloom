import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ConstructionUseScene, LandContractScene, ResidenceRightScene, ServitudeForkScene} from './UsefructScenes';

export const UsefructRightsHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-land-contract-rights" {...SCENES['land-contract-rights']}>
      <LandContractScene />
    </TimelineSequence>
    <TimelineSequence name="02-construction-use-right" {...SCENES['construction-use-right']}>
      <ConstructionUseScene />
    </TimelineSequence>
    <TimelineSequence name="03-residence-right" {...SCENES['residence-right']}>
      <ResidenceRightScene />
    </TimelineSequence>
    <TimelineSequence name="04-servitude-fork" {...SCENES['servitude-fork']}>
      <ServitudeForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
