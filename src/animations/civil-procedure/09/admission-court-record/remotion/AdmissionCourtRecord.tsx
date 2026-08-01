import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AdmissionEffectScene, AdmissionOccasionsScene, AdmissionVetoScene, ConditionalAdmissionScene, WithdrawalCompromiseScene} from './scenes/AdmissionScenes';

export const AdmissionCourtRecord = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-admission-occasions" {...SCENES.admissionOccasions}><AdmissionOccasionsScene /></TimelineSequence>
    <TimelineSequence name="02-admission-effect" {...SCENES.admissionEffect}><AdmissionEffectScene /></TimelineSequence>
    <TimelineSequence name="03-admission-veto" {...SCENES.admissionVeto}><AdmissionVetoScene /></TimelineSequence>
    <TimelineSequence name="04-conditional-admission" {...SCENES.conditionalAdmission}><ConditionalAdmissionScene /></TimelineSequence>
    <TimelineSequence name="05-withdrawal-compromise" {...SCENES.withdrawalCompromise}><WithdrawalCompromiseScene /></TimelineSequence>
  </AbsoluteFill>
);
