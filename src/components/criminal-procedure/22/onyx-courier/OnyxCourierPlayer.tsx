import {
  OnyxCourier,
} from '@/animations/criminal-procedure/22/onyx-courier/remotion/OnyxCourier';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/22/onyx-courier/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'eligibility-panorama',
    number: '01',
    title: '适用对象全景',
    ...SCENES['eligibility-panorama'],
  },
  {
    id: 'state-terror-corruption-deep-dive',
    number: '02',
    title: '国恐贪四条件详解',
    ...SCENES['state-terror-corruption-deep-dive'],
  },
  {
    id: 'procedural-safeguards-chain',
    number: '03',
    title: '程序保障链',
    ...SCENES['procedural-safeguards-chain'],
  },
  {
    id: 'appearance-confiscation-link',
    number: '04',
    title: '到案后与没收衔接',
    ...SCENES['appearance-confiscation-link'],
  },
];

export const OnyxCourierPlayer = () => (
  <RemotionDeck
    animationId="onyx-courier"
    title="缺席审判程序：适用对象、国恐贪四条件、程序保障链与到案后没收衔接"
    component={OnyxCourier}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default OnyxCourierPlayer;
