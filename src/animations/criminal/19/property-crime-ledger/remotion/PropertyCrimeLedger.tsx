import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {InterestThreeModelsScene} from './scenes-interest';
import {PossessionPurposeWardScene} from './scenes-purpose';
import {TheftTransferPeaceScene} from './scenes-theft';
import {RobberyCoercionStepsScene} from './scenes-robbery';
import {FraudExtortionSplitScene} from './scenes-fraud';
import {EmbezzlementTrustLedgerScene} from './scenes-embezzlement';
import {SnatchViolenceLaneScene} from './scenes-snatch';
import {RobberyAggravationBoardScene} from './scenes-aggravation';
import {ExtortionWillFreedomScene} from './scenes-extortion';
import {MinorCrimesCompletionScene} from './scenes-minor';
import {CompletionControlLatticeScene} from './scenes-completion';

export const PropertyCrimeLedger = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-interest-three-models" {...SCENES.interestThreeModels}><InterestThreeModelsScene /></TimelineSequence>
    <TimelineSequence name="02-possession-purpose-ward" {...SCENES.possessionPurposeWard}><PossessionPurposeWardScene /></TimelineSequence>
    <TimelineSequence name="03-theft-transfer-peace" {...SCENES.theftTransferPeace}><TheftTransferPeaceScene /></TimelineSequence>
    <TimelineSequence name="04-robbery-coercion-steps" {...SCENES.robberyCoercionSteps}><RobberyCoercionStepsScene /></TimelineSequence>
    <TimelineSequence name="05-fraud-extortion-split" {...SCENES.fraudExtortionSplit}><FraudExtortionSplitScene /></TimelineSequence>
    <TimelineSequence name="06-embezzlement-trust-ledger" {...SCENES.embezzlementTrustLedger}><EmbezzlementTrustLedgerScene /></TimelineSequence>
    <TimelineSequence name="07-snatch-violence-lane" {...SCENES.snatchViolenceLane}><SnatchViolenceLaneScene /></TimelineSequence>
    <TimelineSequence name="08-robbery-aggravation-board" {...SCENES.robberyAggravationBoard}><RobberyAggravationBoardScene /></TimelineSequence>
    <TimelineSequence name="09-extortion-will-freedom" {...SCENES.extortionWillFreedom}><ExtortionWillFreedomScene /></TimelineSequence>
    <TimelineSequence name="10-minor-crimes-completion" {...SCENES.minorCrimesCompletion}><MinorCrimesCompletionScene /></TimelineSequence>
    <TimelineSequence name="11-completion-control-lattice" {...SCENES.completionControlLattice}><CompletionControlLatticeScene /></TimelineSequence>
  </AbsoluteFill>
);
