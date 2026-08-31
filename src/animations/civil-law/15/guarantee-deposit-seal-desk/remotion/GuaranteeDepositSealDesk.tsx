import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  DepositPenaltyScene,
  GuaranteeConceptScene,
  GuaranteeLiabilityScene,
  GuaranteePeriodScene,
} from './GuaranteeDepositSealDeskScenes';

export const GuaranteeDepositSealDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-guarantee-concept-fork" {...SCENES['guarantee-concept-fork']}>
      <GuaranteeConceptScene />
    </TimelineSequence>
    <TimelineSequence name="02-guarantee-liability-lanes" {...SCENES['guarantee-liability-lanes']}>
      <GuaranteeLiabilityScene />
    </TimelineSequence>
    <TimelineSequence name="03-guarantee-period-clock-bank" {...SCENES['guarantee-period-clock-bank']}>
      <GuaranteePeriodScene />
    </TimelineSequence>
    <TimelineSequence name="04-deposit-penalty-counter" {...SCENES['deposit-penalty-counter']}>
      <DepositPenaltyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
