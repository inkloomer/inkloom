import {FunctionsOfLaw} from '@/animations/theoretical-law/01/functions-of-law/remotion/FunctionsOfLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/functions-of-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'two-layer-structure', number: '01', title: '两个层面：前提与目的', ...SCENES.twoLayerStructure},
  {id: 'five-guiding-functions', number: '02', title: '五作用的判断标志', ...SCENES.fiveGuidingFunctions},
  {id: 'evaluation-verdict-flow', number: '03', title: '评价作用：合法违法非对错', ...SCENES.evaluationVerdictFlow},
  {id: 'social-role-pillars', number: '04', title: '社会作用：两大支柱', ...SCENES.socialRolePillars},
];

export const FunctionsOfLawPlayer = () => (
  <RemotionDeck
    animationId="functions-of-law"
    component={FunctionsOfLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律的作用：规范五用与社会两柱"
  />
);

export default FunctionsOfLawPlayer;
