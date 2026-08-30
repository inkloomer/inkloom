import {LawyerFees} from '@/animations/theoretical-law/04/lawyer-fees/remotion/LawyerFees';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/lawyer-fees/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'principles-standard', number: '01', title: '收费的原则与标准', ...SCENES.principlesStandard},
  {id: 'risk-mode', number: '02', title: '风险代理与收费方式', ...SCENES.riskMode},
  {id: 'collect-supervise', number: '03', title: '收费的确定收取与监督', ...SCENES.collectSupervise},
];

export const LawyerFeesPlayer = () => (
  <RemotionDeck
    animationId="lawyer-fees"
    component={LawyerFees}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="律师收费制度"
  />
);

export default LawyerFeesPlayer;
