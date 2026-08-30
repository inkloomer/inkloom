import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  ClassificationFoundationScene,
  IndependenceFourPillarsScene,
  RegistrationIncubationScene,
} from './PillarScenes';

export const LegalPersonIndependenceHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-independence-four-pillars" {...SCENES['independence-four-pillars']}>
      <IndependenceFourPillarsScene />
    </TimelineSequence>
    <TimelineSequence name="02-classification-and-foundation" {...SCENES['classification-and-foundation']}>
      <ClassificationFoundationScene />
    </TimelineSequence>
    <TimelineSequence name="03-registration-and-incubation" {...SCENES['registration-and-incubation']}>
      <RegistrationIncubationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
