import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {LiabilityDualityScene, RepresentationAgencyScene} from './DeskScenes';
import {BranchSplitScene, RepresentativeActScene, UltraViresScene} from './DeskDeepScenes';

export const RepresentationAuthorityDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-liability-duality" {...SCENES['liability-duality']}>
      <LiabilityDualityScene />
    </TimelineSequence>
    <TimelineSequence name="02-representation-vs-agency" {...SCENES['representation-vs-agency']}>
      <RepresentationAgencyScene />
    </TimelineSequence>
    <TimelineSequence name="03-representative-act-vs-personal" {...SCENES['representative-act-vs-personal']}>
      <RepresentativeActScene />
    </TimelineSequence>
    <TimelineSequence name="04-ultra-vires-representation" {...SCENES['ultra-vires-representation']}>
      <UltraViresScene />
    </TimelineSequence>
    <TimelineSequence name="05-branch-and-split" {...SCENES['branch-and-split']}>
      <BranchSplitScene />
    </TimelineSequence>
  </AbsoluteFill>
);
