import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankingLaw} from '@/animations/economic-law/06/banking-law/remotion/BankingLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/06/banking-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'banking-law-scene-01', number: '01', title: '设立与拆借', ...SCENES['banking-law-scene-01']},
  {id: 'banking-law-scene-02', number: '02', title: '业务禁止', ...SCENES['banking-law-scene-02']},
  {id: 'banking-law-scene-03', number: '03', title: '披露与接管', ...SCENES['banking-law-scene-03']},
];
export const BankingLawPlayer=()=> <RemotionDeck animationId="banking-law" title="银行业法" component={BankingLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankingLawPlayer;
