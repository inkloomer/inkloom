import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {PerpetratorVariantsScene, RoleTaxonomyScene} from './scenes-roles';
import {ChildLookoutCaseScene, JointMeaningPrincipleScene} from './scenes-principle';
import {CoPrincipalRequirementsScene, JointLiabilityRuleScene} from './scenes-coprincipal';
import {CoPrincipalVariantsScene, NegligenceThreeTheoriesScene} from './scenes-theories';

export const ComplicityPrinciplesJointPrincipal = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-role-taxonomy" {...SCENES.roleTaxonomy}><RoleTaxonomyScene /></TimelineSequence>
    <TimelineSequence name="02-perpetrator-variants" {...SCENES.perpetratorVariants}><PerpetratorVariantsScene /></TimelineSequence>
    <TimelineSequence name="03-joint-meaning-principle" {...SCENES.jointMeaningPrinciple}><JointMeaningPrincipleScene /></TimelineSequence>
    <TimelineSequence name="04-child-lookout-case" {...SCENES.childLookoutCase}><ChildLookoutCaseScene /></TimelineSequence>
    <TimelineSequence name="05-co-principal-requirements" {...SCENES.coPrincipalRequirements}><CoPrincipalRequirementsScene /></TimelineSequence>
    <TimelineSequence name="06-joint-liability-rule" {...SCENES.jointLiabilityRule}><JointLiabilityRuleScene /></TimelineSequence>
    <TimelineSequence name="07-negligence-three-theories" {...SCENES.negligenceThreeTheories}><NegligenceThreeTheoriesScene /></TimelineSequence>
    <TimelineSequence name="08-co-principal-variants" {...SCENES.coPrincipalVariants}><CoPrincipalVariantsScene /></TimelineSequence>
  </AbsoluteFill>
);
