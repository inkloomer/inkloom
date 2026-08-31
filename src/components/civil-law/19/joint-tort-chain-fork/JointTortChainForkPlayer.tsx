import {JointTortChainFork} from '@/animations/civil-law/19/joint-tort-chain-fork/remotion/JointTortChainFork';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/19/joint-tort-chain-fork/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'joint-tort-three-types',
    number: '01',
    title: '共同侵权的三种类型',
    ...SCENES['joint-tort-three-types'],
  },
  {
    id: 'combination-axis-split',
    number: '02',
    title: '无意思联络的行为结合',
    ...SCENES['combination-axis-split'],
  },
  {
    id: 'five-case-decision-tree',
    number: '03',
    title: '五情形判定',
    ...SCENES['five-case-decision-tree'],
  },
];

export const JointTortChainForkPlayer = () => (
  <RemotionDeck
    animationId="joint-tort-chain-fork"
    title="共同侵权——冷铁连责链"
    component={JointTortChainFork}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default JointTortChainForkPlayer;
