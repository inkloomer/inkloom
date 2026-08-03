import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {OrdinaryProcedureControlMap} from './OrdinaryProcedureControlMap';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="OrdinaryProcedureControlMap"
    component={withAnimationTypography(
      OrdinaryProcedureControlMap,
      getAnimationTypographyConfiguration('ordinary-procedure-control-map'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
