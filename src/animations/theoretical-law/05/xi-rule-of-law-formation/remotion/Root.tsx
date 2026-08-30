import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {XiRuleOfLawFormation} from './XiRuleOfLawFormation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="XiRuleOfLawFormation"
    component={withAnimationTypography(
      XiRuleOfLawFormation,
      getAnimationTypographyConfiguration('xi-rule-of-law-formation'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
