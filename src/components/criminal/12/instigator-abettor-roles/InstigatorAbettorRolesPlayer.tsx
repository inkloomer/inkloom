import {InstigatorAbettorRoles} from '@/animations/criminal/12/instigator-abettor-roles/remotion/InstigatorAbettorRoles';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/instigator-abettor-roles/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'instigator-essence', number: '01', title: '教唆犯·核心属性与要件', ...SCENES.instigatorEssence},
  {id: 'instigation-target-matrix', number: '02', title: '成立条件·六情形对照', ...SCENES.instigationTargetMatrix},
  {id: 'instigator-completion-case', number: '03', title: '既遂条件·杀老大爷案', ...SCENES.instigatorCompletionCase},
  {id: 'instigator-punishment', number: '04', title: '处罚·第29条三款', ...SCENES.instigatorPunishment},
  {id: 'abettor-essence', number: '05', title: '帮助犯·概念与成立两闸', ...SCENES.abettorEssence},
  {id: 'abettor-completion-models', number: '06', title: '既遂·五模型阶梯', ...SCENES.abettorCompletionModels},
  {id: 'psychological-help', number: '07', title: '心理性帮助与主观红线', ...SCENES.psychologicalHelp},
  {id: 'neutral-help-conduct', number: '08', title: '中立的帮助行为', ...SCENES.neutralHelpConduct},
];

export const InstigatorAbettorRolesPlayer = () => <RemotionDeck animationId="instigator-abettor-roles" component={InstigatorAbettorRoles} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（三）：教唆犯·帮助犯" />;
export default InstigatorAbettorRolesPlayer;
