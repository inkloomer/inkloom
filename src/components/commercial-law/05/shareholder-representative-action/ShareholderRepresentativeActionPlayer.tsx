import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ShareholderRepresentativeAction} from '@/animations/commercial-law/05/shareholder-representative-action/remotion/ShareholderRepresentativeAction';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/05/shareholder-representative-action/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'shareholder-representative-action-scene-01', number: '01', title: '前置程序与请求对象', ...SCENES['shareholder-representative-action-scene-01']},
  {id: 'shareholder-representative-action-scene-02', number: '02', title: '无需前置的例外', ...SCENES['shareholder-representative-action-scene-02']},
  {id: 'shareholder-representative-action-scene-03', number: '03', title: '诉讼主体与效果', ...SCENES['shareholder-representative-action-scene-03']},
];
export const ShareholderRepresentativeActionPlayer=()=> <RemotionDeck animationId="shareholder-representative-action" title="股东代表诉讼" component={ShareholderRepresentativeAction} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ShareholderRepresentativeActionPlayer;
