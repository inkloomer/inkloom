import {SentencingMeasureHall} from '@/animations/criminal/15/sentencing-measure-hall/remotion/SentencingMeasureHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/15/sentencing-measure-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'sentiment-grade-scale', number: '01', title: '量刑情节·四档浓度', ...SCENES.sentimentGradeScale},
  {id: 'recidivist-gate-quads', number: '02', title: '累犯·四闸合验', ...SCENES.recidivistGateQuads},
  {id: 'surrender-fork-desk', number: '03', title: '自首·自动投案的窗口', ...SCENES.surrenderForkDesk},
  {id: 'merit-capture-desk', number: '04', title: '立功·五种功与边界', ...SCENES.meritCaptureDesk},
  {id: 'merge-probation-track', number: '05', title: '数罪并罚·缓刑', ...SCENES.mergeProbationTrack},
];

export const SentencingMeasureHallPlayer = () => <RemotionDeck animationId="sentencing-measure-hall" component={SentencingMeasureHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑罚的裁量：累犯·自首·立功·并罚·缓刑" />;
export default SentencingMeasureHallPlayer;
