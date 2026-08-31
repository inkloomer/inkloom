import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  ClaimForkScene,
  DamagesTwinScene,
  PrincipleSwitchboardScene,
  TortDefinitionScene,
} from './TortLiabilityScaleHallScenes';

export const TortLiabilityScaleHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-tort-definition-bench" {...SCENES['tort-definition-bench']}>
      <TortDefinitionScene />
    </TimelineSequence>
    <TimelineSequence name="02-principle-switchboard" {...SCENES['principle-switchboard']}>
      <PrincipleSwitchboardScene />
    </TimelineSequence>
    <TimelineSequence name="03-damages-twin-bench" {...SCENES['damages-twin-bench']}>
      <DamagesTwinScene />
    </TimelineSequence>
    <TimelineSequence name="04-claim-fork-immunity-gates" {...SCENES['claim-fork-immunity-gates']}>
      <ClaimForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
