import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DefenceTriadScene, SurrogateScene, ThirdPartyLanesScene} from './PerformanceScenes';

export const ContractPerformanceHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-defence-triad-court" {...SCENES['defence-triad-court']}>
      <DefenceTriadScene />
    </TimelineSequence>
    <TimelineSequence name="02-third-party-lanes" {...SCENES['third-party-lanes']}>
      <ThirdPartyLanesScene />
    </TimelineSequence>
    <TimelineSequence name="03-surrogate-performance-rails" {...SCENES['surrogate-performance-rails']}>
      <SurrogateScene />
    </TimelineSequence>
  </AbsoluteFill>
);
