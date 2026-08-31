import {PowerMoneyExchange} from '@/animations/criminal/23/power-money-exchange/remotion/PowerMoneyExchange';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/23/power-money-exchange/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'embezzlement-elements', number: '01', title: '贪污罪·构成要件', ...SCENES.embezzlementElements},
  {id: 'embezzlement-verdict', number: '02', title: '贪污罪·认定问题', ...SCENES.embezzlementVerdict},
  {id: 'misuse-fund-lane', number: '03', title: '挪用公款罪', ...SCENES.misuseFundLane},
  {id: 'bribery-trade-desk', number: '04', title: '受贿罪·交易结构', ...SCENES.briberyTradeDesk},
  {id: 'bribery-verdict-floor', number: '05', title: '受贿罪·罪数问题', ...SCENES.briberyVerdictFloor},
  {id: 'influence-trio-map', number: '06', title: '行贿罪·斡旋受贿·利用影响力受贿罪', ...SCENES.influenceTrioMap},
  {id: 'unexplained-asset-ledger', number: '07', title: '巨额财产来源不明罪', ...SCENES.unexplainedAssetLedger},
];

export const PowerMoneyExchangePlayer = () => <RemotionDeck animationId="power-money-exchange" component={PowerMoneyExchange} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="贪污贿赂罪：贪污·挪用公款·受贿·行贿" />;
export default PowerMoneyExchangePlayer;
