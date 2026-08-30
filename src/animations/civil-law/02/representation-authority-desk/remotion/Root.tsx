import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {RepresentationAuthorityDesk} from './RepresentationAuthorityDesk';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RepresentationAuthorityDesk"
    component={withAnimationTypography(
      RepresentationAuthorityDesk,
      getAnimationTypographyConfiguration('representation-authority-desk'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
