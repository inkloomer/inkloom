import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {QingDynastyExamples} from './QingDynastyExamples';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="QingDynastyExamples"
    component={withAnimationTypography(
      QingDynastyExamples,
      getAnimationTypographyConfiguration('qing-dynasty-examples'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
