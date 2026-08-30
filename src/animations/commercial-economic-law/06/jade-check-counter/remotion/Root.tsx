import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {JadeCheckCounter} from './JadeCheckCounter';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="JadeCheckCounter" component={withAnimationTypography(JadeCheckCounter, getAnimationTypographyConfiguration('jade-check-counter'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
