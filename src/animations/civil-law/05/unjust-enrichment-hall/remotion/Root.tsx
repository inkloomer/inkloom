import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {UnjustEnrichmentHall} from './UnjustEnrichmentHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="UnjustEnrichmentHall"
    component={withAnimationTypography(
      UnjustEnrichmentHall,
      getAnimationTypographyConfiguration('unjust-enrichment-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
