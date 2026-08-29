import {EconomicSystem} from '@/animations/theoretical-law/01/economic-system/remotion/EconomicSystem';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/economic-system/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'ownership-map', number: '01', title: '所有制三档归属', ...SCENES.ownershipMap},
  {id: 'three-economies', number: '02', title: '三种经济成分', ...SCENES.threeEconomies},
  {id: 'property-weimar', number: '03', title: '财产保护与魏玛', ...SCENES.propertyWeimar},
];

export const EconomicSystemPlayer = () => (
  <RemotionDeck
    animationId="economic-system"
    component={EconomicSystem}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="基本经济制度：所有制与财产"
  />
);

export default EconomicSystemPlayer;
