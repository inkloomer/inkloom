import {CommencementThresholdMap} from '@/animations/criminal/11/commencement-threshold-map/remotion/CommencementThresholdMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/11/commencement-threshold-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'stage-boundary', number: '01', title: '区分标准：分界点在着手', ...SCENES.stageBoundary},
  {id: 'exam-commencement-map', number: '02', title: '易考情形：六条跑道的发令线', ...SCENES.examCommencementMap},
  {id: 'special-cases-lane', number: '03', title: '特殊问题：隔离犯与间接正犯', ...SCENES.specialCasesLane},
  {id: 'forms-overview', number: '04', title: '四种形态：一张赛道总览', ...SCENES.formsOverview},
  {id: 'preparation-gates', number: '05', title: '犯罪预备：三道门', ...SCENES.preparationGates},
  {id: 'preparation-stage-fork', number: '06', title: '预备阶段：被迫与自动的岔路', ...SCENES.preparationStageFork},
  {id: 'attempt-elements', number: '07', title: '犯罪未遂：着手与未得逞', ...SCENES.attemptElements},
  {id: 'impossibility-fork', number: '08', title: '不能犯：对象与手段的落空', ...SCENES.impossibilityFork},
  {id: 'danger-theories', number: '09', title: '危险判断：四种学说', ...SCENES.dangerTheories},
  {id: 'automatism-frank-formula', number: '10', title: '自动性：弗兰克公式', ...SCENES.automatismFrankFormula},
  {id: 'mistake-specific-object', number: '11', title: '认识错误与特定对象', ...SCENES.mistakeSpecificObject},
  {id: 'discontinuation-conduct', number: '12', title: '中止行为：终了与未终了', ...SCENES.discontinuationConduct},
  {id: 'effectiveness-matrix', number: '13', title: '有效性：四种结局', ...SCENES.effectivenessMatrix},
  {id: 'intervening-two-steps', number: '14', title: '介入因素：两步走', ...SCENES.interveningTwoSteps},
  {id: 'discontinuation-penalty', number: '15', title: '中止的处罚：损害范围', ...SCENES.discontinuationPenalty},
  {id: 'completion-elements', number: '16', title: '既遂认定：阶段与因果', ...SCENES.completionElements},
  {id: 'causation-chains', number: '17', title: '四罪因果链与断裂', ...SCENES.causationChains},
  {id: 'object-transfer', number: '18', title: '对象转移：财产与人事', ...SCENES.objectTransfer},
  {id: 'forms-exclusion', number: '19', title: '形态排斥：终局性判断', ...SCENES.formsExclusion},
  {id: 'repeat-attacks', number: '20', title: '重复侵害：间隔与终局', ...SCENES.repeatAttacks},
];

export const CommencementThresholdMapPlayer = () => <RemotionDeck animationId="commencement-threshold-map" component={CommencementThresholdMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="着手认定：预备与未遂的分界" />;
export default CommencementThresholdMapPlayer;
