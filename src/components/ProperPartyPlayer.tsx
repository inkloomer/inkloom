import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {ProperParty} from '@/animations/proper-party/remotion/ProperParty';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/proper-party/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '谁是适格当事人？', ...SCENES.principle},
  {number: '02', title: '确认之诉的确认利益', ...SCENES.exception1},
  {number: '03', title: '对他人民事法律关系享有管理权', ...SCENES.exception2},
  {number: '04', title: '公益诉讼的适格原告', ...SCENES.exception3},
  {number: '05', title: '适格当事人 vs 诉讼权利能力', ...SCENES.recap},
];

export const ProperPartyPlayer = () => (
  <RemotionDeck
    title="当事人适格——原则与例外"
    component={ProperParty}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ProperPartyPlayer;
