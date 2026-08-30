import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NotaryRightsDuties} from './NotaryRightsDuties';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="NotaryRightsDuties"
    component={withAnimationTypography(
      NotaryRightsDuties,
      getAnimationTypographyConfiguration('notary-rights-duties'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
