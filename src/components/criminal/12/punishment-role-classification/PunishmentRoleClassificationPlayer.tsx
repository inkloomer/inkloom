import {PunishmentRoleClassification} from '@/animations/criminal/12/punishment-role-classification/remotion/PunishmentRoleClassification';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/punishment-role-classification/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'two-classification-methods', number: '01', title: '两套分类法：分工定角色，作用定处罚', ...SCENES.twoClassificationMethods},
  {id: 'ringleader-relations', number: '02', title: '主犯×首要分子：交叉而不重合', ...SCENES.ringleaderRelations},
  {id: 'ringleader-punishment', number: '03', title: '主犯的处罚：两条条文分工', ...SCENES.ringleaderPunishment},
  {id: 'accessory-coerced-roles', number: '04', title: '从犯与胁从犯：第27条·第28条', ...SCENES.accessoryCoercedRoles},
];

export const PunishmentRoleClassificationPlayer = () => <RemotionDeck animationId="punishment-role-classification" component={PunishmentRoleClassification} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（七）：处罚规定·主犯从犯胁从犯" />;
export default PunishmentRoleClassificationPlayer;
