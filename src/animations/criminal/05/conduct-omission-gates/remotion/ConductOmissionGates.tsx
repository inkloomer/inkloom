import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ActFeaturesTriTestScene, VictimSelfRiskForkScene} from './scenes-conduct';
import {OmissionFamilyMapScene} from './scenes-omission';
import {AbilityErrorGateScene, DutyStreamSourcesScene} from './scenes-duty';

export const ConductOmissionGates = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-act-features-tri-test" {...SCENES.actFeaturesTriTest}><ActFeaturesTriTestScene /></TimelineSequence>
    <TimelineSequence name="02-victim-self-risk-fork" {...SCENES.victimSelfRiskFork}><VictimSelfRiskForkScene /></TimelineSequence>
    <TimelineSequence name="03-omission-family-map" {...SCENES.omissionFamilyMap}><OmissionFamilyMapScene /></TimelineSequence>
    <TimelineSequence name="04-duty-stream-sources" {...SCENES.dutyStreamSources}><DutyStreamSourcesScene /></TimelineSequence>
    <TimelineSequence name="05-ability-error-gate" {...SCENES.abilityErrorGate}><AbilityErrorGateScene /></TimelineSequence>
  </AbsoluteFill>
);
