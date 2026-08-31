import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {BriberyTradeDeskScene} from './scenes-bribery';
import {BriberyVerdictFloorScene} from './scenes-bribery-verdict';
import {EmbezzlementElementsScene} from './scenes-embezzlement';
import {EmbezzlementVerdictScene} from './scenes-embezzlement-verdict';
import {InfluenceTrioMapScene} from './scenes-influence';
import {MisuseFundLaneScene} from './scenes-misuse';
import {UnexplainedAssetLedgerScene} from './scenes-unexplained-asset';

export const PowerMoneyExchange = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-embezzlement-elements" {...SCENES.embezzlementElements}><EmbezzlementElementsScene /></TimelineSequence>
    <TimelineSequence name="02-embezzlement-verdict" {...SCENES.embezzlementVerdict}><EmbezzlementVerdictScene /></TimelineSequence>
    <TimelineSequence name="03-misuse-fund-lane" {...SCENES.misuseFundLane}><MisuseFundLaneScene /></TimelineSequence>
    <TimelineSequence name="04-bribery-trade-desk" {...SCENES.briberyTradeDesk}><BriberyTradeDeskScene /></TimelineSequence>
    <TimelineSequence name="05-bribery-verdict-floor" {...SCENES.briberyVerdictFloor}><BriberyVerdictFloorScene /></TimelineSequence>
    <TimelineSequence name="06-influence-trio-map" {...SCENES.influenceTrioMap}><InfluenceTrioMapScene /></TimelineSequence>
    <TimelineSequence name="07-unexplained-asset-ledger" {...SCENES.unexplainedAssetLedger}><UnexplainedAssetLedgerScene /></TimelineSequence>
  </AbsoluteFill>
);
