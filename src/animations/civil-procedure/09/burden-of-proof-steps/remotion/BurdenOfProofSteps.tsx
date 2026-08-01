import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AffirmativeBurdenScene, BurdenRiskScene, ExemptFactsBoundaryScene, ProofChainScene, ProofStandardLadderScene, SpecialBurdenRulesScene, ThreeStepsScene, TwoInversionsScene} from './scenes/BurdenScenes';

export const BurdenOfProofSteps = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-burden-risk" {...SCENES.burdenRisk}><BurdenRiskScene /></TimelineSequence>
    <TimelineSequence name="02-affirmative-burden" {...SCENES.affirmativeBurden}><AffirmativeBurdenScene /></TimelineSequence>
    <TimelineSequence name="03-two-inversions" {...SCENES.twoInversions}><TwoInversionsScene /></TimelineSequence>
    <TimelineSequence name="04-three-steps" {...SCENES.threeSteps}><ThreeStepsScene /></TimelineSequence>
    <TimelineSequence name="05-exempt-facts-boundary" {...SCENES.exemptFactsBoundary}><ExemptFactsBoundaryScene /></TimelineSequence>
    <TimelineSequence name="06-special-burden-rules" {...SCENES.specialBurdenRules}><SpecialBurdenRulesScene /></TimelineSequence>
    <TimelineSequence name="07-proof-standard-ladder" {...SCENES.proofStandardLadder}><ProofStandardLadderScene /></TimelineSequence>
    <TimelineSequence name="08-proof-chain" {...SCENES.proofChain}><ProofChainScene /></TimelineSequence>
  </AbsoluteFill>
);
