import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {SecretsCrimesCompareScene} from './scenes-compare';
import {SecretsDefineBenchScene} from './scenes-secrets';
import {SpyWireTrioScene} from './scenes-spy';

export const StateSecurityWireRoom = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-spy-wire-trio" {...SCENES.spyWireTrio}><SpyWireTrioScene /></TimelineSequence>
    <TimelineSequence name="02-secrets-define-bench" {...SCENES.secretsDefineBench}><SecretsDefineBenchScene /></TimelineSequence>
    <TimelineSequence name="03-secrets-crimes-compare" {...SCENES.secretsCrimesCompare}><SecretsCrimesCompareScene /></TimelineSequence>
  </AbsoluteFill>
);
