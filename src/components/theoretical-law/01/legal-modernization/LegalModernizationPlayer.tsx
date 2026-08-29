import {LegalModernization} from '@/animations/theoretical-law/01/legal-modernization/remotion/LegalModernization';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-modernization/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'definition-classification', number: '01', title: '定义与动力分类', ...SCENES.definitionClassification},
  {id: 'process-friction', number: '02', title: '过程特点与阻碍', ...SCENES.processFriction},
  {id: 'modern-marks', number: '03', title: '现代化的三个标志', ...SCENES.modernMarks},
];

export const LegalModernizationPlayer = () => (
  <RemotionDeck
    animationId="legal-modernization"
    component={LegalModernization}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法的现代化：内发与外源"
  />
);

export default LegalModernizationPlayer;
