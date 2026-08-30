import {JudgeManagement} from '@/animations/theoretical-law/04/judge-management/remotion/JudgeManagement';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judge-management/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'selection', number: '01', title: '法官遴选', ...SCENES.selection},
  {id: 'assessment', number: '02', title: '法官考评', ...SCENES.assessment},
];

export const JudgeManagementPlayer = () => (
  <RemotionDeck
    animationId="judge-management"
    component={JudgeManagement}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法官(检察官)的管理制度"
  />
);

export default JudgeManagementPlayer;
