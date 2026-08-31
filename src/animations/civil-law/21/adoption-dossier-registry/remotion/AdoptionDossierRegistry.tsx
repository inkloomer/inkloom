import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ConditionTriptychScene, FormationConsentGateScene, TerminationForkScene} from './AdoptionDossierScenes';

export const AdoptionDossierRegistry = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-condition-triptych" {...SCENES['condition-triptych']}>
      <ConditionTriptychScene />
    </TimelineSequence>
    <TimelineSequence name="02-formation-consent-gate" {...SCENES['formation-consent-gate']}>
      <FormationConsentGateScene />
    </TimelineSequence>
    <TimelineSequence name="03-termination-fork" {...SCENES['termination-fork']}>
      <TerminationForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
