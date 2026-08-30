import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {RepublicConstitutionHistory} from './RepublicConstitutionHistory';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RepublicConstitutionHistory"
    component={withAnimationTypography(
      RepublicConstitutionHistory,
      getAnimationTypographyConfiguration('republic-constitution-history'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
