import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {XiRuleOfLawCore} from './XiRuleOfLawCore';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="XiRuleOfLawCore"
    component={withAnimationTypography(
      XiRuleOfLawCore,
      getAnimationTypographyConfiguration('xi-rule-of-law-core'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
