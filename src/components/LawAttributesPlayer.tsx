import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {LawAttributes} from '@/animations/civil-procedure/01/law-attributes/remotion/LawAttributes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/law-attributes/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'overview', number: '01', title: '四重属性概览', ...SCENES.overview},
  {id: 'detail', number: '02', title: '区分标准详解', ...SCENES.detail},
  {id: 'summary', number: '03', title: '总结记忆', ...SCENES.summary},
];

export const LawAttributesPlayer = () => (
  <RemotionDeck
    title="民事诉讼法的四重属性"
    component={LawAttributes}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LawAttributesPlayer;
