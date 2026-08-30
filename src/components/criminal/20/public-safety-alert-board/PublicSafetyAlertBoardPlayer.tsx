import {PublicSafetyAlertBoard} from '@/animations/criminal/20/public-safety-alert-board/remotion/PublicSafetyAlertBoard';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/20/public-safety-alert-board/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'meaning-fire-rulers', number: '01', title: '公共安全·两把尺·放火罪', ...SCENES.meaningFireRulers},
  {id: 'danger-methods-floor', number: '02', title: '以危险方法危害公共安全罪·破坏型犯罪', ...SCENES.dangerMethodsFloor},
  {id: 'traffic-accident-ward', number: '03', title: '交通肇事罪：成立·逃逸·因逃逸致人死亡', ...SCENES.trafficAccidentWard},
  {id: 'driving-guns-safety', number: '04', title: '危险驾驶·枪支犯罪·安全生产犯罪', ...SCENES.drivingGunsSafety},
];

export const PublicSafetyAlertBoardPlayer = () => <RemotionDeck animationId="public-safety-alert-board" component={PublicSafetyAlertBoard} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="危害公共安全罪：两把尺·放火·危险方法·交通肇事" />;
export default PublicSafetyAlertBoardPlayer;
