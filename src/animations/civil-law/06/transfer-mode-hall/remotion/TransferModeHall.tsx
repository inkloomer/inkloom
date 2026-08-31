import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {FormationOppositionScene, PublicityAppearanceScene, ThirdPartyContextsScene, TwoSpecialLanesScene} from './TransferModeScenes';

export const TransferModeHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-publicity-appearance" {...SCENES['publicity-appearance']}>
      <PublicityAppearanceScene />
    </TimelineSequence>
    <TimelineSequence name="02-formation-opposition" {...SCENES['formation-opposition']}>
      <FormationOppositionScene />
    </TimelineSequence>
    <TimelineSequence name="03-two-special-lanes" {...SCENES['two-special-lanes']}>
      <TwoSpecialLanesScene />
    </TimelineSequence>
    <TimelineSequence name="04-third-party-contexts" {...SCENES['third-party-contexts']}>
      <ThirdPartyContextsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
