import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {GuaranteeAtriumBronzeware} from './GuaranteeAtriumBronzeware';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="GuaranteeAtriumBronzeware"
    component={withAnimationTypography(
      GuaranteeAtriumBronzeware,
      getAnimationTypographyConfiguration('guarantee-atrium-bronzeware'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
