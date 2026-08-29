import {LegalFamilies} from '@/animations/theoretical-law/01/legal-families/remotion/LegalFamilies';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-families/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'family-gates', number: '01', title: '法系与三大法系', ...SCENES.familyGates},
  {id: 'twin-crests', number: '02', title: '民法法系与普通法法系', ...SCENES.twinCrests},
  {id: 'macro-lanes', number: '03', title: '两大法系的宏观区别', ...SCENES.macroLanes},
  {id: 'degree-footnotes', number: '04', title: '点睛：程度差异与融合', ...SCENES.degreeFootnotes},
];

export const LegalFamiliesPlayer = () => (
  <RemotionDeck
    animationId="legal-families"
    component={LegalFamilies}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="资本主义社会的两大法系"
  />
);

export default LegalFamiliesPlayer;
