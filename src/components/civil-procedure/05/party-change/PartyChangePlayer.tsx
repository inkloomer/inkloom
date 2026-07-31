import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartyChange} from '@/animations/civil-procedure/05/party-change/remotion/PartyChange';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/05/party-change/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'change-types', number: '01', title: '当事人变更有哪些情形？', ...SCENES.concept},
  {id: 'succession', number: '02', title: '自然人死亡与法人合并分立', ...SCENES.death},
  {id: 'substantive-transfer', number: '03', title: '实体权利义务转移怎么办？', ...SCENES.transfer},
  {id: 'party-constancy', number: '04', title: '当事人恒定主义速记', ...SCENES.recap},
];

export const PartyChangePlayer = () => (
  <RemotionDeck
    animationId="party-change"
    title="当事人变更与当事人恒定主义"
    component={PartyChange}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PartyChangePlayer;
