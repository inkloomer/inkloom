import {QuartzSproutGreenhouse} from '@/animations/commercial-economic-law/05/quartz-sprout-greenhouse/remotion/QuartzSproutGreenhouse';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/05/quartz-sprout-greenhouse/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'freeze-gate', number: '01', title: '未申报债权：冻结门与三句诀', ...SCENES.freezeGate},
  {id: 'investor-group', number: '02', title: '出资人组：双钥匙才能过', ...SCENES.investorGroup},
  {id: 'workbench', number: '03', title: '重整期间：借钱与取回质物', ...SCENES.workbench},
  {id: 'equity-gate', number: '04', title: '强制批准与债转股：终点站', ...SCENES.equityGate},
];

export const QuartzSproutGreenhousePlayer = () => <RemotionDeck animationId="quartz-sprout-greenhouse" component={QuartzSproutGreenhouse} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="破产法：重整" />;
export default QuartzSproutGreenhousePlayer;
