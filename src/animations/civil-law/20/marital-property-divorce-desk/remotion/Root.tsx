import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {MaritalPropertyDivorceDesk} from './MaritalPropertyDivorceDesk';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="MaritalPropertyDivorceDesk"
    component={withAnimationTypography(
      MaritalPropertyDivorceDesk,
      getAnimationTypographyConfiguration('marital-property-divorce-desk'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
