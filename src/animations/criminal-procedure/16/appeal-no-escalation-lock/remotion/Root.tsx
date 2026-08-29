import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AppealNoEscalationLock} from './AppealNoEscalationLock';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="AppealNoEscalationLock"
    component={withAnimationTypography(
      AppealNoEscalationLock,
      getAnimationTypographyConfiguration('appeal-no-escalation-lock'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
