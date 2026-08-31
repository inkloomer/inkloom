import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {GuaranteeDepositSealDesk} from './GuaranteeDepositSealDesk';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="GuaranteeDepositSealDesk"
    component={withAnimationTypography(
      GuaranteeDepositSealDesk,
      getAnimationTypographyConfiguration('guarantee-deposit-seal-desk'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
