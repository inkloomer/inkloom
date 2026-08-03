import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {AppearanceConsequencesScene, InitiationScene, PreparationScene} from './scenes/AppraisalScenes';
import {SCENES} from './storyboard';

export const AppraisalOpinion = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-initiation" {...SCENES.initiation}>
      <InitiationScene />
    </TimelineSequence>
    <TimelineSequence name="02-preparation" {...SCENES.preparation}>
      <PreparationScene />
    </TimelineSequence>
    <TimelineSequence name="03-appearance-consequences" {...SCENES.appearanceConsequences}>
      <AppearanceConsequencesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
