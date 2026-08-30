import {NotaryOrgans} from '@/animations/theoretical-law/04/notary-organs/remotion/NotaryOrgans';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-organs/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-setup', number: '01', title: '公证机构的概念与设立', ...SCENES.conceptSetup},
  {id: 'naming', number: '02', title: '冠名方式与字号限制', ...SCENES.naming},
];

export const NotaryOrgansPlayer = () => (
  <RemotionDeck
    animationId="notary-organs"
    component={NotaryOrgans}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公证机构"
  />
);

export default NotaryOrgansPlayer;
