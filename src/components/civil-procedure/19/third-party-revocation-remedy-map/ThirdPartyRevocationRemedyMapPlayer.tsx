import {typography} from '@/animations/civil-procedure/19/third-party-revocation-remedy-map/animation.meta';
import {ThirdPartyRevocationRemedyMap} from '@/animations/civil-procedure/19/third-party-revocation-remedy-map/remotion/ThirdPartyRevocationRemedyMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/19/third-party-revocation-remedy-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'standing-and-six-month-clock', number: '01', title: '起诉资格与六个月期间', ...SCENES.standingAndSixMonthClock},
  {id: 'nonacceptance-boundaries', number: '02', title: '不予受理的边界', ...SCENES.nonacceptanceBoundaries},
  {id: 'party-positions-and-execution', number: '03', title: '诉讼角色与执行救济', ...SCENES.partyPositionsAndExecution},
  {id: 'judgment-three-way', number: '04', title: '判决结果的三条路径', ...SCENES.judgmentThreeWay},
  {id: 'retrial-convergence', number: '05', title: '第三人撤销之诉与再审', ...SCENES.retrialConvergence},
];

export default () => <RemotionDeck animationId="third-party-revocation-remedy-map" component={ThirdPartyRevocationRemedyMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="第三人撤销之诉" typography={typography} typographyScope={{animationId: 'third-party-revocation-remedy-map', subject: 'civil-procedure', topic: '19'}} />;
