import {PeriodCalculation} from '@/animations/civil-procedure/14/period-calculation/remotion/PeriodCalculation';
import {typography} from '@/animations/civil-procedure/14/period-calculation/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/14/period-calculation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'period-types', number: '01', title: '期间的来源与变更边界', ...SCENES.periodTypes},
  {id: 'counting-line', number: '02', title: '起算日与届满日', ...SCENES.countingLine},
  {id: 'holiday-and-mail', number: '03', title: '休假日与交邮规则', ...SCENES.holidayAndMail},
  {id: 'extension-request', number: '04', title: '耽误期间后的顺延', ...SCENES.extensionRequest},
];

export default () => <RemotionDeck animationId="period-calculation" component={PeriodCalculation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="期间计算与顺延" typography={typography} typographyScope={{animationId: 'period-calculation', subject: 'civil-procedure', topic: '14'}} />;
