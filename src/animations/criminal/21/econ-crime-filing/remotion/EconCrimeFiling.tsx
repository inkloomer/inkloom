import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CompanyOrderScene} from './scenes-company-order';
import {CreditCardFraudScene} from './scenes-credit';
import {CurrencyNotesScene} from './scenes-currency';
import {IpCrimesScene} from './scenes-ip';
import {MarketOrderScene} from './scenes-market';
import {TaxRebateFundScene} from './scenes-tax';
import {InsuranceLoanFraudScene} from './scenes-insurance';
import {MoneyLaunderingTaxScene} from './scenes-launder';
import {ProductionSmugglingScene} from './scenes-production';

export const EconCrimeFiling = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-production-smuggling" {...SCENES.productionSmuggling}><ProductionSmugglingScene /></TimelineSequence>
    <TimelineSequence name="02-credit-card-fraud" {...SCENES.creditCardFraud}><CreditCardFraudScene /></TimelineSequence>
    <TimelineSequence name="03-money-laundering-tax" {...SCENES.moneyLaunderingTax}><MoneyLaunderingTaxScene /></TimelineSequence>
    <TimelineSequence name="04-insurance-loan-fraud" {...SCENES.insuranceLoanFraud}><InsuranceLoanFraudScene /></TimelineSequence>
    <TimelineSequence name="05-company-order" {...SCENES.companyOrder}><CompanyOrderScene /></TimelineSequence>
    <TimelineSequence name="06-currency-notes" {...SCENES.currencyNotes}><CurrencyNotesScene /></TimelineSequence>
    <TimelineSequence name="07-tax-rebate-fund" {...SCENES.taxRebateFund}><TaxRebateFundScene /></TimelineSequence>
    <TimelineSequence name="08-ip-crimes" {...SCENES.ipCrimes}><IpCrimesScene /></TimelineSequence>
    <TimelineSequence name="09-market-order" {...SCENES.marketOrder}><MarketOrderScene /></TimelineSequence>
  </AbsoluteFill>
);
