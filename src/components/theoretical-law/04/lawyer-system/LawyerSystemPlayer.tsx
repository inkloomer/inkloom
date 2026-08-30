import {LawyerSystem} from '@/animations/theoretical-law/04/lawyer-system/remotion/LawyerSystem';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/lawyer-system/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-qualification', number: '01', title: '律师的概念与执业资格', ...SCENES.conceptQualification},
  {id: 'license', number: '02', title: '申请领取律师执业证书', ...SCENES.license},
];

export const LawyerSystemPlayer = () => (
  <RemotionDeck
    animationId="lawyer-system"
    component={LawyerSystem}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="律师制度概述"
  />
);

export default LawyerSystemPlayer;
