import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {AppearanceScene, QualificationScene, TestimonyConductScene} from './scenes/WitnessScenes';
import {SCENES} from './storyboard';
export const WitnessTestimony = () => <AbsoluteFill>
  <TimelineSequence name="01-qualification" {...SCENES.qualification}><QualificationScene /></TimelineSequence>
  <TimelineSequence name="02-appearance" {...SCENES.appearance}><AppearanceScene /></TimelineSequence>
  <TimelineSequence name="03-testimony-conduct" {...SCENES.testimonyConduct}><TestimonyConductScene /></TimelineSequence>
</AbsoluteFill>;
