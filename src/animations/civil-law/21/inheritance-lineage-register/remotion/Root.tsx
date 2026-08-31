import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {InheritanceLineageRegister} from './InheritanceLineageRegister';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="InheritanceLineageRegister"
    component={withAnimationTypography(
      InheritanceLineageRegister,
      getAnimationTypographyConfiguration('inheritance-lineage-register'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
