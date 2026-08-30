import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {InstigatorEssenceScene, InstigationTargetMatrixScene} from './scenes-instigator';
import {InstigatorCompletionCaseScene, InstigatorPunishmentScene} from './scenes-case';
import {AbettorCompletionModelsScene, AbettorEssenceScene} from './scenes-abettor';
import {NeutralHelpConductScene, PsychologicalHelpScene} from './scenes-neutral';

export const InstigatorAbettorRoles = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-instigator-essence" {...SCENES.instigatorEssence}><InstigatorEssenceScene /></TimelineSequence>
    <TimelineSequence name="02-instigation-target-matrix" {...SCENES.instigationTargetMatrix}><InstigationTargetMatrixScene /></TimelineSequence>
    <TimelineSequence name="03-instigator-completion-case" {...SCENES.instigatorCompletionCase}><InstigatorCompletionCaseScene /></TimelineSequence>
    <TimelineSequence name="04-instigator-punishment" {...SCENES.instigatorPunishment}><InstigatorPunishmentScene /></TimelineSequence>
    <TimelineSequence name="05-abettor-essence" {...SCENES.abettorEssence}><AbettorEssenceScene /></TimelineSequence>
    <TimelineSequence name="06-abettor-completion-models" {...SCENES.abettorCompletionModels}><AbettorCompletionModelsScene /></TimelineSequence>
    <TimelineSequence name="07-psychological-help" {...SCENES.psychologicalHelp}><PsychologicalHelpScene /></TimelineSequence>
    <TimelineSequence name="08-neutral-help-conduct" {...SCENES.neutralHelpConduct}><NeutralHelpConductScene /></TimelineSequence>
  </AbsoluteFill>
);
