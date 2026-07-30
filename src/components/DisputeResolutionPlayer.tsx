import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {DisputeResolution} from '@/animations/civil-procedure/01/dispute-resolution/remotion/DisputeResolution';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/dispute-resolution/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'overview', number: '01', title: '四种方式，层层递进', ...SCENES.overview},
  {id: 'mediation', number: '02', title: '和解 vs 调解', ...SCENES.mediation},
  {id: 'arbitration', number: '03', title: '仲裁 vs 诉讼', ...SCENES.arbitration},
  {id: 'comparison', number: '04', title: '四种方式的核心差异', ...SCENES.comparison},
];

export const DisputeResolutionPlayer = () => (
  <RemotionDeck
    title="多元纠纷解决机制"
    component={DisputeResolution}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DisputeResolutionPlayer;
