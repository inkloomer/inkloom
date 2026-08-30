import {LacquerSealBureau} from '@/animations/commercial-economic-law/06/lacquer-seal-bureau/remotion/LacquerSealBureau';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/06/lacquer-seal-bureau/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'guaranty-features', number: '01', title: '票据保证三特征', ...SCENES.guarantyFeatures},
  {id: 'agency-nontransfer', number: '02', title: '越权代理与记载不得转让', ...SCENES.agencyNontransfer},
];

export const LacquerSealBureauPlayer = () => <RemotionDeck animationId="lacquer-seal-bureau" component={LacquerSealBureau} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="票据法：汇票行为" />;
export default LacquerSealBureauPlayer;
