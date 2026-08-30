import {NotaryRemedies} from '@/animations/theoretical-law/04/notary-remedies/remotion/NotaryRemedies';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-remedies/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'review', number: '01', title: '公证书的复查', ...SCENES.review},
  {id: 'refund-litigation', number: '02', title: '费用返还与内容争议诉讼', ...SCENES.refundLitigation},
];

export const NotaryRemediesPlayer = () => (
  <RemotionDeck
    animationId="notary-remedies"
    component={NotaryRemedies}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公证救济"
  />
);

export default NotaryRemediesPlayer;
