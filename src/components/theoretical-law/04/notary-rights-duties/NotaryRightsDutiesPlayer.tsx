import {NotaryRightsDuties} from '@/animations/theoretical-law/04/notary-rights-duties/remotion/NotaryRightsDuties';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-rights-duties/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'rights', number: '01', title: '公证员的权利', ...SCENES.rights},
  {id: 'duties', number: '02', title: '公证员的禁止性义务', ...SCENES.duties},
];

export const NotaryRightsDutiesPlayer = () => (
  <RemotionDeck
    animationId="notary-rights-duties"
    component={NotaryRightsDuties}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公证员的权利和义务"
  />
);

export default NotaryRightsDutiesPlayer;
