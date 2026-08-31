import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartnershipEstablishment} from '@/animations/commercial-law/13/partnership-establishment/remotion/PartnershipEstablishment';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/13/partnership-establishment/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'partnership-establishment-scene-01', number: '01', title: '普通合伙与有限合伙', ...SCENES['partnership-establishment-scene-01']},
  {id: 'partnership-establishment-scene-02', number: '02', title: '合伙人资格', ...SCENES['partnership-establishment-scene-02']},
  {id: 'partnership-establishment-scene-03', number: '03', title: '设立：协议·名称·登记', ...SCENES['partnership-establishment-scene-03']},
];
export const PartnershipEstablishmentPlayer=()=> <RemotionDeck animationId="partnership-establishment" title="合伙企业的设立" component={PartnershipEstablishment} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PartnershipEstablishmentPlayer;
