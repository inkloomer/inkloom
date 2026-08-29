import {FeaturesOfLaw} from '@/animations/theoretical-law/01/features-of-law/remotion/FeaturesOfLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/features-of-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'normativity-scope', number: '01', title: '规范性：只调整行为', ...SCENES.normativityScope},
  {id: 'state-will-paths', number: '02', title: '国家意志性：制定或认可', ...SCENES.stateWillPaths},
  {id: 'universality-equal', number: '03', title: '普遍性：权力所及，平等约束', ...SCENES.universalityEqual},
  {id: 'rights-duties-matrix', number: '04', title: '权利义务性：内容之别', ...SCENES.rightsDutiesMatrix},
  {id: 'coercion-justiciability', number: '05', title: '国家强制性 与 可诉性', ...SCENES.coercionJusticiability},
];

export const FeaturesOfLawPlayer = () => (
  <RemotionDeck
    animationId="features-of-law"
    component={FeaturesOfLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律的特征：六特征与共性判别"
  />
);

export default FeaturesOfLawPlayer;
