import {PropertyInterestsKeypoints} from '@/animations/criminal/19/property-interests-keypoints/remotion/PropertyInterestsKeypoints';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/criminal/19/property-interests-keypoints/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'claim-exchange',number:'01',title:'财产性利益的损失与获益',...SCENES.claimExchange},
  {id:'debt-regimes',number:'02',title:'三类债权保护边界',...SCENES.debtRegimes},
  {id:'deposit-transformation',number:'03',title:'现金转化为存款债权',...SCENES.depositTransformation},
  {id:'utility-classification',number:'04',title:'电力与网络行为定性',...SCENES.utilityClassification},
  {id:'illegal-possession-boundary',number:'05',title:'非法占有与非法请求权',...SCENES.illegalPossessionBoundary},
];
export const PropertyInterestsKeypointsPlayer=()=> <RemotionDeck animationId="property-interests-keypoints" component={PropertyInterestsKeypoints} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="财产性利益关键知识点"/>;
export default PropertyInterestsKeypointsPlayer;
