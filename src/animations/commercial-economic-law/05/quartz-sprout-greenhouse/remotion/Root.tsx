import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {QuartzSproutGreenhouse} from './QuartzSproutGreenhouse';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="QuartzSproutGreenhouse" component={withAnimationTypography(QuartzSproutGreenhouse, getAnimationTypographyConfiguration('quartz-sprout-greenhouse'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
