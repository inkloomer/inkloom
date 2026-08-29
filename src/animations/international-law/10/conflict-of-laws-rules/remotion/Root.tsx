import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ConflictOfLawsRules} from './ConflictOfLawsRules';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ConflictOfLawsRules"
    component={withAnimationTypography(ConflictOfLawsRules, getAnimationTypographyConfiguration('conflict-of-laws-rules'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
