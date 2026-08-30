import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AgeRingGradesScene, CulpabilityGateLineScene} from './scenes-culpability';
import {AgeFourteenSixteenScene, AgeTwelveFourteenScene} from './scenes-age-relative';
import {ActResponsibilitySimultaneityScene, CapacityCoreGradesScene} from './scenes-capacity';
import {ExpectationPossibilityScene, MistakeFactLawForkScene} from './scenes-mistake';

export const CulpabilityRingAssay = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-culpability-gate-line" {...SCENES.culpabilityGateLine}><CulpabilityGateLineScene /></TimelineSequence>
    <TimelineSequence name="02-age-ring-grades" {...SCENES.ageRingGrades}><AgeRingGradesScene /></TimelineSequence>
    <TimelineSequence name="03-age-12-14-gates" {...SCENES.ageTwelveFourteen}><AgeTwelveFourteenScene /></TimelineSequence>
    <TimelineSequence name="04-age-14-16-eight-crimes" {...SCENES.ageFourteenSixteen}><AgeFourteenSixteenScene /></TimelineSequence>
    <TimelineSequence name="05-capacity-core-grades" {...SCENES.capacityCoreGrades}><CapacityCoreGradesScene /></TimelineSequence>
    <TimelineSequence name="06-act-responsibility-simultaneity" {...SCENES.actResponsibilitySimultaneity}><ActResponsibilitySimultaneityScene /></TimelineSequence>
    <TimelineSequence name="07-mistake-fact-law-fork" {...SCENES.mistakeFactLawFork}><MistakeFactLawForkScene /></TimelineSequence>
    <TimelineSequence name="08-expectation-possibility" {...SCENES.expectationPossibility}><ExpectationPossibilityScene /></TimelineSequence>
  </AbsoluteFill>
);
