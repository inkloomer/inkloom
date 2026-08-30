import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {EmergencyDecisions} from './EmergencyDecisions';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="EmergencyDecisions"
    component={withAnimationTypography(
      EmergencyDecisions,
      getAnimationTypographyConfiguration('emergency-decisions'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
