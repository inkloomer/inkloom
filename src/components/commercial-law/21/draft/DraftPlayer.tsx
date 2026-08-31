import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {Draft} from '@/animations/commercial-law/21/draft/remotion/Draft';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/21/draft/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'draft-scene-01', number: '01', title: '出票', ...SCENES['draft-scene-01']},
  {id: 'draft-scene-02', number: '02', title: '背书', ...SCENES['draft-scene-02']},
  {id: 'draft-scene-03', number: '03', title: '承兑与保证', ...SCENES['draft-scene-03']},
];
export const DraftPlayer=()=> <RemotionDeck animationId="draft" title="汇票" component={Draft} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default DraftPlayer;
