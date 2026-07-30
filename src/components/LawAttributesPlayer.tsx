import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {LawAttributes} from '@/animations/civil-procedure/01/law-attributes/remotion/LawAttributes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/law-attributes/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'overview', number: '01', title: '四重属性，四个角度', ...SCENES.overview},
  {id: 'standard', number: '02', title: '四重属性的判断依据', ...SCENES.standard},
  {id: 'recap', number: '03', title: '四重属性速记', ...SCENES.recap},
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
