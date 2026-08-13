import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ShareholderQualification} from '@/animations/commercial-law/03/shareholder-qualification/remotion/ShareholderQualification';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/03/shareholder-qualification/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'shareholder-qualification-scene-01', number: '01', title: '名册对内与登记对外', ...SCENES['shareholder-qualification-scene-01']},
  {id: 'shareholder-qualification-scene-02', number: '02', title: '身份冲突的处理', ...SCENES['shareholder-qualification-scene-02']},
  {id: 'shareholder-qualification-scene-03', number: '03', title: '受让人的权利起点', ...SCENES['shareholder-qualification-scene-03']},
];
export const ShareholderQualificationPlayer=()=> <RemotionDeck animationId="shareholder-qualification" title="股东资格认定" component={ShareholderQualification} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ShareholderQualificationPlayer;
