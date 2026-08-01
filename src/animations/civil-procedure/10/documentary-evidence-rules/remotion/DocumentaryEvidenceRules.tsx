import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AuthenticityRuleScene, BestEvidenceScene, DocumentOrderScene} from './scenes/RulesScenes';

export const DocumentaryEvidenceRules = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-authenticity-rule" {...SCENES.authenticityRule}><AuthenticityRuleScene /></TimelineSequence>
    <TimelineSequence name="02-document-order" {...SCENES.documentOrder}><DocumentOrderScene /></TimelineSequence>
    <TimelineSequence name="03-best-evidence" {...SCENES.bestEvidence}><BestEvidenceScene /></TimelineSequence>
  </AbsoluteFill>
);
