import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SecurityPublicityFate} from './SecurityPublicityFate';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SecurityPublicityFate"
    component={withAnimationTypography(
      SecurityPublicityFate,
      getAnimationTypographyConfiguration('security-publicity-fate'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
