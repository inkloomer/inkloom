import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CitizenFundamentalRights} from './CitizenFundamentalRights';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CitizenFundamentalRights"
    component={withAnimationTypography(
      CitizenFundamentalRights,
      getAnimationTypographyConfiguration('citizen-fundamental-rights'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
