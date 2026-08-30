import {QingDynastyExamples} from '@/animations/theoretical-law/03/qing-dynasty-examples/remotion/QingDynastyExamples';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/qing-dynasty-examples/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'four-types', number: '01', title: '清代的例：四种形式', ...SCENES.fourTypes},
  {id: 'distinctions', number: '02', title: '区分要点', ...SCENES.distinctions},
  {id: 'exam-tips', number: '03', title: '考试聚焦', ...SCENES.examTips},
];

export const QingDynastyExamplesPlayer = () => (
  <RemotionDeck
    animationId="qing-dynasty-examples"
    component={QingDynastyExamples}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="清代的例：条例·则例·事例·成例"
  />
);

export default QingDynastyExamplesPlayer;
