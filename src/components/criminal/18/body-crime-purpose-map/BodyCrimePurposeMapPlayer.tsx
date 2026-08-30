import {BodyCrimePurposeMap} from '@/animations/criminal/18/body-crime-purpose-map/remotion/BodyCrimePurposeMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/18/body-crime-purpose-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'life-body-ward', number: '01', title: '故意杀人罪与故意伤害罪', ...SCENES.lifeBodyWard},
  {id: 'sexual-autonomy-ward', number: '02', title: '强奸罪·负有照护职责人员性侵罪·猥亵类犯罪', ...SCENES.sexualAutonomyWard},
  {id: 'unlawful-detention-ward', number: '03', title: '非法拘禁罪：欺骗·加重·拟制', ...SCENES.unlawfulDetentionWard},
  {id: 'kidnapping-purpose-ward', number: '04', title: '绑架罪：目的二·人质·结合犯', ...SCENES.kidnappingPurposeWard},
  {id: 'traffic-sell-purpose-ward', number: '05', title: '拐卖·收买·拐骗：目的定罪名', ...SCENES.trafficSellPurposeWard},
];

export const BodyCrimePurposeMapPlayer = () => <RemotionDeck animationId="body-crime-purpose-map" component={BodyCrimePurposeMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="人身犯罪：生命身体·性权利·实力控制类犯罪" />;
export default BodyCrimePurposeMapPlayer;
