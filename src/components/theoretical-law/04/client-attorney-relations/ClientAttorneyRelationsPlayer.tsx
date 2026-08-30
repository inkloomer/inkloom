import {ClientAttorneyRelations} from '@/animations/theoretical-law/04/client-attorney-relations/remotion/ClientAttorneyRelations';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/client-attorney-relations/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'requirements', number: '01', title: '基本要求与接受委托的权限', ...SCENES.requirements},
  {id: 'conflict', number: '02', title: '利益冲突审查', ...SCENES.conflict},
  {id: 'misc-termination', number: '03', title: '其他规范与终止', ...SCENES.miscTermination},
];

export const ClientAttorneyRelationsPlayer = () => (
  <RemotionDeck
    animationId="client-attorney-relations"
    component={ClientAttorneyRelations}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="委托代理关系的规范要求"
  />
);

export default ClientAttorneyRelationsPlayer;
