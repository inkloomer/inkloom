import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {InsuranceContract} from '@/animations/commercial-law/24/insurance-contract/remotion/InsuranceContract';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/24/insurance-contract/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'insurance-contract-scene-01', number: '01', title: '成立与代签章', ...SCENES['insurance-contract-scene-01']},
  {id: 'insurance-contract-scene-02', number: '02', title: '内容冲突解释', ...SCENES['insurance-contract-scene-02']},
  {id: 'insurance-contract-scene-03', number: '03', title: '任意解除权', ...SCENES['insurance-contract-scene-03']},
  {id: 'insurance-contract-scene-04', number: '04', title: '保险人解除·人身', ...SCENES['insurance-contract-scene-04']},
  {id: 'insurance-contract-scene-05', number: '05', title: '财产险解除与行使条件', ...SCENES['insurance-contract-scene-05']},
];
export const InsuranceContractPlayer=()=> <RemotionDeck animationId="insurance-contract" title="保险合同总论" component={InsuranceContract} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default InsuranceContractPlayer;
