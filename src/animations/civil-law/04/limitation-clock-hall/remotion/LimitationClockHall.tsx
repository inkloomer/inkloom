import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ConceptScopeScene} from './LimitationScenes';
import {
  ExpiryEffectScene,
  InterruptionScene,
  StartPointsScene,
  SuspensionScene,
} from './LimitationDeepScenes';

export const LimitationClockHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-scope-gate" {...SCENES['concept-scope-gate']}>
      <ConceptScopeScene />
    </TimelineSequence>
    <TimelineSequence name="02-expiry-effect-desk" {...SCENES['expiry-effect-desk']}>
      <ExpiryEffectScene />
    </TimelineSequence>
    <TimelineSequence name="03-start-points-ladder" {...SCENES['start-points-ladder']}>
      <StartPointsScene />
    </TimelineSequence>
    <TimelineSequence name="04-suspension-window" {...SCENES['suspension-window']}>
      <SuspensionScene />
    </TimelineSequence>
    <TimelineSequence name="05-interruption-ledger" {...SCENES['interruption-ledger']}>
      <InterruptionScene />
    </TimelineSequence>
  </AbsoluteFill>
);
