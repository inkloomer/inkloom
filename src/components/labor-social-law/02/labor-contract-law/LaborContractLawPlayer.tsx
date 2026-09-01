import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {LaborContractLaw} from '@/animations/labor-social-law/02/labor-contract-law/remotion/LaborContractLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/labor-social-law/02/labor-contract-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'labor-contract-law-scene-01', number: '01', title: '订立与无固定', ...SCENES['labor-contract-law-scene-01']},
  {id: 'labor-contract-law-scene-02', number: '02', title: '试用期服务期', ...SCENES['labor-contract-law-scene-02']},
  {id: 'labor-contract-law-scene-03', number: '03', title: '竞业与派遣', ...SCENES['labor-contract-law-scene-03']},
  {id: 'labor-contract-law-scene-04', number: '04', title: '非全日制', ...SCENES['labor-contract-law-scene-04']},
  {id: 'labor-contract-law-scene-05', number: '05', title: '解除与补偿', ...SCENES['labor-contract-law-scene-05']},
];
export const LaborContractLawPlayer=()=> <RemotionDeck animationId="labor-contract-law" title="劳动合同法" component={LaborContractLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default LaborContractLawPlayer;
