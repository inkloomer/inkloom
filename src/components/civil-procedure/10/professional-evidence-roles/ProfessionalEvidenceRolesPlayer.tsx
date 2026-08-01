import {ProfessionalEvidenceRoles} from '@/animations/civil-procedure/10/professional-evidence-roles/remotion/ProfessionalEvidenceRoles'; import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/professional-evidence-roles/remotion/storyboard'; import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'role-targets', number: '01', title: '三类人员分别帮助谁', ...SCENES.roleTargets},
  {id: 'initiation-recusal', number: '02', title: '启动与回避', ...SCENES.initiationRecusal},
  {id: 'private-opinion', number: '03', title: '自行委托鉴定意见书', ...SCENES.privateOpinion},
];
export default () => <RemotionDeck animationId="professional-evidence-roles" component={ProfessionalEvidenceRoles} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="三类专业人员的区分" />;
