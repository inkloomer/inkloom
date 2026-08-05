import {typography} from '@/animations/civil-procedure/20/appeal-review-decision-map/animation.meta';
import {AppealReviewDecisionMap} from '@/animations/civil-procedure/20/appeal-review-decision-map/remotion/AppealReviewDecisionMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/20/appeal-review-decision-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'appeal-entry', number: '01', title: '上诉的主体、对象、期间与形式', ...SCENES.appealEntry},
  {id: 'party-position-impact-test', number: '02', title: '上诉人与被上诉人的角色判断', ...SCENES.partyPositionImpactTest},
  {id: 'request-scope', number: '03', title: '二审审理范围与审判组织', ...SCENES.requestScope},
  {id: 'new-matters-routing', number: '04', title: '二审新事项的调解路由', ...SCENES.newMattersRouting},
  {id: 'adjudication-switchboard', number: '05', title: '二审裁判方式', ...SCENES.adjudicationSwitchboard},
  {id: 'remand-and-exit-effects', number: '06', title: '发回重审、调解与撤回', ...SCENES.remandAndExitEffects},
];

export default () => <RemotionDeck animationId="appeal-review-decision-map" component={AppealReviewDecisionMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="二审程序" typography={typography} typographyScope={{animationId: 'appeal-review-decision-map', subject: 'civil-procedure', topic: '20'}} />;
