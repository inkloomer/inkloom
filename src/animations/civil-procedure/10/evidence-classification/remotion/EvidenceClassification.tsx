import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {OriginDerivedScene, BurdenEvidenceScene, DirectIndirectScene, OutOfScopeEvidenceScene, ProofThresholdScene, SingleCaseTrapScene} from './scenes/ClassificationScenes';

export const EvidenceClassification = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-origin-derived" {...SCENES.originDerived}><OriginDerivedScene /></TimelineSequence>
    <TimelineSequence name="02-direct-indirect" {...SCENES.directIndirect}><DirectIndirectScene /></TimelineSequence>
    <TimelineSequence name="03-burden-evidence" {...SCENES.burdenEvidence}><BurdenEvidenceScene /></TimelineSequence>
    <TimelineSequence name="04-single-case-trap" {...SCENES.singleCaseTrap}><SingleCaseTrapScene /></TimelineSequence>
    <TimelineSequence name="05-proof-threshold" {...SCENES.proofThreshold}><ProofThresholdScene /></TimelineSequence>
    <TimelineSequence name="06-out-of-scope-evidence" {...SCENES.outOfScopeEvidence}><OutOfScopeEvidenceScene /></TimelineSequence>
  </AbsoluteFill>
);
