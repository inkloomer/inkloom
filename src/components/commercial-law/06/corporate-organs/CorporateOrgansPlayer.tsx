import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CorporateOrgans} from '@/animations/commercial-law/06/corporate-organs/remotion/CorporateOrgans';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/06/corporate-organs/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'corporate-organs-scene-01', number: '01', title: '四层机构与人事权', ...SCENES['corporate-organs-scene-01']},
  {id: 'corporate-organs-scene-02', number: '02', title: '组成任期与解任辞任', ...SCENES['corporate-organs-scene-02']},
  {id: 'corporate-organs-scene-03', number: '03', title: '股东会的召集与表决', ...SCENES['corporate-organs-scene-03']},
];
export const CorporateOrgansPlayer=()=> <RemotionDeck animationId="corporate-organs" title="组织机构的性质、组成、职权及会议" component={CorporateOrgans} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CorporateOrgansPlayer;
