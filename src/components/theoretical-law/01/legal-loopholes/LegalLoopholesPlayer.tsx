import {LegalLoopholes} from '@/animations/theoretical-law/01/legal-loopholes/remotion/LegalLoopholes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-loopholes/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-precondition', number: '01', title: '含义前提与判断', ...SCENES.conceptPrecondition},
  {id: 'classification-lattice', number: '02', title: '三组六种分类', ...SCENES.classificationLattice},
  {id: 'filling-methods', number: '03', title: '目的论扩张与限缩', ...SCENES.fillingMethods},
  {id: 'interpretation-boundary', number: '04', title: '与扩张限制解释之辨', ...SCENES.interpretationBoundary},
];

export const LegalLoopholesPlayer = () => (
  <RemotionDeck
    animationId="legal-loopholes"
    component={LegalLoopholes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律漏洞：识别与填补"
  />
);

export default LegalLoopholesPlayer;
