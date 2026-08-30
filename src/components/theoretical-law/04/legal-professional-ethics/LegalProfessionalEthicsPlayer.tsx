import {LegalProfessionalEthics} from '@/animations/theoretical-law/04/legal-professional-ethics/remotion/LegalProfessionalEthics';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/legal-professional-ethics/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-features', number: '01', title: '主简五玉章：概念与特征', ...SCENES.conceptFeatures},
  {id: 'annotations', number: '02', title: '朱批三则：道德属性辨析', ...SCENES.annotations},
];

export const LegalProfessionalEthicsPlayer = () => (
  <RemotionDeck
    animationId="legal-professional-ethics"
    component={LegalProfessionalEthics}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律职业道德"
  />
);

export default LegalProfessionalEthicsPlayer;
