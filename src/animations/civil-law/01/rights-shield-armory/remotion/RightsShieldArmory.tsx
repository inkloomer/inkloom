import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DominionRequestScene, ThreeRequestLanesScene} from './ArmoryScenes';
import {DefenceFormativeScene, ReturnNuisanceDangerScene, SelfHelpTripleScene} from './ArmoryDeepScenes';

export const RightsShieldArmory = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-dominion-request-contrast" {...SCENES['dominion-request-contrast']}>
      <DominionRequestScene />
    </TimelineSequence>
    <TimelineSequence name="02-three-request-lanes" {...SCENES['three-request-lanes']}>
      <ThreeRequestLanesScene />
    </TimelineSequence>
    <TimelineSequence name="03-return-nuisance-danger-forks" {...SCENES['return-nuisance-danger-forks']}>
      <ReturnNuisanceDangerScene />
    </TimelineSequence>
    <TimelineSequence name="04-defence-formative-powers" {...SCENES['defence-formative-powers']}>
      <DefenceFormativeScene />
    </TimelineSequence>
    <TimelineSequence name="05-self-help-triple-stand" {...SCENES['self-help-triple-stand']}>
      <SelfHelpTripleScene />
    </TimelineSequence>
  </AbsoluteFill>
);
