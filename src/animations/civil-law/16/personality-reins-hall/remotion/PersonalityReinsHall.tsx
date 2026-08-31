import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BodyDonationScene, ClinicalTrialScene, PortraitLicenseScene} from './PersonalityReinsHallScenes';

export const PersonalityReinsHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-portrait-license-lane" {...SCENES['portrait-license-lane']}>
      <PortraitLicenseScene />
    </TimelineSequence>
    <TimelineSequence name="02-body-donation-lane" {...SCENES['body-donation-lane']}>
      <BodyDonationScene />
    </TimelineSequence>
    <TimelineSequence name="03-clinical-trial-gates" {...SCENES['clinical-trial-gates']}>
      <ClinicalTrialScene />
    </TimelineSequence>
  </AbsoluteFill>
);
