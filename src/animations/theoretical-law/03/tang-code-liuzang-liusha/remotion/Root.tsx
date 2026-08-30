import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TangCodeLiuzangLiusha} from './TangCodeLiuzangLiusha';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="TangCodeLiuzangLiusha"
    component={withAnimationTypography(
      TangCodeLiuzangLiusha,
      getAnimationTypographyConfiguration('tang-code-liuzang-liusha'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
