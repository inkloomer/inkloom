import {FeaturesOfConstitution} from '@/animations/theoretical-law/01/features-of-constitution/remotion/FeaturesOfConstitution';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/features-of-constitution/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'fundamental-law', number: '01', title: '根本法三个最', ...SCENES.fundamentalLaw},
  {id: 'charter-quote', number: '02', title: '公民权利保障书', ...SCENES.charterQuote},
  {id: 'boundaries-fundamentals', number: '03', title: '效力分界与三个最根本', ...SCENES.boundaryFundamentals},
];

export const FeaturesOfConstitutionPlayer = () => (
  <RemotionDeck
    animationId="features-of-constitution"
    component={FeaturesOfConstitution}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="宪法的特征：国家根本法"
  />
);

export default FeaturesOfConstitutionPlayer;
