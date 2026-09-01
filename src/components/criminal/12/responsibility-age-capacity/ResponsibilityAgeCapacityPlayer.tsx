import {ResponsibilityAgeCapacity} from '@/animations/criminal/12/responsibility-age-capacity/remotion/ResponsibilityAgeCapacity';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/responsibility-age-capacity/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'two-stage-evaluation', number: '01', title: '两阶段评价：违法一起，责任独立', ...SCENES.twoStageEvaluation},
  {id: 'age-gap-co-principals', number: '02', title: '共同正犯·20岁甲＋10岁乙', ...SCENES.ageGapCoPrincipals},
  {id: 'capacity-gap-co-principals', number: '03', title: '共同正犯·有责任能力＋无责任能力', ...SCENES.capacityGapCoPrincipals},
  {id: 'helper-principal-pairs', number: '04', title: '帮助犯＋正犯：两种落差组合', ...SCENES.helperPrincipalPairs},
  {id: 'instigator-three-branches', number: '05', title: '教唆犯＋正犯：实行者状态三分支', ...SCENES.instigatorThreeBranches},
  {id: 'dominion-real-standard', number: '06', title: '区分标准：不看年龄，看支配力', ...SCENES.dominionRealStandard},
  {id: 'minor-adult-role-creed', number: '07', title: '总结口诀：小孩犯罪，大人角色', ...SCENES.minorAdultRoleCreed},
  {id: 'instigator-capacity-case', number: '08', title: '教唆犯（有责）＋正犯（无责）', ...SCENES.instigatorCapacityCase},
];

export const ResponsibilityAgeCapacityPlayer = () => <RemotionDeck animationId="responsibility-age-capacity" component={ResponsibilityAgeCapacity} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（三）：正犯的责任年龄和责任能力" />;
export default ResponsibilityAgeCapacityPlayer;
