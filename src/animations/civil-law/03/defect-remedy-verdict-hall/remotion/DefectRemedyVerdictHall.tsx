import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {MandatoryRulesScene, VoidCoreScene} from './DefectScenes';
import {
  DuressFairnessScene,
  FraudMistakeScene,
  PendingFinalScene,
  VoidableRightsScene,
} from './DefectDeepScenes';

export const DefectRemedyVerdictHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-void-core-wall" {...SCENES['void-core-wall']}>
      <VoidCoreScene />
    </TimelineSequence>
    <TimelineSequence name="02-mandatory-rules-desk" {...SCENES['mandatory-rules-desk']}>
      <MandatoryRulesScene />
    </TimelineSequence>
    <TimelineSequence name="03-voidable-rights-desk" {...SCENES['voidable-rights-desk']}>
      <VoidableRightsScene />
    </TimelineSequence>
    <TimelineSequence name="04-fraud-mistake-forks" {...SCENES['fraud-mistake-forks']}>
      <FraudMistakeScene />
    </TimelineSequence>
    <TimelineSequence name="05-duress-fairness-forks" {...SCENES['duress-fairness-forks']}>
      <DuressFairnessScene />
    </TimelineSequence>
    <TimelineSequence name="06-pending-final-ledger" {...SCENES['pending-final-ledger']}>
      <PendingFinalScene />
    </TimelineSequence>
  </AbsoluteFill>
);
