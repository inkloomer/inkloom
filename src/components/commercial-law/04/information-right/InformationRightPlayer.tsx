import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {InformationRight} from '@/animations/commercial-law/04/information-right/remotion/InformationRight';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/04/information-right/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'information-right-scene-01', number: '01', title: '查阅对象的两条线路', ...SCENES['information-right-scene-01']},
  {id: 'information-right-scene-02', number: '02', title: '不正当目的与拒绝', ...SCENES['information-right-scene-02']},
  {id: 'information-right-scene-03', number: '03', title: '知情权诉讼', ...SCENES['information-right-scene-03']},
];
export const InformationRightPlayer=()=> <RemotionDeck animationId="information-right" title="知情权" component={InformationRight} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default InformationRightPlayer;
