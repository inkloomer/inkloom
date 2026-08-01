import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ThirdPartyRevocation} from './ThirdPartyRevocation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ThirdPartyRevocation"
    component={withAnimationTypography(ThirdPartyRevocation, getAnimationTypographyConfiguration('third-party-revocation'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
