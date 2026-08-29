import {StateSystem} from '@/animations/theoretical-law/01/state-system/remotion/StateSystem';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/state-system/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'state-definition', number: '01', title: '国体与人民民主专政', ...SCENES.stateDefinition},
  {id: 'multiparty', number: '02', title: '多党合作与政治协商', ...SCENES.multiparty},
  {id: 'front-cppcc', number: '03', title: '统一战线与政协', ...SCENES.frontCppcc},
];

export const StateSystemPlayer = () => (
  <RemotionDeck
    animationId="state-system"
    component={StateSystem}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="我国的国体：人民民主专政"
  />
);

export default StateSystemPlayer;
