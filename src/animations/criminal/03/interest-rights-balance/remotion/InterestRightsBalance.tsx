import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DoctrineForkEmptyHouseScene, DualCharterBalanceScene, ObjectInterestRowsScene} from './scenes';

export const InterestRightsBalance = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-object-interest-rows" {...SCENES.objectInterestRows}><ObjectInterestRowsScene /></TimelineSequence>
    <TimelineSequence name="02-doctrine-fork-empty-house" {...SCENES.doctrineForkEmptyHouse}><DoctrineForkEmptyHouseScene /></TimelineSequence>
    <TimelineSequence name="03-dual-charter-balance" {...SCENES.dualCharterBalance}><DualCharterBalanceScene /></TimelineSequence>
  </AbsoluteFill>
);
