import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AgencyPowerOriginScene, CollusionAgencyScene} from './AgencyScenes';
import {ApparentAgencyScene, NarrowUnauthorizedScene} from './AgencyDeepScenes';

export const AgencyAuthorityHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-agency-power-origin" {...SCENES['agency-power-origin']}>
      <AgencyPowerOriginScene />
    </TimelineSequence>
    <TimelineSequence name="02-collusion-agency" {...SCENES['collusion-agency']}>
      <CollusionAgencyScene />
    </TimelineSequence>
    <TimelineSequence name="03-narrow-unauthorized" {...SCENES['narrow-unauthorized']}>
      <NarrowUnauthorizedScene />
    </TimelineSequence>
    <TimelineSequence name="04-apparent-agency" {...SCENES['apparent-agency']}>
      <ApparentAgencyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
