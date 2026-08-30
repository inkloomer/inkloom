import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {InterestRightsBalance} from './InterestRightsBalance';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="InterestRightsBalance" component={withAnimationTypography(InterestRightsBalance, getAnimationTypographyConfiguration('interest-rights-balance'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
