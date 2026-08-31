import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CommunityParkingScene, CondominiumScene, LandHouseScene, NeighboringForkScene, VotingLadderScene} from './PremisesScenes';

export const PremisesOwnershipHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-land-house-integration" {...SCENES['land-house-integration']}>
      <LandHouseScene />
    </TimelineSequence>
    <TimelineSequence name="02-condominium-dependence" {...SCENES['condominium-dependence']}>
      <CondominiumScene />
    </TimelineSequence>
    <TimelineSequence name="03-community-parking-rules" {...SCENES['community-parking-rules']}>
      <CommunityParkingScene />
    </TimelineSequence>
    <TimelineSequence name="04-voting-threshold-ladder" {...SCENES['voting-threshold-ladder']}>
      <VotingLadderScene />
    </TimelineSequence>
    <TimelineSequence name="05-neighboring-relations-fork" {...SCENES['neighboring-relations-fork']}>
      <NeighboringForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
