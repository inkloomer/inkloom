import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ApprovalContractScene, ValidEffectiveScene} from './ActivationScenes';
import {ConditionForkScene, TermGateScene} from './ActivationDeepScenes';

export const EffectivenessActivationHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-valid-effective-frame" {...SCENES['valid-effective-frame']}>
      <ValidEffectiveScene />
    </TimelineSequence>
    <TimelineSequence name="02-approval-contract-desk" {...SCENES['approval-contract-desk']}>
      <ApprovalContractScene />
    </TimelineSequence>
    <TimelineSequence name="03-condition-forks" {...SCENES['condition-forks']}>
      <ConditionForkScene />
    </TimelineSequence>
    <TimelineSequence name="04-term-gates" {...SCENES['term-gates']}>
      <TermGateScene />
    </TimelineSequence>
  </AbsoluteFill>
);
