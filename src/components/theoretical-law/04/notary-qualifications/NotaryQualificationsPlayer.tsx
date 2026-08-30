import {NotaryQualifications} from '@/animations/theoretical-law/04/notary-qualifications/remotion/NotaryQualifications';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-qualifications/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'conditions', number: '01', title: '公证员的条件与免职', ...SCENES.conditions},
  {id: 'procedure', number: '02', title: '公证员的申请程序', ...SCENES.procedure},
];

export const NotaryQualificationsPlayer = () => (
  <RemotionDeck
    animationId="notary-qualifications"
    component={NotaryQualifications}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公证员的条件、任免及申请程序"
  />
);

export default NotaryQualificationsPlayer;
