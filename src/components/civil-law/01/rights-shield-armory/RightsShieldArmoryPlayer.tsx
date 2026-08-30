import {
  RightsShieldArmory,
} from '@/animations/civil-law/01/rights-shield-armory/remotion/RightsShieldArmory';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/01/rights-shield-armory/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'dominion-request-contrast',
    number: '01',
    title: '权利二分对照',
    ...SCENES['dominion-request-contrast'],
  },
  {
    id: 'three-request-lanes',
    number: '02',
    title: '三大请求车道',
    ...SCENES['three-request-lanes'],
  },
  {
    id: 'return-nuisance-danger-forks',
    number: '03',
    title: '返还与妨害分叉',
    ...SCENES['return-nuisance-danger-forks'],
  },
  {
    id: 'defence-formative-powers',
    number: '04',
    title: '抗辩与形成',
    ...SCENES['defence-formative-powers'],
  },
  {
    id: 'self-help-triple-stand',
    number: '05',
    title: '私力三武台',
    ...SCENES['self-help-triple-stand'],
  },
];

export const RightsShieldArmoryPlayer = () => (
  <RemotionDeck
    animationId="rights-shield-armory"
    title="民事权利及其私力保护——矛与盾的武库"
    component={RightsShieldArmory}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RightsShieldArmoryPlayer;
