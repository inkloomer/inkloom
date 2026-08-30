import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CreditCardFraudScene} from './scenes-credit';
import {InsuranceLoanFraudScene} from './scenes-insurance';
import {MoneyLaunderingTaxScene} from './scenes-launder';
import {ProductionSmugglingScene} from './scenes-production';

export const EconCrimeFiling = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-production-smuggling" {...SCENES.productionSmuggling}><ProductionSmugglingScene /></TimelineSequence>
    <TimelineSequence name="02-credit-card-fraud" {...SCENES.creditCardFraud}><CreditCardFraudScene /></TimelineSequence>
    <TimelineSequence name="03-money-laundering-tax" {...SCENES.moneyLaunderingTax}><MoneyLaunderingTaxScene /></TimelineSequence>
    <TimelineSequence name="04-insurance-loan-fraud" {...SCENES.insuranceLoanFraud}><InsuranceLoanFraudScene /></TimelineSequence>
  </AbsoluteFill>
);
