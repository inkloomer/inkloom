import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {Securities} from '@/animations/commercial-law/28/securities/remotion/Securities';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/28/securities/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'securities-scene-01', number: '01', title: '证券发行', ...SCENES['securities-scene-01']},
  {id: 'securities-scene-02', number: '02', title: '证券承销', ...SCENES['securities-scene-02']},
  {id: 'securities-scene-03', number: '03', title: '证券交易', ...SCENES['securities-scene-03']},
  {id: 'securities-scene-04', number: '04', title: '上市收购', ...SCENES['securities-scene-04']},
  {id: 'securities-scene-05', number: '05', title: '信息公开', ...SCENES['securities-scene-05']},
  {id: 'securities-scene-06', number: '06', title: '投资者保护', ...SCENES['securities-scene-06']},
];
export const SecuritiesPlayer=()=> <RemotionDeck animationId="securities" title="证券法" component={Securities} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default SecuritiesPlayer;
