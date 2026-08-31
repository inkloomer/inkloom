import {PublicSafetyAlertBoard} from '@/animations/criminal/20/public-safety-alert-board/remotion/PublicSafetyAlertBoard';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/20/public-safety-alert-board/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'meaning-fire-rulers', number: '01', title: '公共安全·两把尺·放火罪', ...SCENES.meaningFireRulers},
  {id: 'danger-methods-floor', number: '02', title: '以危险方法危害公共安全罪·破坏型犯罪', ...SCENES.dangerMethodsFloor},
  {id: 'traffic-accident-ward', number: '03', title: '交通肇事罪：成立·逃逸·因逃逸致人死亡', ...SCENES.trafficAccidentWard},
  {id: 'driving-guns-safety', number: '04', title: '危险驾驶·枪支犯罪·安全生产犯罪', ...SCENES.drivingGunsSafety},
  {id: 'terror-alert-ward', number: '05', title: '恐怖型犯罪：组织·帮助·准备', ...SCENES.terrorAlertWard},
  {id: 'interfere-driving-panel', number: '06', title: '妨害安全驾驶罪：抢方向盘·互殴', ...SCENES.interfereDrivingPanel},
  {id: 'gun-factory-safety', number: '07', title: '枪支犯罪补充·安全生产犯罪收尾', ...SCENES.gunFactorySafety},
];

export const PublicSafetyAlertBoardPlayer = () => <RemotionDeck animationId="public-safety-alert-board" component={PublicSafetyAlertBoard} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="危害公共安全罪：两把尺·放火·危险方法·交通肇事" />;
export default PublicSafetyAlertBoardPlayer;
