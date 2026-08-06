import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PartyDeathProcedureEffects} from './PartyDeathProcedureEffects';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="PartyDeathProcedureEffects"
    component={withAnimationTypography(
      PartyDeathProcedureEffects,
      getAnimationTypographyConfiguration('party-death-procedure-effects'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
