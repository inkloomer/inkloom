import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {OrgansRelayMap} from './OrgansRelayMap';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="OrgansRelayMap"
    component={withAnimationTypography(
      OrgansRelayMap,
      getAnimationTypographyConfiguration('organs-relay-map'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
