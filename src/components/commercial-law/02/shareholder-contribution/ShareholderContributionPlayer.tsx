import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ShareholderContribution} from '@/animations/commercial-law/02/shareholder-contribution/remotion/ShareholderContribution';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/02/shareholder-contribution/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'shareholder-contribution-scene-01', number: '01', title: '货币与非货币出资', ...SCENES['shareholder-contribution-scene-01']},
  {id: 'shareholder-contribution-scene-02', number: '02', title: '禁止出资的六项', ...SCENES['shareholder-contribution-scene-02']},
  {id: 'shareholder-contribution-scene-03', number: '03', title: '认缴制与实缴制', ...SCENES['shareholder-contribution-scene-03']},
];
export const ShareholderContributionPlayer=()=> <RemotionDeck animationId="shareholder-contribution" title="股东出资" component={ShareholderContribution} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ShareholderContributionPlayer;
