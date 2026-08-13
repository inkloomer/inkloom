import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyReorganization} from '@/animations/commercial-law/12/bankruptcy-reorganization/remotion/BankruptcyReorganization';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/12/bankruptcy-reorganization/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-reorganization-scene-01', number: '01', title: '重整程序流程', ...SCENES['bankruptcy-reorganization-scene-01']},
  {id: 'bankruptcy-reorganization-scene-02', number: '02', title: '分组表决', ...SCENES['bankruptcy-reorganization-scene-02']},
  {id: 'bankruptcy-reorganization-scene-03', number: '03', title: '重整期间的营业保护', ...SCENES['bankruptcy-reorganization-scene-03']},
];
export const BankruptcyReorganizationPlayer=()=> <RemotionDeck animationId="bankruptcy-reorganization" title="重整程序" component={BankruptcyReorganization} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyReorganizationPlayer;
