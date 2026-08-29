import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {JudicialVsAdministrative} from './JudicialVsAdministrative';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JudicialVsAdministrative"
    component={withAnimationTypography(
      JudicialVsAdministrative,
      getAnimationTypographyConfiguration('judicial-vs-administrative'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
