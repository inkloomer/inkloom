import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {OneActThreeRelationsScene} from './scenes-relations';
import {ContinueAggravateLaneScene} from './scenes-lanes';
import {CombinedSerialYardScene} from './scenes-combined';
import {AbsorbPostActsScene} from './scenes-absorb';
import {InvolvedPrincipleFloorScene} from './scenes-principle';

export const CrimeNumberReckoning = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-one-act-three-relations" {...SCENES.oneActThreeRelations}><OneActThreeRelationsScene /></TimelineSequence>
    <TimelineSequence name="02-continue-aggravate-lane" {...SCENES.continueAggravateLane}><ContinueAggravateLaneScene /></TimelineSequence>
    <TimelineSequence name="03-combined-serial-yard" {...SCENES.combinedSerialYard}><CombinedSerialYardScene /></TimelineSequence>
    <TimelineSequence name="04-absorb-post-acts" {...SCENES.absorbPostActs}><AbsorbPostActsScene /></TimelineSequence>
    <TimelineSequence name="05-involved-principle-floor" {...SCENES.involvedPrincipleFloor}><InvolvedPrincipleFloorScene /></TimelineSequence>
  </AbsoluteFill>
);
