import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BossDenCounterScene} from './scenes-boss';
import {CredentialForgeBenchScene} from './scenes-credential';
import {DrugDispatchLaneScene} from './scenes-drug';
import {OfficialDutyBoardScene} from './scenes-duty';
import {JusticeHarborQuayScene} from './scenes-harbor';
import {JusticeTestimonyHallScene} from './scenes-testimony';
import {StreetSquatStageScene} from './scenes-street';
import {ViceBrocadeRoomScene} from './scenes-vice';

export const PublicOrderWatchTower = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-official-duty-board" {...SCENES.officialDutyBoard}><OfficialDutyBoardScene /></TimelineSequence>
    <TimelineSequence name="02-credential-forge-bench" {...SCENES.credentialForgeBench}><CredentialForgeBenchScene /></TimelineSequence>
    <TimelineSequence name="03-street-squat-stage" {...SCENES.streetSquatStage}><StreetSquatStageScene /></TimelineSequence>
    <TimelineSequence name="04-boss-den-counter" {...SCENES.bossDenCounter}><BossDenCounterScene /></TimelineSequence>
    <TimelineSequence name="05-justice-testimony-hall" {...SCENES.justiceTestimonyHall}><JusticeTestimonyHallScene /></TimelineSequence>
    <TimelineSequence name="06-justice-harbor-quay" {...SCENES.justiceHarborQuay}><JusticeHarborQuayScene /></TimelineSequence>
    <TimelineSequence name="07-drug-dispatch-lane" {...SCENES.drugDispatchLane}><DrugDispatchLaneScene /></TimelineSequence>
    <TimelineSequence name="08-vice-brocade-room" {...SCENES.viceBrocadeRoom}><ViceBrocadeRoomScene /></TimelineSequence>
  </AbsoluteFill>
);
