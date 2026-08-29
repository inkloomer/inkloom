import {LegalPrinciples} from '@/animations/theoretical-law/01/legal-principles/remotion/LegalPrinciples';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-principles/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'dimension-compare', number: '01', title: '规则与原则对照表', ...SCENES.dimensionCompare},
  {id: 'all-or-weighing', number: '02', title: '闸刀与天平', ...SCENES.allOrWeighing},
  {id: 'threshold-conditions', number: '03', title: '两把钥匙一道门', ...SCENES.thresholdConditions},
];

export const LegalPrinciplesPlayer = () => (
  <RemotionDeck
    animationId="legal-principles"
    component={LegalPrinciples}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律原则：与规则的三维之别"
  />
);

export default LegalPrinciplesPlayer;
