import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {LawsuitElements} from '@/animations/civil-procedure/02/lawsuit-elements/remotion/LawsuitElements';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/02/lawsuit-elements/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '诉的两大核心', ...SCENES.concept},
  {id: 'distinction', number: '02', title: '标的是关系，请求是主张', ...SCENES.distinction},
  {id: 'transformation', number: '03', title: '请求变，标的可不变', ...SCENES.transformation},
  {id: 'recap', number: '04', title: '三者关系总图', ...SCENES.recap},
];

export const LawsuitElementsPlayer = () => (
  <RemotionDeck
    title="诉讼标的、诉讼请求与诉的分类"
    component={LawsuitElements}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LawsuitElementsPlayer;
