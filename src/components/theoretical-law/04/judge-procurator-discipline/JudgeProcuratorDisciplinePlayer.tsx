import {JudgeProcuratorDiscipline} from '@/animations/theoretical-law/04/judge-procurator-discipline/remotion/JudgeProcuratorDiscipline';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judge-procurator-discipline/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'setup-members', number: '01', title: '设置与组成', ...SCENES.setupMembers},
  {id: 'duties-source', number: '02', title: '职责与案件来源', ...SCENES.dutiesSource},
  {id: 'decide-remedy', number: '03', title: '审议·决定·救济', ...SCENES.decideRemedy},
];

export const JudgeProcuratorDisciplinePlayer = () => (
  <RemotionDeck
    animationId="judge-procurator-discipline"
    component={JudgeProcuratorDiscipline}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="检察官惩戒委员会(与法官惩戒相同)"
  />
);

export default JudgeProcuratorDisciplinePlayer;
