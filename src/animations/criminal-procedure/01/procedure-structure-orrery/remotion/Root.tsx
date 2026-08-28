import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ProcedureStructureOrrery} from './ProcedureStructureOrrery';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ProcedureStructureOrrery"
    component={withAnimationTypography(
      ProcedureStructureOrrery,
      getAnimationTypographyConfiguration('procedure-structure-orrery'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
