import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {GuaranteeParty} from '@/animations/guarantee-party/remotion/GuaranteeParty';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/guarantee-party/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '先诉抗辩权的保护', ...SCENES.general},
  {number: '02', title: '债权人享有选择权', ...SCENES.joint},
  {number: '03', title: '一般保证 vs 连带保证速记', ...SCENES.recap},
];

export const GuaranteePartyPlayer = () => (
  <RemotionDeck
    title="保证合同中的当事人确定"
    component={GuaranteeParty}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default GuaranteePartyPlayer;
