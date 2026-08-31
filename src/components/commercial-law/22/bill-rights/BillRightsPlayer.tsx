import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BillRights} from '@/animations/commercial-law/22/bill-rights/remotion/BillRights';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/22/bill-rights/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bill-rights-scene-01', number: '01', title: '两顺序权利', ...SCENES['bill-rights-scene-01']},
  {id: 'bill-rights-scene-02', number: '02', title: '权利取得', ...SCENES['bill-rights-scene-02']},
  {id: 'bill-rights-scene-03', number: '03', title: '伪造变造更改', ...SCENES['bill-rights-scene-03']},
  {id: 'bill-rights-scene-04', number: '04', title: '抗辩与补救', ...SCENES['bill-rights-scene-04']},
];
export const BillRightsPlayer=()=> <RemotionDeck animationId="bill-rights" title="票据权利和效力" component={BillRights} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BillRightsPlayer;
