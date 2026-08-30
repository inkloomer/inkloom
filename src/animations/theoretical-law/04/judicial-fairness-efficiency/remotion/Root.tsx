import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {JudicialFairnessEfficiency} from './JudicialFairnessEfficiency';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JudicialFairnessEfficiency"
    component={withAnimationTypography(
      JudicialFairnessEfficiency,
      getAnimationTypographyConfiguration('judicial-fairness-efficiency'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
