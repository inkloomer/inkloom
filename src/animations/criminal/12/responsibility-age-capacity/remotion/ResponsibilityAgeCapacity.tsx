import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {TwoStageEvaluationScene, AgeGapCoPrincipalsScene} from './scenes-bench';
import {CapacityGapCoPrincipalsScene, HelperPrincipalPairsScene} from './scenes-gap';
import {InstigatorThreeBranchesScene, DominionRealStandardScene} from './scenes-fork';
import {MinorAdultRoleCreedScene, InstigatorCapacityCaseScene} from './scenes-creed';

export const ResponsibilityAgeCapacity = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-two-stage-evaluation" {...SCENES.twoStageEvaluation}><TwoStageEvaluationScene /></TimelineSequence>
    <TimelineSequence name="02-age-gap-co-principals" {...SCENES.ageGapCoPrincipals}><AgeGapCoPrincipalsScene /></TimelineSequence>
    <TimelineSequence name="03-capacity-gap-co-principals" {...SCENES.capacityGapCoPrincipals}><CapacityGapCoPrincipalsScene /></TimelineSequence>
    <TimelineSequence name="04-helper-principal-pairs" {...SCENES.helperPrincipalPairs}><HelperPrincipalPairsScene /></TimelineSequence>
    <TimelineSequence name="05-instigator-three-branches" {...SCENES.instigatorThreeBranches}><InstigatorThreeBranchesScene /></TimelineSequence>
    <TimelineSequence name="06-dominion-real-standard" {...SCENES.dominionRealStandard}><DominionRealStandardScene /></TimelineSequence>
    <TimelineSequence name="07-minor-adult-role-creed" {...SCENES.minorAdultRoleCreed}><MinorAdultRoleCreedScene /></TimelineSequence>
    <TimelineSequence name="08-instigator-capacity-case" {...SCENES.instigatorCapacityCase}><InstigatorCapacityCaseScene /></TimelineSequence>
  </AbsoluteFill>
);
