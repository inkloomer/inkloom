import {AppraisalOpinion} from '@/animations/civil-procedure/10/appraisal-opinion/remotion/AppraisalOpinion'; import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/appraisal-opinion/remotion/storyboard'; import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'initiation', number: '01', title: '鉴定的启动', ...SCENES.initiation},
  {id: 'preparation', number: '02', title: '鉴定人和材料', ...SCENES.preparation},
  {id: 'appearance-consequences', number: '03', title: '出庭费用与拒不出庭后果', ...SCENES.appearanceConsequences},
  {id: 'appearance-conditions', number: '04', title: '鉴定人应当出庭的情形', ...SCENES.appearanceConditions},
  {id: 'appearance-procedure', number: '05', title: '鉴定人出庭程序', ...SCENES.appearanceProcedure},
];
export default () => <RemotionDeck animationId="appraisal-opinion" component={AppraisalOpinion} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="鉴定意见规则" />;
