import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LawFirmEstablishment} from './LawFirmEstablishment';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LawFirmEstablishment"
    component={withAnimationTypography(
      LawFirmEstablishment,
      getAnimationTypographyConfiguration('law-firm-establishment'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
