import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AdmissionEffectScene, AdmissionOccasionsScene, AdmissionVetoScene} from './scenes/AdmissionScenes';

export const AdmissionCourtRecord = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-admission-occasions" {...SCENES.admissionOccasions}><AdmissionOccasionsScene /></TimelineSequence>
    <TimelineSequence name="02-admission-effect" {...SCENES.admissionEffect}><AdmissionEffectScene /></TimelineSequence>
    <TimelineSequence name="03-admission-veto" {...SCENES.admissionVeto}><AdmissionVetoScene /></TimelineSequence>
  </AbsoluteFill>
);
