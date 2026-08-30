import {LawFirmEstablishment} from '@/animations/theoretical-law/04/law-firm-establishment/remotion/LawFirmEstablishment';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/law-firm-establishment/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'establishment', number: '01', title: '律师事务所的设立', ...SCENES.establishment},
  {id: 'change-terminate', number: '02', title: '变更与终止', ...SCENES.changeTerminate},
];

export const LawFirmEstablishmentPlayer = () => (
  <RemotionDeck
    animationId="law-firm-establishment"
    component={LawFirmEstablishment}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="律师事务所的设立、变更、终止"
  />
);

export default LawFirmEstablishmentPlayer;
