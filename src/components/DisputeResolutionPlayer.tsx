import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {DisputeResolution} from '@/animations/civil-procedure/01/dispute-resolution/remotion/DisputeResolution';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/dispute-resolution/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'spectrum', number: '01', title: '四条路径光谱', ...SCENES.spectrum},
  {id: 'informal', number: '02', title: '和解 · 调解', ...SCENES.informal},
  {id: 'formal', number: '03', title: '仲裁 · 诉讼', ...SCENES.formal},
  {id: 'enforceability', number: '04', title: '执行力与司法确认', ...SCENES.enforceability},
  {id: 'recap', number: '05', title: '四路径总览', ...SCENES.recap},
];

export const DisputeResolutionPlayer = () => (
  <RemotionDeck
    animationId="dispute-resolution"
    title="多元纠纷解决机制"
    component={DisputeResolution}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DisputeResolutionPlayer;
