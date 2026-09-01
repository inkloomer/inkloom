import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ResponsibilityAgeCapacity} from './ResponsibilityAgeCapacity';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ResponsibilityAgeCapacity" component={withAnimationTypography(ResponsibilityAgeCapacity, getAnimationTypographyConfiguration('responsibility-age-capacity'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
