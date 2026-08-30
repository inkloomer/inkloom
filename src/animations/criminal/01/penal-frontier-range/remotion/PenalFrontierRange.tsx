import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AnalogyExamStripScene, TechniqueRangeScene} from './scenes-technique';
import {NullaPoenaGateScene, ReasonsRelationshipBenchScene} from './scenes-doctrine';
import {SpaceJurisdictionMapScene, TimeEffectDialScene} from './scenes-effect';

export const PenalFrontierRange = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-technique-range" {...SCENES.techniqueRange}><TechniqueRangeScene /></TimelineSequence>
    <TimelineSequence name="02-analogy-exam-strip" {...SCENES.analogyExamStrip}><AnalogyExamStripScene /></TimelineSequence>
    <TimelineSequence name="03-reasons-relationship-bench" {...SCENES.reasonsRelationshipBench}><ReasonsRelationshipBenchScene /></TimelineSequence>
    <TimelineSequence name="04-nulla-poena-gate" {...SCENES.nullaPoenaGate}><NullaPoenaGateScene /></TimelineSequence>
    <TimelineSequence name="05-space-jurisdiction-map" {...SCENES.spaceJurisdictionMap}><SpaceJurisdictionMapScene /></TimelineSequence>
    <TimelineSequence name="06-time-effect-dial" {...SCENES.timeEffectDial}><TimeEffectDialScene /></TimelineSequence>
  </AbsoluteFill>
);
