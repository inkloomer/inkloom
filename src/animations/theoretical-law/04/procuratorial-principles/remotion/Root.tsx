import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ProcuratorialPrinciples} from './ProcuratorialPrinciples';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ProcuratorialPrinciples"
    component={withAnimationTypography(
      ProcuratorialPrinciples,
      getAnimationTypographyConfiguration('procuratorial-principles'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
