import {TortLiabilityScaleHall} from '@/animations/civil-law/18/tort-liability-scale-hall/remotion/TortLiabilityScaleHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/18/tort-liability-scale-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'tort-definition-bench',
    number: '01',
    title: '侵权责任的概念与形态',
    ...SCENES['tort-definition-bench'],
  },
  {
    id: 'principle-switchboard',
    number: '02',
    title: '归责原则体系',
    ...SCENES['principle-switchboard'],
  },
  {
    id: 'damages-twin-bench',
    number: '03',
    title: '财产损害与精神损害赔偿',
    ...SCENES['damages-twin-bench'],
  },
  {
    id: 'claim-fork-immunity-gates',
    number: '04',
    title: '请求权的性质与免责事由',
    ...SCENES['claim-fork-immunity-gates'],
  },
];

export const TortLiabilityScaleHallPlayer = () => (
  <RemotionDeck
    animationId="tort-liability-scale-hall"
    title="侵权一般理论——绛紫天平堂"
    component={TortLiabilityScaleHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TortLiabilityScaleHallPlayer;
