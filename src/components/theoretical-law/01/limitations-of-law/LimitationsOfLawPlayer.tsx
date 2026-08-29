import {LimitationsOfLaw} from '@/animations/theoretical-law/01/limitations-of-law/remotion/LimitationsOfLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/limitations-of-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'social-complexity-cards', number: '01', title: '来源一：社会本身的复杂', ...SCENES.socialComplexityCards},
  {id: 'law-own-limit-rows', number: '02', title: '来源二：法律自身的五重限制', ...SCENES.lawOwnLimitRows},
  {id: 'wrong-view-guards', number: '03', title: '立场：反对两个极端', ...SCENES.wrongViewGuards},
  {id: 'inspiration-mitigation-bench', number: '04', title: '启发与缓解', ...SCENES.inspirationMitigationBench},
];

export const LimitationsOfLawPlayer = () => (
  <RemotionDeck
    animationId="limitations-of-law"
    component={LimitationsOfLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律作用的局限性：两大来源与正确立场"
  />
);

export default LimitationsOfLawPlayer;
