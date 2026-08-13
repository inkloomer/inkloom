import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyAdministrator} from '@/animations/commercial-law/09/bankruptcy-administrator/remotion/BankruptcyAdministrator';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/09/bankruptcy-administrator/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-administrator-scene-01', number: '01', title: '管理人由法院指定', ...SCENES['bankruptcy-administrator-scene-01']},
  {id: 'bankruptcy-administrator-scene-02', number: '02', title: '双务合同的选择权', ...SCENES['bankruptcy-administrator-scene-02']},
  {id: 'bankruptcy-administrator-scene-03', number: '03', title: '管理人的四舱职权', ...SCENES['bankruptcy-administrator-scene-03']},
];
export const BankruptcyAdministratorPlayer=()=> <RemotionDeck animationId="bankruptcy-administrator" title="管理人" component={BankruptcyAdministrator} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyAdministratorPlayer;
