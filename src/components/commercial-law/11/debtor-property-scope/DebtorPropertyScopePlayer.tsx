import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {DebtorPropertyScope} from '@/animations/commercial-law/11/debtor-property-scope/remotion/DebtorPropertyScope';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/11/debtor-property-scope/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'debtor-property-scope-scene-01', number: '01', title: '所有权标准', ...SCENES['debtor-property-scope-scene-01']},
  {id: 'debtor-property-scope-scene-02', number: '02', title: '属于债务人财产', ...SCENES['debtor-property-scope-scene-02']},
  {id: 'debtor-property-scope-scene-03', number: '03', title: '不属于债务人财产', ...SCENES['debtor-property-scope-scene-03']},
];
export const DebtorPropertyScopePlayer=()=> <RemotionDeck animationId="debtor-property-scope" title="债务人财产的范围" component={DebtorPropertyScope} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default DebtorPropertyScopePlayer;
