import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {TrialProcedure} from '@/animations/civil-procedure/01/trial-procedure/remotion/TrialProcedure';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/trial-procedure/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'overview', number: '01', title: '什么是民事诉讼？', ...SCENES.overview},
  {id: 'taxonomy', number: '02', title: '诉讼程序与非讼程序', ...SCENES.taxonomy},
  {id: 'litigation', number: '03', title: '诉讼程序', ...SCENES.litigation},
  {id: 'non-litigation', number: '04', title: '非讼程序', ...SCENES.nonLitigation},
  {id: 'comparison', number: '05', title: '两类程序的核心区别', ...SCENES.comparison},
];

export const TrialProcedurePlayer = () => (
  <RemotionDeck
    title="民事审判程序分类"
    component={TrialProcedure}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TrialProcedurePlayer;
