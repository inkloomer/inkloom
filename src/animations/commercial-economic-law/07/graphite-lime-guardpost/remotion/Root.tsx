import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {GraphiteLimeGuardpost} from './GraphiteLimeGuardpost';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="GraphiteLimeGuardpost" component={withAnimationTypography(GraphiteLimeGuardpost, getAnimationTypographyConfiguration('graphite-lime-guardpost'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
