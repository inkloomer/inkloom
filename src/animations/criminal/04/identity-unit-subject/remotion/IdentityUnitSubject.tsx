import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {PublicOfficialDialScene, StatusCrimeDualityScene} from './scenes-status';
import {FourModelCrossingScene, UnitCrimeGateScene} from './scenes-unit';
import {UnitCrossingRulesScene} from './scenes-rules';

export const IdentityUnitSubject = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-status-crime-duality" {...SCENES.statusCrimeDuality}><StatusCrimeDualityScene /></TimelineSequence>
    <TimelineSequence name="02-public-official-dial" {...SCENES.publicOfficialDial}><PublicOfficialDialScene /></TimelineSequence>
    <TimelineSequence name="03-unit-crime-gate" {...SCENES.unitCrimeGate}><UnitCrimeGateScene /></TimelineSequence>
    <TimelineSequence name="04-four-model-crossing" {...SCENES.fourModelCrossing}><FourModelCrossingScene /></TimelineSequence>
    <TimelineSequence name="05-unit-crossing-rules" {...SCENES.unitCrossingRules}><UnitCrossingRulesScene /></TimelineSequence>
  </AbsoluteFill>
);
