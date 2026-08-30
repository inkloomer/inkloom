import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {JudicialSystemOverview} from './JudicialSystemOverview';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JudicialSystemOverview"
    component={withAnimationTypography(
      JudicialSystemOverview,
      getAnimationTypographyConfiguration('judicial-system-overview'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
