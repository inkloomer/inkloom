import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {LpLoungeLimitedPartner} from './LpLoungeLimitedPartner';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="LpLoungeLimitedPartner" component={withAnimationTypography(LpLoungeLimitedPartner, getAnimationTypographyConfiguration('lp-lounge-limited-partner'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
