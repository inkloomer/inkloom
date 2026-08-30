import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {MainPenaltyLadderScene} from './scenes-ladder';
import {CreditOffsetDialScene} from './scenes-offset';
import {DeathReviewTrackScene} from './scenes-review';
import {FineOrderMergeScene} from './scenes-order';
import {RightsDeportNonpenalScene} from './scenes-rights';

export const PenaltyScaleOffice = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-main-penalty-ladder" {...SCENES.mainPenaltyLadder}><MainPenaltyLadderScene /></TimelineSequence>
    <TimelineSequence name="02-credit-offset-dial" {...SCENES.creditOffsetDial}><CreditOffsetDialScene /></TimelineSequence>
    <TimelineSequence name="03-death-review-track" {...SCENES.deathReviewTrack}><DeathReviewTrackScene /></TimelineSequence>
    <TimelineSequence name="04-fine-order-merge" {...SCENES.fineOrderMerge}><FineOrderMergeScene /></TimelineSequence>
    <TimelineSequence name="05-rights-deport-nonpenal" {...SCENES.rightsDeportNonpenal}><RightsDeportNonpenalScene /></TimelineSequence>
  </AbsoluteFill>
);
