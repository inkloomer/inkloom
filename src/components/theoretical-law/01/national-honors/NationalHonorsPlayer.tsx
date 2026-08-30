import {NationalHonors} from '@/animations/theoretical-law/01/national-honors/remotion/NationalHonors';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/national-honors/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'motions', number: '01', title: '铜牌数字门：301·10·103团', ...SCENES.motions},
  {id: 'honoring', number: '02', title: '勋章授予金线三步', ...SCENES.honoring},
];

export const NationalHonorsPlayer = () => (
  <RemotionDeck
    animationId="national-honors"
    component={NationalHonors}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="国家勋章与国家荣誉称号"
  />
);

export default NationalHonorsPlayer;
