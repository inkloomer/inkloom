import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ZhouLegalHistory} from './ZhouLegalHistory';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ZhouLegalHistory"
    component={withAnimationTypography(
      ZhouLegalHistory,
      getAnimationTypographyConfiguration('zhou-legal-history'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
