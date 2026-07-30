import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {LawsuitElements} from '@/animations/civil-procedure/02/lawsuit-elements/remotion/LawsuitElements';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/02/lawsuit-elements/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '诉讼标的 ≠ 诉讼请求', ...SCENES.concept},
  {id: 'distinction', number: '02', title: '一个标的 · 多个请求', ...SCENES.distinction},
  {id: 'classification', number: '03', title: '唯一依据：原告诉讼请求', ...SCENES.classification},
  {id: 'transformation', number: '04', title: '请求变 · 标的可不变', ...SCENES.transformation},
  {id: 'recap', number: '05', title: '标的 → 请求 → 分类', ...SCENES.recap},
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
