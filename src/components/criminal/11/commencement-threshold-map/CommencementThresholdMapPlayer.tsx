import {CommencementThresholdMap} from '@/animations/criminal/11/commencement-threshold-map/remotion/CommencementThresholdMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/11/commencement-threshold-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'stage-boundary', number: '01', title: '区分标准：分界点在着手', ...SCENES.stageBoundary},
  {id: 'exam-commencement-map', number: '02', title: '易考情形：六条跑道的发令线', ...SCENES.examCommencementMap},
  {id: 'special-cases-lane', number: '03', title: '特殊问题：隔离犯与间接正犯', ...SCENES.specialCasesLane},
];

export const CommencementThresholdMapPlayer = () => <RemotionDeck animationId="commencement-threshold-map" component={CommencementThresholdMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="着手认定：预备与未遂的分界" />;
export default CommencementThresholdMapPlayer;
