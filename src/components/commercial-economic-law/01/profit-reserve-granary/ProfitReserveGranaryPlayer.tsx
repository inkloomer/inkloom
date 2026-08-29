import {ProfitReserveGranary} from '@/animations/commercial-economic-law/01/profit-reserve-granary/remotion/ProfitReserveGranary';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/profit-reserve-granary/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'allocation-flow', number: '01', title: '税后利润入仓：四道闸依次开', ...SCENES.allocationFlow},
  {id: 'reserve-math', number: '02', title: '法定公积金：先补亏，再提一成', ...SCENES.reserveMath},
  {id: 'reserve-trio', number: '03', title: '三仓对账：法定、任意、资本', ...SCENES.reserveTrio},
];

export const ProfitReserveGranaryPlayer = () => <RemotionDeck animationId="profit-reserve-granary" component={ProfitReserveGranary} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="税后利润分配：四道闸与公积金三仓" />;
export default ProfitReserveGranaryPlayer;
