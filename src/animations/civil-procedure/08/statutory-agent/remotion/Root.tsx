import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {StatutoryAgent} from './StatutoryAgent';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="StatutoryAgent" component={withAnimationTypography(StatutoryAgent, getAnimationTypographyConfiguration('statutory-agent'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;

