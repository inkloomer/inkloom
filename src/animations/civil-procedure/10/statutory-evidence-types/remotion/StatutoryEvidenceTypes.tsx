import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {EvidenceMediumScene, ProofMethodScene, RuleCarryoverScene} from './scenes/TypesScenes';
import {SCENES} from './storyboard';

export const StatutoryEvidenceTypes = () => <AbsoluteFill>
  <TimelineSequence name="01-proof-method" {...SCENES.proofMethod}><ProofMethodScene /></TimelineSequence>
  <TimelineSequence name="02-medium-boundary" {...SCENES.mediumBoundary}><EvidenceMediumScene /></TimelineSequence>
  <TimelineSequence name="03-rule-carryover" {...SCENES.ruleCarryover}><RuleCarryoverScene /></TimelineSequence>
</AbsoluteFill>;
