import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LegalPersonIndependenceHall} from './LegalPersonIndependenceHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LegalPersonIndependenceHall"
    component={withAnimationTypography(
      LegalPersonIndependenceHall,
      getAnimationTypographyConfiguration('legal-person-independence-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
