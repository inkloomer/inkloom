import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {DisputeResolution} from '@/animations/civil-procedure/01/dispute-resolution/remotion/DisputeResolution';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/dispute-resolution/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'spectrum', number: '01', title: '从非正式到正式', ...SCENES.spectrum},
  {id: 'settlement-mediation', number: '02', title: '和解 · 调解', ...SCENES.settlementMediation},
  {id: 'arbitration-litigation', number: '03', title: '仲裁 · 诉讼', ...SCENES.arbitrationLitigation},
  {id: 'enforceability', number: '04', title: '四种方式的执行力', ...SCENES.enforceability},
  {id: 'recap', number: '05', title: '总结', ...SCENES.recap},
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
