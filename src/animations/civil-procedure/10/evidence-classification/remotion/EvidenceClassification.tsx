import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BurdenEvidenceScene, DirectIndirectScene, SingleCaseTrapScene} from './scenes/ClassificationScenes';

export const EvidenceClassification = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-direct-indirect" {...SCENES.directIndirect}><DirectIndirectScene /></TimelineSequence>
    <TimelineSequence name="02-burden-evidence" {...SCENES.burdenEvidence}><BurdenEvidenceScene /></TimelineSequence>
    <TimelineSequence name="03-single-case-trap" {...SCENES.singleCaseTrap}><SingleCaseTrapScene /></TimelineSequence>
  </AbsoluteFill>
);
