import {JudgeQualifications} from '@/animations/theoretical-law/04/judge-qualifications/remotion/JudgeQualifications';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judge-qualifications/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'conditions', number: '01', title: '任职条件', ...SCENES.conditions},
  {id: 'avoidance', number: '02', title: '任职回避', ...SCENES.avoidance},
  {id: 'appointment', number: '03', title: '任免与奖惩保障', ...SCENES.appointment},
];

export const JudgeQualificationsPlayer = () => (
  <RemotionDeck
    animationId="judge-qualifications"
    component={JudgeQualifications}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法官的条件和任免"
  />
);

export default JudgeQualificationsPlayer;
