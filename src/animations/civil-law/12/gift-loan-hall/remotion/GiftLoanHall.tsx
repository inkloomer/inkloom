import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {GiftRevocationDuoScene, LoanFormationScene, LoanInterestScene, ObligationOrderScene, StatutoryRevocationScene} from './GiftLoanScenes';

export const GiftLoanHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-gift-revocation-duo" {...SCENES['gift-revocation-duo']}>
      <GiftRevocationDuoScene />
    </TimelineSequence>
    <TimelineSequence name="02-statutory-revocation" {...SCENES['statutory-revocation']}>
      <StatutoryRevocationScene />
    </TimelineSequence>
    <TimelineSequence name="03-obligation-condition-order" {...SCENES['obligation-condition-order']}>
      <ObligationOrderScene />
    </TimelineSequence>
    <TimelineSequence name="04-loan-formation-invalidity" {...SCENES['loan-formation-invalidity']}>
      <LoanFormationScene />
    </TimelineSequence>
    <TimelineSequence name="05-loan-interest-rules" {...SCENES['loan-interest-rules']}>
      <LoanInterestScene />
    </TimelineSequence>
  </AbsoluteFill>
);
