import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {EntitledForkScene, PossessionBasicsScene, PossessionProtectionScene, UnentitledReturnScene} from './PossessionScenes';

export const PossessionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-possession-basics" {...SCENES['possession-basics']}>
      <PossessionBasicsScene />
    </TimelineSequence>
    <TimelineSequence name="02-entitled-vs-unentitled" {...SCENES['entitled-vs-unentitled']}>
      <EntitledForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-possession-protection" {...SCENES['possession-protection']}>
      <PossessionProtectionScene />
    </TimelineSequence>
    <TimelineSequence name="04-unentitled-return" {...SCENES['unentitled-return']}>
      <UnentitledReturnScene />
    </TimelineSequence>
  </AbsoluteFill>
);
