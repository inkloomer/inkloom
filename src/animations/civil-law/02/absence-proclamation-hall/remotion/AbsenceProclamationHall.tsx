import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {MissingPersonScene, PropertyCustodianScene} from './HallScenes';
import {DeathDeclarationScene, DeathEffectsScene, RescissionVerdictScene} from './HallDeepScenes';

export const AbsenceProclamationHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-missing-person-bench" {...SCENES['missing-person-bench']}>
      <MissingPersonScene />
    </TimelineSequence>
    <TimelineSequence name="02-property-custodian-desk" {...SCENES['property-custodian-desk']}>
      <PropertyCustodianScene />
    </TimelineSequence>
    <TimelineSequence name="03-death-declaration-gate" {...SCENES['death-declaration-gate']}>
      <DeathDeclarationScene />
    </TimelineSequence>
    <TimelineSequence name="04-death-effects-fork" {...SCENES['death-effects-fork']}>
      <DeathEffectsScene />
    </TimelineSequence>
    <TimelineSequence name="05-rescission-verdict-wall" {...SCENES['rescission-verdict-wall']}>
      <RescissionVerdictScene />
    </TimelineSequence>
  </AbsoluteFill>
);
