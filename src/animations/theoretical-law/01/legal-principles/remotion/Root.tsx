import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LegalPrinciples} from './LegalPrinciples';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LegalPrinciples"
    component={withAnimationTypography(
      LegalPrinciples,
      getAnimationTypographyConfiguration('legal-principles'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
