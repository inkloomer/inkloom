import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DominionFormulaScene, DominionThreeSourcesScene} from './scenes-formula';
import {CoercionModesScene, DeceptionModesScene} from './scenes-dominion';
import {AccessoryDependenceScene, StatutoryIdentityCaseScene} from './scenes-identity';
import {FormCaseQuizScene, FormStageDependenceScene} from './scenes-form';

export const IndirectPerpetratorDominion = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-dominion-formula" {...SCENES.dominionFormula}><DominionFormulaScene /></TimelineSequence>
    <TimelineSequence name="02-dominion-three-sources" {...SCENES.dominionThreeSources}><DominionThreeSourcesScene /></TimelineSequence>
    <TimelineSequence name="03-coercion-modes" {...SCENES.coercionModes}><CoercionModesScene /></TimelineSequence>
    <TimelineSequence name="04-deception-modes" {...SCENES.deceptionModes}><DeceptionModesScene /></TimelineSequence>
    <TimelineSequence name="05-statutory-identity-case" {...SCENES.statutoryIdentityCase}><StatutoryIdentityCaseScene /></TimelineSequence>
    <TimelineSequence name="06-accessory-dependence" {...SCENES.accessoryDependence}><AccessoryDependenceScene /></TimelineSequence>
    <TimelineSequence name="07-form-stage-dependence" {...SCENES.formStageDependence}><FormStageDependenceScene /></TimelineSequence>
    <TimelineSequence name="08-form-case-quiz" {...SCENES.formCaseQuiz}><FormCaseQuizScene /></TimelineSequence>
  </AbsoluteFill>
);
