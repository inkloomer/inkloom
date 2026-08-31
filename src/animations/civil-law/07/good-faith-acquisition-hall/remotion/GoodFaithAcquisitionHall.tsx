import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ConditionsAppearanceScene, ConditionsGoodFaithScene, ConsequencesScene, LostPropertyScene, OriginalVsDerivativeScene} from './GoodFaithScenes';

export const GoodFaithAcquisitionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-original-vs-derivative" {...SCENES['original-vs-derivative']}>
      <OriginalVsDerivativeScene />
    </TimelineSequence>
    <TimelineSequence name="02-conditions-appearance-disposal" {...SCENES['conditions-appearance-disposal']}>
      <ConditionsAppearanceScene />
    </TimelineSequence>
    <TimelineSequence name="03-conditions-good-faith-delivery" {...SCENES['conditions-good-faith-delivery']}>
      <ConditionsGoodFaithScene />
    </TimelineSequence>
    <TimelineSequence name="04-lost-property-window" {...SCENES['lost-property-window']}>
      <LostPropertyScene />
    </TimelineSequence>
    <TimelineSequence name="05-consequences-remedies" {...SCENES['consequences-remedies']}>
      <ConsequencesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
