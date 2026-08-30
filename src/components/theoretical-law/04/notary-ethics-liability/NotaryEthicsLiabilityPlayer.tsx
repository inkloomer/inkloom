import {NotaryEthicsLiability} from '@/animations/theoretical-law/04/notary-ethics-liability/remotion/NotaryEthicsLiability';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-ethics-liability/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'ethics-penalties', number: '01', title: '职业道德与职业责任', ...SCENES.ethicsPenalties},
  {id: 'civil-criminal', number: '02', title: '民事·刑事责任', ...SCENES.civilCriminal},
];

export const NotaryEthicsLiabilityPlayer = () => (
  <RemotionDeck
    animationId="notary-ethics-liability"
    component={NotaryEthicsLiability}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公证员职业道德与职业责任"
  />
);

export default NotaryEthicsLiabilityPlayer;
