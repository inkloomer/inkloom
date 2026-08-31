import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  AnimalGuardianScene,
  CrossroadsScene,
  EmploymentLiabilityScene,
  FallingObjectScene,
  PollutionPresumptionScene,
} from './SpecialTortWarningMapScenes';

export const SpecialTortWarningMap = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-employment-liability-lane" {...SCENES['employment-liability-lane']}>
      <EmploymentLiabilityScene />
    </TimelineSequence>
    <TimelineSequence name="02-pollution-presumption-causeway" {...SCENES['pollution-presumption-causeway']}>
      <PollutionPresumptionScene />
    </TimelineSequence>
    <TimelineSequence name="03-falling-object-hazard-ladder" {...SCENES['falling-object-hazard-ladder']}>
      <FallingObjectScene />
    </TimelineSequence>
    <TimelineSequence name="04-animal-guardian-paddock" {...SCENES['animal-guardian-paddock']}>
      <AnimalGuardianScene />
    </TimelineSequence>
    <TimelineSequence name="05-crossroads-traffic-medical-product" {...SCENES['crossroads-traffic-medical-product']}>
      <CrossroadsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
