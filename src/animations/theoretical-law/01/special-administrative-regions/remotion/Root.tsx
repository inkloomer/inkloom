import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SpecialAdministrativeRegions} from './SpecialAdministrativeRegions';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SpecialAdministrativeRegions"
    component={withAnimationTypography(
      SpecialAdministrativeRegions,
      getAnimationTypographyConfiguration('special-administrative-regions'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
