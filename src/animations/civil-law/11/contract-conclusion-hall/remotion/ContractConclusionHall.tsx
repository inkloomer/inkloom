import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BidAuctionAdsScene, FutureContractScene, OfferAcceptanceScene, StandardClauseScene} from './ContractConclusionScenes';

export const ContractConclusionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-offer-acceptance-chain" {...SCENES['offer-acceptance-chain']}>
      <OfferAcceptanceScene />
    </TimelineSequence>
    <TimelineSequence name="02-bid-auction-ads" {...SCENES['bid-auction-ads']}>
      <BidAuctionAdsScene />
    </TimelineSequence>
    <TimelineSequence name="03-standard-clauses-court" {...SCENES['standard-clauses-court']}>
      <StandardClauseScene />
    </TimelineSequence>
    <TimelineSequence name="04-future-contract-split" {...SCENES['future-contract-split']}>
      <FutureContractScene />
    </TimelineSequence>
  </AbsoluteFill>
);
