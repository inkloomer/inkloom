import {LawFirmTypes} from '@/animations/theoretical-law/04/law-firm-types/remotion/LawFirmTypes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/law-firm-types/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'partnerships', number: '01', title: '合伙律师事务所', ...SCENES.partnerships},
  {id: 'individual-state', number: '02', title: '个人所·国资所', ...SCENES.individualState},
];

export const LawFirmTypesPlayer = () => (
  <RemotionDeck
    animationId="law-firm-types"
    component={LawFirmTypes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="律师事务所的分类和责任"
  />
);

export default LawFirmTypesPlayer;
