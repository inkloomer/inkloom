import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  NamePortraitScene,
  ReputationPrivacyScene,
  VitalityRightsScene,
} from './PersonalityShieldHallScenes';

export const PersonalityShieldHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-vitality-rights-rack" {...SCENES['vitality-rights-rack']}>
      <VitalityRightsScene />
    </TimelineSequence>
    <TimelineSequence name="02-name-portrait-gallery" {...SCENES['name-portrait-gallery']}>
      <NamePortraitScene />
    </TimelineSequence>
    <TimelineSequence name="03-reputation-privacy-bench" {...SCENES['reputation-privacy-bench']}>
      <ReputationPrivacyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
