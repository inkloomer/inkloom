import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {OtherRegimesInternationalEconomicLaw} from './OtherRegimesInternationalEconomicLaw';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="OtherRegimesInternationalEconomicLaw"
    component={withAnimationTypography(OtherRegimesInternationalEconomicLaw, getAnimationTypographyConfiguration('other-regimes-international-economic-law'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
