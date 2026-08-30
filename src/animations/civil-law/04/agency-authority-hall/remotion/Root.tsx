import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AgencyAuthorityHall} from './AgencyAuthorityHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="AgencyAuthorityHall"
    component={withAnimationTypography(
      AgencyAuthorityHall,
      getAnimationTypographyConfiguration('agency-authority-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
