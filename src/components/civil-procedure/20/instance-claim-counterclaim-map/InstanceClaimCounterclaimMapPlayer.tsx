import {typography} from '@/animations/civil-procedure/20/instance-claim-counterclaim-map/animation.meta';
import {InstanceClaimCounterclaimMap} from '@/animations/civil-procedure/20/instance-claim-counterclaim-map/remotion/InstanceClaimCounterclaimMap';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/20/instance-claim-counterclaim-map/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'overview',number:'01',title:'三审级并置：各自考量原则',...SCENES.overview},
  {id:'first-instance',number:'02',title:'一审：法庭辩论终结前的请求窗口',...SCENES.firstInstance},
  {id:'second-instance',number:'03',title:'二审：调解、另诉与一并裁判',...SCENES.secondInstance},
  {id:'retrial',number:'04',title:'再审：范围有限原则与四例外',...SCENES.retrial},
];
export default ()=> <RemotionDeck animationId="instance-claim-counterclaim-map" component={InstanceClaimCounterclaimMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="一审、二审、再审中增加、变更诉讼请求、提出反诉" typography={typography} typographyScope={{animationId:'instance-claim-counterclaim-map',subject:'civil-procedure',topic:'20'}}/>;
