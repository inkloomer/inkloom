import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NewDemocraticLegalSystem} from './NewDemocraticLegalSystem';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="NewDemocraticLegalSystem"
    component={withAnimationTypography(
      NewDemocraticLegalSystem,
      getAnimationTypographyConfiguration('new-democratic-legal-system'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
