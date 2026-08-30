import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CapacityBirthDeathScene, CapacityThreeTierScene} from './RegistryScenes';
import {GuardianshipDutyScene, GuardianshipOrderScene, GuardianshipWillScene} from './RegistryDeepScenes';

export const CapacityGuardianshipRegistry = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-capacity-birth-death-gate" {...SCENES['capacity-birth-death-gate']}>
      <CapacityBirthDeathScene />
    </TimelineSequence>
    <TimelineSequence name="02-capacity-three-tier-bench" {...SCENES['capacity-three-tier-bench']}>
      <CapacityThreeTierScene />
    </TimelineSequence>
    <TimelineSequence name="03-guardianship-will-forks" {...SCENES['guardianship-will-forks']}>
      <GuardianshipWillScene />
    </TimelineSequence>
    <TimelineSequence name="04-guardianship-order-ladder" {...SCENES['guardianship-order-ladder']}>
      <GuardianshipOrderScene />
    </TimelineSequence>
    <TimelineSequence name="05-guardianship-duty-verdicts" {...SCENES['guardianship-duty-verdicts']}>
      <GuardianshipDutyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
