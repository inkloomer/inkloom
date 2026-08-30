import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LegalProfessionalEthics} from './LegalProfessionalEthics';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LegalProfessionalEthics"
    component={withAnimationTypography(
      LegalProfessionalEthics,
      getAnimationTypographyConfiguration('legal-professional-ethics'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
