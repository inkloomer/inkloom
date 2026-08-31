import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartnershipPropertyDistribution} from '@/animations/commercial-law/14/partnership-property-distribution/remotion/PartnershipPropertyDistribution';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/14/partnership-property-distribution/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'partnership-property-distribution-scene-01', number: '01', title: '财产与份额转让', ...SCENES['partnership-property-distribution-scene-01']},
  {id: 'partnership-property-distribution-scene-02', number: '02', title: '出质与继承', ...SCENES['partnership-property-distribution-scene-02']},
  {id: 'partnership-property-distribution-scene-03', number: '03', title: '损益分配', ...SCENES['partnership-property-distribution-scene-03']},
];
export const PartnershipPropertyDistributionPlayer=()=> <RemotionDeck animationId="partnership-property-distribution" title="财产与损益分配" component={PartnershipPropertyDistribution} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PartnershipPropertyDistributionPlayer;
