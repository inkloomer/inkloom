import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {InterestThreeModelsScene} from './scenes-interest';
import {PossessionPurposeWardScene} from './scenes-purpose';
import {TheftTransferPeaceScene} from './scenes-theft';
import {RobberyCoercionStepsScene} from './scenes-robbery';
import {FraudExtortionSplitScene} from './scenes-fraud';

export const PropertyCrimeLedger = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-interest-three-models" {...SCENES.interestThreeModels}><InterestThreeModelsScene /></TimelineSequence>
    <TimelineSequence name="02-possession-purpose-ward" {...SCENES.possessionPurposeWard}><PossessionPurposeWardScene /></TimelineSequence>
    <TimelineSequence name="03-theft-transfer-peace" {...SCENES.theftTransferPeace}><TheftTransferPeaceScene /></TimelineSequence>
    <TimelineSequence name="04-robbery-coercion-steps" {...SCENES.robberyCoercionSteps}><RobberyCoercionStepsScene /></TimelineSequence>
    <TimelineSequence name="05-fraud-extortion-split" {...SCENES.fraudExtortionSplit}><FraudExtortionSplitScene /></TimelineSequence>
  </AbsoluteFill>
);
